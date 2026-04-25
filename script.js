// Theme management
const THEMES = {
    default: {
        name: 'Terminal White',
        bgColor: '#000000',
        textColor: '#ffffff',
        accentColor: '#ffffff',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        cardBg: '#0a0a0a',
        glowColor: 'rgba(255, 255, 255, 0.3)',
    },
    matrix: {
        name: 'Matrix Green',
        bgColor: '#000000',
        textColor: '#00ff00',
        accentColor: '#00ff00',
        borderColor: 'rgba(0, 255, 0, 0.3)',
        cardBg: '#0a0a0a',
        glowColor: 'rgba(0, 255, 0, 0.3)',
    },
    ember: {
        name: 'Ember DEC',
        bgColor: '#0a0400',
        textColor: '#ff8c00',
        accentColor: '#ff6b35',
        borderColor: 'rgba(255, 140, 0, 0.3)',
        cardBg: '#1a0800',
        glowColor: 'rgba(255, 107, 53, 0.3)',
    }
};

function setTheme(themeName) {
    const theme = THEMES[themeName];
    if (!theme) return;

    // Update CSS variables
    document.documentElement.style.setProperty('--bg-color', theme.bgColor);
    document.documentElement.style.setProperty('--text-color', theme.textColor);
    document.documentElement.style.setProperty('--accent-color', theme.accentColor);
    document.documentElement.style.setProperty('--border-color', theme.borderColor);
    document.documentElement.style.setProperty('--card-bg', theme.cardBg);
    document.documentElement.style.setProperty('--text-muted', '#666666');
    document.documentElement.style.setProperty('--text-bright', theme.textColor);
    document.documentElement.style.setProperty('--hover-color', theme.accentColor);
    document.documentElement.style.setProperty('--selection-bg', theme.accentColor);
    document.documentElement.style.setProperty('--selection-text', theme.bgColor);
    document.documentElement.style.setProperty('--glow', `0 0 10px ${theme.glowColor}`);

    // Save preference to localStorage
    localStorage.setItem('selectedTheme', themeName);

    // Update select dropdown on all pages
    const selects = document.querySelectorAll('.theme-select');
    selects.forEach(select => {
        select.value = themeName;
    });
}

function initThemes() {
    // Load saved theme or default to 'default'
    const saved = localStorage.getItem('selectedTheme') || 'default';
    setTheme(saved);

    // Add change handlers to all theme select dropdowns
    document.querySelectorAll('.theme-select').forEach(select => {
        select.addEventListener('change', (e) => {
            setTheme(e.target.value);
        });
    });

    // Prevent unwanted double-tap zoom on mobile for dropdown
    document.querySelectorAll('.theme-select').forEach(select => {
        select.addEventListener('touchstart', function() {
            this.style.opacity = '0.7';
        });
        select.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
}

// Initialize themes when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function init() {
    initThemes();
    initActiveNav();
    initTypingCursor();
    initBackToTop();
    initCopyButtons();
}

function initActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });
}

function initTypingCursor() {
    const el = document.getElementById('hero-text');
    if (!el) return;
    const text = el.dataset.text || '';
    let i = 0;
    function type() {
        if (i < text.length) {
            el.textContent += text[i++];
            setTimeout(type, 75);
        }
    }
    type();
}

function initBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.textContent = '^ top';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initCopyButtons() {
    document.querySelectorAll('pre').forEach(pre => {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);

        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.textContent = 'copy';
        wrapper.appendChild(btn);

        btn.addEventListener('click', () => {
            const code = pre.querySelector('code');
            navigator.clipboard.writeText(code ? code.textContent : pre.textContent).then(() => {
                btn.textContent = 'copied!';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.textContent = 'copy';
                    btn.classList.remove('copied');
                }, 2000);
            });
        });
    });
}
