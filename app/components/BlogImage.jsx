'use client';

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';

export default function BlogImage({ 
    src, 
    alt = '', 
    className = '', 
    fallbackSrc = '/image/blog/blog-fallback.jpg',
    width = 400,
    height = 300,
    priority = false,
    aspectRatio = null,
    shape = 'default', // 'default' | 'cut'
    fit = 'cover' // 'cover' | 'contain'
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
                .image-container.ratio {
                    height: auto;
                    aspect-ratio: ${aspectRatio || 'auto'};
                }
                /* Cut-corner shape (8px default) */
                .image-container.cut {
                    --cut: 12px;
                    -webkit-clip-path: polygon(
                        var(--cut) 0%, 100% 0%, 100% calc(100% - var(--cut)), calc(100% - var(--cut)) 100%, 0% 100%, 0% var(--cut)
                    );
                    clip-path: polygon(
                        var(--cut) 0%, 100% 0%, 100% calc(100% - var(--cut)), calc(100% - var(--cut)) 100%, 0% 100%, 0% var(--cut)
                    );
                }
                /* Make sure the image fully covers the clipped container */
                .image-container.cut .blog-image.fill,
                .image-container.cut .blog-image {
                    object-fit: cover;
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
                .blog-image.fill {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                }
                .blog-image.contain { object-fit: contain; background: transparent; }
                
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
            <div className={`image-container ${aspectRatio ? 'ratio' : ''} ${shape === 'cut' ? 'cut' : ''} ${className}`}>
                {imageState === 'loading' && (
                    <div className="loading-placeholder"></div>
                )}
                {imageState === 'error' ? (
                    <div className="error-fallback">
                        <span>Image not available</span>
                    </div>
                ) : (
                    aspectRatio ? (
                        <Image
                            src={currentSrc}
                            alt={alt}
                            fill
                            className={`blog-image fill ${fit === 'contain' ? 'contain' : ''} ${className} ${imageState === 'loaded' ? 'loaded' : ''}`}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            priority={priority}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={80}
                            loading={priority ? 'eager' : 'lazy'}
                        />
                    ) : (
                        <Image
                            src={currentSrc}
                            alt={alt}
                            width={width}
                            height={height}
                            className={`blog-image ${fit === 'contain' ? 'contain' : ''} ${className} ${imageState === 'loaded' ? 'loaded' : ''}`}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            priority={priority}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={80}
                            loading={priority ? 'eager' : 'lazy'}
                        />
                    )
                )}
            </div>
        </>
    );
}