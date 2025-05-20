import type {
  ProverbsVerse,
  LinguisticTerm,
  SemanticNetworkData,
  NarrativeStage,
  TeachingStyle,
  SabreModel,
  LearningPlanSession,
  CharacterCase,
  Psalm8Connection
} from '@/types/proverbs-types';

export const proverbs1RVR60: ProverbsVerse[] = [
  { verseNumber: 1, text: "Los proverbios de Salomón, hijo de David, rey de Israel." },
  { verseNumber: 2, text: "Para conocer la sabiduría y la doctrina, para conocer las razones prudentes," },
  { verseNumber: 3, text: "para recibir el consejo de prudencia, justicia, juicio y equidad;" },
  { verseNumber: 4, text: "para dar sagacidad a los simples, e inteligencia y cordura a los jóvenes." },
  { verseNumber: 5, text: "Oirá el sabio, y aumentará el saber; y el entendido adquirirá consejo," },
  { verseNumber: 6, text: "para entender proverbios y declaración, palabras de sabios, y sus dichos profundos." },
  { verseNumber: 7, text: "El principio de la sabiduría es el temor de Jehová; los insensatos desprecian la sabiduría y la enseñanza." },
  { verseNumber: 8, text: "Oye, hijo mío, la instrucción de tu padre, y no desprecies la dirección de tu madre;" },
  { verseNumber: 9, text: "porque adorno de gracia serán a tu cabeza, y collares a tu cuello." },
  { verseNumber: 10, text: "Hijo mío, si los pecadores te quisieren engañar, no consientas." },
  { verseNumber: 11, text: "Si dijeren: Ven con nosotros; pongamos asechanzas para derramar sangre; acechemos sin motivo al inocente;" },
  { verseNumber: 12, text: "los tragaremos vivos como el Seol, y enteros, como los que caen al abismo;" },
  { verseNumber: 13, text: "hallaremos riquezas de toda clase; llenaremos nuestras casas de despojos;" },
  { verseNumber: 14, text: "echa tu suerte entre nosotros; tengamos todos una bolsa." },
  { verseNumber: 15, text: "Hijo mío, no vayas en camino con ellos. Aparta tu pie de sus veredas," },
  { verseNumber: 16, text: "porque sus pies corren al mal, y se apresuran para derramar sangre." },
  { verseNumber: 17, text: "Porque en vano se tenderá la red ante los ojos de toda ave;" },
  { verseNumber: 18, text: "pero ellos a su propia sangre ponen asechanzas, y a sus almas tienden lazo." },
  { verseNumber: 19, text: "Tales son las sendas de todo el que es dado a la codicia, la cual quita la vida de sus poseedores." },
  { verseNumber: 20, text: "La sabiduría clama en las calles, alza su voz en las plazas;" },
  { verseNumber: 21, text: "clama en los principales lugares de reunión; en las entradas de las puertas de la ciudad dice sus razones." },
  { verseNumber: 22, text: "¿Hasta cuándo, oh simples, amaréis la simpleza, y los burladores desearán el burlar, y los insensatos aborrecerán la ciencia?" },
  { verseNumber: 23, text: "Volveos a mi reprensión; he aquí yo derramaré mi espíritu sobre vosotros, y os haré saber mis palabras." },
  { verseNumber: 24, text: "Por cuanto llamé, y no quisisteis oír, extendí mi mano, y no hubo quien atendiese," },
  { verseNumber: 25, text: "sino que desechaste todo consejo mío, y mi reprensión no quisiste," },
  { verseNumber: 26, text: "también yo me reiré en vuestra calamidad, y me burlaré cuando viniere vuestro temor;" },
  { verseNumber: 27, text: "cuando viniere como una tempestad vuestro temor, y vuestra calamidad llegare como un torbellino; cuando sobre vosotros viniere tribulación y angustia." },
  { verseNumber: 28, text: "Entonces me llamarán, y no responderé; me buscarán de mañana, y no me hallarán." },
  { verseNumber: 29, text: "Por cuanto aborrecieron la sabiduría, y no escogieron el temor de Jehová," },
  { verseNumber: 30, text: "ni quisieron mi consejo, y menospreciaron toda reprensión mía," },
  { verseNumber: 31, text: "comerán del fruto de su camino, y serán hastiados de sus propios consejos." },
  { verseNumber: 32, text: "Porque el desvío de los ignorantes los matará, y la prosperidad de los necios los echará a perder." },
  { verseNumber: 33, text: "Mas el que me oyere, habitará confiadamente y vivirá tranquilo, sin temor del mal." }
];

