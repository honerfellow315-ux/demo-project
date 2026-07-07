const stats = [
  {
    value: "500+",
    label: "Projects Completed",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
  {
    value: "3+",
    label: "Years Experience",
  },
];

export default function Stats() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h3 className="text-4xl font-bold text-white">
              {stat.value}
            </h3>

            <p className="mt-2 text-blue-100">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}