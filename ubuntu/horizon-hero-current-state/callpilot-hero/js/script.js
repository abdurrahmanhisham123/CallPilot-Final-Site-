// Enhanced script for CallPilot AI Voice Facilitators with Smooth Scroll Animations

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed. Calling main init function.");
    init();
});

function init() {
    console.log("Main init function called.");
    try {
        initHeroAnimation();
        console.log("Hero animation initialized successfully.");
    } catch (e) {
        console.error("Error initializing hero animation:", e);
    }
    try {
        initDashboard3D();
        console.log("Dashboard 3D initialized successfully.");
    } catch (e) {
        console.error("Error initializing dashboard 3D:", e);
    }
    try {
        initButtonInteractions();
        console.log("Button interactions initialized successfully.");
    } catch (e) {
        console.error("Error initializing button interactions:", e);
    }
    try {
        initMenuItemInteractions();
        console.log("Menu item interactions initialized successfully.");
    } catch (e) {
        console.error("Error initializing menu item interactions:", e);
    }
    try {
        initFeatureItemInteractions();
        console.log("Feature item interactions initialized successfully.");
    } catch (e) {
        console.error("Error initializing feature item interactions:", e);
    }
    try {
        initPersonalityCardInteractions();
        console.log("Personality card interactions initialized successfully.");
    } catch (e) {
        console.error("Error initializing personality card interactions:", e);
    }
    try {
        initTableRowInteractions();
        console.log("Table row interactions initialized successfully.");
    } catch (e) {
        console.error("Error initializing table row interactions:", e);
    }
    try {
        initInterface3D();
        console.log("Interface 3D initialized successfully.");
    } catch (e) {
        console.error("Error initializing interface 3D:", e);
    }
    try {
        initSmoothScrolling();
        console.log("Smooth scrolling initialized successfully.");
    } catch (e) {
        console.error("Error initializing smooth scrolling:", e);
    }
    try {
        initVoiceTechnology();
        console.log("Voice technology initialized successfully.");
    } catch (e) {
        console.error("Error initializing voice technology:", e);
    }
    try {
        initializeAnalyticsDashboard();
        console.log("Analytics dashboard initialized successfully.");
    } catch (e) {
        console.error("Error initializing analytics dashboard:", e);
    }
    try {
        initSmoothScrollAnimations();
        console.log("Smooth scroll animations initialized successfully.");
    } catch (e) {
        console.error("Error initializing smooth scroll animations:", e);
    }
    try {
        initParallaxEffects();
        console.log("Parallax effects initialized successfully.");
    } catch (e) {
        console.error("Error initializing parallax effects:", e);
    }
    try {
        initMagneticEffects();
        console.log("Magnetic effects initialized successfully.");
    } catch (e) {
        console.error("Error initializing magnetic effects:", e);
    }
    try {
        injectDynamicCSS();
        console.log("Dynamic CSS injected successfully.");
    } catch (e) {
        console.error("Error injecting dynamic CSS:", e);
    }
    try {
        createScrollWaveEffect();
        console.log("Scroll wave effect created successfully.");
    } catch (e) {
        console.error("Error creating scroll wave effect:", e);
    }
    try {
        enhanceMetricAnimations();
        console.log("Metric animations enhanced successfully.");
    } catch (e) {
        console.error("Error enhancing metric animations:", e);
    }
    try {
        initVictorySolutionsAnimations();
        console.log("Victory Solutions animations initialized successfully.");
    } catch (e) {
        console.error("Error initializing Victory Solutions animations:", e);
    }
    try {
        initCallHandlingAnimations();
        console.log("Call Handling animations initialized successfully.");
    } catch (e) {
        console.error("Error initializing Call Handling animations:", e);
    }
    try {
        initVictorySolutionsAnimations();
        console.log("Victory Solutions animations initialized successfully.");
    } catch (e) {
        console.error("Error initializing Victory Solutions animations:", e);
    }
    try {
        initEnhancedCapabilitiesAnimations();
        console.log("Enhanced Capabilities animations initialized successfully.");
    } catch (e) {
        console.error("Error initializing Enhanced Capabilities animations:", e);
    }
    try {
        initDiscoveryPlanningAnimations();
        console.log("Discovery & Planning animations initialized successfully.");
    } catch (e) {
        console.error("Error initializing Discovery & Planning animations:", e);
    }
    try {
        initTrustedLeadersAnimations();
        console.log("Trusted Leaders animations initialized successfully.");
    } catch (e) {
        console.error("Error initializing Trusted Leaders animations:", e);
    }
    try {
        initAICapabilitiesAnimations();
        console.log("AI Capabilities animations initialized successfully.");
    } catch (e) {
        console.error("Error initializing AI Capabilities animations:", e);
    }
    try {
        initVoiceShowcase();
        console.log("Voice showcase initialized successfully.");
    } catch (e) {
        console.error("Error initializing voice showcase:", e);
    }
    try {
        initAIIntelligenceHub();
        console.log("AI Intelligence Hub initialized successfully.");
    } catch (e) {
        console.error("Error initializing AI Intelligence Hub:", e);
    }
    try {
        initFAQSection();
        console.log("FAQ section initialized successfully.");
    } catch (e) {
        console.error("Error initializing FAQ section:", e);
    }
    try {
        initPlansSectionAnimations();
        console.log("Plans section animations initialized successfully.");
    } catch (e) {
        console.error("Error initializing plans section animations:", e);
    }
}

/**
 * Injects CSS for animations like ripple and glow effects.
 */
