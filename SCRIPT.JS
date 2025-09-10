// Interactive hover effects for section cards
document.querySelectorAll('.section-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill tag interactions
document.querySelectorAll('.skill-tag').forEach(skill => {
    skill.addEventListener('click', () => {
        // Change background color on click
        skill.style.background = 'linear-gradient(45deg, #90EE90, #32CD32)';
        
        // Reset after 500ms
        setTimeout(() => {
            skill.style.background = 'linear-gradient(45deg, #32CD32, #90EE90)';
        }, 500);
    });
});

// Stat card animations
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('click', () => {
        const number = card.querySelector('.stat-number');
        number.style.transform = 'scale(1.2) rotate(360deg)';
        number.style.transition = 'all 0.5s ease';
        
        // Reset transformation after animation
        setTimeout(() => {
            number.style.transform = 'scale(1) rotate(0deg)';
        }, 500);
    });
});

// Contact function
function showContact() {
    alert('🌱 Ready to revolutionize agriculture together!\n\n📧 Connect with Mukesh to discuss:\n• Sustainable farming innovations\n• Agricultural technology solutions\n• Organic farming initiatives\n• Rural development projects\n\n🚀 Let\'s build a greener future!');
}

// Smooth scroll animation for cards on page load
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.section-card');
    
    cards.forEach((card, index) => {
        // Initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        // Animate each card with a delay
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Dynamic gradient background animation
let gradientAngle = 135;

const animateBackground = () => {
    gradientAngle += 1;
    document.body.style.background = `linear-gradient(${gradientAngle}deg, #667eea 0%, #764ba2 100%)`;
};

// Start background animation
setInterval(animateBackground, 50);

// Enhanced floating elements animation
const floatingElements = document.querySelectorAll('.floating-element');

floatingElements.forEach((element, index) => {
    // Random animation delays
    element.style.animationDelay = `${index * -1.5}s`;
    
    // Add click interaction for floating elements
    element.addEventListener('click', () => {
        element.style.fontSize = '40px';
        element.style.opacity = '0.3';
        
        setTimeout(() => {
            element.style.fontSize = '';
            element.style.opacity = '0.1';
        }, 1000);
    });
});

// Add scroll-based animations
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    
    // Parallax effect for floating elements
    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        element.style.transform = `translateY(${parallax * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Keyboard accessibility enhancements
document.addEventListener('keydown', (e) => {
    // Enter key activation for interactive elements
    if (e.key === 'Enter') {
        const focused = document.activeElement;
        
        if (focused.classList.contains('skill-tag')) {
            focused.click();
        } else if (focused.classList.contains('stat-card')) {
            focused.click();
        } else if (focused.classList.contains('contact-btn')) {
            focused.click();
        }
    }
});

// Add focus indicators for accessibility
document.querySelectorAll('.skill-tag, .stat-card, .contact-btn').forEach(element => {
    element.setAttribute('tabindex', '0');
    
    element.addEventListener('focus', () => {
        element.style.outline = '2px solid #90EE90';
        element.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', () => {
        element.style.outline = 'none';
    });
});

// Performance optimization: throttle scroll events
let ticking = false;

function updateScrollEffects() {
    // Scroll-based animations here
    ticking = false;
}

function requestScrollUpdate() {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
}

window.addEventListener('scroll', requestScrollUpdate);

// Initialize tooltips for skill tags
document.querySelectorAll('.skill-tag').forEach(skill => {
    const skillText = skill.textContent;
    let tooltip;
    
    skill.addEventListener('mouseenter', () => {
        tooltip = document.createElement('div');
        tooltip.textContent = `Click to highlight: ${skillText}`;
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 14px;
            pointer-events: none;
            z-index: 1000;
            white-space: nowrap;
            transform: translateY(-100%);
            margin-top: -8px;
        `;
        
        skill.style.position = 'relative';
        skill.appendChild(tooltip);
    });
    
    skill.addEventListener('mouseleave', () => {
        if (tooltip && tooltip.parentNode) {
            tooltip.parentNode.removeChild(tooltip);
        }
    });
});

// Console log for developers
console.log(`
🌱 Mukesh's Agricultural Portfolio
═══════════════════════════════════
✨ Interactive features loaded successfully!
🚀 Ready to transform agriculture together!

Features included:
• Smooth animations
• Interactive hover effects  
• Dynamic background
• Accessibility support
• Mobile responsive design

Contact Mukesh to discuss agricultural innovations! 🌾
`);

// Add success message when page fully loads
window.addEventListener('load', () => {
    setTimeout(() => {
        console.log('🎉 Portfolio loaded successfully! All animations active.');
    }, 1000);
});