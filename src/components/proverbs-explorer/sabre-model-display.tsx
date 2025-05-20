import type { SabreModel, LearningPlanSession, CharacterCase, EducationTypesData } from '@/types/proverbs-types'; // Assuming EducationTypesData is the correct type
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { GraduationCap, ChevronRight, Users, BookMarked, Activity, Target, CheckCircle } from 'lucide-react';

interface SabreModelDisplayProps {
  sabreModel: SabreModel;
  learningPlan: LearningPlanSession[];
  characterCases: CharacterCase[];
  educationTypes: Array<{ name: string; description: string }>; // Adjusted type
}

export function SabreModelDisplay({ sabreModel, learningPlan, characterCases, educationTypes }: SabreModelDisplayProps) {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <GraduationCap className="mr-2 h-6 w-6 text-primary" />
            Modelo de Diseño Instruccional: SABRE
          </CardTitle>
          <CardDescription>
            Un diseño instructivo original inspirado en Proverbios 1 (Sabiduría, Análisis, Búsqueda, Reflexión, Evaluación), alineado con los nodos Entender, Conocer, Recibir, Dar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold text-lg mb-2 flex items-center"><ChevronRight className="mr-1 h-5 w-5 text-accent" />Fases del Modelo SABRE</h3>
          <Accordion type="single" collapsible className="w-full mb-4">
            {sabreModel.phases.map((phase, index) => (
              <AccordionItem value={`phase-${index}`} key={phase.name}>
                <AccordionTrigger className="text-md font-medium hover:text-accent">{phase.name}</AccordionTrigger>
                <AccordionContent className="pl-4 text-sm space-y-1">
                  <p><strong className="text-primary">Objetivo:</strong> {phase.objective}</p>
                  <p><strong className="text-primary">Método:</strong> {phase.method}</p>
                  <p><strong className="text-primary">Ejemplo:</strong> {phase.example}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <h3 className="font-semibold text-lg mb-2 mt-4 flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-accent" />Características del Modelo</h3>
          <ul className="list-disc list-inside space-y-1 text-sm mb-4">
            {sabreModel.characteristics.map((char, index) => (
              <li key={index}>{char}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <BookMarked className="mr-2 h-6 w-6 text-primary" />
            Marco de Aprendizaje Interactivo
          </CardTitle>
          <CardDescription>Plan de aprendizaje, tipos de educación y casos por personaje.</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold text-lg mb-2 flex items-center"><Activity className="mr-2 h-5 w-5 text-accent" />Plan de Aprendizaje (4 Sesiones)</h3>
           <ScrollArea className="max-h-[300px] mb-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sesión</TableHead>
                  <TableHead>Título</TableHead>
                  <TableHead>Fase SABRE</TableHead>
                  <TableHead>Actividad</TableHead>
                  <TableHead>Caso/Personaje</TableHead>
                  <TableHead>Tipo Educación</TableHead>
                  <TableHead>Evaluación</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {learningPlan.map((session) => (
                  <TableRow key={session.session}>
                    <TableCell>{session.session}</TableCell>
                    <TableCell className="font-medium">{session.title}</TableCell>
                    <TableCell>{session.sabrePhase}</TableCell>
                    <TableCell>{session.activity}</TableCell>
                    <TableCell>{session.characterCase}</TableCell>
                    <TableCell>{session.educationType}</TableCell>
                    <TableCell>{session.evaluation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>

          <h3 className="font-semibold text-lg mb-2 mt-4 flex items-center"><Users className="mr-2 h-5 w-5 text-accent" />Casos por Personaje</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {characterCases.map(cc => (
              <Card key={cc.character} className="bg-muted/30">
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-md">{cc.character} <span className="text-xs font-normal text-muted-foreground">({cc.verses})</span></CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p><strong className="text-primary-dark">Caso:</strong> {cc.caseDescription}</p>
                  <p><strong className="text-primary-dark">Aprendizaje:</strong> {cc.learningFocus}</p>
                  <p><strong className="text-primary-dark">Educación:</strong> {cc.educationType}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <h3 className="font-semibold text-lg mb-2 mt-4 flex items-center"><Target className="mr-2 h-5 w-5 text-accent" />Tipos de Educación</h3>
           <div className="grid md:grid-cols-2 gap-4">
            {educationTypes.map(et => (
              <Card key={et.name} className="bg-muted/30">
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-md">{et.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>{et.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
