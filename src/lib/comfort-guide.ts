export type ComfortTerm = {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  feel: string;
  consider: string;
  check: string;
  diagramLabel: string;
};

export const comfortTerms: ComfortTerm[] = [
  {
    id: 'memory-foam', name: 'Memory foam', category: 'Comfort material',
    headline: 'A closer kind of comfort.',
    description: 'Memory foam gently gives beneath you, creating a contouring, cradled sensation. It can form a comfort layer in an all-foam mattress or sit above springs in a hybrid.',
    feel: 'Contouring, with a more gradual response.',
    consider: 'When you enjoy settling into the surface rather than feeling its bounce.',
    check: 'Compare the complete mattress: a memory-foam layer alone does not tell you its firmness.',
    diagramLabel: 'Contouring comfort above a supportive base',
  },
  {
    id: 'innerspring', name: 'Innerspring', category: 'Support construction',
    headline: 'A familiar sense of lift.',
    description: 'A spring system forms the support core, with cushioning above it. The coils bring a responsive character; the layers over them shape the first-touch comfort.',
    feel: 'Springy and responsive, depending on the build.',
    consider: 'When you prefer a more buoyant surface and an easier change of position.',
    check: 'Ask about the spring system and cushioning together, not just the coil count.',
    diagramLabel: 'A cushioned surface over a spring core',
  },
  {
    id: 'hybrid', name: 'Hybrid', category: 'Combined construction',
    headline: 'Cushioning meets response.',
    description: 'A hybrid brings substantial comfort layers and a spring support core into one mattress. The idea is to combine the feel of cushioning materials with the response of coils.',
    feel: 'A blend of surface cushioning and spring response.',
    consider: 'When you like a cushioned welcome with some underlying bounce.',
    check: 'Hybrid describes construction. Different hybrids can still feel very different.',
    diagramLabel: 'Comfort layers and springs, working together',
  },
  {
    id: 'orthopedic', name: 'Orthopedic', category: 'Support-focused description',
    headline: 'Look beyond the label.',
    description: 'You may encounter “orthopedic” when a mattress is presented around support. Use it as a starting point for questions about the actual materials, construction, and feel.',
    feel: 'Read the individual product’s firmness description.',
    consider: 'When you want to understand how a mattress is built to support you.',
    check: 'The name alone does not establish suitability for a health condition or promise a treatment outcome.',
    diagramLabel: 'Ask what is inside, not only what it is called',
  },
  {
    id: 'pillow-top', name: 'Pillow top', category: 'Surface finish',
    headline: 'An extra-soft welcome.',
    description: 'A pillow top adds an upholstered cushion at the surface. It describes the finishing layer, so it can appear on a spring or hybrid mattress with a firmer foundation below.',
    feel: 'A more cushioned first impression.',
    consider: 'When that inviting, generously upholstered surface matters to you.',
    check: 'Surface softness and overall mattress firmness are different things.',
    diagramLabel: 'An additional cushion above the main mattress',
  },
  {
    id: 'firm', name: 'Firm', category: 'Surface feel',
    headline: 'A little less give.',
    description: 'Firm describes a surface that feels more resistant under you. It is a feel preference, not a material: foam, spring, and hybrid mattresses can all have firmer versions.',
    feel: 'Less surface sink; a more resistant sensation.',
    consider: 'When you prefer to feel more on top of your mattress.',
    check: 'Firmness is not a quality score. Try the complete mattress in your usual sleeping position.',
    diagramLabel: 'A shallower impression at the surface',
  },
  {
    id: 'soft', name: 'Soft', category: 'Surface feel',
    headline: 'Permission to sink in.',
    description: 'Soft describes a more yielding surface with a plush, enveloping first impression. Like firm, it describes how a mattress feels rather than what its support core is made from.',
    feel: 'More surface give and a deeper cushioned sensation.',
    consider: 'When you enjoy a plush surface that welcomes you in.',
    check: 'Compare the support beneath the cushioning as well as the initial softness.',
    diagramLabel: 'A deeper impression at the surface',
  },
];

export const comfortQuestions = [
  { question: 'Is mattress type the same as firmness?', answer: 'No. Foam, springs, and hybrids describe materials or construction. Soft, medium, and firm describe feel. Start by comparing construction, then choose the feel you enjoy.' },
  { question: 'Can a pillow-top mattress still feel firm?', answer: 'Yes. A pillow top describes the extra cushion at the surface. The mattress beneath it can have a firmer feel. Compare the top layer and the complete mattress separately.' },
  { question: 'Does firmer automatically mean better?', answer: 'Firm and soft are comfort preferences, not quality rankings. Consider how much cushioning and resistance you enjoy, then try the mattress in your usual sleeping position.' },
  { question: 'How do I use the znoosy mattress finder?', answer: 'Tell us your sleeping position, preferred feel, and size. The finder suggests a starting point from our preview collection. You can then inspect the construction, select a size, and save it in your bag.' },
];
