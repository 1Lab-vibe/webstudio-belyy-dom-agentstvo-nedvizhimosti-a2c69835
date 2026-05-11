import heroTeam from "@/assets/hero-team.jpg";
import apt1 from "@/assets/apartment-1.jpg";
import apt2 from "@/assets/apartment-2.jpg";
import apt3 from "@/assets/apartment-3.jpg";
import keys from "@/assets/keys.jpg";
import contract from "@/assets/contract.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, ShieldCheck, FileText, Award, Users, Home, Calculator, Scale, Banknote, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const listings = [
  { img: apt1, title: "2-к квартира, ЖК у метро", area: "62 м²", price: "от 18,9 млн ₽", district: "Пресненский район" },
  { img: apt2, title: "3-к квартира в сталинке", area: "84 м²", price: "от 27,4 млн ₽", district: "Замоскворечье" },
  { img: apt3, title: "1-к квартира с ремонтом", area: "41 м²", price: "от 12,5 млн ₽", district: "Хорошёвский район" },
];

const services = [
  { icon: Home, title: "Продажа квартиры", text: "Оценка по рынку, профессиональные фото, реклама на всех площадках, показы." },
  { icon: Users, title: "Подбор и покупка", text: "Подберём 3–5 вариантов под ваш бюджет и район, проверим документы." },
  { icon: Banknote, title: "Ипотека", text: "Подача заявок в банки-партнёры, помощь со снижением ставки." },
  { icon: Scale, title: "Юридическое сопровождение", text: "Проверка истории объекта, договор, безопасные расчёты, регистрация." },
];

const cases = [
  { title: "Семья с детьми, Северное Тушино", text: "Продали 2-к и купили 3-к в том же районе за 47 дней. Без двойного переезда.", result: "Сделка за 47 дней" },
  { title: "Инвестор, ЦАО", text: "Подобрали ликвидную однушку под арендный поток. Торг с продавцом — 600 000 ₽.", result: "Скидка 600 000 ₽" },
  { title: "Срочная продажа, ЮЗАО", text: "Расселение наследства. Подготовили документы и вышли на сделку за 3 недели.", result: "Закрыто за 21 день" },
];

const reviews = [
  { name: "Анна К.", text: "Спокойно, по делу, без давления. Объяснили каждый этап, помогли с ипотекой." },
  { name: "Игорь М.", text: "Продали квартиру выше моих ожиданий. Сами организовали все показы." },
  { name: "Мария и Сергей", text: "Подобрали район, школу рядом, проверили документы. Спасибо за терпение." },
];

