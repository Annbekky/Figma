import { Monitor, Headphones, Wifi, Video } from "lucide-react";

export function Requirements() {
  const requirements = [
    {
      icon: Monitor,
      text: "Стационарный компьютер или ноутбук",
    },
    {
      icon: Headphones,
      text: "Наушники и микрофон",
    },
    {
      icon: Wifi,
      text: "Стабильный интернет",
    },
    {
      icon: Video,
      text: "Zoom",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            💻 Что потребуется
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            return (
              <div
                key={index}
                className="bg-card border border-accent/30 rounded-xl p-6 text-center hover:border-accent hover:shadow-[0_0_20px_rgba(255,153,51,0.15)] transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-accent mx-auto mb-3" />
                <p className="text-foreground">{req.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
