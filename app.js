const LOCATIONS = [
  { id: "market", name: "السوق", icon: "🛒", top: 21, right: 75 },
  { id: "school", name: "المدرسة", icon: "🏫", top: 19, right: 38 },
  { id: "library", name: "المكتبة", icon: "📚", top: 39, right: 15 },
  { id: "court", name: "المحكمة", icon: "⚖", top: 59, right: 48 },
  { id: "desert", name: "الصحراء", icon: "⛺", top: 77, right: 72 },
  { id: "port", name: "الميناء", icon: "⚓", top: 78, right: 24 }
];

const BADGES = [
  { id: "detective", icon: "🔎", title: "محقق المعاني" },
  { id: "streak", icon: "🔥", title: "صائد السياق" },
  { id: "morphology", icon: "⚔", title: "فارس الصرف" },
  { id: "commander", icon: "⭐", title: "قائد الدورية" },
  { id: "speed", icon: "⏱", title: "قبضة سريعة" },
  { id: "clean", icon: "🛡", title: "دورية نظيفة" }
];

const CHALLENGES = [
  {
    word: "عين",
    sentence: "شرب المسافر من عين الماء بعد رحلة طويلة.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "ع ي ن",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "نبع الماء",
    choices: ["عضو البصر", "الجاسوس", "نبع الماء", "الشخص نفسه"],
    feedback: "وجود الشرب والماء يدل على أن المقصود نبع يتدفق منه الماء.",
    hint: "ابحث عن قرينة الماء والشرب.",
    district: "desert"
  },
  {
    word: "عين",
    sentence: "أرسل القائد عينًا إلى حدود المدينة.",
    skill: "تعدد المعاني",
    difficulty: 2,
    root: "ع ي ن",
    part: "اسم",
    meaningType: "اصطلاحية",
    correctMeaning: "الجاسوس",
    choices: ["نبع الماء", "الجاسوس", "الذهب الخالص", "عضو البصر"],
    feedback: "الإرسال إلى الحدود قرينة مراقبة واستطلاع، ولذلك المعنى هو الجاسوس.",
    hint: "الفعل أرسل مع الحدود يدل على مهمة مراقبة.",
    district: "court"
  },
  {
    word: "بعينه",
    sentence: "حضر الوزير بعينه لافتتاح المكتبة الجديدة.",
    skill: "الدلالة السياقية",
    difficulty: 2,
    root: "ع ي ن",
    part: "اسم متصل بضمير",
    meaningType: "توكيد معنوي",
    correctMeaning: "الشخص نفسه",
    choices: ["نبع الماء", "الشخص نفسه", "الجاسوس", "آلة دقيقة"],
    feedback: "كلمة بعينه هنا تؤكد حضور الشخص ذاته، لا حضور ممثل عنه.",
    hint: "التركيب يؤكد الذات والحضور المباشر.",
    district: "library"
  },
  {
    word: "ساق",
    sentence: "ساق الراعي الغنم إلى المرعى قبل الغروب.",
    skill: "تمييز الفعل والاسم",
    difficulty: 1,
    root: "س و ق",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "قاد ودفع أمامه",
    choices: ["عضو الجسم", "قاد ودفع أمامه", "جذع النبات", "امتنع عن الكلام"],
    feedback: "وجود الراعي والغنم والمرعى يجعل ساق فعلًا بمعنى قاد ودفع.",
    hint: "انتبه: الكلمة هنا فعل لا اسم.",
    district: "market"
  },
  {
    word: "ساقه",
    sentence: "أصاب اللاعب ساقه أثناء المباراة.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "س و ق",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "عضو الجسم",
    choices: ["قاد القطيع", "جذع النبات", "عضو الجسم", "باع السلعة"],
    feedback: "الإصابة واللاعب قرينتان على عضو الجسم.",
    hint: "ما الذي يمكن أن يصاب في جسم اللاعب؟",
    district: "school"
  },
  {
    word: "ساق",
    sentence: "اشتدت ساق النخلة فحملت عراجين التمر.",
    skill: "تعدد المعاني",
    difficulty: 2,
    root: "س و ق",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "جذع النبات",
    choices: ["عضو الجسم", "قاد ودفع", "جذع النبات", "الدليل والحجة"],
    feedback: "النخلة والتمر يدلان على ساق النبات لا ساق الإنسان.",
    hint: "انظر إلى كلمة النخلة.",
    district: "desert"
  },
  {
    word: "قلب",
    sentence: "خفق قلب الطفل فرحًا عند رؤية أبيه.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "ق ل ب",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "عضو ينبض في الصدر",
    choices: ["وسط المكان", "عضو ينبض في الصدر", "غيّر الاتجاه", "وجه الورقة"],
    feedback: "الخفق والفرح يرتبطان بعضو القلب في الصدر.",
    hint: "الخفقان قرينة قوية.",
    district: "school"
  },
  {
    word: "قلب",
    sentence: "ازدحمت المكتبة في قلب المدينة.",
    skill: "الدلالة المجازية",
    difficulty: 2,
    root: "ق ل ب",
    part: "اسم",
    meaningType: "مجازية",
    correctMeaning: "وسط المكان",
    choices: ["عضو في الصدر", "وسط المكان", "قلب الورقة", "الخوف الشديد"],
    feedback: "قلب المدينة تعبير مجازي يعني وسطها ومركزها.",
    hint: "هل للمدينة عضو ينبض؟",
    district: "library"
  },
  {
    word: "قلب",
    sentence: "قلب الطالب صفحات الكتاب بسرعة.",
    skill: "تمييز الفعل",
    difficulty: 2,
    root: "ق ل ب",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "حرّك الصفحة إلى الجهة الأخرى",
    choices: ["وسط المدينة", "عضو الصدر", "حرّك الصفحة إلى الجهة الأخرى", "عاقب بشدة"],
    feedback: "الصفحات والكتاب يجعلان قلب فعلًا بمعنى نقل الصفحة إلى وجهها الآخر.",
    hint: "الكلمة جاءت قبل صفحات الكتاب.",
    district: "library"
  },
  {
    word: "يد",
    sentence: "كتب الطفل اسمه بيده اليمنى.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "ي د ي",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "عضو الجسد",
    choices: ["القدرة", "النعمة", "عضو الجسد", "الطريق"],
    feedback: "الكتابة باليد اليمنى تدل على عضو الجسد.",
    hint: "اليمنى قرينة جسدية.",
    district: "school"
  },
  {
    word: "يد",
    sentence: "للمعلم يد بيضاء في نجاح طلابه.",
    skill: "الدلالة المجازية",
    difficulty: 4,
    root: "ي د ي",
    part: "اسم",
    meaningType: "مجازية",
    correctMeaning: "فضل وإحسان",
    choices: ["عضو الجسد", "فضل وإحسان", "قبضة قوية", "طريق جانبي"],
    feedback: "اليد البيضاء تعبير يدل على المعروف والفضل لا على عضو الجسد.",
    hint: "اللون الأبيض هنا ليس وصفًا حقيقيًا لليد.",
    district: "court"
  },
  {
    word: "لسان",
    sentence: "يتحدث أهل البلد بلسان عربي واضح.",
    skill: "تعدد المعاني",
    difficulty: 2,
    root: "ل س ن",
    part: "اسم",
    meaningType: "مجازية",
    correctMeaning: "لغة",
    choices: ["عضو الفم", "لغة", "حافة السكين", "لهب ممتد"],
    feedback: "الحديث بلسان عربي يعني الحديث باللغة العربية.",
    hint: "العربي هنا يصف لغة لا عضوًا.",
    district: "school"
  },
  {
    word: "لسان",
    sentence: "امتد لسان النار إلى سقف البيت.",
    skill: "الدلالة المجازية",
    difficulty: 4,
    root: "ل س ن",
    part: "اسم",
    meaningType: "مجازية",
    correctMeaning: "لهب ممتد",
    choices: ["لغة", "عضو الفم", "لهب ممتد", "جاسوس"],
    feedback: "لسان النار تعبير يصور اللهب الممتد كشكل اللسان.",
    hint: "السياق كله عن النار والامتداد.",
    district: "market"
  },
  {
    word: "بحر",
    sentence: "رست السفينة في بحر هادئ.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "ب ح ر",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "مسطح ماء واسع",
    choices: ["عالم كثير العلم", "مسطح ماء واسع", "طريق صحراوي", "كتاب كبير"],
    feedback: "السفينة والرسو يدلان على البحر الحقيقي.",
    hint: "ما المكان الذي ترسو فيه السفن؟",
    district: "port"
  },
  {
    word: "بحر",
    sentence: "كان الأستاذ بحرًا في النحو والصرف.",
    skill: "الدلالة المجازية",
    difficulty: 4,
    root: "ب ح ر",
    part: "اسم",
    meaningType: "مجازية",
    correctMeaning: "واسع العلم",
    choices: ["مسطح ماء", "واسع العلم", "صياد ماهر", "مكان عميق"],
    feedback: "وصف الأستاذ بأنه بحر في العلم يدل على سعة معرفته.",
    hint: "النحو والصرف مجال علمي.",
    district: "library"
  },
  {
    word: "رأس",
    sentence: "حمل العامل الصندوق فوق رأسه.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "ر أ س",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "أعلى الجسم",
    choices: ["بداية الأمر", "أعلى الجسم", "رأس المال", "قائد القوم"],
    feedback: "حمل الصندوق فوقه يشير إلى أعلى الجسم.",
    hint: "كلمة فوق تساعدك.",
    district: "market"
  },
  {
    word: "رأس",
    sentence: "بدأ التاجر مشروعه برأس مال صغير.",
    skill: "مصطلحات سياقية",
    difficulty: 2,
    root: "ر أ س",
    part: "اسم",
    meaningType: "اصطلاحية",
    correctMeaning: "أصل المال المستثمر",
    choices: ["أعلى الجسم", "أصل المال المستثمر", "بداية الطريق", "رئيس القوم"],
    feedback: "رأس المال مصطلح اقتصادي يعني أصل المال الذي يبدأ به المشروع.",
    hint: "التاجر والمشروع قرينتان اقتصاديتان.",
    district: "market"
  },
  {
    word: "ضرب",
    sentence: "ضرب المعلم مثالًا واضحًا على الإعراب.",
    skill: "تعدد المعاني",
    difficulty: 2,
    root: "ض ر ب",
    part: "فعل",
    meaningType: "اصطلاحية",
    correctMeaning: "قدّم وذكر",
    choices: ["أصاب بيده", "قدّم وذكر", "سافر", "خلط الألوان"],
    feedback: "ضرب مثالًا تعبير يعني قدم مثالًا أو ذكره.",
    hint: "الكلمة جاءت مع مثال.",
    district: "school"
  },
  {
    word: "ضرب",
    sentence: "ضرب التاجر في الأرض طلبًا للرزق.",
    skill: "تركيب عربي",
    difficulty: 4,
    root: "ض ر ب",
    part: "فعل",
    meaningType: "اصطلاحية",
    correctMeaning: "سافر وسعى",
    choices: ["أصاب بيده", "سافر وسعى", "غرس وتدًا", "أغلق الباب"],
    feedback: "ضرب في الأرض تركيب يدل على السفر والسعي في طلب الرزق.",
    hint: "في الأرض مع طلب الرزق تشير إلى السعي والسفر.",
    district: "desert"
  },
  {
    word: "فصل",
    sentence: "أحب الأطفال فصل الربيع.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "ف ص ل",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "موسم من السنة",
    choices: ["طرد من المدرسة", "موسم من السنة", "حكم بين الخصمين", "جزء من كتاب"],
    feedback: "الربيع يدل على أحد فصول السنة.",
    hint: "الربيع قرينة زمنية.",
    district: "school"
  },
  {
    word: "فصل",
    sentence: "فصل المدير الطالب بسبب الغياب المتكرر.",
    skill: "تمييز الفعل",
    difficulty: 2,
    root: "ف ص ل",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "طرده وأبعده",
    choices: ["موسم السنة", "طرده وأبعده", "جزء الكتاب", "مزج بين شيئين"],
    feedback: "المدير والغياب قرينتان على الفصل الإداري بمعنى الطرد.",
    hint: "العلاقة هنا مدرسية وإدارية.",
    district: "school"
  },
  {
    word: "فصل",
    sentence: "فصل القاضي بين الخصمين بالحجة.",
    skill: "السياق القضائي",
    difficulty: 2,
    root: "ف ص ل",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "حكم وميّز",
    choices: ["حكم وميّز", "طرد الطالب", "موسم السنة", "قطع الثوب"],
    feedback: "القاضي والخصمان يدلان على الحكم والتمييز بين الطرفين.",
    hint: "انظر إلى القاضي والخصمين.",
    district: "court"
  },
  {
    word: "علم",
    sentence: "طلب الطالب علمًا ينفعه في حياته.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "ع ل م",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "معرفة",
    choices: ["راية", "معرفة", "جبل مرتفع", "علامة صغيرة"],
    feedback: "الطلب والنفع في الحياة يدلان على المعرفة.",
    hint: "الطالب يطلب ماذا عادة؟",
    district: "library"
  },
  {
    word: "علم",
    sentence: "ارتفع علم البلاد فوق السارية.",
    skill: "تعدد المعاني",
    difficulty: 1,
    root: "ع ل م",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "راية",
    choices: ["معرفة", "راية", "قائد", "طريق"],
    feedback: "السارية والارتفاع يشيران إلى الراية.",
    hint: "السارية تحمل شيئًا يرفرف.",
    district: "court"
  },
  {
    word: "ذهب",
    sentence: "ذهب الطفل إلى المدرسة صباحًا.",
    skill: "تمييز الفعل والاسم",
    difficulty: 1,
    root: "ذ ه ب",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "مضى وانتقل",
    choices: ["معدن ثمين", "مضى وانتقل", "لون أصفر", "رجع سريعًا"],
    feedback: "إلى المدرسة تجعل ذهب فعلًا بمعنى مضى وانتقل.",
    hint: "وجود إلى يدل على الحركة.",
    district: "school"
  },
  {
    word: "ذهب",
    sentence: "اشترت الأم خاتمًا من ذهب.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "ذ ه ب",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "معدن ثمين",
    choices: ["مضى وانتقل", "معدن ثمين", "لون السماء", "زمن قديم"],
    feedback: "الخاتم ومادة الصنع يدلان على معدن الذهب.",
    hint: "من هنا تبين المادة.",
    district: "market"
  },
  {
    word: "دار",
    sentence: "عاد المسافر إلى دار أهله بعد الغياب.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "د و ر",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "بيت ومنزل",
    choices: ["لف حول نفسه", "بيت ومنزل", "زمن طويل", "محكمة"],
    feedback: "العودة إلى دار الأهل تعني الرجوع إلى البيت.",
    hint: "الأهل قرينة على المنزل.",
    district: "market"
  },
  {
    word: "دار",
    sentence: "دار الحارس حول السور طوال الليل.",
    skill: "تمييز الفعل والاسم",
    difficulty: 2,
    root: "د و ر",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "تحرك حوله",
    choices: ["بيت ومنزل", "تحرك حوله", "كتب رسالة", "تولى الحكم"],
    feedback: "حول السور تدل على الحركة والدوران.",
    hint: "الكلمة هنا فعل مرتبط بالحركة.",
    district: "court"
  },
  {
    word: "نجم",
    sentence: "ظهر نجم لامع في السماء.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "ن ج م",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "كوكب مضيء في السماء",
    choices: ["ظهر وحدث", "كوكب مضيء في السماء", "قائد مشهور", "نبت صغير"],
    feedback: "السماء واللمعان يدلان على النجم السماوي.",
    hint: "السماء تحدد المعنى.",
    district: "desert"
  },
  {
    word: "نجم",
    sentence: "نجم الخلاف بين الفريقين بعد القرار.",
    skill: "الدلالة السياقية",
    difficulty: 4,
    root: "ن ج م",
    part: "فعل",
    meaningType: "مجازية",
    correctMeaning: "ظهر وحدث",
    choices: ["كوكب في السماء", "ظهر وحدث", "غاب واختفى", "اشتد ضوءه"],
    feedback: "نجم الخلاف تعني ظهر الخلاف أو حدث.",
    hint: "الخلاف لا يكون كوكبًا في السماء.",
    district: "court"
  },
  {
    word: "جار",
    sentence: "زارنا جارنا في المساء.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "ج و ر",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "من يسكن قريبًا",
    choices: ["ظلم وانحرف", "من يسكن قريبًا", "مجرى ماء", "حارس السوق"],
    feedback: "الزيارة والسكن القريب يدلان على الجار.",
    hint: "الشخص الذي يزورك من قرب بيتك.",
    district: "market"
  },
  {
    word: "جار",
    sentence: "جار الحاكم في حكمه فاشتكى الناس.",
    skill: "تمييز الفعل",
    difficulty: 3,
    root: "ج و ر",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "ظلم وانحرف عن العدل",
    choices: ["سكن بجواره", "ظلم وانحرف عن العدل", "جرى الماء", "دافع عن الحق"],
    feedback: "حكم الحاكم وشكوى الناس تدلان على الظلم والجور.",
    hint: "اقرأ القرينة: في حكمه.",
    district: "court"
  },
  {
    word: "عدل",
    sentence: "عدل القاضي بين المتخاصمين.",
    skill: "السياق القضائي",
    difficulty: 2,
    root: "ع د ل",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "أنصف",
    choices: ["مال عن الطريق", "أنصف", "حمل شيئًا", "أسرع"],
    feedback: "القاضي والمتخاصمون يشيرون إلى الإنصاف.",
    hint: "مجال القضاء يطلب الإنصاف.",
    district: "court"
  },
  {
    word: "عدل",
    sentence: "عدل السائق عن الطريق المزدحم.",
    skill: "تمييز المعنى بالسياق",
    difficulty: 3,
    root: "ع د ل",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "مال وانصرف",
    choices: ["أنصف", "مال وانصرف", "أقام ميزانًا", "كتب حكمًا"],
    feedback: "عن الطريق تدل على الميل والانصراف عنه.",
    hint: "حرف الجر عن مهم هنا.",
    district: "desert"
  },
  {
    word: "أمّ",
    sentence: "أمّ المصلون المسجد لصلاة الفجر.",
    skill: "صرف ودلالة",
    difficulty: 3,
    root: "أ م م",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "قصدوا وتوجهوا",
    choices: ["الوالدة", "قصدوا وتوجهوا", "قاد الصلاة", "صمتوا"],
    feedback: "أمّ المكان تعني قصده وتوجه إليه.",
    hint: "الكلمة فعل متعد إلى مكان.",
    district: "school"
  },
  {
    word: "أم",
    sentence: "الفاتحة أم الكتاب في الصلاة.",
    skill: "دلالة اصطلاحية",
    difficulty: 4,
    root: "أ م م",
    part: "اسم",
    meaningType: "اصطلاحية",
    correctMeaning: "الأصل والمرجع",
    choices: ["الوالدة", "الأصل والمرجع", "الطريق الواسع", "قائدة الجيش"],
    feedback: "أم الكتاب لقب يدل على الأصل والمرجع في هذا السياق.",
    hint: "ليست والدة حقيقية؛ إنه لقب.",
    district: "library"
  },
  {
    word: "ولي",
    sentence: "ولي الأمير الحكم بعد وفاة أبيه.",
    skill: "صرف ودلالة",
    difficulty: 3,
    root: "و ل ي",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "تولى",
    choices: ["اقترب", "تولى", "ابتعد", "ترك"],
    feedback: "الحكم بعد وفاة أبيه يدل على تولي السلطة.",
    hint: "الحكم قرينة سياسية.",
    district: "court"
  },
  {
    word: "ولي",
    sentence: "حضر ولي الطفل إلى المدرسة.",
    skill: "تعدد المعاني",
    difficulty: 3,
    root: "و ل ي",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "القائم بأمره",
    choices: ["الحاكم", "القائم بأمره", "من يسكن قريبًا", "المعلم"],
    feedback: "ولي الطفل هو المسؤول عنه والقائم بأمره.",
    hint: "الطفل يحتاج من يتولى أمره.",
    district: "school"
  },
  {
    word: "قام",
    sentence: "قام المعلم احترامًا للضيف.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "ق و م",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "وقف",
    choices: ["أنجز", "وقف", "نام", "سافر"],
    feedback: "الاحترام للضيف يدل على الوقوف.",
    hint: "الفعل هنا حركة جسدية.",
    district: "school"
  },
  {
    word: "قام",
    sentence: "قام الفريق بالمهمة في وقت قصير.",
    skill: "تعدد المعاني",
    difficulty: 2,
    root: "ق و م",
    part: "فعل",
    meaningType: "اصطلاحية",
    correctMeaning: "أنجز",
    choices: ["وقف", "أنجز", "نام", "غضب"],
    feedback: "قام بالمهمة تعني أنجزها ونفذها.",
    hint: "وجود بالمهمة يغير المعنى.",
    district: "port"
  },
  {
    word: "كتاب",
    sentence: "قرأ الطالب كتاب النحو في المكتبة.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "ك ت ب",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "مؤلف مقروء",
    choices: ["رسالة رسمية", "مؤلف مقروء", "أمر مكتوب", "دفتر الحساب"],
    feedback: "القراءة والمكتبة تدلان على الكتاب المعروف.",
    hint: "ما الذي يقرأ في المكتبة؟",
    district: "library"
  },
  {
    word: "كتابًا",
    sentence: "كتب القاضي كتابًا إلى الوالي.",
    skill: "دلالة تاريخية",
    difficulty: 3,
    root: "ك ت ب",
    part: "اسم",
    meaningType: "اصطلاحية",
    correctMeaning: "رسالة مكتوبة",
    choices: ["مؤلف مقروء", "رسالة مكتوبة", "دفتر تمارين", "حكم شفهي"],
    feedback: "كتب كتابًا إلى الوالي تعني أرسل رسالة مكتوبة.",
    hint: "حرف إلى يوجهك إلى المرسل إليه.",
    district: "court"
  },
  {
    word: "سوق",
    sentence: "ازدحم الناس في سوق المدينة صباح الجمعة.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "س و ق",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "مكان البيع والشراء",
    choices: ["قاد القطيع", "مكان البيع والشراء", "عضو الجسم", "جذع الشجرة"],
    feedback: "ازدحام الناس في المدينة صباحًا يشير إلى مكان البيع والشراء.",
    hint: "الناس يذهبون إليه للشراء.",
    district: "market"
  },
  {
    word: "ساق",
    sentence: "ساق الكاتب الأدلة واحدًا بعد آخر.",
    skill: "دلالة سياقية",
    difficulty: 3,
    root: "س و ق",
    part: "فعل",
    meaningType: "مجازية",
    correctMeaning: "عرض وسرد",
    choices: ["قاد الغنم", "عرض وسرد", "باع في السوق", "أصاب ساقه"],
    feedback: "ساق الأدلة تعني عرضها وسردها لتقوية الحجة.",
    hint: "الأدلة لا تقاد كالغنم.",
    district: "library"
  },
  {
    word: "مرّ",
    sentence: "مرّ اليوم سريعًا ونحن نعمل.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "م ر ر",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "انقضى",
    choices: ["طعم غير حلو", "انقضى", "توقف", "اشتد"],
    feedback: "اليوم يمر بمعنى ينقضي ويمضي.",
    hint: "السياق عن الزمن.",
    district: "port"
  },
  {
    word: "مرّ",
    sentence: "كان طعم الدواء مرًّا.",
    skill: "تعدد المعاني",
    difficulty: 2,
    root: "م ر ر",
    part: "صفة",
    meaningType: "حرفية",
    correctMeaning: "غير حلو الطعم",
    choices: ["انقضى", "غير حلو الطعم", "سريع الحركة", "شديد الضوء"],
    feedback: "الطعم والدواء يحددان معنى المرارة.",
    hint: "السياق عن التذوق.",
    district: "school"
  },
  {
    word: "صاد",
    sentence: "صاد الصياد سمكة كبيرة من البحر.",
    skill: "تمييز الفعل والاسم",
    difficulty: 2,
    root: "ص ي د",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "اصطاد",
    choices: ["حرف عربي", "اصطاد", "أغلق الباب", "شرح الدرس"],
    feedback: "الصياد والسمكة والبحر تدل على الاصطياد.",
    hint: "انظر إلى الصياد والسمكة.",
    district: "port"
  },
  {
    word: "صاد",
    sentence: "كتب الطفل حرف صاد في أول السطر.",
    skill: "تمييز الاسم",
    difficulty: 1,
    root: "ص و د",
    part: "اسم حرف",
    meaningType: "حرفية",
    correctMeaning: "حرف عربي",
    choices: ["اصطاد", "حرف عربي", "سمكة", "صوت مرتفع"],
    feedback: "حرف صاد تركيب يدل على اسم الحرف.",
    hint: "الكلمة سبقتها حرف.",
    district: "school"
  },
  {
    word: "حمل",
    sentence: "حمل الطفل الحقيبة إلى الصف.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "ح م ل",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "رفع ونقل",
    choices: ["تضمن معنى", "رفع ونقل", "غضب", "أسرع"],
    feedback: "الحقيبة والانتقال إلى الصف يدلان على الرفع والنقل.",
    hint: "الشيء المادي ينقل باليد.",
    district: "school"
  },
  {
    word: "حمل",
    sentence: "حمل الكلام معنى عميقًا.",
    skill: "الدلالة المجازية",
    difficulty: 3,
    root: "ح م ل",
    part: "فعل",
    meaningType: "مجازية",
    correctMeaning: "تضمن",
    choices: ["رفع ونقل", "تضمن", "هاجم", "سافر"],
    feedback: "الكلام لا يحمل ماديًا؛ المقصود أنه تضمن معنى.",
    hint: "المعنى ليس شيئًا ماديًا.",
    district: "library"
  },
  {
    word: "فتح",
    sentence: "فتح الحارس باب المدرسة.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "ف ت ح",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "أزال إغلاقه",
    choices: ["انتصر في معركة", "أزال إغلاقه", "علّم وشرح", "وهب رزقًا"],
    feedback: "الباب والحارس يدلان على إزالة الإغلاق.",
    hint: "السياق فيه باب.",
    district: "school"
  },
  {
    word: "فتح",
    sentence: "فتح الله على الباحث بفكرة جديدة.",
    skill: "تركيب بلاغي",
    difficulty: 4,
    root: "ف ت ح",
    part: "فعل",
    meaningType: "مجازية",
    correctMeaning: "يسّر ووهب",
    choices: ["أزال إغلاقًا", "يسّر ووهب", "دخل مدينة", "قطع الطريق"],
    feedback: "فتح الله عليه تعبير يدل على التيسير والإلهام.",
    hint: "لا يوجد باب مادي هنا.",
    district: "library"
  },
  {
    word: "نصب",
    sentence: "نصب الرحالة خيمة قرب الوادي.",
    skill: "تمييز المعنى بالسياق",
    difficulty: 2,
    root: "ن ص ب",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "أقامها وثبتها",
    choices: ["دبر خدعة", "أقامها وثبتها", "تعب", "عيّن مسؤولًا"],
    feedback: "الخيمة والرحالة يدلان على الإقامة والتثبيت.",
    hint: "الخيمة تقام.",
    district: "desert"
  },
  {
    word: "نصب",
    sentence: "نصب المحتال شركًا للتجار.",
    skill: "دلالة سياقية",
    difficulty: 3,
    root: "ن ص ب",
    part: "فعل",
    meaningType: "مجازية",
    correctMeaning: "دبر خدعة",
    choices: ["أقام خيمة", "دبر خدعة", "عيّن واليًا", "رفع راية"],
    feedback: "المحتال والشرك يوجهان المعنى إلى الخداع.",
    hint: "اقرأ كلمة المحتال.",
    district: "market"
  },
  {
    word: "جرى",
    sentence: "جرى النهر بين البساتين.",
    skill: "السياق الدلالي",
    difficulty: 1,
    root: "ج ر ي",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "تدفق",
    choices: ["ركض", "تدفق", "تم وحدث", "حكم"],
    feedback: "النهر يجري بمعنى يتدفق.",
    hint: "السياق عن الماء.",
    district: "port"
  },
  {
    word: "جرى",
    sentence: "جرى الاتفاق بين الفريقين بعد المفاوضات.",
    skill: "دلالة سياقية",
    difficulty: 3,
    root: "ج ر ي",
    part: "فعل",
    meaningType: "اصطلاحية",
    correctMeaning: "تم وحدث",
    choices: ["ركض", "تدفق الماء", "تم وحدث", "انسحب"],
    feedback: "جرى الاتفاق تعني تم الاتفاق وحدث.",
    hint: "الاتفاق لا يركض ولا يتدفق.",
    district: "court"
  },
  {
    word: "عقد",
    sentence: "عقد البحار الحبل حول العمود.",
    skill: "تمييز المعنى بالسياق",
    difficulty: 2,
    root: "ع ق د",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "ربطه",
    choices: ["أقام اجتماعًا", "ربطه", "اشترى عقدًا", "غضب"],
    feedback: "الحبل والعمود يدلان على الربط.",
    hint: "الحبل يربط.",
    district: "port"
  },
  {
    word: "عقد",
    sentence: "عقد المدير اجتماعًا عاجلًا.",
    skill: "تعدد المعاني",
    difficulty: 2,
    root: "ع ق د",
    part: "فعل",
    meaningType: "اصطلاحية",
    correctMeaning: "أقام ونظم",
    choices: ["ربط الحبل", "أقام ونظم", "لبس زينة", "سافر"],
    feedback: "عقد اجتماعًا تعني أقامه ونظمه.",
    hint: "الكلمة مرتبطة بالاجتماع.",
    district: "school"
  },
  {
    word: "حاد",
    sentence: "حاد السائق عن الطريق الضيق.",
    skill: "صرف ودلالة",
    difficulty: 3,
    root: "ح ي د",
    part: "فعل",
    meaningType: "حرفية",
    correctMeaning: "مال وانحرف",
    choices: ["صار حادًا", "مال وانحرف", "رفع صوته", "أغلق الطريق"],
    feedback: "عن الطريق تدل على الميل والانحراف.",
    hint: "حرف الجر عن مفتاح الجواب.",
    district: "desert"
  },
  {
    word: "حد",
    sentence: "شحذ النجار حد السكين.",
    skill: "تمييز المعنى بالسياق",
    difficulty: 2,
    root: "ح د د",
    part: "اسم",
    meaningType: "حرفية",
    correctMeaning: "الحافة القاطعة",
    choices: ["نهاية المكان", "الحافة القاطعة", "عقوبة شرعية", "غضب شديد"],
    feedback: "السكين والشحذ يدلان على الحافة القاطعة.",
    hint: "ما الجزء الذي يشحذ في السكين؟",
    district: "market"
  }
];

