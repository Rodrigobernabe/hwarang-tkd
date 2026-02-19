import logo from "@/assets/logo-new.png";
import { Link } from "react-router-dom";
import { MapPin, Phone, Instagram, Clock, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* Brand Column */}
          <div className="md:col-span-5 space-y-8">
            <Link to="/" className="flex items-center gap-4">
              <img src={logo} alt="Hwa Rang Logo" className="h-16 md:h-20 w-auto" />
              <div>
                <span className="block font-display font-bold text-2xl text-white tracking-widest">HWA RANG</span>
                <span className="text-xs text-white/50 tracking-[0.3em] uppercase">Arts Studio</span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm font-light">
              Donde la tradición se encuentra con la excelencia moderna. Formando carácter y espíritu desde 2013.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-white mb-6 tracking-widest uppercase">Explorar</h4>
            <ul className="space-y-4">
              {[
                { name: "Inicio", path: "/" },
                { name: "Nosotros", path: "/nosotros" },
                { name: "Para vos", path: "/servicios" },
                { name: "Biblioteca", path: "/biblioteca" },
                { name: "Contacto", path: "/contacto" }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-white mb-6 tracking-widest uppercase">Contacto</h4>
            <div className="space-y-6">
              <a
                href="https://maps.app.goo.gl/X16Mook2KTmjjWST9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="p-2 bg-white/5 rounded border border-white/10 group-hover:border-primary/50 transition-colors">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-primary transition-colors flex items-center gap-2">
                    Ubicación <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                  <p className="text-sm text-muted-foreground">Villa Mercedes, San Luis</p>
                </div>
              </a>

              <a
                href="https://wa.me/5492657619592"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="p-2 bg-white/5 rounded border border-white/10 group-hover:border-primary/50 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-primary transition-colors">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">+54 9 2657 619592</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/5 rounded border border-white/10">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Horarios</p>
                  <p className="text-sm text-muted-foreground">Martes y Jueves: 17:30 - 19:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Hwa Rang Arts Studio. Todos los derechos reservados.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/academia__hwarang/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-white"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
