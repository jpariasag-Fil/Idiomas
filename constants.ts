import { UnitDefinition, UnitLevel, UnitContent } from './types';

// Pre-generated Content for Unit 1
const UNIT_1_CONTENT: UnitContent = {
  title: "Salutations et Présentations",
  subtitle: "Greetings and Introductions",
  level: UnitLevel.A1,
  introduction: "Bienvenue ! In this first unit, you will learn the absolute essentials of starting a conversation in French. We will cover how to greet people formally and informally, how to introduce yourself, and the most important verb in the French language: être (to be).",
  culturalNote: "In France, the 'bise' (kiss on the cheek) is a common way to greet friends and family. The number of kisses varies by region (usually 2, sometimes 3 or 4!), but in a professional setting, a firm handshake ('une poignée de main') is the standard.",
  vocabulary: [
    { french: "Bonjour", english: "Hello / Good morning", pronunciation: "/bɔ̃.ʒuʁ/", example: "Bonjour, Monsieur." },
    { french: "Salut", english: "Hi / Bye (Informal)", pronunciation: "/sa.ly/", example: "Salut Paul, ça va ?" },
    { french: "Au revoir", english: "Goodbye", pronunciation: "/o ʁə.vwaʁ/", example: "Au revoir et à bientôt." },
    { french: "Je m'appelle", english: "My name is", pronunciation: "/ʒə ma.pɛl/", example: "Je m'appelle Sophie." },
    { french: "Comment allez-vous ?", english: "How are you? (Formal)", pronunciation: "/kɔ.mɑ̃ ta.le vu/", example: "Bonjour Madame, comment allez-vous ?" },
    { french: "Ça va ?", english: "How are you? / It's going okay", pronunciation: "/sa va/", example: "Salut, ça va ?" },
    { french: "Enchanté(e)", english: "Nice to meet you", pronunciation: "/ɑ̃.ʃɑ̃.te/", example: "Enchanté, je suis Pierre." },
    { french: "S'il vous plaît", english: "Please (Formal)", pronunciation: "/sil vu plɛ/", example: "Un café, s'il vous plaît." },
    { french: "Merci", english: "Thank you", pronunciation: "/mɛʁ.si/", example: "Merci beaucoup !" },
    { french: "Français(e)", english: "French", pronunciation: "/fʁɑ̃.sɛ/", example: "Je suis français." }
  ],
  grammar: [
    {
      title: "The Verb 'Être' (To Be)",
      explanation: "The verb 'être' is an irregular verb and is essential for describing yourself and others. Here is the present tense conjugation:",
      examples: [
        { french: "Je suis", english: "I am" },
        { french: "Tu es", english: "You are (informal)" },
        { french: "Il/Elle est", english: "He/She is" },
        { french: "Nous sommes", english: "We are" },
        { french: "Vous êtes", english: "You are (formal/plural)" },
        { french: "Ils/Elles sont", english: "They are" }
      ]
    },
    {
      title: "Subject Pronouns",
      explanation: "French distinguishes between 'Tu' (informal, for friends/family) and 'Vous' (formal, or plural).",
      examples: [
        { french: "Tu es mon ami.", english: "You are my friend." },
        { french: "Vous êtes professeur ?", english: "Are you a professor? (Formal)" }
      ]
    }
  ],
  dialogue: [
    { speaker: "Marie", text: "Bonjour ! Je m'appelle Marie.", translation: "Hello! My name is Marie." },
    { speaker: "Thomas", text: "Bonjour Marie. Je suis Thomas. Enchanté.", translation: "Hello Marie. I am Thomas. Nice to meet you." },
    { speaker: "Marie", text: "Enchantée. Tu es français ?", translation: "Nice to meet you. Are you French?" },
    { speaker: "Thomas", text: "Oui, je suis de Paris. Et toi ?", translation: "Yes, I am from Paris. And you?" },
    { speaker: "Marie", text: "Non, je suis canadienne. Je suis à Paris pour les vacances.", translation: "No, I am Canadian. I am in Paris for vacation." },
    { speaker: "Thomas", text: "C'est super ! Bienvenue à Paris.", translation: "That's great! Welcome to Paris." }
  ],
  exercises: [
    {
      instruction: "Fill in the blanks with the correct form of 'être'.",
      type: "fill-in-blank",
      questions: [
        { question: "Je ___ étudiant.", answer: "suis" },
        { question: "Tu ___ très gentil.", answer: "es" },
        { question: "Nous ___ à la maison.", answer: "sommes" }
      ]
    },
    {
      instruction: "Choose the correct greeting for the situation.",
      type: "multiple-choice",
      questions: [
        { question: "You meet your boss in the morning.", options: ["Salut !", "Bonjour Monsieur.", "Ça roule ?"], answer: "Bonjour Monsieur." },
        { question: "You say goodbye to a friend.", options: ["Enchanté.", "Bonjour.", "Salut !"], answer: "Salut !" }
      ]
    },
    {
      instruction: "Translate the following sentences to French.",
      type: "translation",
      questions: [
        { question: "I am American.", answer: "Je suis américain." },
        { question: "How are you? (Formal)", answer: "Comment allez-vous ?" }
      ]
    }
  ]
};

// Pre-generated Content for Unit 2
const UNIT_2_CONTENT: UnitContent = {
  title: "Ma Famille et Moi",
  subtitle: "My Family and I",
  level: UnitLevel.A1,
  introduction: "In this unit, we will learn how to talk about the people closest to us. You will learn vocabulary for family members and how to express possession using 'mon, ma, mes'. We will also introduce the verb 'avoir' (to have), which is used to tell age and describe relationships.",
  culturalNote: "French families often gather for a long Sunday lunch ('le déjeuner du dimanche') which can last for several hours! It's a sacred time for food and conversation.",
  vocabulary: [
    { french: "La famille", english: "The family", pronunciation: "/fa.mij/", example: "J'aime ma famille." },
    { french: "Le père / Papa", english: "Father / Dad", pronunciation: "/pɛʁ/", example: "Mon père est grand." },
    { french: "La mère / Maman", english: "Mother / Mom", pronunciation: "/mɛʁ/", example: "Ma mère s'appelle Anne." },
    { french: "Le frère", english: "Brother", pronunciation: "/fʁɛʁ/", example: "J'ai un frère." },
    { french: "La sœur", english: "Sister", pronunciation: "/sœʁ/", example: "Ma sœur a 20 ans." },
    { french: "Le grand-père", english: "Grandfather", pronunciation: "/ɡʁɑ̃.pɛʁ/", example: "Mon grand-père est gentil." },
    { french: "Le chat", english: "Cat", pronunciation: "/ʃa/", example: "Le chat est noir." },
    { french: "Le chien", english: "Dog", pronunciation: "/ʃjɛ̃/", example: "J'ai un petit chien." },
    { french: "Avoir", english: "To have", pronunciation: "/a.vwaʁ/", example: "J'ai deux sœurs." },
    { french: "L'ami(e)", english: "Friend", pronunciation: "/a.mi/", example: "C'est mon ami." }
  ],
  grammar: [
    {
      title: "The Verb 'Avoir' (To Have)",
      explanation: "Used for possession and also to say your age (J'ai 20 ans).",
      examples: [
        { french: "J'ai", english: "I have" },
        { french: "Tu as", english: "You have" },
        { french: "Il/Elle a", english: "He/She has" },
        { french: "Nous avons", english: "We have" },
        { french: "Vous avez", english: "You have" },
        { french: "Ils/Elles ont", english: "They have" }
      ]
    },
    {
      title: "Possessive Adjectives",
      explanation: "In French, 'my' changes based on the gender and number of the object, not the owner.",
      examples: [
        { french: "Mon père", english: "My father (Masculine)" },
        { french: "Ma mère", english: "My mother (Feminine)" },
        { french: "Mes parents", english: "My parents (Plural)" }
      ]
    }
  ],
  dialogue: [
    { speaker: "Léa", text: "C'est qui sur la photo ?", translation: "Who is that in the photo?" },
    { speaker: "Paul", text: "C'est ma mère et mon père.", translation: "That's my mother and my father." },
    { speaker: "Léa", text: "Et le garçon, c'est ton frère ?", translation: "And the boy, is that your brother?" },
    { speaker: "Paul", text: "Oui, il s'appelle Léo. Il a 10 ans.", translation: "Yes, his name is Léo. He is 10 years old." },
    { speaker: "Léa", text: "Tu as des animaux ?", translation: "Do you have any pets?" },
    { speaker: "Paul", text: "Oui, j'ai un chien. Il s'appelle Rex.", translation: "Yes, I have a dog. His name is Rex." }
  ],
  exercises: [
    {
      instruction: "Choose the correct possessive adjective (mon, ma, mes).",
      type: "multiple-choice",
      questions: [
        { question: "___ sœur est intelligente.", options: ["Mon", "Ma", "Mes"], answer: "Ma" },
        { question: "___ frère est sportif.", options: ["Mon", "Ma", "Mes"], answer: "Mon" },
        { question: "___ parents sont en France.", options: ["Mon", "Ma", "Mes"], answer: "Mes" }
      ]
    },
    {
      instruction: "Conjugate the verb 'avoir'.",
      type: "fill-in-blank",
      questions: [
        { question: "J'___ un chat.", answer: "ai" },
        { question: "Nous ___ une grande maison.", answer: "avons" },
        { question: "Elles ___ des amis.", answer: "ont" }
      ]
    },
    {
      instruction: "Translate to French.",
      type: "translation",
      questions: [
        { question: "I have a sister.", answer: "J'ai une sœur." },
        { question: "My mother is French.", answer: "Ma mère est française." }
      ]
    }
  ]
};

// Pre-generated Content for Unit 3
const UNIT_3_CONTENT: UnitContent = {
  title: "Au Café",
  subtitle: "At the Café",
  level: UnitLevel.A1,
  introduction: "Bienvenue au café ! In this unit, you'll learn how to order food and drinks in French. We'll explore polite expressions using 'je voudrais' (I would like) and learn about indefinite articles. By the end, you'll be able to confidently order at any French café!",
  culturalNote: "In French cafés, it's common to linger for hours over a single coffee. The waiter won't rush you or bring the check unless you ask ('l'addition, s'il vous plaît'). Tipping is not obligatory as service is included, but leaving small change is appreciated.",
  vocabulary: [
    { french: "Le café", english: "Coffee / Café", pronunciation: "/ka.fe/", example: "Je voudrais un café, s'il vous plaît." },
    { french: "Le thé", english: "Tea", pronunciation: "/te/", example: "Un thé au lait, s'il vous plaît." },
    { french: "L'eau", english: "Water", pronunciation: "/o/", example: "Une carafe d'eau, s'il vous plaît." },
    { french: "Le croissant", english: "Croissant", pronunciation: "/kʁwa.sɑ̃/", example: "Deux croissants, s'il vous plaît." },
    { french: "Le pain", english: "Bread", pronunciation: "/pɛ̃/", example: "Du pain avec du beurre." },
    { french: "Le jus d'orange", english: "Orange juice", pronunciation: "/ʒy dɔ.ʁɑ̃ʒ/", example: "Un jus d'orange frais." },
    { french: "La baguette", english: "Baguette", pronunciation: "/ba.ɡɛt/", example: "Une baguette fraîche." },
    { french: "Je voudrais", english: "I would like", pronunciation: "/ʒə vu.dʁɛ/", example: "Je voudrais un café crème." },
    { french: "L'addition", english: "The check/bill", pronunciation: "/a.di.sjɔ̃/", example: "L'addition, s'il vous plaît." },
    { french: "Combien ça coûte?", english: "How much does it cost?", pronunciation: "/kɔ̃.bjɛ̃ sa kut/", example: "Combien ça coûte, s'il vous plaît?" }
  ],
  grammar: [
    {
      title: "Indefinite Articles (un/une/des)",
      explanation: "In French, 'a' or 'an' changes based on gender. 'Un' is masculine, 'une' is feminine, and 'des' is plural (some).",
      examples: [
        { french: "Un café", english: "A coffee (masculine)" },
        { french: "Une baguette", english: "A baguette (feminine)" },
        { french: "Des croissants", english: "Some croissants (plural)" },
        { french: "Un thé et une eau", english: "A tea and a water" }
      ]
    },
    {
      title: "Polite Requests with 'Je voudrais'",
      explanation: "'Je voudrais' (I would like) is more polite than 'Je veux' (I want). Always use it when ordering!",
      examples: [
        { french: "Je voudrais un café, s'il vous plaît.", english: "I would like a coffee, please." },
        { french: "Je voudrais deux croissants.", english: "I would like two croissants." },
        { french: "Vous voudriez quelque chose?", english: "Would you like something?" }
      ]
    }
  ],
  dialogue: [
    { speaker: "Serveur", text: "Bonjour ! Vous désirez?", translation: "Hello! What would you like?" },
    { speaker: "Client", text: "Bonjour. Je voudrais un café crème, s'il vous plaît.", translation: "Hello. I would like a coffee with cream, please." },
    { speaker: "Serveur", text: "Bien sûr. Et avec ça?", translation: "Of course. And with that?" },
    { speaker: "Client", text: "Un croissant au beurre.", translation: "A butter croissant." },
    { speaker: "Serveur", text: "Parfait. C'est tout?", translation: "Perfect. Is that all?" },
    { speaker: "Client", text: "Oui, merci. Ah, et l'addition, s'il vous plaît.", translation: "Yes, thank you. Oh, and the check, please." },
    { speaker: "Serveur", text: "Tout de suite. Ça fait 6 euros 50.", translation: "Right away. That's 6 euros 50." }
  ],
  exercises: [
    {
      instruction: "Choose the correct indefinite article (un, une, des).",
      type: "multiple-choice",
      questions: [
        { question: "___ café", options: ["Un", "Une", "Des"], answer: "Un" },
        { question: "___ baguette", options: ["Un", "Une", "Des"], answer: "Une" },
        { question: "___ croissants", options: ["Un", "Une", "Des"], answer: "Des" }
      ]
    },
    {
      instruction: "Fill in the blanks to complete the café order.",
      type: "fill-in-blank",
      questions: [
        { question: "Je ___ un thé, s'il vous plaît.", answer: "voudrais" },
        { question: "___, s'il vous plaît. (the check)", answer: "L'addition" },
        { question: "Combien ça ___?", answer: "coûte" }
      ]
    },
    {
      instruction: "Translate to French.",
      type: "translation",
      questions: [
        { question: "I would like a coffee.", answer: "Je voudrais un café." },
        { question: "Two croissants, please.", answer: "Deux croissants, s'il vous plaît." },
        { question: "How much does it cost?", answer: "Combien ça coûte?" }
      ]
    }
  ]
};

