import {
	Github,
	Facebook,
	Twitter,
	Linkedin,
	Code2,
	Lightbulb,
	Rocket,
	Users,
} from "lucide-react";
export const NavLinks = [
	{ href: "#about", label: "About" },
	{ href: "#projects", label: "Projects" },
	{ href: "#experience", label: "Experience" },
	{ href: "#testimonials", label: "Testimonials" },
];
export const SocialLinks = [
	{ icon: Github, href: "https://github.com/Kais-Tarraf" },
	{ icon: Linkedin, href: "https://github.com/Kais-Tarraf" },
	{ icon: Facebook, href: "https://github.com/Kais-Tarraf" },
	{ icon: Twitter, href: "https://github.com/Kais-Tarraf" },
];
export const skills = [
	"React",
	"Next.js",
	"TypeScript",
	"Node.js",
	"Tailwind.css",
	"Git",
	"GitHub Actions",
	"SQL Server",
	"PostgreSQL",
	"Prisma",
	"React",
	"Next.js",
	"TypeScript",
	"Node.js",
	"Tailwind.css",
	"Git",
	"GitHub Actions",
	"SQL Server",
	"PostgreSQL",
	"Prisma",
];
export const highlights = [
	{
		icon: Code2,
		title: "Clean Code",
		description:
			"Writing maintainable, scalable code that stands the test of time.",
	},
	{
		icon: Rocket,
		title: "Performance",
		description:
			"Optimizing for speed and delivering lightning-fast user experiences.",
	},
	{
		icon: Users,
		title: "Collaboration",
		description: "Working closely with teams to bring ideas to life.",
	},
	{
		icon: Lightbulb,
		title: "Innovation",
		description:
			"Staying ahead with the latest technologies and best practices.",
	},
];

export const projects = [
	{
		title: "Roomify",
		description:
			"AI-powered website that transforms boring 2D floor plans into realistic 3D designs.",
		image: "/projects/project1.png",
		tags: ["React", "Typescript", "Puter"],
		link: "#",
		github: "#",
	},
	{
		title: "GTA-VI Landing page",
		description: "A beautiful landing page full with animation",
		image: "/projects/project2.png",
		tags: ["React", "GSAP", "Tailwind"],
		link: "#",
		github: "#",
	},
	{
		title: "Brain Wave",
		description:
			"Brainwave is just a landing page with modern layout and some cool animation",
		image: "/projects/project3.png",
		tags: ["React", "GSAP", "Tailwind"],
		link: "#",
		github: "#",
	},
	{
		title: "Mojito Cocktails",
		description: "Sip the spirit of summer",
		image: "/projects/project4.png",
		tags: ["React", "Tailwind", "GSAP"],
		link: "#",
		github: "#",
	},
];

//
export const experiences = [
	{
		period: "2022 — Present",
		role: "Senior Frontend Engineer",
		company: "Tech Innovators Inc.",
		description:
			"Leading frontend architecture for a suite of fintech products. Implemented micro-frontend architecture, reduced bundle size by 40%, and mentored a team of 5 developers.",
		technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
		current: true,
	},
	{
		period: "2020 — 2022",
		role: "Frontend Engineer",
		company: "Digital Solutions Co.",
		description:
			"Built and maintained multiple React applications for enterprise clients. Introduced automated testing practices that improved code coverage to 85%.",
		technologies: ["React", "Redux", "Jest", "Cypress"],
		current: false,
	},
	{
		period: "2019 — 2020",
		role: "Junior Developer",
		company: "StartUp Labs",
		description:
			"Contributed to the development of a SaaS platform from MVP to production. Collaborated with designers to implement pixel-perfect UI components.",
		technologies: ["React", "Node.js", "MongoDB", "AWS"],
		current: false,
	},
	{
		period: "2018 — 2019",
		role: "Freelance Developer",
		company: "Self-Employed",
		description:
			"Delivered custom web solutions for small businesses and startups. Built 15+ websites and applications, handling everything from design to deployment.",
		technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
		current: false,
	},
];