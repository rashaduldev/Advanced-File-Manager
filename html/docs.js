// Dynamic On-Page Navigation
document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');
    const onPageNav = document.querySelector('#onPageNav nav');
    
    // Get all headings from the content
    const headings = content.querySelectorAll('h1, h2, h3');
    
    // Create navigation items
    headings.forEach(heading => {
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.className = `nav-link ${heading.tagName.toLowerCase()}`;
        link.textContent = heading.textContent;
        
        // Add appropriate padding based on heading level
        if (heading.tagName === 'H2') {
            link.style.paddingLeft = '1rem';
        } else if (heading.tagName === 'H3') {
            link.style.paddingLeft = '1rem';
        }
        
        onPageNav.appendChild(link);
    });
    
    // Highlight current section
    const navLinks = document.querySelectorAll('#onPageNav .nav-link');
    
    function highlightCurrentSection() {
        const scrollPosition = window.scrollY;
        
        headings.forEach((heading, index) => {
            const nextHeading = headings[index + 1];
            const link = navLinks[index];
            
            const headingTop = heading.offsetTop - 100;
            const headingBottom = nextHeading ? nextHeading.offsetTop - 100 : document.body.scrollHeight;
            
            if (scrollPosition >= headingTop && scrollPosition < headingBottom) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightCurrentSection);
    highlightCurrentSection();
});

// Add smooth scrolling
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

// Dynamic Navigation Controls
function updateNavigationControls() {
    const sections = Array.from(document.querySelectorAll('.content section'));
    const currentSection = sections.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
    });

    if (currentSection) {
        const currentIndex = sections.indexOf(currentSection);
        const prevSection = sections[currentIndex - 1];
        const nextSection = sections[currentIndex + 1];

        const prevNav = document.querySelector('.nav-item-prev');
        const nextNav = document.querySelector('.nav-item-next');

        if (prevSection) {
            const prevTitle = prevSection.querySelector('h1, h2').textContent;
            prevNav.style.display = 'block';
            prevNav.querySelector('.nav-title').textContent = prevTitle;
            prevNav.querySelector('a').href = `#${prevSection.id}`;
        } else {
            prevNav.style.display = 'none';
        }

        if (nextSection) {
            const nextTitle = nextSection.querySelector('h1, h2').textContent;
            nextNav.style.display = 'block';
            nextNav.querySelector('.nav-title').textContent = nextTitle;
            nextNav.querySelector('a').href = `#${nextSection.id}`;
        } else {
            nextNav.style.display = 'none';
        }
    }
}

window.addEventListener('scroll', updateNavigationControls);
updateNavigationControls(); 