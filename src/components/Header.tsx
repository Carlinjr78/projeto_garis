export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl">LOGO</span>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">Início</a>
          <a href="#" className="hover:text-blue-600">Projetos</a>
          <a href="#" className="hover:text-blue-600">Sobre</a>
          <a href="#" className="hover:text-blue-600">Contato</a>
        </nav>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
          Apoiar
        </button>
      </div>
    </header>
  );
}
