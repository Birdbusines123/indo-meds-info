
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medical-700">Indo Meds Info</h3>
            <p className="text-sm text-gray-600">
              Informasi obat OTC (Over The Counter) yang tersedia di Indonesia berdasarkan data dari BPOM.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medical-700">Tautan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-medical-600">Beranda</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-medical-600">Tentang</Link>
              </li>
              <li>
                <a href="https://cekbpom.pom.go.id/produk-obat" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-medical-600">
                  BPOM
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medical-700">Kategori Gejala</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/kategori/pusing" className="text-gray-600 hover:text-medical-600">Pusing</Link>
              </li>
              <li>
                <Link to="/kategori/batuk" className="text-gray-600 hover:text-medical-600">Batuk</Link>
              </li>
              <li>
                <Link to="/kategori/alergi" className="text-gray-600 hover:text-medical-600">Alergi</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Indo Meds Info. Selalu konsultasikan dengan profesional kesehatan sebelum menggunakan obat apapun.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
