import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import { fadeUp, stagger, cardHover } from '../lib/motion'

const plans = [
  {
    tier: 'Standard', name: 'Core', price: '$499', period: '/ Monthly',
    desc: 'Essential intelligence for growing teams looking to automate high-volume data workflows.',
    features: ['10,000 Monthly API Calls', 'Standard Security Suite', '48-hour Response Support'],
    cta: 'Start Core Trial', featured: false,
  },
  {
    tier: 'Recommended', name: 'Professional', price: '$1,299', period: '/ Monthly',
    desc: 'The gold standard for enterprise data units requiring deep analytical processing.',
    features: ['50,000 Monthly API Calls', 'SOC2 Type II Security', 'Priority 4-hour Support', 'Advanced Predictive Logic'],
    cta: 'Select Professional', featured: true,
  },
  {
    tier: 'Global', name: 'Enterprise', price: 'Custom', period: '/ Annual',
    desc: 'Bespoke infrastructure for global organizations with custom compliance needs.',
    features: ['Unlimited API Volume', 'Dedicated On-prem Options', 'Dedicated Account Manager'],
    cta: 'Contact Sales', featured: false,
  },
]

const tableRows = [
  { label: 'Monthly Data Volume', core: '10GB', pro: '250GB', ent: 'Unlimited', entBold: true },
  { label: 'Real-time Latency', core: '500ms', pro: '100ms', ent: '<20ms', entBold: true },
  { label: 'Multi-tenant Cloud', core: 'check', pro: 'check', ent: 'check' },
  { label: 'Data Encryption (Rest/Transit)', core: 'check', pro: 'check', ent: 'check' },
  { label: 'Custom Taxonomy Engine', core: '—', pro: 'check', ent: 'check' },
  { label: 'White-label Reporting', core: '—', pro: '—', ent: 'check' },
]