const guarantees = [
  "Договор на оказание услуг с фиксированной комиссией",
  "Полная юридическая проверка объекта и продавца",
  "Безопасные расчёты через аккредитив или ячейку",
  "Сопровождаем до получения ключей и регистрации права",
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", note: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Заполните имя и телефон", description: "Мы перезвоним в течение 15 минут." });
      return;
    }
    toast({ title: "Заявка отправлена", description: "Свяжемся с вами в ближайшее время." });
    setForm({ name: "", phone: "", note: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md border border-gold text-gold font-display font-bold">БД</span>
            <span className="font-display font-semibold tracking-wide">БЕЛЫЙ ДОМ</span>
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#objects" className="hover:text-foreground">Объекты</a>
            <a href="#services" className="hover:text-foreground">Услуги</a>
            <a href="#cases" className="hover:text-foreground">Кейсы</a>
            <a href="#about" className="hover:text-foreground">О нас</a>
            <a href="#contact" className="hover:text-foreground">Контакты</a>
          </nav>
          <a href="tel:+74957660842" className="hidden items-center gap-2 text-sm font-medium md:inline-flex">
            <Phone className="h-4 w-4 text-gold" /> 8 (495) 766-08-42
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="container grid gap-10 py-12 md:grid-cols-2 md:gap-12 md:py-20">
          <div className="animate-fade-up flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Москва · 5 лет на рынке · член РГР
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
              Агентство недвижимости <span className="text-gold">БЕЛЫЙ ДОМ</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              Помогаем покупать, продавать и оценивать квартиры в Москве. Работаем по договору,
              сопровождаем сделку до ключей. Без навязчивых звонков.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#contact">Получить подборку объектов</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border">
                <a href="#contact">Узнать стоимость моей квартиры</a>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              {[
                { k: "5+ лет", v: "на рынке Москвы" },
                { k: "200+", v: "закрытых сделок" },
                { k: "15 мин", v: "ответ на заявку" },
              ].map((s) => (
                <div key={s.k} className="rounded-lg border border-border bg-surface px-4 py-3">
                  <div className="font-display text-lg font-semibold text-gold">{s.k}</div>
                  <div className="text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl border border-gold/30" aria-hidden />
            <img
              src={heroTeam}
              alt="Команда агентства недвижимости БЕЛЫЙ ДОМ в Москве"
              width={1280}
              height={896}
              className="relative aspect-[4/5] w-full rounded-2xl object-cover md:aspect-[5/6]"
            />
            <div className="absolute -bottom-5 left-5 right-5 rounded-xl border border-border bg-surface/95 p-4 backdrop-blur md:left-auto md:right-5 md:max-w-[260px]">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="font-medium">Найдите нас на Яндекс Картах</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Саратовская ул., 14/1, стр. 17а, Москва</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objects */}
      <section id="objects" className="border-b border-border/60 py-16 md:py-24">
        <div className="container">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gold">Подборка</p>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Свежие объекты в Москве</h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Подбираем под бюджет, район и метро. Полная подборка — по заявке, с фото и документами.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {listings.map((l) => (
              <article key={l.title} className="group overflow-hidden rounded-xl border border-border bg-surface transition hover:border-gold/60">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={l.img} alt={l.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-5">
                  <div className="text-xs text-muted-foreground">{l.district}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{l.title}</h3>
                  <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-sm">
                    <span className="text-muted-foreground">{l.area}</span>
                    <span className="font-semibold text-gold">{l.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-border">
              <a href="#contact">Запросить полную подборку</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-border/60 py-16 md:py-24">
        <div className="container">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold">Услуги</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">С чем мы помогаем</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-surface p-6 transition hover:border-gold/60">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg border border-gold/40 text-gold">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>

          {/* Animated process */}
          <div className="mt-14 rounded-2xl border border-border bg-surface p-6 md:p-10">
            <h3 className="font-display text-xl font-semibold md:text-2xl">Как проходит сделка</h3>
            <p className="mt-1 text-sm text-muted-foreground">От звонка до ключей — прозрачно, по этапам.</p>
            <svg viewBox="0 0 800 140" className="mt-6 h-32 w-full" role="img" aria-label="Этапы сделки">
              <line x1="60" y1="70" x2="740" y2="70" stroke="hsl(var(--border))" strokeWidth="2" />
              <line x1="60" y1="70" x2="740" y2="70" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-draw" />
              {[60, 230, 400, 570, 740].map((x, i) => (
                <g key={x}>
                  <circle cx={x} cy="70" r="9" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" />
                  <circle cx={x} cy="70" r="3.5" fill="hsl(var(--primary))" className="animate-dot" style={{ animationDelay: `${i * 0.25}s` }} />
                  <text x={x} y="40" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="Manrope, sans-serif" fontSize="13" fontWeight="600">
                    {["Заявка", "Подбор", "Просмотры", "Договор", "Ключи"][i]}
                  </text>
                  <text x={x} y="105" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">
                    {["15 мин", "1–3 дня", "по графику", "юр. проверка", "регистрация"][i]}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="border-b border-border/60 py-16 md:py-24">
        <div className="container">
          <div className="mb-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gold">Кейсы</p>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Реальные сделки последних месяцев</h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">Имена и адреса не раскрываем — детали расскажем на встрече.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {cases.map((c) => (
              <div key={c.title} className="flex flex-col rounded-xl border border-border bg-surface p-6">
                <div className="text-xs uppercase tracking-wider text-gold">{c.result}</div>
                <h3 className="mt-2 font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-border/60 py-16 md:py-24">
        <div className="container grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative order-2 md:order-1">
            <img src={contract} alt="Подписание договора с клиентом" loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full rounded-2xl object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm uppercase tracking-[0.2em] text-gold">О команде</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Опыт, на который можно опереться</h2>
            <p className="mt-5 text-muted-foreground">
              БЕЛЫЙ ДОМ — частное агентство с 2020 года. Работаем небольшой командой,
              каждый клиент ведётся одним агентом от первого звонка до регистрации.
              Специализация — вторичный рынок и новостройки Москвы.
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              {[
                { i: Award, t: "Член Российской Гильдии Риэлторов (РГР)" },
                { i: ShieldCheck, t: "Профессиональная страховка ответственности" },
                { i: FileText, t: "Договор и закрывающие документы по каждому этапу" },
                { i: Calculator, t: "Прозрачная фиксированная комиссия — без скрытых процентов" },
              ].map(({ i: Icon, t }) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md border border-gold/40 text-gold">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-b border-border/60 py-16 md:py-24">
        <div className="container">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gold">Отзывы</p>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Что говорят клиенты</h2>
            </div>
            <div className="hidden items-center gap-2 text-sm text-muted-foreground md:flex">
              <MapPin className="h-4 w-4 text-gold" /> Отзывы доступны на Яндекс Картах
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-xl border border-border bg-surface p-6">
                <div className="mb-3 text-gold" aria-hidden>★★★★★</div>
                <blockquote className="text-sm leading-relaxed text-foreground/90">«{r.text}»</blockquote>
                <figcaption className="mt-4 text-xs text-muted-foreground">— {r.name}, клиент агентства</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="border-b border-border/60 py-16 md:py-24">
        <div className="container grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gold">Гарантии</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Прозрачно. По договору. До ключей.</h2>
            <p className="mt-4 text-muted-foreground">
              Все условия фиксируем письменно. Вы знаете стоимость услуг и зону ответственности
              агентства до начала работы.
            </p>
            <ul className="mt-6 space-y-3">
              {guarantees.map((g) => (
                <li key={g} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src={keys} alt="Передача ключей от квартиры" loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container grid gap-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gold">Заявка</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Получить подборку или оценку</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Оставьте телефон — перезвоним в течение 15 минут в рабочее время.
              Расскажем по делу, без навязчивых предложений.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md border border-gold/40 text-gold"><Phone className="h-4 w-4" /></span>
                <a href="tel:+74957660842" className="font-medium">8 (495) 766-08-42</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md border border-gold/40 text-gold"><MapPin className="h-4 w-4" /></span>
                <span>Саратовская ул., 14/1, стр. 17а, Москва, 109125</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md border border-gold/40 text-gold"><FileText className="h-4 w-4" /></span>
                <a href="mailto:info@belyidom.ru" className="font-medium">info@belyidom.ru</a>
              </div>
            </div>
          </div>
          <form onSubmit={submit} className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Как к вам обращаться</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Имя" className="bg-background" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Телефон</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className="bg-background" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Что нужно (необязательно)</label>
                <Textarea value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} placeholder="Например: ищу 2-к в ЦАО до 25 млн" className="min-h-[96px] bg-background" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-surface py-10">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-gold text-gold font-display font-bold">БД</span>
              <span className="font-display font-semibold tracking-wide">БЕЛЫЙ ДОМ</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Агентство недвижимости · Москва · {new Date().getFullYear()}</p>
          </div>
          <div className="text-xs text-muted-foreground">
            Член РГР · Договор · Юридическое сопровождение
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
