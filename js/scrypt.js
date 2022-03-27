var total = "";
var minus = document.getElementById("minus");
var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");
var point = document.getElementById("point");
var plus = document.getElementById("plus");
var oneClear = document.getElementById("oneClear");
var equal = document.getElementById("equal");
var totalClear = document.getElementById("totalClear");
var multiply = document.getElementById("multiply");
var remainder = document.getElementById("remainder");
var division = document.getElementById("division");
var change = document.getElementById("change");
var dar = document.getElementsByClassName("col-0");
var dots = document.getElementById("dots");
var dark = document.getElementById("dark");
one.onclick = function () {
  total += this.value;
  value1.innerHTML = total;
};
two.onclick = function () {
  total += this.value;
  value1.innerHTML = total;
};
three.onclick = function () {
  total += this.value;
  value1.innerHTML = total;
};
four.onclick = function () {
  total += this.value;
  value1.innerHTML = total;
};
five.onclick = function () {
  total += this.value;
  value1.innerHTML = total;
};
six.onclick = function () {
  total += this.value;
  value1.innerHTML = total;
};
seven.onclick = function () {
  total += this.value;
  value1.innerHTML = total;
};
eight.onclick = function () {
  total += this.value;
  value1.innerHTML = total;
};

nine.onclick = function () {
  total += this.value;
  value1.innerHTML = total;
};
zero.onclick = function () {
  total += this.value;
  value1.innerHTML = total;
};
point.onclick = function () {
  total += this.value;
  value1.innerHTML = total;
};
plus.onclick = function () {
  total += this.value;
  value1.innerHTML = total;
};
minus.onclick = function () {
  total += this.value;
  value1.innerHTML = total;
};
oneClear.onclick = function () {
  total = total.substring(0, total.length - 1);
  value1.innerHTML = total;
};
equal.onclick = function () {
  var ans = eval(total);
  value1.innerHTML = ans;
  value2.innerHTML = total;
};
totalClear.onclick = function () {
  total = "";
  value1.innerHTML = 0;
  value2.innerHTML = "";
};
multiply.onclick = function () {
  total += this.value;
  value1.innerHTML = total;
};
remainder.onclick = function () {
  total += this.value;
  value1.innerHTML = total;
};
division.onclick = function () {
  total += this.value;
  value1.innerHTML = total;
};
