const features = [
  {
    title: "Modern Design",
    description:
      "Clean and professional designs that create a strong first impression for your customers.",
  },
  {
    title: "Mobile Friendly",
    description:
      "Responsive websites that look great and work smoothly on all devices.",
  },
  {
    title: "Fast Performance",
    description:
      "Optimized websites that load quickly and provide a better user experience.",
  },
  {
    title: "Business Focused",
    description:
      "Every section is designed to help your business attract and convert customers.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-semibold text-blue-600">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            Built To Help Your Business Grow
          </h2>

          <p className="mt-4 text-slate-600">
            We combine modern technology with smart design to create websites
            that deliver results.
          </p>
        </div>


        <div className="grid gap-6 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}