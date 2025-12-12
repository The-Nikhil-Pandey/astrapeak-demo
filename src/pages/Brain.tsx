import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Brain as BrainIcon, 
  Activity, 
  Zap, 
  Shield, 
  LineChart, 
  Lock,
  ArrowRight,
  CheckCircle,
  Globe,
  Clock,
  Target,
  Cpu
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, CountUp, FloatingElement, GradientText } from "@/components/ui/animations";

const capabilities = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "Continuous analysis of network traffic, endpoints, and cloud environments.",
  },
  {
    icon: Zap,
    title: "Automated Response",
    description: "Instant threat containment through AI-driven playbooks and workflows.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Machine learning models that anticipate attacks before they happen.",
  },
  {
    icon: Lock,
    title: "Threat Intelligence",
    description: "Global threat feeds integrated with proprietary intelligence sources.",
  },
  {
    icon: Globe,
    title: "Multi-Cloud Support",
    description: "Unified security across AWS, Azure, GCP, and on-premise infrastructure.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning for behavioral analysis and anomaly detection.",
  },
];

const metrics = [
  { value: 99.9, suffix: "%", label: "Detection Accuracy" },
  { value: 60, prefix: "<", suffix: "s", label: "Mean Response Time" },
  { value: 24, suffix: "/7", label: "SOC Operation" },
  { value: 90, suffix: "%", label: "False Positive Reduction" },
];

const integrations = [
  "AWS", "Azure", "GCP", "Splunk", "Elastic", "CrowdStrike", 
  "Okta", "ServiceNow", "PagerDuty", "Slack", "Jira", "GitHub"
];

export default function Brain() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />

        <div className="container-cyber relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
              >
                <BrainIcon className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">AI-Powered Platform</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                The <GradientText>BRAIN</GradientText>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Our revolutionary AI-powered threat detection and response platform. 
                Process millions of security events in real-time with unprecedented accuracy.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="cyber" size="lg">
                    Request Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="cyber-outline" size="lg">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <FloatingElement>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl" />
                  <Card variant="glass" className="relative p-8">
                    {/* Brain Visualization */}
                    <div className="relative w-full aspect-square max-w-sm mx-auto">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="w-48 h-48 rounded-full bg-primary/20 blur-xl"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                          className="w-64 h-64 rounded-full bg-secondary/20 blur-xl"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BrainIcon className="w-32 h-32 text-primary animate-pulse" />
                      </div>
                      
                      {/* Orbiting Elements */}
                      {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
                        <motion.div
                          key={i}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0"
                          style={{ transform: `rotate(${rotation}deg)` }}
                        >
                          <div className="absolute top-4 left-1/2 w-3 h-3 rounded-full bg-primary/60 shadow-glow" />
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </div>
              </FloatingElement>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section-padding bg-muted/30 relative">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container-cyber relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <AnimatedSection key={metric.label} delay={index * 0.1}>
                <Card variant="glass" className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    <CountUp 
                      end={metric.value} 
                      prefix={metric.prefix} 
                      suffix={metric.suffix}
                      decimals={metric.value < 100 && !metric.prefix ? 1 : 0}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding">
        <div className="container-cyber">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core <GradientText>Capabilities</GradientText>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced features powered by cutting-edge AI and machine learning technology.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <AnimatedSection key={capability.title} delay={index * 0.1}>
                <Card variant="glow" className="p-6 h-full group">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                      <capability.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container-cyber relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How <GradientText>It Works</GradientText>
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Collect",
                description: "Aggregate security data from all your environments—endpoints, networks, cloud, and applications.",
                icon: Target,
              },
              {
                step: "02",
                title: "Analyze",
                description: "AI-powered correlation engine processes millions of events to identify genuine threats.",
                icon: BrainIcon,
              },
              {
                step: "03",
                title: "Respond",
                description: "Automated playbooks execute containment actions in seconds, not hours.",
                icon: Zap,
              },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.15}>
                <div className="relative">
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent -translate-y-1/2 z-0" />
                  )}
                  <Card variant="glass" className="relative z-10 p-8 text-center">
                    <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section-padding">
        <div className="container-cyber">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless <GradientText>Integrations</GradientText>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with your existing security tools and infrastructure.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              {integrations.map((integration) => (
                <div
                  key={integration}
                  className="px-6 py-3 rounded-xl bg-muted/50 border border-cyber-border/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                >
                  {integration}
                </div>
              ))}
            </div>
          </AnimatedSection>
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
                  Experience The BRAIN
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  See how our AI-powered platform can transform your security operations.
                </p>
                <Link to="/contact">
                  <Button variant="cyber" size="lg">
                    Schedule Demo
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
