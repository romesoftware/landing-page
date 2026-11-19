import { useEffect, useRef, useState, type ReactNode } from 'react'

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
      <img className="logo__mark" src={light ? '/logo-light.png' : '/logo.png'} alt="" />
      <span className="logo__word">Avallen</span>
    </a>
  )
}

function BrandMark({ light = false }: { light?: boolean }) {
  return <img className="brand-mark" src={light ? '/logo-light.png' : '/logo.png'} alt="" aria-hidden="true" />
}

const API_BASE = 'https://api.avallen.studio/api'

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

const storyScreens = [
  { id: 'teaching',   tab: 'Teaching',   icon: 'trend' as IconName,    eyebrow: 'Teaching',   title: 'Your studio insights, at hand', copy: 'Revenue, class fill and returning students — the numbers that matter, on one calm dashboard.' },
  { id: 'discover',   tab: 'Discover',   icon: 'discover' as IconName, eyebrow: 'Discover',   title: 'Every teacher, a tap away', copy: 'Students browse local independent teachers, check real availability and book in seconds.' },
  { id: 'favourites', tab: 'Favourites', icon: 'heart' as IconName,    eyebrow: 'Favourites', title: 'The teachers they love, kept close', copy: 'One tap saves a teacher or a class — so your regulars are never far away.' },
  { id: 'bookings',   tab: 'Bookings',   icon: 'calendar' as IconName, eyebrow: 'Bookings',   title: 'Bookings that work offline', copy: 'Tickets, addresses and check-in codes live on the phone — even in a basement studio with no signal.' },
  { id: 'profile',    tab: 'Profile',    icon: 'people' as IconName,   eyebrow: 'Profile',    title: 'Everything personal, in one place', copy: 'Packs, payments, preferences and progress — quietly organised in the background.' },
]

function StoryScreen({ id, on }: { id: string; on: boolean }) {
  return (
    <div className={`story-screen story-screen--${id} ${on ? 'is-on' : ''}`} aria-hidden={!on}>
      {id === 'teaching' && (
        <>
          <div className="ss-hello"><small>MONDAY, MAY 12</small><h4>Good morning, Maya.</h4></div>
          <div className="ss-rev"><small>THIS WEEK</small><strong>£1,240</strong><span>+18% vs last week</span>
            <div className="ss-spark">{[38, 55, 30, 70, 52, 88, 64].map(h => <i key={h} style={{ height: `${h}%` }} />)}</div>
          </div>
          <div className="ss-tiles"><div><small>AVG. CLASS FILL</small><strong>82%</strong></div><div><small>RETURNING</small><strong>34</strong></div></div>
          <div className="ss-row"><span><b>Slow Sunday Flow</b><small>Tomorrow · 9:30 · 12 booked</small></span><i>›</i></div>
          <div className="ss-row"><span><b>Power Pilates</b><small>Tue · 6:00pm · Waitlist 3</small></span><i>›</i></div>
        </>
      )}
      {id === 'discover' && (
        <>
          <h4 className="ss-title">Discover</h4>
          <div className="ss-search"><Icon name="discover" size={9} />Search teachers, classes…</div>
          <div className="ss-chips"><span className="on">All</span><span>Yoga</span><span>Pilates</span><span>Nearby</span></div>
          {[['Sunrise Yoga Flow', 'Wild Bloom Studio', '£12', '6 left'], ['Core Pilates', 'Evoke', '£14', '3 left']].map(([n, v, p, s]) => (
            <div className="ss-class" key={n}><div className="ss-class__img" /><span><strong>{n}</strong><small>{v} · {s} spaces</small></span><b>{p}</b></div>
          ))}
        </>
      )}
      {id === 'favourites' && (
        <>
          <h4 className="ss-title">Favourites</h4>
          {[['MB', 'Maya Bloom', 'Yoga · Tue 6pm'], ['RT', 'Rob Turner', 'Pilates · Sat 9am'], ['AL', 'Ana Lopez', 'Yoga · Sun 10am']].map(([ini, n, d]) => (
            <div className="ss-fav" key={n}><span className="ss-fav__ava">{ini}</span><span><strong>{n}</strong><small>{d}</small></span><Icon name="heart" size={10} /></div>
          ))}
          <p className="ss-note">3 saved teachers · 2 saved classes</p>
        </>
      )}
      {id === 'bookings' && (
        <>
          <h4 className="ss-title">Bookings</h4>
          <div className="ss-book"><span className="ss-book__date"><b>18</b><small>SAT</small></span><span><strong>Slow Sunday Flow</strong><small>9:30am · Wild Bloom Studio</small></span><em>Checked in</em></div>
          <div className="ss-book"><span className="ss-book__date"><b>21</b><small>TUE</small></span><span><strong>Core Pilates</strong><small>6:00pm · Evoke</small></span><em>Booked</em></div>
          <div className="ss-offline"><Icon name="check" size={9} />Works offline — no signal needed</div>
        </>
      )}
      {id === 'profile' && (
        <>
          <div className="ss-profile"><span className="ss-profile__ava">MR</span><div><strong>Maya Reyes</strong><small>maya@example.com</small></div></div>
          {[['My packs', '2 active'], ['Payments', ''], ['Preferences', ''], ['My progress', '']].map(([l, v]) => (
            <div className="ss-prow" key={l}><span>{l}</span><small>{v}</small><i>›</i></div>
          ))}
        </>
      )}
    </div>
  )
}

