
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Tentang Indo Meds Info</h1>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Apa itu Indo Meds Info?</h2>
              <p className="text-gray-700 mb-6">
                Indo Meds Info adalah platform informasi obat OTC (Over The Counter) yang tersedia di Indonesia. 
                Website ini bertujuan untuk memberikan informasi lengkap mengenai obat-obatan yang dapat dibeli tanpa resep dokter, 
                berdasarkan data dari Badan Pengawas Obat dan Makanan (BPOM).
              </p>
              
              <h2 className="text-xl font-semibold mb-4">Kenapa Indo Meds Info?</h2>
              <p className="text-gray-700 mb-6">
                Memahami informasi terkait obat yang akan dikonsumsi sangat penting untuk memastikan keamanan dan efektivitas pengobatan. 
                Indo Meds Info menyediakan informasi yang mudah diakses dan dipahami mengenai berbagai obat OTC, 
                sehingga masyarakat dapat membuat keputusan yang tepat dalam memilih dan menggunakan obat.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">Sumber Data</h2>
              <p className="text-gray-700 mb-6">
                Semua informasi obat yang tersedia di website ini bersumber dari database resmi BPOM yang dapat diakses melalui 
                <a href="https://cekbpom.pom.go.id/produk-obat" target="_blank" rel="noopener noreferrer" className="text-medical-600 hover:text-medical-700"> cekbpom.pom.go.id</a>. 
                Data ini mencakup informasi tentang obat-obatan OTC yang telah terdaftar dan mendapatkan izin edar dari BPOM.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">Catatan Penting</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-yellow-700">
                  Website ini hanya menyediakan informasi dan bukan pengganti konsultasi dengan tenaga kesehatan profesional. 
                  Selalu konsultasikan dengan dokter atau apoteker sebelum menggunakan obat apapun, terutama jika Anda memiliki kondisi kesehatan tertentu, 
                  sedang hamil atau menyusui, atau sedang mengonsumsi obat lain.
                </p>
              </div>
              
              <h2 className="text-xl font-semibold mb-4">Kategori Obat</h2>
              <p className="text-gray-700 mb-6">
                Website ini mengorganisir obat-obatan berdasarkan gejala utama yang ditangani, yaitu:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><strong>Pusing</strong> - Obat untuk mengatasi sakit kepala, migrain, dan gejala pusing lainnya.</li>
                <li><strong>Batuk</strong> - Obat untuk mengatasi batuk kering, batuk berdahak, dan gejala batuk lainnya.</li>
                <li><strong>Alergi</strong> - Obat untuk mengatasi gejala alergi seperti bersin, gatal, ruam kulit, dan reaksi alergi lainnya.</li>
              </ul>
              
              <p className="text-gray-700">
                Setiap kategori berisi berbagai merek dan jenis obat yang umum digunakan untuk mengatasi gejala terkait.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