// Pre-generated Content for Unit 4
const UNIT_4_CONTENT: UnitContent = {
  title: "Les Loisirs et les Goûts",
  subtitle: "Hobbies and Preferences",
  level: UnitLevel.A1,
  introduction: "What do you love to do? In this unit, we'll learn how to talk about hobbies and express what we like or dislike. You'll master verbs like 'aimer' (to like/love), 'adorer' (to adore), and 'détester' (to hate), and learn about definite articles in French.",
  culturalNote: "The French are passionate about 'les loisirs' (leisure activities). Popular hobbies include cycling, pétanque (a bowling game), cinema, and enjoying long meals with friends. Work-life balance is highly valued in French culture.",
  vocabulary: [
    { french: "Aimer", english: "To like/love", pronunciation: "/ɛ.me/", example: "J'aime le chocolat." },
    { french: "Adorer", english: "To adore/love", pronunciation: "/a.dɔ.ʁe/", example: "J'adore la musique." },
    { french: "Détester", english: "To hate", pronunciation: "/de.tɛs.te/", example: "Je déteste le sport." },
    { french: "Le sport", english: "Sport", pronunciation: "/spɔʁ/", example: "J'aime le sport." },
    { french: "La musique", english: "Music", pronunciation: "/my.zik/", example: "J'adore la musique classique." },
    { french: "Le cinéma", english: "Cinema/movies", pronunciation: "/si.ne.ma/", example: "Je vais au cinéma." },
    { french: "La lecture", english: "Reading", pronunciation: "/lɛk.tyʁ/", example: "J'aime la lecture." },
    { french: "Danser", english: "To dance", pronunciation: "/dɑ̃.se/", example: "J'adore danser." },
    { french: "Voyager", english: "To travel", pronunciation: "/vwa.ja.ʒe/", example: "J'aime voyager." },
    { french: "Préférer", english: "To prefer", pronunciation: "/pʁe.fe.ʁe/", example: "Je préfère le thé." }
  ],
  grammar: [
    {
      title: "Definite Articles (le/la/les)",
      explanation: "Use 'le' for masculine nouns, 'la' for feminine nouns, and 'les' for plural. They mean 'the' and are used when talking about things in general.",
      examples: [
        { french: "J'aime le chocolat.", english: "I like chocolate. (in general)" },
        { french: "J'adore la musique.", english: "I love music." },
        { french: "Je déteste les araignées.", english: "I hate spiders." },
        { french: "Le sport est important.", english: "Sport is important." }
      ]
    },
    {
      title: "Regular -ER Verbs (aimer, adorer, détester)",
      explanation: "Most French verbs end in -ER. They follow a regular pattern in the present tense.",
      examples: [
        { french: "J'aime", english: "I like" },
        { french: "Tu aimes", english: "You like" },
        { french: "Il/Elle aime", english: "He/She likes" },
        { french: "Nous aimons", english: "We like" },
        { french: "Vous aimez", english: "You like (formal/plural)" },
        { french: "Ils/Elles aiment", english: "They like" }
      ]
    }
  ],
  dialogue: [
    { speaker: "Julie", text: "Salut Marc ! Qu'est-ce que tu aimes faire le week-end?", translation: "Hi Marc! What do you like to do on weekends?" },
    { speaker: "Marc", text: "J'adore le sport ! Je joue au football et je fais du vélo.", translation: "I love sports! I play soccer and I bike." },
    { speaker: "Julie", text: "Ah bon ? Moi, je déteste le sport ! Je préfère la lecture.", translation: "Really? Me, I hate sports! I prefer reading." },
    { speaker: "Marc", text: "Tu aimes le cinéma ?", translation: "Do you like movies?" },
    { speaker: "Julie", text: "Oui, j'adore le cinéma ! Surtout les films français.", translation: "Yes, I love cinema! Especially French films." },
    { speaker: "Marc", text: "Super ! On va au cinéma ce soir ?", translation: "Great! Shall we go to the movies tonight?" }
  ],
  exercises: [
    {
      instruction: "Choose the correct definite article (le, la, les).",
      type: "multiple-choice",
      questions: [
        { question: "J'aime ___ musique.", options: ["le", "la", "les"], answer: "la" },
        { question: "Je déteste ___ sport.", options: ["le", "la", "les"], answer: "le" },
        { question: "J'adore ___ films français.", options: ["le", "la", "les"], answer: "les" }
      ]
    },
    {
      instruction: "Conjugate the verb 'aimer' in the present tense.",
      type: "fill-in-blank",
      questions: [
        { question: "J'___ le chocolat.", answer: "aime" },
        { question: "Tu ___ la musique?", answer: "aimes" },
        { question: "Nous ___ voyager.", answer: "aimons" }
      ]
    },
    {
      instruction: "Translate to French.",
      type: "translation",
      questions: [
        { question: "I love music.", answer: "J'adore la musique." },
        { question: "I hate sports.", answer: "Je déteste le sport." },
        { question: "Do you like cinema?", answer: "Tu aimes le cinéma?" }
      ]
    }
  ]
};

// Pre-generated Content for Unit 5
const UNIT_5_CONTENT: UnitContent = {
  title: "La Ville et les Directions",
  subtitle: "The City and Directions",
  level: UnitLevel.A1,
  introduction: "Lost in Paris? Not anymore! In this unit, you'll learn how to ask for and give directions, talk about places in the city, and use important prepositions like 'à' (at/to), 'chez' (at someone's place), and 'en' (in/by).",
  culturalNote: "French cities are often designed around a central square or 'place' with a church, town hall, and cafés. Unlike many cities, French addresses include the arrondissement (district) - essential for navigation in Paris!",
  vocabulary: [
    { french: "La ville", english: "The city", pronunciation: "/vil/", example: "J'habite en ville." },
    { french: "La rue", english: "The street", pronunciation: "/ʁy/", example: "La rue principale." },
    { french: "L'église", english: "The church", pronunciation: "/e.ɡliz/", example: "L'église est grande." },
    { french: "La banque", english: "The bank", pronunciation: "/bɑ̃k/", example: "Je vais à la banque." },
    { french: "Le supermarché", english: "The supermarket", pronunciation: "/sy.pɛʁ.maʁ.ʃe/", example: "Le supermarché est ouvert." },
    { french: "Tourner", english: "To turn", pronunciation: "/tuʁ.ne/", example: "Tournez à droite." },
    { french: "À droite", english: "To the right", pronunciation: "/a dʁwat/", example: "Tournez à droite." },
    { french: "À gauche", english: "To the left", pronunciation: "/a ɡoʃ/", example: "Allez à gauche." },
    { french: "Tout droit", english: "Straight ahead", pronunciation: "/tu dʁwa/", example: "Continuez tout droit." },
    { french: "Où est...?", english: "Where is...?", pronunciation: "/u ɛ/", example: "Où est la gare?" }
  ],
  grammar: [
    {
      title: "Prepositions: à, chez, en",
      explanation: "'À' means 'at/to' with places, 'chez' means 'at someone's place', and 'en' means 'in/by' for countries and transportation.",
      examples: [
        { french: "Je vais à la banque.", english: "I'm going to the bank." },
        { french: "Je suis chez Marie.", english: "I'm at Marie's place." },
        { french: "J'habite en France.", english: "I live in France." },
        { french: "Je voyage en train.", english: "I travel by train." }
      ]
    },
    {
      title: "Contractions with 'à'",
      explanation: "'À' combines with 'le' to become 'au', and with 'les' to become 'aux'. It doesn't contract with 'la' or 'l''.",
      examples: [
        { french: "Je vais au cinéma.", english: "I'm going to the cinema. (à + le)" },
        { french: "Il va à la banque.", english: "He's going to the bank." },
        { french: "Nous allons aux magasins.", english: "We're going to the stores. (à + les)" },
        { french: "Elle va à l'église.", english: "She's going to the church." }
      ]
    }
  ],
  dialogue: [
    { speaker: "Touriste", text: "Excusez-moi, où est la gare, s'il vous plaît?", translation: "Excuse me, where is the train station, please?" },
    { speaker: "Passant", text: "C'est facile ! Vous allez tout droit.", translation: "It's easy! You go straight ahead." },
    { speaker: "Touriste", text: "Tout droit?", translation: "Straight ahead?" },
    { speaker: "Passant", text: "Oui, puis vous tournez à droite après l'église.", translation: "Yes, then you turn right after the church." },
    { speaker: "Touriste", text: "À droite après l'église. D'accord.", translation: "Right after the church. Okay." },
    { speaker: "Passant", text: "Exactement. La gare est en face du supermarché.", translation: "Exactly. The station is across from the supermarket." },
    { speaker: "Touriste", text: "Merci beaucoup !", translation: "Thank you very much!" }
  ],
  exercises: [
    {
      instruction: "Choose the correct preposition (à, chez, en).",
      type: "multiple-choice",
      questions: [
        { question: "Je vais ___ la banque.", options: ["à", "chez", "en"], answer: "à" },
        { question: "Je suis ___ Paul.", options: ["à", "chez", "en"], answer: "chez" },
        { question: "J'habite ___ France.", options: ["à", "chez", "en"], answer: "en" }
      ]
    },
    {
      instruction: "Fill in the blanks with the correct contraction (au, à la, aux, à l').",
      type: "fill-in-blank",
      questions: [
        { question: "Je vais ___ cinéma.", answer: "au" },
        { question: "Elle va ___ banque.", answer: "à la" },
        { question: "Nous allons ___ magasins.", answer: "aux" }
      ]
    },
    {
      instruction: "Translate to French.",
      type: "translation",
      questions: [
        { question: "Where is the church?", answer: "Où est l'église?" },
        { question: "Turn right.", answer: "Tournez à droite." },
        { question: "I'm going to the bank.", answer: "Je vais à la banque." }
      ]
    }
  ]
};

// Pre-generated Content for Unit 6
const UNIT_6_CONTENT: UnitContent = {
  title: "Le Temps et la Météo",
  subtitle: "Weather and Time",
  level: UnitLevel.A1,
  introduction: "What's the weather like today? In this unit, you'll learn how to talk about the weather, the days of the week, and numbers from 1 to 100. These are essential tools for planning your day and making conversation in French!",
  culturalNote: "The French love to discuss the weather! It's a safe conversation starter. Also, note that the French week starts on Monday (lundi) in calendars, not Sunday like in some countries.",
  vocabulary: [
    { french: "Il fait beau", english: "It's nice weather", pronunciation: "/il fɛ bo/", example: "Il fait beau aujourd'hui." },
    { french: "Il fait chaud", english: "It's hot", pronunciation: "/il fɛ ʃo/", example: "Il fait chaud en été." },
    { french: "Il fait froid", english: "It's cold", pronunciation: "/il fɛ fʁwa/", example: "Il fait froid en hiver." },
    { french: "Il pleut", english: "It's raining", pronunciation: "/il plø/", example: "Il pleut beaucoup." },
    { french: "Il neige", english: "It's snowing", pronunciation: "/il nɛʒ/", example: "Il neige en montagne." },
    { french: "Le soleil", english: "The sun", pronunciation: "/sɔ.lɛj/", example: "Le soleil brille." },
    { french: "La pluie", english: "The rain", pronunciation: "/plɥi/", example: "J'aime la pluie." },
    { french: "Aujourd'hui", english: "Today", pronunciation: "/o.ʒuʁ.dɥi/", example: "Aujourd'hui, il fait beau." },
    { french: "Demain", english: "Tomorrow", pronunciation: "/də.mɛ̃/", example: "Demain, il va pleuvoir." },
    { french: "Hier", english: "Yesterday", pronunciation: "/jɛʁ/", example: "Hier, il a neigé." }
  ],
  grammar: [
    {
      title: "Days of the Week",
      explanation: "In French, days of the week are masculine and are not capitalized unless at the beginning of a sentence.",
      examples: [
        { french: "lundi", english: "Monday" },
        { french: "mardi", english: "Tuesday" },
        { french: "mercredi", english: "Wednesday" },
        { french: "jeudi", english: "Thursday" },
        { french: "vendredi", english: "Friday" },
        { french: "samedi", english: "Saturday" },
        { french: "dimanche", english: "Sunday" }
      ]
    },
    {
      title: "Numbers 1-100",
      explanation: "French numbers follow patterns. Note that 70 is 'sixty-ten' (soixante-dix) and 90 is 'four-twenties-ten' (quatre-vingt-dix).",
      examples: [
        { french: "1-10: un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix", english: "1-10" },
        { french: "20: vingt, 30: trente, 40: quarante, 50: cinquante", english: "20, 30, 40, 50" },
        { french: "60: soixante, 70: soixante-dix, 80: quatre-vingts, 90: quatre-vingt-dix", english: "60, 70, 80, 90" },
        { french: "100: cent", english: "100" }
      ]
    }
  ],
  dialogue: [
    { speaker: "Amélie", text: "Quel temps fait-il aujourd'hui?", translation: "What's the weather like today?" },
    { speaker: "Nicolas", text: "Il fait froid et il pleut.", translation: "It's cold and it's raining." },
    { speaker: "Amélie", text: "Oh non ! Et demain?", translation: "Oh no! And tomorrow?" },
    { speaker: "Nicolas", text: "Demain, il va faire beau. Il y aura du soleil.", translation: "Tomorrow, it will be nice. There will be sun." },
    { speaker: "Amélie", text: "Super ! On va au parc samedi?", translation: "Great! Shall we go to the park on Saturday?" },
    { speaker: "Nicolas", text: "Oui, bonne idée ! Samedi, il fera vingt-cinq degrés.", translation: "Yes, good idea! Saturday, it will be 25 degrees." }
  ],
  exercises: [
    {
      instruction: "Match the weather expression to its meaning.",
      type: "multiple-choice",
      questions: [
        { question: "Il fait chaud", options: ["It's cold", "It's hot", "It's raining"], answer: "It's hot" },
        { question: "Il neige", options: ["It's snowing", "It's sunny", "It's windy"], answer: "It's snowing" },
        { question: "Il pleut", options: ["It's raining", "It's cold", "It's hot"], answer: "It's raining" }
      ]
    },
    {
      instruction: "Fill in the correct day of the week.",
      type: "fill-in-blank",
      questions: [
        { question: "Lundi, mardi, ___", answer: "mercredi" },
        { question: "Vendredi, ___, dimanche", answer: "samedi" },
        { question: "___, mardi (the first day)", answer: "lundi" }
      ]
    },
    {
      instruction: "Translate to French.",
      type: "translation",
      questions: [
        { question: "It's cold today.", answer: "Il fait froid aujourd'hui." },
        { question: "Tomorrow it will be nice.", answer: "Demain il fera beau." },
        { question: "It's raining.", answer: "Il pleut." }
      ]
    }
  ]
};

