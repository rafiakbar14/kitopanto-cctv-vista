
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pemilik Toko Elektronik",
      content: "Sistem CCTV dari Kitopanto benar-benar mengubah cara saya mengawasi toko. Kualitas gambar sangat jernih dan fitur akses jarak jauh sangat memudahkan saya memantau toko kapan saja.",
      rating: 5
    },
    {
      name: "Dewi Sartika",
      role: "Pemilik Rumah",
      content: "Saya sangat puas dengan instalasi CCTV di rumah. Tim Kitopanto sangat profesional, ramah, dan memberikan penjelasan detail tentang cara menggunakan sistem.",
      rating: 5
    },
    {
      name: "Anton Wijaya",
      role: "Manajer Gedung",
      content: "Sebagai pengelola gedung perkantoran, keamanan adalah prioritas utama. Sistem CCTV dari Kitopanto memberikan solusi komprehensif dengan kualitas terbaik.",
      rating: 4
    }
  ];

  return (
    <section id="testimoni" className="section-padding bg-gray-50">
      <div className="kitopanto-container">
        <h2 className="section-title text-center">Apa Kata Pelanggan Kami</h2>
        <p className="section-subtitle text-center">
          Dengarkan pengalaman dari pelanggan yang telah menggunakan layanan dan produk kami
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-kitopanto-orange' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>

              <blockquote className="text-kitopanto-darkGray mb-6">"{testimonial.content}"</blockquote>

              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-kitopanto-blue flex items-center justify-center text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-kitopanto-blue">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-kitopanto-blue text-center mb-6">
            Bergabung dengan 1000+ Pelanggan Puas
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {["PT Maju Bersama", "Bank Sukses", "Mall Sejahtera", "Apartemen Nyaman", "Hotel Bintang Lima", "CV Teknologi Maju"].map((client, i) => (
              <div key={i} className="text-lg font-bold text-gray-400">{client}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
