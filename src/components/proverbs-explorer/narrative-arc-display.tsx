import type { NarrativeStage } from '@/types/proverbs-types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Milestone, ChevronRight } from 'lucide-react';

interface NarrativeArcDisplayProps {
  arcData: NarrativeStage[];
}

export function NarrativeArcDisplay({ arcData }: NarrativeArcDisplayProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <Milestone className="mr-2 h-6 w-6 text-primary" />
          Arco Narrativo de Proverbios 1
        </CardTitle>
        <CardDescription>
          Proverbios 1 organizado como un discurso didáctico con elementos narrativos, guiando al lector a través de un proceso de aprendizaje y elección.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {arcData.map((stage, index) => (
            <AccordionItem value={`item-${index}`} key={stage.title}>
              <AccordionTrigger className="text-md font-medium hover:text-accent">
                <div className="flex items-center">
                  <ChevronRight className="mr-2 h-5 w-5 text-accent transition-transform duration-200 group-data-[state=open]:rotate-90" />
                  {stage.title} ({stage.verses})
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-6 text-sm space-y-2">
                <p><strong className="text-primary">Descripción:</strong> {stage.description}</p>
                <p><strong className="text-primary">Nodos Clave:</strong> {stage.nodes.join(', ')}</p>
                <p><strong className="text-primary">Función:</strong> {stage.function}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
