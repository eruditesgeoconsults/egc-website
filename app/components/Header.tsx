export default function Header() {
  return (
    <header className="bg-[#071a12] text-white p-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-400">
          Erudites GeoConsults
        </h1>

        <nav className="hidden md:flex gap-6">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
