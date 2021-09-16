import { useEffect, useState } from "react";

export const useScrollTop = () => {

    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onLoad = e => {
            const scroll = e.target.documentElement.scrollTop;
            setScrollTop(scroll);
        };
        window.addEventListener("onload", onLoad);
        return () => window.removeEventListener("onload", onLoad);
    }, []);

    useEffect(() => {
        const onScroll = e => {
            const scroll = e.target.documentElement.scrollTop;
            setScrollTop(scroll);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return scrollTop;

}
