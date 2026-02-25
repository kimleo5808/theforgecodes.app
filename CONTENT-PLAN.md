# The Forge Content Expansion Plan — 10 New Pages

> This document tracks the full implementation plan for adding 10 new SEO content pages to theforgecodes.app.
> Each page targets specific long-tail keywords around "the forge roblox" to build topical authority beyond just codes.

---

## Background & Strategy

### Core Problem
theforgecodes.app currently only covers codes-related content (live codes, redeem guide, FAQ, history). Competitors like Beebom have built content clusters (wiki, races, totems, pickaxes, enemies) that capture broader "the forge roblox" search traffic and funnel it to their codes pages.

### Solution
Add 10 new guide pages forming a topical cluster around "the forge roblox", with the Wiki page as the hub. Every page links back to the Wiki and to the Live Codes page where relevant. This builds topical authority and captures long-tail traffic.

### Competitor Analysis Summary
| Competitor | Pages | Avg Words | Content Depth |
|---|---|---|---|
| Pro Game Guides | 1 (codes) | ~1400 | Medium — codes + FAQ with game mechanics |
| Beebom | 6 (codes + wiki + races + totems + pickaxes + enemies) | 400-3000 | Highest — only site with content cluster |
| Try Hard Guides | 1 (codes) | ~1300 | Medium — codes + release patterns |
| PCGamesN | 1 (codes) | ~420 | Low — pure codes list |
| Sportskeeda | 1 (codes) | ~1000 | Medium |
| Dot Esports | 1 (codes) | ~800 | Low |
| Rock Paper Shotgun | 1 (codes) | ~600 | Low |
| Dexerto | 1 (codes) | ~1000 | Medium |
| GamerTweak | 1 (codes) | ~800 | Low |
| Mejoress | 1 (codes) | ~600 | Low |

### Our Advantage
- Every page targets 1500+ words (most competitors are under 1000)
- Tight internal linking cluster (competitors have isolated pages)
- Multi-language support (en/zh/ja) — no competitor does this
- Daily-verified codes data creates trust signals competitors lack

---

## Internal Linking Architecture

```
                    ┌─────────────┐
                    │  Homepage   │
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
        ┌──────────┐ ┌──────────┐ ┌──────────┐
        │Live Codes│ │   Wiki   │ │Beginner  │
        │  (hub)   │ │  (hub)   │ │  Guide   │
        └────┬─────┘ └────┬─────┘ └────┬─────┘
             │            │             │
    ┌────────┤     ┌──────┼──────┐      │
    ▼        ▼     ▼      ▼      ▼     ▼
 Redeem   FAQ   Races  Weapons  Ores  Totems
 Guide         Tier    Guide   Guide  Guide
               List      │      │
                    ┌─────┼──────┤
                    ▼     ▼      ▼
                 Runes  Enemies Pickaxes
                 Guide  Guide   Guide
                          │
                          ▼
                       Quests
                       Guide
```

---

## Page Specifications

