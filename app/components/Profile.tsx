"use client"

import React, { useState } from 'react'
import {
  ArrowRight, Check, Menu, X,
  Globe, GraduationCap, Building2, Database,
} from 'lucide-react'
import { siteContent } from '@/data/site-content'
import type { ServiceIconKey } from '@/data/site-content'

const { brand, navigation, hero, services, projects, contact } = siteContent

const serviceIcons: Record<ServiceIconKey, React.ElementType> = {
  web: Globe,
  edtech: GraduationCap,
  business: Building2,
  systems: Database,
}

const serviceIconColors: Record<ServiceIconKey, string> = {
  web: 'text-red-400',
  edtech: 'text-blue-400',
  business: 'text-yellow-400',
  systems: 'text-purple-400',
}

const serviceGlowClasses: Record<ServiceIconKey, string> = {
  web: 'glow-red',
  edtech: 'glow-blue',
  business: 'glow-yellow',
  systems: 'glow-purple',
}

export default function Profile() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection-red">

      {/* ── Global Background ── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0505] to-black" />
        <div className="stars-1 absolute top-0 left-0 w-px h-px" />
        <div className="stars-2 absolute top-0 left-0 w-[2px] h-[2px]" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] bg-red-glow-blob"
        />
        <div className="absolute inset-0 bg-grid-overlay" />
      </div>

      {/* ── Top blur overlay ── */}
      <div className="gradient-blur" />

      {/* ── Navbar ── */}
      <header className="fixed top-0 left-0 w-full z-50 pt-6 px-4">
        <nav className="max-w-5xl mx-auto flex items-center justify-between bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl">

          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-5 h-5 bg-[#ef233c] rounded-sm rotate-45" />
            <span className="text-base font-bold font-manrope tracking-tight">TT</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={contact.primaryCta.href}
              className="group relative hidden md:inline-flex items-center justify-center overflow-hidden rounded-full bg-white/5 px-6 py-2 transition-transform active:scale-95"
            >
              <span className="absolute inset-0 border border-white/10 rounded-full" />
              <span className="absolute inset-[1px] rounded-full bg-black" />
              <span className="relative z-10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                Get In Touch <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden mt-2 max-w-5xl mx-auto bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex flex-col gap-4">
            {navigation.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={contact.primaryCta.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold text-[#ef233c] hover:text-red-300 transition-colors"
            >
              Get In Touch →
            </a>
          </div>
        )}
      </header>

      <main className="relative z-10">

        {/* ── Hero ── */}
        <section id="top" className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6">
          <div className="text-center max-w-5xl mx-auto">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef233c]" />
              </span>
              <span className="text-xs font-medium text-red-100/90 tracking-wide font-manrope">
                {hero.eyebrow}
              </span>
              <ArrowRight className="w-3 h-3 text-red-400" />
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-8xl font-semibold tracking-tighter font-manrope leading-[1.05] mb-8 animate-fade-up delay-150"
            >
              <span className="block text-gradient-white">
                Building Modern
              </span>
              <span className="block text-gradient-white">
                Digital{' '}
                <span className="text-[#ef233c] inline-block relative">
                  Solutions
                  <svg
                    className="absolute w-full h-3 -bottom-2 left-0 opacity-60 text-[#ef233c]"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-300"
            >
              {hero.subheadline}
            </p>

            <div
              className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-up delay-450"
            >
              <a href={hero.primaryCta.href} className="shiny-cta group">
                <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
                  {hero.primaryCta.label}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <a
                href={hero.secondaryCta.href}
                className="px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium hover:text-white hover:bg-zinc-800 transition-all flex items-center gap-2"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div className="w-full mt-28 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x divide-white/10">
              {hero.stats.map(stat => (
                <div key={stat.label} className="flex-1 text-center px-8 py-4 md:py-0">
                  <div className="text-base font-bold font-manrope text-white">{stat.value}</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services Bento Grid ── */}
        <section id="solutions" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">

            <div className="mb-20 text-center max-w-3xl mx-auto">
              <p className="text-xs font-bold text-[#ef233c] uppercase tracking-widest mb-4">
                {services.eyebrow}
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-manrope mb-6">
                The Operating System for{' '}
                <span className="text-[#ef233c]">Modern Digital Teams</span>
              </h2>
              <p className="text-lg text-zinc-400 font-light">{services.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-[700px]">

              {/* Large card – col-span-2 row-span-2 */}
              {(() => {
                const s = services.items[0]
                const Icon = serviceIcons[s.icon]
                return (
                  <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden p-8 border border-white/10 bg-gradient-to-b from-zinc-900/50 to-black hover:border-white/20 transition-all rounded-xl">
                    <div className="relative z-10 h-full flex flex-col">
                      <div className={`mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 ${serviceIconColors[s.icon]}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-3xl font-semibold text-white font-manrope mb-4 tracking-tight">{s.title}</h3>
                      <p className="text-zinc-400 text-lg leading-relaxed">{s.description}</p>
                      <ul className="mt-6 space-y-2">
                        {s.bullets.map(b => (
                          <li key={b} className="flex items-center gap-2 text-sm text-zinc-500">
                            <Check className="w-3 h-3 text-[#ef233c] shrink-0" />{b}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                        <span className="text-xs font-mono text-[#ef233c]">EXPLORE SOLUTION</span>
                        <ArrowRight className="w-4 h-4 text-[#ef233c]" />
                      </div>
                    </div>
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none ${serviceGlowClasses[s.icon]}`} />
                  </div>
                )
              })()}

              {/* Wide card – col-span-2 */}
              {(() => {
                const s = services.items[1]
                const Icon = serviceIcons[s.icon]
                return (
                  <div className="lg:col-span-2 group relative overflow-hidden p-8 border border-white/10 bg-black hover:border-white/20 transition-all rounded-xl">
                    <div className="relative z-10 flex flex-col h-full">
                      <div className={`mb-4 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 ${serviceIconColors[s.icon]}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white font-manrope mb-2">{s.title}</h3>
                      <p className="text-zinc-400">{s.description}</p>
                    </div>
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none ${serviceGlowClasses[s.icon]}`} />
                  </div>
                )
              })()}

              {/* Two small cards */}
              {services.items.slice(2).map(s => {
                const Icon = serviceIcons[s.icon]
                return (
                  <div key={s.title} className="group relative overflow-hidden p-8 border border-white/10 bg-black hover:border-white/20 transition-all rounded-xl">
                    <div className="relative z-10">
                      <div className={`mb-4 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 ${serviceIconColors[s.icon]}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-white font-manrope mb-2">{s.title}</h3>
                      <p className="text-sm text-zinc-400">{s.description}</p>
                    </div>
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none ${serviceGlowClasses[s.icon]}`} />
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Founder Quote Banner ── */}
        <div className="w-full bg-[#ef233c] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 text-black mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-black font-manrope leading-tight mb-8">
              &ldquo;Technology that solves real problems, built with discipline and a long-term product vision.&rdquo;
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold font-manrope text-sm shrink-0">
                TN
              </div>
              <div className="text-left">
                <div className="text-black font-bold text-lg">{brand.founderName}</div>
                <div className="text-black/70 font-medium">Founder, {brand.name}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Products ── */}
        <section id="products" className="py-32 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <p className="text-xs font-bold text-[#ef233c] uppercase tracking-widest mb-4">
                {projects.eyebrow}
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold text-white font-manrope tracking-tight">
                {projects.title}
              </h2>
              <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">{projects.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
              {/* Featured: Gradiate */}
              {(() => {
                const project = projects.items[0]
                return (
                  <div className="relative p-10 rounded-2xl border border-[#ef233c]/30 bg-zinc-900/30 shadow-[0_0_60px_rgba(239,35,60,0.07)]">
                    <div className="absolute -top-3 left-8 bg-[#ef233c] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {project.category}
                    </div>
                    <h3 className="text-5xl font-bold font-manrope text-white mb-4">{project.title}</h3>
                    <p className="text-zinc-400 mb-8 leading-relaxed">{project.description}</p>
                    <ul className="space-y-3 mb-10">
                      {project.highlights.map(h => (
                        <li key={h} className="flex items-start gap-3 text-sm text-zinc-300">
                          <Check className="w-4 h-4 text-[#ef233c] mt-0.5 shrink-0" />{h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      {project.actions.map(action => (
                        <a
                          key={action.label}
                          href={action.href}
                          className="px-6 py-3 rounded-full bg-[#ef233c] hover:bg-red-700 text-white text-sm font-bold uppercase tracking-wider transition-all"
                        >
                          {action.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )
              })()}

              {/* Other project cards */}
              <div className="grid grid-cols-1 gap-4">
                {projects.items.slice(1).map(project => (
                  <div
                    key={project.title}
                    className="group p-6 rounded-xl border border-white/10 bg-black hover:border-white/20 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-[10px] font-bold text-[#ef233c] uppercase tracking-widest">
                          {project.category}
                        </span>
                        <h4 className="text-lg font-semibold text-white font-manrope mt-1">{project.title}</h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-[#ef233c] transition-colors mt-1 shrink-0" />
                    </div>
                    <p className="text-sm text-zinc-500">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA / Contact ── */}
        <section id="contact" className="py-32 px-6 text-center bg-zinc-950/40">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold font-manrope mb-8 tracking-tighter">
              Ready to <span className="text-[#ef233c]">Build?</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-12">{contact.description}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`mailto:${contact.email}`} className="shiny-cta group">
                <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
                  {contact.email}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <a
                href={contact.primaryCta.href}
                className="px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium hover:text-white hover:bg-zinc-800 transition-all"
              >
                {contact.primaryCta.label}
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer id="about" className="bg-black border-t border-zinc-900 pt-20 pb-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 relative z-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 bg-[#ef233c] rounded-sm rotate-45 shrink-0" />
              <span className="text-xl font-bold font-manrope tracking-tight">{brand.name}</span>
            </div>
            <p className="text-zinc-500 max-w-xs leading-relaxed">{brand.tagline}</p>
            <p className="text-zinc-700 text-xs mt-4 uppercase tracking-widest">
              {brand.location} · {brand.domain}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#ef233c] uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              {navigation.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Watermark */}
        <div className="flex justify-center items-center py-8 opacity-[0.07] pointer-events-none overflow-hidden">
          <h1 className="text-[7vw] leading-none font-bold font-manrope tracking-tighter text-stroke select-none whitespace-nowrap text-white">
            THANDULULO TECHNOLOGIES
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between text-zinc-600 text-[10px] uppercase tracking-widest gap-4">
          <p>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>{brand.founderLine}</p>
        </div>
      </footer>

    </div>
  )
}

