import { Link } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'

export default function Footer() {
  return (
    <footer className="w-full pt-16 md:pt-24 pb-10 md:pb-12 bg-surface-container-low border-t border-outline-variant/10">
      <AnimatedSection className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
        <div className="col-span-2 md:col-span-1">
          <div className="font-headline text-3xl md:text-4xl font-light text-on-surface mb-6 md:mb-8">Craxnet</div>
          <p className="text-on-surface/50 text-sm leading-relaxed max-w-xs mb-6 md:mb-8">
            Curating the future of enterprise intelligence through design and data.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">public</span>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">hub</span>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">share</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:gap-4">
          <h4 className="font-label text-xs md:text-sm tracking-wide uppercase font-bold text-on-surface">Platform</h4>
          <Link to="/features" className="text-on-surface/50 text-sm hover:underline underline-offset-4 hover:text-on-surface transition-colors">Analytics</Link>
          <Link to="/features" className="text-on-surface/50 text-sm hover:underline underline-offset-4 hover:text-on-surface transition-colors">Infrastructure</Link>
          <Link to="/features" className="text-on-surface/50 text-sm hover:underline underline-offset-4 hover:text-on-surface transition-colors">Security</Link>
          <Link to="/features" className="text-on-surface/50 text-sm hover:underline underline-offset-4 hover:text-on-surface transition-colors">Integrations</Link>
        </div>
        <div className="flex flex-col gap-3 md:gap-4">
          <h4 className="font-label text-xs md:text-sm tracking-wide uppercase font-bold text-on-surface">Resources</h4>
          <a href="#" className="text-on-surface/50 text-sm hover:underline underline-offset-4 hover:text-on-surface transition-colors">Whitepapers</a>
          <a href="#" className="text-on-surface/50 text-sm hover:underline underline-offset-4 hover:text-on-surface transition-colors">Intelligence Report</a>
          <a href="#" className="text-on-surface/50 text-sm hover:underline underline-offset-4 hover:text-on-surface transition-colors">Developer API</a>
          <a href="#" className="text-on-surface/50 text-sm hover:underline underline-offset-4 hover:text-on-surface transition-colors">Community</a>
        </div>
        <div className="flex flex-col gap-3 md:gap-4">
          <h4 className="font-label text-xs md:text-sm tracking-wide uppercase font-bold text-on-surface">Company</h4>
          <Link to="/about" className="text-on-surface/50 text-sm hover:underline underline-offset-4 hover:text-on-surface transition-colors">Our Story</Link>
          <a href="#" className="text-on-surface/50 text-sm hover:underline underline-offset-4 hover:text-on-surface transition-colors">Careers</a>
          <Link to="/contact" className="text-on-surface/50 text-sm hover:underline underline-offset-4 hover:text-on-surface transition-colors">Contact</Link>
          <a href="#" className="text-on-surface/50 text-sm hover:underline underline-offset-4 hover:text-on-surface transition-colors">Legal</a>
        </div>
      </AnimatedSection>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mt-12 md:mt-20 pt-8 md:pt-12 border-t border-outline-variant/10 flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-8">
        <p className="text-on-surface/40 text-xs font-label tracking-widest uppercase text-center sm:text-left">
          © 2024 Craxnet. Curating the future of enterprise intelligence.
        </p>
        <div className="flex gap-6 md:gap-12">
          <a href="#" className="text-on-surface/40 text-xs font-label tracking-widest uppercase hover:text-on-surface transition-colors">Privacy</a>
          <a href="#" className="text-on-surface/40 text-xs font-label tracking-widest uppercase hover:text-on-surface transition-colors">Terms</a>
          <a href="#" className="text-on-surface/40 text-xs font-label tracking-widest uppercase hover:text-on-surface transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  )
}