const STORAGE_KEY = "askar_meanings_leaderboard_v1";

const elements = {
  screens: document.querySelectorAll(".screen"),
  playerName: document.querySelector("#player-name"),
  difficulty: document.querySelector("#difficulty"),
  roundCount: document.querySelector("#round-count"),
  roundCountOutput: document.querySelector("#round-count-output"),
  animationToggle: document.querySelector("#animation-toggle"),
  loadingProgress: document.querySelector("#loading-progress"),
  loadingLine: document.querySelector("#loading-line"),
  score: document.querySelector("#score-value"),
  streak: document.querySelector("#streak-value"),
  multiplier: document.querySelector("#multiplier-value"),
  timer: document.querySelector("#timer-value"),
  timerFill: document.querySelector("#timer-meter-fill"),
  roundProgress: document.querySelector("#round-progress"),
  roundLabel: document.querySelector("#round-label"),
  districtName: document.querySelector("#district-name"),
  skillPill: document.querySelector("#skill-pill"),
  difficultyPill: document.querySelector("#difficulty-pill"),
  rootPill: document.querySelector("#root-pill"),
  sentence: document.querySelector("#sentence-text"),
  targetWord: document.querySelector("#target-word"),
  meaningType: document.querySelector("#meaning-type"),
  hintButton: document.querySelector("#hint-button"),
  hintCount: document.querySelector("#hint-count"),
  choicesGrid: document.querySelector("#choices-grid"),
  feedbackBox: document.querySelector("#feedback-box"),
  feedbackIcon: document.querySelector("#feedback-icon"),
  feedbackTitle: document.querySelector("#feedback-title"),
  feedbackText: document.querySelector("#feedback-text"),
  nextButton: document.querySelector("#next-round-button"),
  phaserStage: document.querySelector("#phaser-stage"),
  finalScore: document.querySelector("#final-score"),
  finalAccuracy: document.querySelector("#final-accuracy"),
  finalBestStreak: document.querySelector("#final-best-streak"),
  winTitle: document.querySelector("#win-title"),
  badgeRack: document.querySelector("#badge-rack"),
  leaderboardList: document.querySelector("#leaderboard-list"),
  clearLeaderboard: document.querySelector("#clear-leaderboard")
};

