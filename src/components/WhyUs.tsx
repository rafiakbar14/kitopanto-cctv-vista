
import React from 'react';
import { ShieldCheck, Tag, ShoppingCart } from 'lucide-react';

const WhyUs: React.FC = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-kitopanto-orange" />,
      title: "Garansi 2 Tahun",
      description: "Semua produk kami dilengkapi garansi penuh selama 2 tahun untuk ketenangan Anda."
    },
    {
      icon: <Tag className="h-10 w-10 text-kitopanto-orange" />,
      title: "Harga Terbaik",
      description: "Kami menawarkan kualitas premium dengan harga yang kompetitif dan transparan."
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-kitopanto-orange" />,
      title: "Instalasi Profesional",
      description: "Tim teknisi berpengalaman kami akan melakukan instalasi dengan rapi dan profesional."
    }
  ];

  return (
    <section id="keunggulan" className="section-padding bg-kitopanto-blue text-white">
      <div className="kitopanto-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Mengapa Memilih Kitopanto CCTV?</h2>
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto text-center">
          Kami menyediakan solusi keamanan terbaik dengan layanan profesional dan produk berkualitas tinggi
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors">
              <div className="mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Tim Support 24/7 Siap Membantu</h3>
              <p className="text-gray-300 mb-6">
                Kami memahami bahwa keamanan tidak pernah istirahat. Itulah mengapa tim dukungan kami tersedia 24/7 untuk membantu Anda dengan pertanyaan atau masalah teknis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#kontak" className="cta-button inline-block text-center">
                  Hubungi Kami
                </a>
                <a href="tel:+628123456789" className="bg-transparent border border-white text-white hover:bg-white hover:text-kitopanto-blue font-medium py-3 px-6 rounded-lg transition-all duration-200 text-center">
                  +62 812-3456-789
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-600 rounded-lg p-5 text-center">
                <div className="text-kitopanto-orange text-4xl font-bold">5+</div>
                <p className="text-gray-300 mt-2">Tahun Pengalaman</p>
              </div>
              <div className="bg-slate-600 rounded-lg p-5 text-center">
                <div className="text-kitopanto-orange text-4xl font-bold">1000+</div>
                <p className="text-gray-300 mt-2">Pelanggan Puas</p>
              </div>
              <div className="bg-slate-600 rounded-lg p-5 text-center">
                <div className="text-kitopanto-orange text-4xl font-bold">15+</div>
                <p className="text-gray-300 mt-2">Teknisi Ahli</p>
              </div>
              <div className="bg-slate-600 rounded-lg p-5 text-center">
                <div className="text-kitopanto-orange text-4xl font-bold">24/7</div>
                <p className="text-gray-300 mt-2">Layanan Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
