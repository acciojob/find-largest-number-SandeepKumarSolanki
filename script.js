function findLargest(a, b, c) {
	a = +a;
	b = +b;
	c = +c
  //your code here
	if (a >= b && a >= c) {
    return a;  // 'a' is the largest
  } else if (b >= a && b >= c) {
    return b;  // 'b' is the largest
  } else {
    return c;  // 'c' is the largest
  }
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));

