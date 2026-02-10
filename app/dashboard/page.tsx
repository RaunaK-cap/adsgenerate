"use client";

import { useEffect, useMemo, useState } from "react";
import { Camera, Sparkles } from "lucide-react";

type OutputCard = { id: string; label: string; src?: string };

const demoOutputs: OutputCard[] = [
  { id: "a", label: "1:1", src: "/mock-ratio.svg" },
  { id: "b", label: "4:5", src: "/mock-ratio.svg" },
  { id: "c", label: "16:9", src: "/mock-ratio.svg" },
  { id: "d", label: "9:16", src: "/mock-ratio.svg" },
  { id: "e", label: "3:4", src: "/mock-ratio.svg" },
  { id: "f", label: "2:3", src: "/mock-ratio.svg" },
];

const placeholderOutputs: OutputCard[] = [
  { id: "p1", label: "Pending" },
  { id: "p2", label: "Pending" },
  { id: "p3", label: "Pending" },
];

export default function DashboardPage() {
  const [mode, setMode] = useState<"thumbnail" | "ads">("thumbnail");
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const [promptDraft, setPromptDraft] = useState(
    "sunlit marble, warm beige, luxe."
  );
  const [generated, setGenerated] = useState<OutputCard[]>([]);

  useEffect(() => {
    if (!uploadPreview) return;
    return () => URL.revokeObjectURL(uploadPreview);
  }, [uploadPreview]);

  const modeHint = useMemo(() => {
    return mode === "thumbnail"
      ? "Best for store listings, product grids, and quick socials."
      : "Optimized for paid campaigns and multi-format ad sets.";
  }, [mode]);

  const outputsToRender = generated.length ? generated : placeholderOutputs;

  return (
    <div className="relative min-h-screen overflow-hidden bg-sand text-ink">
      <div className="pointer-events-none absolute inset-0">
        <div className="star-field star-field--one" />
        <div className="star-field star-field--two" />
        <div className="absolute left-10 top-12 h-72 w-72 rounded-full bg-mint/30 blur-[120px]" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-sunset/30 blur-[140px]" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-20 pt-16">
        <div className="mx-auto w-full max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 shadow-soft backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Creator dashboard
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Build your next set of {mode === "thumbnail" ? "thumbnails" : "ads"}.
          </h1>
          <p className="mt-2 text-sm text-ink/60">{modeHint}</p>
        </div>

        <div className="mx-auto flex w-full max-w-4xl justify-center">
          <div className="inline-flex rounded-full border border-ink/10 bg-white/70 p-1 shadow-soft backdrop-blur">
            {["thumbnail", "ads"].map((item) => {
              const isActive = item === mode;
              return (
                <button
                  key={item}
                  onClick={() => setMode(item as "thumbnail" | "ads")}
                  className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                    isActive
                      ? "bg-ink text-sand shadow-glow"
                      : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {item === "thumbnail" ? "Thumbnails" : "Ads"}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-4xl gap-6 rounded-3xl border border-ink/10 bg-white/70 p-6 shadow-xl backdrop-blur lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-ink/10 bg-white/90 p-4 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
                Preview
              </div>
              <div className="mt-3 h-72 overflow-hidden rounded-xl border border-ink/10 bg-sand/60">
                {uploadPreview ? (
                  <img
                    src={uploadPreview}
                    alt="Uploaded preview"
                    className= " h-62 flex items-center justify-center object-center rounded-lg mt-5 ml-25 opacity-90"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">
                    No image yet
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-white/90 p-4 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
                Upload
              </div>
              <label className="mt-3 flex h-25 w-full cursor-pointer items-center justify-center rounded-xl border border-dashed border-ink/20 bg-sand/60 text-xs font-semibold uppercase tracking-[0.2em] text-ink/50 transition hover:border-ink/40 hover:bg-sand">
                <div className="flex flex-col items-center gap-2 text-center">
                  <Camera className="h-4 w-5" />
                  Drop or click to upload
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (!file) return;
                    setUploadPreview(URL.createObjectURL(file));
                  }}
                  className="absolute h-0 w-0 opacity-0"
                />
              </label>
              <div className="mt-3 flex items-center justify-between text-xs text-ink/60">
                <span>JPG, PNG, or WebP up to 10MB</span>
                <span className="rounded-full bg-ink/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/70">
                  Preview live
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-ink/10 bg-white/90 p-4 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
                Prompt chat
              </div>
              <div className="mt-3 flex flex-col gap-3 text-sm">
                <div className="rounded-2xl bg-ink px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sand/70">
                  Gemini
                </div>
                <div className="rounded-2xl bg-white px-3 py-3 text-sm text-ink/70 shadow-soft">
                  Share your mood, material, and lighting. I will match the
                  product and generate a premium set.
                </div>
                <div className="rounded-2xl border border-ink/10 bg-white px-3 py-3 shadow-soft">
                  <textarea
                    value={promptDraft}
                    onChange={(event) => setPromptDraft(event.target.value)}
                    rows={4}
                    placeholder="Describe mood, material, and lighting..."
                    className="w-full resize-none bg-transparent text-sm text-ink/80 placeholder:text-ink/40 focus:outline-none"
                  />
                  <div className="mt-3 flex items-center justify-between text-xs text-ink/60">
                    <span>Keep it to 1 line for best results.</span>
                    <button
                      onClick={() => setGenerated(demoOutputs)}
                      className="rounded-full bg-ink px-4 py-1 text-xs font-semibold text-sand transition hover:-translate-y-0.5"
                    >
                      Generate
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-white/90 p-4 text-xs text-ink/60 shadow-soft">
              Active prompt: “{promptDraft}”
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-4xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
                Generated outputs
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-ink">
                {generated.length ? "Ready to review." : "Waiting for generation."}
              </h2>
            </div>
            <button
              onClick={() => setGenerated([])}
              className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 transition hover:border-ink/30 hover:text-ink"
            >
              Clear
            </button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outputsToRender.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col gap-3 rounded-3xl border border-ink/10 bg-white/80 p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/50">
                  <span>{item.label}</span>
                  <span className="rounded-full bg-ink/10 px-2 py-1 text-[10px]">
                    {mode === "thumbnail" ? "Thumbnail" : "Ad"}
                  </span>
                </div>
                <div className="h-40 overflow-hidden rounded-2xl border border-ink/10 bg-sand/50">
                  {item.src ? (
                    <img
                      src={item.src}
                      alt={`${item.label} output`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">
                      Waiting for output
                    </div>
                  )}
                </div>
                <div className="text-xs text-ink/60">
                  {item.src
                    ? `Generated from: “${promptDraft}”`
                    : "Generate to see results here."}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
