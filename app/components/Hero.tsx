
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  CalendarDays,
  Users,
  Search,
  ArrowRight,
  Play,
} from "lucide-react";

export default function Hero() {
  const router = useRouter();

  const [destination, setDestination] = useState("");
  const [tourType, setTourType] = useState("All Tours");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams({
      destination,
      tourType,
      date,
      guests,
    });

    router.push(`/tours?${params.toString()}`);
  }

  return (
    <section className="hero-section">
      <div className="hero-background" />
      <div className="hero-shade" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            YOUR NEXT ADVENTURE STARTS HERE
          </div>

          <h1>
            Explore The World,
            <br />
            <span>One Journey</span> At A Time.
          </h1>

          <p className="hero-description">
            Discover breathtaking destinations, unforgettable
            experiences, and incredible journeys curated just for you.
          </p>

          <div className="hero-buttons">
            <a href="#featured-tours" className="hero-primary-button">
              Explore Tours
              <ArrowRight size={18} />
            </a>

            <a href="#about" className="hero-video-button">
              <span className="hero-play-icon">
                <Play size={15} fill="currentColor" />
              </span>
              <span>Discover our story</span>
            </a>
          </div>

          <div className="hero-trust">
            <div className="hero-avatar-stack" aria-hidden="true">
              <span>J</span>
              <span>M</span>
              <span>A</span>
              <span>+</span>
            </div>

            <div className="hero-trust-text">
              <strong>Made for curious travelers</strong>
              <span>Find your next unforgettable experience</span>
            </div>
          </div>
        </div>

        <div className="hero-side-note">
          <span className="hero-side-line" />
          <span>COLLECT MOMENTS, NOT THINGS</span>
        </div>

        <div className="hero-pagination">
          <span className="hero-pagination-active" />
          <span />
          <span />
        </div>

        <div className="hero-counter">
          <strong>01</strong>
          <span>/ 03</span>
        </div>
      </div>

      <form className="tour-search" onSubmit={handleSearch}>
        <label className="tour-search-field">
          <span className="tour-search-icon">
            <MapPin size={21} />
          </span>
          <span className="tour-search-copy">
            <strong>Where to?</strong>
            <input
              type="text"
              placeholder="Explore destinations"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              required
            />
          </span>
        </label>

        <label className="tour-search-field">
          <span className="tour-search-icon">
            <CalendarDays size={21} />
          </span>
          <span className="tour-search-copy">
            <strong>When?</strong>
            <input
              type="date"
              aria-label="Travel date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </span>
        </label>

        <label className="tour-search-field">
          <span className="tour-search-icon">
            <Search size={21} />
          </span>
          <span className="tour-search-copy">
            <strong>Tour type</strong>
            <select
              value={tourType}
              onChange={(event) => setTourType(event.target.value)}
              aria-label="Tour type"
            >
              <option>All Tours</option>
              <option>Adventure</option>
              <option>Beach Holiday</option>
              <option>Cultural</option>
              <option>Wildlife</option>
              <option>Luxury</option>
            </select>
          </span>
        </label>

        <label className="tour-search-field">
          <span className="tour-search-icon">
            <Users size={21} />
          </span>
          <span className="tour-search-copy">
            <strong>Travelers</strong>
            <select
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              aria-label="Number of travelers"
            >
              <option value="1">1 Traveler</option>
              <option value="2">2 Travelers</option>
              <option value="3">3 Travelers</option>
              <option value="4">4 Travelers</option>
              <option value="5">5 Travelers</option>
              <option value="6">6+ Travelers</option>
            </select>
          </span>
        </label>

        <button type="submit" className="tour-search-button">
          <Search size={19} />
          <span>Find Tours</span>
        </button>
      </form>
    </section>
  );
}
