import { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { HiOutlineCheck } from "react-icons/hi";
import { Input, Textarea } from "@/components/ui/input";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";

export default function Reservation() {
  const [date, setDate] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", guests: "", notes: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your booking API / email service.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section id="reservation" className="relative py-28 md:py-40 bg-charcoal overflow-hidden">
      <div className="container-px grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy + image */}
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-6"
          >
            Reserve Your Table
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-title mb-6"
          >
            Book Your <span className="gold-text italic">Evening</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-smoke max-w-md leading-relaxed"
          >
            Secure your table for an evening of exceptional cuisine and impeccable service.
            For parties larger than 10, please contact us directly for private dining options.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 rounded-3xl overflow-hidden h-64 hidden lg:block"
          >
            <img
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=1000&auto=format&fit=crop"
              alt="Elegant table setting at Embers"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right: form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 md:p-10 space-y-8"
        >
          <div className="grid sm:grid-cols-2 gap-8">
            <Field label="Full Name">
              <Input name="name" required value={form.name} onChange={handleChange} />
            </Field>
            <Field label="Email Address">
              <Input type="email" name="email" required value={form.email} onChange={handleChange} />
            </Field>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <Field label="Phone Number">
              <Input type="tel" name="phone" required value={form.phone} onChange={handleChange} />
            </Field>
            <Field label="Guests">
              <Input type="number" min="1" max="20" name="guests" required value={form.guests} onChange={handleChange} />
            </Field>
          </div>

          <div className="relative">
            <label className="block text-xs text-gold tracking-wide uppercase mb-2">
              Preferred Date &amp; Time
            </label>
            <DatePicker
              selected={date}
              onChange={(d) => setDate(d)}
              showTimeSelect
              timeIntervals={30}
              dateFormat="MMMM d, yyyy — h:mm aa"
              placeholderText="Select a date and time"
              className="w-full bg-transparent border-b border-white/20 py-3 text-cream outline-none focus:border-gold transition-colors duration-300"
              calendarClassName="reservation-datepicker"
              minDate={new Date()}
            />
          </div>

          <Field label="Special Requests (optional)">
            <Textarea name="notes" rows={3} value={form.notes} onChange={handleChange} />
          </Field>

          <MagneticButton className="w-full sm:w-auto block">
            <Button type="submit" variant="gold" className="w-full sm:w-auto">
              <motion.span
                key={submitted ? "done" : "idle"}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2"
              >
                {submitted ? (
                  <>
                    <HiOutlineCheck /> Reservation Sent
                  </>
                ) : (
                  "Confirm Reservation"
                )}
              </motion.span>
            </Button>
          </MagneticButton>
        </motion.form>
      </div>
    </section>
  );
}
