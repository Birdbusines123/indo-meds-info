
import { Link } from "react-router-dom";
import { Medicine } from "@/lib/types";

interface MedicineCardProps {
  medicine: Medicine;
}

const MedicineCard = ({ medicine }: MedicineCardProps) => {
  return (
    <Link to={`/obat/${medicine.id}`} className="block">
      <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="medicine-card-header mb-4">
          <h3 className="text-lg font-semibold">{medicine.name}</h3>
          {medicine.manufacturer && (
            <p className="text-xs text-gray-500">Produsen: {medicine.manufacturer}</p>
          )}
        </div>
        <div className="medicine-card-body flex-1">
          <p className="text-sm text-gray-600 mb-3">
            {medicine.description ? `${medicine.description.substring(0, 100)}...` : 'Tidak ada deskripsi'}
          </p>
          <div className="text-xs text-gray-500">
            <p>
              <span className="font-semibold">Bahan Aktif:</span> 
              {medicine.active_ingredient || medicine.activeIngredient || 'Tidak tersedia'}
            </p>
            <p className="mt-2">
              <span className="font-semibold">BPOM ID:</span> 
              {medicine.registration_number || medicine.bpomId}
            </p>
            {(medicine.registration_date || medicine.bpomRegistrationDate) && (
              <p className="mt-1">
                <span className="font-semibold">Tanggal Registrasi:</span> 
                {medicine.registration_date || medicine.bpomRegistrationDate}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MedicineCard;
