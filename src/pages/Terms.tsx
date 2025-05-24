
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  React.useEffect(() => {
    document.title = "Syarat & Ketentuan - Kitopanto";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="kitopanto-container py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Syarat & Ketentuan
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Terakhir diperbarui: 24 Mei 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Penerimaan Syarat</h2>
              <p className="mb-4">
                Dengan menggunakan layanan Kitopanto, Anda menyetujui untuk terikat oleh syarat dan ketentuan berikut. 
                Jika Anda tidak setuju dengan syarat ini, mohon untuk tidak menggunakan layanan kami.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Deskripsi Layanan</h2>
              <p className="mb-4">
                Kitopanto menyediakan layanan:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Penjualan perangkat CCTV dan sistem keamanan</li>
                <li>Jasa pemasangan dan instalasi CCTV profesional</li>
                <li>Maintenance dan service berkala</li>
                <li>Konsultasi sistem keamanan</li>
                <li>Support teknis dan troubleshooting</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Ketentuan Pemesanan dan Pembayaran</h2>
              
              <h3 className="text-xl font-medium mb-3 text-gray-800">3.1 Pemesanan</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Pemesanan dapat dilakukan melalui website, WhatsApp, atau telepon</li>
                <li>Survey lokasi akan dilakukan sebelum instalasi (gratis untuk wilayah Jabodetabek)</li>
                <li>Harga yang tertera sudah termasuk jasa pemasangan standar</li>
                <li>Biaya tambahan dapat berlaku untuk pemasangan khusus atau aksesoris tambahan</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-gray-800">3.2 Pembayaran</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Pembayaran dapat dilakukan secara tunai, transfer bank, atau metode digital</li>
                <li>Down payment 50% diperlukan untuk konfirmasi pesanan</li>
                <li>Pelunasan dilakukan setelah instalasi selesai dan sistem berfungsi normal</li>
                <li>Bukti pembayaran harus disimpan sebagai dokumen garansi</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Garansi dan Pengembalian</h2>
              
              <h3 className="text-xl font-medium mb-3 text-gray-800">4.1 Garansi Produk</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Garansi perangkat CCTV: 1 tahun dari tanggal pembelian</li>
                <li>Garansi jasa instalasi: 6 bulan dari tanggal pemasangan</li>
                <li>Garansi tidak berlaku untuk kerusakan akibat bencana alam, kelalaian pengguna, atau modifikasi tidak resmi</li>
                <li>Klaim garansi harus disertai bukti pembelian dan laporan kerusakan</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-gray-800">4.2 Pengembalian dan Refund</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Pengembalian produk dapat dilakukan dalam 7 hari setelah pembelian</li>
                <li>Produk harus dalam kondisi asli dan belum dipasang</li>
                <li>Biaya pengiriman untuk pengembalian ditanggung pembeli</li>
                <li>Refund akan diproses dalam 14 hari kerja setelah produk diterima</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Tanggung Jawab Pelanggan</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Menjaga keamanan username dan password sistem CCTV</li>
                <li>Menggunakan sistem sesuai dengan panduan yang diberikan</li>
                <li>Melaporkan kerusakan atau masalah teknis sesegera mungkin</li>
                <li>Memberikan akses yang aman untuk teknisi saat service</li>
                <li>Mematuhi peraturan privasi dan tidak menyalahgunakan sistem untuk merekam area pribadi orang lain</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Batas Tanggung Jawab</h2>
              <p className="mb-4">
                Kitopanto tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Kerugian yang timbul akibat gangguan teknis di luar kendali kami</li>
                <li>Kehilangan data rekaman akibat kerusakan perangkat keras</li>
                <li>Kerusakan properti yang tidak terkait langsung dengan instalasi CCTV</li>
                <li>Tindakan kriminal yang terjadi meskipun sistem CCTV telah terpasang</li>
                <li>Gangguan sinyal internet atau listrik yang mempengaruhi kinerja sistem</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Privasi dan Keamanan Data</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Data rekaman adalah milik penuh pelanggan</li>
                <li>Kitopanto tidak mengakses atau menyimpan data rekaman pelanggan</li>
                <li>Pelanggan bertanggung jawab atas backup dan keamanan data rekaman</li>
                <li>Kitopanto berkomitmen melindungi data pribadi pelanggan sesuai kebijakan privasi</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Perubahan Ketentuan</h2>
              <p className="mb-4">
                Kitopanto berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan dinotifikasi melalui:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Website resmi Kitopanto</li>
                <li>Email kepada pelanggan terdaftar</li>
                <li>WhatsApp atau SMS untuk informasi penting</li>
              </ul>
              <p className="mb-4">
                Penggunaan layanan setelah perubahan berlaku dianggap sebagai persetujuan atas ketentuan baru.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Hukum yang Berlaku</h2>
              <p className="mb-4">
                Syarat dan ketentuan ini tunduk pada hukum Republik Indonesia. Setiap sengketa akan diselesaikan melalui:
              </p>
              <ol className="list-decimal pl-6 mb-4">
                <li>Musyawarah dan mufakat</li>
                <li>Mediasi oleh pihak ketiga yang disepakati</li>
                <li>Arbitrase atau pengadilan yang berwenang di Indonesia</li>
              </ol>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Kontak</h2>
              <p className="mb-4">
                Untuk pertanyaan mengenai syarat dan ketentuan ini, hubungi kami di:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Kitopanto</strong></p>
                <p>Jl. Teknologi No. 123, Jakarta Selatan 12560</p>
                <p>Telepon: +62 812-3456-7890</p>
                <p>Email: legal@kitopanto.com</p>
                <p>WhatsApp: +62 812-3456-7890</p>
                <p>Website: www.kitopanto.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
