function cancel(event) {
    event.stopImmediatePropagation();
}
window.addEventListener("blur", cancel);
window.addEventListener("focus", cancel);