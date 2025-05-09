import { Medicine, MedicineCategory, SymptomCategory } from "../../types";

export const coughMedicines: Medicine[] = [
  {
    id: "5",
    name: "OBH Combi",
    category: "obh" as MedicineCategory,
    symptom: "batuk" as SymptomCategory,
    description: "OBH Combi adalah obat batuk yang mengandung kombinasi ekspektoran dan antihistamin untuk mengatasi batuk berdahak.",
    dosage: "Dewasa: 3 sendok takar (15 ml), 3 kali sehari",
    active_ingredient: "Succus Liquiritae, Ammonium Chloride, Chlorpheniramine maleate",
    side_effects: "Mengantuk, mulut kering",
    registration_number: "DTL2023111503",
    manufacturer: "Combiphar",
    activeIngredient: "Succus Liquiritae, Ammonium Chloride, Chlorpheniramine maleate",
    sideEffects: "Mengantuk, mulut kering",
    bpomId: "DTL2023111503"
  },
  {
    id: "43",
    name: "Woods Antitussive",
    category: "obh" as MedicineCategory,
    symptom: "batuk" as SymptomCategory,
    description: "Woods Antitussive adalah sirup batuk untuk meredakan batuk tidak berdahak dan iritasi tenggorokan.",
    dosage: "Dewasa: 2 sendok teh, 3-4 kali sehari",
    active_ingredient: "Dextromethorphan HBr 10mg/5ml",
    side_effects: "Mengantuk, pusing, mual",
    registration_number: "DTL2023111526",
    manufacturer: "Kalbe Farma",
    registration_date: "2019-06-08",
    activeIngredient: "Dextromethorphan HBr 10mg/5ml",
    sideEffects: "Mengantuk, pusing, mual",
    bpomId: "DTL2023111526",
    bpomRegistrationDate: "2019-06-08"
  },
  {
    id: "44",
    name: "Konidin",
    category: "obh" as MedicineCategory,
    symptom: "batuk" as SymptomCategory,
    description: "Konidin adalah obat batuk untuk meredakan batuk tidak berdahak dan iritasi tenggorokan.",
    dosage: "Dewasa: 1 tablet, 3 kali sehari",
    active_ingredient: "Dextromethorphan HBr 15mg",
    side_effects: "Mengantuk, pusing, mual",
    registration_number: "DTL2023111527",
    manufacturer: "Konimex",
    registration_date: "2018-12-10",
    activeIngredient: "Dextromethorphan HBr 15mg",
    sideEffects: "Mengantuk, pusing, mual",
    bpomId: "DTL2023111527",
    bpomRegistrationDate: "2018-12-10"
  },
  {
    id: "45",
    name: "Komix",
    category: "obh" as MedicineCategory,
    symptom: "batuk" as SymptomCategory,
    description: "Komix adalah obat batuk dalam bentuk sachet yang praktis untuk meredakan batuk tidak berdahak.",
    dosage: "Dewasa: 1 sachet, 3-4 kali sehari",
    active_ingredient: "Dextromethorphan HBr 5mg, Guaifenesin 50mg",
    side_effects: "Mengantuk, pusing",
    registration_number: "DTL2023111528",
    manufacturer: "Bintang Toedjoe",
    registration_date: "2020-05-22",
    activeIngredient: "Dextromethorphan HBr 5mg, Guaifenesin 50mg",
    sideEffects: "Mengantuk, pusing",
    bpomId: "DTL2023111528",
    bpomRegistrationDate: "2020-05-22"
  },
  {
    id: "46",
    name: "Bisolvon",
    category: "obh1" as MedicineCategory,
    symptom: "batuk" as SymptomCategory,
    description: "Bisolvon adalah obat batuk ekspektoran untuk mengencerkan dahak dan mempermudah pengeluaran dahak.",
    dosage: "Dewasa: 1 tablet, 3 kali sehari",
    active_ingredient: "Bromhexine HCl 8mg",
    side_effects: "Mual, gangguan pencernaan, sakit kepala",
    registration_number: "DTL2023111529",
    manufacturer: "Boehringer Ingelheim",
    registration_date: "2019-08-15",
    activeIngredient: "Bromhexine HCl 8mg",
    sideEffects: "Mual, gangguan pencernaan, sakit kepala",
    bpomId: "DTL2023111529",
    bpomRegistrationDate: "2019-08-15"
  },
  {
    id: "47",
    name: "Actifed DM",
    category: "obh2" as MedicineCategory,
    symptom: "batuk" as SymptomCategory,
    description: "Actifed DM adalah sirup batuk kombinasi untuk meredakan batuk tidak berdahak dan gejala flu.",
    dosage: "Dewasa: 2 sendok teh, 3 kali sehari",
    active_ingredient: "Dextromethorphan HBr 10mg/5ml, Pseudoephedrine HCl 30mg/5ml, Triprolidine HCl 1.25mg/5ml",
    side_effects: "Mengantuk, jantung berdebar, mulut kering",
    registration_number: "DTL2023111530",
    manufacturer: "Johnson & Johnson",
    registration_date: "2020-03-10",
    activeIngredient: "Dextromethorphan HBr 10mg/5ml, Pseudoephedrine HCl 30mg/5ml, Triprolidine HCl 1.25mg/5ml",
    sideEffects: "Mengantuk, jantung berdebar, mulut kering",
    bpomId: "DTL2023111530",
    bpomRegistrationDate: "2020-03-10"
  }
];
