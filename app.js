const screens = [...document.querySelectorAll("[data-screen]")];
const menuModal = document.querySelector("#menu-modal");
const settingsModal = document.querySelector("#settings-modal");
const toastStack = document.querySelector("#toast-stack");

const playerNameInput = document.querySelector("#player-name");
const playerNamePreview = document.querySelector("#preview-player-name");
const difficultyInput = document.querySelector("#difficulty");
const settingsDifficulty = document.querySelector("#settings-difficulty");
const textSizeInput = document.querySelector("#text-size");

const scoreValue = document.querySelector("#score-value");
const timeValue = document.querySelector("#time-value");
const stageValue = document.querySelector("#stage-value");
const skillLabel = document.querySelector("#skill-label");
const targetWord = document.querySelector("#target-word");
const sentenceText = document.querySelector("#sentence-text");
const choicesList = document.querySelector("#choices-list");
const hintButton = document.querySelector("#hint-button");
const hintText = document.querySelector("#hint-text");
const feedback = document.querySelector("#feedback");

const loadingBar = document.querySelector("#loading-bar");
const loadingPercent = document.querySelector("#loading-percent");
const loadingMessage = document.querySelector("#loading-message");

const finalScore = document.querySelector("#final-score");
const finalCorrect = document.querySelector("#final-correct");
const finalBadge = document.querySelector("#final-badge");
const resultTitle = document.querySelector("#result-title");
const resultSummary = document.querySelector("#result-summary");
const leaderboardList = document.querySelector("#leaderboard-list");

const storageKey = "askar-meanings-leaderboard";

const challenges = [
  {
    word: "عين",
    sentence: "شرب المسافر من عين الماء.",
    skill: "السياق الدلالي",
    hint: "ابحث عن علاقة الكلمة بالماء.",
    level: "easy",
    answer: "نبع الماء",
    places: [
      ["الواحة", "نبع الماء"],
      ["المرقب", "عضو البصر"],
      ["الديوان", "الشخص ذاته"],
      ["المعبر", "الجاسوس"]
    ]
  },
  {
    word: "ساق",
    sentence: "ساق الراعي الغنم إلى المرعى.",
    skill: "المعنى حسب الاستعمال",
    hint: "الكلمة هنا فعل وليست اسمًا.",
    level: "easy",
    answer: "قاد ودفع أمامه",
    places: [
      ["المرعى", "قاد ودفع أمامه"],
      ["المشفى", "جزء من الجسد"],
      ["السوق", "جذع النبات"],
      ["المرفأ", "روى الخبر"]
    ]
  },
  {
    word: "مكتب",
    sentence: "راجع الباحث الوثائق في المكتب.",
    skill: "الصيغة الصرفية",
    hint: "صيغة الكلمة تدل غالبًا على مكان.",
    level: "easy",
    answer: "مكان العمل أو الكتابة",
    places: [
      ["دار الوثائق", "مكان العمل أو الكتابة"],
      ["المطبعة", "الشيء المكتوب"],
      ["المدرسة", "من يكتب"],
      ["السجل", "عملية الكتابة"]
    ]
  },
  {
    word: "أشرق",
    sentence: "أشرق وجه الطفل حين سمع الخبر.",
    skill: "الحقيقة والمجاز",
    hint: "لا تتعلق الجملة بالشمس.",
    level: "medium",
    answer: "تهلل وظهر عليه السرور",
    places: [
      ["الساحة", "تهلل وظهر عليه السرور"],
      ["المرصد", "طلع ضوء الشمس"],
      ["المكتبة", "صار في جهة الشرق"],
      ["القصر", "اشتد حر النهار"]
    ]
  },
  {
    word: "قضى",
    sentence: "قضى القاضي بين الخصمين بالعدل.",
    skill: "السياق المهني",
    hint: "وجود القاضي يوجه المعنى.",
    level: "medium",
    answer: "حكم وفصل",
    places: [
      ["المحكمة", "حكم وفصل"],
      ["الحديقة", "أنهى وقته"],
      ["الميناء", "مات"],
      ["الخزانة", "أدى الدين"]
    ]
  },
  {
    word: "حامل",
    sentence: "وضع النجار الخشب على حامل قوي.",
    skill: "تمييز الاسم والصفة",
    hint: "الكلمة تشير إلى أداة تحمل شيئًا.",
    level: "medium",
    answer: "أداة للإسناد والحمل",
    places: [
      ["الورشة", "أداة للإسناد والحمل"],
      ["العيادة", "امرأة تنتظر مولودًا"],
      ["المعرض", "من يحمل رسالة"],
      ["المخزن", "صفة للثقل"]
    ]
  },
  {
    word: "استخرج",
    sentence: "استخرج الطالب الفكرة الرئيسة من النص.",
    skill: "دلالة الصيغة",
    hint: "صيغة استفعل تدل هنا على الطلب والانتزاع.",
    level: "hard",
    answer: "استنبط وأظهر",
    places: [
      ["المكتبة", "استنبط وأظهر"],
      ["المنجم", "حفر المعدن فقط"],
      ["المطار", "خرج مسرعًا"],
      ["المختبر", "نسخ النص"]
    ]
  },
  {
    word: "لسان",
    sentence: "كان للشاعر لسان صادق في مدح وطنه.",
    skill: "المجاز اللغوي",
    hint: "المقصود قدرة التعبير لا العضو.",
    level: "hard",
    answer: "البيان والكلام",
    places: [
      ["المجلس", "البيان والكلام"],
      ["العيادة", "عضو في الفم"],
      ["الساحل", "طرف اليابسة الممتد في البحر"],
      ["المطبخ", "نوع من الطعام"]
    ]
  },
  {
    word: "مفتاح",
    sentence: "الصبر مفتاح النجاح.",
    skill: "الدلالة المجازية",
    hint: "الكلمة لا تشير إلى أداة معدنية.",
    level: "hard",
    answer: "سبب الوصول",
    places: [
      ["بوابة النجاح", "سبب الوصول"],
      ["الباب", "أداة فتح القفل"],
      ["المختبر", "زر التشغيل"],
      ["الخريطة", "رمز الإيضاح"]
    ]
  }
];

