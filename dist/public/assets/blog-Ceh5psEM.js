const h=`---
title: "The One-File Philosophy"
date: "2025-02-01"
tags: [design, simplicity, tools]
excerpt: "The best tools ask you for one thing and do the rest. Here's why I care about that more than ever."
---

# The One-File Philosophy

The best tools I've ever used share one characteristic: they ask you for exactly one thing.

A spreadsheet asks you for data. A compiler asks you for code. A camera asks you to point and press.

They don't ask you to understand how they work.

## The cognitive cost of configuration

Most developer tools are built by developers, for developers. That means they expose every option, every escape hatch, every "advanced setting" — because the people who built them use every single one.

For everyone else, this is a wall.

I've watched talented people abandon good tools because the setup process required too many decisions before they could do anything useful. The tool won before they even started.

## What one file changes

When everything lives in one place, a few things happen:

- **The barrier to starting disappears.** You open one file, fill in the blanks, and you're done.
- **The barrier to changing things disappears.** Don't like your colour scheme? One line. Wrong job title? Ten seconds.
- **The mental model stays intact.** There's no "where did I put that setting?" moment. It's in the file. The file is always in the same place.

## The trade-off is real

You lose flexibility. Some things that would be configurable in a more complex system aren't options here.

That's a trade I'll make every time. Flexibility is only valuable when it gets used. Unused options are just noise — and noise has a cost.

## One file is a design decision

Deciding that your tool will have one entry point isn't laziness. It's a strong opinion about where the user's attention should go. The constraint forces you to make decisions that the user shouldn't have to.

That's the job. Do the hard thinking so the user doesn't have to.

---

*Everything in this portfolio lives in one file: \`portfolio.config.yaml\`. That was an intentional choice. I hope it shows.*
`,d=`---
title: "Why I Started Building in Public"
date: "2025-03-10"
tags: [career, mindset]
excerpt: "Sharing your work before it's perfect is terrifying. It's also the best career move I've made."
---

# Why I Started Building in Public

About a year ago I started sharing half-finished projects on the internet. Not polished case studies — rough screenshots, half-baked ideas, questions I didn't know the answer to.

It felt wrong at first. Everything in my background said: *finish it, polish it, then share it*.

Here's what happened instead.

## The unexpected upside of being half-done in public

Within a week of sharing a rough prototype, three people sent me the exact feedback I would have discovered six months later on my own. One of them became a collaborator on the project.

The "not ready" version did more for me than any polished post ever had.

## What I actually do

The format is simple:
1. Start something
2. Share it when it's 40% done, not 100%
3. Ask a specific question: *"Does this solve your problem?"* not *"What do you think?"*
4. Build the next 40% in response to what I hear

It's uncomfortable every time. That discomfort is useful information — it means the work is real enough to be embarrassed about.

## The biggest myth about building in public

People think sharing unfinished work makes them look incompetent. In my experience it does the opposite. It shows you can think out loud, take feedback, and iterate quickly. Those are rare skills.

Nobody remembers the messy middle. They remember whether you shipped.

---

If you're sitting on something half-built, waiting until it's ready — it's ready enough. Put it out there.
`,c=`---
title: "Hello, World"
date: "2025-04-20"
tags: [life, writing]
excerpt: "Every developer eventually writes a first post. This is mine — a bit about why I finally built this thing."
---

# Hello, World

Every developer eventually writes a "hello world" post. This is mine.

For years I had a perfectly good excuse for not having a personal site: *I was too busy building other things*. The irony of a software engineer without a portfolio was not lost on me, but it was easy to ignore.

Then a friend asked for my website link in front of a room full of people.

I sent them my LinkedIn.

That was the moment I decided to fix it.

## Why now?

Honestly? It got easy enough that I had no excuse left. A single YAML file, a GitHub account, and about ten minutes. I filled in my name, my job title, a few projects I'm proud of — and there it was.

It doesn't feel like a big deal, but having a place that's *mine* — not a rented box on someone else's platform — matters more than I expected.

## What you'll find here

I'll write here occasionally. Not on a schedule, not to chase an algorithm. Just when I have something worth saying.

Expect posts about:
- Things I'm building and why
- Mistakes I made and what I learned
- Opinions on software that nobody asked for

Thanks for reading. More soon.
`,u=Object.assign({"/blog/2025/02/the-one-file-philosophy.md":h,"/blog/2025/03/building-in-public.md":d,"/blog/2025/04/hello-world.md":c});function p(e){const n=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!n)return{meta:{},body:e};const t={};for(const o of n[1].split(`
`)){const i=o.indexOf(":");if(i<1)continue;const a=o.slice(0,i).trim(),s=o.slice(i+1).trim();s.startsWith("[")&&s.endsWith("]")?t[a]=s.slice(1,-1).split(",").map(l=>l.trim().replace(/^["']|["']$/g,"")).filter(Boolean):t[a]=s.replace(/^["']|["']$/g,"")}return{meta:t,body:n[2]}}function g(e){return Math.max(1,Math.ceil(e.split(/\s+/).length/200))}function m(e){return e.replace(/^.*\//,"").replace(/\.md$/,"")}const r=Object.entries(u).map(([e,n])=>{const{meta:t,body:o}=p(n),i=m(e),a=Array.isArray(t.tags)?t.tags:typeof t.tags=="string"?[t.tags]:[],s=t.excerpt??o.replace(/^#+\s.*/gm,"").replace(/[*`_[\]]/g,"").trim().slice(0,180)+"…";return{slug:i,title:t.title??i,date:t.date??"",tags:a,excerpt:s,cover:t.cover,readingTime:g(o),content:o}}).sort((e,n)=>n.date.localeCompare(e.date));function y(e){return r.find(n=>n.slug===e)}const f=[...new Set(r.flatMap(e=>e.tags))].sort();export{r as a,f as b,y as g};
