export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-3">

          <div>
            <h2 className="text-2xl font-bold text-white">
              BusinessPro
            </h2>

            <p className="mt-3 text-slate-400">
              Professional websites that help businesses grow online.
            </p>
          </div>


          <div>
            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2 text-slate-400">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold text-white">
              Contact
            </h3>

            <p className="mt-4 text-slate-400">
              Email: hello@businesspro.com
            </p>

            <p className="mt-2 text-slate-400">
              Phone: +92 345 678910
            </p>
          </div>

        </div>


        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
          © 2026 BusinessPro. All rights reserved.
        </div>

      </div>
    </footer>
  );
}