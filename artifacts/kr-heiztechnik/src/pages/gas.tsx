import { Link } from "wouter";
import { ArrowRight, FlameKindling, Activity, AlertTriangle, PenTool } from "lucide-react";
import { Seo } from "@/components/seo";

export default function Gas() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <>
      <Seo 
        title="Erdgas & Flüssiggas Nuziders Vorarlberg | KR Heiztechnik"
        description="Sichere Installation und Wartung von Erdgas- und Flüssiggasanlagen. Ihr zertifizierter Gas-Installateur in Vorarlberg."
      />

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
                <FlameKindling className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide uppercase">Zertifizierte Sicherheit</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Erdgas &<br/>Flüssiggas
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Bei Gasanlagen gibt's keinen Spielraum für Fehler. Ich bin zertifiziert und mach das nur nach Vorschrift. Da kenn ich nix.
              </p>
              <Link 
                href="/kontakt" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25"
              >
                Gasanlage anfragen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl glass">
                <img 
                  src={`${baseUrl}images/gas.webp`} 
                  alt="Gasflaschen Installation" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="glass p-8 md:p-10 rounded-3xl hover:border-primary/50 transition-colors">
              <Activity className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Erdgasanschlüsse</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ich verlege Ihre Erdgasleitungen vom Hausanschluss bis zum Gerät. Alles sauber, dicht und nach den neuesten Sicherheitsstandards.
              </p>
            </div>

            <div className="glass p-8 md:p-10 rounded-3xl hover:border-primary/50 transition-colors">
              <PenTool className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Flüssiggasanlagen</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wenn Sie kein Erdgas vor der Tür haben, bauen wir eine Flüssiggasanlage auf. Flaschen oder Tank – ich montier das so, dass es sicher läuft.
              </p>
            </div>

            <div className="glass p-8 md:p-10 rounded-3xl hover:border-primary/50 transition-colors">
              <AlertTriangle className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Überprüfung & Wartung</h3>
              <p className="text-muted-foreground leading-relaxed">
                Eine Gasanlage muss dicht sein. Punkt. Ich mache die gesetzlich vorgeschriebenen Überprüfungen, messe alles durch und beheb jeden kleinsten Fehler.
              </p>
            </div>

            <div className="glass p-8 md:p-10 rounded-3xl hover:border-primary/50 transition-colors">
              <FlameKindling className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Gasgeräte montieren</h3>
              <p className="text-muted-foreground leading-relaxed">
                Egal ob Gasherd in der Küche oder die Gastherme im Keller: Ich schließ die Geräte fachmännisch an, damit Sie ruhig schlafen können.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
