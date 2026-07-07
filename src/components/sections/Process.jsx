const steps = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "We learn about your goals, audience, and requirements to create the right solution.",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "We create a modern and responsive website designed around your business needs.",
  },
  {
    number: "03",
    title: "Launch & Grow",
    description:
      "Your website goes live with everything needed to attract and serve customers.",
  },
];

export default function Process() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-semibold text-blue-600">
            Our Process
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            Simple Steps To Get Started
          </h2>

          <p className="mt-4 text-slate-600">
            A clear process that makes building your online presence easy.
          </p>
        </div>


        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-8"
            >
              <span className="mb-5 block text-4xl font-bold text-blue-600">
                {step.number}
              </span>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}