// Pre-generated Content for Unit 7
const UNIT_7_CONTENT: UnitContent = {
  title: "Ma Journée Quotidienne",
  subtitle: "My Daily Routine",
  level: UnitLevel.A1,
  introduction: "From waking up to going to bed, learn how to describe your daily routine in French! This unit introduces reflexive verbs like 'se lever' (to get up) and 'se coucher' (to go to bed), and teaches you how to tell time.",
  culturalNote: "The French typically have a later dinner schedule than many countries - 'le dîner' often starts at 8 PM or even later! Lunch ('le déjeuner') is traditionally the main meal of the day, though this is changing in modern times.",
  vocabulary: [
    { french: "Se réveiller", english: "To wake up", pronunciation: "/sə ʁe.vɛ.je/", example: "Je me réveille à sept heures." },
    { french: "Se lever", english: "To get up", pronunciation: "/sə lə.ve/", example: "Je me lève à 7h30." },
    { french: "Se laver", english: "To wash (oneself)", pronunciation: "/sə la.ve/", example: "Je me lave le matin." },
    { french: "Se brosser les dents", english: "To brush one's teeth", pronunciation: "/sə bʁɔ.se le dɑ̃/", example: "Je me brosse les dents." },
    { french: "S'habiller", english: "To get dressed", pronunciation: "/sa.bi.je/", example: "Je m'habille rapidement." },
    { french: "Prendre le petit-déjeuner", english: "To have breakfast", pronunciation: "/pʁɑ̃dʁ lə pə.ti de.ʒø.ne/", example: "Je prends le petit-déjeuner à huit heures." },
    { french: "Aller au travail", english: "To go to work", pronunciation: "/a.le o tʁa.vaj/", example: "Je vais au travail en métro." },
    { french: "Rentrer", english: "To return home", pronunciation: "/ʁɑ̃.tʁe/", example: "Je rentre à 18 heures." },
    { french: "Se coucher", english: "To go to bed", pronunciation: "/sə ku.ʃe/", example: "Je me couche à 23 heures." },
    { french: "Quelle heure est-il?", english: "What time is it?", pronunciation: "/kɛl œʁ ɛ til/", example: "Quelle heure est-il? Il est midi." }
  ],
  grammar: [
    {
      title: "Reflexive Verbs",
      explanation: "Reflexive verbs use reflexive pronouns (me, te, se, nous, vous, se) to show the action is done to oneself.",
      examples: [
        { french: "Je me lave", english: "I wash myself" },
        { french: "Tu te lèves", english: "You get up" },
        { french: "Il/Elle se couche", english: "He/She goes to bed" },
        { french: "Nous nous habillons", english: "We get dressed" },
        { french: "Vous vous réveillez", english: "You wake up" },
        { french: "Ils/Elles se brossent", english: "They brush" }
      ]
    },
    {
      title: "Telling Time",
      explanation: "Use 'Il est' + hour. For minutes, add the number after the hour. 'Et quart' = quarter past, 'et demie' = half past, 'moins le quart' = quarter to.",
      examples: [
        { french: "Il est huit heures.", english: "It's 8 o'clock." },
        { french: "Il est neuf heures et quart.", english: "It's 9:15." },
        { french: "Il est dix heures et demie.", english: "It's 10:30." },
        { french: "Il est onze heures moins le quart.", english: "It's 10:45." },
        { french: "Il est midi / minuit.", english: "It's noon / midnight." }
      ]
    }
  ],
  dialogue: [
    { speaker: "Journaliste", text: "Décrivez votre journée typique, s'il vous plaît.", translation: "Describe your typical day, please." },
    { speaker: "Céline", text: "Je me réveille à six heures et demie.", translation: "I wake up at 6:30." },
    { speaker: "Journaliste", text: "Et ensuite?", translation: "And then?" },
    { speaker: "Céline", text: "Je me lève, je me douche et je m'habille.", translation: "I get up, I shower and I get dressed." },
    { speaker: "Journaliste", text: "À quelle heure prenez-vous le petit-déjeuner?", translation: "What time do you have breakfast?" },
    { speaker: "Céline", text: "À sept heures et quart. Puis je vais au travail à huit heures.", translation: "At 7:15. Then I go to work at 8 o'clock." },
    { speaker: "Journaliste", text: "Et le soir?", translation: "And in the evening?" },
    { speaker: "Céline", text: "Je rentre à six heures, je dîne et je me couche vers dix heures.", translation: "I come home at 6, I have dinner and I go to bed around 10." }
  ],
  exercises: [
    {
      instruction: "Choose the correct reflexive pronoun.",
      type: "multiple-choice",
      questions: [
        { question: "Je ___ lève à 7 heures.", options: ["me", "te", "se"], answer: "me" },
        { question: "Tu ___ couches tard?", options: ["me", "te", "se"], answer: "te" },
        { question: "Elle ___ habille vite.", options: ["me", "te", "se"], answer: "se" }
      ]
    },
    {
      instruction: "Write the time in French.",
      type: "fill-in-blank",
      questions: [
        { question: "8:00 - Il est ___ heures.", answer: "huit" },
        { question: "9:15 - Il est neuf heures et ___.", answer: "quart" },
        { question: "10:30 - Il est dix heures et ___.", answer: "demie" }
      ]
    },
    {
      instruction: "Translate to French.",
      type: "translation",
      questions: [
        { question: "I wake up at 7 o'clock.", answer: "Je me réveille à sept heures." },
        { question: "She goes to bed at 11 PM.", answer: "Elle se couche à vingt-trois heures." },
        { question: "What time is it?", answer: "Quelle heure est-il?" }
      ]
    }
  ]
};

// Pre-generated Content for Unit 8
const UNIT_8_CONTENT: UnitContent = {
  title: "Au Marché",
  subtitle: "At the Market",
  level: UnitLevel.A1,
  introduction: "Let's go shopping! In this unit, you'll learn vocabulary for fruits, vegetables, and how to express quantities. We'll also explore partitive articles (du, de la, des) which are essential when shopping for food in France.",
  culturalNote: "French markets ('les marchés') are a beloved tradition. Most towns have a weekly market where locals buy fresh produce, cheese, and meat directly from producers. It's not just shopping - it's a social event!",
  vocabulary: [
    { french: "La pomme", english: "Apple", pronunciation: "/pɔm/", example: "Je voudrais trois pommes." },
    { french: "La banane", english: "Banana", pronunciation: "/ba.nan/", example: "Les bananes sont jaunes." },
    { french: "La tomate", english: "Tomato", pronunciation: "/tɔ.mat/", example: "J'achète des tomates." },
    { french: "La carotte", english: "Carrot", pronunciation: "/ka.ʁɔt/", example: "Les carottes sont orange." },
    { french: "La salade", english: "Lettuce/Salad", pronunciation: "/sa.lad/", example: "Une salade fraîche." },
    { french: "Le fromage", english: "Cheese", pronunciation: "/fʁɔ.maʒ/", example: "J'adore le fromage français." },
    { french: "Le pain", english: "Bread", pronunciation: "/pɛ̃/", example: "Du pain frais." },
    { french: "Beaucoup de", english: "A lot of", pronunciation: "/bo.ku də/", example: "Beaucoup de fruits." },
    { french: "Un peu de", english: "A little bit of", pronunciation: "/œ̃ pø də/", example: "Un peu de fromage." },
    { french: "Un kilo de", english: "A kilo of", pronunciation: "/œ̃ ki.lo də/", example: "Un kilo de pommes." }
  ],
  grammar: [
    {
      title: "Partitive Articles (du/de la/de l'/des)",
      explanation: "Used to express 'some' or an unspecified quantity. 'Du' for masculine, 'de la' for feminine, 'de l'' before a vowel, 'des' for plural.",
      examples: [
        { french: "Je mange du pain.", english: "I eat (some) bread. (masculine)" },
        { french: "Je bois de la limonade.", english: "I drink (some) lemonade. (feminine)" },
        { french: "Je voudrais de l'eau.", english: "I would like (some) water. (vowel)" },
        { french: "J'achète des pommes.", english: "I buy (some) apples. (plural)" }
      ]
    },
    {
      title: "Expressing Quantities",
      explanation: "Use 'de' (not du/de la/des) after quantity expressions like beaucoup, un peu, un kilo, etc.",
      examples: [
        { french: "Beaucoup de fromage", english: "A lot of cheese" },
        { french: "Un peu de pain", english: "A little bread" },
        { french: "Un kilo de tomates", english: "A kilo of tomatoes" },
        { french: "Trop de sucre", english: "Too much sugar" }
      ]
    }
  ],
  dialogue: [
    { speaker: "Vendeur", text: "Bonjour Madame ! Qu'est-ce que je vous sers?", translation: "Hello Ma'am! What can I get you?" },
    { speaker: "Cliente", text: "Bonjour. Je voudrais un kilo de pommes, s'il vous plaît.", translation: "Hello. I would like a kilo of apples, please." },
    { speaker: "Vendeur", text: "Voilà ! Et avec ça?", translation: "Here you go! And with that?" },
    { speaker: "Cliente", text: "Des tomates. Elles sont à combien?", translation: "Some tomatoes. How much are they?" },
    { speaker: "Vendeur", text: "Trois euros le kilo.", translation: "Three euros per kilo." },
    { speaker: "Cliente", text: "Parfait. Je prends deux kilos.", translation: "Perfect. I'll take two kilos." },
    { speaker: "Vendeur", text: "Très bien. Ça fait neuf euros au total.", translation: "Very good. That's nine euros total." }
  ],
  exercises: [
    {
      instruction: "Choose the correct partitive article (du, de la, de l', des).",
      type: "multiple-choice",
      questions: [
        { question: "Je mange ___ pain.", options: ["du", "de la", "des"], answer: "du" },
        { question: "Je bois ___ eau.", options: ["du", "de la", "de l'"], answer: "de l'" },
        { question: "J'achète ___ pommes.", options: ["du", "de la", "des"], answer: "des" }
      ]
    },
    {
      instruction: "Fill in with the correct quantity expression.",
      type: "fill-in-blank",
      questions: [
        { question: "___ de fromage (a lot)", answer: "Beaucoup" },
        { question: "Un ___ de tomates (kilo)", answer: "kilo" },
        { question: "___ de pain (a little)", answer: "Un peu" }
      ]
    },
    {
      instruction: "Translate to French.",
      type: "translation",
      questions: [
        { question: "I would like some cheese.", answer: "Je voudrais du fromage." },
        { question: "A kilo of apples, please.", answer: "Un kilo de pommes, s'il vous plaît." },
        { question: "A lot of tomatoes.", answer: "Beaucoup de tomates." }
      ]
    }
  ]
};

