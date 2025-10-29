
let weight = prompt("وزن خود را وارد کنید (کیلوگرم):");
let height = prompt("قد خود را وارد کنید (متر):");

let bmi = weight / (height * height);

if (bmi < 18.5) {
  alert("وزن شما کمتر از حد نرمال است");
} else if (bmi >= 18.5 && bmi < 25) {
  alert("وزن شما نرمال است");
} else if (bmi >= 25 && bmi < 30) {
  alert("وزن شما کمی زیاد است");
} else {
  alert("وزن شما زیاد است");
}
