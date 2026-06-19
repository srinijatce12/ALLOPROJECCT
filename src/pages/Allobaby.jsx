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
  Heart, Baby, Bell, Sparkles, Activity, Calendar, ShieldCheck, Sparkle, 
  BookOpen, UserCheck, ClipboardList, ShieldAlert, CheckCircle2, MessageCircle
} from 'lucide-react';

export default function Allobaby() {
  useEffect(() => {
    document.body.className = 'theme-allobaby';
    window.scrollTo(0, 0);
    return () => {
      document.body.className = '';
    };
  }, []);

  const [healthScore, setHealthScore] = useState(85);
  const [sleepHrs, setSleepHrs] = useState(7);
  const [waterCups, setWaterCups] = useState(6);
  const [activeWeek, setActiveWeek] = useState(12);

  useEffect(() => {
    // Simple mock calculation for health score
    let score = 50 + (sleepHrs * 3) + (waterCups * 4);
    if (score > 100) score = 100;
    setHealthScore(score);
  }, [sleepHrs, waterCups]);

  // Menu links
  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Journey', href: '#innovative' },
    { label: 'Process', href: '#how-it-works' },
    { label: 'Screenshots', href: '#screenshots' }
  ];

  const aboutPurposes = [
    { title: 'Help Expecting Mothers', desc: 'Deliver weekly, structured progress insights directly customized to their stage of pregnancy.' },
    { title: 'Provide Pregnancy Awareness', desc: 'Share critical health symptoms, precautions, and dietary recommendations for a safe journey.' },
    { title: 'Make Motherhood Journey Easier', desc: 'Consolidate doctor appointments, prescription alerts, and kick counters into a single tool.' }
  ];

  const featuresList = [
    { title: 'Pregnancy Health Tracker', icon: Activity, whatItDoes: 'Monitor pregnancy progress.', howItWorks: 'Uses pregnancy week, LMP details and health information.', benefit: 'Helps mothers understand their pregnancy journey.' },
    { title: 'Baby Growth Monitoring', icon: Baby, whatItDoes: 'Tracks baby\'s weekly development.', howItWorks: 'Shows baby size, growth milestones and pregnancy updates.', benefit: 'Parents stay connected with baby\'s growth.' },
    { title: 'Mother Wellness Monitoring', icon: Heart, whatItDoes: 'Track mother\'s daily wellness.', howItWorks: 'Includes mood tracking, energy level, sleep pattern, and activity tracking.', benefit: 'Supports overall maternal wellbeing.' },
    { title: 'Health Record Management', icon: ClipboardList, whatItDoes: 'Store important pregnancy information.', howItWorks: 'Includes medical records, checkup history, and reports.', benefit: 'Easy access to health information.' },
    { title: 'Appointment Tracker', icon: Calendar, whatItDoes: 'Manage pregnancy appointments.', howItWorks: 'Includes doctor visits, upcoming checkups, and reminder notifications.', benefit: 'Never miss important care.' },
    { title: 'Medicine & Vitamin Reminder', icon: Bell, whatItDoes: 'Tracks daily medicines and supplements.', howItWorks: 'Custom schedule alerts for pills and hydration.', benefit: 'Maintains healthy routine.' },
    { title: 'Pregnancy Symptoms Tracker', icon: Activity, whatItDoes: 'Record pregnancy symptoms.', howItWorks: 'Includes nausea, pain, mood changes, and other changes.', benefit: 'Helps monitor health changes.' },
    { title: 'Nutrition Guidance', icon: Sparkles, whatItDoes: 'Personalized pregnancy nutrition tips.', howItWorks: 'Includes healthy foods, hydration reminders, and diet suggestions.', benefit: 'Supports mother and baby\'s health.' },
    { title: 'Kick Counter', icon: Activity, whatItDoes: 'Track baby movements.', howItWorks: 'Log and monitor fetal kicks over time.', benefit: 'Helps monitor baby\'s activity.' },
    { title: 'Emergency Assistance', icon: ShieldAlert, whatItDoes: 'Quick emergency support.', howItWorks: 'Includes emergency contact button, SOS option, and support access.', benefit: 'Immediate help when needed.' }
  ];

  const stepList = [
    { title: 'Create Account', desc: 'Securely verify your identity with a one-time OTP.', icon: UserCheck, image: '/step-login.png' },
    { title: 'Enter Pregnancy Details', desc: 'Input your LMP date or estimated due date.', icon: Calendar, image: '/step-status.png' },
    { title: 'Track Health', desc: 'Log your vitals, symptoms, and kicks daily.', icon: Activity, image: '/step-otp.png' },
    { title: 'Receive Personalized Care', desc: 'Unlock your stage-specific pregnancy tracking dashboard.', icon: Sparkle, image: '/step-role.png' }
  ];

  const benefitsList = [
    { title: 'Better Pregnancy Awareness', desc: 'Acquire high-quality medical knowledge.', icon: BookOpen },
    { title: 'Easy Pregnancy Monitoring', desc: 'Log and review vitals such as weight and BP.', icon: Activity },
    { title: 'Trusted Digital Support', desc: 'Access verified medical information.', icon: ShieldCheck },
    { title: 'Organized Mother Care', desc: 'Keep all your medical reports neatly arranged.', icon: Heart }
  ];

  const faqsList = [
    { question: 'What is Allobaby?', answer: 'Allobaby is a pregnancy care application designed to guide expecting mothers through every stage of pregnancy with customized timelines, growth illustrations, and vital health reminders.' },
    { question: 'Who can use Allobaby?', answer: 'While designed principally for expecting mothers, it offers a dedicated "Dad Mode" so fathers and family members can stay synced on development milestones, doctor schedules, and care tasks.' },
    { question: 'How does pregnancy tracking work?', answer: 'Our tracking computes gestational age using the First Day of your Last Menstrual Period (LMP) or a confirmed Due Date. It matches your current week to medical developmental stages.' },
    { question: 'Is Allobaby free?', answer: 'Yes! Allobaby’s core pregnancy tracking, weekly baby milestones, and local health reminders are entirely free. We aim to make maternal awareness accessible to all.' }
  ];

  const reviews = [
    { name: 'Sarah J.', role: 'Expecting Mother', text: 'Allobaby has been my best friend during this pregnancy. The week-by-week updates are incredibly accurate and reassuring.' },
    { name: 'Emily R.', role: 'First-time Mom', text: 'The medicine reminders and health tracking give me peace of mind every single day. Highly recommend to all moms!' },
    { name: 'Michael T.', role: 'Expectant Father', text: 'Dad mode is fantastic! I feel so involved in the process, knowing exactly when the doctor appointments are and how big our baby is.' }
  ];

  const appScreens = [
    { name: 'home', label: 'Home Dashboard', tagline: 'Pregnancy Status', brandName: 'Allobaby', fullImage: '/screen-home.png' },
    { name: 'allocry', label: 'Allocry', tagline: 'Understand Baby Cries', brandName: 'Allobaby', fullImage: '/screen-allocry.png' },
    { name: 'chat', label: 'Allobot Chat', tagline: 'Maternal AI Assistant', brandName: 'Allobaby', fullImage: '/screen-chat.png' },
    { name: 'services', label: 'Services', tagline: 'Book Appointments', brandName: 'Allobaby', fullImage: '/screen-services.png' },
    { name: 'connect', label: 'Connect', tagline: 'Connect With Doctor', brandName: 'Allobaby', fullImage: '/screen-connect.png' }
  ];

  const dashboardPreview = null;

  return (
    <div className="allobaby-landing-wrapper">
      
      <Navbar brand="Allobaby" otherProduct="Allokonnect" otherProductUrl="/allokonnect" menuItems={menuItems} />
      
      <Hero 
        title="Smart Care For Every Pregnancy Journey"
        tagline="Allobaby"
        description="Supporting mothers with smart pregnancy tracking, baby growth updates, vital reminders, and personalized clinical digital care guidelines."
        ctaPrimary="Download App"
        ctaSecondary="Explore Features"
        themeName="allobaby"
        appPreview={dashboardPreview}
        googlePlayUrl="https://play.google.com/store/apps/details?id=com.savemom.allobaby&hl=en-US"
      />

      {/* Video Walkthrough */}
      <section className="video-section" style={{ padding: '80px 0', background: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px', color: '#0F172A' }}>See Allobaby in Action</h2>
          <p style={{ fontSize: '18px', color: '#64748B', marginBottom: '40px' }}>Watch a quick walkthrough of our smart pregnancy tracking platform.</p>
          <div style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <video 
              src="/AlloBaby_Walkthrough.mp4" 
              controls 
              muted 
              loop 
              playsInline
              preload="metadata"
              style={{ width: '100%', display: 'block', backgroundColor: '#000' }}
            />
          </div>
        </div>
      </section>

      <About 
        heading="About Allobaby"
        tagline="Pregnancy Care"
        content="Allobaby helps mothers monitor pregnancy health, track baby development and receive personalized care guidance throughout their unique journey."
        purposes={aboutPurposes}
      />
      
      <Features 
        title="Advanced Health Monitoring Features"
        tagline="Comprehensive Care"
        description="Everything you need to ensure a healthy pregnancy, all in one smart application."
        featuresList={featuresList}
      />
      
      <HowItWorks 
        title="Your Journey Starts Here"
        tagline="How It Works"
        description="A simple timeline to get you started."
        steps={stepList}
      />
      
      {/* --- Innovative Sections --- */}
      <section id="innovative" className="section" style={{ backgroundColor: 'transparent' }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-tagline">Innovative Tools</span>
            <h2 className="section-title">Interactive Pregnancy Tracking</h2>
          </div>
          <div className="grid grid-2">
            {/* Journey Timeline */}
            <div className="premium-card text-center">
              <h3 className="mb-4" style={{ fontSize: '20px' }}>Pregnancy Journey Timeline</h3>
              <p className="mb-6 text-muted" style={{ fontSize: '14px' }}>Week-by-week anatomical progress tracking</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', padding: '10px', background: 'var(--theme-primary-light)', borderRadius: '16px' }}>
                {[4, 8, 12, 20, 28, 36].map(wk => (
                  <button 
                    key={wk}
                    onClick={() => setActiveWeek(wk)}
                    style={{ 
                      padding: '6px 12px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer',
                      background: activeWeek === wk ? 'var(--theme-primary)' : 'transparent',
                      color: activeWeek === wk ? '#fff' : 'var(--theme-primary)'
                    }}
                  >
                    Wk {wk}
                  </button>
                ))}
              </div>
              
              <div style={{ padding: '20px', border: '1px solid var(--border-light)', borderRadius: '16px' }}>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>
                  {activeWeek === 4 && '🫐'}
                  {activeWeek === 8 && '🍓'}
                  {activeWeek === 12 && '🍋'}
                  {activeWeek === 20 && '🍌'}
                  {activeWeek === 28 && '🍆'}
                  {activeWeek === 36 && '🍈'}
                </div>
                <h4 style={{ fontSize: '18px', color: 'var(--text-dark)' }}>Week {activeWeek}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                  {activeWeek === 4 && 'Your baby is the size of a poppy seed. The neural tube is forming!'}
                  {activeWeek === 8 && 'Your baby is the size of a raspberry. Webbed fingers and toes are developing.'}
                  {activeWeek === 12 && 'Your baby is the size of a lemon. Reflexes are kicking in!'}
                  {activeWeek === 20 && 'Your baby is the size of a banana. You might feel the first flutters!'}
                  {activeWeek === 28 && 'Your baby is the size of an eggplant. Dreaming and blinking begins.'}
                  {activeWeek === 36 && 'Your baby is the size of a honeydew. Getting ready for birth!'}
                </p>
              </div>
            </div>
            
            {/* Health Score Dashboard */}
            <div className="premium-card text-center">
              <h3 className="mb-4" style={{ fontSize: '20px' }}>Health Score Dashboard</h3>
              <p className="mb-6 text-muted" style={{ fontSize: '14px' }}>Interactive overall wellness indicator</p>
              
              <div className="health-score-ring" style={{ '--score': healthScore, marginBottom: '24px' }}>
                <div className="health-score-inner">
                  <span style={{ fontSize: '28px', fontWeight: '800', color: 'var(--theme-primary)' }}>{healthScore}</span>
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Score</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '12px', width: '80px', textAlign: 'left', fontWeight: '600' }}>Sleep (hrs)</span>
                  <input type="range" min="4" max="10" value={sleepHrs} onChange={(e)=>setSleepHrs(Number(e.target.value))} style={{ flex: 1, accentColor: 'var(--theme-secondary)' }} />
                  <span style={{ fontSize: '12px', width: '30px' }}>{sleepHrs}h</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '12px', width: '80px', textAlign: 'left', fontWeight: '600' }}>Water (cups)</span>
                  <input type="range" min="2" max="12" value={waterCups} onChange={(e)=>setWaterCups(Number(e.target.value))} style={{ flex: 1, accentColor: 'var(--theme-primary)' }} />
                  <span style={{ fontSize: '12px', width: '30px' }}>{waterCups}c</span>
                </div>
              </div>
            </div>
            
            {/* Mother Care Tips & Milestones */}
            <div className="premium-card">
              <h3 className="mb-4" style={{ fontSize: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}><Sparkles size={20} color="var(--theme-secondary)" /> Mother Care Tips</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ background: 'var(--theme-secondary-light)', padding: '12px', borderRadius: '8px', fontSize: '14px', borderLeft: '4px solid var(--theme-secondary)' }}>
                  <strong>Nutrition:</strong> Add more iron-rich foods like spinach and lentils to your diet this week.
                </li>
                <li style={{ background: 'var(--theme-primary-light)', padding: '12px', borderRadius: '8px', fontSize: '14px', borderLeft: '4px solid var(--theme-primary)' }}>
                  <strong>Exercise:</strong> 20 minutes of prenatal yoga can help ease lower back pain.
                </li>
              </ul>
            </div>
            
            <div className="premium-card">
              <h3 className="mb-4" style={{ fontSize: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={20} color="var(--theme-primary)" /> Baby Milestones</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', cursor: 'pointer' }}><input type="checkbox" defaultChecked /> Heartbeat audible on ultrasound</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', cursor: 'pointer' }}><input type="checkbox" defaultChecked /> First kicks felt (quickening)</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', cursor: 'pointer' }}><input type="checkbox" /> Responds to sound & light</label>
              </div>
            </div>
          </div>
          
          {/* Community Section */}
          <div className="premium-card" style={{ marginTop: '24px' }}>
            <h3 className="mb-4 text-center" style={{ fontSize: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}><MessageCircle size={24} color="var(--theme-primary)" /> Community & Support</h3>
            <div style={{ background: '#f8fafc', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--theme-secondary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>M</div>
                <div>
                  <strong style={{ fontSize: '14px', display: 'block' }}>MomOfTwo23</strong>
                  <p style={{ fontSize: '14px', color: 'var(--text-dark)' }}>Any tips for morning sickness in the first trimester?</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginLeft: '44px', background: '#fff', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--theme-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>Dr</div>
                <div>
                  <strong style={{ fontSize: '13px', display: 'block', color: 'var(--theme-primary)' }}>Verified Expert</strong>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Try eating small, frequent meals and keeping crackers by your bed. Ginger tea is also very helpful!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Screenshots 
        title="Experience the Mobile Interface"
        tagline="App Screenshots"
        description="Interact with the phone simulator below to check out the clean UI and medical dashboard details."
        screens={appScreens}
      />
      <Benefits 
        title="Why Expecting Parents Trust Us"
        tagline="Benefits"
        description="We combine smart tech with absolute care to bring peace of mind throughout your nine-month path."
        benefitsList={benefitsList}
      />
      <Testimonials
  tagline="Success Stories"
  title="Hear From Our Parents"
  description="Real feedback from mothers tracking their journey."
  reviews={reviews}
/>

<FAQ
  title="Frequently Asked Questions"
  tagline="FAQ Support"
  description="Find direct answers to common questions about setting up your account, dad mode, and security."
  faqs={faqsList}
/>

<Download
  heading="Start Your Healthy Pregnancy Journey"
  subtitle="Download Allobaby on Android and start tracking baby growth with complete peace of mind."
  brandName="Allobaby"
  googlePlayUrl="https://play.google.com/store/apps/details?id=com.savemom.allobaby&hl=en-US"
/>

<Footer
  brand="Allobaby"
  description="Empowering expecting mothers with smart healthcare dashboards, weekly updates, and comprehensive maternal guidelines."
  sisterProduct="Allokonnect"
  sisterProductUrl="/allokonnect"
/>

</div>
);
}