export const keyLinguisticTerms: LinguisticTerm[] = [
  { termEs: "Sabiduría", termHe: "חָכְמָה", termHeTranslit: "ḥokmāh", strongHe: "H2451", termGr: "σοφία", termGrTranslit: "sophia", strongGr: "G4678", description: "Habilidad, destreza, buen juicio, conocimiento práctico y moral." },
  { termEs: "Temor de Jehová", termHe: "יִרְאַת יְהוָה", termHeTranslit: "yirʾat YHWH", strongHe: "H3374 + H3068", description: "Reverencia y obediencia a Dios, fundamento de la sabiduría." },
  { termEs: "Prudencia", termHe: "עָרְמָה", termHeTranslit: "ʿormāh", strongHe: "H6195", termGr: "πανοῦργος", termGrTranslit: "panourgos (adj.)", strongGr: "G3835", description: "Astucia (puede ser positiva o negativa), sagacidad, cautela." },
  { termEs: "Instrucción", termHe: "מוּסָר", termHeTranslit: "mûsār", strongHe: "H4148", termGr: "παιδεία", termGrTranslit: "paideia", strongGr: "G3809", description: "Disciplina, corrección, enseñanza moral." },
  { termEs: "Codicia", termHe: "בֶּצַע", termHeTranslit: "beṣaʿ", strongHe: "H1215", termGr: "πλεονεξία", termGrTranslit: "pleonexia", strongGr: "G4124", description: "Ganancia injusta, avaricia." },
  { termEs: "Simpleza", termHe: "פְּתִי", termHeTranslit: "petî", strongHe: "H6612", description: "Ingenuidad, falta de discernimiento, persona crédula o inexperta." },
  { termEs: "Calamidad", termHe: "אֵיד", termHeTranslit: "ʾêḏ", strongHe: "H343", description: "Desastre, ruina, adversidad repentina." },
  { termEs: "Consejo", termHe: "עֵצָה", termHeTranslit: "ʿēṣāh", strongHe: "H6098", termGr: "βουλή", termGrTranslit: "boulē", strongGr: "G1012", description: "Plan, propósito, guía, deliberación." },
];

