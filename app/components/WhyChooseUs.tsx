
import {
  ShieldCheck,
  Headset,
  BadgePercent,
  MapPinned,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    number: "01",
    icon: MapPinned,
    title: "Handpicked Destinations",
    description:
      "Discover incredible places selected by travel experts for unforgettable experiences.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Trusted Local Experts",
    description:
      "Travel confidently with experienced local guides who know every hidden gem.",
  },
  {
    number: "03",
    icon: BadgePercent,
    title: "Best Price Guarantee",
    description:
      "Enjoy memorable adventures with transparent pricing and no unexpected surprises.",
  },
  {
    number: "04",
    icon: Headset,
    title: "24/7 Travel Support",
    description:
      "From planning your trip to reaching your destination, we're here whenever you need us.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <div className="why-choose-intro">
          <span className="section-eyebrow">
            <span className="section-eyebrow-line" />
            WHY TRAVEL WITH US
          </span>

          <h2>
            More than a trip.
            <br />
            <span>It's your next great story.</span>
          </h2>

          <p>
            We make exploring the world simple, personal, and memorable.
            All you need to do is choose your next adventure.
          </p>

          <Link href="/about" className="why-choose-link">
            Discover our story
            <ArrowUpRight size={17} />
          </Link>

          <div className="why-choose-stat">
            <div className="why-choose-stat-number">10k+</div>
            <div className="why-choose-stat-copy">
              <strong>Happy travelers</strong>
              <span>And counting every adventure</span>
            </div>
          </div>
        </div>

        <div className="why-choose-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article className="benefit-card" key={benefit.number}>
                <div className="benefit-card-top">
                  <div className="benefit-icon">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>
                  <span className="benefit-number">{benefit.number}</span>
                </div>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
