import { ArrowUpRight, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const projects = [
    {
      title: "Retro Game Hub",
      description: "A nostalgic hub for browsing and playing classic retro games in the browser.",
      year: "2025",
      tag: "Web App",
      href: "https://lovable.dev/projects/33297f90-cd30-49a1-80c9-f8154b71404f",
    },
    {
      title: "Project Two",
      description: "Another concise description. Replace with your actual work.",
      year: "2025",
      tag: "Design",
      href: "#",
    },
    {
      title: "Project Three",
      description: "Tell the visitor what makes this project unique in one line.",
      year: "2025",
      tag: "Open Source",
      href: "#",
    },
  ];

  const skills = ["TypeScript", "React", "Node.js", "Design Systems", "UI/UX", "Tailwind CSS"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-serif text-xl">Arham Imran</a>
          <div className="hidden sm:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#work" className="hover:text-accent transition-colors">Work</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-muted-foreground mb-6 tracking-wide uppercase">
            <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
            Available for new work
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl leading-[0.95] mb-8 text-balance">
            Hi, I'm <em className="text-accent">Arham Imran</em>.
            <br />
            I build things for the web.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A short, punchy intro about who you are and what you do. Replace this with your own story —
            something honest, something memorable.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <a href="#work">View my work <ArrowUpRight className="ml-1" /></a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">About</p>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
              I care about craft, clarity, and the small details.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Write a paragraph or two about your background — where you've worked, what you love
              building, and what drives you. Keep it conversational, like you're talking to a friend.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not at the keyboard, you'll find me [your hobbies here]. I believe great work
              comes from curiosity and a willingness to keep learning.
            </p>

            <div className="pt-6">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm border border-border rounded-full hover:border-accent hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-1">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Selected Work</p>
            </div>
            <div className="md:col-span-2">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                A few things I've built recently.
              </h2>
            </div>
          </div>

          <div className="space-y-px">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block py-8 border-t border-border hover:border-accent transition-colors"
              >
                <div className="grid md:grid-cols-12 gap-4 items-baseline">
                  <span className="md:col-span-1 text-sm text-muted-foreground">0{i + 1}</span>
                  <div className="md:col-span-6">
                    <h3 className="font-serif text-3xl md:text-4xl group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="md:col-span-3 text-muted-foreground">{project.description}</p>
                  <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-3">
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">Contact</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-8 text-balance">
            Let's make something <em className="text-accent">together</em>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Have a project in mind, or just want to say hi? My inbox is always open.
          </p>
          <Button size="lg" className="rounded-full" asChild>
            <a href="mailto:hello@yourname.com">
              <Mail className="mr-2" /> hello@yourname.com
            </a>
          </Button>

          <div className="flex justify-center gap-6 mt-12">
            <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-accent transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Arham Imran. All rights reserved.</p>
          <p className="font-serif italic">Designed & built with care.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
