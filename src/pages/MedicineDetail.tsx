
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getMedicineById } from "@/lib/medicines/utils";
import { ArrowLeft } from "lucide-react";
import { 
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@/components/ui/table";
import type { Medicine } from "@/lib/types";

const MedicineDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [medicine, setMedicine] = useState<Medicine | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchMedicine = async () => {
      if (id) {
        try {
          setLoading(true);
          const data = await getMedicineById(id);
          setMedicine(data);
        } catch (error) {
          console.error("Error fetching medicine:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    
    fetchMedicine();
  }, [id]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          {medicine && (
            <Link 
              to={`/kategori/${medicine.symptom}/${medicine.category}`} 
              className="inline-flex items-center text-medical-600 hover:text-medical-700 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke daftar obat
            </Link>
          )}
          
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Memuat data...</p>
            </div>
          ) : medicine ? (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-medical-600 p-6 text-white">
                <h1 className="text-3xl font-bold">{medicine.name}</h1>
                <p className="text-sm mt-2">BPOM ID: {medicine.registration_number || medicine.bpomId}</p>
                {medicine.manufacturer && (
                  <p className="text-sm mt-1">Produsen: {medicine.manufacturer}</p>
                )}
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Deskripsi</h2>
                      <p className="text-gray-700">{medicine.description}</p>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Indikasi</h2>
                      <p className="text-gray-700">{medicine.indication || medicine.description}</p>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Dosis</h2>
                      <p className="text-gray-700">{medicine.dosage}</p>
                    </div>
                    
                    {(medicine.contraindication || medicine.contraindication) && (
                      <div>
                        <h2 className="text-xl font-semibold mb-3">Kontraindikasi</h2>
                        <p className="text-gray-700">{medicine.contraindication}</p>
                      </div>
                    )}
                    
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Efek Samping</h2>
                      <p className="text-gray-700">{medicine.side_effects || medicine.sideEffects}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-3">Informasi Obat</h2>
                    
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Bahan Aktif</TableCell>
                          <TableCell>{medicine.active_ingredient || medicine.activeIngredient}</TableCell>
                        </TableRow>
                        
                        {medicine.composition && (
                          <TableRow>
                            <TableCell className="font-medium">Komposisi</TableCell>
                            <TableCell>{medicine.composition}</TableCell>
                          </TableRow>
                        )}
                        
                        <TableRow>
                          <TableCell className="font-medium">Kategori</TableCell>
                          <TableCell className="capitalize">{medicine.category}</TableCell>
                        </TableRow>
                        
                        <TableRow>
                          <TableCell className="font-medium">Gejala</TableCell>
                          <TableCell className="capitalize">{medicine.symptom}</TableCell>
                        </TableRow>
                        
                        <TableRow>
                          <TableCell className="font-medium">ID BPOM</TableCell>
                          <TableCell>{medicine.registration_number || medicine.bpomId}</TableCell>
                        </TableRow>
                        
                        {(medicine.registration_date || medicine.bpomRegistrationDate) && (
                          <TableRow>
                            <TableCell className="font-medium">Tanggal Registrasi</TableCell>
                            <TableCell>{medicine.registration_date || medicine.bpomRegistrationDate}</TableCell>
                          </TableRow>
                        )}
                        
                        {medicine.packaging && (
                          <TableRow>
                            <TableCell className="font-medium">Kemasan</TableCell>
                            <TableCell>{medicine.packaging}</TableCell>
                          </TableRow>
                        )}
                        
                        {medicine.storage_condition && (
                          <TableRow>
                            <TableCell className="font-medium">Penyimpanan</TableCell>
                            <TableCell>{medicine.storage_condition}</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-500">
                        Data obat ini diperoleh dari database BPOM Indonesia. Selalu konsultasikan dengan tenaga kesehatan profesional sebelum menggunakan obat apapun.
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
