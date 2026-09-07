import { j as e, A as v, m as g } from "./vendor-motion-DryeDRHM.js";
import { r as c } from "./vendor-router-CtvkFGlM.js";
import {
  o as k,
  n as C,
  r as m,
  E as p,
  C as S,
  a as G,
  y as A,
  t as H,
  z as P,
  b as T,
} from "./vendor-icons-CqqOs0Bq.js";
const E = `# GitVitae Changelog

All notable changes are listed here. Each version brings new features you can opt into by adding a line or two to your \`portfolio.config.yaml\`.

---

## [1.7.0] — 2026-05-05

### New
- **AI Chat Assistant** — Every portfolio now includes a global AI chat widget powered by WebLLM (Llama-3.2-1B-Instruct). The chat:
  - Runs entirely in your browser with no backend or API calls
  - Automatically learns about your portfolio from your config and README
  - Includes context awareness so it knows which page the user is on
  - Resets conversation every 8 exchanges to maintain token efficiency
  - Displays a disclaimer that AI answers may contain errors
  - Works offline after initial model download (~1.5GB)
  - Accessible on all devices (web, iPad, mobile) with fixed positioning at bottom-right
  - Collapsible interface that starts closed to avoid distraction
- **Chat disclaimer** — A prominent warning appears in the chat header to inform visitors that AI-generated answers may contain errors and should be verified independently.

### Improved
- **Changelog modal scrollable** — Fixed scrolling in the "What's new" modal so longer changelogs are fully accessible.

---

## [1.6.0] — 2026-05-02

### Performance
- **CSS bundle −47KB** — Font imports now use Latin + Latin-Ext subsets only. Previously all languages (Cyrillic, Vietnamese, Greek, Greek-Ext) were loaded even for English portfolios. This removes ~50 unused \`@font-face\` declarations and reduces the number of font files in the build from 80+ to 38.
- **LCP improved** — The hero name and avatar no longer start invisible. Previously both faded in from \`opacity: 0\`, which pushed the Largest Contentful Paint score out by 600–700ms while the animation played. The elements now paint immediately and slide in from a slight vertical offset — same visual effect, no LCP penalty.
- **Avatar loads faster** — The avatar image now has \`fetchpriority="high"\` so the browser queues it immediately alongside the critical CSS and JS, rather than after. If your avatar is hosted externally (e.g. DiceBear), a \`<link rel="preconnect">\` is now injected into the HTML automatically for its domain so the DNS + TLS handshake starts as early as possible.

---

## [1.5.0] — 2026-05-02

### Performance
- **~54% smaller initial JS** — Code split into separate vendor chunks (React, Framer Motion, Lenis, Lucide, Wouter). Non-essential pages (Resume, Setup, Blog, Landing) now load on demand instead of upfront.
- **Google Fonts eliminated** — Fonts (Inter, Cormorant Garamond, JetBrains Mono) are now self-hosted as part of the build. No more render-blocking cross-origin network requests, which was the primary cause of slow First Contentful Paint.

### Accessibility
- **Respects reduced-motion OS setting** — All Framer Motion animations are automatically disabled for users who have "Reduce motion" turned on in their OS settings. Lenis smooth scrolling is also skipped for these users, restoring native scroll speed.

---

## [1.4.0] — 2026-05-02

### New
- **GitHub Activity section** — Set your \`social.github\` URL and your portfolio automatically shows a live "GitHub Activity" section: total stars across your public repos, follower count, repo count, and a top-language breakdown with animated progress bars. No extra config needed — it appears when your GitHub URL is set, disappears when it isn't.
- **Pick any colour** — Add \`primaryColor: "#e11d48"\` to your config to use any hex colour you like. Just Google "colour picker", choose your favourite, and paste the code. No colour theory needed — the palette for light and dark mode is generated automatically.
- **Dynamic favicon** — Your browser tab now shows your initials in your chosen colour, automatically generated from your name. No image files to create or upload.
- **Auto-sync GitHub Action** — Your repo ships with a "Sync GitVitae Template" workflow. Go to Actions → Sync GitVitae Template → Run workflow → type YES. Pulls in the latest template updates while always preserving your \`portfolio.config.yaml\`.
- **Changelog modal** — Click "What's new" at the bottom of your portfolio to see what features have been added since you set up your portfolio.

### Improved
- **Setup wizard** — Now explains both ways to copy the template ("Use this template" vs Fork) and which update method works with each.
- **Staying up to date** — The Done step now shows all three upgrade paths in order of simplicity.

---

## [1.3.0] — 2026-05-02

### New
- **Visitor analytics** — Two free options built in. GitHub's traffic insights are already there (repo → Insights → Traffic, zero setup). For more detail, add GoatCounter (privacy-friendly, free forever for personal use): \`analytics:\\n  goatcounterCode: yourcode\`
- **Config validator** — Run \`pnpm check-config\` to catch placeholder values, missing fields, and invalid config before you deploy. Runs automatically in GitHub Actions and blocks broken configs from going live. \`pnpm check-config --fix\` auto-corrects safe structural issues.
- **Section deep-links** — Hover any portfolio section to reveal a copy-link button. Share a specific job, project, or skill set with a direct URL.
- **Share modal** — Section-specific copy-link grid and QR code for your full portfolio URL.

### Improved
- **Active nav link** — Fixed scroll tracking so the highlighted nav pill always reflects the section you're actually reading.
- **Landing page** — Redesigned narrative story section explaining the problem GitVitae solves.

---

## [1.2.0] — 2026-04-15

### New
- **Blog** — Drop any \`.md\` file into \`blog/\` and it becomes a post automatically. Includes a full RSS feed at \`/rss.xml\`. Enable with:
  \`\`\`yaml
  blog:
    enabled: true
    title: "Blog"
  \`\`\`
- **Testimonials section** — Add endorsements from colleagues, managers, and clients. Enable with \`show: true\` under \`id: testimonials\` in your sections list.
- **Publications section** — Ideal for researchers and technical writers. Enable with \`show: true\` under \`id: publications\`.
- **PDF-ready resume** — Visit \`/resume\` on your portfolio for a clean, printable, ATS-friendly resume generated entirely from your YAML — two layouts included (two-column and classic).
- **Stats section** — Highlight the numbers that matter. Enable with \`show: true\` under \`id: stats\`.

### Improved
- **Section visibility** — Any section can be hidden with \`show: false\` in your sections list — no code changes needed.
- **Resume themes** — Choose separate color presets per layout:
  \`\`\`yaml
  resumeTheme:
    twoColumn: indigo
    classic: emerald
  \`\`\`

---

## [1.1.0] — 2026-04-01

### New
- **Dark mode** — Set \`defaultTheme: dark\` or let visitors toggle with the moon icon in the nav.
- **Color presets** — Six built-in accent colors. Set with \`colorPreset: indigo\` (options: \`indigo\` · \`emerald\` · \`rose\` · \`amber\` · \`ocean\` · \`slate\`).
- **Contact form** — Add a Formspree endpoint to \`contactFormEndpoint\` for a real working contact form with no backend needed.
- **Languages section** — List the languages you speak with proficiency levels (\`Native\` · \`Fluent\` · \`Conversational\` · \`Basic\`). Enable with \`show: true\` under \`id: languages\`.

---

## [1.0.0] — 2026-03-15

Initial release — portfolio-as-code for GitHub Pages.

- **YAML-driven config** — entire portfolio controlled by a single \`portfolio.config.yaml\` file; no code editing required
- **Sections** — About, Skills, Experience, Projects (featured + full list), Education, Certifications
- **Themes** — dark / light / system with color presets
- **Open-to-work banner** — opt-in with \`openToWork: true\`
- **Resume export** — PDF, JSON Resume, and Markdown from the live site
- **Auto base-path detection** — works for both \`username.github.io\` and subdirectory repos
- **GitHub Actions workflow** — push to \`main\` → live in ~2 minutes
`,
  R = "https://github.com/git-vitae/git-vitae.github.io/generate",
  L = "https://github.com/signup";
