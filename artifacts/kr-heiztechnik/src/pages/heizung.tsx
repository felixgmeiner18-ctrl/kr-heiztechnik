import { Link } from "wouter";
import { ArrowRight, ThermometerSun, Flame, Settings, CheckCircle2 } from "lucide-react";
import { Seo } from "@/components/seo";

export default function Heizung() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <>
      <Seo 
        title="Heizung Nuziders | Wärmepumpe & Gasheizung Vorarlberg"
        description="Professionelle Heizungsinstallation von KR Heiztechnik. Wärmepumpen, Gasheizungen und zuverlässige Wartung im Walgau und Vorarlberg."
      />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-card">
        <div className="absolute inset-0">
          <img 
            src={`${baseUrl}images/heizung-boiler.png`} 
            alt="Heizung Installation Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Heizungstechnik</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Eine neue Heizung ist eine große Entscheidung. Ich berate Sie ehrlich, was zu Ihrem Haus passt – und was nicht.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Wärmepumpen */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <ThermometerSun className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Wärmepumpen</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Jeder redet drüber, aber passt sie auch zu Ihrem Haus? Ich schau mir das genau an und sag Ihnen ehrlich, ob eine Wärmepumpe bei Ihnen Sinn macht. Wenn ja, bau ich sie Ihnen so ein, dass sie sauber und leise läuft.
              </p>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> Nachhaltig und umweltschonend</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> Unabhängig von fossilen Brennstoffen</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> Attraktive staatliche Förderungen möglich</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> Ideal für Neubau und Sanierung</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                <img 
                  src={`${baseUrl}images/heizung-waermepumpe.png`} 
                  alt="Wärmepumpe Installation" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Gasheizungen */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                <img 
                  src={`${baseUrl}images/heizung-boiler.png`} 
                  alt="Gasheizung Brennwertkessel" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Flame className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Gasheizungen & Brennwertkessel</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Wenn Sie eine bestehende Gasheizung haben und diese tauschen müssen, bin ich Ihr Mann. Ich baue das ordentlich ein und kümmere mich darum, dass sie wieder sauber läuft.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Moderne Brennwertgeräte holen das Maximum an Energie aus dem Gas raus. Das senkt nicht nur Ihre Heizkosten, sondern ist auch besser für die Umwelt.
              </p>
            </div>
          </div>

          {/* Wartung & Service */}
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Settings className="w-64 h-64" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">Wartung & Service</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Eine Heizung, die nicht gewartet wird, fällt meistens am kältesten Tag im Jahr aus. Ich schau regelmäßig drüber, damit das nicht passiert – und damit Ihre Anlage nicht unnötig viel Energie frisst.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 text-white font-medium">
                <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Überprüfung der Funktionen
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Reinigung des Brennraums
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Abgasmessung
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Optimierung der Einstellungen
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Sie überlegen wegen einer neuen Heizung?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Wir schauen uns das vor Ort an und ich sag Ihnen, was machbar ist. Ruf einfach an.
          </p>
          <Link 
            href="/kontakt" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25"
          >
            Jetzt anrufen oder schreiben
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
