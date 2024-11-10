export const SITE_METADATA = {
  title: "Arafet BenKilani",
  description:
    "Personal portfolio and blog showcasing my offered services and writeups",
};

export const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const PROFILE = {
  fullName: "Arafet BenKilani",
  email: "mr.arafetk@gmail.com",
  phoneNumbers: ["+21620714894"],
  photo: "/me.jpg",
  address: {
    city: "Houaria",
    country: "Tunisia",
  },
  bio: "Hey! I am Arafet BenKilani, a recent Engineering Graduate from SUPCOM and a Cloud DevSecOps Enthusiast based in Tunisia.",
  resumeURL: `${process.env.NEXT_PUBLIC_SITE_URL}/resume.pdf`,
};
