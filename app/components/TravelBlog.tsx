
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock3 } from "lucide-react";

const articles = [
  {
    id: "bali-travel-guide",
    category: "TRAVEL GUIDE",
    title: "The Ultimate Guide to Exploring Bali Like a Local",
    excerpt:
      "Discover hidden beaches, peaceful temples, and unforgettable island experiences.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&h=650&fit=crop",
    date: "Oct 18, 2026",
    readTime: "6 min read",
  },
  {
    id: "swiss-alps-adventure",
    category: "ADVENTURE",
    title: "A Journey Through the Breathtaking Swiss Alps",
    excerpt:
      "From mountain villages to scenic train rides, discover the magic of Switzerland.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900&h=650&fit=crop",
    date: "Oct 12, 2026",
    readTime: "8 min read",
  },
  {
    id: "mediterranean-escape",
    category: "DESTINATIONS",
    title: "The Mediterranean Escape You Need This Year",
    excerpt:
      "Explore charming coastal towns, turquoise waters, and beautiful seaside sunsets.",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&h=650&fit=crop",
    date: "Oct 05, 2026",
    readTime: "5 min read",
  },
];

export default function TravelBlog() {
  return (
    <section className="travel-blog-section">
      <div className="travel-blog-container">
        <div className="travel-blog-heading">
          <div className="travel-blog-heading-copy">
            <span className="section-eyebrow">
              <span className="section-eyebrow-line" />
              THE TRAVEL JOURNAL
            </span>

            <h2>
              Stories that inspire
              <br />
              <span>your next adventure.</span>
            </h2>

            <p>
              Get inspired by destination guides, practical travel tips,
              and ideas for your next unforgettable getaway.
            </p>
          </div>

          <Link href="/blog" className="travel-blog-view-all">
            Explore all stories
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="travel-blog-grid">
          {articles.map((article) => (
            <article className="travel-blog-card" key={article.id}>
              <Link
                href={`/blog/${article.id}`}
                className="travel-blog-image-link"
                aria-label={`Read ${article.title}`}
              >
                <div className="travel-blog-image">
                  <img src={article.image} alt={article.title} />

                  <span className="travel-blog-category">
                    {article.category}
                  </span>

                  <span className="travel-blog-image-arrow">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </Link>

              <div className="travel-blog-card-content">
                <div className="travel-blog-meta">
                  <span>{article.date}</span>
                  <span className="travel-blog-meta-divider" />
                  <span className="travel-blog-read-time">
                    <Clock3 size={14} />
                    {article.readTime}
                  </span>
                </div>

                <h3>
                  <Link href={`/blog/${article.id}`}>
                    {article.title}
                  </Link>
                </h3>

                <p>{article.excerpt}</p>

                <Link
                  href={`/blog/${article.id}`}
                  className="travel-blog-read-more"
                >
                  Read article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
