
// vocabulary-test-1.js — English Vocabulary Test (Reading 1)
// Fixed: missing option, button disabling, visual feedback, shuffling, score saving

const rawQuestions = [
  { q: "obesity",              options: ["tana og'irligi",      "ozuqa moddasi",    "semizlik",                  "stress"],              answer: 2 },
  { q: "cardiovascular",       options: ["asab",                "hazm",             "nafas",                     "yurak-qon tomir"],     answer: 3 },
  { q: "nutrient",             options: ["vitamin",             "ozuqa moddasi",    "protein",                   "calorie"],             answer: 1 },
  { q: "wellbeing",            options: ["farovonlik",          "charchoq",         "kasallik",                  "stress"],              answer: 0 },
  { q: "processed food",       options: ["tabiiy ovqat",        "meva",             "qayta ishlangan ovqat",     "sabzavot"],            answer: 2 },
  { q: "dietary pattern",      options: ["ovqatlanish odati",   "sport rejasi",     "uyqu tartibi",              "ish rejasi"],          answer: 0 },
  { q: "macronutrients",       options: ["makroelementlar",     "vitaminlar",       "minerallar",                "uglevodlar"],          answer: 0 },
  { q: "micronutrients",       options: ["mikroelementlar",     "yog'lar",          "oqsillar",                  "karbohidratlar"],      answer: 0 },
  { q: "inflammation",         options: ["infeksiya",           "stress",           "kasallik",                  "yallig'lanish"],       answer: 3 },
  { q: "gut microbiome",       options: ["ichak mikrobiomi",    "miya faoliyati",   "qon aylanishi",             "asab tizimi"],         answer: 0 },
  { q: "longevity",            options: ["tez qarish",          "charchoq",         "uzoq umr",                  "kasallik"],            answer: 2 },
  { q: "hypertension",         options: ["yurak kasalligi",     "qon bosimi ortishi","stress",                   "yallig'lanish"],       answer: 1 },
  { q: "antioxidant",          options: ["oksidlanishga qarshi moddalar","vitamin D","minerallar",               "yog'"],                answer: 0 },
  { q: "fermented",            options: ["fermentlangan",       "tayyorlangan",     "qayta ishlangan",           "pishirilgan"],         answer: 0 },
  { q: "saturated fat",        options: ["yog'",                "protein",          "to'yingan yog'",            "uglevod"],             answer: 2 },
  { q: "omega-3 fatty acids",  options: ["yurak yog'i",         "vitamin A",        "kaltsiy",                   "omega-3 yog' kislotasi"], answer: 3 },
  { q: "protein",              options: ["yog'",                "uglevod",          "vitamin",                   "oqsil"],               answer: 3 },
  { q: "Which word means 'a fat-soluble compound essential for health'?", options: ["fiber", "vitamin", "calorie", "mineral"], answer: 1 },
  { q: "mineral",              options: ["minerallar",          "yog'",             "oqsil",                     "vitamin"],             answer: 0 },
  { q: "calorie",              options: ["kaloriya",            "protein",          "yog'",                      "uglevod"],             answer: 0 },
  { q: "portion",              options: ["yog'",                "ovqat miqdori",    "kaloriya",                  "oqsil"],               answer: 1 },
  { q: "digestion",            options: ["yurak faoliyati",     "nafas olish",      "hazm",                      "stress"],              answer: 2 },
  { q: "metabolism",           options: ["modda almashinuvi",   "uzoq umr",         "kasallik",                  "stress"],              answer: 0 },
  { q: "Which word means 'cardiovascular exercise'?", options: ["yoga", "stretching", "cardio", "pilates"],      answer: 2 },
  { q: "fiber",                options: ["tolalar",             "yog'",             "protein",                   "vitamin"],             answer: 0 },
  { q: "cholesterol",          options: ["xolesterin",          "yog'",             "protein",                   "kaloriya"],            answer: 0 },
  { q: "Which word means 'a sweet crystalline substance'?", options: ["starch", "fructose", "sugar", "glucose"], answer: 2 },
  { q: "obesity prevention",   options: ["semizlikni oldini olish","farovonlik",    "stress",                    "diet"],                answer: 0 },
  { q: "healthy fats",         options: ["foydali yog'lar",     "zararli yog'lar", "oqsil",                     "karbohidrat"],         answer: 0 },
  { q: "chronic disease",      options: ["o'tkir kasallik",     "tez qarish",      "surunkali kasallik",         "ozuqa"],               answer: 2 },
  { q: "mental health",        options: ["ruhiy salomatlik",    "jismoniy salomatlik","stress",                  "yallig'lanish"],       answer: 0 },
  { q: "immune system",        options: ["immunitet tizimi",    "hazm tizimi",      "yurak faoliyati",           "nafas"],               answer: 0 },
  { q: "antibiotic",           options: ["antibiotik",          "probiotic",        "vitamin",                   "minerallar"],          answer: 0 },
  { q: "hydration",            options: ["qovoq",               "yog'",             "suv bilan ta'minlash",      "karbohidrat"],         answer: 2 },
  { q: "Which phrase means 'physical activity'?", options: ["rest", "sleep", "exercise", "diet"],                answer: 2 },
  { q: "sleep",                options: ["uyqu",                "stress",           "charchoq",                  "yurak"],               answer: 0 },
  { q: "Which word means 'mental or emotional strain'?", options: ["energy", "fatigue", "stress", "sleep"],      answer: 2 },
  { q: "fatigue",              options: ["energiya",            "stress",           "kasallik",                  "charchoq"],            answer: 3 },
  { q: "energy",               options: ["energiya",            "yog'",             "protein",                   "kaloriya"],            answer: 0 },
  { q: "vitamin D",            options: ["vitamin D",           "vitamin A",        "kaltsiy",                   "temir"],               answer: 0 },
  { q: "calcium",              options: ["kaltsiy",             "magniy",           "protein",                   "karbohidrat"],         answer: 0 },
  { q: "iron (mineral)",       options: ["temir",               "rux",              "protein",                   "vitamin"],             answer: 0 },
  { q: "zinc",                 options: ["rux",                 "temir",            "yog'",                      "protein"],             answer: 0 },
  { q: "magnesium",            options: ["magniy",              "temir",            "yog'",                      "protein"],             answer: 0 },
  { q: "potassium",            options: ["kaliy",               "magniy",           "temir",                     "protein"],             answer: 0 },
  { q: "sodium",               options: ["natriy",              "kaliy",            "temir",                     "protein"],             answer: 0 },
  { q: "Which word means 'a regulated eating plan'?", options: ["metabolism", "diet", "hydration", "fatigue"],   answer: 1 },
  { q: "nutrition",            options: ["ozuqa",               "yog'",             "stress",                    "kasallik"],            answer: 0 },
  { q: "healthy eating",       options: ["stress",              "yog'",             "sog'lom ovqatlanish",       "kasallik"],            answer: 2 },
  { q: "vegetables",           options: ["sabzavotlar",         "mevalar",          "yog'",                      "protein"],             answer: 0 },
  { q: "fruits",               options: ["mevalar",             "sabzavotlar",      "yog'",                      "protein"],             answer: 0 },
  { q: "whole grains",         options: ["raffinatsiyalangan don","butun don",      "sabzavot",                  "protein"],             answer: 1 }
];

