// Amazon India Clone - Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // Enhanced Hero Carousel Functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const totalSlides = slides.length;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.style.transform = 'translateX(0) scale(1)';
                slide.style.opacity = '1';
            } else if (i < index) {
                slide.style.transform = 'translateX(-100%) scale(0.8)';
                slide.style.opacity = '0';
            } else {
                slide.style.transform = 'translateX(100%) scale(0.8)';
                slide.style.opacity = '0';
            }
        });
        slides[index].classList.add('active');
        
        // Add slide transition effect
        slides[index].style.animation = 'slideInRight 0.8s ease-out';
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
    
    // Auto-advance carousel every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Global functions for carousel controls
    window.changeSlide = function(direction) {
        if (direction === 1) {
            nextSlide();
        } else {
            prevSlide();
        }
    };
    
    // Search Functionality
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Simulate search - in real implementation, this would redirect to search results
            alert(`Searching for: "${searchTerm}"`);
            // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
        }
    }
    
    searchIcon.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Cart Functionality
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.product-card');
    
    function updateCartCount() {
        cartCountElement.textContent = cartCount;
        
        // Add animation to cart icon
        const cartIcon = document.querySelector('.nav-cart');
        cartIcon.style.transform = 'scale(1.1)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Add click handlers to product cards with enhanced effects
    addToCartButtons.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent default if clicking on the card itself
            if (e.target === card || e.target.closest('.product-info')) {
                cartCount++;
                updateCartCount();
                
                // Add bounce effect
                this.style.animation = 'bounceIn 0.6s ease';
                setTimeout(() => {
                    this.style.animation = '';
                }, 600);
                
                // Show success message
                showNotification('Item added to cart! 🛍️');
            }
        });
    });
    
    // Enhanced Notification System
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = message;
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: linear-gradient(135deg, #146eb4, #1976d2);
            color: white;
            padding: 15px 25px;
            border-radius: 25px;
            z-index: 1000;
            font-size: 14px;
            font-weight: 600;
            box-shadow: 0 8px 25px rgba(20, 110, 180, 0.3);
            transform: translateX(100%) scale(0.8);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border: 2px solid rgba(255, 255, 255, 0.2);
        `;
        
        document.body.appendChild(notification);
        
        // Animate in with bounce
        setTimeout(() => {
            notification.style.transform = 'translateX(0) scale(1)';
            notification.style.animation = 'bounceIn 0.6s ease';
        }, 100);
        
        // Add pulse effect
        setTimeout(() => {
            notification.style.animation = 'pulse 2s infinite';
        }, 700);
        
        // Remove after 4 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%) scale(0.8)';
            notification.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 400);
        }, 4000);
    }
    
    // Smooth Scrolling for "Back to Top"
    const backToTop = document.querySelector('.foot-panel1');
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Enhanced Product Card Hover Effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05) rotateX(5deg)';
            this.style.boxShadow = '0 20px 50px rgba(0,0,0,0.25)';
            this.style.zIndex = '10';
            
            // Add glow effect
            this.style.filter = 'brightness(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
            this.style.zIndex = '1';
            this.style.filter = 'brightness(1)';
        });
    });
    
    // Enhanced Box Hover Effects
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        box.style.animationDelay = `${index * 0.2}s`;
        
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.03) rotateY(5deg)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
            this.style.filter = 'brightness(1.1) saturate(1.2)';
            
            // Add sparkle effect
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.top = '10px';
            sparkle.style.right = '10px';
            sparkle.style.fontSize = '20px';
            sparkle.style.animation = 'pulse 1s infinite';
            this.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000);
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
            this.style.filter = 'brightness(1) saturate(1)';
        });
    });
    
    // Language Selector
    const languageSelect = document.querySelector('.language-select');
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        showNotification(`Language changed to ${selectedLanguage}`);
    });
    
    // Search Suggestions (Mock Data)
    const searchSuggestions = [
        'iPhone 15', 'Samsung Galaxy S24', 'MacBook Air', 'iPad Pro',
        'AirPods Pro', 'PlayStation 5', 'Nintendo Switch', 'Dell Laptop',
        'Canon Camera', 'Sony Headphones', 'Kindle', 'Fire TV Stick',
        'Echo Dot', 'Ring Doorbell', 'Fitbit', 'Apple Watch'
    ];
    
    // Search Input Auto-complete
    searchInput.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        if (value.length > 2) {
            const suggestions = searchSuggestions.filter(item => 
                item.toLowerCase().includes(value)
            );
            
            // In a real implementation, you would show these suggestions
            // For now, we'll just log them
            if (suggestions.length > 0) {
                console.log('Search suggestions:', suggestions.slice(0, 5));
            }
        }
    });
    
    // Mobile Menu Toggle (for responsive design)
    const panelAll = document.querySelector('.panel-all');
    const panelOps = document.querySelector('.panel-ops');
    
    panelAll.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            panelOps.style.display = panelOps.style.display === 'flex' ? 'none' : 'flex';
        }
    });
    
    // Lazy Loading for Images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Trigger loading
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Price Animation
    function animatePrice(element) {
        const finalPrice = element.textContent;
        const numericPrice = parseInt(finalPrice.replace(/[^\d]/g, ''));
        const duration = 1000;
        const steps = 30;
        const increment = numericPrice / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericPrice) {
                current = numericPrice;
                clearInterval(timer);
            }
            element.textContent = `₹${Math.floor(current).toLocaleString('en-IN')}`;
        }, duration / steps);
    }
    
    // Animate prices when they come into view
    const priceElements = document.querySelectorAll('.current-price');
    const priceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatePrice(entry.target);
                priceObserver.unobserve(entry.target);
            }
        });
    });
    
    priceElements.forEach(price => priceObserver.observe(price));
    
    // Dynamic Content Loading (Simulate)
    function loadMoreProducts() {
        // This would typically fetch more products from an API
        console.log('Loading more products...');
        showNotification('More products loaded!');
    }
    
    // Scroll to load more products
    let isLoading = false;
    window.addEventListener('scroll', function() {
        if (isLoading) return;
        
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        
        if (scrollTop + windowHeight >= docHeight - 1000) {
            isLoading = true;
            setTimeout(() => {
                loadMoreProducts();
                isLoading = false;
            }, 1000);
        }
    });
    
    // Initialize tooltips and particle effects
    function initTooltips() {
        const elementsWithTooltips = [
            { selector: '.nav-cart', text: 'View your cart' },
            { selector: '.nav-signin', text: 'Sign in to your account' },
            { selector: '.nav-return', text: 'View your orders' },
            { selector: '.search-icon', text: 'Search products' }
        ];
        
        elementsWithTooltips.forEach(item => {
            const element = document.querySelector(item.selector);
            if (element) {
                element.title = item.text;
            }
        });
    }
    
    // Create floating particles
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        document.body.appendChild(particlesContainer);
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particlesContainer.appendChild(particle);
        }
    }
    
    // Add ripple effect to buttons
    function addRippleEffect() {
        const rippleElements = document.querySelectorAll('.ripple');
        
        rippleElements.forEach(element => {
            element.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple-effect');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
    
    // Parallax scrolling effect
    function initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.floating');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
    
    // Initialize all effects
    createParticles();
    addRippleEffect();
    initParallax();
    
    initTooltips();
    
    // Performance optimization - Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debouncing to scroll events
    const debouncedScroll = debounce(function() {
        // Handle scroll events here
    }, 100);
    
    window.addEventListener('scroll', debouncedScroll);
    
    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 159, 0, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .magnetic {
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .magnetic:hover {
            transform: translateY(-3px) scale(1.05);
            text-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
    `;
    document.head.appendChild(style);
    
    console.log('Amazon India Clone with advanced effects loaded successfully!');
});