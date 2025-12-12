import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Shield, 
  Search, 
  Zap, 
  Lock, 
  Server, 
  Cloud, 
  Users, 
  FileSearch,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection, GradientText } from "@/components/ui/animations";

const services = [
  {
    icon: Shield,
    title: "Managed Detection & Response",
    description: "24/7 threat monitoring, detection, and response by our expert security analysts.",
    features: [
      "Round-the-clock SOC coverage",
      "Advanced threat hunting",
      "Incident response support",
      "Monthly security reports",
    ],
  },
  {
    icon: Search,
    title: "Penetration Testing",
    description: "Comprehensive security assessments to identify vulnerabilities before attackers do.",
    features: [
      "Web application testing",
      "Network penetration testing",
      "Social engineering assessments",
      "Remediation guidance",
    ],
  },
  {
    icon: Zap,
    title: "Incident Response",
    description: "Rapid response to active security incidents to minimize damage and downtime.",
    features: [
      "Emergency response team",
      "Forensic investigation",
      "Containment and eradication",
      "Post-incident analysis",
    ],
  },
  {
    icon: Lock,
    title: "Security Consulting",
    description: "Expert guidance to build and mature your security program.",
    features: [
      "Security architecture review",
      "Compliance assessments",
      "Risk assessments",
      "Security roadmap development",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Secure your cloud infrastructure across AWS, Azure, and GCP.",
    features: [
      "Cloud security posture management",
      "Configuration assessments",
      "Identity and access management",
      "Cloud workload protection",
    ],
  },
  {
    icon: Users,
    title: "Security Awareness Training",
    description: "Transform your employees into your first line of defense.",
    features: [
      "Phishing simulations",
      "Interactive training modules",
      "Compliance training",
      "Executive briefings",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />

        <div className="container-cyber relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Enterprise Security Services</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Comprehensive <GradientText>Security Services</GradientText>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From threat detection to incident response, our expert team provides 
              end-to-end security services tailored to your organization's needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-cyber">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Card variant="glow" className="h-full group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30 relative">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container-cyber relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <GradientText>Approach</GradientText>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic methodology to assess, protect, and defend your organization.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assess", description: "Comprehensive evaluation of your current security posture" },
              { step: "02", title: "Design", description: "Custom security architecture tailored to your needs" },
              { step: "03", title: "Implement", description: "Deploy solutions with minimal business disruption" },
              { step: "04", title: "Optimize", description: "Continuous improvement and threat adaptation" },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-cyber">
          <AnimatedSection>
            <Card variant="glow" className="p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need Custom Security Solutions?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Our team of security experts will work with you to develop a 
                  tailored security program that meets your unique requirements.
                </p>
                <Link to="/contact">
                  <Button variant="cyber" size="lg">
                    Get in Touch
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