function injectDynamicCSS() {
    const style = document.createElement("style");
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        @keyframes sectionGlow {
            0% { filter: brightness(1); }
            50% { filter: brightness(1.1) drop-shadow(0 0 20px rgba(138, 43, 226, 0.3)); }
            100% { filter: brightness(1); }
        }
        
        /* Smooth scroll animations */
        .scroll-animate {
            opacity: 1;
            transform: none;
            transition: none;
        }
        
        .scroll-animate.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .scroll-animate-left {
            opacity: 0;
            transform: translateX(-50px);
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .scroll-animate-left.animate-in {
            opacity: 1;
            transform: translateX(0);
        }
        
        .scroll-animate-right {
            opacity: 1;
            transform: none;
            transition: none;
        }
        
        .scroll-animate-right.animate-in {
            opacity: 1;
            transform: translateX(0);
        }
        
        .scroll-animate-scale {
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .scroll-animate-scale.animate-in {
            opacity: 1;
            transform: scale(1);
        }
        
        .scroll-animate-fade {
            opacity: 0;
            transition: opacity 0.6s ease-in-out;
        }
        
        .scroll-animate-fade.animate-in {
            opacity: 1;
        }
        
        /* New animation for victory solutions cards */
        .victory-card-animate {
            opacity: 0;
            transform: translateY(50px) rotateX(-30deg) scale(0.8);
            transition: all 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            transform-origin: center bottom;
        }
        
        .victory-card-animate.animate-in {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
        }

        /* New animation for call handling steps */
        .call-step-animate {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .call-step-animate.animate-in {
            opacity: 1;
            transform: translateY(0) scale(1);
        }

        /* New animation for horizon action elements */
        .horizon-action-animate {
            opacity: 0;
            transform: translateX(-50px);
            transition: all 0.6s cubic-bezier(0.6, -0.28, 0.735, 0.045);
        }

        .horizon-action-animate.animate-in {
            opacity: 1;
            transform: translateX(0);
        }

        /* New animation for demo scenario cards */
        .scenario-card-animate {
            opacity: 0;
            transform: scale(0.7) rotateY(90deg);
            transition: all 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            transform-origin: center center;
        }

        .scenario-card-animate.animate-in {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
        }

        /* New animation for enhanced capabilities grid items */
        .tech-card-animate {
            opacity: 0;
            transform: translateY(30px) rotateX(-15deg);
            transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
            transform-origin: center bottom;
        }

        .tech-card-animate.animate-in {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
        }

        /* New animation for discovery planning sections */
        .discovery-section-animate {
            opacity: 0;
            transform: translateX(-30px);
            transition: all 0.5s ease-out;
        }

        .discovery-section-animate.animate-in {
            opacity: 1;
            transform: translateX(0);
        }

        /* New animation for trusted leaders logos */
        .logo-item-animate {
            opacity: 0;
            transform: scale(0.5);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .logo-item-animate.animate-in {
            opacity: 1;
            transform: scale(1);
        }

        /* New animation for AI capabilities cards */
        .capability-card-animate {
            opacity: 0;
            transform: translateY(40px) rotateY(20deg);
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
            transform-origin: center bottom;
        }

        .capability-card-animate.animate-in {
            opacity: 1;
            transform: translateY(0) rotateY(0deg);
        }

        /* New animation for Victory Solutions cards */
        .victory-card-animate {
            opacity: 0;
            transform: translateY(50px) rotateX(-30deg) scale(0.8);
            transition: all 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            transform-origin: center bottom;
        }

        .victory-card-animate.animate-in {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
        }

        /* New animation for Victory Solutions features */
        .victory-feature-animate {
            opacity: 0;
            transform: translateX(50px) scale(0.9);
            transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .victory-feature-animate.animate-in {
            opacity: 1;
            transform: translateX(0) scale(1);
        }


        /* Added new styles for card flip effect */
        .flip-card {
            perspective: 1000px;
        }

        .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.5s;
            transform-style: preserve-3d;
        }

        .flip-card.animate-in .flip-card-inner {
            transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        }

        .flip-card-back {
            transform: rotateY(180deg);
        }

        /* Added new styles for left/right entrance */
        .slide-in-left {
            opacity: 0;
            transform: translateX(-100%);
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .slide-in-left.animate-in {
            opacity: 1;
            transform: translateX(0);
        }

        .slide-in-right {
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .slide-in-right.animate-in {
            opacity: 1;
            transform: translateX(0);
        }

        
        /* Stagger animation delays */
        .scroll-animate.delay-1 { transition-delay: 0.1s; }
        .scroll-animate.delay-2 { transition-delay: 0.2s; }
        .scroll-animate.delay-3 { transition-delay: 0.3s; }
        .scroll-animate.delay-4 { transition-delay: 0.4s; }
        .scroll-animate.delay-5 { transition-delay: 0.5s; }
        
        .victory-card-animate.delay-1 { transition-delay: 0.1s; }
        .victory-card-animate.delay-2 { transition-delay: 0.2s; }
        .victory-card-animate.delay-3 { transition-delay: 0.3s; }
        .victory-card-animate.delay-4 { transition-delay: 0.4s; }
        .victory-card-animate.delay-5 { transition-delay: 0.5s; }

        .call-step-animate.delay-1 { transition-delay: 0.1s; }
        .call-step-animate.delay-2 { transition-delay: 0.2s; }
        .call-step-animate.delay-3 { transition-delay: 0.3s; }
        .call-step-animate.delay-4 { transition-delay: 0.4s; }
        .call-step-animate.delay-5 { transition-delay: 0.5s; }

        .horizon-action-animate.delay-1 { transition-delay: 0.1s; }
        .horizon-action-animate.delay-2 { transition-delay: 0.2s; }
        .horizon-action-animate.delay-3 { transition-delay: 0.3s; }

        .scenario-card-animate.delay-1 { transition-delay: 0.1s; }
        .scenario-card-animate.delay-2 { transition-delay: 0.2s; }
        .scenario-card-animate.delay-3 { transition-delay: 0.3s; }

        .tech-card-animate.delay-1 { transition-delay: 0.1s; }
        .tech-card-animate.delay-2 { transition-delay: 0.2s; }
        .tech-card-animate.delay-3 { transition-delay: 0.3s; }
        .tech-card-animate.delay-4 { transition-delay: 0.4s; }

        .discovery-section-animate.delay-1 { transition-delay: 0.1s; }
        .discovery-section-animate.delay-2 { transition-delay: 0.2s; }

        .logo-item-animate.delay-1 { transition-delay: 0.05s; }
        .logo-item-animate.delay-2 { transition-delay: 0.1s; }
        .logo-item-animate.delay-3 { transition-delay: 0.15s; }
        .logo-item-animate.delay-4 { transition-delay: 0.2s; }
        .logo-item-animate.delay-5 { transition-delay: 0.25s; }
        .logo-item-animate.delay-6 { transition-delay: 0.3s; }
        .logo-item-animate.delay-7 { transition-delay: 0.35s; }
        .logo-item-animate.delay-8 { transition-delay: 0.4s; }

        .capability-card-animate.delay-1 { transition-delay: 0.1s; }
        .capability-card-animate.delay-2 { transition-delay: 0.2s; }
        .capability-card-animate.delay-3 { transition-delay: 0.3s; }
        .capability-card-animate.delay-4 { transition-delay: 0.4s; }

        .victory-card-animate.delay-1 { transition-delay: 0.1s; }
        .victory-card-animate.delay-2 { transition-delay: 0.2s; }
        .victory-card-animate.delay-3 { transition-delay: 0.3s; }

        .victory-feature-animate.delay-1 { transition-delay: 0.1s; }
        .victory-feature-animate.delay-2 { transition-delay: 0.2s; }
        .victory-feature-animate.delay-3 { transition-delay: 0.3s; }

        
        /* Smooth scrolling for the entire page */
        html {
            scroll-behavior: smooth;
        }
        
        /* Enhanced scroll indicator */
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #8a2be2, #9932cc);
            z-index: 9999;
            transition: width 0.1s ease;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Initializes the hero title animation.
 */
function initHeroAnimation() {
    // Initialize word-by-word animation for hero title
    const heroTitle = document.querySelector(".hero-title");
    if (heroTitle) {
        const words = heroTitle.querySelectorAll(".word");
        words.forEach((word, index) => {
            setTimeout(() => {
                word.style.opacity = "1";
                word.style.transform = "translateY(0)";
            }, 200 * index);
        });
    }

    // Initialize counter animations
    initCounterAnimations();
    
    // Initialize particle effects for buttons
    initButtonParticles();
    
    // Initialize floating achievement cards
    initFloatingCards();
    
    // Initialize neural network animation
    initNeuralNetwork();
    
    // Initialize knowledge base upload interactions
    initKnowledgeBaseUpload();
}

function initCounterAnimations() {
    const counters = document.querySelectorAll(".counter-number");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute("data-target"));
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
}

function initButtonParticles() {
    const buttons = document.querySelectorAll(".cta-button");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            createParticles(button);
        });
    });
}

function createParticles(button) {
    const particles = button.querySelector(".btn-particles");
    if (!particles) return;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.position = "absolute";
        particle.style.width = "4px";
        particle.style.height = "4px";
        particle.style.background = "rgba(138, 43, 226, 0.8)";
        particle.style.borderRadius = "50%";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.animation = `particleFloat 2s ease-out forwards`;
        particle.style.animationDelay = i * 0.1 + "s";
        
        particles.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
}

function initFloatingCards() {
    const cards = document.querySelectorAll(".floating-card");
    cards.forEach((card, index) => {
        card.style.animationDelay = index * 1 + "s";
        
        // Add subtle micro-interactions
        card.addEventListener("mouseenter", () => {
            card.style.animationPlayState = "paused";
            const avatar = card.querySelector(".card-avatar");
            const metric = card.querySelector(".card-metric");
            
            if (avatar) {
                avatar.style.transform = "scale(1.1)";
                avatar.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.2)";
            }
            
            if (metric) {
                metric.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
                metric.style.borderColor = "rgba(16, 185, 129, 0.4)";
            }
        });
        
        card.addEventListener("mouseleave", () => {
            card.style.animationPlayState = "running";
            const avatar = card.querySelector(".card-avatar");
            const metric = card.querySelector(".card-metric");
            
            if (avatar) {
                avatar.style.transform = "scale(1)";
                avatar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
            }
            
            if (metric) {
                metric.style.backgroundColor = "rgba(16, 185, 129, 0.1)";
                metric.style.borderColor = "rgba(16, 185, 129, 0.2)";
            }
        });
    });
}

function initNeuralNetwork() {
    const nodes = document.querySelectorAll(".neural-node");
    nodes.forEach((node, index) => {
        node.style.animationDelay = index * 0.3 + "s";
        
        node.addEventListener("mouseenter", () => {
            node.style.transform = "scale(1.5)";
            node.style.boxShadow = "0 0 30px rgba(138, 43, 226, 0.8)";
        });
        
        node.addEventListener("mouseleave", () => {
            node.style.transform = "scale(1)";
            node.style.boxShadow = "0 0 20px rgba(138, 43, 226, 0.5)";
        });
    });
}

function initKnowledgeBaseUpload() {
    const uploadZone = document.querySelector(".upload-zone-compact");
    const uploadBtn = document.querySelector(".upload-btn");
    const fileRows = document.querySelectorAll(".file-row");
    const statItems = document.querySelectorAll(".stat-item");
    
    if (uploadZone) {
        // Drag and drop functionality
        uploadZone.addEventListener("dragover", (e) => {
            e.preventDefault();
            uploadZone.style.borderColor = "rgba(138, 43, 226, 0.7)";
            uploadZone.style.background = "rgba(138, 43, 226, 0.1)";
        });
        
        uploadZone.addEventListener("dragleave", (e) => {
            e.preventDefault();
            uploadZone.style.borderColor = "rgba(138, 43, 226, 0.3)";
            uploadZone.style.background = "rgba(255, 255, 255, 0.02)";
        });
        
        uploadZone.addEventListener("drop", (e) => {
            e.preventDefault();
            uploadZone.style.borderColor = "rgba(138, 43, 226, 0.3)";
            uploadZone.style.background = "rgba(255, 255, 255, 0.02)";
            
            // Simulate file upload
            const uploadText = uploadZone.querySelector(".upload-text");
            const uploadButton = uploadZone.querySelector(".upload-btn");
            
            uploadText.textContent = "Processing...";
            uploadButton.textContent = "⏳";
            
            setTimeout(() => {
                uploadText.textContent = "Upload complete!";
                uploadButton.textContent = "✅";
                
                setTimeout(() => {
                    uploadText.textContent = "Drag & drop files";
                    uploadButton.textContent = "Browse";
                }, 2000);
            }, 1500);
        });
    }
    
    // File row hover effects
    fileRows.forEach(row => {
        row.addEventListener("mouseenter", () => {
            row.style.backgroundColor = "rgba(138, 43, 226, 0.05)";
            row.style.transform = "translateX(4px)";
        });
        
        row.addEventListener("mouseleave", () => {
            row.style.backgroundColor = "transparent";
            row.style.transform = "translateX(0)";
        });
    });
    
    // Upload button click simulation
    if (uploadBtn) {
        uploadBtn.addEventListener("click", () => {
            const uploadText = uploadZone.querySelector(".upload-text");
            
            uploadText.textContent = "Uploading...";
            uploadBtn.textContent = "⏳";
            
            setTimeout(() => {
                uploadText.textContent = "Upload complete!";
                uploadBtn.textContent = "✅";
                
                setTimeout(() => {
                    uploadText.textContent = "Drag & drop files";
                    uploadBtn.textContent = "Browse";
                }, 2000);
            }, 1000);
        });
    }
    
    // Stat item animations
    statItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.boxShadow = "0 8px 24px rgba(138, 43, 226, 0.15)";
        });
        
        item.addEventListener("mouseleave", () => {
            item.style.boxShadow = "none";
        });
    });
}

