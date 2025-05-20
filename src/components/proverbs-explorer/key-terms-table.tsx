import type { LinguisticTerm, Psalm8Connection } from '@/types/proverbs-types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Languages, Link as LinkIcon } from 'lucide-react';

interface KeyTermsTableProps {
  terms: LinguisticTerm[];
  psalm8Connection: Psalm8Connection;
}

export function KeyTermsTable({ terms, psalm8Connection }: KeyTermsTableProps) {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <Languages className="mr-2 h-6 w-6 text-primary" />
            Términos Clave y Contexto Lingüístico
          </CardTitle>
          <CardDescription>
            Análisis de términos importantes en Proverbios 1, incluyendo sus equivalentes en Hebreo y Griego (Septuaginta - LXX).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="max-h-[500px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Español (RVR1960)</TableHead>
                  <TableHead>Hebreo (Transliterado)</TableHead>
                  <TableHead>Strong (Hebreo)</TableHead>
                  <TableHead>Griego (LXX Transliterado)</TableHead>
                  <TableHead>Strong (Griego)</TableHead>
                  <TableHead>Descripción</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {terms.map((term) => (
                  <TableRow key={term.termEs}>
                    <TableCell className="font-medium">{term.termEs}</TableCell>
                    <TableCell>{term.termHe} ({term.termHeTranslit})</TableCell>
                    <TableCell>{term.strongHe}</TableCell>
                    <TableCell>{term.termGr ? `${term.termGr} (${term.termGrTranslit})` : 'N/A'}</TableCell>
                    <TableCell>{term.strongGr || 'N/A'}</TableCell>
                    <TableCell className="text-sm">{term.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <LinkIcon className="mr-2 h-6 w-6 text-primary" />
            {psalm8Connection.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed whitespace-pre-line">{psalm8Connection.content}</p>
        </CardContent>
      </Card>
    </div>
  );
}
