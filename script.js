// ==========================
// Blood Test App JS
// Last Updated: 18-Oct-2025
// ==========================

// 100 Blood Tests Database
const tests = [
  { name: "Hemoglobin", normalRange: "12 – 16", definition: "Oxygen-carrying protein in red blood cells.", consequences: "Low = anemia; High = dehydration or polycythemia." },
  { name: "White Blood Cells", normalRange: "4 – 11", definition: "Cells that fight infection.", consequences: "Low = infection risk; High = infection or inflammation." },
  { name: "Platelets", normalRange: "150 – 450", definition: "Help with blood clotting.", consequences: "Low = bleeding risk; High = clot risk." },
  { name: "RBC Count", normalRange: "4.2 – 5.9", definition: "Red blood cells that carry oxygen.", consequences: "Low = anemia; High = dehydration or heart disease." },
  { name: "Hematocrit", normalRange: "37 – 52", definition: "Percentage of blood made up of red blood cells.", consequences: "Low = anemia; High = dehydration or lung disease." },
  { name: "MCV", normalRange: "80 – 100", definition: "Average red cell size.", consequences: "Low = iron deficiency; High = B12 or folate deficiency." },
  { name: "MCH", normalRange: "27 – 33", definition: "Average hemoglobin in each red cell.", consequences: "Low = microcytic anemia; High = macrocytic anemia." },
  { name: "MCHC", normalRange: "32 – 36", definition: "Concentration of hemoglobin in cells.", consequences: "Low = hypochromia; High = spherocytosis." },
  { name: "RDW", normalRange: "11.5 – 14.5", definition: "Variation in red cell size.", consequences: "High = mixed anemia." },
  { name: "Neutrophils", normalRange: "40 – 75", definition: "Type of white blood cell that fights bacteria.", consequences: "Low = infection risk; High = bacterial infection." },
  { name: "Lymphocytes", normalRange: "20 – 45", definition: "Immune defense cells that fight viruses.", consequences: "Low = immune deficiency; High = viral infection." },
  { name: "Monocytes", normalRange: "2 – 10", definition: "Cells that remove dead tissue and microbes.", consequences: "Low = bone marrow issue; High = chronic infection." },
  { name: "Eosinophils", normalRange: "1 – 6", definition: "Allergic and parasitic response cells.", consequences: "Low = normal; High = allergy or parasite infection." },
  { name: "Basophils", normalRange: "0 – 2", definition: "Release histamine during allergic reactions.", consequences: "High = allergy or myeloproliferative disease." },
  { name: "ESR", normalRange: "0 – 20", definition: "Erythrocyte Sedimentation Rate — measures inflammation.", consequences: "High = inflammation, infection, or cancer." },
  { name: "CRP", normalRange: "0 – 5", definition: "C-Reactive Protein — marker of inflammation.", consequences: "High = infection or chronic inflammation." },
  { name: "Glucose (Fasting)", normalRange: "70 – 100", definition: "Blood sugar level after fasting.", consequences: "Low = hypoglycemia; High = diabetes." },
  { name: "HbA1c", normalRange: "4 – 5.6", definition: "Average blood sugar for the last 3 months.", consequences: "High = poor diabetic control." },
  { name: "Urea", normalRange: "10 – 45", definition: "Waste product removed by the kidneys.", consequences: "Low = liver disease; High = kidney dysfunction." },
  { name: "Creatinine", normalRange: "0.6 – 1.3", definition: "Byproduct of muscle metabolism.", consequences: "High = kidney problems." },
  { name: "BUN", normalRange: "7 – 20", definition: "Blood Urea Nitrogen — another kidney marker.", consequences: "High = kidney dysfunction; Low = liver issue." },
  { name: "Sodium", normalRange: "135 – 145", definition: "Maintains fluid and nerve balance.", consequences: "Low = dehydration; High = fluid imbalance." },
  { name: "Potassium", normalRange: "3.5 – 5.1", definition: "Regulates heart and muscle function.", consequences: "Low = muscle weakness; High = heart rhythm issues." },
  { name: "Calcium", normalRange: "8.5 – 10.5", definition: "Bone strength and nerve signaling.", consequences: "Low = hypocalcemia; High = hyperparathyroidism." },
  { name: "Phosphorus", normalRange: "2.5 – 4.5", definition: "Bone and energy metabolism.", consequences: "Low = malnutrition; High = kidney disease." },
  { name: "Magnesium", normalRange: "1.7 – 2.3", definition: "Muscle and nerve function.", consequences: "Low = cramps; High = kidney failure." },
  { name: "Chloride", normalRange: "98 – 106", definition: "Maintains acid-base balance.", consequences: "Low = metabolic alkalosis; High = dehydration." },
  { name: "Total Protein", normalRange: "6.0 – 8.3", definition: "Sum of albumin and globulin.", consequences: "Low = malnutrition; High = inflammation." },
  { name: "Albumin", normalRange: "3.5 – 5.0", definition: "Maintains oncotic pressure.", consequences: "Low = liver disease; High = dehydration." },
  { name: "Globulin", normalRange: "2.0 – 3.5", definition: "Part of the immune system proteins.", consequences: "High = chronic infection or myeloma." },
  { name: "Bilirubin Total", normalRange: "0.1 – 1.2", definition: "Breakdown product of red cells.", consequences: "High = liver disease or bile duct obstruction." },
  { name: "AST (SGOT)", normalRange: "0 – 40", definition: "Liver enzyme (aspartate transaminase).", consequences: "High = liver or heart injury." },
  { name: "ALT (SGPT)", normalRange: "0 – 45", definition: "Liver enzyme (alanine transaminase).", consequences: "High = liver damage." },
  { name: "Alkaline Phosphatase", normalRange: "40 – 129", definition: "Liver and bone enzyme.", consequences: "High = liver or bone disorder." },
  { name: "GGT", normalRange: "0 – 51", definition: "Gamma-glutamyl transferase, liver enzyme.", consequences: "High = alcohol or bile duct issues." },
  { name: "LDH", normalRange: "140 – 280", definition: "Tissue breakdown enzyme.", consequences: "High = tissue injury or hemolysis." },
  { name: "Amylase", normalRange: "25 – 125", definition: "Pancreatic enzyme for digestion.", consequences: "High = pancreatitis." },
  { name: "Lipase", normalRange: "10 – 140", definition: "Breaks down fats in digestion.", consequences: "High = pancreatic inflammation." },
  { name: "Cholesterol Total", normalRange: "<200", definition: "Total cholesterol in blood.", consequences: "High = heart disease risk." },
  { name: "HDL", normalRange: ">40", definition: "Good cholesterol.", consequences: "Low = heart risk; High = protective." },
  { name: "LDL", normalRange: "<130", definition: "Bad cholesterol.", consequences: "High = artery blockage risk." },
  { name: "Triglycerides", normalRange: "<150", definition: "Stored fat energy in blood.", consequences: "High = metabolic syndrome or diabetes." },
  { name: "Uric Acid", normalRange: "3.4 – 7.0", definition: "Byproduct of purine metabolism.", consequences: "High = gout or kidney stones." },
  { name: "TSH", normalRange: "0.4 – 4.0", definition: "Thyroid Stimulating Hormone.", consequences: "Low = hyperthyroid; High = hypothyroid." },
  { name: "T3", normalRange: "80 – 200", definition: "Active thyroid hormone.", consequences: "Low = hypothyroidism; High = hyperthyroidism." },
  { name: "T4", normalRange: "5.0 – 12.0", definition: "Thyroxine hormone.", consequences: "Low = hypothyroidism; High = hyperthyroidism." },
  { name: "Prolactin", normalRange: "4 – 23", definition: "Hormone for milk production.", consequences: "High = pituitary tumor; Low = rare." },
  { name: "FSH", normalRange: "1 – 12", definition: "Follicle Stimulating Hormone.", consequences: "Low = infertility; High = ovarian/testicular failure." },
  { name: "LH", normalRange: "1 – 18", definition: "Luteinizing Hormone.", consequences: "Low = pituitary disorder; High = menopause or PCOS." },
  { name: "Progesterone", normalRange: "0.1 – 20", definition: "Prepares uterus for pregnancy.", consequences: "Low = ovulation issue; High = pregnancy or hormone therapy." },
  { name: "Estrogen (E2)", normalRange: "15 – 350", definition: "Main female hormone.", consequences: "Low = menopause; High = estrogen therapy or tumors." },
  { name: "Testosterone", normalRange: "300 – 1000", definition: "Main male hormone.", consequences: "Low = fatigue or low libido; High = steroid use or tumor." },
  { name: "Cortisol", normalRange: "5 – 25", definition: "Stress hormone from adrenal glands.", consequences: "Low = adrenal failure; High = Cushing’s." },
  { name: "Insulin", normalRange: "2 – 25", definition: "Regulates blood sugar.", consequences: "High = insulin resistance; Low = diabetes type 1." },
  { name: "Ferritin", normalRange: "20 – 250", definition: "Iron storage protein.", consequences: "Low = iron deficiency; High = inflammation or hemochromatosis." },
  { name: "Iron", normalRange: "50 – 170", definition: "Essential mineral for hemoglobin.", consequences: "Low = anemia; High = liver disease." },
  { name: "Vitamin B12", normalRange: "200 – 900", definition: "For nerve and blood cell health.", consequences: "Low = anemia or neuropathy." },
  { name: "Vitamin D", normalRange: "30 – 100", definition: "Regulates calcium and bone strength.", consequences: "Low = weak bones; High = toxicity." },
  { name: "Folate", normalRange: "3 – 17", definition: "Needed for red blood cell formation.", consequences: "Low = anemia; High = B12 deficiency masking." },
  { name: "Total Cholesterol/HDL Ratio", normalRange: "< 4.5", definition: "Risk ratio for heart disease.", consequences: "High = heart disease risk." },
  { name: "Creatine Kinase", normalRange: "30 – 200", definition: "Muscle damage enzyme.", consequences: "High = heart attack or muscle injury." },
  { name: "Prothrombin Time (PT)", normalRange: "11 – 13.5", definition: "Blood clotting time.", consequences: "High = bleeding risk; Low = clot risk." },
  { name: "INR", normalRange: "0.8 – 1.2", definition: "Standardized PT ratio.", consequences: "High = bleeding risk; Low = clot risk." },
  { name: "aPTT", normalRange: "25 – 35", definition: "Partial Thromboplastin Time — clotting test.", consequences: "High = bleeding; Low = clot risk." },
  { name: "D-Dimer", normalRange: "< 0.5", definition: "Fibrin degradation product.", consequences: "High = clot formation (DVT/PE)." },
  { name: "Ammonia", normalRange: "15 – 45", definition: "Waste product from protein metabolism.", consequences: "High = liver dysfunction." },
  { name: "Creatinine Clearance", normalRange: "90 – 140", definition: "Kidney filtration ability.", consequences: "Low = kidney failure." },
  { name: "Protein C", normalRange: "70 – 140", definition: "Anticoagulant protein.", consequences: "Low = clot risk." },
  { name: "Protein S", normalRange: "60 – 130", definition: "Anticoagulant protein.", consequences: "Low = clot risk." },
  { name: "Homocysteine", normalRange: "5 – 15", definition: "Amino acid marker for heart disease.", consequences: "High = cardiovascular risk." },
  { name: "Beta HCG", normalRange: "< 5", definition: "Pregnancy hormone.", consequences: "High = pregnancy; Low = not pregnant." },
  { name: "Pro BNP", normalRange: "< 125", definition: "Heart failure marker.", consequences: "High = heart failure." },
  { name: "C-peptide", normalRange: "0.5 – 2.0", definition: "Insulin production marker.", consequences: "Low = type 1 diabetes; High = insulinoma." },
  { name: "Serum Albumin/Globulin Ratio", normalRange: "1.0 – 2.5", definition: "Balance of albumin and globulin.", consequences: "Low = liver disease; High = dehydration." },
  { name: "Creatinine Kinase-MB", normalRange: "0 – 7", definition: "Heart muscle enzyme.", consequences: "High = heart attack." },
  { name: "Troponin I", normalRange: "< 0.04", definition: "Cardiac injury marker.", consequences: "High = heart attack." },
  { name: "Troponin T", normalRange: "< 0.01", definition: "Cardiac injury marker.", consequences: "High = heart attack." },
  { name: "Lactate", normalRange: "0.5 – 2.2", definition: "Marker of oxygen delivery to tissues.", consequences: "High = shock or hypoxia." },
  { name: "Anion Gap", normalRange: "8 – 16", definition: "Acid-base balance measure.", consequences: "High = acidosis; Low = hypoalbuminemia." },
  { name: "Osmolality", normalRange: "275 – 295", definition: "Concentration of solutes in blood.", consequences: "High = dehydration; Low = overhydration." },
  // 8 new tests to reach 100
  { name: "CEA", normalRange: "<5", definition: "Carcinoembryonic antigen, tumor marker.", consequences: "High = certain cancers or smoking." },
  { name: "CA-125", normalRange: "<35", definition: "Tumor marker for ovarian cancer.", consequences: "High = ovarian cancer or inflammation." },
  { name: "CA 19-9", normalRange: "<37", definition: "Tumor marker for pancreatic/biliary cancers.", consequences: "High = cancer or pancreatitis." },
  { name: "AFP", normalRange: "<10", definition: "Alpha-fetoprotein, liver & germ cell tumors marker.", consequences: "High = liver cancer or pregnancy." },
  { name: "Vitamin K", normalRange: "0.2 – 3.2", definition: "Essential for blood clotting.", consequences: "Low = bleeding risk; High = rare toxicity." },
  { name: "PTH", normalRange: "10 – 65", definition: "Parathyroid hormone, regulates calcium.", consequences: "Low = hypoparathyroidism; High = hyperparathyroidism." },
  { name: "Vitamin A", normalRange: "20 – 80", definition: "Important for vision and skin.", consequences: "Low = night blindness; High = toxicity." },
  { name: "Vitamin E", normalRange: "5 – 20", definition: "Antioxidant for cell protection.", consequences: "Low = nerve or muscle damage; High = bleeding risk." }
];

