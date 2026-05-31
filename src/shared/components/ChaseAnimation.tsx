'use client';

import { useEffect, useRef, useState } from 'react';

interface LegPosition {
  x: number;
  y: number;
  angle: number;
}

export default function ChaseAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -60, y: 0, rotation: 0, visible: true });
  const [catPos, setCatPos] = useState({ x: -150, y: 0, scaleX: 1, legPhase: 0 });
  const [mouseLegPhase, setMouseLegPhase] = useState(0);
  const [catCarryingMouse, setCatCarryingMouse] = useState(false);

  useEffect(() => {
    const animationDuration = 10000;
    let animationId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime % animationDuration;
      const progress = elapsed / animationDuration;

      const containerWidth = containerRef.current?.offsetWidth || 800;

      let newMouseX = mousePos.x;
      let newMouseY = mousePos.y;
      let newMouseRotation = 0;
      let newMouseVisible = mousePos.visible;
      let newCatX = catPos.x;
      let newCatY = catPos.y;
      let newCatScaleX = catPos.scaleX;
      let newCatCarrying = catCarryingMouse;

      if (progress < 0.55) {
        const chaseProgress = progress / 0.55;
        newMouseX = -60 + chaseProgress * (containerWidth + 120);
        newCatX = -140 + chaseProgress * (containerWidth + 100);
        newCatScaleX = 1;
        newMouseVisible = true;
        newCatCarrying = false;

        const runBounce = Math.abs(Math.sin(chaseProgress * Math.PI * 20)) * 3;
        newMouseY = -runBounce;
        newCatY = -runBounce * 1.2;
        newMouseRotation = Math.sin(chaseProgress * Math.PI * 20) * 3;
      } else if (progress < 0.65) {
        const catchProgress = (progress - 0.55) / 0.1;
        newMouseX = containerWidth - 40;
        newCatX = containerWidth - 100;
        newCatScaleX = 1;

        if (catchProgress < 0.3) {
          const pounce = Math.sin(catchProgress * Math.PI * 3.33) * 15;
          newCatY = -pounce;
          newCatX -= pounce * 0.5;
        } else {
          newCatY = 0;
        }

        if (catchProgress > 0.4) {
          newMouseVisible = false;
          newCatCarrying = true;
        }
      } else if (progress < 0.95) {
        const returnProgress = (progress - 0.65) / 0.3;
        const returnDistance = containerWidth * 0.35;
        newCatX = containerWidth - 100 - returnProgress * returnDistance;
        newCatScaleX = -1;
        newMouseVisible = false;
        newCatCarrying = true;

        const walkBounce = Math.abs(Math.sin(returnProgress * Math.PI * 12)) * 2;
        newCatY = -walkBounce;
      } else {
        const pauseProgress = (progress - 0.95) / 0.05;
        newCatX = containerWidth * 0.65;
        newCatScaleX = -1;
        newCatY = 0;
        newMouseVisible = false;
        newCatCarrying = true;
      }

      setMousePos({
        x: newMouseX,
        y: newMouseY,
        rotation: newMouseRotation,
        visible: newMouseVisible,
      });
      setCatPos({
        x: newCatX,
        y: newCatY,
        scaleX: newCatScaleX,
        legPhase: progress < 0.55 || (progress >= 0.65 && progress < 0.95) ? elapsed * 0.02 : 0,
      });
      setMouseLegPhase(elapsed * 0.025);
      setCatCarryingMouse(newCatCarrying);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const getCatLegs = (phase: number): LegPosition[] => {
    const running = Math.abs(catPos.scaleX) === 1 && catPos.x > -140;
    const amplitude = running ? 12 : 6;
    const frequency = running ? 1 : 0.6;

    return [
      {
        x: 15,
        y: 28 + Math.sin(phase * frequency) * amplitude,
        angle: Math.sin(phase * frequency) * 20,
      },
      {
        x: 25,
        y: 28 + Math.sin(phase * frequency + Math.PI) * amplitude,
        angle: Math.sin(phase * frequency + Math.PI) * 20,
      },
      {
        x: 45,
        y: 28 + Math.sin(phase * frequency + Math.PI / 2) * amplitude,
        angle: Math.sin(phase * frequency + Math.PI / 2) * 15,
      },
      {
        x: 55,
        y: 28 + Math.sin(phase * frequency + Math.PI * 1.5) * amplitude,
        angle: Math.sin(phase * frequency + Math.PI * 1.5) * 15,
      },
    ];
  };

  const getMouseLegs = (phase: number): LegPosition[] => {
    const amplitude = 8;
    return [
      { x: 8, y: 16 + Math.sin(phase) * amplitude, angle: Math.sin(phase) * 25 },
      {
        x: 14,
        y: 16 + Math.sin(phase + Math.PI) * amplitude,
        angle: Math.sin(phase + Math.PI) * 25,
      },
      {
        x: 22,
        y: 16 + Math.sin(phase + Math.PI / 2) * amplitude,
        angle: Math.sin(phase + Math.PI / 2) * 20,
      },
      {
        x: 28,
        y: 16 + Math.sin(phase + Math.PI * 1.5) * amplitude,
        angle: Math.sin(phase + Math.PI * 1.5) * 20,
      },
    ];
  };

  const catLegs = getCatLegs(catPos.legPhase);
  const mouseLegs = getMouseLegs(mouseLegPhase);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-32 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Mouse - facing right */}
      <div
        className="absolute will-change-transform"
        style={{
          left: 0,
          top: '50%',
          transform: `translate(${mousePos.x}px, calc(-50% + ${mousePos.y}px)) rotate(${mousePos.rotation}deg)`,
          opacity: mousePos.visible ? 1 : 0,
          transition: 'opacity 0.1s',
        }}
      >
        <svg width="45" height="28" viewBox="0 0 45 28" fill="none">
          {/* Tail - pointing back */}
          <path
            d={`M 6 16 Q ${2 + Math.sin(mouseLegPhase * 2) * 2} ${10 + Math.cos(mouseLegPhase * 3) * 2} 1 6`}
            stroke="#333"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Body - rounded like silhouette */}
          <ellipse cx="22" cy="15" rx="14" ry="9" fill="#333" />
          {/* Head - rounded */}
          <circle cx="36" cy="12" r="7" fill="#333" />
          {/* Ears - pointed like silhouette */}
          <path d="M 32 7 L 30 2 L 35 6 Z" fill="#333" />
          <path d="M 38 6 L 42 2 L 40 7 Z" fill="#333" />
          {/* Eye */}
          <circle cx="38" cy="11" r="1.5" fill="#fff" />
          <circle cx="38.5" cy="11" r="0.8" fill="#000" />
          {/* Nose */}
          <circle cx="42" cy="13" r="1" fill="#pink" />
          {/* Whiskers */}
          <line x1="42" y1="13" x2="46" y2="11" stroke="#333" strokeWidth="0.5" />
          <line x1="42" y1="13" x2="46" y2="15" stroke="#333" strokeWidth="0.5" />
          {/* Legs */}
          {mouseLegs.map((leg, i) => (
            <g key={i}>
              <line
                x1={12 + i * 6}
                y1="20"
                x2={12 + i * 6 + Math.sin((leg.angle * Math.PI) / 180) * 5}
                y2={
                  22 +
                  (i % 2 === 0
                    ? Math.sin(mouseLegPhase + i) * 3
                    : Math.sin(mouseLegPhase + i + Math.PI) * 3)
                }
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Cat - facing right, silhouette style like reference */}
      <div
        className="absolute will-change-transform"
        style={{
          left: 0,
          top: '50%',
          transform: `translate(${catPos.x}px, calc(-50% + ${catPos.y}px)) scaleX(${catPos.scaleX})`,
        }}
      >
        <svg width="85" height="55" viewBox="0 0 85 55" fill="none">
          {/* Tail - curved up like silhouette */}
          <path
            d={`M 10 38 Q ${5 + Math.sin(catPos.legPhase * 0.5) * 3} ${25 + Math.cos(catPos.legPhase * 0.3) * 2} 8 15`}
            stroke="#000"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Body - sitting/standing posture like silhouette */}
          <ellipse cx="45" cy="32" rx="22" ry="16" fill="#000" />
          {/* Back haunch */}
          <ellipse cx="25" cy="35" rx="12" ry="14" fill="#000" />
          {/* Head - rounded like silhouette */}
          <circle cx="62" cy="22" r="13" fill="#000" />
          {/* Ears - pointed triangles like silhouette */}
          <path d="M 52 14 L 50 4 L 58 12 Z" fill="#000" />
          <path d="M 66 12 L 74 4 L 72 14 Z" fill="#000" />
          {/* Eye */}
          <ellipse cx="66" cy="20" rx="3" ry="4" fill="#ffcc00" />
          <ellipse cx="66" cy="20" rx="1.5" ry="3" fill="#000" />
          <circle cx="67" cy="18" r="1" fill="#fff" />
          {/* Nose */}
          <circle cx="73" cy="24" r="1.5" fill="#pink" />
          {/* Whiskers */}
          <line x1="73" y1="24" x2="80" y2="21" stroke="#000" strokeWidth="0.8" />
          <line x1="73" y1="24" x2="80" y2="27" stroke="#000" strokeWidth="0.8" />
          {/* Mouse in mouth when carrying */}
          {catCarryingMouse && (
            <g transform="translate(68, 26) scale(0.35)">
              <ellipse cx="22" cy="15" rx="14" ry="9" fill="#333" />
              <circle cx="36" cy="12" r="7" fill="#333" />
              <path d="M 32 7 L 30 2 L 35 6 Z" fill="#333" />
              <path d="M 38 6 L 42 2 L 40 7 Z" fill="#333" />
              <circle cx="38" cy="11" r="1.5" fill="#fff" />
              <circle cx="38.5" cy="11" r="0.8" fill="#000" />
              <circle cx="42" cy="13" r="1" fill="#pink" />
            </g>
          )}
          {/* Legs - simplified like silhouette */}
          {catLegs.map((leg, i) => (
            <g key={i}>
              <line
                x1={32 + i * 10}
                y1="42"
                x2={32 + i * 10 + Math.sin((leg.angle * Math.PI) / 180) * 6}
                y2={
                  46 +
                  (i % 2 === 0
                    ? Math.sin(catPos.legPhase + i * 0.5) * 4
                    : Math.sin(catPos.legPhase + i * 0.5 + Math.PI) * 4)
                }
                stroke="#000"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