// Pre-generated Content for Unit 9
const UNIT_9_CONTENT: UnitContent = {
  title: "Les Vêtements et la Mode",
  subtitle: "Clothing and Fashion",
  level: UnitLevel.A1,
  introduction: "Time to go shopping for clothes! In this unit, you'll learn clothing vocabulary, colors, and how to use demonstrative adjectives (ce, cette, ces) to point out specific items. Perfect for your next shopping trip in France!",
  culturalNote: "France, especially Paris, is considered a global fashion capital. The French tend to favor classic, timeless pieces over trendy items. The concept of 'effortless chic' ('le style décontracté') is highly valued.",
  vocabulary: [
    { french: "Le pantalon", english: "Pants", pronunciation: "/pɑ̃.ta.lɔ̃/", example: "J'aime ce pantalon noir." },
    { french: "La robe", english: "Dress", pronunciation: "/ʁɔb/", example: "Cette robe est belle." },
    { french: "Le pull", english: "Sweater", pronunciation: "/pyl/", example: "Un pull rouge." },
    { french: "La chemise", english: "Shirt", pronunciation: "/ʃə.miz/", example: "Une chemise blanche." },
    { french: "Les chaussures", english: "Shoes", pronunciation: "/ʃo.syʁ/", example: "Ces chaussures sont confortables." },
    { french: "Le manteau", english: "Coat", pronunciation: "/mɑ̃.to/", example: "Un manteau chaud." },
    { french: "Noir(e)", english: "Black", pronunciation: "/nwaʁ/", example: "Un pantalon noir." },
    { french: "Blanc(he)", english: "White", pronunciation: "/blɑ̃/", example: "Une chemise blanche." },
    { french: "Rouge", english: "Red", pronunciation: "/ʁuʒ/", example: "Une robe rouge." },
    { french: "Bleu(e)", english: "Blue", pronunciation: "/blø/", example: "Un pull bleu." }
  ],
  grammar: [
    {
      title: "Demonstrative Adjectives (ce/cet/cette/ces)",
      explanation: "'Ce' (this/that) for masculine, 'cette' for feminine, 'ces' for plural. Use 'cet' for masculine words starting with a vowel.",
      examples: [
        { french: "Ce pantalon", english: "This/That pair of pants (masculine)" },
        { french: "Cet homme", english: "This/That man (masc. + vowel)" },
        { french: "Cette robe", english: "This/That dress (feminine)" },
        { french: "Ces chaussures", english: "These/Those shoes (plural)" }
      ]
    },
    {
      title: "Colors as Adjectives",
      explanation: "In French, most color adjectives come after the noun and must agree in gender and number. Add -e for feminine, -s for plural.",
      examples: [
        { french: "Un pantalon noir", english: "Black pants" },
        { french: "Une robe noire", english: "A black dress" },
        { french: "Des chaussures noires", english: "Black shoes" },
        { french: "Un pull rouge / une robe rouge", english: "A red sweater / a red dress (no change)" }
      ]
    }
  ],
  dialogue: [
    { speaker: "Vendeuse", text: "Bonjour ! Je peux vous aider?", translation: "Hello! Can I help you?" },
    { speaker: "Client", text: "Oui, je cherche un pantalon noir.", translation: "Yes, I'm looking for black pants." },
    { speaker: "Vendeuse", text: "Quelle taille faites-vous?", translation: "What size are you?" },
    { speaker: "Client", text: "Du 40. Vous avez ce pantalon en noir?", translation: "Size 40. Do you have these pants in black?" },
    { speaker: "Vendeuse", text: "Oui, bien sûr. Voilà. Vous voulez l'essayer?", translation: "Yes, of course. Here you go. Do you want to try it on?" },
    { speaker: "Client", text: "Oui, s'il vous plaît. Où sont les cabines?", translation: "Yes, please. Where are the fitting rooms?" },
    { speaker: "Vendeuse", text: "Les cabines sont au fond, à gauche.", translation: "The fitting rooms are in the back, on the left." }
  ],
  exercises: [
    {
      instruction: "Choose the correct demonstrative adjective (ce, cet, cette, ces).",
      type: "multiple-choice",
      questions: [
        { question: "___ pantalon est cher.", options: ["Ce", "Cette", "Ces"], answer: "Ce" },
        { question: "___ robe est belle.", options: ["Ce", "Cette", "Ces"], answer: "Cette" },
        { question: "___ chaussures sont confortables.", options: ["Ce", "Cette", "Ces"], answer: "Ces" }
      ]
    },
    {
      instruction: "Make the color agree with the noun.",
      type: "fill-in-blank",
      questions: [
        { question: "Une chemise ___ (blanc)", answer: "blanche" },
        { question: "Des chaussures ___ (noir)", answer: "noires" },
        { question: "Un pull ___ (rouge)", answer: "rouge" }
      ]
    },
    {
      instruction: "Translate to French.",
      type: "translation",
      questions: [
        { question: "This dress is beautiful.", answer: "Cette robe est belle." },
        { question: "I'm looking for black shoes.", answer: "Je cherche des chaussures noires." },
        { question: "These pants are expensive.", answer: "Ces pantalons sont chers." }
      ]
    }
  ]
};

// Pre-generated Content for Unit 10
const UNIT_10_CONTENT: UnitContent = {
  title: "Projets de Vacances",
  subtitle: "Vacation Plans",
  level: UnitLevel.A1,
  introduction: "Time to plan your dream vacation! In this unit, you'll learn how to talk about future plans using 'aller + infinitive' (near future), essential travel vocabulary, and the four seasons. Get ready to describe your upcoming adventures!",
  culturalNote: "The French are entitled to a minimum of 5 weeks of paid vacation per year! August is traditionally when many French people take their holidays, and you'll find many businesses closed, especially in Paris.",
  vocabulary: [
    { french: "Voyager", english: "To travel", pronunciation: "/vwa.ja.ʒe/", example: "J'adore voyager." },
    { french: "La plage", english: "The beach", pronunciation: "/plaʒ/", example: "Je vais à la plage." },
    { french: "La montagne", english: "The mountain", pronunciation: "/mɔ̃.taɲ/", example: "J'aime la montagne." },
    { french: "L'hôtel", english: "The hotel", pronunciation: "/o.tɛl/", example: "Nous réservons un hôtel." },
    { french: "L'avion", english: "The airplane", pronunciation: "/a.vjɔ̃/", example: "Je prends l'avion." },
    { french: "Le train", english: "The train", pronunciation: "/tʁɛ̃/", example: "Je voyage en train." },
    { french: "Le printemps", english: "Spring", pronunciation: "/pʁɛ̃.tɑ̃/", example: "Au printemps, il fait doux." },
    { french: "L'été", english: "Summer", pronunciation: "/e.te/", example: "En été, il fait chaud." },
    { french: "L'automne", english: "Fall/Autumn", pronunciation: "/o.tɔn/", example: "En automne, les feuilles tombent." },
    { french: "L'hiver", english: "Winter", pronunciation: "/i.vɛʁ/", example: "En hiver, il neige." }
  ],
  grammar: [
    {
      title: "Near Future: Aller + Infinitive",
      explanation: "To talk about what you're going to do, use the verb 'aller' (to go) + infinitive. This is the easiest way to express future plans in French!",
      examples: [
        { french: "Je vais voyager.", english: "I am going to travel." },
        { french: "Tu vas partir en vacances.", english: "You are going to go on vacation." },
        { french: "Il/Elle va visiter Paris.", english: "He/She is going to visit Paris." },
        { french: "Nous allons nager.", english: "We are going to swim." },
        { french: "Vous allez prendre l'avion.", english: "You are going to take the plane." },
        { french: "Ils/Elles vont rester à l'hôtel.", english: "They are going to stay at the hotel." }
      ]
    },
    {
      title: "Seasons and Prepositions",
      explanation: "Use 'au' for spring (au printemps), and 'en' for the other seasons (en été, en automne, en hiver).",
      examples: [
        { french: "Au printemps, les fleurs poussent.", english: "In spring, flowers grow." },
        { french: "En été, je vais à la plage.", english: "In summer, I go to the beach." },
        { french: "En automne, il fait frais.", english: "In fall, it's cool." },
        { french: "En hiver, je fais du ski.", english: "In winter, I ski." }
      ]
    }
  ],
  dialogue: [
    { speaker: "Emma", text: "Qu'est-ce que tu vas faire cet été?", translation: "What are you going to do this summer?" },
    { speaker: "Lucas", text: "Je vais aller à la plage en Espagne. Et toi?", translation: "I'm going to go to the beach in Spain. And you?" },
    { speaker: "Emma", text: "Je vais visiter la montagne avec ma famille.", translation: "I'm going to visit the mountains with my family." },
    { speaker: "Lucas", text: "Super ! Tu vas prendre l'avion?", translation: "Great! Are you going to take the plane?" },
    { speaker: "Emma", text: "Non, nous allons voyager en voiture.", translation: "No, we're going to travel by car." },
    { speaker: "Lucas", text: "Combien de temps vas-tu rester?", translation: "How long are you going to stay?" },
    { speaker: "Emma", text: "Deux semaines. Je vais faire du ski et me reposer.", translation: "Two weeks. I'm going to ski and relax." }
  ],
  exercises: [
    {
      instruction: "Conjugate 'aller' in the near future construction.",
      type: "fill-in-blank",
      questions: [
        { question: "Je ___ voyager en France.", answer: "vais" },
        { question: "Nous ___ visiter Paris.", answer: "allons" },
        { question: "Ils ___ prendre l'avion.", answer: "vont" }
      ]
    },
    {
      instruction: "Choose the correct season preposition.",
      type: "multiple-choice",
      questions: [
        { question: "___ printemps, il fait beau.", options: ["Au", "En", "À"], answer: "Au" },
        { question: "___ été, je vais à la plage.", options: ["Au", "En", "À"], answer: "En" },
        { question: "___ hiver, il neige.", options: ["Au", "En", "À"], answer: "En" }
      ]
    },
    {
      instruction: "Translate to French using the near future.",
      type: "translation",
      questions: [
        { question: "I am going to travel.", answer: "Je vais voyager." },
        { question: "We are going to stay at the hotel.", answer: "Nous allons rester à l'hôtel." },
        { question: "They are going to visit the beach.", answer: "Ils vont visiter la plage." }
      ]
    }
  ]
};

// Pre-generated Content for Unit 11
const UNIT_11_CONTENT: UnitContent = {
  title: "Souvenirs d'Enfance",
  subtitle: "Childhood Memories",
  level: UnitLevel.A2,
  introduction: "Welcome to A2 level! In this unit, we'll explore the imparfait (imperfect tense), used to describe past habits, ongoing actions, and memories. Perfect for sharing stories about 'the good old days' when you were young!",
  culturalNote: "French children often play traditional games like 'cache-cache' (hide and seek), 'marelle' (hopscotch), and 'saute-mouton' (leapfrog). Many adults have fond memories of long summer vacations spent with grandparents in the countryside.",
  vocabulary: [
    { french: "L'enfance", english: "Childhood", pronunciation: "/ɑ̃.fɑ̃s/", example: "Mon enfance était heureuse." },
    { french: "Se souvenir de", english: "To remember", pronunciation: "/sə suv.niʁ/", example: "Je me souviens de mon école." },
    { french: "Autrefois", english: "In the past / Formerly", pronunciation: "/o.tʁə.fwa/", example: "Autrefois, je jouais dehors." },
    { french: "Quand j'étais petit(e)", english: "When I was little", pronunciation: "/kɑ̃ ʒe.tɛ pə.ti/", example: "Quand j'étais petit, j'aimais les bonbons." },
    { french: "Jouer", english: "To play", pronunciation: "/ʒwe/", example: "Je jouais avec mes amis." },
    { french: "L'école primaire", english: "Elementary school", pronunciation: "/e.kɔl pʁi.mɛʁ/", example: "J'allais à l'école primaire." },
    { french: "Les devoirs", english: "Homework", pronunciation: "/də.vwaʁ/", example: "Je faisais mes devoirs." },
    { french: "Les vacances", english: "Vacation", pronunciation: "/va.kɑ̃s/", example: "Les vacances d'été étaient longues." },
    { french: "La cour de récréation", english: "Playground", pronunciation: "/kuʁ də ʁe.kʁe.a.sjɔ̃/", example: "Je courais dans la cour de récréation." },
    { french: "Heureux/Heureuse", english: "Happy", pronunciation: "/œ.ʁø/", example: "J'étais heureux." }
  ],
  grammar: [
    {
      title: "L'Imparfait (Imperfect Tense)",
      explanation: "Used for descriptions in the past, habitual actions, and ongoing actions. Form: take the 'nous' form present tense, remove -ons, add endings: -ais, -ais, -ait, -ions, -iez, -aient.",
      examples: [
        { french: "Je jouais (from nous jouons)", english: "I was playing / I used to play" },
        { french: "Tu avais", english: "You had / You used to have" },
        { french: "Il/Elle était", english: "He/She was" },
        { french: "Nous faisions", english: "We were doing / We used to do" },
        { french: "Vous alliez", english: "You were going / You used to go" },
        { french: "Ils/Elles habitaient", english: "They lived / They used to live" }
      ]
    },
    {
      title: "Common Uses of Imparfait",
      explanation: "Use imparfait for: 1) Descriptions in the past, 2) Habitual actions, 3) Ongoing actions, 4) Age, weather, and time in the past.",
      examples: [
        { french: "Il faisait beau.", english: "The weather was nice. (description)" },
        { french: "Je jouais au foot tous les jours.", english: "I played soccer every day. (habit)" },
        { french: "Pendant que je lisais, il dormait.", english: "While I was reading, he was sleeping. (ongoing)" },
        { french: "J'avais dix ans.", english: "I was ten years old. (age)" }
      ]
    }
  ],
  dialogue: [
    { speaker: "Grand-mère", text: "Tu te souviens de ton enfance, chérie?", translation: "Do you remember your childhood, dear?" },
    { speaker: "Sophie", text: "Oui ! Quand j'étais petite, je jouais toujours dans le jardin.", translation: "Yes! When I was little, I always played in the garden." },
    { speaker: "Grand-mère", text: "Et tu allais à l'école à pied?", translation: "And did you walk to school?" },
    { speaker: "Sophie", text: "Oui, tous les matins. J'aimais beaucoup l'école.", translation: "Yes, every morning. I really liked school." },
    { speaker: "Grand-mère", text: "Qu'est-ce que tu faisais pendant la récréation?", translation: "What did you do during recess?" },
    { speaker: "Sophie", text: "Je jouais à la marelle avec mes amies. C'était amusant!", translation: "I played hopscotch with my friends. It was fun!" },
    { speaker: "Grand-mère", text: "Ah, les bons souvenirs!", translation: "Ah, good memories!" }
  ],
  exercises: [
    {
      instruction: "Conjugate the verb in the imparfait.",
      type: "fill-in-blank",
      questions: [
        { question: "Quand j'étais petit, je ___ (jouer) au foot.", answer: "jouais" },
        { question: "Nous ___ (aller) à l'école ensemble.", answer: "allions" },
        { question: "Ils ___ (être) très heureux.", answer: "étaient" }
      ]
    },
    {
      instruction: "Choose the correct use of imparfait.",
      type: "multiple-choice",
      questions: [
        { question: "Il ___ beau ce jour-là.", options: ["faisait", "a fait", "fait"], answer: "faisait" },
        { question: "Je ___ mes devoirs tous les soirs.", options: ["faisais", "ai fait", "fais"], answer: "faisais" },
        { question: "Nous ___ dix ans.", options: ["avions", "avons eu", "avons"], answer: "avions" }
      ]
    },
    {
      instruction: "Translate to French using the imparfait.",
      type: "translation",
      questions: [
        { question: "When I was little, I played outside.", answer: "Quand j'étais petit(e), je jouais dehors." },
        { question: "We used to go to the beach every summer.", answer: "Nous allions à la plage tous les étés." },
        { question: "The weather was nice.", answer: "Il faisait beau." }
      ]
    }
  ]
};

