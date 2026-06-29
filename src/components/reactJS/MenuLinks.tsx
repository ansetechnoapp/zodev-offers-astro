import React from "react";
import { RiHome5Line, RiBriefcase2Line, RiToolsFill, RiMailLine } from "react-icons/ri";

interface MenuLinksProps {
    namepage?: string;
    pathname: string;
}

interface IconLink {
    icon: React.ReactNode;
    href: string;
    label: string;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ namepage, pathname }) => {
    const isActiveLink = (href: string) => {
        if (href === "/#hero") {
            return pathname === "/";
        }

        return false;
    };

    const getIconLinks = (): IconLink[] => {
        return [
            {
                icon: <RiHome5Line size={20} />,
                href: "/#hero",
                label: "Accueil"
            },
            {
                icon: <RiBriefcase2Line size={20} />,
                href: "/#offers",
                label: "Offres"
            },
            {
                icon: <RiToolsFill size={20} />,
                href: "/#method",
                label: "Méthode"
            },
            {
                icon: <RiToolsFill size={20} />,
                href: "/#process",
                label: "Process"
            },
            {
                icon: <RiMailLine size={20} />,
                href: "/#contact",
                label: "Contact"
            }
        ];
    };

    return (
        <ul className="menu-links-container">
            {getIconLinks().map(({ href, icon, label }) => (
                <li key={href}>
                    <a
                        aria-current={isActiveLink(href)}
                        href={href}
                        className={`menu-link-item ${isActiveLink(href) ? "active" : ""}`}
                        title={label}
                    >
                        {icon}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default MenuLinks;
