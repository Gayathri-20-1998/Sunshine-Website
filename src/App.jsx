import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Booking from "./Booking";
import ChatAssistant from "./ChatAssistant";

function Home() {
  const floorRooms = [
    {
      floor: "Ground Floor",
      rooms: [
        {
          name: "Radhakrishna",
          type: "Double Room",
          image: "/images/guesthouseimages/DSCF5894.jpg",
        },
        {
          name: "Ganesha",
          type: "Double Room",
          capacity: "Max 3 Guests",
          image: "/images/guesthouseimages/DSCF5908-Pano.JPG",
        },
        {
          name: "Muruga",
          type: "Double Bedroom – Twin",
          image: "/images/guesthouseimages/DSCF5903-Pano.JPG",
        },
        {
          name: "Saraswati",
          type: "Double Bedroom – Twin",
          image: "/images/guesthouseimages/DSCF5911-Pano.JPG",
          video: "/videos/saraswathy room.mp4",
        },
        {
          name: "Durga",
          type: "Double Bedroom – Twin",
          image: "/images/guesthouseimages/DSCF5938-Pano.JPG",
          video: "/videos/durga room.mp4",
        },
      ],
    },
    {
      floor: "First Floor",
      rooms: [
        {
          name: "Shivashakti",
          type: "Double Room – Twin",
          image: "/images/guesthouseimages/DSCF5941-Pano.JPG",
          video: "/videos/shiva sakthi room.mp4",
        },
        {
          name: "Laxmi",
          type: "Double Room – Twin",
          image: "/images/guesthouseimages/DSCF5931.JPG",
          video: "/videos/lakshmi room.mp4",
        },
        {
          name: "Arunachala",
          type: "Double Room – Queen",
          image: "/images/guesthouseimages/DSCF5920-Pano.jpg",
          video: "/videos/arunachala room.mp4",
        },
        {
          name: "Abitha",
          type: "Double Room – Queen",
          image: "/images/guesthouseimages/DSCF5929-Pano.JPG",
        },
        {
          name: "Kalki",
          type: "Suite Room",
          capacity: "Max 4 Guests",
          image: "/images/guesthouseimages/DSCF5914.JPG",
        },
        {
          name: "Brahmi",
          type: "Single Room",
          capacity: "1 Guest",
          image: "/images/guesthouseimages/DSCF5934-Pano.JPG",
        },
        {
          name: "Ishani",
          type: "Single Room",
          image: "/images/guesthouseimages/DSCF5937.JPG",
        },
        {
          name: "Rama",
          type: "Single Bedroom",
          image: "/images/guesthouseimages/DSCF5938-Pano.JPG",
        },
        {
          name: "Shanti",
          type: "Single Room",
          image: "/images/guesthouseimages/DSCF5911-Pano.JPG",
        },
      ],
    },
    {
      floor: "Second Floor",
      rooms: [
        {
          name: "Brahma",
          type: "Suite Room",
          capacity: "Max 3 Guests",
          image: "/images/guesthouseimages/DSCF5934-Pano.JPG",
        },
        {
          name: "Vishnu",
          type: "Suite Room – King Bed",
          image: "/images/guesthouseimages/DSCF5949-Pano.JPG",
        },
        {
          name: "Shiva",
          type: "Suite Room – King Bed",
          image: "/images/guesthouseimages/DSCF5938-Pano.JPG",
        },
        {
          name: "Chandra",
          type: "Suite Room – King Bed",
          image: "/images/guesthouseimages/DSCF5941-Pano.JPG",
        },
        {
          name: "Surya",
          type: "Suite Room – King Bed",
          image: "/images/guesthouseimages/DSCF5937.JPG",
        },
      ],
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [bookingMessage, setBookingMessage] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleAvailability = () => {
    if (!checkIn || !checkOut) {
      setBookingMessage("Please select check-in and check-out dates.");
      return;
    }

    if (checkOut <= checkIn) {
      setBookingMessage("Check-out date must be after check-in date.");
      return;
    }

    setBookingMessage(
      `Booking request: ${guests} guest(s), ${checkIn} to ${checkOut}.`,
    );
  };

  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <img
              src="/images/guesthouseimages/sunshine_logo.png"
              alt="Sunshine Guest House"
            />
          </div>

          <nav className={menuOpen ? "mobile-open" : ""}>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#rooms" onClick={() => setMenuOpen(false)}>
              Rooms
            </a>
            <a href="#facilities" onClick={() => setMenuOpen(false)}>
              Facilities
            </a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>

          <a
            href="https://sunshineguesthouse.bookingjini.in"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-book"
          >
            Book Your Stay
          </a>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="hero-badge">✦ WELCOME TO SUNSHINE</div>

            <h1>
              Your Comfortable Stay,
              <span> Made Memorable.</span>
            </h1>

            <p>
              Experience a peaceful stay, warm hospitality and modern comfort in
              a place that feels like home.
            </p>

            <div className="hero-actions">
              <a
                href="https://sunshineguesthouse.bookingjini.in"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-book"
              >
                Book Your Stay <span>→</span>
              </a>

              <a href="#rooms" className="hero-explore">
                Explore Rooms
              </a>
            </div>
          </div>

          <div className="hero-info-card">
            <div className="hero-info-item">
              <strong>Comfort</strong>
              <span>Thoughtfully designed rooms</span>
            </div>

            <div className="hero-info-divider"></div>

            <div className="hero-info-item">
              <strong>Free Wi-Fi</strong>
              <span>Stay connected with ease</span>
            </div>

            <div className="hero-info-divider"></div>

            <div className="hero-info-item">
              <strong>24/7 Support</strong>
              <span>We're here whenever you need</span>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <div className="about-luxury">
            <div className="about-visual">
              <div className="about-image-main">
                <img
                  src="/images/guesthouseimages/DSCF5702.JPG"
                  alt="Sunshine Guest House"
                />
              </div>

              <div className="about-image-frame"></div>

              <div className="about-floating-card">
                <span>✦</span>
                <div>
                  <strong>Feel at Home</strong>
                  <small>Comfort • Care • Hospitality</small>
                </div>
              </div>
            </div>

            <div className="about-luxury-content">
              <p className="about-label">ABOUT SUNSHINE</p>

              <h2>
                More Than Just
                <span>A Place to Stay</span>
              </h2>

              <div className="about-line"></div>

              <p className="about-description">
                Sunshine Guest House offers a warm and welcoming environment for
                guests looking for comfort, peace and a memorable stay.
              </p>

              <p className="about-description">
                Every detail is thoughtfully arranged to create a relaxing
                experience where you can feel comfortable, cared for and truly
                at home.
              </p>

              <div className="about-highlights">
                <div className="about-highlight">
                  <strong>01</strong>
                  <div>
                    <h4>Comfort First</h4>
                    <p>Thoughtfully arranged spaces for a relaxing stay.</p>
                  </div>
                </div>

                <div className="about-highlight">
                  <strong>02</strong>
                  <div>
                    <h4>Warm Hospitality</h4>
                    <p>Friendly service with attention to every guest.</p>
                  </div>
                </div>
              </div>

              <a href="#rooms" className="about-luxury-button">
                Discover Our Rooms <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ROOMS SECTION */}
        <section className="rooms-section" id="rooms">
          <div className="rooms-heading">
            <p>COMFORT & HOSPITALITY</p>
            <h2>Explore Our Rooms</h2>
            <span>
              Discover comfortable spaces designed for a relaxing and peaceful
              stay.
            </span>
          </div>

          {floorRooms.map((floor) => (
            <div className="floor-section" key={floor.floor}>
              <h2>{floor.floor}</h2>

              <div className="room-grid">
                {floor.rooms.map((room) => (
                  <div className="room-button" key={room.name}>
                    <button
                      type="button"
                      className="room-image-trigger"
                      onClick={() => setSelectedRoom(room)}
                      aria-label={`View ${room.name} room image`}
                    >
                      <img
                        className="room-card-image"
                        src={room.image}
                        alt={room.name}
                      />
                    </button>

                    <span className="room-card-name">{room.name}</span>
                    <small>{room.type}</small>

                    {room.capacity && <small>{room.capacity}</small>}

                    <button
                      type="button"
                      className="room-view-button"
                      onClick={() => setSelectedRoom(room)}
                    >
                      View Room ↗
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* ONE ROOM POPUP ONLY */}
          {selectedRoom && (
            <div
              className="room-lightbox"
              onClick={() => setSelectedRoom(null)}
            >
              <div className="room-popup" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="room-close"
                  onClick={() => setSelectedRoom(null)}
                  aria-label="Close"
                >
                  ×
                </button>

                {selectedRoom.video ? (
                  <video
                    className="room-popup-video"
                    controls
                    autoPlay
                    muted
                    playsInline
                  >
                    <source src={selectedRoom.video} type="video/mp4" />
                    Your browser does not support video.
                  </video>
                ) : (
                  <img src={selectedRoom.image} alt={selectedRoom.name} />
                )}

                <h2>{selectedRoom.name}</h2>
                <p>{selectedRoom.type}</p>

                {selectedRoom.capacity && <p>{selectedRoom.capacity}</p>}
              </div>
            </div>
          )}
        </section>

        {/* Facilities SECTION */}
        <section id="amenities">
          <div className="amenities-luxury-heading">
            <div className="amenities-title">
              <p>WHY STAY WITH US</p>
              <h2>
                Thoughtful Comfort,
                <span>Beautifully Delivered.</span>
              </h2>
            </div>

            <div className="amenities-intro">
              <span className="amenities-line"></span>
              <p>
                Everything you need for a comfortable, convenient and relaxing
                stay at Sunshine Guest House.
              </p>
            </div>
          </div>

          <div className="amenities-luxury-grid">
            <div className="amenity-luxury-card featured">
              <div className="amenity-top">
                <span>01</span>
                <div className="amenity-icon">⌂</div>
              </div>
              <div className="amenity-card-text">
                <p>COMFORT</p>
                <h3>Comfortable Rooms</h3>
                <span>
                  Clean, peaceful and thoughtfully arranged rooms designed for a
                  relaxing stay.
                </span>
              </div>
              <div className="amenity-arrow">↗</div>
            </div>

            <div className="amenity-luxury-card">
              <div className="amenity-top">
                <span>02</span>
                <div className="amenity-icon">◉</div>
              </div>
              <div className="amenity-card-text">
                <p>CONNECTIVITY</p>
                <h3>Free Wi-Fi</h3>
                <span>
                  Stay connected with convenient internet access throughout your
                  visit.
                </span>
              </div>
              <div className="amenity-arrow">↗</div>
            </div>

            <div className="amenity-luxury-card">
              <div className="amenity-top">
                <span>03</span>
                <div className="amenity-icon">◷</div>
              </div>
              <div className="amenity-card-text">
                <p>ASSISTANCE</p>
                <h3>24/7 Support</h3>
                <span>
                  Friendly assistance whenever you need help during your stay.
                </span>
              </div>
              <div className="amenity-arrow">↗</div>
            </div>

            <div className="amenity-luxury-card">
              <div className="amenity-top">
                <span>04</span>
                <div className="amenity-icon">⌖</div>
              </div>
              <div className="amenity-card-text">
                <p>LOCATION</p>
                <h3>Convenient Location</h3>
                <span>
                  Easy access to nearby places and essential facilities for a
                  convenient experience.
                </span>
              </div>
              <div className="amenity-arrow">↗</div>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery">
          <div className="section-heading">
            <p>OUR GALLERY</p>
            <h2>A Glimpse of Sunshine</h2>
            <p className="section-description">
              Take a look at our rooms, spaces and surroundings before you plan
              your stay.
            </p>
          </div>

          <div className="gallery-grid">
            {/* EXISTING PHOTO 1 */}
            <div className="gallery-item gallery-large">
              <img
                src="/images/guesthouseimages/DSCF5645.JPG"
                alt="Sunshine Guest House"
              />
              <div className="gallery-overlay">
                <span>Sunshine Guest House</span>
                <strong>01</strong>
              </div>
            </div>

            {/* EXISTING PHOTO 2 */}
            <div className="gallery-item">
              <img
                src="/images/guesthouseimages/DSCF5646.JPG"
                alt="Sunshine Guest House interior"
              />
              <div className="gallery-overlay">
                <span>Our Spaces</span>
                <strong>02</strong>
              </div>
            </div>

            {/* EXISTING PHOTO 3 */}
            <div className="gallery-item">
              <img
                src="/images/guesthouseimages/DSCF5651.JPG"
                alt="Sunshine Guest House room"
              />
              <div className="gallery-overlay">
                <span>Comfortable Stay</span>
                <strong>03</strong>
              </div>
            </div>

            {/* EXISTING PHOTO 4 */}
            <div className="gallery-item">
              <img
                src="/images/guesthouseimages/DSCF5655.JPG"
                alt="Sunshine Guest House"
              />
              <div className="gallery-overlay">
                <span>Relax & Enjoy</span>
                <strong>04</strong>
              </div>
            </div>

            {/* EXISTING PHOTO 5 */}
            <div className="gallery-item">
              <img
                src="/images/guesthouseimages/DSCF5656.JPG"
                alt="Sunshine Guest House"
              />
              <div className="gallery-overlay">
                <span>Experience Sunshine</span>
                <strong>05</strong>
              </div>
            </div>
            {/* ADDITIONAL PHOTO 06 */}
            <div className="gallery-item">
              <img
                src="/images/guesthouseimages/DSCF5985.JPG"
                alt="Sunshine Guest House"
              />
              <div className="gallery-overlay">
                <span>Sunshine Guest House</span>
                <strong>06</strong>
              </div>
            </div>

            {/* ADDITIONAL PHOTO 07 */}
            <div className="gallery-item">
              <img
                src="/images/guesthouseimages/DSCF5661.JPG"
                alt="Sunshine Guest House"
              />
              <div className="gallery-overlay">
                <span>Guest Room</span>
                <strong>07</strong>
              </div>
            </div>

            {/* ADDITIONAL PHOTO 08 */}
            <div className="gallery-item">
              <img
                src="/images/guesthouseimages/DSCF5892.JPG"
                alt="Sunshine Guest House"
              />
              <div className="gallery-overlay">
                <span>Guest Room</span>
                <strong>08</strong>
              </div>
            </div>

            {/* ADDITIONAL PHOTO 09 */}
            <div className="gallery-item">
              <img
                src="/images/guesthouseimages/DSCF6018.JPG"
                alt="Sunshine Guest House"
              />
              <div className="gallery-overlay">
                <span>Guest Room</span>
                <strong>09</strong>
              </div>
            </div>

            {/* ADDITIONAL PHOTO 10 */}
            <div className="gallery-item">
              <img
                src="/images/guesthouseimages/DSCF5937.JPG"
                alt="Sunshine Guest House"
              />
              <div className="gallery-overlay">
                <span>Guest Room</span>
                <strong>10</strong>
              </div>
            </div>
            {/* ROOM PHOTO 11 */}
            <div className="gallery-item">
              <img src="/images/room1.jpg" alt="Guest room 1" />
              <div className="gallery-overlay">
                <span>Guest Room</span>
                <strong>11</strong>
              </div>
            </div>

            {/* ROOM PHOTO 12 */}
            <div className="gallery-item">
              <img src="/images/room2.jpg" alt="Guest room 2" />
              <div className="gallery-overlay">
                <span>Guest Room</span>
                <strong>12</strong>
              </div>
            </div>

            {/* ROOM PHOTO 13 */}
            <div className="gallery-item">
              <img src="/images/room3.jpg" alt="Guest room 3" />
              <div className="gallery-overlay">
                <span>Guest Room</span>
                <strong>13</strong>
              </div>
            </div>

            {/* ROOM PHOTO 14 */}
            <div className="gallery-item">
              <img src="/images/room4.jpg" alt="Guest room 4" />
              <div className="gallery-overlay">
                <span>Guest Room</span>
                <strong>14</strong>
              </div>
            </div>

            {/* ROOM PHOTO 15 */}
            <div className="gallery-item">
              <img src="/images/room5.jpg" alt="Guest room 5" />
              <div className="gallery-overlay">
                <span>Guest Room</span>
                <strong>15</strong>
              </div>
            </div>

            {/* ROOM PHOTO 16 */}
            <div className="gallery-item">
              <img src="/images/room6.jpg" alt="Guest room 6" />
              <div className="gallery-overlay">
                <span>Guest Room</span>
                <strong>16</strong>
              </div>
            </div>

            {/* ROOM PHOTO 17 */}
            <div className="gallery-item">
              <img src="/images/room7.jpg" alt="Guest room 7" />
              <div className="gallery-overlay">
                <span>Guest Room</span>
                <strong>17</strong>
              </div>
            </div>

            {/* ROOM PHOTO 18 */}
            <div className="gallery-item">
              <img src="/images/room8.jpg" alt="Guest room 8" />
              <div className="gallery-overlay">
                <span>Guest Room</span>
                <strong>18</strong>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact">
          <div className="contact-heading">
            <p>GET IN TOUCH</p>
            <h2>
              Let’s Make Your
              <span>Stay Memorable</span>
            </h2>
            <p>
              Have a question or planning your stay? We’re here to help you make
              your visit comfortable and hassle-free.
            </p>
          </div>

          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <div className="contact-detail-item">
                  <strong>Location</strong>
                  <a
                    href="https://www.google.com/maps?q=12.22021,79.04102"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    5 Annamalai Nagar, Perumbakkam Road, Tiruvannamalai, Tamil
                    Nadu 606603
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>
                <div className="contact-detail-item">
                  <strong>Phone</strong>
                  <a href="tel:9043225570">Contact us for booking</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>
                <div>
                  <span>EMAIL</span>
                  <strong>info@sunshineguesthouse.com</strong>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <p>READY FOR YOUR STAY?</p>
              <h3>
                Feel at Home,
                <br />
                Away from Home.
              </h3>
              <p>
                Plan your stay with Sunshine Guest House and experience comfort,
                warmth and convenience.
              </p>
              <a
                href="https://sunshineguesthouse.bookingjini.in"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                Book Your Stay <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Sunshine Guest House</h3>
            <p>Your comfortable stay, made memorable.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#rooms">Rooms</a>
            <a href="#amenities">Amenities</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>📍 Sunshine Guest House</p>
            <p>📞 Contact us for booking</p>
            <p>✉️ info@sunshineguesthouse.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Sunshine Guest House. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      <ChatAssistant />
    </BrowserRouter>
  );
}

export default App;
