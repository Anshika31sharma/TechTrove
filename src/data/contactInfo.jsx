import LinkedIn, { GitHub, GMail, Telegram, Resume } from "../components/Icons";
import ResumeLink from "../assets/resume.pdf"
const contactInfo = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/anshika-sharma-58280a201/",
        icon: <LinkedIn />,
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/Anshika31sharma",
        icon: <GitHub />,
    },
    {
        id: 3,
        name: "Mail",
        link: "mailto:sharma.anshika7251@gmail.com",
        icon: <GMail />,
    },

    {
        id: 4,
        name: "Telegram",
        link: "https://t.me/Silent_eyes_31_10",
        icon: <Telegram />,
    },
    {
        id: 5,
        name: "Resume",
        link: ResumeLink,
        icon: <Resume />,
        download: true
    }
   
];

export default contactInfo;