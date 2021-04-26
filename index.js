let pointer = 1;
// const o1 = document.querySelector("#option1").style.color = "red";
// const o2 = document.querySelectorAll("#option2");
// const o3 = document.querySelectorAll("#option3");
const hide = (o) => {
    o.forEach(el => {
        el.style.display = "none";
    });
};

const show = (o) => {
    o.forEach(el => {
        el.style.display = "block";
    });
};

const hideshow = (point) => {
    let o1 = document.querySelectorAll("#option1");
    let o2 = document.querySelectorAll("#option2");
    let o3 = document.querySelectorAll("#option3");

    if (point === 1) {
        show(o1);
        hide(o2);
        hide(o3);
    }

    if (point === 2) {
        show(o2);
        hide(o1);
        hide(o3);
    }

    if (point === 3) {
        show(o3);
        hide(o2);
        hide(o1);
    }

};


const next = () => {
    pointer === 3 ? pointer = 1 : pointer += 1;
    hideshow(pointer);
};

const prev = () => {
    pointer === 1 ? pointer = 3 : pointer -= 1;
    hideshow(pointer);
};





