import { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bubbles: any[] = [];
    for (let i = 0; i < 60; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 5 + 2,
        speed: Math.random() * 2 + 0.8
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 215, 0, 0.3)';
      bubbles.forEach(b => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
        b.y -= b.speed;
        b.x += Math.sin(b.y / 40) * 1.2;
        if (b.y < 0) b.y = canvas.height;
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-[url('/assets/main-background.png')] bg-cover bg-center opacity-90" />
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
    </>
  );
}
