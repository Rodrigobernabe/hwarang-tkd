import { MapPin, Phone, Clock, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Contacto = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const contactMethods = [
    {
      icon: Phone,
      title: "WhatsApp Directo",
      value: "+54 9 2657 619592",
      action: "Enviar Mensaje",
      link: "https://wa.me/5492657619592",
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "hover:border-green-500/50"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@academia__hwarang",
      action: "Seguir",
      link: "https://www.instagram.com/academia__hwarang/",
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      border: "hover:border-pink-500/50"
    },
    {
      icon: MapPin,
      title: "Dojang",
      value: "San Luis, Argentina",
      action: "Ver Mapa",
      link: "https://maps.app.goo.gl/X16Mook2KTmjjWST9",
      color: "text-primary",
      bg: "bg-primary/10",
      border: "hover:border-primary/50"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-20 bg-background overflow-hidden">

      {/* HEADER */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            style={{ y: headerY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 leading-none">
              ÚNITE A LA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                LEGIÓN
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Estamos listos para recibirte. El primer paso es contactarnos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DIRECT CONTACT CARDS */}
      <section className="py-12 px-4 relative z-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto -mt-10">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className={`group glass-strong p-8 rounded-3xl border border-white/5 ${method.border} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10`}
              >
                <div className={`w-14 h-14 ${method.bg} rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-opacity-20`}>
                  <method.icon className={`w-7 h-7 ${method.color}`} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">{method.title}</h3>
                <p className="text-muted-foreground mb-6 font-mono text-sm">{method.value}</p>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors">
                  {method.action} <Send className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & SCHEDULE */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Schedule Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                TU LUGAR DE <br />
                <span className="text-primary">ENTRENAMIENTO</span>
              </h2>

              <div className="glass-strong p-8 rounded-3xl border border-white/5 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Horarios de Clase</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p className="flex justify-between w-full border-b border-white/10 pb-1">
                        <span>Martes</span>
                        <span className="text-white shrink-0 ml-2">17:30 - 19:00</span>
                      </p>
                      <p className="flex justify-between w-full border-b border-white/10 pb-1">
                        <span>Jueves</span>
                        <span className="text-white shrink-0 ml-2">17:30 - 19:00</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ubicación</h3>
                    <p className="text-muted-foreground">
                      Palacio Municipal de los Deportes "José María Gatica",<br />
                      Villa Mercedes, San Luis.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden glass-strong border border-white/10 relative"
            >
              <div className="absolute inset-0 bg-primary/20 z-10 pointer-events-none mix-blend-overlay" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d869.8801725962635!2d-65.4582498677046!3d-33.665615353233264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d16a6687435aaf%3A0x805a77dbaa5b09f4!2sPalacio%20Municipal%20de%20los%20Deportes%20%22Jos%C3%A9%20Mar%C3%ADa%20Gatica%22!5e1!3m2!1ses!2sar!4v1771519041079!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-700"
              />
            </motion.div>

          </div>
        </div >
      </section >

    </div >
  );
};

export default Contacto;
