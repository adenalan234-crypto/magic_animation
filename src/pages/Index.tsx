import { MascotAnimation } from "@/components/MascotAnimation";

const Index = () => {
  return (
    <main className="min-h-screen gradient-warm flex flex-col items-center justify-center p-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
          Mascot Animation
        </h1>
        <p className="text-base text-muted-foreground max-w-lg mx-auto">
          Duolingo-style GSAP animation with springy, elastic motion. Slow, deliberate transitions with squash &amp; stretch.
        </p>
      </header>

      {/* Animation Component */}
      <MascotAnimation />

      {/* SVG Structure Info */}
      <section className="mt-12 max-w-2xl">
        <h2 className="text-lg font-semibold text-foreground mb-4 text-center">SVG Structure (Like Duolingo)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          {[
            { id: "#tail", desc: "Wiggle animation" },
            { id: "#body", desc: "Squash & stretch" },
            { id: "#head", desc: "Tilt forward" },
            { id: "#ears", desc: "Follow head" },
            { id: "#eyes", desc: "Blink & widen" },
            { id: "#pupils", desc: "Scale on excite" },
            { id: "#mouth", desc: "Open/close" },
            { id: "#tongue", desc: "Elastic bounce" },
          ].map((item) => (
            <div key={item.id} className="bg-card p-3 rounded-lg border border-border">
              <code className="text-primary font-mono">{item.id}</code>
              <p className="text-muted-foreground mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Index;
