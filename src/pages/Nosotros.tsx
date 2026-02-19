import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import hwarangWarriors from "@/assets/hwarang-warriors.jpg";
import instructorRodrigo from "@/assets/instructor-rodrigo.png";
import { Handshake, Shield, Target, Brain, Flame, Award, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Nosotros = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const principles = [{
    icon: Handshake,
    title: "Cortesía",
    korean: "Ye Ui",
    description: "El respeto es la primera y última lección. Sin cortesía, no hay arte marcial."
  }, {
    icon: Shield,
    title: "Integridad",
    korean: "Yom Chi",
    description: "Reconocer lo correcto de lo incorrecto y tener la conciencia para sentir culpa."
  }, {
    icon: Target,
    title: "Perseverancia",
    korean: "In Nae",
    description: "La paciencia conduce a la virtud o al mérito. Un gramo de paciencia vale más que un kilo de cerebro."
  }, {
    icon: Brain,
    title: "Autocontrol",
    korean: "Guk Gi",
    description: "Una pérdida de control puede resultar en un desastre, tanto para uno mismo como para el oponente."
  }, {
    icon: Flame,
    title: "Espíritu Indomable",
    korean: "Baekjul Boolgool",
    description: "Manifestarse cuando una persona se enfrenta a una injusticia y actúa sin miedo ni vacilación."
  }];

  return (
    <div ref={containerRef} className="bg-background text-foreground overflow-hidden pt-20">

      {/* HEADER SECTION */}
      <section className="relative py-20 lg:py-32 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 text-primary border-primary/50 px-4 py-1 text-xs tracking-[0.2em] font-display uppercase">
                Nuestro Legado
              </Badge>
              <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-[0.9]">
                EL ESPÍRITU <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
                  HWA RANG
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg border-l-2 border-primary/30 pl-6">
                "No solo formamos luchadores, forjamos líderes a través de la disciplina milenaria del Taekwondo."
              </p>

              <div className="flex gap-8 text-sm font-display tracking-widest text-muted-foreground">
                <div>
                  <span className="block text-4xl font-bold text-white mb-1">13+</span>
                  AÑOS DE EXPERIENCIA
                </div>
                <div>
                  <span className="block text-4xl font-bold text-white mb-1">I</span>
                  DAN CERTIFICADO
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <img src={hwarangWarriors} alt="Guerreros Hwa Rang" className="w-full h-auto object-cover" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display font-bold text-white/90 text-lg">GUERREROS DE SILLA</p>
                  <p className="text-xs text-white/60 uppercase tracking-wider">Inspiración Histórica</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* INSTRUCTOR SECTION */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <img src={instructorRodrigo} alt="Instructor Rodrigo" className="w-full h-auto rounded-xl shadow-2xl shadow-black/50 grayscale hover:grayscale-0 transition-all duration-500" />

                {/* Decorative stats card */}
                <div className="absolute -bottom-24 right-0 md:-right-12 bg-background border border-white/10 p-6 shadow-xl max-w-xs backdrop-blur-md bg-black/80 z-20 rounded-xl">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-sm text-gray-300 italic">
                    "Mi misión es que cada alumno supere sus propios límites, no los de los demás."
                  </p>
                  <p className="text-primary font-display font-bold mt-4 text-xs tracking-widest uppercase text-right">- Sabon Rodrigo</p>
                </div>
              </motion.div>
              {/* Background bloom */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] -z-10" />
            </div>

            <div className="lg:col-span-7 lg:pl-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-[1px] w-12 bg-primary"></span>
                  <span className="text-primary font-display tracking-widest uppercase text-sm">Head Instructor</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                  SABON <span className="text-white">RODRIGO BERNABÉ</span>
                </h2>

                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                  <p>
                    Con más de <span className="text-white font-medium">13 años de trayectoria</span>,
                    mi vida ha estado dedicada al perfeccionamiento del Taekwondo ITF.
                  </p>
                  <p>
                    Como cinturón negro <span className="text-primary font-bold">1er Dan</span> e instructor activo,
                    hemos desarrollado una metodología que equilibra la exigencia técnica con el desarrollo humano.
                  </p>
                  <p>
                    En <span className="text-white font-medium italic">Academia Hwa Rang</span>, no solo enseñamos a pelear;
                    enseñamos a vivir con coraje, a respetar al prójimo y a construir una autoestima inquebrantable.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-4">
                    <Award className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-display font-bold text-white">Certificado ITF</h4>
                    <p className="text-xs text-muted-foreground">Federación Internacional</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4">
                    <Shield className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-display font-bold text-white">Defensa Real</h4>
                    <p className="text-xs text-muted-foreground">Técnicas Aplicables</p>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* PRINCIPLES SECTION */}
      <section className="py-32 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              LOS 5 PILARES
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              La base filosófica que sostiene cada técnica y cada movimiento en nuestro DOJANG.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {principles.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative p-8 bg-neutral-900/50 border border-white/5 hover:border-primary/50 transition-colors duration-500 overflow-hidden"
                >
                  {/* Hover Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-neutral-800 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-display tracking-widest text-white/20 group-hover:text-primary/50 transition-colors uppercase">
                        {principle.korean}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow group-hover:text-white/80 transition-colors">
                      {principle.description}
                    </p>

                    <div className="h-0.5 w-8 bg-primary/30 group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SMALL */}
      <section className="py-20 border-t border-white/10 text-center">
        <h3 className="text-2xl font-display font-bold text-white mb-6">¿LISTO PARA FORMAR PARTE DEL LEGADO?</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white text-black font-bold font-display tracking-wider hover:bg-neutral-200 transition-colors"
        >
          CONTACTAR AHORA
        </motion.button>
      </section>

    </div>
  );
};
export default Nosotros;