const state = {
  settings: {
    playerName: "قائد الدورية",
    mode: "patrol",
    difficulty: "all",
    rounds: 10,
    animations: true
  },
  deck: [],
  current: null,
  currentChoiceMap: [],
  roundIndex: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  correct: 0,
  missed: 0,
  hints: 3,
  answered: false,
  roundLimit: 20,
  roundStartedAt: 0,
  timerId: null,
  earnedBadges: new Set(),
  hardCorrect: 0,
  fastCaptures: 0
};

const phaserMap = {
  game: null,
  scene: null,
  pending: [],
  motionEnabled: true,

  ensure() {
    if (!elements.phaserStage) {
      return;
    }

    if (typeof Phaser === "undefined") {
      elements.phaserStage.innerHTML = '<div class="phaser-fallback">تعذر تحميل Phaser. اتصل بالإنترنت أو شغّل الصفحة من GitHub Pages لعرض الخريطة المتحركة.</div>';
      return;
    }

    if (this.game) {
      this.resize();
      return;
    }

    const sceneClass = createPatrolSceneClass();
    const bounds = elements.phaserStage.getBoundingClientRect();
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: elements.phaserStage,
      width: Math.max(320, Math.floor(bounds.width || 420)),
      height: Math.max(280, Math.floor(bounds.height || 500)),
      backgroundColor: "#efd9aa",
      scale: {
        mode: Phaser.Scale.RESIZE,
        parent: elements.phaserStage
      },
      render: {
        antialias: true,
        pixelArt: false
      },
      scene: sceneClass
    });
  },

  bindScene(scene) {
    this.scene = scene;
    this.scene.setMotion(this.motionEnabled);
    while (this.pending.length) {
      const [method, args] = this.pending.shift();
      if (typeof this.scene[method] === "function") {
        this.scene[method](...args);
      }
    }
  },

  call(method, ...args) {
    if (this.scene && typeof this.scene[method] === "function") {
      this.scene[method](...args);
      return;
    }

    this.pending.push([method, args]);
  },

  resize() {
    if (!this.game || !elements.phaserStage) {
      return;
    }

    const bounds = elements.phaserStage.getBoundingClientRect();
    if (bounds.width > 0 && bounds.height > 0) {
      this.game.scale.resize(Math.floor(bounds.width), Math.floor(bounds.height));
    }
  },

  setMotion(enabled) {
    this.motionEnabled = enabled;
    this.call("setMotion", enabled);
  },

  resetRound() {
    this.call("resetRound");
  },

  movePatrol(location) {
    this.call("movePatrol", location);
  },

  moveMeaning(location, outcome) {
    this.call("moveMeaning", location, outcome);
  },

  activateLocation(locationId) {
    this.call("activateLocation", locationId);
  },

  clearLocation() {
    this.call("activateLocation", null);
  }
};

