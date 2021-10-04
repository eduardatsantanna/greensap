import { useEffect, useState, useCallback } from "react";

export const useScrollTop = () => {

    const [scrollTop, setScrollTop] = useState(0);

    const onLoad = useCallback((e) => {
        const scroll = e.target.documentElement.scrollTop;
        setScrollTop(scroll);
    }, [setScrollTop]);

    const onScroll = useCallback((e) => {
        const scroll = e.target.documentElement.scrollTop;
        setScrollTop(scroll);
    }, [setScrollTop]);

    useEffect(() => {
        window.addEventListener("onload", onLoad);
        return () => window.removeEventListener("onload", onLoad);
    }, [onLoad]);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    return scrollTop;

}
