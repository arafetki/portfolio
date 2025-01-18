import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/whatsapp'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import 'react-social-icons/reddit'
import { cn } from '@/utils/tailwind'

interface SocialsProps extends React.HTMLAttributes<HTMLUListElement> {
    items: {
        label: string
        href: string
    }[];
    iconSize?: string;
};

export default function Socials({ items , iconSize = "28px", className, ...props }: SocialsProps) {
    return (
        <ul className={cn("flex items-center gap-3",className)} {...props}>
            {items.map(item=> {
                return (
                    <li key={item.label} className='hover:-translate-y-2 transition-all duration-500 ease-in-out'>
                        <SocialIcon
                            network={item.label.toLocaleLowerCase()}
                            href={item.href}
                            aria-label={item.label}
                            style={{ width: iconSize, height: iconSize }}
                        />
                    </li>
                )
            })}
        </ul>
    )
}