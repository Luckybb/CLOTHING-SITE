import { useEffect, useRef } from 'react';

interface RealisticMannequin3DProps {
  designImage?: string;
  shirtColor?: string;
}

export default function RealisticMannequin3D({ designImage, shirtColor = '#1a1a2e' }: RealisticMannequin3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create SVG-based realistic 3D mannequin
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 300 600');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('class', 'mannequin-svg-realistic');

    // Define gradients and styles
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    
    // Skin gradient - more realistic
    const skinGradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
    skinGradient.setAttribute('id', 'skinGradRealistic');
    skinGradient.setAttribute('cx', '40%');
    skinGradient.setAttribute('cy', '40%');
    
    const skinStop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    skinStop1.setAttribute('offset', '0%');
    skinStop1.setAttribute('stop-color', '#e8c4a0');
    
    const skinStop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    skinStop2.setAttribute('offset', '100%');
    skinStop2.setAttribute('stop-color', '#c9956f');
    
    skinGradient.appendChild(skinStop1);
    skinGradient.appendChild(skinStop2);
    defs.appendChild(skinGradient);

    // Shirt gradient
    const shirtGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    shirtGradient.setAttribute('id', 'shirtGradRealistic');
    shirtGradient.setAttribute('x1', '0%');
    shirtGradient.setAttribute('y1', '0%');
    shirtGradient.setAttribute('x2', '100%');
    shirtGradient.setAttribute('y2', '100%');
    
    const shirtStop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    shirtStop1.setAttribute('offset', '0%');
    shirtStop1.setAttribute('stop-color', shirtColor);
    
    const shirtStop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    shirtStop2.setAttribute('offset', '100%');
    shirtStop2.setAttribute('stop-color', '#0f0f1e');
    
    shirtGradient.appendChild(shirtStop1);
    shirtGradient.appendChild(shirtStop2);
    defs.appendChild(shirtGradient);

    // Hair gradient
    const hairGradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
    hairGradient.setAttribute('id', 'hairGrad');
    hairGradient.setAttribute('cx', '35%');
    hairGradient.setAttribute('cy', '35%');
    
    const hairStop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    hairStop1.setAttribute('offset', '0%');
    hairStop1.setAttribute('stop-color', '#3d2817');
    
    const hairStop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    hairStop2.setAttribute('offset', '100%');
    hairStop2.setAttribute('stop-color', '#1a0f0a');
    
    hairGradient.appendChild(hairStop1);
    hairGradient.appendChild(hairStop2);
    defs.appendChild(hairGradient);

    // Filter for glow and shadow
    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter.setAttribute('id', 'glow-realistic');
    filter.setAttribute('x', '-50%');
    filter.setAttribute('y', '-50%');
    filter.setAttribute('width', '200%');
    filter.setAttribute('height', '200%');
    
    const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
    feGaussianBlur.setAttribute('stdDeviation', '4');
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

    // Shadow filter
    const shadowFilter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    shadowFilter.setAttribute('id', 'shadow');
    shadowFilter.setAttribute('x', '-50%');
    shadowFilter.setAttribute('y', '-50%');
    shadowFilter.setAttribute('width', '200%');
    shadowFilter.setAttribute('height', '200%');
    
    const feOffset = document.createElementNS('http://www.w3.org/2000/svg', 'feOffset');
    feOffset.setAttribute('in', 'SourceGraphic');
    feOffset.setAttribute('dx', '2');
    feOffset.setAttribute('dy', '4');
    
    const feGaussianBlur2 = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
    feGaussianBlur2.setAttribute('in', 'feOffset');
    feGaussianBlur2.setAttribute('stdDeviation', '3');
    feGaussianBlur2.setAttribute('result', 'offsetblur');
    
    const feFlood = document.createElementNS('http://www.w3.org/2000/svg', 'feFlood');
    feFlood.setAttribute('flood-color', '#000000');
    feFlood.setAttribute('flood-opacity', '0.5');
    feFlood.setAttribute('result', 'offsetcolor');
    
    const feComposite = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite');
    feComposite.setAttribute('in', 'offsetcolor');
    feComposite.setAttribute('in2', 'offsetblur');
    feComposite.setAttribute('operator', 'in');
    feComposite.setAttribute('result', 'offsetblur');
    
    const feMerge2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
    const feMergeNode3 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
    feMergeNode3.setAttribute('in', 'offsetblur');
    const feMergeNode4 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
    feMergeNode4.setAttribute('in', 'SourceGraphic');
    
    feMerge2.appendChild(feMergeNode3);
    feMerge2.appendChild(feMergeNode4);
    shadowFilter.appendChild(feOffset);
    shadowFilter.appendChild(feGaussianBlur2);
    shadowFilter.appendChild(feFlood);
    shadowFilter.appendChild(feComposite);
    shadowFilter.appendChild(feMerge2);
    defs.appendChild(shadowFilter);

    svg.appendChild(defs);

    // Hair
    const hair = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    hair.setAttribute('d', 'M 120 40 Q 100 20 150 20 Q 200 20 180 40 Q 175 35 150 35 Q 125 35 120 40');
    hair.setAttribute('fill', 'url(#hairGrad)');
    hair.setAttribute('class', 'mannequin-hair');
    svg.appendChild(hair);

    // Head
    const head = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    head.setAttribute('cx', '150');
    head.setAttribute('cy', '80');
    head.setAttribute('r', '40');
    head.setAttribute('fill', 'url(#skinGradRealistic)');
    head.setAttribute('filter', 'url(#shadow)');
    head.setAttribute('class', 'mannequin-head-realistic');
    svg.appendChild(head);

    // Eyes
    const leftEye = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    leftEye.setAttribute('cx', '135');
    leftEye.setAttribute('cy', '75');
    leftEye.setAttribute('rx', '5');
    leftEye.setAttribute('ry', '7');
    leftEye.setAttribute('fill', '#ffffff');
    svg.appendChild(leftEye);

    const rightEye = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    rightEye.setAttribute('cx', '165');
    rightEye.setAttribute('cy', '75');
    rightEye.setAttribute('rx', '5');
    rightEye.setAttribute('ry', '7');
    rightEye.setAttribute('fill', '#ffffff');
    svg.appendChild(rightEye);

    // Pupils
    const leftPupil = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    leftPupil.setAttribute('cx', '135');
    leftPupil.setAttribute('cy', '77');
    leftPupil.setAttribute('r', '3');
    leftPupil.setAttribute('fill', '#1a1a2e');
    leftPupil.setAttribute('class', 'mannequin-pupil');
    svg.appendChild(leftPupil);

    const rightPupil = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    rightPupil.setAttribute('cx', '165');
    rightPupil.setAttribute('cy', '77');
    rightPupil.setAttribute('r', '3');
    rightPupil.setAttribute('fill', '#1a1a2e');
    rightPupil.setAttribute('class', 'mannequin-pupil');
    svg.appendChild(rightPupil);

    // Nose
    const nose = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    nose.setAttribute('d', 'M 150 80 L 148 95 L 152 95');
    nose.setAttribute('stroke', '#b8856f');
    nose.setAttribute('stroke-width', '1.5');
    nose.setAttribute('fill', 'none');
    svg.appendChild(nose);

    // Mouth
    const mouth = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    mouth.setAttribute('d', 'M 140 105 Q 150 110 160 105');
    mouth.setAttribute('stroke', '#a0725f');
    mouth.setAttribute('stroke-width', '1.5');
    mouth.setAttribute('fill', 'none');
    svg.appendChild(mouth);

    // Neck
    const neck = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    neck.setAttribute('x', '135');
    neck.setAttribute('y', '115');
    neck.setAttribute('width', '30');
    neck.setAttribute('height', '25');
    neck.setAttribute('fill', 'url(#skinGradRealistic)');
    neck.setAttribute('filter', 'url(#shadow)');
    svg.appendChild(neck);

    // Shoulders
    const shoulders = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    shoulders.setAttribute('cx', '150');
    shoulders.setAttribute('cy', '140');
    shoulders.setAttribute('rx', '65');
    shoulders.setAttribute('ry', '20');
    shoulders.setAttribute('fill', '#d4a574');
    shoulders.setAttribute('opacity', '0.8');
    svg.appendChild(shoulders);

    // Shirt body - main
    const shirtBody = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    shirtBody.setAttribute('d', 'M 90 140 L 70 200 L 65 450 L 235 450 L 230 200 L 210 140 Z');
    shirtBody.setAttribute('fill', 'url(#shirtGradRealistic)');
    shirtBody.setAttribute('stroke', '#00f0ff');
    shirtBody.setAttribute('stroke-width', '1');
    shirtBody.setAttribute('filter', 'url(#glow-realistic)');
    shirtBody.setAttribute('class', 'mannequin-shirt-realistic');
    svg.appendChild(shirtBody);

    // Shirt design area - where user design will be placed
    const designArea = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    designArea.setAttribute('id', 'design-area');
    designArea.setAttribute('x', '95');
    designArea.setAttribute('y', '170');
    designArea.setAttribute('width', '110');
    designArea.setAttribute('height', '140');
    designArea.setAttribute('fill', 'none');
    designArea.setAttribute('class', 'design-area');
    svg.appendChild(designArea);

    // Shirt seams for detail
    const leftSeam = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    leftSeam.setAttribute('x1', '115');
    leftSeam.setAttribute('y1', '140');
    leftSeam.setAttribute('x2', '110');
    leftSeam.setAttribute('y2', '450');
    leftSeam.setAttribute('stroke', '#000000');
    leftSeam.setAttribute('stroke-width', '0.5');
    leftSeam.setAttribute('opacity', '0.3');
    svg.appendChild(leftSeam);

    const rightSeam = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    rightSeam.setAttribute('x1', '185');
    rightSeam.setAttribute('y1', '140');
    rightSeam.setAttribute('x2', '190');
    rightSeam.setAttribute('y2', '450');
    rightSeam.setAttribute('stroke', '#000000');
    rightSeam.setAttribute('stroke-width', '0.5');
    rightSeam.setAttribute('opacity', '0.3');
    svg.appendChild(rightSeam);

    // Left arm
    const leftArmUpper = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    leftArmUpper.setAttribute('d', 'M 90 145 Q 40 160 35 220');
    leftArmUpper.setAttribute('stroke', 'url(#skinGradRealistic)');
    leftArmUpper.setAttribute('stroke-width', '22');
    leftArmUpper.setAttribute('fill', 'none');
    leftArmUpper.setAttribute('stroke-linecap', 'round');
    leftArmUpper.setAttribute('filter', 'url(#shadow)');
    leftArmUpper.setAttribute('class', 'mannequin-arm-left');
    svg.appendChild(leftArmUpper);

    const leftArmLower = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    leftArmLower.setAttribute('d', 'M 35 220 Q 20 280 25 340');
    leftArmLower.setAttribute('stroke', 'url(#skinGradRealistic)');
    leftArmLower.setAttribute('stroke-width', '18');
    leftArmLower.setAttribute('fill', 'none');
    leftArmLower.setAttribute('stroke-linecap', 'round');
    leftArmLower.setAttribute('filter', 'url(#shadow)');
    leftArmLower.setAttribute('class', 'mannequin-arm-left');
    svg.appendChild(leftArmLower);

    // Right arm
    const rightArmUpper = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    rightArmUpper.setAttribute('d', 'M 210 145 Q 260 160 265 220');
    rightArmUpper.setAttribute('stroke', 'url(#skinGradRealistic)');
    rightArmUpper.setAttribute('stroke-width', '22');
    rightArmUpper.setAttribute('fill', 'none');
    rightArmUpper.setAttribute('stroke-linecap', 'round');
    rightArmUpper.setAttribute('filter', 'url(#shadow)');
    rightArmUpper.setAttribute('class', 'mannequin-arm-right');
    svg.appendChild(rightArmUpper);

    const rightArmLower = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    rightArmLower.setAttribute('d', 'M 265 220 Q 280 280 275 340');
    rightArmLower.setAttribute('stroke', 'url(#skinGradRealistic)');
    rightArmLower.setAttribute('stroke-width', '18');
    rightArmLower.setAttribute('fill', 'none');
    rightArmLower.setAttribute('stroke-linecap', 'round');
    rightArmLower.setAttribute('filter', 'url(#shadow)');
    rightArmLower.setAttribute('class', 'mannequin-arm-right');
    svg.appendChild(rightArmLower);

    // Left leg
    const leftLeg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    leftLeg.setAttribute('d', 'M 110 450 L 105 580');
    leftLeg.setAttribute('stroke', 'url(#skinGradRealistic)');
    leftLeg.setAttribute('stroke-width', '20');
    leftLeg.setAttribute('fill', 'none');
    leftLeg.setAttribute('stroke-linecap', 'round');
    leftLeg.setAttribute('filter', 'url(#shadow)');
    svg.appendChild(leftLeg);

    // Right leg
    const rightLeg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    rightLeg.setAttribute('d', 'M 190 450 L 195 580');
    rightLeg.setAttribute('stroke', 'url(#skinGradRealistic)');
    rightLeg.setAttribute('stroke-width', '20');
    rightLeg.setAttribute('fill', 'none');
    rightLeg.setAttribute('stroke-linecap', 'round');
    rightLeg.setAttribute('filter', 'url(#shadow)');
    svg.appendChild(rightLeg);

    // Add design image if provided
    if (designImage) {
      const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
      image.setAttribute('x', '95');
      image.setAttribute('y', '170');
      image.setAttribute('width', '110');
      image.setAttribute('height', '140');
      image.setAttribute('href', designImage);
      image.setAttribute('preserveAspectRatio', 'xMidYMid slice');
      image.setAttribute('class', 'design-image');
      svg.appendChild(image);
    }

    containerRef.current.appendChild(svg);

    return () => {
      if (containerRef.current && svg.parentNode === containerRef.current) {
        containerRef.current.removeChild(svg);
      }
    };
  }, [designImage, shirtColor]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
      style={{
        perspective: '1200px',
      }}
    >
      <style>{`
        .mannequin-svg-realistic {
          filter: drop-shadow(0 10px 30px rgba(0, 240, 255, 0.2));
          animation: mannequin-rotate-realistic 8s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes mannequin-rotate-realistic {
          0%, 100% {
            transform: rotateY(0deg) rotateX(3deg);
          }
          50% {
            transform: rotateY(12deg) rotateX(-3deg);
          }
        }

        .mannequin-head-realistic {
          animation: head-subtle 4s ease-in-out infinite;
          transform-origin: 150px 80px;
        }

        @keyframes head-subtle {
          0%, 100% {
            transform: rotateZ(0deg);
          }
          50% {
            transform: rotateZ(3deg);
          }
        }

        .mannequin-pupil {
          animation: pupil-look 4s ease-in-out infinite;
          transform-origin: 135px 77px;
        }

        @keyframes pupil-look {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(2px);
          }
        }

        .mannequin-arm-left {
          animation: arm-left-wave 3s ease-in-out infinite;
          transform-origin: 90px 145px;
        }

        .mannequin-arm-right {
          animation: arm-right-wave 3s ease-in-out infinite;
          transform-origin: 210px 145px;
        }

        @keyframes arm-left-wave {
          0%, 100% {
            transform: rotateZ(-15deg);
          }
          50% {
            transform: rotateZ(25deg);
          }
        }

        @keyframes arm-right-wave {
          0%, 100% {
            transform: rotateZ(15deg);
          }
          50% {
            transform: rotateZ(-25deg);
          }
        }

        .mannequin-shirt-realistic {
          animation: shirt-pulse-realistic 2.5s ease-in-out infinite;
        }

        @keyframes shirt-pulse-realistic {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(0, 240, 255, 0.5));
          }
        }

        .design-image {
          animation: design-shimmer-realistic 3s ease-in-out infinite;
          opacity: 0.95;
        }

        @keyframes design-shimmer-realistic {
          0%, 100% {
            opacity: 0.9;
          }
          50% {
            opacity: 1;
          }
        }

        .design-area {
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
