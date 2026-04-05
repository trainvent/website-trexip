import Image from "next/image";

const assetBase = process.env.PAGES_BASE_PATH || "";
const assetPath = (path: string) => `${assetBase}${path}`;

const pillars = [
  {
    title: "One-time consent",
    description:
      "The customer opts in once instead of repeating their email address at every checkout.",
  },
  {
    title: "Payment-linked delivery",
    description:
      "A receipt is triggered by a real transaction event, not by a cashier manually collecting contact details.",
  },
  {
    title: "Useful after purchase",
    description:
      "The same receipt stream can become searchable purchase history, exports, and lightweight personal finance context.",
  },
];

const conceptSteps = [
  {
    eyebrow: "Step 1",
    title: "Register once",
    description:
      "A user verifies an email address and connects a payment account through a consent-based flow.",
  },
  {
    eyebrow: "Step 2",
    title: "Pay normally",
    description:
      "At a participating merchant, checkout stays fast because no one has to ask for an email address again.",
  },
  {
    eyebrow: "Step 3",
    title: "Match transaction to receipt",
    description:
      "Trexip receives merchant receipt data and tries to match it to the payment event using references, amount, and timing.",
  },
  {
    eyebrow: "Step 4",
    title: "Deliver something useful",
    description:
      "The receipt can arrive by email, live in a receipt inbox, or feed exports and spending views later on.",
  },
];

const assumptions = [
  "Participating merchants can send enough transaction context for reliable matching.",
  "Users are comfortable opting in when the benefit is clear and privacy boundaries are explicit.",
  "The first version should behave like merchant-linked infrastructure, not a public receipt lookup service.",
];

const openQuestions = [
  {
    title: "Regulatory path",
    description:
      "How much of the payment-side connection can be handled through existing open-banking partners in an early version?",
  },
  {
    title: "Matching confidence",
    description:
      "What combination of amount, timestamp, merchant ID, and reference data is strong enough for dependable routing?",
  },
  {
    title: "Product surface",
    description:
      "Is the first compelling experience receipt-by-email, a receipt inbox, or a simple export and search workflow?",
  },
];

