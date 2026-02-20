import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import heroClass from "@/assets/hero-new.jpg";
import { ArrowRight, Shield, Target, Users, Zap, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const Inicio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="bg-background text-foreground overflow-hidden">
      <SEO
        title="Hwa Rang | Academia de Taekwondo ITF en Villa Mercedes"
        description="Academia de Taekwondo ITF Hwa Rang en Villa Mercedes. Clases para todas las edades, defensa personal y competición. ¡Clase de prueba gratis!"
        canonical="https://hwarang-tkd.vercel.app/"
      />
      {/* KINETIC HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ backgroundImage: `url(${heroClass})` }}
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-primary font-display font-medium tracking-[0.2em] mb-4 text-xl uppercase">
                Artes Marciales Tradicionales
              </h2>
            </motion.div>

            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-9xl font-display font-bold text-white leading-[0.9] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
              >
                DISCIPLINA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">
                  EN MOVIMIENTO
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-2xl text-white/80 max-w-2xl font-light mb-10 leading-relaxed"
            >
              Descubre el poder del Taekwondo ITF. Forja tu carácter,
              o domina tu cuerpo en un ambiente de excelencia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contacto" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-display tracking-wider group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    EMPEZAR AHORA <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>

              <Link to="/nosotros" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="outline"
                  className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-display tracking-wider backdrop-blur-sm"
                >
                  CONOCER MÁS
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* VALUES SECTION - ASYMMETRIC GRID */}
      <section className="py-32 bg-background relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-display font-bold mb-8 leading-none"
              >
                CÓDIGO <br />
                <span className="text-primary">HWA RANG</span>
              </motion.h2>
              <p className="text-muted-foreground text-lg mb-12 max-w-md">
                Más que un deporte, es un camino de vida. Nuestros pilares fundamentales construyen guerreros dentro y fuera del dojang.
              </p>

              <div className="space-y-8">
                {[
                  { title: "Cortesía", desc: "El respeto comienza con uno mismo.", icon: Users },
                  { title: "Integridad", desc: "Honestidad en cada acción.", icon: Shield },
                  { title: "Perseverancia", desc: "Caer siete veces, levantarse ocho.", icon: Target },
                  { title: "Autocontrol", desc: "Poder sin control es debilidad.", icon: Zap },
                  { title: "Espíritu Indomable", desc: "Nunca aceptar la derrota.", icon: Play }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-1 text-white group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-neutral-900 border border-white/5 relative overflow-hidden group">
                {/* Placeholder for Video/Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-black mix-blend-overlay z-10" />
                <img
                  src={heroClass}
                  alt="Training"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute bottom-8 left-8 z-20">
                  <p className="font-display text-6xl font-bold text-white/10 group-hover:text-white/30 transition-colors">05</p>
                  <p className="text-white font-medium tracking-wider">PRINCIPIOS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION - PARALLAX STRIP */}
      <section className="py-40 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/90 z-10 mix-blend-multiply" />
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat opacity-60 grayscale"
          style={{ backgroundImage: `url(${heroClass})` }}
        />

        <div className="relative z-20 text-center max-w-4xl px-4">
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-bold text-white mb-8"
          >
            TU CAMINO EMPIEZA HOY
          </motion.h2>
          <Link to="/contacto">
            <Button size="xl" className="bg-white text-black hover:bg-neutral-200 border-none rounded-none px-12 py-8 text-xl font-display tracking-widest">
              CLASE DE PRUEBA GRATIS
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Inicio;