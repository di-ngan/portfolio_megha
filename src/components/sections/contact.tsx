'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, X, Download, ExternalLink, ArrowRight, Send, Copy, Check } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { LineWavesBackground } from '@/components/effects/LineWavesBackground';

export function Contact() {
  const { contact } = portfolio;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${contact.email}?subject=Portfolio Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 2000);
  };

  const cards = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: contact.email,
      hint: 'Click to send a message',
      accent: '#DD78A1',
      glow: 'rgba(221,120,161,0.14)',
      action: () => setIsModalOpen(true),
      href: undefined as string | undefined,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: contact.phone,
      hint: 'Available for calls',
      accent: '#78A1DD',
      glow: 'rgba(120,161,221,0.14)',
      action: undefined as (() => void) | undefined,
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: 'megha-ramkumar',
      hint: "Let's connect",
      accent: '#5ECFA8',
      glow: 'rgba(94,207,168,0.14)',
      action: undefined as (() => void) | undefined,
      href: contact.linkedin,
    },
  ];

  const glassCard = (accent: string, glow: string): React.CSSProperties => ({
    background: 'rgba(18, 14, 26, 0.46)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: `1px solid ${accent}22`,
    boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 40px ${glow}`,
  });

  return (
    <section id="contact" className="relative py-10 sm:py-14">
      <LineWavesBackground section="contact" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/50 dark:from-primary/10 dark:via-transparent dark:to-background/80 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Header — left-aligned like other sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-2xl mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className="text-muted-foreground text-base">
            Open to collaborations, opportunities, and conversations.
          </p>
        </motion.div>

        {/* Contact cards — vertical stack */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
          className="flex flex-col gap-3 mb-5"
        >
          {cards.map((card, i) => {
            const isEmail = card.label === 'Email';

            const inner = (
              <>
                {/* Icon */}
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                  style={{ background: `${card.accent}18`, border: `1px solid ${card.accent}35`, color: card.accent }}
                >
                  {card.icon}
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: card.accent, opacity: 0.75 }}>
                    {card.label}
                  </p>
                  <p className="text-sm font-medium text-white/90">{card.value}</p>
                  <p className="text-xs text-white/35 mt-0.5">{card.hint}</p>
                </div>

                {/* Copy button — email only */}
                {isEmail && (
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg transition-colors"
                    style={{ background: copied ? 'rgba(94,207,168,0.15)' : 'rgba(255,255,255,0.06)', color: copied ? '#5ECFA8' : 'rgba(255,255,255,0.4)' }}
                    title="Copy email"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                )}

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 0% 50%, ${card.glow} 0%, transparent 70%)` }}
                />
              </>
            );

            const sharedClass = 'relative rounded-2xl p-4 flex items-center gap-3 cursor-pointer group text-left w-full overflow-hidden transition-transform duration-200 hover:-translate-y-0.5';

            if (card.href) {
              return (
                <motion.a
                  key={i}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                  className={sharedClass}
                  style={glassCard(card.accent, card.glow)}
                >
                  {inner}
                </motion.a>
              );
            }

            return (
              <motion.button
                key={i}
                type="button"
                onClick={card.action}
                variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                className={sharedClass}
                style={glassCard(card.accent, card.glow)}
              >
                {inner}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Resume buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <button
            onClick={() => {
              const a = document.createElement('a');
              a.href = '/Megha R K resume_260519_191147.pdf';
              a.download = 'Megha-RK-Resume.pdf';
              a.click();
            }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold flex-1 transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #DD78A1, #c45d88)', color: '#fff', boxShadow: '0 4px 20px rgba(221,120,161,0.3)' }}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </button>
          <button
            onClick={() => window.open('/Megha R K resume_260519_191147.pdf', '_blank')}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold flex-1 transition-opacity hover:opacity-90"
            style={{
              background: 'rgba(18,14,26,0.46)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(221,120,161,0.22)',
              color: '#DD78A1',
            }}
          >
            <ExternalLink className="h-4 w-4" />
            View Resume
          </button>
        </motion.div>
      </div>

      {/* Send Message Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 cursor-pointer"
              style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
              onClick={() => setIsModalOpen(false)}
            />

            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="w-full max-w-md rounded-2xl p-6 pointer-events-auto"
                style={{
                  background: 'rgba(14, 10, 22, 0.94)',
                  backdropFilter: 'blur(28px)',
                  WebkitBackdropFilter: 'blur(28px)',
                  border: '1px solid rgba(221,120,161,0.18)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.65), 0 0 80px rgba(221,120,161,0.08)',
                }}
              >
                {/* Modal header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg" style={{ background: 'rgba(221,120,161,0.14)', color: '#DD78A1' }}>
                      <Send className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-bold text-white">Send a Message</h3>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-white/8 transition-colors"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                      { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                    ].map(field => (
                      <div key={field.id} className="space-y-1.5">
                        <label htmlFor={field.id} className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
                          {field.label}
                        </label>
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white placeholder:text-white/25 outline-none focus:ring-1 focus:ring-[#DD78A1]/50 transition-all"
                          style={{ background: 'rgba(255,255,255,0.055)', border: '1px solid rgba(255,255,255,0.09)' }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity…"
                      rows={4}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white placeholder:text-white/25 outline-none focus:ring-1 focus:ring-[#DD78A1]/50 transition-all resize-none"
                      style={{ background: 'rgba(255,255,255,0.055)', border: '1px solid rgba(255,255,255,0.09)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-60 mt-1"
                    style={{ background: 'linear-gradient(135deg, #DD78A1, #c45d88)', color: '#fff', boxShadow: '0 4px 20px rgba(221,120,161,0.32)' }}
                  >
                    {isSubmitted ? 'Opening mail client…' : 'Send Message'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
