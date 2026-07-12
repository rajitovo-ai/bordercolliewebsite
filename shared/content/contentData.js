// Border Collie content data — extracted from 32 research files, 242 sources
// All content in Dutch, scientifically sourced

export const siteConfig = {
  title: "Border Collie — De Complete Gids",
  subtitle: "Wetenschappelijk onderbouwde informatie over 's werelds slimste hondenras",
  tagline: "Van herdershond tot gezinshond — ontdek de waarheid achter de mythen",
};

export const navigation = [
  { label: "Home", path: "/" },
  { label: "Geschiedenis", path: "/geschiedenis" },
  { label: "Intelligentie", path: "/intelligentie" },
  { label: "Werk- vs Showlijn", path: "/lijnen" },
  { label: "3D Vergelijking", path: "/3d-vergelijking" },
  { label: "Mythen", path: "/mythen" },
  { label: "Gezondheid", path: "/gezondheid" },
  { label: "Biologie", path: "/biologie" },
  { label: "Training", path: "/training" },
  { label: "Gedrag", path: "/gedrag" },
  { label: "Vachtkleuren", path: "/vachtkleuren" },
  { label: "Gezinshond", path: "/gezinshond" },
  { label: "Sporten", path: "/sporten" },
  { label: "Puppy", path: "/puppy" },
  { label: "Eigenaarschap", path: "/eigenaarschap" },
  { label: "Rescue", path: "/rescue" },
  { label: "Pop Cultuur", path: "/pop-cultuur" },
  { label: "Bronnen", path: "/bronnen" },
];

// ============ KERNFEITEN ============
export const kernfeiten = [
  { getal: "1.022", label: "Woorden geleerd door Chaser", bron: "Pilley & Reid (2011)" },
  { getal: "13.1", label: "Jaar gemiddelde levensverwachting", bron: "O'Neill et al. (2024)" },
  { getal: "17", label: "AKC-erkende vachtkleuren", bron: "AKC Standard" },
  { getal: "48-56", label: "cm schofthoogte (reu)", bron: "AKC Standard" },
  { getal: "32-48", label: "km/u topsnelheid", bron: "Dogster, Hepper" },
  { getal: "242", label: "Wetenschappelijke bronnen", bron: "Research database" },
];

// ============ GESCHIEDENIS ============
export const geschiedenis = {
  title: "Geschiedenis en Oorsprong",
  intro: "De Border Collie ontstond in de grensstreek tussen Schotland en Engeland. Het ras is afgeleid van landrace collies en werd formeel gedefinieerd in 1906 met de oprichting van de ISDS.",
  timeline: [
    { jaar: "~1700s", gebeurtenis: "Herdershonden gebruikt in Anglo-Scottish border regio" },
    { jaar: "1858", gebeurtenis: "Eerste collie-import naar Nieuw-Zeeland genoteerd" },
    { jaar: "1860", gebeurtenis: "Collies geïntroduceerd in showring → ontwikkeling naar verschillende rassen" },
    { jaar: "1873", gebeurtenis: "Eerste geregistreerde sheepdog trials in Bala, Noord-Wales" },
    { jaar: "1893", gebeurtenis: "Old Hemp geboren in Northumberland — de vader van het ras" },
    { jaar: "1901", gebeurtenis: "Old Hemp overleden; ~200 puppy's verwekt" },
    { jaar: "1906", gebeurtenis: "ISDS opgericht, stamboek geopend → Border Collie als ras gedefinieerd" },
    { jaar: "1915", gebeurtenis: "Term 'border collie' voor het eerst gebruikt door James Reid" },
    { jaar: "1963", gebeurtenis: "Wiston Cap geboren — staat op het ISDS-badge" },
    { jaar: "1995", gebeurtenis: "AKC erkenning (onder protest van werkgroepen)" },
  ],
  oldHemp: {
    naam: "Old Hemp",
    geboren: "September 1893, Northumberland, Engeland",
    overleden: "Mei 1901",
    fokker: "Adam Telfer",
    kleur: "Tricolour (zwart, bruin, wit)",
    betekenis: "Stille, krachtige hond waaraan schapen gemakkelijk gehoorzaamden. Alle hedendaagse zuivergefokte Border Collies kunnen hun afstamming terugleiden naar Old Hemp. ~200 puppy's verwekt.",
  },
  wistonCap: {
    naam: "Wiston Cap",
    geboren: "28 september 1963",
    betekenis: "Staat afgebeeld op het ISDS-badge in de karakteristieke herdershouding. Zijn bloedlijn is te vinden in de meeste moderne collie-bloedlijnen. Verwekte drie Supreme Champions.",
  },
  registraties: [
    { land: "Verenigd Koninkrijk", register: "ISDS + Kennel Club", focus: "ISDS: bewezen werkvermogen; KC: conformatie" },
    { land: "Verenigde Staten", register: "ABCA (~20.000/jaar) + AKC", focus: "ABCA: werkend; AKC: conformatie" },
    { land: "Canada", register: "CBCA", focus: "Herdersafstamming, niet uiterlijk" },
    { land: "Australië", register: "ANC + werkregisters", focus: "ANC: conformatie/performance; werkregisters: werk" },
    { land: "Zuid-Afrika", register: "SASDA", focus: "Werkvermogen" },
  ],
};

