
import React from 'react';
import { Camera, ShieldCheck, Smartphone, ShieldAlert, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8 md:h-10 md:w-10 text-kitopanto-orange" />,
      title: "Kualitas Gambar Jernih",
      description: "Lihat dengan jelas setiap detail dengan kamera resolusi tinggi, bahkan dalam kondisi gelap."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 md:h-10 md:w-10 text-kitopanto-orange" />,
      title: "Notifikasi ke HP",
      description: "Langsung tahu jika ada gerakan mencurigakan melalui notifikasi otomatis ke smartphone Anda."
    },
    {
      icon: <Smartphone className="h-8 w-8 md:h-10 md:w-10 text-kitopanto-orange" />,
      title: "Pantau dari Mana Saja",
      description: "Akses kamera kapan saja dan di mana saja melalui aplikasi di HP, tablet, atau komputer."
    },
    {
      icon: <ShieldAlert className="h-8 w-8 md:h-10 md:w-10 text-kitopanto-orange" />,
      title: "Pemasangan Mudah",
      description: "Tak perlu teknisi mahal, Anda bisa memasang sendiri dengan panduan lengkap dari kami."
    }
  ];

  return (
    <section id="fitur" className="section-padding bg-gray-50">
      <div className="kitopanto-container">
        <h2 className="section-title text-center flex items-center justify-center">
          <ShieldCheck className="mr-2 h-6 w-6 text-kitopanto-orange" />
          Keunggulan CCTV Kami
        </h2>
        <p className="section-subtitle text-center px-4">
          Rasakan manfaat sistem pengawasan modern yang praktis dan terjangkau untuk ketenangan Anda
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-8 md:mt-12">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group p-4 md:p-6">
              <div className="mb-3 md:mb-5 group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-kitopanto-blue">{feature.title}</h3>
              <p className="text-sm md:text-base text-kitopanto-darkGray">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-12 flex flex-col justify-center">
              <h3 className="text-xl md:text-3xl font-bold text-kitopanto-blue mb-4">
                Pengawasan Cerdas untuk Rumah & Toko Anda
              </h3>
              <p className="text-sm md:text-base text-kitopanto-darkGray mb-6">
                Dengan teknologi terbaru, CCTV kami bukan hanya merekam tapi bisa memberi tahu jika ada sesuatu yang mencurigakan. Jadi Anda bisa tenang meski sedang tidak di tempat.
              </p>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Lihat wajah dengan jelas bahkan dalam kondisi gelap",
                  "Pemberitahuan langsung ke HP jika ada gerakan",
                  "Rekam terus selama 24 jam non-stop",
                  "Putar ulang rekaman dengan mudah dari aplikasi"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm md:text-base">
                    <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                      <svg className="h-3 w-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 md:mt-8">
                <a href="#kontak" className="cta-button inline-flex items-center py-2 px-4 text-sm md:text-base">
                  Dapatkan Info Lengkap
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800')] bg-cover bg-center h-64 md:h-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
