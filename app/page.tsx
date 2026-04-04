import Image from "next/image";

const opportunity = [
	"Email identity with explicit user consent",
	"Open-banking account connection through partners",
	"Merchant-side receipt routing and transaction matching",
];

const hurdles = [
	{
		title: "Regulation",
		description:
			"Accessing payment-account data in Europe is a PSD2 problem before it is a UI problem. Trexip likely needs a licensed partner, or eventually its own regulated setup.",
	},
	{
		title: "Matching quality",
		description:
			"Bank descriptors are inconsistent. Reliable receipt delivery depends on strong merchant references, timestamps, amount windows, and merchant-scoped identifiers.",
	},
	{
		title: "Privacy and fraud",
		description:
			"A central email-to-bank registry is extremely sensitive. Enumeration, account takeover, breach risk, and purchase-data leakage all need to be designed against from day one.",
	},
];

const flow = [
	"User verifies an email address and explicitly opts in.",
	"User connects one or more bank accounts through an open-banking provider.",
	"Merchant or POS system sends order context, reference IDs, and receipt data to Trexip.",
	"Trexip matches the payment event to the merchant record and routes the receipt automatically.",
];

const collaboration = [
	"POS software teams that want paperless receipts without slowing checkout",
	"Marketplaces and vertical SaaS companies that need a consent-based post-purchase layer",
	"Open-banking, fintech, or accounting startups looking for a product partner on receipt infrastructure",
];

