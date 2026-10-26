
"use client";

import { useState } from "react";
import {
  Star,
  ArrowLeft,
  ArrowRight,
  Quote,
  BadgeCheck,
} from "lucide-react";

const reviews = [
  {
    name: "Olivia Bennett",
    location: "London, United Kingdom",
    initials: "OB",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces",
    destination: "Bali, Indonesia",
    date: "September 2026",
    rating: 5,
    review:
      "Everything was beautifully organised, from the airport pickup to the local experiences. Bali was even more magical than we imagined!",
  },
  {
    name: "Daniel Wilson",
    location: "Toronto, Canada",
    initials: "DW",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces",
    destination: "Swiss Alps, Switzerland",
    date: "August 2026",
    rating: 5,
    review:
      "The views were incredible and our guide knew all the best spots. The booking process was simple and the entire trip felt effortless.",
  },
  {
    name: "Sophia Martinez",
    location: "Madrid, Spain",
    initials: "SM",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&h=120&fit=crop&crop=faces",
    destination: "Santorini, Greece",
    date: "July 2026",
    rating: 5,
    review:
      "A wonderful experience from start to finish. We discovered beautiful places we would never have found on our own. Highly recommended!",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousReview = () => {
    setActiveIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

  const nextReview = () => {
    setActiveIndex((current) =>
      current === reviews.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-heading">
          <div className="testimonials-heading-copy">
            <span className="section-eyebrow">
              <span className="section-eyebrow-line" />
              TRAVELER STORIES
            </span>

            <h2>
              Memories that
              <br />
              <span>last a lifetime.</span>
            </h2>

            <p>
              Real adventures deserve to be shared. Discover what travelers
              say about their experiences with GlobeTrek.
            </p>
          </div>

          <div className="testimonials-controls">
            <button
              type="button"
              className="testimonial-arrow"
              onClick={previousReview}
              aria-label="Previous review"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              className="testimonial-arrow testimonial-arrow-next"
              onClick={nextReview}
              aria-label="Next review"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-card-quote">
            <Quote size={34} strokeWidth={1.5} />
          </div>

          <div className="testimonial-card-content">
            <div className="testimonial-stars" aria-label="5 out of 5 stars">
              {Array.from({ length: reviews[activeIndex].rating }).map(
                (_, index) => (
                  <Star key={index} size={17} fill="currentColor" />
                )
              )}
            </div>

            <blockquote>
              “{reviews[activeIndex].review}”
            </blockquote>

            <div className="testimonial-destination">
              <span>DESTINATION</span>
              <strong>{reviews[activeIndex].destination}</strong>
            </div>

            <div className="testimonial-divider" />

            <div className="testimonial-author">
              <img
                src={reviews[activeIndex].image}
                alt={reviews[activeIndex].name}
                className="testimonial-avatar"
              />

              <div className="testimonial-author-info">
                <strong>{reviews[activeIndex].name}</strong>
                <span>{reviews[activeIndex].location}</span>
              </div>

              <div className="testimonial-verified">
                <BadgeCheck size={17} />
                <span>Traveler</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card-side">
            <span className="testimonial-side-label">TRAVEL JOURNAL</span>
            <div className="testimonial-side-number">
              {String(activeIndex + 1).padStart(2, "0")}
              <span> / {String(reviews.length).padStart(2, "0")}</span>
            </div>
            <span className="testimonial-side-date">
              {reviews[activeIndex].date}
            </span>
          </div>
        </div>

        <div className="testimonial-pagination">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              type="button"
              className={`testimonial-pagination-dot ${
                activeIndex === index ? "is-active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show review ${index + 1}`}
              aria-pressed={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
