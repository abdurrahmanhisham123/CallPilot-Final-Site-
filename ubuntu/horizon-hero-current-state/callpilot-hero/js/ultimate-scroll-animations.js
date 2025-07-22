/**
 * 🎨 PREMIUM HIGH-END SCROLL ANIMATIONS
 * Ultra-smooth, sophisticated animations with perfect timing
 */

console.log('🚀 Starting Premium Scroll Animations...');

// Advanced animation configurations
const ANIMATION_CONFIGS = {
    elegantFadeUp: {
        initial: 'translateY(80px) scale(0.95)',
        final: 'translateY(0) scale(1)',
        duration: '1.2s',
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: { from: 0, to: 1 }
    },
    smoothSlideLeft: {
        initial: 'translateX(-100px) rotate(-2deg)',
        final: 'translateX(0) rotate(0deg)',
        duration: '1s',
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        opacity: { from: 0, to: 1 }
    },
    smoothSlideRight: {
        initial: 'translateX(100px) rotate(2deg)',
        final: 'translateX(0) rotate(0deg)',
        duration: '1s',
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        opacity: { from: 0, to: 1 }
    },
    premiumScale: {
        initial: 'scale(0.8) translateY(40px)',
        final: 'scale(1) translateY(0)',
        duration: '0.8s',
        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: { from: 0, to: 1 }
    },
    sophisticatedFlip: {
        initial: 'perspective(1000px) rotateX(-30deg) translateY(50px)',
        final: 'perspective(1000px) rotateX(0deg) translateY(0)',
        duration: '1.3s',
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        opacity: { from: 0, to: 1 }
    },
    luxuryBounce: {
        initial: 'scale(0.3) translateY(150px) rotate(10deg)',
        final: 'scale(1) translateY(0) rotate(0deg)',
        duration: '0.7s',
        easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        opacity: { from: 0, to: 1 }
    },
    gentleFloat: {
        initial: 'translateY(60px) scale(0.9) rotate(-1deg)',
        final: 'translateY(0) scale(1) rotate(0deg)',
        duration: '0.6s',
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
        opacity: { from: 0, to: 1 }
    },
    modernSlideUp: {
        initial: 'translateY(120px) scale(0.85)',
        final: 'translateY(0) scale(1)',
        duration: '1.2s',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        opacity: { from: 0, to: 1 }
    },
    // ✨ CORNER-SPECIFIC ANIMATIONS FOR THE 3 KEY SECTIONS ✨
    
    // Cards slide in from their opposite corners (FASTER)
    slideFromTopRight: {
        initial: 'translateX(300px) translateY(-200px) scale(0.8)',
        final: 'translateX(0) translateY(0) scale(1)',
        duration: '1.1s',
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        opacity: { from: 0, to: 1 }
    },
    slideFromBottomRight: {
        initial: 'translateX(300px) translateY(200px) scale(0.8)',
        final: 'translateX(0) translateY(0) scale(1)',
        duration: '1.1s',
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        opacity: { from: 0, to: 1 }
    },
    slideFromTopLeft: {
        initial: 'translateX(-300px) translateY(-200px) scale(0.8)',
        final: 'translateX(0) translateY(0) scale(1)',
        duration: '1.1s',
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        opacity: { from: 0, to: 1 }
    },
    slideFromBottomLeft: {
        initial: 'translateX(-300px) translateY(200px) scale(0.8)',
        final: 'translateX(0) translateY(0) scale(1)',
        duration: '1.1s',
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        opacity: { from: 0, to: 1 }
    },
    
    // Text animations that complement the cards (FASTER)
    textSlideFromLeft: {
        initial: 'translateX(-150px) translateY(30px) scale(0.95)',
        final: 'translateX(0) translateY(0) scale(1)',
        duration: '1.0s',
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: { from: 0, to: 1 }
    },
    textSlideFromRight: {
        initial: 'translateX(150px) translateY(30px) scale(0.95)',
        final: 'translateX(0) translateY(0) scale(1)',
        duration: '1.0s',
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: { from: 0, to: 1 }
    },
    textFadeUpGentle: {
        initial: 'translateY(60px) scale(0.95)',
        final: 'translateY(0) scale(1)',
        duration: '0.9s',
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
        opacity: { from: 0, to: 1 }
    }
};

// Performance optimized animation function
function addPremiumAnimation(element, animationType, delay = 0) {
    const config = ANIMATION_CONFIGS[animationType] || ANIMATION_CONFIGS.elegantFadeUp;
    
    // Optimize with will-change and transform3d for hardware acceleration
    element.style.willChange = 'transform, opacity';
    element.style.backfaceVisibility = 'hidden';
    element.style.perspective = '1000px';
    
    // Set initial state
    element.style.opacity = config.opacity.from.toString();
    element.style.transform = config.initial;
    element.style.transition = `all ${config.duration} ${config.easing}`;
    element.style.transitionDelay = delay + 'ms';
    
    // Store animation data
    element.dataset.animationType = animationType;
    element.dataset.animated = 'false';
    element.dataset.finalTransform = config.final;
    element.dataset.finalOpacity = config.opacity.to.toString();
    
    console.log('✨ Premium animation applied:', element.tagName, animationType);
}

