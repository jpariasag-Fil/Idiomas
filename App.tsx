import React, { useState, useRef, useEffect } from 'react';
import { CURRICULUM } from './constants';
import { UnitDefinition, UnitContent } from './types';
import { generateUnitContent } from './services/geminiService';
import BookPage from './components/BookPage';
import { Book, Printer, Loader2, Sparkles, AlertTriangle, CheckCircle, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [units, setUnits] = useState<UnitDefinition[]>(CURRICULUM);
  const [selectedUnitId, setSelectedUnitId] = useState<number>(1);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const selectedUnit = units.find(u => u.id === selectedUnitId);

  const handleGenerate = async (unit: UnitDefinition) => {
    setIsGenerating(true);
    setError(null);
    try {
      const content = await generateUnitContent(unit);
      setUnits(prev => prev.map(u => u.id === unit.id ? { ...u, content } : u));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate content");
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Auto-scroll to top when switching units
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedUnitId]);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 font-sans print:h-auto print:overflow-visible print:block">
      
      {/* Sidebar - Navigation (Hidden on Print) */}
      <aside className="w-80 bg-slate-900 text-white flex-shrink-0 flex flex-col no-print border-r border-slate-800">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3 text-french-red mb-2">
            <Book className="w-8 h-8" />
            <h1 className="font-bold text-xl tracking-tight text-white">Français AI</h1>
          </div>
          <p className="text-slate-400 text-xs">Textbook Generator (A1-A2)</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
          {units.map((unit) => (
            <button
              key={unit.id}
              onClick={() => setSelectedUnitId(unit.id)}
              className={`w-full text-left p-3 rounded-lg text-sm transition-all border flex items-center justify-between group ${
                selectedUnitId === unit.id
                  ? 'bg-french-blue text-white border-french-blue shadow-lg'
                  : 'bg-slate-800/50 text-slate-300 border-transparent hover:bg-slate-800'
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                   <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                     unit.level === 'A1' ? 'bg-green-500/20 text-green-300' : 'bg-orange-500/20 text-orange-300'
                   }`}>{unit.level}</span>
                   <span className="font-mono text-xs opacity-50">Unit {unit.id}</span>
                </div>
                <div className="truncate font-medium">{unit.title}</div>
              </div>
              
              {unit.content ? (
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 ml-2" />
              ) : (
                <div className="w-2 h-2 rounded-full bg-slate-600 ml-2 group-hover:bg-slate-500"></div>
              )}
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-900 z-10">
          <button 
            onClick={handlePrint}
            className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded-md transition-colors font-medium border border-slate-700"
          >
            <Printer className="w-4 h-4" />
            Print / Export PDF
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-gray-200 relative print:h-auto print:overflow-visible print:bg-white print:block">
        {selectedUnit && (
          <div className="min-h-full p-8 md:p-12 print:p-0 print:h-auto">
            
            {/* Toolbar for current unit (Hidden on Print) */}
            <div className="max-w-[210mm] mx-auto mb-6 flex justify-between items-center no-print">
               <div>
                  <h2 className="text-xl font-bold text-slate-800">Unit {selectedUnit.id}: {selectedUnit.title}</h2>
                  <p className="text-sm text-slate-500">{selectedUnit.topics}</p>
               </div>
               
               {!selectedUnit.content && (
                 <button
                   onClick={() => handleGenerate(selectedUnit)}
                   disabled={isGenerating}
                   className="flex items-center gap-2 bg-french-blue hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   {isGenerating ? (
                     <>
                       <Loader2 className="w-4 h-4 animate-spin" />
                       Generating...
                     </>
                   ) : (
                     <>
                       <Sparkles className="w-4 h-4" />
                       Generate Unit Content
                     </>
                   )}
                 </button>
               )}

                {selectedUnit.content && (
                 <button
                   onClick={() => handleGenerate(selectedUnit)}
                   disabled={isGenerating}
                   className="flex items-center gap-2 text-slate-500 hover:text-french-blue text-sm transition-colors"
                 >
                   <Sparkles className="w-3 h-3" />
                   Regenerate
                 </button>
               )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="max-w-[210mm] mx-auto mb-6 bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg flex items-center gap-3 no-print">
                <AlertTriangle className="w-5 h-5" />
                {error}
              </div>
            )}

            {/* Content Display */}
            {selectedUnit.content ? (
              <BookPage unitDef={selectedUnit} content={selectedUnit.content} />
            ) : (
              /* Empty State */
              <div className="max-w-[210mm] mx-auto bg-white h-[297mm] rounded-lg shadow-sm flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-gray-300">
                <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Book className="w-10 h-10 text-french-blue opacity-50" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Content Not Generated</h3>
                <p className="text-slate-500 max-w-md mb-8">
                  This unit is currently empty. Click the generate button to ask the AI to write the textbook content for "{selectedUnit.title}".
                </p>
                <button
                   onClick={() => handleGenerate(selectedUnit)}
                   disabled={isGenerating}
                   className="flex items-center gap-2 bg-french-blue hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg transition-all"
                 >
                   {isGenerating ? <Loader2 className="animate-spin" /> : <Sparkles />}
                   Generate Now
                 </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;