import { Medicine } from "../../types";

export const feverMedicines: Medicine[] = [
  {
    id: 5,
    name: "Ibuprofen 400mg",
    category: "ibuprofen",
    symptom: "demam",
    description: "NSAID untuk menurunkan demam dan meredakan nyeri ringan hingga sedang.",
    dosage: "Dewasa: 400mg setiap 4-6 jam sesuai kebutuhan",
    activeIngredient: "Ibuprofen 400mg",
    sideEffects: "Mual, sakit perut, heartburn",
    bpomId: "DTL2023111503",
    manufacturer: "Indofarma"
  },
  // New medications for Demam (Fever)
  {
    id: 18,
    name: "Proris Sirup",
    category: "ibuprofen",
    symptom: "demam",
    description: "Proris sirup mengandung ibuprofen untuk menurunkan demam dan meredakan nyeri ringan hingga sedang pada anak-anak.",
    dosage: "Anak-anak: Dosis berdasarkan berat badan, biasanya 5-10 mg/kg setiap 6-8 jam sesuai kebutuhan.",
    activeIngredient: "Ibuprofen 100mg/5ml",
    sideEffects: "Gangguan pencernaan, mual, sakit perut, reaksi alergi pada kasus tertentu.",
    bpomId: "DTL2023456789A1",
    manufacturer: "Pharos Indonesia",
    bpomRegistrationDate: "2018-05-12",
    indication: "Untuk menurunkan demam dan meredakan nyeri ringan hingga sedang pada anak.",
    contraindication: "Hipersensitivitas terhadap ibuprofen, penderita tukak lambung, gangguan pembekuan darah.",
    packaging: "Botol 60ml, 100ml",
    storageCondition: "Simpan pada suhu di bawah 30°C, lindungi dari cahaya langsung."
  },
  {
    id: 19,
    name: "Aspirin 80mg",
    category: "aspirin",
    symptom: "demam",
    description: "Aspirin dosis rendah digunakan untuk mencegah pembekuan darah dan menurunkan risiko serangan jantung atau stroke pada pasien berisiko tinggi.",
    dosage: "Dewasa: 80-325mg sekali sehari atau sesuai petunjuk dokter.",
    activeIngredient: "Asam asetilsalisilat 80mg",
    sideEffects: "Iritasi lambung, mual, perdarahan, reaksi alergi, risiko sindrom Reye pada anak dan remaja.",
    bpomId: "DKL2023456780A1",
    manufacturer: "Bayer Indonesia",
    bpomRegistrationDate: "2017-08-23",
    indication: "Pencegahan trombosis pada penyakit kardiovaskular dan serebrovaskular.",
    contraindication: "Anak dan remaja dengan gejala demam; pasien dengan riwayat tukak lambung, asma, atau gangguan pembekuan darah.",
    packaging: "Blister 10 tablet, botol 30 tablet",
    storageCondition: "Simpan pada suhu ruangan kering (15-30°C), jauhkan dari cahaya dan kelembaban."
  },
    // Additional Demam (Fever) medications
  {
    id: 14,
    name: "Sanmol Forte",
    category: "paracetamol",
    symptom: "demam",
    description: "Sanmol Forte adalah paracetamol dosis tinggi untuk menurunkan demam dan meredakan nyeri sedang hingga berat.",
    dosage: "Dewasa: 1 tablet setiap 6 jam sesuai kebutuhan",
    activeIngredient: "Paracetamol 650mg",
    sideEffects: "Jarang terjadi, reaksi alergi pada kasus tertentu",
    bpomId: "DTL2024111006",
    manufacturer: "Sanbe Farma",
    packaging: "Strip 10 tablet"
  },
];
