import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Download, Play, FileText, ChevronRight, Lock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Biblioteca = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const gups = [
    { name: "Chon-Ji", rank: "9° Gup", moves: 19, videoId: "0geBPLJn0GI", color: "from-white to-yellow-100" },
    { name: "Dan-Gun", rank: "8° Gup", moves: 21, videoId: "8itOnuWW6kg", color: "from-yellow-200 to-yellow-400" },
    { name: "Do-San", rank: "7° Gup", moves: 24, videoId: "tOMeNiOs8H0", color: "from-green-200 to-green-400" },
    { name: "Won-Hyo", rank: "6° Gup", moves: 28, videoId: "upN83Tg2Z98", color: "from-blue-200 to-blue-400" },
    { name: "Yul-Gok", rank: "5° Gup", moves: 38, videoId: "Cckg254_ZpM", color: "from-blue-400 to-red-400" },
    { name: "Joong-Gun", rank: "4° Gup", moves: 32, videoId: "V5UjjpoyE_Y", color: "from-red-400 to-red-600" },
    { name: "Toi-Gye", rank: "3° Gup", moves: 37, videoId: "3MNBZORQ5Kw", color: "from-red-600 to-black" },
    { name: "Hwa-Rang", rank: "2° Gup", moves: 29, videoId: "a_oHkGuch-s", color: "from-red-700 to-black" },
    { name: "Choong-Moo", rank: "1° Gup", moves: 30, videoId: "c7bxiuCqGEM", color: "from-black to-slate-800" },
  ];

  const dans = [
    { name: "Kwang-Gae", rank: "1° Dan", moves: 39, videoId: "sIROpaedlRA" },
    { name: "Po-Eun", rank: "1° Dan", moves: 36, videoId: "A3cJQJR8rh0" },
    { name: "Ge-Baek", rank: "1° Dan", moves: 44, videoId: "_5-gTw8LIGg" },
  ];

  const resources = [
    {
      title: "Manual del Estudiante",
      category: "Teoría",
      size: "5.2 MB",
      type: "PDF",
      locked: false
    },
    {
      title: "Protocolo de Examen",
      category: "Reglamento",
      size: "1.8 MB",
      type: "PDF",
      locked: true
    },
    {
      title: "Diccionario Coreano",
      category: "Terminología",
      size: "3.1 MB",
      type: "PDF",
      locked: false
    },
  ];

  return (
    <div ref={containerRef} className="bg-background min-h-screen pt-20 overflow-hidden">

      {/* HEADER */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary/50 px-4 py-1 text-xs tracking-[0.3em] font-display uppercase">
              Centro de conocimiento
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-none">
              BIBLIOTECA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                TÉCNICA
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              El poder físico es limitado. El conocimiento es infinito.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT TABS */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="gups" className="w-full">
            <div className="flex justify-start md:justify-center mb-12 overflow-x-auto pb-4 scrollbar-hide">
              <TabsList className="bg-white/5 border border-white/10 p-1 rounded-full inline-flex">
                <TabsTrigger value="gups" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white font-display tracking-wider whitespace-nowrap">CINTURONES DE COLOR</TabsTrigger>
                <TabsTrigger value="dans" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white font-display tracking-wider whitespace-nowrap">CINTURONES NEGROS</TabsTrigger>
                <TabsTrigger value="resources" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white font-display tracking-wider whitespace-nowrap">RECURSOS</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="gups" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gups.map((form, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group relative bg-neutral-900 border border-white/5 hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    {/* Video Thumbnail Placeholder */}
                    <div className="aspect-video relative overflow-hidden bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${form.videoId}?controls=1`}
                        title={form.name}
                        className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                      <div className="absolute top-2 right-2 bg-black/80 backdrop-blur px-2 py-1 rounded text-xs font-bold text-white border border-white/10">
                        {form.moves} movs
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">{form.name}</h3>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{form.rank}</span>
                      </div>
                      <Button variant="ghost" className="w-full justify-between hover:bg-white/5 text-muted-foreground hover:text-white -ml-4 pl-4">
                        Ver detalles <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dans" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dans.map((form, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group relative bg-neutral-900 border border-white/5 hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    <div className="aspect-video relative overflow-hidden bg-black">
                      <div className="absolute inset-0 bg-gradient-to-tr from-black to-primary/20 z-10 pointer-events-none" />
                      <iframe
                        src={`https://www.youtube.com/embed/${form.videoId}?controls=1`}
                        title={form.name}
                        className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                      <div className="absolute bottom-2 left-2 z-20">
                        <span className="px-2 py-1 bg-primary text-white text-xs font-bold uppercase rounded">Black Belt</span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">{form.name}</h3>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{form.rank}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <BookOpen className="w-4 h-4" />
                        <span>{form.moves} Movimientos</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="resources" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {resources.map((res, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
                  >
                    <div className="p-4 bg-primary/10 rounded-xl">
                      {res.locked ? <Lock className="w-6 h-6 text-muted-foreground" /> : <FileText className="w-6 h-6 text-primary" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white">{res.title}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{res.category} • {res.size} • {res.type}</p>
                    </div>
                    <Button size="icon" variant="ghost" disabled={res.locked} className={res.locked ? "opacity-50" : "text-primary hover:text-white hover:bg-primary"}>
                      <Download className="w-5 h-5" />
                    </Button>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center p-8 bg-black/40 border border-white/5 rounded-2xl max-w-2xl mx-auto backdrop-blur">
                <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-sm">
                  Algunos materiales están protegidos y requieren acceso de alumno activo. <br />
                  <span className="text-primary hover:underline cursor-pointer">Inicia sesión</span> o solicita acceso en secretaría.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

    </div>
  );
};

export default Biblioteca;
