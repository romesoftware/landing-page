import { useEffect, useRef, useState, type ReactNode } from 'react'

type IconName =
  | 'arrow'
  | 'calendar'
  | 'card'
  | 'check'
  | 'chevron'
  | 'clock'
  | 'discover'
  | 'doc'
  | 'building'
  | 'globe'
  | 'heart'
  | 'layers'
  | 'menu'
  | 'message'
  | 'people'
  | 'pin'
  | 'spark'
  | 'tag'
  | 'trend'
  | 'undo'
  | 'x'

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
  building: <><path d="M4 21h16M6 21V7l6-3 6 3v14" /><path d="M9 10h1M14 10h1M9 14h1M14 14h1M10 21v-3h4v3" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4M16 3v4M3 10h18" /><path d="m8 15 2 2 5-5" /></>,
  card: <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m8 10 4 4 4-4" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  discover: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" /></>,
  doc: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.9 5.7 3.9 9S14.5 18.4 12 21c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3Z" /></>,
  heart: <path d="M20.8 5.8a5 5 0 0 0-7.1 0L12 7.5l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-8.1a5 5 0 0 0 0-7.1Z" />,
  layers: <><rect x="4" y="5" width="16" height="11" rx="2" /><path d="M8 20h8M12 16v4M8 9h8" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" /><path d="M8 9h8M8 13h5" /></>,
  people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
  pin: <><path d="M20 10c0 5.2-8 12-8 12s-8-6.8-8-12a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  spark: <><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></>,
  tag: <><path d="M3 11V4a1 1 0 0 1 1-1h7l10 10-8 8L3 11Z" /><circle cx="7.5" cy="7.5" r="1.5" /></>,
  trend: <><path d="M3 18 9 12l4 4 8-9" /><path d="M15 7h6v6" /></>,
  undo: <><path d="M9 14 4 9l5-5" /><path d="M4 9h10a6 6 0 0 1 0 12h-3" /></>,
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
  { icon: 'trend' as const, title: 'Grow with confidence', text: 'See what’s working, fill quiet sessions and reconnect with students, without becoming a marketer.' },
  { icon: 'message' as const, title: 'Stay in touch, naturally', text: 'Useful reminders and class messages reach the right people at the right moment.' },
  { icon: 'discover' as const, title: 'Be easier to discover', text: 'A beautiful public page makes your approach, classes and locations simple to find and book.' },
  { icon: 'spark' as const, title: 'The details, taken care of', text: 'Packs, policies, documents and waitlists live together, so your energy stays with your teaching.' },
]

