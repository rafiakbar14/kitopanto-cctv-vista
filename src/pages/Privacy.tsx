
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  React.useEffect(() => {
    document.title = "Kebijakan Privasi - Kitopanto";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="kitopanto-container py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Kebijakan Privasi
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Terakhir diperbarui: 24 Mei 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Pendahuluan</h2>
              <p className="mb-4">
                Kitopanto ("kami", "kita", atau "Perusahaan") berkomitmen untuk melindungi privasi dan data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi 
                informasi pribadi Anda sesuai dengan Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).
              </p>
              <p>
                Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam Kebijakan Privasi ini.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Data yang Kami Kumpulkan</h2>
              
              <h3 className="text-xl font-medium mb-3 text-gray-800">2.1 Data Pribadi yang Anda Berikan</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Informasi identitas: nama lengkap, alamat, nomor telepon, email</li>
                <li>Informasi keuangan: detail pembayaran, riwayat transaksi</li>
                <li>Informasi lokasi: alamat pemasangan CCTV</li>
                <li>Informasi komunikasi: pesan, feedback, keluhan</li>
                <li>Dokumen identitas: KTP/SIM untuk verifikasi pelanggan</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-3 text-gray-800">2.2 Data yang Dikumpulkan Secara Otomatis</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Data log website: alamat IP, jenis browser, waktu akses</li>
                <li>Data perangkat: informasi sistem CCTV yang terpasang</li>
                <li>Data lokasi: koordinat GPS untuk keperluan teknisi</li>
                <li>Cookies dan teknologi pelacakan serupa</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-gray-800">2.3 Data Sensitif</h3>
              <p className="mb-4">
                Kami tidak mengumpulkan data pribadi sensitif seperti data biometrik, informasi kesehatan, 
                atau kepercayaan agama kecuali diperlukan secara hukum atau dengan persetujuan eksplisit Anda.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Tujuan Penggunaan Data</h2>
              <p className="mb-4">Kami menggunakan data pribadi Anda untuk:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Menyediakan layanan pemasangan dan maintenance CCTV</li>
                <li>Memproses pesanan dan pembayaran</li>
                <li>Komunikasi terkait layanan dan support teknis</li>
                <li>Penjadwalan kunjungan teknisi</li>
                <li>Penyediaan garansi dan layanan after-sales</li>
                <li>Peningkatan kualitas layanan dan produk</li>
                <li>Pemenuhan kewajiban hukum dan regulasi</li>
                <li>Pemasaran produk dan layanan (dengan persetujuan)</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Dasar Hukum Pemrosesan</h2>
              <p className="mb-4">Kami memproses data pribadi Anda berdasarkan:</p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Persetujuan:</strong> Untuk komunikasi pemasaran dan newsletter</li>
                <li><strong>Kontrak:</strong> Untuk pelaksanaan layanan pemasangan CCTV</li>
                <li><strong>Kepentingan Sah:</strong> Untuk peningkatan layanan dan keamanan</li>
                <li><strong>Kewajiban Hukum:</strong> Untuk pemenuhan regulasi perpajakan dan perizinan</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Berbagi dan Pengungkapan Data</h2>
              <p className="mb-4">Kami dapat membagikan data pribadi Anda kepada:</p>
              
              <h3 className="text-xl font-medium mb-3 text-gray-800">5.1 Pihak Ketiga yang Dipercaya</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Mitra teknisi dan installer berlisensi</li>
                <li>Penyedia layanan pembayaran dan perbankan</li>
                <li>Penyedia layanan cloud dan hosting</li>
                <li>Perusahaan asuransi untuk klaim garansi</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-gray-800">5.2 Pengungkapan Wajib</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Kepada penegak hukum atas permintaan resmi</li>
                <li>Untuk pemenuhan kewajiban perpajakan</li>
                <li>Dalam proses hukum atau investigasi</li>
                <li>Untuk melindungi keamanan dan hak Anda atau pihak lain</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Keamanan Data</h2>
              <p className="mb-4">
                Kami menerapkan langkah-langkah keamanan teknis dan organisasi untuk melindungi data pribadi Anda:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Enkripsi data saat transmisi dan penyimpanan</li>
                <li>Kontrol akses berlapis dengan autentikasi kuat</li>
                <li>Pemantauan sistem keamanan 24/7</li>
                <li>Pelatihan keamanan data untuk semua karyawan</li>
                <li>Audit keamanan berkala oleh pihak ketiga</li>
                <li>Backup data secara rutin dengan enkripsi</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Retensi Data</h2>
              <p className="mb-4">Kami menyimpan data pribadi Anda selama:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Data pelanggan: 7 tahun setelah berakhirnya hubungan kontrak</li>
                <li>Data transaksi: 10 tahun untuk keperluan pajak dan audit</li>
                <li>Data komunikasi: 3 tahun atau sampai masalah terselesaikan</li>
                <li>Data pemasaran: sampai Anda menarik persetujuan</li>
                <li>Data log sistem: 1 tahun untuk keperluan keamanan</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Hak-Hak Anda</h2>
              <p className="mb-4">Sesuai UU PDP, Anda memiliki hak untuk:</p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Akses:</strong> Meminta informasi tentang data pribadi yang kami miliki</li>
                <li><strong>Koreksi:</strong> Memperbarui atau memperbaiki data yang tidak akurat</li>
                <li><strong>Penghapusan:</strong> Meminta penghapusan data dalam kondisi tertentu</li>
                <li><strong>Pembatasan:</strong> Membatasi pemrosesan data pribadi Anda</li>
                <li><strong>Portabilitas:</strong> Meminta transfer data ke penyedia lain</li>
                <li><strong>Keberatan:</strong> Menolak pemrosesan untuk tujuan tertentu</li>
                <li><strong>Penarikan Persetujuan:</strong> Menarik persetujuan kapan saja</li>
              </ul>
              <p className="mb-4">
                Untuk menggunakan hak-hak ini, hubungi kami di: privacy@kitopanto.com
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Transfer Data Internasional</h2>
              <p className="mb-4">
                Jika kami mentransfer data pribadi Anda ke luar Indonesia, kami akan memastikan:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Negara tujuan memiliki tingkat perlindungan data yang memadai</li>
                <li>Implementasi safeguard tambahan seperti Standard Contractual Clauses</li>
                <li>Persetujuan eksplisit dari Anda untuk transfer tersebut</li>
                <li>Pemenuhan persyaratan UU PDP untuk transfer lintas batas</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Cookies dan Teknologi Pelacakan</h2>
              <p className="mb-4">Website kami menggunakan cookies untuk:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Menyediakan fungsionalitas website yang optimal</li>
                <li>Menganalisis pola penggunaan website</li>
                <li>Personalisasi konten dan iklan</li>
                <li>Keamanan dan deteksi penipuan</li>
              </ul>
              <p className="mb-4">
                Anda dapat mengatur preferensi cookies melalui browser Anda atau menghubungi kami.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Perubahan Kebijakan</h2>
              <p className="mb-4">
                Kami dapat memperbarui Kebijakan Privasi ini untuk mencerminkan perubahan layanan atau hukum. 
                Perubahan material akan diberitahukan melalui:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Email kepada pelanggan terdaftar</li>
                <li>Pemberitahuan di website</li>
                <li>WhatsApp untuk perubahan penting</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">12. Kontak Kami</h2>
              <p className="mb-4">
                Untuk pertanyaan, keluhan, atau permintaan terkait privasi, hubungi:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Data Protection Officer (DPO)</strong></p>
                <p><strong>Kitopanto</strong></p>
                <p>Jl. Teknologi No. 123, Jakarta Selatan 12560</p>
                <p>Email: privacy@kitopanto.com</p>
                <p>Telepon: +62 812-3456-7890</p>
                <p>WhatsApp: +62 812-3456-7890</p>
                
                <div className="mt-4 pt-4 border-t">
                  <p><strong>Pengaduan ke Otoritas:</strong></p>
                  <p>Jika tidak puas dengan respons kami, Anda dapat mengajukan pengaduan ke:</p>
                  <p>Menteri Komunikasi dan Informatika RI</p>
                  <p>Website: kominfo.go.id</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
