import { AppHeader } from '@/components/layout/app-header';
import { AppFooter } from '@/components/layout/app-footer';
import { VerseReader } from '@/components/proverbs-explorer/verse-reader';
import { KeyTermsTable } from '@/components/proverbs-explorer/key-terms-table';
import { SemanticNetworkDisplay } from '@/components/proverbs-explorer/semantic-network-display';
import { NarrativeArcDisplay } from '@/components/proverbs-explorer/narrative-arc-display';
import { TeachingStylesDisplay } from '@/components/proverbs-explorer/teaching-styles-display';
import { SabreModelDisplay } from '@/components/proverbs-explorer/sabre-model-display';
import { AiAdvice } from '@/components/proverbs-explorer/ai-advice';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  proverbs1RVR60,
  keyLinguisticTerms,
  semanticNetworkData,
  narrativeArcData,
  teachingStylesData,
  sabreModelData,
  learningPlanData,
  characterCasesData,
  educationTypesData,
  psalm8ConnectionData
} from '@/app/proverbs-data';
import { BookText, Brain, Route, GraduationCap, MessageCircleQuestion, BookOpen, Languages, Atom, Milestone, Presentation } from 'lucide-react';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Tabs defaultValue="texto" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-2 h-auto mb-6">
            <TabsTrigger value="texto" className="py-3 text-sm sm:text-base flex items-center justify-center gap-2">
              <BookText className="h-5 w-5" /> El Texto y su Idioma
            </TabsTrigger>
            <TabsTrigger value="analisis" className="py-3 text-sm sm:text-base flex items-center justify-center gap-2">
              <Brain className="h-5 w-5" /> Análisis Estructural
            </TabsTrigger>
            <TabsTrigger value="metodologia" className="py-3 text-sm sm:text-base flex items-center justify-center gap-2">
              <GraduationCap className="h-5 w-5" /> Metodología
            </TabsTrigger>
            <TabsTrigger value="consejo" className="py-3 text-sm sm:text-base flex items-center justify-center gap-2">
              <MessageCircleQuestion className="h-5 w-5" /> Consejo Personalizado
            </TabsTrigger>
          </TabsList>

          <TabsContent value="texto">
            <div className="grid lg:grid-cols-2 gap-6">
              <VerseReader verses={proverbs1RVR60} />
              <KeyTermsTable terms={keyLinguisticTerms} psalm8Connection={psalm8ConnectionData} />
            </div>
          </TabsContent>

          <TabsContent value="analisis">
            <div className="space-y-6">
              <SemanticNetworkDisplay networkData={semanticNetworkData} />
              <NarrativeArcDisplay arcData={narrativeArcData} />
            </div>
          </TabsContent>

          <TabsContent value="metodologia">
             <div className="space-y-6">
              <TeachingStylesDisplay styles={teachingStylesData} />
              <SabreModelDisplay 
                sabreModel={sabreModelData} 
                learningPlan={learningPlanData}
                characterCases={characterCasesData}
                educationTypes={educationTypesData}
              />
            </div>
          </TabsContent>

          <TabsContent value="consejo">
            <AiAdvice />
          </TabsContent>
        </Tabs>
      </main>
      <AppFooter />
    </div>
  );
}