// Shuffle questions
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const questions = shuffle(rawQuestions);
let current = 0, score = 0;

function loadQuestion() {
  if (current >= questions.length) { showResult(); return; }

  const q    = questions[current];
  const btns = document.querySelectorAll(".answer-btn");

  document.getElementById("counter").textContent =
    `Savol ${current + 1} / ${questions.length}`;
  document.getElementById("progressFill").style.width =
    (current / questions.length * 100) + "%";
  document.getElementById("question").textContent = q.q;
  document.getElementById("result").textContent   = "";

  btns.forEach((btn, i) => {
    btn.textContent      = q.options[i];
    btn.className        = "answer-btn";
    btn.disabled         = false;
    btn.style.background = "";
  });
}

function checkAnswer(index) {
  const btns   = document.querySelectorAll(".answer-btn");
  const correct = questions[current].answer;

  btns.forEach(b => b.disabled = true);

  btns[index].classList.add(index === correct ? "correct" : "wrong");
  btns[correct].classList.add("correct");

  document.getElementById("result").textContent =
    index === correct ? "To'g'ri ✅" :
    "Xato ❌ — To'g'ri javob: " + questions[current].options[correct];

  if (index === correct) score++;
  current++;
  setTimeout(loadQuestion, 1200);
}

function showResult() {
  localStorage.setItem("englishTestScore", score);
  localStorage.setItem("englishTestTotal", questions.length);
  document.querySelector(".test-box").innerHTML = `
    <div class="result-screen">
      <h2>Test tugadi 🎉</h2>
      <p>Natija: <strong>${score} / ${questions.length}</strong></p>
      <button class="restart-btn" onclick="location.reload()">🔁 Qayta urinish</button>
      <br><br>
      <a href="tests.html" style="color:var(--muted);font-size:14px;">← Testlarga qaytish</a>
    </div>`;
}

loadQuestion();