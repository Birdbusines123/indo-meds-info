
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MedicineCard from "@/components/MedicineCard";
import { getCategoryMedicines } from "@/lib/medicines/utils";
import type { Medicine } from "@/lib/types";

const MedicineCategory = () => {
  const { category } = useParams<{ category: string }>();
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchMedicines = async () => {
      if (category) {
        try {
          setLoading(true);
          const data = await getCategoryMedicines(category as any);
          setMedicines(data);
        } catch (error) {
          console.error("Error fetching medicines:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    
    fetchMedicines();
  }, [category]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">
            {category ? category.charAt(0).toUpperCase() + category.slice(1) : "Kategori Obat"}
          </h1>
          
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Memuat data...</p>
            </div>
          ) : medicines.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicines.map((medicine) => (
                <MedicineCard key={medicine.id} medicine={medicine} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Tidak ada obat yang ditemukan dalam kategori ini.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MedicineCategory;
