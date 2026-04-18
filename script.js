const translations = {
  en: {
    brandEyebrow: "Citizen support companion",
    brandTitle: "Scheme Saathi",
    brandCopy:
      "A bilingual helper that collects a citizen profile, checks eligibility, and guides the application journey step by step.",
    languageHeading: "Language",
    profileHeading: "Profile JSON",
    engineHeading: "Matching engine",
    engineIdle: "Waiting for profile data",
    headerEyebrow: "Public schemes discovery",
    headerTitle: "Find the right government schemes faster",
    restart: "Restart",
    send: "Send",
    voice: "Voice",
    voiceStop: "Stop",
    assistant: "Assistant",
    user: "You",
    typingPlaceholder: "Type here",
    voiceListeningPlaceholder: "Listening... speak now",
    greeting:
      "Hello, I'll help you find schemes. Let's build your profile first so I can match the right options.",
    introHint: "You can type answers or tap the suggested choices.",
    chooseState: "Which state do you live in?",
    askAge: "What is your age?",
    askIncome: "What is your annual household income in rupees?",
    askCategory: "Which category applies to you?",
    askOccupation: "What best describes your occupation?",
    invalidState: "Please pick a valid state from the suggested options.",
    invalidAge: "Please enter an age between 0 and 120.",
    invalidIncome: "Please enter income as a number in rupees.",
    invalidCategory: "Please choose one of the listed categories.",
    invalidOccupation: "Please choose one of the listed occupations.",
    collectingDone:
      "Your profile is complete and stored as structured JSON. I'm checking schemes now.",
    engineLoaded: "Loaded 22 schemes from the local dataset",
    engineRules: "Applied age, income, state, category, and occupation rules",
    engineRanked: "Ranked eligible schemes by fit and locality",
    resultsTitle: "Here are the strongest matches for you.",
    noResults:
      "I couldn't find an exact scheme match from this prototype dataset, so I picked near matches you may want to explore.",
    viewMore: "View more schemes",
    askQuestion: "Ask a question",
    selectScheme: "Select a scheme",
    details: "View details",
    apply: "Apply now",
    whyEligible: "Why you qualify",
    benefits: "Benefits",
    documents: "Documents required",
    steps: "Application steps",
    readinessTitle: "Pre-application checklist",
    readinessHelp:
      "Tell me what you already have. I'll show what's missing before you apply.",
    aadhaar: "Aadhaar available",
    incomeCert: "Income certificate ready",
    bankAccount: "Bank account linked",
    yes: "Yes",
    no: "No",
    readyToApply: "You look ready to apply. The official site will open in a new tab.",
    missingDocs:
      "You're close. These items still look missing before the application is likely to go smoothly:",
    startGuidance: "Start guided apply",
    assistActivated:
      "Assist mode is on. I'll stay with you and walk you through the application steps.",
    nextStep: "Next step",
    step1: "Register or sign in on the official portal.",
    step2: "Fill your personal, address, and eligibility details carefully.",
    step3: "Upload the required documents in the requested format.",
    step4: "Review everything once more and submit the application.",
    completionPrompt: "Application submitted?",
    trackingInfo:
      "If the portal gives you an acknowledgement or reference number, save it for status tracking.",
    exploreMore: "Explore more schemes",
    summaryHeading: "Profile summary",
    categoryLabel: "Category",
    occupationLabel: "Occupation",
    incomeLabel: "Income",
    scoreLabel: "Match score",
    documentsMissing: "Missing items",
    openPortal: "Open official portal",
    checklistDone: "Check readiness",
    restartHelp: "Everything has been reset. Let's start again.",
    quickShowMore: "Show more matches",
    quickBestFit: "Best fit",
    quickRestart: "Start over",
    followupPrompt:
      "You can view more schemes, ask about a scheme by name, or restart with a different profile.",
    categorySC: "SC",
    categoryST: "ST",
    categoryOBC: "OBC",
    categoryGeneral: "General",
    occupationStudent: "Student",
    occupationFarmer: "Farmer",
    occupationHomemaker: "Homemaker",
    occupationSelfEmployed: "Self-employed",
    occupationSalaried: "Salaried",
    occupationUnemployed: "Unemployed",
    occupationStreetVendor: "Street vendor",
    occupationArtisan: "Artisan",
    occupationSeniorCitizen: "Senior citizen",
    providerCentral: "Central scheme",
    providerState: "State scheme",
    voiceUnsupported:
      "Voice input is not supported in this browser. Please type your answer instead.",
    voicePermissionDenied:
      "Microphone permission was blocked. Please allow microphone access and try again.",
    voiceNoSpeech: "I couldn't hear anything. Please try again.",
    voiceError: "Voice input stopped unexpectedly. Please try once more.",
    fallbackQuestion:
      "I can explain a listed scheme, show more matches, or restart the profile flow. Try using a scheme name from the cards.",
  },
  hi: {
    brandEyebrow: "नागरिक सहायता साथी",
    brandTitle: "स्कीम साथी",
    brandCopy:
      "यह द्विभाषी सहायक आपकी प्रोफ़ाइल बनाता है, पात्रता जाँचता है और आवेदन की पूरी प्रक्रिया में साथ देता है।",
    languageHeading: "भाषा",
    profileHeading: "प्रोफ़ाइल JSON",
    engineHeading: "मैचिंग इंजन",
    engineIdle: "प्रोफ़ाइल जानकारी का इंतज़ार है",
    headerEyebrow: "सरकारी योजना खोज",
    headerTitle: "आपके लिए सही सरकारी योजनाएँ जल्दी खोजें",
    restart: "रीस्टार्ट",
    send: "भेजें",
    voice: "वॉइस",
    voiceStop: "रोकें",
    assistant: "सहायक",
    user: "आप",
    typingPlaceholder: "यहाँ लिखें",
    voiceListeningPlaceholder: "सुन रहा हूँ... अब बोलिए",
    greeting:
      "नमस्ते, मैं आपको योजनाएँ खोजने में मदद करूँगा। पहले आपकी प्रोफ़ाइल बना लेते हैं ताकि सही योजनाएँ मिल सकें।",
    introHint: "आप उत्तर टाइप कर सकते हैं या सुझाए गए विकल्प चुन सकते हैं।",
    chooseState: "आप किस राज्य में रहते हैं?",
    askAge: "आपकी उम्र क्या है?",
    askIncome: "आपकी वार्षिक पारिवारिक आय कितनी है?",
    askCategory: "आप किस श्रेणी में आते हैं?",
    askOccupation: "आपका पेशा किसके सबसे करीब है?",
    invalidState: "कृपया सुझाए गए विकल्पों में से सही राज्य चुनें।",
    invalidAge: "कृपया 0 से 120 के बीच उम्र दर्ज करें।",
    invalidIncome: "कृपया आय रुपये में संख्या के रूप में दर्ज करें।",
    invalidCategory: "कृपया सूची में से एक श्रेणी चुनें।",
    invalidOccupation: "कृपया सूची में से एक पेशा चुनें।",
    collectingDone:
      "आपकी प्रोफ़ाइल पूरी हो गई है और JSON में सहेज ली गई है। अब मैं योजनाएँ जाँच रहा हूँ।",
    engineLoaded: "स्थानीय डेटासेट से 22 योजनाएँ लोड की गईं",
    engineRules: "उम्र, आय, राज्य, श्रेणी और पेशे के नियम लागू किए गए",
    engineRanked: "पात्र योजनाओं को उपयुक्तता और स्थानीय प्रासंगिकता के आधार पर रैंक किया गया",
    resultsTitle: "ये आपके लिए सबसे उपयुक्त योजनाएँ हैं।",
    noResults:
      "इस प्रोटोटाइप डेटासेट में बिल्कुल सटीक मिलान नहीं मिला, इसलिए मैंने आपके लिए निकटतम विकल्प चुने हैं।",
    viewMore: "और योजनाएँ देखें",
    askQuestion: "सवाल पूछें",
    selectScheme: "योजना चुनें",
    details: "विवरण देखें",
    apply: "अभी आवेदन करें",
    whyEligible: "आप क्यों पात्र हैं",
    benefits: "लाभ",
    documents: "ज़रूरी दस्तावेज़",
    steps: "आवेदन के चरण",
    readinessTitle: "प्री-एप्लिकेशन चेकलिस्ट",
    readinessHelp:
      "बताइए आपके पास कौन-कौन से दस्तावेज़ हैं। मैं बताऊँगा क्या अभी बाकी है।",
    aadhaar: "आधार उपलब्ध है",
    incomeCert: "आय प्रमाणपत्र तैयार है",
    bankAccount: "बैंक खाता लिंक है",
    yes: "हाँ",
    no: "नहीं",
    readyToApply: "आप आवेदन के लिए तैयार दिखते हैं। आधिकारिक वेबसाइट नई टैब में खुलेगी।",
    missingDocs:
      "आप करीब हैं। आवेदन आसान बनाने के लिए ये चीज़ें अभी बाकी दिख रही हैं:",
    startGuidance: "गाइडेड आवेदन शुरू करें",
    assistActivated:
      "असिस्ट मोड चालू है। मैं आवेदन प्रक्रिया के हर चरण में आपके साथ रहूँगा।",
    nextStep: "अगला चरण",
    step1: "आधिकारिक पोर्टल पर रजिस्टर करें या लॉगिन करें।",
    step2: "अपनी व्यक्तिगत, पते और पात्रता की जानकारी सावधानी से भरें।",
    step3: "मांगे गए प्रारूप में दस्तावेज़ अपलोड करें।",
    step4: "सबमिट करने से पहले एक बार सब कुछ फिर से जाँचें।",
    completionPrompt: "क्या आवेदन जमा हो गया?",
    trackingInfo:
      "यदि पोर्टल से कोई acknowledgement या reference number मिले, तो उसे स्टेटस ट्रैकिंग के लिए सुरक्षित रखें।",
    exploreMore: "और योजनाएँ देखें",
    summaryHeading: "प्रोफ़ाइल सारांश",
    categoryLabel: "श्रेणी",
    occupationLabel: "पेशा",
    incomeLabel: "आय",
    scoreLabel: "मैच स्कोर",
    documentsMissing: "बाकी दस्तावेज़",
    openPortal: "आधिकारिक पोर्टल खोलें",
    checklistDone: "तैयारी जाँचें",
    restartHelp: "सब कुछ रीसेट कर दिया गया है। चलिए फिर से शुरू करते हैं।",
    quickShowMore: "और मैच दिखाएँ",
    quickBestFit: "सबसे अच्छा मैच",
    quickRestart: "फिर से शुरू करें",
    followupPrompt:
      "आप और योजनाएँ देख सकते हैं, किसी योजना के नाम से सवाल पूछ सकते हैं, या नई प्रोफ़ाइल के साथ फिर से शुरू कर सकते हैं।",
    categorySC: "एससी",
    categoryST: "एसटी",
    categoryOBC: "ओबीसी",
    categoryGeneral: "सामान्य",
    occupationStudent: "विद्यार्थी",
    occupationFarmer: "किसान",
    occupationHomemaker: "गृहिणी",
    occupationSelfEmployed: "स्वरोज़गार",
    occupationSalaried: "नौकरीपेशा",
    occupationUnemployed: "बेरोज़गार",
    occupationStreetVendor: "रेहड़ी-पटरी विक्रेता",
    occupationArtisan: "कारीगर",
    occupationSeniorCitizen: "वरिष्ठ नागरिक",
    providerCentral: "केंद्र योजना",
    providerState: "राज्य योजना",
    voiceUnsupported:
      "इस ब्राउज़र में वॉइस इनपुट उपलब्ध नहीं है। कृपया अपना उत्तर टाइप करें।",
    voicePermissionDenied:
      "माइक्रोफोन की अनुमति नहीं मिली। कृपया माइक्रोफोन एक्सेस दें और फिर से कोशिश करें।",
    voiceNoSpeech: "मुझे आपकी आवाज़ सुनाई नहीं दी। कृपया फिर से कोशिश करें।",
    voiceError: "वॉइस इनपुट बीच में रुक गया। कृपया दोबारा कोशिश करें।",
    fallbackQuestion:
      "मैं सूचीबद्ध योजना समझा सकता हूँ, और मैच दिखा सकता हूँ, या प्रोफ़ाइल फिर से शुरू कर सकता हूँ। कार्ड पर दिख रहे नाम का उपयोग करें।",
  },
};