// ============ INTELLIGENTIE ============
export const intelligentie = {
  title: "Intelligentie en Cognitie",
  intro: "Border Collies behoren tot de top in specifieke cognitieve domeinen: object-naam leren, inhibitorische controle, sociale cognitie en ruimtelijk probleemoplossend vermogen. Maar intelligentie is niet één dimensie.",
  chaser: {
    naam: "Chaser",
    woorden: 1022,
    trainingstijd: "3 jaar intensieve training",
    vaardigheden: [
      "Begreep dat namen naar objecten verwijzen, onafhankelijk van gedrag",
      "Kon drie commando's combineren met drie namen in willekeurige combinaties",
      "Leerde drie categorie-namen (common nouns)",
      "Kon redeneren door uitsluiting (inferential reasoning by exclusion)",
    ],
    bron: "Pilley & Reid (2011) — Behavioural Processes",
  },
  rico: {
    naam: "Rico",
    woorden: 200,
    vaardigheden: [
      "Kon namen van nieuwe objecten afleiden door uitsluitingsleren",
      "Kon nieuwe objecten onmiddellijk correct ophalen",
      "Herinnerde nieuwe objecten 4 weken later nog correct",
      "Fast mapping — voorheen als uniek menselijk beschouwd",
    ],
    bron: "Kaminski et al. (2004) — Science",
  },
  gFactor: {
    beschrijving: "Arden et al. (2016) toonden aan dat 68 Border Collies een algemene intelligentiefactor (g) delen, vergelijkbaar met mensen. Deze g-factor verklaarde 17% van de variantie in testscores.",
    betekenis: "83% van cognitieve variatie wordt verklaard door training, omgeving en individuele aanleg — niet door ras-intelligentie alleen.",
    bron: "Arden et al. (2016)",
  },
  cognitieveDomeinen: [
    { domein: "Object-naam leren", prestatie: "Exceptioneel (Chaser: 1.022 woorden)", bewijs: "Sterk — meerdere peer-reviewed studies" },
    { domein: "Fast mapping", prestatie: "Aangetoond (Rico)", bewijs: "Sterk — gepubliceerd in Science" },
    { domein: "Inhibitorische controle", prestatie: "Top-scoring ras", bewijs: "Sterk — grootschalige vergelijkende studie" },
    { domein: "Sociale cognitie", prestatie: "Top-scoring ras", bewijs: "Sterk — grootschalige vergelijkende studie" },
    { domein: "Algemene intelligentie (g)", prestatie: "Aanwezig binnen ras", bewijs: "Matig — één studie, één ras" },
    { domein: "Speelsheid", prestatie: "Hoog (vooral GWL-honden)", bewijs: "Matig — vergelijkende studies" },
  ],
  labelLearners: {
    beschrijving: "Fugazza et al. (2025) toonden aan dat label-learner honden (die honderden objectnamen leren) verschillen in drie cognitieve domeinen: interesse in nieuwe objecten, gerichte object-interesse, en inhibitorische vaardigheden.",
    belangrijk: "Slechts een handvol honden wereldwijd zijn label-learners — extreem zeldzaam. De meeste zijn Border Collies, maar niet elke Border Collie is een label-learner.",
    bron: "Fugazza et al. (2025) — Scientific Reports",
  },
};

