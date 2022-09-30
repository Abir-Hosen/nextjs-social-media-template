import { FunctionComponent, ReactNode } from "react";
import clsx from 'clsx';
import { Header } from "components/media/header";
import { FooterPartial } from "./partials/Footer.partial";

export interface PublicLayoutProps {
    className?: string;
    children: ReactNode;
}

export const PublicLayout: FunctionComponent<PublicLayoutProps> = ({
    className,
    children,
}) => {
    return (
        <>
            <Header />
            <div className={clsx(className)}>
                {children}
            </div>
            <FooterPartial />
        </>
    )
}