// Pre-generated Content for Unit 12
const UNIT_12_CONTENT: UnitContent = {
  title: "Une Histoire Passée",
  subtitle: "A Past Story",
  level: UnitLevel.A2,
  introduction: "Now let's talk about completed actions in the past! The passé composé is used for specific events that happened and finished. You'll learn how to form it with 'avoir' and deal with irregular past participles.",
  culturalNote: "The French love storytelling! Whether it's personal anecdotes over dinner or the rich tradition of French literature, knowing how to narrate past events is essential for social interaction in France.",
  vocabulary: [
    { french: "Hier", english: "Yesterday", pronunciation: "/jɛʁ/", example: "Hier, j'ai mangé au restaurant." },
    { french: "La semaine dernière", english: "Last week", pronunciation: "/sə.mɛn dɛʁ.njɛʁ/", example: "La semaine dernière, j'ai voyagé." },
    { french: "Il y a", english: "Ago", pronunciation: "/il i a/", example: "Il y a deux jours, j'ai vu Marie." },
    { french: "Déjà", english: "Already", pronunciation: "/de.ʒa/", example: "J'ai déjà fini." },
    { french: "Pas encore", english: "Not yet", pronunciation: "/pa ɑ̃.kɔʁ/", example: "Je n'ai pas encore mangé." },
    { french: "Rencontrer", english: "To meet", pronunciation: "/ʁɑ̃.kɔ̃.tʁe/", example: "J'ai rencontré un ami." },
    { french: "Finir", english: "To finish", pronunciation: "/fi.niʁ/", example: "J'ai fini mes devoirs." },
    { french: "Perdre", english: "To lose", pronunciation: "/pɛʁdʁ/", example: "J'ai perdu mes clés." },
    { french: "Comprendre", english: "To understand", pronunciation: "/kɔ̃.pʁɑ̃dʁ/", example: "J'ai compris la leçon." },
    { french: "Réussir", english: "To succeed", pronunciation: "/ʁe.y.siʁ/", example: "J'ai réussi mon examen." }
  ],
  grammar: [
    {
      title: "Passé Composé with Avoir",
      explanation: "Form: avoir (present) + past participle. Regular past participles: -er → -é, -ir → -i, -re → -u. Many verbs have irregular past participles!",
      examples: [
        { french: "J'ai mangé", english: "I ate / I have eaten (-er verb)" },
        { french: "Tu as fini", english: "You finished (-ir verb)" },
        { french: "Il a vendu", english: "He sold (-re verb)" },
        { french: "Nous avons travaillé", english: "We worked" },
        { french: "Vous avez choisi", english: "You chose" },
        { french: "Ils ont répondu", english: "They answered" }
      ]
    },
    {
      title: "Irregular Past Participles",
      explanation: "Many common verbs have irregular past participles that must be memorized.",
      examples: [
        { french: "avoir → eu (j'ai eu)", english: "to have → had" },
        { french: "être → été (j'ai été)", english: "to be → been" },
        { french: "faire → fait (j'ai fait)", english: "to do → done" },
        { french: "voir → vu (j'ai vu)", english: "to see → seen" },
        { french: "prendre → pris (j'ai pris)", english: "to take → taken" },
        { french: "mettre → mis (j'ai mis)", english: "to put → put" }
      ]
    }
  ],
  dialogue: [
    { speaker: "Claire", text: "Qu'est-ce que tu as fait hier?", translation: "What did you do yesterday?" },
    { speaker: "Antoine", text: "J'ai travaillé toute la journée, puis j'ai rencontré des amis.", translation: "I worked all day, then I met some friends." },
    { speaker: "Claire", text: "Où est-ce que vous êtes allés?", translation: "Where did you go?" },
    { speaker: "Antoine", text: "Nous avons dîné au restaurant italien. C'était délicieux!", translation: "We had dinner at the Italian restaurant. It was delicious!" },
    { speaker: "Claire", text: "Tu as pris quoi?", translation: "What did you have?" },
    { speaker: "Antoine", text: "J'ai pris des pâtes et un tiramisu. Et toi, qu'est-ce que tu as fait?", translation: "I had pasta and tiramisu. And you, what did you do?" },
    { speaker: "Claire", text: "Moi, j'ai fini mon projet et j'ai regardé un film.", translation: "Me, I finished my project and watched a movie." }
  ],
  exercises: [
    {
      instruction: "Form the passé composé with 'avoir'.",
      type: "fill-in-blank",
      questions: [
        { question: "J'___ ___ (manger) une pizza.", answer: "ai mangé" },
        { question: "Tu ___ ___ (finir) tes devoirs?", answer: "as fini" },
        { question: "Nous ___ ___ (vendre) notre voiture.", answer: "avons vendu" }
      ]
    },
    {
      instruction: "Choose the correct irregular past participle.",
      type: "multiple-choice",
      questions: [
        { question: "J'ai ___ (faire) mes devoirs.", options: ["fait", "faisi", "fais"], answer: "fait" },
        { question: "Elle a ___ (voir) un film.", options: ["voit", "vu", "vi"], answer: "vu" },
        { question: "Nous avons ___ (prendre) le train.", options: ["pris", "prenu", "prendu"], answer: "pris" }
      ]
    },
    {
      instruction: "Translate to French using passé composé.",
      type: "translation",
      questions: [
        { question: "I finished my work.", answer: "J'ai fini mon travail." },
        { question: "She saw the movie.", answer: "Elle a vu le film." },
        { question: "We ate at the restaurant.", answer: "Nous avons mangé au restaurant." }
      ]
    }
  ]
};

// Pre-generated Content for Unit 13
const UNIT_13_CONTENT: UnitContent = {
  title: "Mouvements et Déplacements",
  subtitle: "Movement and Travel",
  level: UnitLevel.A2,
  introduction: "Some verbs use 'être' instead of 'avoir' in the passé composé! These are mostly verbs of movement and change of state. We'll learn the famous 'house of être' and how past participles agree with the subject.",
  culturalNote: "The French train system (SNCF) is extensive and efficient. The TGV (Train à Grande Vitesse) can travel at speeds over 300 km/h, making train travel a popular choice for both commuting and tourism across France.",
  vocabulary: [
    { french: "Partir", english: "To leave", pronunciation: "/paʁ.tiʁ/", example: "Je suis parti(e) à 8 heures." },
    { french: "Arriver", english: "To arrive", pronunciation: "/a.ʁi.ve/", example: "Nous sommes arrivés en retard." },
    { french: "Aller", english: "To go", pronunciation: "/a.le/", example: "Je suis allé(e) au cinéma." },
    { french: "Venir", english: "To come", pronunciation: "/və.niʁ/", example: "Ils sont venus hier." },
    { french: "Entrer", english: "To enter", pronunciation: "/ɑ̃.tʁe/", example: "Elle est entrée dans la maison." },
    { french: "Sortir", english: "To go out", pronunciation: "/sɔʁ.tiʁ/", example: "Je suis sorti(e) avec des amis." },
    { french: "Monter", english: "To go up / climb", pronunciation: "/mɔ̃.te/", example: "Nous sommes montés au sommet." },
    { french: "Descendre", english: "To go down", pronunciation: "/de.sɑ̃dʁ/", example: "Je suis descendu(e) du bus." },
    { french: "Rester", english: "To stay", pronunciation: "/ʁɛs.te/", example: "Nous sommes restés trois jours." },
    { french: "Tomber", english: "To fall", pronunciation: "/tɔ̃.be/", example: "Je suis tombé(e) dans la rue." }
  ],
  grammar: [
    {
      title: "Passé Composé with Être",
      explanation: "17 verbs use 'être' instead of 'avoir'. The acronym DR & MRS VANDERTRAMP helps remember them. The past participle MUST agree with the subject (add -e for feminine, -s for plural).",
      examples: [
        { french: "Je suis allé (masculine) / allée (feminine)", english: "I went" },
        { french: "Tu es parti(e)", english: "You left" },
        { french: "Il est venu / Elle est venue", english: "He came / She came" },
        { french: "Nous sommes arrivés / arrivées", english: "We arrived" },
        { french: "Vous êtes sorti(e)(s)", english: "You went out" },
        { french: "Ils sont restés / Elles sont restées", english: "They stayed" }
      ]
    },
    {
      title: "The House of Être (DR MRS VANDERTRAMP)",
      explanation: "Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Retourner, Tomber, Rentrer, Arriver, Mourir, Partir",
      examples: [
        { french: "Je suis né(e) en 1990.", english: "I was born in 1990." },
        { french: "Elle est morte en 2010.", english: "She died in 2010." },
        { french: "Nous sommes devenus amis.", english: "We became friends." },
        { french: "Ils sont revenus hier.", english: "They came back yesterday." }
      ]
    }
  ],
  dialogue: [
    { speaker: "Marc", text: "Tu es allée où en vacances?", translation: "Where did you go on vacation?" },
    { speaker: "Julie", text: "Je suis allée en Italie avec ma sœur.", translation: "I went to Italy with my sister." },
    { speaker: "Marc", text: "Super ! Vous êtes parties combien de temps?", translation: "Great! How long did you leave for?" },
    { speaker: "Julie", text: "Nous sommes parties une semaine. Nous sommes arrivées à Rome lundi.", translation: "We left for a week. We arrived in Rome on Monday." },
    { speaker: "Marc", text: "Et vous êtes restées à Rome tout le temps?", translation: "And did you stay in Rome the whole time?" },
    { speaker: "Julie", text: "Non, nous sommes allées à Florence aussi. C'était magnifique!", translation: "No, we went to Florence too. It was magnificent!" },
    { speaker: "Marc", text: "Quand est-ce que vous êtes rentrées?", translation: "When did you come back?" }
  ],
  exercises: [
    {
      instruction: "Form the passé composé with 'être' and make agreement.",
      type: "fill-in-blank",
      questions: [
        { question: "Elle ___ ___ (aller) au cinéma.", answer: "est allée" },
        { question: "Nous (fém.) ___ ___ (partir) tôt.", answer: "sommes parties" },
        { question: "Ils ___ ___ (venir) hier.", answer: "sont venus" }
      ]
    },
    {
      instruction: "Choose 'avoir' or 'être' for the passé composé.",
      type: "multiple-choice",
      questions: [
        { question: "Je ___ allé au parc.", options: ["ai", "suis"], answer: "suis" },
        { question: "Tu ___ mangé une pizza.", options: ["as", "es"], answer: "as" },
        { question: "Nous ___ arrivés en retard.", options: ["avons", "sommes"], answer: "sommes" }
      ]
    },
    {
      instruction: "Translate to French with correct agreement.",
      type: "translation",
      questions: [
        { question: "She went to France. (Elle)", answer: "Elle est allée en France." },
        { question: "They (masc.) arrived yesterday.", answer: "Ils sont arrivés hier." },
        { question: "We (fem.) left early.", answer: "Nous sommes parties tôt." }
      ]
    }
  ]
};