export const semanticNetworkData: SemanticNetworkData = {
  nodes: [
    { id: "entender", label: "Entender", description: "Comprender la sabiduría y doctrina (v. 2), implica un proceso cognitivo profundo de asimilación (proverbios, dichos profundos, v. 6)." },
    { id: "conocer", label: "Conocer", description: "Adquirir conocimiento práctico de razones prudentes (v. 2), enfocado en la aplicación ética." },
    { id: "recibir", label: "Recibir", description: "Aceptar activamente el consejo de prudencia, justicia, juicio y equidad (v. 3), requiere humildad y disposición." },
    { id: "dar", label: "Dar", description: "Transmitir sagacidad a los simples e inteligencia y cordura a los jóvenes (v. 4), refleja enseñanza y mentoría." },
    { id: "sabiduria", label: "Sabiduría", description: "Don divino, personificada (v. 20-23), fundamentada en el temor de Jehová (v. 7)." },
    { id: "temor_de_jehova", label: "Temor de Jehová", description: "Principio ético y espiritual (v. 7, 29)." },
    { id: "instruccion", label: "Instrucción", description: "Consejo de padres (v. 8-9) y sabios, opuesta a la insensatez (v. 7)." },
    { id: "codicia", label: "Codicia", description: "Tentación de los pecadores (v. 10-19), lleva a la calamidad (v. 26-27)." },
    { id: "sabio", label: "Sabio", description: "Aumenta el saber (v. 5)." },
    { id: "joven", label: "Joven", description: "Recibe inteligencia y cordura (v. 4, 8)." },
    { id: "simple", label: "Sencillo", description: "Necesita sagacidad (v. 4, 22)." },
    { id: "insensato", label: "Insensato", description: "Rechaza la sabiduría (v. 7, 22, 29)." },
    { id: "seguridad", label: "Seguridad", description: "Para los que oyen (v. 33)." },
    { id: "calamidad", label: "Calamidad", description: "Para los que rechazan (v. 26-31)." },
    { id: "plazas_ciudad", label: "Plazas/Ciudad", description: "Espacio de enseñanza pública (v. 20-21)." },
    { id: "prudencia_justicia", label: "Prudencia/Justicia" },
    { id: "consejo", label: "Consejo" }
  ],
  edges: [
    { from: "entender", to: "sabiduria", label: "requiere reverencia" },
    { from: "sabiduria", to: "temor_de_jehova" },
    { from: "temor_de_jehova", to: "instruccion" },
    { from: "conocer", to: "prudencia_justicia", label: "desarrolla virtudes éticas" },
    { from: "prudencia_justicia", to: "instruccion" },
    { from: "recibir", to: "consejo", label: "fortalece aprendizaje" },
    { from: "consejo", to: "sabio" },
    { from: "sabio", to: "seguridad" },
    { from: "dar", to: "joven" },
    { from: "dar", to: "simple" },
    { from: "joven", to: "instruccion" },
    { from: "simple", to: "instruccion" },
    { from: "instruccion", to: "codicia", label: "elección entre" },
    { from: "codicia", to: "insensato" },
    { from: "insensato", to: "calamidad" },
    { from: "sabiduria", to: "plazas_ciudad" },
    { from: "sabiduria", to: "seguridad", label: "aceptarla lleva a" },
    { from: "sabiduria", to: "calamidad", label: "rechazarla lleva a" }
  ],
  visualizationText: `
[Entender] → [Sabiduría] ↔ [Temor de Jehová] → [Instrucción]
[Conocer] → [Prudencia/Justicia] ↔ [Instrucción]
[Recibir] → [Consejo] ↔ [Sabio] ↔ [Seguridad]
[Dar] → [Joven/Simple] ↔ [Instrucción]
[Instrucción] ↔ [Codicia] → [Insensato] → [Calamidad]
[Sabiduría] → [Plazas/Ciudad]
  `
};

export const narrativeArcData: NarrativeStage[] = [
  { title: "Exposición", verses: "v. 1-6", description: "Salomón presenta los propósitos de los proverbios: Entender sabiduría, Conocer razones prudentes, Recibir consejo, y Dar sagacidad/inteligencia a simples y jóvenes. Definir audiencias (sabios, jóvenes, simples).", nodes: ["Entender", "Conocer", "Recibir", "Dar", "Sabiduría", "Joven", "Simple"], function: "Establece el marco de aprendizaje y las metas éticas." },
  { title: "Incidente Incitador", verses: "v. 7-9", description: "El temor de Jehová como principio de la sabiduría introduce la elección moral. La instrucción paterna (v. 8-9) urge Recibir consejo, contrastando con los insensatos que lo desprecian.", nodes: ["Recibir", "Instrucción", "Temor de Jehová", "Insensato"], function: "Inicia el conflicto entre aceptar o rechazar la sabiduría." },
  { title: "Acción Ascendente", verses: "v. 10-19", description: "Los pecadores tientan al joven con codicia (riquezas fáciles, v. 13-14). La advertencia paterna refuerza Conocer el peligro y no seguir ese camino, comparando a los pecadores con aves atrapadas (v. 17).", nodes: ["Conocer", "Codicia", "Instrucción", "Calamidad"], function: "Intensifica la tentación y la necesidad de discernimiento." },
  { title: "Clímax", verses: "v. 20-27", description: "La sabiduría personificada clama en las plazas, urgiendo Entender su reprensión. Los simples, burladores e insensatos la rechazan, enfrentando calamidad (tormenta, v. 27).", nodes: ["Entender", "Sabiduría", "Plazas", "Insensato", "Calamidad"], function: "Punto álgido donde la elección es crítica." },
  { title: "Acción Descendente", verses: "v. 28-32", description: "Los que rechazan la sabiduría buscan ayuda en vano (v. 28), comiendo el fruto de su insensatez. La codicia y la prosperidad necesitan los destruyen.", nodes: ["Insensato", "Calamidad", "Codicia"], function: "Muestra las consecuencias del rechazo." },
  { title: "Resolución", verses: "v. 33", description: "Quien Recibe la sabiduría vive seguro, sin temor. La enseñanza Da esperanza a los obedientes.", nodes: ["Recibir", "Dar", "Sabiduría", "Seguridad"], function: "Cierra con una promesa de bendición." }
];

