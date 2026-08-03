import React from "react";
import { createRoot } from "react-dom/client";
import {
  BedDouble,
  CalendarCheck,
  Car,
  ChevronRight,
  Coffee,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Waves,
  Wifi,
  X,
} from "lucide-react";
import "./styles.css";

const bookingUrl = "https://www.nightsbridge.co.za/bridge/book?bbid=17852";
const whatsappUrl = "https://wa.me/27824426256";
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=12%20Knoppiesdoring%20St%2C%20Randpark%20Ridge%2C%20Randburg%2C%202195";

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

const navItems = ["Stay", "Rooms", "Courtyard", "Reviews", "Find us"];

const quickFacts = [
  ["4", "individually decorated rooms"],
  ["2 km", "from Randridge Mall"],
  ["20 km", "from Lanseria Airport"],
  ["22 km", "from Johannesburg city centre"],
  ["08:00-22:00", "open daily"],
];

const rooms = [
  {
    key: "A",
    name: "Africa Room",
    tone: "Warm and characterful",
    images: [images.africa],
    copy:
      "A richly decorated room with a private terrace, en suite bathroom, TV, Wi-Fi, mini fridge, and tea and coffee station.",
  },
  {
    key: "G",
    name: "Garden Room",
    tone: "Quiet garden-side rest",
    images: [images.gardenOne, images.gardenTwo],
    copy:
      "A calm room for weary travellers, set up with the practical comforts of home and a peaceful, tucked-away feel.",
  },
  {
    key: "S",
    name: "Sixties Room",
    tone: "Soft retro charm",
    images: [images.sixtiesOne, images.sixtiesTwo],
    copy:
      "Relaxed, warmly decorated, and easy to settle into after a day moving around Johannesburg or Randburg.",
  },
  {
    key: "E",
    name: "Stone Edge Room",
    tone: "Textured and restful",
    images: [images.stone],
    copy:
      "Neutral tones and modern textures make this a comfortable room for an overnight stay or a quieter weekend.",
  },
];

const amenities = [
  { icon: Coffee, label: "Breakfast included" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Waves, label: "Outdoor pool" },
  { icon: Car, label: "Guest parking" },
  { icon: ShieldCheck, label: "Residential street" },
  { icon: BedDouble, label: "Terrace rooms" },
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
        <a className="brand" href="#top" aria-label="Whara Whara Guesthouse home">
          <img src={images.logo} alt="Whara Whara Guesthouse" />
        </a>

        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href={bookingUrl} target="_blank" rel="noreferrer">
          <CalendarCheck size={18} />
          Book
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image">
            <img src={images.hero} alt="Pool courtyard at Whara Whara Guesthouse" />
          </div>
          <div className="hero-panel">
            <p className="kicker">Randpark Ridge, Randburg</p>
            <h1 id="hero-title">A small guesthouse with a courtyard at its centre.</h1>
            <p>
              Four individually decorated rooms, breakfast, parking, and the kind of
              welcome that makes Johannesburg feel easier to arrive in.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href={bookingUrl} target="_blank" rel="noreferrer">
                <CalendarCheck size={20} />
                Book your stay
              </a>
              <a className="button ghost" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={20} />
                WhatsApp Joey
              </a>
            </div>
          </div>
          <aside className="keycard" aria-label="Guesthouse summary">
            <span className="keycard-notch" />
            <p>Guest key</p>
            <strong>Whara Whara</strong>
            <dl>
              <div>
                <dt>Check-in</dt>
                <dd>14:00</dd>
              </div>
              <div>
                <dt>Check-out</dt>
                <dd>10:00</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="fact-strip" aria-label="Guesthouse highlights">
          {quickFacts.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="section split-section" id="stay">
          <div>
            <p className="kicker">The stay</p>
            <h2>Easy nights for travellers, visiting family, and quick Randburg stops.</h2>
          </div>
          <div className="copy-stack">
            <p>
              Whara Whara Guesthouse sits on Knoppiesdoring Street in Randpark Ridge,
              just 2 km from Randridge Mall, 20 km from Lanseria International Airport,
              and 22 km from Johannesburg city centre.
            </p>
            <p>
              Rooms are individually furnished and simply practical: flat-screen TV,
              free Wi-Fi, mini fridge, tea and coffee facilities, terrace access, and
              a quiet residential setting to come back to.
            </p>
          </div>
        </section>

        <section className="section rooms-section" id="rooms">
          <div className="section-title">
            <p className="kicker">Rooms</p>
            <h2>Choose your room key.</h2>
          </div>

          <div className="room-grid">
            {rooms.map((room) => (
              <article className="room-card" key={room.name}>
                <div className="room-media">
                  <img src={room.images[0]} alt={`${room.name} at Whara Whara Guesthouse`} loading="lazy" />
                </div>
                <div className="room-copy">
                  <span className="room-key" aria-hidden="true">
                    {room.key}
                  </span>
                  <p>{room.tone}</p>
                  <h3>{room.name}</h3>
                  <p>{room.copy}</p>
                  <a href={bookingUrl} target="_blank" rel="noreferrer">
                    Check availability
                    <ChevronRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="courtyard" id="courtyard">
          <div className="courtyard-copy">
            <p className="kicker">Courtyard comforts</p>
            <h2>Breakfast, pool time, parking, Wi-Fi. The useful things are already here.</h2>
            <div className="amenities">
              {amenities.map(({ icon: Icon, label }) => (
                <div className="amenity" key={label}>
                  <Icon size={21} aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="courtyard-photo">
            <img src={images.pool} alt="Swimming pool and outdoor seating" loading="lazy" />
          </div>
        </section>

        <section className="section reviews-section" id="reviews">
          <div className="section-title narrow">
            <p className="kicker">Guest notes</p>
            <h2>People remember the welcome.</h2>
          </div>

          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="stars" aria-label="Five star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={15} fill="currentColor" />
                  ))}
                </div>
                <p>"{review.quote}"</p>
                <strong>{review.name}</strong>
                <span>{review.source}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="location-section" id="find-us">
          <div className="map-card">
            <p className="kicker">Find us</p>
            <h2>12 Knoppiesdoring Street</h2>
            <p>Randpark Ridge, Randburg, 2195</p>
            <a className="button primary" href={mapUrl} target="_blank" rel="noreferrer">
              <MapPin size={20} />
              Open map
            </a>
          </div>
          <div className="contact-panel">
            <p className="kicker">Contact</p>
            <h2>Book online or contact Joey directly.</h2>
            <div className="contact-links">
              <a href="tel:+27824426256">
                <Phone size={18} />
                +27 82 442 6256
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a href="mailto:joey@cechan.co.za">
                <Mail size={18} />
                joey@cechan.co.za
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <img src={images.logo} alt="Whara Whara Guesthouse" />
        <p>Whara Whara Guesthouse, Randpark Ridge, Randburg.</p>
        <a href={bookingUrl} target="_blank" rel="noreferrer">
          Book on NightsBridge
        </a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