let PatrolSceneClass = null;

function createPatrolSceneClass() {
  if (PatrolSceneClass) {
    return PatrolSceneClass;
  }

  PatrolSceneClass = class PatrolScene extends Phaser.Scene {
    constructor() {
      super("PatrolScene");
      this.motion = true;
      this.activeLocationId = null;
      this.currentPatrolLocation = getLocation("port");
      this.currentMeaningLocation = null;
      this.meaningState = null;
    }

    create() {
      this.scale.on("resize", this.redraw, this);
      this.redraw();
      phaserMap.bindScene(this);
    }

    redraw() {
      this.tweens.killAll();
      this.children.removeAll(true);
      this.drawMap();
      this.drawLocations();
      this.drawPatrol();
      this.drawMeaning();
      this.activateLocation(this.activeLocationId);
    }

    drawMap() {
      const width = this.scale.width;
      const height = this.scale.height;
      const graphics = this.add.graphics();

      graphics.fillStyle(0xefd9aa, 1);
      graphics.fillRect(0, 0, width, height);

      graphics.lineStyle(1, 0x172128, 0.08);
      for (let x = 0; x <= width; x += 54) {
        graphics.lineBetween(x, 0, x, height);
      }
      for (let y = 0; y <= height; y += 54) {
        graphics.lineBetween(0, y, width, y);
      }

      this.drawRoad(graphics, "port", "court");
      this.drawRoad(graphics, "court", "school");
      this.drawRoad(graphics, "school", "market");
      this.drawRoad(graphics, "court", "library");
      this.drawRoad(graphics, "court", "desert");

      graphics.fillStyle(0x68b4d9, 0.85);
      graphics.fillRect(0, height * 0.78, width * 0.38, height * 0.22);
      graphics.lineStyle(3, 0x3279a8, 0.7);
      graphics.beginPath();
      graphics.moveTo(0, height * 0.78);
      for (let x = 0; x <= width * 0.38; x += 28) {
        graphics.lineTo(x, height * 0.78 + Math.sin(x / 28) * 9);
      }
      graphics.strokePath();
    }

    drawRoad(graphics, fromId, toId) {
      const from = this.pointFor(getLocation(fromId));
      const to = this.pointFor(getLocation(toId));
      graphics.lineStyle(30, 0x1c3d43, 0.35);
      graphics.lineBetween(from.x, from.y, to.x, to.y);
      graphics.lineStyle(4, 0xf4d56e, 0.8);
      graphics.lineBetween(from.x, from.y, to.x, to.y);
    }

    drawLocations() {
      this.locationNodes = new Map();
      LOCATIONS.forEach((location) => {
        const point = this.pointFor(location);
        const node = this.add.container(point.x, point.y);
        const ring = this.add.graphics();
        const card = this.add.graphics();
        const icon = this.add.text(0, -3, location.icon, {
          fontFamily: "Tahoma, Arial",
          fontSize: `${this.iconSize()}px`
        }).setOrigin(0.5);
        const label = this.add.text(0, this.nodeSize() / 2 + 18, location.name, {
          fontFamily: "Tahoma, Arial",
          fontSize: `${this.labelSize()}px`,
          fontStyle: "bold",
          color: "#172128",
          backgroundColor: "#fff8e8",
          padding: { x: 7, y: 3 }
        }).setOrigin(0.5);
        const zone = this.add.zone(0, 0, this.nodeSize() + 18, this.nodeSize() + 42)
          .setInteractive({ useHandCursor: true });

        ring.lineStyle(5, 0xd5423b, 0.9);
        ring.strokeRoundedRect(
          -this.nodeSize() / 2 - 8,
          -this.nodeSize() / 2 - 8,
          this.nodeSize() + 16,
          this.nodeSize() + 16,
          8
        );
        ring.setVisible(false);

        card.fillStyle(this.locationColor(location.id), 1);
        card.fillRoundedRect(-this.nodeSize() / 2, -this.nodeSize() / 2, this.nodeSize(), this.nodeSize(), 8);
        card.lineStyle(3, 0x172128, 0.18);
        card.strokeRoundedRect(-this.nodeSize() / 2, -this.nodeSize() / 2, this.nodeSize(), this.nodeSize(), 8);
        card.fillStyle(0xffffff, 0.24);
        card.fillRect(-this.nodeSize() / 2, -this.nodeSize() / 2, this.nodeSize(), this.nodeSize() * 0.42);

        zone.on("pointerdown", () => this.pulseLocation(location.id));
        zone.on("pointerover", () => this.tweenNode(node, 1.06));
        zone.on("pointerout", () => this.tweenNode(node, 1));

        node.add([ring, card, icon, label, zone]);
        this.locationNodes.set(location.id, { node, ring });
      });
    }

    drawPatrol() {
      const point = this.pointFor(this.currentPatrolLocation);
      const shadow = this.add.ellipse(0, 18, 48, 14, 0x172128, 0.25);
      const car = this.add.text(0, 0, "🚓", {
        fontFamily: "Tahoma, Arial",
        fontSize: `${this.unitSize()}px`
      }).setOrigin(0.5);
      const red = this.add.circle(-9, -18, 4, 0xd5423b, 1);
      const blue = this.add.circle(9, -18, 4, 0x2b74d6, 1);

      this.patrol = this.add.container(point.x, point.y, [shadow, car, red, blue]);
      this.tweens.add({
        targets: [red, blue],
        alpha: 0.25,
        duration: 280,
        yoyo: true,
        repeat: -1
      });
    }

    drawMeaning() {
      const point = this.currentMeaningLocation
        ? this.pointFor(this.currentMeaningLocation)
        : this.centerPoint();
      const color = this.meaningState === "captured"
        ? 0x2f9e65
        : this.meaningState === "escaped"
          ? 0xd5423b
          : 0x172128;

      this.meaningCircle = this.add.graphics();
      this.paintMeaningCircle(color);
      const mark = this.add.text(0, -2, "؟", {
        fontFamily: "Tahoma, Arial",
        fontSize: `${this.meaningSize()}px`,
        fontStyle: "bold",
        color: "#ffffff"
      }).setOrigin(0.5);

      this.meaning = this.add.container(point.x, point.y, [this.meaningCircle, mark]);
      if (!this.currentMeaningLocation && this.motion) {
        this.tweens.add({
          targets: this.meaning,
          y: point.y - 8,
          duration: 900,
          ease: "Sine.easeInOut",
          yoyo: true,
          repeat: -1
        });
      }
    }

    paintMeaningCircle(color) {
      this.meaningCircle.clear();
      this.meaningCircle.fillStyle(color, 0.78);
      this.meaningCircle.fillCircle(0, 0, this.meaningRadius());
      this.meaningCircle.lineStyle(3, 0xffffff, 0.75);
      this.meaningCircle.strokeCircle(0, 0, this.meaningRadius());
    }

    resetRound() {
      this.currentPatrolLocation = getLocation("port");
      this.currentMeaningLocation = null;
      this.meaningState = null;
      this.activeLocationId = null;
      this.redraw();
    }

    movePatrol(location) {
      this.currentPatrolLocation = location;
      this.moveContainer(this.patrol, this.pointFor(location), 560);
      this.pulseLocation(location.id);
    }

    moveMeaning(location, outcome) {
      this.currentMeaningLocation = location;
      this.meaningState = outcome;
      if (this.meaning) {
        this.tweens.killTweensOf(this.meaning);
      }
      this.paintMeaningCircle(outcome === "captured" ? 0x2f9e65 : 0xd5423b);
      this.moveContainer(this.meaning, this.pointFor(location), 620);
      if (this.motion) {
        this.tweens.add({
          targets: this.meaning,
          scale: outcome === "captured" ? 1.28 : 1.16,
          angle: outcome === "escaped" ? 8 : 0,
          duration: 170,
          yoyo: true,
          repeat: 1
        });
      }
    }

    activateLocation(locationId) {
      this.activeLocationId = locationId;
      if (!this.locationNodes) {
        return;
      }

      this.locationNodes.forEach(({ node, ring }, id) => {
        ring.setVisible(id === locationId);
        if (id !== locationId) {
          node.setScale(1);
        }
      });
      if (locationId) {
        this.pulseLocation(locationId);
      }
    }

    pulseLocation(locationId) {
      const nodeEntry = this.locationNodes?.get(locationId);
      if (!nodeEntry || !this.motion) {
        return;
      }

      this.tweens.add({
        targets: nodeEntry.node,
        scale: 1.1,
        duration: 130,
        yoyo: true,
        ease: "Sine.easeOut"
      });
    }

    tweenNode(node, scale) {
      if (!this.motion) {
        return;
      }

      this.tweens.add({
        targets: node,
        scale,
        duration: 120,
        ease: "Sine.easeOut"
      });
    }

    moveContainer(container, point, duration) {
      if (!container) {
        return;
      }

      if (!this.motion) {
        container.setPosition(point.x, point.y);
        return;
      }

      this.tweens.add({
        targets: container,
        x: point.x,
        y: point.y,
        duration,
        ease: "Sine.easeInOut"
      });
    }

    setMotion(enabled) {
      this.motion = enabled;
      if (!enabled) {
        this.tweens.killAll();
      }
    }

    pointFor(location) {
      const width = this.scale.width;
      const height = this.scale.height;
      const x = width * ((100 - location.right) / 100);
      const y = height * (location.top / 100);
      const margin = this.nodeSize() / 2 + 12;

      return {
        x: Phaser.Math.Clamp(x, margin, width - margin),
        y: Phaser.Math.Clamp(y, margin, height - margin - 16)
      };
    }

    centerPoint() {
      return {
        x: this.scale.width * 0.48,
        y: this.scale.height * 0.43
      };
    }

    locationColor(id) {
      return {
        market: 0xffdfdc,
        school: 0xdff2ea,
        library: 0xe8e2ff,
        court: 0xfff0c7,
        desert: 0xffe4b2,
        port: 0xdff0fb
      }[id] || 0xfff8e8;
    }

    nodeSize() {
      return this.scale.width < 380 ? 54 : 68;
    }

    iconSize() {
      return this.scale.width < 380 ? 28 : 36;
    }

    unitSize() {
      return this.scale.width < 380 ? 30 : 40;
    }

    meaningSize() {
      return this.scale.width < 380 ? 28 : 36;
    }

    meaningRadius() {
      return this.scale.width < 380 ? 24 : 30;
    }

    labelSize() {
      return this.scale.width < 380 ? 12 : 14;
    }
  };

  return PatrolSceneClass;
}

