const newRepeatedTyped = (className, strings) => {
    document.addEventListener("DOMContentLoaded", function(){
        window.Typed.new(".".concat(className), {
            strings: strings,
            typeSpeed: 35,
            backSpeed: 0,
            backDelay: 1500,
            loop: strings.length > 1
        });
    });
}

export default newRepeatedTyped;