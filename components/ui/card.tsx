interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Card({ children, className, ...props }: CardProps) {
    return (
        <div className={`rounded-lg border p-4 ${className}`} {...props}>
            {children}
        </div>
    );
} 