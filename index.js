let pointer = 1;

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

//

let isMenu = false;

const menuToggle = () => {

    isMenu = !isMenu;

    const mt = document.getElementById('menu-show-true');
    const mf = document.getElementById('menu-show-false');
    const m = document.getElementById('menu-show');
    if (isMenu) {
        mt.style.display = "flex";
        mf.style.display = "none";
        m.style.backgroundColor = "hsl(0, 0%, 100%)";
    } else {
        mf.style.display = "grid";
        mt.style.display = "none";
        m.style.backgroundColor = "transparent";
    }
};





