import { lazy, Suspense, useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import { fadeUp, stagger, cardHover } from '../lib/motion'
import { useCountUp } from '../hooks/useCountUp'

const ParticleBackground = lazy(() => import('../components/ParticleBackground'))

// ─── Data ─────────────────────────────────────────────────────────────────────
const DASH_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFS2h598p4Y_HRTAOBzoEM75IUQyb6-w50eRXklSkq2RhOhtHimdJyY-J7rrX40VP37_e5cAFuPm2R-6gY4clKjd2-mMEA8Rh19IVBakQS7zt9NB27PNdmhAorhWedlZzh6ndzWO_KF3yoz5MCY1rGabKDJ7UgkPeEWHj-K7dNsST-hXvcRH-GBG0FAxAnnhkM7zTUxY5XD0brT0oO5lt4EyUtg8S_VKDDOi0_Z4rkhKcDrYZYwRtlSHb5uoe8oNHdDXVAugMzE9FH'

const features = [
  { icon: 'account_balance_wallet', title: 'Fee Management', desc: 'Automate fee collection, receipts, and finance reports with full audit trails.' },
  { icon: 'groups', title: 'Student Information', desc: 'Centralized student profiles, admissions, and document management.' },
  { icon: 'local_shipping', title: 'Transport Management', desc: 'GPS tracking, route planning, and bus management for real-time visibility.' },
  { icon: 'person_search', title: 'Staff Management', desc: 'Manage staff profiles, payroll, and attendance in one unified view.' },
  { icon: 'history_toggle_off', title: 'Attendance Tracking', desc: 'Track student and staff attendance accurately with biometric integration.' },
  { icon: 'campaign', title: 'Parent Communication', desc: 'Send alerts, announcements, and homework updates directly to parents.' },
  { icon: 'menu_book', title: 'Library Management', desc: 'Catalog, issue, and manage school library books with ease.' },
  { icon: 'calendar_month', title: 'Timetable Planning', desc: 'Generate and manage class schedules efficiently with smart conflict resolution.' },
]

const statsData = [
  { icon: 'groups', value: 1248, suffix: '+', label: 'Students', sub: '+4.2%' },
  { icon: 'how_to_reg', value: 96, suffix: '%', label: 'Attendance', sub: 'Today' },
  { icon: 'payments', value: 84, prefix: '₹', suffix: 'L', label: 'Fees Collected', sub: 'This term' },
  { icon: 'trending_up', value: 94, suffix: '%', label: 'Engagement', sub: 'This term' },
]

const mobileFeatures = [
  { icon: 'notifications_active', title: 'Instant Notifications', desc: 'Receive alerts for attendance, fees, and events.' },
  { icon: 'how_to_reg', title: 'Attendance Tracking', desc: 'Mark attendance and view reports with ease.' },
  { icon: 'payments', title: 'Easy Fee Collection', desc: 'Manage fees and send reminders instantly.' },
]

const testimonials = [
  { quote: 'Our school operations have become so much more efficient since adopting this ERP software.', name: 'David Miller', role: 'Principal', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', stars: 5 },
  { quote: 'Craxnet transformed how we manage data. The clarity it brings to our workflows is unmatched.', name: 'Sarah Chen', role: 'Operations Director', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', stars: 5 },
  { quote: 'The best investment we made. Real-time insights have changed how our board makes decisions.', name: 'Marcus Osei', role: 'CTO, Lumina Global', avatar: 'https://randomuser.me/api/portraits/men/68.jpg', stars: 5 },
]

const faqs = [
  { q: 'Can we switch plans at any time?', a: 'Yes. Upgrades take effect immediately with pro-rated billing. Downgrades take effect at the end of your current billing cycle.' },
  { q: 'Is there a free trial available?', a: 'Yes — all plans include a 14-day free trial with full feature access. No credit card required.' },
  { q: 'What data sovereignty options exist?', a: 'Enterprise customers can select their preferred hosting region (US-East, EU-West, or APAC) to comply with GDPR and CCPA.' },
  { q: 'How long does onboarding take?', a: 'Most institutions are fully onboarded within 48 hours. Our dedicated team handles data migration and staff training.' },
]

// ─── Animated Stat Card ───────────────────────────────────────────────────────
function StatCard({ icon, value, suffix, prefix, label, sub, inView }: {
  icon: string; value: number; suffix?: string; prefix?: string
  label: string; sub: string; inView: boolean
}) {
  const count = useCountUp(value, 1400, inView)
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col items-center text-center gap-1"
    >
      <span className="material-symbols-outlined text-primary mb-2" style={{ fontSize: '24px' }}>{icon}</span>
      <span className="font-headline text-3xl md:text-4xl text-on-surface tabular-nums">
        {prefix}{count}{suffix}
      </span>
      <span className="font-label text-xs text-on-surface-variant uppercase tracking-wide">{label}</span>
      <span className="font-label text-[10px] text-primary font-semibold">{sub}</span>
    </motion.div>
  )
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className="border-b border-outline-variant/15 last:border-0"
      initial={false}
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="font-label font-semibold text-sm md:text-base text-on-surface group-hover:text-primary transition-colors pr-4">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
          className="material-symbols-outlined text-on-surface-variant shrink-0"
          style={{ fontSize: '20px' }}
        >
          add
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-on-surface-variant leading-relaxed pb-5 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Phone Mockup ─────────────────────────────────────────────────────────────
function PhoneMockup() {
  return (
    <div className="w-[88px] h-[176px] rounded-[20px] bg-[#1a1e1a] border-[2.5px] border-[#2a322c] shadow-[0_24px_48px_rgba(0,0,0,0.35)] flex flex-col overflow-hidden shrink-0">
      <div className="flex justify-center pt-2 pb-1">
        <div className="w-10 h-2 bg-[#0f1210] rounded-full" />
      </div>
      <div className="flex-1 mx-1 mb-1 rounded-[14px] bg-surface-container-low overflow-hidden flex flex-col">
        <div className="px-2 pt-2 pb-1 flex justify-between items-center">
          <span className="text-[6px] font-bold text-on-surface">9:41</span>
          <div className="flex gap-0.5">
            <div className="w-2 h-1.5 bg-primary rounded-[2px]" />
            <div className="w-1.5 h-1.5 bg-primary/50 rounded-[2px]" />
            <div className="w-1 h-1.5 bg-primary/20 rounded-[2px]" />
          </div>
        </div>
        <div className="px-2 flex flex-col gap-1.5 flex-1 pb-2">
          <div className="h-1.5 w-14 bg-primary/25 rounded-full" />
          <div className="h-1 w-10 bg-on-surface/10 rounded-full" />
          <div className="grid grid-cols-2 gap-1 mt-0.5">
            <div className="h-9 bg-primary/15 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '12px' }}>payments</span>
            </div>
            <div className="h-9 bg-surface-container rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: '12px' }}>groups</span>
            </div>
          </div>
          <div className="space-y-1 mt-0.5">
            <div className="h-1 w-full bg-on-surface/6 rounded-full" />
            <div className="h-1 w-4/5 bg-on-surface/6 rounded-full" />
            <div className="h-1 w-3/4 bg-on-surface/6 rounded-full" />
          </div>
          <div className="mt-auto h-5 bg-primary rounded-lg flex items-center justify-center">
            <div className="h-0.5 w-8 bg-on-primary/50 rounded-full" />
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-1.5">
        <div className="w-7 h-0.5 bg-surface-container-highest rounded-full" />
      </div>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const navigate = useNavigate()

  // Parallax for hero section
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const dashY = useTransform(scrollYProgress, [0, 1], [0, 40])
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 20])

  // Stats in-view trigger
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })

  // Testimonial slider
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(i => (i + 1) % testimonials.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="bg-background text-on-surface font-body overflow-x-hidden">
      <Navbar />
      <main>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative pt-28 md:pt-32 pb-0 px-4 sm:px-6 md:px-10 overflow-hidden">
          {/* Particle background */}
          <div className="absolute inset-0 pointer-events-none">
            <Suspense fallback={null}>
              <ParticleBackground />
            </Suspense>
          </div>
          {/* Radial glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/4 translate-x-1/4" />

          <div className="max-w-[1280px] mx-auto relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1] }}
              className="flex justify-center mb-8"
            >
              <motion.span
                whileHover={{ scale: 1.04 }}
                className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container text-xs font-label font-bold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full cursor-default"
              >
                <motion.span
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-primary inline-block"
                />
                New: Enterprise V4.0 is Live
              </motion.span>
            </motion.div>

            {/* 2-col */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* LEFT */}
              <motion.div
                variants={stagger(0.1, 0.1)}
                initial="hidden"
                animate="show"
                className="text-center lg:text-left"
              >
                {/* Headline — staggered words */}
                <motion.h1
                  variants={fadeUp}
                  className="font-headline text-5xl sm:text-6xl md:text-7xl leading-[1.0] tracking-tight text-on-surface mb-6"
                >
                  All-in-One<br />
                  <motion.span
                    variants={fadeUp}
                    className="text-primary italic font-light"
                  >
                    Enterprise
                  </motion.span><br />
                  Management for<br />
                  Modern Organizations.
                </motion.h1>

                <motion.p variants={fadeUp} className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
                  Streamline your entire operation with a curated architectural approach to business data. Professional growth meets simplified administration.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(85,98,84,0.25)' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate('/contact')}
                    className="px-7 py-3.5 rounded-xl border border-outline/30 font-label font-semibold text-sm text-on-surface hover:bg-surface-container-low transition-colors"
                  >
                    Contact Us
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: '0 8px 28px rgba(85,98,84,0.35)' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate('/get-started')}
                    className="px-7 py-3.5 rounded-xl bg-atrium-gradient text-on-primary font-label font-semibold text-sm shadow-lg relative overflow-hidden group"
                  >
                    <span className="relative z-10">Get Started Free</span>
                    <motion.span
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.button>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                  {[
                    { icon: 'lock', label: 'Safe & Secure' },
                    { icon: 'support_agent', label: '24/7 Support' },
                    { icon: 'verified', label: 'Trusted by 500+ Orgs' },
                  ].map(({ icon, label }) => (
                    <div key={label} className="flex items-center gap-1.5 text-on-surface-variant text-xs font-label">
                      <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px' }}>{icon}</span>
                      {label}
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* RIGHT — Dashboard + Phone */}
              <div className="relative flex items-end justify-center lg:justify-end">
                {/* Dashboard */}
                <motion.div
                  style={{ y: dashY }}
                  initial={{ opacity: 0, scale: 0.94, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.0, 0.0, 0.2, 1], delay: 0.25 }}
                  className="relative w-full max-w-[560px] bg-surface-container-lowest rounded-2xl p-3 shadow-[0_24px_64px_rgba(45,52,50,0.12)] border border-outline-variant/15"
                >
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-3 py-2 mb-2 bg-surface-container-low rounded-xl">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 bg-surface-container rounded-lg px-3 py-1 flex items-center gap-2">
                      <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: '12px' }}>lock</span>
                      <span className="text-[10px] text-on-surface-variant font-label">schoolerp.app/dashboard</span>
                    </div>
                    <span className="text-[9px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">● LIVE</span>
                  </div>
                  <motion.img
                    src={DASH_IMG}
                    alt="Craxnet Dashboard"
                    className="w-full h-auto rounded-xl object-cover aspect-[16/9]"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' } as object}
                  />
                </motion.div>

                {/* Phone mockup */}
                <motion.div
                  style={{ y: phoneY }}
                  initial={{ opacity: 0, x: -20, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.0, 0.0, 0.2, 1], delay: 0.45 }}
                  className="absolute -bottom-6 -left-2 lg:-left-6 z-10 hidden sm:flex flex-col items-center gap-1"
                >
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 } as object}
                  >
                    <PhoneMockup />
                  </motion.div>
                  <span className="text-[8px] font-label uppercase tracking-widest text-on-surface-variant/50">Mobile App</span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
        <section ref={statsRef} className="mt-20 md:mt-28 py-12 bg-surface-container-low border-y border-outline-variant/10">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={statsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center font-label text-[10px] uppercase tracking-[0.25em] text-on-surface-variant/50 mb-10"
            >
              Trusted by 500+ Organizations Worldwide
            </motion.p>
            <motion.div
              variants={stagger(0.12)}
              initial="hidden"
              animate={statsInView ? 'show' : 'hidden'}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            >
              {statsData.map(s => (
                <StatCard key={s.label} {...s} inView={statsInView} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── FEATURES GRID ─────────────────────────────────────────────────── */}
        <section className="py-20 md:py-32 px-4 sm:px-6 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection className="text-center mb-14 md:mb-20">
              <span className="font-label text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4 block">Platform</span>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight mb-4">
                Comprehensive Features to<br className="hidden md:block" />
                <span className="italic font-light"> Streamline Management</span>
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto">
                Explore the all-in-one features designed to digitize your operations — every department, every workflow.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {features.map(({ icon, title, desc }, i) => (
                <AnimatedSection key={title} delay={i * 0.06}>
                  <motion.div
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    className="group bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10 cursor-default h-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-200"
                    >
                      <span className="material-symbols-outlined text-primary group-hover:text-on-primary transition-colors" style={{ fontSize: '20px' }}>{icon}</span>
                    </motion.div>
                    <h3 className="font-headline text-lg font-semibold text-on-surface mb-2">{title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── MOBILE APP ────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-10 mx-4 sm:mx-6 md:mx-10 mb-16 md:mb-24 rounded-3xl bg-primary overflow-hidden relative">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-on-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <AnimatedSection direction="left">
              <h2 className="font-headline text-4xl md:text-5xl text-on-primary leading-tight mb-4">
                Manage Your Business<br />On-the-Go
              </h2>
              <p className="text-on-primary/75 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                Access critical insights and manage day-to-day operations from anywhere. Our mobile app puts the power of Craxnet in your pocket.
              </p>
              <div className="space-y-5 mb-10">
                {mobileFeatures.map(({ icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.45 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-on-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-on-primary" style={{ fontSize: '18px' }}>{icon}</span>
                    </div>
                    <div>
                      <p className="font-label font-bold text-on-primary text-sm">{title}</p>
                      <p className="text-on-primary/65 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: 'ios', label: 'App Store' },
                  { icon: 'android', label: 'Google Play' },
                ].map(({ icon, label }) => (
                  <motion.button
                    key={label}
                    whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.18)' }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 bg-on-primary/10 text-on-primary border border-on-primary/20 px-5 py-2.5 rounded-xl font-label text-sm font-semibold transition-colors"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{icon}</span>
                    {label}
                  </motion.button>
                ))}
              </div>
            </AnimatedSection>

            {/* Large phone */}
            <AnimatedSection direction="right" className="flex justify-center lg:justify-end">
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-[200px] md:w-[240px] h-[400px] md:h-[480px] rounded-[36px] bg-[#1a1e1a] border-[3px] border-[#2a322c] shadow-[0_32px_80px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden"
                >
                  <div className="flex justify-center pt-3 pb-1">
                    <div className="w-20 h-4 bg-[#0f1210] rounded-full" />
                  </div>
                  <div className="flex-1 mx-1.5 mb-1.5 rounded-[26px] bg-surface-container-low overflow-hidden flex flex-col">
                    <div className="px-4 pt-3 pb-2 flex justify-between items-center border-b border-outline-variant/10">
                      <span className="text-[10px] font-bold text-on-surface">9:41</span>
                      <span className="text-[9px] font-label text-on-surface-variant uppercase tracking-wide">Craxnet</span>
                    </div>
                    <div className="px-4 py-3 flex-1 flex flex-col gap-3">
                      <div className="h-3 w-28 bg-primary/20 rounded-full" />
                      <div className="h-2 w-20 bg-on-surface/8 rounded-full" />
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {[
                          { icon: 'payments', label: 'Fees', color: 'bg-primary/15' },
                          { icon: 'groups', label: 'Students', color: 'bg-surface-container' },
                          { icon: 'how_to_reg', label: 'Attendance', color: 'bg-surface-container' },
                          { icon: 'campaign', label: 'Alerts', color: 'bg-primary/10' },
                        ].map(({ icon, label, color }) => (
                          <div key={label} className={`${color} rounded-xl p-3 flex flex-col gap-1.5`}>
                            <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px' }}>{icon}</span>
                            <span className="text-[9px] font-label text-on-surface-variant">{label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-1.5 mt-1">
                        <div className="h-1.5 w-full bg-on-surface/6 rounded-full" />
                        <div className="h-1.5 w-4/5 bg-on-surface/6 rounded-full" />
                        <div className="h-1.5 w-3/4 bg-on-surface/6 rounded-full" />
                      </div>
                      <div className="mt-auto h-9 bg-primary rounded-xl flex items-center justify-center">
                        <span className="text-[10px] font-label font-bold text-on-primary uppercase tracking-widest">View Dashboard</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center pb-2">
                    <div className="w-16 h-1 bg-surface-container-highest rounded-full" />
                  </div>
                </motion.div>
                <div className="absolute inset-0 -z-10 blur-3xl opacity-25 bg-on-primary rounded-full scale-75" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
        <section className="py-20 md:py-32 px-4 sm:px-6 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection className="text-center mb-14">
              <span className="font-label text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4 block">Testimonials</span>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight">
                Trusted by Hundreds of<br />
                <span className="italic font-light">Modern Organizations</span>
              </h2>
            </AnimatedSection>

            {/* Auto-sliding testimonials */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="bg-surface-container-lowest rounded-2xl p-8 md:p-12 border border-outline-variant/10 max-w-2xl mx-auto text-center"
                >
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: testimonials[activeTestimonial].stars }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-primary" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="font-headline italic text-xl md:text-2xl text-on-surface leading-relaxed mb-8">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <img src={testimonials[activeTestimonial].avatar} alt={testimonials[activeTestimonial].name} className="w-12 h-12 rounded-full object-cover" />
                    <div className="text-left">
                      <p className="font-label font-bold text-sm text-on-surface">{testimonials[activeTestimonial].name}</p>
                      <p className="font-label text-xs text-on-surface-variant">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    animate={{ width: i === activeTestimonial ? 24 : 8, opacity: i === activeTestimonial ? 1 : 0.35 }}
                    transition={{ duration: 0.3 }}
                    className="h-2 rounded-full bg-primary"
                  />
                ))}
              </div>
            </div>

            {/* Social proof */}
            <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
              {[
                { icon: 'domain', value: '500+', label: 'Organizations' },
                { icon: 'thumb_up', value: '95%', label: 'Satisfaction' },
                { icon: 'support_agent', value: '24/7', label: 'Support' },
              ].map(({ icon, value, label }) => (
                <AnimatedSection key={label} className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-primary mb-1" style={{ fontSize: '20px' }}>{icon}</span>
                  <span className="font-headline text-2xl text-on-surface">{value}</span>
                  <span className="font-label text-xs text-on-surface-variant">{label}</span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-surface-container-low border-y border-outline-variant/10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <AnimatedSection direction="left">
              <span className="font-label text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4 block">FAQ</span>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight mb-4">
                Frequently<br /><span className="italic font-light">Inquired.</span>
              </h2>
              <p className="text-on-surface-variant text-base leading-relaxed">
                Detailed answers for technical decision makers. Can't find what you're looking for?
              </p>
              <motion.a
                href="/contact"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 mt-6 font-label text-sm font-bold text-primary hover:underline underline-offset-4"
              >
                Speak with our team
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
              </motion.a>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="divide-y divide-outline-variant/15">
                {faqs.map(faq => <FAQItem key={faq.q} {...faq} />)}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection>
              <div className="bg-on-surface rounded-3xl p-10 sm:p-16 md:p-20 text-center relative overflow-hidden">
                {/* Animated gradient orbs */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.1, 0.06] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl pointer-events-none"
                />
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-container rounded-full blur-3xl pointer-events-none"
                />
                <div className="relative z-10">
                  <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-surface mb-6 leading-tight">
                    Elevate your<br /><span className="italic font-light">perspective.</span>
                  </h2>
                  <p className="text-surface/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Join the next generation of enterprise leaders who manage with clarity and intent.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(255,255,255,0.15)' }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => navigate('/get-started')}
                      className="bg-surface text-on-surface px-8 py-4 rounded-xl font-label font-bold text-sm"
                    >
                      Get Started Free
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.08)' }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => navigate('/contact')}
                      className="border border-surface/20 text-surface px-8 py-4 rounded-xl font-label font-bold text-sm"
                    >
                      Speak to an Advisor
                    </motion.button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
