export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Vídeo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Conteúdo central */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold max-w-4xl">
          Ajudando crianças & suas famílias
          <br />
          no combate à extrema pobreza
        </h1>

        <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded text-lg">
          Seja um apoiador
        </button>
      </div>
    </section>
  );
}
