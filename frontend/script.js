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


document.addEventListener('DOMContentLoaded', function() {
    const link1 = document.getElementById('exe1');
    const link2 = document.getElementById('exe2');
    const link3 = document.getElementById('exe3');
    const link4 = document.getElementById('exe4');
    const id1 = '0'; // Replace with your dynamic ID
    const id2 = '1';
    const id3 = '2';
    const id4 = '3';

    // Encode the ID and append it to the href
    link1.href = `pages/exercise1.html?id=${encodeURIComponent(id1)}`;
    link2.href = `pages/exercise2.html?id=${encodeURIComponent(id2)}`;
    link3.href = `pages/exercise3.html?id=${encodeURIComponent(id3)}`;
    link4.href = `pages/exercise4.html?id=${encodeURIComponent(id4)}`;
});


