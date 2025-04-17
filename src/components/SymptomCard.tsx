
import { Link } from "react-router-dom";
import { SymptomCategory } from "@/lib/types";

interface SymptomCardProps {
  symptom: SymptomCategory;
  title: string;
  description: string;
}

const SymptomCard = ({ symptom, title, description }: SymptomCardProps) => {
  // Custom background colors based on symptom type
  const getBgColor = () => {
    switch (symptom) {
      case 'pusing':
        return 'bg-amber-600';
      case 'batuk':
        return 'bg-emerald-600';
      case 'alergi':
        return 'bg-blue-600';
      default:
        return 'bg-medical-600';
    }
  };

  return (
    <Link to={`/kategori/${symptom}`} className="block">
      <div className={`symptom-card p-6 h-full rounded-lg shadow-md text-white ${getBgColor()} hover:shadow-lg transition-shadow duration-300`}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-white/90">{description}</p>
      </div>
    </Link>
  );
};

export default SymptomCard;
