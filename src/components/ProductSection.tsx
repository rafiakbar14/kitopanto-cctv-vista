
import React from 'react';
import { Camera, Wifi, Smartphone, Star, Cable } from 'lucide-react';

const ProductSection: React.FC = () => {
  const products = [
    {
      name: "CCTV Indoor Q6 V380",
      price: "Rp 250.000",
      description: "CCTV indoor berkualitas tinggi dengan teknologi V380",
      cablePrice: "Rp 6.000/meter",
      image: "https://www.macro-video.com/en-us/1/0/static/image/product_v380pro_img_q6_pro.png",
      features: ["HD Quality", "Night Vision", "Motion Detection", "Remote Access"],
      icon: <Camera className="h-6 w-6" />,
      popular: false
    },
    {
      name: "CCTV Outdoor WiFi P1",
      price: "Rp 350.000",
      description: "CCTV outdoor dengan koneksi WiFi, tahan cuaca",
      cablePrice: "Rp 9.000/meter",
      image: "https://www.macro-video.com/en-us/1/0/static/image/product_v380pro_img_p2_4g.png",
      features: ["Weatherproof IP66", "WiFi Connection", "HD Recording", "Mobile App"],
      icon: <Wifi className="h-6 w-6" />,
      popular: true
    },
    {
      name: "CCTV Outdoor Kartu SIM",
      price: "Rp 450.000",
      description: "Cocok untuk daerah susah sinyal WiFi, menggunakan kartu Indosat",
      cablePrice: "Sudah termasuk",
      image: "https://www.macro-video.com/en-us/1/0/static/image/product_v380pro_img_p1.png",
      features: ["4G SIM Card", "No WiFi Needed", "Indosat Compatible", "Remote Monitoring"],
      icon: <Smartphone className="h-6 w-6" />,
      popular: false
    }
  ];

  return (
    <section id="produk" className="py-16 md:py-20 bg-gray-50">
      <div className="kitopanto-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Produk & Harga CCTV
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pilih paket CCTV yang sesuai dengan kebutuhan Anda. Semua harga sudah termasuk jasa pemasangan profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div key={index} className={`bg-white rounded-xl overflow-hidden shadow-lg border-2 hover:shadow-xl transition-all duration-300 ${product.popular ? 'border-orange-500 relative' : 'border-gray-200'}`}>
              {product.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    TERPOPULER
                  </div>
                </div>
              )}
              
              <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="text-blue-600 mr-2">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Termasuk Pasang</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Cable className="h-4 w-4 mr-1" />
                    <span>Tambahan kabel: {product.cablePrice}</span>
                  </div>
                  
                  <a 
                    href="#konsultasi" 
                    className={`w-full py-3 px-4 rounded-lg font-medium text-center block transition-all duration-200 ${
                      product.popular 
                        ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Butuh konsultasi untuk memilih produk yang tepat?</p>
          <a href="#konsultasi" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
