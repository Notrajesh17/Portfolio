import { Mail } from "lucide-react";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { githubHref, site } from "@/lib/site";

export function Contact() {
  const github = githubHref();

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-5 font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
            09 / Contact
          </p>
          <h2 className="font-display max-w-4xl text-4xl leading-[1.08] sm:text-6xl">
            Let&apos;s build something meaningful.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Interested in working together or talking about backend engineering,
            distributed systems, or interesting technical problems?
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <MagneticButton href={`mailto:${site.email}`}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email me
            </MagneticButton>
            <MagneticButton href={site.linkedin} variant="ghost" external>
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </MagneticButton>
            <MagneticButton
              href={github ?? "#"}
              variant="ghost"
              external={Boolean(github)}
              disabled={!github}
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </MagneticButton>
            <MagneticButton href={site.instagram} variant="ghost" external>
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
