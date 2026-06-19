import React, { useState } from 'react';
import FeatureCard from './FeatureCard';
import { Volume2 } from 'lucide-react';

export default function Features({
  featuresList = []
}) {

  const [voiceOn, setVoiceOn] = useState(false);


  const toggleVoice = () => {

    const newState = !voiceOn;

    setVoiceOn(newState);


    if (!newState) {

      window.speechSynthesis.cancel();
      return;

    }


    const text = featuresList
      .map(item =>
        `${item.title}. ${item.whatItDoes}. ${item.howItWorks}. ${item.benefit}`
      )
      .join(" ");



    const speech = new SpeechSynthesisUtterance(text);


    speech.pitch = 1.2;
    speech.rate = 1;


    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);

  };



  return (

    <section id="features" className="features-section">


      <div className="container">


        <div className="grid grid-3">


          {featuresList.map((feature, idx) => (

            <div 
              className="feature-grid-item"
              key={idx}
            >

              <FeatureCard
                title={feature.title}
                icon={feature.icon}
                whatItDoes={feature.whatItDoes}
                howItWorks={feature.howItWorks}
                benefit={feature.benefit}
              />

            </div>

          ))}


        </div>



        <div className="voice-bottom">

          <div
            className={`voice-toggle ${voiceOn ? "active" : ""}`}
            onClick={toggleVoice}
          >

            <div className="toggle-circle"></div>

            <Volume2 size={18}/>

            <span>
              {voiceOn ? "ON" : "OFF"}
            </span>

          </div>

        </div>


      </div>


      <style>{`

        .features-section {
          background:#fff;
          padding:80px 0;
        }


        .container {
          width:90%;
          margin:auto;
        }


        .grid-3 {

          display:grid;
          gap:30px;
          grid-template-columns:repeat(3,1fr);

        }


        .feature-grid-item {

          padding:20px;
          border-radius:20px;
          transition:0.3s;

        }


        .feature-grid-item:nth-child(odd){
          background:#dbeafe;
        }


        .feature-grid-item:nth-child(even){
          background:#fce7f3;
        }


        .feature-grid-item:hover{
          transform:translateY(-6px);
        }



        .voice-bottom {

          display:flex;
          justify-content:center;
          margin-top:40px;

        }



        .voice-toggle {

          width:95px;
          height:38px;
          border-radius:25px;
          background:#d1d5db;

          display:flex;
          align-items:center;
          justify-content:space-around;

          cursor:pointer;

        }



        .voice-toggle.active {
          background:#f9a8d4;
        }


        .toggle-circle {

          width:28px;
          height:28px;

          background:white;

          border-radius:50%;

        }



        @media(max-width:768px){

          .grid-3{
            grid-template-columns:1fr;
          }

        }


        @media(min-width:769px) and (max-width:1100px){

          .grid-3{
            grid-template-columns:repeat(2,1fr);
          }

        }


      `}</style>


    </section>

  );
}