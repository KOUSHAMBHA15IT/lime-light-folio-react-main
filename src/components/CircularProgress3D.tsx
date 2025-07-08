
import { useEffect, useRef } from 'react';

interface CircularProgress3DProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

const CircularProgress3D = ({ 
  progress, 
  size = 120, 
  strokeWidth = 8, 
  color = '#84cc16' 
}: CircularProgress3DProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = (size - strokeWidth) / 2;

    // Clear canvas
    ctx.clearRect(0, 0, size, size);

    // Background circle (light gray)
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = strokeWidth;
    ctx.stroke();

    // Create gradient for progress arc
    const gradient = ctx.createLinearGradient(
      centerX - radius, centerY - radius,
      centerX + radius, centerY + radius
    );
    gradient.addColorStop(0, '#3b82f6'); // Blue
    gradient.addColorStop(1, '#84cc16'); // Green

    // Progress arc
    const endAngle = (progress / 100) * 2 * Math.PI - Math.PI / 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, endAngle);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = 'round';
    ctx.stroke();

  }, [progress, size, strokeWidth, color]);

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={size}
          height={size}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-foreground">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress3D;
