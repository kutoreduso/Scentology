import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Step 1: Wait 2 seconds, then start the fade-out effect
        const startFadeTimer = setTimeout(() => {
            setFadeOut(true); 
        }, 2000); 

        // Step 2: Wait 1 second for the fade animation to finish, then unmount
        const removeTimer = setTimeout(() => {
            onComplete(); 
        }, 3000); 

        return () => {
            clearTimeout(startFadeTimer);
            clearTimeout(removeTimer);
        };
    }, [onComplete]);

    return (
        <div 
            className={`fixed inset-0 z-9999 bg-black transition-opacity duration-1000 ease-in-out ${
                fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
        >
            {/* Purely black screen, no text inside */}
        </div>
    );
};

export default LoadingScreen;