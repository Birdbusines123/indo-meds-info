
import { Medicine, MedicineCategory, SymptomCategory } from "../../types";

export const skinMedicines: Medicine[] = [
  {
    id: "101",
    name: "Betadine Solution",
    category: "antiseptic" as MedicineCategory,
    symptom: "kulit" as SymptomCategory,
    description: "Cairan antiseptik yang mengandung povidone iodine untuk membersihkan luka dan mencegah infeksi.",
    dosage: "Oleskan pada area luka 2-3 kali sehari setelah dibersihkan dengan air.",
    active_ingredient: "Povidone Iodine 10%",
    side_effects: "Iritasi kulit ringan, reaksi alergi pada individu yang sensitif terhadap iodine.",
    registration_number: "DTL2023567801",
    manufacturer: "Mundipharma",
    registration_date: "2019-05-12",
    storage_condition: "Simpan pada suhu ruangan, jauhkan dari sinar matahari langsung",
    activeIngredient: "Povidone Iodine 10%",
    sideEffects: "Iritasi kulit ringan, reaksi alergi pada individu yang sensitif terhadap iodine.",
    bpomId: "DTL2023567801",
    bpomRegistrationDate: "2019-05-12"
  },
  {
    id: "102",
    name: "Hydrocortisone Cream",
    category: "antiitch" as MedicineCategory,
    symptom: "kulit" as SymptomCategory,
    description: "Krim kortikosteroid untuk meredakan gatal, kemerahan, dan peradangan pada kulit.",
    dosage: "Oleskan lapisan tipis 2-3 kali sehari pada area yang terkena. Jangan gunakan lebih dari 7 hari berturut-turut.",
    active_ingredient: "Hydrocortisone 1%",
    side_effects: "Penipisan kulit, striae, hipopigmentasi jika digunakan jangka panjang.",
    registration_number: "DTL2023567802",
    manufacturer: "Kalbe Farma",
    registration_date: "2020-03-18",
    storage_condition: "Simpan pada suhu di bawah 30°C",
    activeIngredient: "Hydrocortisone 1%",
    sideEffects: "Penipisan kulit, striae, hipopigmentasi jika digunakan jangka panjang.",
    bpomId: "DTL2023567802",
    bpomRegistrationDate: "2020-03-18"
  },
  {
    id: "103",
    name: "Bioplacenton",
    category: "burn_treatment" as MedicineCategory,
    symptom: "kulit" as SymptomCategory,
    description: "Gel untuk perawatan luka bakar ringan, mempercepat regenerasi sel dan penyembuhan jaringan.",
    dosage: "Oleskan 3-5 kali sehari pada area luka bakar setelah dibersihkan.",
    active_ingredient: "Placenta Extract 10%, Neomycin Sulfate 0.5%",
    side_effects: "Reaksi alergi pada kulit, iritasi lokal.",
    registration_number: "DTL2023567803",
    manufacturer: "Kalbe Farma",
    registration_date: "2018-11-25",
    storage_condition: "Simpan pada suhu 2-8°C",
    activeIngredient: "Placenta Extract 10%, Neomycin Sulfate 0.5%",
    sideEffects: "Reaksi alergi pada kulit, iritasi lokal.",
    bpomId: "DTL2023567803",
    bpomRegistrationDate: "2018-11-25"
  }
];