// Pre-generated Content for Unit 14
const UNIT_14_CONTENT: UnitContent = {
  title: "Chez le Médecin",
  subtitle: "At the Doctor's",
  level: UnitLevel.A2,
  introduction: "Feeling under the weather? In this unit, you'll learn vocabulary for body parts and health issues, how to describe pain and symptoms, and the imperative mood for giving advice and instructions - essential for any medical conversation!",
  culturalNote: "France has an excellent public healthcare system called 'la Sécurité sociale'. When you visit a doctor, you receive a 'feuille de soins' (medical form) for reimbursement. Pharmacists ('pharmaciens') are highly trained and can give medical advice for minor ailments.",
  vocabulary: [
    { french: "La tête", english: "Head", pronunciation: "/tɛt/", example: "J'ai mal à la tête." },
    { french: "Le ventre", english: "Stomach/belly", pronunciation: "/vɑ̃tʁ/", example: "J'ai mal au ventre." },
    { french: "La gorge", english: "Throat", pronunciation: "/ɡɔʁʒ/", example: "J'ai mal à la gorge." },
    { french: "Le dos", english: "Back", pronunciation: "/do/", example: "J'ai mal au dos." },
    { french: "La jambe", english: "Leg", pronunciation: "/ʒɑ̃b/", example: "Ma jambe me fait mal." },
    { french: "Le bras", english: "Arm", pronunciation: "/bʁa/", example: "Je me suis cassé le bras." },
    { french: "Avoir mal à", english: "To have pain in", pronunciation: "/a.vwaʁ mal a/", example: "J'ai mal aux dents." },
    { french: "La fièvre", english: "Fever", pronunciation: "/fjɛvʁ/", example: "J'ai de la fièvre." },
    { french: "Le médicament", english: "Medicine", pronunciation: "/me.di.ka.mɑ̃/", example: "Je prends un médicament." },
    { french: "Se reposer", english: "To rest", pronunciation: "/sə ʁə.po.ze/", example: "Vous devez vous reposer." }
  ],
  grammar: [
    {
      title: "The Imperative Mood",
      explanation: "Used for commands, requests, and advice. Use the present tense without the subject pronoun. For -er verbs, drop the 's' in the tu form.",
      examples: [
        { french: "Mange ! (from tu manges)", english: "Eat! (informal)" },
        { french: "Mangez !", english: "Eat! (formal/plural)" },
        { french: "Mangeons !", english: "Let's eat!" },
        { french: "Finis tes devoirs !", english: "Finish your homework!" },
        { french: "Soyez prudent !", english: "Be careful! (from être)" },
        { french: "Aie confiance !", english: "Have confidence! (from avoir)" }
      ]
    },
    {
      title: "Expressing Pain: Avoir mal à + body part",
      explanation: "Use 'avoir mal à' + definite article + body part. Remember contractions: à + le = au, à + les = aux.",
      examples: [
        { french: "J'ai mal à la tête.", english: "I have a headache. (à + la)" },
        { french: "J'ai mal au dos.", english: "My back hurts. (à + le = au)" },
        { french: "J'ai mal aux pieds.", english: "My feet hurt. (à + les = aux)" },
        { french: "Tu as mal où?", english: "Where does it hurt?" }
      ]
    }
  ],
  dialogue: [
    { speaker: "Médecin", text: "Bonjour. Qu'est-ce qui ne va pas?", translation: "Hello. What's wrong?" },
    { speaker: "Patient", text: "Bonjour Docteur. J'ai mal à la gorge et j'ai de la fièvre.", translation: "Hello Doctor. My throat hurts and I have a fever." },
    { speaker: "Médecin", text: "Depuis quand?", translation: "Since when?" },
    { speaker: "Patient", text: "Depuis trois jours. J'ai aussi mal à la tête.", translation: "For three days. I also have a headache." },
    { speaker: "Médecin", text: "Ouvrez la bouche, s'il vous plaît. Dites 'Ah'.", translation: "Open your mouth, please. Say 'Ah'." },
    { speaker: "Patient", text: "Aaah.", translation: "Aaah." },
    { speaker: "Médecin", text: "Vous avez une angine. Prenez ces médicaments et reposez-vous.", translation: "You have a throat infection. Take these medicines and rest." },
    { speaker: "Patient", text: "Merci Docteur.", translation: "Thank you Doctor." }
  ],
  exercises: [
    {
      instruction: "Form the imperative (tu form).",
      type: "fill-in-blank",
      questions: [
        { question: "___ (manger) tes légumes !", answer: "Mange" },
        { question: "___ (finir) tes devoirs !", answer: "Finis" },
        { question: "___ (être) gentil !", answer: "Sois" }
      ]
    },
    {
      instruction: "Express pain using 'avoir mal à'.",
      type: "multiple-choice",
      questions: [
        { question: "J'ai mal ___ tête.", options: ["à la", "au", "aux"], answer: "à la" },
        { question: "J'ai mal ___ dos.", options: ["à la", "au", "aux"], answer: "au" },
        { question: "J'ai mal ___ pieds.", options: ["à la", "au", "aux"], answer: "aux" }
      ]
    },
    {
      instruction: "Translate to French.",
      type: "translation",
      questions: [
        { question: "Rest! (vous form)", answer: "Reposez-vous !" },
        { question: "I have a stomachache.", answer: "J'ai mal au ventre." },
        { question: "Take this medicine. (tu form)", answer: "Prends ce médicament." }
      ]
    }
  ]
};

// Pre-generated Content for Unit 15
const UNIT_15_CONTENT: UnitContent = {
  title: "La Cuisine Française",
  subtitle: "French Cooking",
  level: UnitLevel.A2,
  introduction: "Bienvenue dans la cuisine ! French cuisine is world-renowned, and in this unit you'll learn how to follow recipes, give cooking instructions, and use the pronoun 'en' to avoid repetition. Bon appétit!",
  culturalNote: "French gastronomy was added to UNESCO's list of Intangible Cultural Heritage. A traditional French meal has multiple courses: entrée (appetizer), plat principal (main course), fromage (cheese), and dessert. Meals are meant to be savored, not rushed!",
  vocabulary: [
    { french: "La recette", english: "Recipe", pronunciation: "/ʁə.sɛt/", example: "Je suis une recette." },
    { french: "Les ingrédients", english: "Ingredients", pronunciation: "/ɛ̃.ɡʁe.djɑ̃/", example: "Voici les ingrédients." },
    { french: "Mélanger", english: "To mix", pronunciation: "/me.lɑ̃.ʒe/", example: "Mélangez les œufs." },
    { french: "Ajouter", english: "To add", pronunciation: "/a.ʒu.te/", example: "Ajoutez du sel." },
    { french: "Faire cuire", english: "To cook", pronunciation: "/fɛʁ kɥiʁ/", example: "Faites cuire pendant 20 minutes." },
    { french: "Couper", english: "To cut", pronunciation: "/ku.pe/", example: "Coupez les légumes." },
    { french: "La farine", english: "Flour", pronunciation: "/fa.ʁin/", example: "Il faut de la farine." },
    { french: "Le sel", english: "Salt", pronunciation: "/sɛl/", example: "Ajoutez du sel." },
    { french: "Le four", english: "Oven", pronunciation: "/fuʁ/", example: "Préchauffez le four." },
    { french: "Délicieux/délicieuse", english: "Delicious", pronunciation: "/de.li.sjø/", example: "C'est délicieux !" }
  ],
  grammar: [
    {
      title: "The Pronoun 'En'",
      explanation: "'En' replaces 'de + noun' and quantities. It means 'some/any/of it/of them'. Place it before the verb (or before avoir/être in passé composé).",
      examples: [
        { french: "Tu veux du pain? - Oui, j'en veux.", english: "Do you want bread? - Yes, I want some." },
        { french: "Tu as des pommes? - Oui, j'en ai.", english: "Do you have apples? - Yes, I have some." },
        { french: "Tu as acheté du fromage? - Oui, j'en ai acheté.", english: "Did you buy cheese? - Yes, I bought some." },
        { french: "Combien en veux-tu? - J'en veux trois.", english: "How many do you want? - I want three (of them)." }
      ]
    },
    {
      title: "Giving Instructions in Recipes",
      explanation: "Recipes use the imperative (vous form) or the infinitive. Common cooking verbs are essential!",
      examples: [
        { french: "Mélangez la farine et les œufs.", english: "Mix the flour and eggs." },
        { french: "Ajoutez du sucre.", english: "Add sugar." },
        { french: "Faites cuire à 180°C.", english: "Cook at 180°C." },
        { french: "Servez chaud.", english: "Serve hot." }
      ]
    }
  ],
  dialogue: [
    { speaker: "Mère", text: "Tu veux faire un gâteau avec moi?", translation: "Do you want to make a cake with me?" },
    { speaker: "Fille", text: "Oui ! De quoi a-t-on besoin?", translation: "Yes! What do we need?" },
    { speaker: "Mère", text: "De la farine, du sucre, des œufs et du beurre.", translation: "Flour, sugar, eggs and butter." },
    { speaker: "Fille", text: "On a des œufs?", translation: "Do we have eggs?" },
    { speaker: "Mère", text: "Oui, on en a. Prends-en trois.", translation: "Yes, we have some. Take three (of them)." },
    { speaker: "Fille", text: "Et maintenant?", translation: "And now?" },
    { speaker: "Mère", text: "Mélange tout et mets le mélange dans le four.", translation: "Mix everything and put the mixture in the oven." },
    { speaker: "Fille", text: "Combien de temps?", translation: "How long?" },
    { speaker: "Mère", text: "Trente minutes à 180 degrés.", translation: "Thirty minutes at 180 degrees." }
  ],
  exercises: [
    {
      instruction: "Replace the underlined words with 'en'.",
      type: "fill-in-blank",
      questions: [
        { question: "Tu veux du café? - Oui, j'___ veux.", answer: "en" },
        { question: "Elle a acheté des pommes? - Oui, elle ___ a acheté.", answer: "en" },
        { question: "Vous avez de la farine? - Non, nous n'___ avons pas.", answer: "en" }
      ]
    },
    {
      instruction: "Put the cooking instruction in the imperative (vous form).",
      type: "multiple-choice",
      questions: [
        { question: "___ (mélanger) les ingrédients.", options: ["Mélange", "Mélangez", "Mélangeons"], answer: "Mélangez" },
        { question: "___ (ajouter) du sel.", options: ["Ajoute", "Ajoutez", "Ajoutons"], answer: "Ajoutez" },
        { question: "___ (couper) les légumes.", options: ["Coupe", "Coupez", "Coupons"], answer: "Coupez" }
      ]
    },
    {
      instruction: "Translate to French using 'en'.",
      type: "translation",
      questions: [
        { question: "Do you want some? - Yes, I want some.", answer: "Tu en veux? - Oui, j'en veux." },
        { question: "I bought some.", answer: "J'en ai acheté." },
        { question: "Add some (vous form).", answer: "Ajoutez-en." }
      ]
    }
  ]
};

// Pre-generated Content for Unit 16
const UNIT_16_CONTENT: UnitContent = {
  title: "Comparaisons et Choix",
  subtitle: "Comparisons and Choices",
  level: UnitLevel.A2,
  introduction: "Which one is better? In this unit, you'll learn how to compare things and make choices using comparatives (more/less than) and superlatives (the most/least). Essential for shopping, debating, and expressing preferences!",
  culturalNote: "The French take comparison shopping seriously! Markets and small boutiques are preferred over large chains for their quality and personal service. 'Le bon rapport qualité-prix' (good value for money) is highly valued.",
  vocabulary: [
    { french: "Comparer", english: "To compare", pronunciation: "/kɔ̃.pa.ʁe/", example: "Je compare les prix." },
    { french: "Meilleur(e)", english: "Better (quality)", pronunciation: "/mɛ.jœʁ/", example: "Ce restaurant est meilleur." },
    { french: "Mieux", english: "Better (manner)", pronunciation: "/mjø/", example: "Elle chante mieux." },
    { french: "Pire", english: "Worse", pronunciation: "/piʁ/", example: "C'est pire qu'avant." },
    { french: "Cher/chère", english: "Expensive", pronunciation: "/ʃɛʁ/", example: "C'est trop cher." },
    { french: "Bon marché", english: "Cheap/inexpensive", pronunciation: "/bɔ̃ maʁ.ʃe/", example: "C'est bon marché." },
    { french: "La qualité", english: "Quality", pronunciation: "/ka.li.te/", example: "La qualité est excellente." },
    { french: "Le choix", english: "Choice", pronunciation: "/ʃwa/", example: "Bon choix !" },
    { french: "Préférer", english: "To prefer", pronunciation: "/pʁe.fe.ʁe/", example: "Je préfère celui-ci." },
    { french: "Choisir", english: "To choose", pronunciation: "/ʃwa.ziʁ/", example: "Je choisis cette robe." }
  ],
  grammar: [
    {
      title: "Comparatives (plus/moins/aussi... que)",
      explanation: "Compare using: plus... que (more... than), moins... que (less... than), aussi... que (as... as).",
      examples: [
        { french: "Marie est plus grande que Paul.", english: "Marie is taller than Paul." },
        { french: "Ce livre est moins cher que celui-là.", english: "This book is less expensive than that one." },
        { french: "Je suis aussi fatigué que toi.", english: "I am as tired as you." },
        { french: "Elle parle plus vite que moi.", english: "She speaks faster than me." }
      ]
    },
    {
      title: "Superlatives (le/la/les plus/moins)",
      explanation: "Use le/la/les + plus/moins + adjective (+ de). The adjective agrees with the noun.",
      examples: [
        { french: "C'est le plus grand magasin.", english: "It's the biggest store." },
        { french: "C'est la moins chère.", english: "It's the least expensive (fem.)." },
        { french: "Ce sont les meilleurs restaurants de Paris.", english: "These are the best restaurants in Paris." },
        { french: "C'est le livre le plus intéressant.", english: "It's the most interesting book." }
      ]
    }
  ],
  dialogue: [
    { speaker: "Vendeur", text: "Ces deux téléphones sont excellents. Lequel préférez-vous?", translation: "These two phones are excellent. Which one do you prefer?" },
    { speaker: "Client", text: "Celui-ci est plus cher. Il est meilleur?", translation: "This one is more expensive. Is it better?" },
    { speaker: "Vendeur", text: "Oui, il a une meilleure caméra et il est plus rapide.", translation: "Yes, it has a better camera and it's faster." },
    { speaker: "Client", text: "Et celui-là?", translation: "And that one?" },
    { speaker: "Vendeur", text: "Il est moins cher mais aussi moins puissant.", translation: "It's less expensive but also less powerful." },
    { speaker: "Client", text: "Lequel est le plus populaire?", translation: "Which one is the most popular?" },
    { speaker: "Vendeur", text: "Le plus cher est le plus populaire, mais les deux sont d'excellente qualité.", translation: "The more expensive one is the most popular, but both are excellent quality." },
    { speaker: "Client", text: "Je prends le moins cher alors.", translation: "I'll take the less expensive one then." }
  ],
  exercises: [
    {
      instruction: "Form comparatives using plus/moins/aussi... que.",
      type: "fill-in-blank",
      questions: [
        { question: "Paris est ___ grand ___ Lyon. (more)", answer: "plus ... que" },
        { question: "Ce livre est ___ intéressant ___ l'autre. (less)", answer: "moins ... que" },
        { question: "Je suis ___ fatigué ___ toi. (as)", answer: "aussi ... que" }
      ]
    },
    {
      instruction: "Form the superlative.",
      type: "multiple-choice",
      questions: [
        { question: "C'est ___ restaurant de la ville. (the best)", options: ["le meilleur", "le plus bon", "le mieux"], answer: "le meilleur" },
        { question: "C'est la robe ___ chère. (the most)", options: ["la plus", "la meilleure", "le plus"], answer: "la plus" },
        { question: "Ce sont ___ étudiants. (the best)", options: ["les meilleurs", "les plus bons", "les mieux"], answer: "les meilleurs" }
      ]
    },
    {
      instruction: "Translate to French.",
      type: "translation",
      questions: [
        { question: "This car is faster than that one.", answer: "Cette voiture est plus rapide que celle-là." },
        { question: "It's the most expensive restaurant.", answer: "C'est le restaurant le plus cher." },
        { question: "She is as tall as me.", answer: "Elle est aussi grande que moi." }
      ]
    }
  ]
};

