'use client';
import { ArrowUpRight, Plus } from 'lucide-react';
import { comfortTerms, comfortQuestions } from '@/lib/comfort-guide';
import './comfort-guide.css';

const shortDescriptions: Record<string,string> = {
  'memory-foam': 'Contouring cushioning that gives gradually beneath you. Used in both foam and hybrid mattresses.',
  'innerspring': 'A spring support core with cushioning above it, for a responsive feel.',
  'hybrid': 'Comfort layers over a spring core, combining cushioning with spring response.',
  'orthopedic': 'A support-focused description. Check the actual materials and feel; the label alone does not establish health benefits.',
  'pillow-top': 'An extra upholstered cushion at the surface. The mattress underneath can still feel firm.',
  'firm': 'A more resistant surface with less give. Describes feel, rather than construction or quality.',
  'soft': 'A more yielding, plush surface. Compare the support underneath as well as the initial softness.',
};

export function ComfortGuide({ onFindMattress }: { onFindMattress: () => void }) {
  return <div className="dialog-content compact-guide">
    <h2>Mattress types<br/>& feel.</h2>
    <p className="compact-guide-intro">A quick reference to the words you’ll see while choosing a mattress.</p>
    <dl className="comfort-reference-list">{comfortTerms.map(term=><div key={term.id}><dt>{term.name}<small>{term.category}</small></dt><dd>{shortDescriptions[term.id]}</dd></div>)}</dl>
    <p className="compact-guide-note">These terms can overlap. A hybrid can have a pillow top and a firm feel.</p>
    <button className="text-link" onClick={onFindMattress}>Find my mattress <ArrowUpRight size={17}/></button>
  </div>;
}

export function ComfortFaq() {
  return <section id="sleep-questions" className="sleep-questions section-padding page-gutter reveal" aria-labelledby="sleep-questions-title"><div><p className="eyebrow">A MORE INFORMED GOOD NIGHT</p><h2 id="sleep-questions-title">A few things<br/><em>worth knowing.</em></h2><p>Small answers to the questions<br/>that make a big decision feel simpler.</p></div><div className="sleep-question-list">{comfortQuestions.map(item=><details key={item.question}><summary>{item.question}<Plus size={18} aria-hidden="true"/></summary><p>{item.answer}</p></details>)}</div></section>;
}
