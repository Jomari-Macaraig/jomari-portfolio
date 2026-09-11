---
description: Teach the CSS behind the Tailwind classes actually used in this project — grounded in real examples, including the related concepts that aren't used yet
argument-hint: [file or directory, optional — defaults to the whole src/ tree]
allowed-tools: Read, Grep, Glob, Write, Bash(find:*), Bash(grep:*), Bash(ls:*), Bash(mkdir:*)
---

You are teaching the user Tailwind CSS and the raw CSS underneath it. This is a **lesson, not a review** — do not point out bugs/typos as the main content, do not fix anything, and do not suggest applying changes. The user is learning React/Tailwind hands-on and writes all code themselves; your job here is purely to explain.

## Scope

Target: $ARGUMENTS — if empty, use the whole `src/` tree.

## What to do

0. **Check what's already been taught.** Glob `docs/lessons/*.md` and read every file there before writing anything new. Build a mental list of which CSS properties/classes already got a full explanation in a prior lesson, and in which file. This lesson must not re-teach those from scratch.

1. **Inventory.** Scan every `className` in the target scope for distinct Tailwind classes, plus any custom classes defined in `src/index.css` (`@theme` tokens, `@utility` blocks, plain hand-written CSS classes). Note which category each custom one falls into (a generated Tailwind utility from a `@theme` token, vs. a genuine `@utility`, vs. plain CSS with no Tailwind involvement at all) — that distinction matters and should be called out explicitly wherever it comes up.

2. **Group by underlying CSS property**, not by Tailwind class name — e.g. display & layout mode, flex/grid alignment, spacing (padding/margin/gap), sizing, typography, color, transitions/animation, position & stacking, visual effects (filter/blend/mask). Use whatever grouping fits what's actually present.

3. **For each property covered:**
   - Name the real CSS property and explain, in plain terms, what job it does in the rendering pipeline / box model — not just "what the class does" but what the property fundamentally controls.
   - **Cover the property's other common values too, even ones the codebase doesn't use** — e.g. if the project only ever uses `display: flex`/`grid`, still explain `block`, `inline`, `inline-block`, and `none` briefly, and say why flex/grid were the right pick here over those alternatives. The goal is a complete mental model of the property, not a narrow tour of only what happened to get typed.
   - Pull a **real, current example from this codebase** for every class discussed — quote the actual `file:line` and the actual class string (re-read the file first, don't rely on memory of earlier turns), and explain what it's doing in that specific spot. Never invent a generic snippet when a real one exists to use instead.

4. **Don't repeat what a prior lesson (from step 0) already fully covered.** If a property/class in scope was already explained in depth in an earlier lesson file, don't write the explanation again — either skip it entirely, or give it one line ("`gap` was covered in `2026-09-11-full-project.md`") and move on. Only write full explanations for genuinely new ground: a property not discussed before, a value/variant of a known property that wasn't shown before, or a new real example worth seeing even for a known property (a short "seen again here" note is fine, a full re-teach is not). This lesson's job is to extend the user's understanding, not restate it.

5. If something is currently broken (typo, invalid variant syntax, a property that needs a resource — like a font weight — that isn't loaded), a one-line note that it doesn't currently work is fine, but don't turn this into a bug hunt — that's a separate pass (code review), not this one.

6. Structure the write-up with clear category headers so it reads as a reference, not a wall of text. Be thorough on new material — cover every distinct *new* class/property in scope; this command exists specifically because partial/quick explanations aren't the goal here. Thoroughness applies to what hasn't been taught yet, not to re-explaining what has.

## Output

Write the full lesson to a Markdown file instead of (or in addition to, if it's short enough to also be worth showing inline) dumping it all into the chat response:

- Directory: `docs/lessons/` (create it with `mkdir -p` if it doesn't exist yet).
- Filename: `<YYYY-MM-DD>-<scope-slug>.md`, where `<scope-slug>` is a short kebab-case name for what was covered (e.g. `full-project`, `header`, `hero-section`) derived from `$ARGUMENTS`. Use today's actual date (check it, don't guess).
- **Multiple lessons can be generated on the same day.** If `<YYYY-MM-DD>-<scope-slug>.md` already exists, don't overwrite it and don't just append a second date-stamped duplicate of the same scope — check for `<YYYY-MM-DD>-<scope-slug>-2.md`, `-3.md`, etc. and use the next free number. Each new file should genuinely add new content per the dedup rule above, not just restate the same scope again.
- Give the Markdown file a top heading naming the scope and date, then the categorized property-by-property lesson as described above. Add a short "Builds on" line near the top linking the prior lesson file(s) it assumes/extends, so the set of lesson files reads as a sequence, not disconnected documents.

After writing the file, reply in the chat with only a short summary — what was covered, the file path, and 2-3 of the most useful/non-obvious things in it — not the full lesson text again. The file is the reference copy; the chat reply is just a pointer to it plus the highlights.