/**
 * Initializes 3D mouse tracking for the dashboard preview.
 */
function initDashboard3D() {
    const dashboard = document.querySelector(".dashboard-preview");
    if (dashboard) {
        dashboard.addEventListener("mousemove", (e) => {
            const rect = dashboard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            dashboard.style.transform = "perspective(1000px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(1.02)";
        });
        
        dashboard.addEventListener("mouseleave", () => {
            dashboard.style.transform = "perspective(1000px) rotateY(-5deg) rotateX(5deg) scale(1)";
        });
    }
}

/**
 * Initializes enhanced button interactions with ripple effect.
 */
function initButtonInteractions() {
    const buttons = document.querySelectorAll(".btn-primary, .btn-secondary, .contact-btn");
    buttons.forEach(button => {
        button.style.position = "relative";
        button.style.overflow = "hidden";

        button.addEventListener("mouseenter", () => {
            button.style.transform = "perspective(1000px) rotateX(-5deg) translateZ(10px) scale(1.05)";
        });
        
        button.addEventListener("mouseleave", () => {
            button.style.transform = "perspective(1000px) rotateX(0deg) translateZ(0px) scale(1)";
        });
        
        button.addEventListener("click", (e) => {
            const ripple = document.createElement("span");
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.classList.add("ripple");
            ripple.style.width = ripple.style.height = size + "px";
            ripple.style.left = x + "px";
            ripple.style.top = y + "px";
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

/**
 * Initializes enhanced menu item interactions.
 */
function initMenuItemInteractions() {
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "perspective(1000px) rotateX(-3deg) translateZ(8px)";
        });
        
        item.addEventListener("mouseleave", () => {
            item.style.transform = "perspective(1000px) rotateX(0deg) translateZ(0px)";
        });
    });
}

/**
 * Initializes enhanced feature item interactions.
 */
function initFeatureItemInteractions() {
    const featureItems = document.querySelectorAll(".feature-item");
    featureItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "perspective(1000px) rotateX(-3deg) translateZ(10px)";
            item.style.background = "rgba(138, 43, 226, 0.12)";
        });
        
        item.addEventListener("mouseleave", () => {
            item.style.transform = "perspective(1000px) rotateX(0deg) translateZ(0px)";
            item.style.background = "rgba(255, 255, 255, 0.02)";
        });
    });
}

/**
 * Initializes enhanced personality card interactions.
 */
function initPersonalityCardInteractions() {
    const personalityCards = document.querySelectorAll(".personality-card");
    personalityCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "perspective(1000px) rotateX(-5deg) translateZ(15px)";
        });
        
        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) translateZ(0px)";
        });
    });
}

/**
 * Initializes enhanced table row interactions.
 */
function initTableRowInteractions() {
    const tableRows = document.querySelectorAll(".table-row");
    tableRows.forEach(row => {
        row.addEventListener("mouseenter", () => {
            row.style.transform = "perspective(1000px) rotateX(-2deg) translateZ(5px) translateX(10px)";
            row.style.background = "rgba(138, 43, 226, 0.08)";
        });
        
        row.addEventListener("mouseleave", () => {
            row.style.transform = "perspective(1000px) rotateX(0deg) translateX(0px)";
            row.style.background = "transparent";
        });
    });
}

