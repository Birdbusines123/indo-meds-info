
export type MedicineCategory = 
  // Pusing (Headache) categories
  | 'paracetamol' | 'panadol' | 'bodrex' 
  // Batuk (Cough) categories
  | 'obh' | 'obh1' | 'obh2'
  // Alergi (Allergy) categories
  | 'cetirizine' | 'cetirizine1' | 'cetirizine2'
  // Demam (Fever) categories
  | 'ibuprofen' | 'aspirin'
  // Nyeri (Pain) categories
  | 'asam_mefenamat' | 'dexketoprofen'
  // Flu & Pilek (Flu & Cold) categories
  | 'decongestant' | 'antihistamine' | 'combinationflu'
  // Pencernaan (Digestive) categories
  | 'antacid' | 'antidiarrheal' | 'laxative';

export type SymptomCategory = 
  | 'pusing' | 'batuk' | 'alergi' 
  | 'demam' | 'nyeri' | 'flu_pilek' | 'pencernaan';

export interface Medicine {
  id: number;
  name: string;
  category: MedicineCategory;
  symptom: SymptomCategory;
  description: string;
  dosage: string;
  activeIngredient: string;
  sideEffects: string;
  bpomId: string;
  bpomRegistrationDate?: string;
  manufacturer?: string;
  composition?: string;
  indication?: string;
  contraindication?: string;
  packaging?: string;
  storageCondition?: string;
  image?: string;
}
