import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import { fadeUp, stagger, cardHover } from '../lib/motion'

const ch3Items = [
  { title: 'Library & Digital Assets', tag: 'Inventory', desc: 'End-to-end cataloging with barcode support. Manage physical volumes alongside digital licenses and research subscriptions.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPjFnOvQo4MFkWyI43nkfd0Or66SRWZjEtcCtarKuDHpl1FzT9o276ev0NexbePZwr9MFncu0Mthy03wbFmKVoRx5Jd814p2-fFEbPtjU3LpGEIoo3hN2qh4ptPZCRrMSsap1XuBElR0yfBaREbdDE8VLJ8mIe51nq7zp6_3gxNl3kgR6kte1bduYMLRe2Je5R1_FouUNSXnb3NqKp7fXT1NxdxrIu0ZsS-Sw-uXavah_dD9HFewq3AGhdaZMujcEmFh3DEBhAh4Gg' },
  { title: 'Staff & Payroll Management', tag: 'Human Capital', desc: 'Streamlined recruitment, attendance, and payroll processing. Dedicated portal for staff to access payslips, leaves, and appraisal history.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9tPdACZmzkIRb8gMzCSSbf1I3FceAnbLKVHCIdRjCp3Fx2zT-211t_Ii-KFe1zKxds9Ucur-Nf9CaphYw6jTsZlxx4jhA7ICMyMjof2wsRKS25BxjsDGS1mGWSiUaR5GrodFm6InBv-Kebn4BxQalUBmcz2mWrdfBlujJfuNuTgUXZgCbH1GYDjkQuCBmrxDEIV25myp_J-kdBjXlxg-Q5lqySmQrUe9NebEEAt3bgD1Z5vD0_y6X-2jC1KuBqJWPXIr497aSzGT6' },
  { title: 'Inventory & Procurement', tag: 'Resources', desc: 'Asset tracking across multiple departments. Automated low-stock alerts and vendor management to prevent operational bottlenecks.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH9fLQfRZKwCbeS06rqtsDDVFT9uxOVJpklN-A6zE7vVVRHl_9gPGNxyz4SqGrNbO0lf-5t7I6g2UaSx7hTYeFZmYUQ73q9tl3bTNPgA0MSSPnJHul52oSM866ow9tFEUXXqcobD5xCZg_3IVqrc5TlYWZLF6G02RK1VZTSeVEcpiw60ZPQNC2c63gPTE-yIKLTwdV5F9TfvfxtEynTIq73cneoQ0SoXdjwLkh91uASIk3hyeZzoEv52aa89xRxGYXVjk59twN-DlN' },
]

