
import { Medicine, MedicineCategory, SymptomCategory } from "../../types";

export const headacheMedicines: Medicine[] = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    category: "paracetamol" as MedicineCategory,
    symptom: "pusing" as SymptomCategory,
    description: "Obat untuk meredakan nyeri ringan dan menurunkan demam",
    dosage: "Dewasa: 1-2 tablet setiap 4-6 jam",
    active_ingredient: "Paracetamol 500mg",
    side_effects: "Umumnya aman jika digunakan sesuai dosis. Efek samping jarang terjadi namun dapat mencakup ruam kulit, reaksi alergi, gangguan fungsi hati pada penggunaan dosis tinggi atau jangka panjang.",
    registration_number: "DBL7809291427A1",
    registration_date: new Date().toISOString(),
    manufacturer: "Generic Pharma",
    activeIngredient: "Paracetamol 500mg",
    sideEffects: "Umumnya aman jika digunakan sesuai dosis. Efek samping jarang terjadi namun dapat mencakup ruam kulit, reaksi alergi, gangguan fungsi hati pada penggunaan dosis tinggi atau jangka panjang.",
    bpomId: "DBL7809291427A1",
    bpomRegistrationDate: new Date().toISOString()
  },
  {
    id: "2",
    name: "Panadol Extra",
    category: "panadol" as MedicineCategory,
    symptom: "pusing" as SymptomCategory,
    description: "Kombinasi paracetamol dan kafein untuk meredakan sakit kepala dan nyeri tubuh",
    dosage: "Dewasa: 1 tablet setiap 4-6 jam sesuai kebutuhan",
    active_ingredient: "Paracetamol 500mg, Caffeine 65mg",
    side_effects: "Insomnia, gelisah, jantung berdebar",
    registration_number: "DTL2023111500",
    manufacturer: "GlaxoSmithKline",
    registration_date: new Date().toISOString(),
    activeIngredient: "Paracetamol 500mg, Caffeine 65mg",
    sideEffects: "Insomnia, gelisah, jantung berdebar",
    bpomId: "DTL2023111500",
    bpomRegistrationDate: new Date().toISOString()
  },
  // Additional Pusing (Headache) medications
  {
    id: "9",
    name: "Bodrex",
    category: "bodrex" as MedicineCategory,
    symptom: "pusing" as SymptomCategory,
    description: "Bodrex adalah obat pereda nyeri yang mengandung kombinasi paracetamol dan kafein untuk meredakan sakit kepala dan nyeri tubuh.",
    dosage: "Dewasa: 1 tablet, 3-4 kali sehari sesuai kebutuhan",
    active_ingredient: "Paracetamol 600mg, Caffeine 50mg",
    side_effects: "Insomnia, gelisah, jantung berdebar pada individu sensitif terhadap kafein",
    registration_number: "DTL2024111001",
    manufacturer: "Tempo Scan Pacific",
    registration_date: new Date().toISOString(),
    packaging: "Strip 4 tablet, 10 tablet",
    activeIngredient: "Paracetamol 600mg, Caffeine 50mg",
    sideEffects: "Insomnia, gelisah, jantung berdebar pada individu sensitif terhadap kafein",
    bpomId: "DTL2024111001",
    bpomRegistrationDate: new Date().toISOString()
  },
  {
    id: "10",
    name: "Tolak Angin",
    category: "herbal" as MedicineCategory,
    symptom: "pusing" as SymptomCategory,
    description: "Tolak Angin adalah jamu tradisional untuk meredakan gejala masuk angin termasuk pusing, mual, dan kembung.",
    dosage: "Dewasa: 1 sachet, 2-3 kali sehari",
    active_ingredient: "Ekstrak Foeniculi fructus, Zingiberis rhizoma, Menthae arvensitis herba",
    side_effects: "Jarang terjadi, bisa menyebabkan gangguan pencernaan ringan",
    registration_number: "TR2024111002",
    manufacturer: "Sido Muncul",
    registration_date: new Date().toISOString(),
    storage_condition: "Simpan di tempat sejuk dan kering",
    activeIngredient: "Ekstrak Foeniculi fructus, Zingiberis rhizoma, Menthae arvensitis herba",
    sideEffects: "Jarang terjadi, bisa menyebabkan gangguan pencernaan ringan",
    bpomId: "TR2024111002",
    bpomRegistrationDate: new Date().toISOString()
  }
];
