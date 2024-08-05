document.addEventListener('DOMContentLoaded', () => {
    const objects = document.querySelectorAll('.selectable');

    objects.forEach(object => {
        object.addEventListener('click', (event) => {
            const info = event.target.getAttribute('data-info');
            window.parent.postMessage({ objectInfo: info }, '*'); // You can restrict the target origin for security
        });
    });
});
