
import React from 'react';
import { Shield, Camera, Monitor } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="beranda" className="bg-gradient-to-br from-blue-900 to-slate-800 text-white py-16 md:py-24">
      <div className="kitopanto-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-400">
              <Shield className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Jasa Pemasangan CCTV Profesional</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Keamanan Rumah & Bisnis Anda
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
              Kitopanto menyediakan layanan pemasangan CCTV berkualitas tinggi dengan teknologi terdepan. 
              Pantau properti Anda kapan saja, di mana saja.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a href="#konsultasi" className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-center">
                Konsultasi Gratis
              </a>
              <a href="#produk" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-center">
                Lihat Produk
              </a>
            </div>
            
            <div className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-blue-900">
                    <span className="font-medium">A</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-blue-900">
                    <span className="font-medium">B</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-blue-900">
                    <span className="font-medium">C</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Dipercaya 500+ Pelanggan</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
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
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-orange-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
            <div className="relative bg-gradient-to-tr from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" 
                alt="CCTV Monitoring" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4 bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold">Live Monitoring</h3>
                    <p className="text-gray-400 text-sm">24/7 Pengawasan Real-time</p>
                  </div>
                  <div className="bg-orange-500 text-white text-xs font-bold uppercase p-1 px-2 rounded">Live</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
