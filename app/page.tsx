"use client"
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  Camera,
  Clock3,
  LayoutGrid,
  Palette,
  Sparkles,
  Star,
  Wand2,
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Reveal } from "@/components/reveal";
import { redirect } from "next/navigation";

const features = [
  {
    title: "Prompt-guided art direction",
    description:
      "Steer tone, mood, and brand with a 1-line prompt. Gemini fills in the design logic.",
    icon: Wand2,
  },
  {
    title: "Smart aspect ratios",
    description:
      "Auto-create the right size for every placement: social, ads, storefronts, and email.",
    icon: LayoutGrid,
  },
  {
    title: "Product-aware lighting",
    description:
      "Your product stays accurate while the environment shifts — no weird warping.",
    icon: Camera,
  },
  {
    title: "Premium palette control",
    description:
      "Lock brand colors, tweak accents, or explore tasteful combinations with one click.",
    icon: Palette,
  },
  {
    title: "Batch generation",
    description:
      "Create 20 variations in seconds, export curated sets, and keep the winners.",
    icon: Bolt,
  },
  {
    title: "Ready-to-publish",
    description:
      "PNG, JPG, and WebP exports, optimized for speed without losing crisp detail.",
    icon: BadgeCheck,
  },
];

const steps = [
  {
    title: "Upload a photo",
    description: "Drop in a product shot or a quick phone capture.",
    icon: Camera,
  },
  {
    title: "Add a micro prompt",
    description: "Example: “sunlit marble, warm beige, luxury vibe.”",
    icon: Sparkles,
  },
  {
    title: "Generate & refine",
    description: "Pick your favorites, nudge the style, then export.",
    icon: Star,
  },
];

