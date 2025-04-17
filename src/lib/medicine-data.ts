import { Medicine, MedicineCategory, SymptomCategory } from "./types";

export const medicines: Medicine[] = [
  // Pusing - Paracetamol
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "paracetamol",
    symptom: "pusing",
    description: "Paracetamol 500mg adalah obat pereda nyeri dan penurun demam yang umum digunakan untuk mengatasi sakit kepala, nyeri ringan hingga sedang, dan demam.",
    dosage: "Dewasa: 1-2 tablet setiap 4-6 jam sesuai kebutuhan, maksimal 8 tablet dalam 24 jam. Anak-anak: Sesuaikan dengan berat badan, konsultasikan dengan dokter.",
    activeIngredient: "Paracetamol 500mg",
    sideEffects: "Umumnya aman jika digunakan sesuai dosis. Efek samping jarang terjadi namun dapat mencakup ruam kulit, reaksi alergi, gangguan fungsi hati pada penggunaan dosis tinggi atau jangka panjang.",
    bpomId: "DBL7809291427A1",
  },
  {
    id: 2,
    name: "Paracetamol Sirup 120mg/5ml",
    category: "paracetamol",
    symptom: "pusing",
    description: "Paracetamol sirup adalah bentuk cair dari paracetamol yang lebih mudah diberikan pada anak-anak untuk mengatasi demam dan nyeri ringan hingga sedang.",
    dosage: "Dosis berdasarkan usia dan berat badan anak. Umumnya untuk anak 2-6 tahun: 5-10ml setiap 4-6 jam. Konsultasikan dengan dokter untuk dosis yang tepat.",
    activeIngredient: "Paracetamol 120mg per 5ml",
    sideEffects: "Jarang terjadi, namun dapat meliputi reaksi alergi, gangguan fungsi hati jika overdosis.",
    bpomId: "DBL7321569824A1",
  },
  
  // Pusing - Panadol
  {
    id: 3,
    name: "Panadol Extra",
    category: "panadol",
    symptom: "pusing",
    description: "Panadol Extra menggabungkan paracetamol dan kafein untuk mengatasi nyeri sedang hingga berat seperti sakit kepala, sakit gigi, nyeri otot, dan nyeri sendi.",
    dosage: "Dewasa dan anak >12 tahun: 1-2 tablet setiap 4-6 jam sesuai kebutuhan, maksimal 8 tablet dalam 24 jam.",
    activeIngredient: "Paracetamol 500mg, Kafein 65mg",
    sideEffects: "Gelisah, sulit tidur pada individu sensitif terhadap kafein, reaksi alergi (jarang), gangguan fungsi hati jika melebihi dosis.",
    bpomId: "DKL9876543210A1",
  },
  {
    id: 4,
    name: "Panadol Biru",
    category: "panadol",
    symptom: "pusing",
    description: "Panadol Biru adalah paracetamol yang dikemas dengan lapisan biru untuk membedakannya. Digunakan untuk meredakan sakit kepala, nyeri ringan hingga sedang, dan demam.",
    dosage: "Dewasa: 1-2 tablet setiap 4-6 jam sesuai kebutuhan, maksimal 8 tablet dalam 24 jam.",
    activeIngredient: "Paracetamol 500mg",
    sideEffects: "Umumnya aman jika digunakan sesuai dosis. Efek samping jarang terjadi.",
    bpomId: "DKL9876543211A1",
  },
  
  // Pusing - Bodrex
  {
    id: 5,
    name: "Bodrex",
    category: "bodrex",
    symptom: "pusing",
    description: "Bodrex adalah kombinasi paracetamol dan kafein yang digunakan untuk meredakan sakit kepala dan nyeri lainnya. Kafein meningkatkan efektivitas paracetamol.",
    dosage: "Dewasa: 1 tablet, 3-4 kali sehari. Jangan melebihi 4 tablet per hari.",
    activeIngredient: "Paracetamol 600mg, Kafein 50mg",
    sideEffects: "Gangguan tidur, gelisah pada individu sensitif terhadap kafein, reaksi alergi (jarang), gangguan fungsi hati jika overdosis.",
    bpomId: "DBL0123456789A1",
  },
  
  // Batuk - OBH
  {
    id: 6,
    name: "OBH Combi",
    category: "obh",
    symptom: "batuk",
    description: "OBH Combi adalah obat batuk kombinasi dari ekstrak tanaman dengan efek ekspektoran untuk melegakan batuk berdahak dan meredakan gejala flu.",
    dosage: "Dewasa: 3 sendok takar (15ml), 3 kali sehari. Anak 6-12 tahun: 2 sendok takar (10ml), 3 kali sehari.",
    activeIngredient: "Succus liquiritiae, Ammonium klorida, Efedrin HCl, Klorfeniramin maleat",
    sideEffects: "Mengantuk, mulut kering, gangguan pencernaan.",
    bpomId: "DTL9876543212A1",
  },
  {
    id: 7,
    name: "OBH Combi Anak",
    category: "obh",
    symptom: "batuk",
    description: "OBH Combi Anak diformulasikan khusus untuk anak-anak, dengan rasa yang lebih disukai dan dosis yang disesuaikan untuk mengatasi batuk berdahak pada anak.",
    dosage: "Anak 6-12 tahun: 2 sendok takar (10ml), 3 kali sehari. Anak 2-6 tahun: 1 sendok takar (5ml), 3 kali sehari.",
    activeIngredient: "Succus liquiritiae, Ammonium klorida, Efedrin HCl, Klorfeniramin maleat (kadar lebih rendah dari versi dewasa)",
    sideEffects: "Mengantuk, peningkatan aktivitas pada beberapa anak.",
    bpomId: "DTL9876543213A1",
  },
  
  // Batuk - OBH 1
  {
    id: 8,
    name: "OBH Itrasal",
    category: "obh1",
    symptom: "batuk",
    description: "OBH Itrasal adalah obat batuk untuk mengatasi batuk berdahak, meredakan gejala bronkitis akut dan kronis, serta infeksi saluran pernapasan lainnya.",
    dosage: "Dewasa: 15 ml, 3 kali sehari. Anak 6-12 tahun: 10 ml, 3 kali sehari.",
    activeIngredient: "Succus liquiritiae, Ammonium klorida, Glycyrrhiza, Chlorpheniramine maleate",
    sideEffects: "Mengantuk, mulut kering, pusing.",
    bpomId: "DTL9876543214A1",
  },
  {
    id: 9,
    name: "OBH Tropica",
    category: "obh1",
    symptom: "batuk",
    description: "OBH Tropica adalah obat batuk herbal dengan formula tradisional yang dimodernisasi untuk mengatasi batuk berdahak.",
    dosage: "Dewasa: 15 ml, 3 kali sehari. Anak >6 tahun: 10 ml, 3 kali sehari.",
    activeIngredient: "Ekstrak akar manis, Ammonium klorida, Mentol",
    sideEffects: "Umumnya minimal, dapat mencakup gangguan pencernaan ringan.",
    bpomId: "DTL9876543215A1",
  },
  
  // Batuk - OBH 2
  {
    id: 10,
    name: "Siladex Batuk & Flu",
    category: "obh2",
    symptom: "batuk",
    description: "Siladex Batuk & Flu adalah obat kombinasi untuk meredakan gejala batuk disertai flu seperti hidung tersumbat, bersin, dan demam.",
    dosage: "Dewasa: 15 ml, 3 kali sehari. Anak 6-12 tahun: 7.5 ml, 3 kali sehari.",
    activeIngredient: "Paracetamol, Dextromethorphan HBr, Chlorpheniramine maleate, Phenylephrine HCl",
    sideEffects: "Mengantuk, mulut kering, pusing, jantung berdebar.",
    bpomId: "DTL9876543216A1",
  },
  {
    id: 11,
    name: "Konidin",
    category: "obh2",
    symptom: "batuk",
    description: "Konidin adalah obat batuk yang mengandung dextromethorphan untuk meredakan batuk tidak berdahak akibat iritasi tenggorokan.",
    dosage: "Dewasa: 1 tablet, 3-4 kali sehari. Anak 6-12 tahun: 1/2 tablet, 3 kali sehari.",
    activeIngredient: "Dextromethorphan HBr 15mg",
    sideEffects: "Mengantuk, pusing, mual.",
    bpomId: "DTL9876543217A1",
  },
  
  // Alergi - Cetirizine
  {
    id: 12,
    name: "Cetirizine 10mg",
    category: "cetirizine",
    symptom: "alergi",
    description: "Cetirizine adalah antihistamin generasi kedua untuk meredakan gejala alergi seperti bersin, gatal-gatal, hidung berair, dan urtikaria tanpa efek mengantuk yang signifikan.",
    dosage: "Dewasa dan anak >12 tahun: 1 tablet (10mg) sekali sehari.",
    activeIngredient: "Cetirizine HCl 10mg",
    sideEffects: "Mengantuk ringan, mulut kering, sakit kepala.",
    bpomId: "DKL1234567890A1",
  },
  {
    id: 13,
    name: "Cetirizine Sirup",
    category: "cetirizine",
    symptom: "alergi",
    description: "Cetirizine sirup digunakan untuk mengatasi gejala alergi pada anak-anak, tersedia dalam bentuk cair yang lebih mudah diberikan.",
    dosage: "Anak 2-6 tahun: 2.5ml (1/2 sendok takar) sekali sehari. Anak 6-12 tahun: 5ml (1 sendok takar) sekali sehari.",
    activeIngredient: "Cetirizine HCl 5mg/5ml",
    sideEffects: "Mengantuk ringan, iritabilitas pada beberapa anak.",
    bpomId: "DKL1234567891A1",
  },
  
  // Alergi - Cetirizine 1
  {
    id: 14,
    name: "Zyrtec",
    category: "cetirizine1",
    symptom: "alergi",
    description: "Zyrtec adalah merek dagang cetirizine yang digunakan untuk meredakan gejala rhinitis alergi musiman dan sepanjang tahun, serta urtikaria idiopatik kronis.",
    dosage: "Dewasa dan anak >12 tahun: 1 tablet (10mg) sekali sehari.",
    activeIngredient: "Cetirizine HCl 10mg",
    sideEffects: "Mengantuk, mulut kering, kelelahan.",
    bpomId: "DKL1234567892A1",
  },
  {
    id: 15,
    name: "Incidal-OD",
    category: "cetirizine1",
    symptom: "alergi",
    description: "Incidal-OD adalah cetirizine untuk penggunaan sekali sehari, efektif meredakan gejala alergi dengan durasi kerja 24 jam.",
    dosage: "Dewasa: 1 tablet sekali sehari.",
    activeIngredient: "Cetirizine HCl 10mg",
    sideEffects: "Mengantuk ringan, kelelahan, sakit kepala sesekali.",
    bpomId: "DKL1234567893A1",
  },
  
  // Alergi - Cetirizine 2
  {
    id: 16,
    name: "Ryvel",
    category: "cetirizine2",
    symptom: "alergi",
    description: "Ryvel adalah cetirizine yang digunakan untuk meredakan gejala alergi, tersedia dalam bentuk tablet yang mudah dikonsumsi.",
    dosage: "Dewasa dan anak >12 tahun: 1 tablet sekali sehari.",
    activeIngredient: "Cetirizine HCl 10mg",
    sideEffects: "Mengantuk, pusing, sakit kepala ringan.",
    bpomId: "DKL1234567894A1",
  },
  {
    id: 17,
    name: "Cerizin",
    category: "cetirizine2",
    symptom: "alergi",
    description: "Cerizin adalah merek cetirizine yang digunakan untuk mengatasi berbagai kondisi alergi seperti rhinitis alergi, urtikaria, dan dermatitis atopik.",
    dosage: "Dewasa: 1 tablet (10mg) sekali sehari. Lansia: Pertimbangkan penyesuaian dosis.",
    activeIngredient: "Cetirizine HCl 10mg",
    sideEffects: "Mengantuk, mulut kering, kelelahan, pusing.",
    bpomId: "DKL1234567895A1",
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
  
  // Nyeri (Pain) medications
  {
    id: 20,
    name: "Ponstan",
    category: "asam_mefenamat",
    symptom: "nyeri",
    description: "Ponstan mengandung asam mefenamat untuk meredakan nyeri ringan hingga sedang, termasuk nyeri haid dan sakit gigi.",
    dosage: "Dewasa: 500mg 3 kali sehari sesuai kebutuhan, tidak dianjurkan untuk penggunaan lebih dari 7 hari berturut-turut.",
    activeIngredient: "Asam mefenamat 500mg",
    sideEffects: "Gangguan pencernaan, mual, diare, sakit kepala, pusing, ruam kulit.",
    bpomId: "DKL2023456781A1",
    manufacturer: "Pfizer Indonesia",
    bpomRegistrationDate: "2019-03-15",
    contraindication: "Hipersensitivitas terhadap asam mefenamat, tukak lambung aktif, gangguan fungsi ginjal berat.",
    packaging: "Strip 10 kaplet"
  },
  {
    id: 21,
    name: "Ketesse",
    category: "dexketoprofen",
    symptom: "nyeri",
    description: "Ketesse mengandung dexketoprofen untuk meredakan nyeri akut ringan hingga sedang, seperti nyeri otot, nyeri sendi, dan nyeri pasca operasi.",
    dosage: "Dewasa: 25mg setiap 8 jam, maksimal 75mg per hari.",
    activeIngredient: "Dexketoprofen trometamol 25mg",
    sideEffects: "Gangguan pencernaan, mual, muntah, diare, sakit kepala, pusing.",
    bpomId: "DKL2023456782A1",
    manufacturer: "Menarini Indonesia",
    bpomRegistrationDate: "2020-01-30"
  },
  
  // Flu & Pilek (Flu & Cold) medications
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
  
  // Pencernaan (Digestive) medications
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
  }
];

export const getSymptomMedicines = (symptom: SymptomCategory): Medicine[] => {
  return medicines.filter(med => med.symptom === symptom);
};

export const getCategoryMedicines = (category: MedicineCategory): Medicine[] => {
  return medicines.filter(med => med.category === category);
};

export const getMedicineById = (id: number): Medicine | undefined => {
  return medicines.find(med => med.id === id);
};

export const searchMedicines = (query: string): Medicine[] => {
  const searchTerm = query.toLowerCase();
  return medicines.filter(med => 
    med.name.toLowerCase().includes(searchTerm) ||
    med.description.toLowerCase().includes(searchTerm) ||
    med.activeIngredient.toLowerCase().includes(searchTerm) ||
    med.bpomId.toLowerCase().includes(searchTerm)
  );
};
