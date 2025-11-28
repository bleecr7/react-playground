import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Rocket,
  Briefcase,
  Code2,
  Cloud,
  Wrench,
} from "lucide-react";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const skills = [
    { name: "Platform Architecture", icon: Cloud, color: "text-tech-cyan" },
    { name: "Infrastructure Migration", icon: Rocket, color: "text-tech-purple" },
    { name: "Obsolescence Remediation", icon: Wrench, color: "text-tech-blue" },
    { name: "System Design", icon: Code2, color: "text-tech-cyan" },
  ];

  const experience = [
    // {
    //   role: "Manager of Engineering Obsolescence Control",
    //   company: "LSEG",
    //   period: "2026 - Present",
    //   description:
    //     "Responsible for governance of multiple workstreams in multi-year obsolescence remediation programmes, working across Architecture, CIOs, Engineering 1LOD, and Risk 2LOD.",
    // },
    {
      role: "Cloud Consultant",
      company: "KPMG",
      period: "2021 - 2025",
      description:
        "Delivered multi-year infrastructure migration and obsolescence remediation programmes, managing migration events end-to-end from application discovery through to event execution.",
    },
  ];

  const certifications = [
    "Azure Solutions Architect Professional",
    "Azure Network Engineer Associate",
    "Google Generative AI Leader",
    "Terraform Associate",
    "TOGAF Enterprise Architect",
    "FinOps Certified Practitioner",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container min-h-screen flex items-center pt-16 mx-4 sm:mx-8 lg:mx-12">
        <div className="w-full">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-tech-cyan to-tech-purple bg-clip-text text-transparent">
                Brandon Lee
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Cloud & Infrastructure Architect
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              I help architect platforms to enable and deliver digital
              innovation at pace. Passionate about platform engineering, digital
              transformation, and continuous learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/blog">View Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-8 text-center">
              About Me
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over 4 years of experience in delivering cloud migrations
                and AI systems, I've helped organizations transform their
                infrastructure and build intelligent solutions that scale. My
                expertise spans across the full infrastructure stack, including
                compute, networking, and storage.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying at the forefront of
                technology. While I don't always have the chance to work with
                the newest tech in my day-to-day work, this is where I
                experiment and develop to stay current with latest trends.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-12 text-center">
              Core Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <Card
                  key={skill.name}
                  className="group hover:shadow-xl hover:shadow-primary/10 transition-all border-2 hover:border-accent"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`${skill.color} mb-4 inline-block group-hover:scale-110 transition-transform`}
                    >
                      <skill.icon size={48} />
                    </div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Briefcase className="mr-3 text-primary" size={32} />
              <h2 className="font-orbitron font-bold text-3xl md:text-4xl">
                Experience
              </h2>
            </div>
            <div className="space-y-8 max-w-4xl mx-auto">
              {experience.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center md:flex-row md:justify-between mb-3">
                      <h3 className="font-bold text-xl">{exp.role}</h3>
                      <Badge variant="secondary" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-semibold mb-3">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Award className="mr-3 text-accent" size={32} />
              <h2 className="font-orbitron font-bold text-3xl md:text-4xl">
                Certifications
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg hover:shadow-accent/20 transition-all"
                >
                  <CardContent className="p-6 flex items-center">
                    <Award
                      className="text-accent mr-4 flex-shrink-0"
                      size={24}
                    />
                    <span className="font-medium">{cert}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