/**
 * Initializes enhanced 3D interface interactions.
 */
function initInterface3D() {
    const interfaces = document.querySelectorAll(".personality-selector, .analytics-dashboard");
    interfaces.forEach(interfaceEl => {
        interfaceEl.addEventListener("mouseenter", () => {
            interfaceEl.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05)";
            interfaceEl.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.4)";
        });
        
        interfaceEl.addEventListener("mouseleave", () => {
            if (interfaceEl.classList.contains("personality-selector")) {
                interfaceEl.style.transform = "perspective(1000px) rotateY(5deg) rotateX(5deg) scale(1)";
            } else if (interfaceEl.classList.contains("analytics-dashboard")) {
                interfaceEl.style.transform = "perspective(1000px) rotateY(-5deg) rotateX(5deg) scale(1)";
            }
            interfaceEl.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)";
        });
    });
}

/**
 * Initializes smooth scrolling for navigation links.
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (href && href.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });
}

/**
 * Initializes the voice technology section functionality.
 */
function initVoiceTechnology() {
    const mainPlayBtn = document.getElementById("mainPlayBtn");
    const waveformDisplay = document.querySelector(".waveform-display");
    const waveformBars = document.getElementById("waveformBars");
    let isPlaying = false;
    let playingInterval;

    if (mainPlayBtn) {
        mainPlayBtn.addEventListener("click", () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                mainPlayBtn.classList.add("playing");
                if(waveformDisplay) waveformDisplay.classList.add("active");
                if(waveformBars) waveformBars.classList.add("active");
                const playIcon = mainPlayBtn.querySelector("svg path");
                if (playIcon) {
                    playIcon.setAttribute("d", "M6 4H10V20H6V4ZM14 4H18V20H14V4Z");
                }
                playingInterval = setTimeout(stopPlaying, 3000);
            } else {
                stopPlaying();
            }
        });
    }

    function stopPlaying() {
        isPlaying = false;
        if (mainPlayBtn) {
            mainPlayBtn.classList.remove("playing");
            if(waveformDisplay) waveformDisplay.classList.remove("active");
            if(waveformBars) waveformBars.classList.remove("active");
            const playIcon = mainPlayBtn.querySelector("svg path");
            if (playIcon) {
                playIcon.setAttribute("d", "M8 5V19L19 12L8 5Z");
            }
        }
        if (playingInterval) {
            clearTimeout(playingInterval);
        }
    }

    const voiceOptions = document.querySelectorAll(".voice-option");
    const voiceName = document.querySelector(".voice-name");
    const voiceType = document.querySelector(".voice-type");
    const voiceAccent = document.querySelector(".voice-accent");
    const sampleText = document.querySelector(".sample-text");
    const sampleDescription = document.querySelector(".sample-description");

    const voiceData = {
        sarah: { name: "Sarah", type: "Professional Female", accent: "American Accent", sample: "\"Hi! I\\\\\"m Sarah from CallPilot. How can I help you today?\"", description: "Warm, professional tone perfect for customer service and sales calls" },
        marcus: { name: "Marcus", type: "Professional Male", accent: "British Accent", sample: "\"Good day! This is Marcus. I\\\\\"m here to assist with your technical needs.\"", description: "Authoritative yet friendly, ideal for technical support and consultations" },
        elena: { name: "Elena", type: "Multilingual Female", accent: "Spanish/English", sample: "\"¡Hola! I\\\\\"m Elena. How may I assist you today?\"", description: "Bilingual capabilities with natural code-switching for diverse markets" },
        alex: { name: "Alex", type: "Neutral Voice", accent: "Global English", sample: "\"Hello! I\\\\\"m Alex, your AI assistant. What can I do for you?\"", description: "Gender-neutral voice designed for maximum accessibility and inclusivity" }
    };

    voiceOptions.forEach(option => {
        option.addEventListener("click", function() {
            voiceOptions.forEach(opt => opt.classList.remove("active"));
            this.classList.add("active");
            const voiceId = this.getAttribute("data-voice");
            const voice = voiceData[voiceId];
            if (voice) {
                if (voiceName) voiceName.textContent = voice.name;
                if (voiceType) voiceType.textContent = voice.type;
                if (voiceAccent) voiceAccent.textContent = voice.accent;
                if (sampleText) sampleText.textContent = voice.sample;
                if (sampleDescription) sampleDescription.textContent = voice.description;
            }
        });

        const optionPlayBtn = option.querySelector(".option-play-btn");
        if (optionPlayBtn) {
            optionPlayBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                // Simulate playing
            });
        }
    });

    const toneButtons = document.querySelectorAll(".tone-btn");
    toneButtons.forEach(button => {
        button.addEventListener("click", function() {
            toneButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });

    const speedSlider = document.getElementById("speedSlider");
    if (speedSlider) {
        speedSlider.addEventListener("input", function() {
            const percentage = this.value;
            this.style.background = "linear-gradient(to right, rgba(138, 43, 226, 0.8) " + percentage + "%, rgba(255, 255, 255, 0.1) " + percentage + "%)";
        });
        speedSlider.dispatchEvent(new Event("input"));
    }
}

/**
 * Initializes all analytics dashboard functionality.
 */
function initializeAnalyticsDashboard() {
    initAnimatedCounters();
    initRealTimeUpdates();
    initChartInteractions();
    initActivityFeed();
    initMetricCardEffects();
    initSparklineAnimations();
}

/**
 * Initializes animated counters.
 */
function initAnimatedCounters() {
    const metricValues = document.querySelectorAll(".metric-value[data-value]");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    metricValues.forEach(value => observer.observe(value));
}

function animateCounter(element) {
    const targetValue = parseFloat(element.dataset.value);
    if (isNaN(targetValue)) return;

    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = duration / frameRate;
    const increment = targetValue / totalFrames;
    let currentValue = 0;

    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
        }
        element.textContent = Math.floor(currentValue).toLocaleString();
    }, frameRate);
}

/**
 * Initializes real-time data simulation for the dashboard.
 */
function initRealTimeUpdates() {
    // This is a placeholder for real-time data updates.
}

/**
 * Initializes interactive chart effects.
 */
function initChartInteractions() {
    // This is a placeholder for chart interactions.
}

/**
 * Initializes activity feed updates.
 */
function initActivityFeed() {
    // This is a placeholder for activity feed updates.
}

/**
 * Initializes metric card interactions.
 */
function initMetricCardEffects() {
    // This is a placeholder for metric card effects.
}

/**
 * Initializes sparkline animations.
 */
function initSparklineAnimations() {
    // This is a placeholder for sparkline animations.
}

/**
 * Initializes smooth scroll animations for all elements.
 */
