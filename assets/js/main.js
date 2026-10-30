const TRANSLATIONS = {
    en: {
        'nav.home': 'HOME',
        'nav.about': 'ABOUT',
        'nav.arsenal': 'ARSENAL',
        'nav.archives': 'ARCHIVES',
        'nav.contact': 'COMM-LINK',
        'nav.label': 'Main navigation',
        'menu.open': 'Open navigation menu',
        'menu.close': 'Close navigation menu',
        'hero.status': 'SYSTEM_ONLINE // STATUS: READY',
        'hero.role': '> Full Stack Developer | Systems Analysis and Development',
        'hero.projects': 'View Projects',
        'hero.contact': 'Contact',
        'about.photoAlt': 'Profile photo',
        'about.heading': 'PROFILE DATA',
        'about.paragraph1': 'Graduated in Analysis and Systems Development. Passionate about building robust, scalable applications from the ground up. I thrive in environments that challenge me to solve complex architectural problems using modern web technologies.',
        'about.paragraph2': 'I value organization and collaboration, and I am currently deepening my knowledge of Agile methodologies, especially Kanban and Scrum, to plan work and deliver value iteratively.',
        'about.stack': 'TECH STACK',
        'about.technologies': 'Technologies I work with',
        'arsenal.heading': 'PROJECT ARSENAL',
        'projects.shopee': 'Corporate system for managing employee absences, time tracking, and time-bank balances, actively used by Shopee associates and agents.',
        'projects.true': 'Production system for financial management, receipts, inventory, customers, sales, warranties, and cash flow at True iPhones.',
        'projects.casarao': 'Website showcasing apartments available for short-term rental at Casarão Ipiranga.',
        'projects.ingrid': 'High-conversion, responsive landing page for personal trainer and fitness consultant Ingrid Lemos.',
        'projects.deploy': '▶ Deploy',
        'projects.github': '⌥ GitHub',
        'falcon.aria': 'Millennium Falcon — Mateus Fleet. Click to visit my GitHub',
        'falcon.title': 'Millennium Falcon, viewed from above',
        'falcon.caption': 'Millennium Falcon — Mateus Fleet - Click the Falcon to travel to my GitHub',
        'archives.heading': 'ARCHIVES',
        'archives.eyebrow': 'GALACTIC DATA VAULT // ACCESS GRANTED',
        'archives.files': 'RECOVERED PROJECT FILES',
        'archives.status': '4 FILES ONLINE',
        'archives.bot': 'DISCORD BOT',
        'archives.extension': 'CHROME EXTENSION',
        'archives.botDescription': 'A fully functional Python bot that identifies prohibited Shopee products. Already used by Shopee agents.',
        'archives.sosBotDescription': 'Discord bot used by Shopee agents to answer SOP questions and provide examples of KW (keyword) analysis.',
        'archives.grmDescription': 'JavaScript automations and AI-assisted task analysis, built and used by agents in their daily workflow.',
        'archives.itemDescription': 'JavaScript extension that automates AI task analysis, reaching 92% analysis accuracy and supporting agents at work.',
        'archives.openGithub': 'OPEN GITHUB',
        'archives.cableAlt': 'R2-D2 connecting to the project archive terminal',
        'droid.aria': 'R2-D2 — click to access my GitHub',
        'droid.title': 'R2-D2 accessing the project archives',
        'droid.caption': 'R2-D2 // ARCHIVE ACCESS DROID - Click R2 to access my GitHub',
        'contact.heading': 'Open Comm-Link',
        'contact.subject': 'Proposal Subject',
        'contact.message': 'Message Body',
        'contact.email': 'Your Email (for a reply)',
        'contact.send': 'Send Transmission',
        'contact.sending': 'Transmitting message...',
        'contact.success': 'Transmission received. I will get back to you soon.',
        'contact.error': 'Transmission failed. Please try again later.',
        'contact.notConfigured': 'The contact form is not configured yet.',
        'contact.captcha': 'Complete the security check before sending.',
        'contact.captchaRequired': 'Please complete the security check.',
        'contact.captchaLoadError': 'The security check could not load. Please refresh the page and try again.',
        'contact.spamDetected': 'The message could not be sent.',
        'contact.droidAlt': 'C-3PO, the golden communications droid transmitting messages',
        'contact.droidCaption': 'C-3PO // COMM-LINK TRANSMISSION',
        'footer.terminal': 'TERMINAL',
        'footer.stardate': 'STARDATE',
        'footer.protocol': 'PROTOCOL',
        'footer.tagline': 'May the code be with you',
        'page.title': 'Mateus de Lima Silva - Full Stack Developer',
        'language.toggle': 'Switch page to Portuguese',
        'opening.crawl': 'A long time ago in a galaxy far, far away...'
    },
    pt: {
        'nav.home': 'INÍCIO',
        'nav.about': 'SOBRE',
        'nav.arsenal': 'PROJETOS',
        'nav.archives': 'ARQUIVOS',
        'nav.contact': 'COM-LINK',
        'nav.label': 'Navegação principal',
        'menu.open': 'Abrir menu de navegação',
        'menu.close': 'Fechar menu de navegação',
        'hero.status': 'SISTEMA_ONLINE // STATUS: PRONTO',
        'hero.role': '> Desenvolvedor Full Stack | Análise e Desenvolvimento de Sistemas',
        'hero.projects': 'Ver Projetos',
        'hero.contact': 'Contato',
        'about.photoAlt': 'Foto de perfil',
        'about.heading': 'DADOS DO PERFIL',
        'about.paragraph1': 'Graduado em Análise e Desenvolvimento de Sistemas. Sou apaixonado por criar aplicações robustas e escaláveis desde o início. Gosto de ambientes que me desafiam a resolver problemas arquiteturais complexos usando tecnologias web modernas.',
        'about.paragraph2': 'Valorizo organização e colaboração e atualmente estou aprofundando meus conhecimentos em metodologias ágeis, especialmente Kanban e Scrum, para planejar o trabalho e entregar valor de forma iterativa.',
        'about.stack': 'TECNOLOGIAS',
        'about.technologies': 'Tecnologias com as quais trabalho',
        'arsenal.heading': 'ARSENAL DE PROJETOS',
        'projects.shopee': 'Sistema corporativo para gerenciar ausências de funcionários, controle de ponto e banco de horas, utilizado ativamente por colaboradores e agentes da Shopee.',
        'projects.true': 'Sistema de produção para gestão financeira, recibos, estoque, clientes, vendas, garantias e fluxo de caixa da True iPhones.',
        'projects.casarao': 'Site que apresenta apartamentos disponíveis para aluguel de curta temporada no Casarão Ipiranga.',
        'projects.ingrid': 'Landing page responsiva e otimizada para conversão, criada para a personal trainer e consultora fitness Ingrid Lemos.',
        'projects.deploy': '▶ Acessar',
        'projects.github': '⌥ GitHub',
        'falcon.aria': 'Millennium Falcon — Frota Mateus. Clique para visitar meu GitHub',
        'falcon.title': 'Millennium Falcon vista de cima',
        'falcon.caption': 'Millennium Falcon — Frota Mateus - Clique na Millennium para viajar até meu GitHub',
        'archives.heading': 'ARQUIVOS',
        'archives.eyebrow': 'ARQUIVO DE DADOS GALÁCTICO // ACESSO AUTORIZADO',
        'archives.files': 'ARQUIVOS DE PROJETOS RECUPERADOS',
        'archives.status': '4 ARQUIVOS ONLINE',
        'archives.bot': 'BOT DO DISCORD',
        'archives.extension': 'EXTENSÃO DO CHROME',
        'archives.botDescription': 'Bot totalmente funcional, desenvolvido em Python, que identifica produtos proibidos na Shopee. Já utilizado por agentes da Shopee.',
        'archives.sosBotDescription': 'Bot do Discord para tarefas de GRM na Shopee, já utilizado por agentes para consultar dúvidas sobre SOP e ver exemplos de análise de KWs.',
        'archives.grmDescription': 'Automações em JavaScript e auxílio de IA na análise de tarefas, desenvolvido e utilizado por agentes no trabalho diário.',
        'archives.itemDescription': 'Extensão em JavaScript que automatiza a análise de tarefas com IA, alcançando 92% de precisão e auxiliando agentes no trabalho.',
        'archives.openGithub': 'ABRIR GITHUB',
        'archives.cableAlt': 'R2-D2 conectado ao terminal do arquivo de projetos',
        'droid.aria': 'R2-D2 — clique para acessar meu GitHub',
        'droid.title': 'R2-D2 acessando os arquivos dos projetos',
        'droid.caption': 'R2-D2 // DROIDE DE ACESSO AOS ARQUIVOS - Clique no R2 para acessar meu GitHub',
        'contact.heading': 'Abrir Canal de Comunicação',
        'contact.subject': 'Assunto da proposta',
        'contact.message': 'Corpo da mensagem',
        'contact.email': 'Seu e-mail para resposta',
        'contact.send': 'Enviar Transmissão',
        'contact.sending': 'Enviando transmissão...',
        'contact.success': 'Mensagem recebida. Entrarei em contato em breve.',
        'contact.error': 'Falha no envio. Tente novamente mais tarde.',
        'contact.notConfigured': 'O formulário ainda não está configurado.',
        'contact.captcha': 'Complete a verificação de segurança antes de enviar.',
        'contact.captchaRequired': 'Complete a verificação de segurança.',
        'contact.captchaLoadError': 'Não foi possível carregar a verificação de segurança. Atualize a página e tente novamente.',
        'contact.spamDetected': 'Não foi possível enviar a mensagem.',
        'footer.terminal': 'TERMINAL',
        'footer.stardate': 'DATA ESTELAR',
        'footer.protocol': 'PROTOCOLO',
        'footer.tagline': 'Que o código esteja com você',
        'page.title': 'Mateus de Lima Silva - Desenvolvedor Full Stack',
        'language.toggle': 'Switch page to English',
        'contact.droidAlt': 'C-3PO, o droide de comunicação dourado transmitindo mensagens',
        'contact.droidCaption': 'C-3PO // TRANSMITINDO MENSAGEM PELO COMM-LINK',
        'opening.crawl': 'Há muito tempo, em uma galáxia muito, muito distante...'
    }
};

