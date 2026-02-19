import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "./schema";
import path from "path";

const dbPath = path.resolve(process.cwd(), "sqlite.db");
const sqlite = new Database(dbPath);

// Enable WAL mode for better performance
sqlite.pragma("journal_mode = WAL");

// Auto-create tables if they don't exist (for fresh deployments)
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    created_at INTEGER
  );
  CREATE TABLE IF NOT EXISTS announcements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT,
    date TEXT NOT NULL,
    category TEXT NOT NULL,
    created_at INTEGER
  );
  CREATE TABLE IF NOT EXISTS lecturers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    nidn TEXT NOT NULL,
    position TEXT NOT NULL,
    specialization TEXT NOT NULL,
    education TEXT NOT NULL,
    email TEXT,
    image_url TEXT DEFAULT '/images/dosen/placeholder.jpg'
  );
  CREATE TABLE IF NOT EXISTS staff (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    email TEXT,
    image_url TEXT DEFAULT '/images/staff/placeholder.jpg'
  );
  CREATE TABLE IF NOT EXISTS organizations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    type TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS gallery (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    image_url TEXT DEFAULT '/images/gallery/placeholder.jpg',
    date TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS pmb_timeline (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    step INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    period TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS tuition_fees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    component TEXT NOT NULL,
    amount TEXT NOT NULL,
    note TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS profile (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT NOT NULL UNIQUE,
    value TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS site_config (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT NOT NULL UNIQUE,
    value TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS hero_slides (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT,
    button_text TEXT DEFAULT 'Daftar Sekarang',
    button_link TEXT DEFAULT '/pmb',
    image_url TEXT,
    "order" INTEGER DEFAULT 0
  );
  CREATE TABLE IF NOT EXISTS site_stats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    views INTEGER NOT NULL DEFAULT 0
  );
  -- Ensure there is at least one row in site_stats
  INSERT OR IGNORE INTO site_stats (id, views) VALUES (1, 0);
`);

export const db = drizzle(sqlite, { schema });
