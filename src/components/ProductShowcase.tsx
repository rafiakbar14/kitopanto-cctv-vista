
import React from 'react';
import { Camera, ShieldCheck } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const products = [
    {
      name: "IP Camera V380 Pro HD",
      description: "Kamera pengawas pintar dengan fitur deteksi gerakan dan notifikasi langsung ke HP Anda.",
      price: "Rp 299.000",
      features: ["1080p HD", "Deteksi Gerakan", "Koneksi WiFi", "Pan-Tilt"],
      popular: true
    },
    {
      name: "IP Camera V380 Mini Outdoor",
      description: "Kamera luar ruangan tahan air dengan pandangan malam jernih hingga 20 meter.",
      price: "Rp 399.000",
      features: ["IP66 Waterproof", "Pandangan Malam", "Audio 2 Arah", "Pasang Mudah"],
      popular: false
    },
    {
      name: "V380 Pro Dome Camera",
      description: "Kamera dome untuk plafon dengan sudut pandang lebar dan perekaman terus-menerus.",
      price: "Rp 359.000",
      features: ["360° View", "Pemasangan Tersembunyi", "Koneksi Mudah", "Rekam 24 Jam"],
      popular: false
    },
    {
      name: "V380 CCTV Package 4 Kamera",
      description: "Paket komplit dengan DVR dan 4 kamera untuk keamanan rumah dan toko Anda.",
      price: "Rp 1.499.000",
      features: ["DVR 4 Channel", "Hard Disk 1TB", "Instalasi Gratis", "Garansi 1 Tahun"],
      popular: false
    }
  ];

  return (
    <section id="produk" className="section-padding bg-white">
      <div className="kitopanto-container">
        <h2 className="section-title text-center">Produk CCTV Terbaik Untuk Anda</h2>
        <p className="section-subtitle text-center">
          Pilih kamera pengawas berkualitas tinggi dengan harga terjangkau untuk rumah dan toko Anda
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product, index) => (
            <div key={index} className={`bg-white rounded-xl overflow-hidden shadow-lg border hover:shadow-xl transition-shadow ${product.popular ? 'border-kitopanto-orange' : 'border-gray-200'}`}>
              {product.popular && (
                <div className="bg-kitopanto-orange text-white text-sm font-semibold py-1 text-center">
                  BEST SELLER
                </div>
              )}
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <Camera className={`h-16 w-16 ${product.popular ? 'text-kitopanto-orange' : 'text-kitopanto-lightBlue'}`} />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 text-kitopanto-blue">{product.name}</h3>
                <p className="text-kitopanto-darkGray text-sm mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-kitopanto-darkGray">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-kitopanto-blue">{product.price}</span>
                  <a href="#kontak" className={`${product.popular ? 'cta-button py-2 px-4' : 'secondary-button py-2 px-4'}`}>
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
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