function initSmoothScrollAnimations() {
    console.log("Initializing smooth scroll animations.");

    // Create scroll progress indicator
    const scrollProgress = document.createElement("div");
    scrollProgress.className = "scroll-progress";
    document.body.appendChild(scrollProgress);

    // Update scroll progress
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + "%";
    }

    // Add scroll animation classes to elements
    const elementsToAnimate = [
        // Main sections
        ".hero-section",
        ".features-section",
        ".voice-technology-premium",
        ".analytics-section",
        ".pricing-section",
        ".testimonials-section",
        ".footer-section",
        
        // Cards and components
        ".feature-card",
        ".metric-card",
        ".personality-card",
        ".voice-card",
        ".testimonial-card",
        ".pricing-card",
        
        // Text elements
        "h1", "h2", "h3", "h4", "h5", "h6",
        ".hero-title",
        ".section-title",
        ".feature-title",
        
        // Interactive elements
        ".dashboard-preview",
        ".analytics-dashboard",
        ".personality-selector",
        
        // Lists and tables
        ".feature-list li",
        ".table-row",
        ".menu-item",
        
        // Buttons and CTAs
        ".btn-primary",
        ".btn-secondary",
        ".contact-btn",

        // Victory Solutions specific elements
        ".solutions-title",
        ".solutions-description",
        ".preview-card",
        ".solutions-features .feature-card",

        // Call Handling specific elements
        ".call-handling-title",
        ".call-handling-description",
        ".call-step",
        ".phone-interface",

        // Victory Solutions specific elements
        ".victory-title",
        ".victory-description",
        ".victory-badge",
        ".solution-card",
        ".feature-item",
        ".victory-btn",

        // Demo Scenarios specific elements
        ".scenarios-title",
        ".scenario-card",
        ".full-experience-button",
        ".full-experience-text",

        // Enhanced Capabilities specific elements
        ".enhanced-title",
        ".enhanced-description",
        ".performance-metrics .performance-item",
        ".technologies-title",
        ".technology-card",

        // Discovery & Planning specific elements
        ".discovery-header",
        ".discovery-description",
        ".discovery-section",
        ".implementation-progress",

        // Trusted Leaders specific elements
        ".trusted-title",
        ".trusted-description",
        ".company-logos .logo-item",
        ".trust-stats .stat-item",

        // AI Capabilities specific elements
        ".capabilities-title",
        ".capabilities-description",
        ".capability-card",

        // FAQ Section specific elements
        ".faq-title",
        ".faq-description",
        ".faq-item",
        ".faq-cta"

    ];

    // Apply animation classes to existing elements
    elementsToAnimate.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            if (element.closest('.power-content')) {
                return;
            }
            // Add different animation types based on element type
            if (selector.includes("h1") || selector.includes("h2") || selector.includes(".hero-title") || selector.includes(".solutions-title") || selector.includes(".call-handling-title") || selector.includes(".action-title") || selector.includes(".scenarios-title") || selector.includes(".enhanced-title") || selector.includes(".discovery-title") || selector.includes(".trusted-title") || selector.includes(".capabilities-title") || selector.includes(".faq-title")) {
                element.classList.add("scroll-animate-scale");
            } else if (selector.includes(".feature-card") || selector.includes(".metric-card")) {
                element.classList.add("scroll-animate");
                if (index % 2 === 0) {
                    element.classList.add("scroll-animate-left");
                } else {
                    element.classList.add("scroll-animate-right");
                }
            } else if (selector.includes(".power-visual") || selector.includes(".power-text")) {
                // Do nothing
            } else if (selector.includes("li") || selector.includes(".table-row")) {
                element.classList.add("scroll-animate");
                element.classList.add(`delay-${Math.min(index + 1, 5)}`);
            } else if (selector.includes(".preview-card") || selector.includes(".solutions-features .feature-card")) {
                element.classList.add("victory-card-animate");
                element.classList.add(`delay-${Math.min(index + 1, 5)}`);
            } else if (selector.includes(".call-step")) {
                element.classList.add("call-step-animate");
                element.classList.add(`delay-${Math.min(index + 1, 5)}`);
            } else if (selector.includes(".horizon-action .action-description") || selector.includes(".demo-interface")) {
                element.classList.add("horizon-action-animate");
                element.classList.add(`delay-${Math.min(index + 1, 3)}`);
            } else if (selector.includes(".scenario-card")) {
                element.classList.add("scenario-card-animate");
                element.classList.add(`delay-${Math.min(index + 1, 3)}`);
            } else if (selector.includes(".technology-card")) {
                element.classList.add("tech-card-animate");
                element.classList.add(`delay-${Math.min(index + 1, 4)}`);
            } else if (selector.includes(".discovery-section")) {
                element.classList.add("discovery-section-animate");
                element.classList.add(`delay-${Math.min(index + 1, 2)}`);
            } else if (selector.includes(".logo-item")) {
                element.classList.add("logo-item-animate");
                element.classList.add(`delay-${Math.min(index + 1, 8)}`);
            } else if (selector.includes(".capability-card")) {
                element.classList.add("capability-card-animate");
                element.classList.add(`delay-${Math.min(index + 1, 4)}`);
            } else if (selector.includes(".solution-card")) {
                element.classList.add("victory-card-animate");
                element.classList.add(`delay-${Math.min(index + 1, 3)}`);
            } else if (selector.includes(".feature-item")) {
                element.classList.add("victory-feature-animate");
                element.classList.add(`delay-${Math.min(index + 1, 3)}`);
            } else if (selector.includes(".faq-item")) {
                element.classList.add("scroll-animate");
                element.classList.add(`delay-${Math.min(index + 1, 8)}`);
            } else {
                element.classList.add("scroll-animate");
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a specific delay for the analytics section to make it appear later
                if (entry.target.classList.contains("analytics-section")) {
                    setTimeout(() => {
                        entry.target.classList.add("animate-in");
                    }, 10000000); // 10000000ms delay
                } else {
                    entry.target.classList.add("animate-in");
                }
                
                // Add stagger effect for child elements
                const children = entry.target.querySelectorAll(".scroll-animate:not(.animate-in), .victory-card-animate:not(.animate-in), .victory-feature-animate:not(.animate-in), .call-step-animate:not(.animate-in), .horizon-action-animate:not(.animate-in), .scenario-card-animate:not(.animate-in), .tech-card-animate:not(.animate-in), .discovery-section-animate:not(.animate-in), .logo-item-animate:not(.animate-in), .capability-card-animate:not(.animate-in)");
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add("animate-in");
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-animate-fade, .victory-card-animate, .victory-feature-animate, .call-step-animate, .horizon-action-animate, .scenario-card-animate, .tech-card-animate, .discovery-section-animate, .logo-item-animate, .capability-card-animate");
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Throttled scroll event for performance
    let ticking = false;
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateScrollProgress();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener("scroll", onScroll);
    
    // Initial call
    updateScrollProgress();
    
    console.log("Smooth scroll animations initialized with", animatedElements.length, "elements");
}

/**
 * Initializes parallax effects for background elements.
 */
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll(".dashboard-preview, .analytics-dashboard");
    
    let ticking = false;
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        parallaxElements.forEach(element => {
            if (element.classList.contains("parallax-element")) {
                element.style.transform = `translateY(${rate}px)`;
            }
        });
        ticking = false;
    }
    
    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
    
    // Add parallax class to elements
    parallaxElements.forEach(element => {
        element.classList.add("parallax-element");
    });
}

/**
 * Initializes magnetic hover effects for interactive elements.
 */
function initMagneticEffects() {
    const magneticElements = document.querySelectorAll(".btn-primary, .btn-secondary, .contact-btn, .feature-card, .metric-card");
    
    magneticElements.forEach(element => {
        element.classList.add("magnetic");
        
        element.addEventListener("mousemove", (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = x * 0.1;
            const moveY = y * 0.1;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
        });
        
        element.addEventListener("mouseleave", () => {
            element.style.transform = "translate(0px, 0px) scale(1)";
        });
    });
}

/**
 * Triggers particle effect animation.
 */
function triggerParticleEffect(element) {
    // Create floating particles
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.width = "4px";
        particle.style.height = "4px";
        particle.style.background = "rgba(138, 43, 226, 0.8)";
        particle.style.borderRadius = "50%";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "1000";
        
        const rect = element.getBoundingClientRect();
        particle.style.left = (rect.left + Math.random() * rect.width) + "px";
        particle.style.top = (rect.top + Math.random() * rect.height) + "px";
        
        document.body.appendChild(particle);
        
        // Animate particle
        particle.animate([
            { transform: "translateY(0px) scale(1)", opacity: 1 },
            { transform: "translateY(-100px) scale(0)", opacity: 0 }
        ], {
            duration: 2000,
            easing: "ease-out"
        }).onfinish = () => {
            particle.remove();
        };
    }
}

