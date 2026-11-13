import { useEffect, useState, type ReactNode } from 'react'

type IconName =
  | 'arrow'
  | 'calendar'
  | 'check'
  | 'chevron'
  | 'discover'
  | 'heart'
  | 'menu'
  | 'message'
  | 'people'
  | 'spark'
  | 'trend'
  | 'x'

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4M16 3v4M3 10h18" /><path d="m8 15 2 2 5-5" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m8 10 4 4 4-4" />,
  discover: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" /></>,
  heart: <path d="M20.8 5.8a5 5 0 0 0-7.1 0L12 7.5l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-8.1a5 5 0 0 0 0-7.1Z" />,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" /><path d="M8 9h8M8 13h5" /></>,
  people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
  spark: <><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></>,
  trend: <><path d="M3 18 9 12l4 4 8-9" /><path d="M15 7h6v6" /></>,
  x: <path d="m6 6 12 12M18 6 6 18" />,
}

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{iconPaths[name]}</svg>
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`logo ${light ? 'logo--light' : ''}`} href="#top" aria-label="Avallen home">
      <svg viewBox="0 0 42 42" aria-hidden="true"><path d="M7 30C12 14 25 8 35 11c-2 12-10 23-25 22" /><path d="M11 31c6-8 12-13 21-17" /></svg>
      <span>Avallen</span>
    </a>
  )
}

const teacherFeatures = [
  { icon: 'calendar' as const, title: 'Classes, without the clutter', text: 'Create one-off sessions or recurring classes, manage spaces and keep your whole schedule in view.' },
  { icon: 'people' as const, title: 'Know your community', text: 'Thoughtful student profiles, registers, notes and milestones help every person feel remembered.' },
  { icon: 'trend' as const, title: 'Grow with confidence', text: 'See what’s working, fill quiet sessions and reconnect with students—without becoming a marketer.' },
  { icon: 'message' as const, title: 'Stay in touch, naturally', text: 'Useful reminders and class messages reach the right people at the right moment.' },
  { icon: 'discover' as const, title: 'Be easier to discover', text: 'A beautiful public page makes your approach, classes and locations simple to find and book.' },
  { icon: 'spark' as const, title: 'The details, taken care of', text: 'Packs, policies, documents and waitlists live together, so your energy stays with your teaching.' },
]

const questions = [
  ['Who is Avallen for?', 'Avallen is being built for independent yoga and Pilates instructors—from teachers running a few weekly classes to established practitioners working across several spaces.'],
  ['Can students use Avallen too?', 'Yes. Students will be able to discover local independent teachers, save favourites, book classes and keep every booking in one calm place.'],
  ['When will the app be available?', 'Avallen is currently in development and will be coming to the App Store. Launch updates and early access details will be shared here.'],
  ['Will it work for both yoga and Pilates?', 'Absolutely. The experience is designed around the real needs of independent yoga and Pilates teaching, with enough flexibility for different class styles and ways of working.'],
]

