import { FC, ReactNode } from "react";
import classNames from "classnames";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => {
    return (
        <div
            className={classNames(
                "rounded-2xl shadow-md border border-gray-200 bg-white",
                className
            )}
        >
            {children}
        </div>
    );
};