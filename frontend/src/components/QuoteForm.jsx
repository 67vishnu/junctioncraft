import React, { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { createEnquiry } from "../api";

// Reusable "Request a quote" form for product & service detail pages.
const QuoteForm = ({ item, source = "product", accent = "light" }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please add your name and email.");
      return;
    }
    setSubmitting(true);
    try {
      await createEnquiry({
        ...form,
        message: form.message || `Quote request for ${item}`,
        source,
        item,
        service: item,
      });
      setForm({ name: "", email: "", phone: "", message: "" });
      toast.success("Request sent! Our team will get back to you shortly.");
    } catch (err) {
      toast.error("Something went wrong. Please try again or WhatsApp us.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full rounded-md border border-input bg-card px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

  return (
    <div className="bg-secondary rounded-2xl border border-border p-6 sm:p-7">
      <h3 className="font-display text-xl font-bold text-neutral-900">
        Request a quote
      </h3>
      <p className="text-sm text-neutral-500 mt-1 mb-5">
        For <span className="font-semibold text-primary">{item}</span> — we'll
        reply with pricing and lead time.
      </p>
      <form onSubmit={submit} className="space-y-3">
        <input
          name="name"
          value={form.name}
          onChange={handle}
          placeholder="Full name *"
          className={inputCls}
        />
        <div className="grid sm:grid-cols-2 gap-3">
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handle}
            placeholder="Email *"
            className={inputCls}
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handle}
            placeholder="Phone"
            className={inputCls}
          />
        </div>
        <textarea
          name="message"
          value={form.message}
          onChange={handle}
          rows={3}
          placeholder="Quantity, voltage, location or any details..."
          className={inputCls}
        />
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-emerald-800 transition-all disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send Request"}
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
