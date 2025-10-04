// // cursor.js - Save this in your public/js/ folder

// (function() {
//   'use strict';

//   // Wait for DOM to be ready
//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', init);
//   } else {
//     init();
//   }

//   function init() {
//     // Add CSS styles
//     const style = document.createElement('style');
//     style.textContent = `
//       .cursor-dot {
//         position: fixed;
//         width: 8px;
//         height: 8px;
//         border-radius: 50%;
//         pointer-events: none;
//         z-index: 9999;
//         opacity: 0;
//         transition: opacity 0.3s ease;
//       }

//       .cursor-dot.active {
//         opacity: 1;
//       }

//       .cursor-dot.dot-1 {
//         background: #ff6b6b;
//         animation: cursorPulse 0.8s ease-in-out infinite;
//         animation-delay: 0s;
//       }

//       .cursor-dot.dot-2 {
//         background: #4ecdc4;
//         animation: cursorPulse 0.8s ease-in-out infinite;
//         animation-delay: 0.15s;
//       }

//       .cursor-dot.dot-3 {
//         background: #ffe66d;
//         animation: cursorPulse 0.8s ease-in-out infinite;
//         animation-delay: 0.3s;
//       }

//       .cursor-trail {
//         position: fixed;
//         width: 6px;
//         height: 6px;
//         border-radius: 50%;
//         pointer-events: none;
//         z-index: 9998;
//         animation: fadeOut 0.6s ease-out forwards;
//       }

//       @keyframes cursorPulse {
//         0%, 100% {
//           transform: scale(1);
//         }
//         50% {
//           transform: scale(1.3);
//         }
//       }

//       @keyframes fadeOut {
//         0% {
//           opacity: 0.8;
//           transform: scale(1);
//         }
//         100% {
//           opacity: 0;
//           transform: scale(0.3);
//         }
//       }
//     `;
//     document.head.appendChild(style);

//     // Get cursor dots
//     const dots = document.querySelectorAll('.cursor-dot');
    
//     if (dots.length < 3) {
//       console.warn('Need 3 cursor dots in DOM, found:', dots.length);
//       return;
//     }

//     // Add specific classes to each dot
//     dots[0].classList.add('dot-1');
//     dots[1].classList.add('dot-2');
//     dots[2].classList.add('dot-3');

//     // Colors for trails
//     const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d'];

//     // Animation logic
//     const dotPositions = [
//       { x: 0, y: 0 },
//       { x: 0, y: 0 },
//       { x: 0, y: 0 }
//     ];

//     let mouseX = 0;
//     let mouseY = 0;
//     let rotation = 0;
//     let frameCount = 0;

