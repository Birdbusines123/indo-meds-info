
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SymptomCard from "@/components/SymptomCard";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-medical-600 to-medical-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Informasi Obat OTC Indonesia</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Temukan informasi lengkap tentang obat bebas (OTC) yang tersedia di Indonesia berdasarkan data dari BPOM.
            </p>
            <div className="mt-8">
              <Link
                to="/search"
                className="inline-block bg-white text-medical-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
              >
                Cari Obat
              </Link>
            </div>
          </div>
        </section>
        
        {/* Main Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Kategori Gejala</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SymptomCard
                symptom="pusing"
                title="Pusing"
                description="Obat-obatan untuk mengatasi sakit kepala, migrain, dan gejala pusing lainnya."
              />
              
              <SymptomCard
                symptom="batuk"
                title="Batuk"
                description="Obat-obatan untuk mengatasi batuk kering, batuk berdahak, dan gejala batuk lainnya."
              />
              
              <SymptomCard
                symptom="alergi"
                title="Alergi"
                description="Obat-obatan untuk mengatasi gejala alergi seperti bersin, gatal, ruam kulit, dan reaksi alergi lainnya."
              />
            </div>
          </div>
        </section>
        
        {/* Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Tentang Obat OTC</h2>
                <p className="text-gray-600 mb-4">
                  Obat OTC (Over The Counter) atau obat bebas adalah obat yang dapat dibeli tanpa resep dokter. 
                  Meskipun dapat dibeli secara bebas, tetap penting untuk memahami informasi mengenai obat tersebut 
                  untuk memastikan penggunaan yang aman dan efektif.
                </p>
                <p className="text-gray-600 mb-4">
                  Website ini menyediakan informasi lengkap tentang obat OTC yang tersedia di Indonesia, 
                  berdasarkan data dari Badan Pengawas Obat dan Makanan (BPOM).
                </p>
                <div className="mt-4">
                  <Link 
                    to="/about" 
                    className="text-medical-600 font-semibold hover:text-medical-700"
                  >
                    Pelajari lebih lanjut
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
