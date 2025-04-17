
import { Search } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
        <Link to="/" className="text-2xl font-bold text-medical-600 flex items-center">
          <span className="inline-block mr-2">💊</span>
          Indo Meds Info
        </Link>
        
        <form onSubmit={handleSearch} className="w-full max-w-md flex">
          <Input
            type="search"
            placeholder="Cari obat..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-r-none border-r-0"
          />
          <Button type="submit" className="rounded-l-none">
            <Search className="h-4 w-4 mr-2" />
            Cari
          </Button>
        </form>
        
        <nav className="flex items-center space-x-1">
          <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-medical-600">
            Beranda
          </Link>
          <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-medical-600">
            Tentang
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