// Pre-generated Content for Unit 17
const UNIT_17_CONTENT: UnitContent = {
  title: "Au Travail",
  subtitle: "At Work",
  level: UnitLevel.A2,
  introduction: "Let's talk about work! In this unit, you'll learn professional vocabulary, how to describe jobs and work environments, and master direct object pronouns (le, la, les) to make your French more natural and fluent.",
  culturalNote: "The French work week is legally limited to 35 hours, though many professionals work more. 'Le savoir-vivre' (knowing how to behave) in the workplace is important - always greet colleagues with 'bonjour' and use 'vous' until invited to use 'tu'.",
  vocabulary: [
    { french: "Le travail", english: "Work/job", pronunciation: "/tʁa.vaj/", example: "J'aime mon travail." },
    { french: "Le bureau", english: "Office", pronunciation: "/by.ʁo/", example: "Je travaille dans un bureau." },
    { french: "Le collègue", english: "Colleague", pronunciation: "/kɔ.lɛɡ/", example: "Mes collègues sont sympathiques." },
    { french: "Le patron / La patronne", english: "Boss", pronunciation: "/pa.tʁɔ̃/", example: "Mon patron est gentil." },
    { french: "La réunion", english: "Meeting", pronunciation: "/ʁe.y.njɔ̃/", example: "J'ai une réunion à 14h." },
    { french: "Le salaire", english: "Salary", pronunciation: "/sa.lɛʁ/", example: "Le salaire est bon." },
    { french: "Embaucher", english: "To hire", pronunciation: "/ɑ̃.bo.ʃe/", example: "Ils embauchent trois personnes." },
    { french: "Licencier", english: "To fire/lay off", pronunciation: "/li.sɑ̃.sje/", example: "L'entreprise licencie des employés." },
    { french: "Le CV", english: "Resume/CV", pronunciation: "/se.ve/", example: "J'envoie mon CV." },
    { french: "L'entretien", english: "Interview", pronunciation: "/ɑ̃.tʁə.tjɛ̃/", example: "J'ai un entretien demain." }
  ],
  grammar: [
    {
      title: "Direct Object Pronouns (le, la, l', les)",
      explanation: "Replace direct objects to avoid repetition. 'Le' (masc.), 'la' (fem.), 'l'' (before vowel), 'les' (plural). Place BEFORE the verb.",
      examples: [
        { french: "Tu vois Paul? - Oui, je le vois.", english: "Do you see Paul? - Yes, I see him." },
        { french: "Tu aimes cette robe? - Oui, je l'aime.", english: "Do you like this dress? - Yes, I like it." },
        { french: "Tu connais mes parents? - Oui, je les connais.", english: "Do you know my parents? - Yes, I know them." },
        { french: "Je vais acheter le livre. → Je vais l'acheter.", english: "I'm going to buy the book. → I'm going to buy it." }
      ]
    },
    {
      title: "Position with Passé Composé and Near Future",
      explanation: "With passé composé: place before avoir/être. With near future (aller + infinitive): place before the infinitive.",
      examples: [
        { french: "Je l'ai vu hier.", english: "I saw him yesterday. (before avoir)" },
        { french: "Je vais le voir demain.", english: "I'm going to see him tomorrow. (before infinitive)" },
        { french: "Elle les a invités.", english: "She invited them." },
        { french: "Nous allons les inviter.", english: "We're going to invite them." }
      ]
    }
  ],
  dialogue: [
    { speaker: "RH", text: "Bonjour, vous avez votre CV?", translation: "Hello, do you have your CV?" },
    { speaker: "Candidat", text: "Oui, je l'ai. Le voici.", translation: "Yes, I have it. Here it is." },
    { speaker: "RH", text: "Parfait. Vous connaissez notre entreprise?", translation: "Perfect. Do you know our company?" },
    { speaker: "Candidat", text: "Oui, je la connais bien. Je l'admire depuis longtemps.", translation: "Yes, I know it well. I've admired it for a long time." },
    { speaker: "RH", text: "Vous avez de l'expérience dans ce domaine?", translation: "Do you have experience in this field?" },
    { speaker: "Candidat", text: "Oui, j'ai travaillé trois ans dans une entreprise similaire.", translation: "Yes, I worked three years in a similar company." },
    { speaker: "RH", text: "Excellent. Quand pouvez-vous commencer?", translation: "Excellent. When can you start?" },
    { speaker: "Candidat", text: "Je peux commencer le mois prochain.", translation: "I can start next month." }
  ],
  exercises: [
    {
      instruction: "Replace the underlined direct object with a pronoun (le, la, l', les).",
      type: "fill-in-blank",
      questions: [
        { question: "Je vois Marie. → Je ___ vois.", answer: "la" },
        { question: "Il lit le journal. → Il ___ lit.", answer: "le" },
        { question: "Nous aimons ces films. → Nous ___ aimons.", answer: "les" }
      ]
    },
    {
      instruction: "Place the pronoun correctly in the sentence.",
      type: "multiple-choice",
      questions: [
        { question: "I saw him yesterday.", options: ["Je l'ai vu hier.", "Je ai le vu hier.", "Je vu l'ai hier."], answer: "Je l'ai vu hier." },
        { question: "I'm going to see them.", options: ["Je vais voir les.", "Je vais les voir.", "Je les vais voir."], answer: "Je vais les voir." },
        { question: "She knows it (fem.).", options: ["Elle la connaît.", "Elle connaît la.", "La elle connaît."], answer: "Elle la connaît." }
      ]
    },
    {
      instruction: "Translate to French using direct object pronouns.",
      type: "translation",
      questions: [
        { question: "I see her.", answer: "Je la vois." },
        { question: "We're going to buy it (masc.).", answer: "Nous allons l'acheter." },
        { question: "Did you (tu) read them?", answer: "Tu les as lus?" }
      ]
    }
  ]
};

// Pre-generated Content for Unit 18
const UNIT_18_CONTENT: UnitContent = {
  title: "Les Relations Personnelles",
  subtitle: "Personal Relationships",
  level: UnitLevel.A2,
  introduction: "Relationships matter! In this unit, we'll explore vocabulary for friendship and relationships, personality adjectives, and indirect object pronouns (lui, leur) - essential for talking about giving, telling, and communicating with others.",
  culturalNote: "French friendships tend to be deep and long-lasting, though they may take time to develop. The word 'ami(e)' is reserved for true friends - casual acquaintances are 'connaissances'. Kissing on the cheek ('la bise') is standard among friends.",
  vocabulary: [
    { french: "L'amitié", english: "Friendship", pronunciation: "/a.mi.tje/", example: "L'amitié est importante." },
    { french: "Le copain / La copine", english: "Friend / boyfriend/girlfriend", pronunciation: "/kɔ.pɛ̃/", example: "C'est mon copain." },
    { french: "Sympathique (sympa)", english: "Nice/friendly", pronunciation: "/sɛ̃.pa.tik/", example: "Elle est très sympa." },
    { french: "Généreux/généreuse", english: "Generous", pronunciation: "/ʒe.ne.ʁø/", example: "Il est généreux." },
    { french: "Égoïste", english: "Selfish", pronunciation: "/e.ɡɔ.ist/", example: "Ne sois pas égoïste." },
    { french: "Gentil(le)", english: "Kind/nice", pronunciation: "/ʒɑ̃.ti/", example: "Tu es très gentil." },
    { french: "Drôle", english: "Funny", pronunciation: "/dʁol/", example: "Il est très drôle." },
    { french: "Ennuyeux/ennuyeuse", english: "Boring", pronunciation: "/ɑ̃.nɥi.jø/", example: "Ce film est ennuyeux." },
    { french: "Offrir", english: "To give/offer", pronunciation: "/ɔ.fʁiʁ/", example: "J'offre un cadeau." },
    { french: "Parler à", english: "To talk to", pronunciation: "/paʁ.le a/", example: "Je parle à Marie." }
  ],
  grammar: [
    {
      title: "Indirect Object Pronouns (lui, leur)",
      explanation: "'Lui' (to him/her), 'leur' (to them) replace 'à + person'. Place BEFORE the verb. Me, te, nous, vous can be both direct and indirect.",
      examples: [
        { french: "Je parle à Marie. → Je lui parle.", english: "I talk to Marie. → I talk to her." },
        { french: "Il donne le livre à Paul. → Il lui donne le livre.", english: "He gives the book to Paul. → He gives him the book." },
        { french: "Nous parlons aux enfants. → Nous leur parlons.", english: "We talk to the children. → We talk to them." },
        { french: "Je téléphone à mes parents. → Je leur téléphone.", english: "I call my parents. → I call them." }
      ]
    },
    {
      title: "Common Verbs with Indirect Objects",
      explanation: "These verbs use 'à + person': parler à, téléphoner à, écrire à, donner à, dire à, demander à, offrir à, répondre à.",
      examples: [
        { french: "Je lui écris une lettre.", english: "I write him/her a letter." },
        { french: "Elle leur donne des conseils.", english: "She gives them advice." },
        { french: "Tu lui as répondu?", english: "Did you answer him/her?" },
        { french: "Nous allons leur offrir un cadeau.", english: "We're going to give them a gift." }
      ]
    }
  ],
  dialogue: [
    { speaker: "Lucie", text: "Tu as parlé à Sophie récemment?", translation: "Have you talked to Sophie recently?" },
    { speaker: "Thomas", text: "Oui, je lui ai téléphoné hier.", translation: "Yes, I called her yesterday." },
    { speaker: "Lucie", text: "Comment va-t-elle?", translation: "How is she?" },
    { speaker: "Thomas", text: "Elle va bien. Je lui ai raconté notre projet.", translation: "She's doing well. I told her about our project." },
    { speaker: "Lucie", text: "Et qu'est-ce qu'elle a dit?", translation: "And what did she say?" },
    { speaker: "Thomas", text: "Elle trouve l'idée géniale ! Elle veut nous aider.", translation: "She thinks the idea is great! She wants to help us." },
    { speaker: "Lucie", text: "Super ! On devrait lui envoyer les détails.", translation: "Great! We should send her the details." },
    { speaker: "Thomas", text: "Bonne idée. Je vais lui écrire un email ce soir.", translation: "Good idea. I'm going to write her an email tonight." }
  ],
  exercises: [
    {
      instruction: "Replace the indirect object with 'lui' or 'leur'.",
      type: "fill-in-blank",
      questions: [
        { question: "Je parle à Marie. → Je ___ parle.", answer: "lui" },
        { question: "Il téléphone à ses parents. → Il ___ téléphone.", answer: "leur" },
        { question: "Nous donnons le livre à Paul. → Nous ___ donnons le livre.", answer: "lui" }
      ]
    },
    {
      instruction: "Choose the correct indirect object pronoun.",
      type: "multiple-choice",
      questions: [
        { question: "J'écris à mon ami. → Je ___ écris.", options: ["le", "lui", "les"], answer: "lui" },
        { question: "Elle parle aux enfants. → Elle ___ parle.", options: ["les", "lui", "leur"], answer: "leur" },
        { question: "Tu téléphones à ta mère? → Tu ___ téléphones?", options: ["la", "lui", "le"], answer: "lui" }
      ]
    },
    {
      instruction: "Translate to French using indirect object pronouns.",
      type: "translation",
      questions: [
        { question: "I talk to her every day.", answer: "Je lui parle tous les jours." },
        { question: "He gave them a gift.", answer: "Il leur a donné un cadeau." },
        { question: "We're going to write to him.", answer: "Nous allons lui écrire." }
      ]
    }
  ]
};

