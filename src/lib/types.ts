
export type MedicineCategory = 
  // Pusing (Headache) categories
  | 'paracetamol' | 'panadol' | 'bodrex' | 'herbal'
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
  id: string;
  name: string;
  category: MedicineCategory;
  symptom: SymptomCategory;
  description: string | null;
  dosage: string | null;
  active_ingredient: string | null;
  side_effects: string | null;
  registration_number: string;
  registration_date?: string | null;
  manufacturer?: string | null;
  composition?: string | null;
  indication?: string | null;
  contraindication?: string | null;
  packaging?: string | null;
  storage_condition?: string | null;
  image?: string;
  
  // For backwards compatibility with existing code
  activeIngredient?: string;
  sideEffects?: string;
  bpomId?: string;
  bpomRegistrationDate?: string;
}
