import { CheckCircle2, Sparkles } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      title: "Полный курс",
      price: "12 000 руб",
      description: "10 уроков",
      features: [
        "Все 8 модулей программы",
        "Дипломный проект",
        "Методические материалы",
        "Сертификат об окончании",
      ],
      highlight: true,
    },
    {
      title: "Абонемент",
      price: "1 300 руб",
      description: "за урок",
      features: [
        "Гибкий формат оплаты",
        "Доступ к материалам урока",
        "Поддержка преподавателя",
        "Групповая практика",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            💳 Стоимость
          </h2>
          <p className="text-lg text-muted-foreground">
            Выберите удобный для вас формат
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-[1.02] ${
                plan.highlight
                  ? "border-primary bg-gradient-to-br from-primary/5 to-accent/5 shadow-[0_0_30px_rgba(0,212,212,0.2)]"
                  : "border-accent/30 bg-card hover:border-accent/50"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-sm text-primary-foreground">
                    <Sparkles className="w-4 h-4" />
                    <span>Рекомендуем</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.title}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-accent/10 border border-accent/30 rounded-xl p-6 max-w-2xl">
            <h3 className="text-xl font-bold text-foreground mb-2">
              📢 Набор открыт!
            </h3>
            <p className="text-foreground/80 mb-1">
              Группы маленькие — максимум 6 детей, чтобы каждый получил внимание.
            </p>
            <p className="text-accent font-semibold">Места ограничены!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
