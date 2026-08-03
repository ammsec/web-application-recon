// data.js
// Structured index of every phase page in the guide.
// search.js reads this to power the search bar on index.html.

const RECON_DATA = [
  {
    title: "Introduction",
    page: "pages/introduction.html",
    tags: ["intro", "overview", "getting started", "who is this for"],
    description: "What web app recon is, who this guide is for, and how it's organized."
  },
  {
    title: "Methodology",
    page: "pages/methodology.html",
    tags: ["prerequisites", "go install", "setup", "pipeline", "recon.sh", "phase 0"],
    description: "Prerequisites setup (Go, Python, Git) and an overview of the full 9-phase pipeline."
  },
  {
    title: "Passive Recon",
    page: "pages/passive-recon.html",
    tags: ["censys", "shodan", "dnsdumpster", "whois", "viewdns", "osint", "phase 1"],
    description: "Gather public information about a target with zero direct contact — Censys, Shodan, DNSDumpster, Whois, ViewDNS."
  },
  {
    title: "Active Recon",
    page: "pages/active-recon.html",
    tags: ["active vs passive", "scope", "authorization", "rate limiting"],
    description: "Overview hub for every phase that sends real traffic to the target, plus scope and rate-limit guidance."
  },
  {
    title: "Subdomain Enumeration",
    page: "pages/subdomain-enumeration.html",
    tags: ["subfinder", "dnsx", "amass", "puredns", "api keys", "phase 2"],
    description: "Passive subdomain discovery with Subfinder, plus active DNS brute forcing with dnsx, Amass, and Puredns."
  },
  {
    title: "DNS Enumeration",
    page: "pages/dns-enumeration.html",
    tags: ["dnsx", "dig", "host", "zone transfer", "subdomain takeover", "nuclei"],
    description: "Full DNS record analysis, zone transfer checks, and subdomain takeover detection."
  },
  {
    title: "Alive Hosts",
    page: "pages/alive-hosts.html",
    tags: ["httpx", "gowitness", "screenshots", "live hosts", "phase 3"],
    description: "Confirm which subdomains are actually live and serving HTTP/HTTPS, with screenshots via gowitness."
  },
  {
    title: "Port Scanning",
    page: "pages/port-scanning.html",
    tags: ["nmap", "ports", "services", "os detection"],
    description: "Open ports, running services, and OS detection with Nmap."
  },
  {
    title: "Technology Detection",
    page: "pages/technology-detection.html",
    tags: ["wappalyzer", "whatweb", "builtwith", "fingerprinting", "phase 4"],
    description: "Identify frameworks, CMS, and server stack with Wappalyzer, WhatWeb, and BuiltWith."
  },
  {
    title: "Directory Enumeration",
    page: "pages/directory-enumeration.html",
    tags: ["ffuf", "feroxbuster", "dirsearch", "fuzzing", "phase 5"],
    description: "Brute force hidden files, admin panels, and backups with ffuf, feroxbuster, and dirsearch."
  },
  {
    title: "URL Discovery",
    page: "pages/url-discovery.html",
    tags: ["katana", "gau", "waybackurls", "hakrawler", "crawling", "phase 6"],
    description: "Collect known and historical URLs with Katana, gau, waybackurls, and hakrawler."
  },
  {
    title: "JavaScript Analysis",
    page: "pages/javascript-analysis.html",
    tags: ["secretfinder", "jsluice", "secrets", "api keys", "phase 7"],
    description: "Find hardcoded API keys and hidden endpoints in JavaScript with SecretFinder and jsluice."
  },
  {
    title: "Parameter Discovery",
    page: "pages/parameter-discovery.html",
    tags: ["arjun", "paramspider", "hidden parameters", "phase 8"],
    description: "Find hidden or undocumented parameters with Arjun and ParamSpider."
  },
  {
    title: "API Recon",
    page: "pages/api-recon.html",
    tags: ["swagger", "openapi", "kiterunner", "graphql", "graphql-cop"],
    description: "Find API documentation, brute force routes with Kiterunner, and test GraphQL introspection."
  },
  {
    title: "Authentication",
    page: "pages/authentication.html",
    tags: ["jwt", "jwt_tool", "sessions", "cookies", "oauth", "sso"],
    description: "JWT analysis, session/cookie checks, login flow testing, and OAuth misconfigurations."
  },
  {
    title: "Vulnerability Scanning",
    page: "pages/checklist.html",
    tags: ["nuclei", "sqlmap", "ghauri", "dalfox", "cve", "xss", "sqli", "phase 9"],
    description: "Automated vulnerability scanning with Nuclei, SQLMap, Ghauri, and Dalfox."
  },
  {
    title: "Reporting",
    page: "pages/reporting.html",
    tags: ["report template", "severity", "cvss", "writeup"],
    description: "Report structure, severity rating guide, and a copyable markdown report template."
  },
  {
    title: "Resources",
    page: "pages/resources.html",
    tags: ["seclists", "payloadbox", "wordlists"],
    description: "Essential wordlists and payload collections — SecLists, PayloadBox, and further reading."
  },
  {
    title: "Cheat Sheet",
    page: "pages/cheat-sheet.html",
    tags: ["one-liners", "recon.sh", "quick reference"],
    description: "Compact one-liners for every phase, plus the full automated recon.sh pipeline."
  }
];