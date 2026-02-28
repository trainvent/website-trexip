import Image from "next/image";

const highlights = [
	"Bank-connected purchase matching",
	"Receipt delivery straight to inboxes",
	"POS software designed for modern merchants",
];

const pillars = [
	{
		title: "Automatic receipt routing",
		description:
			"Trexip links payment activity with customer identity so receipts reach the right inbox without asking the cashier to slow down.",
	},
	{
		title: "Built for cash registers",
		description:
			"The platform is aimed at point-of-sale software: faster checkout flows, cleaner records, and a customer experience that feels current.",
	},
	{
		title: "Stripe-level ambition",
		description:
			"The goal is not another add-on. Trexip is being shaped as core infrastructure for payment-aware retail systems.",
	},
];

const steps = [
	"A customer pays using a connected bank account or recognized payment method.",
	"Trexip matches the transaction with the customer profile and transaction context.",
	"A clean digital receipt is generated and sent automatically by email.",
];

export default function Home() {
	return (
		<main className="min-h-screen overflow-hidden bg-[var(--canvas)] text-[var(--ink)]">
			<section className="relative isolate">
				<div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,181,71,0.32),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(220,38,38,0.18),_transparent_28%),linear-gradient(180deg,_#fff8eb_0%,_#f6efe2_58%,_#efe4d4_100%)]" />
				<div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-10 lg:px-16">
					<header className="flex items-center justify-between">
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
								<p className="font-[family:var(--font-display)] text-2xl tracking-[0.2em] text-[var(--accent-strong)]">
									TREXIP
								</p>
								<p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
									Payment-aware receipt infrastructure
								</p>
							</div>
						</div>
						<a
							href="https://trainvent.com"
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-[var(--line)] bg-white/70 px-5 py-2 text-sm font-semibold text-[var(--ink)] backdrop-blur transition hover:border-[var(--accent)] hover:bg-white"
						>
							Visit trainvent.com
						</a>
					</header>

					<div className="grid flex-1 gap-14 pb-10 pt-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] lg:items-center lg:gap-10 lg:pt-20">
						<div className="max-w-3xl">
							<p className="inline-flex rounded-full border border-[var(--line)] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)] shadow-[0_12px_30px_rgba(120,53,15,0.08)] backdrop-blur">
								Coming soon for retail and hospitality
							</p>
							<h1 className="mt-8 max-w-4xl font-[family:var(--font-display)] text-5xl leading-[0.94] tracking-[-0.04em] text-[var(--ink)] sm:text-6xl lg:text-7xl">
								Trexip turns payments into instant email receipts.
							</h1>
							<p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-strong)] sm:text-xl">
								We are building software for cash registers that connects payment
								data with customer identity, so businesses can send receipts
								automatically without breaking checkout flow.
							</p>

							<div className="mt-10 flex flex-wrap gap-3">
								{highlights.map((highlight) => (
									<span
										key={highlight}
										className="rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.86)] px-4 py-2 text-sm text-[var(--muted-strong)] shadow-[0_10px_24px_rgba(120,53,15,0.06)]"
									>
										{highlight}
									</span>
								))}
							</div>
						</div>

						<div className="relative">
							<div className="absolute left-10 top-8 -z-10 h-48 w-48 rounded-full bg-[rgba(180,83,9,0.16)] blur-3xl" />
							<div className="absolute bottom-12 right-2 -z-10 h-56 w-56 rounded-full bg-[rgba(190,24,93,0.14)] blur-3xl" />
							<div className="rounded-[2rem] border border-[rgba(120,53,15,0.14)] bg-[rgba(109,40,14,0.96)] p-6 text-[var(--card-ink)] shadow-[0_28px_80px_rgba(68,35,15,0.28)]">
								<div className="flex items-center justify-between border-b border-white/10 pb-4">
									<div>
										<p className="text-sm uppercase tracking-[0.22em] text-white/60">
											Product signal
										</p>
										<p className="mt-2 font-[family:var(--font-display)] text-3xl">
											The smarter receipt layer
										</p>
									</div>
									<div className="rounded-full bg-[rgba(255,237,213,0.14)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--card-accent)]">
										Beta
									</div>
								</div>

								<div className="mt-6 space-y-4">
									{steps.map((step, index) => (
										<div
											key={step}
											className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
										>
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(255,237,213,0.12)] font-semibold text-[var(--card-accent)]">
												0{index + 1}
											</div>
											<p className="text-sm leading-7 text-white/80">{step}</p>
										</div>
									))}
								</div>

								<div className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:grid-cols-2">
									<div>
										<p className="text-xs uppercase tracking-[0.16em] text-white/50">
											Built for
										</p>
										<p className="mt-2 text-lg text-white/90">
											Retailers, restaurants, and modern POS teams
										</p>
									</div>
									<div>
										<p className="text-xs uppercase tracking-[0.16em] text-white/50">
											Outcome
										</p>
										<p className="mt-2 text-lg text-white/90">
											Faster checkouts and cleaner post-purchase communication
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative border-t border-[rgba(120,53,15,0.12)] bg-[linear-gradient(180deg,_rgba(255,248,235,0.2)_0%,_rgba(255,255,255,0.72)_100%)] px-6 py-20 sm:px-10 lg:px-16">
				<div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
							Why Trexip
						</p>
						<h2 className="mt-4 max-w-xl font-[family:var(--font-display)] text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
							A new layer between checkout, banking, and customer messaging.
						</h2>
						<p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted-strong)]">
							Legacy receipt flows depend on paper, manual email entry, or weak
							CRM links. Trexip is being designed as a cleaner system: payment
							event in, trusted receipt email out.
						</p>
					</div>

					<div className="grid gap-5 md:grid-cols-3">
						{pillars.map((pillar) => (
							<article
								key={pillar.title}
								className="rounded-[1.75rem] border border-[var(--line)] bg-white/80 p-6 shadow-[0_18px_48px_rgba(120,53,15,0.08)] backdrop-blur"
							>
								<p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">
									{pillar.title}
								</p>
								<p className="mt-4 text-base leading-7 text-[var(--muted-strong)]">
									{pillar.description}
								</p>
							</article>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
