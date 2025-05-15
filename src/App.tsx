
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/login" element={<Login />} />
            {/* Protected routes */}
            <Route path="/profil" element={
              <ProtectedRoute>
                <div className="min-h-screen p-8">
                  <h1 className="text-2xl font-bold mb-4">Profil Saya</h1>
                  <p className="text-gray-500">Halaman profil akan segera hadir.</p>
                </div>
              </ProtectedRoute>
            } />
            <Route path="/pesanan" element={
              <ProtectedRoute>
                <div className="min-h-screen p-8">
                  <h1 className="text-2xl font-bold mb-4">Pesanan Saya</h1>
                  <p className="text-gray-500">Halaman pesanan akan segera hadir.</p>
                </div>
              </ProtectedRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