function ScrollStory() {
  const [active, setActive] = useState(0)
  const stepsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const mid = window.innerHeight / 2
      let best = 0, bestDist = Infinity
      stepsRef.current.forEach((el, i) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const d = Math.abs(r.top + r.height / 2 - mid)
        if (d < bestDist) { bestDist = d; best = i }
      })
      setActive(best)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="story-section">
      <div className="shell story-grid">
        <div className="story-steps">
          {storyScreens.map((s, i) => (
            <div key={s.id} data-step={i} ref={el => { stepsRef.current[i] = el }} className={`story-step ${active === i ? 'is-active' : ''}`}>
              <p className="eyebrow">{s.eyebrow}</p>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
            </div>
          ))}
        </div>
        <div className="story-visual">
          <div className="phone story-phone" aria-label="The Avallen app, cycling through its main screens">
            <div className="phone__bar"><span>9:41</span><i /><span>•••</span></div>
            <div className="story-screens">
              {storyScreens.map((s, i) => <StoryScreen key={s.id} id={s.id} on={active === i} />)}
            </div>
            <div className="story-tabs">
              {storyScreens.map((s, i) => (
                <span key={s.id} className={active === i ? 'is-on' : ''}><Icon name={s.icon} size={11} />{s.tab}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type Avail = 'idle' | 'checking' | 'free' | 'taken' | 'invalid'

type Claim = { state: 'idle' | 'submitting' | 'done' | 'error'; message: string }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openQuestion, setOpenQuestion] = useState<number | null>(0)

  // "Reserve your URL" form
  const [handle, setHandle] = useState('')
  const [avail, setAvail] = useState<Avail>('idle')
  const [claimName, setClaimName] = useState('')
  const [claimEmail, setClaimEmail] = useState('')
  const [claimPhone, setClaimPhone] = useState('')
  const [claimCompany, setClaimCompany] = useState('') // honeypot
  const [disciplines, setDisciplines] = useState<string[]>([])
  const [pickedDiscs, setPickedDiscs] = useState<string[]>([])
  const [claim, setClaim] = useState<Claim>({ state: 'idle', message: '' })
  const [modalItems, setModalItems] = useState<string[] | null>(null) // missing-field modal
  const checkTimer = useRef<number | undefined>(undefined)
  const modalRef = useRef<HTMLDivElement>(null)
  const submitRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  // Live availability check, debounced while they type.
  useEffect(() => {
    window.clearTimeout(checkTimer.current)
    if (!handle) { setAvail('idle'); return }
    if (!/^[a-z0-9-]{3,40}$/.test(handle)) { setAvail('invalid'); return }
    setAvail('checking')
    checkTimer.current = window.setTimeout(async () => {
      try {
        const res = await fetch(`${API_BASE}/handles/${handle}`)
        // 200 = taken, 404 = free; anything else (429/5xx) is unknown - don't block the submit
        setAvail(res.status === 404 ? 'free' : res.ok ? 'taken' : 'idle')
      } catch {
        setAvail('idle') // offline/API down - the submit still validates server-side
      }
    }, 400)
    return () => window.clearTimeout(checkTimer.current)
  }, [handle])

  // Move focus into the modal when it opens, back to the button when it closes.
  useEffect(() => {
    if (modalItems) {
      modalRef.current?.focus()
      const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalItems(null) }
      window.addEventListener('keydown', onKey)
      return () => window.removeEventListener('keydown', onKey)
    }
  }, [modalItems])

  const closeModal = () => { setModalItems(null); submitRef.current?.focus() }

  // Discipline choices come from the API - same list as instructor signup.
  useEffect(() => {
    fetch(`${API_BASE}/disciplines`)
      .then(r => r.ok ? r.json() : [])
      .then((rows: { name: string }[]) => setDisciplines(rows.map(r => r.name)))
      .catch(() => {}) // chips just don't render if the API's down
  }, [])

  const toggleDisc = (d: string) =>
    setPickedDiscs(cur => cur.includes(d) ? cur.filter(x => x !== d) : [...cur, d])

  const submitClaim = async (e: React.FormEvent) => {
    e.preventDefault()
    if (claim.state === 'submitting') return

    // Polite modal for anything missing, instead of browser tooltips.
    const missing: string[] = []
    if (!claimName.trim()) missing.push('your name')
    if (!claimEmail.trim()) missing.push('an email address')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(claimEmail.trim())) missing.push('a valid email address')
    if (disciplines.length && !pickedDiscs.length) missing.push('at least one discipline you teach')
    if (!handle) missing.push('the handle you’d like')
    else if (avail === 'invalid') missing.push('a handle of 3+ letters, numbers or hyphens')
    else if (avail === 'taken') missing.push('a handle that’s still free — try another')
    if (missing.length) { setModalItems(missing); return }

    setClaim({ state: 'submitting', message: '' })
    try {
      const res = await fetch(`${API_BASE}/handle-claims`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: claimName, email: claimEmail, handle, disciplines: pickedDiscs, phone: claimPhone || undefined, company: claimCompany }),
      })
      if (res.ok) {
        setClaim({ state: 'done', message: '' })
        setAvail('idle')
      } else {
        const data = await res.json().catch(() => ({}))
        setClaim({ state: 'error', message: (data as { error?: string }).error ?? 'Something went wrong — try again' })
      }
    } catch {
      setClaim({ state: 'error', message: 'Could not reach the server — try again in a moment' })
    }
  }

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
            <p className="section-number">01 — WHY AVALLEN</p>
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

        <ScrollStory />

        <section className="matrix-section">
          <div className="shell">
            <div className="section-heading section-heading--dark"><div><p className="eyebrow">A closer look</p><h2>The complete<br /><em>toolkit.</em></h2></div><p>No add-on marketplace, no tiered feature gates. The whole toolkit, in one place.</p></div>
            <div className="matrix-grid">
              {([
                ['Plan & run', ['Recurring classes & one-off sessions', 'Retreats with deposits & split payments', 'Venues, photos & private-location handling', 'Registers, student notes & attendance']],
                ['Book & get paid', ['Card payments paid straight to you via Stripe', 'Class packs & bundles students can buy ahead', 'Automatic waitlists when classes fill', 'Refunds & cancellation policies built in']],
                ['Grow & connect', ['Your own public page — avallen.studio/you', 'Students discover you on search & map', 'Familiar faces, milestones & reconnect nudges', 'Referral tracking & revenue insights at a glance']],
              ]).map(([col, items]) => (
                <div className="matrix-col" key={col as string}>
                  <h3>{col}</h3>
                  <ul>{(items as string[]).map(item => <li key={item}><span><Icon name="check" size={13} /></span>{item}</li>)}</ul>
                </div>
              ))}
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
              <div className="class-card"><div className="class-card__image"><img src="https://images.unsplash.com/photo-1651077920873-ac1be1b82290?auto=format&fit=crop&w=1000&q=88" alt="A small independent yoga class" /><button aria-label="Save class"><Icon name="heart" size={19} /></button><span>4 spots left</span></div><div className="class-card__body"><small>VINYASA FLOW</small><div><h3>Slow Sunday Flow</h3><strong>£18</strong></div><p>with Maya Chen · Wild Bloom Studio</p><hr /><p><b>Sun, 9:30 AM</b> · 60 min · 0.8 mi</p></div></div>
              <div className="student-benefits">
                {[['01', 'Discover local, independent teachers', 'Search by practice, place and time—not by who has the biggest marketing budget.'], ['02', 'Book without the back-and-forth', 'Clear class details, simple booking and everything you need before you arrive.'], ['03', 'Return to what you love', 'Save favourites, see your upcoming bookings and build a practice that lasts.']].map(([num, title, text]) => <article key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="shell quote-inner"><span className="quote-mark">“</span><blockquote>Most software is aimed at gyms, this genuinely looks like it’s built to help instructors grow their business, and I’m excited about it</blockquote><div className="quote-attrib"><span className="quote-avatar"><Icon name="spark" size={15} /></span><p>BETA INSTRUCTOR</p></div></div>
        </section>

        <section className="founder-section">
          <div className="shell founder-grid">
            <div className="founder-photo" aria-label="Portrait of Rob Foster, founder of Avallen">
              <span className="founder-photo__monogram">RF</span>
              <div className="founder-photo__badge"><span><BrandMark light /></span></div>
            </div>
            <div className="founder-copy">
              <p className="section-number">03 — MADE BY A PERSON, NOT A PLATFORM</p>
              <h2>Built by someone who<br /><em>gets the work.</em></h2>
              <p>Avallen is being built by Rob Foster, working directly with independent instructors at every step. No roadmap decided in a boardroom—each feature is shaped around how small teaching businesses actually run.</p>
              <p>Small, considered and built to last. If there’s something you wish your current tools did, we’d genuinely love to hear it.</p>
              <a className="text-link text-link--dark" href="mailto:hello@avallen.studio">Say hello — hello@avallen.studio <Icon name="arrow" size={16} /></a>
            </div>
          </div>
        </section>

        <section className="reserve-section" id="reserve">
          <div className="shell">
            <div className="reserve-card">
              <div className="reserve-copy">
                <p className="section-number">04 — CLAIM YOUR SPOT</p>
                <h2>Reserve your<br /><em>URL now.</em></h2>
                <p>Every teacher gets a public page at <b>avallen.studio/you</b> — searchable, shareable, and unmistakably yours. The good names will go quickly, so grab yours while it’s still there.</p>
                <p>Leave your details and we’ll hold it for you, and reach out the moment we launch.</p>
              </div>
              {claim.state === 'done' ? (
                <div className="reserve-done" role="status">
                  <span className="reserve-done__icon"><Icon name="check" size={22} /></span>
                  <h3>You’re on the list.</h3>
                  <p><b>avallen.studio/{handle}</b> is reserved for you.<br />We’ll be in touch as soon as we launch.</p>
                </div>
              ) : (
                <form className="reserve-form" onSubmit={submitClaim} noValidate>
                  <div className={`url-field ${avail === 'invalid' ? 'url-field--error' : ''}`}>
                    <span className="url-field__prefix">avallen.studio/</span>
                    <input
                      type="text" inputMode="url" autoComplete="off" spellCheck={false}
                      placeholder="yourname" value={handle} required aria-label="Your handle"
                      onChange={e => setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 40))}
                    />
                    <span className={`url-field__status url-field__status--${avail}`} aria-live="polite">
                      {avail === 'checking' && '…'}
                      {avail === 'free' && <><Icon name="check" size={14} /> available</>}
                      {avail === 'taken' && <><Icon name="x" size={14} /> taken</>}
                      {avail === 'invalid' && '3+ chars: a-z, 0-9, -'}
                    </span>
                  </div>
                  {disciplines.length > 0 && (
                    <div className="disc-row" role="group" aria-label="What do you teach?">
                      <p className="disc-row__label">What do you teach?</p>
                      <div className="disc-row__chips">
                        {disciplines.map(d => (
                          <button type="button" key={d} className={`disc-chip ${pickedDiscs.includes(d) ? 'disc-chip--on' : ''}`} aria-pressed={pickedDiscs.includes(d)} onClick={() => toggleDisc(d)}>{d}</button>
                        ))}
                      </div>
                    </div>
                  )}
                  <input type="text" placeholder="Your name" value={claimName} required onChange={e => setClaimName(e.target.value)} />
                  <input type="email" placeholder="Email address" value={claimEmail} required onChange={e => setClaimEmail(e.target.value)} />
                  <input type="tel" placeholder="Mobile number (optional)" value={claimPhone} onChange={e => setClaimPhone(e.target.value)} />
                  <p className="reserve-form__hint">A mobile number would be amazing too, please — it makes it much easier for us to reach you when we launch.</p>
                  <input type="text" name="company" value={claimCompany} onChange={e => setClaimCompany(e.target.value)} tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
                  {claim.state === 'error' && <p className="reserve-form__error" role="alert">{claim.message}</p>}
                  <button className="pill" type="submit" ref={submitRef} disabled={claim.state === 'submitting'}>
                    {claim.state === 'submitting' ? 'Reserving…' : 'Reserve my URL'} <Icon name="arrow" size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {modalItems && (
          <div className="modal-backdrop" onClick={closeModal}>
            <div className="modal-card" role="dialog" aria-modal="true" aria-label="Missing details" tabIndex={-1} ref={modalRef} onClick={e => e.stopPropagation()}>
              <button className="modal-card__close" aria-label="Close" onClick={closeModal}><Icon name="x" size={16} /></button>
              <span className="modal-card__icon"><Icon name="spark" size={18} /></span>
              <h3>Nearly there</h3>
              <p>To hold your URL we just need:</p>
              <ul>{modalItems.map(item => <li key={item}>{item}</li>)}</ul>
              <button className="pill pill--small" onClick={closeModal}>Got it</button>
            </div>
          </div>
        )}

        <section className="faq-section" id="faq">
          <div className="shell faq-grid"><div><p className="section-number">05 — GOOD TO KNOW</p><h2>A few questions,<br /><em>answered.</em></h2><p className="faq-intro">Avallen is still growing. Here’s what we can share for now.</p></div><div className="accordions">{questions.map(([question, answer], index) => <article className={openQuestion === index ? 'accordion accordion--open' : 'accordion'} key={question}><button onClick={() => setOpenQuestion(openQuestion === index ? null : index)} aria-expanded={openQuestion === index}><span>{question}</span><i><Icon name="chevron" size={18} /></i></button><div><p>{answer}</p></div></article>)}</div></div>
        </section>

        <section className="coming-section" id="coming-soon">
          <div className="coming-shape coming-shape--one" /><div className="coming-shape coming-shape--two" />
          <div className="shell coming-inner"><div className="app-mark"><BrandMark light /></div><p className="eyebrow eyebrow--light">A calmer way to run your practice</p><h2>Move with purpose.<br /><em>Teach freely.</em></h2><p>Avallen is coming soon to the App Store.<br />We can’t wait to share it with you.</p><div className="store-badge"><span>●</span><div><small>COMING SOON ON THE</small><strong>App Store</strong></div></div></div>
        </section>
      </main>

      <footer>
        <div className="shell footer-main"><div><Logo light /><p>Made thoughtfully for independent<br />yoga and Pilates instructors.</p></div><div className="footer-links"><div><small>EXPLORE</small><a href="#for-instructors">For instructors</a><a href="#for-students">For students</a><a href="#about">Our approach</a></div><div><small>INFO</small><a href="#faq">FAQs</a><a href="#coming-soon">Launch updates</a></div><div><small>CONTACT</small><a href="mailto:hello@avallen.studio">hello@avallen.studio</a><a href="https://app.avallen.studio">Open the app</a></div></div></div>
        <div className="shell footer-bottom"><p>© {new Date().getFullYear()} Avallen. All rights reserved.</p><p>Move gently. Build steadily.</p></div>
      </footer>
    </div>
  )
}

export default App
