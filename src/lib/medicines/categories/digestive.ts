import { Medicine } from "../../types";

export const digestiveMedicines: Medicine[] = [
  {
    id: 8,
    name: "Promag Tablet",
    category: "antacid",
    symptom: "pencernaan",
    description: "Antasida untuk meredakan nyeri lambung, kembung, dan mual.",
    dosage: "Dewasa: 1-2 tablet dikunyah 3x sehari",
    activeIngredient: "Hydrotalcite 200mg, Mg(OH)2 150mg, Simethicone 50mg",
    sideEffects: "Konstipasi ringan",
    bpomId: "DTL2023111506",
    manufacturer: "Kalbe Farma",
    bpomRegistrationDate: "2021-06-15",
    storageCondition: "Simpan di tempat sejuk dan kering"
  },
    {
    id: 25,
    name: "Promag",
    category: "antacid",
    symptom: "pencernaan",
    description: "Promag adalah antasida yang meredakan gejala maag seperti nyeri ulu hati, kembung, dan mual.",
    dosage: "Dewasa: 1-2 tablet dikunyah, 3-4 kali sehari, sebaiknya 1 jam setelah makan dan menjelang tidur.",
    activeIngredient: "Hidrotalcit 200mg, Simetikon 80mg",
    sideEffects: "Umumnya aman, dapat menyebabkan sembelit atau diare ringan pada beberapa orang.",
    bpomId: "DKL2023456786A1",
    manufacturer: "Kalbe Farma",
    bpomRegistrationDate: "2016-02-18"
  },
  {
    id: 26,
    name: "Diapet",
    category: "antidiarrheal",
    symptom: "pencernaan",
    description: "Diapet adalah obat herbal untuk mengatasi diare, dengan kandungan herbal yang membantu mengurangi frekuensi BAB dan memperbaiki konsistensi feses.",
    dosage: "Dewasa: 2 tablet, 3 kali sehari. Anak-anak >6 tahun: 1 tablet, 3 kali sehari.",
    activeIngredient: "Ekstrak Psidii folium, Curcumae domesticae rhizoma, Coptidis rhizoma, Granati pericarpium",
    sideEffects: "Jarang terjadi, dapat berupa reaksi alergi pada individu sensitif.",
    bpomId: "TR2023456787A1",
    manufacturer: "Soho Industri Pharmasi",
    bpomRegistrationDate: "2018-09-05"
  },
  {
    id: 27,
    name: "Dulcolax",
    category: "laxative",
    symptom: "pencernaan",
    description: "Dulcolax adalah obat pencahar yang digunakan untuk mengatasi sembelit sementara dan membantu memperlancar buang air besar.",
    dosage: "Dewasa: 1-2 tablet diminum sebelum tidur, bekerja dalam waktu 6-12 jam. Anak >10 tahun: 1 tablet sebelum tidur.",
    activeIngredient: "Bisacodyl 5mg",
    sideEffects: "Kram perut, diare, mual.",
    bpomId: "DKL2023456788A1",
    manufacturer: "Boehringer Ingelheim Indonesia",
    bpomRegistrationDate: "2017-11-22"
  },
];