export const teachingStylesData: TeachingStyle[] = [
  { name: "Didáctico/Directivo", verses: "v. 1-6, 8-9", description: "Salomón y los padres imparten instrucción explícita (consejos, proverbios).", evidence: "“Oye, hijo mío, la instrucción de tu padre” (v. 8).", application: "Lecciones estructuradas para transmitir sabiduría." },
  { name: "Advertencia/Narrativo", verses: "v. 10-19", description: "Usa una narrativa hipotética (pecadores tentando al joven) para anunciar sobre la codicia.", evidence: "“Si dijeren: Ven con nosotros” (v. 11).", application: "Historias para ilustrar consecuencias." },
  { name: "Personificación/Dramático", verses: "v. 20-27", description: "La sabiduría personificada clama, creando un diálogo emocional.", evidence: "“La sabiduría clama en las calles” (v. 20).", application: "Dramatización para captar atención." },
  { name: "Reflexivo/Contrastivo", verses: "v.7, 22-33", description: "Contrasta sabios e insensatos, invitando a reflexionar sobre elecciones.", evidence: "“¿Hasta cuándo, oh simples, amaréis la simpleza?” (v. 22).", application: "Preguntas retóricas para autoevaluación." },
  { name: "Comunal/Público", verses: "v. 20-21", description: "La sabiduría enseña en plazas, accesible a todos.", evidence: "“Alza su voz en las plazas” (v. 20).", application: "Aprendizaje social en comunidad." }
];

export const sabreModelData: SabreModel = {
  phases: [
    { name: "Sabiduría (Entender)", objective: "Comprender los principios de la sabiduría divina.", method: "Lecciones didácticas y personificación (v. 1-6, 20-23).", example: "Explicar el temor de Jehová (v. 7) con ejemplos bíblicos." },
    { name: "Análisis (Conocer)", objective: "Identificar aplicaciones prácticas de la sabiduría.", method: "Narrativa de advertencia y preguntas reflexivas (v. 10-19, 22).", example: "Analizar tentaciones modernas (codicia, v. 13)." },
    { name: "Búsqueda (Recibir)", objective: "Aceptar activamente la instrucción.", method: "Discusión comunitaria y consejos parentales (v. 8-9, 20-21).", example: "Debatir cómo recibir consejos en la vida diaria." },
    { name: "Evaluación (Dar)", objective: "Transmitir sabiduría a otros.", method: "Proyectos prácticos y mentoría (v. 4).", example: "Diseñar un plan ético para compartir con el grupo." },
    { name: "Reflexión", objective: "Integrar aprendizajes en la vida personal.", method: "Autoevaluación y contrastes (v. 33 vs. v. 26-28).", example: "Escribir una reflexión sobre elecciones sabias." }
  ],
  characteristics: [
    "Cíclico: Los estudiantes repiten las fases para profundizar.",
    "Constructivista: Fomenta la construcción activa del conocimiento.",
    "Ético-Espiritual: Centrado en el temor de Jehová y la prudencia."
  ]
};

