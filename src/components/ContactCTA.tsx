
import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactCTA: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    product: 'Outdoor Camera'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Pesan Terkirim!",
      description: "Tim kami akan menghubungi Anda segera.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      product: 'Outdoor Camera'
    });
  };

  return (
    <section id="kontak" className="section-padding bg-white">
      <div className="kitopanto-container">
        <div className="bg-gradient-to-r from-kitopanto-blue to-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 text-white">
              <div className="flex items-center mb-6">
                <ShieldCheck className="h-8 w-8 text-kitopanto-orange mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold">Hubungi Kami</h2>
              </div>

              <p className="mb-8 text-gray-300">
                Dapatkan konsultasi gratis dan penawaran khusus untuk kebutuhan keamanan Anda. Tim ahli kami siap membantu.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded mr-4">
                    <svg className="h-5 w-5 text-kitopanto-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Telepon</h3>
                    <p className="text-gray-300">+62 812-3456-789</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded mr-4">
                    <svg className="h-5 w-5 text-kitopanto-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-300">info@kitopantocctv.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded mr-4">
                    <svg className="h-5 w-5 text-kitopanto-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Alamat</h3>
                    <p className="text-gray-300">Jl. Keamanan No. 123, Jakarta Pusat</p>
                  </div>
                </div>
              </div>

              <div className="space-x-4">
                {['facebook', 'instagram', 'youtube', 'twitter'].map(social => (
                  <a key={social} href="#" className="inline-block bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                    <span className="sr-only">{social}</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 md:p-12">
              <h3 className="text-xl font-bold text-kitopanto-blue mb-6">Dapatkan Penawaran Gratis</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kitopanto-orange focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kitopanto-orange focus:border-transparent"
                      placeholder="Alamat email Anda"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">No. Telepon</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kitopanto-orange focus:border-transparent"
                      placeholder="Nomor telepon Anda"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Produk yang Diminati</label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kitopanto-orange focus:border-transparent"
                  >
                    <option value="Outdoor Camera">Outdoor Camera</option>
                    <option value="Indoor Camera">Indoor Camera</option>
                    <option value="NVR System">NVR System</option>
                    <option value="Hidden Camera">Hidden Camera</option>
                    <option value="Complete Solution">Solusi Lengkap</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kitopanto-orange focus:border-transparent"
                    placeholder="Jelaskan kebutuhan Anda"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full cta-button py-3"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
