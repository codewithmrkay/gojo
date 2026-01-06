import Link from "next/link";
import { usePathname } from 'next/navigation'
import {
    Youtube,
    Linkedin,
    Instagram,
    Github,
    Mail,
} from "lucide-react";
import { soundManager } from "@/lib/sound/SoundManager";

const ICON_MAP = {
    youtube: Youtube,
    linkedin: Linkedin,
    instagram: Instagram,
    github: Github,
    mail: Mail,
};
const LABEL_MAP = {
    youtube: ' / @Code_Gully',
    linkedin: ' / karan-kadam-777621366',
    instagram: ' / ig_kk.dev',
    github: ' / codewithmrkay',
    mail: ' / kkadam58707@GMAIL.COM',
};

export const ContactList2 = ({ items = [] }) => {
    return (
        <>
            {items.map((item) => {
                const Icon = ICON_MAP[item.type];
                const LABEL = LABEL_MAP[item.type];
                return (
                    <li
                        key={item.href}
                        className=" p-1 rounded-full relative text-2xl hover:scale-105"
                        onMouseEnter={() => soundManager.play("hover")}
                    >
                        <Link
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => soundManager.play("whoosh")}
                            className="flex items-center gap-1 justify-start opacity-70 hover:opacity-100 transition"
                        >
                            <Icon className="w-7 h-7" />
                        <span>{`${LABEL}`}</span>
                        </Link>
                    </li>
                );
            })}
        </>
    );
};
