import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Phone, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Seo } from "@/components/seo";

const services = [
  {
    id: "heizung",
    title: "Heizungstechnik",
    desc: "Wärmepumpen, Gasheizungen, Brennwertkessel. Ich sag Ihnen ehrlich, was zu Ihrem Haus passt.",
    img: "heizung-boiler.png",
    path: "/heizung",
    tag: "Planung & Montage",
  },
  {
    id: "sanitaer",
    title: "Sanitär & Badsanierung",
    desc: "Aus jedem alten Bad wird ein Wohlfühlort. Komplettsanierung aus einer Hand.",
    img: "bad-nacher.png",
    path: "/sanitaer",
    tag: "Vorher → Nachher",
  },
  {
    id: "gas",
    title: "Erdgas & Flüssiggas",
    desc: "Zertifizierte Gasinstallation nach Vorschrift. Sicherheit hat hier keine Kompromisse.",
    img: "gas.webp",
    path: "/gas",
    tag: "Sicherheit zuerst",
  },
  {
    id: "notheizung",
    title: "Mobile Notheizung",
    desc: "Heizung streikt? Ich bin da. Mit mobiler Heizzentrale, rund um die Uhr.",
    img: "notheizung1.png",
    path: "/notheizung",
    tag: "24h Bereitschaft",
  },
];

const stats = [
  { value: "200+", label: "Projekte abgeschlossen" },
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "24h", label: "Notdienst verfügbar" },
  { value: "100%", label: "Aus Vorarlberg" },
];

const testimonials = [
  {
    name: "Familie Mäser",
    location: "Nuziders",
    text: "Vivian hat uns eine Wärmepumpe eingebaut. Alles läuft einwandfrei, war pünktlich, sauber und hat uns genau erklärt was er macht. Sehr empfehlenswert!",
    stars: 5,
  },
  {
    name: "T. Rhomberg",
    location: "Bludenz",
    text: "Badsanierung im alten Bestand – kein einfaches Projekt. Vivian hat's trotzdem top hingekriegt, keine Überraschungen beim Preis. Genau so muss das sein.",
    stars: 5,
  },
  {
    name: "A. Konzett",
    location: "Thüringen",
    text: "Heizung ausgefallen an einem Sonntagabend. Vivian war am nächsten Morgen da mit der mobilen Heizzentrale. Echt klasse, so einen Installateur möchte man haben.",
    stars: 5,
  },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  };
}

