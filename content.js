const SITE = {

  /* ── Personinfo ──────────────────────────────────────────────── */
  name:     "Elliot Wahl",
  location: "Stockholm, Sverige",
  status:   "Tillgänglig för uppdrag",
  roles:    ["Journalist", "Kriminalreporter"],

  /* ── Om-sektionen ────────────────────────────────────────────── */
  about: {
    title: ["Undersöker", "sanningen"],
    paragraphs: [
      "Nyligen examinerad journalist med ett starkt engagemang för <strong>undersökande journalistik</strong> och kriminalrapportering — driven av övertygelsen att transparens och källskydd är journalistikens ryggrad.",
      "Specialiserad på brott med förgreningar i <strong>gängrelaterade mord</strong>, diplomatisk brottslighet, kryptovalutatransaktioner och väpnade incidenter.",
    ],
    facts: [
      { label: "Position",   value: "Nyhetsbyrån Siren" },
      { label: "Tidigare",   value: "SVT Snabbgranskning — Faktakoll & undersökande redaktion" },
      { label: "Specialitet",value: "Kriminalrapportering · Offentlighetsprincipen · FOIA" },
      { label: "Status",     value: "Söker nya möjligheter och uppdrag" },
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
      { name: "handlingar.fupp.se",     url: "https://handlingar.fupp.se",                           desc: "Dokumentbibliotek för allmänna handlingar" },
      { name: "fraga.fupp.se",          url: "https://fraga.fupp.se",                                desc: "Gratis juridisk FOIA-rådgivning" },
      { name: "lexikon.fupp.se",        url: "https://lexikon.fupp.se",                              desc: "Terminologilexikon för journalister" },
      { name: "Ålderskalkylatorn",      url: "https://fupp.se/verktyg/alderskalkylatorn",            desc: "Ålder från personnummer vid händelse" },
      { name: "Häktningskalkylatorn",   url: "https://fupp.se/verktyg/haktningskalkylatorn",         desc: "Juridisk tidslinje för häktning" },
      { name: "Offentlighetsregistret", url: "https://fupp.se/verktyg/offentlighetsregistret",       desc: "Register över allmänna handlingar" },
      { name: "Fler verktyg →",         url: "https://fupp.se/verktyg",                              desc: "FOIA-generator, riksdagsbevakning m.m." },
      { name: "Fotoportfolio",          url: "https://galleri.elliotwahl.se",                        desc: "galleri.elliotwahl.se" },
    ],
  },

  /* ── Kompetenser ─────────────────────────────────────────────── */
  skills: {
    primary:   ["Undersökande journalistik", "Kriminalrapportering", "Offentlighetsprincipen", "Källskydd"],
    secondary: ["FOIA Research", "Data Journalism", "Faktakoll", "Webbutveckling", "Krypterad kommunikation", "Dokumentanalys", "Rättsbevakning"],
  },

  /* ── Kontaktlänkar ───────────────────────────────────────────── */
  contact: {
    intro: "Tillgänglig för uppdrag, samarbeten och tips via krypterad kanal",
    links: [
      {
        label:   "elliot@elliotwahl.se",
        url:     "mailto:elliot@elliotwahl.se",
        primary: true,
        icon:    "mail",
      },
      {
        label:   "Signal — Krypterat",
        url:     "https://signal.me/#eu/kj1YsqTADIEGeaxhgAJEEa2eDReJ-9NF3EyS-MOv-Fb2RtfM4ItCRq_EA_zDIrOC",
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
      {
        label:   "Fotoportfolio",
        url:     "https://galleri.elliotwahl.se",
        primary: false,
        icon:    "photo",
      },
    ],
  },
};