const indiaStates = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Gujarat",
  "Haryana",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const occupationKeys = [
  "student",
  "farmer",
  "homemaker",
  "self-employed",
  "salaried",
  "unemployed",
  "street-vendor",
  "artisan",
  "senior-citizen",
];

const schemes = [
  {
    id: "pm-kisan",
    name: { en: "PM-KISAN", hi: "पीएम-किसान" },
    type: "central",
    states: "all",
    occupations: ["farmer"],
    maxIncome: 800000,
    minAge: 18,
    benefits: {
      en: ["Income support of Rs 6,000 per year in installments", "Direct benefit transfer to bank account"],
      hi: ["किस्तों में प्रति वर्ष 6,000 रुपये की आय सहायता", "बैंक खाते में सीधे लाभ अंतरण"],
    },
    documents: {
      en: ["Aadhaar", "Bank account details", "Land record or farmer proof"],
      hi: ["आधार", "बैंक खाते का विवरण", "भूमि अभिलेख या किसान प्रमाण"],
    },
    steps: {
      en: ["Open the agriculture portal", "Verify land and Aadhaar details", "Submit farmer registration"],
      hi: ["कृषि पोर्टल खोलें", "भूमि और आधार विवरण सत्यापित करें", "किसान पंजीकरण जमा करें"],
    },
    officialUrl: "https://pmkisan.gov.in/",
  },
  {
    id: "pmjay",
    name: { en: "Ayushman Bharat PM-JAY", hi: "आयुष्मान भारत पीएम-जेएवाई" },
    type: "central",
    states: "all",
    maxIncome: 500000,
    minAge: 0,
    benefits: {
      en: ["Health coverage up to Rs 5 lakh per family", "Cashless treatment at empanelled hospitals"],
      hi: ["प्रति परिवार 5 लाख रुपये तक स्वास्थ्य कवरेज", "पैनल अस्पतालों में कैशलेस उपचार"],
    },
    documents: {
      en: ["Aadhaar", "Ration card or family ID", "Mobile number"],
      hi: ["आधार", "राशन कार्ड या परिवार पहचान", "मोबाइल नंबर"],
    },
    steps: {
      en: ["Check beneficiary status", "Complete eKYC", "Download card or visit listed hospital"],
      hi: ["लाभार्थी स्थिति जाँचें", "eKYC पूरा करें", "कार्ड डाउनलोड करें या सूचीबद्ध अस्पताल जाएँ"],
    },
    officialUrl: "https://beneficiary.nha.gov.in/",
  },
  {
    id: "ujjwala",
    name: { en: "PM Ujjwala Yojana", hi: "पीएम उज्ज्वला योजना" },
    type: "central",
    states: "all",
    occupations: ["homemaker", "unemployed"],
    maxIncome: 500000,
    benefits: {
      en: ["Free LPG connection support", "Reduced upfront burden for first refill and stove"],
      hi: ["एलपीजी कनेक्शन सहायता", "पहली रीफिल और चूल्हे का प्रारंभिक खर्च कम"],
    },
    documents: {
      en: ["Aadhaar", "Ration card", "Bank account", "Address proof"],
      hi: ["आधार", "राशन कार्ड", "बैंक खाता", "पते का प्रमाण"],
    },
    steps: {
      en: ["Visit the LPG distributor or portal", "Submit household and identity details", "Complete verification"],
      hi: ["एलपीजी वितरक या पोर्टल पर जाएँ", "परिवार और पहचान का विवरण दें", "सत्यापन पूरा करें"],
    },
    officialUrl: "https://www.pmuy.gov.in/",
  },
  {
    id: "pmay-urban",
    name: { en: "PMAY Urban", hi: "पीएमएवाई शहरी" },
    type: "central",
    states: "all",
    maxIncome: 1800000,
    occupations: ["self-employed", "salaried", "homemaker", "unemployed"],
    benefits: {
      en: ["Housing support or interest subsidy", "Support for urban affordable housing"],
      hi: ["आवास सहायता या ब्याज सब्सिडी", "शहरी किफायती आवास के लिए सहायता"],
    },
    documents: {
      en: ["Aadhaar", "Income proof", "Property or address details", "Bank account"],
      hi: ["आधार", "आय प्रमाण", "संपत्ति या पते का विवरण", "बैंक खाता"],
    },
    steps: {
      en: ["Choose beneficiary category", "Submit income and housing details", "Track application on the portal"],
      hi: ["लाभार्थी श्रेणी चुनें", "आय और आवास विवरण जमा करें", "पोर्टल पर आवेदन ट्रैक करें"],
    },
    officialUrl: "https://pmaymis.gov.in/",
  },
  {
    id: "pmay-gramin",
    name: { en: "PMAY Gramin", hi: "पीएमएवाई ग्रामीण" },
    type: "central",
    states: "all",
    maxIncome: 800000,
    occupations: ["farmer", "homemaker", "unemployed"],
    benefits: {
      en: ["Rural housing support", "Assistance linked with sanitation and wage schemes"],
      hi: ["ग्रामीण आवास सहायता", "स्वच्छता और मजदूरी योजनाओं से जुड़ी सहायता"],
    },
    documents: {
      en: ["Aadhaar", "Income proof", "Residence proof", "Bank account"],
      hi: ["आधार", "आय प्रमाण", "निवास प्रमाण", "बैंक खाता"],
    },
    steps: {
      en: ["Verify rural housing deprivation status", "Submit beneficiary details", "Follow gram panchayat verification"],
      hi: ["ग्रामीण आवास वंचना स्थिति सत्यापित करें", "लाभार्थी विवरण जमा करें", "ग्राम पंचायत सत्यापन पूरा करें"],
    },
    officialUrl: "https://pmayg.nic.in/",
  },
  {
    id: "pm-vishwakarma",
    name: { en: "PM Vishwakarma", hi: "पीएम विश्वकर्मा" },
    type: "central",
    states: "all",
    occupations: ["artisan", "self-employed"],
    maxIncome: 1200000,
    benefits: {
      en: ["Skill upgradation, toolkit support, and concessional loans", "Recognition for traditional artisans"],
      hi: ["कौशल उन्नयन, टूलकिट सहायता और रियायती ऋण", "पारंपरिक कारीगरों के लिए मान्यता"],
    },
    documents: {
      en: ["Aadhaar", "Occupation proof", "Bank account", "Mobile number"],
      hi: ["आधार", "पेशा प्रमाण", "बैंक खाता", "मोबाइल नंबर"],
    },
    steps: {
      en: ["Register through CSC or portal", "Validate traditional trade details", "Proceed to training and credit support"],
      hi: ["CSC या पोर्टल से पंजीकरण करें", "पारंपरिक व्यवसाय का सत्यापन करें", "प्रशिक्षण और ऋण सहायता प्रक्रिया पूरी करें"],
    },
    officialUrl: "https://pmvishwakarma.gov.in/",
  },
  {
    id: "stand-up-india",
    name: { en: "Stand-Up India", hi: "स्टैंड-अप इंडिया" },
    type: "central",
    states: "all",
    occupations: ["self-employed"],
    categories: ["SC", "ST", "General", "OBC"],
    minAge: 18,
    maxIncome: 2500000,
    benefits: {
      en: ["Business loans for greenfield enterprises", "Support for women and SC/ST entrepreneurs"],
      hi: ["नई उद्यम इकाइयों के लिए व्यवसाय ऋण", "महिला और एससी/एसटी उद्यमियों के लिए सहायता"],
    },
    documents: {
      en: ["Aadhaar", "Business plan", "Bank account", "Category certificate if applicable"],
      hi: ["आधार", "व्यवसाय योजना", "बैंक खाता", "यदि लागू हो तो श्रेणी प्रमाणपत्र"],
    },
    steps: {
      en: ["Prepare business details", "Apply through bank-linked portal", "Complete bank appraisal"],
      hi: ["व्यवसाय विवरण तैयार करें", "बैंक लिंक्ड पोर्टल से आवेदन करें", "बैंक मूल्यांकन पूरा करें"],
    },
    officialUrl: "https://www.standupmitra.in/",
  },
  {
    id: "mudra",
    name: { en: "Pradhan Mantri Mudra Yojana", hi: "प्रधानमंत्री मुद्रा योजना" },
    type: "central",
    states: "all",
    occupations: ["self-employed", "street-vendor", "artisan"],
    maxIncome: 2000000,
    benefits: {
      en: ["Shishu, Kishore, and Tarun loan categories", "Working capital for micro businesses"],
      hi: ["शिशु, किशोर और तरुण ऋण श्रेणियाँ", "सूक्ष्म व्यवसायों के लिए कार्यशील पूंजी"],
    },
    documents: {
      en: ["Aadhaar", "Business proof", "Bank statement", "Address proof"],
      hi: ["आधार", "व्यवसाय प्रमाण", "बैंक स्टेटमेंट", "पते का प्रमाण"],
    },
    steps: {
      en: ["Select loan stage", "Approach a lender or portal", "Submit repayment and business details"],
      hi: ["ऋण श्रेणी चुनें", "लेंडर या पोर्टल से संपर्क करें", "भुगतान और व्यवसाय विवरण जमा करें"],
    },
    officialUrl: "https://www.mudra.org.in/",
  },
  {
    id: "atal-pension",
    name: { en: "Atal Pension Yojana", hi: "अटल पेंशन योजना" },
    type: "central",
    states: "all",
    minAge: 18,
    maxAge: 40,
    maxIncome: 1500000,
    benefits: {
      en: ["Guaranteed pension after 60", "Auto-debit contribution through bank account"],
      hi: ["60 वर्ष के बाद गारंटीकृत पेंशन", "बैंक खाते से ऑटो-डेबिट अंशदान"],
    },
    documents: {
      en: ["Aadhaar", "Savings bank account", "Mobile number"],
      hi: ["आधार", "सेविंग्स बैंक खाता", "मोबाइल नंबर"],
    },
    steps: {
      en: ["Visit bank or digital channel", "Choose pension slab", "Authorize auto debit"],
      hi: ["बैंक या डिजिटल चैनल पर जाएँ", "पेंशन स्लैब चुनें", "ऑटो डेबिट अधिकृत करें"],
    },
    officialUrl: "https://npstrust.org.in/open-apy-account",
  },
  {
    id: "sukanya",
    name: { en: "Sukanya Samriddhi Yojana", hi: "सुकन्या समृद्धि योजना" },
    type: "central",
    states: "all",
    maxIncome: 2500000,
    occupations: ["homemaker", "salaried", "self-employed"],
    benefits: {
      en: ["Long-term savings for a girl child", "Tax benefits and attractive interest"],
      hi: ["बालिका के लिए दीर्घकालिक बचत", "कर लाभ और आकर्षक ब्याज"],
    },
    documents: {
      en: ["Aadhaar of guardian", "Birth certificate of girl child", "Address proof"],
      hi: ["अभिभावक का आधार", "बालिका का जन्म प्रमाणपत्र", "पते का प्रमाण"],
    },
    steps: {
      en: ["Visit post office or bank", "Open the account with child details", "Deposit according to scheme rules"],
      hi: ["डाकघर या बैंक जाएँ", "बालिका विवरण के साथ खाता खोलें", "योजना नियमों के अनुसार जमा करें"],
    },
    officialUrl: "https://www.indiapost.gov.in/Financial/pages/content/sukanya-samriddhi-yojana.aspx",
  },
  {
    id: "national-scholarship",
    name: { en: "National Scholarship Portal", hi: "नेशनल स्कॉलरशिप पोर्टल" },
    type: "central",
    states: "all",
    occupations: ["student"],
    maxIncome: 250000,
    categories: ["SC", "ST", "OBC"],
    minAge: 14,
    maxAge: 30,
    benefits: {
      en: ["Scholarship support for eligible students", "Centralized online application"],
      hi: ["पात्र विद्यार्थियों के लिए छात्रवृत्ति सहायता", "केंद्रीकृत ऑनलाइन आवेदन"],
    },
    documents: {
      en: ["Student ID", "Income certificate", "Category certificate", "Bank account"],
      hi: ["स्टूडेंट आईडी", "आय प्रमाणपत्र", "श्रेणी प्रमाणपत्र", "बैंक खाता"],
    },
    steps: {
      en: ["Create NSP account", "Choose scholarship category", "Upload institution and eligibility proof"],
      hi: ["NSP खाता बनाएँ", "छात्रवृत्ति श्रेणी चुनें", "संस्थान और पात्रता प्रमाण अपलोड करें"],
    },
    officialUrl: "https://scholarships.gov.in/",
  },
  {
    id: "pmegp",
    name: { en: "PMEGP", hi: "पीएमईजीपी" },
    type: "central",
    states: "all",
    occupations: ["self-employed", "artisan", "unemployed"],
    maxIncome: 2000000,
    minAge: 18,
    benefits: {
      en: ["Subsidy linked support for micro enterprise setup", "Encourages self-employment and local enterprise"],
      hi: ["सूक्ष्म उद्यम स्थापना के लिए सब्सिडी लिंक्ड सहायता", "स्वरोज़गार और स्थानीय उद्यम को बढ़ावा"],
    },
    documents: {
      en: ["Aadhaar", "Project report", "Education proof if needed", "Bank account"],
      hi: ["आधार", "प्रोजेक्ट रिपोर्ट", "यदि आवश्यक हो तो शिक्षा प्रमाण", "बैंक खाता"],
    },
    steps: {
      en: ["Prepare project plan", "Apply through KVIC portal", "Complete interview and bank sanction"],
      hi: ["प्रोजेक्ट योजना तैयार करें", "KVIC पोर्टल से आवेदन करें", "साक्षात्कार और बैंक स्वीकृति पूरी करें"],
    },
    officialUrl: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
  },
  {
    id: "svanidhi",
    name: { en: "PM SVANidhi", hi: "पीएम स्वनिधि" },
    type: "central",
    states: "all",
    occupations: ["street-vendor"],
    maxIncome: 1000000,
    benefits: {
      en: ["Working capital loan for street vendors", "Interest subsidy and digital transaction incentives"],
      hi: ["रेहड़ी-पटरी विक्रेताओं के लिए कार्यशील पूंजी ऋण", "ब्याज सब्सिडी और डिजिटल लेनदेन प्रोत्साहन"],
    },
    documents: {
      en: ["Aadhaar", "Vendor certificate or letter", "Bank account", "Mobile number"],
      hi: ["आधार", "विक्रेता प्रमाणपत्र या पत्र", "बैंक खाता", "मोबाइल नंबर"],
    },
    steps: {
      en: ["Verify vendor identity", "Apply through urban local body or portal", "Accept sanctioned credit"],
      hi: ["विक्रेता पहचान सत्यापित करें", "शहरी निकाय या पोर्टल से आवेदन करें", "स्वीकृत ऋण स्वीकार करें"],
    },
    officialUrl: "https://pmsvanidhi.mohua.gov.in/",
  },
  {
    id: "kisan-credit-card",
    name: { en: "Kisan Credit Card", hi: "किसान क्रेडिट कार्ड" },
    type: "central",
    states: "all",
    occupations: ["farmer"],
    maxIncome: 1500000,
    benefits: {
      en: ["Short-term crop loan access", "Flexible working capital for agriculture and allied needs"],
      hi: ["अल्पकालिक फसल ऋण सुविधा", "कृषि और सहायक जरूरतों के लिए लचीली पूंजी"],
    },
    documents: {
      en: ["Aadhaar", "Land or cultivation proof", "Bank account", "Photograph"],
      hi: ["आधार", "भूमि या खेती का प्रमाण", "बैंक खाता", "फोटो"],
    },
    steps: {
      en: ["Apply at participating bank", "Provide cultivation details", "Complete bank verification"],
      hi: ["भागीदार बैंक में आवेदन करें", "खेती का विवरण दें", "बैंक सत्यापन पूरा करें"],
    },
    officialUrl: "https://www.myscheme.gov.in/schemes/kcc",
  },
  {
    id: "ladli-laxmi",
    name: { en: "Ladli Laxmi Yojana", hi: "लाडली लक्ष्मी योजना" },
    type: "state",
    states: ["Madhya Pradesh"],
    occupations: ["homemaker", "self-employed", "salaried"],
    maxIncome: 2000000,
    benefits: {
      en: ["Financial support for the girl child at milestone stages", "Encourages education and social security"],
      hi: ["बालिका के लिए चरणबद्ध वित्तीय सहायता", "शिक्षा और सामाजिक सुरक्षा को प्रोत्साहन"],
    },
    documents: {
      en: ["Child birth certificate", "Aadhaar", "Residence proof", "Bank account"],
      hi: ["बालिका जन्म प्रमाणपत्र", "आधार", "निवास प्रमाण", "बैंक खाता"],
    },
    steps: {
      en: ["Apply through MP citizen portal", "Submit child and guardian details", "Track approval online"],
      hi: ["एमपी नागरिक पोर्टल से आवेदन करें", "बालिका और अभिभावक विवरण जमा करें", "ऑनलाइन स्वीकृति ट्रैक करें"],
    },
    officialUrl: "https://ladlilaxmi.mp.gov.in/",
  },
  {
    id: "kalia",
    name: { en: "KALIA Yojana", hi: "कालिया योजना" },
    type: "state",
    states: ["Odisha"],
    occupations: ["farmer"],
    maxIncome: 1200000,
    benefits: {
      en: ["Livelihood and cultivation support for farmers", "Support for vulnerable agricultural households"],
      hi: ["किसानों के लिए आजीविका और खेती सहायता", "कमजोर कृषि परिवारों के लिए समर्थन"],
    },
    documents: {
      en: ["Aadhaar", "Farmer identity proof", "Bank account", "Residence proof"],
      hi: ["आधार", "किसान पहचान प्रमाण", "बैंक खाता", "निवास प्रमाण"],
    },
    steps: {
      en: ["Check eligibility on Odisha portal", "Validate bank and identity details", "Submit application"],
      hi: ["ओडिशा पोर्टल पर पात्रता जाँचें", "बैंक और पहचान विवरण सत्यापित करें", "आवेदन जमा करें"],
    },
    officialUrl: "https://kalia.odisha.gov.in/",
  },
  {
    id: "magalir-urimai",
    name: { en: "Kalaignar Magalir Urimai Thogai", hi: "कलाईग्नर मगलिर उरिमै थोगई" },
    type: "state",
    states: ["Tamil Nadu"],
    occupations: ["homemaker", "unemployed"],
    maxIncome: 250000,
    benefits: {
      en: ["Monthly financial assistance for eligible women", "Household support for low-income families"],
      hi: ["पात्र महिलाओं के लिए मासिक वित्तीय सहायता", "कम आय वाले परिवारों के लिए घरेलू सहायता"],
    },
    documents: {
      en: ["Aadhaar", "Family card", "Bank account", "Residence proof"],
      hi: ["आधार", "फैमिली कार्ड", "बैंक खाता", "निवास प्रमाण"],
    },
    steps: {
      en: ["Register on the state portal or camp", "Submit family and bank details", "Track beneficiary confirmation"],
      hi: ["राज्य पोर्टल या कैंप से पंजीकरण करें", "परिवार और बैंक विवरण जमा करें", "लाभार्थी पुष्टि ट्रैक करें"],
    },
    officialUrl: "https://kmut.tn.gov.in/",
  },
  {
    id: "rythu-bharosa",
    name: { en: "YSR Rythu Bharosa", hi: "वाईएसआर रायतु भरोसा" },
    type: "state",
    states: ["Andhra Pradesh"],
    occupations: ["farmer"],
    maxIncome: 1500000,
    benefits: {
      en: ["Annual investment support for farmers", "Input cost support for cultivation seasons"],
      hi: ["किसानों के लिए वार्षिक निवेश सहायता", "खेती सीज़न के लिए इनपुट लागत सहायता"],
    },
    documents: {
      en: ["Aadhaar", "Land record", "Bank account", "Residence proof"],
      hi: ["आधार", "भूमि रिकॉर्ड", "बैंक खाता", "निवास प्रमाण"],
    },
    steps: {
      en: ["Check village secretariat or portal records", "Validate landholding details", "Complete bank seeding"],
      hi: ["ग्राम सचिवालय या पोर्टल रिकॉर्ड जाँचें", "भूमि विवरण सत्यापित करें", "बैंक सीडिंग पूरी करें"],
    },
    officialUrl: "https://ysrrythubharosa.ap.gov.in/RBApp/index.html",
  },
  {
    id: "gruha-lakshmi",
    name: { en: "Gruha Lakshmi", hi: "गृह लक्ष्मी" },
    type: "state",
    states: ["Karnataka"],
    occupations: ["homemaker"],
    maxIncome: 300000,
    benefits: {
      en: ["Monthly support for women head of family", "Household income relief"],
      hi: ["परिवार की महिला मुखिया के लिए मासिक सहायता", "घरेलू आय राहत"],
    },
    documents: {
      en: ["Aadhaar", "Ration card", "Bank account", "Residence proof"],
      hi: ["आधार", "राशन कार्ड", "बैंक खाता", "निवास प्रमाण"],
    },
    steps: {
      en: ["Submit family details on state portal", "Complete eKYC and bank linking", "Track approval status"],
      hi: ["राज्य पोर्टल पर परिवार विवरण जमा करें", "eKYC और बैंक लिंकिंग पूरी करें", "स्वीकृति की स्थिति ट्रैक करें"],
    },
    officialUrl: "https://sevasindhugs.karnataka.gov.in/",
  },
  {
    id: "kanya-utthan",
    name: { en: "Mukhyamantri Kanya Utthan Yojana", hi: "मुख्यमंत्री कन्या उत्थान योजना" },
    type: "state",
    states: ["Bihar"],
    occupations: ["student"],
    maxIncome: 250000,
    minAge: 17,
    maxAge: 30,
    benefits: {
      en: ["Financial support for girls' education milestones", "Encourages graduation and continuation of study"],
      hi: ["बालिकाओं की शिक्षा के चरणों के लिए वित्तीय सहायता", "स्नातक और आगे की पढ़ाई को प्रोत्साहन"],
    },
    documents: {
      en: ["Student registration", "Aadhaar", "Bank account", "Education proof"],
      hi: ["स्टूडेंट पंजीकरण", "आधार", "बैंक खाता", "शिक्षा प्रमाण"],
    },
    steps: {
      en: ["Apply on Bihar education portal", "Verify academic records", "Submit bank details for payment"],
      hi: ["बिहार शिक्षा पोर्टल पर आवेदन करें", "शैक्षणिक रिकॉर्ड सत्यापित करें", "भुगतान के लिए बैंक विवरण जमा करें"],
    },
    officialUrl: "https://medhasoft.bih.nic.in/",
  },
  {
    id: "old-age-pension",
    name: { en: "Indira Gandhi National Old Age Pension Scheme", hi: "इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना" },
    type: "central",
    states: "all",
    occupations: ["senior-citizen", "unemployed"],
    minAge: 60,
    maxIncome: 300000,
    benefits: {
      en: ["Monthly pension support for eligible senior citizens", "Can be paired with state top-up support"],
      hi: ["पात्र वरिष्ठ नागरिकों के लिए मासिक पेंशन सहायता", "राज्य अतिरिक्त सहायता के साथ जोड़ी जा सकती है"],
    },
    documents: {
      en: ["Aadhaar", "Age proof", "Bank account", "Income or BPL proof"],
      hi: ["आधार", "आयु प्रमाण", "बैंक खाता", "आय या बीपीएल प्रमाण"],
    },
    steps: {
      en: ["Visit social welfare portal or office", "Submit age and income documents", "Track pension sanction"],
      hi: ["सामाजिक कल्याण पोर्टल या कार्यालय जाएँ", "आयु और आय दस्तावेज़ जमा करें", "पेंशन स्वीकृति ट्रैक करें"],
    },
    officialUrl: "https://nsap.nic.in/",
  },
  {
    id: "shramyogi",
    name: { en: "PM Shram Yogi Maandhan", hi: "पीएम श्रम योगी मानधन" },
    type: "central",
    states: "all",
    occupations: ["street-vendor", "artisan", "self-employed", "unemployed"],
    minAge: 18,
    maxAge: 40,
    maxIncome: 150000,
    benefits: {
      en: ["Contributory pension for unorganized workers", "Monthly pension after age 60"],
      hi: ["असंगठित कामगारों के लिए अंशदायी पेंशन", "60 वर्ष के बाद मासिक पेंशन"],
    },
    documents: {
      en: ["Aadhaar", "Savings bank account", "Mobile number"],
      hi: ["आधार", "सेविंग्स बैंक खाता", "मोबाइल नंबर"],
    },
    steps: {
      en: ["Visit CSC or official portal", "Confirm age and income criteria", "Authorize auto debit contribution"],
      hi: ["CSC या आधिकारिक पोर्टल पर जाएँ", "आयु और आय मानदंड सत्यापित करें", "ऑटो डेबिट अंशदान अधिकृत करें"],
    },
    officialUrl: "https://maandhan.in/shramyogi",
  },
  {
    id: "gaurav-grant",
    name: { en: "SC/ST Entrepreneur Support Window", hi: "एससी/एसटी उद्यमी सहायता विंडो" },
    type: "central",
    states: "all",
    occupations: ["self-employed", "artisan"],
    categories: ["SC", "ST"],
    maxIncome: 2000000,
    benefits: {
      en: ["Focused support for enterprise and skill-linked assistance", "Useful for first-time entrepreneurs in reserved categories"],
      hi: ["उद्यम और कौशल आधारित सहायता", "आरक्षित श्रेणी के प्रथम उद्यमियों के लिए उपयोगी"],
    },
    documents: {
      en: ["Category certificate", "Aadhaar", "Business plan", "Bank account"],
      hi: ["श्रेणी प्रमाणपत्र", "आधार", "व्यवसाय योजना", "बैंक खाता"],
    },
    steps: {
      en: ["Prepare category and business documents", "Apply through linked portal or district office", "Follow verification"],
      hi: ["श्रेणी और व्यवसाय दस्तावेज़ तैयार करें", "लिंक्ड पोर्टल या जिला कार्यालय से आवेदन करें", "सत्यापन पूरा करें"],
    },
    officialUrl: "https://www.myscheme.gov.in/",
  },
  {
    id: "chief-minister-scholar",
    name: { en: "State Merit Scholarship Window", hi: "राज्य मेरिट छात्रवृत्ति विंडो" },
    type: "state",
    states: ["Assam", "Jharkhand", "Rajasthan", "Uttar Pradesh", "West Bengal"],
    occupations: ["student"],
    maxIncome: 300000,
    minAge: 14,
    maxAge: 28,
    benefits: {
      en: ["Merit-linked support for school and college students", "Useful when state scholarship windows are active"],
      hi: ["स्कूल और कॉलेज छात्रों के लिए मेरिट आधारित सहायता", "राज्य छात्रवृत्ति विंडो खुली होने पर उपयोगी"],
    },
    documents: {
      en: ["Marksheet", "Income proof", "Bank account", "Institution certificate"],
      hi: ["मार्कशीट", "आय प्रमाण", "बैंक खाता", "संस्थान प्रमाणपत्र"],
    },
    steps: {
      en: ["Check state scholarship portal", "Upload academic and income proof", "Track institute verification"],
      hi: ["राज्य छात्रवृत्ति पोर्टल जाँचें", "शैक्षणिक और आय प्रमाण अपलोड करें", "संस्थान सत्यापन ट्रैक करें"],
    },
    officialUrl: "https://www.myscheme.gov.in/",
  },
];

