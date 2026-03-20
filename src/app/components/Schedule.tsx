import { Calendar, Clock } from "lucide-react";

export function Schedule() {
  const schedules = [
    {
      day: "Четверг",
      time: "15:00 (МСК)",
      group: "группа 4–5 класс",
    },
    {
      day: "Пятница",
      time: "15:30 (МСК)",
      group: "группа 6–8 класс",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            🕒 Расписание
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="bg-card border border-gold/30 rounded-xl p-8 hover:shadow-[0_0_25px_rgba(251,191,36,0.2)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-gold" />
                <h3 className="text-2xl font-bold text-gold">{schedule.day}</h3>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-primary" />
                <p className="text-xl text-primary">{schedule.time}</p>
              </div>
              <p className="text-muted-foreground">{schedule.group}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
