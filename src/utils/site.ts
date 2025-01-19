const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://the-portfolio-lac.vercel.app";

export const siteConfig = {
  name: "Aryan | Full Stack Developer",
  description:
    "Personal portfolio website showcasing my projects and skills as a full stack developer",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    linkedin: "https://www.linkedin.com/in/aryan-mishra-931214243/",
    github: "https://github.com/Aryan-Mac01",
  },
  mailSupport: "aryanmishra3011@gmail.com",
};
