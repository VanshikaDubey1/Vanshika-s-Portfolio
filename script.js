// Fade in elements as they come into view
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Typing effect for the introduction
    const introText = "Hi, I'm Vanshika — a Computer Science Engineering student";
    const typingSpeed = 50;
    let i = 0;
    
    function typeWriter() {
        if (i < introText.length) {
            const typingElement = document.querySelector('.typing-text');
            if (typingElement) {
                typingElement.innerHTML += introText.charAt(i);
            }
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }
    
    // Start typing effect if element exists
    if (document.querySelector('.typing-text')) {
        typeWriter();
    }
});

// Enhanced project hover effects for black and white theme
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'translateY(-10px)';
        project.style.boxShadow = '0 12px 20px rgba(255, 255, 255, 0.2)';
        project.style.borderColor = '#ffffff';
    });
    
    project.addEventListener('mouseleave', () => {
        project.style.transform = 'translateY(0)';
        project.style.boxShadow = '0 4px 6px rgba(255, 255, 255, 0.1)';
        project.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    });
});

// Enhanced skill card hover effects
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
        card.style.boxShadow = '0 8px 16px rgba(255, 255, 255, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = 'none';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Progress bar animation
const animateProgressBars = () => {
    document.querySelectorAll('.progress-fill').forEach(bar => {
        const width = bar.getAttribute('data-width') || '0%';
        bar.style.width = width;
    });
};

// Trigger progress bar animation when skills section is visible
const skillsSection = document.querySelector('.skills-grid');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    skillsObserver.observe(skillsSection);
}

// Add subtle animation to tool tags
document.querySelectorAll('.tool-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.05)';
        tag.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
        tag.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    });
});

// Update year in footer automatically
const yearElement = document.querySelector('.year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add staggered fade-in for grid items
    const gridItems = document.querySelectorAll('.projects-grid .project, .skills-grid .skill-card');
    gridItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-in-delayed');
        }, index * 100);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add CSS for additional animations
const style = document.createElement('style');
style.textContent = `
    .loaded {
        opacity: 1;
        transition: opacity 0.5s ease;
    }
    
    .fade-in-delayed {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .tool-tag {
        transition: all 0.3s ease;
    }
    
    .skill-card {
        transition: all 0.3s ease;
    }
    
    .project {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);
