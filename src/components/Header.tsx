export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          HAJA
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-6 text-white text-sm">
          <a href="#" className="hover:text-orange-400">Home</a>
          <a href="#">Quem Somos</a>
          <a href="#">Transparência</a>
          <a href="#">Como Apoiar</a>
          <a href="#">Programas</a>
          <a href="#">Blog</a>
          <a href="#">Contato</a>
        </nav>

        {/* Botão */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
          Quero Doar
        </button>
      </div>
    </header>
  );
}
