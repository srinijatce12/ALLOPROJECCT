import React, { useState } from "react";
import { Star } from "lucide-react";

export default function Testimonials({
  tagline,
  title,
  description,
  reviews = [],
}) {
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmit = () => {
    if (!name.trim() || !relationship || !feedback.trim()) {
      alert("Please fill all fields");
      return;
    }

    setFeedbacks([
      ...feedbacks,
      {
        name,
        relationship,
        feedback,
      },
    ]);

    setName("");
    setRelationship("");
    setFeedback("");

    alert("Thank you for your feedback!");
  };

  return (
    <section
      id="testimonials"
      className="section testimonials-section"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container">
        <div className="text-center">
          <span className="section-tagline">
            {tagline || "Testimonials"}
          </span>

          <h2 className="section-title">{title}</h2>

          <p className="section-description">
            {description}
          </p>
        </div>

        {/* Existing Reviews */}
        <div className="grid grid-3">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="premium-card testimonial-card"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  marginBottom: "16px",
                  color: "#f59e0b",
                }}
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p
                style={{
                  fontStyle: "italic",
                  color: "var(--text-dark)",
                  marginBottom: "24px",
                  flex: 1,
                  fontSize: "15px",
                }}
              >
                "{review.text}"
              </p>

              <div>
                <strong>{review.name}</strong>
                <br />
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--text-muted)",
                  }}
                >
                  {review.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Form */}
        <div
          className="premium-card"
          style={{
            maxWidth: "700px",
            margin: "50px auto",
            padding: "30px",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              color: "#ec4899",
              marginBottom: "20px",
            }}
          >
            Share Your Feedback
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          />

          <select
            value={relationship}
            onChange={(e) =>
              setRelationship(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          >
            <option value="">
              Select Relationship
            </option>
            <option value="Mother">Mother</option>
            <option value="Father">Father</option>
            <option value="Expecting Mother">
              Expecting Mother
            </option>
            <option value="Expecting Father">
              Expecting Father
            </option>
            <option value="Family Member">
              Family Member
            </option>
            <option value="Doctor">Doctor</option>
          </select>

          <textarea
            rows="4"
            placeholder="Write your feedback"
            value={feedback}
            onChange={(e) =>
              setFeedback(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          />

          <div style={{ textAlign: "center" }}>
            <button
              onClick={handleSubmit}
              style={{
                background: "#ec4899",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                padding: "12px 30px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Submit Feedback
            </button>
          </div>
        </div>

        {/* Submitted Feedback */}
        {feedbacks.length > 0 && (
          <div
            style={{
              maxWidth: "800px",
              margin: "40px auto",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#ec4899",
              }}
            >
              User Feedback
            </h3>

            {feedbacks.map((item, index) => (
              <div
                key={index}
                className="premium-card"
                style={{
                  marginBottom: "15px",
                  padding: "20px",
                }}
              >
                <h4
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  {item.name}
                </h4>

                <p
                  style={{
                    color: "#ec4899",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  {item.relationship}
                </p>

                <p>"{item.feedback}"</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}