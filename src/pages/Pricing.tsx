import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Check, 
  X, 
  ArrowRight, 
  Zap,
  Shield,
  Building2
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection, GradientText } from "@/components/ui/animations";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Standard",
    icon: Shield,
    description: "Essential security for growing businesses",
    price: "2,999",
    period: "/month",
    popular: false,
    features: [
      { name: "Up to 500 endpoints", included: true },
      { name: "Real-time threat detection", included: true },
      { name: "24/5 SOC support", included: true },
      { name: "Basic threat intelligence", included: true },
      { name: "Monthly reports", included: true },
      { name: "Email support", included: true },
      { name: "Custom integrations", included: false },
      { name: "Dedicated account manager", included: false },
      { name: "On-site incident response", included: false },
    ],
  },
  {
    name: "Premium",
    icon: Zap,
    description: "Advanced protection for mid-size enterprises",
    price: "7,999",
    period: "/month",
    popular: true,
    features: [
      { name: "Up to 2,500 endpoints", included: true },
      { name: "Real-time threat detection", included: true },
      { name: "24/7 SOC support", included: true },
      { name: "Advanced threat intelligence", included: true },
      { name: "Weekly reports", included: true },
      { name: "Priority support", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "On-site incident response", included: false },
    ],
  },
  {
    name: "Enterprise",
    icon: Building2,
    description: "Complete solution for large organizations",
    price: "Custom",
    period: "",
    popular: false,
    features: [
      { name: "Unlimited endpoints", included: true },
      { name: "Real-time threat detection", included: true },
      { name: "24/7 dedicated SOC team", included: true },
      { name: "Premium threat intelligence", included: true },
      { name: "Real-time dashboards", included: true },
      { name: "White-glove support", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "On-site incident response", included: true },
    ],
  },
];

const faqs = [
  {
    question: "What's included in the setup?",
    answer: "All plans include full deployment assistance, integration with your existing tools, and comprehensive onboarding for your security team.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, you can upgrade at any time. We'll prorate your billing and help migrate your configuration seamlessly.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes, annual billing saves you 20% compared to monthly billing across all plans.",
  },
  {
    question: "What's the contract term?",
    answer: "Monthly plans have no commitment. Annual plans are billed yearly with a 20% discount.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />

        <div className="container-cyber relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Simple, <GradientText>Transparent</GradientText> Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your organization's security needs. 
              All plans include our core protection features.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding pt-0">
        <div className="container-cyber">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <AnimatedSection key={plan.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card 
                    variant={plan.popular ? "default" : "glow"} 
                    className={cn(
                      "relative h-full",
                      plan.popular && "border-2 border-primary shadow-glow"
                    )}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-semibold text-white">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <CardHeader className="text-center pb-4">
                      <div className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4",
                        plan.popular ? "bg-primary/20" : "bg-muted"
                      )}>
                        <plan.icon className={cn(
                          "w-7 h-7",
                          plan.popular ? "text-primary" : "text-muted-foreground"
                        )} />
                      </div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <div className="text-center py-4 border-y border-cyber-border/50">
                        <span className="text-4xl font-bold">
                          {plan.price === "Custom" ? "" : "$"}{plan.price}
                        </span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>

                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature.name} className="flex items-center gap-3">
                            {feature.included ? (
                              <Check className="w-5 h-5 text-primary flex-shrink-0" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                            )}
                            <span className={cn(
                              "text-sm",
                              !feature.included && "text-muted-foreground/50"
                            )}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link to="/contact" className="block">
                        <Button 
                          variant={plan.popular ? "cyber" : "cyber-outline"} 
                          className="w-full"
                          size="lg"
                        >
                          {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="section-padding bg-muted/30 relative">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container-cyber relative">
          <AnimatedSection>
            <Card variant="glass" className="p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
              <div className="relative">
                <Building2 className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Our enterprise team will work with you to create a tailored security 
                  solution that meets your specific requirements and compliance needs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact">
                    <Button variant="cyber" size="lg">
                      Contact Enterprise Sales
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-cyber">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <GradientText>Questions</GradientText>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 0.1}>
                <Card variant="glow" className="p-6 h-full">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
