
import React from 'react';
import { ShieldCheck, Camera, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="beranda" className="bg-gradient-to-br from-kitopanto-blue to-slate-800 text-white py-16 md:py-24">
      <div className="kitopanto-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-kitopanto-orange/20 rounded-full text-kitopanto-orange">
              <ShieldCheck className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Solusi Keamanan Terpercaya</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Lindungi Properti Anda Dengan Sistem CCTV Modern
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
              Sistem pengawasan profesional dengan teknologi terkini untuk rumah dan bisnis Anda. Pantau properti Anda kapanpun dan dimanapun.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a href="#kontak" className="cta-button text-center">
                Dapatkan Penawaran
              </a>
              <a href="#produk" className="secondary-button text-center">
                Lihat Produk
              </a>
            </div>
            
            <div className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-kitopanto-blue">
                    <span className="font-medium">AL</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-kitopanto-blue">
                    <span className="font-medium">RD</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-kitopanto-blue">
                    <span className="font-medium">SN</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Dipercaya oleh 1.000+ pelanggan</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-kitopanto-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    <span className="ml-1 text-sm">(4.9/5)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-kitopanto-orange rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-kitopanto-lightBlue rounded-full opacity-20"></div>
            <div className="relative bg-gradient-to-tr from-gray-900 to-gray-800 rounded-2xl p-3 shadow-2xl animate-fade-in">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800 h-40 rounded-lg overflow-hidden flex items-center justify-center">
                  <Camera className="h-12 w-12 text-kitopanto-orange animate-pulse-soft" />
                </div>
                <div className="bg-gray-800 h-40 rounded-lg overflow-hidden flex items-center justify-center">
                  <Shield className="h-12 w-12 text-kitopanto-lightBlue animate-pulse-soft" />
                </div>
                <div className="col-span-2 bg-gray-800 h-64 rounded-lg overflow-hidden">
                  <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800')] bg-cover bg-center"></div>
                </div>
              </div>
              <div className="mt-3 bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold">Monitoring Aktif</h3>
                    <p className="text-gray-400 text-sm">4 kamera terdeteksi</p>
                  </div>
                  <div className="bg-kitopanto-orange text-white text-xs font-bold uppercase p-1 px-2 rounded">Live</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
