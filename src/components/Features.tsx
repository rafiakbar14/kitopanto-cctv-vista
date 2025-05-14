
import React from 'react';
import { ShieldCheck, Camera, Tags, ShieldAlert } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Camera className="h-10 w-10 text-kitopanto-orange" />,
      title: "Kualitas Gambar Jernih",
      description: "Lihat dengan jelas setiap detail dengan kamera resolusi tinggi, bahkan dalam kondisi gelap."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-kitopanto-orange" />,
      title: "Notifikasi ke HP",
      description: "Langsung tahu jika ada gerakan mencurigakan melalui notifikasi otomatis ke smartphone Anda."
    },
    {
      icon: <Tags className="h-10 w-10 text-kitopanto-orange" />,
      title: "Pantau dari Mana Saja",
      description: "Akses kamera kapan saja dan di mana saja melalui aplikasi di HP, tablet, atau komputer."
    },
    {
      icon: <ShieldAlert className="h-10 w-10 text-kitopanto-orange" />,
      title: "Pemasangan Mudah",
      description: "Tak perlu teknisi mahal, Anda bisa memasang sendiri dengan panduan lengkap dari kami."
    }
  ];

  return (
    <section id="fitur" className="section-padding bg-gray-50">
      <div className="kitopanto-container">
        <h2 className="section-title text-center">Keunggulan CCTV Kami</h2>
        <p className="section-subtitle text-center">
          Rasakan manfaat sistem pengawasan modern yang praktis dan terjangkau untuk ketenangan Anda
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="mb-5 group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-kitopanto-blue">{feature.title}</h3>
              <p className="text-kitopanto-darkGray">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-kitopanto-blue mb-4">
                Pengawasan Cerdas untuk Rumah & Toko Anda
              </h3>
              <p className="text-kitopanto-darkGray mb-6">
                Dengan teknologi terbaru, CCTV kami bukan hanya merekam tapi bisa memberi tahu jika ada sesuatu yang mencurigakan. Jadi Anda bisa tenang meski sedang tidak di tempat.
              </p>
              <ul className="space-y-3">
                {[
                  "Lihat wajah dengan jelas bahkan dalam kondisi gelap",
                  "Pemberitahuan langsung ke HP jika ada gerakan",
                  "Rekam terus selama 24 jam non-stop",
                  "Putar ulang rekaman dengan mudah dari aplikasi"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#kontak" className="cta-button inline-block">
                  Dapatkan Info Lengkap
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
