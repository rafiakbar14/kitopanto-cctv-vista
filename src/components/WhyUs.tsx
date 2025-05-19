
import React from 'react';
import { ShieldCheck, Tag, ShoppingCart, Award, Phone, Users } from 'lucide-react';

const WhyUs: React.FC = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="h-8 w-8 md:h-10 md:w-10 text-kitopanto-orange" />,
      title: "Garansi Resmi 1 Tahun",
      description: "Semua produk kami dilengkapi garansi penuh dan layanan perbaikan gratis jika ada masalah."
    },
    {
      icon: <Tag className="h-8 w-8 md:h-10 md:w-10 text-kitopanto-orange" />,
      title: "Harga Langsung dari Distributor",
      description: "Kami adalah distributor resmi V380, sehingga harga lebih murah tanpa perantara."
    },
    {
      icon: <ShoppingCart className="h-8 w-8 md:h-10 md:w-10 text-kitopanto-orange" />,
      title: "Gratis Konsultasi & Panduan",
      description: "Tim kami siap membantu dari pemilihan produk hingga cara pemasangan dan penggunaan."
    }
  ];

  return (
    <section id="keunggulan" className="section-padding bg-kitopanto-blue text-white">
      <div className="kitopanto-container">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center flex items-center justify-center">
          <Award className="mr-2 h-6 w-6 text-kitopanto-orange" />
          Kenapa Pilih Kitopanto CCTV?
        </h2>
        <p className="text-base md:text-xl mb-8 md:mb-12 text-gray-300 max-w-3xl mx-auto text-center px-4">
          Kami tidak hanya menjual produk, tapi memberikan solusi keamanan yang sesuai dengan kebutuhan dan anggaran Anda
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-4 md:p-6 hover:bg-slate-700 transition-colors">
              <div className="mb-4 md:mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">{benefit.title}</h3>
              <p className="text-sm md:text-base text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 flex items-center">
                <Users className="mr-2 h-6 w-6 text-kitopanto-orange" />
                Bantuan Cepat Kapan Saja
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">
                Butuh bantuan pasang CCTV atau ada pertanyaan? Tim dukungan kami siap membantu melalui telepon, WhatsApp, atau kunjungan langsung ke lokasi Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href="#kontak" className="cta-button inline-flex items-center justify-center text-center py-2">
                  <Phone className="mr-2 h-4 w-4" />
                  Hubungi Kami
                </a>
                <a href="https://wa.me/628123456789" className="bg-transparent border border-white text-white hover:bg-white hover:text-kitopanto-blue font-medium py-2 px-4 md:px-6 rounded-lg transition-all duration-200 text-center inline-flex items-center justify-center">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M11.98 0C5.392 0 .071 5.295.068 11.835c0 2.192.551 4.338 1.593 6.237l-1.66 6.047 6.228-1.629c1.833.995 3.888 1.514 5.974 1.514h.03v-.003c6.583-.001 11.906-5.298 11.907-11.839C24.109 5.286 18.633 0 11.979 0z" fillRule="evenodd" clipRule="evenodd" fill="currentColor" fillOpacity="0.4"/>
                  </svg>
                  Chat WhatsApp
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-slate-600 rounded-lg p-3 md:p-5 text-center">
                <div className="text-kitopanto-orange text-2xl md:text-4xl font-bold">5+</div>
                <p className="text-xs md:text-sm text-gray-300 mt-1 md:mt-2">Tahun Berpengalaman</p>
              </div>
              <div className="bg-slate-600 rounded-lg p-3 md:p-5 text-center">
                <div className="text-kitopanto-orange text-2xl md:text-4xl font-bold">3000+</div>
                <p className="text-xs md:text-sm text-gray-300 mt-1 md:mt-2">Pemasangan Sukses</p>
              </div>
              <div className="bg-slate-600 rounded-lg p-3 md:p-5 text-center">
                <div className="text-kitopanto-orange text-2xl md:text-4xl font-bold">10+</div>
                <p className="text-xs md:text-sm text-gray-300 mt-1 md:mt-2">Teknisi Handal</p>
              </div>
              <div className="bg-slate-600 rounded-lg p-3 md:p-5 text-center">
                <div className="text-kitopanto-orange text-2xl md:text-4xl font-bold">100%</div>
                <p className="text-xs md:text-sm text-gray-300 mt-1 md:mt-2">Garansi Produk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