// ============ WERKLIJN VS SHOWLIJN ============
export const lijnen = {
  title: "Werklijn vs Showlijn",
  intro: "Een van de grootste misvattingen is dat alle Border Collies hetzelfde zijn. In werkelijkheid zijn er minstens twee duidelijk verschillende lijnen met divergerende genetica, uiterlijk en gedrag.",
  vergelijking: [
    { kenmerk: "Fokdoel", werklijn: "Herdersvermogen", showlijn: "Uiterlijke conformiteit" },
    { kenmerk: "Vacht", werklijn: "Korter, functioneel", showlijn: "Langer, dikker, zachter" },
    { kenmerk: "Bouw", werklijn: "Slank, atletisch", showlijn: "Zwaarder, korter poten" },
    { kenmerk: "Herdersinstinct", werklijn: "Zeer sterk", showlijn: "Minder uitgesproken" },
    { kenmerk: "Energie", werklijn: "Zeer hoog", showlijn: "Hoog (maar beheersbaarder)" },
    { kenmerk: "Impulsiviteit", werklijn: "Hoger", showlijn: "Lager" },
    { kenmerk: "Gezinsgeschiktheid", werklijn: "Minder (ervaren eigenaar)", showlijn: "Beter (maar niet voor iedereen)" },
    { kenmerk: "Gezondheid", werklijn: "Werkblessures", showlijn: "NCL-5 risico" },
    { kenmerk: "Prijs (puppy)", werklijn: "$800-$2.000", showlijn: "$1.300-$4.500+" },
    { kenmerk: "Genetica (EPHB1)", werklijn: "Werklijn-specifiek haplotype", showlijn: "Conformatie-haplotype" },
  ],
  epb1: {
    beschrijving: "Jeong et al. (2025) publiceerden in Science Advances een baanbrekende genoomstudie. Haplotypen binnen het EPHB1-gen tonen bewijs van segregatie binnen raslijnen. Een werklijn-specifiek haplotype is geassocieerd met verhoogde chase-bite motorische patronen.",
    genen: [
      { gen: "EPHB1", functie: "Locomotorische hyperactiviteit, ruimtelijk geheugen" },
      { gen: "CD44", functie: "Geheugenbehoud, stemmingstoornissen" },
      { gen: "COL25A1", functie: "Leren" },
      { gen: "RHOT1", functie: "Ruimtelijk geheugen" },
      { gen: "EPHA5", functie: "Sociaal gedrag, agressie, ruimtelijk geheugen" },
      { gen: "PEX5L", functie: "Motorisch leren, coping gedrag" },
      { gen: "IRX2", functie: "Sociale interactie" },
      { gen: "TFAP2B", functie: "Verslavingsgedrag" },
    ],
    bron: "Jeong et al. (2025) — Science Advances",
  },
  barbieCollie: {
    mythe: "Showlijn Border Collies ('Barbie Collies') zijn dommer dan werklijn",
    realiteit: "Niet minder intelligent — ze hebben andere geselecteerde eigenschappen. De genetische divergentie (EPHB1) betreft herdersspecifiek gedrag, niet algemene intelligentie. Showlijn honden presteren uitstekend in agility en obedience.",
  },
};

// ============ MYTHEN ============
export const mythen = [
  {
    mythe: "Border Collies leren alles in 1 seconde",
    realiteit: "Snel ja, maar vereist consistente training. Zelfs Chaser had 3 jaar training.",
    bewijs: "Arden et al. (2016) — g-factor verklaart slechts 17% van variantie",
    status: "DEELS WAAR, MAAR MISLEIDEND",
  },
  {
    mythe: "Border Collies zijn geen gezinshonden",
    realiteit: "In het juiste gezin wel — actief, ervaren, met oudere kinderen.",
    bewijs: "AKC, Purina, PetFindy",
    status: "DEELS WAAR, MAAR TE SIMPEL",
  },
  {
    mythe: "Border Collies hebben alleen werkdrift qua drijven",
    realiteit: "Complex spectrum van driften: herding, prey, play, bond, exploration, food, toy.",
    bewijs: "Jeong et al. (2025) — 24 positief geselecteerde genen",
    status: "ONJUIST",
  },
  {
    mythe: "Alle Border Collies zijn hetzelfde",
    realiteit: "Grote variatie: werklijn vs showlijn (genetisch divergent), individuele cognitieve verschillen, kleurvariatie.",
    bewijs: "Jeong et al. (2025), Arden et al. (2016)",
    status: "ONJUIST",
  },
  {
    mythe: "Border Collies zijn van nature agressief",
    realiteit: "Niet agressief. Herdersinstinct wordt verward met agressie. AKC: 'A Border Collie should never be aggressive.'",
    bewijs: "AKC Standard, Nature Scientific Reports",
    status: "ONJUIST",
  },
  {
    mythe: "Border Collies hebben non-stop beweging nodig",
    realiteit: "Kwaliteit > kwantiteit. Mentale stimulatie even belangrijk als fysiek. 30 min puzzelwerk kan effectiever zijn dan 2 uur lopen.",
    bewijs: "Dentbros Dogs — trainingsbronnen",
    status: "MISLEIDEND",
  },
  {
    mythe: "Border Collies zijn altijd zwart-wit",
    realiteit: "17+ AKC-erkende kleuren, vrijwel alle hondenkleuren mogelijk.",
    bewijs: "AKC, Wikipedia, BubblyPet",
    status: "ONJUIST",
  },
  {
    mythe: "Border Collies zijn goed in appartementen",
    realiteit: "Mogelijk maar niet ideaal. 'Formule 1 auto in het verkeer.'",
    bewijs: "iHeartDogs, LifeAtHerPaw",
    status: "MOGELIJK MAAR NIET IDEAAL",
  },
  {
    mythe: "Border Collies trainen zichzelf",
    realiteit: "Ja, en dat is het probleem! Ze trainen jou als je niet oplet.",
    bewijs: "Dentbros Dogs",
    status: "DEELS WAAR, MAAR GEVAARLIJK",
  },
  {
    mythe: "Showlijn Border Collies zijn minder intelligent",
    realiteit: "Niet dommer, anders gefokt. EPHB1 verschil betreft herdersspecifiek gedrag, niet algemene intelligentie.",
    bewijs: "Jeong et al. (2025), CollieCare",
    status: "ONJUIST",
  },
];

