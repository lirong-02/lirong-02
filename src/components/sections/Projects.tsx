/**
 * 作品集分区 —— 按类别展示视频 / 摄影 / 海报作品，
 * 数据来自 portfolio.config.yaml 的 projects 字段。
 *
 * 布局策略：
 * - 视频作品按横竖屏分组排布：竖屏走窄卡片网格（手机版式），横屏走宽卡片网格；
 * - 摄影作品使用瀑布流（CSS 多列），横竖图按原始比例自然混排、不裁剪；
 * - 海报 / 其他类别保持等宽网格。
 */
import { motion } from "framer-motion";
import { ExternalLink, PlayCircle } from "lucide-react";
import { config } from "@/portfolio.config";
import type { Project } from "@/portfolio.config";
import { fadeUpVariants } from "@/lib/animation";

const fadeUp = fadeUpVariants(40, 0.7, 0.1);

// ── 单个作品卡片 ───────────────────────────────────────────────────────────────

function WorkCard({
  work,
  index,
  masonry = false,
}: {
  work: Project;
  index: number;
  masonry?: boolean;
}) {
  const mediaType = work.mediaType ?? "image";

  return (
    <motion.figure
      variants={fadeUp}
      custom={index + 1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={`border-border bg-card card-hover flex flex-col overflow-hidden rounded-2xl border ${
        masonry ? "mb-4 break-inside-avoid" : ""
      }`}
      data-testid={`work-${index}`}
    >
      {/* 媒体区 —— 按原始比例呈现，宽度由所在网格控制 */}
      {mediaType === "video" && work.mediaUrl && (
        <video
          controls
          preload="none"
          playsInline
          poster={work.posterUrl}
          src={work.mediaUrl}
          className="border-border w-full rounded-t-2xl border-b bg-black"
        />
      )}

      {mediaType === "image" && work.mediaUrl && (
        <img
          loading="lazy"
          decoding="async"
          src={work.mediaUrl}
          alt={work.name}
          className="border-border w-full rounded-t-2xl border-b"
        />
      )}

      {mediaType === "link" && (
        <a
          href={work.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondary/60 hover:bg-primary/5 flex h-36 flex-col items-center justify-center gap-2 transition-colors"
        >
          <PlayCircle size={34} className="text-primary" />
          <span className="text-muted-foreground text-xs">
            点击查看完整清单
          </span>
        </a>
      )}

      {/* 文案区 */}
      <figcaption className="flex flex-1 flex-col gap-2 p-4">
        <h4 className="text-foreground text-sm leading-snug font-semibold">
          {work.name}
        </h4>
        {work.description && (
          <p className="text-muted-foreground text-xs leading-relaxed">
            {work.description}
          </p>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-1.5">
          {work.tags?.map((t) => (
            <span
              key={t}
              className="bg-primary/10 text-primary border-primary/20 rounded-md border px-2 py-0.5 text-[10px] font-medium"
            >
              {t}
            </span>
          ))}
          {mediaType === "link" && work.liveUrl && (
            <a
              href={work.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary ml-auto inline-flex items-center gap-1 text-[11px] hover:underline"
            >
              打开链接 <ExternalLink size={10} />
            </a>
          )}
        </div>
      </figcaption>
    </motion.figure>
  );
}

// ── 分区标题 ──────────────────────────────────────────────────────────────────

function CategoryHeader({ cat, count }: { cat: string; count: number }) {
  return (
    <motion.h3
      variants={fadeUp}
      custom={2}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="border-border mb-6 flex items-center gap-3 border-l-2 pl-3 text-lg font-medium tracking-wide"
    >
      {cat}
      <span className="text-muted-foreground text-xs font-normal">
        {count} 件
      </span>
    </motion.h3>
  );
}

// ── 作品集分区 ────────────────────────────────────────────────────────────────

// 摄影作品为瀑布流；其余类别为等宽网格
const MASONRY_CATEGORIES = new Set(["摄影作品", "课程作品"]);

const GRID_BY_CATEGORY: Record<string, string> = {
  摄影作品: "columns-2 gap-4 lg:columns-3",
  海报设计: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
};

/** 视频作品：竖屏窄卡片 + 横屏宽卡片，按画面方向自然分组 */
function VideoWorks({ items }: { items: Project[] }) {
  const portrait = items.filter((w) => w.orientation !== "landscape");
  const landscape = items.filter((w) => w.orientation === "landscape");

  return (
    <>
      {portrait.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {portrait.map((w, i) => (
            <WorkCard key={`${w.name}-${i}`} work={w} index={i} />
          ))}
        </div>
      )}
      {landscape.length > 0 && (
        <div
          className={`grid gap-6 sm:grid-cols-2 ${portrait.length > 0 ? "mt-6" : ""}`}
        >
          {landscape.map((w, i) => (
            <WorkCard
              key={`${w.name}-${i}`}
              work={w}
              index={portrait.length + i}
            />
          ))}
        </div>
      )}
    </>
  );
}

export function Projects() {
  const works = config.projects ?? [];
  if (!works.length) return null;

  // 按类别分组，保持配置中的出现顺序
  const categories: string[] = [];
  for (const w of works) {
    const cat = w.category ?? "其他作品";
    if (!categories.includes(cat)) categories.push(cat);
  }

  return (
    <section id="projects" className="bg-secondary/20 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-80px",
          }}
          className="text-primary mb-4 font-mono text-xs font-medium tracking-widest uppercase"
        >
          Portfolio
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-80px",
          }}
          className="section-heading text-foreground mb-14 text-4xl md:text-5xl"
        >
          作品集
        </motion.h2>

        {categories.map((cat) => {
          const items = works.filter((w) => (w.category ?? "其他作品") === cat);

          return (
            <div key={cat} className="mb-14 last:mb-0">
              <CategoryHeader cat={cat} count={items.length} />

              {cat === "视频作品" ? (
                <VideoWorks items={items} />
              ) : (
                <div
                  className={
                    GRID_BY_CATEGORY[cat] ??
                    "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                  }
                >
                  {items.map((w, i) => (
                    <WorkCard
                      key={`${w.name}-${i}`}
                      work={w}
                      index={i}
                      masonry={MASONRY_CATEGORIES.has(cat)}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
