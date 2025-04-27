import React from "react";
import "../styles/ZindagiGo.css";
import HeroImage from "/images/zindagigo1.png"; 
import heart from "/images/heart.png"; 

const stepsData = [
  {
    title: "User Research:",
    description: "Interviews with elderly users and caregivers helped identify needs and pain points."
  },
  {
    title: "Wireframing:",
    description: "Focused on single-task screens — one action per screen whenever possible."
  },
  {
    title: "Prototyping and Testing:",
    description: "Conducted usability sessions to fine-tune button sizing, tap targets, and navigation clarity."
  },
  {
    title: "Iteration:",
    description: "Based on feedback, minimized jargon, added optional voice instructions, and adjusted color contrast ratios."
  }
];

const ZindagiGo = () => {
  return (
    <div className="zindagi-page">

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-image">
          <img src={HeroImage} alt="Zindagi Go Logo" />
        </div>
        <div className="hero-text">
          <h1>ZINDAGI GO</h1>
          <p>
            An intuitive companion app empowering the elderly to live
            independently, safely, and joyfully.
          </p>
        </div>
      </div>

      {/* Page Background Section */}
      <div className="page-background">

        {/* Overview Section */}
        <div className="overview-section">
          <div className="overview-left">
            <h2>Overview</h2>
            <p>
              Zindagi Go is a mobile application designed to bridge the gap between
              technology and the elderly. By combining clear functionality with
              emotional sensitivity, the app supports day-to-day living with features
              like medication reminders, health tracking, SOS emergency help,
              entertainment, financial management, and community engagement — all
              tailored for effortless use.
            </p>
          </div>

          <div className="overview-right">
            <h3>My Role</h3>
            <p>
              UI/UX Designer — responsible for end-to-end user experience, interface
              design, typography, color system, iconography, usability testing, and
              iterative improvements.
            </p>

            <h3>Tools Used</h3>
            <ul>
              <li>Figma (Wireframing, Prototyping)</li>
              <li>Adobe Illustrator (Icon Design, SVGs)</li>
              <li>React Native (in collaboration with the development team)</li>
            </ul>
          </div>
        </div>

        {/* Problem - Solution Section */}
        <div className="problem-solution-section">
          <div className="problem-box">
            <div className="heading-with-icon">
              <img src="/images/sentiment_sad.svg" alt="Problem Icon" className="icon" />
              <h2>Problem</h2>
            </div>
            <p>
              Older adults often face technological barriers that limit their independence. Complex interfaces, overwhelming options, and a lack of personalization make many apps difficult to use. They need simple, trustworthy, emotionally intelligent tools that respect their autonomy without making them feel dependent.
            </p>
          </div>

          <div className="arrow-wrapper">
            <img src="/images/arrow.svg" alt="Arrow" className="arrow-icon" />
          </div>

          <div className="solution-box">
            <div className="heading-with-icon">
              <img src="/images/favorite1.svg" alt="Solution Icon" className="icon" />
              <h2>Solution</h2>
            </div>
            <p><strong>Zindagi Go was built to be:</strong></p>
            <ul className="solution-list">
              <li>
                <span className="bullet-icon">
                  <img src="/images/favorite.svg" alt="Bullet Icon" className="icon2" />
                </span>
                Simple, with a highly readable layout and minimal cognitive load.
              </li>
              <li>
                <span className="bullet-icon">
                  <img src="/images/favorite.svg" alt="Bullet Icon" className="icon2" />
                </span>
                Empowering, giving users control over their health, activities, and safety.
              </li>
              <li>
                <span className="bullet-icon">
                  <img src="/images/favorite.svg" alt="Bullet Icon" className="icon2" />
                </span>
                Emotionally intelligent, fostering confidence, connection, and independence.
              </li>
              <li>
                <span className="bullet-icon">
                  <img src="/images/favorite.svg" alt="Bullet Icon" className="icon2" />
                </span>
                Secure, with sensitive features (like banking) designed with privacy-first thinking.
              </li>
            </ul>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="key-features-section">
          <h2 className="key-features-title">Key Features:</h2>

          <div className="features-scroll">
            <div className="feature-card">
              <h3>Medication Reminders</h3>
              <p>Set up daily or weekly medicine schedules with clear, non-intrusive alerts.</p>
            </div>

            <div className="feature-card">
              <h3>Health Tracker</h3>
              <p>Monitor sleep, step counts, and vital records — presented visually and simply.</p>
            </div>

            <div className="feature-card">
              <h3>Emergency SOS</h3>
              <p>Voice-activated SOS that instantly notifies pre-set emergency contacts.</p>
            </div>

            <div className="feature-card">
              <h3>Dual Accounts (Elder + Caregiver)</h3>
              <p>Caregivers can assist without accessing private features like finances.</p>
            </div>

            <div className="feature-card">
              <h3>Financial Dashboard</h3>
              <p>Hidden banking tracker for pensions and savings, designed for security and ease.</p>
            </div>

            <div className="feature-card">
              <h3>Entertainment Hub</h3>
              <p>News, cooking videos, memory games, and hobby content, curated for seniors.</p>
            </div>

            <div className="feature-card">
              <h3>Personalized Interface</h3>
              <p>Adjustable font sizes, a high-contrast mode, multilingual chatbot, and accessibility tools like screen zoom and flashlight.</p>
            </div>
          </div>
        </div>

        {/* ✅ Visual Identity Section */}
        <div className="visual-identity-section">

        <h2 className="visual-identity-title">Visual Identity for Zindagi Go</h2>
        <div className="visual-identity-container">
          

          <div className="card">
            <div className="card-content">
              <h2 className="card-title">Typography</h2>
              <p className="card-text">
                <strong>Primary Typeface: Poppins</strong><br />
                A clean, modern sans-serif font selected for its high readability, especially important for senior users. Its rounded, friendly forms promote accessibility and a sense of approachability.<br /><br />
                <strong>Secondary Typeface: Lato</strong><br />
                Used to complement the primary font, Lato’s warm and stable structure helps maintain a professional yet inviting tone throughout the interface.
              </p>
            </div>
            <img src="/images/typo.svg" alt="Typography Example" className="card-svg-1" />
          </div>

          <div className="card">
            <div className="card-content">
              <h2 className="card-title">Color Palette</h2>
              <p className="card-text">
                A calming, pastel-based color system was developed to enhance visual comfort, reduce cognitive load, and support extended screen use.<br /><br />
                <strong>Primary Colors:</strong> Soft lavender, teal, and gentle pinks provide a serene and welcoming environment.<br /><br />
                <strong>Accent Colors:</strong> Warm coral tones are used strategically for alerts and calls-to-action, offering visibility without causing alarm or stress.<br /><br />
                <strong>Contrast:</strong> Strong contrast between text and background ensures that content remains highly legible, even for users with visual impairments.
              </p>
              <div className="color-palette">
                <h3 className ="subtitle-color">Hex Codes Used:</h3>
                <ul>
                  <li>
                    <strong>Primary Palette:</strong> #594087, #A176C8, #C6AEE0
                  </li>
                  <li>
                    <strong>Secondary Accents:</strong> #D4859E, #FFAFBD, #FFD5DD
                  </li> 
                  <li>
                    <strong>Success Indicators:</strong> #37775D, #7FC8AA
                  </li>
                  <li>
                    <strong>Alert  and action Colors:</strong> #FFC3A0, #2D2D2D
                  </li>
                </ul>
              </div>
            </div>
            <img src="/images/pallette.svg" alt="Color Palette" className="card-svg-2" />
          </div>

          <div className="card">
            <div className="card-content">
              <h2 className="card-title">Iconography</h2>
              <p className="card-text">
                <strong>Style:</strong> Line-based, minimalistic; icons use consistent stroke width and rounded edges for a friendly, easy, accessible feel.<br /><br />
                <strong>Visual Clarity:</strong> Designed with simplicity in mind to minimize cognitive load for senior users, ensuring fast recognition.<br /><br />
                <strong>Categories Covered:</strong> </p>
                <ul className="card-list">
                  <li>
                    <strong>Navigation:</strong> Home, Search, Settings, Back, Forward
                  </li>
                  <li>
                    <strong>Communication: </strong> Chat, Call, Notifications
                  </li>
                  <li>
                    <strong>Social Interaction: </strong> Profile, Friends, Community
                  </li>
                  <li>
                    <strong>Health & Wellness: </strong>Medication Reminder, Health Check, Emergency
                  </li>
                  <li>
                    <strong>Finance Management:</strong> Wallet, Transactions, Bills
                  </li>
                  </ul>
                <p className="card-text">
                <strong>Touch-Friendly:</strong> Icons optimized for touch screens with a minimum size of 44x44px to accommodate users with motor difficulties.<br /><br />
                <strong>Consistency:</strong>  All icons follow a uniform visual language to maintain harmony across the interface.
              </p>
            </div>
            <img src="/images/icons.svg" alt="Iconography" className="card-svg-3" />
          </div>
        </div>
        </div>

        <div className="process-highlights-container">
          <h2 className="process-title">Process Highlights</h2>

          <div className="process-wrapper">
            <div className="timeline-column">
              <img src="/images/timeline.svg" alt="Timeline" className="timeline-svg" />
            </div>

            <div className="steps-column">
              <div className="step-block">
                <p><strong>User Research:</strong> Interviews with elderly users and caregivers helped identify needs and pain points.</p>
              </div>
              <div className="step-block">
                <p><strong>Wireframing:</strong> Focused on single-task screens — one action per screen whenever possible.</p>
              </div>
              <div className="step-block">
                <p><strong>Prototyping and Testing:</strong> Conducted usability sessions to fine-tune button sizing, tap targets, and navigation clarity.</p>
              </div>
              <div className="step-block">
                <p><strong>Iteration:</strong> Based on feedback, minimized jargon, added optional voice instructions, and adjusted color contrast ratios.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="final-thoughts">
        <h2 className="final-thoughts-title">Final Thoughts</h2>
        <p className="final-thoughts-body">
          Designing for the elderly taught me that true usability is invisible — it's about removing barriers, not adding features.
          Zindagi Go was a project where I learned how empathy, clarity, and thoughtful interaction design can genuinely change lives.
        </p>
      </div>

      <div className="links-section">
        <h3 className="links-title">Links</h3>
        <ul>
          <li><a href="https://github.com/arpita-goel/ZindagiGo" target="_blank" rel="noopener noreferrer"><strong>Github repo</strong></a></li>
          <li><a href="https://www.youtube.com/watch?v=x6FV2Lsp5w0&t=17s" target="_blank" rel="noopener noreferrer"><strong>Youtube video</strong></a></li>
        </ul>
      </div>


      </div> {/* End of page-background */}


      
    </div>
  );
};

export default ZindagiGo;
