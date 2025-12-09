import React, { useEffect } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { BsSunFill } from "react-icons/bs";


const BlogDeail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
          <ScrollToTopButton />
      <div className="bg-[var(--brand-light)] text-[var(--brand-dark)]">
        <section className="mt-40 mb-20 px-4 md:px-8 lg:px-16">

{/* <section className="mt-40 mb-20 px-4 md:px-8 lg:px-16 pb-[300px]"> */}
  <div className="max-w-5xl mx-auto relative">
<div className="bg-[var(--brand-light)] rounded-2xl shadow-lg overflow-hidden">
                <img
                src="https://wallpapercave.com/wp/wp8172861.jpg"
                alt="Blog Banner"
                className="w-full h-[280px] md:h-[400px] object-cover"
              />
            </div>

            {/* ----------- OVERLAP CARD ----------- */}
           <div className="flex justify-center -mt-10 w-full">
    <div className="bg-[var(--brand-light)] rounded-2xl shadow-xl p-6 md:p-10 border border-[var(--brand-light)] w-[92%] md:w-[95%]">
                <h1 className="text-3xl font-bold text-[var(--brand-dark)] mb-6">
                  Golden Rules for Intraday Trading – Trade Like a Pro
                </h1>

                <ul className="space-y-3 ">
                  {[
                    <>
                      <strong>Protect your capital above all else:</strong>  Never risk more than 1% of your total capital on a single trade.
                    </>,
                    <>
                      <strong>Use Stop Loss diligently:</strong> Always set stop loss to limit potential losses and protect your capital. It should be a maximum of 1% of your total capital.
                    </>,
                    <>
                      <strong>Set clear daily targets:</strong> Define a realistic profit goal for the day and be ready to accept an equal loss if the market moves against you. As a beginner, start with a 1:1 Risk:Reward ratio; as you gain confidence, gradually move to a 1:2 Risk:Reward ratio.
                    </>,
                    <>
                      <strong>Win small:</strong>  As a beginner, set a small profit target to gain confidence. Ensure you end the day in green, even if the profit is modest.
                    </>,
                    <>
                      <strong>Take profits responsibly:</strong>  If you reach your daily target or stop loss, close trading immediately and start fresh the next day. If you expect a profit of Rs.2,000 per day but achieve Rs.4,000, do not trade the next day, as overtrading is risky.
                    </>,
                    <>
                      <strong>Manage expectations:</strong>  Expect modest returns (typically 1–2% per day). Avoid expecting profit every day; losses are part of trading.
                    </>,
                    <>
                      <strong>End trading within the day:</strong>  Close all positions before market close—never carry intraday trades overnight.
                    </>,
                    <>
                      <strong>Avoid revenge trades:</strong> Never trade to recover previous losses; maintain discipline and a calm mindset.
                    </>,
                    <>
                      <strong>Control emotions and greed:</strong> Stay rational, stick to your plan, and do not let emotions dictate trades.
                    </>,
                    <>
                      <strong>Trade with the trend:</strong> Avoid guessing market reversals; follow clear trend signals.
                    </>,
                    <>
                      <strong>Limit exposure in derivatives:</strong> Prefer options over futures; avoid deep OTM (Out of the Money) trades unless experienced.
                    </>,
                    <>
                      <strong>Avoid expiry gambling:</strong> Only engage in complex expiry strategies if you have significant experience.
                    </>,
                    <>
                      <strong>Monitor market movers:</strong> Track FII/DII activity and major news events (RBI, US Fed) to avoid unpredictable volatility.
                    </>,
                    <>
                      <strong>Trade consistently with fixed lot size:</strong>  Maintain the same position size until consistent profitability is achieved (e.g., 4 consecutive weeks).
                    </>,
                    <>
                      <strong>Stick to a simple strategy:</strong> While many strategies exist, focus on one simple approach with a winning rate of 60–70%. Avoid constantly switching strategies.
                    </>,
                    <>
                      <strong>Learn key technical tools:</strong>  Understand Option Chain and Open Interest (OI) data to identify where major market players are positioned.
                    </>,
                    <>
                      <strong>Continuous learning:</strong> Keep improving your skills and knowledge to maintain an edge in the market and be part of the 7% winning community.
                    </>,
                    <>
                      <strong>Accept losses gracefully:</strong> Intraday trading will not be profitable every day; focus on long-term consistency.
                    </>,
                    <>
                      <strong>Never get addicted:</strong> Treat the stock market as a professional business, not a hobby or a source of thrill.
                    </>,
                    <>
                      <strong>Maintain patience and discipline:</strong> Knowledge, patience, and a calm mind are more important than chasing high profits.
                    </>

                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <h2 className="text-xl font-semibold text-[var(--brand-gold)] mt-8 mb-4 tracking-wide">Key Takeaways</h2>
                <ul className="space-y-3">
                  {[
                    "Patience, knowledge, and discipline > chasing high profits.",

                    <>
                      Protect capital, follow trends, control emotions, and <strong> trade like a business.</strong>
                    </>
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default BlogDeail;