import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ARTICLES_PATH = path.join(process.cwd(), "src/data/articles.json");

function getArticles() {
  const data = fs.readFileSync(ARTICLES_PATH, "utf-8");
  return JSON.parse(data);
}

function saveArticles(articles: unknown[]) {
  fs.writeFileSync(ARTICLES_PATH, JSON.stringify(articles, null, 2));
}

export async function GET() {
  const articles = getArticles();
  articles.sort(
    (a: { date: string }, b: { date: string }) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return NextResponse.json(articles);
}

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD || "espx2026"}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const articles = getArticles();

  const newArticle = {
    id: Date.now().toString(),
    title: body.title,
    summary: body.summary,
    source: body.source || "ESPX Global",
    url: body.url || "#",
    date: body.date || new Date().toISOString().split("T")[0],
    category: body.category || "Energy Storage",
    manual: true,
  };

  articles.push(newArticle);
  saveArticles(articles);

  return NextResponse.json(newArticle, { status: 201 });
}

export async function DELETE(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD || "espx2026"}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID required" }, { status: 400 });
  }

  let articles = getArticles();
  articles = articles.filter((a: { id: string }) => a.id !== id);
  saveArticles(articles);

  return NextResponse.json({ success: true });
}
