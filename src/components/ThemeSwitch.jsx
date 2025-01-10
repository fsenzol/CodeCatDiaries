import React, {useContext, useEffect, useRef} from "react";
import Context from "@/context/DarkModeProvider.jsx";
import {MoonStar, SunMoon} from "lucide-react";
import gsap from "gsap";
import {MemoizedSun} from "@/components/MemoizedSun.js";
import {MemoizedMoon} from "@/components/MemoizedMoon.js";

const ThemeSwitch = () => {
    const context = useContext(Context);
    const iconRef = useRef(null);


    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(context.darkMode ? "dark" : "light");


    }, [context.darkMode]);

    return (
        <div onClick={() => {
            const tl = gsap.timeline();

            // Move the icon up and fade it out
            tl.to(iconRef.current, {
                duration: 0.3,
                y: -100,   // Move it upward
                opacity: 0, // Fade it out
                ease: "power3.out",
            }).set(iconRef.current, {y: 100, opacity: 0, delay: 0.8}).to(iconRef.current, {
                    duration: 0.3,
                    delay: 1,
                    y: 0,      // Move back to center
                    opacity: 1, // Fade back in
                    ease: "power3.in",
                });

            setTimeout(() => {
                context.setDarkMode(prevDarkMode => !prevDarkMode);
                localStorage.setItem("theme", context.darkMode);
            }, 3000)

        }
        } className="overflow-hidden h-full p-4">
            {context.darkMode ? (
                <MemoizedMoon className="transition-all duration-500" ref={iconRef}/>
            ) : (
                <MemoizedSun className="transition-all duration-500" ref={iconRef}/>
            )}
        </div>
    );
};

export default ThemeSwitch;
