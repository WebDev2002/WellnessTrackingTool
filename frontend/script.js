/* form validation */






/* FAQ js */
document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.e-box');

    // Ensure all boxes are closed on page load
    boxes.forEach(box => {
        const content = box.querySelector('.boxs');
        const icon = box.querySelector('.icon');
        content.classList.remove('open');
        icon.style.transform = 'rotate(0deg)';
    });

    boxes.forEach(box => {
        const button = box.querySelector('.p-box');
        const content = box.querySelector('.boxs');
        const icon = button.querySelector('.icon');

        button.addEventListener('click', () => {
            const isActive = content.classList.contains('open');

            // Close all boxes and reset icons
            boxes.forEach(b => {
                b.querySelector('.boxs').classList.remove('open');
                b.querySelector('.icon').style.transform = 'rotate(0deg)';
            });

            // If not active, open the clicked box
            if (!isActive) {
                content.classList.add('open');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});



