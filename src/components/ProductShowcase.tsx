
import React from 'react';
import { Camera, ShieldCheck, Tag, Package, Star } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const products = [
    {
      name: "IP Camera V380 Pro HD",
      description: "Kamera pengawas pintar dengan fitur deteksi gerakan dan notifikasi langsung ke HP Anda.",
      price: "Rp 299.000",
      features: ["1080p HD", "Deteksi Gerakan", "Koneksi WiFi", "Pan-Tilt"],
      popular: true,
      icon: <Camera />
    },
    {
      name: "IP Camera V380 Mini Outdoor",
      description: "Kamera luar ruangan tahan air dengan pandangan malam jernih hingga 20 meter.",
      price: "Rp 399.000",
      features: ["IP66 Waterproof", "Pandangan Malam", "Audio 2 Arah", "Pasang Mudah"],
      popular: false,
      icon: <ShieldCheck />
    },
    {
      name: "V380 Pro Dome Camera",
      description: "Kamera dome untuk plafon dengan sudut pandang lebar dan perekaman terus-menerus.",
      price: "Rp 359.000",
      features: ["360° View", "Pemasangan Tersembunyi", "Koneksi Mudah", "Rekam 24 Jam"],
      popular: false,
      icon: <Camera />
    },
    {
      name: "V380 CCTV Package 4 Kamera",
      description: "Paket komplit dengan DVR dan 4 kamera untuk keamanan rumah dan toko Anda.",
      price: "Rp 1.499.000",
      features: ["DVR 4 Channel", "Hard Disk 1TB", "Instalasi Gratis", "Garansi 1 Tahun"],
      popular: false,
      icon: <Package />
    }
  ];

  return (
    <section id="produk" className="section-padding bg-white">
      <div className="kitopanto-container">
        <h2 className="section-title text-center flex items-center justify-center">
          <Tag className="mr-2 h-6 w-6 text-kitopanto-orange" />
          Produk CCTV Terbaik Untuk Anda
        </h2>
        <p className="section-subtitle text-center px-4">
          Pilih kamera pengawas berkualitas tinggi dengan harga terjangkau untuk rumah dan toko Anda
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
          {products.map((product, index) => (
            <div key={index} className={`bg-white rounded-xl overflow-hidden shadow-lg border hover:shadow-xl transition-shadow ${product.popular ? 'border-kitopanto-orange' : 'border-gray-200'}`}>
              {product.popular && (
                <div className="bg-kitopanto-orange text-white text-xs md:text-sm font-semibold py-1 text-center flex items-center justify-center">
                  <Star className="mr-1 h-3 w-3" />
                  BEST SELLER
                </div>
              )}
              <div className="h-36 md:h-48 bg-gray-100 flex items-center justify-center">
                <div className={`h-12 w-12 md:h-16 md:w-16 ${product.popular ? 'text-kitopanto-orange' : 'text-kitopanto-lightBlue'}`}>
                  {product.icon}
                </div>
              </div>
              <div className="p-3 md:p-5">
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-kitopanto-blue">{product.name}</h3>
                <p className="text-kitopanto-darkGray text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{product.description}</p>
                <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                  {product.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-kitopanto-darkGray whitespace-nowrap">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base md:text-lg font-bold text-kitopanto-blue">{product.price}</span>
                  <a href="#kontak" className={`${product.popular ? 'cta-button' : 'secondary-button'} py-1 px-2 md:py-2 md:px-4 text-xs md:text-sm`}>
                    Pesan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 text-center">
          <a href="#kontak" className="cta-button inline-flex items-center">
            <ShieldCheck className="mr-2 h-5 w-5" />
            Lihat Semua Produk Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