// ============ GEZONDHEID ============
export const gezondheid = {
  title: "Gezondheid en Genetica",
  intro: "Border Collies behoren tot de langstlevende rassen met een levensverwachting van 12,1-13,1 jaar. Ze zijn over het algemeen gezond, maar er zijn genetische aandoeningen om van te weten.",
  levensverwachting: [
    { studie: "UK 2024 (purebred study)", leeftijd: "13,1 jaar", vergelijking: "Boven puurras gemiddelde (12,7)" },
    { studie: "UK 2022 (veterinary records)", leeftijd: "12,1 jaar", vergelijking: "Iets hoger dan kruisingen (11,82)" },
    { studie: "UK Kennel Club 2004", leeftijd: "~11,9 jaar", vergelijking: "Median 143 maanden" },
  ],
  doodsoorzaken: [
    { oorzaak: "Kanker (neoplasie)", percentage: "23,6%" },
    { oorzaak: "Ouderdom", percentage: "17,9%" },
    { oorzaak: "Cerebrovasculaire aandoeningen", percentage: "9,4%" },
  ],
  genetischeZiekten: [
    { ziekte: "Collie Eye Anomaly (CEA)", incidentie: "<2,5%", erfelijkheid: "Recessief", test: "Genetisch" },
    { ziekte: "Heupdysplasie (HD)", incidentie: "<11%", erfelijkheid: "Complex (polygeen)", test: "Röntgen (OFA, PennHIP)" },
    { ziekte: "Epilepsie", incidentie: "<5%", erfelijkheid: "Complex", test: "Neurologisch" },
    { ziekte: "MDR1 mutant", incidentie: "~5%", erfelijkheid: "Recessief", test: "Genetisch" },
    { ziekte: "TNS (Trapped Neutrophil Syndrome)", incidentie: "~4% drager", erfelijkheid: "Recessief", test: "Genetisch" },
    { ziekte: "NCL-5 (Neuronal Ceroid Lipofuscinosis)", incidentie: "~3-5% drager", erfelijkheid: "Recessief", test: "Genetisch" },
    { ziekte: "Border Collie Collapse (BCC)", incidentie: "Onbekend", erfelijkheid: "Complex", test: "Diagnose door uitsluiting" },
    { ziekte: "Early Onset Adult Deafness (EOD)", incidentie: "Onbekend", erfelijkheid: "Vermoedelijk recessief", test: "BAER test" },
  ],
  kanker: [
    { type: "Lymfoom", risico: "2,3x predispositie (B-cell)", details: "Verhoogd risico vergeleken met andere rassen" },
    { type: "Osteosarcoom", risico: "Beschermd ras (OR 0,21)", details: "Border Collies hebben verlaagd risico" },
    { type: "Hepatische neoplasie (leverkanker)", risico: "2,67x meer kans", details: "Hoogste prevalentie van alle rassen" },
  ],
};

// ============ BIOLOGIE ============
export const biologie = {
  title: "Biologie, Anatomie en Fysiologie",
  intro: "Border Collies zijn middelgrote honden met een atletische bouw geoptimaliseerd voor zowel snelheid als uithoudingsvermogen. Hun fysiologie weerspiegelt eeuwen van selectie voor herderswerk.",
  maten: {
    reu: { schofthoogte: "48-56 cm", gewicht: "14-25 kg" },
    teef: { schofthoogte: "46-53 cm", gewicht: "12-19 kg" },
  },
  snelheid: "20-30 mph (32-48 km/u) — kan in sprint meekomen met Usain Bolt",
  bijtkracht: "~200-300 PSI — geoptimaliseerd voor precisie, niet kracht",
  vitaleFuncties: [
    { parameter: "Hartslag", waarde: "80-120 bpm" },
    { parameter: "Ademhaling", waarde: "18-34/min" },
    { parameter: "Lichaamstemperatuur", waarde: "38,3-39,2°C" },
    { parameter: "Slaap volwassen", waarde: "12-14 uur" },
    { parameter: "Slaap puppy", waarde: "18-20 uur" },
    { parameter: "REM slaap", waarde: "~10% van totale slaap" },
    { parameter: "Tanden (volwassen)", waarde: "42" },
    { parameter: "Gehoor frequentie", waarde: "40-60.000 Hz" },
    { parameter: "Reukreceptoren", waarde: "tot 300 miljoen" },
  ],
  spiervezels: [
    { type: "Type I (Slow-twitch)", eigenschap: "Hoge oxidatief, lage glycolytisch", functie: "Uithoudingsvermogen, zuinig" },
    { type: "Type IIA (Fast oxidative)", eigenschap: "Hoge oxidatief + glycolytisch", functie: "Snelheid + uithoudingsvermogen" },
    { type: "Type IIX (Fast glycolytic)", eigenschap: "Laag oxidatief, hoog glycolytisch", functie: "Explosieve kracht, vermoeit snel" },
  ],
  zintuigen: [
    { zintuig: "Gezicht", beschrijving: "Dichromatisch (blauw en geel), extreem bewegingsgevoelig — kan subtiele bewegingen detecteren op honderden meters" },
    { zintuig: "Gehoor", beschrijving: "Frequenties van 40-60.000 Hz, extreem geluidsgevoelig — moet op afstand commando's horen" },
    { zintuig: "Reuk", beschrijving: "Tot 300 miljoen reukreceptoren, overtreft sommige jachthonden in geurdetectie" },
    { zintuig: "Smaak", beschrijving: "~1.700 smaakpapillen, voorkeur voor vlees-smaak" },
    { zintuig: "Tast", beschrijving: "Zeer tactiel gevoelig, whiskers helpen bij ruimtelijke waarneming" },
  ],
};

