"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:info@espxglobal.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-espx-teal-dark/20 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Contact <span className="text-espx-cyan">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Get in touch with our team
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Our Office
                </h3>
                <div className="space-y-4 text-gray-400">
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-espx-cyan mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-300">ESPX Global Inc.</p>
                      <p>1350 Beverly Road,</p>
                      <p>Suite 115, PMB293,</p>
                      <p>McLean, VA 22101</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-espx-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <a
                      href="mailto:info@espxglobal.com"
                      className="text-espx-cyan hover:text-espx-cyan-dim transition-colors"
                    >
                      info@espxglobal.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {submitted ? (
                <div className="glass-card rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-espx-cyan/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-espx-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Message Prepared
                  </h3>
                  <p className="text-gray-400">
                    Your email client should have opened. If not, email us
                    directly at info@espxglobal.com.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-card rounded-2xl p-8 space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-espx-navy-light border border-espx-cyan/10 text-white placeholder-gray-500 focus:border-espx-cyan/40 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-espx-navy-light border border-espx-cyan/10 text-white placeholder-gray-500 focus:border-espx-cyan/40 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-espx-navy-light border border-espx-cyan/10 text-white placeholder-gray-500 focus:border-espx-cyan/40 focus:outline-none transition-colors"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-espx-navy-light border border-espx-cyan/10 text-white placeholder-gray-500 focus:border-espx-cyan/40 focus:outline-none transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-espx-teal text-white rounded-lg hover:bg-espx-teal-light transition-all duration-300 font-medium tracking-wide"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
