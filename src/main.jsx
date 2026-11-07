import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, CarFront, Check, Clock3, DollarSign, MapPin, Menu, ParkingSquare, ShieldCheck, Star, X } from 'lucide-react'
import './styles.css'

const steps = [
  { icon: MapPin, number: '01', title: 'Find your spot', text: 'See available private spaces around your destination, in real time.' },
  { icon: Clock3, number: '02', title: 'Book by the hour', text: 'Choose exactly when you need it. No monthly commitment, no guesswork.' },
  { icon: ShieldCheck, number: '03', title: 'Park with confidence', text: 'Your space is held for you. Arrive, park, and get on with your day.' },
]

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#top" className="brand" aria-label="ParkX home"><span className="brand-mark"><ParkingSquare size={19} strokeWidth={2.5} /></span>park<span>x</span></a>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#owners" onClick={() => setMenuOpen(false)}>List your space</a>
            <a href="#story" onClick={() => setMenuOpen(false)}>Why ParkX</a>
            <a className="nav-cta" href="#join" onClick={() => setMenuOpen(false)}>Get early access <ArrowUpRight size={16} /></a>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" /> Parking, reimagined for city life</div>
            <h1>Your space to<br /><em>go places.</em></h1>
            <p className="hero-lede">ParkX connects you with private parking spaces when you need them—and helps space owners turn empty hours into extra income.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#join">Find your spot <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#owners">I have a space <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-proof"><div className="avatar-stack"><span>AM</span><span>VL</span><span>IC</span><span>+</span></div><span><strong>1,200+</strong> people on the waitlist</span></div>
          </div>
          <div className="hero-visual" aria-label="Illustration of the ParkX parking map">
            <div className="sun-orb" />
            <div className="map-card">
              <div className="map-top"><span className="map-search"><MapPin size={15} /> Search an area</span><span className="map-filter">Filters <span>3</span></span></div>
              <svg className="map-lines" viewBox="0 0 500 480" preserveAspectRatio="none" aria-hidden="true">
                <path d="M-20 100 C100 160 80 20 210 65 S340 130 520 45" /><path d="M-30 265 C100 205 185 315 250 220 S400 185 530 255" /><path d="M35 500 C80 360 160 440 210 320 S360 370 500 300" /><path d="M150 -20 C180 100 250 115 290 210 S255 370 320 500" /><path d="M410 -20 C365 70 410 160 350 245 S390 390 420 500" />
              </svg>
              <div className="map-label label-a"><span><ParkingSquare size={15} /> 12 lei<span className="per-hour">/hr</span></span></div>
              <div className="map-label label-b"><span><ParkingSquare size={15} /> 8 lei<span className="per-hour">/hr</span></span></div>
              <div className="map-label label-c"><span><ParkingSquare size={15} /> 10 lei<span className="per-hour">/hr</span></span></div>
              <div className="you-are-here"><span className="pulse" /><span>You</span></div>
              <div className="map-location"><MapPin size={25} fill="currentColor" /></div>
              <div className="map-bottom"><span className="availability"><i /> 24 spots available nearby</span><span className="arrow-circle"><ArrowUpRight size={18} /></span></div>
            </div>
            <div className="floating-note"><div className="note-icon"><Check size={15} /></div><div><strong>Spot reserved</strong><small>Strada Ion Câmpineanu · 2h</small></div></div>
          </div>
        </section>

        <section className="ticker"><div className="ticker-inner"><span>PRIVATE SPOTS</span><span className="ticker-star">✳</span><span>FAIR PRICES</span><span className="ticker-star">✳</span><span>MORE TIME</span><span className="ticker-star">✳</span><span>LESS CIRCLING</span><span className="ticker-star">✳</span><span>PRIVATE SPOTS</span></div></section>

        <section className="section container" id="how-it-works">
          <div className="section-intro"><div><span className="section-kicker">The simple way to park</span><h2>Stop searching.<br /><em>Start arriving.</em></h2></div><p>Street parking is a gamble. Garages are expensive. ParkX gives you a reserved private spot close to where you actually need to be.</p></div>
          <div className="steps-grid">{steps.map(({ icon: Icon, number, title, text }) => <article className="step-card" key={number}><div className="step-top"><span className="step-icon"><Icon size={22} /></span><span className="step-number">{number}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="story-section" id="story"><div className="container story-grid"><div className="story-graphic"><div className="graphic-ring ring-one" /><div className="graphic-ring ring-two" /><div className="graphic-car"><CarFront size={64} strokeWidth={1.3} /></div><div className="graphic-tag tag-top"><MapPin size={15} /> 3 min walk</div><div className="graphic-tag tag-bottom"><Star size={14} fill="currentColor" /> 4.9 rated</div></div><div className="story-copy"><span className="section-kicker">Designed around real life</span><h2>More than a parking spot. <em>A better day.</em></h2><p>Every minute spent circling the block is a minute taken from somewhere else. ParkX makes the last part of your journey feel easy—from a meeting downtown to dinner with friends.</p><div className="stat-row"><div><strong>01</strong><span>Guaranteed<br />arrival</span></div><div><strong>02</strong><span>Pay only<br />when you park</span></div><div><strong>03</strong><span>Built for<br />your neighborhood</span></div></div></div></div></section>

        <section className="owners-section" id="owners"><div className="container owner-grid"><div className="owner-copy"><span className="section-kicker">For space owners</span><h2>Your empty hours<br />can <em>pay off.</em></h2><p>That driveway, garage, or apartment spot doesn’t have to sit empty while you’re away. Share it on your terms and create a little extra income, effortlessly.</p><ul><li><span><Check size={15} /></span>Choose when your space is available</li><li><span><Check size={15} /></span>Set your own hourly price</li><li><span><Check size={15} /></span>Get paid securely, automatically</li></ul><a className="button button-dark" href="#join">List your space <ArrowUpRight size={17} /></a></div><div className="earn-card"><div className="earn-header"><span><DollarSign size={18} /> Your potential</span><span className="earn-period">per month</span></div><div className="earn-amount">+ 1,440 <small>RON</small></div><div className="earn-sub">Based on 6 hours/day · 20 days/month</div><div className="earn-chart"><span style={{height:'35%'}} /><span style={{height:'48%'}} /><span style={{height:'45%'}} /><span style={{height:'65%'}} /><span style={{height:'59%'}} /><span style={{height:'78%'}} /><span className="active" style={{height:'92%'}} /></div><div className="earn-footer"><span><i /> Bookings this month</span><strong>+24.8%</strong></div></div></div></section>

        <section className="join-section container" id="join"><div className="join-card"><div><span className="section-kicker">Coming soon to Bucharest</span><h2>Be first in<br /><em>your neighborhood.</em></h2><p>We’re building the easiest way to park in the city. Join the waitlist for launch updates and early access.</p></div><div className="join-form-wrap">{submitted ? <div className="success-message"><span><Check size={22} /></span><h3>You’re on the list.</h3><p>We’ll be in touch soon. Thanks for believing in better parking.</p></div> : <form className="join-form" onSubmit={handleSubmit}><label htmlFor="email">Get launch updates</label><div className="input-row"><input id="email" type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} required /><button type="submit" aria-label="Join waitlist"><ArrowUpRight size={20} /></button></div><small>No spam. Just useful updates from ParkX.</small></form>}</div></div></section>
      </main>

      <footer className="footer"><div className="container footer-inner"><a href="#top" className="brand"><span className="brand-mark"><ParkingSquare size={19} strokeWidth={2.5} /></span>park<span>x</span></a><span className="footer-note">Parking, made personal.</span><div className="footer-links"><a href="mailto:hello@parkx.app">Contact</a><a href="#top">Instagram</a><span>© 2026 ParkX</span></div></div></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
