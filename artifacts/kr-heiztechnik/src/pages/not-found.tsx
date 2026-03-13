import { Link } from "wouter";
import { AlertCircle, Home } from "lucide-react";
import { Seo } from "@/components/seo";

export default function NotFound() {
  return (
    <>
      <Seo 
        title="Seite nicht gefunden | KR Heiztechnik"
        description="Die gesuchte Seite konnte leider nicht gefunden werden."
      />
      <div className="min-h-[80vh] flex items-center justify-center pt-20 px-4">
        <div className="text-center glass p-12 rounded-3xl border border-white/10 max-w-lg w-full">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">Seite nicht gefunden</h2>
          <p className="text-muted-foreground mb-8">
            Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5" />
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </>
  );
}
