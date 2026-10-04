import { createFileRoute } from "@tanstack/react-router";
import {
  Sunrise,
  Waves,
  Fish,
  Flower2,
  Wind,
  Timer,
  Music2,
  Camera,
  Feather,
} from "lucide-react";

import heroSakura from "@/assets/hero-sakura.jpg";
import experienceKoi from "@/assets/experience-koi.jpg";
import philosophyWater from "@/assets/philosophy-water.jpg";
import { SakuraPetals } from "@/components/SakuraPetals";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sora no Mizu — La calma japonesa en tu bolsillo" },
      {
        name: "description",
        content:
          "Una experiencia zen donde el agua, la luz y los pétalos crean un espacio de contemplación. Meditación, respiración guiada y estética japonesa.",
      },
      { property: "og:title", content: "Sora no Mizu — La calma japonesa en tu bolsillo" },
      {
        property: "og:description",
        content:
          "Entra en un río japonés que respira contigo: ondas suaves, peces sumi-e y pétalos de sakura.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: Sunrise, label: "Escenas zen de mañana, tarde y noche" },
  { icon: Waves, label: "Agua animada con ondas suaves" },
  { icon: Fish, label: "Peces minimalistas sumi-e" },
  { icon: Flower2, label: "Pétalos de sakura en movimiento" },
  { icon: Wind, label: "Modo respiración guiada" },
  { icon: Timer, label: "Temporizador zen de 3, 5 o 10 minutos" },
  { icon: Music2, label: "Sonido natural: agua, viento, luciérnagas" },
  { icon: Camera, label: "Captura de postales zen" },
  { icon: Feather, label: "Interfaz elegante y silenciosa" },
];

function Landing() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-20 pt-28 sm:px-10 lg:px-16">
        <img
          src={heroSakura}
          alt="Rama de sakura sobre un lago en calma, pintada en acuarela"
          width={1920}
          height={1200}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/55 to-background/20" />
        <SakuraPetals />

        <div className="relative mx-auto w-full max-w-3xl text-center">
          <p className="text-kicker">空の水 · Sora no Mizu</p>
          <h1 className="mt-8 font-display text-4xl leading-[1.18] font-light sm:text-5xl lg:text-6xl">
            Sora no Mizu
            <span className="mt-3 block text-2xl text-muted-foreground sm:text-3xl lg:text-4xl">
              La calma japonesa en tu bolsillo
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Una experiencia zen donde el agua, la luz y los pétalos crean un espacio de
            contemplación.
          </p>
          <div className="mx-auto mt-10 max-w-lg">
            <div className="hairline" />
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-sm leading-[1.9] text-foreground/75">
            Entra en un río japonés que respira contigo. Ondas suaves, peces sumi-e, pétalos de
            sakura y luz que guía tu respiración. Una aplicación creada para momentos de belleza,
            meditación y silencio.
          </p>
          <a href="#descargar" className="btn-zen btn-zen-hover mt-12">
            Descargar en Google Play
          </a>
        </div>
      </section>

      {/* La experiencia */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-28 sm:px-10 lg:grid-cols-2 lg:gap-24 lg:py-40">
        <div>
          <p className="text-kicker">La experiencia</p>
          <h2 className="mt-6 font-display text-3xl font-light sm:text-4xl">Un refugio visual</h2>
          <p className="mt-8 max-w-md text-sm leading-[2] text-muted-foreground sm:text-base">
            Sora no Mizu no es un juego. Es un espacio de calma inspirado en la estética japonesa:
            agua clara, rocas en acuarela, sakuras, luciérnagas y sonidos naturales.
          </p>
        </div>
        <div className="relative">
          <img
            src={experienceKoi}
            alt="Dos peces koi sumi-e nadando entre ondas suaves"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full rounded-sm object-cover"
          />
          <span
            aria-hidden
            className="animate-ripple absolute left-[22%] top-[28%] h-24 w-24 rounded-full border border-mizu/60"
          />
        </div>
      </section>

      {/* Funciones */}
      <section className="border-y border-border/60 bg-card/60 px-6 py-28 sm:px-10 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-kicker">Funciones principales</p>
            <h2 className="mt-6 font-display text-3xl font-light sm:text-4xl">
              Nueve gestos de serenidad
            </h2>
          </div>
          <ul className="mt-16 grid gap-px overflow-hidden border border-border/60 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-start gap-4 bg-background/70 p-8 outline outline-1 outline-border/50 transition-colors duration-700 hover:bg-accent/40"
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 stroke-[1] text-mizu" aria-hidden />
                <span className="text-sm leading-relaxed text-foreground/80">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Para quién es */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center sm:px-10 lg:py-40">
        <p className="text-kicker">Para quién es</p>
        <h2 className="mt-6 font-display text-3xl font-light sm:text-4xl">Para tu bienestar</h2>
        <p className="mx-auto mt-8 max-w-xl text-sm leading-[2] text-muted-foreground sm:text-base">
          Ideal para meditación, yoga, descanso, lectura o simplemente para contemplar belleza.
          Diseñada para usuarios franceses y españoles que buscan serenidad y estética japonesa.
        </p>
        <div className="mx-auto mt-12 flex items-center justify-center">
          <span
            aria-hidden
            className="animate-breathe block h-20 w-20 rounded-full bg-gradient-to-br from-sakura/50 via-gold/40 to-mizu/50 blur-[2px]"
          />
        </div>
      </section>

      {/* Filosofía */}
      <section className="relative isolate overflow-hidden px-6 py-36 sm:px-10 lg:py-48">
        <img
          src={philosophyWater}
          alt="Superficie de agua en calma al atardecer con una onda concéntrica"
          width={1920}
          height={1008}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-dusk/55" />
        <div className="relative mx-auto max-w-2xl text-center text-dusk-foreground">
          <p className="text-kicker !text-dusk-foreground/70">Filosofía</p>
          <h2 className="mt-6 font-display text-3xl font-light sm:text-4xl">La poética del agua</h2>
          <p className="mt-10 font-display text-xl leading-[2] tracking-wide sm:text-2xl">
            Cada onda es una respiración. Cada pétalo es un instante. Cada pez es un pensamiento
            tranquilo.
          </p>
          <p className="mt-8 text-sm leading-[2] text-dusk-foreground/80">
            Sora no Mizu es un recordatorio: la calma también es un camino.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section
        id="descargar"
        className="relative mx-auto max-w-3xl px-6 py-32 text-center sm:px-10 lg:py-44"
      >
        <h2 className="font-display text-3xl font-light sm:text-4xl">
          Descubre un espacio donde el silencio habla.
        </h2>
        <a href="#descargar" className="btn-zen btn-zen-hover mt-12">
          Descargar ahora
        </a>
      </section>

      <footer className="px-6 pb-16 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="hairline" />
          <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs tracking-[0.18em] text-muted-foreground uppercase sm:flex-row">
            <span>Sora no Mizu · 空の水</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
