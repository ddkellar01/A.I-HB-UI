'use client';

import { useEffect, useRef } from 'react';

export function MatrixHeartbeat() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();

    const characters = '01';
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array.from(
      { length: columns },
      () => Math.random() * (canvas.height / fontSize)
    );

    const heartbeatPattern = [
      [0, 0], [30, 0], [40, -15], [50, 0], [70, 0],
      [85, 30], [110, -220], [130, 50], [145, 0],
      [160, 0], [175, -25], [190, 0], [350, 0]
    ];

    const drawMatrixRain = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#006600';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const drawHeartbeat = () => {
      const centerY = canvas.height / 2;

      ctx.save();
      ctx.beginPath();
      let currentX = 0;
      ctx.moveTo(0, centerY);

      while (currentX < canvas.width) {
        for (let i = 0; i < heartbeatPattern.length; i++) {
          const pointX = currentX + heartbeatPattern[i][0];
          const pointY = centerY + heartbeatPattern[i][1];
          ctx.lineTo(pointX, pointY);
        }
        currentX += heartbeatPattern[heartbeatPattern.length - 1][0];
      }

      ctx.strokeStyle = '#33ff33';
      ctx.lineWidth = 6;
      ctx.shadowBlur = 25;
      ctx.shadowColor = '#00ff00';
      ctx.lineJoin = 'round';
      ctx.stroke();

      ctx.strokeStyle = '#ccffcc';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      // Clear rect allows the CSS grid behind the canvas to remain visible
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawMatrixRain();
      drawHeartbeat();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => {
      handleResize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from(
        { length: columns },
        () => Math.random() * (canvas.height / fontSize)
      );
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10 h-full w-full pointer-events-none bg-black"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 150, 0, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 150, 0, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}
    >
      <canvas ref={canvasRef} className="h-full w-full block" />
    </div>
  );
}
