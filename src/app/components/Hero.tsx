import { Plane } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToEnroll = () => {
    document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1773379412328-7f101292ab63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBzdW5zZXQlMjBob3Jpem9ufGVufDF8fHx8MTc3MzkyMDY4OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Travel sunset horizon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/90 via-[#0a0e1a]/80 to-[#0a0e1a]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
          <Plane className="w-5 h-5 text-primary" />
          <span className="text-sm text-primary">Набор открыт!</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-gold to-accent bg-clip-text text-transparent">
          Английский для путешествий
        </h1>

        <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
          Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
          в отпуске, поездках и будущих путешествиях!
        </p>

        <button
          onClick={scrollToEnroll}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-[0_0_30px_rgba(0,212,212,0.3)] transition-all duration-300 transform hover:scale-105"
        >
          <span>Записаться на курс</span>
          <Plane className="w-5 h-5" />
        </button>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
            <div className="text-3xl font-bold text-primary mb-1">10</div>
            <div className="text-sm text-muted-foreground">уроков</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-lg p-4">
            <div className="text-3xl font-bold text-accent mb-1">6</div>
            <div className="text-sm text-muted-foreground">детей макс.</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-gold/20 rounded-lg p-4">
            <div className="text-3xl font-bold text-gold mb-1">A2–B1</div>
            <div className="text-sm text-muted-foreground">уровень</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
            <div className="text-3xl font-bold text-primary mb-1">2</div>
            <div className="text-sm text-muted-foreground">группы</div>
          </div>
        </div>
      </div>
    </section>
  );
}
