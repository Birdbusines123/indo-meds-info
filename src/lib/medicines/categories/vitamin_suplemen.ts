
import { Medicine, MedicineCategory, SymptomCategory } from "../../types";

export const vitaminSupplements: Medicine[] = [
  {
    id: "301",
    name: "Neurobion Forte",
    category: "vitamin_c" as MedicineCategory,
    symptom: "vitamin_suplemen" as SymptomCategory,
    description: "Suplemen vitamin B kompleks untuk mendukung kesehatan sistem saraf.",
    dosage: "1 tablet per hari setelah makan atau sesuai anjuran dokter.",
    active_ingredient: "Vitamin B1 100mg, B6 200mg, B12 200mcg",
    side_effects: "Mual, sakit kepala ringan pada beberapa individu.",
    registration_number: "DTL2023789001",
    manufacturer: "P&G Health",
    registration_date: "2020-06-15",
    storage_condition: "Simpan pada suhu di bawah 30°C, jauhkan dari sinar matahari langsung",
    activeIngredient: "Vitamin B1 100mg, B6 200mg, B12 200mcg",
    sideEffects: "Mual, sakit kepala ringan pada beberapa individu.",
    bpomId: "DTL2023789001",
    bpomRegistrationDate: "2020-06-15"
  },
  {
    id: "302",
    name: "Enervon-C",
    category: "multivitamin" as MedicineCategory,
    symptom: "vitamin_suplemen" as SymptomCategory,
    description: "Multivitamin dengan vitamin C untuk meningkatkan daya tahan tubuh.",
    dosage: "1 tablet per hari setelah makan.",
    active_ingredient: "Vitamin C 500mg, Vitamin B kompleks",
    side_effects: "Umumnya aman, dapat menyebabkan mual pada lambung kosong.",
    registration_number: "DTL2023789002",
    manufacturer: "Medifarma",
    registration_date: "2019-11-20",
    storage_condition: "Simpan pada suhu ruangan, jauhkan dari sinar matahari langsung",
    activeIngredient: "Vitamin C 500mg, Vitamin B kompleks",
    sideEffects: "Umumnya aman, dapat menyebabkan mual pada lambung kosong.",
    bpomId: "DTL2023789002",
    bpomRegistrationDate: "2019-11-20"
  },
  {
    id: "303",
    name: "Calcium-D",
    category: "mineral" as MedicineCategory,
    symptom: "vitamin_suplemen" as SymptomCategory,
    description: "Suplemen kalsium dengan vitamin D untuk kesehatan tulang.",
    dosage: "1 tablet, 1-2 kali sehari setelah makan.",
    active_ingredient: "Calcium Carbonate 500mg, Vitamin D3 200IU",
    side_effects: "Konstipasi ringan, kembung.",
    registration_number: "DTL2023789003",
    manufacturer: "Kalbe Farma",
    registration_date: "2020-01-30",
    storage_condition: "Simpan pada suhu ruangan dalam wadah tertutup rapat",
    activeIngredient: "Calcium Carbonate 500mg, Vitamin D3 200IU",
    sideEffects: "Konstipasi ringan, kembung.",
    bpomId: "DTL2023789003",
    bpomRegistrationDate: "2020-01-30"
  }
];

