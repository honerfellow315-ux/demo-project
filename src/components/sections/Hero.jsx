import siteData from "@/data/siteData";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="mb-3 font-semibold text-blue-600">
          {siteData.business.tagline}
        </p>

        <h1 className="mb-6 text-5xl font-bold text-slate-900">
          {siteData.hero.title}
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          {siteData.hero.subtitle}
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            {siteData.hero.primaryButton}
          </button>

          <button className="rounded-lg border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100">
            {siteData.hero.secondaryButton}
          </button>
        </div>

      </div>
    </section>
  );
}