const questions = [
  ['Who is Avallen for?', 'Avallen is being built for independent yoga and Pilates instructors, from teachers running a few weekly classes to established practitioners working across several spaces.'],
  ['Can students use Avallen too?', 'Yes. Students will be able to discover local independent teachers, save favourites, book classes and keep every booking in one calm place. Teachers can be students too, booking other teachers’ classes with the same account.'],
  ['When will the app be available?', 'Avallen is currently in beta testing with founding instructors, with a wider launch planned for early 2027. Launch updates and early access details will be shared here.'],
  ['Will it work for both yoga and Pilates?', 'Absolutely. The experience is designed around the real needs of independent yoga and Pilates teaching, with enough flexibility for different class styles and ways of working.'],
  ['Does it work for studios?', 'Yes. A studio version for venues with several instructors, rooms and front-of-house staff is in early access. It’s set up with us personally, so get in touch and we’ll talk it through.'],
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
  { id: 'teaching',   tab: 'Teaching',   icon: 'trend' as IconName,    eyebrow: 'Teaching',   title: 'Your studio insights, at hand', copy: 'Revenue, class fill and returning students: the numbers that matter, on one calm dashboard.', shotAlt: 'Avallen app Teaching screen: greeting, public-page share card, studio revenue card with sparkline, and class-fill and returning-student tiles' },
  { id: 'discover',   tab: 'Discover',   icon: 'discover' as IconName, eyebrow: 'Discover',   title: 'Every teacher, a tap away', copy: 'Students browse local independent teachers, check real availability and book in seconds.', shotAlt: 'Avallen app Discover screen: search bar, featured teacher cards with photos and prices, and a local-teachers rail' },
  { id: 'favourites', tab: 'Favourites', icon: 'heart' as IconName,    eyebrow: 'Favourites', title: 'The teachers they love, kept close', copy: 'One tap saves a teacher or a class, so your regulars are never far away.', shotAlt: 'Avallen app Favourites screen: saved teachers with photos and disciplines, and saved class cards with times and prices' },
  { id: 'bookings',   tab: 'Bookings',   icon: 'calendar' as IconName, eyebrow: 'Bookings',   title: 'Bookings that work offline', copy: 'Tickets, addresses and check-in codes live on the phone, even in a basement studio with no signal.', shotAlt: 'Avallen app Bookings screen: upcoming booking cards with dates, venues, map links and check-in actions' },
  { id: 'profile',    tab: 'Profile',    icon: 'people' as IconName,   eyebrow: 'Profile',    title: 'Everything personal, in one place', copy: 'Packs, payments, preferences and progress, quietly organised in the background.', shotAlt: 'Avallen app Profile screen: account card, personal details, and interest chips for discovery' },
]