const faqs = [
  { q: 'Can we switch plans at any time?', a: 'Yes. Upgrades take effect immediately with pro-rated billing. Downgrades take effect at the end of your current billing cycle.' },
  { q: 'What data sovereignty options exist?', a: 'Enterprise customers can select their preferred hosting region (AWS US-East, EU-West, or APAC) to comply with local data regulations including GDPR and CCPA.' },
  { q: 'Is there a setup fee?', a: 'Core and Professional plans feature zero setup fees. Enterprise implementations may include a one-time integration fee depending on complexity.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-outline-variant/15 last:border-0">
      <button onClick={() => setOpen(o => !o)} className="w-full flex justify-between items-center py-5 text-left group">
        <span className="font-label font-semibold text-sm md:text-base text-on-surface group-hover:text-primary transition-colors pr-4">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.22 }} className="material-symbols-outlined text-on-surface-variant shrink-0" style={{ fontSize: '20px' }}>add</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} className="overflow-hidden">
            <p className="text-sm text-on-surface-variant leading-relaxed pb-5 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Pricing() {
  const navigate = useNavigate()
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <div className="bg-background text-on-surface font-body overflow-x-hidden">
      <Navbar />
      <main className="pt-28 md:pt-32 pb-24">

        {/* ── HERO ── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 mb-12 md:mb-16">
          <motion.div variants={stagger(0.1)} initial="hidden" animate="show" className="text-center max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="font-label text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4 block">
              Investment in Intelligence
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-headline text-4xl sm:text-5xl md:text-6xl text-on-surface mb-5 leading-tight">
              Plans designed for <span className="italic font-light">precision.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Transparent enterprise pricing built on the bedrock of reliability.
            </motion.p>

            {/* Billing toggle */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-1 bg-surface-container-low rounded-xl p-1 border border-outline-variant/15">
              {(['monthly', 'yearly'] as const).map(b => (
                <motion.button
                  key={b}
                  onClick={() => setBilling(b)}
                  className={`relative px-5 py-2 rounded-lg font-label text-sm font-semibold transition-colors ${billing === b ? 'text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  {billing === b && (
                    <motion.span layoutId="billing-pill" className="absolute inset-0 bg-primary rounded-lg -z-10" transition={{ type: 'spring', stiffness: 380, damping: 36 }} />
                  )}
                  {b.charAt(0).toUpperCase() + b.slice(1)}
                  {b === 'yearly' && <span className="ml-1.5 text-[10px] font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">-20%</span>}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── PRICING CARDS ── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 mb-20 md:mb-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 items-stretch pt-8">
            {plans.map(({ tier, name, price, period, desc, features, cta, featured }, i) => (
              <AnimatedSection key={name} delay={i * 0.1}>
                <div className={`relative flex flex-col rounded-2xl h-full transition-all duration-300 ${
                  featured
                    ? 'bg-primary text-on-primary shadow-2xl shadow-primary/20 md:-mt-4 md:-mb-4 z-10'
                    : 'bg-surface-container-lowest border border-outline-variant/20'
                }`}>
                  {featured && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2"
                    >
                      <span className="bg-on-surface text-surface text-[10px] font-bold uppercase tracking-[0.15em] px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                        Most Popular
                      </span>
                    </motion.div>
                  )}
                  <div className={`flex flex-col flex-1 p-8 md:p-10 ${featured ? 'pt-10' : ''}`}>
                    <span className={`font-label text-[10px] uppercase tracking-[0.2em] font-bold mb-4 ${featured ? 'text-on-primary/70' : 'text-primary'}`}>{tier}</span>
                    <h3 className={`font-headline text-3xl md:text-4xl italic mb-3 ${featured ? 'text-on-primary' : 'text-on-surface'}`}>{name}</h3>
                    <div className="flex items-baseline gap-1.5 mb-4">
                      <motion.span
                        key={billing + name}
                        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                        className={`font-headline text-4xl md:text-5xl font-light ${featured ? 'text-on-primary' : 'text-on-surface'}`}
                      >
                        {price === 'Custom' ? 'Custom' : billing === 'yearly' && price !== 'Custom'
                          ? `$${Math.round(parseInt(price.replace('$', '')) * 0.8).toLocaleString()}`
                          : price}
                      </motion.span>
                      <span className={`font-label text-xs uppercase tracking-tight ${featured ? 'text-on-primary/60' : 'text-on-surface-variant'}`}>{period}</span>
                    </div>
                    <p className={`text-sm leading-relaxed mb-6 ${featured ? 'text-on-primary/75' : 'text-on-surface-variant'}`}>{desc}</p>
                    <div className={`h-px mb-6 ${featured ? 'bg-on-primary/15' : 'bg-outline-variant/20'}`} />
                    <ul className="space-y-3 mb-8 flex-1">
                      {features.map((f, fi) => (
                        <motion.li
                          key={f}
                          initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }} transition={{ delay: fi * 0.07 }}
                          className="flex items-start gap-3"
                        >
                          <span className={`material-symbols-outlined shrink-0 mt-0.5 ${featured ? 'text-on-primary' : 'text-primary'}`}
                            style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          <span className={`text-sm leading-snug ${featured ? 'text-on-primary/90' : 'text-on-surface'}`}>{f}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ scale: 1.03, boxShadow: featured ? '0 8px 24px rgba(255,255,255,0.15)' : '0 8px 24px rgba(85,98,84,0.2)' }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => navigate('/get-started')}
                      className={`w-full py-4 rounded-xl font-label text-sm font-bold uppercase tracking-widest transition-all ${
                        featured ? 'bg-on-primary text-primary hover:bg-on-primary/90 shadow-lg' : 'bg-primary text-on-primary hover:opacity-90 shadow-md'
                      }`}
                    >
                      {cta}
                    </motion.button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 mb-20 md:mb-28">
          <AnimatedSection className="mb-10">
            <h2 className="font-headline text-3xl md:text-4xl italic mb-3">Compare Capabilities</h2>
            <div className="h-0.5 w-20 bg-primary/25 rounded-full" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="overflow-x-auto rounded-2xl border border-outline-variant/10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant/10 bg-surface-container-low">
                    <th className="py-5 px-6 font-label text-xs uppercase tracking-widest text-on-surface-variant">Core Engine</th>
                    {['Core', 'Professional', 'Enterprise'].map(h => (
                      <th key={h} className="py-5 px-4 font-headline text-lg italic text-on-surface">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map(({ label, core, pro, ent, entBold }, ri) => (
                    <motion.tr
                      key={label}
                      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                      viewport={{ once: true }} transition={{ delay: ri * 0.05 }}
                      className="border-b border-outline-variant/8 hover:bg-surface-container-low/50 transition-colors"
                    >
                      <td className="py-5 px-6 text-on-surface font-medium text-sm">{label}</td>
                      {[core, pro, ent].map((val, i) => (
                        <td key={i} className="py-5 px-4">
                          {val === 'check'
                            ? <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                            : <span className={`text-sm ${entBold && i === 2 ? 'font-bold text-primary' : 'text-on-surface-variant'}`}>{val}</span>
                          }
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </section>

        {/* ── TRUST BENTO ── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 mb-20 md:mb-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 md:min-h-[480px]">
            <AnimatedSection direction="left" className="md:col-span-8 md:row-span-2">
              <div className="relative rounded-2xl overflow-hidden h-full min-h-[300px] group">
                <motion.img
                  whileHover={{ scale: 1.04 }} transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA-7XN5d2KZAhtu-W5It2UpbtxxnT-cK0XZE4Tgd-vis_VN-GsvMJObkPDWSgCKspXd5jVf1SOl6OL1EeaEg909aZNGmQGIwZ3ikbTsrYaYe1kLwNuC9E5FhmJqdoejOmxilwr-yqVdAS0gt_LwfcvzqI1Pk54osuT0KmAh7aQnuwE1FbyUt_FqiOMvuiXffRMZ7VD6QaAv9V9GgcwQui1XnTRhw40c_AwOwov7fDdSmdELY6Bnsfj9aLQGNadv4sUNloQlWs79Iec"
                  alt="Security"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-xl">
                  <h3 className="font-headline text-3xl md:text-4xl text-white mb-3 italic">Built for High-Stakes Environments</h3>
                  <p className="text-white/80 text-base">Our infrastructure is physically isolated and audited annually by leading third-party security firms.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1} className="md:col-span-4">
              <motion.div variants={cardHover} initial="rest" whileHover="hover" className="bg-primary-container p-8 md:p-10 rounded-2xl flex flex-col justify-center text-on-primary-container h-full">
                <motion.span whileHover={{ scale: 1.15 }} className="material-symbols-outlined text-4xl mb-5 block">encrypted</motion.span>
                <h4 className="font-headline text-xl md:text-2xl mb-2 italic">Quantum-Ready Encryption</h4>
                <p className="text-sm leading-relaxed opacity-80">Future-proof security protocols ensuring your data remains unreadable to unauthorized entities for decades to come.</p>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2} className="md:col-span-4">
              <motion.div variants={cardHover} initial="rest" whileHover="hover" className="bg-surface-container-highest p-8 md:p-10 rounded-2xl flex flex-col justify-center h-full">
                <motion.span whileHover={{ scale: 1.15 }} className="material-symbols-outlined text-4xl text-primary mb-5 block">headset_mic</motion.span>
                <h4 className="font-headline text-xl md:text-2xl mb-2 italic">Human-Led Support</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">No bots. Your dedicated success team consists of senior data architects available around the clock.</p>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 mb-20 md:mb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <AnimatedSection direction="left">
              <h2 className="font-headline text-4xl md:text-5xl mb-6 leading-tight">Frequently <br /><span className="italic font-light">Inquired.</span></h2>
              <p className="text-on-surface-variant text-base leading-relaxed mb-6">Detailed answers for technical decision makers.</p>
              <motion.a whileHover={{ x: 4 }} href="#" className="inline-flex items-center gap-2 font-label text-sm font-bold text-primary hover:underline underline-offset-4">
                Speak with our technical team <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
              </motion.a>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="divide-y divide-outline-variant/15">
                {faqs.map(faq => <FAQItem key={faq.q} {...faq} />)}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
          <AnimatedSection>
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(45,52,50,0.08)] border border-outline-variant/10">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 md:p-20 flex flex-col justify-center">
                  <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">Begin your <span className="italic font-light">evolution.</span></h2>
                  <p className="text-on-surface-variant text-base md:text-lg mb-10">Experience the platform that is redefining enterprise intelligence. Start your 14-day Professional trial today.</p>
                  <div className="flex flex-wrap gap-4">
                    <motion.button whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(85,98,84,0.25)' }} whileTap={{ scale: 0.97 }} onClick={() => navigate('/get-started')} className="bg-atrium-gradient text-on-primary px-8 py-3.5 rounded-xl font-label font-semibold text-sm shadow-lg">Get Started</motion.button>
                    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => navigate('/contact')} className="px-8 py-3.5 rounded-xl border border-outline/20 font-label font-semibold text-sm hover:bg-surface-container-low transition-colors">Book a Demo</motion.button>
                  </div>
                </div>
                <div className="relative min-h-[280px]">
                  <motion.img whileHover={{ scale: 1.04 }} transition={{ duration: 0.6 }} className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu2UI483X6KrhPtN4AW8oXkBiTckGlXi8JNSYzHN5zagHvLjgwzdtJ2N4z1MQB-_iYPY9m4vSXCFcLd4TmF3868rtnHc677eyFGcRGPgNPNuOQJWoBqRCVp0LrqnWh3JiW2J2xgbg8zHxrY3t7Xpv8n0vedpIQ6H2WS5ZpM3v0nTmtN7te5TOZUWMDcIn-14mLMAts-7LZZEIXrPlcqDzEHok5HOtQeZsNHd5JzCtncTZe_oGcrr-Y7JeW44mEsh7awsAa5l9D-GIn" alt="CTA" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  )
}