// ============ TRAINING ============
export const training = {
  title: "Training en Socialisatie",
  intro: "Border Collies vereisen consistente, gestructureerde training vanaf dag 1. Hun intelligentie betekent dat ze méér training nodig hebben, niet minder.",
  principes: [
    { titel: "Positieve versterking", beschrijving: "Beloon gewenst gedrag in plaats van corrigeren. Border Collies zijn gevoelig voor harde correcties — kunnen 'shut down' gaan." },
    { titel: "Mentale stimulatie", beschrijving: "Even belangrijk als fysieke beweging. 30 min puzzelwerk kan effectiever zijn dan 2 uur lopen." },
    { titel: "Consistentie", beschrijving: "Inconsistente training leidt tot verwarring. De hond zal zelf oplossingen bedenken die niet gewenst zijn." },
    { titel: "Vroege socialisatie", beschrijving: "Kritieke periode 3-12 weken. Puppy's moeten verschillende mensen, dieren, omgevingen en geluiden ervaren." },
    { titel: "Off-switch aanleren", beschrijving: "Rustig kunnen zijn is een vaardigheid die aangeleerd moet worden. Niet alleen werken." },
  ],
  kritiekePeriode: {
    periode: "3-12 weken",
    beschrijving: "De kritieke socialisatieperiode. Wat een puppy in deze periode niet leert, is later veel moeilijker aan te leren. Fear onset begint rond 6-8 weken en rasverschillen zijn significant.",
  },
  tips: [
    "Korte, intense trainingssessies (5-10 min) zijn effectiever dan lange sessies",
    "Varieer oefeningen — Border Collies vervelen snel met repetitie",
    "Gebruik speeltjes/ballen als beloning, niet alleen voedsel",
    "Train in verschillende omgevingen voor generalisatie",
    "Leer de 'off-switch' — rust is een vaardigheid",
  ],
};

// ============ GEDRAG ============
export const gedrag = {
  title: "Gedrag en Communicatie",
  intro: "Border Collies communiceren primair visueel. De iconische 'eye' — de intense, fixerende blik — is een aangeboren stalking posture afgeleid van jachtgedrag.",
  theEye: {
    beschrijving: "De starende blik is de fixatie-fase van het predatoire motorpatroon. Coppinger et al. (1985) toonden aan dat de stalking posture aangeboren is, niet aangeleerd. Training en ervaring verfijnen de houding, maar creëren hem niet.",
    bron: "Coppinger et al. (1985) — Interspecific Communication in Cooperative Herding",
  },
  lichaamstaal: [
    { signaal: "Lage stalking houding", betekenis: "Fixatie, controle", context: "Herderswerk" },
    { signaal: "Oren naar voren", betekenis: "Aandacht, focus", context: "Observeren" },
    { signaal: "Oren naar achteren", betekenis: "Onderdanigheid, onzekerheid", context: "Sociale interactie" },
    { signaal: "Staart laag", betekenis: "Ontspannen, normaal", context: "Rust" },
    { signaal: "Staart omhoog", betekenis: "Opwinding, alertheid", context: "Werkmodus" },
    { signaal: "Blik afwenden", betekenis: "Kalmeringssignaal", context: "Conflict vermijden" },
  ],
  blaffen: "Blaffen draagt identiteit, context en emotie. Border Collies gebruiken blaffen strategisch tijdens herderswerk en als alarm.",
  herdersfluiten: {
    beschrijving: "Herdersfluiten zijn sterk directioneel: stimulerende commando's (hoog, snel) vs inhibiterende commando's (laag, lang). Dit weerspiegelt geluidssymboliek die universeel begrijpelijk is.",
  },
  kalmeringssignalen: "Rugaas kalmeringssignalen: lip likken, hoofd afwenden, langzaam bewegen, snuffelen aan de grond — allemaal manieren om spanning te verminderen.",
};

