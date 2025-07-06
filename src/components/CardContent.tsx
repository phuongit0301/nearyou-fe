import { FC, ReactNode } from "react";
import classNames from "classnames";

interface CardContentProps {
    children: ReactNode;
    className?: string;
}

export const CardContent: FC<CardContentProps> = ({ children, className }) => {
    return (
        <div className={classNames("p-4", className)}>
            {children}
        </div>
    );
};