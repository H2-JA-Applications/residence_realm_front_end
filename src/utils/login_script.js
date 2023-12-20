export function loginElements() {
    const switchers = [...document.querySelectorAll('.switcher')]

    switchers.forEach(item => {
        item.addEventListener('click', function () {
            switchers.forEach(item => item.parentElement.classList.remove('is-active'))
            this.parentElement.classList.add('is-active')
        })
    })

    document.addEventListener('DOMContentLoaded', function() {
        var inputs = document.querySelectorAll('input');

        inputs.forEach(function(input) {
            input.addEventListener('input', function() {
                if (this.validity.patternMismatch) {
                    this.setCustomValidity(this.title);
                } else {
                    this.setCustomValidity('');
                }
            });
        });
    });
}