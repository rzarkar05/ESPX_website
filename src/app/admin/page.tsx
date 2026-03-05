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
  "Energy Storage",
  "Blockchain",
  "AI & Technology",
  "Policy",
  "Renewables",
];

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [form, setForm] = useState({
    title: "",
    summary: "",
    source: "",
    url: "",
    date: "",
    category: "Energy Storage",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthToken(password);
    setAuthenticated(true);
    loadArticles(password);
  };

  const loadArticles = (token: string) => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch(() => {});
  };

  useEffect(() => {
    if (authenticated) loadArticles(authToken);
  }, [authenticated, authToken]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const res = await fetch("/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess("Article added successfully!");
      setForm({
        title: "",
        summary: "",
        source: "",
        url: "",
        date: "",
        category: "Energy Storage",
      });
      loadArticles(authToken);
    } else {
      const data = await res.json();
      setError(data.error || "Failed to add article");
      if (res.status === 401) {
        setAuthenticated(false);
        setAuthToken("");
      }
    }
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/articles?id=${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${authToken}` },
    });

    if (res.ok) {
      loadArticles(authToken);
    }
  };

  if (!authenticated) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          onSubmit={handleLogin}
          className="glass-card rounded-2xl p-8 w-full max-w-sm"
        >
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            Admin Login
          </h1>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-espx-navy-light border border-espx-cyan/10 text-white placeholder-gray-500 focus:border-espx-cyan/40 focus:outline-none mb-4"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full py-3 bg-espx-teal text-white rounded-lg hover:bg-espx-teal-light transition-all font-medium"
          >
            Login
          </button>
        </motion.form>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-bold text-white">
            Article <span className="text-espx-cyan">Manager</span>
          </h1>
          <button
            onClick={() => {
              setAuthenticated(false);
              setAuthToken("");
            }}
            className="text-sm text-gray-400 hover:text-espx-cyan transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Add Article Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-8 mb-12"
        >
          <h2 className="text-xl font-semibold text-white mb-6">
            Add New Article
          </h2>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
              {success}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              required
              placeholder="Article title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="px-4 py-3 rounded-lg bg-espx-navy-light border border-espx-cyan/10 text-white placeholder-gray-500 focus:border-espx-cyan/40 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Source (e.g. Bloomberg)"
              value={form.source}
              onChange={(e) => setForm({ ...form, source: e.target.value })}
              className="px-4 py-3 rounded-lg bg-espx-navy-light border border-espx-cyan/10 text-white placeholder-gray-500 focus:border-espx-cyan/40 focus:outline-none"
            />
            <input
              type="url"
              placeholder="URL (optional)"
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              className="px-4 py-3 rounded-lg bg-espx-navy-light border border-espx-cyan/10 text-white placeholder-gray-500 focus:border-espx-cyan/40 focus:outline-none"
            />
            <div className="flex gap-4">
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="flex-1 px-4 py-3 rounded-lg bg-espx-navy-light border border-espx-cyan/10 text-white focus:border-espx-cyan/40 focus:outline-none"
              />
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="flex-1 px-4 py-3 rounded-lg bg-espx-navy-light border border-espx-cyan/10 text-white focus:border-espx-cyan/40 focus:outline-none"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <textarea
            required
            rows={3}
            placeholder="Article summary"
            value={form.summary}
            onChange={(e) => setForm({ ...form, summary: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-espx-navy-light border border-espx-cyan/10 text-white placeholder-gray-500 focus:border-espx-cyan/40 focus:outline-none resize-none mb-4"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-espx-teal text-white rounded-lg hover:bg-espx-teal-light transition-all font-medium"
          >
            Add Article
          </button>
        </motion.form>

        {/* Articles List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white mb-4">
            All Articles ({articles.length})
          </h2>
          {articles.map((article) => (
            <div
              key={article.id}
              className="glass-card rounded-xl p-5 flex items-start justify-between gap-4"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-espx-cyan">{article.category}</span>
                  {article.manual && (
                    <span className="text-xs text-espx-teal-light">Manual</span>
                  )}
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-sm font-medium text-white truncate">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{article.source}</p>
              </div>
              <button
                onClick={() => handleDelete(article.id)}
                className="text-red-400/60 hover:text-red-400 transition-colors flex-shrink-0"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