const state = {
  language: "en",
  conversationStep: 0,
  profile: {
    state: "",
    age: null,
    income: null,
    category: "",
    occupation: "",
  },
  collected: [],
  matchedSchemes: [],
  resultsShown: 3,
  selectedSchemeId: null,
  readiness: {
    aadhaar: null,
    incomeCert: null,
    bankAccount: null,
  },
  guidanceIndex: 0,
};

const stepOrder = ["state", "age", "income", "category", "occupation"];

const elements = {
  body: document.body,
  chatContainer: document.querySelector("#chatContainer"),
  chatForm: document.querySelector("#chatForm"),
  chatInput: document.querySelector("#chatInput"),
  sendBtn: document.querySelector("#sendBtn"),
  voiceBtn: document.querySelector("#voiceBtn"),
  quickActions: document.querySelector("#quickActions"),
  profilePreview: document.querySelector("#profilePreview"),
  engineStatus: document.querySelector("#engineStatus"),
  restartBtn: document.querySelector("#restartBtn"),
  languageBtns: Array.from(document.querySelectorAll(".language-btn")),
  schemeCardTemplate: document.querySelector("#schemeCardTemplate"),
};

const speechState = {
  recognition: null,
  supported: false,
  isListening: false,
  pendingTranscript: "",
  shouldAutoSubmit: false,
  lastError: "",
};

