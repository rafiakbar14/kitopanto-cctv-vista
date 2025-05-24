
import React, { useState } from 'react';
import { MessageSquare, Phone, User, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ConsultationForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nama: '',
    nomorHP: '',
    jenisKonsultasi: 'Pemasangan CCTV Rumah'
  });

  const consultationTypes = [
    'Pemasangan CCTV Rumah',
    'CCTV untuk Toko/Kantor',
    'Upgrade Sistem Existing',
    'Maintenance & Service',
    'Konsultasi Produk',
    'Lainnya'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format pesan WhatsApp
    const message = `Halo Kitopanto! Saya ingin konsultasi:

Nama: ${formData.nama}
Nomor HP: ${formData.nomorHP}
Jenis Konsultasi: ${formData.jenisKonsultasi}

Mohon informasi lebih lanjut. Terima kasih!`;

    // Encode untuk URL WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/6281234567890?text=${encodedMessage}`;
    
    // Buka WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Show success toast
    toast({
      title: "Mengarahkan ke WhatsApp",
      description: "Anda akan diarahkan ke WhatsApp untuk melanjutkan konsultasi.",
    });
    
    // Reset form
    setFormData({
      nama: '',
      nomorHP: '',
      jenisKonsultasi: 'Pemasangan CCTV Rumah'
    });
  };

  return (
    <section id="konsultasi" className="py-16 md:py-20 bg-white">
      <div className="kitopanto-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <MessageSquare className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Konsultasi Gratis
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dapatkan konsultasi gratis dari ahli CCTV kami. Kami akan membantu Anda memilih solusi keamanan yang tepat untuk kebutuhan Anda.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Info Section */}
              <div className="p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">Mengapa Memilih Kitopanto?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded mr-4 mt-1">
                      <User className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Teknisi Berpengalaman</h4>
                      <p className="text-blue-100 text-sm">Tim teknisi bersertifikat dengan pengalaman 5+ tahun</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded mr-4 mt-1">
                      <Phone className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Support 24/7</h4>
                      <p className="text-blue-100 text-sm">Layanan bantuan teknis kapan saja Anda butuhkan</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded mr-4 mt-1">
                      <MessageSquare className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Garansi Resmi</h4>
                      <p className="text-blue-100 text-sm">Garansi produk dan jasa pemasangan 1 tahun penuh</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm text-blue-100">
                    <strong>Catatan:</strong> Setelah mengisi form, Anda akan diarahkan ke WhatsApp kami untuk konsultasi langsung dengan tim ahli.
                  </p>
                </div>
              </div>

              {/* Form Section */}
              <div className="bg-white p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        id="nama"
                        name="nama"
                        type="text"
                        required
                        value={formData.nama}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Masukkan nama lengkap Anda"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="nomorHP" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor HP/WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        id="nomorHP"
                        name="nomorHP"
                        type="tel"
                        required
                        value={formData.nomorHP}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="08123456789"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="jenisKonsultasi" className="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Konsultasi *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <select
                        id="jenisKonsultasi"
                        name="jenisKonsultasi"
                        value={formData.jenisKonsultasi}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
                      >
                        {consultationTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Mulai Konsultasi via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
