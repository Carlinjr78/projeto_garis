export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Impacto social começa com ação
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl">
            Uma iniciativa dedicada a transformar realidades através de projetos
            sociais, educação e apoio comunitário.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Conhecer projetos
            </button>
            <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Apoiar iniciativa
            </button>
          </div>
        </div>

        <div className="relative h-[380px] rounded-2xl bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Imagem / Vídeo</span>
        </div>
      </div>
    </section>
  );
}
