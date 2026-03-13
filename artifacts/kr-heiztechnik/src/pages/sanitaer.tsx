import { Link } from "wouter";
import { ArrowRight, Droplets, Wrench, Sparkles } from "lucide-react";
import { Seo } from "@/components/seo";
import { Slideshow } from "@/components/slideshow";

interface Project {
  title: string;
  desc: string;
  slides: Array<{ src: string; label: string; alt: string }>;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-3xl overflow-hidden border border-white/10 bg-card">
      <Slideshow
        slides={project.slides}
        className="aspect-[4/3]"
        imageClassName="w-full h-full object-cover"
        autoPlayMs={3500}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm">{project.desc}</p>
      </div>
    </div>
  );
}

export default function Sanitaer() {
  const baseUrl = import.meta.env.BASE_URL;

  const projects: Project[] = [
    {
      title: "Badezimmer Komplettsanierung",
      desc: "Von der alten Badewanne zur modernen ebenerdigen Dusche mit neuem Waschbeckenmöbel und Beleuchtung.",
      slides: [
        { src: `${baseUrl}images/bad-vorher.png`, label: "Vorher", alt: "Badezimmer vorher" },
        { src: `${baseUrl}images/bad-nacher.png`, label: "Nachher", alt: "Badezimmer nachher" },
      ],
    },
    {
      title: "Gäste-WC Modernisierung",
      desc: "Komplette Erneuerung des Gäste-WCs – von der alten Fliese bis zum modernen Hänge-WC mit neuer Verrohrung.",
      slides: [
        { src: `${baseUrl}images/klo1-vorher.png`, label: "Vorher", alt: "Gäste-WC vorher" },
        { src: `${baseUrl}images/klo1-waehrend.png`, label: "Während", alt: "Gäste-WC während des Umbaus" },
        { src: `${baseUrl}images/klo1-nacher.png`, label: "Nachher", alt: "Gäste-WC nachher" },
      ],
    },
    {
      title: "WC-Anlage Sanierung",
      desc: "Abbruch der alten Fliesen, neue Vorwandinstallation und edles Naturstein-Finish für ein zeitloses Ergebnis.",
      slides: [
        { src: `${baseUrl}images/klo2-vorher.png`, label: "Vorher", alt: "WC-Anlage vorher" },
        { src: `${baseUrl}images/klo2-waehrend.png`, label: "Während", alt: "WC-Anlage während des Umbaus" },
        { src: `${baseUrl}images/klo2-nacher.png`, label: "Nachher", alt: "WC-Anlage nachher" },
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Badsanierung Nuziders Vorarlberg | Sanitär Installateur"
        description="Komplette Badsanierungen und Sanitärinstallationen. KR Heiztechnik verwandelt Ihr altes Bad in eine moderne Wohlfühloase."
      />

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <Droplets className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Sanitär & Badsanierung</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aus jedem Bad wird ein Wohlfühlort. Ich übernehme die komplette Planung, Verrohrung und den Aufbau – alles aus einer Hand, ohne lästige Koordination.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="glass p-8 rounded-3xl">
              <Sparkles className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Komplettsanierung</h3>
              <p className="text-muted-foreground">Rundum-Erneuerung aus einer Hand – Rückbau, Verrohrung und Aufbau. Ich koordiniere alles, Sie lehnen sich zurück.</p>
            </div>
            <div className="glass p-8 rounded-3xl">
              <Wrench className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Rohrleitungen</h3>
              <p className="text-muted-foreground">Fachmännische Verlegung von Kalt- und Warmwasserleitungen sowie Abwassersystemen nach modernsten Standards.</p>
            </div>
            <div className="glass p-8 rounded-3xl">
              <Droplets className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">WC- & Duschanlagen</h3>
              <p className="text-muted-foreground">Von bodenebenen Duschen bis zu modernen Hänge-WCs – barrierefreie und elegante Lösungen für Ihr Zuhause.</p>
            </div>
          </div>

          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Unsere Projekte</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-6 mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sehen Sie selbst, was möglich ist. Jedes Projekt zeigt den kompletten Weg – von Vorher bis Nachher.
              Die Bildershows laufen automatisch, oder Sie blättern selbst mit den Pfeilen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>

        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-card to-background border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Zeit für Ihr neues Bad?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ich komme gern vorbei und schau mir Ihre Räumlichkeiten an – dann reden wir in Ruhe über die Möglichkeiten und was es kostet.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25"
          >
            Beratungstermin vereinbaren
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
