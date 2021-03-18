const faqs = document.querySelectorAll('li');

document.addEventListener('DOMContentLoaded', () => {
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            const p = faq.querySelector('p');
            const h3 = faq.querySelector('h3');
            const arrow = faq.querySelector('.arrow');
            p.classList.toggle('hide');
            h3.classList.toggle('bold');
            arrow.classList.toggle('rotate');
        });
    });
})