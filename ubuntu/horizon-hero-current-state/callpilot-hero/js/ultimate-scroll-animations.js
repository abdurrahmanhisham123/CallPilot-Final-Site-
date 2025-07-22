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
        duration: '0.5s',
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
        duration: '0.4s',
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
        opacity: { from: 0, to: 1 }
    },
    modernSlideUp: {
        initial: 'translateY(120px) scale(0.85)',
        final: 'translateY(0) scale(1)',
        duration: '0.5s',
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
        // NOTE: .scenario-card removed - handled separately with custom timing
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
    
    // Sophisticated title animations (EXCLUDING cards that should be unified)
    const titles = document.querySelectorAll('h1, h2, h3, .title, .section-label, .exploration-title');
    titles.forEach((title, index) => {
        const animationType = ['elegantFadeUp', 'gentleFloat', 'modernSlideUp'][index % 3];
        // Skip cards that should be handled separately
        const isInCallCard = title.closest('.apple-call-card');
        const isInPricingCard = title.closest('.plans-section .apple-glass-card');
        const isInIntelligenceCard = title.closest('.intelligence-card');
        const isInDiscoveryCard = title.closest('.apple-discovery-card');
        const isInFaqCard = title.closest('.faq-glass-item');
        const isInFaqCta = title.closest('.faq-cta');
        
        if (!isInCallCard && !isInPricingCard && !isInIntelligenceCard && !isInDiscoveryCard && !isInFaqCard && !isInFaqCta) {
            // Special fast timing for main section titles
            const isSectionTitle = title.classList.contains('new-section-title') || 
                                 title.classList.contains('plans-title') || 
                                 title.classList.contains('discovery-planning-title') ||
                                 title.classList.contains('faq-title');
            
            const delay = isSectionTitle ? 0 : index * 80; // Instant for section titles
            addPremiumAnimation(title, animationType, delay);
            totalElements++;
        }
    });
    
    // Premium button animations (EXCLUDING buttons inside unified cards)
    const buttons = document.querySelectorAll('button, .cta-button, .contact-btn, .get-started-btn');
    buttons.forEach((button, index) => {
        // Skip buttons inside cards that should be unified
        const isInPricingCard = button.closest('.plans-section .apple-glass-card');
        const isInIntelligenceCard = button.closest('.intelligence-card');
        const isInDiscoveryCard = button.closest('.apple-discovery-card');
        const isInFaqCard = button.closest('.faq-glass-item');
        const isInFaqCta = button.closest('.faq-cta');
        if (!isInPricingCard && !isInIntelligenceCard && !isInDiscoveryCard && !isInFaqCard && !isInFaqCta) {
            addPremiumAnimation(button, 'premiumScale', index * 120);
            totalElements++;
        }
    });
    
    // Animate text content (EXCLUDING cards that should be unified)
    const textElements = document.querySelectorAll('p, .description, .metric-label, .metric-value');
    textElements.forEach((text, index) => {
        if (text.textContent.trim().length > 10) { // Only animate meaningful text
            // Skip cards that should be handled separately
            const isInCallCard = text.closest('.apple-call-card');
            const isInPricingCard = text.closest('.plans-section .apple-glass-card');
            const isInIntelligenceCard = text.closest('.intelligence-card');
            const isInDiscoveryCard = text.closest('.apple-discovery-card');
            const isInFaqCard = text.closest('.faq-glass-item');
            const isInFaqCta = text.closest('.faq-cta');
            if (!isInCallCard && !isInPricingCard && !isInIntelligenceCard && !isInDiscoveryCard && !isInFaqCard && !isInFaqCta) {
                addPremiumAnimation(text, 'gentleFloat', index * 60);
                totalElements++;
            }
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
    
    // 🎯 SPECIAL HANDLING FOR INBOUND CALL HANDLING SECTION 🎯
    const callHandlingSection = document.querySelector('.call-handling');
    if (callHandlingSection) {
        console.log('📞 Setting up special timing for Inbound Call Handling section');
        
        // Create perfect reading-time animations
        const readingTimeAnimations = {
            cardAppear: {
                initial: 'translateY(80px) scale(0.9)',
                final: 'translateY(0) scale(1)',
                duration: '0.5s',
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                opacity: { from: 0, to: 1 }
            },
            titleReveal: {
                initial: 'translateY(40px)',
                final: 'translateY(0)',
                duration: '0.2s',
                easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                opacity: { from: 0, to: 1 }
            },
            textReveal: {
                initial: 'translateY(30px)',
                final: 'translateY(0)',
                duration: '0.2s',
                easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
                opacity: { from: 0, to: 1 }
            }
        };
        
        // Apply reading-time animations to call handling cards (words animate WITH the card)
        const callCards = callHandlingSection.querySelectorAll('.apple-call-card');
        callCards.forEach((card, cardIndex) => {
            // Card appears with ALL content at once (much faster)
            addReadingTimeAnimation(card, 'cardAppear', cardIndex * 100);
            totalElements++;
            
            // All text inside the card animates together with the card (no separate animations)
            // Remove any separate animations for titles and text - they move with the parent card
        });
        
        // Function to apply reading-time animations
        function addReadingTimeAnimation(element, animationType, delay) {
            const config = readingTimeAnimations[animationType];
            
            element.style.willChange = 'transform, opacity';
            element.style.opacity = config.opacity.from.toString();
            element.style.transform = config.initial;
            element.style.transition = `all ${config.duration} ${config.easing}`;
            element.style.transitionDelay = delay + 'ms';
            
            element.dataset.animationType = 'readingTime';
            element.dataset.animated = 'false';
            element.dataset.finalTransform = config.final;
            element.dataset.finalOpacity = config.opacity.to.toString();
        }
        
        console.log(`📚 Applied reading-time animations to call handling section`);
    }
    
    // 💰 SPECIAL HANDLING FOR CHOOSE YOUR PLAN SECTION 💰
    const plansSection = document.querySelector('.plans-section');
    if (plansSection) {
        console.log('💰 Setting up unified animations for Choose Your Plan section');
        
        // Apply unified animations to pricing cards only
        const pricingCards = plansSection.querySelectorAll('.apple-glass-card');
        pricingCards.forEach((card, cardIndex) => {
            // Each pricing card appears with ALL its content at once
            addPremiumAnimation(card, 'elegantFadeUp', cardIndex * 150);
            totalElements++;
            console.log(`💳 Pricing card ${cardIndex + 1} will animate as unified unit`);
        });
        
        console.log(`💰 Applied unified animations to ${pricingCards.length} pricing cards`);
    }
    
    // 🛠️ SPECIAL HANDLING FOR CUSTOM INTELLIGENCE SOLUTIONS SECTION 🛠️
    const customIntelligenceSection = document.querySelector('.new-section');
    if (customIntelligenceSection) {
        console.log('🛠️ Setting up unified animations for Custom Intelligence Solutions section');
        
        // Apply unified animations to intelligence cards
        const intelligenceCards = customIntelligenceSection.querySelectorAll('.intelligence-card');
        
        intelligenceCards.forEach((card, cardIndex) => {
            // Each intelligence card appears with ALL its content at once
            addPremiumAnimation(card, 'modernSlideUp', cardIndex * 120);
            totalElements++;
            console.log(`🧠 Intelligence card ${cardIndex + 1} will animate as unified unit`);
        });
        
        console.log(`🛠️ Applied unified animations to ${intelligenceCards.length} intelligence solution cards`);
    }
    
    // 🔍 SPECIAL HANDLING FOR DISCOVERY & PLANNING SECTION 🔍
    const discoverySection = document.querySelector('.discovery-planning');
    if (discoverySection) {
        console.log('🔍 Setting up unified animations for Discovery & Planning section');
        
        // Apply unified animations to discovery cards
        const discoveryCards = discoverySection.querySelectorAll('.apple-discovery-card');
        
        discoveryCards.forEach((card, cardIndex) => {
            // Each discovery card appears with ALL its content at once
            addPremiumAnimation(card, 'smoothSlideRight', cardIndex * 150);
            totalElements++;
            console.log(`🔬 Discovery card ${cardIndex + 1} will animate as unified unit`);
        });
        
        console.log(`🔍 Applied unified animations to ${discoveryCards.length} discovery cards`);
    }
    
    // ❓ SPECIAL HANDLING FOR FAQ SECTION ❓
    const faqSection = document.querySelector('.faq-section');
    if (faqSection) {
        console.log('❓ Setting up unified animations for FAQ section');
        
        // Apply unified animations to FAQ cards
        const faqCards = faqSection.querySelectorAll('.faq-glass-item');
        
        faqCards.forEach((card, cardIndex) => {
            // Each FAQ card appears with ALL its content at once
            addPremiumAnimation(card, 'elegantFadeUp', cardIndex * 100);
            totalElements++;
            console.log(`❓ FAQ card ${cardIndex + 1} will animate as unified unit`);
        });
        
        console.log(`❓ Applied unified animations to ${faqCards.length} FAQ cards`);
    }
    
    // 📞 SPECIAL HANDLING FOR FAQ CTA SECTION 📞
    const faqCtaCards = document.querySelectorAll('.faq-cta');
    if (faqCtaCards.length > 0) {
        console.log('📞 Setting up unified animations for FAQ CTA cards');
        
        faqCtaCards.forEach((card, cardIndex) => {
            // Each FAQ CTA card appears with ALL its content at once
            addPremiumAnimation(card, 'premiumScale', cardIndex * 120);
            totalElements++;
            console.log(`📞 FAQ CTA card ${cardIndex + 1} will animate as unified unit`);
        });
        
        console.log(`📞 Applied unified animations to ${faqCtaCards.length} FAQ CTA cards`);
    }
    
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
    
    // Special observer for call handling section (perfect reading timing)
    const callHandlingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                // Perfect timing for reading
                setTimeout(() => {
                    executeAnimation(entry.target);
                }, 200); // Small delay to settle the scroll
                callHandlingObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: [0.3, 0.5], // Trigger when well into view for reading
        rootMargin: '0px 0px -20% 0px' // More conservative timing for reading
    });
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[data-animation-type]');
    const readingTimeElements = document.querySelectorAll('[data-animation-type="readingTime"]');
    
    animatedElements.forEach(element => {
        if (element.dataset.animationType === 'readingTime') {
            callHandlingObserver.observe(element);
        } else {
            premiumObserver.observe(element);
        }
    });
    
    console.log(`👀 Observing ${animatedElements.length} elements with premium timing`);
    console.log(`📖 Observing ${readingTimeElements.length} elements with reading timing`);
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