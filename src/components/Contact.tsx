import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// ─────────────────────────────────────────────────────────────
//  CONFIGURATION — replace these three values with your own
//  1. Go to https://www.emailjs.com  (free account)
//  2. Add an Email Service  → copy the Service ID
//  3. Create an Email Template → copy the Template ID
//  4. Go to Account → API Keys  → copy the Public Key
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
// ─────────────────────────────────────────────────────────────

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            My inbox is always open. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Info</h3>
              <div className="space-y-4">
                <a
                  href="mailto:oumniaselmane8@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  oumniaselmane8@gmail.com
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span>Casablanca, Morocco</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Socials</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/oumniadev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/oumnia-selmane-1bb939328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3 bg-card border border-border p-8 rounded-lg"
          >
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  className="w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="reply_to" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  required
                  className="w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full bg-primary text-primary-foreground font-medium rounded py-3 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>Sending… <Loader2 className="w-4 h-4 animate-spin" /></>
                ) : status === "success" ? (
                  <>Sent! <CheckCircle className="w-4 h-4" /></>
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 text-sm text-primary font-mono">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-destructive font-mono">
                  <XCircle className="w-4 h-4 shrink-0" />
                  Failed to send. Please try again.
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