// Smooth, optimized animation execution
function executeAnimation(element) {
    if (element.dataset.animated === 'true') return;
    
    // Use requestAnimationFrame for smooth animations
    requestAnimationFrame(() => {
        element.style.opacity = element.dataset.finalOpacity;
        element.style.transform = element.dataset.finalTransform;
        element.dataset.animated = 'true';
        
        // Clean up will-change after animation
        setTimeout(() => {
            element.style.willChange = 'auto';
        }, parseFloat(element.style.transitionDuration) * 1000 + 100);
    });
    
    console.log('🎬 Premium animation executed:', element.tagName);
}

// Wait for DOM with enhanced element detection
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 Premium animations initializing...');
    
    // Comprehensive card selectors with priority order
    const premiumSelectors = [
        { selector: '.apple-glass-card', animation: 'elegantFadeUp', baseDelay: 0 },
        { selector: '.premium-dashboard', animation: 'premiumScale', baseDelay: 100 },
        { selector: '.analytics-apple-card', animation: 'smoothSlideLeft', baseDelay: 200 },
        { selector: '.emerging-frontiers-card', animation: 'sophisticatedFlip', baseDelay: 300 },
        { selector: '.voice-studio-card', animation: 'luxuryBounce', baseDelay: 50 },
        { selector: '.apple-discovery-card', animation: 'smoothSlideRight', baseDelay: 250 },
        { selector: '.feature-card', animation: 'gentleFloat', baseDelay: 50 },
        { selector: '.capability-card', animation: 'modernSlideUp', baseDelay: 100 },
        { selector: '.faq-glass-item', animation: 'elegantFadeUp', baseDelay: 75 },
        { selector: '.scenario-card', animation: 'premiumScale', baseDelay: 50 },
        { selector: '.ai-interface', animation: 'sophisticatedFlip', baseDelay: 175 },
        { selector: '.dashboard-grid', animation: 'smoothSlideLeft', baseDelay: 200 }
    ];
    
    let totalElements = 0;
    
    // Apply premium animations to all cards
    premiumSelectors.forEach(({ selector, animation, baseDelay }) => {
        const elements = document.querySelectorAll(selector);
        console.log(`🎯 Found ${elements.length} elements for ${selector}`);
        
        elements.forEach((element, index) => {
            const staggerDelay = baseDelay + (index * 60); // Much faster stagger timing
            addPremiumAnimation(element, animation, staggerDelay);
            totalElements++;
        });
    });
    
    // Premium animations for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (section.id !== 'hero') {
            addPremiumAnimation(section, 'elegantFadeUp', index * 100);
            totalElements++;
        }
    });
    
    // Sophisticated title animations
    const titles = document.querySelectorAll('h1, h2, h3, .title, .section-label, .exploration-title');
    titles.forEach((title, index) => {
        const animationType = ['elegantFadeUp', 'gentleFloat', 'modernSlideUp'][index % 3];
        addPremiumAnimation(title, animationType, index * 80);
        totalElements++;
    });
    
    // Premium button animations
    const buttons = document.querySelectorAll('button, .cta-button, .contact-btn, .get-started-btn');
    buttons.forEach((button, index) => {
        addPremiumAnimation(button, 'premiumScale', index * 120);
        totalElements++;
    });
    
    // Animate text content (FASTER for call handling cards)
    const textElements = document.querySelectorAll('p, .description, .metric-label, .metric-value');
    textElements.forEach((text, index) => {
        if (text.textContent.trim().length > 10) { // Only animate meaningful text
            // Check if this text is inside a scenario card (call handling section)
            const isInScenarioCard = text.closest('.scenario-card');
            const delay = isInScenarioCard ? index * 10 : index * 60; // Even faster for scenario cards
            addPremiumAnimation(text, 'gentleFloat', delay);
            totalElements++;
        }
    });
    
    // 🌟 APPLY CORNER-SPECIFIC ANIMATIONS TO THE 3 SPECIAL SECTIONS 🌟
    const cornerSections = [
        { 
            selector: '.ai-exploration', 
            name: 'Future of Communication Intelligence',
            // Card is on RIGHT, so slide from TOP-LEFT corner (opposite)
            cardAnimation: 'slideFromTopLeft',
            // Text is on LEFT, so slide from RIGHT
            textAnimation: 'textSlideFromRight'
        },
        { 
            selector: '.ai-brilliance', 
            name: 'AI Artistry & Masterpieces',
            // Card is on RIGHT, so slide from BOTTOM-LEFT corner (opposite)
            cardAnimation: 'slideFromBottomLeft',
            // Text is on LEFT, so slide from RIGHT  
            textAnimation: 'textSlideFromRight'
        },
        { 
            selector: '.dashboard-power', 
            name: 'Dashboard Power',
            // Card is on LEFT, so slide from TOP-RIGHT corner (opposite)
            cardAnimation: 'slideFromTopRight',
            // Text is on RIGHT, so slide from LEFT
            textAnimation: 'textSlideFromLeft'
        }
    ];
    
    cornerSections.forEach((sectionInfo, sectionIndex) => {
        const section = document.querySelector(sectionInfo.selector);
        if (section) {
            console.log(`🎯 Applying CORNER animations to ${sectionInfo.name} section`);
            
            // Apply gentle fade to the main section
            addPremiumAnimation(section, 'textFadeUpGentle', sectionIndex * 100);
            totalElements++;
            
            // Find all CARDS in this section and apply corner-specific animation
            const sectionCards = section.querySelectorAll('.emerging-frontiers-card, .apple-glass-card, .premium-dashboard, .dashboard-grid');
            sectionCards.forEach((card, cardIndex) => {
                addPremiumAnimation(card, sectionInfo.cardAnimation, (sectionIndex * 150) + (cardIndex * 80));
                totalElements++;
                console.log(`🎨 ${sectionInfo.cardAnimation} applied to card in ${sectionInfo.name}`);
            });
            
            // Apply TEXT animations to titles
            const sectionTitles = section.querySelectorAll('h3, .exploration-title, .brilliance-title, .section-label, .power-title');
            sectionTitles.forEach((title, titleIndex) => {
                addPremiumAnimation(title, sectionInfo.textAnimation, (sectionIndex * 200) + (titleIndex * 70));
                totalElements++;
                console.log(`📝 ${sectionInfo.textAnimation} applied to title in ${sectionInfo.name}`);
            });
            
            // Apply gentle fade to descriptions and text content
            const sectionTexts = section.querySelectorAll('p, .description, .metric-card, .apple-metrics, .brilliance-fact, .power-description');
            sectionTexts.forEach((text, textIndex) => {
                if (text.textContent.trim().length > 10) {
                    addPremiumAnimation(text, 'textFadeUpGentle', (sectionIndex * 300) + (textIndex * 60));
                    totalElements++;
                }
            });
            
            // Special handling for text sections (exploration-text, brilliance-text, power-text)  
            const textSection = section.querySelector('.exploration-text, .brilliance-text, .power-text');
            if (textSection) {
                addPremiumAnimation(textSection, sectionInfo.textAnimation, (sectionIndex * 180));
                totalElements++;
                console.log(`📄 ${sectionInfo.textAnimation} applied to text section in ${sectionInfo.name}`);
            }
            
            // SPECIAL: Make sure dashboard-power section gets animated properly
            if (sectionInfo.selector === '.dashboard-power') {
                // Animate the entire power-content container
                const powerContent = section.querySelector('.power-content');
                if (powerContent) {
                    addPremiumAnimation(powerContent, 'textFadeUpGentle', 100);
                    totalElements++;
                    console.log(`⚡ Extra animation applied to power-content`);
                }
                
                // Animate any dashboard elements specifically
                const dashboardElements = section.querySelectorAll('.dashboard, .dashboard-preview, .power-visual');
                dashboardElements.forEach((element, index) => {
                    addPremiumAnimation(element, sectionInfo.cardAnimation, 150 + (index * 100));
                    totalElements++;
                    console.log(`⚡ Dashboard element animated in power section`);
                });
            }
        }
    });
    
    console.log(`🎨 Premium animations applied to ${totalElements} elements`);
    
    // High-performance intersection observer with perfect timing
    const premiumObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Perfect timing: animate when 20% of element is visible
                if (entry.intersectionRatio >= 0.2) {
                    executeAnimation(entry.target);
                    premiumObserver.unobserve(entry.target);
                }
            }
        });
    }, {
        threshold: [0.1, 0.2, 0.3], // Multiple thresholds for precision
        rootMargin: '50px 0px -50px 0px' // Perfect timing window
    });
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[data-animation-type]');
    animatedElements.forEach(element => {
        premiumObserver.observe(element);
    });
    
    console.log(`👀 Observing ${animatedElements.length} elements with premium timing`);
});

// Enhanced load handler for any missed elements
window.addEventListener('load', function() {
    console.log('🌟 Premium animations fully loaded');
    
    // Catch any visible elements that might have been missed
    setTimeout(() => {
        const unanimatedElements = document.querySelectorAll('[data-animation-type][data-animated="false"]');
        unanimatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Animate if element is in a good viewing position
            if (rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2) {
                executeAnimation(element);
            }
        });
    }, 500);
});