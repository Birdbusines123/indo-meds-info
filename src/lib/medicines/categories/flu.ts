import { Medicine } from "../../types";

export const fluMedicines: Medicine[] = [
  {
    id: 7,
    name: "Decolgen",
    category: "combinationflu",
    symptom: "flu_pilek",
    description: "Kombinasi untuk meredakan gejala flu seperti demam, hidung tersumbat, dan bersin.",
    dosage: "Dewasa: 1 tablet 3x sehari",
    activeIngredient: "Paracetamol 500mg, Phenylephrine HCl 10mg, Chlorpheniramine maleate 2mg",
    sideEffects: "Mengantuk, mulut kering",
    bpomId: "DTL2023111505",
    manufacturer: "Darya-Varia"
  },
  {
    id: 22,
    name: "Decolsin",
    category: "combinationflu",
    symptom: "flu_pilek",
    description: "Decolsin adalah kombinasi dari beberapa bahan aktif untuk meredakan gejala flu seperti demam, sakit kepala, hidung tersumbat, dan bersin.",
    dosage: "Dewasa: 1 tablet setiap 8 jam.",
    activeIngredient: "Parasetamol 500mg, Fenilefrin HCl 10mg, Klorfeniramin maleat 2mg",
    sideEffects: "Mengantuk, mulut kering, pusing, jantung berdebar.",
    bpomId: "DKL2023456783A1",
    manufacturer: "Darya-Varia Laboratoria",
    bpomRegistrationDate: "2018-11-12"
  },
  {
    id: 23,
    name: "Deconex",
    category: "decongestant",
    symptom: "flu_pilek",
    description: "Deconex mengandung pseudoefedrin sebagai dekongestan untuk melegakan hidung tersumbat akibat pilek atau sinusitis.",
    dosage: "Dewasa: 1 tablet setiap 12 jam.",
    activeIngredient: "Pseudoefedrin HCl 120mg",
    sideEffects: "Insomnia, gelisah, mulut kering, peningkatan tekanan darah, jantung berdebar.",
    bpomId: "DKL2023456784A1",
    manufacturer: "Kalbe Farma",
    bpomRegistrationDate: "2019-06-24"
  },
  {
    id: 24,
    name: "Alermin",
    category: "antihistamine",
    symptom: "flu_pilek",
    description: "Alermin mengandung klorfeniramin maleat untuk meredakan gejala alergi pada saluran pernapasan seperti bersin dan hidung berair.",
    dosage: "Dewasa: 1 tablet setiap 8 jam.",
    activeIngredient: "Klorfeniramin maleat 4mg",
    sideEffects: "Mengantuk, pusing, mulut kering, gangguan penglihatan.",
    bpomId: "DKL2023456785A1",
    manufacturer: "Kimia Farma",
    bpomRegistrationDate: "2017-05-30"
  },
    {
    id: 15,
    name: "Coldact",
    category: "combinationflu",
    symptom: "flu_pilek",
    description: "Coldact adalah obat kombinasi untuk meredakan gejala flu seperti demam, sakit kepala, hidung tersumbat, dan bersin-bersin.",
    dosage: "Dewasa: 1 kapsul setiap 8 jam.",
    activeIngredient: "Paracetamol, Phenylpropanolamine HCl, Chlorpheniramine maleate",
    sideEffects: "Mengantuk, pusing, mulut kering",
    bpomId: "DTL2024111007",
    manufacturer: "Actavis Indonesia",
    packaging: "Strip 10 kapsul"
  },
];
