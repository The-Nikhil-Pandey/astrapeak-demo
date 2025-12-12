import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection, GradientText } from "@/components/ui/animations";

export default function BlogArticle() {
  const { id } = useParams();

  return (
    <Layout>
      <article className="relative pt-32 pb-20">
        <div className="container-cyber max-w-4xl">
          <AnimatedSection>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="mb-8">
              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Threat Intelligence
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
                The Rise of AI-Powered Cyber Attacks: <GradientText>What You Need to Know</GradientText>
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />Dr. Sarah Chen</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />Dec 10, 2024</span>
                <span>8 min read</span>
              </div>
            </div>

            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-12" />

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As artificial intelligence continues to evolve at an unprecedented pace, cybercriminals are increasingly leveraging these technologies to create more sophisticated and harder-to-detect attacks. Understanding this emerging threat landscape is crucial for organizations of all sizes.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">The Evolution of AI-Powered Attacks</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Traditional cyber attacks relied heavily on known patterns and signatures that security tools could identify. However, AI-powered attacks can adapt in real-time, learning from defensive measures and finding new vulnerabilities to exploit.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Key Threat Categories</h2>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li>• Automated phishing campaigns with personalized content</li>
                <li>• AI-generated deepfakes for social engineering</li>
                <li>• Intelligent malware that evades detection</li>
                <li>• Automated vulnerability discovery and exploitation</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Defensive Strategies</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Organizations must adopt AI-powered defensive measures to counter these threats. This includes implementing behavioral analysis, continuous monitoring, and automated response systems that can match the speed and adaptability of AI-driven attacks.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-cyber-border/50 flex justify-between items-center">
              <Link to="/blog">
                <Button variant="cyber-outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  More Articles
                </Button>
              </Link>
              <Button variant="ghost" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </article>
    </Layout>
  );
}
