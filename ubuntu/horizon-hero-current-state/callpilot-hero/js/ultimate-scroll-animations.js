/**
 * 🎨 SIMPLE BUT EFFECTIVE SCROLL ANIMATIONS
 * This version WILL work and be visible!
 */

console.log('🎨 Starting Simple Scroll Animations...');

// Function to add animations to elements
function addScrollAnimation(element, animationType, delay = 0) {
    element.style.opacity = '0';
    element.style.transform = getInitialTransform(animationType);
    element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    element.style.transitionDelay = delay + 'ms';
    element.dataset.animationType = animationType;
    element.dataset.animated = 'false';
    
    console.log('✨ Added animation to:', element.tagName, element.className, animationType);
}

// Get initial transform based on animation type
function getInitialTransform(type) {
    switch(type) {
        case 'fadeUp': return 'translateY(60px)';
        case 'fadeLeft': return 'translateX(-60px)';
        case 'fadeRight': return 'translateX(60px)';
        case 'fadeDown': return 'translateY(-60px)';
        case 'scale': return 'scale(0.8)';
        case 'flip': return 'perspective(1000px) rotateY(-90deg)';
        case 'bounce': return 'scale(0.3) translateY(100px)';
        default: return 'translateY(40px)';
    }
}

// Function to animate element when it comes into view
function animateElement(element) {
    if (element.dataset.animated === 'true') return;
    
    element.style.opacity = '1';
    element.style.transform = 'translateY(0) translateX(0) scale(1) rotateY(0)';
    element.dataset.animated = 'true';
    
    console.log('🎬 Animated:', element.tagName, element.className);
}

// Wait for DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM loaded - Finding elements...');
    
    // Find and animate ALL cards
    const cardSelectors = [
        '.apple-glass-card',
        '.premium-dashboard', 
        '.analytics-apple-card',
        '.emerging-frontiers-card',
        '.voice-studio-card',
        '.apple-discovery-card',
        '.feature-card',
        '.capability-card',
        '.faq-glass-item',
        '.scenario-card',
        '.ai-interface',
        '.dashboard-grid'
    ];
    
    const animations = ['fadeUp', 'fadeLeft', 'fadeRight', 'scale', 'flip', 'bounce'];
    let totalElements = 0;
    
    // Apply animations to cards
    cardSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        console.log(`🎯 Found ${elements.length} elements for ${selector}`);
        
        elements.forEach((element, index) => {
            const animationType = animations[index % animations.length];
            const delay = index * 100;
            addScrollAnimation(element, animationType, delay);
            totalElements++;
        });
    });
    
    // Also animate sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (section.id !== 'hero') { // Skip hero section
            addScrollAnimation(section, 'fadeUp', index * 200);
            totalElements++;
        }
    });
    
    // Animate titles
    const titles = document.querySelectorAll('h1, h2, h3, .title');
    titles.forEach((title, index) => {
        addScrollAnimation(title, 'fadeUp', index * 50);
        totalElements++;
    });
    
    // Animate buttons
    const buttons = document.querySelectorAll('button, .cta-button, .contact-btn');
    buttons.forEach((button, index) => {
        addScrollAnimation(button, 'scale', index * 100);
        totalElements++;
    });
    
    console.log(`🎨 Applied animations to ${totalElements} elements`);
    
    // Set up scroll observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                setTimeout(() => {
                    animateElement(entry.target);
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: [0.1, 0.5],
        rootMargin: '0px 0px -10% 0px'
    });
    
    // Observe all elements with animations
    const animatedElements = document.querySelectorAll('[data-animation-type]');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    console.log(`👀 Observing ${animatedElements.length} elements for scroll animations`);
    
    // Test animation immediately on first few elements (so you can see it works)
    setTimeout(() => {
        const firstFewElements = Array.from(animatedElements).slice(0, 3);
        firstFewElements.forEach((element, index) => {
            setTimeout(() => {
                animateElement(element);
            }, index * 200);
        });
        console.log('🧪 Test animated first 3 elements');
    }, 2000);
});

// Also try to catch any elements that might load later
window.addEventListener('load', function() {
    console.log('🌟 Page fully loaded');
    
    // Force animate any elements that might be visible but not animated
    setTimeout(() => {
        const visibleElements = document.querySelectorAll('[data-animation-type][data-animated="false"]');
        visibleElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                animateElement(element);
            }
        });
    }, 1000);
});