export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'

export const SITE_METADATA = {
    title: "Arafet BenKilani",
    description: "Personal portfolio and blog showcasing my offered services and writeups"
}

export const NAV_ITEMS = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Blog",
        href: "/blog"
    },
    {
        name: "Contact",
        href: "/contact"
    }
]


export const PROFILE = {
    fullName: "Arafet BenKilani",
    email: "mr.arafetk@gmail.com",
    phoneNumbers: ["+21620714894"],
    photo: "/me.jpg",
    address: {
        city: "Houaria",
        country: "Tunisia"
    },
    bio: "Hey! I am Arafet BenKilani, a fresh Engineering Graduate from SUPCOM and a Cloud DevSecops Enthusiast based in Tunisia.",
    resume: "/resume.pdf"
}


export const SOCIAL_LINKS = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/arafet-ben-kilani"
    },
    {
        name: "GitHub",
        href: "https://github.com/arafetki"
    },
    {
        name: "Reddit",
        href: "https://www.reddit.com/user/arfoutbenk"
    }
]
