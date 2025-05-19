
import React from 'react';
import { MessageSquare, Star, UserRound, Building, Home } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pemilik Toko Elektronik",
      content: "Sistem CCTV dari Kitopanto benar-benar mengubah cara saya mengawasi toko. Kualitas gambar sangat jernih dan fitur akses jarak jauh sangat memudahkan saya memantau toko kapan saja.",
      rating: 5,
      icon: <Building className="h-4 w-4" />
    },
    {
      name: "Dewi Sartika",
      role: "Pemilik Rumah",
      content: "Saya sangat puas dengan instalasi CCTV di rumah. Tim Kitopanto sangat profesional, ramah, dan memberikan penjelasan detail tentang cara menggunakan sistem.",
      rating: 5,
      icon: <Home className="h-4 w-4" />
    },
    {
      name: "Anton Wijaya",
      role: "Manajer Gedung",
      content: "Sebagai pengelola gedung perkantoran, keamanan adalah prioritas utama. Sistem CCTV dari Kitopanto memberikan solusi komprehensif dengan kualitas terbaik.",
      rating: 4,
      icon: <Building className="h-4 w-4" />
    }
  ];

  return (
    <section id="testimoni" className="section-padding bg-gray-50">
      <div className="kitopanto-container">
        <h2 className="section-title text-center flex items-center justify-center">
          <MessageSquare className="mr-2 h-6 w-6 text-kitopanto-orange" />
          Apa Kata Pelanggan Kami
        </h2>
        <p className="section-subtitle text-center px-4">
          Dengarkan pengalaman dari pelanggan yang telah menggunakan layanan dan produk kami
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card p-4 md:p-6">
              <div className="flex mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 md:w-5 md:h-5 ${i < testimonial.rating ? 'text-kitopanto-orange fill-kitopanto-orange' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              <blockquote className="text-kitopanto-darkGray text-sm md:text-base mb-4 md:mb-6">"{testimonial.content}"</blockquote>

              <div className="flex items-center">
                <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-kitopanto-blue flex items-center justify-center text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3 md:ml-4">
                  <h4 className="font-medium text-kitopanto-blue flex items-center text-sm md:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 flex items-center">
                    {testimonial.icon}
                    <span className="ml-1">{testimonial.role}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 p-4 md:p-8 bg-white rounded-2xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold text-kitopanto-blue text-center mb-4 md:mb-6 flex items-center justify-center">
            <UserRound className="mr-2 h-5 w-5 text-kitopanto-orange" />
            Bergabung dengan 1000+ Pelanggan Puas
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 text-center">
            {["PT Maju Bersama", "Bank Sukses", "Mall Sejahtera", "Apartemen Nyaman", "Hotel Bintang Lima", "CV Teknologi Maju"].map((client, i) => (
              <div key={i} className="text-base md:text-lg font-bold text-gray-400">{client}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
