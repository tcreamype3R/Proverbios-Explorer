import type { TeachingStyle } from '@/types/proverbs-types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Presentation, ChevronRight } from 'lucide-react';

interface TeachingStylesDisplayProps {
  styles: TeachingStyle[];
}

export function TeachingStylesDisplay({ styles }: TeachingStylesDisplayProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <Presentation className="mr-2 h-6 w-6 text-primary" />
          Estilos de Enseñanza-Aprendizaje en Proverbios 1
        </CardTitle>
        <CardDescription>
          El texto de Proverbios 1 implica varios estilos de enseñanza y aprendizaje, identificados a partir de su estructura y métodos.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {styles.map((style, index) => (
            <AccordionItem value={`item-${index}`} key={style.name}>
              <AccordionTrigger className="text-md font-medium hover:text-accent">
                <div className="flex items-center">
                  <ChevronRight className="mr-2 h-5 w-5 text-accent transition-transform duration-200 group-data-[state=open]:rotate-90" />
                  {style.name} ({style.verses})
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-6 text-sm space-y-2">
                <p><strong className="text-primary">Descripción:</strong> {style.description}</p>
                <p><strong className="text-primary">Evidencia:</strong> {style.evidence}</p>
                <p><strong className="text-primary">Aplicación:</strong> {style.application}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