// ============ VACHTKLEUREN ============
export const vachtkleuren = {
  title: "Vachtkleuren en Genetica",
  intro: "Border Collies komen in vrijwel elke kleur en patroon die bij honden voorkomt. De AKC herkent 17 standaardkleuren. Zwart-wit is meest voorkomend door fokgeschiedenis, niet door rasstandaard beperking.",
  kleuren: [
    { naam: "Zwart-wit", frequentie: "Meest voorkomend", beschrijving: "Klassiek uiterlijk, zwart met witte aftekeningen" },
    { naam: "Zwart tricolour", frequentie: "Veel voorkomend", beschrijving: "Zwart met tan (bruine) aftekeningen" },
    { naam: "Rood en wit", frequentie: "Veel voorkomend", beschrijving: "Rood/chocolate met wit, lever neus" },
    { naam: "Rood tricolour", frequentie: "Minder voorkomend", beschrijving: "Rood met tan en wit" },
    { naam: "Blue merle", frequentie: "Minder voorkomend", beschrijving: "Blauw-grijs met donkere vlekken, heterochromia mogelijk" },
    { naam: "Red merle", frequentie: "Minder voorkomend", beschrijving: "Rood met lichtere en donkere vlekken" },
    { naam: "Blue", frequentie: "Zeldzaam", beschrijving: "Verdund zwart — grijs-blauw" },
    { naam: "Lilac", frequentie: "Zeer zeldzaam", beschrijving: "Verdund chocolate — lila/grijs-roze" },
    { naam: "Brindle", frequentie: "Zeldzaam", beschrijving: "Tijgerachtige strepen" },
    { naam: "Australian red", frequentie: "Zeldzaam", beschrijving: "Recessief rood, geen donkere pigmentatie" },
    { naam: "Sable", frequentie: "Zeldzaam", beschrijving: "Haren met donkere uiteinden op lichtere basis" },
    { naam: "Enkele kleur", frequentie: "Zeer zeldzaam", beschrijving: "Zonder witte aftekeningen" },
  ],
  merle: {
    beschrijving: "Merle is een onvolledig dominant gen dat vlekkerige patronen veroorzaakt. Dubbele merle (twee merle honden kruisen) kan leiden tot doofheid, blindheid en oogafwijkingen. Fokadvies: nooit twee merle honden kruisen.",
  },
  vachttypen: [
    { type: "Smooth", beschrijving: "Kort over hele lichaam, dubbele vacht" },
    { type: "Medium", beschrijving: "Middellang, meest voorkomend" },
    { type: "Rough", beschrijving: "Lang met overvloedige bevedering (manen, broek, staart)" },
  ],
  oogkleur: "Bruin meest voorkomend. Heterochromia (verschillende oogkleuren) komt voor, vooral bij merles. KC standaard: ogen bruin, behalve bij merles waar één of beide blauw kunnen zijn.",
};

// ============ GEZINSHOND ============
export const gezinshond = {
  title: "Geschiktheid als Gezinshond",
  intro: "Border Collies kúnnen uitstekende gezinshonden zijn — maar alleen in het juiste gezin. Ze zijn niet de 'typische' gezinshond zoals een Labrador of Golden Retriever.",
  geschikt: [
    "Actieve gezinnen met oudere, goed opgevoede kinderen",
    "Ervaren hondeneigenaren",
    "Gezinnen die betrokken willen zijn bij training en hondensporten",
    "Mensen die thuiswerken of flexibele uren hebben",
    "Gezinnen met een grote tuin of toegang tot open ruimtes",
  ],
  nietGeschikt: [
    "Eerste keer hondeneigenaren",
    "Gezinnen met zeer jonge kinderen (peuters/toddlers)",
    "Sedentaire gezinnen",
    "Mensen die regelmatig lange uren buitenshuis werken",
    "Appartementbewoners zonder dagelijkse toegang tot open ruimtes",
    "Mensen die een 'makkelijke, relaxte' hond willen",
  ],
  showlijnVsWerklijn: {
    showlijn: "Beter geschikt — compijanter, kalmer, leerbaarder. Minder uitgesproken herdersinstinct.",
    werklijn: "Minder geschikt zonder herdersdoel. Sterk herdersinstinct kan leiden tot nipping bij kinderen. Veel fokkers beperken verkoop tot werkende eigenaren.",
  },
};

