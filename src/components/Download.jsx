import React, { useState } from 'react';
import {
  Smartphone,
  CheckCircle2,
  ShieldCheck,
  Download as DownloadIcon
} from 'lucide-react';

export default function Download({
  heading,
  subtitle,
  brandName
}) {
  const [downloadState, setDownloadState] = useState('idle');
  const [progress, setProgress] = useState(0);

  const handleDownload = () => {
    if (downloadState !== 'idle') return;

    setDownloadState('downloading');
    setProgress(0);

    let current = 0;

    const interval = setInterval(() => {
      current += 10;

      if (current >= 100) {
        current = 100;
        clearInterval(interval);

        setProgress(100);

        setTimeout(() => {
          setDownloadState('complete');

          setTimeout(() => {
            window.location.href =
              'https://play.google.com/store/apps/details?id=com.savemom.allobaby&hl=en-US';
          }, 2000);
        }, 300);
      }

      setProgress(current);
    }, 200);
  };

  return (
    <section
      id="download"
      className="section download-section"
      style={{
        background: 'var(--theme-gradient-hero)'
      }}
    >
      <div className="container">
        <div
          className="premium-card text-center"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: '#fff',
            border: '1px solid var(--theme-primary-light)'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '64px',
              height: '64px',
              borderRadius: '20px',
              background: 'var(--theme-primary-light)',
              color: 'var(--theme-primary)',
              marginBottom: '24px'
            }}
          >
            <Smartphone size={32} />
          </div>

          <h2 className="section-title">{heading}</h2>

          <p className="section-description">
            {subtitle}
          </p>

          <div
            style={{
              margin: '40px auto 20px auto',
              maxWidth: '320px'
            }}
          >
            {downloadState === 'idle' && (
              <button
                onClick={handleDownload}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '18px'
                }}
              >
                <DownloadIcon size={20} />
                {' '}
                Download {brandName} App
              </button>
            )}

            {downloadState === 'downloading' && (
              <div
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '16px'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                    fontWeight: 'bold'
                  }}
                >
                  <span>Downloading...</span>
                  <span>{progress}%</span>
                </div>

                <div
                  style={{
                    height: '10px',
                    background: '#dbeafe',
                    borderRadius: '999px',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      width: `${progress}%`,
                      height: '100%',
                      background: '#2563eb',
                      transition: 'width 0.2s linear'
                    }}
                  />
                </div>
              </div>
            )}

            {downloadState === 'complete' && (
              <div
                style={{
                  background: '#ecfdf5',
                  border: '2px solid #10b981',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    color: '#10b981',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginBottom: '10px'
                  }}
                >
                  <CheckCircle2
                    size={20}
                    style={{ marginRight: '6px' }}
                  />
                  Download Complete!
                </div>

                <div
                  style={{
                    color: '#555',
                    fontSize: '14px'
                  }}
                >
                  Redirecting to Google Play Store...
                </div>
              </div>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              marginTop: '24px',
              fontSize: '14px',
              color: '#64748b'
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <ShieldCheck size={16} />
              Play Protect Verified
            </span>

            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <ShieldCheck size={16} />
              100% Secure Encryption
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}