const state = {
  screen: "start",
  playerName: "لاعب العربية",
  difficulty: "medium",
  round: [],
  index: 0,
  score: 0,
  correct: 0,
  streak: 0,
  timeLeft: 45,
  timerId: null,
  answerLocked: false,
  currentResultId: null,
  pausedByModal: false
};

const placeIcons = {
  "الواحة": "M8 39c8-12 18-14 28-5 9-7 18-5 28 5M18 33c4-8 10-13 18-15M36 18c8 2 14 7 20 15M39 12v32",
  "المرقب": "M18 42h28M24 42V20h16v22M22 20l10-10 10 10M28 28h8M28 35h8",
  "الديوان": "M12 42h40V18L32 8 12 18v24ZM22 42V28h20v14M24 20h16",
  "المعبر": "M10 42h44M16 42c0-16 8-24 16-24s16 8 16 24M25 27h14",
  "المرعى": "M10 42h44M18 36c4-10 10-15 18-15s14 5 18 15M20 31h-6M52 31h-6",
  "المشفى": "M15 42h38V16H15v26ZM26 29h16M34 21v16",
  "السوق": "M12 24h42l-4 18H16l-4-18ZM18 24l6-12h18l6 12M24 31h20",
  "المرفأ": "M10 42h44M15 34c8 5 14 5 22 0 6 5 12 5 18 0M32 10v24M24 20h16M24 28h16",
  "دار الوثائق": "M16 42h36V16H16v26ZM24 24h20M24 31h20M24 38h12M22 16l4-7h16l4 7",
  "المطبعة": "M16 30h36v12H16V30ZM20 14h28v16H20V14ZM24 37h20",
  "المدرسة": "M10 22 32 10l22 12-22 12-22-12ZM18 28v10c9 6 19 6 28 0V28",
  "السجل": "M18 12h28v32H18V12ZM25 21h14M25 29h14M25 37h8",
  "الساحة": "M10 42h44M18 34h28M20 34V18h24v16M28 25h8",
  "المرصد": "M14 42h36M32 34V20M22 20h20M27 14h10M20 34h24",
  "القصر": "M14 42h36V22l-6-6-6 6-6-6-6 6-6-6-6 6v20ZM28 42V30h8v12",
  "المحكمة": "M10 42h44M14 22h36M18 22v16M46 22v16M32 22v16M12 22 32 10l20 12",
  "الحديقة": "M10 42h44M22 38c-6-8-5-17 4-22 8 6 10 14 3 22M40 38c-4-8-2-15 6-20 5 7 5 14-1 20",
  "الميناء": "M10 42h44M15 34c8 5 14 5 22 0 6 5 12 5 18 0M32 12l14 18H18L32 12Z",
  "الخزانة": "M18 14h28v28H18V14ZM24 20h16M24 28h16M24 36h16M43 27h3",
  "الورشة": "M14 42h40M20 38l14-24 14 24M25 30h18M18 18l8-8M20 10l8 8",
  "العيادة": "M15 42h38V16H15v26ZM26 29h16M34 21v16",
  "المعرض": "M14 42h40M18 36h32V16H18v20ZM24 30l7-8 6 6 5-5 5 7",
  "المخزن": "M14 42h40V18H14v24ZM20 24h10v18M34 24h14v18M20 18l6-8h16l6 8",
  "المكتبة": "M14 42h40M18 14h8v28h-8V14ZM30 12h8v30h-8V12ZM42 17h8v25h-8V17Z",
  "المنجم": "M12 42h40M18 38l10-22h8l10 22M24 30h16M32 16v-6",
  "المطار": "M10 42h44M16 28l36-12-13 16 7 10-12-7-12 7 4-12-10-2Z",
  "المختبر": "M18 42h28M26 12v12L16 42h40L38 24V12M25 12h14",
  "المجلس": "M14 42h40M18 35h28v7H18v-7ZM22 26h20M18 18h28v17H18V18Z",
  "الساحل": "M10 42h44M12 32c8-5 15-5 23 0s15 5 23 0M18 24c10-10 23-10 34 0",
  "المطبخ": "M18 42h28M22 20h20v22H22V20ZM26 20V11M34 20V11M42 20V11",
  "بوابة النجاح": "M14 42h40M20 42V20c0-8 6-12 12-12s12 4 12 12v22M28 30h8",
  "الباب": "M20 42V12h24v30M37 28h2",
  "الخريطة": "M14 38V14l12-4 12 4 12-4v24l-12 4-12-4-12 4ZM26 10v24M38 14v24"
};

