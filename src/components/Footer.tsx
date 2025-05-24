
import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="kitopanto-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/src/EmasHijra_20250524_191024_0000.svg" 
                alt="Kitopanto Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 text-sm">
              Kitopanto adalah penyedia jasa pemasangan CCTV profesional dengan teknologi terkini untuk keamanan rumah dan bisnis Anda.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'youtube', 'twitter'].map(social => (
                <a key={social} href="#" className="bg-gray-700 p-2 rounded-full hover:bg-orange-500 transition-colors">
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Produk & Layanan</h3>
            <ul className="space-y-3 text-sm">
              {[
                'CCTV Indoor',
                'CCTV Outdoor',
                'CCTV Wireless',
                'Pemasangan Profesional',
                'Maintenance & Service',
                'Konsultasi Gratis'
              ].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Perusahaan</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Jl. Teknologi No. 123, Jakarta Selatan 12560</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@kitopanto.com</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-xs text-gray-400 mb-2">Jam Operasional:</p>
              <p className="text-sm text-white">Senin - Sabtu: 08:00 - 18:00</p>
              <p className="text-sm text-white">Minggu: 09:00 - 15:00</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-300 mb-4 md:mb-0">
            &copy; 2025 Kitopanto. Semua hak dilindungi undang-undang.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
              Syarat & Ketentuan
            </Link>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
