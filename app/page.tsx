import {
  CakeIcon,
  SparklesIcon,
  GiftIcon,
  HeartIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { clinic, serviceGroups, faqs, orderSteps } from "@/lib/content";
import { OrderForm } from "@/components/OrderForm";
import { Reveal } from "@/components/Reveal";

const GROUP_ICONS = [
  CakeIcon,
  SparklesIcon,
  GiftIcon,
  HeartIcon,
];

function SectionHeading({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <div id="top">
      {/* ---------- HERO (photo-led, MedBills pattern) ---------- */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-cherry-50 via-ivory to-sand"
        aria-labelledby="hero-heading"
      >
        <div className="container-responsive py-10 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="inline-flex animate-hero items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-cherry-800 shadow-sm">
                <CakeIcon className="h-4 w-4 text-honey" aria-hidden="true" />
                Family-owned diner since 1981 · Houston, Texas
              </p>
              <h1
                id="hero-heading"
                className="mt-5 animate-hero animate-hero-delay-1 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]"
              >
                Breakfast is the main event. Come hungry.
              </h1>
              <div className="mt-5 animate-hero-photo animate-hero-delay-2 md:hidden">
                <img
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1600&q=80"
                  alt="Tall stack of pancakes with syrup being poured over banana and mint"
                  width={1600}
                  height={1067}
                  className="h-auto w-full rounded-2xl shadow-xl"
                />
              </div>
              <p className="mt-5 animate-hero animate-hero-delay-2 max-w-prose text-lg leading-relaxed text-muted">
                American comfort food with a Greek twist, served in Garden
                Oaks since 1981. Golden pancakes, the Simos Special, fried
                chicken and homemade cobbler — made with fresh and real
                ingredients, every morning from 6am.
              </p>
              <div className="mt-7 flex animate-hero animate-hero-delay-3 flex-col gap-3 sm:flex-row">
                <a
                  href="#menu"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-cherry-700 px-7 py-3 font-bold text-white shadow-lg shadow-cherry-700/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cherry-800 hover:shadow-xl"
                >
                  See the menu
                </a>
                <a
                  href={`tel:${clinic.phoneTel}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-cherry-800 px-7 py-3 font-bold text-cherry-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cherry-50"
                >
                  <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                  Call {clinic.phoneDisplay}
                </a>
              </div>
              <div className="mt-8 flex animate-hero animate-hero-delay-4 flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted">
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-cherry-600" aria-hidden="true" />
                  Since 1981
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-cherry-600" aria-hidden="true" />
                  4.7★ · 1,190 ratings
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-cherry-600" aria-hidden="true" />
                  Walk-ins welcome
                </span>
              </div>
            </div>
            <div className="relative hidden animate-hero-photo animate-hero-delay-2 md:block">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1600&q=80"
                  alt="Tall stack of pancakes with syrup being poured over banana and mint"
                  width={1600}
                  height={1067}
                  className="h-[480px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="flex items-center gap-1.5 text-lg font-extrabold text-ink">
                  <CakeIcon className="h-5 w-5 text-honey" aria-hidden="true" />
                  Simo&apos;s Special — $11.49
                </p>
                <p className="text-sm text-muted">
                  Breakfast from 6am · Mon–Sat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TRUST STRIP ---------- */}
      <section className="border-y border-cherry-100 bg-cherry-50" aria-label="Why customers choose us">
        <div className="container-responsive grid grid-cols-2 gap-x-4 gap-y-5 py-6 md:grid-cols-4">
          {[
            { strong: "Since 1981", sub: "Family-owned, second generation" },
            { strong: "Simo's Special $11.49", sub: "Breakfast from 6am" },
            { strong: "4.7★ · 1,190 ratings", sub: "Houston's hidden diner" },
            { strong: "Mon–Sat 6am–3pm", sub: "Closed Sundays" },
          ].map((f, i) => (
            <Reveal key={f.strong} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <div className="border-l-2 border-cherry-200 pl-4">
              <p className="font-extrabold text-cherry-800">{f.strong}</p>
              <p className="text-sm text-muted">{f.sub}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- MENU ---------- */}
      <section id="menu" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="menu-heading">
        <div className="container-responsive">
          <Reveal>
          <SectionHeading
            title="The menu"
            intro="Breakfast is the main event — but lunch holds its own. Everything is made with fresh and real ingredients, and the $9.99 lunch special runs every day for dine-in."
          />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceGroups.map((group, i) => {
              const Icon = GROUP_ICONS[i % GROUP_ICONS.length];
              return (
                <Reveal
                  key={group.title}
                  delay={(i % 4) as 0 | 1 | 2 | 3}
                >
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {group.image && (
                    <img
                      src={group.image}
                      alt={group.imageAlt ?? ""}
                      width={1600}
                      height={1067}
                      loading="lazy"
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cherry-50 text-cherry-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-ink">
                      {group.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">{group.blurb}</p>
                    <ul className="mt-4 space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[0.95rem] text-ink">
                          <CheckCircleIcon
                            className="mt-0.5 h-5 w-5 shrink-0 text-cherry-600"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-center justify-between pt-5">
                      <p className="text-lg font-extrabold text-cherry-800">
                        {group.price}
                      </p>
                      <a
                        href={`tel:${clinic.phoneTel}`}
                        className="inline-flex min-h-11 items-center font-bold text-cherry-800 underline-offset-4 hover:underline"
                      >
                        Call to order
                      </a>
                    </div>
                  </div>
                </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- OUR STORY (dark band) ---------- */}
      <section id="story" className="scroll-mt-24 bg-navy py-16 md:py-24" aria-labelledby="story-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
          <div>
            <p className="flex items-center gap-2 font-bold text-honey">
              <HeartIcon className="h-6 w-6" aria-hidden="true" />
              A slice of Houston&apos;s soul since 1981
            </p>
            <h2 id="story-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              From a grill on North Shepherd to Houston&apos;s hidden diner
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-light">
              Simo and Maria Karkalatos came to Houston from Greece and
              started with a grill on North Shepherd Drive. The diner moved
              to its current home in 1994 — and today their son George runs
              it, keeping the tradition of knowing the regulars&apos; orders
              before they sit down.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-light">
              Terracotta tiles, wooden chairs, exposed beams, red-vested
              staff, mismatched mugs and bottomless coffee. It isn&apos;t
              just a place to grab a bite — it&apos;s where Garden Oaks
              has eaten breakfast for over forty years.
            </p>
            <a
              href={`tel:${clinic.phoneTel}`}
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-honey px-7 py-3 font-bold text-cherry-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amberstar"
            >
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
              Call {clinic.phoneDisplay}
            </a>
          </div>
          </Reveal>
          <Reveal variant="right">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
              alt="Warm restaurant dining room with wooden tables and chairs"
              width={1200}
              height={800}
              loading="lazy"
              className="h-72 w-full object-cover md:h-96"
            />
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- HOW VISITING WORKS ---------- */}
      <section id="how" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="how-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
            <SectionHeading
              title="How visiting works"
              intro="No reservation, no fuss — just come on in. Here's how a morning at Simos goes."
            />
            </Reveal>
            <ol className="mt-8 space-y-6">
              {orderSteps.map((step, i) => (
                <Reveal key={step.title} delay={(i % 3) as 0 | 1 | 2 | 3}>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cherry-800 text-lg font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-ink">{step.title}</p>
                    <p className="mt-1 leading-relaxed text-muted">{step.body}</p>
                  </div>
                </li>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal variant="right">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-ink">Good to know before you come</h3>
            <ul className="mt-4 space-y-3">
              {[
                "We open at 6am, six days a week — closed Sundays",
                "We still run the paper-check system, the way diners used to",
                "For a big group, call ahead at (713) 697-5553",
                "The $9.99 lunch special is dine-in only",
                "On Thanksgiving, breakfast ends at 11am and lunch starts then",
                "On the 4th of July we are open until 1pm",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-muted">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-cherry-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Parking is available nearby, and there is street parking along
              North Shepherd Drive. The closest bus stop is a short walk
              away.
            </p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- MEET THE FAMILY ---------- */}
      <section className="border-y border-cherry-100 bg-cherry-50 py-16 md:py-24" aria-labelledby="family-heading">
        <Reveal>
        <div className="container-responsive grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12">
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-cherry-800 shadow-xl md:h-52 md:w-52">
            <span className="font-serif text-7xl font-semibold text-honey md:text-8xl" aria-hidden="true">
              G
            </span>
          </div>
          <div>
            <h2 id="family-heading" className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Meet George — second-generation owner
            </h2>
            <p className="mt-2 font-semibold text-cherry-700">
              Simos Diner · {clinic.area}
            </p>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
              {clinic.owner.bio}
            </p>
            <p className="mt-4 text-muted">
              Breakfast never disappoints at Simos — and neither does the
              welcome. Come for the pancakes, stay for the regulars.
            </p>
          </div>
        </div>
        </Reveal>
      </section>

      {/* ---------- OCCASIONS ---------- */}
      <section className="py-16 md:py-24" aria-labelledby="occasions-heading">
        <div className="container-responsive">
          <Reveal>
          <SectionHeading
            title="Made for every morning — and every holiday"
            intro="Simos goes above and beyond to make holidays and celebrations extra special."
          />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Thanksgiving", body: "Breakfast ends at 11am and lunch starts then — we close at 3pm. Come on in and gobble till you wobble." },
              { title: "Christmas", body: "Santa Claus himself visits the diner during the Christmas season. We are closed December 25–28th." },
              { title: "4th of July", body: "Come and have breakfast with us on this beautiful day — we are open till 1pm." },
              { title: "Everyday breakfast", body: "Six days a week from 6am. The Simos Special, bottomless coffee, and a table that feels like home." },
            ].map((o, i) => (
              <Reveal key={o.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cherry-50 text-cherry-700">
                  <CakeIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-ink">{o.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{o.body}</p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- RESERVE ---------- */}
      <section id="book" className="scroll-mt-24 border-y border-cherry-100 bg-cherry-50 py-16 md:py-24" aria-labelledby="book-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal variant="left">
          <div>
            <Reveal>
            <SectionHeading
              title="Reserve a table"
              intro="Request a table here and we will confirm it by phone — or just walk in. For a big group, call us ahead."
            />
            </Reveal>
            <p className="mt-6 flex items-center gap-3 text-lg font-bold text-cherry-800">
              <PhoneIcon className="h-6 w-6" aria-hidden="true" />
              <a href={`tel:${clinic.phoneTel}`} className="underline-offset-4 hover:underline">
                {clinic.phoneDisplay}
              </a>
            </p>
            <p className="mt-3 flex items-start gap-3 text-muted">
              <MapPinIcon className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              5004 N Shepherd Dr, Houston, TX 77018 — Garden Oaks, on the northern edge of Independence Heights.
            </p>
            <p className="mt-3 flex items-start gap-3 text-muted">
              <ClockIcon className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              Mon–Fri 6am–3pm, Sat 6am–2pm. Closed Sundays.
            </p>
            <p className="mt-3 text-muted">
              No email listed — call us, or message us on Facebook.
            </p>
          </div>
          </Reveal>
          <Reveal variant="right">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <OrderForm />
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="faq-heading">
        <div className="container-responsive max-w-3xl">
          <Reveal>
          <SectionHeading
            title="Questions customers ask"
            intro="Answers from the diner's public information. Anything else — call us and ask."
          />
          </Reveal>
          <div className="mt-8">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) as 0 | 1}>
              <details className="group border-t border-slate-200 py-5 last:border-b">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-2xl font-normal text-muted transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-prose leading-relaxed text-muted">{f.a}</p>
              </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VISIT ---------- */}
      <section id="visit" className="scroll-mt-24 border-t border-slate-200 py-16 md:py-24" aria-labelledby="visit-heading">
        <div className="container-responsive grid gap-10 md:grid-cols-2">
          <Reveal variant="left">
          <div>
            <Reveal>
            <SectionHeading
              title="Find us in Garden Oaks"
              intro="On North Shepherd Drive, on the northern edge of Independence Heights — the red-facade diner you can't miss."
            />
            </Reveal>
            <p className="mt-6 leading-relaxed text-muted">
              Parking is available nearby, with street parking along North
              Shepherd Drive. The closest bus stop is a short walk away.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Come early — breakfast is the main event, and the regulars
              fill the room. If you are coming with a big group, call us
              ahead at (713) 697-5553.
            </p>
          </div>
          </Reveal>
          <Reveal variant="right">
          <div className="rounded-2xl bg-cherry-800 p-6 text-white shadow-xl sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-xl font-bold">Come on in</h3>
            <p className="mt-3 leading-relaxed text-cherry-100">
              Walk in any morning from 6am — no reservation needed. Or call
              us at (713) 697-5553 to check the day&apos;s specials, including
              the fresh homemade cobbler.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${clinic.phoneTel}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-cherry-900 transition-colors hover:bg-cherry-50"
              >
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                Call {clinic.phoneDisplay}
              </a>
              <a
                href="#menu"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
              >
                See the menu
              </a>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-cherry-100">
              Mon–Fri 6am–3pm, Sat 6am–2pm. Closed Sundays.
            </p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="bg-navy py-16 md:py-20" aria-labelledby="closing-heading">
        <Reveal>
        <div className="container-responsive max-w-3xl text-center md:text-left">
          <h2 id="closing-heading" className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Hungry? Come on in — breakfast is waiting.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-navy-light md:mx-0">
            Golden pancakes, the Simos Special, fried chicken and homemade
            cobbler — served in Garden Oaks since 1981. Walk in any morning
            from 6am, or call (713) 697-5553.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-start md:justify-start">
            <a
              href={`tel:${clinic.phoneTel}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-honey px-7 py-3 font-bold text-cherry-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amberstar"
            >
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
              Call {clinic.phoneDisplay}
            </a>
            <a
              href="#menu"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white/60 px-7 py-3 font-bold text-white transition-colors hover:bg-white/10"
            >
              See the menu
            </a>
          </div>
        </div>
        </Reveal>
      </section>
    </div>
  );
}
