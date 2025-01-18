const config = {
    layout: {
        metadata: {
            title: "Arafet BenKilani",
            description: "Personal portfolio showcasing my offered services and writeups",
        }
    },
    about: {
        name: "Arafet benKilani",
        skills: ["Cloud", "DevOps", "Web", "Computer networks"],
        contact: {
            emails: ["mr.arafetk@gmail.com","arafet.benkilani@outlook.com"],
            phones: ["+21620714894","+21658769059"],
        },
        socials: [
            {
                label: "GitHub",
                href: "https://github.com/arafetki"
            },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/arafet-ben-kilani"
            },
            {
                label: "Reddit",
                href: "https://www.reddit.com/user/arfoutbenk"
            },
            {
                label: "Whatsapp",
                href: "https://wa.me/21620714894"
            },
        ],
        address: {
            country: "Tunisia",
        }
    },
    navigation: {
        items: [
            {
                title: "About",
                href: "/about",
            },
            {
                title: "Blog",
                href: "/blog",
            },
            {
                title: "Stats",
                href: "/stats",
            },
            {
                title: "Guestbook",
                href: "/guestbook",
            },
        ]
    },
}

export default config