export default function Features() {
  const navigate = useNavigate()
  return (
    <div className="bg-background text-on-surface font-body overflow-x-hidden">
      <Navbar />
      <main className="pt-28 md:pt-32">

        {/* ── HERO ── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 mb-16 md:mb-24">
          <motion.div variants={stagger(0.1, 0.05)} initial="hidden" animate="show" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <motion.span variants={fadeUp} className="font-label text-xs tracking-[0.2em] uppercase text-primary font-bold mb-5 block">Capabilities</motion.span>
              <motion.h1 variants={fadeUp} className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tighter text-on-surface">
                The Infrastructure of <span className="italic font-light">Academic Excellence.</span>
              </motion.h1>
            </div>
            <motion.div variants={fadeUp} className="lg:col-span-5 pb-2">
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
                Modular architecture designed for institutional growth. From automated fee cycles to precise student tracking, Craxnet harmonizes complexity.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── CHAPTER 01 ── */}
        <section className="mb-16 md:mb-28">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
            <AnimatedSection className="flex flex-wrap items-center gap-3 mb-10 md:mb-14">
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ originX: 0 }} className="h-px flex-grow bg-outline-variant/20 hidden sm:block" />
              <span className="font-headline italic text-xl md:text-2xl text-primary">Chapter 01</span>
              <span className="font-label text-xs tracking-widest uppercase font-bold text-on-surface-variant">Financial Precision</span>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch">
              <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, ease: [0.0, 0.0, 0.2, 1] }}>
                <motion.div variants={cardHover} initial="rest" whileHover="hover" className="bg-surface-container-lowest p-7 md:p-12 rounded-2xl shadow-[0_4px_24px_rgba(45,52,50,0.07)] flex flex-col h-full border border-outline-variant/10">
                  <motion.div whileHover={{ scale: 1.12, rotate: 6 }} transition={{ duration: 0.22 }} className="inline-flex items-center justify-center w-11 h-11 bg-primary-container rounded-xl mb-7">
                    <span className="material-symbols-outlined text-primary">payments</span>
                  </motion.div>
                  <h3 className="font-headline text-2xl md:text-4xl mb-4">Fee Management System</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-7 text-sm md:text-base">Complete lifecycle automation for tuition, residential, and activity fees. Real-time reconciliation engine with automated invoice generation and secure payment gateway integration.</p>
                  <ul className="space-y-3 mt-auto">
                    {['Dynamic Discount & Scholarship Logic', 'Automated Late Fee Calculation', 'Multi-channel Notification Reminders'].map((item, i) => (
                      <motion.li key={item} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }} className="flex items-start gap-3">
                        <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.25 + i * 0.1, type: 'spring', stiffness: 400, damping: 20 }} className="material-symbols-outlined text-primary mt-0.5 shrink-0" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>check_circle</motion.span>
                        <span className="text-sm font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, ease: [0.0, 0.0, 0.2, 1], delay: 0.1 }} className="relative overflow-hidden rounded-2xl min-h-[280px] md:min-h-[460px]">
                <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} alt="Financial Dashboard" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRHuR1i4XR1S58wdZuvC5qZUfE8rGUKWkTdadpMIpr65ZQ_D6tM9Ak4vdArD6Qeh4LufoA4cd2WWBsKzS1d4UsBEGRuG9i0CwqGAQ-hoKXH0wXh8wGO4CdnRRWFu0TsW5yxxBQycM_NlKSvTbYhiQZxFGCMg7RhKx4012rdJQSLEW6crUZJduc21g2LiHz8DLpM7tZFfoSHibbvVRK88LYs5EFZZlmAJVRAThCLbLUqMcFtIv2zsouv3NiOqd_JSQWu_B-7EhuuPPY" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/50 to-transparent" />
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }} className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                  <p className="text-surface-container-lowest font-headline italic text-lg md:text-2xl">Precision in every decimal.</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER 02 ── */}
        <section className="bg-surface-container-low py-16 md:py-28 mb-16 md:mb-28">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
            <AnimatedSection className="flex flex-wrap items-center gap-3 mb-12 md:mb-16">
              <span className="font-label text-xs tracking-widest uppercase font-bold text-on-surface-variant">The Academic Core</span>
              <span className="font-headline italic text-xl md:text-2xl text-primary">Chapter 02</span>
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ originX: 0 }} className="h-px flex-grow bg-outline-variant/20 hidden sm:block" />
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55 }} className="md:col-span-8">
                <motion.div variants={cardHover} initial="rest" whileHover="hover" className="bg-surface-container-lowest p-7 md:p-10 rounded-2xl shadow-[0_4px_24px_rgba(45,52,50,0.07)] h-full">
                  <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-start sm:items-center">
                    <div className="flex-1">
                      <span className="font-label text-[10px] tracking-[0.3em] uppercase text-primary font-bold mb-3 block">Central Intelligence</span>
                      <h3 className="font-headline text-2xl md:text-4xl mb-4">Student Information System (SIS)</h3>
                      <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">A holistic digital identity for every learner. Track academic performance, health records, behavioral history, and extracurricular achievements in a unified secure vault.</p>
                    </div>
                    <div className="w-full sm:w-48 md:w-56 h-48 md:h-56 rounded-xl overflow-hidden shrink-0">
                      <motion.img whileHover={{ scale: 1.07 }} transition={{ duration: 0.5 }} alt="Student Management" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXK0BApXZ5SXdQl1DXmT0dC-eSf5lEF9OeypZMzuJhNcQctfvsXNrZBOw-mU9QW7gaOXeQ7piKZE4GDeRB_YF5LkmYKEJy_E3R8NLs1cRLo9-D50a7Op4gGPB8fUGcykb8nxBTLI9O0QvegT-gYWZ8Fy8IH_SrcdvdIQ5MsIENjW-WIWFK_caFIorO9mR7poxc4oqIOeNahKIXfzK0xcEOZX8nUBEd2xm8lsuYVgB8cb5XYlvfXgHum9cjSpuYUg_F3_vAVZ3gC-wl" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay: 0.1 }} className="md:col-span-4">
                <motion.div variants={cardHover} initial="rest" whileHover="hover" className="bg-primary text-on-primary p-7 md:p-10 rounded-2xl flex flex-col justify-between h-full min-h-[200px]">
                  <div>
                    <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }} className="material-symbols-outlined text-3xl md:text-4xl mb-4 block">fingerprint</motion.span>
                    <h3 className="font-headline text-xl md:text-3xl mb-3">Biometric Attendance</h3>
                    <p className="text-on-primary/80 text-sm leading-relaxed">Eliminate manual errors with integrated RFID and biometric support. Real-time absence alerts sent directly to guardians.</p>
                  </div>
                  <div className="pt-5 border-t border-on-primary/10 mt-5">
                    <span className="text-xs uppercase tracking-widest font-bold">Efficiency: +98%</span>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay: 0.05 }} className="md:col-span-4">
                <motion.div variants={cardHover} initial="rest" whileHover="hover" className="bg-surface-container-high p-7 md:p-10 rounded-2xl h-full">
                  <motion.span whileHover={{ x: 4 }} className="material-symbols-outlined text-on-surface mb-4 block" style={{ fontSize: '26px' }}>local_shipping</motion.span>
                  <h3 className="font-headline text-xl md:text-3xl mb-3">Transport Management</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">Route optimization and real-time vehicle tracking. Geo-fencing alerts for arrivals and departures.</p>
                  <motion.a whileHover={{ x: 5 }} href="#" className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                    Learn more <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                  </motion.a>
                </motion.div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay: 0.15 }} className="md:col-span-8">
                <motion.div variants={cardHover} initial="rest" whileHover="hover" className="bg-surface-container-lowest p-7 md:p-10 rounded-2xl border border-outline-variant/15 flex flex-col sm:flex-row gap-6 h-full">
                  <div className="flex-1">
                    <h3 className="font-headline text-2xl md:text-4xl mb-3">Exam & Result Module</h3>
                    <p className="text-on-surface-variant leading-relaxed text-sm">Complex grading systems made simple. Whether it's GPA, CGPA, or custom weightage, our engine handles massive datasets to produce beautiful, digital report cards instantly.</p>
                  </div>
                  <div className="flex gap-4 shrink-0">
                    <div className="w-16 md:w-20 bg-surface-container rounded-2xl flex flex-col items-center justify-around py-4 gap-2">
                      {['A+', 'B', 'A-'].map((grade, i) => (
                        <motion.span key={grade} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.12, type: 'spring', stiffness: 400, damping: 20 }} whileHover={{ scale: 1.25, color: 'var(--primary)' }} className="font-headline text-base md:text-lg italic text-on-surface cursor-default">{grade}</motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER 03 ── */}
        <section className="mb-16 md:mb-28">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
            <AnimatedSection className="flex flex-wrap items-center gap-3 mb-12 md:mb-16">
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ originX: 0 }} className="h-px flex-grow bg-outline-variant/20 hidden sm:block" />
              <span className="font-headline italic text-xl md:text-2xl text-primary">Chapter 03</span>
              <span className="font-label text-xs tracking-widest uppercase font-bold text-on-surface-variant">Operational Harmony</span>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {ch3Items.map(({ title, tag, desc, img }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay: i * 0.12 }}>
                  <motion.div variants={cardHover} initial="rest" whileHover="hover" className="group cursor-default">
                    <div className="mb-5 overflow-hidden rounded-2xl aspect-square bg-surface-container relative">
                      <motion.img initial={{ filter: 'grayscale(70%)' }} whileHover={{ scale: 1.07, filter: 'grayscale(0%)' }} transition={{ duration: 0.5 }} alt={title} className="w-full h-full object-cover" src={img} />
                      <motion.div initial={{ opacity: 0, y: -8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1.5 rounded-full font-label text-[10px] tracking-widest uppercase">{tag}</motion.div>
                    </div>
                    <h4 className="font-headline text-xl md:text-3xl mb-3">{title}</h4>
                    <p className="text-on-surface-variant leading-relaxed text-sm">{desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 mb-16 md:mb-28">
          <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} className="bg-surface-container-lowest rounded-2xl shadow-[0_8px_40px_rgba(45,52,50,0.08)] overflow-hidden flex flex-col lg:flex-row border border-outline-variant/10">
            <div className="flex-1 p-8 md:p-14 flex flex-col justify-center">
              <motion.span initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="font-label text-xs tracking-[0.2em] uppercase text-primary font-bold mb-4 block">Future-Proofing</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.55 }} className="font-headline text-3xl md:text-5xl lg:text-6xl leading-tight mb-5">Intelligence that <span className="italic font-light">Adapts.</span></motion.h2>
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.28, duration: 0.5 }} className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-xl mb-7">Our cloud architecture ensures your institution stays ahead of the curve. Regular updates, bank-grade encryption, and seamless scalability are built into our DNA.</motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.36 }} className="flex flex-wrap gap-3">
                <motion.button whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(85,98,84,0.28)' }} whileTap={{ scale: 0.97 }} onClick={() => navigate('/contact')} className="bg-primary text-on-primary px-7 py-3.5 rounded-xl font-label font-semibold text-sm">Schedule a Demo</motion.button>
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="bg-surface-container-highest text-on-surface px-7 py-3.5 rounded-xl font-label font-semibold text-sm hover:bg-surface-container-high transition-colors">View All Modules</motion.button>
              </motion.div>
            </div>
            <div className="w-full lg:w-2/5 relative bg-surface-container-high min-h-[220px] md:min-h-[320px]">
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} alt="Abstract" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIxIL5J4umaL4VS_1YcTSSvlofuuiVpudpD9dS-bioMgtkIEay5FmKhHdsIZqyUKXrp7WVbbjuKzbi5Mnmlg2wLjI_h6BmK5VT-o2AOWgFe7-NTwvPrECRr0m_sL2Fjxr7k83msMLdPnDt9SXG4hp2qHijgwNu1A8tWBW5AfRLtVBUiSSMIuD5uVYcE2fnhQVR4DSPPmfFUddQvQhWODZ0c3gw6-ZxyknlYd" />
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
