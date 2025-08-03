import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, User, Lock, Eye, EyeOff, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface SlidingAuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SlidingAuthDialog({ open, onOpenChange }: SlidingAuthDialogProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { toast } = useToast();

  const handleAuth = async (event: React.FormEvent<HTMLFormElement>, type: 'signin' | 'signup') => {
    event.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Clean up existing auth state first
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
        // Clean up state before signing in
        cleanupAuthState();
        
        // Attempt global sign out first
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
          // Force page reload for clean state
          setTimeout(() => {
            window.location.href = '/';
          }, 500);
        }
      } else {
        // Clean up state before signing up
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
          // Force page reload for clean state
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
      // Clean up auth state first
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
      <DialogContent className="sm:max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-background/95 backdrop-blur-md border-accent/30">
        <div className="relative w-full h-[600px] sm:h-[600px] overflow-hidden">{/* Made height responsive */}
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-muted-foreground hover:text-foreground"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Sliding panel container */}
          <div className="relative w-full h-full flex">
            {/* Left side - Purple curved panel - Hidden on mobile */}
            <div 
              className={`absolute inset-y-0 w-1/2 z-20 transition-all duration-[1200ms] ease-in-out hidden sm:block ${
                isSignUp ? 'translate-x-full' : 'translate-x-0'
              }`}
            >
              <div className="relative h-full bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white flex items-center justify-center">
                {/* Curved edge - Hidden on mobile */}
                <div className="absolute right-0 top-0 w-20 h-full hidden sm:block">
                  <svg
                    viewBox="0 0 100 600"
                    className="h-full w-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,0 Q60,300 0,600 L0,600 L0,0"
                      fill="hsl(var(--primary))"
                    />
                  </svg>
                </div>
                
                <div className="text-center px-8 z-10">
                  {!isSignUp ? (
                    <>
                      <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                      <p className="text-white/90 mb-8 leading-relaxed">
                        Enter your personal details to use all of site features
                      </p>
                      <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                        onClick={() => setIsSignUp(true)}
                      >
                        SIGN UP
                      </Button>
                    </>
                  ) : (
                    <>
                      <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
                      <p className="text-white/90 mb-8 leading-relaxed">
                        Register with your personal details to use all of site features
                      </p>
                      <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                        onClick={() => setIsSignUp(false)}
                      >
                        SIGN IN
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right side form container - Full width on mobile */}
            <div className="w-full h-full flex">
              {/* Sign In Form */}
              <div 
                className={`w-full sm:w-1/2 h-full flex items-center justify-center bg-background transition-all duration-[1200ms] ease-in-out ${
                  isSignUp ? 'hidden sm:block sm:-translate-x-full sm:opacity-0' : 'block sm:translate-x-0 sm:opacity-100'
                }`}
              >
                <div className="w-full max-w-sm px-8">
                  {/* Mobile toggle buttons */}
                  <div className="sm:hidden mb-6 flex space-x-2">
                    <Button
                      variant={!isSignUp ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setIsSignUp(false)}
                    >
                      Sign In
                    </Button>
                    <Button
                      variant={isSignUp ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setIsSignUp(true)}
                    >
                      Sign Up
                    </Button>
                  </div>
                  
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Sign In</h2>
                    <Button
                      onClick={handleGoogleAuth}
                      variant="outline"
                      className="w-full mb-4 bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
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
                        <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">or use your email password</p>
                  </div>

                  <form onSubmit={(e) => handleAuth(e, 'signin')} className="space-y-4">
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="bg-muted/30 border-0"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="bg-muted/30 border-0"
                        required
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center cursor-pointer hover:text-primary">
                      Forgot Your Password?
                    </p>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "SIGNING IN..." : "SIGN IN"}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Sign Up Form */}
              <div 
                className={`w-full sm:w-1/2 h-full flex items-center justify-center bg-background transition-all duration-[1200ms] ease-in-out ${
                  isSignUp ? 'block sm:translate-x-0 sm:opacity-100' : 'hidden sm:block sm:translate-x-full sm:opacity-0'
                }`}
              >
                <div className="w-full max-w-sm px-8">
                  {/* Mobile toggle buttons */}
                  <div className="sm:hidden mb-6 flex space-x-2">
                    <Button
                      variant={!isSignUp ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setIsSignUp(false)}
                    >
                      Sign In
                    </Button>
                    <Button
                      variant={isSignUp ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setIsSignUp(true)}
                    >
                      Sign Up
                    </Button>
                  </div>
                  
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Create Account</h2>
                    <Button
                      onClick={handleGoogleAuth}
                      variant="outline"
                      className="w-full mb-4 bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
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
                        <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">or use your email for registration</p>
                  </div>

                  <form onSubmit={(e) => handleAuth(e, 'signup')} className="space-y-4">
                    <div>
                      <Input
                        name="fullName"
                        type="text"
                        placeholder="Name"
                        className="bg-muted/30 border-0"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="bg-muted/30 border-0"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="bg-muted/30 border-0"
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox 
                        id="terms" 
                        checked={acceptTerms}
                        onCheckedChange={(checked) => setAcceptTerms(!!checked)}
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <span className="text-primary hover:underline cursor-pointer">
                          Terms of Service
                        </span>{" "}
                        and{" "}
                        <span className="text-primary hover:underline cursor-pointer">
                          Privacy Policy
                        </span>
                      </label>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-full"
                      disabled={isLoading || !acceptTerms}
                    >
                      {isLoading ? "CREATING..." : "SIGN UP"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}