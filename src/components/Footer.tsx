import { githubHref, site } from "@/lib/site";

export function Footer() {
  const github = githubHref();

  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-[11px] tracking-[0.16em] uppercase">
          {site.name}
        </p>
        <p>Senior Software Engineer · Backend & systems</p>
        <ul className="flex flex-wrap gap-4">
          {github ? (
            <li>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                GitHub
              </a>
            </li>
          ) : null}
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="hover:text-foreground">
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