const collaboration = [
  "POS and merchant software teams exploring paperless receipts",
  "Fintech or open-banking partners close to transaction data and consent flows",
  "Accounting and commerce tools that could benefit from structured receipt delivery",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--canvas)] text-[var(--ink)]">
      <section className="relative isolate border-b border-[var(--line)]">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,_#f7f4ec_0%,_#ece7db_45%,_#dfe7e4_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_15%_20%,_rgba(201,108,60,0.28),_transparent_30%),radial-gradient(circle_at_85%_18%,_rgba(25,95,89,0.18),_transparent_24%),radial-gradient(circle_at_50%_65%,_rgba(180,166,116,0.18),_transparent_32%)]" />

        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-20 pt-8 sm:px-10 lg:px-16">
          <header className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image
                src={assetPath("/Logo_Trexip.png")}
                alt="Trexip logo"
                width={56}
                height={56}
                priority
                className="h-14 w-14 shrink-0 rounded-2xl object-contain"
              />
              <div>
                <p className="font-[family:var(--font-display)] text-2xl tracking-[0.18em] text-[var(--accent-strong)]">
                  TREXIP
                </p>
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
                  Product idea by Trainvent
                </p>
              </div>
            </div>

            <div className="rounded-full border border-[var(--line)] bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-strong)] backdrop-blur">
              Idea page for partners and early builders
            </div>
          </header>

          <div className="grid flex-1 gap-12 pt-16 lg:grid-cols-[minmax(0,1.05fr)_24rem] lg:items-start lg:pt-24">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                Trexip concept
              </p>
              <h1 className="mt-6 font-[family:var(--font-display)] text-5xl leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                make receipts arrive automatically.
              </h1>

              <div className="mt-10 overflow-hidden rounded-[2.25rem] border border-[rgba(20,58,56,0.12)] bg-white/88 p-4 shadow-[0_28px_70px_rgba(36,42,39,0.12)] sm:p-6">                  <Image
                    src={assetPath("/Trexip Showcase.png")}
                    alt="Trexip concept infographic showing onboarding, payment, receipt delivery, analysis, and export."
                    width={1024}
                    height={500}
                    className="relative z-10 h-auto w-full rounded-[1.1rem] border border-black/5"
                  />
              </div>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted-strong)] sm:text-lg">
                Trexip is a product idea: once a customer opts in and connects a
                payment account, participating merchants could send receipts
                automatically after checkout without asking for an email address
                every time.
              </p>

              <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.75rem] border border-[rgba(20,58,56,0.14)] bg-white/72 p-5 shadow-[0_18px_48px_rgba(36,42,39,0.08)] backdrop-blur sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                    What the infographic is trying to show
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)] sm:text-base">
                    The core story is straightforward: register once, pay as
                    usual, let the payment signal help identify the purchase, and
                    turn the resulting receipt into something that is easier to
                    store, search, and export later.
                  </p>
                </div>

                <div className="flex flex-col gap-4 rounded-[1.75rem] border border-[rgba(20,58,56,0.14)] bg-white/72 p-5 shadow-[0_18px_48px_rgba(36,42,39,0.08)] backdrop-blur sm:p-6">
                  <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                      Early-stage concept
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted-strong)] sm:text-base">
                      Trexip is presented here as a product direction and partner
                      conversation starter for teams close to payments, receipts,
                      and merchant workflows.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#contact"
                      className="rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
                    >
                      Jump to contact details
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {pillars.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-[var(--line)] bg-white/72 px-5 py-5 shadow-[0_14px_38px_rgba(32,39,37,0.08)] backdrop-blur"
                  >
                    <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="relative">
              <div className="absolute inset-x-6 top-8 -z-10 h-48 rounded-full bg-[rgba(42,111,105,0.18)] blur-3xl" />
              <div className="rounded-[2rem] border border-[rgba(20,58,56,0.16)] bg-[rgba(20,58,56,0.94)] p-6 text-[var(--card-ink)] shadow-[0_30px_80px_rgba(16,32,31,0.24)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--card-accent)]">
                  Product framing
                </p>
                <h2 className="mt-3 font-[family:var(--font-display)] text-3xl leading-tight">
                  This is an idea sketch, not a launched platform.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/78">
                  The useful lens for Trexip is not “a new receipt app.” It is a
                  matching and delivery layer that could sit between checkout,
                  transaction confirmation, and post-purchase records.
                </p>
                <p className="mt-4 text-sm leading-7 text-white/78">
                  That makes the concept especially relevant for startups and
                  infrastructure teams working around POS, payments, banking
                  connectivity, bookkeeping, or merchant operations.
                </p>

                <div className="mt-6 space-y-3">
                  {assumptions.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-[var(--card-accent)]">
                          0{index + 1}
                        </div>
                        <p className="text-sm leading-6 text-white/84">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[linear-gradient(180deg,_rgba(255,250,244,0.92)_0%,_rgba(243,246,241,0.92)_100%)] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                Product story
              </p>
              <h2 className="mt-4 max-w-xl font-[family:var(--font-display)] text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
                The concept only works if the journey stays simple for both sides.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted-strong)]">
                The infographic points to a full loop rather than a single feature.
                The product has to make onboarding understandable, checkout
                invisible, matching trustworthy, and the delivered receipt worth
                keeping.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[var(--line)] bg-white/80 p-6 shadow-[0_24px_60px_rgba(36,42,39,0.08)]">
              <div className="grid gap-4 sm:grid-cols-2">
                {conceptSteps.map((step) => (
                  <article
                    key={step.eyebrow}
                    className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)]/90 p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                      {step.eyebrow}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold leading-7 text-[var(--ink)]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
              Open questions
            </p>
            <h2 className="mt-4 max-w-xl font-[family:var(--font-display)] text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              The interesting work is deciding what has to be true for version one.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted-strong)]">
              This idea gets stronger when it is treated honestly. The challenge is
              not drawing the flow. The challenge is proving that the matching,
              consent model, and first user benefit can all be credible at the
              same time.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {openQuestions.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)]/88 p-6 shadow-[0_18px_48px_rgba(36,42,39,0.08)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                  {item.title}
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--muted-strong)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.45)_0%,_rgba(231,239,236,0.8)_100%)] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
              Partner angle
            </p>
            <h2 className="mt-4 max-w-xl font-[family:var(--font-display)] text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              A good next step would be validating the idea with product and infrastructure partners.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted-strong)]">
              If Trexip moves beyond the concept stage, the first useful proof
              would likely come from a narrow pilot with teams that already sit
              close to checkout, payment confirmation, or digital receipt flows.
            </p>
          </div>

          <div className="grid gap-5">
            {collaboration.map((item) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-[var(--line)] bg-white/80 p-6 shadow-[0_18px_48px_rgba(36,42,39,0.08)]"
              >
                <p className="text-lg leading-8 text-[var(--ink)]">{item}</p>
              </div>
            ))}

            <div
              id="contact"
              className="rounded-[1.9rem] border border-[var(--accent)] bg-[linear-gradient(135deg,_rgba(201,108,60,0.14)_0%,_rgba(42,111,105,0.1)_100%)] p-7"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                Contact
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted-strong)]">
                Trexip is being explored as a Trainvent product idea. If you are
                building in POS, fintech, accounting, or merchant software, this
                page is meant to open the conversation.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="mailto:info@trainvent.com"
                  className="rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
                >
                  info@trainvent.com
                </a>
                <a
                  href="https://www.trainvent.com/en/contact/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[var(--line)] bg-white/90 px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)] hover:bg-white"
                >
                  Trainvent contact form
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