const showcaseSteps = [
	{
		eyebrow: "01 Register",
		title: "Start with email and IBAN-based onboarding.",
		description:
			"The early concept assumes a lightweight sign-up that verifies identity and links a payment account with explicit user permission.",
	},
	{
		eyebrow: "02 Pay in store",
		title: "Use any Trexip-compatible terminal at checkout.",
		description:
			"The merchant does not need to ask for an email address again. Trexip listens for the payment event and prepares the receipt handoff in the background.",
	},
	{
		eyebrow: "03 Receive and analyze",
		title: "Get the receipt in-app, optionally by email, and build personal spending stats.",
		description:
			"The product becomes more than receipt storage once transactions can be categorized, searched, and summarized over time.",
	},
	{
		eyebrow: "04 Export",
		title: "Move data into TSV or combine it with other finance sources.",
		description:
			"That opens the door to bookkeeping workflows, budgeting tools, and richer cross-source purchase reporting.",
	},
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
								src="/LeLogo.svg"
								alt="Trexip logo"
								width={56}
								height={56}
								priority
								className="h-14 w-14 shrink-0 object-contain"
							/>
							<div>
								<p className="font-[family:var(--font-display)] text-2xl tracking-[0.18em] text-[var(--accent-strong)]">
									TREXIP
								</p>
								<p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
									Consent-based digital receipt network
								</p>
							</div>
						</div>
						<div className="rounded-full border border-[var(--line)] bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-strong)] backdrop-blur">
							Idea page for partners and early builders
						</div>
					</header>

					<div className="grid flex-1 gap-12 pt-16 lg:grid-cols-[minmax(0,1.1fr)_26rem] lg:items-start lg:pt-24">
						<div className="max-w-4xl">
							<h1 className="mt-8 font-[family:var(--font-display)] text-5xl leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
								Trexip wants to make receipts arrive automatically after a bank payment.
							</h1>

							<div className="mt-10 overflow-hidden rounded-[2.25rem] border border-[rgba(20,58,56,0.12)] bg-white/88 p-4 shadow-[0_28px_70px_rgba(36,42,39,0.12)] sm:p-6">
								<div className="relative overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-[linear-gradient(145deg,_rgba(250,247,241,0.96)_0%,_rgba(240,245,241,0.92)_100%)] p-3 sm:p-4">
									<div className="absolute left-10 top-8 h-28 w-28 rounded-full bg-[rgba(201,108,60,0.12)] blur-3xl" />
									<div className="absolute bottom-10 right-8 h-36 w-36 rounded-full bg-[rgba(42,111,105,0.14)] blur-3xl" />
									<Image
										src="/Trexip Showcase.png"
										alt="Trexip concept showcase illustrating registration, payment, receipt delivery, analytics, and export."
										width={1024}
										height={500}
										className="relative z-10 h-auto w-full rounded-[1.1rem] border border-black/5"
									/>
								</div>
							</div>

							<div className="mt-8 flex flex-col gap-4 rounded-[1.75rem] border border-[rgba(20,58,56,0.14)] bg-white/72 p-5 shadow-[0_18px_48px_rgba(36,42,39,0.08)] backdrop-blur sm:p-6">
								<div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
									<div className="max-w-3xl">
										<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
											Not yet prototyped
										</p>
										<p className="mt-2 text-sm leading-7 text-[var(--muted-strong)] sm:text-base">
											This page presents the product direction and collaboration thesis.
											Trexip is not yet a shipped prototype, and the team is looking for
											partners to help shape the first working version.
										</p>
									</div>

									<div className="flex flex-wrap gap-3">
										<a
											href="mailto:info@trexip.com"
											className="rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
										>
											info@trexip.com
										</a>
										<a
											href="https://www.trainvent.com"
											target="_blank"
											rel="noreferrer"
											className="rounded-full border border-[var(--line)] bg-white/90 px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)] hover:bg-white"
										>
											Trainvent company site
										</a>
									</div>
								</div>
							</div>

							<div className="mt-10 grid gap-3 sm:grid-cols-3">
								{opportunity.map((item) => (
									<div
										key={item}
										className="rounded-[1.5rem] border border-[var(--line)] bg-white/72 px-5 py-5 text-sm leading-6 text-[var(--muted-strong)] shadow-[0_14px_38px_rgba(32,39,37,0.08)] backdrop-blur"
									>
										{item}
									</div>
								))}
							</div>
						</div>

						<aside className="relative">
							<div className="absolute inset-x-6 top-8 -z-10 h-48 rounded-full bg-[rgba(42,111,105,0.18)] blur-3xl" />
							<div className="rounded-[2rem] border border-[rgba(20,58,56,0.16)] bg-[rgba(20,58,56,0.94)] p-6 text-[var(--card-ink)] shadow-[0_30px_80px_rgba(16,32,31,0.24)]">
								<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--card-accent)]">
									Current thesis
								</p>
								<h2 className="mt-3 font-[family:var(--font-display)] text-3xl leading-tight">
									Not a public email-to-bank directory.
								</h2>
								<p className="mt-4 text-sm leading-7 text-white/78">
									Trexip should start as a private, consent-driven matching layer
									for merchants and users, not as a universal registry anyone can
									query.
								</p>

								<div className="mt-6 space-y-3">
									{flow.map((step, index) => (
										<div
											key={step}
											className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4"
										>
											<div className="flex items-center gap-3">
												<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-[var(--card-accent)]">
													0{index + 1}
												</div>
												<p className="text-sm leading-6 text-white/84">{step}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</aside>
					</div>
				</div>
			</section>

			<section className="px-6 py-20 sm:px-10 lg:px-16">
				<div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
							The idea
						</p>
						<h2 className="mt-4 max-w-xl font-[family:var(--font-display)] text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
							A cleaner post-purchase experience without typing your email at checkout.
						</h2>
						<p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted-strong)]">
							Receipts still live in awkward places: paper slips, merchant portals,
							or inboxes captured manually at the till. Trexip aims to turn a bank
							payment into a trusted receipt event, routed automatically once the
							user has opted in and the merchant can provide enough matching
							context.
						</p>
					</div>

					<div className="grid gap-5 md:grid-cols-3">
						{hurdles.map((item) => (
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

			<section className="border-y border-[var(--line)] bg-[linear-gradient(180deg,_rgba(255,250,244,0.92)_0%,_rgba(243,246,241,0.92)_100%)] px-6 py-20 sm:px-10 lg:px-16">
				<div className="mx-auto max-w-7xl">
					<div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
								Idea showcase
							</p>
							<h2 className="mt-4 max-w-xl font-[family:var(--font-display)] text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
								A first product story that turns a payment into a useful receipt workflow.
							</h2>
							<p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted-strong)]">
								This concept sketch makes the Trexip promise much easier to grasp:
								register once, pay normally, receive receipts automatically, then
								export or analyze the resulting data. It is not the final UX, but
								it shows a credible end-to-end value chain.
							</p>
						</div>

						<div className="rounded-[2rem] border border-[var(--line)] bg-white/80 p-6 shadow-[0_24px_60px_rgba(36,42,39,0.08)]">
							<div className="grid gap-4 sm:grid-cols-2">
								{showcaseSteps.map((step) => (
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

			<section className="border-y border-[var(--line)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.5)_0%,_rgba(231,239,236,0.8)_100%)] px-6 py-20 sm:px-10 lg:px-16">
				<div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
					<div className="rounded-[2rem] border border-[var(--line)] bg-white/72 p-8 shadow-[0_24px_60px_rgba(36,42,39,0.08)]">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
							Best first version
						</p>
						<h2 className="mt-4 font-[family:var(--font-display)] text-4xl leading-tight tracking-[-0.04em]">
							Start with merchant-integrated receipt delivery, not a risky global registry.
						</h2>
						<p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted-strong)]">
							The opportunity is still strong if the scope is disciplined. Trexip can
							let users connect accounts through a regulated partner, give explicit
							consent, and receive matched digital receipts from participating
							merchants. That keeps the value while avoiding the most dangerous
							version of the product.
						</p>
					</div>

					<div className="rounded-[2rem] border border-[rgba(20,58,56,0.14)] bg-[rgba(20,58,56,0.94)] p-8 text-[var(--card-ink)] shadow-[0_28px_80px_rgba(16,32,31,0.18)]">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--card-accent)]">
							Why now
						</p>
						<p className="mt-4 text-base leading-8 text-white/80">
							Open banking, digital commerce, accounting automation, and paperless
							checkout habits are all moving in the same direction. If the product
							is framed correctly, Trexip can sit between payment confirmation,
							merchant infrastructure, and customer communication.
						</p>
					</div>
				</div>
			</section>

			<section className="px-6 py-20 sm:px-10 lg:px-16">
				<div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
							Cooperation offer
						</p>
						<h2 className="mt-4 max-w-xl font-[family:var(--font-display)] text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
							Looking for startups who want to shape the first working version together.
						</h2>
						<p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted-strong)]">
							Trexip is open to collaborating with early-stage teams that already
							live close to checkout, receipts, payments, bookkeeping, or merchant
							software. The goal is to validate the matching model in a real product
							environment and design the safest route to market.
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

						<div className="rounded-[1.9rem] border border-[var(--accent)] bg-[linear-gradient(135deg,_rgba(201,108,60,0.14)_0%,_rgba(42,111,105,0.1)_100%)] p-7">
							<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
								Partnership angle
							</p>
							<p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted-strong)]">
								If you are building in POS, fintech, accounting, commerce ops, or
								customer identity, Trexip would love to explore a pilot, product
								partnership, or technical prototype together.
							</p>
							<div className="mt-6 flex flex-wrap gap-4">
								<a
									href="mailto:info@trexip.com"
									className="rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
								>
									info@trexip.com
								</a>
								<a
									href="https://www.trainvent.com"
									target="_blank"
									rel="noreferrer"
									className="rounded-full border border-[var(--line)] bg-white/80 px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)] hover:bg-white"
								>
									More from Trainvent
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
