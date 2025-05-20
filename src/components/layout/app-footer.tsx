export function AppFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground p-4 mt-8">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Proverbs 1 Explorer. Todos los derechos reservados.</p>
        <p>Desarrollado con fines educativos.</p>
      </div>
    </footer>
  );
}
