'use client';

import { useEffect } from 'react';

export default function ImagePreloader({ images = [] }) {
    useEffect(() => {
        // Preload critical images
        images.forEach((imageSrc) => {
            if (imageSrc) {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = imageSrc;
                document.head.appendChild(link);
            }
        });

        // Cleanup function
        return () => {
            images.forEach((imageSrc) => {
                if (imageSrc) {
                    const existingLink = document.querySelector(`link[href="${imageSrc}"]`);
                    if (existingLink) {
                        document.head.removeChild(existingLink);
                    }
                }
            });
        };
    }, [images]);

    return null; // This component doesn't render anything
}
