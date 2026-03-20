import { Globe, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-primary/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold text-foreground">
                Английский для путешествий
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Реальный разговорный английский для детей и подростков
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
            <div className="space-y-2">
              <a
                href="mailto:info@example.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@example.com</span>
              </a>
              <a
                href="tel:+79999999999"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+7 (999) 999-99-99</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Расписание</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Чт: 15:00 (МСК) — 4–5 класс</p>
              <p>Пт: 15:30 (МСК) — 6–8 класс</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Английский для путешествий. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
