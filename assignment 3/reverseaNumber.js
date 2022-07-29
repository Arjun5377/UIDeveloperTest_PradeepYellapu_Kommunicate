const num = 10202121;
const reverse = (num) => parseInt(String(num)
.split("")
.reverse()
.join(""), 10);
console.log(reverse(num));
