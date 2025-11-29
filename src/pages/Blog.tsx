import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import website_ss from "@/assets/website_ss.png";
import TF from "@/assets/TF.svg";

const Blog = () => {
  const projects = [
    {
      title: "React Web App",
      description:
        "A React PWA used for my personal website - the one you're on right now!",
      technologies: ["React"],
      bothLinks: true,
      liveUrl: "https://brandonlee.cloud/",
      githubUrl: "https://github.com/bleecr7/react-playground",
      image: website_ss,
    },
    {
      title: "Azure Static Web App",
      description:
        "Terraform IaC used to deploy the full infrastructure stack behind my personal website.",
      technologies: ["Terragrunt", "Azure", "Cloudflare", "Github Actions"],
      bothLinks: false,
      githubUrl: "https://github.com/bleecr7/azure-swa",
      image: TF,
    },
    {
      title: "Core Platform Infrastructure",
      description:
        "Terraform IaC used to deploy the core shared infrastructure across all my projects.",
      technologies: ["Terraform", "Azure", "Cloudflare"],
      bothLinks: false,
      githubUrl: "https://github.com/bleecr7/infra-playground",
      image: TF,
    },
  ];

return (
  <div className="min-h-screen pt-16 mx-4 sm:mx-8 lg:mx-12">
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-12 sm:mt-8 mb-16"
      >
        <h1 className="text-5xl font-bold mb-8">
          My <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Collection of tech projects that I've been tinkering with recently
          &mdash;
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="overflow-hidden card-elevated h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.bothLinks && (
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);
};

export default Blog;
