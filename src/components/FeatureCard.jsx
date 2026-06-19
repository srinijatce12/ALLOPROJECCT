import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function FeatureCard({
  title,
  icon: Icon,
  whatItDoes,
  howItWorks,
  benefit,
}) {
  const [voiceEnabled, setVoiceEnabled] = useState(false);

  const speakText = () => {
    if (!("speechSynthesis" in window)) {
      alert("Voice is not supported in this browser");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(
      `${title}. ${whatItDoes}. ${howItWorks}. ${benefit}`
    );

    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  };

  const toggleVoice = (e) => {
    e.stopPropagation();

    if (!voiceEnabled) {
      setVoiceEnabled(true);

      // Read this card immediately
      setTimeout(() => {
        speakText();
      }, 100);
    } else {
      setVoiceEnabled(false);

      // Stop reading
      window.speechSynthesis.cancel();
    }
  };

  return (
    <div
      className="feature-card"
      style={{
        position: "relative",
      }}
    >
      <button
        type="button"
        onClick={toggleVoice}
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          border: "none",
          borderRadius: "20px",
          padding: "8px 12px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: voiceEnabled ? "#3B82F6" : "#D9D9D9",
          color: voiceEnabled ? "#fff" : "#000",
          fontWeight: "600",
        }}
      >
        {voiceEnabled ? (
          <>
            <Volume2 size={16} />
            ON
          </>
        ) : (
          <>
            <VolumeX size={16} />
            OFF
          </>
        )}
      </button>

      {Icon && <Icon size={40} />}

      <h3>{title}</h3>

      <p>{whatItDoes}</p>

      <p>{howItWorks}</p>

      <p>{benefit}</p>
    </div>
  );
}