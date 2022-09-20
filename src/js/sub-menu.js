document.querySelectorAll(".fact__title").forEach(element => {
    element.addEventListener("click", (e) => {
        let content = element.nextElementSibling;
        e.preventDefault();
        if (content.style.maxHeight) {
            document.querySelectorAll('.fact__info').forEach(element => element.style.maxHeight = null);

        } else {
            document.querySelectorAll('.fact__info').forEach(element => element.style.maxHeight = null);
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
});

document.addEventListener('keyup', function (event) {
    if (event.code === 'Escape') {
        document.querySelectorAll('.fact__info').forEach(element => element.style.maxHeight = null)
    }
});