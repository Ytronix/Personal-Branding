// Create bubbles
        const bubblesContainer = document.querySelector('.bubbles');
        const colors = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#7209b7',
                     '#E2F0CB', '#B5EAD7', '#C7CEEA', '#3A0CA3', '#8A7CFF'];
        
        for (let i = 0; i < 25; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            
            // Random properties
            const size = Math.random() * 100 + 50;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${posX}%`;
            bubble.style.top = `${posY}%`;
            bubble.style.background = color;
            
            bubblesContainer.appendChild(bubble);
        }