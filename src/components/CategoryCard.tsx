
import { Link } from "react-router-dom";
import { MedicineCategory } from "@/lib/types";

interface CategoryCardProps {
  category: MedicineCategory;
  title: string;
  symptom: string;
}

const CategoryCard = ({ category, title, symptom }: CategoryCardProps) => {
  return (
    <Link to={`/kategori/${symptom}/${category}`}>
      <div className="bg-medical-500 text-white rounded-lg shadow-md overflow-hidden hover:bg-medical-600 transition-colors duration-300 p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
