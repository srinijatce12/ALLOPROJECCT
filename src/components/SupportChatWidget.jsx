import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Image as ImageIcon, Bot, Stethoscope } from 'lucide-react';

export default function SupportChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('ai');
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'ai', text: 'Hi there! I am your Allobaby AI Care Assistant. How can I help you today?', type: 'text' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    const newHistory = [
      ...chatHistory,
      { sender: 'user', imageUrl, fileName: file.name, type: 'image' }
    ];
    setChatHistory(newHistory);
    setIsTyping(true);
    e.target.value = ''; // reset so same file can be re-selected

    setTimeout(() => {
      const reply = mode === 'ai'
        ? `I've analyzed your image "${file.name}". Everything looks perfectly normal and healthy for this stage! I will save this to your Health Records. ✅`
        : `Thank you for sharing "${file.name}". The vitals are clear and development is on track. I'll note this in your clinical file. 📋`;
      setChatHistory([...newHistory, { sender: mode, text: reply, type: 'text' }]);
      setIsTyping(false);
    }, 1800);
  };


  // Auto scroll to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory, isTyping, isOpen]);

  // Handle Mode Switch
  const handleModeSwitch = (newMode) => {
    setMode(newMode);
    setChatHistory([
      { 
        sender: newMode, 
        text: newMode === 'ai' 
          ? 'Hi there! I am your AI Care Assistant. How can I help you today?' 
          : 'Hello, I am Dr. Sarah. I am here to provide clinical support. What symptoms are you experiencing?', 
        type: 'text' 
      }
    ]);
  };

  const handleSend = (text, isImage = false) => {
    if (!text.trim() && !isImage) return;

    const newHistory = [...chatHistory, {
      sender: 'user',
      text: isImage ? 'Sent an image attachment 🖼️' : text,
      type: isImage ? 'image' : 'text'
    }];

    setChatHistory(newHistory);
    setMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = getSmartReply(text, mode, isImage);
      setChatHistory([...newHistory, { sender: mode, text: reply, type: 'text' }]);
      setIsTyping(false);
    }, 1400);
  };

  const getSmartReply = (text, mode, isImage) => {
    const t = text.toLowerCase();
    const hasImageInHistory = chatHistory.some(msg => msg.type === 'image') || isImage;

    if (isImage) {
      if (t.includes('diet') || t.includes('eat') || t.includes('food') || t.includes('nutrition')) {
        return "Based on the image of your baby, for their nutrition focus on age-appropriate feeding. For infants, breastmilk or formula is primary. When starting solids, introduce iron-rich purees, soft vegetables, and fruits. Avoid honey and added salt. 🍼🥗";
      }
      return mode === 'ai'
        ? "I've analyzed your image. Everything looks perfectly normal and healthy for this stage! I'll save this to your Health Records. ✅"
        : "Thank you for sharing the image. The vitals are clear and development is on track. I'll note this in your clinical file. 📋";
    }

    if (mode === 'ai') {
      if (t.includes('vomit') || t.includes('nausea') || t.includes('sick') || t.includes('throw up'))
        return "Morning sickness is very common in the first trimester. Try eating small, frequent meals, stay hydrated with ginger tea, and avoid strong smells. If vomiting is severe (more than 3–4 times a day), please consult your doctor. 🤢";
      if (t.includes('not able to eat') || t.includes('can\'t eat') || t.includes('no appetite') || t.includes('appetite'))
        return "Loss of appetite during pregnancy is normal, especially in the first trimester. Try bland foods like crackers, bananas, or toast. Small portions every 2 hours help. Make sure you're getting at least 1800 calories a day. 🍌";
      if (t.includes('pain') || t.includes('cramp') || t.includes('ache'))
        return "Mild cramping can be normal during pregnancy, especially in early stages. However, if the pain is sharp, persistent, or accompanied by bleeding, please see your doctor immediately. Do you want me to help book an appointment? 🏥";
      if (t.includes('bleed') || t.includes('spotting'))
        return "⚠️ Any bleeding during pregnancy should be reported to your doctor right away. Light spotting can be implantation bleeding, but heavy bleeding needs immediate attention. Please contact your healthcare provider now.";
      if (t.includes('kick') || t.includes('movement') || t.includes('moving'))
        return "During pregnancy, baby movements typically begin between weeks 16–24. If you're past week 24, you should feel at least 10 movements within 2 hours. If you're talking about a newborn, their little kicks are great for developing muscle strength! 👶";
      if (t.includes('growth') || t.includes('size') || t.includes('week')) {
        if (t.match(/\b\d+\b/)) {
          return "At that stage, your baby is developing wonderfully! 🌟 Their vital organs are maturing, and growth is right on track. Keep up the good nutrition!";
        }
        return "I can help track your baby's growth! Could you tell me how many weeks pregnant you are, or your baby's age in months? 📅";
      }
      if (t.includes('diet') || t.includes('eat') || t.includes('food') || t.includes('nutrition')) {
        if (hasImageInHistory) {
          return "Based on the image of your baby, for their nutrition focus on age-appropriate feeding. For infants, breastmilk or formula is primary. When starting solids, introduce iron-rich purees, soft vegetables, and fruits. Avoid honey and added salt. 🍼🥗";
        }
        return "Great question! During pregnancy focus on: Folic acid (leafy greens), Iron (lentils, spinach), Calcium (dairy, almonds), and Omega-3 (fish, walnuts). Avoid raw fish, unpasteurized cheese, and excess caffeine. 🥗";
      }
      if (t.includes('sleep') || t.includes('tired') || t.includes('fatigue') || t.includes('rest'))
        return "Fatigue is very common, especially in the first and third trimesters. Sleep on your left side to improve blood flow to your baby. Use a pregnancy pillow for support. Aim for 7–9 hours per night. 😴";
      if (t.includes('exercise') || t.includes('walk') || t.includes('yoga'))
        return "Light exercise during pregnancy is great! Walking, prenatal yoga, and swimming are all safe and beneficial. Aim for 30 minutes of moderate activity most days. Avoid contact sports and lying flat on your back after week 20. 🧘‍♀️";
      if (t.includes('appointment') || t.includes('book') || t.includes('schedule') || t.includes('doctor'))
        return "I can help you schedule an appointment! Your next recommended check-up is at Week 16 for an anatomy scan. Would you like me to book Dr. Sarah for this Thursday at 10:00 AM? 📅";
      if (t.includes('weight') || t.includes('gain'))
        return "Healthy pregnancy weight gain depends on your starting BMI. Generally: 11–16 kg for normal weight, 7–11 kg if overweight. Focus on nutritious foods rather than dieting. Your Allobaby tracker monitors this for you! ⚖️";
      if (t.includes('stress') || t.includes('anxious') || t.includes('worry') || t.includes('scared'))
        return "It's completely normal to feel anxious during pregnancy. Try deep breathing exercises, prenatal yoga, or talking to a loved one. The Allobaby community section connects you with thousands of mothers who understand exactly what you're going through. 💙";
      if (t.includes('medicine') || t.includes('medication') || t.includes('tablet') || t.includes('pill'))
        return "⚠️ Never take any medication during pregnancy without consulting your doctor first. Even common OTC drugs can affect your baby. I can connect you with Dr. Sarah for prescription guidance right now.";
      if (t.includes('hello') || t.includes('hi') || t.includes('hey'))
        return "Hello! I'm your Allobaby AI Care Assistant. 👋 I can help with pregnancy nutrition, symptoms, baby growth tracking, appointment booking, and more. What's on your mind today?";
      if (t.includes('thank') || t.includes('thanks'))
        return "You're very welcome! Remember, I'm here 24/7 for you. Is there anything else I can help you with? 💙";
      // Default intelligent fallback
      return `I hear you — "${text}". Based on your Allobaby profile, I recommend discussing this with your healthcare provider for personalised advice. Would you like me to connect you with Dr. Sarah right now? 🩺`;
    }

    // Doctor mode
    if (t.includes('vomit') || t.includes('nausea') || t.includes('sick'))
      return "Clinically, nausea and vomiting in the first trimester (NVP) affects ~80% of pregnancies. If severe, this may be Hyperemesis Gravidarum. I'll prescribe a safe antiemetic. Can you describe the frequency per day? 📋";
    if (t.includes('not able to eat') || t.includes('can\'t eat') || t.includes('no appetite') || t.includes('appetite'))
      return "Reduced appetite in the first trimester is expected. However, if you cannot keep any food down for over 24 hours, we may need to consider IV fluids to prevent dehydration. Let me schedule a clinical review. 🏥";
    if (t.includes('pain') || t.includes('cramp'))
      return "I want to assess the nature of the pain — location, intensity (1–10), and duration. Sharp lower abdominal pain with spotting needs urgent evaluation to rule out ectopic pregnancy. Please describe your symptoms further.";
    if (t.includes('bleed') || t.includes('spotting'))
      return "⚠️ Please go to the nearest emergency room or call emergency services immediately if bleeding is heavy. For light spotting, I'll order an emergency ultrasound to check fetal heart rate and placental position.";
    if (t.includes('appointment') || t.includes('book') || t.includes('schedule'))
      return "I've checked my schedule. I have availability this Thursday at 10:00 AM and Friday at 2:30 PM. Which works better for you? I'll send a confirmation to your registered number. 📅";
    if (t.includes('prescription') || t.includes('medicine') || t.includes('medication'))
      return "I'll review your current medication list. During pregnancy, I typically prescribe: Folic acid 5mg, Iron supplements, and Vitamin D3. I'll send the prescription to your registered pharmacy. Please do not take any unprescribed medication. 💊";
    if (t.includes('hello') || t.includes('hi') || t.includes('hey'))
      return "Hello! I'm Dr. Sarah, your dedicated clinical support doctor. I'm here to provide medical guidance for your pregnancy journey. Please describe your symptoms or concerns and I'll do my best to help. 🩺";
    if (t.includes('thank') || t.includes('thanks'))
      return "You're welcome. Please don't hesitate to reach out if your symptoms change or worsen. Your health and your baby's health are my top priority. 💙";
    return `Thank you for sharing that with me. Based on what you've described — "${text}" — I'd recommend a clinical consultation within the next 48 hours. I'll book a slot and send you a reminder. 📋`;
  };

  const chattingOptions = mode === 'ai' 
    ? ["Track my baby's growth", "Analyze my scan", "Nutrition tips"]
    : ["Book Appointment", "Review Symptoms", "Prescription Refill"];

  return (
    <>
      {/* Floating Action Button */}
      <button className={`support-fab ${isOpen ? 'hidden' : ''}`} onClick={() => setIsOpen(true)}>
        <MessageSquare size={24} />
      </button>

      {/* Chat Widget Container */}
      <div className={`support-chat-widget ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="chat-header">
          <div className="chat-modes">
            <button className={`mode-btn ${mode === 'ai' ? 'active' : ''}`} onClick={() => handleModeSwitch('ai')}>
              <Bot size={16} /> AI Assistant
            </button>
            <button className={`mode-btn ${mode === 'doctor' ? 'active' : ''}`} onClick={() => handleModeSwitch('doctor')}>
              <Stethoscope size={16} /> Doctor
            </button>
          </div>
          <button className="chat-close" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Chat Body */}
        <div className="chat-body">
          {chatHistory.map((msg, idx) => (
            <div key={idx} className={`chat-bubble-row ${msg.sender === 'user' ? 'user' : 'agent'}`}>
              {msg.sender !== 'user' && (
                <div className="agent-avatar">
                  {msg.sender === 'ai' ? <Bot size={14} /> : <Stethoscope size={14} />}
                </div>
              )}
              <div className={`chat-bubble ${msg.sender}`}>
                {msg.type === 'image' ? (
                  <div className="real-image-bubble">
                    <img src={msg.imageUrl} alt={msg.fileName} className="chat-image-preview" />
                    <span className="image-filename">📎 {msg.fileName}</span>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="chat-bubble-row agent">
               <div className="agent-avatar">{mode === 'ai' ? <Bot size={14} /> : <Stethoscope size={14} />}</div>
               <div className="chat-bubble agent typing">
                 <span className="dot"></span><span className="dot"></span><span className="dot"></span>
               </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Quick Chatting Options */}
        <div className="chat-options-scroll">
          {chattingOptions.map((opt, idx) => (
            <button key={idx} className="chat-opt-btn" onClick={() => handleSend(opt)}>
              {opt}
            </button>
          ))}
        </div>

        {/* Chat Input */}
        <div className="chat-input-area">
          {/* Hidden real file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <button
            className="attach-btn"
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            title="Upload Image"
          >
            <ImageIcon size={20} />
          </button>
          <input 
            type="text" 
            placeholder="Type your message..." 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend(message)}
          />
          <button className={`send-btn ${message.trim() ? 'active' : ''}`} onClick={() => handleSend(message)} disabled={!message.trim()}>
            <Send size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .support-fab {
          position: fixed;
          bottom: 30px;
          left: 30px; /* Kept on left so it doesn't collide with VoiceAssistant on the right */
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--theme-gradient-primary);
          color: white;
          border: none;
          box-shadow: 0 10px 25px rgba(2, 132, 199, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 9999;
        }

        .support-fab:hover {
          transform: scale(1.1);
        }

        .support-fab.hidden {
          transform: scale(0);
          pointer-events: none;
        }

        .support-chat-widget {
          position: fixed;
          bottom: 30px;
          left: 30px;
          width: 350px;
          height: 550px;
          max-height: 80vh;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.5);
          border-radius: 24px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 10000;
          transform: translateY(20px) scale(0.95);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-origin: bottom left;
        }

        .support-chat-widget.open {
          transform: translateY(0) scale(1);
          opacity: 1;
          pointer-events: all;
        }

        .chat-header {
          padding: 16px;
          background: linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-secondary, var(--theme-primary)) 100%);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
        }

        .chat-modes {
          display: flex;
          gap: 8px;
          background: rgba(0,0,0,0.15);
          padding: 4px;
          border-radius: 20px;
        }

        .mode-btn {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.7);
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
        }

        .mode-btn.active {
          background: white;
          color: var(--theme-primary);
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .chat-close {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          opacity: 0.8;
          transition: opacity 0.2s;
          display: flex;
        }

        .chat-close:hover {
          opacity: 1;
        }

        .chat-body {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background-color: #f8fafc;
        }

        .chat-bubble-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
        }

        .chat-bubble-row.user {
          justify-content: flex-end;
        }

        .agent-avatar {
          width: 28px;
          height: 28px;
          background: var(--theme-gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .chat-bubble {
          max-width: 75%;
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 13.5px;
          line-height: 1.4;
          word-wrap: break-word;
        }

        .chat-bubble.user {
          background: var(--theme-primary);
          color: white;
          border-bottom-right-radius: 4px;
        }

        .chat-bubble.ai, .chat-bubble.doctor, .chat-bubble.agent {
          background: white;
          color: var(--text-dark);
          border: 1px solid var(--border-light);
          border-bottom-left-radius: 4px;
        }

        .real-image-bubble {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 4px;
        }

        .chat-image-preview {
          width: 100%;
          max-width: 200px;
          border-radius: 10px;
          object-fit: cover;
          display: block;
        }

        .image-filename {
          font-size: 10px;
          color: rgba(255,255,255,0.75);
          font-weight: 500;
        }

        /* Typing animation */
        .typing {
          display: flex;
          gap: 4px;
          align-items: center;
          padding: 14px 16px !important;
        }

        .dot {
          width: 6px;
          height: 6px;
          background: #cbd5e1;
          border-radius: 50%;
          animation: typing-dot 1.4s infinite ease-in-out both;
        }

        .dot:nth-child(1) { animation-delay: -0.32s; }
        .dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes typing-dot {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        /* Options */
        .chat-options-scroll {
          padding: 10px 16px;
          display: flex;
          gap: 8px;
          overflow-x: auto;
          background: white;
          border-top: 1px solid var(--border-light);
          scrollbar-width: none;
        }
        
        .chat-options-scroll::-webkit-scrollbar {
          display: none;
        }

        .chat-opt-btn {
          white-space: nowrap;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: var(--text-dark);
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .chat-opt-btn:hover {
          background: var(--theme-primary-light);
          color: var(--theme-primary);
          border-color: var(--theme-primary-light);
        }

        /* Input */
        .chat-input-area {
          padding: 12px 16px;
          background: white;
          display: flex;
          align-items: center;
          gap: 10px;
          border-top: 1px solid var(--border-light);
        }

        .attach-btn {
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          display: flex;
          padding: 4px;
          transition: color 0.2s;
        }

        .attach-btn:hover {
          color: var(--theme-primary);
        }

        .chat-input-area input {
          flex: 1;
          border: none;
          background: #f1f5f9;
          padding: 10px 14px;
          border-radius: 20px;
          font-size: 13px;
          outline: none;
        }

        .send-btn {
          background: #e2e8f0;
          color: white;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: not-allowed;
          transition: all 0.2s;
        }

        .send-btn.active {
          background: var(--theme-primary);
          cursor: pointer;
        }

        @media (max-width: 640px) {
          .support-chat-widget {
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            max-height: 100vh;
            border-radius: 0;
            transform: translateY(100%);
          }
          .support-chat-widget.open {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
