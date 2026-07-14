import { PUBLIC_ARTALK_ENABLED, PUBLIC_ARTALK_SERVER } from "astro:env/server";

const artalkServer = PUBLIC_ARTALK_SERVER?.trim() || "";
const artalkEnabled =
  PUBLIC_ARTALK_ENABLED === undefined
    ? Boolean(artalkServer)
    : PUBLIC_ARTALK_ENABLED;

const site = {
  // --- Site Metadata ---
  meta: {
    title: "Joshua Sintos",
    description: "Software Engineer with 2+ years of experience building scalable systems",
    author: "Joshua Sintos",
    logo: "/favicon.ico",
    ogImage: "/favicon.ico",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "en",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "Home", subtitle: "Index", href: "/" },
    { name: "About", subtitle: "Me", href: "/about" },
    { name: "Projects", subtitle: "Works", href: "/projects" },
    { name: "Skills", subtitle: "Things I've worked with", href: "/tools" },
  ],

  // --- Social Links ---
  social: [
    { name: "Email", href: "mailto:sintosjm@gmail.com", icon: "mdi:email" },
    { name: "GitHub", href: "https://github.com/JSintos", icon: "mdi:github" },
    { name: "LinkedIn", href: "https://linkedin.com/in/sintosjm", icon: "mdi:linkedin" },
  ],

  friendCard: {
    name: "Breeze",
    description: "A minimal Astro theme for personal websites",
    link: "https://your-domain.com",
    avatar: "https://your-domain.com/logo.svg",
  },

  // --- Homepage Hero ---
  hero: {
    greeting: "👋 Hi there! I'm Joshua Sintos",
    // Supports HTML. Use <span class="font-medium text-foreground underline decoration-primary/30"> to highlight keywords
    description:
      'I\'m a Software Engineer with 2+ years of experience automating workflows, building scalable systems, and creating solutions to problems.',
    cards: [
      { icon: "mdi:explore", label: "Status", value: "Building something cool" },
      { icon: "mdi:location", label: "Location", value: "Earth" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "© 2026 Joshua Sintos",
    builtWith: "Built with Astro Breeze",
  },

  // --- Comments ---
  comments: {
    enabled: artalkEnabled,
    provider: "artalk" as const,
    artalk: {
      server: artalkServer,
    },
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: true,
    // Auto-mark posts as "new" if published within this many days (0 to disable)
    newPostDays: 7,
  },

  // --- Tools Page Data ---
  // Each item can use either `icon` (Iconify name) or `logo` (public path or { light, dark } paths)
  tools: [
    {
      name: "programming languages",
      items: [
        { name: "HTML", icon: "mdi:language-html5" },
        { name: "CSS", icon: "mdi:language-css3" },
        { name: "Java", icon: "mdi:language-java" },
        { name: "TypeScript", icon: "mdi:language-typescript" },
        { name: "PHP", icon: "mdi:language-php" },
        { name: "Python", icon: "mdi:language-python" },
      ]
    },
    {
      name: "frameworks, libraries, & databases",
      items: [
        { name: "Node", icon: "mdi:nodejs" },
        { name: "Express" },
        { name: "React", icon: "mdi:react" },
        { name: "Vue", icon: "mdi:vuejs" },
        { name: "Laravel", icon: "mdi:laravel" },
        { name: "REST API", icon: "mdi:api" },
        { name: "GraphQL", icon: "mdi:graphql" },
        { name: "MySQL", icon: "mdi:database-search" },
        { name: "PostgreSQL", icon: "mdi:database-search" },
        { name: "Redis", icon: "mdi:database-search" },
        { name: "MongoDB", icon: "mdi:database-search" },
      ]
    },
    {
      name: "tools & practices",
      items: [
        { name: "Git", icon: "mdi:git" },
        { name: "Docker", icon: "mdi:docker" },
        { name: "AWS", icon: "mdi:aws" },
        { name: "Kafka", icon: "mdi:apache-kafka" },
        { name: "Jest", icon: "mdi:test-tube" },
        { name: "Playwright", icon: "mdi:test-tube" },
        { name: "Claude" },
        { name: "Microservices" },
        { name: "CI/CD" },
        { name: "Agile", icon: "mdi:account-group" },
        { name: "Scrum", icon: "mdi:account-group" }
      ]
    },
  ],

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "Writing",
    postsDescription: "Notes, thoughts, and technical musings",
    projectsTitle: "Projects",
    projectsDescription: "Things I've worked on",
    friendsTitle: "Friends",
    friendsDescription: "Like-minded folks around the web.",
    toolsTitle: "Skills",
    aboutTitle: "About",
    aboutDescription: "About this site and its author",
    backToPosts: "Back to posts",
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription: "The page you're looking for may have been removed or the link is broken.",
    endOfPost: "End of Post",
    tableOfContents: "Table of Contents",
    searchPlaceholder: "Search posts, tags, or commands...",
    searchNavigate: "Navigate",
    commentSuccess: "Comment submitted",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
