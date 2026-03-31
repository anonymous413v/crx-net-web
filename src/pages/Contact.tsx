import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import { fadeUp, stagger, cardHover } from '../lib/motion'

const socials = ['LinkedIn', 'X (Twitter)', 'Instagram', 'Medium']

export default function Contact() {
  return (
    <div className="bg-background text-on-surface font-body overflow-x-hidden">
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24">

        {/* ── HERO ── */}
        <header className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 mb-14 md:mb-20">
          <motion.div variants={stagger(0.1, 0.05)} initial="hidden" animate="show" className="max-w-3xl">
            <motion.span variants={fadeUp} className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-5 block font-bold">
              Inquiry & Collaboration
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-on-surface leading-[1.05] tracking-tight mb-6">
              Let's start a <span className="italic font-light">conversation</span> about the future.
            </motion.h1>
            <motion.p variants={fadeUp} className="font-body text-base md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Whether you're seeking to integrate enterprise intelligence or explore a strategic partnership, our atelier is ready to craft your solution.
            </motion.p>
          </motion.div>
        </header>

        {/* ── CONTACT BENTO ── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">

          {/* Form */}
          <AnimatedSection direction="left" className="lg:col-span-7 md:col-span-1">
            <div className="bg-surface-container-lowest p-8 md:p-14 rounded-2xl shadow-[0_8px_40px_rgba(45,52,50,0.06)] relative overflow-hidden border border-outline-variant/10">
              <div className="relative z-10">
                <h2 className="font-headline text-3xl md:text-4xl mb-10">Send a message</h2>
                <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { label: 'Full Name', placeholder: 'Johnathan Doe', type: 'text' },
                      { label: 'Email Address', placeholder: 'j.doe@enterprise.com', type: 'email' },
                    ].map(({ label, placeholder, type }) => (
                      <motion.div key={label} whileFocus={{ scale: 1.01 }} className="relative">
                        <label className="font-label text-xs uppercase tracking-widest text-on-surface/50 mb-3 block">{label}</label>
                        <input
                          className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 focus:ring-0 focus:border-primary transition-all font-body text-base md:text-lg placeholder:text-on-surface/20 outline-none"
                          placeholder={placeholder} type={type}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="relative">
                    <label className="font-label text-xs uppercase tracking-widest text-on-surface/50 mb-3 block">Subject of Inquiry</label>
                    <select className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 focus:ring-0 focus:border-primary transition-all font-body text-base md:text-lg appearance-none outline-none">
                      <option>General Inquiry</option>
                      <option>Enterprise Solutions</option>
                      <option>Partnership Proposal</option>
                      <option>Technical Support</option>
                    </select>
                  </div>
                  <div className="relative">
                    <label className="font-label text-xs uppercase tracking-widest text-on-surface/50 mb-3 block">Your Message</label>
                    <textarea
                      className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 focus:ring-0 focus:border-primary transition-all font-body text-base md:text-lg placeholder:text-on-surface/20 resize-none outline-none"
                      placeholder="Tell us about your project or vision..." rows={4}
                    />
                  </div>
                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.03, backgroundColor: 'var(--primary)' }}
                      whileTap={{ scale: 0.97 }}
                      className="group flex items-center gap-4 bg-on-surface text-surface px-8 py-4 rounded-xl font-label text-sm font-bold uppercase tracking-widest transition-colors duration-300"
                      type="submit"
                    >
                      <span>Dispatch Inquiry</span>
                      <motion.span
                        className="material-symbols-outlined"
                        style={{ fontSize: '18px' }}
                        animate={{ x: [0, 0] }}
                        whileHover={{ x: 4 }}
                      >
                        arrow_forward
                      </motion.span>
                    </motion.button>
                  </div>
                </form>
              </div>
              {/* Decorative glow */}
              <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            </div>
          </AnimatedSection>

          {/* Side Info */}
          <div className="lg:col-span-5 md:col-span-1 space-y-5 md:space-y-6">
            <AnimatedSection direction="right">
              <motion.div variants={cardHover} initial="rest" whileHover="hover" className="bg-surface-container-low p-8 md:p-10 rounded-2xl border border-outline-variant/10">
                <h3 className="font-headline text-xl md:text-2xl mb-7">Our Headquarters</h3>
                <div className="space-y-7">
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>location_on</span>
                    </div>
                    <div>
                      <p className="font-label text-xs uppercase tracking-widest text-primary mb-1">Global Studio</p>
                      <address className="not-italic font-body text-base text-on-surface-variant leading-relaxed">
                        88 Editorial Lane, Suite 400<br />
                        London, W1D 3QT<br />
                        United Kingdom
                      </address>
                    </div>
                  </div>
                  <div className="aspect-video w-full rounded-xl overflow-hidden bg-surface-container-highest">
                    <motion.img
                      whileHover={{ scale: 1.05, filter: 'grayscale(0%)' }}
                      initial={{ filter: 'grayscale(80%)' }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover opacity-80"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWUpC1cHwunuqXIKwXfipBtslt6YE-cy1JsKnaWh7rA7tajmbD6qKBwrGm6qW9bs_yTaq_gRpANaKIugTlLBtnkOQxeuBOCTngEgHuzGGe1qFEwqsBemVLpKJS_JLEKiXw69SDPovDIDwcXQ6OwZiDJrroBtGfXsz2Qb0ocbNsgn00iHC70rXizyhh-2uvk7JaW9OJXdzV6Vt-4IDzgyGUYK99ysfLI7QcO24TZ1-dLxMXaoTK7xd9a7IrQUt3RYHp3wH7dNCbbIBG"
                      alt="Location"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: 'mail', label: 'Direct Correspondence', value: 'concierge@craxnet.com' },
                  { icon: 'call', label: 'Global Line', value: '+44 (0) 20 7946 0123' },
                ].map(({ icon, label, value }) => (
                  <motion.div
                    key={label}
                    variants={cardHover} initial="rest" whileHover="hover"
                    className="bg-surface-container-highest p-7 md:p-8 rounded-2xl group cursor-pointer border border-outline-variant/10 hover:bg-primary hover:border-primary transition-colors duration-400"
                  >
                    <motion.span whileHover={{ scale: 1.15 }} className="material-symbols-outlined text-primary mb-3 block group-hover:text-surface transition-colors" style={{ fontSize: '22px' }}>{icon}</motion.span>
                    <p className="font-label text-xs uppercase tracking-widest text-primary/60 group-hover:text-surface/60 mb-1 transition-colors">{label}</p>
                    <p className="font-headline text-xl md:text-2xl text-on-surface group-hover:text-surface transition-colors">{value}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── SOCIAL ── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 mt-16 md:mt-20">
          <AnimatedSection>
            <div className="border-t border-outline-variant/15 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap items-center gap-6 md:gap-10">
                {socials.map((s, i) => (
                  <motion.a
                    key={s}
                    href="#"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    whileHover={{ y: -2, color: 'var(--primary)' }}
                    className="font-label text-xs uppercase tracking-widest text-on-surface/40 transition-colors"
                  >
                    {s}
                  </motion.a>
                ))}
              </div>
              <div className="text-right">
                <p className="font-label text-xs uppercase tracking-widest text-on-surface/40">Current Studio Time</p>
                <p className="font-headline text-lg md:text-xl text-on-surface">London — 09:42 AM GMT</p>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  )
}
