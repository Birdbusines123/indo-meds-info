
import { Link } from "react-router-dom";
import { Medicine } from "@/lib/types";

interface MedicineCardProps {
  medicine: Medicine;
}

const MedicineCard = ({ medicine }: MedicineCardProps) => {
  return (
    <Link to={`/obat/${medicine.id}`} className="block">
      <div className="medicine-card h-full flex flex-col">
        <div className="medicine-card-header">
          <h3 className="text-lg font-semibold">{medicine.name}</h3>
        </div>
        <div className="medicine-card-body flex-1">
          <p className="text-sm text-gray-600 mb-3">{medicine.description.substring(0, 100)}...</p>
          <div className="text-xs text-gray-500">
            <p><span className="font-semibold">Bahan Aktif:</span> {medicine.activeIngredient}</p>
            <p className="mt-2"><span className="font-semibold">BPOM ID:</span> {medicine.bpomId}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MedicineCard;
