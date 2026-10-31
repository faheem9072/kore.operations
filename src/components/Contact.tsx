'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/projects';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Design',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello KORE Team! My name is ${formData.name || 'Friend'}. I am interested in ${formData.service}. ${formData.message ? `Details: ${formData.message}` : ''}`
    );
    window.open(`https://wa.me/917025387768?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#060913]">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#2F8FFF]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0e172e] border border-[#2F8FFF]/30 text-xs font-bold text-[#5eb0ff] uppercase tracking-wider mb-4"
          >
            <span>Let&apos;s Connect</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-white dark:text-white light:text-slate-900 leading-tight mb-3"
          >
            Start Your Transformation.{' '}
            <span className="text-[#2F8FFF]">Hire KORE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            Whether you need a new web platform, corporate branding, social media creatives, or packaging design, we are ready.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & WhatsApp Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-[#0c1224] dark:bg-[#0c1224] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                Direct Contact Channels
              </h3>

              <p className="text-xs text-[#5eb0ff] font-medium mb-6">
                Share your business vision with us — let&apos;s build something exceptional together.
              </p>

              <div className="space-y-5">
                {/* Phone */}
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\\s+/g, '')}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-50 hover:bg-[#2F8FFF]/10 border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-[#2F8FFF]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2F8FFF]/15 flex items-center justify-center text-[#2F8FFF] group-hover:bg-[#2F8FFF] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      Phone Call
                    </div>
                    <div className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                      {COMPANY_INFO.phoneDisplay}
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#0b1b36] hover:bg-[#12284e] border border-[#2F8FFF]/40 transition-all group shadow-sm shadow-[#2F8FFF]/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2F8FFF] flex items-center justify-center text-white">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#5eb0ff] font-semibold">
                      Instant WhatsApp
                    </div>
                    <div className="text-sm font-bold text-white">
                      Chat with KORE Team
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#5eb0ff] ml-auto group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-50 hover:bg-[#2F8FFF]/10 border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-[#2F8FFF]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2F8FFF]/15 flex items-center justify-center text-[#2F8FFF] group-hover:bg-[#2F8FFF] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      Official Email
                    </div>
                    <div className="text-sm font-bold text-white dark:text-white light:text-slate-900 break-all">
                      {COMPANY_INFO.email}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#2F8FFF]/15 flex items-center justify-center text-[#2F8FFF]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      Headquarters
                    </div>
                    <div className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                      {COMPANY_INFO.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0c1224] dark:bg-[#0c1224] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-black text-white dark:text-white light:text-slate-900 mb-1">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">
                    Fill in your details below and our operations team will reply within 4 business hours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Nair"
                        className="w-full px-4 py-3 rounded-xl bg-[#070b16] dark:bg-[#070b16] light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-[#2F8FFF] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 ..."
                        className="w-full px-4 py-3 rounded-xl bg-[#070b16] dark:bg-[#070b16] light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-[#2F8FFF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#070b16] dark:bg-[#070b16] light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-[#2F8FFF] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#070b16] dark:bg-[#070b16] light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-[#2F8FFF] transition-colors"
                      >
                        <option value="Web Design">Web Design &amp; Development</option>
                        <option value="Logo & Branding">Logo &amp; Brand Identity</option>
                        <option value="Social Media Design">Social Media Design</option>
                        <option value="Packaging Design">Packaging Design</option>
                        <option value="All Solutions">Full Business Solutions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                      Project Details / Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your brand, timeline, and current operational goals..."
                      className="w-full px-4 py-3 rounded-xl bg-[#070b16] dark:bg-[#070b16] light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-[#2F8FFF] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2F8FFF] hover:bg-[#1a76ea] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#2F8FFF]/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={openWhatsAppDirect}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#0d182d] hover:bg-[#142340] text-[#5eb0ff] border border-[#2F8FFF]/40 text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-[#2F8FFF]" />
                      <span>Send via WhatsApp Directly</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#2F8FFF]/20 border border-[#2F8FFF] flex items-center justify-center text-[#2F8FFF] mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm max-w-md mb-6">
                    Thank you, <strong className="text-white">{formData.name}</strong>. The KORE team in Chelembra will review your requirements and reach out on WhatsApp/phone promptly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={openWhatsAppDirect}
                      className="px-6 py-3 rounded-full bg-[#2F8FFF] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-[#2F8FFF]/30"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open on WhatsApp Now</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-full bg-white/5 text-slate-300 text-xs font-bold border border-white/10 hover:bg-white/10"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