function init() {
  elements.roundCount.addEventListener("input", () => {
    elements.roundCountOutput.value = elements.roundCount.value;
  });

  elements.hintButton.addEventListener("click", useHint);
  elements.nextButton.addEventListener("click", loadNextRound);
  elements.clearLeaderboard.addEventListener("click", clearLeaderboard);

  document.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (actionButton) {
      handleAction(actionButton.dataset.action);
      return;
    }

    const modeButton = event.target.closest("[data-mode]");
    if (modeButton) {
      setMode(modeButton.dataset.mode);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!state.current || state.answered) {
      return;
    }

    const numericKey = Number(event.key);
    if (numericKey >= 1 && numericKey <= 4) {
      const choiceButton = elements.choicesGrid.querySelectorAll(".choice-card")[numericKey - 1];
      if (choiceButton) {
        choiceButton.click();
      }
    }
  });

  renderLeaderboard();
  syncSettingsFromStorage();
}

function handleAction(action) {
  if (action === "home") {
    stopTimer();
    showScreen("start");
    return;
  }

  if (action === "instructions") {
    showScreen("instructions");
    return;
  }

  if (action === "settings") {
    showScreen("settings");
    return;
  }

  if (action === "leaderboard") {
    renderLeaderboard();
    showScreen("leaderboard");
    return;
  }

  if (action === "start") {
    saveSettings();
    beginLoading();
  }
}

