import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, ArrowRight, Star, Shield, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import championGirl from "@/assets/champion-girl.jpg";
import womenTeam from "@/assets/women-team.jpg";

const Servicios = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const services = [
    {
      title: "INFANTIL / JUVENIL",
      subtitle: "El Futuro del Taekwondo",
      age: "5+ Años",
      schedule: "Mar & Jue 17:30 - 19:00",
      description: "Formamos el carácter de los líderes del mañana a través de la disciplina, el respeto y el juego.",
      features: [
        "Desarrollo Psicomotor Integral",
        "Valores: Respeto y Disciplina",
        "Defensa Personal Real",
        "Exámenes Oficiales ITF",
      ],
      highlight: true,
      image: championGirl,
      icon: Star
    },
    {
      title: "SOLO MUJERES",
      subtitle: "Fuerza y Empoderamiento",
      age: "Todas las Edades",
      schedule: "PROXIMAMENTE",
      description: "Un espacio exclusivo para descubrir tu fuerza interior, mejorar tu condición física y aprender a defenderte.",
      features: [
        "Defensa Personal Aplicada",
        "Entrenamiento Funcional",
        "Reducción de Estrés",
        "Comunidad de Apoyo",
      ],
      highlight: false,
      image: womenTeam,
      icon: Shield
    },
  ];

  const additionalServices = [
    {
      title: "Clases Privadas",
      description: "Perfeccionamiento técnico 1 a 1 para acelerar tu evolución marcial.",
      icon: Users,
      meta: "Horarios Flexibles"
    },
    {
      title: "Competición",
      description: "Entrenamiento de alto rendimiento para torneos nacionales e internacionales.",
      icon: Trophy,
      meta: "Selección del Instructor"
    }
  ];

  return (
    <div ref={containerRef} className="bg-background min-h-screen pt-20 overflow-hidden">

      {/* KINETIC HEADER */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary/50 px-4 py-1 text-xs tracking-[0.3em] font-display uppercase">
              Programas Exclusivos
            </Badge>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 leading-none">
              TU CAMINO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                EN EL DOJANG
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              No importa tu edad o nivel, tenemos un lugar para vos en nuestra familia marcial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN PROGRAMS GRID */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group relative h-[550px] md:h-[650px] rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Content Overlay */}
                <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-primary/20 backdrop-blur-md rounded-lg text-primary">
                        <service.icon className="w-6 h-6" />
                      </div>
                      {service.highlight && (
                        <span className="px-3 py-1 bg-primary text-white text-xs font-bold tracking-wider uppercase rounded-full">
                          Recomendado
                        </span>
                      )}
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 leading-[0.9]">
                      {service.title}
                    </h2>
                    <p className="text-primary font-display tracking-widest uppercase text-sm mb-4">
                      {service.subtitle}
                    </p>

                    <div className="h-[1px] w-full bg-white/20 mb-6 group-hover:bg-primary/50 transition-colors" />

                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm text-gray-300 border-b border-white/10 pb-2">
                        <span>Edad:</span>
                        <span className="text-white font-medium">{service.age}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-300 border-b border-white/10 pb-2">
                        <span>Horario:</span>
                        <span className="text-white font-medium">{service.schedule}</span>
                      </div>
                    </div>

                    {/* Collapsible Content */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                      <div className="overflow-hidden">
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                              <Check className="w-4 h-4 text-primary mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link to="/contacto">
                          <Button className="w-full bg-white text-black hover:bg-primary hover:text-white transition-colors font-display font-bold tracking-wider">
                            SOLICITAR CLASE DE PRUEBA
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="py-20 px-4 border-t border-white/5 bg-secondary/20">
        <div className="container mx-auto">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              SERVICIOS <span className="text-primary">ADICIONALES</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-background/50 border border-white/5 hover:border-primary/30 transition-all duration-300 rounded-2xl flex items-start gap-6 cursor-default"
              >
                <div className="p-4 bg-secondary rounded-xl group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed group-hover:text-white/80 transition-colors">
                    {item.description}
                  </p>
                  <span className="text-xs font-display tracking-widest uppercase text-primary border border-primary/20 px-3 py-1 rounded-full">
                    {item.meta}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            ¿LISTO PARA EMPEZAR?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-xl mx-auto">
            La primera clase es el paso más difícil. Nosotros nos encargamos de que sea inolvidable.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-display tracking-wider text-lg px-8 py-6 h-auto w-full md:w-auto">
                RESERVAR MI LUGAR
              </Button>
            </Link>
            <Link to="/contacto">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-display tracking-wider text-lg px-8 py-6 h-auto w-full md:w-auto">
                CONSULTAR HORARIOS
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Servicios;
