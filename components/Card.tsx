/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

type Variant = 'default' | 'outlined' | 'elevated'

interface CardProps {
    title?: string
    subtitle?: string
    description?: string
    image?: string
    href?: string
    onClick?: (e: React.MouseEvent) => void
    footer?: React.ReactNode
    variant?: Variant
    className?: string
    children?: React.ReactNode
    ariaLabel?: string
}

const baseStyles =
    'rounded-md overflow-hidden shadow-sm bg-white dark:bg-gray-800 transition-colors'
const variantStyles: Record<Variant, string> = {
    default: 'border border-transparent',
    outlined: 'border border-gray-200 dark:border-gray-700',
    elevated: 'shadow-lg',
}

const Card: React.FC<CardProps> = ({
    title,
    subtitle,
    description,
    image,
    href,
    onClick,
    footer,
    variant = 'default',
    className = '',
    children,
    ariaLabel,
}) => {
    const content = (
        <article
            role={href || onClick ? 'button' : 'article'}
            aria-label={ariaLabel ?? title}
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            tabIndex={href || onClick ? 0 : -1}
            onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && onClick) {
                    e.preventDefault()
                    onClick(e as any)
                }
            }}
        >
            {image && (
                <div className="w-full h-44 bg-gray-100 dark:bg-gray-700">
                    <img
                        src={image}
                        alt={title ?? 'card image'}
                        className="object-cover w-full h-full"
                        style={{ display: 'block' }}
                    />
                </div>
            )}

            <div className="p-4">
                {title && <h3 className="text-lg font-semibold">{title}</h3>}
                {subtitle && <p className="text-sm text-gray-500 dark:text-gray-300">{subtitle}</p>}
                {description && <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>}
                {children}
            </div>

            {footer && <div className="px-4 pb-4">{footer}</div>}
        </article>
    )

    if (href) {
        return (
            <a href={href} className="no-underline">
                {content}
            </a>
        )
    }

    return content
}

export default Card