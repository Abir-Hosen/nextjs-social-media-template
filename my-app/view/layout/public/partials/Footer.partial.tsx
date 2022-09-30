import { FunctionComponent, HTMLAttributes } from "react";

export interface FooterPartialsProps extends HTMLAttributes<HTMLDivElement> {
    childer?: never;
}

export const FooterPartial: FunctionComponent<FooterPartialsProps> = () => {
    return (
        <>
            here is public footer
        </>
    )
}