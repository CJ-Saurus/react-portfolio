import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Job title",
        company_name: "Company",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Dates worked",
        points: [
            "Job description",
        ],
    },
    {
        title: "Job title",
        company_name: "Company",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Dates worked",
        points: [
            "Job description",
        ],
    },
    {
        title: "Job title",
        company_name: "Company",
        icon: shopify,
        iconBg: "#383E56",
        date: "Dates worked",
        points: [
            "Job description",
        ],
    },
    {
        title: "Job title",
        company_name: "Company",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Dates worked",
        points: [
            "Job description",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Testimonial",
        name: "Name",
        designation: "Position",
        company: "Company",
        image: "",
    },
    {
        testimonial:
            "Testimonial",
        name: "Name",
        designation: "Position",
        company: "Company",
        image: "",
    },
    {
        testimonial:
            "Testimonial",
        name: "Name",
        designation: "Position",
        company: "Company",
        image: "",
    },
];

const projects = [
    {
        name: "Project 1",
        description:
            "Information about Project 1 to be written here",
        tags: [
            {
                name: "technology",
                color: "blue-text-gradient",
            },
            {
                name: "technology",
                color: "green-text-gradient",
            },
            {
                name: "technology",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Project 2",
        description:
            "Information about Project 2 to be written here",
        tags: [
            {
                name: "technology",
                color: "blue-text-gradient",
            },
            {
                name: "technology",
                color: "green-text-gradient",
            },
            {
                name: "technology",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Project 3",
        description:
            "Information about Project 3 to be written here",
        tags: [
            {
                name: "technology",
                color: "blue-text-gradient",
            },
            {
                name: "technology",
                color: "green-text-gradient",
            },
            {
                name: "technology",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };