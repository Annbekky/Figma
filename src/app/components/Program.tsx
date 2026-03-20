import {
  Plane,
  Hotel,
  UtensilsCrossed,
  MapPin,
  AlertCircle,
  Ticket,
  Users,
  Trophy,
} from "lucide-react";

export function Program() {
  const modules = [
    {
      number: "1",
      title: "Аэропорт без стресса",
      description:
        "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
      benefit: "Уверенность уже в первые часы за границей.",
      icon: Plane,
      color: "primary",
    },
    {
      number: "2",
      title: "В отеле: заселение и помощь",
      description:
        "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
      benefit: "Практика вежливых фраз и повседневной лексики.",
      icon: Hotel,
      color: "accent",
    },
    {
      number: "3",
      title: "Кафе и рестораны",
      description: "Заказ еды, вопросы про аллергены, счёт и чаевые.",
      benefit: "Развитие гастрономического словаря и уверенности в общении.",
      icon: UtensilsCrossed,
      color: "gold",
    },
    {
      number: "4",
      title: "На улице: ориентирование и просьбы",
      description: "Как спросить дорогу, вызвать такси или найти аптеку.",
      benefit: "Понимание устной речи и произношения в реальных ситуациях.",
      icon: MapPin,
      color: "primary",
    },
    {
      number: "5",
      title: "Экстренные случаи",
      description:
        "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
      benefit: "Важные фразы, которые могут спасти отпуск.",
      icon: AlertCircle,
      color: "accent",
    },
    {
      number: "6",
      title: "Туризм и развлечения",
      description:
        "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
      benefit: "Погружение в культурный контекст через язык.",
      icon: Ticket,
      color: "gold",
    },
    {
      number: "7",
      title: "Дружба в путешествиях",
      description:
        "Как познакомиться с другими детьми или подростками за границей.",
      benefit: "Игровая практика диалогов и неформального общения.",
      icon: Users,
      color: "primary",
    },
    {
      number: "8",
      title: 'Дипломный проект: «Мой идеальный отпуск»',
      description:
        "Ребёнок планирует воображаемое путешествие и представляет его на английском.",
      benefit: "Развитие связной речи и творческого самовыражения.",
      icon: Trophy,
      color: "accent",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            📚 Программа курса
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            8 модулей для полного погружения в разговорный английский
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            const getBorderColor = () => {
              if (module.color === "primary") return "border-primary/30";
              if (module.color === "accent") return "border-accent/30";
              return "border-gold/30";
            };
            const getIconColor = () => {
              if (module.color === "primary") return "text-primary";
              if (module.color === "accent") return "text-accent";
              return "text-gold";
            };

            return (
              <div
                key={module.number}
                className={`bg-card border ${getBorderColor()} rounded-xl p-6 hover:shadow-[0_0_20px_rgba(0,212,212,0.1)] transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${getIconColor()}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs ${getIconColor()} bg-secondary/50`}
                      >
                        {module.number}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">
                        {module.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      {module.description}
                    </p>
                    <div className="flex items-start gap-2">
                      <span className="text-accent text-lg flex-shrink-0 mt-0.5">
                        👉
                      </span>
                      <p className="text-sm text-foreground/70">
                        {module.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
