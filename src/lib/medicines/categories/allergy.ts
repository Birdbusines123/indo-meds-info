import { Medicine, MedicineCategory, SymptomCategory } from "../../types";

export const allergyMedicines: Medicine[] = [
  {
    id: "4",
    name: "Cetirizine Kimia Farma",
    category: "cetirizine" as MedicineCategory,
    symptom: "alergi" as SymptomCategory,
    description: "Antihistamin generasi kedua untuk mengatasi gejala alergi seperti bersin dan gatal-gatal.",
    dosage: "Dewasa dan anak >12 tahun: 1x sehari 10mg",
    active_ingredient: "Cetirizine HCl 10mg",
    side_effects: "Mengantuk ringan, mulut kering",
    registration_number: "DTL2023111502",
    manufacturer: "Kimia Farma",
    activeIngredient: "Cetirizine HCl 10mg",
    sideEffects: "Mengantuk ringan, mulut kering",
    bpomId: "DTL2023111502"
  },
  // Alergi - Cetirizine
  {
    id: "12",
    name: "Cetirizine 10mg",
    category: "cetirizine" as MedicineCategory,
    symptom: "alergi" as SymptomCategory,
    description: "Cetirizine adalah antihistamin generasi kedua untuk meredakan gejala alergi seperti bersin, gatal-gatal, hidung berair, dan urtikaria tanpa efek mengantuk yang signifikan.",
    dosage: "Dewasa dan anak >12 tahun: 1 tablet (10mg) sekali sehari.",
    active_ingredient: "Cetirizine HCl 10mg",
    side_effects: "Mengantuk ringan, mulut kering, sakit kepala.",
    registration_number: "DKL1234567890A1",
    activeIngredient: "Cetirizine HCl 10mg",
    sideEffects: "Mengantuk ringan, mulut kering, sakit kepala.",
    bpomId: "DKL1234567890A1"
  },
  {
    id: "13",
    name: "Cetirizine Sirup",
    category: "cetirizine" as MedicineCategory,
    symptom: "alergi" as SymptomCategory,
    description: "Cetirizine sirup digunakan untuk mengatasi gejala alergi pada anak-anak, tersedia dalam bentuk cair yang lebih mudah diberikan.",
    dosage: "Anak 2-6 tahun: 2.5ml (1/2 sendok takar) sekali sehari. Anak 6-12 tahun: 5ml (1 sendok takar) sekali sehari.",
    active_ingredient: "Cetirizine HCl 5mg/5ml",
    side_effects: "Mengantuk ringan, iritabilitas pada beberapa anak.",
    registration_number: "DKL1234567891A1",
    activeIngredient: "Cetirizine HCl 5mg/5ml",
    sideEffects: "Mengantuk ringan, iritabilitas pada beberapa anak.",
    bpomId: "DKL1234567891A1"
  },
  
  // Alergi - Cetirizine 1
  {
    id: "14",
    name: "Zyrtec",
    category: "cetirizine1" as MedicineCategory,
    symptom: "alergi" as SymptomCategory,
    description: "Zyrtec adalah merek dagang cetirizine yang digunakan untuk meredakan gejala rhinitis alergi musiman dan sepanjang tahun, serta urtikaria idiopatik kronis.",
    dosage: "Dewasa dan anak >12 tahun: 1 tablet (10mg) sekali sehari.",
    active_ingredient: "Cetirizine HCl 10mg",
    side_effects: "Mengantuk, mulut kering, kelelahan.",
    registration_number: "DKL1234567892A1",
    activeIngredient: "Cetirizine HCl 10mg",
    sideEffects: "Mengantuk, mulut kering, kelelahan.",
    bpomId: "DKL1234567892A1"
  },
  {
    id: "15",
    name: "Incidal-OD",
    category: "cetirizine1" as MedicineCategory,
    symptom: "alergi" as SymptomCategory,
    description: "Incidal-OD adalah cetirizine untuk penggunaan sekali sehari, efektif meredakan gejala alergi dengan durasi kerja 24 jam.",
    dosage: "Dewasa: 1 tablet sekali sehari.",
    active_ingredient: "Cetirizine HCl 10mg",
    side_effects: "Mengantuk ringan, kelelahan, sakit kepala sesekali.",
    registration_number: "DKL1234567893A1",
    activeIngredient: "Cetirizine HCl 10mg",
    sideEffects: "Mengantuk ringan, kelelahan, sakit kepala sesekali.",
    bpomId: "DKL1234567893A1"
  },
  
  // Alergi - Cetirizine 2
  {
    id: "16",
    name: "Ryvel",
    category: "cetirizine2" as MedicineCategory,
    symptom: "alergi" as SymptomCategory,
    description: "Ryvel adalah cetirizine yang digunakan untuk meredakan gejala alergi, tersedia dalam bentuk tablet yang mudah dikonsumsi.",
    dosage: "Dewasa dan anak >12 tahun: 1 tablet sekali sehari.",
    active_ingredient: "Cetirizine HCl 10mg",
    side_effects: "Mengantuk, pusing, sakit kepala ringan.",
    registration_number: "DKL1234567894A1",
    activeIngredient: "Cetirizine HCl 10mg",
    sideEffects: "Mengantuk, pusing, sakit kepala ringan.",
    bpomId: "DKL1234567894A1"
  },
  {
    id: "17",
    name: "Cerizin",
    category: "cetirizine2" as MedicineCategory,
    symptom: "alergi" as SymptomCategory,
    description: "Cerizin adalah merek cetirizine yang digunakan untuk mengatasi berbagai kondisi alergi seperti rhinitis alergi, urtikaria, dan dermatitis atopik.",
    dosage: "Dewasa: 1 tablet (10mg) sekali sehari. Lansia: Pertimbangkan penyesuaian dosis.",
    active_ingredient: "Cetirizine HCl 10mg",
    side_effects: "Mengantuk, mulut kering, kelelahan, pusing.",
    registration_number: "DKL1234567895A1",
    activeIngredient: "Cetirizine HCl 10mg",
    sideEffects: "Mengantuk, mulut kering, kelelahan, pusing.",
    bpomId: "DKL1234567895A1"
  },
  // Additional Alergi (Allergy) medications
  {
    id: "13",
    name: "Loratadine 10mg",
    category: "antihistamine" as MedicineCategory,
    symptom: "alergi" as SymptomCategory,
    description: "Loratadine adalah antihistamin non-sedatif untuk mengatasi gejala alergi seperti bersin dan hidung berair.",
    dosage: "Dewasa dan anak >12 tahun: 1 tablet sekali sehari",
    active_ingredient: "Loratadine 10mg",
    side_effects: "Sakit kepala ringan, mulut kering",
    registration_number: "DTL2024111005",
    manufacturer: "Dexa Medica",
    indication: "Mengatasi gejala alergi seperti rhinitis alergi dan urtikaria",
    activeIngredient: "Loratadine 10mg",
    sideEffects: "Sakit kepala ringan, mulut kering",
    bpomId: "DTL2024111005"
  }
];