// ============ HONDENSPORTEN ============
export const sporten = {
  title: "Hondensporten en Werkrollen",
  intro: "Border Collies domineren vele hondensporten en hebben werkrollen ver voorbij herderswerk: luchthaven wildlife management, service dogs, therapy, dock diving en meer.",
  prestaties: [
    { sport: "Westminster Agility", prestatie: "10 van 13 titels gewonnen door Border Collies" },
    { sport: "Sheepdog trials", prestatie: "Dominant sinds 1873" },
    { sport: "Agility", prestatie: "Top ras wereldwijd" },
    { sport: "Flyball", prestatie: "Uitstekend door snelheid en trainbaarheid" },
    { sport: "Disc dog", prestatie: "Natuurlijk talent door prooidrift en vangvaardigheid" },
  ],
  werkrollen: [
    { rol: "Luchthaven wildlife management", details: "YVR (Vancouver), RSW (Fort Myers), Dover AFB — verjagen vogels zonder schade" },
    { rol: "Service dogs", details: "PTSD ondersteuning, medical alert, mobiliteitshulp" },
    { rol: "Therapy dogs", details: "Ziekenhuizen, scholen, bejaardentehuizen" },
    { rol: "Dock diving", prestatie: "Competitief in dock jumping/dock diving" },
    { rol: "Zoek- en reddingswerk", details: "Bergredding in Groot-Brittannië vanwege reukvermogen" },
    { rol: "Conservation work", details: "Wildlife monitoring en bescherming" },
  ],
};

// ============ PUPPY ============
export const puppy = {
  title: "Puppy Ontwikkeling en Persoonlijkheid",
  intro: "De eerste weken van een Border Collie puppy bepalen veel van hun latere karakter. De kritieke socialisatieperiode (3-12 weken) is cruciaal.",
  fases: [
    { periode: "0-2 weken", fase: "Neonataal", beschrijving: "Blind en doof, volledig afhankelijk van moeder. Early Neurological Stimulation (ENS) kan hier starten." },
    { periode: "2-3 weken", fase: "Transitie", beschrijving: "Ogen en oren openen, eerste stappen, begin van sociale interactie" },
    { periode: "3-12 weken", fase: "Kritieke socialisatie", beschrijving: "Belangrijkste periode. Puppy's moeten verschillende mensen, dieren, omgevingen en geluiden ervaren. Fear onset begint rond 6-8 weken." },
    { periode: "3-6 maanden", fase: "Jongvolwassen", beschrijving: "Snelle leerfase, veel energie. Basistraining en socialisatie voortzetten." },
    { periode: "6-12 maanden", fase: "Adolescentie", beschrijving: "Fratkin studie: angst/agressie nemen toe in deze periode. Geen sekseverschillen in ontwikkeling." },
    { periode: "12-18 maanden", fase: "Volwassen wordend", beschrijving: "Fysiek volwassen, mentaal nog ontwikkelend. Consistente training blijft belangrijk." },
  ],
  ens: {
    beschrijving: "Early Neurological Stimulation (ENS) omvat 5 korte oefeningen van 3-5 seconden per dag tijdens de neonatale periode. Onderzoek suggereert verbeterde stressbestendigheid en gezondheid.",
  },
};

// ============ EIGENAARSCHAP ============
export const eigenaarschap = {
  title: "Praktisch Eigenaarschap",
  intro: "Border Collies zijn 'high maintenance' honden. Kennis van kosten, verzorging en dagelijkse behoeften is essentieel voor een gelukkige relatie.",
  kosten: {
    jaarlijks: "$1,800-$2,800 (VS) / £1,200-£2,500 (UK)",
    levenslang: "$23,400-$36,400 (13 jaar, exclusief aanschaf en emergencies)",
    posten: [
      { categorie: "Dierenarts (routine)", bedrag: "$750/jaar" },
      { categorie: "Voeding", bedrag: "$700/jaar" },
      { categorie: "Grooming", bedrag: "$350/jaar" },
      { categorie: "Training", bedrag: "$80-$200/jaar" },
      { categorie: "Verzekering", bedrag: "$300-$600/jaar" },
    ],
  },
  beweging: "90-120 minuten dagelijks fysieke beweging (rennen, niet alleen wandelen) + mentale stimulatie",
  recall: "Recall training is de grootste uitdaging voor Border Collie eigenaren. Prooidrift kan ze naar verkeer of wild doen jagen. Lange-lijn training essentieel.",
  appartement: "Mogelijk maar niet ideaal. 'Formule 1 auto in het verkeer.' Vereist extreme toewijding: 3+ dagelijkse buitenactiviteiten en aanzienlijke mentale stimulatie binnenshuis.",
  multiPet: "Over het algemeen goed met andere huisdieren als goed gesocialiseerd. Katten kunnen een uitdaging zijn door prooidrift. Vermijden overwegend witte honden niet (ongefundeerd bijgeloof).",
  verharing: "Seizoensuitval (coat blow) 2x/jaar — massale verharing in lente en herfst. Dubbele vacht: onderlaag isoleert, buitenlaag beschermt. NIET scheren — verstoort thermoregulatie.",
};

