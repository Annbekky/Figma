import { MessageCircle, Globe, Gamepad2, TrendingUp } from "lucide-react";

export function WhySpecial() {
  const features = [
    {
      icon: MessageCircle,
      title: "Акцент на практическую, живую речь",
      description: "А не на грамматику ради грамматики",
    },
    {
      icon: Globe,
      title: "Все ситуации — из реальной жизни",
      description: "Только то, что действительно понадобится путешественнику",
    },
    {
      icon: Gamepad2,
      title: "Интерактивные задания",
      description: "Ролевые игры, аудиоситуации, мини-квесты",
    },
    {
      icon: TrendingUp,
      title: "Уровень A2–B1 (Pre-Intermediate)",
      description: "Достижимый результат за курс",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            ✨ Почему этот курс особенный?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card border border-primary/20 rounded-xl p-6 text-center hover:border-primary/50 hover:shadow-[0_0_25px_rgba(0,212,212,0.15)] transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
