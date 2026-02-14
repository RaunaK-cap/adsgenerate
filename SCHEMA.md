# Database Schema Guide (Simple Language)

This file explains what you asked in **simple words**:
- You already have a `User` table.
- Users can generate **thumbnails** and **ads**.
- A user can upload **many images**.
- You want to store images and **query them for frontend**.

There are **two ways** to design the schema.
Both work. Option A is easier.

---

## Option A (Recommended: one shared table)
Use **one database**, **one User table**, and **one Generation table**.
Each generation has a `kind` field:
- `THUMBNAIL`
- `AD`

### How it works
1. User uploads images → save in `Asset`.
2. User clicks generate → create a `Generation` row.
3. Result images → save in `Output`.

This is simple and clean.

---

## Option B (Separate tables)
You can make two tables:
- `ThumbnailGeneration`
- `AdGeneration`

This is possible, but:
- You will duplicate columns.
- You will write more queries.
- Harder to show all results together.

---

## Can we do what you said?
Yes.
You can use the existing `User` table and relate it to all new tables.
You can store **unlimited images per user**.
You can query them easily with joins.

---

## Simple Table Explanation

### `User`
Already exists. Keep it.

### `Project` (optional but helpful)
Groups one user’s work.
Example: “Nike Ad Feb”.

### `Asset` (uploaded images)
This is where uploaded images go.
Examples:
- user photo
- product photo
- logo
- background

One user can have **many assets**.

### `Generation` (a job)
This is one generation request.
Field `kind` tells if it is a thumbnail or ad.

### `Output` (final images)
This stores generated images.
One generation can create **3–4 images** or more.

---

## How to show images in frontend

### Show all generated images for a user
- Query `Output` by joining `Generation.userId`.

### Show all uploaded images for a user
- Query `Asset` where `userId = ?`.

### Show all images for one project
- Query `Asset` where `projectId = ?`.
- Query `Output` where `generation.projectId = ?`.

---

## Summary (very short)
- Keep `User`.
- Store uploads in `Asset`.
- Store jobs in `Generation` (with `kind`).
- Store results in `Output`.
- Use joins to fetch images.

That’s how you can do thumbnails + ads with one user.
