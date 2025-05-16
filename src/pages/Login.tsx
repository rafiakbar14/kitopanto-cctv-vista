
import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { useAuth } from '@/hooks/useAuth';
import { Shield, LogIn, UserPlus, Mail } from "lucide-react";

const Login = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [captchaToken, setCaptchaToken] = React.useState<string | null>(null);
  const recaptchaRef = useRef<any>(null);
  
  const navigate = useNavigate();
  const { login, register, loginWithGoogle, user } = useAuth();

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  // Initialize reCAPTCHA
  useEffect(() => {
    // Load the reCAPTCHA script
    const loadRecaptcha = () => {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    };
    
    const cleanup = loadRecaptcha();
    return cleanup;
  }, []);

  const executeCaptcha = async () => {
    if (window.grecaptcha && recaptchaRef.current) {
      try {
        const token = await window.grecaptcha.execute(recaptchaRef.current, { action: 'login' });
        setCaptchaToken(token);
        return token;
      } catch (error) {
        console.error('reCAPTCHA error:', error);
        return null;
      }
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Verify captcha first
      await executeCaptcha();
      
      if (isLogin) {
        // Handle login
        await login(email, password);
        toast("Login berhasil", {
          description: "Selamat datang kembali!",
        });
        navigate('/');
      } else {
        // Handle registration
        await register(email, password);
        toast("Pendaftaran berhasil", {
          description: "Akun Anda telah dibuat, silakan masuk.",
        });
        setIsLogin(true);
      }
    } catch (error) {
      console.error(error);
      toast("Terjadi kesalahan", {
        description: isLogin 
          ? "Email atau kata sandi tidak valid." 
          : "Gagal membuat akun. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
      // The redirect will happen automatically, no need to navigate
    } catch (error) {
      console.error(error);
      toast("Terjadi kesalahan", {
        description: "Gagal login dengan Google. Silakan coba lagi.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-kitopanto-orange" />
          </div>
          <h1 className="text-2xl font-bold text-kitopanto-blue">Kitopanto CCTV</h1>
          <p className="text-muted-foreground mt-2">Solusi keamanan terpercaya untuk bisnis dan rumah Anda</p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>{isLogin ? "Masuk" : "Daftar"}</CardTitle>
            <CardDescription>
              {isLogin 
                ? "Masukkan detail akun Anda untuk melanjutkan" 
                : "Buat akun baru untuk mengakses layanan kami"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="nama@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Kata Sandi</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="********" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Hidden reCAPTCHA */}
              <div className="g-recaptcha" 
                data-sitekey="YOUR_RECAPTCHA_SITE_KEY"
                data-size="invisible"
                ref={recaptchaRef}>
              </div>
              
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Memproses..." : isLogin ? "Masuk" : "Daftar"}
              </Button>
            </form>
            
            <div className="my-4 flex items-center">
              <Separator className="flex-1" />
              <span className="mx-2 text-xs text-muted-foreground">ATAU</span>
              <Separator className="flex-1" />
            </div>
            
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={handleGoogleLogin}
              disabled={loading}
            >
              <Mail className="mr-2 h-4 w-4" />
              Lanjutkan dengan Google
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button 
              variant="link" 
              className="w-full" 
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin 
                ? "Belum punya akun? Daftar di sini" 
                : "Sudah punya akun? Masuk di sini"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
