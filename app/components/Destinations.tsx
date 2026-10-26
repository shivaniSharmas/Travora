
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

type Destination = {
  id: number;
  name: string;
  country: string;
  tours: number;
  image: string;
};

const destinations: Destination[] = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    tours: 24,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Swiss Alps",
    country: "Switzerland",
    tours: 18,
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Santorini",
    country: "Greece",
    tours: 16,
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Amalfi Coast",
    country: "Italy",
    tours: 12,
    image:
      "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Destinations() {
  return (
    <section className="destinations-section" id="destinations">
      <div className="destinations-container">
        <div className="destinations-heading">
          <div>
            <span className="section-eyebrow">
              <span className="section-eyebrow-line" />
              TOP PLACES TO EXPLORE
            </span>

            <h2>
              Popular <span>Destinations</span>
            </h2>

            <p>
              Discover extraordinary places around the world and
              find your next unforgettable getaway.
            </p>
          </div>

          <Link href="/destinations" className="destinations-view-all">
            Explore All Destinations
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="destinations-grid">
          {destinations.map((destination) => (
            <Link
              href={`/destinations/${destination.id}`}
              className="destination-card"
              key={destination.id}
            >
              <img
                src={destination.image}
                alt={`${destination.name}, ${destination.country}`}
                loading="lazy"
              />

              <div className="destination-overlay" />

              <div className="destination-tour-count">
                {destination.tours} Tours
              </div>

              <div className="destination-content">
                <span className="destination-country">
                  <MapPin size={14} />
                  {destination.country}
                </span>

                <h3>{destination.name}</h3>

                <span className="destination-explore">
                  Explore destination
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