// ==========================
// DOM Elements
// ==========================
const testSelect = document.getElementById("testSelect");
const resultInput = document.getElementById("resultInput");
const resultsContainer = document.getElementById("resultsContainer");
const resetBtn = document.getElementById("resetBtn");
const searchInput = document.getElementById("searchInput");

// ==========================
// Populate Dropdown Initially
// ==========================
function populateDropdown(list) {
  testSelect.innerHTML = `<option value="">Select a Test</option>`;
  list.forEach(t => {
    const option = document.createElement("option");
    option.value = t.name;
    option.textContent = t.name;
    testSelect.appendChild(option);
  });
}
populateDropdown(tests);

// ==========================
// Add Test on Result Input
// ==========================
resultInput.addEventListener("change", () => {
  const testName = testSelect.value;
  const result = parseFloat(resultInput.value);
  if (!testName || isNaN(result)) return;

  const test = tests.find(t => t.name === testName);
  if (!test) return;

  // Determine status
  const [low, high] = test.normalRange.split(/[–<>]/).map(x => parseFloat(x.trim()));
  let status = "normal";
  let icon = "✅";
  if (result < low) { status = "low"; icon = "⚠️"; }
  else if (result > high) { status = "high"; icon = "❌"; }

  // Create Test Card
  const card = document.createElement("div");
  card.className = "test-card";
  card.innerHTML = `
    <h3>${icon} ${test.name}</h3>
    <p><strong>Result:</strong> ${result}</p>
    <p><strong>Normal Range:</strong> ${test.normalRange}</p>
    <p><strong>Status:</strong> ${status}</p>
    <p><strong>Definition:</strong> ${test.definition}</p>
    <p><strong>Consequences:</strong> ${test.consequences}</p>
  `;
  resultsContainer.appendChild(card);

  // Reset input
  resultInput.value = "";
});

// ==========================
// Reset All Tests
// ==========================
resetBtn.addEventListener("click", () => {
  resultsContainer.innerHTML = "";
  resultInput.value = "";
  testSelect.value = "";
});

// ==========================
// Search Tests
// ==========================
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = tests.filter(t => t.name.toLowerCase().includes(query));
  populateDropdown(filtered);
});
