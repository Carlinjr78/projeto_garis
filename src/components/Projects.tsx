const projects = [
  { title: "Educação", desc: "Projetos educacionais e capacitação." },
  { title: "Apoio Social", desc: "Iniciativas de suporte comunitário." },
  { title: "Voluntariado", desc: "Conectando pessoas a causas reais." },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {projects.map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-4 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
