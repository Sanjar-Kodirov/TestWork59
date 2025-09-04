"use client";

import { useEffect } from 'react';
import { useAuthStore } from '@/store/useAuthStore';

export default function AuthHydrator() {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const res = await fetch('/api/me', { cache: 'no-store' });
        const json = await res.json();
        if (!isMounted) return;
        setUser(json?.user || null);
      } catch {
        if (!isMounted) return;
        setUser(null);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [setUser]);

  return null;
}
