import React from 'react';
import { UnitContent, UnitDefinition } from '../types';
import { BookOpen, MessageCircle, PenTool, Globe, Info } from 'lucide-react';

interface BookPageProps {
  unitDef: UnitDefinition;
  content: UnitContent;
}

const BookPage: React.FC<BookPageProps> = ({ unitDef, content }) => {
  return (
    <div className="bg-paper text-slate-900 w-full max-w-[210mm] min-h-[297mm] mx-auto p-12 shadow-2xl print:shadow-none print:w-full print:max-w-none print:p-0 print:m-0 mb-8 relative">
      
      {/* Header / Banner */}
      <div className="border-b-4 border-french-red pb-4 mb-8 flex justify-between items-end">
        <div>
          <span className="text-french-blue font-bold tracking-widest uppercase text-sm">Unit {unitDef.id} • {content.level}</span>
          <h1 className="text-4xl font-serif font-bold text-slate-900 mt-1">{content.title}</h1>
          <h2 className="text-lg text-slate-600 font-sans italic">{content.subtitle}</h2>
        </div>
        <div className="hidden print:block text-xs text-gray-400">Le Français Progressif</div>
      </div>

      {/* Introduction */}
      <div className="mb-8 prose prose-slate max-w-none">
        <p className="text-lg leading-relaxed text-slate-700 border-l-4 border-french-blue pl-4 italic">
          {content.introduction}
        </p>
      </div>

      {/* Vocabulary Section */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4 text-french-blue">
          <BookOpen className="w-6 h-6" />
          <h3 className="text-2xl font-sans font-bold uppercase tracking-wide">Vocabulaire</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.vocabulary.map((item, idx) => (
              <div key={idx} className="flex justify-between items-start p-3 bg-white border border-gray-200 rounded-lg shadow-sm print:break-inside-avoid">
                <div>
                  <div className="font-bold text-lg text-french-blue">{item.french}</div>
                  <div className="text-xs text-gray-500 font-mono">{item.pronunciation}</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-700 font-medium">{item.english}</div>
                  <div className="text-xs text-slate-400 italic">"{item.example}"</div>
                </div>
              </div>
            ))}
        </div>
        
        {/* Placeholder Image for Vocab Context */}
        <div className="mt-6 w-full h-48 bg-gray-200 rounded-lg overflow-hidden relative print:break-inside-avoid">
            <img 
              src={`https://picsum.photos/seed/french${unitDef.id}vocab/800/300`} 
              alt="Vocabulary Context" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute bottom-0 left-0 bg-black/50 text-white text-xs px-2 py-1">
              Image: Contextual Visual
            </div>
        </div>
      </section>

      {/* Cultural Note */}
      {content.culturalNote && (
        <div className="mb-10 bg-indigo-50 border border-indigo-100 p-4 rounded-lg flex gap-4 items-start print:break-inside-avoid">
           <Globe className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
           <div>
             <h4 className="font-bold text-indigo-800 text-sm uppercase mb-1">Culture : Le Saviez-vous?</h4>
             <p className="text-sm text-indigo-900">{content.culturalNote}</p>
           </div>
        </div>
      )}

      {/* Grammar Section */}
      <section className="mb-10 print:break-before-auto">
        <div className="flex items-center gap-2 mb-4 text-french-red">
          <Info className="w-6 h-6" />
          <h3 className="text-2xl font-sans font-bold uppercase tracking-wide">Grammaire</h3>
        </div>
        
        <div className="space-y-6">
          {content.grammar.map((point, idx) => (
            <div key={idx} className="bg-orange-50/50 p-6 rounded-xl border border-orange-100 print:break-inside-avoid">
              <h4 className="text-xl font-bold text-slate-800 mb-2">{point.title}</h4>
              <p className="text-slate-700 mb-4 leading-relaxed">{point.explanation}</p>
              
              <div className="bg-white rounded border border-orange-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-orange-100 text-orange-900">
                    <tr>
                      <th className="p-2 text-left">Français</th>
                      <th className="p-2 text-left">Anglais</th>
                    </tr>
                  </thead>
                  <tbody>
                    {point.examples.map((ex, i) => (
                      <tr key={i} className="border-t border-orange-100">
                        <td className="p-2 font-medium text-french-blue">{ex.french}</td>
                        <td className="p-2 text-slate-600">{ex.english}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dialogue Section */}
      <section className="mb-10 page-break">
        <div className="flex items-center gap-2 mb-4 text-green-700">
          <MessageCircle className="w-6 h-6" />
          <h3 className="text-2xl font-sans font-bold uppercase tracking-wide">Dialogue</h3>
        </div>
        
        <div className="bg-white p-6 rounded-lg border-l-4 border-green-500 shadow-sm print:shadow-none print:border-l-2 print:break-inside-avoid">
          <div className="space-y-4">
            {content.dialogue.map((line, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-24 flex-shrink-0 font-bold text-slate-900 text-right text-sm uppercase tracking-wider pt-1">
                  {line.speaker}
                </div>
                <div className="flex-grow">
                  <p className="text-lg text-slate-800 font-serif leading-snug">
                    {line.text}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {line.translation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exercises Section */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4 text-purple-700">
          <PenTool className="w-6 h-6" />
          <h3 className="text-2xl font-sans font-bold uppercase tracking-wide">Exercices</h3>
        </div>

        <div className="space-y-8">
          {content.exercises.map((exercise, idx) => (
            <div key={idx} className="print:break-inside-avoid">
              <h4 className="font-bold text-slate-800 mb-2 flex gap-2">
                <span className="bg-purple-100 text-purple-800 w-6 h-6 flex items-center justify-center rounded-full text-sm">{idx + 1}</span>
                {exercise.instruction}
              </h4>
              
              <div className="pl-8 space-y-3">
                {exercise.questions.map((q, qIdx) => (
                  <div key={qIdx} className="mb-2">
                    <p className="text-slate-700 font-medium mb-1">
                      {qIdx + 1}. {q.question}
                    </p>
                    
                    {exercise.type === 'multiple-choice' && q.options && (
                      <div className="flex gap-4 mt-1">
                        {q.options.map((opt, oIdx) => (
                          <div key={oIdx} className="flex items-center gap-1">
                             <div className="w-4 h-4 border border-slate-300 rounded-full"></div>
                             <span className="text-sm text-slate-600">{opt}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {exercise.type === 'fill-in-blank' && (
                       <div className="h-6 border-b border-dashed border-slate-300 w-full max-w-md"></div>
                    )}
                     
                    {/* Answer Key (Hidden in Print usually, but beneficial for self-study book appendix - keeping inline for now but small) */}
                    <div className="text-xs text-gray-300 mt-1 select-none print:hidden hover:text-green-600 transition-colors cursor-help">
                      Answer: {q.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Numbering */}
      <div className="flex justify-between border-t border-gray-200 pt-4 mt-8 print:mt-auto">
        <span className="text-xs text-gray-400">Généré par AI</span>
        <span className="font-bold text-slate-400">{unitDef.id}</span>
      </div>
    </div>
  );
};

export default BookPage;