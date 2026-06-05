
        // Mobile Nav Toggle
        const burger = document.querySelector('.burger');
        const navLinks = document.querySelector('.nav-links');
        
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('active');
        });
        
        // Smooth Scrolling for all links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    burger.classList.remove('active');
                }
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Gallery Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(btn => btn.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                
                // Filter items
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Testimonials carousel
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial-card');
        
        function showTestimonial(n) {
            testimonials.forEach(testimonial => {
                testimonial.style.display = 'none';
            });
            
            currentTestimonial = (n + testimonials.length) % testimonials.length;
            testimonials[currentTestimonial].style.display = 'block';
        }
        
        // Auto-rotate testimonials
        setInterval(() => {
            showTestimonial(currentTestimonial + 1);
        }, 5000);
        
        // Animation on scroll
        const animateElements = document.querySelectorAll('.animate');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        animateElements.forEach(el => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
        
        // Sticky Navbar on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                document.querySelector('nav').style.background = 'rgba(255, 248, 225, 0.98)';
                document.querySelector('nav').style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                document.querySelector('nav').style.background = 'rgba(255, 248, 225, 0.95)';
                document.querySelector('nav').style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            }
        });
