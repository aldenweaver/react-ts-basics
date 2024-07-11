import { type ReactNode } from "react";

type ImgType = {
    src: string;
    alt: string;
}

type HeaderType = {
    img: ImgType;
    children: ReactNode;
}

export default function Header({ img, children }: HeaderType) {
    return(
        <header>
            <img {...img}/>
            {children}
        </header>
    );
};