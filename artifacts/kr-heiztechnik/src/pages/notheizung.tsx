import { Link } from "wouter";
import { ArrowRight, Truck, Clock, Zap, Home } from "lucide-react";
import { Seo } from "@/components/seo";

export default function Notheizung() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <>
      <Seo 
        title="Mobile Notheizung Vorarlberg | Notfallheizung"
        description="Heizungsausfall? Die mobile Heizzentrale von KR Heiztechnik ist sofort einsatzbereit für schnelle Wärme in Vorarlberg."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-card">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-primary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Mobile Notheizung</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ich weiß wie das ist, wenn's kalt wird und die Heizung streikt. Deswegen hab ich die mobile Heizzentrale – damit ich schnell helfen kann.
            </p>
            <a 
              href="tel:+436645319004" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 animate-pulse-slow"
            >
              Notfall-Telefon: +43 664 / 531 90 04
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">Schnelle Wärme, wenn's brennt (oder kalt ist)</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wenn mitten im Winter die Heizung den Geist aufgibt, zählt jede Stunde. Genau dafür hab ich meinen Heiz-Anhänger. Ich fahr vor, schließ das Ding an Ihr Haus an und Sie sitzen wieder im Warmen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Der Anhänger ist eine komplett ausgestattete Heizanlage. Er liefert sofort Wärme, egal ob für Ihr Einfamilienhaus oder auch, wenn ein größeres Gebäude mal eine Überbrückung braucht.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="glass p-4 rounded-2xl">
                  <Clock className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-bold text-white mb-1">Kurze Reaktionszeit</h4>
                  <p className="text-sm text-muted-foreground">Schnell bei Ihnen am Hof</p>
                </div>
                <div className="glass p-4 rounded-2xl">
                  <Zap className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-bold text-white mb-1">Einfach anschließen</h4>
                  <p className="text-sm text-muted-foreground">An Ihre Rohre dran, fertig</p>
                </div>
                <div className="glass p-4 rounded-2xl">
                  <Truck className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-bold text-white mb-1">Macht alles selber</h4>
                  <p className="text-sm text-muted-foreground">Steuert sich von allein</p>
                </div>
                <div className="glass p-4 rounded-2xl">
                  <Home className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-bold text-white mb-1">Für jedes Haus</h4>
                  <p className="text-sm text-muted-foreground">Passt fast überall</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid gap-4">
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={`${baseUrl}images/notheizung1.png`} alt="Mobile Heizzentrale Anhänger" className="w-full h-auto object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl overflow-hidden border border-white/10 shadow-xl">
                    <img src={`${baseUrl}images/notheizung2.png`} alt="Anschlüsse Heizzentrale" className="w-full h-48 object-cover" />
                  </div>
                  <div className="rounded-3xl overflow-hidden border border-white/10 shadow-xl relative">
                    <img src={`${baseUrl}images/vivian2.png`} alt="Einsatz der Heizzentrale" className="w-full h-48 object-cover object-top" />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-16 bg-card border-t border-white/5 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Heizung geplant sanieren?</h2>
          <p className="text-muted-foreground mb-6">
            Wenn wir Ihre Heizung umbauen, stell ich den Anhänger einfach in die Einfahrt. So müssen Sie an keinem einzigen Tag kalt duschen und wir können drinnen in Ruhe arbeiten.
          </p>
          <Link href="/kontakt" className="text-primary hover:text-white font-semibold inline-flex items-center gap-2 transition-colors">
            Schreiben Sie mir <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