function PhoneMockup() {
  return (
    <div className="phone" aria-label="Preview of the Avallen teaching dashboard">
      <div className="phone__bar"><span>9:41</span><i /><span>•••</span></div>
      <div className="phone__content">
        <div className="phone__hello"><div><small>MONDAY, MAY 12</small><h3>Good morning,<br />Maya.</h3></div><span className="avatar" /></div>
        <div className="phone__next">
          <div className="phone__label"><span>NEXT CLASS</span><b>In 2 hours</b></div>
          <h4>Slow Sunday Flow</h4>
          <p>9:30 AM · Wild Bloom Studio</p>
          <div className="attendees"><span /><span /><span /><b>+9</b><em>12 booked</em></div>
        </div>
        <div className="phone__stats"><div><small>THIS MONTH</small><strong>18</strong><span>classes taught</span></div><div><small>YOUR COMMUNITY</small><strong>84</strong><span>active students</span></div></div>
        <div className="phone__heading"><h4>Your week</h4><span>View calendar</span></div>
        {[['12', 'MON', 'Morning Vinyasa', '8:00 AM'], ['13', 'TUE', 'Strong & Centered', '6:00 PM']].map(([date, day, name, time]) => (
          <div className="phone__class" key={name}><div><b>{date}</b><small>{day}</small></div><span><strong>{name}</strong><small>{time} · 60 min</small></span><i>›</i></div>
        ))}
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openQuestion, setOpenQuestion] = useState<number | null>(0)

  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <div id="top">
      <header className="site-header">
        <div className="shell header__inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#for-instructors">For instructors</a>
            <a href="#for-students">For students</a>
            <a href="#about">Our approach</a>
            <a href="#faq">FAQs</a>
          </nav>
          <a className="pill pill--small desktop-cta" href="#coming-soon">Coming soon</a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}><Icon name={menuOpen ? 'x' : 'menu'} /></button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{[['For instructors', '#for-instructors'], ['For students', '#for-students'], ['Our approach', '#about'], ['FAQs', '#faq']].map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
      </header>

      <main>
        <section className="hero">
          <div className="hero__orb hero__orb--one" /><div className="hero__orb hero__orb--two" />
          <div className="shell hero__grid">
            <div className="hero__copy reveal">
              <p className="eyebrow">Made for independent movement teachers</p>
              <h1>Your practice,<br /><em>beautifully</em> organised.</h1>
              <p className="hero__intro">Avallen brings your classes, bookings and community into one calm place—so you can spend less time on admin, and more time teaching.</p>
              <div className="hero__actions"><a className="pill" href="#for-instructors">See what’s inside <Icon name="arrow" size={18} /></a><a className="text-link" href="#for-students">I’m looking for a class <Icon name="arrow" size={16} /></a></div>
              <div className="launch-note"><span><Icon name="spark" size={15} /></span><p><strong>Thoughtfully in the making.</strong><br />Coming soon to the App Store.</p></div>
            </div>
            <div className="hero__visual">
              <div className="hero__arch"><img src="https://images.unsplash.com/photo-1761034114082-c2d63456a82a?auto=format&fit=crop&w=1200&q=88" alt="A welcoming yoga class practising together in a light-filled studio" /></div>
              <div className="hero__phone"><PhoneMockup /></div>
              <div className="floating-card"><span className="floating-card__icon"><Icon name="check" size={16} /></span><div><strong>You’re all set</strong><small>12 students confirmed</small></div></div>
            </div>
          </div>
          <div className="shell trust-line"><span>BUILT AROUND THE WAY YOU REALLY TEACH</span><i /><p>Yoga</p><i /><p>Pilates</p><i /><p>Your own way</p></div>
        </section>

        <section className="intro-section" id="about">
          <div className="shell intro-grid">
            <p className="section-number">01 — WHY MOVEWELL</p>
            <div><h2>Teaching is personal.<br /><em>Your tools should be too.</em></h2><p>Independent teaching gives you the freedom to create something meaningful. But the admin can feel scattered across calendars, messages, spreadsheets and booking links.</p><p>Avallen is designed to bring the practical parts together—quietly, beautifully, and without getting between you and your students.</p></div>
          </div>
        </section>

        <section className="features-section" id="for-instructors">
          <div className="shell">
            <div className="section-heading"><div><p className="eyebrow eyebrow--light">Everything in one place</p><h2>Run your teaching business.<br /><em>Keep it feeling human.</em></h2></div><p>Simple tools that take care of the work around your classes, while leaving you fully in control.</p></div>
            <div className="feature-grid">
              {teacherFeatures.map((feature, index) => <article className="feature-card" key={feature.title}><div className="feature-card__top"><span><Icon name={feature.icon} /></span><small>0{index + 1}</small></div><h3>{feature.title}</h3><p>{feature.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <div className="shell showcase-grid">
            <div className="showcase-photo"><img src="https://images.unsplash.com/photo-1747239685045-fcbcf98985db?auto=format&fit=crop&w=1200&q=88" alt="Pilates instructor guiding a reformer session" /><div className="photo-caption"><span>Built for movement</span><p>Yoga · Mat Pilates · Reformer</p></div></div>
            <div className="showcase-copy">
              <p className="section-number">02 — YOUR STUDIO, IN YOUR POCKET</p>
              <h2>A clearer view of<br /><em>what matters.</em></h2>
              <p>Start the day knowing what’s ahead. See bookings at a glance, welcome familiar faces, and spot the small opportunities that help your practice grow.</p>
              <ul>{['A calm, useful teaching dashboard', 'Registers and student notes when you need them', 'Simple insights without overwhelming reports', 'Helpful nudges, never noisy notifications'].map(item => <li key={item}><span><Icon name="check" size={14} /></span>{item}</li>)}</ul>
              <a className="text-link text-link--dark" href="#coming-soon">Follow the journey <Icon name="arrow" size={16} /></a>
            </div>
            <div className="showcase-device"><PhoneMockup /></div>
          </div>
        </section>

        <section className="student-section" id="for-students">
          <div className="shell">
            <div className="student-heading"><div><p className="eyebrow">For students, too</p><h2>Find a practice<br /><em>that feels like yours.</em></h2></div><p>Avallen makes it easier to discover independent teachers, book a class nearby, and keep coming back to the people and places you love.</p></div>
            <div className="student-layout">
              <div className="class-card"><div className="class-card__image"><img src="https://images.unsplash.com/photo-1651077920873-ac1be1b82290?auto=format&fit=crop&w=1000&q=88" alt="A small independent yoga class" /><button aria-label="Save class"><Icon name="heart" size={19} /></button><span>4 spots left</span></div><div className="class-card__body"><small>VINYASA FLOW</small><div><h3>Slow Sunday Flow</h3><strong>$18</strong></div><p>with Maya Chen · Wild Bloom Studio</p><hr /><p><b>Sun, 9:30 AM</b> · 60 min · 0.8 mi</p></div></div>
              <div className="student-benefits">
                {[['01', 'Discover local, independent teachers', 'Search by practice, place and time—not by who has the biggest marketing budget.'], ['02', 'Book without the back-and-forth', 'Clear class details, simple booking and everything you need before you arrive.'], ['03', 'Return to what you love', 'Save favourites, see your upcoming bookings and build a practice that lasts.']].map(([num, title, text]) => <article key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="shell quote-inner"><span className="quote-mark">“</span><blockquote>We believe the best technology should feel less like software—and more like having a little more space in your day.</blockquote><p>THE THINKING BEHIND MOVEWELL</p></div>
        </section>

        <section className="faq-section" id="faq">
          <div className="shell faq-grid"><div><p className="section-number">03 — GOOD TO KNOW</p><h2>A few questions,<br /><em>answered.</em></h2><p className="faq-intro">Avallen is still growing. Here’s what we can share for now.</p></div><div className="accordions">{questions.map(([question, answer], index) => <article className={openQuestion === index ? 'accordion accordion--open' : 'accordion'} key={question}><button onClick={() => setOpenQuestion(openQuestion === index ? null : index)} aria-expanded={openQuestion === index}><span>{question}</span><i><Icon name="chevron" size={18} /></i></button><div><p>{answer}</p></div></article>)}</div></div>
        </section>

        <section className="coming-section" id="coming-soon">
          <div className="coming-shape coming-shape--one" /><div className="coming-shape coming-shape--two" />
          <div className="shell coming-inner"><div className="app-mark"><svg viewBox="0 0 42 42"><path d="M7 30C12 14 25 8 35 11c-2 12-10 23-25 22" /><path d="M11 31c6-8 12-13 21-17" /></svg></div><p className="eyebrow eyebrow--light">A calmer way to run your practice</p><h2>Move with purpose.<br /><em>Teach freely.</em></h2><p>Avallen is coming soon to the App Store.<br />We can’t wait to share it with you.</p><div className="store-badge"><span>●</span><div><small>COMING SOON ON THE</small><strong>App Store</strong></div></div></div>
        </section>
      </main>

      <footer>
        <div className="shell footer-main"><div><Logo light /><p>Made thoughtfully for independent<br />yoga and Pilates instructors.</p></div><div className="footer-links"><div><small>EXPLORE</small><a href="#for-instructors">For instructors</a><a href="#for-students">For students</a><a href="#about">Our approach</a></div><div><small>INFO</small><a href="#faq">FAQs</a><a href="#coming-soon">Launch updates</a></div></div></div>
        <div className="shell footer-bottom"><p>© {new Date().getFullYear()} Avallen. All rights reserved.</p><p>Move gently. Build steadily.</p></div>
      </footer>
    </div>
  )
}

export default App
