const SITE = {

  /* ── Personinfo ──────────────────────────────────────────────── */
  name:  "Elliot Wahl",
  roles: ["Grävande journalist & kriminalreporter"],

  /* ── Om-sektionen ────────────────────────────────────────────── */
  about: {
    title: ["Undersöker", "sanningen"],
    paragraphs: [
      "Journalist med ett starkt engagemang för <strong>undersökande journalistik</strong> och kriminalfall.",
      "Specialiserad på brott med förgreningar i <strong>nätverkskriminalitet</strong> och brott på internet. Har tidigare kartlagt fotbollssupportrar, granskat socialtjänsten och avslöjat försäljning av polisens arbetskläder.",
      "Har bred kompetens inom djupdykande research, bland annat med hjälp av OSINT- och AI-verktyg.",
      "Har du ett tips eller vill du av någon annan anledning komma i kontakt med mig? Mina kontaktuppgifter finner du längst ned."
    ],
    facts: [
      { label: "Nuvarande arbetsplats", value: "Nyhetsbyrån Siren" },
      { label: "Tidigare",              value: "SVT Snabbgranskning" },
      { label: "Utbildning",            value: "Journalistik · Juridik" },
      { label: "Särskild kompetens",    value: "Kriminalrapportering · Offentlighetsprincipen · Juridik" },
      { label: "Övrig utbildning",      value: "Grafisk design · Foto · Film", secondary: true },
    ],
  },

  /* ── Publicerad i ────────────────────────────────────────────── */
  publishedIn: [
    "SVT",
    "Dagens Nyheter",
    "Aftonbladet",
    "Expressen",
    "Göteborgs-Posten",
    "Omni",
    "Nyhetsbyrån Siren",
    "Borås Tidning",
    "Breakit",
    "Nyheter24",
    "Svenska Dagbladet",
    "Kvällsposten"
  ],

  /* ── Granskningar ────────────────────────────────────────────── */
  investigations: [
    {
      url:    "https://www.svt.se/nyheter/granskning/polisens-klader-saljs-pa-sellpy-kan-vara-olagligt",
      title:  "Poliskläder säljs på Sellpy — kan vara olagligt",
      desc:   "Avslöjade hur polisens tjänsteklädsel hamnade till försäljning på andrahandsmarknaden — ett säkerhetsproblem med potentiell risk för missbruk av uniformer.",
      source: "SVT Snabbgranskning",
    },
    {
      url:    "https://www.svt.se/nyheter/granskning/aklagare-rojde-kevins-hemliga-adress",
      title:  "Åklagare röjde Kevins hemliga adress",
      desc:   "Undersökte och avslöjade en åklagare som röjde en skyddad persons hemliga adress — en granskning som berör rättsväsendets ansvar för brottsoffer.",
      source: "SVT Snabbgranskning",
    },
    {
      url:    "https://www.svt.se/sport/fotboll/de-ar-portade-fran-allsvenskan-svt-har-kartlagt-personerna-med-tilltradesforbud",
      title:  "De är portade från Allsvenskan",
      desc:   "Kartlade implementeringen av tillträdesförbud i svensk fotboll och granskade systemets tillämpning, rättsliga grunder och de drabbade personerna.",
      source: "SVT Snabbgranskning",
    },
    {
      url:    "https://www.svt.se/nyheter/granskning/socialtjansten-hamtade-stina-efter-sex-ar-i-samma-familjehem",
      title:  "Socialtjänsten hämtade Stina — efter sex år i samma familjehem",
      desc:   "Djupgående granskning av socialvårdsärenden och barnavårdssystemets brister — journalistik som sätter de mest utsatta i centrum.",
      source: "SVT Snabbgranskning",
    },
  ],

  /* ── Kriminaljournalistik ─────────────────────────────────────── */
  krim: [
    {
      url:    "https://www.svt.se/nyheter/lokalt/uppsala/gangmedlem-misstankt-for-trippelmordet-i-uppsala",
      title:  "Gängmedlem misstänkt för trippelmordet i Uppsala",
      source: "SVT Nyheter",
    },
    {
      url:    "https://www.svt.se/nyheter/inrikes/uppgifter-ytterligare-en-diplomat-misstanks-for-brott-i-separat-utredning",
      title:  "Ytterligare en diplomat misstänks för brott",
      source: "SVT Nyheter",
    },
    {
      url:    "https://www.svt.se/nyheter/lokalt/orebro/rickard-andersson-kopte-kryptovaluta-polisen-ber-storbritannien-om-hjalp",
      title:  "Rickard Andersson köpte kryptovaluta — polisen ber Storbritannien om hjälp",
      source: "SVT Örebro",
    },
    {
      url:    "https://www.svt.se/nyheter/inrikes/larmen-till-112-i-orebro-skottskadad-tog-skydd-pa-forskola",
      title:  "Skottskadad tog skydd på förskola i Örebro",
      source: "SVT Nyheter",
    },
    {
      url:    "https://www.dn.se/sverige/utgav-sig-for-att-vara-benjamin-ingrosso-lurade-kvinna-pa-pengar/",
      title:  "Utgav sig för att vara Benjamin Ingrosso — lurade kvinna på pengar",
      source: "DN / Nyhetsbyrån Siren",
    },
    {
      url:    "https://www.bt.se/boras/just-nu-borasare-haktas-for-valdtakt-9cefc842/",
      title:  "Boråsare häktas för våldtäkt",
      source: "Borås Tidning",
    },
  ],

  /* ── Projekt ─────────────────────────────────────────────────── */
  project: {
    badge: "Aktiv plattform",
    title: "fupp — arkivet",
    desc:  "Ett ekosystem byggt kring offentlighetsprincipen: informationsportal, dokumentbibliotek, gratis juridisk rådgivning och specialiserade journalistverktyg. Designat för att demokratisera tillgången till allmänna handlingar.",
    tools: [
      { name: "fupp.se",                url: "https://fupp.se",                                      desc: "Portal om offentlighetsprincipen" },
      { name: "Ålderskalkylatorn",      url: "https://liot.se/alder",            desc: "Ålder från personnummer – direkt i webbläsaren" },
      { name: "Offentlighetsregistret", url: "https://register.liot.se",       desc: "Register över kontaktvägar för allmänna handlingar" },
      { name: "Flashback Scraper",      url: "https://liot.se/fbscraper",                              desc: "Skrapa allt innehåll i en Flashback-tråd" },
      { name: "Våldsdådskollen",        url: "https://valdsdadskollen.liot.se",                        desc: "Bevaka polisiära händelser kopplat till nätverkskriminalitet" },
    ],
  },

  /* ── Kompetenser ─────────────────────────────────────────────── */
  skills: {
    primary:   ["Undersökande journalistik", "Kriminalrapportering", "Offentlighetsprincipen", "Juridik"],
    secondary: [ "Research", "Datajournalistik", "Artificiell Intelligens", "Webbutveckling", "Krypterad kommunikation", "Dokumentanalys", "Rättsbevakning"],
  },

  /* ── Kontaktlänkar ───────────────────────────────────────────── */
  contact: {
    intro: "Använd Signal för krypterad kommunikation.",
    links: [
      {
        label:   "hej@elliotwahl.se",
        url:     "mailto:hej@elliotwahl.se",
        primary: true,
        icon:    "mail",
      },
      {
        label:   "Signal — Krypterat",
        url:     "https://liot.se/signal",
        primary: false,
        icon:    "shield",
      },
      {
        label:   "@elliotwahl.se",
        url:     "https://bsky.app/profile/elliotwahl.se",
        primary: false,
        icon:    "bluesky",
      },
      {
        label:   "LinkedIn",
        url:     "https://linkedin.com/in/elliotwahl",
        primary: false,
        icon:    "linkedin",
      },
    ],
  },
};
