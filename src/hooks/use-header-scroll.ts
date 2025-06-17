import { useState, useEffect, RefObject } from 'react';

export const useHeaderScroll = (
    headerRef: RefObject<HTMLElement>,
    heroRef: RefObject<HTMLElement>,
) => {
    const [headerClass, setHeaderClass] = useState('');
    const [showAltHeaderContent, setShowAltHeaderContent] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current || !heroRef.current) return;

            const scrollY = window.scrollY;
            const headerHeight = headerRef.current.offsetHeight;
            const heroHeight = heroRef.current.offsetHeight;
            const heroTop = heroRef.current.offsetTop;

            if (scrollY === 0) {
                setHeaderClass('');
            } else {
                setHeaderClass('glass backdrop-blur-lg border-b border-white/10');
            }

            // Change content when scrolled down
            const contentChangeThreshold = heroTop + (heroHeight / 4) - headerHeight;
            if (scrollY > contentChangeThreshold) {
                setShowAltHeaderContent(false);
            } else {
                setShowAltHeaderContent(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [headerRef, heroRef]);

    return { headerClass, showAltHeaderContent };
}