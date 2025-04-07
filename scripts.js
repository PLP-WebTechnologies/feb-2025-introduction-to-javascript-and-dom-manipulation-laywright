// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // 1. Change text content dynamically
    const heroText = document.getElementById('hero-text');
    heroText.textContent = "Empowering your digital transformation journey";
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // 2. Modify CSS styles via JavaScript
    const ctaBtn = document.getElementById('cta-btn');
    ctaBtn.style.backgroundColor = '#e74c3c';
    ctaBtn.style.padding = '12px 24px';
    ctaBtn.style.fontWeight = 'bold';

    // 3. Add elements dynamically
    const services = [
        { name: "Web Development", description: "Custom websites and web applications" },
        { name: "Mobile Apps", description: "iOS and Android application development" },
        { name: "Cloud Solutions", description: "Scalable cloud infrastructure" },
        { name: "Data Analytics", description: "Business intelligence and insights" },
        { name: "UI/UX Design", description: "User-centered design solutions" }
    ];

    const serviceContainer = document.getElementById('service-container');
    
    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        `;
        serviceContainer.appendChild(card);
    });

    // 4. Remove elements when button is clicked
    const toggleBtn = document.getElementById('toggle-service-btn');
    let cardsVisible = true;
    
    toggleBtn.addEventListener('click', function() {
        const cards = document.querySelectorAll('.service-card');
        cards.forEach(card => {
            card.style.display = cardsVisible ? 'none' : 'block';
        });
        cardsVisible = !cardsVisible;
        toggleBtn.textContent = cardsVisible ? 'Hide Services' : 'Show Services';
    });

    // 5. Change theme on button click
    const themeBtn = document.getElementById('change-theme-btn');
    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        themeBtn.textContent = document.body.classList.contains('dark-theme') 
            ? 'Light Theme' 
            : 'Dark Theme';
    });

    // 6. Add testimonials dynamically
    const testimonials = [
        { name: "Sarah Johnson", quote: "PrimeTech transformed our online presence!" },
        { name: "Michael Chen", quote: "Exceptional service and support." },
        { name: "Emma Williams", quote: "Our mobile app exceeded expectations." }
    ];

    const testimonialContainer = document.getElementById('testimonial-container');
    
    testimonials.forEach(testimonial => {
        const blockquote = document.createElement('blockquote');
        blockquote.innerHTML = `
            <p>"${testimonial.quote}"</p>
            <cite>- ${testimonial.name}</cite>
        `;
        testimonialContainer.appendChild(blockquote);
    });
});