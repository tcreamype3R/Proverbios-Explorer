import type { ProverbsVerse } from '@/types/proverbs-types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BookOpen } from 'lucide-react';

interface VerseReaderProps {
  verses: ProverbsVerse[];
}

export function VerseReader({ verses }: VerseReaderProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <BookOpen className="mr-2 h-6 w-6 text-primary" />
          Proverbios Capítulo 1 (RVR1960)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {verses.map((verse) => (
            <div key={verse.verseNumber} className="mb-3">
              <span className="font-semibold text-primary mr-2">{verse.verseNumber}.</span>
              <span>{verse.text}</span>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
