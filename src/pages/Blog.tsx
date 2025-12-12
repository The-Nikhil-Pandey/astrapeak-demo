import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, GradientText } from "@/components/ui/animations";

const blogPosts = [
  {
    id: "1",
    title: "The Rise of AI-Powered Cyber Attacks: What You Need to Know",
    excerpt: "As AI becomes more sophisticated, so do the threats. Learn how to prepare your organization.",
    date: "Dec 10, 2024",
    author: "Dr. Sarah Chen",
    category: "Threat Intelligence",
    featured: true,
  },
  {
    id: "2",
    title: "Zero Trust Architecture: A Complete Implementation Guide",
    excerpt: "Step-by-step guide to implementing zero trust security in your enterprise.",
    date: "Dec 5, 2024",
    author: "Michael Torres",
    category: "Best Practices",
    featured: false,
  },
  {
    id: "3",
    title: "Ransomware Trends in 2024: Prevention and Response",
    excerpt: "Analysis of the latest ransomware tactics and how to protect your organization.",
    date: "Nov 28, 2024",
    author: "Emily Watson",
    category: "Threat Intelligence",
    featured: false,
  },
  {
    id: "4",
    title: "Cloud Security Posture Management Essentials",
    excerpt: "Essential strategies for maintaining security across multi-cloud environments.",
    date: "Nov 20, 2024",
    author: "James Liu",
    category: "Cloud Security",
    featured: false,
  },
  {
    id: "5",
    title: "Incident Response Playbook: From Detection to Recovery",
    excerpt: "Build an effective incident response plan that minimizes damage and downtime.",
    date: "Nov 15, 2024",
    author: "Dr. Sarah Chen",
    category: "Best Practices",
    featured: false,
  },
  {
    id: "6",
    title: "The Human Factor: Building a Security-First Culture",
    excerpt: "Transform your employees into your strongest line of defense.",
    date: "Nov 10, 2024",
    author: "Michael Torres",
    category: "Security Culture",
    featured: false,
  },
];

export default function Blog() {
  const featured = blogPosts.find((post) => post.featured);
  const regular = blogPosts.filter((post) => !post.featured);

  return (
    <Layout>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="container-cyber relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Security <GradientText>Insights</GradientText>
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert analysis, threat intelligence, and best practices from our security team.
            </p>
          </AnimatedSection>

          {featured && (
            <AnimatedSection delay={0.1} className="mb-12">
              <Link to={`/blog/${featured.id}`}>
                <Card variant="glow" className="p-8 group cursor-pointer">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl" />
                    <div>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        Featured
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-3 group-hover:text-primary transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">{featured.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><User className="w-4 h-4" />{featured.author}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{featured.date}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </AnimatedSection>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regular.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1}>
                <Link to={`/blog/${post.id}`}>
                  <Card variant="glow" className="h-full group cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-t-2xl" />
                    <CardContent className="p-6">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
