import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    let hover = false;
    const cursor = cursorRef.current!;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };
    
    // Trail effect positions
    const trailPositions: { x: number; y: number }[] = [];
    const trailLength = 15;
    
    // Create trail elements
    for (let i = 0; i < trailLength; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.position = 'fixed';
      trail.style.pointerEvents = 'none';
      trail.style.zIndex = '98';
      
      // Randomly assign shapes (circle, square, pointer)
      const shapes = ['circle', 'square', 'pointer'];
      const shape = shapes[i % shapes.length];
      trail.setAttribute('data-shape', shape);
      
      document.body.appendChild(trail);
      trailRef.current.push(trail);
      trailPositions.push({ x: 0, y: 0 });
    }
    
    document.addEventListener("mousemove", (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    });
    
    requestAnimationFrame(function loop() {
      if (!hover) {
        const delay = 6;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        gsap.to(cursor, { x: cursorPos.x, y: cursorPos.y, duration: 0.1 });
      }
      
      // Update trail
      trailPositions.unshift({ x: mousePos.x, y: mousePos.y });
      if (trailPositions.length > trailLength) {
        trailPositions.pop();
      }
      
      trailPositions.forEach((pos, index) => {
        const trail = trailRef.current[index];
        if (trail) {
          const opacity = 1 - (index / trailLength);
          const scale = 1 - (index / trailLength) * 0.8;
          trail.style.left = pos.x + 'px';
          trail.style.top = pos.y + 'px';
          trail.style.opacity = opacity.toString();
          trail.style.transform = `translate(-50%, -50%) scale(${scale})`;
        }
      });
      
      requestAnimationFrame(loop);
    });
    
    document.querySelectorAll("[data-cursor]").forEach((item) => {
      const element = item as HTMLElement;
      element.addEventListener("mouseover", (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();

        if (element.dataset.cursor === "icons") {
          cursor.classList.add("cursor-icons");
          gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.1 });
          cursor.style.setProperty("--cursorH", `${rect.height}px`);
          hover = true;
        }
        if (element.dataset.cursor === "disable") {
          cursor.classList.add("cursor-disable");
        }
      });
      element.addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-disable", "cursor-icons");
        hover = false;
      });
    });
    
    return () => {
      trailRef.current.forEach(trail => trail.remove());
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
