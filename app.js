const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransition(){
    //Button click active class
    for(let i=0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    
    //sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other section
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toogle theme

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })

    // Contact button click handler
    const contactBtn = document.querySelector('.contact-btn');
    if(contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active from all sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });
            
            // Add active to contact section
            document.getElementById('contact').classList.add('active');
            
            // Update control buttons
            sectBtn.forEach((btn) => {
                btn.classList.remove('active-btn');
                if(btn.dataset.id === 'contact') {
                    btn.classList.add('active-btn');
                }
            });
        });
    }

    // Contact form submission - opens email client
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('senderName').value;
            const email = document.getElementById('senderEmail').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            const mailtoLink = `mailto:sureshboya0011@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            window.location.href = mailtoLink;
            
            // Clear form
            contactForm.reset();
            
            alert('Opening your email client. If it doesn\'t open, please email directly to sureshboya0011@gmail.com');
        });
    }

}

PageTransition();



