import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Eye, 
  Lock, 
  Server, 
  BarChart3, 
  ArrowRight,
  Activity,
  Globe,
  Users,
  CheckCircle
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CyberGrid } from "@/components/ui/CyberGrid";
import { AnimatedSection, CountUp, FloatingElement, GradientText } from "@/components/ui/animations";

const features = [
  {
    icon: Eye,
    title: "Threat Detection",
    description: "AI-powered real-time monitoring identifies threats before they impact your business.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Automated incident response reduces containment time from hours to seconds.",
  },
  {
    icon: Lock,
    title: "Zero Trust Security",
    description: "Implement zero trust architecture across your entire infrastructure.",
  },
  {
    icon: Server,
    title: "Cloud Protection",
    description: "Comprehensive security for hybrid and multi-cloud environments.",
  },
  {
    icon: BarChart3,
    title: "Security Analytics",
    description: "Deep visibility into your security posture with actionable insights.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "24/7 security operations center monitoring threats worldwide.",
  },
];

const stats = [
  { value: 99.9, suffix: "%", label: "Detection Rate" },
  { value: 60, prefix: "<", suffix: "s", label: "Response Time" },
  { value: 500, suffix: "+", label: "Enterprises Protected" },
  { value: 10, suffix: "M+", label: "Threats Blocked Daily" },
];

const trustedBy = [
  "Fortune 500",
  "Government",
  "Healthcare",
  "Finance",
  "Technology",
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <CyberGrid />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />

        <div className="container-cyber relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Live Threat Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm text-muted-foreground">
                <CountUp end={847293} /> threats blocked in the last 24 hours
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              Enterprise Security{" "}
              <GradientText>Redefined</GradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              AI-powered threat detection and response platform trusted by Fortune 500 
              companies. Stop breaches before they happen.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <Button variant="cyber" size="xl" className="w-full sm:w-auto">
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/brain">
                <Button variant="cyber-outline" size="xl" className="w-full sm:w-auto">
                  Explore Platform
                </Button>
              </Link>
            </motion.div>

            {/* Trusted By */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 pt-8 border-t border-cyber-border/30"
            >
              <p className="text-sm text-muted-foreground mb-4">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center gap-8">
                {trustedBy.map((name) => (
                  <span key={name} className="text-sm font-medium text-muted-foreground/60">
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted/30 relative">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="container-cyber relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    <CountUp 
                      end={stat.value} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix} 
                      decimals={stat.value < 100 ? 1 : 0}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding relative">
        <div className="container-cyber">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete <GradientText>Security Platform</GradientText>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to protect your enterprise from evolving cyber threats.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <Card variant="glow" className="h-full p-6 group">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container-cyber relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Introducing <GradientText>The BRAIN</GradientText>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our AI-powered threat intelligence platform processes millions of security events 
                in real-time, correlating data across your entire infrastructure to identify 
                and neutralize threats before they cause damage.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Real-time threat correlation and analysis",
                  "Automated incident response workflows",
                  "Predictive threat intelligence",
                  "Seamless integration with existing tools",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/brain">
                <Button variant="cyber">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <FloatingElement>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl" />
                  <Card variant="glass" className="relative p-8">
                    <div className="space-y-6">
                      {/* Simulated Dashboard */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Activity className="w-5 h-5 text-primary" />
                          <span className="font-medium">Threat Activity</span>
                        </div>
                        <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                          Live
                        </span>
                      </div>
                      
                      <div className="h-32 bg-muted/50 rounded-lg flex items-end gap-1 p-4">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 50].map((height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-sm"
                          />
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { label: "Blocked", value: "12.4K" },
                          { label: "Analyzed", value: "847K" },
                          { label: "Protected", value: "99.9%" },
                        ].map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className="text-lg font-bold text-primary">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </FloatingElement>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="container-cyber">
          <AnimatedSection>
            <Card variant="glow" className="p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Secure Your Enterprise?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Join hundreds of enterprises already protected by CyberShield. 
                  Get started with a personalized demo today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="cyber" size="lg">
                      Schedule Demo
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button variant="cyber-outline" size="lg">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