let currentLanguage = 'en';

function applyLanguage(language) {
    const translations = TRANSLATIONS[language];
    if (!translations) {
        throw new Error(`Unsupported language: ${language}`);
    }

    currentLanguage = language;
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    document.title = translations['page.title'];

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const translation = translations[element.dataset.i18n];
        if (translation !== undefined) element.textContent = translation;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
        element.dataset.i18nAttr.split(',').forEach(attributeTranslation => {
            const [attribute, key] = attributeTranslation.split(':');
            const translation = translations[key];
            if (translation !== undefined) element.setAttribute(attribute, translation);
        });
    });

    const toggle = document.getElementById('language-toggle');
    toggle.dataset.currentLanguage = language;
    toggle.setAttribute('aria-label', translations['language.toggle']);
    toggle.setAttribute('aria-pressed', String(language === 'pt'));
    toggle.querySelectorAll('[data-language-option]').forEach(option => {
        option.classList.toggle('is-active', option.dataset.languageOption === language);
    });

    document.getElementById('main-navigation').setAttribute('aria-label', translations['nav.label']);
    updateMobileMenuLabel();
}

function updateMobileMenuLabel() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-label', TRANSLATIONS[currentLanguage][isOpen ? 'menu.close' : 'menu.open']);
    menuToggle.querySelector('.material-symbols-outlined').textContent = isOpen ? 'close' : 'menu';
}

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

    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('click', () => {
        applyLanguage(currentLanguage === 'en' ? 'pt' : 'en');
    });

    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNavigation = document.getElementById('main-navigation');
    mobileMenuToggle.addEventListener('click', () => {
        const isOpen = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        mobileMenuToggle.setAttribute('aria-expanded', String(!isOpen));
        mainNavigation.classList.toggle('is-open', !isOpen);
        updateMobileMenuLabel();
    });

    applyLanguage(currentLanguage);

    // Loading Screen Logic
    window.addEventListener('load', () => {
        const openingText = document.getElementById('opening-text');
        const text = TRANSLATIONS[currentLanguage]['opening.crawl'];
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

            drawDeathStarSurface(ctx, dx, dy, dr);

            ctx.beginPath();
            ctx.arc(dx, dy, dr, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(222, 226, 222, 0.34)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }

        ctx.restore();
    }

    function drawDeathStarSurface(ctx, cx, cy, radius) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(radius, radius);
        ctx.beginPath();
        ctx.arc(0, 0, 1, 0, Math.PI * 2);
        ctx.clip();

        const surface = ctx.createRadialGradient(-0.4, -0.48, 0.04, 0.05, 0.1, 1.28);
        surface.addColorStop(0, 'rgba(226, 224, 213, 0.94)');
        surface.addColorStop(0.38, 'rgba(150, 152, 150, 0.91)');
        surface.addColorStop(0.72, 'rgba(73, 78, 82, 0.95)');
        surface.addColorStop(1, 'rgba(11, 15, 20, 1)');
        ctx.fillStyle = surface;
        ctx.fillRect(-1, -1, 2, 2);

        const panelWidth = 0.108;
        const panelHeight = 0.145;
        const columnStep = 0.12;
        const rowStep = 0.16;
        let row = 0;

        for (let y = -0.96; y < 0.96; y += rowStep) {
            let column = 0;
            for (let x = -0.99; x < 0.99; x += columnStep) {
                ctx.fillStyle = (row + column) % 5 === 0
                    ? 'rgba(29, 34, 38, 0.38)'
                    : 'rgba(224, 223, 213, 0.14)';
                ctx.fillRect(x, y, panelWidth, panelHeight);
                ctx.strokeStyle = 'rgba(24, 29, 33, 0.52)';
                ctx.lineWidth = 0.004;
                ctx.strokeRect(x, y, panelWidth, panelHeight);

                ctx.fillStyle = 'rgba(235, 233, 219, 0.28)';
                ctx.fillRect(x + 0.009, y + 0.01, 0.008, panelHeight - 0.02);
                ctx.fillStyle = 'rgba(241, 239, 224, 0.56)';
                ctx.fillRect(x + 0.032, y + 0.026, 0.009, 0.01);
                ctx.fillRect(x + 0.073, y + 0.052, 0.008, 0.009);
                ctx.fillStyle = 'rgba(25, 30, 33, 0.44)';
                ctx.fillRect(x + 0.035, y + 0.085, 0.047, 0.004);
                column++;
            }
            row++;
        }

        ctx.lineWidth = 0.006;
        for (let y = -0.8; y <= 0.8; y += rowStep) {
            ctx.strokeStyle = 'rgba(220, 220, 209, 0.2)';
            ctx.beginPath();
            ctx.moveTo(-1, y);
            ctx.lineTo(1, y);
            ctx.stroke();
        }

        ctx.beginPath();
        ctx.moveTo(-1, -0.005);
        ctx.quadraticCurveTo(0, -0.035, 1, -0.005);
        ctx.lineTo(1, 0.045);
        ctx.quadraticCurveTo(0, 0.015, -1, 0.045);
        ctx.closePath();
        ctx.fillStyle = 'rgba(14, 18, 21, 0.96)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(226, 224, 210, 0.64)';
        ctx.lineWidth = 0.008;
        ctx.beginPath();
        ctx.moveTo(-1, -0.005);
        ctx.quadraticCurveTo(0, -0.035, 1, -0.005);
        ctx.stroke();
        ctx.strokeStyle = 'rgba(5, 8, 11, 0.78)';
        ctx.lineWidth = 0.009;
        ctx.beginPath();
        ctx.moveTo(-1, 0.045);
        ctx.quadraticCurveTo(0, 0.015, 1, 0.045);
        ctx.stroke();

        const dishX = 0.38;
        const dishY = -0.46;
        ctx.save();
        ctx.translate(dishX, dishY);
        ctx.fillStyle = 'rgba(20, 24, 28, 0.94)';
        ctx.beginPath();
        ctx.arc(0, 0, 0.245, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(225, 223, 210, 0.92)';
        ctx.lineWidth = 0.018;
        ctx.stroke();
        ctx.fillStyle = 'rgba(62, 67, 68, 0.96)';
        ctx.beginPath();
        ctx.arc(0, 0, 0.215, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(20, 24, 27, 0.96)';
        ctx.lineWidth = 0.012;
        ctx.beginPath();
        ctx.arc(0, 0, 0.18, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = 'rgba(198, 197, 184, 0.76)';
        ctx.lineWidth = 0.008;
        ctx.beginPath();
        ctx.arc(0, 0, 0.155, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = 'rgba(189, 188, 175, 0.84)';
        ctx.lineWidth = 0.008;
        ctx.beginPath();
        ctx.arc(0, 0, 0.125, 0, Math.PI * 2);
        ctx.stroke();
        for (let segment = 0; segment < 12; segment++) {
            const angle = (Math.PI * 2 * segment) / 12;
            ctx.beginPath();
            ctx.moveTo(Math.cos(angle) * 0.125, Math.sin(angle) * 0.125);
            ctx.lineTo(Math.cos(angle) * 0.18, Math.sin(angle) * 0.18);
            ctx.strokeStyle = 'rgba(188, 188, 176, 0.45)';
            ctx.lineWidth = 0.006;
            ctx.stroke();
        }
        ctx.fillStyle = 'rgba(79, 83, 82, 0.98)';
        ctx.beginPath();
        ctx.arc(-0.025, 0.012, 0.082, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(15, 19, 22, 0.98)';
        ctx.lineWidth = 0.014;
        ctx.beginPath();
        ctx.arc(-0.025, 0.012, 0.053, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = 'rgba(18, 22, 24, 0.98)';
        ctx.beginPath();
        ctx.arc(-0.025, 0.012, 0.035, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        const sphericalLight = ctx.createRadialGradient(-0.42, -0.48, 0.04, -0.18, -0.2, 1.35);
        sphericalLight.addColorStop(0, 'rgba(255, 255, 245, 0.3)');
        sphericalLight.addColorStop(0.32, 'rgba(224, 232, 231, 0.14)');
        sphericalLight.addColorStop(0.62, 'rgba(24, 30, 37, 0.14)');
        sphericalLight.addColorStop(0.84, 'rgba(5, 9, 14, 0.48)');
        sphericalLight.addColorStop(1, 'rgba(0, 0, 0, 0.84)');
        ctx.fillStyle = sphericalLight;
        ctx.fillRect(-1, -1, 2, 2);

        const directionalShade = ctx.createLinearGradient(-0.75, -0.85, 0.85, 0.75);
        directionalShade.addColorStop(0, 'rgba(255, 255, 245, 0.12)');
        directionalShade.addColorStop(0.3, 'rgba(255, 255, 245, 0.04)');
        directionalShade.addColorStop(0.58, 'rgba(0, 0, 0, 0)');
        directionalShade.addColorStop(0.82, 'rgba(0, 0, 0, 0.16)');
        directionalShade.addColorStop(1, 'rgba(0, 0, 0, 0.48)');
        ctx.fillStyle = directionalShade;
        ctx.fillRect(-1, -1, 2, 2);

        const limbShade = ctx.createRadialGradient(0, 0, 0.64, 0, 0, 1);
        limbShade.addColorStop(0, 'rgba(0, 0, 0, 0)');
        limbShade.addColorStop(0.7, 'rgba(0, 0, 0, 0.03)');
        limbShade.addColorStop(0.9, 'rgba(0, 0, 0, 0.28)');
        limbShade.addColorStop(1, 'rgba(0, 0, 0, 0.72)');
        ctx.fillStyle = limbShade;
        ctx.fillRect(-1, -1, 2, 2);
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
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mainNavigation.classList.remove('is-open');
            updateMobileMenuLabel();
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
          
          const target = this.dataset.target;
          const form = this.form;
          if (target === 'send' && (!form || !form.reportValidity() || this.dataset.saberActive === 'true')) {
            return;
          }

          const wrapper = this.closest('.saber-btn-wrapper');
          const cutCanvas = wrapper.querySelector('.saber-cut-canvas');
          const scene = this.dataset.scene;
          if (target === 'send') this.dataset.saberActive = 'true';
          
          const btnRect = this.getBoundingClientRect();
          cutCanvas.width = btnRect.width;
          cutCanvas.height = btnRect.height;
          cutCanvas.style.position = 'absolute';
          cutCanvas.style.top = '0';
          cutCanvas.style.left = '0';
          cutCanvas.style.width = `${btnRect.width}px`;
          cutCanvas.style.height = `${btnRect.height}px`;
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
                  delete btn.dataset.saberActive;
                  form.requestSubmit(btn);
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

    function initContactForm() {
      const form = document.getElementById('contact-form');
      const submitButton = form.querySelector('button[type="submit"]');
      const status = document.getElementById('contact-status');
      const captchaContainer = document.getElementById('contact-captcha');
      let captchaWidgetId = null;

      function setStatus(key, state = 'error') {
        status.hidden = false;
        status.dataset.i18n = key;
        status.dataset.state = state;
        status.textContent = TRANSLATIONS[currentLanguage][key];
      }

      function resetCaptcha() {
        if (captchaWidgetId !== null && window.grecaptcha) {
          window.grecaptcha.reset(captchaWidgetId);
        }
      }

      const config = window.EMAILJS_CONFIG || {};
      const siteKey = typeof config.recaptchaSiteKey === 'string'
        ? config.recaptchaSiteKey.trim()
        : '';

      if (siteKey && !siteKey.includes('YOUR_')) {
        window.onContactRecaptchaLoaded = () => {
          try {
            captchaWidgetId = window.grecaptcha.render(captchaContainer, {
              sitekey: siteKey
            });
          } catch (error) {
            console.error('Contact form CAPTCHA initialization failed:', error);
            setStatus('contact.captchaLoadError');
          }
        };

        const captchaScript = document.createElement('script');
        captchaScript.src = 'https://www.google.com/recaptcha/api.js?onload=onContactRecaptchaLoaded&render=explicit';
        captchaScript.async = true;
        captchaScript.defer = true;
        captchaScript.onerror = () => {
          console.error('Contact form CAPTCHA script failed to load.');
          setStatus('contact.captchaLoadError');
        };
        document.head.appendChild(captchaScript);
      }

      form.addEventListener('input', () => {
        if (form.dataset.submitting === 'true') return;
        status.hidden = true;
        status.textContent = '';
        delete status.dataset.i18n;
        delete status.dataset.state;
      });

      form.addEventListener('submit', async event => {
        event.preventDefault();
        if (form.dataset.submitting === 'true') return;

        const publicKey = typeof config.publicKey === 'string' ? config.publicKey.trim() : '';
        const serviceId = typeof config.serviceId === 'string' ? config.serviceId.trim() : '';
        const templateId = typeof config.templateId === 'string' ? config.templateId.trim() : '';
        if (
          !publicKey || publicKey.includes('YOUR_') ||
          !serviceId || serviceId.includes('YOUR_') ||
          !templateId || templateId.includes('YOUR_') ||
          !siteKey || siteKey.includes('YOUR_')
        ) {
          setStatus('contact.notConfigured');
          return;
        }

        if (form.elements.website.value.trim()) {
          setStatus('contact.spamDetected');
          return;
        }

        if (captchaWidgetId === null || !window.grecaptcha) {
          setStatus('contact.captchaLoadError');
          return;
        }

        const captchaResponse = window.grecaptcha.getResponse(captchaWidgetId);
        if (!captchaResponse) {
          setStatus('contact.captchaRequired');
          return;
        }

        form.dataset.submitting = 'true';
        submitButton.disabled = true;
        setStatus('contact.sending', 'pending');

        try {
          const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              service_id: serviceId,
              template_id: templateId,
              user_id: publicKey,
              template_params: {
                subject: form.elements.subject.value.trim(),
                message: form.elements.message.value.trim(),
                reply_to: form.elements.email.value.trim(),
                'g-recaptcha-response': captchaResponse
              }
            })
          });

          if (!response.ok) {
            throw new Error(`EmailJS returned status ${response.status}`);
          }

          form.reset();
          setStatus('contact.success', 'success');
        } catch (error) {
          console.error('Contact form submission failed:', error);
          setStatus('contact.error');
        } finally {
          resetCaptcha();
          delete form.dataset.submitting;
          submitButton.disabled = false;
        }
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
          fadeOutAndReset(canvas, targetUrl);
        }
      }
      
      animateExplosion();
    }

    function fadeOutAndReset(canvas, targetUrl) {
      let alpha = 0;
      const ctx = canvas.getContext('2d');
      
      function flashOut() {
        alpha += 0.06;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        if (alpha < 1) {
          requestAnimationFrame(flashOut);
        } else {
          if (targetUrl && targetUrl !== '#') {
            const destinationWindow = window.open(targetUrl, '_blank');
            if (destinationWindow) {
              destinationWindow.opener = null;
            } else {
              window.location.assign(targetUrl);
              return;
            }
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
      initContactForm();
    });