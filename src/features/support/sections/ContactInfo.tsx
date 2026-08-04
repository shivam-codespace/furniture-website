import { motion } from "framer-motion";
import { Calendar, Clock, Mail, MapPin, Phone, Timer } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/motion";
import storeImg from "@/assets/images/hero/showroom.jpg";

const SUPPORT_HOURS = [
  { icon: Calendar, label: "Monday - Saturday", value: "9:30 AM - 7:30 PM" },
  { icon: Clock, label: "Sunday", value: "10:00 AM - 5:00 PM" },
  { icon: Mail, label: "Email Support", value: "support@vaanamfurnitures.com" },
  { icon: Timer, label: "Response Time", value: "Within 2 Hours" },
];

export function ContactInfo() {
  return (
    <section className="py-10 md:py-14">
      <div className="container-luxury">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr_0.8fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="font-heading text-xl font-medium text-dark">Support Hours</h2>
            <div className="mt-5 flex flex-col gap-4">
              {SUPPORT_HOURS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center justify-between gap-4 text-sm">
                  <span className="flex items-center gap-2.5 text-dark/60">
                    <Icon className="size-4 text-primary" strokeWidth={1.6} />
                    {label}
                  </span>
                  <span className="font-medium text-dark">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="font-heading text-xl font-medium text-dark">Contact Us</h2>
            <p className="mt-1 text-sm text-dark/55">We&apos;d love to hear from you</p>

            <div className="mt-5 flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.6} />
                <div>
                  <p className="font-medium text-dark">+91 98765 43210</p>
                  <p className="text-xs text-dark/50">Mon - Sat | 9:30 AM - 7:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.6} />
                <div>
                  <p className="font-medium text-dark">support@vaanamfurnitures.com</p>
                  <p className="text-xs text-dark/50">We reply within 2 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.6} />
                <div>
                  <p className="font-medium text-dark">Vaanam Furnitures</p>
                  <p className="text-xs text-dark/50">123, Heritage Street, Jodhpur, Rajasthan - 342001, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src={storeImg}
              alt="Vaanam Furnitures showroom"
              className="h-full min-h-[220px] w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
