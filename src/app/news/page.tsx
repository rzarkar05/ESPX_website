"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Article {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  date: string;
  category: string;
  manual: boolean;
}

const categories = [
  "All",
  "Energy Storage",
  "Blockchain",
  "AI & Technology",
  "Policy",
  "Renewables",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch(() => {});
  }, []);

  const filtered =
    filter === "All"
      ? articles
      : articles.filter((a) => a.category === filter);

  return (
    <div className="pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-espx-teal-dark/20 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            News & <span className="text-espx-cyan">Articles</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Latest insights from the energy storage industry
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-espx-cyan/20 text-espx-cyan border border-espx-cyan/40"
                    : "bg-espx-navy-light text-gray-400 border border-espx-cyan/10 hover:border-espx-cyan/30 hover:text-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <motion.a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 flex flex-col group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-espx-cyan/10 text-espx-cyan border border-espx-cyan/20">
                    {article.category}
                  </span>
                  {article.manual && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-espx-teal/20 text-espx-teal-light border border-espx-teal/30">
                      ESPX
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-espx-cyan transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4 flex-1 line-clamp-3">
                  {article.summary}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-espx-cyan/10">
                  <span>{article.source}</span>
                  <span>
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
