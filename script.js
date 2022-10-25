"require strict";

console.log("hi");

const form = document.querySelector(".form");
const bill_total = document.querySelector(".bill_total");
const tip = document.querySelector("#tip");
const tip_percent = document.querySelector(".tip_percent");
const tip_amount = document.querySelector(".tip_amount");
const total_bill_tip = document.querySelector(".total_bill_tip");
const error = document.querySelector(".error");

tip_percent.value = tip.value + "%";

const formChange = () => {
  console.log("form changed");
  tip_percent.value = tip.value + "%";
  if (isNaN(bill_total.value)) {
    error.style.display = "block";
    error.innerHTML = "Bill Total must be a number";
    tip_amount.value = "";
    total_bill_tip.value = "";
  }

  if (!isNaN(bill_total.value)) {
    error.style.display = "none";
    const tip_calc = tip.value / 100;
    const tip_amount_value = tip_calc * +bill_total.value;
    tip_amount.value = "$" + tip_amount_value.toFixed(2);

    const final_value = +tip_amount_value + +bill_total.value;
    total_bill_tip.value = "$" + final_value.toFixed(2);
    console.log("$" + tip_amount_value);
  }
};

form.addEventListener("change", formChange);
