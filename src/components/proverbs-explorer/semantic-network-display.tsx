import type { SemanticNetworkData } from '@/types/proverbs-types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Atom, Waypoints } from 'lucide-react';

interface SemanticNetworkDisplayProps {
  networkData: SemanticNetworkData;
}

export function SemanticNetworkDisplay({ networkData }: SemanticNetworkDisplayProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <Atom className="mr-2 h-6 w-6 text-primary" />
          Red Semántica de Proverbios 1
        </CardTitle>
        <CardDescription>
          Visualización de las conexiones conceptuales y temáticas en Proverbios 1.
          Los nodos centrales (Entender, Conocer, Recibir, Dar) estructuran los propósitos de la sabiduría.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <Waypoints className="mr-2 h-5 w-5 text-accent" />
              Nodos Centrales y Secundarios
            </h3>
            <ScrollArea className="h-[250px] p-1 border rounded-md">
              <ul className="list-disc list-inside space-y-1 text-sm">
                {networkData.nodes.map(node => (
                  <li key={node.id}>
                    <strong className="text-primary-dark">{node.label}:</strong> {node.description || 'Concepto clave.'}
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <Waypoints className="mr-2 h-5 w-5 text-accent" />
              Visualización de Relaciones (Texto)
            </h3>
            <ScrollArea className="h-[200px] p-3 bg-muted/50 rounded-md">
              <pre className="text-sm whitespace-pre-wrap">{networkData.visualizationText}</pre>
            </ScrollArea>
            <p className="text-xs text-muted-foreground mt-2">
              Esta representación textual muestra las principales interconexiones entre los conceptos clave.
              Por ejemplo, 'Entender' se conecta con 'Sabiduría', que a su vez se relaciona con 'Temor de Jehová'.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
