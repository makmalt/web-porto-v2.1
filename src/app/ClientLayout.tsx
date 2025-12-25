"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function Providers({ children }) {
    useEffect(() => {
        AOS.init({
            duration: 300,
            easing: "ease-out-cubic",
            once: true, // animasi cuma sekali
        });
    }, []);

    return children;
}
