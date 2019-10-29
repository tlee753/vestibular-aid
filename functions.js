(function() {
    var o = document.getElementById('protect-overlay');
    o.getElementsByTagName('form')[0].onsubmit = function() {
        // https://developer.mozilla.org/En/DOM/Window.btoa
        // https://developer.mozilla.org/en/DOM/window.atob
        // to get the obfuscated text, use `console.log(btoa('your text goes here'))`
        // `aSBsb3ZlIHlvdQ==` => `i love you`
        if (this.answer.value === atob('aSBsb3ZlIHlvdQ==')) {
            o.style.display = "none";
        } else {
            alert('Wrong password!');
        }
        return false;
    };
})();