/**
 * Triggers typewriter effect for text elements.
 */
function triggerTypewriterEffect(element) {
    const text = element.textContent;
    element.textContent = "";
    element.style.width = "0";
    
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            element.style.width = ((i + 1) / text.length * 100) + "%";
            i++;
        } else {
            clearInterval(typeInterval);
            // Remove cursor after typing is complete
            setTimeout(() => {
                element.style.borderRight = "none";
            }, 1000);
        }
    }, 50);
}

/**
 * Adds entrance animations to dashboard metrics with counter effect.
 */
function enhanceMetricAnimations() {
    const metricCards = document.querySelectorAll(".metric-card");
    
    metricCards.forEach((card, index) => {
        // Add entrance animation
        card.style.opacity = "0";
        card.style.transform = "translateY(50px) scale(0.9)";
        
        setTimeout(() => {
            card.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            card.style.opacity = "1";
            card.style.transform = "translateY(0) scale(1)";
            
            // Animate the metric value
            const metricValue = card.querySelector(".metric-value");
            if (metricValue && metricValue.dataset.value) {
                animateCounter(metricValue);
            }
        }, index * 150);
    });
}

/**
 * Creates a wave effect that follows the scroll position.
 */
function createScrollWaveEffect() {
    const waveElement = document.createElement("div");
    waveElement.style.position = "fixed";
    waveElement.style.top = "0";
    waveElement.style.left = "0";
    waveElement.style.width = "100%";
    waveElement.style.height = "100%";
    waveElement.style.background = "linear-gradient(45deg, transparent 40%, rgba(138, 43, 226, 0.03) 50%, transparent 60%)";
    waveElement.style.pointerEvents = "none";
    waveElement.style.zIndex = "1";
    waveElement.style.opacity = "0";
    waveElement.style.transition = "opacity 0.3s ease";
    
    document.body.appendChild(waveElement);
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateWave() {
        const currentScrollY = window.scrollY;
        const scrollDelta = Math.abs(currentScrollY - lastScrollY);
        
        if (scrollDelta > 5) {
            waveElement.style.opacity = "1";
            waveElement.style.transform = `translateY(${currentScrollY * 0.05}px) rotate(${currentScrollY * 0.02}deg)`;
            
            setTimeout(() => {
                waveElement.style.opacity = "0";
            }, 300);
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(updateWave);
            ticking = true;
        }
    });
}

// Initialize wave effect
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(createScrollWaveEffect, 1000);
});

/**
 * Initializes animations for the Victory Solutions section.
 */
function initVictorySolutionsAnimations() {
    const solutionsTitle = document.querySelector(".solutions-title");
    const solutionsDescription = document.querySelector(".solutions-description");
    const previewCards = document.querySelectorAll(".solutions-preview .preview-card");
    const solutionsFeatureCards = document.querySelectorAll(".solutions-features .feature-card");

    // Apply animations
    if (solutionsTitle) solutionsTitle.classList.add("scroll-animate-scale");
    if (solutionsDescription) solutionsDescription.classList.add("scroll-animate");
    previewCards.forEach((card, index) => {
        card.classList.add("victory-card-animate");
        card.classList.add(`delay-${Math.min(index + 1, 5)}`);
    });
    solutionsFeatureCards.forEach((card, index) => {
        card.classList.add("victory-card-animate");
        card.classList.add(`delay-${Math.min(index + 1, 5)}`);
    });
}

/**
 * Initializes animations for the Inbound Call Handling section.
 */
function initCallHandlingAnimations() {
    const callHandlingTitle = document.querySelector(".call-handling-title");
    const callHandlingDescription = document.querySelector(".call-handling-description");
    const callSteps = document.querySelectorAll(".call-step");
    const phoneInterface = document.querySelector(".phone-interface");

    if (callHandlingTitle) callHandlingTitle.classList.add("scroll-animate-scale");
    if (callHandlingDescription) callHandlingDescription.classList.add("scroll-animate");
    callSteps.forEach((step, index) => {
        step.classList.add("call-step-animate");
        step.classList.add(`delay-${Math.min(index + 1, 5)}`);
    });
    if (phoneInterface) phoneInterface.classList.add("scroll-animate-scale");
}

/**
 * Initializes animations for the Victory Solutions section.
 */
function initVictorySolutionsAnimations() {
    const victoryTitle = document.querySelector(".victory-title");
    const victoryDescription = document.querySelector(".victory-description");
    const victoryBadge = document.querySelector(".victory-badge");
    const solutionCards = document.querySelectorAll(".solution-card");
    const featureItems = document.querySelectorAll(".feature-item");
    const victoryBtn = document.querySelector(".victory-btn");

    if (victoryTitle) {
        victoryTitle.classList.add("scroll-animate-scale");
    }
    if (victoryDescription) {
        victoryDescription.classList.add("scroll-animate");
    }
    if (victoryBadge) {
        victoryBadge.classList.add("scroll-animate-fade");
    }
    
    solutionCards.forEach((card, index) => {
        card.classList.add("victory-card-animate");
        card.classList.add(`delay-${Math.min(index + 1, 3)}`);
    });
    
    featureItems.forEach((item, index) => {
        item.classList.add("victory-feature-animate");
        item.classList.add(`delay-${Math.min(index + 1, 3)}`);
    });
    
    if (victoryBtn) {
        victoryBtn.classList.add("scroll-animate-scale");
    }
}


/**
 * Initializes animations for the Enhanced AI Capabilities section.
 */
function initEnhancedCapabilitiesAnimations() {
    const enhancedTitle = document.querySelector(".enhanced-title");
    const enhancedDescription = document.querySelector(".enhanced-description");
    const performanceItems = document.querySelectorAll(".performance-metrics .performance-item");
    const technologiesTitle = document.querySelector(".technologies-title");
    const technologyCards = document.querySelectorAll(".technology-card");

    if (enhancedTitle) enhancedTitle.classList.add("scroll-animate-scale");
    if (enhancedDescription) enhancedDescription.classList.add("scroll-animate");
    performanceItems.forEach((item, index) => {
        item.classList.add("scroll-animate");
        item.classList.add(`delay-${Math.min(index + 1, 4)}`);
    });
    if (technologiesTitle) technologiesTitle.classList.add("scroll-animate-scale");
    technologyCards.forEach((card, index) => {
        card.classList.add("tech-card-animate");
        card.classList.add(`delay-${Math.min(index + 1, 4)}`);
    });
}

/**
 * Initializes animations for the Discovery & Planning section.
 */
function initDiscoveryPlanningAnimations() {
    const discoveryHeader = document.querySelector(".discovery-header");
    const discoveryDescription = document.querySelector(".discovery-description");
    const discoverySections = document.querySelectorAll(".discovery-section");
    const implementationProgress = document.querySelector(".implementation-progress");

    if (discoveryHeader) discoveryHeader.classList.add("scroll-animate-scale");
    if (discoveryDescription) discoveryDescription.classList.add("scroll-animate");
    discoverySections.forEach((section, index) => {
        section.classList.add("discovery-section-animate");
        section.classList.add(`delay-${Math.min(index + 1, 2)}`);
    });
    if (implementationProgress) implementationProgress.classList.add("scroll-animate");
}

