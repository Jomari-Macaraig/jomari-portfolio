---
description: Lecture-style recap of the concrete problems solved so far — the concept primer, the problem, and the fix, in the order they came up
argument-hint: [optional — a topic/section to focus the recap on, e.g. "header" or "responsive"]
allowed-tools: Read, Grep, Glob, Write, Bash(find:*), Bash(grep:*), Bash(ls:*), Bash(mkdir:*), Bash(date:*)
---

You are giving the user a **lecture recap** of real problems that were diagnosed and fixed while building this project. This is retrospective teaching, grounded in what actually happened — never invent a problem that wasn't real, and never pad the recap with generic advice that wasn't actually part of solving something here.

The user is a total beginner in Tailwind/CSS. Do not assume any prior knowledge beyond what this recap itself has already introduced earlier in the same write-up.

## Source of truth

Primary source: **this conversation's own history** — the actual back-and-forth where a problem was raised, diagnosed, and fixed. Reconstruct the real sequence of problems from what was actually discussed, not from imagining what "should" have come up.

- If `$ARGUMENTS` names a topic/section, focus the recap on problems related to that area only.
- If this session has no real prior debugging/problem-solving history to draw from (e.g. a fresh session with nothing behind it yet), say so plainly and don't fabricate a recap to fill the space.
- Re-read the actual current state of any file you reference before quoting it — code may have changed since a problem was first discussed, and the recap should show the real, current fix, not a stale version from memory.

## Lecture format — per problem, in the order it happened

For **each** problem solved, in chronological order:

1. **Concept primer.** Before presenting the problem, briefly introduce whatever CSS/Tailwind concept is required to understand it — a property, a layout model, a cascade rule. Only what's needed for *this* problem, not a tangent. If a concept was already primed earlier in this same recap, don't re-explain it — just use it.
2. **The problem.** What was actually broken, concretely: the symptom the user saw/reported, and the real root cause — grounded in an actual `file:line` and class name, not a paraphrase.
3. **The fix.** What changed, quoting the real before/after, and *why* it works — tie it back to the primer concept so the mechanism is clear, not just "this class fixes it."
4. Move to the next problem. Problems that build on each other (e.g. a fix that later needed revisiting) should say so explicitly rather than presenting them as unrelated.

Optional but encouraged: if a prior `/tailwind-lesson` file (`docs/lessons/*.md`, not the `-recap` ones) already has a full reference explanation of a property this recap needs, link to it instead of fully re-deriving it — the recap's primer can be short and point there for the exhaustive version.

## What this is not

- Not a bug hunt for new issues — only recap problems that were actually already found and fixed.
- Not a Tailwind reference/glossary — that's what `/tailwind-lesson` is for. This is narrative: problem → concept → fix, in the order it happened.
- Don't edit any project source files. This command only reads and writes to `docs/lessons/`.

## Output

- Directory: `docs/lessons/` (create with `mkdir -p` if needed).
- Filename: `<YYYY-MM-DD>-recap.md` (check today's actual date, don't guess). If one already exists for today, use `<YYYY-MM-DD>-recap-2.md`, `-3.md`, etc. — the next free number — since more than one recap can happen in a day.
- Top heading naming the date and scope (or "full session" if unscoped), followed by the problems in order as described above.

After writing the file, reply in the chat with a short summary only: how many problems were covered, the file path, and the single most important lesson from the set — not the full lecture text again.
