export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  const faqs = [
    {
      q: "Which calendars are supported?",
      a: "MeetingScore connects to Google Calendar and Microsoft Outlook via OAuth. More integrations are on the roadmap."
    },
    {
      q: "How is the fatigue score calculated?",
      a: "We analyze meeting density, total duration, back-to-back patterns, participant count, and time-of-day to produce a 0–100 fatigue risk score."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel from your billing portal at any time. No questions asked, no lock-in."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16 gap-20">
      {/* Hero */}
      <section className="max-w-2xl w-full text-center flex flex-col items-center gap-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full">
          Meeting Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Score meetings for{" "}
          <span className="text-[#58a6ff]">productivity</span> and fatigue risk
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl">
          Connect your calendar and get an instant fatigue risk score. Understand meeting density, back-to-back patterns, and get actionable recommendations to reclaim focus time.
        </p>
        <a
          href={checkoutUrl}
          className="mt-2 inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $8/mo
        </a>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e] mt-2">
          <span>✓ Google Calendar &amp; Outlook</span>
          <span>✓ Instant fatigue score</span>
          <span>✓ Cancel anytime</span>
        </div>
      </section>

      {/* Scoring preview */}
      <section className="max-w-2xl w-full">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex flex-col gap-4">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] font-semibold">Sample Weekly Report</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Fatigue Score", value: "74", unit: "/ 100", color: "text-red-400" },
              { label: "Meetings", value: "22", unit: "this week", color: "text-[#58a6ff]" },
              { label: "Back-to-Back", value: "8", unit: "blocks", color: "text-yellow-400" },
              { label: "Focus Time", value: "3.5", unit: "hrs/day", color: "text-green-400" }
            ].map((stat) => (
              <div key={stat.label} className="bg-[#0d1117] rounded-lg p-4 flex flex-col gap-1">
                <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                <span className="text-xs text-[#8b949e]">{stat.unit}</span>
                <span className="text-xs text-[#c9d1d9]">{stat.label}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#8b949e]">⚠ High fatigue risk detected. Consider blocking 2 focus slots and removing 3 optional meetings.</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full flex flex-col items-center gap-4" id="pricing">
        <h2 className="text-2xl font-bold text-white">Simple Pricing</h2>
        <div className="w-full bg-[#161b22] border border-[#58a6ff]/40 rounded-xl p-8 flex flex-col gap-5">
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-white">$8</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <ul className="flex flex-col gap-2 text-sm text-[#c9d1d9]">
            {[
              "Google Calendar & Outlook sync",
              "Weekly fatigue risk score",
              "Back-to-back pattern detection",
              "Optimization recommendations",
              "Unlimited calendar analysis",
              "Email digest reports"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start for $8/mo
          </a>
          <p className="text-xs text-center text-[#8b949e]">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl w-full flex flex-col gap-6" id="faq">
        <h2 className="text-2xl font-bold text-white text-center">FAQ</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-1">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-xs text-[#8b949e] text-center">
        &copy; {new Date().getFullYear()} MeetingScore. All rights reserved.
      </footer>
    </main>
  );
}
