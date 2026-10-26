
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock3,
  Star,
  Heart,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

type Tour = {
  id: number;
  title: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  tag?: string;
};

const tours: Tour[] = [
  {
    id: 1,
    title: "Majestic Swiss Alps Escape",
    location: "Interlaken, Switzerland",
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    reviews: 128,
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=85",
    tag: "BEST SELLER",
  },
  {
    id: 2,
    title: "Tropical Bali Adventure",
    location: "Ubud, Bali",
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    reviews: 96,
    price: 899,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85",
    tag: "POPULAR",
  },
  {
    id: 3,
    title: "Discover the Beauty of Italy",
    location: "Amalfi Coast, Italy",
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    reviews: 154,
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=900&q=85",
  },
];

export default function FeaturedTours() {
  const [favorites, setFavorites] = useState<number[]>([]);

  function toggleFavorite(id: number) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id]
    );
  }

  return (
    <section className="featured-tours" id="featured-tours">
      <div className="featured-tours-container">
        <div className="section-heading">
          <div className="section-heading-content">
            <span className="section-eyebrow">
              <span className="section-eyebrow-line" />
              HANDPICKED EXPERIENCES
            </span>

            <h2>
              Explore Our <span>Featured Tours</span>
            </h2>

            <p>
              From breathtaking landscapes to unforgettable cultural
              journeys, find the adventure that speaks to you.
            </p>
          </div>

          <Link href="/tours" className="view-all-tours">
            View All Tours
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="tour-grid">
          {tours.map((tour) => {
            const isFavorite = favorites.includes(tour.id);

            return (
              <article className="tour-card" key={tour.id}>
                <div className="tour-card-image">
                  <Link
                    href={`/tours/${tour.id}`}
                    className="tour-image-link"
                    aria-label={`View ${tour.title}`}
                  >
                    <img src={tour.image} alt={tour.title} />
                  </Link>

                  {tour.tag && (
                    <span className="tour-badge">{tour.tag}</span>
                  )}

                  <button
                    type="button"
                    className={`tour-favorite ${
                      isFavorite ? "is-favorite" : ""
                    }`}
                    onClick={() => toggleFavorite(tour.id)}
                    aria-label={
                      isFavorite
                        ? `Remove ${tour.title} from favorites`
                        : `Add ${tour.title} to favorites`
                    }
                    aria-pressed={isFavorite}
                  >
                    <Heart
                      size={19}
                      fill={isFavorite ? "currentColor" : "none"}
                    />
                  </button>

                  <span className="tour-image-duration">
                    <Clock3 size={14} />
                    {tour.duration}
                  </span>
                </div>

                <div className="tour-card-body">
                  <div className="tour-location">
                    <MapPin size={15} />
                    <span>{tour.location}</span>
                  </div>

                  <h3>
                    <Link href={`/tours/${tour.id}`}>
                      {tour.title}
                    </Link>
                  </h3>

                  <div className="tour-card-rating">
                    <Star size={16} fill="currentColor" />
                    <strong>{tour.rating}</strong>
                    <span>({tour.reviews} reviews)</span>
                  </div>

                  <div className="tour-card-footer">
                    <div className="tour-price">
                      <span>Starting from</span>
                      <strong>
                        ${tour.price.toLocaleString("en-US")}
                        <small> / person</small>
                      </strong>
                    </div>

                    <Link
                      href={`/tours/${tour.id}`}
                      className="tour-card-arrow"
                      aria-label={`Explore ${tour.title}`}
                    >
                      <ArrowRight size={19} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="featured-tours-bottom">
          <span>
            <strong>500+</strong> unforgettable experiences to explore
          </span>

          <Link href="/tours">
            Discover all experiences
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
