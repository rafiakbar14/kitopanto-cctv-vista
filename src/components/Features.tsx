
import React from 'react';
import { ShieldCheck, Camera, Tags, ShieldAlert } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Camera className="h-10 w-10 text-kitopanto-orange" />,
      title: "Kualitas HD",
      description: "Resolusi tinggi dengan gambar yang jernih untuk detail maksimum pada setiap rekaman."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-kitopanto-orange" />,
      title: "Deteksi Gerakan",
      description: "Sistem cerdas yang mendeteksi dan memberikan notifikasi instan saat ada pergerakan."
    },
    {
      icon: <Tags className="h-10 w-10 text-kitopanto-orange" />,
      title: "Akses Jarak Jauh",
      description: "Pantau properti Anda kapanpun dan dimanapun melalui aplikasi mobile."
    },
    {
      icon: <ShieldAlert className="h-10 w-10 text-kitopanto-orange" />,
      title: "Penyimpanan Cloud",
      description: "Rekaman tersimpan dengan aman di cloud dengan backup otomatis."
    }
  ];

  return (
    <section id="fitur" className="section-padding bg-gray-50">
      <div className="kitopanto-container">
        <h2 className="section-title text-center">Fitur Unggulan</h2>
        <p className="section-subtitle text-center">
          Nikmati berbagai fitur canggih yang memberikan keamanan dan kenyamanan maksimal
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
                Teknologi Pintar untuk Keamanan Modern
              </h3>
              <p className="text-kitopanto-darkGray mb-6">
                Sistem CCTV kami terintegrasi dengan teknologi AI untuk mendeteksi kejadian mencurigakan, memberikan Anda ketenangan pikiran yang tidak ternilai.
              </p>
              <ul className="space-y-3">
                {[
                  "Deteksi wajah otomatis",
                  "Peringatan real-time",
                  "Pencatatan aktivitas 24/7",
                  "Analisis lalu lintas area"
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
                  Pelajari Lebih Lanjut
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
