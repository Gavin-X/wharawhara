import React from "react";
import { createRoot } from "react-dom/client";
import {
  BedDouble,
  CalendarCheck,
  Car,
  Coffee,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Waves,
  Wifi,
  X,
} from "lucide-react";
import "./styles.css";

const bookingUrl = "https://www.nightsbridge.co.za/bridge/book?bbid=17852";
const whatsappUrl = "https://wa.me/27824426256";

const images = {
  logo: "/images/whara/Whara-Whara-Logo.png",
  hero: "/images/whara/swimming-pool-area.jpg",
  pool: "/images/whara/pool.jpg",
  africa: "/images/whara/africa-room-1.jpeg",
  gardenOne: "/images/whara/garden-room-1.jpeg",
  gardenTwo: "/images/whara/garden-room-2.jpeg",
  sixtiesOne: "/images/whara/sixties-room-1.jpeg",
  sixtiesTwo: "/images/whara/sixties-room-2.jpeg",
  stone: "/images/whara/stone-edge-room-1.jpeg",
};

const navItems = ["About", "Rooms", "Amenities", "Reviews", "Location", "Contact"];

const rooms = [
  {
    name: "Africa Room",
    images: [images.africa],
    copy:
      "Warm, characterful decor inspired by African hospitality, with a private terrace and everything needed for an easy overnight stay.",
  },
  {
    name: "Garden Room",
    images: [images.gardenOne, images.gardenTwo],
    copy:
      "A calm room for weary travellers, designed as a comfortable home away from home with a peaceful garden-side feel.",
  },
  {
    name: "Sixties Room",
    images: [images.sixtiesOne, images.sixtiesTwo],
    copy:
      "A relaxed, warmly decorated room with a playful retro mood and the practical comforts guests expect.",
  },
  {
    name: "Stone Edge Room",
    images: [images.stone],
    copy:
      "Neutral tones, modern textures, and an inviting ambience for a comfortable night of rest in Randpark Ridge.",
  },
];

const amenities = [
  { icon: Coffee, title: "Breakfast included", copy: "Start the day with complimentary breakfast." },
  { icon: Wifi, title: "Free Wi-Fi", copy: "Stay connected throughout the guesthouse." },
  { icon: Waves, title: "Outdoor pool", copy: "Unwind beside the courtyard swimming pool." },
  { icon: Car, title: "Parking available", copy: "Convenient parking for overnight guests." },
  { icon: ShieldCheck, title: "Residential setting", copy: "A quiet tree-lined street in Randpark Ridge." },
];

