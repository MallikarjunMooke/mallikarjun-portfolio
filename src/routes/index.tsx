import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Github, Mail, Phone } from "lucide-react";

const TITLE = "Mallikarjun Mooke — Technical Consultant & Java Backend Developer";
const DESC =
  "Portfolio of Mallikarjun Mooke: Java backend development, enterprise ERP support, production support, DevOps and cloud fundamentals.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "Mallikarjunmooke1999@gmail.com";
const PHONE = "+91 9972837001";
const GITHUB = "https://github.com/MallikarjunMooke/FloatingInterviewCopilot";

const NAV = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"],
] as const;

const SKILLS: [string, string[], string?][] = [
  ["Backend Development", ["Java 8/11", "Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "Hibernate", "REST APIs", "Microservices Fundamentals", "JUnit", "Maven"]],
  ["Database", ["PostgreSQL", "MySQL", "SQL"]],
  ["DevOps & Tools", ["Linux", "Bash", "Git", "Docker", "Docker Compose", "Dynatrace"]],
  ["ERP & Application Support", ["Openbravo", "Etendo", "DAL/HQL", "ERP Customization", "Application Support", "Production Support", "Log Analysis", "Troubleshooting", "Deployment Support", "UAT", "RCA", "Fit-Gap Analysis", "FRD/BRD"]],
  ["Cloud", ["AWS", "Cloud Fundamentals"], "Learning / familiarity"],
];

const RESPONSIBILITIES = [
  "Enterprise ERP customization and application support.",
  "Supported inventory and order-related business workflows.",
  "Contributed to backend feature development.",
  "API and database enhancements.",
  "Bug fixing and testing.",
  "Linux troubleshooting and log analysis.",
  "SQL investigation.",
  "Deployment support and UAT.",
  "Root-cause analysis and production issue resolution.",
];

function Section({ id, label, title, children }: { id: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-border py-20 md:py-24">
      <div className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{label}</p>
        </div>
        <div>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">{title}</h2>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-sm border border-border bg-card px-2.5 py-1 text-sm text-secondary-foreground">{children}</li>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <nav aria-label="Primary" className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <a href="#home" className="font-serif text-lg font-medium">Mallikarjun Mooke</a>
          <ul className="flex gap-4 overflow-x-auto text-sm text-muted-foreground md:gap-7">
            {NAV.slice(1).map(([l, id]) => (
              <li key={id}>
                <a href={`#${id}`} className="whitespace-nowrap transition-colors hover:text-foreground">{l}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <section id="home" className="flex min-h-[78vh] flex-col justify-center py-24">
          <p className="animate-fade-up font-mono text-sm text-primary">Hello, I'm</p>
          <h1 className="animate-fade-up mt-3 font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl" style={{ animationDelay: "80ms" }}>
            Mallikarjun Mooke.
          </h1>
          <p className="animate-fade-up mt-6 text-lg font-medium text-secondary-foreground md:text-xl" style={{ animationDelay: "160ms" }}>
            Technical Consultant <span className="text-border">|</span> Java Backend Developer <span className="text-border">|</span> Production Support
          </p>
          <p className="animate-fade-up mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: "240ms" }}>
            I build and support enterprise applications, develop backend solutions, and solve real-world technical problems.
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-3" style={{ animationDelay: "320ms" }}>
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              View My Work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-foreground/30">
              Get In Touch
            </a>
          </div>
        </section>

        <Section id="about" label="01 — About" title="About me">
          <div className="max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-secondary-foreground">
            <p>I am a Technical Consultant with approximately 2 years of experience in Java backend development, enterprise ERP customization, application support and production support.</p>
            <p>My experience includes backend feature development, REST API enhancements, database operations, Linux troubleshooting, log analysis, deployment support, UAT and root-cause analysis.</p>
            <p>I enjoy solving technical problems, understanding application behavior and developing practical solutions. I am continuously expanding my knowledge in DevOps, cloud technologies and modern application infrastructure.</p>
          </div>
          <div className="mt-10 border-l-2 border-primary pl-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Education</p>
            <p className="mt-1 font-medium">Bachelor's Degree in Mechanical Engineering</p>
            <p className="text-sm text-muted-foreground">Graduated 2022</p>
          </div>
        </Section>

        <Section id="skills" label="02 — Skills" title="Technical skills">
          <div className="divide-y divide-border">
            {SKILLS.map(([cat, items, note]) => (
              <div key={cat} className="grid gap-3 py-5 first:pt-0 sm:grid-cols-[200px_1fr]">
                <div>
                  <h3 className="font-medium">{cat}</h3>
                  {note && <p className="text-xs text-muted-foreground">{note}</p>}
                </div>
                <ul className="flex flex-wrap gap-2">
                  {items.map((s) => <Tag key={s}>{s}</Tag>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" label="03 — Experience" title="Professional experience">
          <ol className="relative border-l border-border pl-8">
            <li>
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
              <h3 className="text-xl font-medium">Technical Consultant / Java Backend Developer</h3>
              <p className="mt-1 text-muted-foreground">
                Promantia Business Solutions <span className="mx-1">·</span> Client: Decathlon
              </p>
              <ul className="mt-6 grid gap-x-8 gap-y-2.5 text-secondary-foreground md:grid-cols-2">
                {RESPONSIBILITIES.map((r) => (
                  <li key={r} className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-primary" aria-hidden />
                    {r}
                  </li>
                ))}
              </ul>
            </li>
          </ol>
        </Section>

        <Section id="projects" label="04 — Projects" title="Selected projects">
          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
            <article className="flex flex-col bg-card p-7">
              <h3 className="text-lg font-medium">Containerized Java Application</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                A hands-on project focused on containerizing a Java application using Docker and Docker Compose.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Java", "Docker", "Docker Compose"].map((t) => <Tag key={t}>{t}</Tag>)}
              </ul>
            </article>
            <article className="flex flex-col bg-card p-7">
              <h3 className="text-lg font-medium">FloatingInterviewCopilot</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">A personal interview-copilot project.</p>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                <Github className="h-4 w-4" /> View on GitHub
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </article>
          </div>
        </Section>

        <Section id="contact" label="05 — Contact" title="Let's Connect">
          <p className="max-w-xl text-muted-foreground">Open to conversations about backend development, application support and DevOps roles.</p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {[
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: Phone, label: "Phone", value: PHONE, href: "tel:+919972837001" },
              { icon: Github, label: "GitHub", value: "MallikarjunMooke", href: GITHUB, ext: true },
            ].map(({ icon: Icon, label, value, href, ext }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 py-4 transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  <span className="w-20 font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
                  <span className="break-all">{value}</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mallikarjun Mooke
        </div>
      </footer>
    </div>
  );
}
