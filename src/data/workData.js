import LeahWilliamson from "../assets/png/leah-williamson.png";
import AlexGreenwood from "../assets/png/alex-greenwood.png";
import AlessiaRusso from "../assets/png/alessia-russo.png";
import PersonalWebsite from "../assets/png/personal-portfolio.png";
import FirstWebsite from "../assets/png/first-website.png";
import { Link } from "react-router-dom";

const data = [
    {
        index: "01",
        name: "leah williamson",
        picture: LeahWilliamson,
        year: "2024",
        link: "https://www.behance.net/gallery/191257921/Leah-Williamson-Website-Concept",
        month: "february",
        description: "web design concept",
        skills: [
            "figma",
            "ux/ui",
        ],
    },
    {
        index: "02",
        name: "alex greenwood",
        picture: AlexGreenwood,
        link: "https://www.behance.net/gallery/190305471/Alex-Greenwood-Website-Concept",
        year: "2024",
        month: "january",
        description: "web design concept",
        skills: [
            "figma",
            "ux/ui",
        ],
    },
    {
        index: "03",
        name: "alessia russo",
        picture: AlessiaRusso,
        link: "https://www.behance.net/gallery/191444731/Alessia-Russo-Website-Concept",
        year: "2024",
        month: "february",
        description: "web design concept",
        skills: [
            "figma",
            "ux/ui",
        ],
    },
    {
        index: "04",
        name: "personal website",
        picture: PersonalWebsite,
        year: "2024",
        link: "https://elizadoltuofficial.net",
        month: "february",
        description: "web development",
        skills: [
            "html5",
            "css3",
            "javascript",
            "reactjs",
            "tailwind",
            "gsap",
            "figma"
        ],
    },
    {
        index: "05",
        name: "first website",
        picture: FirstWebsite,
        year: "2023",
        link: "https://elizadoltuofficial.net",
        month: "september",
        description: "web development",
        skills: [
            "html5",
            "css3",
            "javascript"
        ],
    },
];

export default data;
