
import React from 'react';
import { ShieldCheck, Tag, ShoppingCart } from 'lucide-react';

const WhyUs: React.FC = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-kitopanto-orange" />,
      title: "Garansi Resmi 1 Tahun",
      description: "Semua produk kami dilengkapi garansi penuh dan layanan perbaikan gratis jika ada masalah."
    },
    {
      icon: <Tag className="h-10 w-10 text-kitopanto-orange" />,
      title: "Harga Langsung dari Distributor",
      description: "Kami adalah distributor resmi V380, sehingga harga lebih murah tanpa perantara."
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-kitopanto-orange" />,
      title: "Gratis Konsultasi & Panduan",
      description: "Tim kami siap membantu dari pemilihan produk hingga cara pemasangan dan penggunaan."
    }
  ];

  return (
    <section id="keunggulan" className="section-padding bg-kitopanto-blue text-white">
      <div className="kitopanto-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Kenapa Pilih Kitopanto CCTV?</h2>
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto text-center">
          Kami tidak hanya menjual produk, tapi memberikan solusi keamanan yang sesuai dengan kebutuhan dan anggaran Anda
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Bantuan Cepat Kapan Saja</h3>
              <p className="text-gray-300 mb-6">
                Butuh bantuan pasang CCTV atau ada pertanyaan? Tim dukungan kami siap membantu melalui telepon, WhatsApp, atau kunjungan langsung ke lokasi Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#kontak" className="cta-button inline-block text-center">
                  Hubungi Kami
                </a>
                <a href="https://wa.me/628123456789" className="bg-transparent border border-white text-white hover:bg-white hover:text-kitopanto-blue font-medium py-3 px-6 rounded-lg transition-all duration-200 text-center">
                  Chat WhatsApp
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-600 rounded-lg p-5 text-center">
                <div className="text-kitopanto-orange text-4xl font-bold">5+</div>
                <p className="text-gray-300 mt-2">Tahun Berpengalaman</p>
              </div>
              <div className="bg-slate-600 rounded-lg p-5 text-center">
                <div className="text-kitopanto-orange text-4xl font-bold">3000+</div>
                <p className="text-gray-300 mt-2">Pemasangan Sukses</p>
              </div>
              <div className="bg-slate-600 rounded-lg p-5 text-center">
                <div className="text-kitopanto-orange text-4xl font-bold">10+</div>
                <p className="text-gray-300 mt-2">Teknisi Handal</p>
              </div>
              <div className="bg-slate-600 rounded-lg p-5 text-center">
                <div className="text-kitopanto-orange text-4xl font-bold">100%</div>
                <p className="text-gray-300 mt-2">Garansi Produk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
