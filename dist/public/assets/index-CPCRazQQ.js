import { j as e, A as C, m as z } from "./vendor-motion-DryeDRHM.js";
import { r as d } from "./vendor-router-CtvkFGlM.js";
import {
  a as p,
  c as s,
  h as S,
  S as P,
  F as T,
  b as B,
} from "./index-DIJ8zRxx.js";
import {
  o as L,
  p as A,
  T as E,
  S as _,
  q as F,
  M,
  f as U,
  G as $,
  E as h,
} from "./vendor-icons-CqqOs0Bq.js";
import "./vendor-react-D4U8S3aY.js";
import "./vendor-lenis-CpJfINCX.js";
const i = (r) => s.sections.find((t) => t.id === r)?.show !== !1;
function u({ compact: r = !1 }) {
  return e.jsxs("div", {
    className: `${r ? "mb-4" : "mb-8"}`,
    children: [
      e.jsxs("div", {
        className:
          "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("h1", {
                className:
                  "text-foreground font-serif text-3xl leading-none font-light tracking-tight",
                children: s.name,
              }),
              e.jsx("p", {
                className:
                  "text-primary mt-1 text-sm font-medium tracking-[0.18em] uppercase",
                children: s.title,
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 text-xs",
            children: [
              s.email &&
                e.jsxs("a", {
                  href: `mailto:${s.email}`,
                  className:
                    "hover:text-primary flex items-center gap-1 transition-colors",
                  children: [e.jsx(M, { size: 11 }), " ", s.email],
                }),
              s.location &&
                e.jsxs("span", {
                  className: "flex items-center gap-1",
                  children: [e.jsx(U, { size: 11 }), " ", s.location],
                }),
              s.social.github &&
                e.jsxs("a", {
                  href: s.social.github,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "hover:text-primary flex items-center gap-1 transition-colors",
                  children: [
                    e.jsx(T, { size: 11 }),
                    " ",
                    s.social.github.replace("https://github.com/", ""),
                  ],
                }),
              s.social.linkedin &&
                e.jsxs("a", {
                  href: s.social.linkedin,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "hover:text-primary flex items-center gap-1 transition-colors",
                  children: [
                    e.jsx(B, { size: 11 }),
                    " ",
                    s.social.linkedin.replace("https://linkedin.com/in/", ""),
                  ],
                }),
              s.social.website &&
                e.jsxs("a", {
                  href: s.social.website,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "hover:text-primary flex items-center gap-1 transition-colors",
                  children: [
                    e.jsx($, { size: 11 }),
                    " ",
                    s.social.website.replace(/https?:\/\//, ""),
                  ],
                }),
            ],
          }),
        ],
      }),
      e.jsx("div", {
        className:
          "from-primary via-primary/30 mt-4 h-px bg-gradient-to-r to-transparent",
      }),
    ],
  });
}
function n({ children: r }) {
  return e.jsxs("p", {
    className:
      "text-primary mb-2.5 flex items-center gap-2 font-mono text-[10px] font-semibold tracking-[0.2em] uppercase",
    children: [r, e.jsx("span", { className: "bg-border h-px flex-1" })],
  });
}
function f() {
  return !i("experience") || !s.experience?.length
    ? null
    : e.jsxs("div", {
        className: "mb-6",
        children: [
          e.jsx(n, { children: "实习与校园经历" }),
          e.jsx("div", {
            className: "space-y-4",
            children: s.experience.map((r, t) =>
              e.jsxs(
                "div",
                {
                  className: "break-inside-avoid",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex flex-wrap items-baseline justify-between gap-2",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("span", {
                              className:
                                "text-foreground text-sm font-semibold",
                              children: r.role,
                            }),
                            e.jsxs("span", {
                              className: "text-muted-foreground text-xs",
                              children: [" ", "· ", r.company],
                            }),
                          ],
                        }),
                        e.jsx("span", {
                          className:
                            "text-muted-foreground shrink-0 font-mono text-[10px] whitespace-nowrap",
                          children: r.period,
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-muted-foreground mt-1 text-xs leading-relaxed",
                      children: r.description,
                    }),
                    (r.highlights ?? []).length > 0 &&
                      e.jsx("div", {
                        className: "mt-1.5 flex flex-wrap gap-1.5",
                        children: (r.highlights ?? []).map((a) =>
                          e.jsx(
                            "span",
                            {
                              className:
                                "bg-primary/8 text-primary border-primary/15 rounded border px-1.5 py-0.5 text-[10px]",
                              children: a,
                            },
                            a,
                          ),
                        ),
                      }),
                  ],
                },
                t,
              ),
            ),
          }),
        ],
      });
}
function g({ condensed: r = !1 }) {
  if (!i("projects") || !s.projects?.length) return null;
  const t = r ? s.projects.filter((a) => a.featured) : s.projects;
  return t.length
    ? e.jsxs("div", {
        className: "mb-6",
        children: [
          e.jsx(n, { children: "项目作品" }),
          e.jsx("div", {
            className: "space-y-3",
            children: t.map((a, c) =>
              e.jsxs(
                "div",
                {
                  className: "break-inside-avoid",
                  children: [
                    e.jsxs("div", {
                      className: "flex flex-wrap items-center gap-2",
                      children: [
                        e.jsx("span", {
                          className: "text-foreground text-sm font-semibold",
                          children: a.name,
                        }),
                        (a.liveUrl || a.repoUrl) &&
                          e.jsx("a", {
                            href: a.liveUrl || a.repoUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-primary hover:underline",
                            children: e.jsx(h, { size: 10 }),
                          }),
                        e.jsx("div", {
                          className: "flex flex-wrap gap-1",
                          children: a.tags
                            ?.slice(0, 4)
                            .map((l) =>
                              e.jsx(
                                "span",
                                {
                                  className:
                                    "bg-secondary text-muted-foreground border-border rounded border px-1.5 py-0.5 text-[10px]",
                                  children: l,
                                },
                                l,
                              ),
                            ),
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-muted-foreground mt-0.5 text-xs leading-relaxed",
                      children: a.description,
                    }),
                  ],
                },
                c,
              ),
            ),
          }),
        ],
      })
    : null;
}
function j() {
  return !i("skills") || !s.skills?.length
    ? null
    : e.jsxs("div", {
        className: "mb-5",
        children: [
          e.jsx(n, { children: "专业技能" }),
          e.jsx("div", {
            className: "space-y-1.5",
            children: s.skills.map((r) =>
              e.jsxs(
                "div",
                {
                  className: "flex gap-1.5 text-xs leading-relaxed",
                  children: [
                    e.jsx("span", {
                      className:
                        "text-foreground min-w-[72px] shrink-0 font-medium whitespace-nowrap",
                      children: r.category,
                    }),
                    e.jsx("span", {
                      className: "text-muted-foreground",
                      children: r.items.join(", "),
                    }),
                  ],
                },
                r.category,
              ),
            ),
          }),
        ],
      });
}
function b() {
  return !i("education") || !s.education?.length
    ? null
    : e.jsxs("div", {
        className: "mb-5",
        children: [
          e.jsx(n, { children: "教育背景" }),
          e.jsx("div", {
            className: "space-y-2",
            children: s.education.map((r, t) =>
              e.jsxs(
                "div",
                {
                  className: "break-inside-avoid",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex flex-wrap items-baseline justify-between gap-2",
                      children: [
                        e.jsx("span", {
                          className: "text-foreground text-xs font-semibold",
                          children: r.degree,
                        }),
                        e.jsx("span", {
                          className:
                            "text-muted-foreground font-mono text-[10px]",
                          children: r.period,
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground text-[11px]",
                      children: r.institution,
                    }),
                  ],
                },
                t,
              ),
            ),
          }),
        ],
      });
}
function N() {
  return !i("certifications") || !s.certifications?.length
    ? null
    : e.jsxs("div", {
        className: "mb-5",
        children: [
          e.jsx(n, { children: "荣誉奖项" }),
          e.jsx("div", {
            className: "space-y-1.5",
            children: s.certifications.map((r, t) =>
              e.jsxs(
                "div",
                {
                  className: "flex break-inside-avoid items-start gap-2",
                  children: [
                    e.jsxs("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        e.jsx("span", {
                          className:
                            "text-foreground block text-xs leading-tight font-medium",
                          children: r.title,
                        }),
                        e.jsx("span", {
                          className: "text-muted-foreground text-[10px]",
                          children: r.issuer,
                        }),
                      ],
                    }),
                    e.jsx("span", {
                      className:
                        "text-muted-foreground shrink-0 font-mono text-[10px] whitespace-nowrap",
                      children: r.date,
                    }),
                  ],
                },
                t,
              ),
            ),
          }),
        ],
      });
}
function v() {
  return s.languages?.length
    ? e.jsxs("div", {
        className: "mb-5",
        children: [
          e.jsx(n, { children: "语言" }),
          e.jsx("div", {
            className: "space-y-1",
            children: s.languages.map((r) =>
              e.jsxs(
                "div",
                {
                  className: "flex items-center justify-between text-xs",
                  children: [
                    e.jsx("span", {
                      className: "text-foreground font-medium",
                      children: r.name,
                    }),
                    e.jsx("span", {
                      className: "text-muted-foreground",
                      children: r.level,
                    }),
                  ],
                },
                r.name,
              ),
            ),
          }),
        ],
      })
    : null;
}
function y() {
  const r = s.publications ?? [];
  return !i("publications") || !r.length
    ? null
    : e.jsxs("div", {
        className: "mb-6",
        children: [
          e.jsx(n, { children: "代表报道" }),
          e.jsx("div", {
            className: "space-y-3",
            children: r.map((t, a) =>
              e.jsx(
                "div",
                {
                  className: "break-inside-avoid",
                  children: e.jsxs("div", {
                    className: "flex items-start justify-between gap-2",
                    children: [
                      e.jsxs("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-foreground text-xs leading-snug font-semibold",
                            children: t.url
                              ? e.jsx("a", {
                                  href: t.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "hover:text-primary",
                                  children: t.title,
                                })
                              : t.title,
                          }),
                          e.jsxs("p", {
                            className:
                              "text-muted-foreground mt-0.5 text-[10px] leading-relaxed",
                            children: [
                              t.authors &&
                                e.jsxs("span", {
                                  children: [t.authors, " · "],
                                }),
                              e.jsx("span", {
                                className: "italic",
                                children: t.venue,
                              }),
                              t.year &&
                                e.jsxs("span", { children: [", ", t.year] }),
                            ],
                          }),
                        ],
                      }),
                      t.url &&
                        e.jsx("a", {
                          href: t.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "text-primary mt-0.5 flex-shrink-0 hover:opacity-70",
                          children: e.jsx(h, { size: 10 }),
                        }),
                    ],
                  }),
                },
                a,
              ),
            ),
          }),
        ],
      });
}
function k() {
  return !i("about") || !s.about
    ? null
    : e.jsxs("div", {
        className: "mb-6",
        children: [
          e.jsx(n, { children: "个人简介" }),
          e.jsx("p", {
            className: "text-muted-foreground text-xs leading-relaxed",
            children: s.about,
          }),
        ],
      });
}
function G() {
  return e.jsxs("div", {
    children: [
      e.jsx(u, {}),
      e.jsxs("div", {
        className: "grid grid-cols-[200px_1fr] gap-8",
        children: [
          e.jsxs("aside", {
            className: "border-border space-y-0 border-r pr-6",
            children: [e.jsx(j, {}), e.jsx(v, {}), e.jsx(b, {}), e.jsx(N, {})],
          }),
          e.jsxs("main", {
            className: "min-w-0 space-y-0",
            children: [
              i("about") && e.jsx(k, {}),
              e.jsx(f, {}),
              e.jsx(g, {}),
              e.jsx(y, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
function R() {
  return e.jsxs("div", {
    children: [
      e.jsx(u, { compact: !0 }),
      i("about") && e.jsx(k, {}),
      e.jsx(f, {}),
      e.jsx(g, { condensed: !0 }),
      e.jsx(y, {}),
      e.jsxs("div", {
        className: "grid grid-cols-2 gap-6",
        children: [
          e.jsxs("div", { children: [e.jsx(j, {}), e.jsx(v, {})] }),
          e.jsxs("div", { children: [e.jsx(b, {}), e.jsx(N, {})] }),
        ],
      }),
    ],
  });
}
function K({ theme: r, onToggleTheme: t }) {
  const [a, c] = d.useState(
      () => localStorage.getItem("resume-layout") ?? "two-column",
    ),
    [l, x] = d.useState(!1),
    m = (o) => {
      c(o), localStorage.setItem("resume-layout", o);
    };
  return (
    d.useEffect(() => {
      const o =
        a === "two-column" ? s.resumeTheme.twoColumn : s.resumeTheme.classic;
      return (
        p(o, r === "dark", s.customColors),
        () => {
          const w = s.primaryColor ? S(s.primaryColor) : s.customColors;
          p(s.primaryColor ? "custom" : s.colorPreset, r === "dark", w);
        }
      );
    }, [a, r]),
    e.jsxs("div", {
      className: "bg-muted/40 min-h-screen print:min-h-0 print:bg-white",
      children: [
        e.jsxs("div", {
          className:
            "bg-background/90 border-border sticky top-0 z-50 flex items-center justify-between gap-4 border-b px-6 py-3 backdrop-blur print:hidden",
          children: [
            e.jsxs("a", {
              href: "#/",
              className:
                "text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-xs font-medium transition-colors",
              children: [e.jsx(L, { size: 13 }), "返回主页"],
            }),
            e.jsxs("div", {
              className:
                "bg-secondary border-border flex items-center gap-1 rounded-lg border p-1",
              children: [
                e.jsxs("button", {
                  onClick: () => m("two-column"),
                  "aria-label": "Two-column layout",
                  "aria-pressed": a === "two-column",
                  className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${a === "two-column" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                  children: [
                    e.jsx(A, { size: 13 }),
                    e.jsx("span", {
                      className: "hidden sm:inline",
                      children: "双栏布局",
                    }),
                  ],
                }),
                e.jsxs("button", {
                  onClick: () => m("classic"),
                  "aria-label": "Classic layout",
                  "aria-pressed": a === "classic",
                  className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${a === "classic" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                  children: [
                    e.jsx(E, { size: 13 }),
                    e.jsx("span", {
                      className: "hidden sm:inline",
                      children: "经典单栏",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsxs("button", {
                  onClick: () => x(!0),
                  "aria-label": "Share resume",
                  className:
                    "border-border text-muted-foreground hover:text-foreground hover:border-primary/40 flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-all",
                  children: [
                    e.jsx(_, { size: 13 }),
                    e.jsx("span", {
                      className: "hidden sm:inline",
                      children: "分享",
                    }),
                  ],
                }),
                e.jsxs("button", {
                  onClick: () => window.print(),
                  className:
                    "bg-primary text-primary-foreground flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-opacity hover:opacity-90",
                  children: [e.jsx(F, { size: 13 }), "保存 PDF"],
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex justify-center px-4 py-8 print:px-0 print:py-0",
          children: e.jsx(C, {
            mode: "wait",
            children: e.jsx(
              z.div,
              {
                initial: { opacity: 0, y: 6 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -6 },
                transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
                className:
                  "bg-background min-h-[1123px] w-full max-w-[794px] rounded-xl p-10 shadow-xl print:min-h-0 print:rounded-none print:bg-white print:p-8 print:shadow-none",
                children: a === "two-column" ? e.jsx(G, {}) : e.jsx(R, {}),
              },
              a,
            ),
          }),
        }),
        e.jsx("style", {
          children: `
        @media print {
          @page { margin: 1.4cm 1.6cm; size: A4 portrait; }
          body { background: white !important; }
          /* Neutralise framer-motion transforms and min-height overflows */
          [data-framer-component-type],
          [style*="transform"],
          [style*="opacity"] {
            transform: none !important;
            opacity: 1 !important;
          }
          /* Belt-and-suspenders: remove any leftover min-height on the paper */
          .resume-paper { min-height: 0 !important; }
          /* Prevent individual entries from splitting mid-page */
          .break-inside-avoid { break-inside: avoid; page-break-inside: avoid; }
          /* Prevent orphan/widow lines at page breaks */
          p, li { orphans: 2; widows: 2; }
          /* Keep section labels with their first entry */
          h1, h2, h3, h4 { break-after: avoid; page-break-after: avoid; }
        }
      `,
        }),
        e.jsx(P, { open: l, onClose: () => x(!1) }),
      ],
    })
  );
}
export { K as ResumePage };
