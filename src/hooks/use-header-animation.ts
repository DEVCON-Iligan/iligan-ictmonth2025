import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';

export const useHeaderAnimation = (
    showAltHeaderContent: boolean,
    mainHeaderRef: RefObject<HTMLDivElement>,
    altHeaderRef: RefObject<HTMLDivElement>,
) => {
    useEffect(() => {
        if (showAltHeaderContent) {
            gsap.to(mainHeaderRef.current, {
                autoAlpha: 0,
                duration: 0.1,
                onComplete: () => {
                    gsap.set(mainHeaderRef.current, { display: "none" });
                    gsap.set(altHeaderRef.current, { display: "flex" });
                    gsap.to(altHeaderRef.current, {
                        autoAlpha: 1,
                        duration: 0.2
                    });
                }
            });
        } else {
            gsap.to(altHeaderRef.current, {
                autoAlpha: 0,
                duration: 0.1,
                onComplete: () => {
                    gsap.set(altHeaderRef.current, { display: "none" });
                    gsap.set(mainHeaderRef.current, { display: "flex" });
                    gsap.to(mainHeaderRef.current, {
                        autoAlpha: 1,
                        duration: 0.2
                    });
                }
            });
        }
    }, [showAltHeaderContent, mainHeaderRef, altHeaderRef]);
};