import logo from "../assets/logo-new.png";
import heroClass from "../assets/hero-new.jpg";

const OGPreview = () => {
    return (
        <div className="w-[1200px] h-[630px] overflow-hidden font-display bg-black relative flex flex-col items-center justify-center">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={heroClass} className="w-full h-full object-cover opacity-40" alt="Background" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-8">

                {/* Logo */}
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                    <img src={logo} className="w-64 h-auto drop-shadow-2xl relative z-10" alt="Logo" />
                </div>

                {/* Text */}
                <div className="text-center space-y-2 mt-4">
                    <h1 className="text-white text-8xl tracking-widest leading-none drop-shadow-lg font-bold">
                        HWA RANG
                    </h1>
                    <p className="text-primary text-4xl tracking-[0.5em] uppercase font-bold drop-shadow-md">
                        ARTS STUDIO
                    </p>
                </div>

                {/* Tagline / URL */}
                <div className="absolute bottom-[-150px] w-full flex justify-between items-end px-12 pb-12 opacity-80 min-w-[1000px]">
                    <span className="text-white/60 text-2xl tracking-widest font-sans">TAEKWONDO ITF</span>
                    <span className="text-white/60 text-2xl tracking-widest font-sans">hwarang-tkd.vercel.app</span>
                </div>

            </div>

            {/* Decorative Corner Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary blur-[150px] opacity-30 z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 blur-[150px] opacity-20 z-0"></div>

        </div>
    );
};

export default OGPreview;
