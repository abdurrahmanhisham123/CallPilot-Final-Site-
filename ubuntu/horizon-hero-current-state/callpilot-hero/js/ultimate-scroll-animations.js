/**
 * 🎨 ULTIMATE SCROLL ANIMATIONS - 10/10 QUALITY
 * Comprehensive scroll-triggered animations for ALL elements
 * NO HOVER EFFECTS - Pure scroll animations only
 */

class UltimateScrollAnimations {
    constructor() {
        this.observer = null;
        this.elements = new Map();
        this.animationTypes = [
            'fade-up-scale',
            'fade-left-rotate', 
            'fade-right-rotate',
            'flip-3d',
            'bounce-elastic',
            'zoom-blur-in',
            'slide-tilt',
            'glass-lift',
            'card-flip-reveal',
            'card-depth-slide',
            'card-spring',
            'morph-in',
            'gradient-reveal',
            'perspective-slide'
        ];
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setup();
            });
        } else {
            this.setup();
        }
    }

    setup() {
        console.log('🎨 Initializing Ultimate Scroll Animations...');
        this.setupIntersectionObserver();
        this.findAndAnimateAllElements();
        this.observeAllElements();
        console.log(`✨ ${this.elements.size} elements ready for animation!`);
    }

    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: [0.1, 0.3, 0.5]
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                    this.triggerAnimation(entry.target);
                }
            });
        }, options);
    }

    findAndAnimateAllElements() {
        // Clear any existing elements
        this.elements.clear();

        // Find ALL possible elements that need animation
        this.animateCards();
        this.animateSections();
        this.animateTexts();
        this.animateButtons();
        this.animateInterfaces();
        this.animateSpecialElements();
    }

    animateCards() {
        console.log('🃏 Finding and animating cards...');
        
        // All glass cards
        const glassCards = document.querySelectorAll('.apple-glass-card');
        glassCards.forEach((card, index) => {
            const animationType = this.animationTypes[index % this.animationTypes.length];
            const staggerClass = `stagger-${(index % 6) + 1}`;
            this.addAnimation(card, animationType, staggerClass);
        });

        // Premium dashboard cards
        const premiumCards = document.querySelectorAll('.premium-dashboard');
        premiumCards.forEach((card, index) => {
            this.addAnimation(card, 'glass-lift', `stagger-${index + 1}`);
        });

        // Analytics cards
        const analyticsCards = document.querySelectorAll('.analytics-apple-card');
        analyticsCards.forEach((card, index) => {
            this.addAnimation(card, 'card-flip-reveal', `stagger-${index + 1}`);
        });

        // Emerging frontiers cards
        const frontierCards = document.querySelectorAll('.emerging-frontiers-card');
        frontierCards.forEach((card, index) => {
            this.addAnimation(card, 'perspective-slide', 'stagger-1');
        });

        // Voice studio cards
        const voiceCards = document.querySelectorAll('.voice-studio-card');
        voiceCards.forEach((card, index) => {
            this.addAnimation(card, 'bounce-elastic', `stagger-${(index % 4) + 1}`);
        });

        // Discovery cards
        const discoveryCards = document.querySelectorAll('.apple-discovery-card');
        discoveryCards.forEach((card, index) => {
            const animations = ['card-depth-slide', 'flip-3d'];
            this.addAnimation(card, animations[index % animations.length], `stagger-${index + 1}`);
        });

        // Feature cards
        const featureCards = document.querySelectorAll('.feature-card, .capability-card');
        featureCards.forEach((card, index) => {
            this.addAnimation(card, 'zoom-blur-in', `stagger-${(index % 5) + 1}`);
        });

        // FAQ items
        const faqItems = document.querySelectorAll('.faq-glass-item');
        faqItems.forEach((item, index) => {
            const animations = ['fade-left-rotate', 'fade-right-rotate'];
            this.addAnimation(item, animations[index % 2], `stagger-${index + 1}`);
        });

        // Scenario cards
        const scenarioCards = document.querySelectorAll('.scenario-card');
        scenarioCards.forEach((card, index) => {
            this.addAnimation(card, 'card-spring', `stagger-${index + 1}`);
        });

        // Plan cards in the plans section
        const planCards = document.querySelectorAll('.plans-grid .apple-glass-card');
        planCards.forEach((card, index) => {
            this.addAnimation(card, 'glass-lift', `stagger-${(index + 1) * 2}`);
        });
    }

    animateSections() {
        console.log('📄 Finding and animating sections...');
        
        // Main sections
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            const sectionClass = section.className;
            
            if (sectionClass.includes('ai-exploration')) {
                this.addAnimation(section, 'hero-dramatic', 'stagger-1');
            } else if (sectionClass.includes('ai-brilliance')) {
                this.addAnimation(section, 'fade-left-rotate', 'stagger-2');
            } else if (sectionClass.includes('dashboard-power')) {
                this.addAnimation(section, 'fade-right-rotate', 'stagger-3');
            } else if (sectionClass.includes('plans-section')) {
                this.addAnimation(section, 'perspective-slide', 'stagger-1');
            } else if (sectionClass.includes('voice-technology')) {
                this.addAnimation(section, 'gradient-reveal', 'stagger-2');
            } else if (sectionClass.includes('discovery-planning')) {
                this.addAnimation(section, 'morph-in', 'stagger-1');
            } else if (sectionClass.includes('faq-section')) {
                this.addAnimation(section, 'fade-up-scale', 'stagger-1');
            }
        });

        // Section headers
        const sectionHeaders = document.querySelectorAll('.section-header, .new-section-header, .faq-header');
        sectionHeaders.forEach((header, index) => {
            this.addAnimation(header, 'text-typewriter', `fast-stagger-${index + 1}`);
        });
    }

    animateTexts() {
        console.log('📝 Finding and animating text elements...');
        
        // Titles and headings
        const titles = document.querySelectorAll('h1, h2, h3, h4, .title, .section-title, .plans-title, .faq-title');
        titles.forEach((title, index) => {
            if (!title.closest('.animate-assigned')) {
                this.addAnimation(title, 'text-typewriter', `fast-stagger-${(index % 6) + 1}`);
            }
        });

        // Descriptions
        const descriptions = document.querySelectorAll('p, .description, .plans-description, .faq-description');
        descriptions.forEach((desc, index) => {
            if (!desc.closest('.animate-assigned')) {
                this.addAnimation(desc, 'fade-up-scale', `fast-stagger-${(index % 6) + 1}`);
            }
        });

        // Special text elements
        const specialTexts = document.querySelectorAll('.hero-description, .brilliance-description, .exploration-description');
        specialTexts.forEach((text, index) => {
            this.addAnimation(text, 'slide-tilt', `stagger-${index + 1}`);
        });
    }

    animateButtons() {
        console.log('🔘 Finding and animating buttons...');
        
        // All buttons
        const buttons = document.querySelectorAll('button, .btn, .cta-button, .contact-btn, .explore-features-btn');
        buttons.forEach((button, index) => {
            if (!button.closest('.animate-assigned')) {
                this.addAnimation(button, 'button-entrance', `fast-stagger-${(index % 6) + 1}`);
            }
        });
    }

    animateInterfaces() {
        console.log('🖥️ Finding and animating interfaces...');
        
        // AI interfaces
        const aiInterfaces = document.querySelectorAll('.ai-interface');
        aiInterfaces.forEach((interface, index) => {
            this.addAnimation(interface, 'flip-3d', `stagger-${index + 2}`);
        });

        // Dashboard grids
        const dashboards = document.querySelectorAll('.dashboard-grid, .intelligence-features-grid');
        dashboards.forEach((dashboard, index) => {
            this.addAnimation(dashboard, 'perspective-slide', `stagger-${index + 1}`);
        });
    }

    animateSpecialElements() {
        console.log('⭐ Finding and animating special elements...');
        
        // Grids and containers
        const grids = document.querySelectorAll('.plans-grid, .discovery-cards-grid, .voice-tech-content');
        grids.forEach((grid, index) => {
            this.addAnimation(grid, 'fade-up-scale', `stagger-${index + 1}`);
        });

        // Progress bars and indicators
        const progress = document.querySelectorAll('.progress-bar, .indicator, '.status-indicator');
        progress.forEach((item, index) => {
            this.addAnimation(item, 'morph-in', `fast-stagger-${index + 1}`);
        });

        // Images and media
        const media = document.querySelectorAll('img, .image-container, .media-element');
        media.forEach((item, index) => {
            if (!item.closest('.animate-assigned')) {
                this.addAnimation(item, 'zoom-blur-in', `stagger-${(index % 4) + 1}`);
            }
        });

        // Lists and list items
        const lists = document.querySelectorAll('ul, ol, .list');
        lists.forEach(list => {
            const items = list.querySelectorAll('li');
            items.forEach((item, index) => {
                if (!item.closest('.animate-assigned')) {
                    const animations = ['fade-left-rotate', 'fade-right-rotate'];
                    this.addAnimation(item, animations[index % 2], `fast-stagger-${index + 1}`);
                }
            });
        });
    }

    addAnimation(element, animationType, staggerClass = '') {
        if (!element || this.elements.has(element)) {
            return; // Skip if element already has animation
        }

        // Mark as assigned to prevent duplicate animations
        element.classList.add('animate-assigned');
        
        // Add animation classes
        element.classList.add(animationType);
        if (staggerClass) {
            element.classList.add(staggerClass);
        }

        // Store element info
        this.elements.set(element, {
            type: animationType,
            stagger: staggerClass,
            animated: false
        });

        console.log(`🎭 Added ${animationType} to`, element.tagName, element.className);
    }

    observeAllElements() {
        this.elements.forEach((info, element) => {
            this.observer.observe(element);
        });
    }

    triggerAnimation(element) {
        const info = this.elements.get(element);
        if (info && !info.animated) {
            element.classList.add('animate-in');
            info.animated = true;
            this.observer.unobserve(element);
            console.log('✨ Animated:', element.tagName, info.type);
        }
    }

    // Public methods for manual control
    animateElement(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (this.elements.has(element)) {
                element.classList.add('animate-in');
            }
        });
    }

    resetAnimations() {
        this.elements.forEach((info, element) => {
            element.classList.remove('animate-in');
            info.animated = false;
            this.observer.observe(element);
        });
    }

    addCustomElement(element, animationType, staggerClass = '') {
        this.addAnimation(element, animationType, staggerClass);
        this.observer.observe(element);
    }
}

// Initialize the animation system
let ultimateAnimations;

document.addEventListener('DOMContentLoaded', () => {
    ultimateAnimations = new UltimateScrollAnimations();
    
    // Expose for debugging
    window.UltimateAnimations = ultimateAnimations;
    
    console.log('🎨 Ultimate Scroll Animations System Loaded!');
});

// Handle dynamic content
const handleDynamicContent = () => {
    if (ultimateAnimations) {
        setTimeout(() => {
            ultimateAnimations.findAndAnimateAllElements();
            ultimateAnimations.observeAllElements();
        }, 100);
    }
};

// Watch for dynamic content changes
if (window.MutationObserver) {
    const observer = new MutationObserver(handleDynamicContent);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}