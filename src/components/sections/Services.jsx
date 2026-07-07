const services = [
  {
    title: "Website Design",
    description:
      "Modern and responsive websites designed to build trust and attract more customers.",
  },
  {
    title: "Business Solutions",
    description:
      "Custom digital solutions that help your business improve its online presence.",
  },
  {
    title: "Customer Growth",
    description:
      "Optimized experiences that help convert visitors into potential customers.",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-semibold text-blue-600">
            Our Services
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            Everything Your Business Needs Online
          </h2>

          <p className="mt-4 text-slate-600">
            Professional solutions designed to help businesses grow faster.
          </p>
        </div>


        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}