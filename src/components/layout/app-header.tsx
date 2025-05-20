import { BookHeart } from 'lucide-react';

export function AppHeader() {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex items-center">
        <BookHeart className="h-8 w-8 mr-3" />
        <h1 className="text-2xl font-semibold">Proverbs 1 Explorer</h1>
      </div>
    </header>
  );
}
