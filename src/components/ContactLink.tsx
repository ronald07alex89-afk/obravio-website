import { useState } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { submitLead } from '../lib/waitlist';

/**
 * "Contact" link that opens a small capture popup instead of a mailto:.
 * Submits name + email to the sales pipeline with source "obravio.com — contact".
 * Drop-in replacement for the old <a href="mailto:..."> contact links.
 */
export function ContactLink({ className = '' }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    const ok = await submitLead({
      email,
      name: name || undefined,
      source: 'obravio.com — contact',
    });
    if (ok) {
      setStatus('success');
      setName('');
      setEmail('');
    } else {
      setStatus('error');
    }
  };

  const close = () => {
    setOpen(false);
    // reset after the closing transition so it's fresh next open
    setStatus('idle');
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        Contact
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#070d14]/80 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="steel-plate relative w-full max-w-md p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="rivet rivet-tl" />
            <span className="rivet rivet-tr" />
            <span className="rivet rivet-bl" />
            <span className="rivet rivet-br" />

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10">
              <h3 className="font-headline text-2xl font-bold uppercase tracking-wide text-metallic mb-2">
                Get in Touch
              </h3>
              <p className="text-white/40 text-sm mb-6">
                Drop your details and we'll reach out.
              </p>

              {status === 'success' ? (
                <div className="flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400" style={{ borderRadius: 0 }}>
                  <Check className="w-5 h-5" />
                  <span className="font-medium font-headline uppercase tracking-wide text-sm">Thanks — we'll be in touch</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-industrial w-full"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input-industrial w-full"
                  />
                  {status === 'error' && (
                    <p className="text-[#D4956B] text-sm">
                      Something went wrong. Please try again or email contact@obravio.com.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center disabled:opacity-50"
                  >
                    Send <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
