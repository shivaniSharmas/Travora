"use client";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Destinations", href: "/destinations" },
  { label: "Tours", href: "/tours" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const destinations = [
  { label: "Bali", href: "/destinations/bali" },
  { label: "Switzerland", href: "/destinations/switzerland" },
  { label: "Santorini", href: "/destinations/santorini" },
  { label: "Dubai", href: "/destinations/dubai" },
  { label: "Maldives", href: "/destinations/maldives" },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=240&h=180&fit=crop",
    alt: "Tropical Bali landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=240&h=180&fit=crop",
    alt: "Maldives island and turquoise water",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=240&h=180&fit=crop",
    alt: "Scenic mountain destination",
  },
  {
    src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=240&h=180&fit=crop",
    alt: "Mediterranean coastal town",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="footer-logo-mark">
                <ArrowUpRight size={19} strokeWidth={2.5} />
              </span>
              <span>
                Globe<span>Trek</span>
              </span>
            </Link>

            <p className="footer-brand-description">
              Discover amazing places, unique experiences, and unforgettable
              adventures around the world with GlobeTrek.
            </p>

           
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>Popular Destinations</h3>
            <ul>
              {destinations.map((destination) => (
                <li key={destination.label}>
                  <Link href={destination.href}>{destination.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>

            <a
              className="footer-contact-item"
              href="https://maps.google.com/?q=123+Travel+Street+New+York"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={16} />
              <span>
                123 Travel Street,
                <br />
                New York, USA
              </span>
            </a>

            <a className="footer-contact-item" href="tel:+1234567890">
              <Phone size={16} />
              <span>+1 234 567 890</span>
            </a>

            <a
              className="footer-contact-item"
              href="mailto:hello@globetrek.com"
            >
              <Mail size={16} />
              <span>hello@globetrek.com</span>
            </a>
          </div>

          <div className="footer-gallery-column">
            <h3>Travel Moments</h3>

            <div className="footer-gallery">
              {galleryImages.map((image) => (
                <Link
                  href="/destinations"
                  className="footer-gallery-item"
                  key={image.alt}
                  aria-label={`Explore destinations: ${image.alt}`}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>
            &copy; 2026 GlobeTrek. All rights reserved.
          </p>

          <nav className="footer-legal-links" aria-label="Legal links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/sitemap">Sitemap</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
