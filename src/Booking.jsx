import { useState } from "react";
import "./App.css";

function Booking() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  const [bookingStep, setBookingStep] = useState("search");
  const [message, setMessage] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");

  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSearchRooms = () => {
    if (!checkIn || !checkOut) {
      setMessage("Please select your check-in and check-out dates.");
      setBookingStep("search");
      return;
    }

    if (checkOut <= checkIn) {
      setMessage("Check-out date must be after check-in date.");
      setBookingStep("search");
      return;
    }

    setMessage("");
    setSelectedRoom("");
    setBookingStep("rooms");
  };

  const handleSelectRoom = (roomName) => {
    setSelectedRoom(roomName);
  };

  const handleContinueToGuestDetails = () => {
    if (!selectedRoom) {
      setMessage("Please select a room before continuing.");
      return;
    }

    setMessage("");
    setBookingStep("guest");
  };

  const handleContinueToSummary = () => {
    if (!guestName || !guestPhone || !guestEmail) {
      setMessage("Please fill in your name, phone number and email address.");
      return;
    }

    setMessage("");
    setBookingStep("summary");
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const difference = end - start;

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  };

  const formatDate = (date) => {
    if (!date) return "";

    const dateObject = new Date(date);

    return dateObject.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getRoomImage = () => {
    if (selectedRoom === "Premium Room") {
      return "/images/guesthouseimages/suite.jpg";
    }

    if (selectedRoom === "Family Room") {
      return "/images/guesthouseimages/arun.jpg";
    }

    return "/images/guesthouseimages/double.jpg";
  };

  const handleConfirmBooking = () => {
    setMessage("");
    setBookingConfirmed(true);
  };

  return (
    <div className="booking-page">
      {/* =====================================================
          BOOKING HEADER
      ===================================================== */}

      <div className="booking-page-header">
        <p>BOOK YOUR STAY</p>

        <h1>
          Find Your Perfect
          <span>Stay at Sunshine</span>
        </h1>

        <p className="booking-page-description">
          Select your stay dates and number of guests to find the right room for
          your visit.
        </p>
      </div>

      {/* =====================================================
          SEARCH CARD
      ===================================================== */}

      {bookingStep !== "summary" && !bookingConfirmed && (
        <div className="booking-search-card">
          <div className="booking-field">
            <label>CHECK IN</label>

            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>

          <div className="booking-field">
            <label>CHECK OUT</label>

            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>

          <div className="booking-field">
            <label>ADULTS</label>

            <select value={adults} onChange={(e) => setAdults(e.target.value)}>
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
              <option value="5">5+ Adults</option>
            </select>
          </div>

          <div className="booking-field">
            <label>CHILDREN</label>

            <select
              value={children}
              onChange={(e) => setChildren(e.target.value)}
            >
              <option value="0">No Children</option>
              <option value="1">1 Child</option>
              <option value="2">2 Children</option>
              <option value="3">3 Children</option>
              <option value="4">4+ Children</option>
            </select>
          </div>

          <button className="booking-search-btn" onClick={handleSearchRooms}>
            Search Available Rooms
            <span>→</span>
          </button>
        </div>
      )}

      {/* =====================================================
          MESSAGE
      ===================================================== */}

      {message && <div className="booking-message">{message}</div>}

      {/* =====================================================
          AVAILABLE ROOMS
      ===================================================== */}

      {bookingStep === "rooms" && (
        <section className="available-rooms">
          <div className="available-rooms-heading">
            <p>AVAILABLE ROOMS</p>

            <h2>
              Choose Your
              <span>Perfect Room</span>
            </h2>

            <div className="stay-summary">
              <span>{adults} Adults</span>
              <span>{children} Children</span>
              <span>{calculateNights()} Nights</span>
            </div>
          </div>

          <div className="available-room-grid">
            {/* DELUXE ROOM */}

            <article
              className={`available-room-card ${
                selectedRoom === "Deluxe Room" ? "selected" : ""
              }`}
              onClick={() => handleSelectRoom("Deluxe Room")}
            >
              <div className="available-room-image">
                <img
                  src="/images/guesthouseimages/double.jpg"
                  alt="Deluxe Room"
                />

                <span>DELUXE</span>
              </div>

              <div className="available-room-content">
                <p className="room-type">DELUXE ROOM</p>

                <h3>Relax in Comfort</h3>

                <p>
                  A welcoming room with a peaceful atmosphere, designed for a
                  comfortable and relaxing stay.
                </p>

                <div className="room-features">
                  <span>✓ Comfortable Room</span>
                  <span>✓ Free Wi-Fi</span>
                  <span>✓ Guest Support</span>
                </div>

                <button
                  className="select-room-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectRoom("Deluxe Room");
                  }}
                >
                  Select Room →
                </button>
              </div>
            </article>

            {/* PREMIUM ROOM */}

            <article
              className={`available-room-card ${
                selectedRoom === "Premium Room" ? "selected" : ""
              }`}
              onClick={() => handleSelectRoom("Premium Room")}
            >
              <div className="available-room-image">
                <img
                  src="/images/guesthouseimages/suite.jpg"
                  alt="Premium Room"
                />

                <span>PREMIUM</span>
              </div>

              <div className="available-room-content">
                <p className="room-type">PREMIUM ROOM</p>

                <h3>Extra Space & Style</h3>

                <p>
                  Enjoy additional space, elegant surroundings and a peaceful
                  environment.
                </p>

                <div className="room-features">
                  <span>✓ Spacious Room</span>
                  <span>✓ Free Wi-Fi</span>
                  <span>✓ Comfortable Stay</span>
                </div>

                <button
                  className="select-room-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectRoom("Premium Room");
                  }}
                >
                  Select Room →
                </button>
              </div>
            </article>

            {/* FAMILY ROOM */}

            <article
              className={`available-room-card ${
                selectedRoom === "Family Room" ? "selected" : ""
              }`}
              onClick={() => handleSelectRoom("Family Room")}
            >
              <div className="available-room-image">
                <img
                  src="/images/guesthouseimages/arun.jpg"
                  alt="Family Room"
                />

                <span>FAMILY</span>
              </div>

              <div className="available-room-content">
                <p className="room-type">FAMILY ROOM</p>

                <h3>Stay Together</h3>

                <p>
                  A spacious and comfortable choice for families and guests
                  travelling together.
                </p>

                <div className="room-features">
                  <span>✓ Spacious Stay</span>
                  <span>✓ Family Friendly</span>
                  <span>✓ Free Wi-Fi</span>
                </div>

                <button
                  className="select-room-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectRoom("Family Room");
                  }}
                >
                  Select Room →
                </button>
              </div>
            </article>
          </div>

          {/* SELECTED ROOM */}

          {selectedRoom && (
            <div className="booking-continue">
              <div>
                <span>SELECTED ROOM</span>

                <strong>{selectedRoom}</strong>
              </div>

              <button onClick={handleContinueToGuestDetails}>
                Continue to Guest Details
                <span>→</span>
              </button>
            </div>
          )}
        </section>
      )}

      {/* =====================================================
          GUEST DETAILS
      ===================================================== */}

      {bookingStep === "guest" && (
        <section className="guest-details-section">
          <div className="guest-details-heading">
            <p>GUEST DETAILS</p>

            <h2>Tell Us About Yourself</h2>

            <span>
              Please enter your details to continue with your booking.
            </span>
          </div>

          <div className="guest-details-card">
            {/* NAME + PHONE */}

            <div className="guest-form-row">
              <div className="guest-form-group">
                <label>FULL NAME</label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                />
              </div>

              <div className="guest-form-group">
                <label>PHONE NUMBER</label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                />
              </div>
            </div>

            {/* EMAIL + GUEST COUNT */}

            <div className="guest-form-row">
              <div className="guest-form-group">
                <label>EMAIL ADDRESS</label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                />
              </div>

              <div className="guest-form-group">
                <label>NUMBER OF GUESTS</label>

                <input
                  type="text"
                  value={`${adults} Adults, ${children} Children`}
                  readOnly
                />
              </div>
            </div>

            {/* SPECIAL REQUEST */}

            <div className="guest-form-group">
              <label>SPECIAL REQUEST</label>

              <textarea
                placeholder="Any special request? (Optional)"
                rows="4"
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
              />
            </div>

            {/* SUMMARY CTA */}

            <div className="guest-summary">
              <div>
                <span>SELECTED ROOM</span>

                <strong>{selectedRoom}</strong>
              </div>

              <button onClick={handleContinueToSummary}>
                Continue to Booking Summary →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          BOOKING SUMMARY
      ===================================================== */}

      {bookingStep === "summary" && !bookingConfirmed && (
        <section className="booking-summary-section">
          <div className="booking-summary-heading">
            <p>BOOKING SUMMARY</p>

            <h2>
              Review Your
              <span>Reservation</span>
            </h2>

            <span>Please review your booking details before confirming.</span>
          </div>

          <div className="booking-summary-container">
            {/* LEFT SIDE */}

            <div className="booking-summary-main">
              {/* STAY DETAILS */}

              <div className="summary-card">
                <div className="summary-card-header">
                  <div>
                    <p>YOUR STAY</p>
                    <h3>Stay Details</h3>
                  </div>

                  <span className="summary-number">01</span>
                </div>

                <div className="stay-details-grid">
                  <div className="stay-detail">
                    <span>CHECK IN</span>

                    <strong>{formatDate(checkIn)}</strong>
                  </div>

                  <div className="stay-detail">
                    <span>CHECK OUT</span>

                    <strong>{formatDate(checkOut)}</strong>
                  </div>

                  <div className="stay-detail">
                    <span>DURATION</span>

                    <strong>
                      {calculateNights()}{" "}
                      {calculateNights() === 1 ? "Night" : "Nights"}
                    </strong>
                  </div>

                  <div className="stay-detail">
                    <span>GUESTS</span>

                    <strong>
                      {adults} Adults
                      {children !== "0" && `, ${children} Children`}
                    </strong>
                  </div>
                </div>
              </div>

              {/* ROOM DETAILS */}

              <div className="summary-card">
                <div className="summary-card-header">
                  <div>
                    <p>YOUR ROOM</p>
                    <h3>Selected Room</h3>
                  </div>

                  <span className="summary-number">02</span>
                </div>

                <div className="summary-room">
                  <div className="summary-room-image">
                    <img src={getRoomImage()} alt={selectedRoom} />
                  </div>

                  <div className="summary-room-info">
                    <span className="summary-room-type">
                      SUNSHINE GUEST HOUSE
                    </span>

                    <h3>{selectedRoom}</h3>

                    <p>
                      A comfortable and welcoming room designed for a peaceful
                      stay.
                    </p>

                    <div className="summary-room-features">
                      <span>✓ Free Wi-Fi</span>

                      <span>✓ Comfortable Stay</span>

                      <span>✓ Guest Support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GUEST INFORMATION */}

              <div className="summary-card">
                <div className="summary-card-header">
                  <div>
                    <p>GUEST INFORMATION</p>
                    <h3>Your Details</h3>
                  </div>

                  <span className="summary-number">03</span>
                </div>

                <div className="guest-summary-details">
                  <div>
                    <span>FULL NAME</span>

                    <strong>{guestName}</strong>
                  </div>

                  <div>
                    <span>PHONE</span>

                    <strong>{guestPhone}</strong>
                  </div>

                  <div>
                    <span>EMAIL</span>

                    <strong>{guestEmail}</strong>
                  </div>

                  <div className="guest-request-summary">
                    <span>SPECIAL REQUEST</span>

                    <p>{specialRequest || "No special request"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}

            <aside className="booking-final-card">
              <div className="final-card-top">
                <p>RESERVATION</p>

                <h3>Ready to Book?</h3>

                <span>Your stay details are ready for confirmation.</span>
              </div>

              <div className="final-room-name">
                <span>SELECTED ROOM</span>

                <strong>{selectedRoom}</strong>
              </div>

              <div className="final-stay-info">
                <div>
                  <span>DATES</span>

                  <strong>{formatDate(checkIn)}</strong>

                  <small>to {formatDate(checkOut)}</small>
                </div>

                <div>
                  <span>DURATION</span>

                  <strong>
                    {calculateNights()}{" "}
                    {calculateNights() === 1 ? "Night" : "Nights"}
                  </strong>
                </div>

                <div>
                  <span>GUESTS</span>

                  <strong>{adults} Adults</strong>

                  {children !== "0" && <small>{children} Children</small>}
                </div>
              </div>

              <div className="final-card-divider"></div>

              <div className="final-card-note">
                <span>✦</span>

                <p>
                  Your reservation request will be submitted to Sunshine Guest
                  House.
                </p>
              </div>

              <button
                className="confirm-booking-btn"
                onClick={handleConfirmBooking}
              >
                Confirm Booking
                <span>→</span>
              </button>

              <button
                className="back-to-details-btn"
                onClick={() => setBookingStep("guest")}
              >
                ← Back to Guest Details
              </button>
            </aside>
          </div>
        </section>
      )}

      {/* =====================================================
          BOOKING CONFIRMED
      ===================================================== */}

      {bookingConfirmed && (
        <section className="booking-success-section">
          <div className="booking-success-card">
            <div className="success-icon">✓</div>

            <p>BOOKING REQUEST RECEIVED</p>

            <h2>Thank You, {guestName}</h2>

            <span>
              Your reservation request for <strong>{selectedRoom}</strong> has
              been received.
            </span>

            <div className="success-details">
              <div>
                <small>CHECK IN</small>
                <strong>{formatDate(checkIn)}</strong>
              </div>

              <div>
                <small>CHECK OUT</small>
                <strong>{formatDate(checkOut)}</strong>
              </div>

              <div>
                <small>GUESTS</small>
                <strong>
                  {adults} Adults
                  {children !== "0" && `, ${children} Children`}
                </strong>
              </div>
            </div>

            <p className="success-note">
              Our team will contact you shortly to confirm the availability and
              booking details.
            </p>
          </div>
        </section>
      )}

      {/* =====================================================
          HELP
      ===================================================== */}

      {bookingStep === "search" && !message && !bookingConfirmed && (
        <div className="booking-help">
          <span>✦</span>

          <p>Select your dates to explore available room options.</p>
        </div>
      )}
    </div>
  );
}

export default Booking;
