import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "",
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const key = import.meta.env.VITE_FORM_PUBLIC_KEY;
    if (!key) {
      toast({ title: "Missing Key", description: "Form key is not configured." });
      return;
    }

    const payload = { ...formData, access_key: key };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.json();
        console.error("Form submit failed:", response.status, text);
        setResult("Something went wrong. Please try again.");
        toast({
          title: "Something went wrong...",
          description: text.message || `Status ${response.status}`,
        });
        return;
      }

      // attempt to parse JSON response
      const data = await response.json().catch(() => null);
      if (data && data.success) {
        setResult("Message sent successfully!");
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "", access_key: "" });
      } else {
        setResult("Something went wrong. Please try again.");
        toast({
          title: "Something went wrong...",
          description: (data && data.message) || "Please resubmit your message.",
        });
      }
    } catch (err) {
      console.error("Network or parse error on form submit:", err);
      setResult("Network error. Please try again later.");
      toast({ title: "Network Error", description: "Unable to submit the form." });
    }
  };

  return (
    <div className="min-h-screen pt-16 mx-4 sm:mx-8 lg:mx-12">
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12 sm:mt-8 mb-12 mx-4 sm:mx-8 lg:mx-12"
        >
          <h1 className="text-5xl font-bold mb-8">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="mx-4 sm:mx-8 lg:mx-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
