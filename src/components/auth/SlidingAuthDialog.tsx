import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  const { toast } = useToast();

  const handleAuth = async (event: React.FormEvent<HTMLFormElement>, type: 'signin' | 'signup') => {
    event.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      if (type === 'signin') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
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
        toast({ title: "Welcome back!", description: "You've been signed in successfully." });
        onOpenChange(false);
      } else {
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
        } else {
          toast({ title: "Account created!", description: "You can now sign in to your account." });
          onOpenChange(false);
        }
      }
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-background/95 backdrop-blur-md border-accent/30">
        <div className="relative w-full h-[600px] overflow-hidden">
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
            {/* Left side - Purple curved panel */}
            <div 
              className={`absolute inset-y-0 w-1/2 z-20 transition-all duration-700 ease-in-out ${
                isSignUp ? 'translate-x-full' : 'translate-x-0'
              }`}
            >
              <div className="relative h-full bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white flex items-center justify-center">
                {/* Curved edge */}
                <div className="absolute right-0 top-0 w-20 h-full">
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

            {/* Right side form container */}
            <div className="w-full h-full flex">
              {/* Sign In Form */}
              <div 
                className={`w-1/2 h-full flex items-center justify-center bg-background transition-all duration-700 ease-in-out ${
                  isSignUp ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                }`}
              >
                <div className="w-full max-w-sm px-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Sign In</h2>
                    <div className="flex items-center justify-center space-x-4 mb-4 text-muted-foreground">
                      <div className="p-2 border rounded-full hover:bg-accent cursor-pointer">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div className="p-2 border rounded-full hover:bg-accent cursor-pointer">
                        <User className="h-4 w-4" />
                      </div>
                      <div className="p-2 border rounded-full hover:bg-accent cursor-pointer">
                        <Lock className="h-4 w-4" />
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
                className={`w-1/2 h-full flex items-center justify-center bg-background transition-all duration-700 ease-in-out ${
                  isSignUp ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              >
                <div className="w-full max-w-sm px-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Create Account</h2>
                    <div className="flex items-center justify-center space-x-4 mb-4 text-muted-foreground">
                      <div className="p-2 border rounded-full hover:bg-accent cursor-pointer">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div className="p-2 border rounded-full hover:bg-accent cursor-pointer">
                        <User className="h-4 w-4" />
                      </div>
                      <div className="p-2 border rounded-full hover:bg-accent cursor-pointer">
                        <Lock className="h-4 w-4" />
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
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-full"
                      disabled={isLoading}
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