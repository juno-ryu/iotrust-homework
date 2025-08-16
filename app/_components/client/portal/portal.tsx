// components/Portal.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = { children: React.ReactNode; containerId?: string };

export default function Portal({ children, containerId }: PortalProps) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<Element | null>(null);

  useEffect(() => {
    containerRef.current =
      (containerId && document.getElementById(containerId)) || document.body;
    setMounted(true);
  }, [containerId]);

  if (!mounted || !containerRef.current) return null;
  return createPortal(children, containerRef.current);
}
