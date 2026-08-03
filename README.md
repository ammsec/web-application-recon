# 🚀 Web Application Recon

A practical, phase-by-phase guide to modern web application reconnaissance — built as a static site with real tools, real commands, and an interactive pipeline generator.

Built with ❤️ by **ammsec**

---

## What this is

A beginner-friendly but genuinely useful reference for web app recon, organized into the same order a real assessment follows: passive info-gathering first, then progressively more active testing, ending in reporting. Every phase page has the actual tools, install steps, and copy-paste-ready commands — not just theory.

## ✨ Features

- **19 phase pages** covering the full recon lifecycle, from OSINT to vulnerability scanning
- **Interactive Pipeline Builder** — type a domain, get the entire 9-phase pipeline generated with real commands for that target, connected as a visual flow
  - Copy the full pipeline as one script
  - Download it as a ready-to-run `.sh` file
- **Live search** across every phase and tool
- **Copy-to-clipboard** on every command block
- Dark, terminal-inspired theme with a subtle animated background (matrix-rain canvas, scanline sweep, grid overlay)
- Fully static — no backend, no build step, just open `index.html`

## 📂 Project Structure

```
.
├── index.html                  # Home — links to every phase
├── assets/
│   ├── css/
│   │   ├── style.css           # Base theme
│   │   ├── content.css         # Tool cards, code blocks, tables
│   │   ├── animations.css      # Background canvas layering + ambient effects
│   │   ├── pipeline.css        # Pipeline Builder styles
│   │   └── responsive.css      # Mobile breakpoints
│   └── js/
│       ├── app.js              # Base init
│       ├── ui.js               # Copy-to-clipboard behavior
│       ├── background.js       # Matrix-rain canvas effect
│       ├── data.js             # Search index (all pages/tags)
│       └── search.js           # Live search filtering
└── pages/
    ├── introduction.html
    ├── methodology.html
    ├── passive-recon.html
    ├── active-recon.html
    ├── subdomain-enumeration.html
    ├── dns-enumeration.html
    ├── alive-hosts.html
    ├── port-scanning.html
    ├── technology-detection.html
    ├── directory-enumeration.html
    ├── url-discovery.html
    ├── javascript-analysis.html
    ├── parameter-discovery.html
    ├── api-recon.html
    ├── authentication.html
    ├── checklist.html           # Phase 9 — Vulnerability Scanning
    ├── reporting.html
    ├── resources.html
    ├── cheat-sheet.html
    └── pipeline-builder.html    # Interactive pipeline generator
```

## 🗺️ Phases Covered

| # | Phase | Key Tools |
|---|-------|-----------|
| 0 | Prerequisites | Go, Python, Git |
| 1 | Passive Recon & OSINT | Censys, Shodan, DNSDumpster, Whois, ViewDNS |
| 2 | Subdomain Enumeration | Subfinder, dnsx, Amass, Puredns |
| — | DNS Enumeration | dnsx, dig, Nuclei (takeover checks) |
| 3 | Alive Hosts | httpx, gowitness |
| — | Port Scanning | Nmap |
| 4 | Technology Detection | Wappalyzer, WhatWeb, BuiltWith |
| 5 | Directory Enumeration | ffuf, feroxbuster, dirsearch |
| 6 | URL Discovery | Katana, gau, waybackurls, hakrawler |
| 7 | JavaScript & Secrets Analysis | SecretFinder, jsluice |
| 8 | Parameter Discovery | Arjun, ParamSpider |
| — | API Recon | Kiterunner, graphql-cop |
| — | Authentication | jwt_tool, manual checklists |
| 9 | Vulnerability Scanning | Nuclei, SQLMap, Ghauri, Dalfox |
| — | Reporting | Report template, CVSS reference |

## 🖥️ Running Locally

No build tools, no dependencies — it's plain HTML/CSS/JS.

```bash
git clone <your-repo-url>
cd <repo-folder>
# then just open index.html in a browser, or serve it:
python3 -m http.server 8000
```

Visit `http://localhost:8000`.

## 🔧 Tech Stack

- HTML5 / CSS3 (no framework, no build step)
- Vanilla JavaScript
- Canvas API (background effect)
- LocalStorage-free — everything runs in-memory, nothing is tracked or saved

## ⚠️ Disclaimer

This project is for **educational purposes** and **authorized security testing only**. Every active technique documented here sends real traffic to a target. Only run these tools against systems you own or have explicit written authorization to test. See the [Active Recon](pages/active-recon.html) page for scope and rate-limiting guidance.

## 📜 License

MIT License — see [LICENSE](LICENSE) for details.

## 🙌 Credits

Built and maintained by **ammsec**. Tool credit goes to the respective open-source projects linked throughout each phase page (ProjectDiscovery, OWASP Amass, SecLists, and many others).