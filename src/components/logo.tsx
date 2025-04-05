import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/icon.png"
            alt="Vandelay Technologies Logo"
            width={28}
            height={28}
            className={cn('size-7', className)}
        />
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn('size-7', className)}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11.5" stroke="currentColor"/>
            <path
                d="M7 8.5L12 16L17 8.5H14L12 12L10 8.5H7Z"
                stroke="currentColor"
            />
        </svg>
    )
}