const testimonials = [
  {
    quote:
      "We cut ad production time from 4 days to 2 hours. The thumbnails actually convert.",
    name: "Amara I.",
    role: "Growth Lead, Lumi",
  },
  {
    quote:
      "The brand-safe palette controls are unreal. It feels like a senior designer is inside the app.",
    name: "Noah P.",
    role: "Creative Director, Northwind",
  },
  {
    quote:
      "Instant variants for every placement. We ship faster without sacrificing quality.",
    name: "Hugo R.",
    role: "Founder, Studio 19",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$29",
    description: "For solo founders launching the first ad set.",
    perks: [
      "120 renders / month",
      "All aspect ratios",
      "Brand palette lock",
      "Basic exports",
    ],
  },
  {
    name: "Studio",
    price: "$79",
    description: "For small teams shipping weekly campaigns.",
    perks: [
      "600 renders / month",
      "Batch workflows",
      "Priority queue",
      "Advanced exports",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$199",
    description: "For teams running multi-channel ads.",
    perks: [
      "Unlimited renders",
      "Shared libraries",
      "Team approvals",
      "Dedicated support",
    ],
  },
];

const faqs = [
  {
    q: "Do I need design experience?",
    a: "No. Start with a product photo and a short prompt. The system handles styling.",
  },
  {
    q: "Does it keep my product accurate?",
    a: "Yes. The model prioritizes the original object so you avoid distortion.",
  },
  {
    q: "Can I lock brand colors?",
    a: "Yes. Set a palette once, then reuse it across every campaign.",
  },
  {
    q: "What formats do you export?",
    a: "PNG, JPG, and WebP with resolution controls for ads and storefronts.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-sand text-ink">
      <div className="pointer-events-none absolute inset-0">
        <div className="star-field star-field--one" />
        <div className="star-field star-field--two" />
        <div className="star-field star-field--three" />
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-sunset/50 blur-[120px]" />
        <div className="absolute right-0 top-64 h-96 w-96 rounded-full bg-mint/50 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-gold/30 blur-[160px]" />
      </div>

      <header className="relative z-10">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3 text-lg font-semibold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-ink text-sand shadow-soft">
              <Sparkles className="h-5 w-5" />
            </span>
            Lumina Ads
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-ink/70 md:flex">
            <a className="hover:text-ink transition-colors" href="#features">
              Features
            </a>
            <a className="hover:text-ink transition-colors" href="#workflow">
              Workflow
            </a>
            <a className="hover:text-ink transition-colors" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-ink transition-colors" href="#faq">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-3">
            <ModeToggle />
            <button className="hidden rounded-full border border-ink/15 bg-white/60 px-4 py-2 text-sm font-medium text-ink/80 backdrop-blur transition hover:border-ink/30 hover:text-ink md:inline-flex">
              Sign in
            </button>
            <button className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-sand shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow">
              Start free
            </button>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 lg:flex-row lg:items-center lg:gap-16">
          <Reveal className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 shadow-soft backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-sunset" />
              Gemini-powered ad creator
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Turn a product photo + tiny prompt into premium thumbnails and ads.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink/70">
              Lumina Ads uses Gemini to generate on-brand thumbnails and product
              images in every aspect ratio. Create high-converting creatives
              without the agency timeline.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={()=> redirect("/login")}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-sand shadow-glow transition hover:-translate-y-1">
                Generate my first set
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-6 py-3 text-sm font-semibold text-ink/80 transition hover:border-ink/30 hover:text-ink">
                Watch demo
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-ink/70">
              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                <span>Generate in 30 seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4" />
                <span>Brand-safe outputs</span>
              </div>
            </div>
          </Reveal>
          <Reveal className="flex-1" delay={150}>
            <div className="group relative mx-auto flex max-w-xl flex-col gap-4 rounded-3xl border border-ink/10 bg-white/70 p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:shadow-glow float-slow">
              <div className="absolute -right-10 -top-8 hidden rounded-3xl border border-ink/10 bg-white/80 p-4 text-xs font-medium text-ink/70 shadow-soft lg:block">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-mint" />
                  12 layouts generated
                </div>
                <div className="mt-2 text-ink/60">Aspect ratios auto-mapped</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
                    Hero
                  </div>
                  <div className="mt-4 h-32 overflow-hidden rounded-xl">
                    <img
                      src="/mock-hero.svg"
                      alt="Hero layout preview"
                      className="h-full w-full object-cover transition duration-500 hover:scale-[1.06]"
                    />
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
                    Ad set
                  </div>
                  <div className="mt-4 h-32 overflow-hidden rounded-xl">
                    <img
                      src="/mock-adset.svg"
                      alt="Ad set layout preview"
                      className="h-full w-full object-cover transition duration-500 hover:scale-[1.06]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 text-sm text-ink/70">
                <span>Prompt: “sunlit marble, warm beige, luxe.”</span>
                <span className="rounded-full bg-ink/10 px-3 py-1 text-xs font-semibold text-ink/70">
                  Gemini
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {["1:1", "4:5", "16:9"].map((ratio) => (
                  <div
                    key={ratio}
                    className="group/ratio flex flex-col items-start gap-2 rounded-2xl border border-ink/10 bg-white/80 p-3 text-xs font-semibold text-ink/70 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
                  >
                    <span className="rounded-full bg-ink/10 px-2 py-1 text-[10px]">
                      {ratio}
                    </span>
                    <div className="h-14 w-full overflow-hidden rounded-lg">
                      <img
                        src="/mock-ratio.svg"
                        alt={`${ratio} preview`}
                        className="h-full w-full object-cover transition duration-500 group-hover/ratio:scale-[1.08]"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-10 left-6 hidden rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 text-xs font-medium text-ink/70 shadow-soft lg:flex">
                <span className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-gold" />
                  4.9 average creative rating
                </span>
              </div>
            </div>
          </Reveal>
        </section>

        <Reveal className="mx-auto w-full max-w-6xl px-6 pb-16">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-ink/10 bg-white/70 px-6 py-6 text-sm text-ink/60 shadow-soft backdrop-blur">
            <span>Trusted by product studios, DTC founders, and growth teams.</span>
            <div className="flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em]">
              <span>Northwind</span>
              <span>Paperkite</span>
              <span>Lumi</span>
              <span>Juniper</span>
              <span>Mono</span>
            </div>
          </div>
        </Reveal>

        <Reveal
          id="features"
          className="mx-auto w-full max-w-6xl px-6 pb-24"
        >
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
              Why it works
            </p>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              Designed for modern ad velocity.
            </h2>
            <p className="max-w-2xl text-lg text-ink/70">
              Every interaction is tuned for speed and control. Create a look,
              lock your brand, and iterate with confidence.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-ink/10 bg-white/70 p-6 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-glow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-sand shadow-soft transition group-hover:scale-105">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          id="workflow"
          className="mx-auto w-full max-w-6xl px-6 pb-24"
        >
          <div className="grid gap-8 rounded-3xl border border-ink/10 bg-white/70 p-8 shadow-soft backdrop-blur lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
                Workflow
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
                Three steps to publish-ready creative.
              </h2>
              <p className="mt-4 text-lg text-ink/70">
                Upload, prompt, and ship. Every format is generated and aligned
                to your product photo with zero manual resizing.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-ink/60">
                <div className="flex items-center gap-2 rounded-full bg-ink/5 px-3 py-2">
                  <Bolt className="h-4 w-4 text-ink" />
                  <span>Batch queue</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-ink/5 px-3 py-2">
                  <BadgeCheck className="h-4 w-4 text-ink" />
                  <span>Approval-ready</span>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white/90 p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-ink shadow-soft">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
                      Step {index + 1}
                    </div>
                    <h3 className="text-base font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="text-sm text-ink/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
                Precision controls
              </p>
              <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
                Micro-adjustments, massive impact.
              </h2>
              <p className="text-lg text-ink/70">
                Tighten focus, lift contrast, or swap a background. Keep your
                product intact while experimenting with environments.
              </p>
              <ul className="flex flex-col gap-3 text-sm text-ink/70">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sunset" />
                  Style presets tuned for commerce performance
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-mint" />
                  Aspect ratio templates for every platform
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  Safe zones and focal point protection
                </li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["A/B Variants", "Palette Locks", "Batch Exports", "Brand Kits"].map(
                (label) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-ink/10 bg-white/80 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-glow"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                      {label}
                    </div>
                    <div className="mt-4 h-20 rounded-2xl bg-gradient-to-br from-cream via-white to-mint/60" />
                  </div>
                )
              )}
            </div>
          </div>
        </Reveal>

        <Reveal className="mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-3xl border border-ink/10 bg-white/70 p-6 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <p className="text-base text-ink/80">“{testimonial.quote}”</p>
                <div className="mt-4 text-sm font-semibold text-ink">
                  {testimonial.name}
                </div>
                <div className="text-xs text-ink/60">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          id="pricing"
          className="mx-auto w-full max-w-6xl px-6 pb-24"
        >
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
              Pricing
            </p>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              Pick your launch velocity.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-6 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-glow ${
                  plan.highlighted
                    ? "border-ink/50 bg-ink text-sand shadow-glow"
                    : "border-ink/10 bg-white/70 text-ink"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold uppercase tracking-[0.3em] opacity-70">
                    {plan.name}
                  </div>
                  {plan.highlighted ? (
                    <span className="rounded-full bg-sand/15 px-3 py-1 text-xs font-semibold">
                      Popular
                    </span>
                  ) : null}
                </div>
                <div className="mt-4 text-4xl font-semibold">{plan.price}</div>
                <p className="mt-2 text-sm opacity-70">{plan.description}</p>
                <ul className="mt-6 flex flex-col gap-3 text-sm opacity-90">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <BadgeCheck className="h-4 w-4" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-sand text-ink hover:-translate-y-1"
                      : "border border-ink/15 bg-white/70 text-ink hover:border-ink/30"
                  }`}
                >
                  Start with {plan.name}
                </button>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal id="faq" className="mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
                Everything you need to know.
              </h2>
              <p className="mt-4 text-lg text-ink/70">
                If you have questions about prompts, pricing, or exports, we’ve
                got you covered.
              </p>
            </div>
            <div className="grid gap-4">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-ink/10 bg-white/80 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-glow"
                >
                  <h3 className="text-base font-semibold text-ink">{item.q}</h3>
                  <p className="mt-2 text-sm text-ink/70">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-ink px-10 py-12 text-sand shadow-glow">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-mint/30 blur-[90px]" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-sunset/30 blur-[90px]" />
            <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sand/70">
                  Launch today
                </p>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                  Your next campaign is 30 seconds away.
                </h2>
                <p className="mt-4 text-lg text-sand/80">
                  Upload a product photo, prompt the vibe, and let Gemini
                  generate a premium set of thumbnails and ads.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <button className="rounded-full bg-sand px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-1">
                  Start free trial
                </button>
                <button className="rounded-full border border-sand/30 px-6 py-3 text-sm font-semibold text-sand/80 transition hover:border-sand/70 hover:text-sand">
                  Talk to sales
                </button>
                <div className="text-xs text-sand/60">
                  No credit card required.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </main>

      <footer className="relative z-10 border-t border-ink/10 bg-white/60 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-ink/60 md:flex-row md:items-center md:justify-between">
          <div className="font-semibold text-ink">Lumina Ads</div>
          <div className="flex flex-wrap items-center gap-4">
            <a className="hover:text-ink transition-colors" href="#">
              Privacy
            </a>
            <a className="hover:text-ink transition-colors" href="#">
              Terms
            </a>
            <a className="hover:text-ink transition-colors" href="#">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