/**
 * Initializes animations for the Trusted by Industry Leaders section.
 */
function initTrustedLeadersAnimations() {
    const trustedTitle = document.querySelector(".trusted-title");
    const trustedDescription = document.querySelector(".trusted-description");
    const companyLogos = document.querySelectorAll(".company-logos .logo-item");
    const trustStats = document.querySelectorAll(".trust-stats .stat-item");

    if (trustedTitle) trustedTitle.classList.add("scroll-animate-scale");
    if (trustedDescription) trustedDescription.classList.add("scroll-animate");
    companyLogos.forEach((logo, index) => {
        logo.classList.add("logo-item-animate");
        logo.classList.add(`delay-${Math.min(index + 1, 8)}`);
    });
    trustStats.forEach((stat, index) => {
        stat.classList.add("scroll-animate");
        stat.classList.add(`delay-${Math.min(index + 1, 3)}`);
    });
}

/**
 * Initializes animations for the AI Capabilities section.
 */
function initAICapabilitiesAnimations() {
    const capabilitiesTitle = document.querySelector(".capabilities-title");
    const capabilitiesDescription = document.querySelector(".capabilities-description");
    const capabilityCards = document.querySelectorAll(".capability-card");

    if (capabilitiesTitle) capabilitiesTitle.classList.add("scroll-animate-scale");
    if (capabilitiesDescription) capabilitiesDescription.classList.add("scroll-animate");
    capabilityCards.forEach((card, index) => {
        card.classList.add("capability-card-animate");
        card.classList.add(`delay-${Math.min(index + 1, 4)}`);
    });
}




function initVoiceShowcase() {
    const voiceCards = document.querySelectorAll('.voice-card');

    voiceCards.forEach(card => {
        const audio = card.querySelector('audio');
        const playBtn = card.querySelector('.play-btn');
        
        if (!audio || !playBtn) return;

        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Pause all other audio players
            voiceCards.forEach(otherCard => {
                if (otherCard !== card) {
                    const otherAudio = otherCard.querySelector('audio');
                    const otherBtn = otherCard.querySelector('.play-btn');
                    
                    if (otherAudio && !otherAudio.paused) {
                        otherAudio.pause();
                        otherBtn.textContent = '▶';
                        otherCard.classList.remove('playing');
                    }
                }
            });

            if (audio.paused) {
                audio.play();
                playBtn.textContent = '❚❚';
                card.classList.add('playing');
            } else {
                audio.pause();
                playBtn.textContent = '▶';
                card.classList.remove('playing');
            }
        });

        audio.addEventListener('ended', () => {
            playBtn.textContent = '▶';
            card.classList.remove('playing');
        });

        audio.addEventListener('pause', () => {
            card.classList.remove('playing');
        });

        audio.addEventListener('play', () => {
            card.classList.add('playing');
        });
    });
}

/**
 * Initializes the AI Intelligence Hub interactive functionality.
 */
function initAIIntelligenceHub() {
    // Initialize satellite metrics positioning
    initSatelliteMetrics();
    
    // Initialize neural network visualization
    initNeuralNetworkVisualization();
    
    // Initialize real-time updates
    initRealTimeIntelligenceUpdates();
    
    // Initialize interactive elements
    initHubInteractivity();
    
    // Initialize performance panels
    initPerformancePanels();
    
    // Initialize intelligence stream
    initIntelligenceStream();
}

/**
 * Positions satellite metrics in orbit around the central hub.
 */
function initSatelliteMetrics() {
    const satelliteMetrics = document.querySelectorAll('.satellite-metric');
    
    satelliteMetrics.forEach((metric, index) => {
        const positions = [
            { top: '10%', left: '50%', transform: 'translateX(-50%)' },
            { top: '50%', right: '10%', transform: 'translateY(-50%)' },
            { bottom: '10%', left: '50%', transform: 'translateX(-50%)' },
            { top: '50%', left: '10%', transform: 'translateY(-50%)' }
        ];
        
        if (positions[index]) {
            Object.assign(metric.style, positions[index]);
        }
        
        // Add click interaction
        metric.addEventListener('click', () => {
            metric.style.transform += ' scale(1.2)';
            setTimeout(() => {
                metric.style.transform = metric.style.transform.replace(' scale(1.2)', '');
            }, 200);
        });
    });
}

/**
 * Initializes neural network visualization with dynamic connections.
 */
function initNeuralNetworkVisualization() {
    const neuralNetwork = document.querySelector('.neural-network');
    if (!neuralNetwork) return;
    
    const networkGrid = neuralNetwork.querySelector('.network-grid');
    const networkConnections = neuralNetwork.querySelector('.network-connections');
    
    if (!networkGrid || !networkConnections) return;
    
    // Create network nodes
    for (let i = 0; i < 32; i++) {
        const node = document.createElement('div');
        node.className = 'network-node';
        node.style.animationDelay = `${i * 0.1}s`;
        networkGrid.appendChild(node);
    }
    
    // Create connection lines
    for (let i = 0; i < 15; i++) {
        const line = document.createElement('div');
        line.className = 'connection-line';
        line.style.top = `${Math.random() * 80 + 10}%`;
        line.style.left = `${Math.random() * 80 + 10}%`;
        line.style.width = `${Math.random() * 200 + 50}px`;
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        line.style.animationDelay = `${i * 0.3}s`;
        networkConnections.appendChild(line);
    }
    
    // Add hover effects to nodes
    const nodes = networkGrid.querySelectorAll('.network-node');
    nodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            node.style.transform = 'scale(2)';
            node.style.boxShadow = '0 0 30px rgba(138, 43, 226, 1)';
        });
        
        node.addEventListener('mouseleave', () => {
            node.style.transform = 'scale(1)';
            node.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.6)';
        });
    });
}

/**
 * Initializes real-time intelligence updates.
 */
function initRealTimeIntelligenceUpdates() {
    const centralValue = document.querySelector('.center-value');
    const streamItems = document.querySelectorAll('.stream-item');
    const performanceBars = document.querySelectorAll('.bar-fill');
    
    // Update central metric periodically
    if (centralValue) {
        setInterval(() => {
            const currentValue = parseInt(centralValue.textContent);
            const newValue = Math.min(99, Math.max(85, currentValue + (Math.random() - 0.5) * 4));
            centralValue.textContent = Math.round(newValue) + '%';
            
            // Update progress ring
            const progressRing = document.querySelector('.ring-progress');
            if (progressRing) {
                progressRing.style.setProperty('--percentage', newValue);
            }
        }, 5000);
    }
    
    // Update performance bars
    performanceBars.forEach((bar, index) => {
        setInterval(() => {
            const currentWidth = parseInt(bar.style.getPropertyValue('--width') || '90');
            const newWidth = Math.min(100, Math.max(70, currentWidth + (Math.random() - 0.5) * 10));
            bar.style.setProperty('--width', newWidth + '%');
            
            const valueElement = bar.parentElement.querySelector('.bar-value');
            if (valueElement) {
                valueElement.textContent = Math.round(newWidth) + '%';
            }
        }, 8000 + index * 1000);
    });
    
    // Update intelligence stream
    const streamMessages = [
        { icon: 'ai', type: 'AI', text: 'Neural pathway optimized', details: 'Processing speed increased by 12%' },
        { icon: 'security', type: 'Security', text: 'Threat detection updated', details: 'New security protocols activated' },
        { icon: 'performance', type: 'Performance', text: 'System efficiency improved', details: 'Response time reduced by 8%' },
        { icon: 'ai', type: 'AI', text: 'Learning algorithm enhanced', details: 'Accuracy improved by 5%' }
    ];
    
    if (streamItems.length > 0) {
        let messageIndex = 0;
        setInterval(() => {
            const randomItem = streamItems[Math.floor(Math.random() * streamItems.length)];
            const message = streamMessages[messageIndex % streamMessages.length];
            
            const icon = randomItem.querySelector('.stream-icon');
            const text = randomItem.querySelector('.stream-text');
            const details = randomItem.querySelector('.stream-details');
            const time = randomItem.querySelector('.stream-time');
            
            if (icon && text && details && time) {
                icon.className = `stream-icon ${message.icon}`;
                text.textContent = message.text;
                details.textContent = message.details;
                time.textContent = 'Just now';
                
                // Flash effect
                randomItem.style.background = 'rgba(138, 43, 226, 0.1)';
                setTimeout(() => {
                    randomItem.style.background = 'rgba(255, 255, 255, 0.05)';
                }, 1000);
            }
            
            messageIndex++;
        }, 12000);
    }
}

