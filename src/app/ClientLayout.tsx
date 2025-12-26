"use client";

import { useEffect } from "react";
import AOS from "aos";

type ProvidersProps = {
    children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
    useEffect(() => {
        AOS.init({
            duration: 300,
            easing: "ease-out-cubic",
            once: true, // animasi cuma sekali
        });
    }, []);

    return children;
}