function showScreen(name) {
  state.pausedByModal = false;
  screens.forEach((screen) => {
    screen.classList.toggle("screen-active", screen.id === `${name}-screen`);
  });
  state.screen = name;
  closeModals(false);

  if (name !== "game") {
    stopTimer();
  }

  if (name === "leaderboard") {
    renderLeaderboard();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeModals(resumeGame = true) {
  [menuModal, settingsModal].forEach((modal) => {
    if (modal.open) {
      modal.close();
    }
  });

  if (resumeGame && state.pausedByModal && state.screen === "game") {
    state.pausedByModal = false;
    startTimer();
  }
}

function openModal(modal) {
  if (state.screen === "game" && state.timerId) {
    state.pausedByModal = true;
    stopTimer();
  }

  if (modal === settingsModal && menuModal.open) {
    menuModal.close();
  }

  if (!modal.open) {
    modal.showModal();
  }
}

function showToast(type, title, message) {
  const toast = document.createElement("article");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<h3>${title}</h3><p>${message}</p>`;
  toastStack.append(toast);
  window.setTimeout(() => toast.remove(), 3600);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function buildRound() {
  const selected =
    state.difficulty === "easy"
      ? challenges.filter((challenge) => challenge.level !== "hard")
      : state.difficulty === "hard"
        ? challenges.filter((challenge) => challenge.level !== "easy")
        : challenges;

  state.round = shuffle(selected).slice(0, 6);
  if (state.round.length < 6) {
    state.round = shuffle(challenges).slice(0, 6);
  }
}

function startLoading() {
  showScreen("loading");
  let percent = 0;
  loadingBar.style.width = "0%";
  loadingPercent.textContent = "0%";
  loadingMessage.textContent = "نرتب المعاني داخل الخريطة.";

  const loader = window.setInterval(() => {
    percent += 20;
    loadingBar.style.width = `${percent}%`;
    loadingPercent.textContent = `${percent}%`;

    if (percent === 60) {
      loadingMessage.textContent = "نراجع السياقات قبل انطلاق الجولة.";
    }

    if (percent >= 100) {
      window.clearInterval(loader);
      startGame();
    }
  }, 220);
}

function startGame() {
  state.index = 0;
  state.score = 0;
  state.correct = 0;
  state.streak = 0;
  state.timeLeft = 45;
  state.answerLocked = false;
  buildRound();
  updateStatus();
  showScreen("game");
  renderChallenge();
  startTimer();
  showToast("info", "بدأت الجولة", "ابحث عن المعنى الصحيح.");
}

function restartGame() {
  closeModals();
  startLoading();
}

function startTimer() {
  stopTimer();
  state.timerId = window.setInterval(() => {
    state.timeLeft -= 1;
    updateStatus();

    if (state.timeLeft === 10) {
      showToast("warning", "تنبيه", "ستنتهي الجولة بعد وقت قصير.");
    }

    if (state.timeLeft <= 0) {
      finishGame();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function updateStatus() {
  scoreValue.textContent = state.score;
  timeValue.textContent = Math.max(0, state.timeLeft);
  stageValue.textContent = `${Math.min(state.index + 1, state.round.length)} / ${state.round.length || 6}`;
}

function renderChallenge() {
  const challenge = state.round[state.index];
  if (!challenge) {
    finishGame();
    return;
  }

  state.answerLocked = false;
  skillLabel.textContent = challenge.skill;
  targetWord.textContent = challenge.word;
  sentenceText.textContent = challenge.sentence;
  hintText.hidden = true;
  hintText.textContent = "";
  hintButton.disabled = false;
  feedback.hidden = true;
  feedback.className = "feedback";
  choicesList.innerHTML = "";

  shuffle(challenge.places).forEach(([place, meaning]) => {
    const button = document.createElement("button");
    button.className = "hideout-card";
    button.type = "button";
    button.dataset.meaning = meaning;
    button.innerHTML = `
      <div class="hideout-illustration">
        <span class="hideout-tag">${place}</span>
        <svg viewBox="0 0 64 52" aria-hidden="true">
          <path d="${placeIcons[place] || placeIcons["الساحة"]}"></path>
        </svg>
      </div>
      <h3>${meaning}</h3>
      <p>اضغط لاختيار هذا المعنى.</p>
    `;
    button.addEventListener("click", () => chooseAnswer(button, challenge));
    choicesList.append(button);
  });
}

function chooseAnswer(button, challenge) {
  if (state.answerLocked) {
    return;
  }

  state.answerLocked = true;
  const selectedMeaning = button.dataset.meaning;
  const isCorrect = selectedMeaning === challenge.answer;
  const cards = [...choicesList.querySelectorAll(".hideout-card")];
  cards.forEach((card) => {
    card.disabled = true;
    if (card.dataset.meaning === challenge.answer) {
      card.classList.add("correct");
    }
  });

  if (isCorrect) {
    const speedBonus = Math.max(0, state.timeLeft) * 2;
    state.streak += 1;
    const streakBonus = state.streak > 1 && state.streak % 2 === 0 ? 50 : 0;
    state.correct += 1;
    state.score += 100 + speedBonus + streakBonus;
    feedback.className = "feedback success";
    feedback.textContent = streakBonus
      ? "إجابة صحيحة. حصلت على مكافأة سلسلة."
      : "إجابة صحيحة. انتقل إلى المطاردة التالية.";
    showToast("success", "إجابة صحيحة", "قبضت على المعنى المختبئ.");
  } else {
    state.streak = 0;
    button.classList.add("wrong");
    feedback.className = "feedback error";
    feedback.textContent = `إجابة غير صحيحة. المعنى المناسب هو: ${challenge.answer}.`;
    showToast("error", "إجابة غير صحيحة", "انتبه إلى سياق الجملة.");
  }

  feedback.hidden = false;
  updateStatus();
  window.setTimeout(nextChallenge, 1500);
}

function nextChallenge() {
  state.index += 1;
  if (state.index >= state.round.length) {
    finishGame();
    return;
  }

  renderChallenge();
  updateStatus();
}

function finishGame() {
  stopTimer();
  state.pausedByModal = false;
  const badge = getBadge();
  const resultId = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  state.currentResultId = resultId;
  saveResult({
    id: resultId,
    name: state.playerName,
    score: state.score,
    correct: state.correct,
    badge,
    difficulty: difficultyLabel(state.difficulty),
    date: new Date().toISOString()
  });

  finalScore.textContent = state.score;
  finalCorrect.textContent = `${state.correct} / ${state.round.length || 6}`;
  finalBadge.textContent = badge;
  resultTitle.textContent = state.correct >= 5 ? "أنت قائد الدورية" : "أحسنت";
  resultSummary.textContent =
    state.correct >= 5
      ? "قبضت على معظم المعاني المختبئة وارتقيت في الصدارة."
      : "راجعت السياقات، ويمكنك تحسين نتيجتك في جولة جديدة.";

  showScreen("win");
  showToast("success", "تم حفظ التقدم", "أضيفت نتيجتك إلى لوحة الصدارة.");
}

function getBadge() {
  if (state.correct >= 6) return "قائد الدورية";
  if (state.correct >= 4) return "صائد السياق";
  if (state.correct >= 2) return "محقق المعاني";
  return "متدرب المعاني";
}

function difficultyLabel(value) {
  return {
    easy: "سهل",
    medium: "متوسط",
    hard: "متقدم"
  }[value];
}

function readLeaderboard() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveResult(result) {
  const leaderboard = readLeaderboard();
  leaderboard.push(result);
  leaderboard.sort((a, b) => b.score - a.score);
  localStorage.setItem(storageKey, JSON.stringify(leaderboard.slice(0, 12)));
}

function renderLeaderboard() {
  const leaderboard = readLeaderboard();
  const fallback = [
    { id: "demo-1", name: "صائد السياق", score: 960, correct: 6, badge: "قائد الدورية", difficulty: "متوسط" },
    { id: "demo-2", name: "باحث الدلالة", score: 810, correct: 5, badge: "صائد السياق", difficulty: "سهل" },
    { id: "demo-3", name: "قارئ الصيغ", score: 690, correct: 4, badge: "محقق المعاني", difficulty: "متقدم" }
  ];
  const rows = leaderboard.length ? leaderboard : fallback;

  leaderboardList.innerHTML = "";
  rows.forEach((entry, index) => {
    const row = document.createElement("article");
    row.className = `leaderboard-row${entry.id === state.currentResultId ? " current" : ""}`;
    row.innerHTML = `
      <strong class="rank">${index + 1}</strong>
      <div>
        <h3>${entry.name}</h3>
        <p>${entry.badge}</p>
      </div>
      <span>${entry.score} نقطة</span>
      <span>${entry.correct} صحيحة</span>
    `;
    leaderboardList.append(row);
  });
}

function syncPlayerName() {
  const cleanName = playerNameInput.value.trim() || "لاعب العربية";
  state.playerName = cleanName;
  playerNamePreview.textContent = cleanName;
}

document.querySelectorAll("[data-nav]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    showScreen(button.dataset.nav);
  });
});

document.querySelectorAll("[data-open-menu]").forEach((button) => {
  button.addEventListener("click", () => openModal(menuModal));
});

document.querySelectorAll("[data-open-settings]").forEach((button) => {
  button.addEventListener("click", () => openModal(settingsModal));
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeModals);
});

document.querySelectorAll("[data-restart]").forEach((button) => {
  button.addEventListener("click", restartGame);
});

document.querySelector("#player-form").addEventListener("submit", (event) => {
  event.preventDefault();
  syncPlayerName();
  state.difficulty = difficultyInput.value;
  settingsDifficulty.value = state.difficulty;
  startLoading();
});

playerNameInput.addEventListener("input", syncPlayerName);
difficultyInput.addEventListener("change", () => {
  state.difficulty = difficultyInput.value;
  settingsDifficulty.value = state.difficulty;
});

document.querySelector("#settings-form").addEventListener("submit", (event) => {
  event.preventDefault();
  state.difficulty = settingsDifficulty.value;
  difficultyInput.value = state.difficulty;
  document.body.classList.toggle("large-text", textSizeInput.value === "large");
  closeModals();
  showToast("success", "تم حفظ التقدم", "تم تحديث إعدادات اللعبة.");
});

hintButton.addEventListener("click", () => {
  const challenge = state.round[state.index];
  if (!challenge) {
    return;
  }

  hintText.textContent = challenge.hint;
  hintText.hidden = false;
  hintButton.disabled = true;
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("filter-active"));
    button.classList.add("filter-active");
    showToast("info", "تم تطبيق الفلتر", "يعرض النموذج بيانات الصدارة المتاحة.");
  });
});
