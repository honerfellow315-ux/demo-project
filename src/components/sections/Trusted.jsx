export default function Trusted() {
  const companies = [
    "Company One",
    "Company Two",
    "Company Three",
    "Company Four",
    "Company Five",
  ];

  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <p className="mb-8 text-sm font-medium text-slate-500">
          Trusted by businesses that value quality
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {companies.map((company) => (
            <div
              key={company}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-5 font-semibold text-slate-700"
            >
              {company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}