// ============ RESCUE ============
export const rescue = {
  title: "Rescue en Adoptie",
  intro: "Border Collies komen vaak in rescue terecht door onverwachte energie- en trainingsbehoeften. Adoptie kan een geweldige optie zijn voor de juiste eigenaar.",
  redenen: [
    "Onderschatting van energie- en trainingsbehoeften",
    "Herdersgedrag naar kinderen (nipping)",
    "Geluidsfobieën (onweer, vuurwerk)",
    "Verhuizing of verandering in gezinssituatie",
    "Gedragsproblemen door te late socialisatie",
  ],
  voordelen: [
    "Volwassen honden hebben bekend temperament",
    "Rescue organisaties screenen op geschiktheid",
    "Vaak al basisgetraind en gesocialiseerd",
    "Je redt een leven",
  ],
  battersea: "Battersea observaties: Border Collies worden vaak afgestaan wegens gedragsproblemen die voorkomen hadden kunnen worden met juiste training en socialisatie.",
};

// ============ POP CULTUUR ============
export const popCultuur = {
  title: "Pop Cultuur en Ethiek",
  intro: "Border Collies in media, crossbreeds, en ethische kwesties rondom het ras.",
  bekendeBCs: [
    { naam: "Babe (film)", rol: "Fly & Rex — herdershonden in de film Babe (1995). Geen realistische weergave van alle Border Collies." },
    { naam: "Lassie", rol: "Lassie is NIET een Border Collie — het is een Rough Collie, een ander ras." },
    { naam: "Chaser", rol: "De hond met 1.022 woorden — verscheen in meerdere media" },
  ],
  bordoodles: "Bordoodles (Border Collie × Poodle) zijn populair maar controversieel. Kruising garandeert niet de beste eigenschappen van beide rassen. Geen voorspelbaar temperament.",
  puppyMills: "Puppy mills zijn een serieus probleem. Koop alleen van erkende fokkers die gezondheidstesten doen en werklijn-fokkers die puppy's alleen aan werkende eigenaren verkopen.",
  staartcouperen: "Staartcouperen is NIET standaard voor Border Collies. De AKC standaard vermeldt geen couperen. In veel landen is het verboden.",
  rawFeeding: "Raw feeding debat: geen wetenschappelijk consensus over superieure gezondheidsuitkomsten. Wel risico op bacteriële contaminatie. Raadpleeg dierenarts.",
};

// ============ BRONNEN ============
export const bronnen = {
  title: "Bronnen en Referenties",
  intro: "Deze website is gebaseerd op 242 bronnen, waaronder 40+ peer-reviewed wetenschappelijke studies, rasorganisaties (AKC, ABCA, ISDS, FCI), veterinaire bronnen en ervaringsbronnen.",
  categorien: [
    { type: "Peer-reviewed wetenschappelijke studies", aantal: "40+", betrouwbaarheid: "Hoog" },
    { type: "Encyclopedieën (Wikipedia, Britannica)", aantal: "6", betrouwbaarheid: "Matig-Hoog" },
    { type: "Rasorganisaties (AKC, ABCA, ISDS, FCI)", aantal: "10", betrouwbaarheid: "Hoog" },
    { type: "Veterinaire bronnen", aantal: "10", betrouwbaarheid: "Hoog" },
    { type: "Ervaringsbronnen (fokkers, trainers, eigenaren)", aantal: "25+", betrouwbaarheid: "Variabel" },
    { type: "Rescue organisaties", aantal: "3", betrouwbaarheid: "Hoog" },
    { type: "Historische/museum bronnen", aantal: "5", betrouwbaarheid: "Hoog" },
  ],
  belangrijkeStudies: [
    { studie: "Jeong et al. (2025)", titel: "Genomic evidence for behavioral adaptation of herding dogs", bron: "Science Advances" },
    { studie: "Pilley & Reid (2011)", titel: "Border collie comprehends object names as verbal referents", bron: "Behavioural Processes" },
    { studie: "Kaminski et al. (2004)", titel: "Word Learning in a Domestic Dog: Evidence for Fast Mapping", bron: "Science" },
    { studie: "Arden et al. (2016)", titel: "A general intelligence factor in dogs", bron: "g-factor study" },
    { studie: "Bognár et al. (2022)", titel: "Breed differences in social cognition, inhibitory control", bron: "Scientific Reports" },
    { studie: "Fugazza et al. (2025)", titel: "What makes a dog a label-learner", bron: "Scientific Reports" },
    { studie: "Coppinger et al. (1985)", titel: "Interspecific Communication in Cooperative Herding", bron: "Herding behavior study" },
    { studie: "O'Neill et al. (2024)", titel: "UK purebred longevity study", bron: "Veterinary Records" },
  ],
};
