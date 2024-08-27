document.querySelectorAll('.droplet').forEach(droplet => {
    droplet.addEventListener('mousedown', startDragging);
});

function startDragging(event) {
    const droplet = event.target;
    const shiftX = event.clientX - droplet.getBoundingClientRect().left;
    const shiftY = event.clientY - droplet.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        droplet.style.left = pageX - shiftX + 'px';
        droplet.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    droplet.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        droplet.onmouseup = null;
    };

    droplet.ondragstart = function() {
        return false;
    };
}