//     const handleMouseMove = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//       dots.forEach(dot => dot.classList.add('active'));
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     function createTrail(x, y, color) {
//       const trail = document.createElement('div');
//       trail.className = 'cursor-trail';
//       trail.style.left = (x - 3) + 'px';
//       trail.style.top = (y - 3) + 'px';
//       trail.style.background = color;
//       document.body.appendChild(trail);

//       setTimeout(() => {
//         trail.remove();
//       }, 600);
//     }

//     function animate() {
//       rotation += 1.5;
//       frameCount++;

//       dots.forEach((dot, index) => {
//         const speed = 0.12;
//         dotPositions[index].x += (mouseX - dotPositions[index].x) * speed;
//         dotPositions[index].y += (mouseY - dotPositions[index].y) * speed;

//         let offsetX = 0;
//         let offsetY = 0;
//         const distance = 8;

//         if (index === 0) {
//           offsetX = 0;
//           offsetY = -distance;
//         } else if (index === 1) {
//           offsetX = -distance;
//           offsetY = distance * 0.7;
//         } else if (index === 2) {
//           offsetX = distance;
//           offsetY = distance * 0.7;
//         }

//         const rad = (rotation * Math.PI) / 180;
//         const rotatedX = offsetX * Math.cos(rad) - offsetY * Math.sin(rad);
//         const rotatedY = offsetX * Math.sin(rad) + offsetY * Math.cos(rad);

//         const finalX = dotPositions[index].x + rotatedX;
//         const finalY = dotPositions[index].y + rotatedY;

//         dot.style.left = (finalX - 4) + 'px';
//         dot.style.top = (finalY - 4) + 'px';

//         // Create trail every 3 frames
//         if (frameCount % 3 === 0) {
//           createTrail(finalX, finalY, colors[index]);
//         }
//       });

//       requestAnimationFrame(animate);
//     }

//     animate();
//   }
// })();


// cursor.js
(function() {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // CSS
    const style = document.createElement('style');
    style.textContent = `
      .cursor-dot {
        position: fixed;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.2s ease;
      }
      .cursor-dot.dot-1 { background: #ff6b6b; animation: cursorPulse 0.8s ease-in-out infinite; animation-delay: 0s; }
      .cursor-dot.dot-2 { background: #4ecdc4; animation: cursorPulse 0.8s ease-in-out infinite; animation-delay: 0.15s; }
      .cursor-dot.dot-3 { background: #ffe66d; animation: cursorPulse 0.8s ease-in-out infinite; animation-delay: 0.3s; }

      .cursor-trail { position: fixed; width: 6px; height: 6px; border-radius: 50%; pointer-events: none; z-index: 9998; animation: fadeOut 0.6s ease-out forwards; }

      @keyframes cursorPulse {
        0%,100%{ transform: scale(1); }
        50%{ transform: scale(1.3); }
      }
      @keyframes fadeOut {
        0%{ opacity: 0.8; transform: scale(1); }
        100%{ opacity: 0; transform: scale(0.3); }
      }
    `;
    document.head.appendChild(style);

    // Dots
    const dots = document.querySelectorAll('.cursor-dot');
    if (dots.length < 3) return;

    dots[0].classList.add('dot-1');
    dots[1].classList.add('dot-2');
    dots[2].classList.add('dot-3');

    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d'];
    const dotPositions = [{x:0,y:0},{x:0,y:0},{x:0,y:0}];

    let mouseX = 0, mouseY = 0, rotation = 0, frameCount = 0;
    let isHovering = false; // <-- track hover

    // Mouse move
    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isHovering) dots.forEach(dot => dot.style.opacity = '1');
    });

    // Hide on hover over links/buttons
    const hoverElements = document.querySelectorAll('a, button, .cursor-hide');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => { isHovering = true; dots.forEach(dot => dot.style.opacity = '0'); });
      el.addEventListener('mouseleave', () => { isHovering = false; dots.forEach(dot => dot.style.opacity = '1'); });
    });

    function createTrail(x, y, color) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = (x-3)+'px';
      trail.style.top = (y-3)+'px';
      trail.style.background = color;
      document.body.appendChild(trail);
      setTimeout(()=>trail.remove(),600);
    }

    function animate() {
      rotation += 1.5;
      frameCount++;

      dots.forEach((dot,index)=>{
        const speed=0.12;
        dotPositions[index].x += (mouseX-dotPositions[index].x)*speed;
        dotPositions[index].y += (mouseY-dotPositions[index].y)*speed;

        let offsetX=0, offsetY=0;
        const distance=8;
        if(index===0){ offsetX=0; offsetY=-distance; }
        else if(index===1){ offsetX=-distance; offsetY=distance*0.7; }
        else if(index===2){ offsetX=distance; offsetY=distance*0.7; }

        const rad=(rotation*Math.PI)/180;
        const rotatedX=offsetX*Math.cos(rad)-offsetY*Math.sin(rad);
        const rotatedY=offsetX*Math.sin(rad)+offsetY*Math.cos(rad);

        const finalX = dotPositions[index].x + rotatedX;
        const finalY = dotPositions[index].y + rotatedY;

        // Only show if not hovering
        if(!isHovering){
          dot.style.left=(finalX-4)+'px';
          dot.style.top=(finalY-4)+'px';
        }

        // Trail
        if(frameCount%3===0 && !isHovering){
          createTrail(finalX, finalY, colors[index]);
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }
})();
