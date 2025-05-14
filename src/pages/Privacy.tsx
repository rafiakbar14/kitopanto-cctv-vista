
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  React.useEffect(() => {
    // Update page title
    document.title = "Kebijakan Privasi - Kitopanto CCTV";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="kitopanto-container py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-kitopanto-blue">
            Kebijakan Privasi
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-kitopanto-darkGray mb-6">
              Terakhir diperbarui: 14 Mei 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-kitopanto-blue">1. Pendahuluan</h2>
              <p className="mb-4">
                PT Kitopanto CCTV ("kami", "kita", atau "Kitopanto CCTV") menghargai privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi pribadi Anda saat Anda menggunakan layanan kami, baik melalui situs web, aplikasi mobile, atau perangkat CCTV kami.
              </p>
              <p>
                Dengan menggunakan layanan kami, Anda menyetujui praktek yang dijelaskan dalam Kebijakan Privasi ini.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-kitopanto-blue">2. Informasi yang Kami Kumpulkan</h2>
              <p className="mb-4">
                <strong>Informasi yang Anda berikan kepada kami:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Informasi kontak (nama, alamat email, nomor telepon, alamat)</li>
                <li>Informasi pembayaran</li>
                <li>Informasi akun (nama pengguna, kata sandi)</li>
                <li>Umpan balik dan korespondensi, seperti informasi yang Anda berikan saat menghubungi kami</li>
              </ul>
              
              <p className="mb-4">
                <strong>Informasi yang kami kumpulkan secara otomatis:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Data log, termasuk alamat IP, jenis browser dan perangkat, waktu akses, halaman yang dikunjungi</li>
                <li>Data lokasi perangkat jika Anda mengizinkan aplikasi kami mengakses lokasi Anda</li>
                <li>Rekaman video dan audio yang ditangkap oleh perangkat CCTV Anda</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-kitopanto-blue">3. Bagaimana Kami Menggunakan Informasi</h2>
              <p className="mb-4">
                Kami menggunakan informasi yang kami kumpulkan untuk:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Menyediakan, memelihara, dan meningkatkan layanan kami</li>
                <li>Memproses transaksi dan mengirim pemberitahuan terkait transaksi</li>
                <li>Mengirim informasi teknis, pembaruan, peringatan keamanan, dan pesan dukungan</li>
                <li>Menanggapi komentar dan pertanyaan Anda serta memberikan layanan pelanggan</li>
                <li>Memantau dan menganalisis tren, penggunaan, dan aktivitas terkait layanan kami</li>
                <li>Melindungi, menyelidiki, dan mencegah aktivitas yang berpotensi ilegal, penipuan, berbahaya, atau tidak sah</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-kitopanto-blue">4. Berbagi Informasi</h2>
              <p className="mb-4">
                Kami tidak menjual informasi pribadi Anda. Kami dapat berbagi informasi Anda dengan:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Vendor dan penyedia layanan yang membantu kami dalam menyediakan layanan (seperti pemrosesan pembayaran, hosting cloud, layanan pelanggan)</li>
                <li>Profesional hukum, ketika diperlukan untuk mematuhi hukum, regulasi, atau proses hukum</li>
                <li>Afiliasi bisnis, dalam kasus reorganisasi, merger, penjualan, joint venture, pengalihan, atau disposisi lainnya</li>
              </ul>
              <p>
                Dalam semua kasus, kami berusaha memastikan bahwa pihak ketiga tersebut memberikan tingkat perlindungan data yang sebanding dengan yang kami berikan.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-kitopanto-blue">5. Keamanan Data</h2>
              <p className="mb-4">
                Keamanan informasi Anda adalah prioritas kami. Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang dirancang untuk melindungi informasi pribadi Anda dari akses yang tidak sah, penggunaan, atau pengungkapan. Namun, tidak ada metode transmisi melalui internet atau metode penyimpanan elektronik yang 100% aman.
              </p>
              <p>
                Rekaman video dan data sensitif lainnya dienkripsi menggunakan standar industri terkini untuk memastikan keamanan maksimal.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-kitopanto-blue">6. Hak Privasi Anda</h2>
              <p className="mb-4">
                Sesuai dengan peraturan perlindungan data yang berlaku, Anda mungkin memiliki hak untuk:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Mengakses informasi pribadi yang kami miliki tentang Anda</li>
                <li>Memperbarui atau memperbaiki informasi pribadi Anda</li>
                <li>Menghapus informasi pribadi Anda</li>
                <li>Membatasi atau menolak pemrosesan informasi pribadi Anda</li>
                <li>Meminta copy informasi pribadi Anda dalam format yang dapat dibaca mesin</li>
              </ul>
              <p>
                Untuk menggunakan hak-hak ini, silakan hubungi kami di: privacy@kitopantocctv.com
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-kitopanto-blue">7. Perubahan pada Kebijakan Privasi</h2>
              <p>
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Jika kami melakukan perubahan yang substansial, kami akan memberi tahu Anda melalui email atau pemberitahuan yang mencolok di situs web atau aplikasi kami. Kami mendorong Anda untuk meninjau Kebijakan Privasi ini secara berkala untuk mengetahui bagaimana kami melindungi informasi Anda.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-kitopanto-blue">8. Kontak Kami</h2>
              <p>
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini atau praktik privasi kami, silakan hubungi kami di:
              </p>
              <div className="mt-4">
                <p><strong>PT Kitopanto CCTV</strong></p>
                <p>Jl. Keamanan No. 123, Jakarta Pusat</p>
                <p>Email: privacy@kitopantocctv.com</p>
                <p>Telepon: +62 812-3456-789</p>
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
