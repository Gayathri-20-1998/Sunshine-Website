import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MessageCircle,
  X,
  BedDouble,
  CircleDollarSign,
  CalendarDays,
  MapPin,
  Phone,
  Send,
  Sun,
  ExternalLink,
} from "lucide-react";

function ChatAssistant() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const [userMessage, setUserMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const handleQuestion = (question) => {
    setActiveQuestion((current) => (current === question ? null : question));
  };

  const handleSendMessage = () => {
    const message = userMessage.trim();

    if (!message) return;

    setUserMessage("");

    // Temporary reply until we connect real AI
    const lowerMessage = message.toLowerCase();

    let reply =
      "Thank you for your message. How can I help you with your stay at Sunshine Guest House?";

    if (lowerMessage.includes("room") || lowerMessage.includes("stay")) {
      reply =
        "We offer Deluxe, Premium and Family rooms. You can check availability and choose your preferred room from our booking page.";
    } else if (
      lowerMessage.includes("location") ||
      lowerMessage.includes("where")
    ) {
      reply =
        "Sunshine Guest House is located at 5 Annamalai Nagar, Perumbakkam Road, Tiruvannamalai, Tamil Nadu 606603.";
    } else if (
      lowerMessage.includes("book") ||
      lowerMessage.includes("booking")
    ) {
      reply =
        "You can book your stay by selecting your check-in and check-out dates, choosing a room and entering your guest details.";
    } else if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("phone") ||
      lowerMessage.includes("call")
    ) {
      reply = "You can contact Sunshine Guest House at 9043225570.";
    }

    setChatMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: message,
      },
      {
        type: "assistant",
        text: reply,
      },
    ]);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="sunshine-chat-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Sunshine Assistant"
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="sunshine-chat-window">
          {/* Header */}
          <div className="sunshine-chat-header">
            <div className="sunshine-chat-profile">
              <div className="sunshine-chat-avatar">
                <Sun size={22} />
              </div>

              <div>
                <h3>Sunshine Assistant</h3>

                <span>
                  <i></i>
                  Online
                </span>
              </div>
            </div>

            <button
              className="sunshine-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X size={22} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="sunshine-chat-body">
            {/* Welcome Messages */}
            <div className="sunshine-message assistant">
              <p>Hi! Welcome to Sunshine Guest House.</p>
            </div>

            <div className="sunshine-message assistant">
              <p>How can I help you with your stay?</p>
            </div>

            {/* Quick Questions */}
            <div className="sunshine-quick-actions">
              {/* Check Room Availability */}
              <div className="sunshine-question-group">
                <button onClick={() => navigate("/booking")}>
                  <BedDouble size={16} />
                  <span>Check Room Availability</span>
                </button>
              </div>

              {/* Room Information */}
              <div className="sunshine-question-group">
                <button onClick={() => handleQuestion("room")}>
                  <CircleDollarSign size={16} />
                  <span>Room Information</span>
                </button>

                {activeQuestion === "room" && (
                  <div className="sunshine-inline-reply">
                    <p>We offer Deluxe, Premium and Family rooms.</p>

                    <p>Would you like to check room availability?</p>
                  </div>
                )}
              </div>

              {/* Booking Help */}
              <div className="sunshine-question-group">
                <button onClick={() => handleQuestion("booking")}>
                  <CalendarDays size={16} />
                  <span>Booking Help</span>
                </button>

                {activeQuestion === "booking" && (
                  <div className="sunshine-inline-reply">
                    <p>
                      Sure! To book your stay, first select your check-in and
                      check-out dates.
                    </p>

                    <p>
                      Then choose your preferred room, enter your guest details
                      and confirm your booking.
                    </p>

                    <button
                      className="sunshine-reply-button"
                      onClick={() => navigate("/booking")}
                    >
                      <CalendarDays size={15} />
                      <span>Start Booking</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Location */}
              <div className="sunshine-question-group">
                <button onClick={() => handleQuestion("location")}>
                  <MapPin size={16} />
                  <span>Location</span>
                </button>

                {activeQuestion === "location" && (
                  <div className="sunshine-inline-reply">
                    <p>
                      Sunshine Guest House is located at 5 Annamalai Nagar,
                      Perumbakkam Road, Tiruvannamalai, Tamil Nadu 606603.
                    </p>

                    <button
                      className="sunshine-maps-button"
                      onClick={() =>
                        window.open(
                          "https://www.google.com/maps?q=5+Annamalai+Nagar,+Perumbakkam+Road,+Tiruvannamalai,+Tamil+Nadu+606603",
                          "_blank",
                        )
                      }
                    >
                      <MapPin size={16} />
                      <span>Open in Google Maps</span>
                      <ExternalLink size={14} />
                    </button>
                  </div>
                )}
              </div>

              {/* Contact Sunshine */}
              <div className="sunshine-question-group">
                <button onClick={() => handleQuestion("contact")}>
                  <Phone size={16} />
                  <span>Contact Sunshine</span>
                </button>

                {activeQuestion === "contact" && (
                  <div className="sunshine-inline-reply">
                    <p>
                      You can contact Sunshine Guest House for booking and
                      enquiries.
                    </p>

                    <button
                      className="sunshine-reply-button"
                      onClick={() => {
                        window.location.href = "tel:9043225570";
                      }}
                    >
                      <Phone size={15} />
                      <span>Contact Sunshine</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Typed Chat Messages */}
            {chatMessages.map((message, index) => (
              <div
                className={`sunshine-message ${message.type}`}
                key={`chat-${index}`}
              >
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="sunshine-chat-footer">
            <input
              type="text"
              placeholder="Ask Sunshine Assistant..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />

            <button
              type="button"
              aria-label="Send message"
              onClick={handleSendMessage}
            >
              <Send size={17} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatAssistant;
