const questions = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites can be completed within a few days depending on requirements.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes, all websites are designed to be fully responsive on phones, tablets, and desktops.",
  },
  {
    question: "Can I update my website later?",
    answer:
      "Yes, your website can be updated and expanded whenever your business grows.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes, we can help with maintenance, updates, and future improvements.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold text-blue-600">
            FAQ
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>


        <div className="space-y-4">
          {questions.map((item) => (
            <div
              key={item.question}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <h3 className="font-bold text-slate-900">
                {item.question}
              </h3>

              <p className="mt-2 text-slate-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}