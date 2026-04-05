import CraseSigma from "../assets/crase-sigma.png";

export default function CareerSection() {
  return (
    <section className="relative w-full py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-indigo-700 to-white bg-clip-text text-transparent">
              Trajetória Profissional
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-indigo-700" />

          {/* Timeline item */}
          <div className="relative pl-16">
            {/* Dot */}
            <div className="absolute left-[9px] top-10 h-3 w-3 rounded-full bg-indigo-700 shadow-[0_0_20px_rgba(250,204,21,0.7)]" />

            <div className="rounded-3xl border border-yellow-500/30 bg-white/[0.02] p-6 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-indigo-700 hover:shadow-yellow-500/10">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-[#4a0d0d] ring-1">
                    <img
                      src={CraseSigma}
                      alt="Crase Sigma"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-yellow-400">
                      Software Engineer Trainee
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">Crase Sigma</p>
                  </div>
                </div>

                <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
                  2026 - Atual
                </span>
              </div>

              <ul className="mt-6 max-w-2xl space-y-4 leading-7 text-zinc-300">
                <li>
                  Otimizei rotinas e processos internos, reduzindo retrabalho e
                  aumentando a eficiência operacional do sistema.
                </li>

                <li>
                  Atuei na manutenção corretiva e evolutiva de sistemas
                  internos, contribuindo para estabilidade, correção de bugs e
                  melhoria contínua das funcionalidades.
                </li>

                <li>
                  Desenvolvi e mantive aplicações front-end com Angular,
                  TypeScript e integração com APIs, implementando melhorias
                  contínuas em múltiplos módulos internos alinhados às regras de
                  negócio.
                </li>

                <li>
                  Participei de code reviews e colaborei com desenvolvedores
                  mais experientes, fortalecendo boas práticas de engenharia,
                  legibilidade e qualidade do código.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
