
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getMedicineById } from "@/lib/medicine-data";
import { ArrowLeft } from "lucide-react";

const MedicineDetail = () => {
  const { id } = useParams<{ id: string }>();
  const medicine = id ? getMedicineById(parseInt(id)) : undefined;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <Link 
            to={`/kategori/${medicine?.symptom}/${medicine?.category}`} 
            className="inline-flex items-center text-medical-600 hover:text-medical-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke daftar obat
          </Link>
          
          {medicine ? (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-medical-600 p-6 text-white">
                <h1 className="text-3xl font-bold">{medicine.name}</h1>
                <p className="text-sm mt-2">BPOM ID: {medicine.bpomId}</p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold mb-3">Deskripsi</h2>
                    <p className="text-gray-700 mb-6">{medicine.description}</p>
                    
                    <h2 className="text-xl font-semibold mb-3">Dosis</h2>
                    <p className="text-gray-700 mb-6">{medicine.dosage}</p>
                    
                    <h2 className="text-xl font-semibold mb-3">Efek Samping</h2>
                    <p className="text-gray-700">{medicine.sideEffects}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-3">Informasi Obat</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500">Bahan Aktif</h3>
                        <p className="text-gray-700">{medicine.activeIngredient}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500">Kategori</h3>
                        <p className="text-gray-700 capitalize">{medicine.category}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500">Gejala</h3>
                        <p className="text-gray-700 capitalize">{medicine.symptom}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500">ID BPOM</h3>
                        <p className="text-gray-700">{medicine.bpomId}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-500">
                        Data obat ini diperoleh dari database BPOM. Selalu konsultasikan dengan tenaga kesehatan profesional sebelum menggunakan obat apapun.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Obat tidak ditemukan.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MedicineDetail;
