
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface SimpleAuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SimpleAuthDialog({ open, onOpenChange }: SimpleAuthDialogProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { toast } = useToast();

  const handleAuth = async (event: React.FormEvent<HTMLFormElement>, type: 'signin' | 'signup') => {
    event.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const cleanupAuthState = () => {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
          localStorage.removeItem(key);
        }
      });
      try {
        Object.keys(sessionStorage || {}).forEach((key) => {
          if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
            sessionStorage.removeItem(key);
          }
        });
      } catch (error) {
        // Session storage might not be available
      }
    };

    try {
      if (type === 'signin') {
        cleanupAuthState();
        
        try {
          await supabase.auth.signOut({ scope: 'global' });
        } catch (err) {
          // Continue even if this fails
        }

        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          if (error.message.includes('email not confirmed')) {
            toast({ 
              title: "Email not verified", 
              description: "Please check your email and click the verification link before signing in.", 
              variant: "destructive" 
            });
            return;
          }
          throw error;
        }
        
        if (data.user) {
          toast({ title: "Welcome back!", description: "You've been signed in successfully." });
          onOpenChange(false);
          setTimeout(() => {
            window.location.href = '/';
          }, 500);
        }
      } else {
        cleanupAuthState();
        
        const { data, error } = await supabase.auth.signUp({ 
          email, 
          password,
          options: { emailRedirectTo: `${window.location.origin}/` }
        });
        if (error) throw error;
        
        if (data.user && !data.session) {
          toast({ 
            title: "Check your email!", 
            description: "We've sent you a verification link. Please verify your email before signing in." 
          });
          onOpenChange(false);
        } else if (data.session) {
          toast({ title: "Account created!", description: "Welcome to your expedition journey!" });
          onOpenChange(false);
          setTimeout(() => {
            window.location.href = '/';
          }, 500);
        }
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    try {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
          localStorage.removeItem(key);
        }
      });
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`
        }
      });
      if (error) throw error;
    } catch (error: any) {
      console.error('Google auth error:', error);
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <div className="p-6">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">
              {isSignUp ? "Create Account" : "Sign In"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {isSignUp ? "Join our expedition community" : "Welcome back to your adventure"}
            </p>
          </div>

          <div className="flex mb-6 bg-muted rounded-lg p-1">
            <Button
              variant={!isSignUp ? "default" : "ghost"}
              className="flex-1"
              onClick={() => setIsSignUp(false)}
            >
              Sign In
            </Button>
            <Button
              variant={isSignUp ? "default" : "ghost"}
              className="flex-1"
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </Button>
          </div>

          <Button
            onClick={handleGoogleAuth}
            variant="outline"
            className="w-full mb-4"
            disabled={isLoading}
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </Button>

          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
            </div>
          </div>

          <form onSubmit={(e) => handleAuth(e, isSignUp ? 'signup' : 'signin')} className="space-y-4">
            {isSignUp && (
              <Input
                name="fullName"
                type="text"
                placeholder="Full Name"
                required
              />
            )}
            <Input
              name="email"
              type="email"
              placeholder="Email"
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              required
            />

            {isSignUp && (
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(!!checked)}
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>
            )}

            {!isSignUp && (
              <p className="text-sm text-muted-foreground text-center cursor-pointer hover:text-primary">
                Forgot Your Password?
              </p>
            )}

            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading || (isSignUp && !acceptTerms)}
            >
              {isLoading ? (isSignUp ? "Creating..." : "Signing in...") : (isSignUp ? "Create Account" : "Sign In")}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
