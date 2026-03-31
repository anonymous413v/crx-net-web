import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, stagger, slideRight, cardHover } from '../lib/motion'

const perks = [
  { icon: 'encrypted', title: 'Enterprise-Grade Security', desc: 'Your data is siloed, encrypted, and governed by sovereign protocols.' },
  { icon: 'auto_awesome', title: 'Bespoke Onboarding', desc: 'Every Craxnet instance is tuned to your specific industry vertical.' },
  { icon: 'speed', title: 'Live in 48 Hours', desc: 'Our team handles migration and setup so you can focus on what matters.' },
]

export default function GetStarted() {
  return (
    <div className="bg-background text-on-surface font-body antialiased min-h-screen overflow-x-hidden">

      {/* ── MINIMAL HEADER ── */}
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.0, 0.0, 0.2, 1] }}
        className="fixed top-0 w-full z-50 h-16 flex items-center px-4 sm:px-6 md:px-10 glass-nav border-b border-outline-variant/10"
      >
        <div className="max-w-[1280px] mx-auto w-full flex justify-between items-center">
          <Link to="/" className="font-headline text-xl font-bold text-on-surface hover:text-primary transition-colors">
            CraxNet ERP
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-xs font-label uppercase tracking-widest text-on-surface/40 hidden sm:block">Step 01 of 03</span>
            <div className="w-24 md:w-32 h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '33%' }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.0, 0.0, 0.2, 1] }}
                className="h-full bg-atrium-gradient rounded-full"
              />
            </div>
          </div>
        </div>
      </motion.header>

      <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">

          {/* ── LEFT: Editorial ── */}
          <motion.div
            variants={stagger(0.1, 0.1)}
            initial="hidden"
            animate="show"
            className="lg:col-span-5 space-y-10 lg:sticky lg:top-28"
          >
            <div className="space-y-5">
              <motion.span variants={fadeUp} className="font-label text-xs uppercase tracking-[0.2em] text-primary font-bold block">
                Get Started
              </motion.span>
              <motion.h1 variants={fadeUp} className="font-headline text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-on-surface">
                Begin your journey into <span className="italic font-light">intelligence</span>.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-base md:text-lg text-on-surface-variant font-light max-w-md leading-relaxed">
                Join an elite circle of organizations leveraging Craxnet to transform raw data into architectural enterprise clarity.
              </motion.p>
            </div>

            {/* Perks */}
            <div className="space-y-5">
              {perks.map(({ icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  custom={i}
                  className="flex gap-5 items-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}
                    className="w-11 h-11 rounded-xl bg-primary-container flex items-center justify-center shrink-0"
                  >
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>{icon}</span>
                  </motion.div>
                  <div>
                    <h4 className="font-headline text-lg font-bold mb-1">{title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl bg-surface-container-low border border-outline-variant/10"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-primary" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="italic font-headline text-base md:text-lg text-on-surface leading-relaxed mb-5">
                "Craxnet didn't just provide a tool; they redefined how our executive board perceives market dynamics."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHufITYNWrS5-mDpQhEsubS4yPuCVo3bMAhp-NARfoUwlgWMVlaDbxS_K9kLU6VAiGcOwCtJ9pxGCWNt-JfcvbVjqoslWrVyTztLbKiGUCLFYjL9T71botGne9ZKigq1RasPIM3GQqFQPKak6lJgHnWb-kOld7bC-TUqUfBKhijNK9TkBFrSeyhqZu6eH-vCkAobNHbUvU04vBZjdCcLdgCpy_nOhJIS2gz4QwIKxyUsVMt1D5rcvoTLKVC36DQ5QTM2YlFea7YnY6" alt="Marcus Chen" />
                </div>
                <span className="text-xs font-label uppercase tracking-wider text-on-surface/60">Marcus Chen, CTO at Lumina Global</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.div
              variants={cardHover} initial="rest" whileHover="hover"
              className="bg-surface-container-lowest rounded-2xl shadow-[0_8px_40px_rgba(45,52,50,0.08)] p-8 md:p-14 border border-outline-variant/10"
            >
              <div className="mb-8">
                <h2 className="font-headline text-2xl md:text-3xl mb-2">Create your account</h2>
                <p className="text-on-surface-variant text-sm">Enter your professional details to get started.</p>
              </div>

              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { label: 'First Name', placeholder: 'Julian' },
                    { label: 'Last Name', placeholder: 'Artemis' },
                  ].map(({ label, placeholder }) => (
                    <div key={label} className="space-y-2">
                      <label className="text-xs font-label uppercase tracking-widest text-on-surface/60">{label}</label>
                      <input
                        className="w-full px-4 py-3.5 rounded-xl bg-surface-container-low border border-outline-variant/15 focus:border-primary/40 focus:ring-0 transition-all placeholder:text-on-surface/20 text-sm outline-none"
                        placeholder={placeholder} type="text"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-label uppercase tracking-widest text-on-surface/60">Work Email</label>
                  <input
                    className="w-full px-4 py-3.5 rounded-xl bg-surface-container-low border border-outline-variant/15 focus:border-primary/40 focus:ring-0 transition-all placeholder:text-on-surface/20 text-sm outline-none"
                    placeholder="j.artemis@enterprise.com" type="email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-label uppercase tracking-widest text-on-surface/60">Organization</label>
                  <div className="relative">
                    <input
                      className="w-full px-4 py-3.5 rounded-xl bg-surface-container-low border border-outline-variant/15 focus:border-primary/40 focus:ring-0 transition-all placeholder:text-on-surface/20 text-sm outline-none pr-12"
                      placeholder="Select or type company name" type="text"
                    />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface/30" style={{ fontSize: '18px' }}>business</span>
                  </div>
                </div>

                {/* Plan selector */}
                <div className="space-y-2">
                  <label className="text-xs font-label uppercase tracking-widest text-on-surface/60">Select Plan</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Core', 'Professional', 'Enterprise'].map((plan, i) => (
                      <motion.label
                        key={plan}
                        whileHover={{ scale: 1.02 }}
                        className="relative cursor-pointer"
                      >
                        <input type="radio" name="plan" defaultChecked={i === 1} className="sr-only peer" />
                        <div className="px-3 py-3 rounded-xl border border-outline-variant/20 text-center text-xs font-label font-semibold text-on-surface-variant peer-checked:border-primary peer-checked:bg-primary-container peer-checked:text-primary transition-all">
                          {plan}
                        </div>
                      </motion.label>
                    ))}
                  </div>
                </div>

                <div className="space-y-5 pt-2">
                  <div className="flex items-start gap-3">
                    <input className="mt-1 rounded border-outline-variant/30 text-primary focus:ring-primary/20" type="checkbox" />
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      I agree to the <a href="#" className="text-primary hover:underline underline-offset-2">Terms of Service</a> and acknowledge the <a href="#" className="text-primary hover:underline underline-offset-2">Privacy Policy</a>.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 8px 28px rgba(85,98,84,0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-atrium-gradient text-on-primary rounded-xl font-label uppercase tracking-widest font-bold shadow-lg relative overflow-hidden"
                    type="submit"
                  >
                    <span className="relative z-10">Continue to Workspace Setup</span>
                    <motion.span
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.button>
                </div>
              </form>

              <div className="mt-10 pt-8 border-t border-outline-variant/10 text-center">
                <p className="text-sm text-on-surface-variant">
                  Already have an account?{' '}
                  <motion.a whileHover={{ color: 'var(--primary)' }} href="#" className="text-on-surface font-bold transition-colors">Sign In</motion.a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* ── MINIMAL FOOTER ── */}
      <footer className="w-full py-10 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-5">
          <div>
            <span className="font-headline text-lg font-bold text-on-surface">CraxNet ERP</span>
            <p className="text-xs font-label text-on-surface/40 uppercase tracking-widest mt-1">© 2024 Craxnet. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Support'].map(l => (
              <motion.a key={l} whileHover={{ y: -2, color: 'var(--primary)' }} href="#" className="text-xs font-label uppercase tracking-widest text-on-surface/50 transition-colors">
                {l}
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
