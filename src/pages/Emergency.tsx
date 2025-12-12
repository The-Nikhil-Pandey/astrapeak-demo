import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, Phone, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "@/components/ui/animations";

const steps = [
  { step: "1", title: "Isolate Affected Systems", description: "Disconnect compromised systems from the network immediately." },
  { step: "2", title: "Preserve Evidence", description: "Do not turn off systems. Document everything you observe." },
  { step: "3", title: "Contact Our Team", description: "Call our emergency hotline or submit the form below." },
  { step: "4", title: "Await Instructions", description: "Our response team will guide you through next steps." },
];

export default function Emergency() {
  return (
    <Layout>
      {/* Emergency Hotline Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-destructive/90 backdrop-blur-sm py-3">
        <div className="container-cyber flex items-center justify-center gap-4 text-white">
          <Phone className="w-5 h-5 animate-pulse" />
          <span className="font-semibold">Emergency Hotline: +1 (888) 555-HELP</span>
          <span className="text-white/70">|</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" />Available 24/7</span>
        </div>
      </div>

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="container-cyber relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/50 mb-6"
            >
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <span className="text-sm font-medium text-destructive">Breach Response</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Security <span className="text-destructive">Emergency</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Experiencing a breach? Our incident response team is standing by 24/7.
            </p>
          </AnimatedSection>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <Card className="p-6 border-destructive/30 hover:border-destructive/50 transition-colors h-full">
                  <div className="text-3xl font-bold text-destructive mb-3">{item.step}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Emergency Form */}
          <AnimatedSection>
            <Card variant="glow" className="max-w-2xl mx-auto p-8 border-destructive/30">
              <h2 className="text-2xl font-bold mb-6 text-center">Immediate Assistance Request</h2>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" required />
                  <Input type="tel" placeholder="Phone Number" required />
                </div>
                <Input type="email" placeholder="Email Address" required />
                <Input placeholder="Organization Name" required />
                <Textarea placeholder="Briefly describe the incident..." rows={4} required />
                <Button variant="destructive" className="w-full" size="lg">
                  Request Emergency Response
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