const reviews = [
  {
    quote:
      "The owners were very friendly and welcoming. Breakfast was perfect, the room was clean and homely, and I felt like one of the family.",
    name: "Lesley Jensen",
    source: "Google Review",
  },
  {
    quote:
      "I received a compliment from the gentleman that recently stayed at Whara Whara.",
    name: "Kelly Heslop",
    source: "Administrator - SARL",
  },
  {
    quote:
      "It is a place where you can spend time with family and friends, with friendly people and breakfast always on time.",
    name: "Henderson Banda",
    source: "Google Review",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Whara Whara Guesthouse">
          <img src={images.logo} alt="Whara Whara Guesthouse" />
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={bookingUrl} target="_blank" rel="noreferrer">
          <CalendarCheck size={18} />
          Book Now
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <img src={images.hero} alt="Whara Whara Guesthouse exterior and pool courtyard" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Randpark Ridge, Randburg</p>
            <h1>Whara Whara Guesthouse</h1>
            <p>
              A friendly four-room Guesthouse on a tree-lined residential street, close to
              Randridge Mall, Lanseria International Airport, and Johannesburg city centre.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={bookingUrl} target="_blank" rel="noreferrer">
                <CalendarCheck size={20} />
                Book Your Stay
              </a>
              <a className="button secondary" href="#rooms">
                <BedDouble size={20} />
                View Rooms
              </a>
            </div>
          </div>
          <div className="hero-strip">
            <span>4 individually decorated rooms</span>
            <span>Breakfast included</span>
            <span>Pool and parking</span>
          </div>
        </section>

        <section className="section intro" id="about">
          <div className="section-heading">
            <p className="eyebrow">About Us</p>
            <h2>Warm hospitality with easy access to the city.</h2>
          </div>
          <div className="intro-grid">
            <div className="intro-copy">
              <p>
                Whara Whara Guesthouse is situated in Randpark Ridge, just 2 km from
                Randridge Mall, 20 km from Lanseria International Airport, and 22 km
                from Johannesburg city centre.
              </p>
              <p>
                Each room is simply furnished and individually decorated, with a terrace,
                flatscreen TV, free Wi-Fi, mini fridge, and tea and coffee facilities.
                Some en suite bathrooms include showers only.
              </p>
            </div>
            <div className="stat-panel" aria-label="Guesthouse highlights">
              <div>
                <strong>2 km</strong>
                <span>to Randridge Mall</span>
              </div>
              <div>
                <strong>20 km</strong>
                <span>to Lanseria Airport</span>
              </div>
              <div>
                <strong>08:00-22:00</strong>
                <span>open daily</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section rooms" id="rooms">
          <div className="section-heading centered">
            <p className="eyebrow">Rooms</p>
            <h2>Choose the room that feels like yours.</h2>
          </div>
          <div className="room-grid">
            {rooms.map((room) => (
              <article className="room-card" key={room.name}>
                <div className={`room-media ${room.images.length > 1 ? "split" : ""}`}>
                  {room.images.map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${room.name} ${index + 1} at Whara Whara Guesthouse`}
                      loading="lazy"
                    />
                  ))}
                </div>
                <div>
                  <h3>{room.name}</h3>
                  <p>{room.copy}</p>
                  <a href={bookingUrl} target="_blank" rel="noreferrer">
                    Check availability
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-band" id="amenities">
          <div className="feature-image">
            <img src={images.pool} alt="Swimming pool and guest seating at Whara Whara Guesthouse" loading="lazy" width="760" height="800" />
          </div>
          <div className="feature-content">
            <p className="eyebrow">Amenities</p>
            <h2>All the useful comforts, kept simple.</h2>
            <div className="amenity-grid">
              {amenities.map(({ icon: Icon, title, copy }) => (
                <div className="amenity" key={title}>
                  <Icon size={24} aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section reviews" id="reviews">
          <div className="section-heading centered">
            <p className="eyebrow">Customer Reviews</p>
            <h2>Guests remember the welcome.</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="stars" aria-label="Five star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p>"{review.quote}"</p>
                <strong>{review.name}</strong>
                <span>{review.source}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="location-band" id="location">
          <div>
            <p className="eyebrow">Location</p>
            <h2>Find us in Randpark Ridge.</h2>
            <p>
              12 Knoppiesdoring Street, Randpark Ridge, Randburg, 2195.
            </p>
          </div>
          <a
            className="button secondary dark"
            href="https://www.google.com/maps/search/?api=1&query=12%20Knoppiesdoring%20St%2C%20Randpark%20Ridge%2C%20Randburg%2C%202195"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={20} />
            Open Map
          </a>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact Us</p>
              <h2>Ready for a restful stay?</h2>
              <p>
                Book online through NightsBridge, or contact Joey directly for questions,
                late arrivals, or group arrangements.
              </p>
              <div className="contact-links">
                <a href="tel:+27824426256">
                  <Phone size={18} />
                  +27 82 442 6256
                </a>
                <a href="mailto:joey@cechan.co.za">
                  <Mail size={18} />
                  joey@cechan.co.za
                </a>
              </div>
            </div>
            <form action="mailto:joey@cechan.co.za" method="post" encType="text/plain">
              <label>
                Name
                <input name="name" type="text" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="you@example.com" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="4" maxLength="180" placeholder="How can we help?" />
              </label>
              <button className="button primary" type="submit">
                <Mail size={20} />
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <img src={images.logo} alt="Whara Whara Guesthouse" />
          <p>Whara Whara Guesthouse, Randpark Ridge, Randburg.</p>
        </div>
        <div className="footer-actions">
          <a href={bookingUrl} target="_blank" rel="noreferrer">
            Book Online
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="mailto:joey@cechan.co.za">Email</a>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
