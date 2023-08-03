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
    cq,
    nt,
    pwg,
    wd,
    wds,
    cc,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "resume",
        title: "Resume",
    },
    {
        id: "contact",
        title: "Contact",
    }
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
            "Email",
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
        name: "Work Day Scheduler",
        description:
            "An application built to schedule your work day",
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
        image: wds,
        source_code_link: "https://cj-saurus.github.io/Work-Day-Scheduler/",
    },
    {
        name: "Note-Taker",
        description:
            "An application that can be used to write and save notes",
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
        image: nt,
        source_code_link: "https://note-taker3319-a0820813a5b0.herokuapp.com/",
    },
    {
        name: "Craft-Crawler",
        description:
            "An application to create your very own brewery tour for you and your friends",
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
        image: cc,
        source_code_link: "https://craft-crawler.herokuapp.com/",
    },
    {
        name: "Weather Dashboard",
        description:
            "An application that will give you a 5 day weather forecast",
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
        image: wd,
        source_code_link: "https://cj-saurus.github.io/Weather-Dashboard/",
    },
    {
        name: "Code Quiz",
        description:
            "A timed quiz",
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
        image: cq,
        source_code_link: "https://cj-saurus.github.io/Code-Quiz/",
    },
    {
        name: "Password Generator",
        description:
            "An application that can generate a password between 8-128 characters",
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
        image: pwg,
        source_code_link: "https://cj-saurus.github.io/Javascript-Password-Generator/",
    },
];

export { services, technologies, experiences, testimonials, projects };