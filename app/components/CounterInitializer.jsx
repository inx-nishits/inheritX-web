'use client';

import { useEffect } from 'react';
import { useCounterFix } from '../hooks/useCounterFix';
import { usePathname } from 'next/navigation';

export default function CounterInitializer() {
  useCounterFix();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.initCarousels === 'function') {
      window.initCarousels();
    }
  }, [pathname]);

  return null; // This component doesn't render anything
}
