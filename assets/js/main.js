const CONFIG = {
        isMobile: window.innerWidth < 768,
        maxLasers: 20,
        scenes: {
            'scene-hero': { ships: [{t:'x-wing', f:'rebel'}, {t:'x-wing', f:'rebel'}, {t:'x-wing', f:'rebel'}, {t:'tie', f:'empire'}, {t:'tie', f:'empire'}, {t:'tie', f:'empire'}, {t:'tie', f:'empire'}], combat: true },
            'scene-pro-projects': { ships: [{t:'tie', f:'empire'}, {t:'tie', f:'empire'}, {t:'tie', f:'empire'}, {t:'drone', f:'civil'}], combat: true },
            'scene-study-projects': { ships: [{t:'x-wing', f:'abandoned'}], combat: false },
            'scene-about': { ships: [{t:'n1', f:'naboo'}, {t:'n1', f:'naboo'}, {t:'drone', f:'target'}], combat: true },
            'scene-contact': { ships: [], traffic: true, beams: true, combat: false }
        }
    };

    let activeSceneId = 'scene-hero';
    let ships = [];
    let lasers = [];
    let explosions = [];
    let traffic = [];
    let beams = [];

    // Loading Screen Logic
    window.addEventListener('load', () => {
        const openingText = document.getElementById('opening-text');
        const text = "A long time ago in a galaxy far, far away...";
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                openingText.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 60);
            } else {
                setTimeout(() => {
                    openingText.classList.add('fade-out');
                    runHyperspaceEntrance();
                }, 1800);
            }
        }
        typeWriter();
    });

    function runHyperspaceEntrance() {
        const hsCanvas = document.getElementById('loading-hyperspace');
        hsCanvas.style.opacity = '1';
        hsCanvas.width = window.innerWidth;
        hsCanvas.height = window.innerHeight;
        const ctx = hsCanvas.getContext('2d');
        
        let t = 0;
        const cx = hsCanvas.width/2;
        const cy = hsCanvas.height/2;
        const stars = Array.from({length: 200}, () => ({
            angle: Math.random() * Math.PI * 2,
            dist: Math.random() * 100,
            speed: 1 + Math.random() * 5,
            len: 5 + Math.random() * 20
        }));

        function animate() {
            ctx.fillStyle = 'black';
            ctx.fillRect(0,0,hsCanvas.width, hsCanvas.height);
            t += 0.05;

            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            stars.forEach(s => {
                s.dist += s.speed * t;
                const x1 = cx + Math.cos(s.angle) * s.dist;
                const y1 = cy + Math.sin(s.angle) * s.dist;
                const x2 = cx + Math.cos(s.angle) * (s.dist + s.len * t);
                const y2 = cy + Math.sin(s.angle) * (s.dist + s.len * t);
                ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
            });

            if (t > 3) {
                ctx.fillStyle = `rgba(255,255,255, ${(t - 3) * 2})`;
                ctx.fillRect(0,0,hsCanvas.width, hsCanvas.height);
            }

            if (t > 3.5) {
                const loadingScreen = document.getElementById('loading-screen');
                loadingScreen.classList.add('fade-out');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    document.body.classList.remove('loading-active');
                    initBattleSystem();
                }, 1000);
                return;
            }
            requestAnimationFrame(animate);
        }
        animate();
    }

    function initBattleSystem() {
        const canvases = document.querySelectorAll('.stars-bg');
        canvases.forEach(canvas => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const sceneId = canvas.parentElement.id;
            const ctx = canvas.getContext('2d');
            
            // Stars background (static once generated)
            const sceneStars = [];
            for (let i = 0; i < (CONFIG.isMobile ? 100 : 300); i++) {
                sceneStars.push({x: Math.random() * canvas.width, y: Math.random() * canvas.height, s: Math.random() * 2});
            }

            // Game Loop for this scene
            function frame() {
                if (canvas.parentElement.classList.contains('active')) {
                    // Background
                    ctx.fillStyle = '#000';
                    ctx.fillRect(0,0,canvas.width, canvas.height);
                    
                    // Starfield
                    ctx.fillStyle = '#fff';
                    sceneStars.forEach(s => ctx.fillRect(s.x, s.y, s.s, s.s));
                    
                    // Planet & Scenery Elements
                    drawPlanet(ctx, sceneId, canvas);

                    // Ships, Lasers, Explosions
                    updateScene(sceneId, ctx, canvas);

                    // Vignette Overlay
                    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
                    grad.addColorStop(0, 'transparent');
                    grad.addColorStop(1, 'rgba(5,5,5,0.8)');
                    ctx.fillStyle = grad;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                }
                requestAnimationFrame(frame);
            }
            setupSceneData(sceneId, canvas);
            frame();
        });
    }

    function drawPlanet(ctx, sceneId, canvas) {
        ctx.save();
        
        let cx = canvas.width > 768 ? canvas.width * 0.8 : canvas.width * 0.9;
        let cy = canvas.width > 768 ? canvas.height * 0.2 : canvas.height * 0.1;
        let r = canvas.width > 768 ? 400 : 250;

        let grad = ctx.createRadialGradient(cx - r*0.3, cy - r*0.3, r*0.1, cx, cy, r);
        
        if (sceneId === 'scene-hero') {
            grad.addColorStop(0, '#00d4ff');
            grad.addColorStop(0.5, '#00677e');
            grad.addColorStop(1, '#001f27');
        } else if (sceneId === 'scene-about') {
            grad.addColorStop(0, '#4caf50');
            grad.addColorStop(0.5, '#008080');
            grad.addColorStop(1, '#000080');
        } else if (sceneId === 'scene-pro-projects') {
            grad.addColorStop(0, '#ff7f50');
            grad.addColorStop(0.5, '#8b4513');
            grad.addColorStop(1, '#2a110a');
        } else if (sceneId === 'scene-study-projects') {
            grad.addColorStop(0, '#556b2f');
            grad.addColorStop(0.5, '#228b22');
            grad.addColorStop(1, '#002200');
        } else if (sceneId === 'scene-contact') {
            grad.addColorStop(0, '#3a3a3a');
            grad.addColorStop(0.5, '#1a1a1a');
            grad.addColorStop(1, '#050505');
        }

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        if (sceneId === 'scene-hero') {
            let dx = canvas.width * 0.2;
            let dy = canvas.height * 0.5;
            let dr = 150;
            let dGrad = ctx.createRadialGradient(dx - dr*0.3, dy - dr*0.3, dr*0.1, dx, dy, dr);
            dGrad.addColorStop(0, '#a9a9a9');
            dGrad.addColorStop(0.5, '#696969');
            dGrad.addColorStop(1, '#2f4f4f');
            
            ctx.beginPath();
            ctx.arc(dx, dy, dr, 0, Math.PI * 2);
            ctx.fillStyle = dGrad;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(dx - dr*0.2, dy - dr*0.2, dr*0.25, 0, Math.PI * 2);
            ctx.fillStyle = '#4a4a4a';
            ctx.fill();
        }

        ctx.restore();
    }

    function setupSceneData(id, canvas) {
        const cfg = CONFIG.scenes[id];
        if(!cfg) return;
        
        const sceneShips = [];
        cfg.ships.forEach(s => {
            sceneShips.push({
                type: s.t,
                faction: s.f,
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
                angle: Math.random() * Math.PI * 2,
                hp: 100,
                cooldown: 0,
                state: s.f === 'abandoned' ? 'static' : 'active'
            });
        });
        ships[id] = sceneShips;
        lasers[id] = [];
        explosions[id] = [];
        
        if (cfg.traffic) {
            traffic[id] = Array.from({length: 40}, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                v: 0.5 + Math.random() * 2
            }));
            beams[id] = [];
        }
    }

    function updateScene(id, ctx, canvas) {
        const cfg = CONFIG.scenes[id];
        const sceneShips = ships[id] || [];
        const sceneLasers = lasers[id] || [];
        const sceneExplosions = explosions[id] || [];

        // 1. Update & Draw Ships
        sceneShips.forEach(ship => {
            if (ship.state !== 'static') {
                ship.x += ship.vx;
                ship.y += ship.vy;
                ship.angle = Math.atan2(ship.vy, ship.vx);
                
                // Wrap screen
                if (ship.x < -50) ship.x = canvas.width + 50;
                if (ship.x > canvas.width + 50) ship.x = -50;
                if (ship.y < -50) ship.y = canvas.height + 50;
                if (ship.y > canvas.height + 50) ship.y = -50;

                // Fire logic
                if (cfg.combat && ship.cooldown <= 0) {
                    const target = sceneShips.find(t => t.faction !== ship.faction && t.faction !== 'abandoned' && t.hp > 0);
                    if (target) {
                        const dist = Math.hypot(target.x - ship.x, target.y - ship.y);
                        if (dist < 400 && sceneLasers.length < CONFIG.maxLasers) {
                            sceneLasers.push({
                                x: ship.x, y: ship.y,
                                vx: Math.cos(ship.angle) * 8,
                                vy: Math.sin(ship.angle) * 8,
                                color: ship.faction === 'rebel' ? '#f00' : (ship.faction === 'empire' ? '#0f0' : '#0df'),
                                owner: ship.faction,
                                life: 100
                            });
                            ship.cooldown = CONFIG.isMobile ? 120 : 60;
                        }
                    }
                }
                if (ship.cooldown > 0) ship.cooldown--;
            }
            if (ship.hp > 0) drawShip(ctx, ship);
        });

        // 2. Update & Draw Lasers
        for (let i = sceneLasers.length - 1; i >= 0; i--) {
            const l = sceneLasers[i];
            l.x += l.vx;
            l.y += l.vy;
            l.life--;

            ctx.strokeStyle = l.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(l.x, l.y);
            ctx.lineTo(l.x - l.vx * 2, l.y - l.vy * 2);
            ctx.stroke();

            // Collision
            sceneShips.forEach(s => {
                if (s.hp > 0 && s.faction !== l.owner && Math.hypot(s.x - l.x, s.y - l.y) < 20) {
                    s.hp -= 25;
                    l.life = 0;
                    if (s.hp <= 0) {
                        sceneExplosions.push({x: s.x, y: s.y, r: 5, maxR: 40});
                    }
                }
            });

            if (l.life <= 0) sceneLasers.splice(i, 1);
        }

        // 3. Update & Draw Explosions
        for (let i = sceneExplosions.length - 1; i >= 0; i--) {
            const e = sceneExplosions[i];
            e.r += 2;
            ctx.beginPath();
            ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${1 - e.r/e.maxR})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(255, 100, 0, ${1 - e.r/e.maxR})`;
            ctx.stroke();
            if (e.r >= e.maxR) sceneExplosions.splice(i, 1);
        }

        // 4. Coruscant Traffic
        if (cfg.traffic) {
            ctx.fillStyle = 'rgba(255,255,255,0.5)';
            traffic[id].forEach(t => {
                t.y -= t.v;
                if (t.y < 0) t.y = canvas.height;
                ctx.fillRect(t.x, t.y, 1, 3);
            });
            if (Math.random() < 0.05) {
                beams[id].push({x: Math.random() * canvas.width, y: canvas.height, v: 20});
            }
            ctx.strokeStyle = '#00d4ff';
            ctx.lineWidth = 2;
            for (let i = beams[id].length - 1; i >= 0; i--) {
                const b = beams[id][i];
                b.y -= b.v;
                ctx.beginPath();
                ctx.moveTo(b.x, b.y);
                ctx.lineTo(b.x, b.y + 100);
                ctx.stroke();
                if (b.y < -100) beams[id].splice(i, 1);
            }
        }
    }

    function drawShip(ctx, ship) {
        ctx.save();
        ctx.translate(ship.x, ship.y);
        ctx.rotate(ship.angle);
        
        const scale = 0.8;
        ctx.scale(scale, scale);

        if (ship.type === 'x-wing') {
            ctx.fillStyle = '#ccc';
            ctx.fillRect(-15, -2, 30, 4); // Body
            ctx.fillStyle = '#999';
            ctx.beginPath();
            ctx.moveTo(-10, -10); ctx.lineTo(10, -2); ctx.lineTo(10, 2); ctx.lineTo(-10, 10);
            ctx.fill(); // Wings
            ctx.fillStyle = '#f00';
            ctx.fillRect(-12, -12, 4, 4); ctx.fillRect(-12, 8, 4, 4); // Engines
        } else if (ship.type === 'tie') {
            ctx.fillStyle = '#333';
            ctx.fillRect(-15, -12, 2, 24); ctx.fillRect(13, -12, 2, 24); // Solar Panels
            ctx.fillStyle = '#666';
            ctx.beginPath(); ctx.arc(0, 0, 6, 0, Math.PI * 2); ctx.fill(); // Cockpit
            ctx.strokeStyle = '#0ff'; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.arc(0,0,3,0,Math.PI*2); ctx.stroke(); // Window
        } else if (ship.type === 'n1') {
            ctx.fillStyle = '#ffd700';
            ctx.beginPath(); ctx.moveTo(20, 0); ctx.lineTo(-10, -8); ctx.lineTo(-15, 0); ctx.lineTo(-10, 8); ctx.closePath(); ctx.fill();
            ctx.fillStyle = '#00bfff';
            ctx.fillRect(-12, -10, 6, 4); ctx.fillRect(-12, 6, 6, 4);
        } else if (ship.type === 'drone') {
            ctx.strokeStyle = '#666';
            ctx.strokeRect(-8, -8, 16, 16);
            ctx.fillStyle = '#333';
            ctx.fillRect(-4, -4, 8, 8);
        }

        ctx.restore();
    }

    // Hyperspace Transition
    const hyperspaceCanvas = document.getElementById('hyperspace-canvas');
    const hCtx = hyperspaceCanvas.getContext('2d');
    
    function resizeHyperspace() {
        hyperspaceCanvas.width = window.innerWidth;
        hyperspaceCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeHyperspace);
    resizeHyperspace();

    function updateHomeButton(sceneId) {
        const btn = document.getElementById('btn-home');
        if (sceneId === 'scene-hero') {
            btn.classList.add('hidden');
        } else {
            btn.classList.remove('hidden');
        }
    }

    function hyperspaceTransition(targetId, sceneId) {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'instant' });
            switchScene(sceneId);
            return;
        }

        hyperspaceCanvas.style.opacity = '1';
        let t = 0;
        const centerX = hyperspaceCanvas.width / 2;
        const centerY = hyperspaceCanvas.height / 2;
        const lines = Array.from({length: 150}, () => ({
            angle: Math.random() * Math.PI * 2,
            dist: Math.random() * 50,
            speed: 2 + Math.random() * 8,
            len: 10 + Math.random() * 30
        }));

        function animate() {
            hCtx.fillStyle = 'black';
            hCtx.fillRect(0,0,hyperspaceCanvas.width, hyperspaceCanvas.height);
            t += 0.05;

            hCtx.strokeStyle = 'white';
            hCtx.lineWidth = 2;
            lines.forEach(l => {
                l.dist += l.speed * t;
                const x1 = centerX + Math.cos(l.angle) * l.dist;
                const y1 = centerY + Math.sin(l.angle) * l.dist;
                const x2 = centerX + Math.cos(l.angle) * (l.dist + l.len * t);
                const y2 = centerY + Math.sin(l.angle) * (l.dist + l.len * t);
                hCtx.beginPath(); hCtx.moveTo(x1, y1); hCtx.lineTo(x2, y2); hCtx.stroke();
            });

            if (t > 2) {
                hCtx.fillStyle = `rgba(255,255,255, ${(t - 2) * 2})`;
                hCtx.fillRect(0,0,hyperspaceCanvas.width, hyperspaceCanvas.height);
            }

            if (t > 2.5) {
                switchScene(sceneId);
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }

            if (t > 3) {
                hyperspaceCanvas.style.opacity = '0';
                return;
            }
            requestAnimationFrame(animate);
        }
        animate();
    }

    function switchScene(sceneId) {
        document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
        document.getElementById(sceneId).classList.add('active');
        activeSceneId = sceneId;
        updateHomeButton(sceneId);
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            // Only prevent default if it's an a tag and doesn't have saber-btn class.
            // If it has saber-btn, initSaberButtons handles the click.
            if (!link.classList.contains('saber-btn') && link.tagName === 'A') {
                e.preventDefault();
                const targetId = link.getAttribute('data-target');
                const sceneId = link.getAttribute('data-scene');
                hyperspaceTransition(targetId, sceneId);
            }
        });
    });

    function initSaberButtons() {
      document.querySelectorAll('.saber-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          const wrapper = this.closest('.saber-btn-wrapper');
          const cutCanvas = wrapper.querySelector('.saber-cut-canvas');
          const target = this.dataset.target;
          const scene = this.dataset.scene;
          
          const btnRect = this.getBoundingClientRect();
          cutCanvas.width = btnRect.width;
          cutCanvas.height = btnRect.height;
          cutCanvas.style.position = 'absolute';
          cutCanvas.style.top = '0';
          cutCanvas.style.left = '0';
          cutCanvas.style.pointerEvents = 'none';
          cutCanvas.style.zIndex = '100';
          cutCanvas.style.display = 'block';
          
          const ctx = cutCanvas.getContext('2d');
          
          let cutProgress = 0;
          let glowIntensity = 0;
          const cutY = btnRect.height / 2;
          
          function animateCut() {
            ctx.clearRect(0, 0, cutCanvas.width, cutCanvas.height);
            
            cutProgress += 4;
            glowIntensity = Math.min(glowIntensity + 0.1, 1);
            
            if (cutProgress <= cutCanvas.width) {
              ctx.strokeStyle = '#ffffff';
              ctx.lineWidth = 1.5;
              ctx.shadowBlur = 15;
              ctx.shadowColor = '#00aaff';
              ctx.beginPath();
              ctx.moveTo(0, cutY);
              ctx.lineTo(cutProgress, cutY);
              ctx.stroke();
              
              const heatGradTop = ctx.createLinearGradient(0, cutY - 4, 0, cutY);
              heatGradTop.addColorStop(0, 'rgba(255, 100, 0, 0)');
              heatGradTop.addColorStop(0.5, `rgba(255, 60, 0, ${glowIntensity * 0.6})`);
              heatGradTop.addColorStop(1, `rgba(255, 200, 50, ${glowIntensity * 0.9})`);
              ctx.fillStyle = heatGradTop;
              ctx.fillRect(0, cutY - 4, cutProgress, 4);
              
              const heatGradBottom = ctx.createLinearGradient(0, cutY, 0, cutY + 4);
              heatGradBottom.addColorStop(0, `rgba(255, 200, 50, ${glowIntensity * 0.9})`);
              heatGradBottom.addColorStop(0.5, `rgba(255, 60, 0, ${glowIntensity * 0.6})`);
              heatGradBottom.addColorStop(1, 'rgba(255, 100, 0, 0)');
              ctx.fillStyle = heatGradBottom;
              ctx.fillRect(0, cutY, cutProgress, 4);
              
              ctx.fillStyle = '#ffffff';
              ctx.shadowBlur = 25;
              ctx.shadowColor = '#00ccff';
              ctx.beginPath();
              ctx.arc(cutProgress, cutY, 3, 0, Math.PI * 2);
              ctx.fill();
              
              for (let i = 0; i < 4; i++) {
                const sparkAngle = (Math.random() - 0.5) * Math.PI;
                const sparkDist = Math.random() * 15 + 5;
                const sparkX = cutProgress + Math.cos(sparkAngle) * sparkDist;
                const sparkY = cutY + Math.sin(sparkAngle) * sparkDist;
                const sparkAlpha = Math.random() * 0.8 + 0.2;
                
                ctx.fillStyle = `rgba(255, ${Math.floor(Math.random() * 100 + 150)}, 50, ${sparkAlpha})`;
                ctx.shadowBlur = 8;
                ctx.shadowColor = '#ff8800';
                ctx.beginPath();
                ctx.arc(sparkX, sparkY, Math.random() * 1.5 + 0.5, 0, Math.PI * 2);
                ctx.fill();
              }
              
              ctx.shadowBlur = 0;
              requestAnimationFrame(animateCut);
              
            } else {
              animateSplit(ctx, cutCanvas, cutY, () => {
                cutCanvas.style.display = 'none';
                if (target === 'send') {
                  // just simulate send for the contact form
                  console.log('Form submitted');
                } else if (target && scene) {
                  hyperspaceTransition(target, scene);
                }
              });
            }
          }
          
          animateCut();
        });
      });
    }

    function animateSplit(ctx, canvas, cutY, onComplete) {
      let splitOffset = 0;
      const maxSplit = 30;
      
      const snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
      
      function splitFrame() {
        splitOffset += 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.putImageData(snapshot, 0, -splitOffset * 0.5, 0, 0, canvas.width, cutY);
        ctx.putImageData(snapshot, 0, splitOffset * 0.5, 0, cutY, canvas.width, canvas.height - cutY);
        
        const meltAlpha = 1 - splitOffset / maxSplit;
        ctx.fillStyle = `rgba(255, 150, 0, ${meltAlpha})`;
        ctx.fillRect(0, cutY - splitOffset * 0.5 - 2, canvas.width, 4);
        
        if (splitOffset < maxSplit) {
          requestAnimationFrame(splitFrame);
        } else {
          if (onComplete) onComplete();
        }
      }
      
      splitFrame();
    }

    function fireRebelLaser(btn) {
      btn.disabled = true;
      const targetUrl = btn.dataset.url;
      const shipId = parseInt(btn.dataset.shipId);
      
      const canvas = document.getElementById('project-battle-canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      const rebelSvg = document.getElementById('rebel-ship-svg');
      const rebelRect = rebelSvg.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      
      const laserStartX = rebelRect.left + rebelRect.width / 2 - canvasRect.left;
      const laserStartY = rebelRect.top - canvasRect.top;
      
      const targetCard = document.querySelector(`[data-ship-id="${shipId}"]`).closest('.imperial-ship-card');
      const targetRect = targetCard.getBoundingClientRect();
      const laserEndX = targetRect.left + targetRect.width / 2 - canvasRect.left;
      const laserEndY = targetRect.top + targetRect.height / 2 - canvasRect.top;
      
      rebelSvg.style.animation = 'none';
      rebelSvg.style.filter = 'drop-shadow(0 0 20px rgba(0,255,80,0.9))';
      
      setTimeout(() => {
        let laserProgress = 0;
        const totalDist = Math.hypot(laserEndX - laserStartX, laserEndY - laserStartY);
        const laserSpeed = 15;
        
        function animateLaser() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          laserProgress = Math.min(laserProgress + laserSpeed, totalDist);
          
          const ratio = laserProgress / totalDist;
          const currentX = laserStartX + (laserEndX - laserStartX) * ratio;
          const currentY = laserStartY + (laserEndY - laserStartY) * ratio;
          
          const grad = ctx.createLinearGradient(laserStartX, laserStartY, currentX, currentY);
          grad.addColorStop(0, 'rgba(0, 255, 80, 0)');
          grad.addColorStop(0.3, 'rgba(0, 255, 80, 0.4)');
          grad.addColorStop(0.8, 'rgba(150, 255, 150, 0.8)');
          grad.addColorStop(1, '#ffffff');
          
          ctx.strokeStyle = grad;
          ctx.lineWidth = 3;
          ctx.shadowBlur = 15;
          ctx.shadowColor = '#00ff44';
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(laserStartX, laserStartY);
          ctx.lineTo(currentX, currentY);
          ctx.stroke();
          ctx.shadowBlur = 0;
          
          if (laserProgress < totalDist) {
            requestAnimationFrame(animateLaser);
          } else {
            explodeImperialShip(ctx, canvas, targetCard, laserEndX, laserEndY, targetUrl);
          }
        }
        
        animateLaser();
        
        rebelSvg.style.filter = 'drop-shadow(0 0 12px rgba(0, 255, 80, 0.4))';
        rebelSvg.style.animation = 'rebelHover 3s ease-in-out infinite';
        
      }, 400);
    }

    function explodeImperialShip(ctx, canvas, card, cx, cy, targetUrl) {
      card.style.transition = 'opacity 0.1s ease';
      card.style.opacity = '0';
      card.style.pointerEvents = 'none';
      
      const particles = Array.from({ length: 80 }, () => ({
        x: cx,
        y: cy,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.5) * 12,
        size: Math.random() * 4 + 1,
        color: Math.random() > 0.5
          ? `rgb(255, ${Math.floor(Math.random() * 150)}, 0)`
          : `rgb(255, ${Math.floor(Math.random() * 200 + 55)}, 50)`,
        life: 1,
        decay: Math.random() * 0.04 + 0.02
      }));
      
      const shockwaves = [
        { radius: 0, maxRadius: 80, alpha: 0.8, color: '#ff6600' },
        { radius: 0, maxRadius: 120, alpha: 0.5, color: '#ffaa00', delay: 5 }
      ];
      let frame = 0;
      
      function animateExplosion() {
        frame++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        shockwaves.forEach(wave => {
          if (frame < (wave.delay || 0)) return;
          wave.radius += 6;
          wave.alpha *= 0.92;
          
          ctx.strokeStyle = wave.color;
          ctx.globalAlpha = wave.alpha;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 15;
          ctx.shadowColor = wave.color;
          ctx.beginPath();
          ctx.arc(cx, cy, wave.radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.shadowBlur = 0;
        });
        ctx.globalAlpha = 1;
        
        let allDead = true;
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.15;
          p.life -= p.decay;
          
          if (p.life > 0) {
            allDead = false;
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        });
        ctx.globalAlpha = 1;
        
        if (frame < 8) {
          const flashAlpha = (8 - frame) / 8 * 0.7;
          ctx.fillStyle = `rgba(255, 200, 100, ${flashAlpha})`;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        
        if (!allDead && frame < 120) {
          requestAnimationFrame(animateExplosion);
        } else {
          fadeOutAndRedirect(canvas, targetUrl);
        }
      }
      
      animateExplosion();
    }

    function fadeOutAndRedirect(canvas, url) {
      let alpha = 0;
      const ctx = canvas.getContext('2d');
      
      function flashOut() {
        alpha += 0.06;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        if (alpha < 1) {
          requestAnimationFrame(flashOut);
        } else {
          if (url && url !== '#') {
              window.open(url, '_blank');
          }
          
          setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            document.querySelectorAll('.imperial-ship-card').forEach(card => {
              card.style.opacity = '1';
              card.style.pointerEvents = 'all';
            });
            document.querySelectorAll('.action-btn').forEach(btn => {
              btn.disabled = false;
            });
          }, 1000);
        }
      }
      
      flashOut();
    }

    document.addEventListener('DOMContentLoaded', () => {
      initSaberButtons();
    });