export const learningPlanData: LearningPlanSession[] = [
    { session: 1, title: "Fundamentos", sabrePhase: "Sabiduría (Entender)", segment: "v. 1-9", activity: "Mapa conceptual de nodos. Comparar Prov. 1:7 con Sal. 8:1.", characterCase: "Sabio : Aumenta saber creando mapa.", educationType: "Formal/Familiar", evaluation: "Mapa (5 nodos)." },
    { session: 2, title: "Tentaciones", sabrePhase: "Análisis (Conocer)", segment: "v. 10-19", activity: "Escenificar v. 10-14. Escribir: ¿Tentaciones modernas?", characterCase: "Joven : Resiste codicia (redes sociales).", educationType: "Informal/Comunal", evaluation: "Reflexión (100 palabras)." },
    { session: 3, title: "Llamado", sabrePhase: "Búsqueda (Recibir)", segment: "v. 20-27", activity: "Leer con TTS (web). Debate: ¿Cómo clama la sabiduría?", characterCase: "Simple : Acepta sagacidad vía discusión.", educationType: "Comunal", evaluation: "Resumen (150 palabras)." },
    { session: 4, title: "Consecuencias", sabrePhase: "Evaluación/Reflexión (Dar)", segment: "v. 28-33", activity: "Diseñar plan ético. Presentador.", characterCase: "Insensato : Reflexión para evitar calamidad.", educationType: "Formal/Informal", evaluation: "Plan (200 palabras)." }
];

export const characterCasesData: CharacterCase[] = [
    { character: "Sabio", verses: "v. 5", caseDescription: "Un líder comunitario estudia Proverbios 1 para aconsejar mejor. Crea un mapa conceptual conectando sabiduría con temor de Jehová, aplicándolo en talleres.", learningFocus: "Entender (sesión 1)", educationType: "Formal" },
    { character: "Joven", verses: "v. 4, 8", caseDescription: "Ana, de 16 años, enfrenta presión para ganar dinero rápido en redes sociales. Escribe una reflexión sobre resistir la codicia con prudencia.", learningFocus: "Conocer (sesión 2)", educationType: "Informal/Comunal" },
    { character: "Sencillo", verses: "v. 4, 22", caseDescription: "Juan, un joven indeciso, participa en un debate sobre la sabiduría que clama (v. 20). Decide escuchar consejos de su pastor.", learningFocus: "Recibir (sesión 3)", educationType: "Comunal" },
    { character: "Insensato", verses: "v. 7, 29", caseDescription: "Carla ignora advertencias y sufre consecuencias. Diseña un plan ético para cambiar, basado en seguridad (v. 33).", learningFocus: "Dar/Reflexión (sesión 4)", educationType: "Informal" }
];

export const educationTypesData = [
    { name: "Familiar", description: "Instrucción de padres (v. 8-9), mentoría personalizada." },
    { name: "Comunal", description: "Sabiduría en plazas (v. 20-21), aprendizaje social." },
    { name: "Formal", description: "Enseñanza estructurada de proverbios (v. 1-6), como en escuelas religiosas." },
    { name: "Informal", description: "Reflexión personal y advertencias en contextos cotidianos (v. 10-19)." }
];

export const psalm8ConnectionData: Psalm8Connection = {
  title: "Conexión con Salmo 8",
  content: `Proverbios 1 enfatiza la sabiduría y el temor de Jehová como fundamentos para la vida. El Salmo 8, por su parte, reflexiona sobre la majestad de Dios en la creación y la posición exaltada del ser humano, creado "un poco menor que los ángeles" y coronado de "gloria y honra" (Salmo 8:5).
La conexión radica en el concepto de 'señorío' y 'responsabilidad'. Proverbios 1 enseña a adquirir sabiduría para ejercer un buen juicio y vivir rectamente, lo cual es una forma de ejercer el señorío responsable que Dios otorgó al hombre según el Salmo 8:6 ("Le hiciste señorear sobre las obras de tus manos; todo lo pusiste debajo de sus pies").
El "temor de Jehová" (Prov. 1:7) es el reconocimiento de la soberanía de Dios, similar a la admiración que expresa el salmista por la creación divina ("¡Oh Jehová, Señor nuestro, cuán glorioso es tu nombre en toda la tierra!", Salmo 8:1, 9). Ambos pasajes invitan a una vida que honre a Dios, ya sea a través de la búsqueda de la sabiduría o del reconocimiento de Su grandeza y nuestro papel en Su creación.`
};
