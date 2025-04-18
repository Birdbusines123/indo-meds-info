
import { Medicine, MedicineCategory, SymptomCategory } from "../types";
import { headacheMedicines } from "./categories/headache";
import { coughMedicines } from "./categories/cough";
import { allergyMedicines } from "./categories/allergy";
import { feverMedicines } from "./categories/fever";
import { digestiveMedicines } from "./categories/digestive";
import { fluMedicines } from "./categories/flu";

const allMedicines: Medicine[] = [
  ...headacheMedicines,
  ...coughMedicines,
  ...allergyMedicines,
  ...feverMedicines,
  ...digestiveMedicines,
  ...fluMedicines,
];

export const getSymptomMedicines = (symptom: SymptomCategory): Medicine[] => {
  return allMedicines.filter(med => med.symptom === symptom);
};

export const getCategoryMedicines = (category: MedicineCategory): Medicine[] => {
  return allMedicines.filter(med => med.category === category);
};

export const getMedicineById = (id: number): Medicine | undefined => {
  return allMedicines.find(med => med.id === id);
};

export const searchMedicines = (query: string): Medicine[] => {
  const searchTerm = query.toLowerCase();
  return allMedicines.filter(med => 
    med.name.toLowerCase().includes(searchTerm) ||
    med.description.toLowerCase().includes(searchTerm) ||
    med.activeIngredient.toLowerCase().includes(searchTerm) ||
    med.bpomId.toLowerCase().includes(searchTerm)
  );
};

export { allMedicines as medicines };
