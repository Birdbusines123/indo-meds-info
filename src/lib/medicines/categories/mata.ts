
import { Medicine, MedicineCategory, SymptomCategory } from "../../types";

export const eyeMedicines: Medicine[] = [
  {
    id: "201",
    name: "Insto Tetes Mata",
    category: "eye_drops" as MedicineCategory,
    symptom: "mata" as SymptomCategory,
    description: "Tetes mata untuk meredakan iritasi ringan, kemerahan, dan kelelahan mata.",
    dosage: "Teteskan 1-2 tetes pada setiap mata, 3-4 kali sehari atau sesuai kebutuhan.",
    active_ingredient: "Tetrahydrozoline HCl 0.05%",
    side_effects: "Perih sementara, penglihatan kabur setelah penggunaan.",
    registration_number: "DTL2023678901",
    manufacturer: "Sterling Products Indonesia",
    registration_date: "2019-08-05",
    storage_condition: "Simpan pada suhu ruangan, jauhkan dari sinar matahari langsung",
    activeIngredient: "Tetrahydrozoline HCl 0.05%",
    sideEffects: "Perih sementara, penglihatan kabur setelah penggunaan.",
    bpomId: "DTL2023678901",
    bpomRegistrationDate: "2019-08-05"
  },
  {
    id: "202",
    name: "Tears Naturale",
    category: "eye_lubricant" as MedicineCategory,
    symptom: "mata" as SymptomCategory,
    description: "Pelumas mata untuk mengatasi mata kering dan memberikan kelembaban pada mata.",
    dosage: "Teteskan 1-2 tetes pada setiap mata sesuai kebutuhan.",
    active_ingredient: "Hydroxypropyl Methylcellulose 0.3%",
    side_effects: "Umumnya aman, dapat menyebabkan penglihatan kabur sementara.",
    registration_number: "DTL2023678902",
    manufacturer: "Alcon Pharmaceuticals",
    registration_date: "2020-02-15",
    storage_condition: "Simpan pada suhu 2-25°C",
    activeIngredient: "Hydroxypropyl Methylcellulose 0.3%",
    sideEffects: "Umumnya aman, dapat menyebabkan penglihatan kabur sementara.",
    bpomId: "DTL2023678902",
    bpomRegistrationDate: "2020-02-15"
  },
  {
    id: "203",
    name: "Tobrex Eye Drops",
    category: "eye_antibiotic" as MedicineCategory,
    symptom: "mata" as SymptomCategory,
    description: "Tetes mata antibiotik untuk mengatasi infeksi mata bakteri seperti konjungtivitis.",
    dosage: "Dewasa: 1-2 tetes pada mata yang terinfeksi, setiap 4 jam. Pada infeksi berat, dapat diberikan 2 tetes setiap jam.",
    active_ingredient: "Tobramycin 0.3%",
    side_effects: "Iritasi mata, kemerahan, gatal, atau penglihatan kabur.",
    registration_number: "DTL2023678903",
    manufacturer: "Novartis",
    registration_date: "2018-12-10",
    storage_condition: "Simpan pada suhu di bawah 25°C. Buang setelah 28 hari dibuka.",
    activeIngredient: "Tobramycin 0.3%",
    sideEffects: "Iritasi mata, kemerahan, gatal, atau penglihatan kabur.",
    bpomId: "DTL2023678903",
    bpomRegistrationDate: "2018-12-10"
  }
];