// Pre-generated Content for Unit 19
const UNIT_19_CONTENT: UnitContent = {
  title: "L'Environnement",
  subtitle: "The Environment",
  level: UnitLevel.A2,
  introduction: "Let's talk about our planet! This unit covers environmental vocabulary, how to discuss nature and pollution, and introduces the simple future tense for making predictions and talking about what will happen.",
  culturalNote: "France is committed to environmental protection. Many cities have excellent recycling programs, bike-sharing systems ('Vélib' in Paris), and there's a strong movement toward organic ('bio') products. France banned single-use plastic bags in 2016.",
  vocabulary: [
    { french: "L'environnement", english: "Environment", pronunciation: "/ɑ̃.vi.ʁɔn.mɑ̃/", example: "Protégeons l'environnement." },
    { french: "La nature", english: "Nature", pronunciation: "/na.tyʁ/", example: "J'aime la nature." },
    { french: "La pollution", english: "Pollution", pronunciation: "/pɔ.ly.sjɔ̃/", example: "La pollution est un problème." },
    { french: "Recycler", english: "To recycle", pronunciation: "/ʁə.si.kle/", example: "Je recycle le plastique." },
    { french: "Protéger", english: "To protect", pronunciation: "/pʁɔ.te.ʒe/", example: "Nous devons protéger la planète." },
    { french: "L'arbre", english: "Tree", pronunciation: "/aʁbʁ/", example: "Plantons des arbres." },
    { french: "La forêt", english: "Forest", pronunciation: "/fɔ.ʁɛ/", example: "La forêt amazonienne." },
    { french: "Économiser", english: "To save/conserve", pronunciation: "/e.kɔ.nɔ.mi.ze/", example: "Économisez l'eau." },
    { french: "Le réchauffement climatique", english: "Global warming", pronunciation: "/ʁe.ʃo.fmɑ̃ kli.ma.tik/", example: "Le réchauffement climatique est grave." },
    { french: "Durable", english: "Sustainable", pronunciation: "/dy.ʁabl/", example: "Le développement durable." }
  ],
  grammar: [
    {
      title: "Simple Future Tense (Le Futur Simple)",
      explanation: "For most verbs: infinitive + endings -ai, -as, -a, -ons, -ez, -ont. For -re verbs, drop the final 'e' first. Some verbs are irregular.",
      examples: [
        { french: "Je parlerai", english: "I will speak" },
        { french: "Tu finiras", english: "You will finish" },
        { french: "Il vendra", english: "He will sell (vendre → vendr-)" },
        { french: "Nous mangerons", english: "We will eat" },
        { french: "Vous choisirez", english: "You will choose" },
        { french: "Ils attendront", english: "They will wait" }
      ]
    },
    {
      title: "Irregular Future Stems",
      explanation: "Some common verbs have irregular future stems. Memorize these!",
      examples: [
        { french: "être → ser- (je serai)", english: "to be → I will be" },
        { french: "avoir → aur- (j'aurai)", english: "to have → I will have" },
        { french: "aller → ir- (j'irai)", english: "to go → I will go" },
        { french: "faire → fer- (je ferai)", english: "to do → I will do" },
        { french: "pouvoir → pourr- (je pourrai)", english: "to be able → I will be able" },
        { french: "voir → verr- (je verrai)", english: "to see → I will see" }
      ]
    }
  ],
  dialogue: [
    { speaker: "Prof", text: "Que ferons-nous pour protéger l'environnement?", translation: "What will we do to protect the environment?" },
    { speaker: "Élève 1", text: "Nous recyclerons plus et nous utiliserons moins de plastique.", translation: "We will recycle more and we will use less plastic." },
    { speaker: "Prof", text: "Excellent ! Et toi, Marc?", translation: "Excellent! And you, Marc?" },
    { speaker: "Élève 2", text: "Je prendrai mon vélo au lieu de la voiture.", translation: "I will take my bike instead of the car." },
    { speaker: "Prof", text: "Très bien. Que se passera-t-il si nous ne faisons rien?", translation: "Very good. What will happen if we do nothing?" },
    { speaker: "Élève 1", text: "La pollution augmentera et le climat changera encore plus.", translation: "Pollution will increase and the climate will change even more." },
    { speaker: "Prof", text: "Exactement. Nous devons agir maintenant pour l'avenir.", translation: "Exactly. We must act now for the future." }
  ],
  exercises: [
    {
      instruction: "Conjugate the verbs in the simple future.",
      type: "fill-in-blank",
      questions: [
        { question: "Demain, je ___ (recycler) le plastique.", answer: "recyclerai" },
        { question: "Nous ___ (protéger) la nature.", answer: "protégerons" },
        { question: "Ils ___ (économiser) l'eau.", answer: "économiseront" }
      ]
    },
    {
      instruction: "Choose the correct irregular future form.",
      type: "multiple-choice",
      questions: [
        { question: "Je ___ (être) plus écologique.", options: ["serai", "êtreai", "suis"], answer: "serai" },
        { question: "Tu ___ (avoir) un vélo électrique.", options: ["auras", "avoiras", "as"], answer: "auras" },
        { question: "Nous ___ (faire) attention.", options: ["faisonons", "ferons", "faisons"], answer: "ferons" }
      ]
    },
    {
      instruction: "Translate to French using the simple future.",
      type: "translation",
      questions: [
        { question: "I will recycle more.", answer: "Je recyclerai plus." },
        { question: "We will protect the environment.", answer: "Nous protégerons l'environnement." },
        { question: "They will save water.", answer: "Ils économiseront l'eau." }
      ]
    }
  ]
};

// Pre-generated Content for Unit 20
const UNIT_20_CONTENT: UnitContent = {
  title: "Rêves et Hypothèses",
  subtitle: "Dreams and Hypotheses",
  level: UnitLevel.A2,
  introduction: "Congratulations on reaching the final A2 unit! Here we'll explore the conditional mood for expressing wishes, polite requests, and hypothetical situations. Combined with 'si' clauses, you'll be able to dream about the future and imagine different scenarios!",
  culturalNote: "The French often use the conditional to be polite. 'Je voudrais' (I would like) is much more courteous than 'Je veux' (I want). This politeness extends to all areas of French culture - being polite is considered a sign of respect and good upbringing.",
  vocabulary: [
    { french: "Le rêve", english: "Dream", pronunciation: "/ʁɛv/", example: "J'ai un rêve." },
    { french: "Souhaiter", english: "To wish", pronunciation: "/swa.te/", example: "Je souhaite voyager." },
    { french: "Espérer", english: "To hope", pronunciation: "/ɛs.pe.ʁe/", example: "J'espère réussir." },
    { french: "Si", english: "If", pronunciation: "/si/", example: "Si j'étais riche..." },
    { french: "Peut-être", english: "Maybe/perhaps", pronunciation: "/pø.tɛtʁ/", example: "Peut-être qu'il viendra." },
    { french: "La possibilité", english: "Possibility", pronunciation: "/pɔ.si.bi.li.te/", example: "C'est une possibilité." },
    { french: "Imaginer", english: "To imagine", pronunciation: "/i.ma.ʒi.ne/", example: "Imagine que tu es riche." },
    { french: "Réaliser", english: "To achieve/realize", pronunciation: "/ʁe.a.li.ze/", example: "Je veux réaliser mes rêves." },
    { french: "L'avenir", english: "Future", pronunciation: "/av.niʁ/", example: "Pense à l'avenir." },
    { french: "Le souhait", english: "Wish", pronunciation: "/swɛ/", example: "Fais un souhait." }
  ],
  grammar: [
    {
      title: "Conditionnel Présent",
      explanation: "Use the future stem + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient). Used for: polite requests, wishes, hypothetical situations, and advice.",
      examples: [
        { french: "Je voudrais un café.", english: "I would like a coffee. (polite)" },
        { french: "J'aimerais voyager.", english: "I would like to travel. (wish)" },
        { french: "Tu devrais étudier.", english: "You should study. (advice)" },
        { french: "Il pourrait venir.", english: "He could come. (possibility)" },
        { french: "Nous serions heureux.", english: "We would be happy. (hypothetical)" },
        { french: "Vous feriez quoi?", english: "What would you do?" }
      ]
    },
    {
      title: "Si Clauses (Present/Conditional)",
      explanation: "To express hypothetical situations: si + présent, conditionnel. 'Si' becomes 's'' before 'il/ils' but NEVER before other words.",
      examples: [
        { french: "Si j'avais de l'argent, je voyagerais.", english: "If I had money, I would travel." },
        { french: "Si tu étais riche, qu'est-ce que tu ferais?", english: "If you were rich, what would you do?" },
        { french: "S'il faisait beau, nous irions à la plage.", english: "If the weather was nice, we would go to the beach." },
        { french: "Si nous avions le temps, nous visiterions Paris.", english: "If we had time, we would visit Paris." }
      ]
    }
  ],
  dialogue: [
    { speaker: "Emma", text: "Si tu gagnais à la loterie, qu'est-ce que tu ferais?", translation: "If you won the lottery, what would you do?" },
    { speaker: "Louis", text: "Je voyagerais autour du monde ! Et toi?", translation: "I would travel around the world! And you?" },
    { speaker: "Emma", text: "Moi, j'achèterais une grande maison à la campagne.", translation: "Me, I would buy a big house in the countryside." },
    { speaker: "Louis", text: "Tu travaillerais encore?", translation: "Would you still work?" },
    { speaker: "Emma", text: "Non, je ne travaillerais plus. Je passerais mon temps à peindre.", translation: "No, I wouldn't work anymore. I would spend my time painting." },
    { speaker: "Louis", text: "Ce serait merveilleux ! Mais en réalité, nous devons travailler.", translation: "That would be wonderful! But in reality, we have to work." },
    { speaker: "Emma", text: "Oui, mais on peut toujours rêver !", translation: "Yes, but we can always dream!" }
  ],
  exercises: [
    {
      instruction: "Conjugate the verbs in the conditional present.",
      type: "fill-in-blank",
      questions: [
        { question: "Je ___ (aimer) voyager en Asie.", answer: "aimerais" },
        { question: "Nous ___ (pouvoir) vous aider.", answer: "pourrions" },
        { question: "Ils ___ (être) contents.", answer: "seraient" }
      ]
    },
    {
      instruction: "Complete the si clause correctly.",
      type: "multiple-choice",
      questions: [
        { question: "Si j'avais le temps, je ___ plus.", options: ["lirais", "lirai", "lis"], answer: "lirais" },
        { question: "Si tu étais riche, tu ___ quoi?", options: ["ferais", "feras", "fais"], answer: "ferais" },
        { question: "S'il faisait beau, nous ___ dehors.", options: ["mangerions", "mangerons", "mangeons"], answer: "mangerions" }
      ]
    },
    {
      instruction: "Translate to French using the conditional.",
      type: "translation",
      questions: [
        { question: "I would like to travel.", answer: "J'aimerais voyager." },
        { question: "If I had money, I would buy a car.", answer: "Si j'avais de l'argent, j'achèterais une voiture." },
        { question: "Could you help me? (vous form)", answer: "Pourriez-vous m'aider?" }
      ]
    }
  ]
};

export const CURRICULUM: UnitDefinition[] = [
  // Level A1
  { 
    id: 1, 
    title: "Salutations et Présentations", 
    level: UnitLevel.A1, 
    topics: "Greetings, introducing oneself, verb 'être', nationalities",
    content: UNIT_1_CONTENT 
  },
  { 
    id: 2, 
    title: "Ma Famille et Moi", 
    level: UnitLevel.A1, 
    topics: "Family members, possessive adjectives (mon/ma/mes), verb 'avoir'",
    content: UNIT_2_CONTENT
  },
  
  { 
    id: 3, 
    title: "Au Café", 
    level: UnitLevel.A1, 
    topics: "Ordering food, polite phrases (je voudrais), articles indéfinis (un/une/des)",
    content: UNIT_3_CONTENT 
  },
  { 
    id: 4, 
    title: "Les Loisirs et les Goûts", 
    level: UnitLevel.A1, 
    topics: "Hobbies, verbs 'aimer/adorer/détester', definite articles (le/la/les)",
    content: UNIT_4_CONTENT 
  },
  { 
    id: 5, 
    title: "La Ville et les Directions", 
    level: UnitLevel.A1, 
    topics: "Asking for directions, places in town, prepositions (à, chez, en)",
    content: UNIT_5_CONTENT 
  },
  { 
    id: 6, 
    title: "Le Temps et la Météo", 
    level: UnitLevel.A1, 
    topics: "Weather expressions, days of the week, numbers 1-100",
    content: UNIT_6_CONTENT 
  },
  { 
    id: 7, 
    title: "Ma Journée Quotidienne", 
    level: UnitLevel.A1, 
    topics: "Daily routine, reflexive verbs (se lever, se laver), time telling",
    content: UNIT_7_CONTENT 
  },
  { 
    id: 8, 
    title: "Au Marché", 
    level: UnitLevel.A1, 
    topics: "Fruits/vegetables, quantities (beaucoup de, un peu de), partitive articles (du/de la)",
    content: UNIT_8_CONTENT 
  },
  { 
    id: 9, 
    title: "Les Vêtements et la Mode", 
    level: UnitLevel.A1, 
    topics: "Clothing, colors, demonstrative adjectives (ce/cette/ces)",
    content: UNIT_9_CONTENT 
  },
  { 
    id: 10, 
    title: "Projets de Vacances", 
    level: UnitLevel.A1, 
    topics: "Future proche (aller + infinitive), travel vocabulary, seasons",
    content: UNIT_10_CONTENT 
  },
  
  // Level A2
  // Level A2
  { 
    id: 11, 
    title: "Souvenirs d'Enfance", 
    level: UnitLevel.A2, 
    topics: "Imparfait basics, describing the past, childhood games",
    content: UNIT_11_CONTENT 
  },
  { 
    id: 12, 
    title: "Une Histoire Passée", 
    level: UnitLevel.A2, 
    topics: "Passé Composé with 'avoir', irregular past participles, biographical events",
    content: UNIT_12_CONTENT 
  },
  { 
    id: 13, 
    title: "Mouvements et Déplacements", 
    level: UnitLevel.A2, 
    topics: "Passé Composé with 'être', house of être, travel stories",
    content: UNIT_13_CONTENT 
  },
  { 
    id: 14, 
    title: "Chez le Médecin", 
    level: UnitLevel.A2, 
    topics: "Body parts, describing pain, imperative mood for advice",
    content: UNIT_14_CONTENT 
  },
  { 
    id: 15, 
    title: "La Cuisine Française", 
    level: UnitLevel.A2, 
    topics: "Recipes, pronoun 'en', giving instructions, specialized food vocab",
    content: UNIT_15_CONTENT 
  },
  { 
    id: 16, 
    title: "Comparaisons et Choix", 
    level: UnitLevel.A2, 
    topics: "Comparatives and superlatives, making choices, shopping preferences",
    content: UNIT_16_CONTENT 
  },
  { 
    id: 17, 
    title: "Au Travail", 
    level: UnitLevel.A2, 
    topics: "Professions, office vocabulary, direct object pronouns (le/la/les)",
    content: UNIT_17_CONTENT 
  },
  { 
    id: 18, 
    title: "Les Relations Personnelles", 
    level: UnitLevel.A2, 
    topics: "Indirect object pronouns (lui/leur), friendship, personality adjectives",
    content: UNIT_18_CONTENT 
  },
  { 
    id: 19, 
    title: "L'Environnement", 
    level: UnitLevel.A2, 
    topics: "Nature, pollution, simple future tense, making predictions",
    content: UNIT_19_CONTENT 
  },
  { 
    id: 20, 
    title: "Rêves et Hypothèses", 
    level: UnitLevel.A2, 
    topics: "Conditionnel présent (politeness and wishes), if clauses (si + imparfait)",
    content: UNIT_20_CONTENT 
  },
]