function t(key) {
  return translations[state.language][key];
}

function setLanguage(nextLanguage) {
  state.language = nextLanguage;
  document.documentElement.lang = nextLanguage === "hi" ? "hi" : "en";
  elements.languageBtns.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === nextLanguage);
  });
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  renderProfilePreview();
  renderQuickActions();
  updateVoiceButton();
}

function createMessageRow(role, contentNode) {
  const row = document.createElement("div");
  row.className = `message-row ${role}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const label = document.createElement("span");
  label.className = "message-label";
  label.textContent = role === "assistant" ? t("assistant") : t("user");
  bubble.appendChild(label);

  if (
    typeof contentNode === "string" ||
    typeof contentNode === "number" ||
    typeof contentNode === "boolean"
  ) {
    const paragraph = document.createElement("p");
    paragraph.textContent = String(contentNode);
    bubble.appendChild(paragraph);
  } else {
    bubble.appendChild(contentNode);
  }

  row.appendChild(bubble);
  elements.chatContainer.appendChild(row);
  elements.chatContainer.scrollTop = elements.chatContainer.scrollHeight;
  return row;
}

function createParagraphBlock(texts) {
  const wrapper = document.createElement("div");
  texts.forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    wrapper.appendChild(paragraph);
  });
  return wrapper;
}

function addAssistantMessage(texts, options = []) {
  const wrapper = createParagraphBlock(Array.isArray(texts) ? texts : [texts]);
  if (options.length > 0) {
    const optionRow = document.createElement("div");
    optionRow.className = "options-row";
    options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-chip";
      button.textContent = option.label;
      button.addEventListener("click", () => handleSubmittedAnswer(option.value));
      optionRow.appendChild(button);
    });
    wrapper.appendChild(optionRow);
  }
  createMessageRow("assistant", wrapper);
}

function addUserMessage(text) {
  createMessageRow("user", text);
}

function getSpeechRecognitionConstructor() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function getRecognitionLanguage() {
  return state.language === "hi" ? "hi-IN" : "en-IN";
}

function initSpeechRecognition() {
  const SpeechRecognition = getSpeechRecognitionConstructor();
  speechState.supported = Boolean(SpeechRecognition);

  if (!speechState.supported) {
    updateVoiceButton();
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;
  recognition.lang = getRecognitionLanguage();

  recognition.onstart = () => {
    speechState.isListening = true;
    speechState.lastError = "";
    speechState.pendingTranscript = "";
    updateVoiceButton();
  };

  recognition.onresult = (event) => {
    let transcript = "";

    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      transcript += event.results[index][0].transcript;
    }

    speechState.pendingTranscript = normalizeAnswer(transcript);
    elements.chatInput.value = speechState.pendingTranscript;
  };

  recognition.onerror = (event) => {
    speechState.lastError = event.error || "unknown";
    speechState.isListening = false;
    speechState.shouldAutoSubmit = false;
    updateVoiceButton();

    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
      addAssistantMessage(t("voicePermissionDenied"));
      return;
    }

    if (event.error === "no-speech") {
      addAssistantMessage(t("voiceNoSpeech"));
      return;
    }

    if (event.error !== "aborted") {
      addAssistantMessage(t("voiceError"));
    }
  };

  recognition.onend = () => {
    const transcript = normalizeAnswer(elements.chatInput.value || speechState.pendingTranscript);
    const shouldSubmit = speechState.shouldAutoSubmit && transcript && !speechState.lastError;

    speechState.isListening = false;
    speechState.shouldAutoSubmit = false;
    speechState.pendingTranscript = "";
    speechState.lastError = "";
    updateVoiceButton();

    if (shouldSubmit) {
      elements.chatInput.value = "";
      handleSubmittedAnswer(transcript);
    }
  };

  speechState.recognition = recognition;
  updateVoiceButton();
}

function updateVoiceButton() {
  const button = elements.voiceBtn;
  if (!button) {
    return;
  }

  button.classList.toggle("is-listening", speechState.isListening);
  button.classList.toggle("is-disabled", !speechState.supported);
  button.setAttribute("aria-pressed", speechState.isListening ? "true" : "false");
  button.textContent = speechState.isListening ? t("voiceStop") : t("voice");
  button.title = speechState.supported ? button.textContent : t("voiceUnsupported");
  elements.chatInput.placeholder = speechState.isListening
    ? t("voiceListeningPlaceholder")
    : t("typingPlaceholder");
}

function toggleVoiceInput() {
  if (!speechState.supported || !speechState.recognition) {
    addAssistantMessage(t("voiceUnsupported"));
    return;
  }

  if (speechState.isListening) {
    speechState.shouldAutoSubmit = false;
    speechState.recognition.stop();
    return;
  }

  speechState.pendingTranscript = "";
  speechState.lastError = "";
  speechState.shouldAutoSubmit = true;
  speechState.recognition.lang = getRecognitionLanguage();
  elements.chatInput.value = "";
  speechState.recognition.start();
}

function askCurrentQuestion() {
  const stepKey = stepOrder[state.conversationStep];
  if (!stepKey) {
    finalizeProfile();
    return;
  }

  updateInputMode(stepKey);
  renderQuickActions();

  if (stepKey === "state") {
    addAssistantMessage([t("chooseState"), t("introHint")], indiaStates.slice(0, 8).map((item) => ({ label: item, value: item })));
    return;
  }

  if (stepKey === "age") {
    addAssistantMessage(t("askAge"));
    return;
  }

  if (stepKey === "income") {
    addAssistantMessage(t("askIncome"), [
      { label: "1,50,000", value: "150000" },
      { label: "3,00,000", value: "300000" },
      { label: "6,00,000", value: "600000" },
    ]);
    return;
  }

  if (stepKey === "category") {
    addAssistantMessage(t("askCategory"), categoryOptions().map((item) => ({ label: item.label, value: item.value })));
    return;
  }

  if (stepKey === "occupation") {
    addAssistantMessage(t("askOccupation"), occupationOptions().map((item) => ({ label: item.label, value: item.value })));
  }
}

function categoryOptions() {
  return [
    { value: "SC", label: t("categorySC") },
    { value: "ST", label: t("categoryST") },
    { value: "OBC", label: t("categoryOBC") },
    { value: "General", label: t("categoryGeneral") },
  ];
}

function occupationOptions() {
  return [
    { value: "student", label: t("occupationStudent") },
    { value: "farmer", label: t("occupationFarmer") },
    { value: "homemaker", label: t("occupationHomemaker") },
    { value: "self-employed", label: t("occupationSelfEmployed") },
    { value: "salaried", label: t("occupationSalaried") },
    { value: "unemployed", label: t("occupationUnemployed") },
    { value: "street-vendor", label: t("occupationStreetVendor") },
    { value: "artisan", label: t("occupationArtisan") },
    { value: "senior-citizen", label: t("occupationSeniorCitizen") },
  ];
}

function normalizeAnswer(value) {
  return String(value || "").trim();
}

function validateCurrentStep(rawValue) {
  const value = normalizeAnswer(rawValue);
  const stepKey = stepOrder[state.conversationStep];

  if (stepKey === "state") {
    const matchedState = indiaStates.find((item) => item.toLowerCase() === value.toLowerCase());
    if (!matchedState) {
      return { valid: false, error: t("invalidState") };
    }
    return { valid: true, normalized: matchedState };
  }

  if (stepKey === "age") {
    const numericAge = Number(value.replace(/,/g, ""));
    if (!Number.isFinite(numericAge) || numericAge < 0 || numericAge > 120) {
      return { valid: false, error: t("invalidAge") };
    }
    return { valid: true, normalized: numericAge };
  }

  if (stepKey === "income") {
    const numericIncome = Number(value.replace(/[^\d]/g, ""));
    if (!Number.isFinite(numericIncome) || numericIncome < 0) {
      return { valid: false, error: t("invalidIncome") };
    }
    return { valid: true, normalized: numericIncome };
  }

  if (stepKey === "category") {
    const matchedCategory = categoryOptions().find((item) => item.value.toLowerCase() === value.toLowerCase() || item.label.toLowerCase() === value.toLowerCase());
    if (!matchedCategory) {
      return { valid: false, error: t("invalidCategory") };
    }
    return { valid: true, normalized: matchedCategory.value };
  }

  if (stepKey === "occupation") {
    const matchedOccupation = occupationOptions().find((item) => item.value.toLowerCase() === value.toLowerCase() || item.label.toLowerCase() === value.toLowerCase());
    if (!matchedOccupation) {
      return { valid: false, error: t("invalidOccupation") };
    }
    return { valid: true, normalized: matchedOccupation.value };
  }

  return { valid: true, normalized: value };
}

function handleSubmittedAnswer(answer) {
  const cleaned = normalizeAnswer(answer);
  if (!cleaned) {
    return;
  }

  if (state.conversationStep < stepOrder.length) {
    const validation = validateCurrentStep(cleaned);
    addUserMessage(displayAnswerForStep(stepOrder[state.conversationStep], cleaned, validation.normalized));

    if (!validation.valid) {
      addAssistantMessage(validation.error);
      askCurrentQuestion();
      return;
    }

    const stepKey = stepOrder[state.conversationStep];
    state.profile[stepKey] = validation.normalized;
    state.collected.push(stepKey);
    state.conversationStep += 1;
    renderProfilePreview();
    askCurrentQuestion();
    return;
  }

  handleFreeformChat(cleaned);
}

function displayAnswerForStep(stepKey, raw, normalized) {
  if (stepKey === "age" && normalized !== undefined) {
    return String(normalized);
  }

  if (stepKey === "income" && normalized !== undefined) {
    return `Rs ${Number(normalized).toLocaleString("en-IN")}`;
  }

  if (stepKey === "occupation") {
    return occupationOptions().find((item) => item.value === normalized)?.label || raw;
  }

  if (stepKey === "category") {
    return categoryOptions().find((item) => item.value === normalized)?.label || raw;
  }

  return normalized || raw;
}

function renderProfilePreview() {
  const preview = {
    state: state.profile.state || "",
    age: state.profile.age,
    income: state.profile.income,
    category: state.profile.category,
    occupation: state.profile.occupation,
  };
  elements.profilePreview.textContent = JSON.stringify(preview, null, 2);
}

function updateEngineStatus(items) {
  elements.engineStatus.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    elements.engineStatus.appendChild(li);
  });
}

function finalizeProfile() {
  const missing = stepOrder.filter((item) => !state.profile[item] && state.profile[item] !== 0);
  if (missing.length > 0) {
    state.conversationStep = stepOrder.indexOf(missing[0]);
    askCurrentQuestion();
    return;
  }

  addAssistantMessage(t("collectingDone"));
  updateEngineStatus([t("engineLoaded"), t("engineRules"), t("engineRanked")]);

  const matches = matchSchemes(state.profile);
  state.matchedSchemes = matches;
  state.resultsShown = 3;
  showSchemeResults(matches.slice(0, state.resultsShown), matches.length === 0);
  renderQuickActions();
}

function matchSchemes(profile) {
  const ranked = schemes
    .map((scheme) => {
      const evaluation = evaluateScheme(profile, scheme);
      return evaluation ? { ...scheme, ...evaluation } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  if (ranked.length > 0) {
    return ranked;
  }

  return schemes
    .map((scheme) => ({
      ...scheme,
      score: fallbackScore(profile, scheme),
      reasons: fallbackReasons(profile, scheme),
      exactMatch: false,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

function evaluateScheme(profile, scheme) {
  if (scheme.states !== "all" && !scheme.states.includes(profile.state)) {
    return null;
  }
  if (scheme.minAge !== undefined && profile.age < scheme.minAge) {
    return null;
  }
  if (scheme.maxAge !== undefined && profile.age > scheme.maxAge) {
    return null;
  }
  if (scheme.maxIncome !== undefined && profile.income > scheme.maxIncome) {
    return null;
  }
  if (scheme.categories && !scheme.categories.includes(profile.category)) {
    return null;
  }
  if (scheme.occupations && !scheme.occupations.includes(profile.occupation)) {
    return null;
  }

  const reasons = [];
  let score = 40;

  if (scheme.states !== "all") {
    score += 24;
    reasons.push(reasonForText("state", profile.state));
  } else {
    score += 8;
  }

  if (scheme.occupations?.includes(profile.occupation)) {
    score += 20;
    reasons.push(reasonForText("occupation", profile.occupation));
  }

  if (scheme.categories?.includes(profile.category)) {
    score += 12;
    reasons.push(reasonForText("category", profile.category));
  }

  if (scheme.maxIncome !== undefined) {
    score += scheme.maxIncome - profile.income > 0 ? 10 : 3;
    reasons.push(reasonForText("income", profile.income));
  }

  if (
    (scheme.minAge === undefined || profile.age >= scheme.minAge) &&
    (scheme.maxAge === undefined || profile.age <= scheme.maxAge)
  ) {
    score += 10;
    reasons.push(reasonForText("age", profile.age));
  }

  return { score, reasons, exactMatch: true };
}

function fallbackScore(profile, scheme) {
  let score = 0;
  if (scheme.states === "all" || scheme.states.includes(profile.state)) {
    score += 30;
  }
  if (scheme.occupations?.includes(profile.occupation)) {
    score += 25;
  }
  if (scheme.categories?.includes(profile.category)) {
    score += 20;
  }
  if (scheme.maxIncome && profile.income <= scheme.maxIncome * 1.2) {
    score += 15;
  }
  if (
    (scheme.minAge === undefined || profile.age >= scheme.minAge - 5) &&
    (scheme.maxAge === undefined || profile.age <= scheme.maxAge + 5)
  ) {
    score += 10;
  }
  return score;
}

function fallbackReasons(profile, scheme) {
  const reasons = [];
  if (scheme.states === "all" || scheme.states.includes(profile.state)) {
    reasons.push(reasonForText("state", profile.state));
  }
  if (scheme.occupations?.includes(profile.occupation)) {
    reasons.push(reasonForText("occupation", profile.occupation));
  }
  if (scheme.categories?.includes(profile.category)) {
    reasons.push(reasonForText("category", profile.category));
  }
  if (reasons.length === 0) {
    reasons.push(
      state.language === "hi"
        ? "यह निकटतम विकल्पों में से एक है और आगे मैन्युअल सत्यापन की आवश्यकता हो सकती है।"
        : "This is one of the nearest alternatives and may need manual verification."
    );
  }
  return reasons;
}

function reasonForText(kind, value) {
  if (state.language === "hi") {
    if (kind === "state") {
      return `${value} के लिए उपलब्ध`;
    }
    if (kind === "occupation") {
      return `${occupationOptions().find((item) => item.value === value)?.label || value} प्रोफ़ाइल से मेल खाता है`;
    }
    if (kind === "category") {
      return `${categoryOptions().find((item) => item.value === value)?.label || value} श्रेणी के लिए उपयुक्त`;
    }
    if (kind === "income") {
      return `आपकी आय सीमा के भीतर है`;
    }
    if (kind === "age") {
      return `आपकी उम्र पात्रता सीमा में है`;
    }
  }

  if (kind === "state") {
    return `Available for ${value}`;
  }
  if (kind === "occupation") {
    return `Fits your ${occupationOptions().find((item) => item.value === value)?.label || value.toLowerCase()} profile`;
  }
  if (kind === "category") {
    return `Relevant for ${value} category`;
  }
  if (kind === "income") {
    return "Your income is within the target range";
  }
  if (kind === "age") {
    return "Your age falls inside the eligibility band";
  }
  return "";
}

function showSchemeResults(resultSet, isFallback) {
  const wrapper = document.createElement("div");

  const headline = document.createElement("p");
  headline.textContent = isFallback ? t("noResults") : t("resultsTitle");
  wrapper.appendChild(headline);

  const tagRow = document.createElement("div");
  tagRow.className = "tag-row";
  const summaryTags = [
    `${t("summaryHeading")}: ${state.profile.state}, ${state.profile.age}`,
    `${t("categoryLabel")}: ${categoryOptions().find((item) => item.value === state.profile.category)?.label || state.profile.category}`,
    `${t("occupationLabel")}: ${occupationOptions().find((item) => item.value === state.profile.occupation)?.label || state.profile.occupation}`,
    `${t("incomeLabel")}: Rs ${Number(state.profile.income).toLocaleString("en-IN")}`,
  ];

  summaryTags.forEach((text) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = text;
    tagRow.appendChild(tag);
  });
  wrapper.appendChild(tagRow);

  const results = document.createElement("div");
  results.className = "scheme-results";
  resultSet.forEach((scheme) => {
    results.appendChild(renderSchemeCard(scheme));
  });
  wrapper.appendChild(results);

  const helper = document.createElement("p");
  helper.className = "helper-line";
  helper.textContent = t("followupPrompt");
  wrapper.appendChild(helper);

  createMessageRow("assistant", wrapper);
}

function renderSchemeCard(scheme) {
  const fragment = elements.schemeCardTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".scheme-card");
  const badge = fragment.querySelector(".scheme-badge");
  const name = fragment.querySelector(".scheme-name");
  const score = fragment.querySelector(".score-pill");
  const why = fragment.querySelector(".scheme-why");
  const meta = fragment.querySelector(".scheme-meta");
  const detailsBtn = fragment.querySelector(".details-btn");
  const applyBtn = fragment.querySelector(".apply-btn");

  badge.textContent = scheme.type === "state" ? t("providerState") : t("providerCentral");
  name.textContent = scheme.name[state.language];
  score.textContent = `${t("scoreLabel")}: ${Math.round(scheme.score)}`;
  why.textContent = scheme.reasons.join(" • ");

  const benefitsText = scheme.benefits[state.language].slice(0, 2).join(" • ");
  const docsText = scheme.documents[state.language].slice(0, 2).join(" • ");

  [
    { label: t("benefits"), value: benefitsText },
    { label: t("documents"), value: docsText },
  ].forEach((block) => {
    const div = document.createElement("div");
    div.className = "meta-block";
    div.textContent = `${block.label}: ${block.value}`;
    meta.appendChild(div);
  });

  detailsBtn.textContent = t("details");
  detailsBtn.addEventListener("click", () => showSchemeDetails(scheme.id));

  applyBtn.textContent = t("apply");
  applyBtn.addEventListener("click", () => showSchemeDetails(scheme.id, { openChecklist: true }));

  card.dataset.schemeId = scheme.id;
  return card;
}

function showMoreSchemes() {
  const nextBatch = state.matchedSchemes.slice(state.resultsShown, state.resultsShown + 3);
  if (nextBatch.length === 0) {
    addAssistantMessage(
      state.language === "hi"
        ? "अभी सभी मैच दिख चुके हैं। आप किसी योजना का विवरण देख सकते हैं।"
        : "You've already seen all matched schemes. You can open any scheme for details."
    );
    return;
  }
  state.resultsShown += nextBatch.length;
  showSchemeResults(nextBatch, state.matchedSchemes.every((item) => item.exactMatch === false));
}

function showSchemeDetails(schemeId, options = {}) {
  const scheme = state.matchedSchemes.find((item) => item.id === schemeId) || schemes.find((item) => item.id === schemeId);
  if (!scheme) {
    addAssistantMessage(t("fallbackQuestion"));
    return;
  }

  state.selectedSchemeId = scheme.id;
  const card = document.createElement("div");
  card.className = "detail-card";

  const intro = document.createElement("p");
  intro.textContent = scheme.name[state.language];
  card.appendChild(intro);

  const detailGrid = document.createElement("div");
  detailGrid.className = "detail-grid";

  [
    { title: t("whyEligible"), items: scheme.reasons || fallbackReasons(state.profile, scheme) },
    { title: t("benefits"), items: scheme.benefits[state.language] },
    { title: t("documents"), items: scheme.documents[state.language] },
    { title: t("steps"), items: scheme.steps[state.language], ordered: true },
  ].forEach((section) => {
    const block = document.createElement("section");
    block.className = "detail-section";
    const heading = document.createElement("h4");
    heading.textContent = section.title;
    block.appendChild(heading);
    const list = document.createElement(section.ordered ? "ol" : "ul");
    section.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    block.appendChild(list);
    detailGrid.appendChild(block);
  });

  card.appendChild(detailGrid);

  const actionRow = document.createElement("div");
  actionRow.className = "card-actions";
  const checklistBtn = document.createElement("button");
  checklistBtn.type = "button";
  checklistBtn.className = "primary-btn";
  checklistBtn.textContent = t("checklistDone");
  checklistBtn.addEventListener("click", () => openReadinessChecklist(scheme.id));
  actionRow.appendChild(checklistBtn);

  const portalBtn = document.createElement("button");
  portalBtn.type = "button";
  portalBtn.className = "ghost-btn";
  portalBtn.textContent = t("openPortal");
  portalBtn.addEventListener("click", () => window.open(scheme.officialUrl, "_blank", "noopener,noreferrer"));
  actionRow.appendChild(portalBtn);

  card.appendChild(actionRow);
  createMessageRow("assistant", card);

  if (options.openChecklist) {
    openReadinessChecklist(scheme.id);
  }
}

function openReadinessChecklist(schemeId) {
  const scheme = schemes.find((item) => item.id === schemeId);
  if (!scheme) {
    return;
  }

  state.selectedSchemeId = schemeId;
  state.readiness = { aadhaar: null, incomeCert: null, bankAccount: null };

  const card = document.createElement("div");
  card.className = "detail-card";

  const heading = document.createElement("p");
  heading.textContent = `${t("readinessTitle")} - ${scheme.name[state.language]}`;
  card.appendChild(heading);

  const helper = document.createElement("p");
  helper.className = "helper-line";
  helper.textContent = t("readinessHelp");
  card.appendChild(helper);

  const checklistGrid = document.createElement("div");
  checklistGrid.className = "checklist-grid";

  [
    { key: "aadhaar", label: t("aadhaar") },
    { key: "incomeCert", label: t("incomeCert") },
    { key: "bankAccount", label: t("bankAccount") },
  ].forEach((item) => {
    checklistGrid.appendChild(buildChecklistItem(item.key, item.label));
  });

  card.appendChild(checklistGrid);

  const validateBtn = document.createElement("button");
  validateBtn.type = "button";
  validateBtn.className = "primary-btn";
  validateBtn.style.marginTop = "16px";
  validateBtn.textContent = t("checklistDone");
  validateBtn.addEventListener("click", () => validateReadiness(scheme));
  card.appendChild(validateBtn);

  createMessageRow("assistant", card);
}

function buildChecklistItem(key, label) {
  const item = document.createElement("div");
  item.className = "check-item";

  const text = document.createElement("span");
  text.textContent = label;
  item.appendChild(text);

  const toggleGroup = document.createElement("div");
  toggleGroup.className = "toggle-group";

  [
    { label: t("yes"), value: true },
    { label: t("no"), value: false },
  ].forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "toggle-btn";
    button.textContent = choice.label;
    button.addEventListener("click", () => {
      state.readiness[key] = choice.value;
      Array.from(toggleGroup.children).forEach((child) => child.classList.remove("is-on"));
      button.classList.add("is-on");
    });
    toggleGroup.appendChild(button);
  });

  item.appendChild(toggleGroup);
  return item;
}

function validateReadiness(scheme) {
  const missing = Object.entries(state.readiness)
    .filter(([, value]) => value === false || value === null)
    .map(([key]) => key);

  const wrapper = document.createElement("div");
  const message = document.createElement("p");

  if (missing.length === 0) {
    message.textContent = t("readyToApply");
    wrapper.appendChild(message);

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const applyBtn = document.createElement("button");
    applyBtn.type = "button";
    applyBtn.className = "primary-btn";
    applyBtn.textContent = t("apply");
    applyBtn.addEventListener("click", () => {
      window.open(scheme.officialUrl, "_blank", "noopener,noreferrer");
      activateAssistMode(scheme);
    });
    actions.appendChild(applyBtn);

    const guideBtn = document.createElement("button");
    guideBtn.type = "button";
    guideBtn.className = "ghost-btn";
    guideBtn.textContent = t("startGuidance");
    guideBtn.addEventListener("click", () => activateAssistMode(scheme));
    actions.appendChild(guideBtn);
    wrapper.appendChild(actions);
  } else {
    message.textContent = t("missingDocs");
    wrapper.appendChild(message);

    const list = document.createElement("ul");
    list.className = "status-list";
    missing.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = checklistLabel(item);
      list.appendChild(li);
    });
    wrapper.appendChild(list);
  }

  createMessageRow("assistant", wrapper);
}

function checklistLabel(key) {
  if (key === "aadhaar") {
    return t("aadhaar");
  }
  if (key === "incomeCert") {
    return t("incomeCert");
  }
  return t("bankAccount");
}

function activateAssistMode(scheme) {
  state.guidanceIndex = 0;
  addAssistantMessage(t("assistActivated"));
  showNextGuidanceStep(scheme);
}

function showNextGuidanceStep(scheme) {
  const steps = [t("step1"), t("step2"), t("step3"), t("step4")];
  if (state.guidanceIndex >= steps.length) {
    addAssistantMessage([t("completionPrompt"), t("trackingInfo")], [
      { label: t("exploreMore"), value: "__view_more__" },
      { label: t("restart"), value: "__restart__" },
    ]);
    return;
  }

  const wrapper = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = `${t("nextStep")} ${state.guidanceIndex + 1}: ${steps[state.guidanceIndex]}`;
  wrapper.appendChild(p);

  const actionRow = document.createElement("div");
  actionRow.className = "card-actions";
  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "primary-btn";
  nextBtn.textContent = t("nextStep");
  nextBtn.addEventListener("click", () => {
    state.guidanceIndex += 1;
    showNextGuidanceStep(scheme);
  });
  actionRow.appendChild(nextBtn);

  const portalBtn = document.createElement("button");
  portalBtn.type = "button";
  portalBtn.className = "ghost-btn";
  portalBtn.textContent = t("openPortal");
  portalBtn.addEventListener("click", () => window.open(scheme.officialUrl, "_blank", "noopener,noreferrer"));
  actionRow.appendChild(portalBtn);

  wrapper.appendChild(actionRow);
  createMessageRow("assistant", wrapper);
}

function handleFreeformChat(message) {
  if (message === "__view_more__") {
    showMoreSchemes();
    return;
  }

  if (message === "__restart__") {
    restartApp();
    return;
  }

  const lower = message.toLowerCase();
  if (lower.includes("more") || lower.includes("और")) {
    showMoreSchemes();
    return;
  }

  if (lower.includes("restart") || lower.includes("start over") || lower.includes("फिर")) {
    restartApp();
    return;
  }

  const scheme = state.matchedSchemes.find((item) => item.name.en.toLowerCase().includes(lower) || item.name.hi.includes(message));
  if (scheme) {
    showSchemeDetails(scheme.id);
    return;
  }

  addAssistantMessage(t("fallbackQuestion"));
}

function renderQuickActions() {
  elements.quickActions.innerHTML = "";

  let actions = [];

  if (state.conversationStep >= stepOrder.length) {
    actions = [
      { label: t("quickShowMore"), value: "__view_more__" },
      { label: t("quickBestFit"), value: state.matchedSchemes[0]?.name[state.language] || "" },
      { label: t("quickRestart"), value: "__restart__" },
    ].filter((item) => item.value);
  } else {
    const stepKey = stepOrder[state.conversationStep];

    if (stepKey === "state") {
      actions = indiaStates.slice(0, 5).map((item) => ({ label: item, value: item }));
    }

    if (stepKey === "age") {
      actions = ["18", "25", "40", "60"].map((item) => ({ label: item, value: item }));
    }

    if (stepKey === "income") {
      actions = ["150000", "300000", "600000"].map((item) => ({
        label: Number(item).toLocaleString("en-IN"),
        value: item,
      }));
    }
  }

  actions.forEach((action) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quick-action";
    button.textContent = action.label;
    button.addEventListener("click", () => handleSubmittedAnswer(action.value));
    elements.quickActions.appendChild(button);
  });
}

function updateInputMode(stepKey) {
  if (stepKey === "age" || stepKey === "income") {
    elements.chatInput.setAttribute("inputmode", "numeric");
    return;
  }

  elements.chatInput.removeAttribute("inputmode");
}

function restartApp() {
  state.conversationStep = 0;
  state.profile = { state: "", age: null, income: null, category: "", occupation: "" };
  state.collected = [];
  state.matchedSchemes = [];
  state.resultsShown = 3;
  state.selectedSchemeId = null;
  state.readiness = { aadhaar: null, incomeCert: null, bankAccount: null };
  state.guidanceIndex = 0;

  elements.chatContainer.innerHTML = "";
  renderProfilePreview();
  updateEngineStatus([t("engineIdle")]);
  addAssistantMessage([t("greeting"), t("restartHelp")]);
  askCurrentQuestion();
  renderQuickActions();
}

function bindEvents() {
  elements.chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = elements.chatInput.value;

     if (speechState.isListening && speechState.recognition) {
      speechState.shouldAutoSubmit = false;
      speechState.recognition.stop();
    }

    elements.chatInput.value = "";
    handleSubmittedAnswer(value);
  });

  elements.restartBtn.addEventListener("click", restartApp);
  elements.voiceBtn.addEventListener("click", toggleVoiceInput);

  elements.languageBtns.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.language);
    });
  });
}

function init() {
  bindEvents();
  initSpeechRecognition();
  setLanguage("en");
  renderProfilePreview();
  updateEngineStatus([t("engineIdle")]);
  addAssistantMessage([t("greeting"), t("introHint")]);
  askCurrentQuestion();
  renderQuickActions();
}

init();
