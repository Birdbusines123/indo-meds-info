
export type MedicineCategory = 'paracetamol' | 'panadol' | 'bodrex' | 'obh' | 'obh1' | 'obh2' | 'cetirizine' | 'cetirizine1' | 'cetirizine2';

export type SymptomCategory = 'pusing' | 'batuk' | 'alergi';

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

