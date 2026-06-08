import { useEffect, useRef } from 'react';

export default function Mannequin3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create SVG-based 3D mannequin with CSS animations
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 200 400');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('class', 'mannequin-svg');

    // Define gradients and styles
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    
    const skinGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    skinGradient.setAttribute('id', 'skinGrad');
    skinGradient.setAttribute('x1', '0%');
    skinGradient.setAttribute('y1', '0%');
    skinGradient.setAttribute('x2', '100%');
    skinGradient.setAttribute('y2', '100%');
    
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', '#d4a574');
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', '#c9956f');
    
    skinGradient.appendChild(stop1);
    skinGradient.appendChild(stop2);
    defs.appendChild(skinGradient);

    // Shirt gradient with neon glow
    const shirtGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    shirtGradient.setAttribute('id', 'shirtGrad');
    shirtGradient.setAttribute('x1', '0%');
    shirtGradient.setAttribute('y1', '0%');
    shirtGradient.setAttribute('x2', '100%');
    shirtGradient.setAttribute('y2', '100%');
    
    const shirtStop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    shirtStop1.setAttribute('offset', '0%');
    shirtStop1.setAttribute('stop-color', '#1a1a2e');
    
    const shirtStop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    shirtStop2.setAttribute('offset', '100%');
    shirtStop2.setAttribute('stop-color', '#0f0f1e');
    
    shirtGradient.appendChild(shirtStop1);
    shirtGradient.appendChild(shirtStop2);
    defs.appendChild(shirtGradient);

    // Filter for glow effect
    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter.setAttribute('id', 'glow');
    filter.setAttribute('x', '-50%');
    filter.setAttribute('y', '-50%');
    filter.setAttribute('width', '200%');
    filter.setAttribute('height', '200%');
    
    const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
    feGaussianBlur.setAttribute('stdDeviation', '3');
    feGaussianBlur.setAttribute('result', 'coloredBlur');
    
    const feMerge = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
    const feMergeNode1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
    feMergeNode1.setAttribute('in', 'coloredBlur');
    const feMergeNode2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
    feMergeNode2.setAttribute('in', 'SourceGraphic');
    
    feMerge.appendChild(feMergeNode1);
    feMerge.appendChild(feMergeNode2);
    filter.appendChild(feGaussianBlur);
    filter.appendChild(feMerge);
    defs.appendChild(filter);

    svg.appendChild(defs);

    // Head
    const head = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    head.setAttribute('cx', '100');
    head.setAttribute('cy', '50');
    head.setAttribute('r', '25');
    head.setAttribute('fill', 'url(#skinGrad)');
    head.setAttribute('class', 'mannequin-head');
    svg.appendChild(head);

    // Neck
    const neck = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    neck.setAttribute('x', '90');
    neck.setAttribute('y', '70');
    neck.setAttribute('width', '20');
    neck.setAttribute('height', '15');
    neck.setAttribute('fill', 'url(#skinGrad)');
    svg.appendChild(neck);

    // Shirt body
    const shirtBody = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    shirtBody.setAttribute('d', 'M 60 85 L 50 150 L 50 280 L 150 280 L 150 150 L 140 85 Z');
    shirtBody.setAttribute('fill', 'url(#shirtGrad)');
    shirtBody.setAttribute('stroke', '#00f0ff');
    shirtBody.setAttribute('stroke-width', '1.5');
    shirtBody.setAttribute('filter', 'url(#glow)');
    shirtBody.setAttribute('class', 'mannequin-shirt');
    svg.appendChild(shirtBody);

    // Shirt design pattern (geometric)
    const designGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    designGroup.setAttribute('class', 'shirt-design');

    // Design lines
    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line1.setAttribute('x1', '100');
    line1.setAttribute('y1', '100');
    line1.setAttribute('x2', '100');
    line1.setAttribute('y2', '200');
    line1.setAttribute('stroke', '#ff006e');
    line1.setAttribute('stroke-width', '2');
    line1.setAttribute('opacity', '0.7');
    designGroup.appendChild(line1);

    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line2.setAttribute('x1', '80');
    line2.setAttribute('y1', '140');
    line2.setAttribute('x2', '120');
    line2.setAttribute('y2', '140');
    line2.setAttribute('stroke', '#39ff14');
    line2.setAttribute('stroke-width', '2');
    line2.setAttribute('opacity', '0.7');
    designGroup.appendChild(line2);

    // Triangle design
    const triangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    triangle.setAttribute('points', '100,120 85,160 115,160');
    triangle.setAttribute('fill', 'none');
    triangle.setAttribute('stroke', '#00f0ff');
    triangle.setAttribute('stroke-width', '1.5');
    triangle.setAttribute('opacity', '0.6');
    designGroup.appendChild(triangle);

    svg.appendChild(designGroup);

    // Left arm
    const leftArm = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    leftArm.setAttribute('class', 'mannequin-arm left-arm');
    
    const leftArmRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    leftArmRect.setAttribute('x', '30');
    leftArmRect.setAttribute('y', '90');
    leftArmRect.setAttribute('width', '30');
    leftArmRect.setAttribute('height', '80');
    leftArmRect.setAttribute('fill', 'url(#skinGrad)');
    leftArmRect.setAttribute('rx', '8');
    leftArm.appendChild(leftArmRect);
    svg.appendChild(leftArm);

    // Right arm
    const rightArm = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    rightArm.setAttribute('class', 'mannequin-arm right-arm');
    
    const rightArmRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rightArmRect.setAttribute('x', '140');
    rightArmRect.setAttribute('y', '90');
    rightArmRect.setAttribute('width', '30');
    rightArmRect.setAttribute('height', '80');
    rightArmRect.setAttribute('fill', 'url(#skinGrad)');
    rightArmRect.setAttribute('rx', '8');
    rightArm.appendChild(rightArmRect);
    svg.appendChild(rightArm);

    // Legs
    const leftLeg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    leftLeg.setAttribute('x', '75');
    leftLeg.setAttribute('y', '280');
    leftLeg.setAttribute('width', '20');
    leftLeg.setAttribute('height', '100');
    leftLeg.setAttribute('fill', 'url(#skinGrad)');
    leftLeg.setAttribute('rx', '5');
    svg.appendChild(leftLeg);

    const rightLeg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rightLeg.setAttribute('x', '105');
    rightLeg.setAttribute('y', '280');
    rightLeg.setAttribute('width', '20');
    rightLeg.setAttribute('height', '100');
    rightLeg.setAttribute('fill', 'url(#skinGrad)');
    rightLeg.setAttribute('rx', '5');
    svg.appendChild(rightLeg);

    containerRef.current.appendChild(svg);

    return () => {
      if (containerRef.current && svg.parentNode === containerRef.current) {
        containerRef.current.removeChild(svg);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
      style={{
        perspective: '1000px',
      }}
    >
      <style>{`
        .mannequin-svg {
          filter: drop-shadow(0 0 20px rgba(0, 240, 255, 0.3));
          animation: mannequin-rotate 6s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes mannequin-rotate {
          0%, 100% {
            transform: rotateY(0deg) rotateX(5deg);
          }
          50% {
            transform: rotateY(15deg) rotateX(-5deg);
          }
        }

        .mannequin-head {
          animation: head-nod 3s ease-in-out infinite;
          transform-origin: 100px 50px;
        }

        @keyframes head-nod {
          0%, 100% {
            transform: rotateZ(0deg);
          }
          50% {
            transform: rotateZ(5deg);
          }
        }

        .mannequin-arm {
          transform-origin: 100px 90px;
          animation: arm-wave 2s ease-in-out infinite;
        }

        .left-arm {
          animation: left-arm-wave 2s ease-in-out infinite;
        }

        .right-arm {
          animation: right-arm-wave 2s ease-in-out infinite;
        }

        @keyframes left-arm-wave {
          0%, 100% {
            transform: rotateZ(-20deg);
          }
          50% {
            transform: rotateZ(20deg);
          }
        }

        @keyframes right-arm-wave {
          0%, 100% {
            transform: rotateZ(20deg);
          }
          50% {
            transform: rotateZ(-20deg);
          }
        }

        .mannequin-shirt {
          animation: shirt-pulse 2s ease-in-out infinite;
        }

        @keyframes shirt-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(0, 240, 255, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(0, 240, 255, 0.6));
          }
        }

        .shirt-design {
          animation: design-shimmer 3s ease-in-out infinite;
        }

        @keyframes design-shimmer {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
