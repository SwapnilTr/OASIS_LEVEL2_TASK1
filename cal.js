function dis(val) {
  document.getElementById("result").value += val;
}

function myfunc(event) {
  if (
    event == "0" ||
    event == "1" ||
    event == "2" ||
    event == "3" ||
    event == "4" ||
    event == "5" ||
    event == "6" ||
    event == "7" ||
    event == "8" ||
    event == "9" ||
    event == "-" ||
    event == "+" ||
    event == "/" ||
    event == "*" ||
    event == ")" ||
    event == "(" ||
    event == "0" ||
    event == "1" ||
    event == "%"
  )
    document.getElementById("cal").value += val;
}

var c = document.getElementById("cal");
c.onkeyup = function (event) {
  if (event.keycode === 13) {
    console.log("Enter");
    let x = document.getElementById("result").value;
    console.log(x);
    solve();
  }
};

function solve() {
  let x = document.getElementById("result").value;
  let y = math.evaluate(x);
  document.getElementById("result").value = y;
}

function clr() {
  document.getElementById("result").value = "";
}
