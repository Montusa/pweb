function mostrar(){
    const faqQuestions = document.querySelectorAll('.promocion');
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                question.classList.toggle('active');
                const answer = question.nextElementSibling;
                answer.classList.toggle('show');
            });
        });
}