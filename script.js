body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(to bottom, #ffe6f0, #fff);
    overflow-x: hidden;
    text-align: center;
    position: relative;
    height: 100vh;
    overflow: hidden;
  }
  
  /* Floating Hearts */
  .hearts-background::before {
    content: '';
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"><text y="50%" x="50%" dominant-baseline="middle" text-anchor="middle" font-size="30" fill="pink">❤</text></svg>');
    background-repeat: repeat;
    animation: moveHearts 20s linear infinite;
    opacity: 0.2;
    z-index: -1;
  }
  
  @keyframes moveHearts {
    from { background-position: 0 0; }
    to { background-position: 1000px 1000px; }
  }
  
  /* Music Button */
  #musicToggle {
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 8px 12px;
    font-size: 18px;
    border: none;
    border-radius: 50%;
    background-color: #fddde6;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    cursor: pointer;
    z-index: 1000;
  }
  
  h1 {
    margin-top: 60px;
    font-size: 2.7rem;
    color: #d63384;
  }
  
  button {
    padding: 12px 30px;
    font-size: 1.1rem;
    border: none;
    background-color: #d63384;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 25px;
    transition: background-color 0.3s, transform 0.2s;
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }
  
  button:hover {
    background-color: #e85ca5;
    transform: scale(1.05);
  }
  
  /* Fullscreen gallery slideshow */
  .gallery {
    position: relative;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
    background: black;
  }
  
  .gallery img {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 100vw;
    max-height: 100vh;
    transform: translate(-50%, -50%) scale(0.8);
    border-radius: 15px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    opacity: 0;
    cursor: pointer;
    user-select: none;
    transition: opacity 0.7s ease;
    object-fit: contain;
    z-index: 10;
  }
  
  /* Show image with zoom-in fade */
  .gallery img.show {
    animation: zoomInFade 1.2s forwards;
    z-index: 20;
  }
  
  /* Hide image with zoom-out fade */
  .gallery img.hide {
    animation: zoomOutFade 1.2s forwards;
    z-index: 15;
  }
  
  @keyframes zoomInFade {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
  
  @keyframes zoomOutFade {
    0% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1.2);
    }
  }
  
  /* End message */
  .end-message {
    position: relative;
    font-size: 2rem;
    color: #6c3483;
    margin: 40px 20px 60px;
    opacity: 0;
    transition: opacity 1s ease;
    user-select: none;
    z-index: 30;
    background: rgba(255 255 255 / 0.9);
    border-radius: 20px;
    padding: 20px 40px;
    display: inline-block;
    box-shadow: 0 6px 15px rgba(0,0,0,0.2);
  }
  
  .end-message.show {
    opacity: 1;
  }
  
  /* Background images behind end message */
  .background-images {
    position: fixed;
    top: 0; left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 5;
    pointer-events: none;
  }
  
  .background-images img {
    position: absolute;
    border-radius: 15px;
    opacity: 0.15;
    object-fit: cover;
    filter: blur(3px);
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
    transition: transform 3s ease;
  }
  
  /* Distribute background images randomly (will be set by JS) */
  
  /* Hide elements */
  .hidden {
    display: none;
  }
  
  /* Lightbox */
  .lightbox {
    position: fixed;
    top: 0; left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    cursor: zoom-out;
  }
  
  .lightbox img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
    box-shadow: 0 0 20px white;
    animation: zoomIn 0.4s ease;
  }
  
  @keyframes zoomIn {
    from { transform: scale(0.7); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  
  /* Responsive smaller screens */
  @media (max-width: 600px) {
    h1 {
      font-size: 2rem;
    }
    .end-message {
      font-size: 1.3rem;
      padding: 15px 25px;
    }
  }
