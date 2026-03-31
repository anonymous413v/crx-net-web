import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import { fadeUp, stagger, slideLeft, slideRight, cardHover } from '../lib/motion'

const team = [
  { name: 'Julian Thorne', role: 'Founder & Chief Visionary', desc: 'Pioneering the intersection of aesthetics and algorithmic intelligence for 15 years.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-SOPx6RiPYQIX98rAn0NFxis27kjaG2HKk-IC6-qunoFQKGYBT6ETho903vBb2QDtUSi01TbcuaHTRXs9BGPOzqTsJCuDVo6bu78KSHk_9KLqdRd4bCvpN2hzlBF2QvrZVXkexF6BdRYlKzYkwOAwMaKK9YHCWd_y0ZV9fQp2U21NtzAuALuuHUQdRM47HiZORvpFBDw3j3ieTzINSi4oyKF4uVx_AgCyVKFrJE44Xua0QzeWiu9BmXk-awpr2nTRLgpJxwKc8UUC' },
  { name: 'Elena Vance', role: 'Head of Product Strategy', desc: 'Expert in translating complex data ecosystems into intuitive user journeys.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwfBk0i5p58fp2oRIoOE_BAjoWJf4U8jSqxiNJcUG6oNkns2QdOmD2IZPj2f2UsFFZ5WjL2545Wp4dn-qMHHt9LB-v1p_szQUzs1NiF_m2n9iOm2niZp4sFAdlptnzOdxHLlDPGrZuXuHK9tCUnhc0fbDntWK72Sm8BeY51I97o9mZ2fNXn5z229zlyCbtgB2q3eGIC2_iAS-gS-pXUEGyaZsItX4sS9YVKW_isTm5KqFyafmzVYaTdzIDXol_J2_Wttrh1yijFCpL' },
  { name: 'Marcus Chen', role: 'Chief Systems Architect', desc: 'Designing the backbone of our neural processing engine with military-grade precision.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASdvjYnvAiRYem2Ip7ouKM9V4JwlRXwj05cd9tJYn82t5cf-7Gdyinr-JUzJTt5-ZBhfhWaadY3sKIsyPMNuGLTqqPYHNG0aLGxrH0M49EryhyxDjhpnt41ki2tLnAJndcK_anUjuc-k_ytf9pLz10-AgQe8emsh1M-kJbKnWev9aniGCvzpll5ii5IXx1w5tBiVdoZNEX2OOvjC0saugi-fGWK_dzzm5d6Jm7zxPRjRxj_cxkRO4J0GOtMpYL6pDDlesgvcyEQxNY' },
  { name: 'Sarah Jenkins', role: 'Director of Experience', desc: "Bringing the 'Atrium' design language to life across every digital touchpoint.", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADRAfV-WDZPzucum6071MhNG65au5hTn1NB8ohI3ubMiSpviubp0dkGU9efo3gFF0uC3OHdIzFk80yeJZsthkKB0fxq6x7OY658i1ufkDjrSjrnL6KQa4RbQ9YZDtn4YG0IbZZOjW8n5-_phtOakQjA8L5OxPlf9GWueu1rm7mPLNf9QHpFUogGVfJopawnLuPpn0sod-eZFIdB9d0317SrmrrHvwJICVhTmiPboWP3yNKKf7O8YXtt-B-RnvKjjBKizf0FkD_6dKk' },
]

const values = [
  { icon: 'auto_awesome', title: 'Clarity First', desc: "We strip away the noise. If a piece of data doesn't lead to an action or an insight, it doesn't belong on your screen." },
  { icon: 'shield_with_heart', title: 'Radical Trust', desc: 'Your enterprise intelligence is your competitive advantage. We guard it with uncompromising security and absolute transparency.' },
  { icon: 'architecture', title: 'Human Craft', desc: 'Automation is a tool; human judgement is the master. We design for the person behind the terminal.' },
]

export default function About() {
  return (
    <div className="bg-background text-on-surface font-body overflow-x-hidden">
      <Navbar />
      <main className="pt-28 md:pt-32 pb-24">

        {/* ── HERO ── */}
        <header className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 mb-20 md:mb-32">
          <motion.div variants={stagger(0.1, 0.05)} initial="hidden" animate="show" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <motion.span variants={fadeUp} className="font-label uppercase tracking-[0.2em] text-xs text-primary mb-5 block">Our Narrative</motion.span>
              <motion.h1 variants={fadeUp} className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] font-light tracking-tight text-on-surface">
                Engineering <br />
                <motion.span variants={fadeUp} className="italic font-medium text-primary">Intelligence</motion.span> <br />
                with Intent.
              </motion.h1>
            </div>
            <motion.div variants={fadeUp} className="lg:col-span-4 pb-2">
              <p className="font-body text-base md:text-xl text-on-surface-variant leading-relaxed">
                Craxnet is more than a platform. We are an atelier for enterprise data, where raw information is refined into the clarity of strategic wisdom.
              </p>
            </motion.div>
          </motion.div>
        </header>

        {/* ── PHILOSOPHY CARD ── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 mb-20 md:mb-32">
          <AnimatedSection>
            <div className="relative bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(45,52,50,0.08)] flex flex-col md:flex-row min-h-[400px] md:min-h-[560px] border border-outline-variant/10">
              <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center">
                <h2 className="font-headline text-3xl md:text-5xl mb-8 leading-tight">We believe that software should feel like a partner, not just a tool.</h2>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-px bg-outline-variant/30" />
                  <span className="font-label text-xs uppercase tracking-widest text-outline">Our Philosophy</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative bg-surface-container min-h-[240px]">
                <motion.img
                  whileHover={{ scale: 1.04 }} transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFMq_7jO1BTRWYbgSLajtO7avLAJ0cQqaQkeNqdTOM6VgCdOcNUOz8RIsOdgykqOox0IJe1IQ10P3O0v-fMohf-dTJZ6MjioeAoSza3ufVonlkG6E8n7udOLLvipvNVGJWuMiqtgvl69dmip9Z4oEH52RGy1yvTqptC7vhDkiL08FLKWV_HyYHS_ruQyGvGL0rJoikl3edLMGwoNS5w5VtAl1SZuqv_dIdsCPZ9KuRZy7p16GpIDWFzrHjwVmk6m0t-4auRpQq763t"
                  alt="Philosophy"
                />
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* ── MISSION & VISION ── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 mb-20 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <AnimatedSection direction="left">
              <motion.div variants={cardHover} initial="rest" whileHover="hover" className="bg-surface-container-low rounded-2xl p-10 md:p-16 flex flex-col justify-between min-h-[320px]">
                <div>
                  <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-10 block">The Mission</span>
                  <h3 className="font-headline text-3xl md:text-5xl mb-6">Democratizing insight for the complex global enterprise.</h3>
                </div>
                <p className="font-body text-base md:text-lg text-on-surface-variant max-w-sm">
                  To empower decision-makers with a seamless flow of intelligence that bridges the gap between raw data and human intuition.
                </p>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <motion.div variants={cardHover} initial="rest" whileHover="hover" className="bg-surface-container-highest rounded-2xl p-10 md:p-16 flex flex-col justify-between min-h-[320px]">
                <div>
                  <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-10 block">The Vision</span>
                  <h3 className="font-headline text-3xl md:text-5xl mb-6">A world where organizational knowledge is alive.</h3>
                </div>
                <p className="font-body text-base md:text-lg text-on-surface-variant max-w-sm">
                  Building the nervous system of the modern corporation, where every signal is heard and every pattern is understood in real-time.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="bg-surface-container-low py-20 md:py-32 mb-20 md:mb-32">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
            <AnimatedSection className="mb-14 md:mb-20">
              <h2 className="font-headline text-4xl md:text-6xl mb-4">Core Principles</h2>
              <p className="font-body text-on-surface-variant max-w-xl text-base md:text-lg">Our values are not posters on a wall; they are the architectural blueprints of every feature we ship.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {values.map(({ icon, title, desc }, i) => (
                <AnimatedSection key={title} delay={i * 0.1}>
                  <motion.div variants={cardHover} initial="rest" whileHover="hover" className="space-y-5 p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 cursor-default">
                    <motion.span whileHover={{ scale: 1.15, rotate: 5 }} transition={{ duration: 0.2 }} className="material-symbols-outlined text-4xl text-primary block">{icon}</motion.span>
                    <h4 className="font-headline text-xl md:text-2xl font-bold italic">{title}</h4>
                    <p className="font-body text-on-surface-variant text-sm md:text-base leading-relaxed">{desc}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 mb-20 md:mb-32">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-baseline mb-14 md:mb-20 gap-6">
            <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl">The Curators</h2>
            <p className="font-body text-base md:text-lg text-on-surface-variant max-w-md">Our team combines decades of experience in high-frequency finance, architectural design, and neural networks.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map(({ name, role, desc, img }, i) => (
              <AnimatedSection key={name} delay={i * 0.08}>
                <motion.div variants={cardHover} initial="rest" whileHover="hover" className="group cursor-default">
                  <div className="aspect-[4/5] bg-surface-container rounded-2xl overflow-hidden mb-5 relative">
                    <motion.img
                      whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover" src={img} alt={name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h5 className="font-headline text-xl md:text-2xl font-semibold mb-1">{name}</h5>
                  <p className="font-label text-xs uppercase tracking-widest text-primary mb-3">{role}</p>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* ── GLOBAL PRESENCE ── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
          <AnimatedSection>
            <div className="bg-surface-container-lowest rounded-2xl p-10 md:p-20 shadow-[0_8px_40px_rgba(45,52,50,0.07)] grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center border border-outline-variant/10">
              <div>
                <h2 className="font-headline text-3xl md:text-5xl mb-6">Rooted in Zurich. <br /><span className="italic text-primary">Global by Design.</span></h2>
                <p className="font-body text-base md:text-lg text-on-surface-variant mb-10">While our headquarters sit in the heart of Swiss innovation, our intelligence engines power enterprises from Tokyo to San Francisco.</p>
                <div className="grid grid-cols-2 gap-6 md:gap-8">
                  {[{ label: 'Active Regions', value: '42+' }, { label: 'Enterprise Partners', value: '150+' }].map(({ label, value }) => (
                    <motion.div key={label} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                      <span className="font-label text-[10px] uppercase tracking-widest text-outline block mb-2">{label}</span>
                      <span className="font-headline text-3xl md:text-4xl italic text-primary">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-video lg:aspect-square bg-surface-container-high rounded-2xl overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.04, filter: 'grayscale(0%)' }}
                  initial={{ filter: 'grayscale(40%)' }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover opacity-70"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6YBITHOkb99nPd41n7tueN58OIDMs0iWdmNAO6WixR_UH99_PCB90xp9dLY_OPSex6Y76KuqV1OrSDURaacaAvi8cdy-gKj1qhuQOaFbWy9d16vjY62jPxJCjtbGq4WhezlS2X0DQKHjM2jOulZEJXMywK_Iavj2djXxCqKbPYF_T_jAiXDjcUr4kwKWb2meD-bvAP4AlE-9ec8179vBgOdXu7UIR0tKQrffxiYAcOQ_MrBkS4PlmMqssRCFsqoSsTwZ8BzCLpFOE"
                  alt="Zurich"
                />
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  )
}