export default function Home() {
  const baseUrl = import.meta.env.BASE_URL;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Krientschnig Heiztechnik",
    "description": "Heizung, Sanitär und Gas Installateur in Nuziders, Vorarlberg",
    "telephone": "+436645319004",
    "email": "info@kr-heiztechnik.at",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Walgaustraße 67",
      "addressLocality": "Nuziders",
      "postalCode": "6714",
      "addressCountry": "AT",
    },
  };

  return (
    <>
      <Seo
        title="KR Heiztechnik Nuziders | Heizung, Sanitär & Gas Vorarlberg"
        description="Ihr Heizungs- und Sanitärinstallateur im Walgau. Vivian Krientschnig – professionell, persönlich, verlässlich. Nuziders und ganz Vorarlberg."
      >
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Seo>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <img
            src={`${baseUrl}images/vivian1.png`}
            alt="Vivian Krientschnig bei der Arbeit"
            className="w-full h-full object-cover object-center scale-105"
            style={{ filter: "brightness(0.55) saturate(0.9)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
        </div>

        {/* Decorative grid */}
        <div className="absolute inset-0 bg-grid opacity-30" />

        {/* Orange glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-semibold mb-8 tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Installateurmeister · Nuziders · Vorarlberg
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.0] mb-8"
            >
              <span className="block text-white mb-2">Do isch</span>
              <span className="gradient-text block pb-2">Leistung<br/>dahinter!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl"
            >
              Ich bin Vivian. Wenn bei Ihnen die Heizung ausfällt oder das Bad streikt, 
              bin ich der Erste, den Sie anrufen. Keine Hotline, keine Warteschleife – 
              direkte Hilfe im Walgau und ganz Vorarlberg.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:+436645319004"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base bg-primary text-white hover:bg-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(232,97,26,0.45)]"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen
              </a>
              <Link
                href="#leistungen"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base bg-white/8 text-white border border-white/15 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
              >
                Meine Leistungen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────────────── */}
      <section className="relative bg-background border-y border-white/5 py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="py-10 px-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold font-display gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÜBER VIVIAN ──────────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Photo collage */}
            <motion.div {...fadeUp()} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-white/8 shadow-2xl">
                    <img
                      src={`${baseUrl}images/vivian3.webp`}
                      alt="Vivian bei der Arbeit"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-square border border-white/8 shadow-xl">
                    <img
                      src={`${baseUrl}images/heizung-waermepumpe.png`}
                      alt="Wärmepumpe Installation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-10">
                  <div className="rounded-2xl overflow-hidden aspect-square border border-white/8 shadow-xl">
                    <img
                      src={`${baseUrl}images/vivian2.png`}
                      alt="Vivian Krientschnig"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-white/8 shadow-2xl">
                    <img
                      src={`${baseUrl}images/bad-nacher.png`}
                      alt="Fertiges Badezimmer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-strong rounded-2xl p-4 shadow-2xl flex items-center gap-3 border border-white/10 animate-float">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Meisterbetrieb</p>
                  <p className="text-xs text-muted-foreground">geprüft & zertifiziert</p>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div {...fadeUp(0.15)}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Über mich</p>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Ein Handwerker,<br/>der sein Wort hält.
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-8" />

              {/* Pull quote */}
              <div className="relative pl-6 border-l-2 border-primary mb-8">
                <Quote className="absolute -top-1 -left-1 w-4 h-4 text-primary opacity-60" />
                <p className="text-xl text-white/90 italic font-medium leading-relaxed">
                  „Wenn ich fertig bin, muss's laufen. Nicht fast laufen – laufen. Das ist mein Anspruch bei jedem Auftrag."
                </p>
                <p className="mt-3 text-sm text-muted-foreground font-semibold">— Vivian Krientschnig</p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-5">
                Mein Name ist <strong className="text-white">Vivian Krientschnig</strong>. Ich bin Installateurmeister aus Nuziders und mach das, was ich mach, weil ich es liebe. Seit über 15 Jahren kümmere ich mich um Heizungen, Bäder und Gasanlagen im Walgau und der ganzen Region Vorarlberg.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Ich bin kein Großbetrieb mit Warteschleife. Bei mir sprechen Sie direkt mit dem Menschen, der bei Ihnen auch wirklich rankommt. Das schätzen meine Kunden – und genau deswegen kommen die meisten über Weiterempfehlung zu mir.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: "Direkt & ehrlich", desc: "Kein Rundum-sorglos-Paket, sondern klare Ansagen" },
                  { label: "Zuverlässig", desc: "Pünktlich, sauber, und Preis bleibt Preis" },
                  { label: "Lokal verwurzelt", desc: "Walgau und Vorarlberg sind mein Revier" },
                ].map((f, i) => (
                  <div key={i} className="glass rounded-2xl p-4 border border-white/5 hover:border-primary/30 transition-colors">
                    <p className="font-bold text-white text-sm mb-1">{f.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LEISTUNGEN ───────────────────────────────────────────────────── */}
      <section id="leistungen" className="py-28 bg-card/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Was ich mache</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5">Meine Leistungen</h2>
            <p className="text-muted-foreground text-lg">
              Von der tropfenden Leitung bis zur kompletten Heizungsanlage – alles aus einer Hand, ohne lästige Koordination.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                {...fadeUp(idx * 0.1)}
              >
                <Link
                  href={service.path}
                  className="group relative flex gap-6 p-6 rounded-3xl bg-card border border-white/5 hover:border-primary/40 transition-all duration-400 hover:shadow-[0_8px_60px_rgba(232,97,26,0.12)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />

                  <div className="shrink-0 w-32 h-28 rounded-2xl overflow-hidden border border-white/5">
                    <img
                      src={`${baseUrl}images/${service.img}`}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="relative z-10 flex flex-col justify-between flex-grow min-w-0">
                    <div>
                      <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2">{service.tag}</span>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 text-primary text-sm font-semibold mt-4">
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Kundenstimmen</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Was Kunden sagen</h2>
            <p className="text-muted-foreground">Die meisten meiner Kunden kommen über Weiterempfehlung. Das sagt eigentlich alles.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.12)}
                className="gradient-border rounded-3xl p-7 bg-card hover:shadow-[0_4px_40px_rgba(232,97,26,0.1)] transition-all duration-300 group"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-6 text-sm">„{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary text-sm font-bold">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${baseUrl}images/vivian4.webp`}
            alt="Vivian Krientschnig"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.25) saturate(0.7)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.div {...fadeUp()}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Loslegen</p>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Bereit für Ihr Projekt?</h2>
              <p className="text-white/70 text-lg mb-10 leading-relaxed">
                Rufen Sie einfach an. Kein Formular, keine Warteschleife. Ich schau mir Ihren Auftrag an und sag Ihnen direkt, was machbar ist und was es kostet.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+436645319004"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base bg-primary text-white hover:bg-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(232,97,26,0.45)]"
                >
                  <Phone className="w-5 h-5" />
                  +43 664 / 531 90 04
                </a>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base bg-white/10 text-white border border-white/15 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                >
                  Kontaktseite
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