function showScreen(name) {
  elements.screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === name);
  });
}

function setMode(mode) {
  state.settings.mode = mode;
  document.querySelectorAll("[data-mode]").forEach((button) => {
    const selected = button.dataset.mode === mode;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  if (mode === "quick" && Number(elements.roundCount.value) > 8) {
    elements.roundCount.value = "8";
    elements.roundCountOutput.value = "8";
  }

  if (mode === "timed" && Number(elements.roundCount.value) < 12) {
    elements.roundCount.value = "12";
    elements.roundCountOutput.value = "12";
  }
}

function saveSettings() {
  state.settings.playerName = normalizeName(elements.playerName.value);
  state.settings.difficulty = elements.difficulty.value;
  state.settings.rounds = Number(elements.roundCount.value);
  state.settings.animations = elements.animationToggle.checked;

  document.body.classList.toggle("reduced-motion", !state.settings.animations);
  phaserMap.setMotion(state.settings.animations);

  try {
    localStorage.setItem(
      "askar_meanings_settings_v1",
      JSON.stringify(state.settings)
    );
  } catch (error) {
    console.warn("Unable to save settings", error);
  }
}

function syncSettingsFromStorage() {
  try {
    const saved = JSON.parse(localStorage.getItem("askar_meanings_settings_v1") || "null");
    if (!saved) {
      return;
    }

    state.settings = { ...state.settings, ...saved };
    elements.playerName.value = state.settings.playerName;
    elements.difficulty.value = state.settings.difficulty;
    elements.roundCount.value = String(state.settings.rounds);
    elements.roundCountOutput.value = String(state.settings.rounds);
    elements.animationToggle.checked = state.settings.animations;
    document.body.classList.toggle("reduced-motion", !state.settings.animations);
    phaserMap.setMotion(state.settings.animations);
    setMode(state.settings.mode);
  } catch (error) {
    console.warn("Unable to load settings", error);
  }
}

function beginLoading() {
  stopTimer();
  showScreen("loading");
  elements.loadingProgress.style.width = "0%";
  elements.loadingLine.textContent = "توزيع المعاني على المواقع";

  const lines = [
    "توزيع المعاني على المواقع",
    "استدعاء دورية السياق",
    "تجهيز البلاغات والشارات",
    "فتح لوحة الصدارة"
  ];

  let progress = 0;
  const loader = setInterval(() => {
    progress += 25;
    elements.loadingProgress.style.width = `${progress}%`;
    elements.loadingLine.textContent = lines[Math.min(lines.length - 1, progress / 25 - 1)];

    if (progress >= 100) {
      clearInterval(loader);
      setTimeout(startGame, 260);
    }
  }, 220);
}

function startGame() {
  const filtered = filterChallenges();
  state.deck = shuffle(filtered).slice(0, state.settings.rounds);
  state.roundIndex = 0;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.correct = 0;
  state.missed = 0;
  state.hints = state.settings.mode === "quick" ? 2 : 3;
  state.earnedBadges = new Set();
  state.hardCorrect = 0;
  state.fastCaptures = 0;

  showScreen("game");
  phaserMap.ensure();
  requestAnimationFrame(() => phaserMap.resize());
  updateHud();
  loadNextRound();
}

function filterChallenges() {
  if (state.settings.difficulty === "all") {
    return CHALLENGES;
  }

  const difficulty = Number(state.settings.difficulty);
  return CHALLENGES.filter((challenge) => challenge.difficulty === difficulty);
}

function loadNextRound() {
  stopTimer();

  if (state.roundIndex >= state.deck.length) {
    endGame();
    return;
  }

  state.current = state.deck[state.roundIndex];
  state.answered = false;
  state.roundIndex += 1;
  state.roundLimit = getRoundLimit(state.current);
  state.roundStartedAt = Date.now();

  renderChallenge();
  updateHud();
  startTimer();
}

function renderChallenge() {
  const challenge = state.current;
  const correctLocation = getLocation(challenge.district);
  const availableLocations = shuffle(LOCATIONS.filter((location) => location.id !== correctLocation.id));
  const choices = shuffle(challenge.choices);

  state.currentChoiceMap = choices.map((choice) => {
    const location = choice === challenge.correctMeaning
      ? correctLocation
      : availableLocations.shift();

    return { choice, location };
  });

  elements.districtName.textContent = "بلاغ مفتوح";
  elements.skillPill.textContent = challenge.skill;
  elements.difficultyPill.textContent = `المستوى ${challenge.difficulty}`;
  elements.rootPill.textContent = `الجذر: ${challenge.root}`;
  elements.sentence.innerHTML = highlightTarget(challenge.sentence, challenge.word);
  elements.targetWord.textContent = challenge.word;
  elements.meaningType.textContent = challenge.meaningType;
  elements.feedbackBox.className = "feedback is-hidden";
  elements.nextButton.textContent = state.roundIndex >= state.deck.length ? "عرض النتيجة" : "الجولة التالية";
  elements.nextButton.insertAdjacentHTML("afterbegin", '<span class="btn-icon" aria-hidden="true">➜</span>');
  elements.choicesGrid.innerHTML = "";

  resetMapForRound();

  state.currentChoiceMap.forEach(({ choice, location }, index) => {
    const button = document.createElement("button");
    button.className = "choice-card";
    button.type = "button";
    button.dataset.choice = choice;
    button.dataset.location = location.id;
    button.setAttribute("aria-label", `الخيار ${index + 1}: ${choice} في ${location.name}`);
    button.innerHTML = `
      <span class="choice-image ${location.id}" aria-hidden="true">
        <span class="choice-icon">${location.icon}</span>
      </span>
      <span class="choice-copy">
        <span class="choice-title">${escapeHtml(choice)}</span>
        <span class="choice-location">${escapeHtml(location.name)}</span>
      </span>
    `;
    button.addEventListener("click", () => answerChoice(choice, button));
    elements.choicesGrid.appendChild(button);
  });
}

function startTimer() {
  updateTimer();
  state.timerId = window.setInterval(updateTimer, 180);
}

function updateTimer() {
  const elapsed = (Date.now() - state.roundStartedAt) / 1000;
  const remaining = Math.max(0, state.roundLimit - elapsed);
  const percent = Math.max(0, (remaining / state.roundLimit) * 100);

  elements.timer.textContent = Math.ceil(remaining);
  elements.timerFill.style.width = `${percent}%`;

  if (remaining <= 0 && !state.answered) {
    answerChoice(null, null);
  }
}

function stopTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function answerChoice(choice, button) {
  if (state.answered) {
    return;
  }

  state.answered = true;
  stopTimer();

  const challenge = state.current;
  const isCorrect = choice === challenge.correctMeaning;
  const selectedMap = state.currentChoiceMap.find((item) => item.choice === choice);
  const correctMap = state.currentChoiceMap.find((item) => item.choice === challenge.correctMeaning);
  const choiceButtons = [...elements.choicesGrid.querySelectorAll(".choice-card")];

  choiceButtons.forEach((choiceButton) => {
    choiceButton.disabled = true;
    if (choiceButton.dataset.choice === challenge.correctMeaning) {
      choiceButton.classList.add("is-correct");
    }
  });

  if (button && !isCorrect) {
    button.classList.add("is-wrong");
  }

  if (selectedMap) {
    phaserMap.movePatrol(selectedMap.location);
    activateLocation(selectedMap.location.id);
  }

  if (isCorrect) {
    const points = calculatePoints();
    state.score += points;
    state.correct += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    if (challenge.difficulty >= 3) {
      state.hardCorrect += 1;
    }
    if (getRemainingTime() / state.roundLimit > 0.62) {
      state.fastCaptures += 1;
    }
    phaserMap.moveMeaning(correctMap.location, "captured");
    showFeedback("correct", "تم القبض على المعنى", `${challenge.feedback} +${points} نقطة`);
    awardConditionalBadges();
  } else {
    state.missed += 1;
    state.streak = 0;
    phaserMap.moveMeaning(correctMap.location, "escaped");
    activateLocation(correctMap.location.id);
    const selectedText = choice ? `ليس المقصود "${choice}". ` : "انتهى الوقت قبل القبض على المعنى. ";
    showFeedback("wrong", "المعنى أفلت", `${selectedText}الإجابة الصحيحة: ${challenge.correctMeaning}. ${challenge.feedback}`);
  }

  updateHud();
}

function calculatePoints() {
  const challenge = state.current;
  const base = 95 + challenge.difficulty * 30;
  const speedBonus = Math.round((getRemainingTime() / state.roundLimit) * 70);
  return Math.round((base + speedBonus) * getMultiplier());
}

function getRemainingTime() {
  const elapsed = (Date.now() - state.roundStartedAt) / 1000;
  return Math.max(0, state.roundLimit - elapsed);
}

function useHint() {
  if (!state.current || state.answered || state.hints <= 0) {
    return;
  }

  state.hints -= 1;
  elements.hintCount.textContent = String(state.hints);

  const wrongButtons = [...elements.choicesGrid.querySelectorAll(".choice-card")]
    .filter((button) => button.dataset.choice !== state.current.correctMeaning && !button.classList.contains("is-muted"));

  if (wrongButtons.length) {
    shuffle(wrongButtons)[0].classList.add("is-muted");
  }

  showFeedback("hint", "بلاغ من العسكر", state.current.hint);
  updateHud();
}

function showFeedback(type, title, text) {
  elements.feedbackBox.className = `feedback ${type === "wrong" ? "is-wrong" : ""} ${type === "hint" ? "is-hint" : ""}`.trim();
  elements.feedbackIcon.textContent = type === "correct" ? "✓" : type === "hint" ? "!" : "×";
  elements.feedbackTitle.textContent = title;
  elements.feedbackText.textContent = text;

  if (type === "hint") {
    elements.nextButton.style.display = "none";
  } else {
    elements.nextButton.style.display = "inline-flex";
  }
}

function awardConditionalBadges() {
  if (state.correct >= 4) {
    state.earnedBadges.add("detective");
  }
  if (state.streak >= 5) {
    state.earnedBadges.add("streak");
  }
  if (state.hardCorrect >= 3) {
    state.earnedBadges.add("morphology");
  }
  if (state.correct >= Math.max(6, Math.floor(state.deck.length * 0.7))) {
    state.earnedBadges.add("commander");
  }
  if (state.fastCaptures >= 3) {
    state.earnedBadges.add("speed");
  }
  if (state.missed === 0 && state.correct >= state.deck.length) {
    state.earnedBadges.add("clean");
  }
}

function updateHud() {
  elements.score.textContent = String(state.score);
  elements.streak.textContent = String(state.streak);
  elements.multiplier.textContent = `×${getMultiplier().toFixed(getMultiplier() % 1 ? 1 : 0)}`;
  elements.hintCount.textContent = String(state.hints);
  elements.roundLabel.textContent = `${Math.min(state.roundIndex, state.deck.length)} / ${state.deck.length}`;
  const progress = state.deck.length ? (state.roundIndex / state.deck.length) * 100 : 0;
  elements.roundProgress.style.width = `${progress}%`;
}

function getMultiplier() {
  return Math.min(2.5, 1 + Math.floor(state.streak / 3) * 0.25);
}

function getRoundLimit(challenge) {
  const modeBase = {
    patrol: 22,
    quick: 17,
    timed: 15
  }[state.settings.mode] || 20;

  return Math.max(9, modeBase - (challenge.difficulty - 1) * 2);
}

function endGame() {
  stopTimer();
  awardConditionalBadges();

  const total = state.correct + state.missed;
  const accuracy = total ? Math.round((state.correct / total) * 100) : 0;
  elements.finalScore.textContent = String(state.score);
  elements.finalAccuracy.textContent = `${accuracy}%`;
  elements.finalBestStreak.textContent = String(state.bestStreak);
  elements.winTitle.textContent = accuracy >= 80 ? "الدورية نجحت بامتياز" : "انتهت الدورية وتعلمت قرائن جديدة";
  renderBadges();
  saveLeaderboardEntry(accuracy);
  showScreen("win");
}

function renderBadges() {
  const earned = BADGES.filter((badge) => state.earnedBadges.has(badge.id));

  if (!earned.length) {
    elements.badgeRack.innerHTML = '<div class="empty-state">لم تحصل على شارة بعد. ارفع السلسلة والدقة في الدورية القادمة.</div>';
    return;
  }

  elements.badgeRack.innerHTML = earned
    .map((badge) => `<span class="badge"><span aria-hidden="true">${badge.icon}</span>${badge.title}</span>`)
    .join("");
}

function saveLeaderboardEntry(accuracy) {
  const entry = {
    name: state.settings.playerName,
    score: state.score,
    accuracy,
    bestStreak: state.bestStreak,
    mode: getModeLabel(state.settings.mode),
    date: new Date().toLocaleDateString("ar-SA")
  };

  const rows = getLeaderboard();
  rows.push(entry);
  rows.sort((a, b) => b.score - a.score || b.accuracy - a.accuracy || b.bestStreak - a.bestStreak);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rows.slice(0, 12)));
  } catch (error) {
    console.warn("Unable to save leaderboard", error);
  }
}