function u({ text: t }) {
  const [r, s] = c.useState(!1),
    a = async () => {
      await navigator.clipboard.writeText(t),
        s(!0),
        setTimeout(() => s(!1), 2e3);
    };
  return e.jsxs("button", {
    onClick: a,
    className:
      "bg-secondary border-border text-muted-foreground hover:text-foreground hover:border-primary/40 ml-1 inline-flex items-center gap-1.5 rounded border px-2 py-0.5 text-xs transition-all",
    children: [
      r
        ? e.jsx(S, { size: 11, className: "text-green-500" })
        : e.jsx(G, { size: 11 }),
      r ? "Copied!" : "Copy",
    ],
  });
}
function I({ onNext: t }) {
  return e.jsxs("div", {
    className: "text-center",
    children: [
      e.jsx("div", { className: "mb-6 text-5xl", children: "👋" }),
      e.jsx("h2", {
        className:
          "text-foreground mb-4 font-serif text-2xl font-medium sm:text-3xl",
        children: "Let's set up your free portfolio",
      }),
      e.jsxs("p", {
        className:
          "text-muted-foreground mx-auto mb-8 max-w-md text-sm leading-relaxed",
        children: [
          "This takes about ",
          e.jsx("strong", {
            className: "text-foreground",
            children: "5 minutes",
          }),
          ". We'll walk you through each step with clear pictures so you always know exactly where to click.",
        ],
      }),
      e.jsx("div", {
        className: "mx-auto mb-10 grid max-w-xl gap-4 text-left sm:grid-cols-3",
        children: [
          {
            emoji: "🆓",
            label: "Completely free",
            sub: "No credit card, no trial",
          },
          {
            emoji: "🖱️",
            label: "No coding needed",
            sub: "Just fill in your details",
          },
          {
            emoji: "⚡",
            label: "Live in 5 minutes",
            sub: "Automatic publishing",
          },
        ].map((r) =>
          e.jsxs(
            "div",
            {
              className:
                "border-border bg-secondary/30 flex items-start gap-3 rounded-xl border p-4",
              children: [
                e.jsx("span", {
                  className: "text-2xl leading-none",
                  children: r.emoji,
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-foreground text-xs font-semibold",
                      children: r.label,
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground text-[11px]",
                      children: r.sub,
                    }),
                  ],
                }),
              ],
            },
            r.label,
          ),
        ),
      }),
      e.jsxs("button", {
        onClick: t,
        className:
          "bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90",
        children: ["Let's get started", e.jsx(m, { size: 15 })],
      }),
    ],
  });
}
function U() {
  return e.jsxs("div", {
    className:
      "border-border bg-background mx-auto max-w-sm overflow-hidden rounded-2xl border shadow-lg",
    children: [
      e.jsxs("div", {
        className:
          "bg-secondary border-border flex items-center gap-2 border-b px-3 py-2.5",
        children: [
          e.jsxs("div", {
            className: "flex gap-1",
            children: [
              e.jsx("div", {
                className: "h-2.5 w-2.5 rounded-full bg-red-400/60",
              }),
              e.jsx("div", {
                className: "h-2.5 w-2.5 rounded-full bg-yellow-400/60",
              }),
              e.jsx("div", {
                className: "h-2.5 w-2.5 rounded-full bg-green-400/60",
              }),
            ],
          }),
          e.jsx("div", {
            className: "flex-1",
            children: e.jsx("div", {
              className:
                "bg-background border-border text-muted-foreground rounded border px-2 py-0.5 text-center font-mono text-[10px]",
              children: "github.com/signup",
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "p-6",
        children: [
          e.jsx("div", {
            className: "mb-4 flex justify-center",
            children: e.jsx("svg", {
              height: "32",
              viewBox: "0 0 16 16",
              className: "fill-foreground",
              children: e.jsx("path", {
                d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
              }),
            }),
          }),
          e.jsx("h3", {
            className: "text-foreground mb-4 text-center text-sm font-semibold",
            children: "Create your account",
          }),
          e.jsxs("div", {
            className: "mb-4 space-y-2.5",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className: "text-muted-foreground mb-1 block text-[10px]",
                    children: "Username",
                  }),
                  e.jsx("div", {
                    className:
                      "border-border bg-secondary text-muted-foreground flex h-7 w-full items-center rounded border px-2 text-[11px]",
                    children: "janedoe",
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className: "text-muted-foreground mb-1 block text-[10px]",
                    children: "Email address",
                  }),
                  e.jsx("div", {
                    className:
                      "border-border bg-secondary text-muted-foreground flex h-7 w-full items-center rounded border px-2 text-[11px]",
                    children: "jane@example.com",
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className: "text-muted-foreground mb-1 block text-[10px]",
                    children: "Password",
                  }),
                  e.jsx("div", {
                    className:
                      "border-border bg-secondary text-muted-foreground flex h-7 w-full items-center rounded border px-2 text-[11px]",
                    children: "••••••••••••",
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "w-full rounded bg-[#2ea44f] py-2 text-center text-[11px] font-semibold text-white",
            children: "Create account",
          }),
        ],
      }),
    ],
  });
}
function F({ onNext: t }) {
  return e.jsxs("div", {
    children: [
      e.jsxs("div", {
        className: "mb-8 text-center",
        children: [
          e.jsx("p", {
            className:
              "text-primary mb-2 font-mono text-xs tracking-widest uppercase",
            children: "Step 1 of 4",
          }),
          e.jsx("h2", {
            className:
              "text-foreground mb-3 font-serif text-2xl font-medium sm:text-3xl",
            children: "Create a free GitHub account",
          }),
          e.jsx("p", {
            className:
              "text-muted-foreground mx-auto max-w-md text-sm leading-relaxed",
            children:
              'GitHub is a free service that will host your portfolio website. Think of it as the place where your portfolio "lives." Creating an account takes about 30 seconds.',
          }),
        ],
      }),
      e.jsxs("div", {
        className: "mb-8 grid items-start gap-8 md:grid-cols-2",
        children: [
          e.jsx(U, {}),
          e.jsxs("div", {
            className: "space-y-5",
            children: [
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    children: "1",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-foreground mb-1 text-sm font-medium",
                        children: "Go to GitHub.com",
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground text-xs",
                        children:
                          "Open the link below in a new tab. You'll see a simple sign-up form.",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    children: "2",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-foreground mb-1 text-sm font-medium",
                        children: "Choose a username",
                      }),
                      e.jsxs("p", {
                        className: "text-muted-foreground text-xs",
                        children: [
                          "Your username becomes part of your portfolio address:",
                          " ",
                          e.jsx("span", {
                            className:
                              "bg-secondary text-foreground rounded px-1 font-mono",
                            children: "yourusername.github.io",
                          }),
                          ". Choose something professional.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    children: "3",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-foreground mb-1 text-sm font-medium",
                        children: "Verify your email",
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground text-xs",
                        children:
                          "GitHub will send you a quick verification email. Click the link inside it and you're in.",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "bg-primary/5 border-primary/15 rounded-xl border p-4",
                children: [
                  e.jsx("p", {
                    className: "text-primary mb-1 text-xs font-medium",
                    children: "💡 Tip",
                  }),
                  e.jsx("p", {
                    className: "text-muted-foreground text-xs",
                    children:
                      "Already have a GitHub account? Great — skip straight to the next step!",
                  }),
                ],
              }),
              e.jsxs("a", {
                href: L,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "inline-flex items-center gap-2 rounded-full bg-[#2ea44f] px-5 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90",
                children: [
                  "Create free account at GitHub.com",
                  e.jsx(p, { size: 12 }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx("div", {
        className: "flex justify-end",
        children: e.jsxs("button", {
          onClick: t,
          className:
            "bg-primary text-primary-foreground flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-90",
          children: ["I have an account — continue", e.jsx(m, { size: 14 })],
        }),
      }),
    ],
  });
}
function M() {
  return e.jsxs("div", {
    className:
      "border-border bg-background mx-auto max-w-sm overflow-hidden rounded-2xl border shadow-lg",
    children: [
      e.jsxs("div", {
        className:
          "bg-secondary border-border flex items-center gap-2 border-b px-3 py-2.5",
        children: [
          e.jsxs("div", {
            className: "flex gap-1",
            children: [
              e.jsx("div", {
                className: "h-2.5 w-2.5 rounded-full bg-red-400/60",
              }),
              e.jsx("div", {
                className: "h-2.5 w-2.5 rounded-full bg-yellow-400/60",
              }),
              e.jsx("div", {
                className: "h-2.5 w-2.5 rounded-full bg-green-400/60",
              }),
            ],
          }),
          e.jsx("div", {
            className: "flex-1",
            children: e.jsx("div", {
              className:
                "bg-background border-border text-muted-foreground truncate rounded border px-2 py-0.5 text-center font-mono text-[10px]",
              children: "github.com/git-vitae/git-vitae.github.io",
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "p-5",
        children: [
          e.jsxs("div", {
            className: "mb-3 flex items-center gap-2",
            children: [
              e.jsx("div", {
                className:
                  "bg-primary/20 text-primary flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold",
                children: "GV",
              }),
              e.jsx("span", {
                className: "text-muted-foreground text-xs",
                children: "git-vitae / ",
              }),
              e.jsx("span", {
                className: "text-foreground text-xs font-semibold",
                children: "git-vitae.github.io",
              }),
            ],
          }),
          e.jsx("p", {
            className: "text-muted-foreground mb-4 text-[11px]",
            children:
              "A free portfolio website template — edit one file, go live in minutes.",
          }),
          e.jsxs("div", {
            className: "flex gap-2",
            children: [
              e.jsx("div", {
                className:
                  "border-border text-muted-foreground bg-secondary flex-1 rounded border py-1.5 text-center text-[11px]",
                children: "⭐ Star",
              }),
              e.jsx("div", {
                className:
                  "ring-offset-background flex-1 rounded bg-[#2ea44f] py-1.5 text-center text-[11px] font-semibold text-white ring-2 ring-[#2ea44f] ring-offset-2",
                children: "Use this template ▾",
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "border-primary/30 bg-primary/5 mt-3 rounded border-2 border-dashed p-2 text-center",
            children: e.jsx("span", {
              className: "text-primary text-[10px] font-medium",
              children: "👆 Click this green button",
            }),
          }),
        ],
      }),
    ],
  });
}
function Y() {
  return e.jsxs("div", {
    className:
      "border-border bg-background overflow-hidden rounded-xl border shadow-md",
    children: [
      e.jsx("div", {
        className: "border-border bg-secondary border-b px-4 py-3",
        children: e.jsx("p", {
          className: "text-muted-foreground font-mono text-[11px]",
          children: "Create a new repository from template",
        }),
      }),
      e.jsxs("div", {
        className: "space-y-3 p-4",
        children: [
          e.jsxs("div", {
            children: [
              e.jsxs("label", {
                className: "text-muted-foreground mb-1 block text-[10px]",
                children: [
                  "Repository name ",
                  e.jsx("span", { className: "text-red-400", children: "*" }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center gap-1 text-[11px]",
                children: [
                  e.jsx("span", {
                    className:
                      "text-muted-foreground bg-secondary border-border rounded-l border px-2 py-1.5",
                    children: "janedoe /",
                  }),
                  e.jsx("div", {
                    className:
                      "bg-background border-primary text-foreground ring-primary flex-1 rounded-r border px-2 py-1.5 font-mono font-semibold ring-1",
                    children: "janedoe.github.io",
                  }),
                ],
              }),
              e.jsx("p", {
                className: "text-primary mt-1 text-[10px]",
                children: "✓ Use your own username here",
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "rounded bg-[#2ea44f] py-2 text-center text-[11px] font-semibold text-white",
            children: "Create repository from template",
          }),
        ],
      }),
    ],
  });
}
function O({ onNext: t }) {
  return e.jsxs("div", {
    children: [
      e.jsxs("div", {
        className: "mb-8 text-center",
        children: [
          e.jsx("p", {
            className:
              "text-primary mb-2 font-mono text-xs tracking-widest uppercase",
            children: "Step 2 of 4",
          }),
          e.jsx("h2", {
            className:
              "text-foreground mb-3 font-serif text-2xl font-medium sm:text-3xl",
            children: "Copy the portfolio template",
          }),
          e.jsx("p", {
            className:
              "text-muted-foreground mx-auto max-w-md text-sm leading-relaxed",
            children:
              "You're going to make your own personal copy of the GitVitae template. There are two ways — pick whichever feels simpler.",
          }),
        ],
      }),
      e.jsxs("div", {
        className:
          "mx-auto mb-8 grid w-full max-w-xl gap-3 text-left sm:grid-cols-2",
        children: [
          e.jsxs("div", {
            className:
              "border-primary/30 bg-primary/5 rounded-xl border-2 p-3.5",
            children: [
              e.jsxs("p", {
                className:
                  "text-foreground mb-1 flex items-center gap-1.5 text-xs font-semibold",
                children: [
                  e.jsx("span", {
                    className:
                      "bg-primary text-primary-foreground rounded px-1.5 py-0.5 text-[10px] font-bold",
                    children: "Recommended",
                  }),
                  '"Use this template"',
                ],
              }),
              e.jsxs("p", {
                className: "text-muted-foreground text-[11px] leading-relaxed",
                children: [
                  "Creates a fresh copy with no git history. Cleaner and simpler for most people. Future updates via the Actions tab or",
                  " ",
                  e.jsx("code", {
                    className:
                      "text-primary bg-secondary rounded px-1 font-mono",
                    children: "pnpm upgrade-template",
                  }),
                  ".",
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "border-border rounded-xl border p-3.5",
            children: [
              e.jsx("p", {
                className: "text-foreground mb-1 text-xs font-semibold",
                children: "Fork",
              }),
              e.jsxs("p", {
                className: "text-muted-foreground text-[11px] leading-relaxed",
                children: [
                  "Links your copy back to GitVitae. You get GitHub's built-in",
                  " ",
                  e.jsx("strong", {
                    className: "text-foreground",
                    children: '"Sync fork"',
                  }),
                  " button for one-click updates — handy if you're already comfortable with git.",
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "mb-6 grid items-start gap-8 md:grid-cols-2",
        children: [
          e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsx(M, {}),
              e.jsx("div", { className: "mt-2", children: e.jsx(Y, {}) }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-5",
            children: [
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    children: "1",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-foreground mb-1 text-sm font-medium",
                        children: "Open the template page",
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground text-xs",
                        children:
                          "Click the button below. You'll land on the GitVitae template page on GitHub.",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    children: "2",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsxs("p", {
                        className: "text-foreground mb-1 text-sm font-medium",
                        children: [
                          'Click "Use this template"',
                          " ",
                          e.jsx("span", {
                            className: "text-muted-foreground font-normal",
                            children: "or",
                          }),
                          " ",
                          '"Fork"',
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground text-xs",
                        children:
                          'Green "Use this template" button → "Create a new repository" is the quickest path. Or click "Fork" in the top-right if you want the sync button later.',
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    children: "3",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-foreground mb-1 text-sm font-medium",
                        children: "Name your repository",
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground text-xs",
                        children: 'In the "Repository name" box, type exactly:',
                      }),
                      e.jsxs("div", {
                        className:
                          "bg-secondary border-border text-foreground mt-1.5 flex items-center gap-1 rounded-lg border px-2.5 py-1.5 font-mono text-xs",
                        children: [
                          e.jsx("span", {
                            className: "text-muted-foreground",
                            children: "yourusername",
                          }),
                          e.jsx("span", { children: ".github.io" }),
                          e.jsx(u, { text: "yourusername.github.io" }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground mt-1 text-[11px]",
                        children:
                          'Replace "yourusername" with your actual GitHub username.',
                      }),
                      e.jsxs("div", {
                        className:
                          "bg-primary/5 border-primary/15 mt-2 space-y-1 rounded-lg border p-2.5",
                        children: [
                          e.jsx("p", {
                            className: "text-primary text-[10px] font-semibold",
                            children: "✨ Why this name matters",
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-1.5 text-[10px]",
                            children: [
                              e.jsx("span", {
                                className:
                                  "font-bold text-green-600 dark:text-green-400",
                                children: "✓",
                              }),
                              e.jsx("span", {
                                className: "text-foreground font-mono",
                                children: "yourusername.github.io",
                              }),
                              e.jsx("span", {
                                className: "text-muted-foreground",
                                children: "— short, clean URL",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-1.5 text-[10px]",
                            children: [
                              e.jsx("span", {
                                className: "font-bold text-red-400",
                                children: "✗",
                              }),
                              e.jsx("span", {
                                className:
                                  "text-muted-foreground font-mono line-through",
                                children: "yourusername.github.io/my-portfolio",
                              }),
                            ],
                          }),
                          e.jsxs("p", {
                            className: "text-muted-foreground text-[10px]",
                            children: [
                              "Naming it",
                              " ",
                              e.jsx("span", {
                                className: "font-mono",
                                children: "username.github.io",
                              }),
                              " is the only way to get the short address — any other name adds a long path at the end.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    children: "4",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-foreground mb-1 text-sm font-medium",
                        children: 'Click "Create repository"',
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground text-xs",
                        children:
                          "That's it! Your copy of the template is now ready to personalise.",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("a", {
                href: R,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "inline-flex items-center gap-2 rounded-full bg-[#2ea44f] px-5 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90",
                children: [
                  "Open the template on GitHub",
                  e.jsx(p, { size: 12 }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx("div", {
        className: "flex justify-end",
        children: e.jsxs("button", {
          onClick: t,
          className:
            "bg-primary text-primary-foreground flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-90",
          children: [
            "I've copied the template — continue",
            e.jsx(m, { size: 14 }),
          ],
        }),
      }),
    ],
  });
}
function z() {
  return e.jsxs("div", {
    className: "grid",
    children: [
      e.jsxs("div", {
        className:
          "border-border bg-background mx-auto max-w-sm overflow-hidden rounded-2xl border shadow-lg",
        children: [
          e.jsxs("div", {
            className:
              "bg-secondary border-border flex items-center gap-2 border-b px-3 py-2.5",
            children: [
              e.jsxs("div", {
                className: "flex gap-1",
                children: [
                  e.jsx("div", {
                    className: "h-2.5 w-2.5 rounded-full bg-red-400/60",
                  }),
                  e.jsx("div", {
                    className: "h-2.5 w-2.5 rounded-full bg-yellow-400/60",
                  }),
                  e.jsx("div", {
                    className: "h-2.5 w-2.5 rounded-full bg-green-400/60",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "flex-1",
                children: e.jsx("div", {
                  className:
                    "bg-background border-border text-muted-foreground truncate rounded border px-2 py-0.5 text-center font-mono text-[10px]",
                  children: "github.com / janedoe / janedoe.github.io",
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "border-border bg-secondary/50 flex items-center justify-between border-b px-4 py-2",
            children: [
              e.jsxs("div", {
                className:
                  "text-muted-foreground flex items-center gap-1.5 text-[11px]",
                children: [
                  e.jsx("span", {
                    className: "text-primary font-medium",
                    children: "janedoe.github.io",
                  }),
                  e.jsx(A, { size: 10 }),
                  e.jsx("span", {
                    className: "text-foreground font-mono font-semibold",
                    children: "portfolio.config.yaml",
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "flex items-center gap-1 rounded bg-[#2ea44f] px-2 py-0.5 text-[10px] font-semibold text-white",
                children: "✏️ Edit",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "p-4 font-mono text-[11px] leading-relaxed",
            children: [
              e.jsx("div", {
                className: "text-primary/50",
                children: "# Fill in your details below",
              }),
              e.jsxs("div", {
                className: "mt-1",
                children: [
                  e.jsx("span", {
                    className: "text-blue-500 dark:text-blue-400",
                    children: "name",
                  }),
                  ":",
                  " ",
                  e.jsx("span", {
                    className:
                      "rounded bg-yellow-200/60 px-1 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-300",
                    children: '"Git Vitae"',
                  }),
                  e.jsx("span", {
                    className: "text-primary/40 ml-1 text-[10px]",
                    children: "← change this",
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("span", {
                    className: "text-blue-500 dark:text-blue-400",
                    children: "title",
                  }),
                  ":",
                  " ",
                  e.jsx("span", {
                    className:
                      "rounded bg-yellow-200/60 px-1 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-300",
                    children: '"Full-Stack Engineer"',
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("span", {
                    className: "text-blue-500 dark:text-blue-400",
                    children: "email",
                  }),
                  ":",
                  " ",
                  e.jsx("span", {
                    className:
                      "rounded bg-yellow-200/60 px-1 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-300",
                    children: '"git-vitae@proton.me"',
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("span", {
                    className: "text-blue-500 dark:text-blue-400",
                    children: "location",
                  }),
                  ":",
                  " ",
                  e.jsx("span", {
                    className: "text-green-600 dark:text-green-400",
                    children: '"San Francisco, CA"',
                  }),
                ],
              }),
              e.jsx("div", {
                className: "text-primary/50 mt-1",
                children: "# Don't forget to change siteMode!",
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("span", {
                    className: "text-blue-500 dark:text-blue-400",
                    children: "siteMode",
                  }),
                  ":",
                  " ",
                  e.jsx("span", {
                    className:
                      "rounded bg-yellow-200/60 px-1 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-300",
                    children: '"landing"',
                  }),
                  e.jsx("span", {
                    className: "text-primary/40 ml-1 text-[10px]",
                    children: '← change to "portfolio"',
                  }),
                ],
              }),
              e.jsx("div", {
                className: "text-foreground/20 mt-1",
                children: "...",
              }),
            ],
          }),
          e.jsx("div", {
            className: "px-4 pb-4",
            children: e.jsx("div", {
              className:
                "w-full rounded bg-[#2ea44f] py-1.5 text-center text-[11px] font-semibold text-white",
              children: "Commit changes",
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "mt-6 space-y-3",
        children: [
          e.jsxs("div", {
            className:
              "rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-500/20 dark:bg-amber-500/10",
            children: [
              e.jsx("p", {
                className:
                  "mb-1 text-xs font-medium text-amber-700 dark:text-amber-400",
                children: "⚠️ Important — siteMode",
              }),
              e.jsxs("p", {
                className: "text-xs text-amber-700/80 dark:text-amber-400/80",
                children: [
                  "Change ",
                  e.jsx("span", {
                    className: "font-mono",
                    children: "siteMode",
                  }),
                  " from",
                  " ",
                  e.jsx("span", {
                    className: "font-mono",
                    children: '"landing"',
                  }),
                  " to",
                  " ",
                  e.jsx("span", {
                    className: "font-mono",
                    children: '"portfolio"',
                  }),
                  " — otherwise you'll still see the GitVitae introduction page instead of your portfolio.",
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-500/20 dark:bg-amber-500/10",
            children: [
              e.jsx("p", {
                className:
                  "mb-1 text-xs font-medium text-amber-700 dark:text-amber-400",
                children: "⚠️ Important — siteUrl",
              }),
              e.jsxs("p", {
                className: "text-xs text-amber-700/80 dark:text-amber-400/80",
                children: [
                  "Set ",
                  e.jsx("span", {
                    className: "font-mono",
                    children: "siteUrl",
                  }),
                  " to your real GitHub Pages address, e.g.",
                  " ",
                  e.jsx("span", {
                    className: "font-mono",
                    children: "https://janedoe.github.io",
                  }),
                  ". If you leave it as the placeholder, section share-links and your RSS feed will point to the wrong URL.",
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function V({ onNext: t }) {
  const r = [
    { field: "name", desc: "Your full name", example: '"Jane Doe"' },
    {
      field: "title",
      desc: "Your job title or role",
      example: '"UX Designer"',
    },
    {
      field: "email",
      desc: "Your email address",
      example: '"jane@example.com"',
    },
    {
      field: "tagline",
      desc: "One line about yourself",
      example: '"I design things people love."',
    },
    { field: "location", desc: "Where you're based", example: '"London, UK"' },
    {
      field: "siteUrl",
      desc: "Your GitHub Pages URL",
      example: '"https://janedoe.github.io"',
    },
    {
      field: "siteMode",
      desc: "Change to show your portfolio",
      example: '"portfolio"',
    },
  ];
  return e.jsxs("div", {
    children: [
      e.jsxs("div", {
        className: "mb-8 text-center",
        children: [
          e.jsx("p", {
            className:
              "text-primary mb-2 font-mono text-xs tracking-widest uppercase",
            children: "Step 4 of 4",
          }),
          e.jsx("h2", {
            className:
              "text-foreground mb-3 font-serif text-2xl font-medium sm:text-3xl",
            children: "Fill in your details",
          }),
          e.jsxs("p", {
            className:
              "text-muted-foreground mx-auto max-w-md text-sm leading-relaxed",
            children: [
              "In your new repository, find and open the file called",
              " ",
              e.jsx("span", {
                className:
                  "bg-secondary text-foreground rounded px-1.5 py-0.5 font-mono text-xs",
                children: "portfolio.config.yaml",
              }),
              ". Replace the placeholder text with your own information.",
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "mb-6 grid items-start gap-8 md:grid-cols-2",
        children: [
          e.jsx(z, {}),
          e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    children: "1",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-foreground mb-1 text-sm font-medium",
                        children: "Open the settings file",
                      }),
                      e.jsxs("p", {
                        className: "text-muted-foreground text-xs",
                        children: [
                          "In your new repository, click on the file called",
                          " ",
                          e.jsx("span", {
                            className:
                              "bg-secondary text-foreground rounded px-1 font-mono",
                            children: "portfolio.config.yaml",
                          }),
                          ". Then click the pencil icon (✏️) to edit it.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    children: "2",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-foreground mb-1 text-sm font-medium",
                        children: "Replace the highlighted fields",
                      }),
                      e.jsxs("p", {
                        className: "text-muted-foreground mb-3 text-xs",
                        children: [
                          "Look for lines that have a colon (",
                          e.jsx("span", {
                            className: "font-mono",
                            children: ":",
                          }),
                          ") and replace the text in quotation marks. Start with these key fields:",
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "border-border overflow-hidden rounded-xl border",
                        children: e.jsxs("table", {
                          className: "w-full text-xs",
                          children: [
                            e.jsx("thead", {
                              children: e.jsxs("tr", {
                                className:
                                  "bg-secondary border-border border-b",
                                children: [
                                  e.jsx("th", {
                                    className:
                                      "text-muted-foreground px-3 py-2 text-left font-medium",
                                    children: "Field",
                                  }),
                                  e.jsx("th", {
                                    className:
                                      "text-muted-foreground px-3 py-2 text-left font-medium",
                                    children: "What to put",
                                  }),
                                ],
                              }),
                            }),
                            e.jsx("tbody", {
                              children: r.map((s, a) =>
                                e.jsxs(
                                  "tr",
                                  {
                                    className:
                                      a % 2 === 0 ? "" : "bg-secondary/30",
                                    children: [
                                      e.jsx("td", {
                                        className:
                                          "text-primary px-3 py-2 font-mono",
                                        children: s.field,
                                      }),
                                      e.jsx("td", {
                                        className:
                                          "text-muted-foreground px-3 py-2",
                                        children: s.desc,
                                      }),
                                    ],
                                  },
                                  s.field,
                                ),
                              ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    children: "3",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-foreground mb-1 text-sm font-medium",
                        children: "Save your changes",
                      }),
                      e.jsxs("p", {
                        className: "text-muted-foreground text-xs",
                        children: [
                          "Scroll to the bottom and click the green",
                          " ",
                          e.jsx("strong", {
                            className: "text-foreground",
                            children: '"Commit changes"',
                          }),
                          " ",
                          "button. Your portfolio will update automatically within 1–2 minutes.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    children: "3",
                  }),
                  e.jsxs("div", {
                    className: "flex-1",
                    children: [
                      e.jsxs("p", {
                        className: "text-foreground mb-1 text-sm font-medium",
                        children: [
                          "Pick a colour theme",
                          " ",
                          e.jsx("span", {
                            className:
                              "text-muted-foreground text-xs font-normal",
                            children: "(optional)",
                          }),
                        ],
                      }),
                      e.jsxs("p", {
                        className: "text-muted-foreground mb-3 text-xs",
                        children: [
                          "Find the",
                          " ",
                          e.jsx("span", {
                            className:
                              "bg-secondary text-foreground rounded px-1 font-mono",
                            children: "colorPreset",
                          }),
                          " ",
                          "field and replace it with one of these names. Click a swatch to copy it.",
                        ],
                      }),
                      e.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                          {
                            value: "indigo",
                            label: "Indigo",
                            hsl: "250 84% 60%",
                          },
                          {
                            value: "emerald",
                            label: "Emerald",
                            hsl: "160 72% 40%",
                          },
                          { value: "rose", label: "Rose", hsl: "340 75% 55%" },
                          { value: "amber", label: "Amber", hsl: "38 95% 50%" },
                          {
                            value: "ocean",
                            label: "Ocean",
                            hsl: "196 80% 42%",
                          },
                          {
                            value: "slate",
                            label: "Slate",
                            hsl: "215 30% 38%",
                          },
                        ].map((s) =>
                          e.jsxs(
                            "button",
                            {
                              title: `Copy: colorPreset: "${s.value}"`,
                              onClick: () =>
                                navigator.clipboard
                                  ?.writeText(s.value)
                                  .catch(() => {}),
                              className:
                                "border-border hover:border-primary/40 bg-background hover:bg-secondary text-foreground group flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "ring-border h-3 w-3 rounded-full ring-1 transition-transform group-hover:scale-125",
                                  style: { background: `hsl(${s.hsl})` },
                                }),
                                s.label,
                              ],
                            },
                            s.value,
                          ),
                        ),
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground mt-2 text-[11px]",
                        children:
                          "Click any swatch to copy the preset name to your clipboard.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx("div", {
        className: "flex justify-end",
        children: e.jsxs("button", {
          onClick: t,
          className:
            "bg-primary text-primary-foreground flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-90",
          children: ["I've saved my changes — finish!", e.jsx(m, { size: 14 })],
        }),
      }),
    ],
  });
}
function W() {
  return e.jsxs("div", {
    className:
      "border-border bg-background mx-auto max-w-sm overflow-hidden rounded-2xl border shadow-lg",
    children: [
      e.jsxs("div", {
        className:
          "bg-secondary border-border flex items-center gap-2 border-b px-3 py-2.5",
        children: [
          e.jsxs("div", {
            className: "flex gap-1",
            children: [
              e.jsx("div", {
                className: "h-2.5 w-2.5 rounded-full bg-red-400/60",
              }),
              e.jsx("div", {
                className: "h-2.5 w-2.5 rounded-full bg-yellow-400/60",
              }),
              e.jsx("div", {
                className: "h-2.5 w-2.5 rounded-full bg-green-400/60",
              }),
            ],
          }),
          e.jsx("div", {
            className: "flex-1",
            children: e.jsx("div", {
              className:
                "bg-background border-border text-muted-foreground truncate rounded border px-2 py-0.5 text-center font-mono text-[10px]",
              children: "github.com/janedoe/janedoe.github.io/settings/pages",
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "divide-border flex divide-x text-[10px]",
        children: [
          e.jsxs("div", {
            className: "bg-secondary/40 w-28 shrink-0 space-y-0.5 p-3",
            children: [
              e.jsx("p", {
                className: "text-muted-foreground mb-2 font-medium",
                children: "Settings",
              }),
              ["General", "Access", "Code security", "Branches"].map((t) =>
                e.jsx(
                  "div",
                  {
                    className: "text-muted-foreground rounded px-2 py-1",
                    children: t,
                  },
                  t,
                ),
              ),
              e.jsx("div", {
                className:
                  "bg-primary/10 text-primary ring-primary/20 rounded px-2 py-1 font-semibold ring-1",
                children: "Pages",
              }),
              ["Integrations", "Environments"].map((t) =>
                e.jsx(
                  "div",
                  {
                    className: "text-muted-foreground rounded px-2 py-1",
                    children: t,
                  },
                  t,
                ),
              ),
            ],
          }),
          e.jsxs("div", {
            className: "flex-1 space-y-3 p-4",
            children: [
              e.jsx("p", {
                className: "text-foreground text-[11px] font-semibold",
                children: "GitHub Pages",
              }),
              e.jsxs("div", {
                className:
                  "space-y-0.5 rounded-lg border border-[#2ea44f]/30 bg-[#2ea44f]/10 p-2 font-medium text-[#2ea44f]",
                children: [
                  e.jsx("div", { children: "✓ Your site will be live at" }),
                  e.jsx("div", {
                    className: "font-mono",
                    children: "https://janedoe.github.io",
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("p", {
                    className: "text-muted-foreground mb-1",
                    children: "Build and deployment · Source",
                  }),
                  e.jsxs("div", {
                    className:
                      "border-primary bg-background ring-primary/30 flex items-center justify-between rounded border px-2 py-1.5 ring-1",
                    children: [
                      e.jsx("span", {
                        className: "text-foreground font-medium",
                        children: "GitHub Actions",
                      }),
                      e.jsx("span", {
                        className: "text-muted-foreground",
                        children: "▾",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "text-primary mt-1 font-medium",
                    children: "👆 Select this option",
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "rounded bg-[#2ea44f] py-1.5 text-center font-semibold text-white",
                children: "Save",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function B({ onNext: t }) {
  return e.jsxs("div", {
    children: [
      e.jsxs("div", {
        className: "mb-8 text-center",
        children: [
          e.jsx("p", {
            className:
              "text-primary mb-2 font-mono text-xs tracking-widest uppercase",
            children: "Step 3 of 4",
          }),
          e.jsx("h2", {
            className:
              "text-foreground mb-3 font-serif text-2xl font-medium sm:text-3xl",
            children: "Enable GitHub Pages",
          }),
          e.jsx("p", {
            className:
              "text-muted-foreground mx-auto max-w-md text-sm leading-relaxed",
            children:
              "GitHub Pages is the free hosting service that makes your portfolio visible on the internet. You need to switch it on once — it takes about 30 seconds.",
          }),
        ],
      }),
      e.jsxs("div", {
        className: "mb-6 grid items-start gap-8 md:grid-cols-2",
        children: [
          e.jsx(W, {}),
          e.jsxs("div", {
            className: "space-y-5",
            children: [
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    children: "1",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-foreground mb-1 text-sm font-medium",
                        children: "Open your repository settings",
                      }),
                      e.jsxs("p", {
                        className: "text-muted-foreground text-xs",
                        children: [
                          "Go to your new repository on GitHub. Click the",
                          " ",
                          e.jsx("strong", {
                            className: "text-foreground",
                            children: "Settings",
                          }),
                          " tab near the top of the page (it has a gear ⚙️ icon).",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    children: "2",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-foreground mb-1 text-sm font-medium",
                        children: 'Click "Pages" in the sidebar',
                      }),
                      e.jsxs("p", {
                        className: "text-muted-foreground text-xs",
                        children: [
                          "In the left-hand menu, scroll down until you see",
                          " ",
                          e.jsx("strong", {
                            className: "text-foreground",
                            children: "Pages",
                          }),
                          ". Click it.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    children: "3",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-foreground mb-1 text-sm font-medium",
                        children: 'Set Source to "GitHub Actions"',
                      }),
                      e.jsxs("p", {
                        className: "text-muted-foreground text-xs",
                        children: [
                          "Under",
                          " ",
                          e.jsx("strong", {
                            className: "text-foreground",
                            children: "Build and deployment",
                          }),
                          ", click the Source dropdown and choose",
                          " ",
                          e.jsx("strong", {
                            className: "text-foreground",
                            children: "GitHub Actions",
                          }),
                          ". Then click ",
                          e.jsx("strong", {
                            className: "text-foreground",
                            children: "Save",
                          }),
                          ".",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    children: "4",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-foreground mb-1 text-sm font-medium",
                        children: "Wait ~2 minutes",
                      }),
                      e.jsxs("p", {
                        className: "text-muted-foreground text-xs",
                        children: [
                          "GitHub will build and publish your site automatically. You'll see a green banner saying your site is live at",
                          " ",
                          e.jsx("span", {
                            className:
                              "bg-secondary text-foreground rounded px-1 font-mono",
                            children: "yourusername.github.io",
                          }),
                          " ",
                          "once it's done.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-500/20 dark:bg-amber-500/10",
                children: [
                  e.jsx("p", {
                    className:
                      "mb-1 text-xs font-medium text-amber-700 dark:text-amber-400",
                    children: "⚠️ The first build will fail — that's normal",
                  }),
                  e.jsxs("p", {
                    className:
                      "text-xs text-amber-700/80 dark:text-amber-400/80",
                    children: [
                      "When you created the repository, GitHub tried to build it before Pages was configured. That first attempt fails. Once you've enabled Pages above, just make any tiny edit to your",
                      " ",
                      e.jsx("span", {
                        className: "font-mono",
                        children: "portfolio.config.yaml",
                      }),
                      " file and save it — that triggers a fresh build which will succeed.",
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "bg-primary/5 border-primary/15 rounded-xl border p-4",
                children: [
                  e.jsx("p", {
                    className: "text-primary mb-1 text-xs font-medium",
                    children: "💡 Don't see the Pages option?",
                  }),
                  e.jsxs("p", {
                    className: "text-muted-foreground text-xs",
                    children: [
                      "If your repository is private, Pages won't appear. Make sure you created a ",
                      e.jsx("strong", {
                        className: "text-foreground",
                        children: "Public",
                      }),
                      " ",
                      "repository when copying the template.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx("div", {
        className: "flex justify-end",
        children: e.jsxs("button", {
          onClick: t,
          className:
            "bg-primary text-primary-foreground flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-90",
          children: ["Pages is enabled — continue", e.jsx(m, { size: 14 })],
        }),
      }),
    ],
  });
}
const D =
    "https://raw.githubusercontent.com/git-vitae/git-vitae.github.io/main/CHANGELOG.md",
  N = "gitvitae-changelog-v1";
function _() {
  const [t, r] = c.useState(!1),
    [s, a] = c.useState(E),
    [n, d] = c.useState(!1);
  c.useEffect(() => {
    const o = sessionStorage.getItem(N);
    if (o) {
      a(o);
      return;
    }
    d(!0),
      fetch(D)
        .then((i) => (i.ok ? i.text() : Promise.reject()))
        .then((i) => {
          sessionStorage.setItem(N, i), a(i);
        })
        .catch(() => {})
        .finally(() => d(!1));
  }, []);
  const b = (
      (() => {
        const i = s
          .split(/^## /m)
          .filter(Boolean)
          .find((h) => /^\[/.test(h.trim()));
        return i ? `## ${i}` : null;
      })() ?? ""
    )
      .split(`
`)
      .filter((o) => o.trim()),
    y = b.find((o) => o.startsWith("## "))?.replace("## ", "") ?? "",
    x = [];
  let l = null;
  for (const o of b)
    o.startsWith("### ")
      ? (l && x.push(l), (l = { heading: o.replace("### ", ""), bullets: [] }))
      : o.startsWith("- ") && l && l.bullets.push(o.replace(/^- /, ""));
  return (
    l && x.push(l),
    e.jsxs("div", {
      className:
        "border-primary/20 bg-primary/5 mx-auto mb-8 w-full max-w-lg overflow-hidden rounded-2xl border text-left",
      children: [
        e.jsxs("button", {
          onClick: () => r((o) => !o),
          className:
            "hover:bg-primary/5 flex w-full items-center justify-between px-4 py-3 transition-colors",
          children: [
            e.jsxs("span", {
              className:
                "text-foreground flex items-center gap-2 text-sm font-medium",
              children: [
                e.jsx(H, { size: 14, className: "text-primary" }),
                y ? `What's new — ${y}` : "What's new in GitVitae",
                n &&
                  e.jsx(P, {
                    size: 11,
                    className: "text-muted-foreground animate-spin",
                  }),
              ],
            }),
            e.jsx(T, {
              size: 14,
              className: `text-muted-foreground transition-transform duration-200 ${t ? "rotate-180" : ""}`,
            }),
          ],
        }),
        e.jsx(v, {
          initial: !1,
          children:
            t &&
            x.length > 0 &&
            e.jsx(g.div, {
              initial: { height: 0 },
              animate: { height: "auto" },
              exit: { height: 0 },
              transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
              className: "overflow-hidden",
              children: e.jsxs("div", {
                className:
                  "border-primary/10 space-y-3 border-t px-4 pt-3 pb-4",
                children: [
                  x.map((o) =>
                    e.jsxs(
                      "div",
                      {
                        children: [
                          e.jsx("p", {
                            className:
                              "text-primary mb-1.5 font-mono text-[10px] font-semibold tracking-widest uppercase",
                            children: o.heading,
                          }),
                          e.jsx("ul", {
                            className: "space-y-1",
                            children: o.bullets.map((i, h) => {
                              const [w, ...j] = i.split(" — ");
                              return e.jsxs(
                                "li",
                                {
                                  className:
                                    "text-muted-foreground flex items-start gap-2 text-xs leading-snug",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "bg-primary/50 mt-1 h-1 w-1 shrink-0 rounded-full",
                                    }),
                                    e.jsxs("span", {
                                      children: [
                                        e.jsx("strong", {
                                          className:
                                            "text-foreground font-medium",
                                          children: w.replace(/\*\*/g, ""),
                                        }),
                                        j.length > 0
                                          ? ` — ${j.join(" — ")}`
                                          : "",
                                      ],
                                    }),
                                  ],
                                },
                                h,
                              );
                            }),
                          }),
                        ],
                      },
                      o.heading,
                    ),
                  ),
                  e.jsxs("a", {
                    href: "https://github.com/git-vitae/git-vitae.github.io/blob/main/CHANGELOG.md",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "text-primary mt-1 inline-flex items-center gap-1 text-[11px] underline-offset-2 hover:underline",
                    children: ["Full changelog ", e.jsx(p, { size: 10 })],
                  }),
                ],
              }),
            }),
        }),
      ],
    })
  );
}
function $() {
  const t = [
    {
      emoji: "🎨",
      title: "Change your colour theme",
      desc: "Edit the colorPreset field in your settings file. Try: indigo, emerald, rose, amber, ocean.",
    },
    {
      emoji: "📸",
      title: "Add your photo",
      desc: "Upload a photo to your repository and paste the link in the avatarUrl field.",
    },
    {
      emoji: "📄",
      title: "Print your resume",
      desc: "Visit /resume on your portfolio to see a beautiful printable resume — all generated from your settings file.",
    },
    {
      emoji: "🔗",
      title: "Add your own domain",
      desc: 'In your repository settings, find "Pages" and add your custom domain (e.g. janedoe.com).',
    },
    {
      emoji: "📊",
      title: "See who's visiting (free)",
      desc: "GitHub already tracks your visitors — go to your repository → Insights → Traffic. For more detail, add a free GoatCounter code to your settings file.",
    },
    {
      emoji: "⬆️",
      title: "Get future updates",
      desc: `Open your fork on GitHub and click "Sync fork" — that's it. Because you only edit portfolio.config.yaml, updates never cause conflicts.`,
    },
  ];
  return e.jsxs("div", {
    className: "text-center",
    children: [
      e.jsx(g.div, {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { type: "spring", stiffness: 200, damping: 15 },
        className: "mb-6 text-6xl",
        children: "🎉",
      }),
      e.jsx("h2", {
        className:
          "text-foreground mb-4 font-serif text-2xl font-medium sm:text-3xl",
        children: "You're all set!",
      }),
      e.jsxs("p", {
        className:
          "text-muted-foreground mx-auto mb-3 max-w-md text-sm leading-relaxed",
        children: [
          "GitHub is now publishing your portfolio. This usually takes",
          " ",
          e.jsx("strong", {
            className: "text-foreground",
            children: "1–2 minutes",
          }),
          ". Once it's ready, visit your portfolio at:",
        ],
      }),
      e.jsxs("div", {
        className:
          "bg-secondary border-border text-foreground mb-6 inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 font-mono text-sm",
        children: [
          "https://",
          e.jsx("span", {
            className: "text-primary",
            children: "yourusername",
          }),
          ".github.io",
          e.jsx(u, { text: "https://yourusername.github.io" }),
        ],
      }),
      e.jsxs("div", {
        className:
          "border-border mx-auto mb-10 w-full max-w-lg overflow-hidden rounded-2xl border text-left",
        children: [
          e.jsxs("div", {
            className:
              "bg-secondary border-border flex items-center gap-2 border-b px-4 py-3",
            children: [
              e.jsx("span", {
                className: "text-foreground text-sm font-medium",
                children: "Check your build status",
              }),
              e.jsx("span", {
                className: "text-muted-foreground text-xs",
                children: "— is it live yet?",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-3 p-4",
            children: [
              e.jsxs("div", {
                className: "flex items-start gap-3 text-xs",
                children: [
                  e.jsx("span", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold",
                    children: "1",
                  }),
                  e.jsxs("p", {
                    className: "text-muted-foreground",
                    children: [
                      "Go to your repository on GitHub and click the",
                      " ",
                      e.jsx("strong", {
                        className: "text-foreground",
                        children: "Actions",
                      }),
                      " tab.",
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-start gap-3 text-xs",
                children: [
                  e.jsx("span", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold",
                    children: "2",
                  }),
                  e.jsxs("div", {
                    className: "space-y-1.5",
                    children: [
                      e.jsx("p", {
                        className: "text-muted-foreground",
                        children:
                          "Look for a workflow run. The status dot tells you everything:",
                      }),
                      e.jsxs("div", {
                        className: "flex flex-col gap-1",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("span", {
                                className:
                                  "h-3 w-3 shrink-0 rounded-full bg-[#2ea44f]",
                              }),
                              e.jsx("span", {
                                className: "text-foreground font-medium",
                                children: "Green",
                              }),
                              e.jsx("span", {
                                className: "text-muted-foreground",
                                children: "— your portfolio is live! 🎉",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("span", {
                                className:
                                  "h-3 w-3 shrink-0 animate-pulse rounded-full bg-yellow-400",
                              }),
                              e.jsx("span", {
                                className: "text-foreground font-medium",
                                children: "Yellow",
                              }),
                              e.jsx("span", {
                                className: "text-muted-foreground",
                                children:
                                  "— still building, check back in a minute",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("span", {
                                className:
                                  "h-3 w-3 shrink-0 rounded-full bg-red-500",
                              }),
                              e.jsx("span", {
                                className: "text-foreground font-medium",
                                children: "Red",
                              }),
                              e.jsx("span", {
                                className: "text-muted-foreground",
                                children:
                                  "— first-run fail (expected). Make a small edit to your config file and save — that re-triggers the build.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "pt-1",
                children: [
                  e.jsx("p", {
                    className: "text-muted-foreground mb-1.5 text-[11px]",
                    children:
                      "Optional: add this badge to your README so you always see the status at a glance",
                  }),
                  e.jsxs("div", {
                    className:
                      "bg-secondary border-border text-muted-foreground flex items-center gap-2 overflow-x-auto rounded-lg border px-3 py-2 font-mono text-[10px]",
                    children: [
                      e.jsxs("span", {
                        children: [
                          "![Deploy](https://github.com/",
                          e.jsx("span", {
                            className: "text-primary",
                            children: "username",
                          }),
                          "/",
                          e.jsx("span", {
                            className: "text-primary",
                            children: "username",
                          }),
                          ".github.io/actions/workflows/pages/pages-build-deployment/badge.svg)",
                        ],
                      }),
                      e.jsx(u, {
                        text: "![Deploy](https://github.com/username/username.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx(_, {}),
      e.jsx("p", {
        className: "text-foreground mb-6 text-sm font-medium",
        children: "What to do next",
      }),
      e.jsx("div", {
        className: "mx-auto mb-10 grid max-w-xl gap-4 text-left sm:grid-cols-2",
        children: t.map((r) =>
          e.jsxs(
            "div",
            {
              className:
                "border-border hover:border-primary/30 hover:bg-secondary/30 rounded-xl border p-4 transition-all",
              children: [
                e.jsx("div", { className: "mb-2 text-2xl", children: r.emoji }),
                e.jsx("p", {
                  className: "text-foreground mb-1 text-xs font-semibold",
                  children: r.title,
                }),
                e.jsx("p", {
                  className:
                    "text-muted-foreground text-[11px] leading-relaxed",
                  children: r.desc,
                }),
              ],
            },
            r.title,
          ),
        ),
      }),
      e.jsxs("div", {
        className:
          "border-border mx-auto mb-10 w-full max-w-xl overflow-hidden rounded-2xl border text-left",
        children: [
          e.jsxs("div", {
            className: "bg-secondary border-border border-b px-4 py-3",
            children: [
              e.jsx("p", {
                className: "text-foreground text-sm font-medium",
                children: "Staying up to date",
              }),
              e.jsx("p", {
                className: "text-muted-foreground mt-0.5 text-[11px]",
                children:
                  "GitVitae releases new features regularly. Here's how to pull them into your portfolio.",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "divide-border divide-y",
            children: [
              e.jsxs("div", {
                className: "flex items-start gap-3 p-4",
                children: [
                  e.jsx("span", {
                    className:
                      "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#2ea44f]/20 bg-[#2ea44f]/10 text-[10px] font-bold text-[#2ea44f]",
                    children: "1",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsxs("p", {
                        className:
                          "text-foreground mb-0.5 text-xs font-semibold",
                        children: [
                          "Recommended — one-click from the Actions tab",
                          e.jsx("span", {
                            className:
                              "text-muted-foreground ml-1.5 text-[10px] font-normal",
                            children:
                              '(works for both "Use template" and Fork)',
                          }),
                        ],
                      }),
                      e.jsxs("p", {
                        className:
                          "text-muted-foreground text-[11px] leading-relaxed",
                        children: [
                          "Your repository ships with a",
                          " ",
                          e.jsx("strong", {
                            className: "text-foreground",
                            children: "Sync GitVitae Template",
                          }),
                          " ",
                          "workflow. Go to your repo →",
                          " ",
                          e.jsx("strong", {
                            className: "text-foreground",
                            children: "Actions",
                          }),
                          " →",
                          " ",
                          e.jsx("strong", {
                            className: "text-foreground",
                            children: "Sync GitVitae Template",
                          }),
                          " ",
                          "→ ",
                          e.jsx("strong", {
                            className: "text-foreground",
                            children: "Run workflow",
                          }),
                          " → type",
                          " ",
                          e.jsx("code", {
                            className:
                              "text-primary bg-secondary rounded px-1 font-mono text-[10px]",
                            children: "YES",
                          }),
                          " ",
                          "→ click the green button. Your",
                          " ",
                          e.jsx("code", {
                            className:
                              "text-primary bg-secondary rounded px-1 font-mono text-[10px]",
                            children: "portfolio.config.yaml",
                          }),
                          " ",
                          "is always preserved automatically.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-start gap-3 p-4",
                children: [
                  e.jsx("span", {
                    className:
                      "bg-primary/10 border-primary/20 text-primary mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold",
                    children: "2",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsxs("p", {
                        className:
                          "text-foreground mb-0.5 text-xs font-semibold",
                        children: [
                          'GitHub "Sync fork" button',
                          e.jsx("span", {
                            className:
                              "text-muted-foreground ml-1.5 text-[10px] font-normal",
                            children:
                              '(only if you used Fork, not "Use template")',
                          }),
                        ],
                      }),
                      e.jsxs("p", {
                        className:
                          "text-muted-foreground text-[11px] leading-relaxed",
                        children: [
                          "If you forked the repo, GitHub shows a",
                          " ",
                          e.jsx("strong", {
                            className: "text-foreground",
                            children: '"Sync fork"',
                          }),
                          " banner on your repo page when there are new template commits. Click it, then",
                          " ",
                          e.jsx("strong", {
                            className: "text-foreground",
                            children: '"Update branch"',
                          }),
                          `. Fastest option if you have it — but it won't appear for "Use this template" repos.`,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-start gap-3 p-4",
                children: [
                  e.jsx("span", {
                    className:
                      "bg-secondary border-border text-muted-foreground mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold",
                    children: "3",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsxs("p", {
                        className:
                          "text-foreground mb-0.5 text-xs font-semibold",
                        children: [
                          "Terminal",
                          e.jsx("span", {
                            className:
                              "text-muted-foreground ml-1.5 text-[10px] font-normal",
                            children: "(works for both)",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-muted-foreground mb-2 text-[11px] leading-relaxed",
                        children: "Clone your repo locally and run:",
                      }),
                      e.jsxs("div", {
                        className:
                          "bg-secondary border-border text-foreground flex items-center gap-2 rounded-lg border px-3 py-1.5 font-mono text-[11px]",
                        children: [
                          "pnpm upgrade-template",
                          e.jsx(u, { text: "pnpm upgrade-template" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-start gap-3 p-4",
                children: [
                  e.jsx("span", {
                    className:
                      "bg-secondary border-border text-muted-foreground mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold",
                    children: "★",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className:
                          "text-foreground mb-0.5 text-xs font-semibold",
                        children: "Know when to update",
                      }),
                      e.jsxs("p", {
                        className:
                          "text-muted-foreground text-[11px] leading-relaxed",
                        children: [
                          "On the",
                          " ",
                          e.jsx("a", {
                            href: "https://github.com/git-vitae/git-vitae.github.io",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "text-primary underline-offset-2 hover:underline",
                            children: "GitVitae repository",
                          }),
                          ", click",
                          " ",
                          e.jsx("strong", {
                            className: "text-foreground",
                            children: "Watch → Custom → Releases",
                          }),
                          ". GitHub emails you when a new version ships.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className:
          "flex flex-col items-center justify-center gap-3 sm:flex-row",
        children: [
          e.jsx("a", {
            href: "#/demo",
            className:
              "border-border text-foreground hover:bg-secondary inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
            children: "See the live demo again",
          }),
          e.jsxs("a", {
            href: "https://github.com/git-vitae/git-vitae.github.io",
            target: "_blank",
            rel: "noopener noreferrer",
            className:
              "bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90",
            children: ["View on GitHub", e.jsx(p, { size: 13 })],
          }),
        ],
      }),
    ],
  });
}
function J({ current: t, total: r }) {
  const s = [
    "Welcome",
    "GitHub account",
    "Copy template",
    "Enable Pages",
    "Your details",
    "Done!",
  ];
  return e.jsxs("div", {
    className: "mb-10",
    children: [
      e.jsx("div", {
        className: "mb-3 flex items-center gap-2",
        children: Array.from({ length: r }).map((a, n) =>
          e.jsx(
            "div",
            {
              className: "relative flex-1",
              children: e.jsx("div", {
                className: `h-1.5 rounded-full transition-all duration-500 ${n < t ? "bg-primary" : n === t ? "bg-primary/50" : "bg-border"}`,
              }),
            },
            n,
          ),
        ),
      }),
      e.jsx("div", {
        className:
          "mb-3hidden grid grid-cols-6 gap-2 text-center text-xs font-medium text-gray-500 md:grid",
        children: s.map((a, n) =>
          e.jsxs(
            "span",
            {
              className: `text-[12px] font-medium transition-colors ${n === t ? "text-primary" : n < t ? "text-muted-foreground" : "text-border"} hidden sm:block`,
              children: [
                n < t
                  ? e.jsx(C, { size: 12, className: "mr-0.5 inline" })
                  : null,
                a,
              ],
            },
            a,
          ),
        ),
      }),
    ],
  });
}
const f = 6;
function Z() {
  const [t, r] = c.useState(0),
    s = () => r((d) => Math.min(d + 1, f - 1)),
    a = () => r((d) => Math.max(d - 1, 0)),
    n = [
      e.jsx(I, { onNext: s }),
      e.jsx(F, { onNext: s }),
      e.jsx(O, { onNext: s }),
      e.jsx(B, { onNext: s }),
      e.jsx(V, { onNext: s }),
      e.jsx($, {}),
    ];
  return e.jsxs("div", {
    className: "bg-background text-foreground min-h-screen",
    children: [
      e.jsx("header", {
        className:
          "border-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur",
        children: e.jsxs("div", {
          className:
            "mx-auto flex h-14 max-w-6xl items-center justify-between px-6",
          children: [
            e.jsxs("a", {
              href: "#/",
              className:
                "text-3xl font-semibold tracking-tight transition-opacity hover:opacity-80",
              children: [
                "Git",
                e.jsx("span", { className: "text-primary", children: "Vitae" }),
              ],
            }),
            e.jsx("div", {
              className: "flex items-center gap-3",
              children: e.jsx("a", {
                href: "#/demo",
                className:
                  "text-muted-foreground hover:text-foreground text-xs transition-colors",
                children: "See demo",
              }),
            }),
          ],
        }),
      }),
      e.jsxs("main", {
        className: "mx-auto max-w-4xl px-6 py-12",
        children: [
          e.jsx(J, { current: t, total: f }),
          e.jsx(v, {
            mode: "wait",
            children: e.jsx(
              g.div,
              {
                initial: { opacity: 0, x: 24 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -24 },
                transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
                children: n[t],
              },
              t,
            ),
          }),
          t > 0 &&
            t < f - 1 &&
            e.jsx("div", {
              className: "mt-8 flex items-center",
              children: e.jsxs("button", {
                onClick: a,
                className:
                  "text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-xs transition-colors",
                children: [e.jsx(k, { size: 13 }), "Back"],
              }),
            }),
        ],
      }),
    ],
  });
}
export { Z as SetupPage };
