
import React from 'react';
import { Camera, ShieldCheck } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const products = [
    {
      name: "Outdoor PTZ Camera",
      description: "Kamera berputar 360° dengan zoom optik 20x dan vision malam inframerah.",
      price: "Rp 1.799.000",
      features: ["4MP", "Pan-Tilt-Zoom", "Tahan Air IP66", "Vision Malam"],
      popular: true
    },
    {
      name: "Indoor Dome Camera",
      description: "Kamera dome dalam ruangan dengan audio dua arah dan deteksi pergerakan.",
      price: "Rp 899.000",
      features: ["2MP", "Audio 2-arah", "Deteksi Gerakan", "Instalasi Mudah"],
      popular: false
    },
    {
      name: "NVR System Pro",
      description: "Sistem perekam jaringan dengan kapasitas penyimpanan 2TB dan 8 saluran.",
      price: "Rp 3.499.000",
      features: ["8-Channel", "Hard Drive 2TB", "H.265+", "Remote Viewing"],
      popular: false
    },
    {
      name: "Hidden Spy Camera",
      description: "Kamera tersembunyi dengan desain jam dinding dan perekam audio.",
      price: "Rp 1.299.000",
      features: ["1080p", "Tersembunyi", "Deteksi Gerakan", "Penyimpanan SD"],
      popular: false
    }
  ];

  return (
    <section id="produk" className="section-padding bg-white">
      <div className="kitopanto-container">
        <h2 className="section-title text-center">Produk Unggulan Kami</h2>
        <p className="section-subtitle text-center">
          Pilih dari berbagai solusi keamanan CCTV premium kami untuk kebutuhan rumah dan bisnis Anda
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product, index) => (
            <div key={index} className={`bg-white rounded-xl overflow-hidden shadow-lg border hover:shadow-xl transition-shadow ${product.popular ? 'border-kitopanto-orange' : 'border-gray-200'}`}>
              {product.popular && (
                <div className="bg-kitopanto-orange text-white text-sm font-semibold py-1 text-center">
                  PALING POPULER
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
                    Beli Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#kontak" className="cta-button inline-flex items-center">
            <ShieldCheck className="mr-2 h-5 w-5" />
            Lihat Semua Produk
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