function getLeaderboard() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch (error) {
    console.warn("Unable to load leaderboard", error);
    return [];
  }
}

function renderLeaderboard() {
  const rows = getLeaderboard();

  if (!rows.length) {
    elements.leaderboardList.innerHTML = '<div class="empty-state">لا توجد نتائج بعد. ابدأ دورية ليظهر اسمك في الصدارة.</div>';
    return;
  }

  elements.leaderboardList.innerHTML = rows
    .map((row, index) => `
      <article class="leaderboard-item">
        <span class="leaderboard-rank">${index + 1}</span>
        <span class="leaderboard-name">${escapeHtml(row.name)}</span>
        <span class="leaderboard-meta">${row.score} نقطة</span>
        <span class="leaderboard-meta">${row.accuracy}% دقة</span>
        <span class="leaderboard-meta">${escapeHtml(row.mode)} · ${escapeHtml(row.date)}</span>
      </article>
    `)
    .join("");
}

function clearLeaderboard() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Unable to clear leaderboard", error);
  }
  renderLeaderboard();
}

function highlightTarget(sentence, word) {
  const safeSentence = escapeHtml(sentence);
  const safeWord = escapeHtml(word);
  const index = safeSentence.indexOf(safeWord);

  if (index === -1) {
    return safeSentence;
  }

  return `${safeSentence.slice(0, index)}<mark>${safeWord}</mark>${safeSentence.slice(index + safeWord.length)}`;
}

function activateLocation(locationId) {
  const location = getLocation(locationId);
  elements.districtName.textContent = location.name;
  phaserMap.activateLocation(locationId);
}

function resetMapForRound() {
  elements.districtName.textContent = "بلاغ مفتوح";
  phaserMap.resetRound();
  phaserMap.clearLocation();
}

function getLocation(locationId) {
  return LOCATIONS.find((location) => location.id === locationId) || LOCATIONS[0];
}

function getModeLabel(mode) {
  return {
    patrol: "دورية",
    quick: "سريع",
    timed: "تحدي زمني"
  }[mode] || "دورية";
}

function normalizeName(value) {
  const clean = value.trim().replace(/\s+/g, " ");
  return clean || "قائد الدورية";
}

function shuffle(list) {
  const array = [...list];
  for (let index = array.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }
  return array;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
