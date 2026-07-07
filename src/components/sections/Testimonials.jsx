const testimonials = [
  {
    quote:
      "Amazing experience. The website helped our business look more professional online.",
    name: "John Smith",
    role: "Business Owner",
  },
  {
    quote:
      "Professional work, great communication, and a modern design that our customers love.",
    name: "Sarah Lee",
    role: "Company Founder",
  },
  {
    quote:
      "A simple process with excellent results. Highly recommended for growing businesses.",
    name: "Michael Brown",
    role: "Marketing Manager",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-semibold text-blue-600">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            What Our Clients Say
          </h2>
        </div>


        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-slate-200 p-8 shadow-sm"
            >
              <p className="leading-7 text-slate-600">
                "{item.quote}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}