'use client';

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';

export default function BlogImage({ 
    src, 
    alt = '', 
    className = '', 
    fallbackSrc = '/image/blog/img-blog-details-1.jpg',
    width = 400,
    height = 300,
    priority = false
}) {
    const [imageState, setImageState] = useState('loading'); // 'loading', 'loaded', 'error'
    const [currentSrc, setCurrentSrc] = useState(src);

    // Memoize the optimized image URL
    const optimizedSrc = useMemo(() => {
        if (!src || src.startsWith('/')) return src;
        
        // Add optimization parameters for WordPress images
        if (src.includes('admin.inheritx.com')) {
            const url = new URL(src);
            // Add quality and format optimization
            url.searchParams.set('q', '80'); // 80% quality for faster loading
            url.searchParams.set('f', 'webp'); // Prefer WebP format
            return url.toString();
        }
        
        return src;
    }, [src]);

    const handleImageLoad = useCallback(() => {
        setImageState('loaded');
    }, []);

    const handleImageError = useCallback(() => {
        if (currentSrc === optimizedSrc) {
            // First error - try fallback
            setCurrentSrc(fallbackSrc);
            setImageState('loading');
        } else {
            // Second error - show fallback
            setImageState('error');
        }
    }, [currentSrc, optimizedSrc, fallbackSrc]);

    // Update currentSrc when optimizedSrc changes
    useMemo(() => {
        setCurrentSrc(optimizedSrc);
        setImageState('loading');
    }, [optimizedSrc]);

    return (
        <>
            <style jsx>{`
                .image-container {
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    height: auto;
                    display: block;
                }
                
                .loading-placeholder {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
                    background-size: 200% 100%;
                    animation: shimmer 1.5s infinite;
                    z-index: 1;
                    min-height: 200px;
                }
                
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                
                .blog-image {
                    width: 100%;
                    height: auto;
                    display: block;
                    object-fit: cover;
                    transition: opacity 0.3s ease;
                }
                
                .blog-image.loaded {
                    opacity: 1;
                }
                
                .blog-image:not(.loaded) {
                    opacity: 0;
                }

                .error-fallback {
                    width: 100%;
                    height: 200px;
                    background: #2a2a2a;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #666;
                    font-size: 14px;
                }
            `}</style>
            <div className={`image-container ${className}`}>
                {imageState === 'loading' && (
                    <div className="loading-placeholder"></div>
                )}
                {imageState === 'error' ? (
                    <div className="error-fallback">
                        <span>Image not available</span>
                    </div>
                ) : (
                    <Image
                        src={currentSrc}
                        alt={alt}
                        width={width}
                        height={height}
                        className={`blog-image ${className} ${imageState === 'loaded' ? 'loaded' : ''}`}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        priority={priority}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={80}
                        loading={priority ? 'eager' : 'lazy'}
                        // unoptimized={false}
                    />
                )}
            </div>
        </>
    );
}