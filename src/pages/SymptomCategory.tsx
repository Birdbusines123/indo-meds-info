
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { SymptomCategory } from "@/lib/types";

const categoryMap: Record<string, { title: string, categories: Array<{ id: string, title: string }> }> = {
  pusing: {
    title: "Obat Pusing",
    categories: [
      { id: "paracetamol", title: "Paracetamol" },
      { id: "panadol", title: "Panadol" },
      { id: "bodrex", title: "Bodrex" }
    ]
  },
  batuk: {
    title: "Obat Batuk",
    categories: [
      { id: "obh", title: "OBH" },
      { id: "obh1", title: "OBH 1" },
      { id: "obh2", title: "OBH 2" }
    ]
  },
  alergi: {
    title: "Obat Alergi",
    categories: [
      { id: "cetirizine", title: "Cetirizine" },
      { id: "cetirizine1", title: "Cetirizine 1" },
      { id: "cetirizine2", title: "Cetirizine 2" }
    ]
  }
};

const SymptomCategoryPage = () => {
  const { symptom } = useParams<{ symptom: string }>();
  
  const symptomInfo = categoryMap[symptom || ""] || {
    title: "Kategori Tidak Ditemukan",
    categories: []
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">{symptomInfo.title}</h1>
          
          {symptomInfo.categories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {symptomInfo.categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category.id as any}
                  title={category.title}
                  symptom={symptom || ""}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Kategori tidak ditemukan.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SymptomCategoryPage;