/**
 * Initializes hub interactivity.
 */
function initHubInteractivity() {
    const centralMetric = document.querySelector('.central-metric');
    const metricOrbs = document.querySelectorAll('.metric-orb');
    const performancePanels = document.querySelectorAll('.performance-panel');
    
    // Central metric interactions
    if (centralMetric) {
        centralMetric.addEventListener('click', () => {
            const ring = centralMetric.querySelector('.metric-ring');
            if (ring) {
                ring.style.animationDuration = '2s';
                setTimeout(() => {
                    ring.style.animationDuration = '20s';
                }, 4000);
            }
        });
    }
    
    // Metric orb interactions
    metricOrbs.forEach(orb => {
        orb.addEventListener('mouseenter', () => {
            orb.style.transform = 'scale(1.2)';
            orb.style.boxShadow = '0 0 50px rgba(138, 43, 226, 0.8)';
        });
        
        orb.addEventListener('mouseleave', () => {
            orb.style.transform = 'scale(1)';
            orb.style.boxShadow = '0 0 30px rgba(138, 43, 226, 0.4)';
        });
        
        orb.addEventListener('click', () => {
            orb.style.transform = 'scale(1.3)';
            setTimeout(() => {
                orb.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // Performance panel interactions
    performancePanels.forEach(panel => {
        panel.addEventListener('mouseenter', () => {
            panel.style.transform = 'translateY(-15px) scale(1.05)';
            panel.style.boxShadow = '0 25px 80px rgba(138, 43, 226, 0.4)';
        });
        
        panel.addEventListener('mouseleave', () => {
            panel.style.transform = 'translateY(0) scale(1)';
            panel.style.boxShadow = 'none';
        });
    });
}

/**
 * Initializes performance panels with animated bars.
 */
function initPerformancePanels() {
    const qualityBars = document.querySelectorAll('.quality-bar');
    
    qualityBars.forEach((bar, index) => {
        const fill = bar.querySelector('.bar-fill');
        const value = bar.querySelector('.bar-value');
        
        if (fill && value) {
            const targetWidth = 75 + Math.random() * 20; // Random value between 75-95%
            fill.style.setProperty('--width', targetWidth + '%');
            value.textContent = Math.round(targetWidth) + '%';
            
            // Add click interaction
            bar.addEventListener('click', () => {
                const newWidth = 70 + Math.random() * 30;
                fill.style.setProperty('--width', newWidth + '%');
                value.textContent = Math.round(newWidth) + '%';
                
                // Flash effect
                fill.style.filter = 'brightness(1.5)';
                setTimeout(() => {
                    fill.style.filter = 'brightness(1)';
                }, 300);
            });
        }
    });
}

/**
 * Initializes intelligence stream interactions.
 */
function initIntelligenceStream() {
    const streamItems = document.querySelectorAll('.stream-item');
    const statusDot = document.querySelector('.status-dot');
    
    streamItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(15px) scale(1.02)';
            item.style.background = 'rgba(138, 43, 226, 0.1)';
            item.style.borderColor = 'rgba(138, 43, 226, 0.5)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0) scale(1)';
            item.style.background = 'rgba(255, 255, 255, 0.05)';
            item.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
        
        item.addEventListener('click', () => {
            item.style.transform = 'translateX(20px) scale(1.05)';
            setTimeout(() => {
                item.style.transform = 'translateX(0) scale(1)';
            }, 200);
        });
    });
    
    // Status dot pulsing effect
    if (statusDot) {
        setInterval(() => {
            statusDot.style.boxShadow = '0 0 20px rgba(0, 255, 127, 0.8)';
            setTimeout(() => {
                statusDot.style.boxShadow = 'none';
            }, 500);
        }, 3000);
    }
}

/**
 * Initializes the FAQ section functionality.
 */
function initFAQSection() {
    console.log('Initializing FAQ section...');
    
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFAQSection);
        return;
    }
    
    // Use a small delay to ensure all elements are rendered
    setTimeout(() => {
        const faqItems = document.querySelectorAll('.faq-item');
        console.log('Found FAQ items:', faqItems.length);
        
        if (faqItems.length === 0) {
            console.error('No FAQ items found');
            return;
        }
        
        faqItems.forEach((item, index) => {
            console.log(`Setting up FAQ item ${index + 1}`);
            
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');
            
            console.log('FAQ elements found:', {
                question: !!question,
                answer: !!answer,
                toggle: !!toggle
            });
            
            if (question && answer && toggle) {
                // Test that we can add the active class
                console.log('Adding test active class...');
                
                // Add click event to the entire question area
                question.addEventListener('click', function(e) {
                    console.log('FAQ question clicked:', index + 1);
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const isActive = item.classList.contains('active');
                    console.log('Current state:', isActive ? 'active' : 'inactive');
                    
                    // Close all other FAQ items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            console.log('Closed other FAQ item');
                        }
                    });
                    
                    // Toggle current item
                    if (isActive) {
                        item.classList.remove('active');
                        console.log('Closed current FAQ item');
                    } else {
                        item.classList.add('active');
                        console.log('Opened current FAQ item');
                    }
                });
                
                // Also add click event to toggle button specifically
                toggle.addEventListener('click', function(e) {
                    console.log('FAQ toggle clicked:', index + 1);
                    e.preventDefault();
                    e.stopPropagation();
                    question.click();
                });
                
                // Add hover effects
                question.addEventListener('mouseenter', function() {
                    console.log('FAQ question hovered:', index + 1);
                    question.style.cursor = 'pointer';
                    if (!item.classList.contains('active')) {
                        item.style.transform = 'translateY(-2px)';
                        item.style.boxShadow = '0 15px 30px rgba(138, 43, 226, 0.1)';
                    }
                });
                
                question.addEventListener('mouseleave', function() {
                    if (!item.classList.contains('active')) {
                        item.style.transform = '';
                        item.style.boxShadow = '';
                    }
                });
                
                console.log(`FAQ item ${index + 1} setup complete`);
            } else {
                console.error(`FAQ item ${index + 1} missing elements:`, {
                    question: !!question,
                    answer: !!answer,
                    toggle: !!toggle
                });
            }
        });
        
        console.log('FAQ section initialization complete');
    }, 100);
    
    // Initialize button interactions
    const faqContactBtn = document.querySelector('.faq-contact-btn');
    if (faqContactBtn) {
        faqContactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = faqContactBtn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.classList.add('ripple');
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            faqContactBtn.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Scroll to contact section or trigger contact action
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

function initPlansSectionAnimations() {
    const planCards = document.querySelectorAll(".plan-card");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-in");
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    planCards.forEach((card) => {
        observer.observe(card);
    });
}


