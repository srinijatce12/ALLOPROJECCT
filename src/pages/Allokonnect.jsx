import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Screenshots from '../components/Screenshots';
import Benefits from '../components/Benefits';
import FAQ from '../components/FAQ';
import Download from '../components/Download';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import { 
  Users, Key, Bell, HeartHandshake, Activity, ShieldAlert, Smartphone,
  UserPlus, MessageSquare, Lock, ClipboardList, Calendar, CheckCircle2
} from 'lucide-react';

export default function Allokonnect() {
  useEffect(() => {
    document.body.className = 'theme-allokonnect';
    window.scrollTo(0, 0);
    return () => {
      document.body.className = '';
    };
  }, []);

  const [sosActive, setSosActive] = useState(false);
  const [sosCountdown, setSosCountdown] = useState(5);
  const [activeFamilyMember, setActiveFamilyMember] = useState('grandma');

  useEffect(() => {
    let timer;
    if (sosActive && sosCountdown > 0) {
      timer = setTimeout(() => setSosCountdown(c => c - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [sosActive, sosCountdown]);

  const handleSosTrigger = () => {
    if (!sosActive) {
      setSosActive(true);
      setSosCountdown(5);
    } else {
      setSosActive(false);
    }
  };

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Dashboard', href: '#innovative' },
    { label: 'Process', href: '#how-it-works' },
    { label: 'Screenshots', href: '#screenshots' }
  ];

  const aboutPurposes = [
    { title: 'Better Family Communication', desc: 'Connect family members together in a secure private network for instant updates.' },
    { title: 'Smart Care Support', desc: 'Enable monitoring of elder health alerts, child care schedules, and routine checkups.' },
    { title: 'Easy Connection', desc: 'Join networks instantly with a simple 6-digit family linking code, no email spam.' }
  ];

  const featuresList = [
    { title: 'Family Health Monitoring', icon: Activity, whatItDoes: 'Monitor family wellbeing.', howItWorks: 'Includes health updates, care status, and important information.', benefit: 'Families stay informed.' },
    { title: 'Family Member Connection', icon: Users, whatItDoes: 'Connect parents and family.', howItWorks: 'Secure family network via private app infrastructure.', benefit: 'Better coordination.' },
    { title: 'Smart Alerts', icon: Bell, whatItDoes: 'Receive notifications.', howItWorks: 'Includes health reminders, emergency alerts, and important notifications.', benefit: 'Never miss an update.' },
    { title: 'Family Care Dashboard', icon: ClipboardList, whatItDoes: 'View network statuses.', howItWorks: 'Shows member activity, updates, and care information.', benefit: 'Centralized care view.' },
    { title: 'Emergency Support Center', icon: ShieldAlert, whatItDoes: 'SOS and urgent response.', howItWorks: 'Includes SOS button, emergency contacts, and quick assistance.', benefit: 'Immediate support access.' },
    { title: 'Secure Family Code', icon: Key, whatItDoes: 'Private family joining.', howItWorks: '6-digit cryptographic code connection.', benefit: 'Safe connection.' },
    { title: 'Care Activity Timeline', icon: Calendar, whatItDoes: 'Track shared actions.', howItWorks: 'Logs updates, reminders, and family activities in real-time.', benefit: 'Historical tracking.' },
    { title: 'Shared Health Information', icon: HeartHandshake, whatItDoes: 'Share clinical data.', howItWorks: 'Share reports, care updates, and important medical details.', benefit: 'Unified medical records.' }
  ];

  const stepList = [
  {
    title: 'Register Account',
    desc: 'Download the app and sign up with a phone number.',
    icon: Smartphone,
    image: '/allokonnect1.png'
  },
  {
    title: 'Create Profile',
    desc: 'Set up your family role and profile details.',
    icon: UserPlus,
    image: '/allokonnect2.png'
  },
  {
    title: 'Connect Family',
    desc: 'Generate a secure Family Code to share with your household.',
    icon: Key,
    image: '/allokonnect3.png'
  },
  {
    title: 'Share Updates',
    desc: 'Post care checklists, schedule checkups, and message.',
    icon: MessageSquare,
    image: '/allokonnect4.png'
  }
];

  const benefitsList = [
    { title: 'Stronger Family Connection', desc: 'Bridge physical distances with an intimate digital space.', icon: Users },
    { title: 'Easy Communication', desc: 'Keep health conversations separated and organized.', icon: Activity },
    { title: 'Secure Access', desc: 'Notifications and chats are protected with security keys.', icon: Lock },
    { title: 'Smart Care Management', desc: 'Manage multi-generational care schedules effectively.', icon: HeartHandshake }
  ];

  const faqsList = [
    { question: 'What is Allokonnect?', answer: 'Allokonnect is a secure health-tech communication app designed to link family members together, enabling shared care tracking, elder support, and urgent updates.' },
    { question: 'How does the Family Code work?', answer: 'When you create a family group, the app generates a private, temporary 6-digit code. Share this code with relatives; they input it during register to safely merge into your network.' },
    { question: 'Is my data secure?', answer: 'Absolutely. We prioritize private circles. Your family feeds, logged clinical updates, and alert profiles are fully encrypted and only visible to linked members.' }
  ];

  const reviews = [
    { name: 'David W.', role: 'Caring Son', text: 'Being able to monitor my elderly mother\'s medication schedule from another city gives me immense peace of mind.' },
    { name: 'Linda P.', role: 'Mother of 3', text: 'This app organizes our entire family\'s health checkups and vaccination dates perfectly. A lifesaver!' },
    { name: 'James C.', role: 'Grandfather', text: 'The SOS feature is very easy to use, and I love seeing updates from my grandkids on the timeline.' }
  ];

  const [phoneNumber, setPhoneNumber] = useState('');
  const [familyCodeInput, setFamilyCodeInput] = useState('');

  const appScreens = [
  {
    name: 'home',
    label: 'Home Dashboard',
    tagline: 'All Your Communities & Health',
    brandName: 'Allokonnect',
    fullImage: '/ak-screen-home.png'
  },
  {
    name: 'health',
    label: 'My Health',
    tagline: 'Health Profile Overview',
    brandName: 'Allokonnect',
    fullImage: '/ak-screen-health.png'
  },
  {
    name: 'community',
    label: 'Community',
    tagline: 'Organizations & Communities',
    brandName: 'Allokonnect',
    fullImage: '/ak-screen-community.png'
  },
  {
    name: 'allobot',
    label: 'Allobot',
    tagline: 'AI Health Assistant',
    brandName: 'Allokonnect',
    fullImage: '/ak-screen-allobot.png'
  },
  {
    name: 'agents',
    label: 'Custom Agents',
    tagline: 'Productivity Tools',
    brandName: 'Allokonnect',
    fullImage: '/ak-screen-agents.png'
  }
];

 const dashboardPreview = (
  <img
    src="/ak-screen-home.png"
    alt="Allokonnect Dashboard"
    style={{
      width: '100%',
      borderRadius: '16px'
    }}
  />
);

  return (
    <div className="allokonnect-landing-wrapper">
      {sosActive && <div className="sos-overlay"></div>}
    
      <Navbar brand="Allokonnect" otherProduct="Allobaby" otherProductUrl="/allobaby" menuItems={menuItems} />
      
      <Hero
  title="Connecting Families With Smart Care"
  tagline="Allokonnect"
  description="Stay connected with your family bubble..."
  ctaPrimary="Download App"
  ctaSecondary="Learn More"
  themeName="allokonnect"
  appPreview={dashboardPreview}
  googlePlayUrl="https://play.google.com/store/apps/details?id=com.savemom.alloconnect&hl=en-US"
/>

{/* Video Section */}
<section
  style={{
    padding: "60px 20px",
    textAlign: "center",
    background: "#fff"
  }}
>
  <h2 style={{ marginBottom: "20px" }}>
    Watch Allokonnect in Action
  </h2>

  <video
    controls
    style={{
      width: "100%",
      maxWidth: "900px",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
    }}
  >
    <source src="/Allokonnect.mp4" type="video/mp4" />
  </video>
</section>

<About
  heading="About Allokonnect"
  tagline="Family Link"
  content="Allokonnect is a specialized healthtech application built to help families coordinate care, monitor health status, and stay digitally linked in a secure private communication bubble."
  purposes={aboutPurposes}
/>
      <Features 
        title="Coordinated Health Circles"
        tagline="App Features"
        description="Everything you need to manage your family's daily health schedules and emergency updates together."
        featuresList={featuresList}
      />

      <HowItWorks 
        title="Quick Onboarding Process"
        tagline="How It Works"
        description="Linking profiles takes seconds. Generate a code, sync roles, and begin tracking health status together."
        steps={stepList}
      />

      {/* --- Innovative Sections --- */}
       <div
  className="premium-card"
  style={{
    maxWidth: '380px',
    margin: '0 auto',
    padding: '16px'
  }}
>
  <h3
    className="mb-3 text-center"
    style={{ fontSize: '18px' }}
  >
    Family Care Overview
  </h3>

  <div
    style={{
      display: 'flex',
      gap: '6px',
      marginBottom: '16px',
      padding: '4px',
      background: 'var(--theme-primary-light)',
      borderRadius: '10px'
    }}
  >
    {[
      { id: 'grandma', label: 'Grandma' },
      { id: 'mom', label: 'Mom' },
      { id: 'dad', label: 'Dad' }
    ].map(member => (
      <button
        key={member.id}
        onClick={() => setActiveFamilyMember(member.id)}
        style={{
          flex: 1,
          padding: '6px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '12px',
          fontWeight: 'bold',
          cursor: 'pointer',
          background:
            activeFamilyMember === member.id
              ? '#fff'
              : 'transparent',
          color:
            activeFamilyMember === member.id
              ? 'var(--theme-primary)'
              : 'var(--theme-primary-hover)'
        }}
      >
        {member.label}
      </button>
    ))}
  </div>

  <div
    style={{
      background: '#f8fafc',
      padding: '12px',
      borderRadius: '10px',
      border: '1px solid var(--border-light)'
    }}
  >
    {activeFamilyMember === 'grandma' && (
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          fontSize: '12px'
        }}
      >
        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={14} color="var(--theme-secondary)" />
          Blood Pressure Recorded
        </li>

        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={14} color="var(--theme-secondary)" />
          Medication Reminder Completed
        </li>

        <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
          <Calendar size={14} />
          Doctor Appointment Tomorrow
        </li>
      </ul>
    )}

    {activeFamilyMember === 'mom' && (
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          fontSize: '12px'
        }}
      >
        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={14} color="var(--theme-primary)" />
          Family Health Update Shared
        </li>

        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={14} color="var(--theme-primary)" />
          New Reminder Added
        </li>

        <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
          <Bell size={14} />
          Upcoming Health Check
        </li>
      </ul>
    )}

    {activeFamilyMember === 'dad' && (
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          fontSize: '12px'
        }}
      >
        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={14} color="var(--theme-primary)" />
          Family Circle Connected
        </li>

        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={14} color="var(--theme-primary)" />
          Emergency Contacts Updated
        </li>

        <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
          <Activity size={14} />
          Monitoring Active
        </li>
      </ul>
    )}
  </div>
</div>

      <Screenshots 
        title="Simulate the App Dashboard"
        tagline="Mobile Screenshots"
        description="Click through the app screens on the iPhone mockup to explore the private family networks."
        screens={appScreens}
      />

      <Benefits 
        title="Empower Your Family Bubble"
        tagline="Benefits"
        description="Build peace of mind by co-managing medical guidelines and updates across generations."
        benefitsList={benefitsList}
      />

      <Testimonials tagline="Family Reviews" title="Trusted By Households" description="See how Allokonnect brings families closer." reviews={reviews} />

      <FAQ title="Allokonnect FAQ Support" tagline="FAQ" description="Get instant answers about family code limits, encryption keys, and device syncing." faqs={faqsList} />

      <Download
  heading="Secure Your Family Care Circle"
  subtitle="Download Allokonnect on Android and keep your loved ones synced on health updates."
  brandName="Allokonnect"
  playStoreUrl="https://play.google.com/store/apps/details?id=com.savemom.alloconnect&hl=en-US"
/>

      <Footer brand="Allokonnect" description="Strengthening family care bonds with smart, private dashboards, medication planners, and collaborative vitals monitoring." sisterProduct="Allobaby" sisterProductUrl="/allobaby" />
    </div>
  );
}
