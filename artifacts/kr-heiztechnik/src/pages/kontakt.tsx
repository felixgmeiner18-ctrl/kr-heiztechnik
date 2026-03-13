import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Seo } from "@/components/seo";

export default function Kontakt() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <>
      <Seo 
        title="Kontakt | KR Heiztechnik Nuziders"
        description="Nehmen Sie Kontakt mit KR Heiztechnik auf. Ihr Installateur für Heizung, Sanitär und Gas in Nuziders, Vorarlberg."
      />

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Kontakt</h1>
            <p className="text-xl text-muted-foreground">
              Ruf einfach an – ich meld mich. Oder schreib mir eine Nachricht, wenn es nicht ganz so eilt. Ich berate Sie gerne direkt vor Ort.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Details Card */}
            <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-8">Hier erreichen Sie mich:</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Standort</h4>
                      <p className="text-muted-foreground">Walgaustraße 67<br/>A-6714 Nuziders<br/>Vorarlberg, Österreich</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Telefon</h4>
                      <a href="tel:+436645319004" className="text-muted-foreground hover:text-primary transition-colors text-lg inline-block">
                        +43 664 / 531 90 04
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">E-Mail</h4>
                      <a href="mailto:info@kr-heiztechnik.at" className="text-muted-foreground hover:text-primary transition-colors text-lg inline-block break-all">
                        info@kr-heiztechnik.at
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Erreichbarkeit</h4>
                      <p className="text-muted-foreground">Montag bis Freitag:<br/>07:00 – 17:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile / Map Area */}
            <div className="space-y-8">
              <div className="glass rounded-3xl overflow-hidden border border-white/10 shadow-xl group">
                <img 
                  src={`${baseUrl}images/vivian4.webp`} 
                  alt="Vivian Krientschnig" 
                  className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6 bg-card border-t border-white/5 relative">
                  <div className="absolute -top-6 right-6 w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center text-white font-display font-bold italic text-xl border-4 border-card">
                    V
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Vivian Krientschnig</h3>
                  <p className="text-muted-foreground">Ihr Installateurmeister</p>
                </div>
              </div>

              {/* Placeholder for Map - Just a stylized box since we can't easily embed interactive without a key, but a link to GMaps works well */}
              <a 
                href="https://maps.google.com/?q=Walgaustraße+67,Nuziders" 
                target="_blank" 
                rel="noreferrer"
                className="block glass rounded-3xl p-6 border border-white/10 hover:border-primary/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white mb-1">Auf Google Maps öffnen</h4>
                    <p className="text-sm text-muted-foreground">So finden Sie mich in Nuziders</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
