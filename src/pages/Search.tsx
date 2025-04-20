
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MedicineCard from "@/components/MedicineCard";
import { searchMedicines } from "@/lib/medicines/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";
import type { Medicine } from "@/lib/types";

const Search = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    const query = new URLSearchParams(location.search).get("q") || "";
    setSearchQuery(query);
    
    if (query) {
      fetchSearchResults(query);
    } else {
      setResults([]);
    }
  }, [location.search]);
  
  const fetchSearchResults = async (query: string) => {
    try {
      setLoading(true);
      const data = await searchMedicines(query);
      setResults(data);
    } catch (error) {
      console.error("Error searching medicines:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchQuery.trim()) {
      fetchSearchResults(searchQuery);
      
      // Update URL with search query
      const newUrl = `/search?q=${encodeURIComponent(searchQuery)}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Cari Obat</h1>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12 flex">
            <Input
              type="search"
              placeholder="Masukkan nama obat, bahan aktif, atau deskripsi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-r-none border-r-0"
            />
            <Button type="submit" className="rounded-l-none">
              <SearchIcon className="h-4 w-4 mr-2" />
              Cari
            </Button>
          </form>
          
          {searchQuery && (
            <div className="mb-8">
              <h2 className="text-xl mb-2">
                Hasil pencarian untuk "{searchQuery}"
              </h2>
              <p className="text-gray-600">
                Ditemukan {results.length} hasil
              </p>
            </div>
          )}
          
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Mencari obat...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((medicine) => (
                <MedicineCard key={medicine.id} medicine={medicine} />
              ))}
            </div>
          ) : (
            searchQuery && (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Tidak ada obat yang ditemukan sesuai dengan pencarian Anda.</p>
                <p className="text-gray-500 mt-2">Coba gunakan kata kunci lain atau periksa ejaan kata.</p>
              </div>
            )
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
