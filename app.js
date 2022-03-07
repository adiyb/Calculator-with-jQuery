$(function () {
    let screen = $(".screen p");
    let buttons = $(".number");
    let plus = $("#plus");
    let minus = $("#minus");
    let divide = $("#divide");
    let multiply = $("#multiply");
    let clear = $("#clear");
    let root = $("#root");
    let power = $("#power");
    let backSpace = $("#backspace");
    let equal = $("#equal");

    let memory, lastOperation;

    buttons.on("click", function (event) {
        let data = screen.text();
        if (data.length < 15) {
            if (event.target.dataset.value === ".") {
                if (!data.includes(".")) {
                    screen.text((data += event.target.dataset.value));
                }
            } else {
                if (data.includes(".")) {
                    screen.text((data += event.target.dataset.value));
                } else {
                    screen.text(Number((data += event.target.dataset.value)));
                }
            }
        } else {
            screen.text("    Error    ");
        }
    });

    plus.on("click", function () {
        memory = Number(screen.text());
        lastOperation = "plus";
        screen.text("0");
    });

    minus.on("click", function () {
        memory = Number(screen.text());
        lastOperation = "minus";
        screen.text("0");
    });

    divide.on("click", function () {
        memory = Number(screen.text());
        lastOperation = "divide";
        screen.text("0");
    });

    multiply.on("click", function () {
        memory = Number(screen.text());
        lastOperation = "multiply";
        screen.text("0");
    });

    clear.on("click", function () {
        memory = 0;
        lastOperation = "";
        screen.text(0);
    });

    backSpace.on("click", function () {
        memory = screen.text();
        backed = memory.substring(0, memory.length - 1);
        if (memory.length == 1) {
            screen.text(0);
        } else {
            screen.text(backed);
        }
    });

    root.on("click", function () {
        memory = Number(screen.text());
        screen.text(Number(Math.sqrt(memory).toFixed(3)));
    });

    power.on("click", function () {
        memory = Number(screen.text());
        let powered = String(memory ** 2);
        if (powered.length < 15) {
            screen.text(powered);
        } else {
            screen.text("    Error    ");
        }
    });

    equal.on("click", function () {
        let data2 = Number(screen.text());
        if (lastOperation === "plus") {
            screen.text(Number((memory + data2).toPrecision(15)));
        } else if (lastOperation === "minus") {
            screen.text(Number((memory - data2).toPrecision(15)));
        } else if (lastOperation === "divide") {
            screen.text(Number((memory / data2).toPrecision(15)));
        } else if (lastOperation === "multiply") {
            if (String(memory * data2).length < 15) {
                screen.text(Number((memory * data2).toPrecision(15)));
            } else {
                screen.text("Error");
            }
        }
        lastOperation = "";
    });
});
