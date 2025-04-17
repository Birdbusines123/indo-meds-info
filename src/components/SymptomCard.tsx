
import { Link } from "react-router-dom";
import { SymptomCategory } from "@/lib/types";

interface SymptomCardProps {
  symptom: SymptomCategory;
  title: string;
  description: string;
}

const SymptomCard = ({ symptom, title, description }: SymptomCardProps) => {
  return (
    <Link to={`/kategori/${symptom}`} className="block">
      <div className="symptom-card p-6 h-full">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-white/90">{description}</p>
      </div>
    </Link>
  );
};

export default SymptomCard;