### Page 1: The Forge Wiki (`/the-forge-wiki`)
- **i18n namespace:** `ForgeWiki`
- **Target keywords:** the forge wiki, the forge roblox wiki, the forge game guide, the forge roblox guide, the forge complete guide
- **Content directory:** `content/the-forge-wiki/`
- **Min words:** 2000
- **Role:** Hub page — links to ALL other guide pages
- **Sections:**
  1. What is The Forge (game overview, core loop: Mining → Forging → Combat → Exploration → Trading)
  2. Game World & Regions (Stonewake's Cross, Forgotten Kingdom, Frostspire Expanse, Volcanic Depths)
  3. Races (16-race system overview → link to Race Tier List)
  4. Ores & Mining (ore system overview → link to Ores Guide)
  5. Pickaxes (progression overview → link to Pickaxes Guide)
  6. Weapons & Forging (crafting system → link to Weapons Guide)
  7. Enemies & Combat (enemy types → link to Enemies Guide)
  8. Runes (enhancement system → link to Runes Guide)
  9. Quests (NPC quest system → link to Quests Guide)
  10. Totems (buff system → link to Totems Guide)
  11. Codes & Free Rewards (→ link to Live Codes + Redeem Guide)
  12. Game Updates Timeline (Crimson Sakura etc.)
- **Files needed:**
  - [x] `app/[locale]/the-forge-wiki/page.tsx`
  - [x] `content/the-forge-wiki/en.mdx`
  - [ ] `content/the-forge-wiki/zh.mdx`
  - [ ] `content/the-forge-wiki/ja.mdx`

### Page 2: Race Tier List (`/the-forge-race-tier-list`)
- **i18n namespace:** `RaceTierList`
- **Target keywords:** the forge race tier list, the forge best race, the forge races, the forge all races, the forge race reroll, the forge archangel
- **Content directory:** `content/the-forge-race-tier-list/`
- **Min words:** 1800
- **Sections:**
  1. Intro — race system explanation, reroll mechanics
  2. Quick Tier List Table (S/A/B/C/D tiers with drop rates)
  3. S-Tier: Archangel (0.1%), Angel (0.5%), Demon (0.5%)
  4. A-Tier: Dragonborn (1%), Vampire (1%), Elf (2%)
  5. B-Tier: Orc (3%), Dwarf (3%), Werewolf (4%)
  6. C-Tier & D-Tier: Common races
  7. How to Reroll Races (Wizard NPC + Shop)
  8. Reroll Strategy (when to reroll, when to keep)
  9. Codes That Give Free Rerolls (→ link to Live Codes)
  10. FAQ
- **Files needed:**
  - [x] `app/[locale]/the-forge-race-tier-list/page.tsx`
  - [x] `content/the-forge-race-tier-list/en.mdx`
  - [ ] `content/the-forge-race-tier-list/zh.mdx`
  - [ ] `content/the-forge-race-tier-list/ja.mdx`

### Page 3: Ores Guide (`/the-forge-ores-guide`)
- **i18n namespace:** `OresGuide`
- **Target keywords:** the forge ores, the forge all ores, the forge ore list, the forge mining guide, the forge rare ores, the forge demonite, the forge arcane crystal
- **Content directory:** `content/the-forge-ores-guide/`
- **Min words:** 1700
- **Sections:**
  1. Intro — ores as foundation of the game
  2. How Mining Works (mechanics, pickaxe dependency, luck system)
  3. Stonewake's Cross Ores (table: Stone, Copper, Iron, Coal, Tin, Silver)
  4. Forgotten Kingdom Ores (table: Gold, Platinum, Mithril, Obsidian, Ruby)
  5. Frostspire Expanse Ores (table: Crystal, Diamond, Prismarine, Frostite, Sapphire)
  6. Volcanic Depths Ores (table: Magma, Volcanic Crystal, Infernal)
  7. Special Ores — Heart Series (5 types) & Mythical (Demonite, Darkryte, Arcane Crystal)
  8. Mining Efficiency Tips (pickaxe + race + totem combos)
  9. Ore-to-Weapon Crafting Reference (→ link to Weapons Guide)
  10. FAQ
- **Files needed:**
  - [x] `app/[locale]/the-forge-ores-guide/page.tsx`
  - [ ] `content/the-forge-ores-guide/en.mdx` ← agent may still be writing
  - [ ] `content/the-forge-ores-guide/zh.mdx`
  - [ ] `content/the-forge-ores-guide/ja.mdx`

### Page 4: Pickaxes Guide (`/the-forge-pickaxes-guide`)
- **i18n namespace:** `PickaxesGuide`
- **Target keywords:** the forge pickaxes, the forge all pickaxes, the forge best pickaxe, the forge pickaxe tier list, the forge dragon head pickaxe, the forge prismatic pickaxe
- **Content directory:** `content/the-forge-pickaxes-guide/`
- **Min words:** 1600
- **Sections:**
  1. Intro — pickaxes as primary mining tool
  2. Pickaxe Stats Explained (Mine Power, Mining Speed, Luck Boost, Rune Slots)
  3. Complete Pickaxe List (table: 20+ pickaxes with all stats)
  4. Pickaxe Tier List (S/A/B/C ranking)
  5. Upgrade Path — Beginner (free → low cost)
  6. Upgrade Path — Mid-game
  7. Upgrade Path — End-game (Prismatic, Dragon Head)
  8. Hidden & Limited Pickaxes (Raven Cave, Hidden Maze, seasonal)
  9. Rune Slot Strategy (→ link to Runes Guide)
  10. FAQ
- **Files needed:**
  - [x] `app/[locale]/the-forge-pickaxes-guide/page.tsx`
  - [ ] `content/the-forge-pickaxes-guide/en.mdx` ← agent may still be writing
  - [ ] `content/the-forge-pickaxes-guide/zh.mdx`
  - [ ] `content/the-forge-pickaxes-guide/ja.mdx`

### Page 5: Weapons Guide (`/the-forge-weapons-guide`)
- **i18n namespace:** `WeaponsGuide`
- **Target keywords:** the forge weapons, the forge all weapons, the forge best weapon, the forge weapon tier list, the forge crafting guide
- **Content directory:** `content/the-forge-weapons-guide/`
- **Min words:** 1800
- **Sections:**
  1. Intro — weapons and the forging system
  2. Weapon Types (swords, axes, hammers, bows, daggers, spears, etc.)
  3. Complete Weapon List (table: 25+ weapons with damage, speed, special effects)
  4. Weapon Tier List (S/A/B/C)
  5. Forging System Explained (minigame mechanics, timing, quality grades)
  6. Ore-to-Weapon Recipes (which ores make which weapons)
  7. Rune Combinations for Weapons (→ link to Runes Guide)
  8. PvE vs PvP Weapon Choices
  9. FAQ
- **Files needed:**
  - [ ] `app/[locale]/the-forge-weapons-guide/page.tsx`
  - [ ] `content/the-forge-weapons-guide/en.mdx`
  - [ ] `content/the-forge-weapons-guide/zh.mdx`
  - [ ] `content/the-forge-weapons-guide/ja.mdx`

### Page 6: Enemies Guide (`/the-forge-enemies-guide`)
- **i18n namespace:** `EnemiesGuide`
- **Target keywords:** the forge enemies, the forge all enemies, the forge boss guide, the forge combat guide, the forge enemy list
- **Content directory:** `content/the-forge-enemies-guide/`
- **Min words:** 1700
- **Sections:**
  1. Intro — enemy system overview
  2. Stonewake's Cross Enemies (table: Zombie, Elite Zombie, Delver, Brute — HP, Damage, Level, Gold, XP)
  3. Forgotten Kingdom Enemies (table: Skeleton types, Bomber, Slime, Reaper, Pyromancer)
  4. Frostspire Expanse Enemies (table: Crystal/Diamond/Prismarine Spider, Orc, Yeti, Crystal Golem)
  5. Boss Strategies (attack patterns, weaknesses, recommended gear)
  6. Combat Tips (positioning, parry timing, environment use, race skill combos)
  7. Loot Drop Analysis (which enemies drop what, gold farming efficiency)
  8. Best Leveling Routes (XP efficiency by region)
  9. FAQ
- **Files needed:**
  - [ ] `app/[locale]/the-forge-enemies-guide/page.tsx`
  - [ ] `content/the-forge-enemies-guide/en.mdx`
  - [ ] `content/the-forge-enemies-guide/zh.mdx`
  - [ ] `content/the-forge-enemies-guide/ja.mdx`

### Page 7: Runes Guide (`/the-forge-runes-guide`)
- **i18n namespace:** `RunesGuide`
- **Target keywords:** the forge runes, the forge rune guide, the forge all runes, the forge best runes, the forge rune builds
- **Content directory:** `content/the-forge-runes-guide/`
- **Min words:** 1600
- **Sections:**
  1. Intro — rune system overview
  2. How Runes Work (equipping, slot requirements, stacking rules)
  3. Complete Rune List (table: name, effect, applicable gear type, rarity)
  4. Best Mining Build (maximize speed + luck)
  5. Best Combat Build (maximize damage + survival)
  6. Best Hybrid Build (balanced for beginners)
  7. How to Get Runes (drops, quest rewards, shop)
  8. Rune Slot Mechanics (different gear slot counts, unlocking more)
  9. FAQ
- **Files needed:**
  - [ ] `app/[locale]/the-forge-runes-guide/page.tsx`
  - [ ] `content/the-forge-runes-guide/en.mdx`
  - [ ] `content/the-forge-runes-guide/zh.mdx`
  - [ ] `content/the-forge-runes-guide/ja.mdx`

### Page 8: Beginner Guide (`/the-forge-beginner-guide`)
- **i18n namespace:** `BeginnerGuide`
- **Target keywords:** the forge beginner guide, how to play the forge, the forge tips, the forge guide for beginners, the forge roblox guide
- **Content directory:** `content/the-forge-beginner-guide/`
- **Min words:** 2000
- **Sections:**
  1. Intro — what new players need to know
  2. Getting Started (character creation, initial race, starter gear)
  3. Core Gameplay Loop (Mining → Forging → Combat → Trading → Exploration)
  4. Your First 30 Minutes (step-by-step optimal start)
  5. Mining Basics (where to go, what to mine, how pickaxes work)
  6. Forging Basics (anvil location, minigame tips, quality grades)
  7. Combat Basics (controls, parry, skills, when to fight vs run)
  8. 10 Common Beginner Mistakes (and how to avoid them)
  9. Free Resources (→ link to Live Codes for free rerolls/totems)
  10. What to Do Next (→ links to Race Tier List, Ores Guide, Wiki)
  11. FAQ
- **Files needed:**
  - [ ] `app/[locale]/the-forge-beginner-guide/page.tsx`
  - [ ] `content/the-forge-beginner-guide/en.mdx`
  - [ ] `content/the-forge-beginner-guide/zh.mdx`
  - [ ] `content/the-forge-beginner-guide/ja.mdx`

### Page 9: Totems Guide (`/the-forge-totems-guide`)
- **i18n namespace:** `TotemsGuide`
- **Target keywords:** the forge totems, the forge all totems, the forge luck totem, the forge totem guide, the forge best totem
- **Content directory:** `content/the-forge-totems-guide/`
- **Min words:** 1500
- **Sections:**
  1. Intro — totem system overview
  2. All Totems List (table: name, effect, duration, price)
     - Damage Totem (damage boost, 49 Robux, 30 min)
     - XP Totem (XP multiplier, 49 Robux, 30 min)
     - Luck Totem (rare drop boost, 75 Robux, 30 min)
     - Health Totem (HP regen, 49 Robux, 30 min)
     - Mining Totem (mining speed boost, 49 Robux, 30 min)
  3. Detailed Totem Analysis (when to use each, best activity pairings)
  4. Free Totems from Codes (→ link to Live Codes)
  5. Paid Totem Value Analysis (single vs bundle pricing)
  6. Totem Priority Guide (which to buy first on a budget)
  7. Totem Stacking & Mechanics (do they stack? pause offline?)
  8. FAQ
- **Files needed:**
  - [ ] `app/[locale]/the-forge-totems-guide/page.tsx`
  - [ ] `content/the-forge-totems-guide/en.mdx`
  - [ ] `content/the-forge-totems-guide/zh.mdx`
  - [ ] `content/the-forge-totems-guide/ja.mdx`

### Page 10: Quests Guide (`/the-forge-quests-guide`)
- **i18n namespace:** `QuestsGuide`
- **Target keywords:** the forge quests, the forge all quests, the forge quest guide, the forge quest list, the forge quest rewards
- **Content directory:** `content/the-forge-quests-guide/`
- **Min words:** 1600
- **Sections:**
  1. Intro — quest system overview
  2. How Quests Work (NPC locations, quest types, reward mechanics)
  3. Complete Quest List (table: quest name, NPC, objective, rewards, difficulty)
     - Include 11+ named quests across all regions
  4. Main Quest Walkthrough (recommended completion order)
  5. Hidden Quests (trigger conditions, special rewards)
  6. Quest Efficiency Tips (best reward-to-effort ratio)
  7. Quest Rewards & Unlocks (hidden tools, new areas)
  8. FAQ
- **Files needed:**
  - [ ] `app/[locale]/the-forge-quests-guide/page.tsx`
  - [ ] `content/the-forge-quests-guide/en.mdx`
  - [ ] `content/the-forge-quests-guide/zh.mdx`
  - [ ] `content/the-forge-quests-guide/ja.mdx`

---

## Infrastructure Changes

### Sitemap (`app/sitemap.ts`)
Add all 10 new static pages to the `staticPages` array:
```
'/the-forge-wiki',
'/the-forge-race-tier-list',
'/the-forge-ores-guide',
'/the-forge-pickaxes-guide',
'/the-forge-weapons-guide',
'/the-forge-enemies-guide',
'/the-forge-runes-guide',
'/the-forge-beginner-guide',
'/the-forge-totems-guide',
'/the-forge-quests-guide',
```

### Header Navigation (`i18n/messages/*.json` → Header.links)
Add "Wiki" link to header nav (already done in all 3 languages).

### Footer Navigation (`i18n/messages/*.json` → Footer.Links.groups)
Add Wiki, Beginner Guide, Race Tier List to the "Guides" footer group (already done in all 3 languages).

### i18n Metadata (`i18n/messages/*.json`)
Add title/description for all 10 namespaces (already done in all 3 languages):
- ForgeWiki, RaceTierList, OresGuide, PickaxesGuide, WeaponsGuide
- EnemiesGuide, RunesGuide, BeginnerGuide, TotemsGuide, QuestsGuide

---

## Implementation Checklist

### Phase 1: i18n & Infrastructure
- [x] Add i18n metadata for all 10 pages to `en.json`
- [x] Add i18n metadata for all 10 pages to `zh.json`
- [x] Add i18n metadata for all 10 pages to `ja.json`
- [x] Update header nav in all 3 languages (add Wiki)
- [x] Update footer nav in all 3 languages (add Wiki, Beginner Guide, Race Tier List)
- [ ] Update `app/sitemap.ts` with all 10 new routes

### Phase 2: Page Creation (page.tsx + en.mdx)
- [x] Page 1: `/the-forge-wiki` — page.tsx + en.mdx
- [x] Page 2: `/the-forge-race-tier-list` — page.tsx + en.mdx
- [ ] Page 3: `/the-forge-ores-guide` — page.tsx created, en.mdx in progress
- [ ] Page 4: `/the-forge-pickaxes-guide` — page.tsx created, en.mdx in progress
- [ ] Page 5: `/the-forge-weapons-guide` — page.tsx + en.mdx
- [ ] Page 6: `/the-forge-enemies-guide` — page.tsx + en.mdx
- [ ] Page 7: `/the-forge-runes-guide` — page.tsx + en.mdx
- [ ] Page 8: `/the-forge-beginner-guide` — page.tsx + en.mdx
- [ ] Page 9: `/the-forge-totems-guide` — page.tsx + en.mdx
- [ ] Page 10: `/the-forge-quests-guide` — page.tsx + en.mdx

### Phase 3: Chinese Translation (zh.mdx)
- [ ] `content/the-forge-wiki/zh.mdx`
- [ ] `content/the-forge-race-tier-list/zh.mdx`
- [ ] `content/the-forge-ores-guide/zh.mdx`
- [ ] `content/the-forge-pickaxes-guide/zh.mdx`
- [ ] `content/the-forge-weapons-guide/zh.mdx`
- [ ] `content/the-forge-enemies-guide/zh.mdx`
- [ ] `content/the-forge-runes-guide/zh.mdx`
- [ ] `content/the-forge-beginner-guide/zh.mdx`
- [ ] `content/the-forge-totems-guide/zh.mdx`
- [ ] `content/the-forge-quests-guide/zh.mdx`

### Phase 4: Japanese Translation (ja.mdx)
- [ ] `content/the-forge-wiki/ja.mdx`
- [ ] `content/the-forge-race-tier-list/ja.mdx`
- [ ] `content/the-forge-ores-guide/ja.mdx`
- [ ] `content/the-forge-pickaxes-guide/ja.mdx`
- [ ] `content/the-forge-weapons-guide/ja.mdx`
- [ ] `content/the-forge-enemies-guide/ja.mdx`
- [ ] `content/the-forge-runes-guide/ja.mdx`
- [ ] `content/the-forge-beginner-guide/ja.mdx`
- [ ] `content/the-forge-totems-guide/ja.mdx`
- [ ] `content/the-forge-quests-guide/ja.mdx`

### Phase 5: Final Integration
- [ ] Update sitemap.ts
- [ ] Verify all pages build without errors (`pnpm build`)
- [ ] Verify internal links work across all pages
- [ ] Verify breadcrumb JSON-LD is correct on each page
- [ ] Spot-check word count (each page ≥ 1500 words)

---

## Technical Pattern

Every new page follows the same pattern as the existing `about` page:

**page.tsx** — Uses `MDXRemote` to render locale-specific MDX content:
- `generateMetadata()` with `constructMetadata()` using the page's i18n namespace
- `breadcrumbSchema` JSON-LD (Home → Wiki → Page)
- Hero header with gradient background
- MDX article body
- `generateStaticParams()` for all locales

**en.mdx / zh.mdx / ja.mdx** — MDX content files:
- Frontmatter: title, description, lastUpdated
- H1 matching the page title
- Multiple H2/H3 sections with substantial content
- Markdown tables for data-heavy sections
- Internal links to related pages using relative paths (e.g., `/the-forge-codes`)
- FAQ section at the bottom

---

## SEO Notes

- Every page must include the primary keyword in: H1, first paragraph, at least 2 H2s, meta title, meta description
- Internal links should use descriptive anchor text (not "click here")
- Each page links to Wiki (hub) and Live Codes (money page) where natural
- Breadcrumbs use 3-level structure: Home → Wiki → Page
- All pages use `changeFrequency: 'weekly'` in sitemap (guides don't change daily like codes)

---

## TODO Checklist

### Phase 0: Infrastructure
- [x] Add i18n metadata for all 10 pages to `en.json`
- [x] Add i18n metadata for all 10 pages to `zh.json`
- [x] Add i18n metadata for all 10 pages to `ja.json`
- [x] Add Wiki link to header navigation (en/zh/ja)
- [x] Add Wiki, Beginner Guide, Race Tier List to footer Guides section (en/zh/ja)

### Phase 1: Page 1 — The Forge Wiki (Hub)
- [x] Create `app/[locale]/the-forge-wiki/page.tsx`
- [x] Create `content/the-forge-wiki/en.mdx` (2000+ words)
- [ ] Create `content/the-forge-wiki/zh.mdx`
- [ ] Create `content/the-forge-wiki/ja.mdx`
- [ ] Verify all internal links work

### Phase 1: Page 2 — Race Tier List
- [x] Create `app/[locale]/the-forge-race-tier-list/page.tsx`
- [x] Create `content/the-forge-race-tier-list/en.mdx` (1800+ words)
- [ ] Create `content/the-forge-race-tier-list/zh.mdx`
- [ ] Create `content/the-forge-race-tier-list/ja.mdx`
- [ ] Verify all internal links work

### Phase 1: Page 3 — Ores Guide
- [x] Create `app/[locale]/the-forge-ores-guide/page.tsx`
- [x] Create `content/the-forge-ores-guide/en.mdx` (3519 words)
- [ ] Create `content/the-forge-ores-guide/zh.mdx`
- [ ] Create `content/the-forge-ores-guide/ja.mdx`
- [ ] Verify all internal links work

### Phase 1: Page 4 — Pickaxes Guide
- [x] Create `app/[locale]/the-forge-pickaxes-guide/page.tsx`
- [x] Create `content/the-forge-pickaxes-guide/en.mdx` (3134 words)
- [ ] Create `content/the-forge-pickaxes-guide/zh.mdx`
- [ ] Create `content/the-forge-pickaxes-guide/ja.mdx`
- [ ] Verify all internal links work

### Phase 2: Page 5 — Weapons Guide
- [x] Create `app/[locale]/the-forge-weapons-guide/page.tsx`
- [x] Create `content/the-forge-weapons-guide/en.mdx` (3816 words)
- [ ] Create `content/the-forge-weapons-guide/zh.mdx`
- [ ] Create `content/the-forge-weapons-guide/ja.mdx`
- [ ] Verify all internal links work

### Phase 2: Page 6 — Enemies Guide
- [x] Create `app/[locale]/the-forge-enemies-guide/page.tsx`
- [x] Create `content/the-forge-enemies-guide/en.mdx` (4090 words)
- [ ] Create `content/the-forge-enemies-guide/zh.mdx`
- [ ] Create `content/the-forge-enemies-guide/ja.mdx`
- [ ] Verify all internal links work

### Phase 2: Page 7 — Runes Guide
- [x] Create `app/[locale]/the-forge-runes-guide/page.tsx`
- [x] Create `content/the-forge-runes-guide/en.mdx` (3306 words)
- [ ] Create `content/the-forge-runes-guide/zh.mdx`
- [ ] Create `content/the-forge-runes-guide/ja.mdx`
- [ ] Verify all internal links work

### Phase 2: Page 8 — Beginner Guide
- [x] Create `app/[locale]/the-forge-beginner-guide/page.tsx`
- [x] Create `content/the-forge-beginner-guide/en.mdx` (4609 words)
- [ ] Create `content/the-forge-beginner-guide/zh.mdx`
- [ ] Create `content/the-forge-beginner-guide/ja.mdx`
- [ ] Verify all internal links work

### Phase 3: Page 9 — Totems Guide
- [x] Create `app/[locale]/the-forge-totems-guide/page.tsx`
- [x] Create `content/the-forge-totems-guide/en.mdx` (2622 words)
- [ ] Create `content/the-forge-totems-guide/zh.mdx`
- [ ] Create `content/the-forge-totems-guide/ja.mdx`
- [ ] Verify all internal links work

### Phase 3: Page 10 — Quests Guide
- [x] Create `app/[locale]/the-forge-quests-guide/page.tsx`
- [x] Create `content/the-forge-quests-guide/en.mdx` (3651 words)
- [ ] Create `content/the-forge-quests-guide/zh.mdx`
- [ ] Create `content/the-forge-quests-guide/ja.mdx`
- [ ] Verify all internal links work

### Phase 4: Integration
- [x] Add all 10 new pages to `app/sitemap.ts`
- [x] Verify header navigation renders correctly (desktop + mobile)
- [x] Verify footer links render correctly
- [x] Run `pnpm build` to confirm no build errors
- [ ] Spot-check 3 pages in browser for layout/styling
- [ ] Verify breadcrumb JSON-LD renders correctly
- [ ] Verify meta tags (title, description, keywords, OG) for each page
- [ ] Test locale switching on new pages (en → zh → ja)

### Phase 5: Cross-linking Audit
- [ ] Wiki links to all 9 sub-pages
- [ ] Each sub-page links back to Wiki
- [ ] Each sub-page links to Live Codes where relevant (rerolls, totems, free rewards)
- [ ] Each sub-page links to 2-3 related sibling pages
- [ ] Redeem Guide links to relevant new pages
- [ ] FAQ page links to relevant new pages
- [ ] Homepage links to Wiki