function StoryScreen({ id, shotAlt, on }: { id: string; shotAlt: string; on: boolean }) {
  return (
    <div className={`story-screen ${on ? 'is-on' : ''}`} aria-hidden={!on}>
      <img className="story-shot" src={`/story/${id}.png`} alt={shotAlt} loading="lazy" />
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
              {storyScreens.map((s, i) => <StoryScreen key={s.id} id={s.id} shotAlt={s.shotAlt} on={active === i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type Avail = 'idle' | 'checking' | 'free' | 'taken' | 'invalid'

type Claim = { state: 'idle' | 'submitting' | 'done' | 'error'; message: string }

function GrowthIllustration() {
  return (
    <svg className="growth-illustration" viewBox="0 0 1120 260" role="img" aria-label="A growing branch moving from roots to a young tree and then a full canopy">
      <path className="growth-line growth-line--soft" d="M44 212C150 217 214 216 302 202S469 191 554 177 729 161 807 172 948 181 1070 181" />
      <path className="growth-line" d="M44 212C150 217 214 216 302 202S469 191 554 177 729 161 807 172 948 181 1070 181" />
      <g className="growth-stage growth-stage--seed">
        <path d="M126 210c-9-13-22-18-38-16M126 210c10-11 22-15 37-12M126 210v-48" />
        <path className="growth-leaf" d="M126 174c-22 0-33-11-34-30 19-1 32 9 34 30Z" />
        <path className="growth-leaf" d="M126 160c2-18 13-27 30-29 1 17-9 27-30 29Z" />
      </g>
      <g className="growth-stage growth-stage--sapling">
        <path d="M556 177c-7-15-18-22-35-23M556 177c9-12 20-18 34-18M556 177v-105M556 112c-19-8-29-20-33-35M556 125c18-8 30-20 36-36" />
        <path className="growth-leaf" d="M533 88c-23-2-34-14-33-34 21 0 32 11 33 34Z" />
        <path className="growth-leaf" d="M578 101c2-22 14-34 35-36 0 21-12 33-35 36Z" />
        <path className="growth-leaf" d="M556 78c-12-18-10-34 4-48 13 16 12 32-4 48Z" />
      </g>
      <g className="growth-stage growth-stage--tree">
        <path d="M991 96c-1 25 1 54 8 85M998 126c-26-17-42-35-48-55M996 136c27-17 45-38 54-61M978 108c-23-10-40-25-49-43M1018 106c19-12 31-27 37-45" />
        <path d="M991 96c-1-14-4-28-6-41M929 65c6-7 13-13 19-19M1055 61c-11-2-22-4-34-6M950 71c0 3 1 5 1 8M1050 75c-3 2-6 5-9 7" />
        <path className="growth-leaf" d="M951 79c-28-3-43-18-44-43 26 0 41 14 44 43Z" />
        <path className="growth-leaf" d="M1041 82c2-27 17-42 43-45 0 25-14 40-43 45Z" />
        <path className="growth-leaf" d="M985 55c-13-23-9-42 10-57 14 21 11 40-10 57Z" />
        <path className="growth-leaf growth-leaf--pale" d="M1021 55c7-22 23-33 45-31-5 21-20 32-45 31Z" />
        <path className="growth-leaf growth-leaf--pale" d="M948 46c-18-14-37-14-55-1 16 15 35 15 55 1Z" />
      </g>
      <circle className="growth-dot" cx="126" cy="212" r="5" />
      <circle className="growth-dot growth-dot--current" cx="556" cy="177" r="8" />
      <circle className="growth-dot" cx="999" cy="181" r="5" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openQuestion, setOpenQuestion] = useState<number | null>(0)

  // "Reserve your URL" form
  const [handle, setHandle] = useState('')
  const [avail, setAvail] = useState<Avail>('idle')
  const [claimName, setClaimName] = useState('')
  const [claimEmail, setClaimEmail] = useState('')
  const [claimPhone, setClaimPhone] = useState('')
  const [disciplines, setDisciplines] = useState<string[]>([])
  const [pickedDiscs, setPickedDiscs] = useState<string[]>([])
  const [claim, setClaim] = useState<Claim>({ state: 'idle', message: '' })
  // "Keep me posted" - interest without committing to a handle
  const [mode, setMode] = useState<'reserve' | 'interest'>('reserve')
  const [interest, setInterest] = useState<Claim>({ state: 'idle', message: '' })
  // Progressive disclosure: the rest of the claim form only unfolds once a
  // handle checks free (commitment momentum). forceExpand is the escape hatch
  // for when the availability check can't be reached.
  const [unlocked, setUnlocked] = useState(false)
  const [forceExpand, setForceExpand] = useState(false)
  const expanded = unlocked || forceExpand
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

  useEffect(() => { if (avail === 'free') setUnlocked(true) }, [avail])

  const closeModal = () => { setModalItems(null); submitRef.current?.focus() }

  // Move focus into the modal when it opens, back to the button when it closes.
  useEffect(() => {
    if (modalItems) {
      modalRef.current?.focus()
      const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
      window.addEventListener('keydown', onKey)
      return () => window.removeEventListener('keydown', onKey)
    }
  }, [modalItems])

  // The browser tries to scroll to a #fragment before React has mounted the
  // sections, so deep links like /#faq land at the top. Re-apply it once mounted.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  // Discipline choices come from the API - same list as instructor signup.
  useEffect(() => {
    fetch(`${API_BASE}/disciplines`)
      .then(r => r.ok ? r.json() : [])
      .then((rows: { name: string }[]) => setDisciplines(rows.map(r => r.name)))
      .catch(() => {}) // chips just don't render if the API's down
  }, [])

  const toggleDisc = (d: string) =>
    setPickedDiscs(cur => cur.includes(d) ? cur.filter(x => x !== d) : [...cur, d])

  const submitInterest = async (e: React.FormEvent) => {
    e.preventDefault()
    if (interest.state === 'submitting') return
    const missing: string[] = []
    if (!claimName.trim()) missing.push('your name')
    if (!claimEmail.trim()) missing.push('an email address')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(claimEmail.trim())) missing.push('a valid email address')
    if (missing.length) { setModalItems(missing); return }

    setInterest({ state: 'submitting', message: '' })
    try {
      const res = await fetch(`${API_BASE}/interest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: claimName, email: claimEmail }),
      })
      if (res.ok) {
        const data = await res.json().catch(() => ({}))
        setInterest({ state: 'done', message: (data as { already?: boolean }).already ? 'already' : '' })
      } else {
        const data = await res.json().catch(() => ({}))
        setInterest({ state: 'error', message: (data as { error?: string }).error ?? 'Something went wrong. Please try again' })
      }
    } catch {
      setInterest({ state: 'error', message: 'Could not reach the server. Try again in a moment' })
    }
  }

  const submitClaim = async (e: React.FormEvent) => {
    e.preventDefault()
    if (claim.state === 'submitting') return

    // Enter in the handle field while collapsed = "continue", not submit —
    // otherwise it would open the missing-fields dialog for hidden inputs.
    if (!expanded) { setForceExpand(true); return }

    // Polite modal for anything missing, instead of browser tooltips.
    const missing: string[] = []
    if (!claimName.trim()) missing.push('your name')
    if (!claimEmail.trim()) missing.push('an email address')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(claimEmail.trim())) missing.push('a valid email address')
    if (disciplines.length && !pickedDiscs.length) missing.push('at least one discipline you teach')
    if (!handle) missing.push('the handle you’d like')
    else if (avail === 'invalid') missing.push('a handle of 3+ letters, numbers or hyphens')
    else if (avail === 'taken') missing.push('a handle that’s still free. Try another')
    if (missing.length) { setModalItems(missing); return }

    setClaim({ state: 'submitting', message: '' })
    try {
      const res = await fetch(`${API_BASE}/handle-claims`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: claimName, email: claimEmail, handle, disciplines: pickedDiscs, phone: claimPhone || undefined }),
      })
      if (res.ok) {
        setClaim({ state: 'done', message: '' })
        setAvail('idle')
      } else {
        const data = await res.json().catch(() => ({}))
        setClaim({ state: 'error', message: (data as { error?: string }).error ?? 'Something went wrong. Please try again' })
      }
    } catch {
      setClaim({ state: 'error', message: 'Could not reach the server. Try again in a moment' })
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
            <a href="#journey">Our journey</a>
            <a href="#studios">For studios</a>
            <a href="#faq">FAQs</a>
          </nav>
          <a className="pill pill--small desktop-cta" href="#coming-soon">Coming soon</a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}><Icon name={menuOpen ? 'x' : 'menu'} /></button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{[['For instructors', '#for-instructors'], ['For students', '#for-students'], ['Our approach', '#about'], ['Our journey', '#journey'], ['For studios', '#studios'], ['FAQs', '#faq']].map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
      </header>

      <main>
        <section className="hero">
          <div className="hero__orb hero__orb--one" /><div className="hero__orb hero__orb--two" />
          <div className="shell hero__grid">
            <div className="hero__copy reveal">
              <p className="eyebrow">Made for independent movement teachers</p>
              <h1>Your practice,<br /><em>beautifully</em> organised.</h1>
              <p className="hero__intro">Avallen brings your classes, bookings and community into one calm place, so you can spend less time on admin and more time teaching.</p>
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

        <section className="reserve-section" id="reserve">
          <div className="shell">
            <div className="reserve-card">
              <div className="reserve-copy">
                <p className="section-number">01 — CLAIM YOUR SPOT</p>
                <h2>Reserve your<br /><em>URL now.</em></h2>
                <p>Every teacher gets a public page at <b>avallen.studio/you</b> that’s searchable, shareable and unmistakably yours. The good names will go quickly, so grab yours while it’s still there.</p>
                <p>It’s <b>free for teachers</b> at launch. No subscription, no card. Leave your details and we’ll hold it for you, then reach out the moment we launch.</p>
              </div>
              <div className="reserve-forms">
              <div className="reserve-tabs" role="group" aria-label="Claim your spot">
                <button type="button" aria-pressed={mode === 'reserve'} className={`reserve-tab${mode === 'reserve' ? ' reserve-tab--on' : ''}`} onClick={() => setMode('reserve')}>Reserve your URL</button>
                <button type="button" aria-pressed={mode === 'interest'} className={`reserve-tab${mode === 'interest' ? ' reserve-tab--on' : ''}`} onClick={() => setMode('interest')}>Keep me posted</button>
              </div>
              {mode === 'interest' ? (
                interest.state === 'done' ? (
                  <div className="reserve-done" role="status">
                    <span className="reserve-done__icon"><Icon name="check" size={22} /></span>
                    <h3>{interest.message === 'already' ? 'You’re already on the list.' : 'You’re on the list.'}</h3>
                    <p>{interest.message === 'already'
                      ? <>You’ve already left your details. We’ll email you the moment we launch.<br />Your handle will still be there to claim.</>
                      : <>We’ll let you know as soon as we launch.<br />Your handle will still be there to claim.</>}</p>
                  </div>
                ) : (
                  <form className="reserve-form" onSubmit={submitInterest} noValidate>
                    <p className="interest-note">Piqued your interest but not quite ready to pick a handle? Leave your details and we’ll email you the moment we launch.</p>
                    <input type="text" placeholder="Your name" value={claimName} required onChange={e => setClaimName(e.target.value)} />
                    <input type="email" placeholder="Email address" value={claimEmail} required onChange={e => setClaimEmail(e.target.value)} />
                    {interest.state === 'error' && <p className="reserve-form__error" role="alert">{interest.message}</p>}
                    <button className="pill" type="submit" ref={submitRef} disabled={interest.state === 'submitting'}>
                      {interest.state === 'submitting' ? 'Sending…' : 'Keep me posted'} <Icon name="arrow" size={18} />
                    </button>
                  </form>
                )
              ) : claim.state === 'done' ? (
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
                  {avail === 'free' && (
                    <p className="avail-banner" role="status">
                      <Icon name="check" size={15} />
                      <span><b>avallen.studio/{handle}</b> is free, and it’s <b>free for teachers</b> too. Grab it before someone else does.</span>
                    </p>
                  )}
                  <div className={`reserve-extra${expanded ? ' reserve-extra--open' : ''}`}>
                    <div className="reserve-extra__inner">
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
                      <p className="reserve-form__hint">A mobile number would be amazing too, please. It makes it much easier for us to reach you when we launch.</p>
                      {claim.state === 'error' && <p className="reserve-form__error" role="alert">{claim.message}</p>}
                      <button className="pill" type="submit" ref={submitRef} disabled={claim.state === 'submitting'}>
                        {claim.state === 'submitting' ? 'Reserving…' : 'Reserve my URL'} <Icon name="arrow" size={18} />
                      </button>
                    </div>
                  </div>
                  {!expanded && handle.length > 0 && avail !== 'free' && (
                    <button type="button" className="skip-check" onClick={() => setForceExpand(true)}>Continue without checking <Icon name="arrow" size={14} /></button>
                  )}
                </form>
              )}
              </div>
            </div>
          </div>
        </section>

        <section className="intro-section" id="about">
          <div className="shell intro-grid">
            <p className="section-number">02 — WHY AVALLEN</p>
            <div><h2>Teaching is personal.<br /><em>Your tools should be too.</em></h2><p>Independent teaching gives you the freedom to create something meaningful. But the admin can feel scattered across calendars, messages, spreadsheets and booking links.</p><p>Avallen is designed to bring the practical parts together, quietly and beautifully, without ever getting between you and your students.</p></div>
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

        <section className="toolkit-section" id="toolkit">
          <div className="toolkit-shape toolkit-shape--one" /><div className="toolkit-shape toolkit-shape--two" />
          <div className="shell">
            <div className="toolkit-heading">
              <div><p className="eyebrow">A closer look</p><h2>The complete<br /><em>teaching toolkit.</em></h2></div>
              <div className="toolkit-heading__aside"><span>15 thoughtfully chosen essentials</span><p>No add-on maze or scattered systems. Just the tools that help you plan, welcome, teach and grow, all in one calm place.</p></div>
            </div>
            <div className="toolkit-grid">
              {toolkitGroups.map((group, groupIndex) => (
                <article className={`toolkit-card toolkit-card--${groupIndex + 1}`} key={group.title}>
                  <div className="toolkit-card__top">
                    <span><Icon name={group.icon} size={21} /></span>
                    <small>0{groupIndex + 1}</small>
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.intro}</p>
                  <ul>
                    {group.features.map(feature => <li key={feature}><i><Icon name="check" size={12} /></i><span>{feature}</span></li>)}
                  </ul>
                </article>
              ))}
            </div>
            <div className="toolkit-footer">
              <p><span><Icon name="spark" size={15} /></span><strong>And the quiet details behind them:</strong> notifications, preferences, secure documents, calendar links and more.</p>
              <a className="text-link text-link--dark" href="/features">Explore every feature <Icon name="arrow" size={16} /></a>
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <div className="shell showcase-grid">
            <div className="showcase-photo"><img src="https://images.unsplash.com/photo-1747239685045-fcbcf98985db?auto=format&fit=crop&w=1200&q=88" alt="Pilates instructor guiding a reformer session" /><div className="photo-caption"><span>Built for movement</span><p>Yoga · Mat Pilates · Reformer</p></div></div>
            <div className="showcase-copy">
              <p className="section-number">03 — YOUR STUDIO, IN YOUR POCKET</p>
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
                {[['01', 'Discover local, independent teachers', 'Search by practice, place and time, not by who has the biggest marketing budget.'], ['02', 'Book without the back-and-forth', 'Clear class details, simple booking and everything you need before you arrive.'], ['03', 'Return to what you love', 'Save favourites, see your upcoming bookings and build a practice that lasts.']].map(([num, title, text]) => <article key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="desktop-section">
          <div className="shell desktop-grid">
            <div className="desktop-copy">
              <p className="eyebrow">Desktop, too</p>
              <h2>Bookings that work<br /><em>beautifully on a laptop.</em></h2>
              <p>Your public page isn't just for phones. Students browsing from a desktop get the same calm layout: your profile, classes, venues and dates side by side, ready to book in a couple of clicks.</p>
              <a className="text-link text-link--dark" href="https://avallen.studio/mia-shaw?from=https://avallen.studio" target="_blank" rel="noreferrer">View a demo page at avallen.studio/mia-shaw <Icon name="arrow" size={16} /></a>
            </div>
            <div className="desktop-shot">
              <div className="desktop-frame">
                <div className="desktop-frame__bar"><span /><span /><span /><em>avallen.studio/mia-shaw</em></div>
                <img src="/mia-desktop.png" alt="Mia Shaw's Avallen page on desktop: profile card with her photo and bio, upcoming Breathwork Circle classes with dates and a Book button, and the Islington Wellness Centre venue card" />
              </div>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="shell quote-inner"><span className="quote-mark">“</span><blockquote>Most software is aimed at gyms, this genuinely looks like it’s built to help instructors grow their business, and I’m excited about it</blockquote><div className="quote-attrib"><span className="quote-avatar"><Icon name="spark" size={15} /></span><p>BETA INSTRUCTOR</p></div></div>
        </section>

        <section className="founder-section">
          <div className="shell founder-grid">
            <div className="founder-photo">
              <img src="/rf-founder-image.png" alt="Rob Foster, founder of Avallen" />
              <div className="founder-photo__badge"><span><BrandMark light /></span></div>
            </div>
            <div className="founder-copy">
              <p className="section-number">04 — MADE BY A PERSON, NOT A PLATFORM</p>
              <h2>Built by someone who<br /><em>gets the work.</em></h2>
              <p>Avallen is being built by Rob Foster, working directly with independent instructors at every step. No roadmap decided in a boardroom. Each feature is shaped around how small teaching businesses actually run.</p>
              <p>Small, considered and built to last. If there’s something you wish your current tools did, we’d genuinely love to hear it.</p>
              <p>The name is Cornish for apple tree: roots that hold, branches that reach. It’s the shape of what we’re building, a community of independent teachers helping each other grow, with a referral network that rewards the people who plant new trees.</p>
              <a className="text-link text-link--dark" href="mailto:hello@avallen.studio">Say hello at hello@avallen.studio <Icon name="arrow" size={16} /></a>
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

        <section className="journey-section" id="journey">
          <div className="shell">
            <div className="journey-heading">
              <div><p className="section-number">05 — OUR JOURNEY</p><h2>Rooted in purpose.<br /><em>Growing with care.</em></h2></div>
              <p>We’re building Avallen steadily, alongside the people it’s made for. Here’s where we are, and what comes next.</p>
            </div>
            <div className="journey-growth" aria-hidden="true"><GrowthIllustration /></div>
            <div className="journey-stages">
              <article>
                <div className="journey-stage__marker"><span>01</span></div>
                <p className="journey-stage__date">2026</p>
                <h3>The roots are in</h3>
                <p>We’ve developed the first version of Avallen, shaped around the real rhythms of independent teaching.</p>
              </article>
              <article className="journey-stage--current">
                <div className="journey-stage__marker"><span>02</span><strong>We are here</strong></div>
                <p className="journey-stage__date">Now <strong className="journey-here">We are here</strong></p>
                <h3>Growing together</h3>
                <p>We’re beta testing with a small group of founding instructors, who get free access in return for honest feedback and real-world use. Founders keep a badge on their profile for good.</p>
              </article>
              <article>
                <div className="journey-stage__marker"><span>03</span></div>
                <p className="journey-stage__date">Early 2027</p>
                <h3>Ready to flourish</h3>
                <p>Avallen launches for independent instructors and the students looking to move with them. It’s free for teachers; there’s just a small fee on each student booking.</p>
              </article>
            </div>
            <p className="journey-note"><span />Built slowly enough to listen. Boldly enough to make a difference.</p>
          </div>
        </section>

        <section className="studio-section" id="studios">
          <div className="studio-orb studio-orb--one" /><div className="studio-orb studio-orb--two" />
          <div className="shell studio-layout">
            <div className="studio-copy">
              <p className="section-number">06 — FOR STUDIOS</p>
              <h2>Manage a studio?<br /><em>We can help there too.</em></h2>
              <p>Alongside the app for independent teachers, we’re shaping a studio version for venues with several instructors, rooms and front-of-house staff. It’s set up with us personally, around how you already work.</p>
              <a className="text-link" href="mailto:hello@avallen.studio?subject=Avallen%20for%20studios">Tell us about your studio <Icon name="arrow" size={16} /></a>
            </div>
            <div className="studio-card-wrap">
              <span className="studio-card-shadow" aria-hidden="true" />
              <div className="studio-card">
                <div className="studio-card__header">
                  <div>
                    <p>THE STUDIO EDITION</p>
                    <h3>One calm home for the whole team.</h3>
                  </div>
                  <span>Early access</span>
                </div>
                <div className="studio-feature-grid">
                  {studioFeatures.map((feature, index) => (
                    <article className={index === 0 ? 'studio-feature studio-feature--lead' : 'studio-feature'} key={feature.title}>
                      <span className="studio-feature__icon"><Icon name={feature.icon} size={19} /></span>
                      <div>
                        <small>0{index + 1}</small>
                        <h4>{feature.title}</h4>
                        {index === 0 && <p>Made to grow with your venue, without making it feel less personal.</p>}
                      </div>
                    </article>
                  ))}
                </div>
                <div className="studio-card__footer"><span><i /> Shaping now</span><p>Personal setup included</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="shell faq-grid"><div><p className="section-number">07 — GOOD TO KNOW</p><h2>A few questions,<br /><em>answered.</em></h2><p className="faq-intro">Avallen is still growing. Here’s what we can share for now.</p></div><div className="accordions">{questions.map(([question, answer], index) => <article className={openQuestion === index ? 'accordion accordion--open' : 'accordion'} key={question}><button onClick={() => setOpenQuestion(openQuestion === index ? null : index)} aria-expanded={openQuestion === index}><span>{question}</span><i><Icon name="chevron" size={18} /></i></button><div><p>{answer}</p></div></article>)}</div></div>
        </section>

        <section className="coming-section" id="coming-soon">
          <div className="coming-shape coming-shape--one" /><div className="coming-shape coming-shape--two" />
          <div className="shell coming-inner"><div className="app-mark"><BrandMark light /></div><p className="eyebrow eyebrow--light">A calmer way to run your practice</p><h2>Move with purpose.<br /><em>Teach freely.</em></h2><p>Avallen is coming soon to the App Store.<br />We can’t wait to share it with you.</p><div className="store-badge"><span>●</span><div><small>COMING SOON ON THE</small><strong>App Store</strong></div></div></div>
        </section>
      </main>

      <footer>
        <div className="shell footer-main"><div><Logo light /><p>Made thoughtfully for independent<br />yoga and Pilates instructors.</p></div><div className="footer-links"><div><small>EXPLORE</small><a href="#for-instructors">For instructors</a><a href="#for-students">For students</a><a href="#about">Our approach</a></div><div><small>INFO</small><a href="#faq">FAQs</a><a href="/features">Every feature</a><a href="#coming-soon">Launch updates</a></div><div><small>CONTACT</small><a href="mailto:hello@avallen.studio">hello@avallen.studio</a><a href="https://app.avallen.studio">Open the app</a></div></div></div>
        <div className="shell footer-bottom"><p>© {new Date().getFullYear()} Avallen, a product of Rome Software Limited. All rights reserved.</p><p>Move gently. Build steadily.</p></div>
      </footer>
    </div>
  )
}

const studioFeatures: { title: string; icon: IconName }[] = [
  { title: 'Several instructors under one roof', icon: 'people' },
  { title: 'Multi-user access for your team', icon: 'layers' },
  { title: 'Bookable rooms and resources', icon: 'pin' },
  { title: 'Embed your timetable anywhere', icon: 'globe' },
  { title: 'A theme that feels like your studio', icon: 'spark' },
  { title: 'Deeper reports for the whole venue', icon: 'trend' },
  { title: 'More than one studio per account', icon: 'building' },
]

const toolkitGroups: { icon: IconName; title: string; intro: string; features: string[] }[] = [
  {
    icon: 'calendar',
    title: 'Plan & teach',
    intro: 'Everything around the class, held together.',
    features: [
      'Recurring classes and one-off sessions',
      'Multiple venues, remote classes and private locations',
      'Live registers and student check-in',
      'Health notes, waivers and class documents',
      'Reminders and messages for everyone booked',
    ],
  },
  {
    icon: 'layers',
    title: 'Book & get paid',
    intro: 'A smoother path from finding a class to joining it.',
    features: [
      'Guest-friendly card booking through Stripe',
      'Class packs and monthly credit plans',
      'Automatic waitlists when classes fill',
      'Clear cancellation policies and refunds',
      'Simple, all-in pricing shown before checkout',
    ],
  },
  {
    icon: 'trend',
    title: 'Grow & connect',
    intro: 'Useful ways to be found, and remembered.',
    features: [
      'Your own beautiful public teaching page',
      'Discovery by practice, teacher and location',
      'Shareable class links and QR codes',
      'Student profiles, milestones and thoughtful nudges',
      'Page views, booking trends and referral insights',
    ],
  },
]

export default App
