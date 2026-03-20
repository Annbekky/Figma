import { ArrowRight, Plane } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Enroll() {
  const handleEnroll = () => {
    // В реальном приложении здесь будет обработка записи
    alert("Спасибо за интерес! Скоро мы с вами свяжемся.");
  };

  return (
    <section id="enroll" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1676559628393-c758954a1153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHdpbmRvdyUyMGNsb3VkcyUyMHNreXxlbnwxfHx8fDE3NzM5MjY2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Airplane window view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/95 to-[#0a0e1a]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Plane className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Готовы к новым приключениям?
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            👉 Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок 
            заговорит по-английски без страха!
          </p>
        </div>

        <button
          onClick={handleEnroll}
          className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-accent via-gold to-primary text-primary-foreground rounded-xl hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
        >
          <span>Записаться на курс</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-card/30 backdrop-blur-sm border border-primary/30 rounded-lg p-4">
            <div className="text-primary mb-1">✓</div>
            <p className="text-sm text-foreground/70">Живая практика</p>
          </div>
          <div className="bg-card/30 backdrop-blur-sm border border-accent/30 rounded-lg p-4">
            <div className="text-accent mb-1">✓</div>
            <p className="text-sm text-foreground/70">Малые группы</p>
          </div>
          <div className="bg-card/30 backdrop-blur-sm border border-gold/30 rounded-lg p-4">
            <div className="text-gold mb-1">✓</div>
            <p className="text-sm text-foreground/70">Реальные ситуации</p>
          </div>
        </div>
      </div>
    </section>
  );
}
