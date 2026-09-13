var count = 0;

function stop() {
    count++;
    var slide = "slider" + count;
    var currentSlider = document.getElementById(slide);

    var slide = "slider" + (count + 1);
    var sliderAbove = document.getElementById(slide);

    var left = parseInt(
        window.getComputedStyle(currentSlider).getPropertyValue("left")
    );

    var width = parseInt(
        window.getComputedStyle(currentSlider).getPropertyValue("width")
    );

    currentSlider.style.left = left + "px";
    document.querySelector("#slider1").classList.remove("animate");

    currentSlider.classList.remove("animate");
    sliderAbove.style.visibility = "visible";
    sliderAbove.classList.add("animate");

    var slide = "slider" + (count - 1);
    var sliderBelow = document.getElementById(slide);

    var sliderBelowleft = parseInt(
        window.getComputedStyle(sliderBelow).getPropertyValue("left")
    );

    var diffrence = left - sliderBelowleft;
    var absDiffrence = Math.abs(diffrence);
    var newWidth = (width - absDiffrence).toString().concat("px");

    currentSlider.style.width = newWidth;
    sliderAbove.style.width = newWidth;

    if (diffrence > width || diffrence < -width) {
        alert(`Score: ${count}`);
        location.reload();
    }
}

const btn = document.getElementById("btn");
let randomNum = () => {
    return Math.floor(Math.random() * 256);
};

let changeColor = () => {
    let randomColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
    document.body.style.backgroundColor = randomColor;
};
btn.addEventListener("click",changeColor);