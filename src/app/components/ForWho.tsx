import { GraduationCap, Users } from "lucide-react";

export function ForWho() {
  const groups = [
    {
      title: "Первая группа",
      grade: "4–5 класс",
      icon: GraduationCap,
      color: "primary",
    },
    {
      title: "Вторая группа",
      grade: "6–8 класс",
      icon: Users,
      color: "accent",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            📌 Для кого курс
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {groups.map((group, index) => {
            const Icon = group.icon;
            const colorClass = group.color === "primary" ? "border-primary bg-primary/5" : "border-accent bg-accent/5";
            const iconColorClass = group.color === "primary" ? "text-primary" : "text-accent";

            return (
              <div
                key={index}
                className={`${colorClass} border-2 rounded-xl p-8 hover:shadow-[0_0_30px_rgba(0,212,212,0.15)] transition-all duration-300`}
              >
                <Icon className={`w-12 h-12 ${iconColorClass} mb-4`} />
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {group.title}
                </h3>
                <p className={`text-xl ${iconColorClass}`}>{group.grade}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
