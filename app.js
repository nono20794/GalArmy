function toggleNav() {
  const outerGrid = document.querySelector(".outer-grid");
  if (outerGrid) {
    // console.log(outerGrid.classList);
    outerGrid.classList.toggle("outer-grid-expanded");
    const navList = document.querySelector(".navbar");
    if (navList) {
      navList.classList.toggle("hide-nav");
    } else {
      window.alert("something iss wrong with nav");
    }
  } else {
    window.alert("something iss wrong with out");
  }
}

function navigateTo(url) {
  window.location.href = url;
}
const currentDate = displayCurrentDate();
const dateWithDots = currentDate.replace(/\//g, ".");
//display date and create an entry in the db for this day
function displayCurrentDate() {
  const today = new Date();
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-IL", options);
  const dateElm = document.getElementById("date");
  if (dateElm) {
    dateElm.innerHTML = `תאריך:&nbsp;&nbsp;&nbsp;${formattedDate}`;
    console.log(formattedDate);
    const stringWithDots = formattedDate.replace(/\//g, ".");
    console.log(stringWithDots);
  } else {
    console.log("no inner html");
  }
  return formattedDate;
}
const counters = {
  "number-enter": 0,
  "number-exit": 0,
  "number-reject": 0,
  "vehicle-enter": 0,
  "vehicle-exit": 0,
  "enter-adult-olive": 0,
  "reject-adult-olive": 0,
  "enter-child-olive": 0,
  "rejcet-child-olive": 0,
  "enter-donkey-olive": 0,
  "reject-donkey-olive": 0,
  "enter-tractor-olive": 0,
  "reject-tractor-olive": 0,
  // Add additional keys for the remaining rows here
};
document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", function () {
    const inputId = this.getAttribute("data-input");
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.value = parseInt(inputElement.value, 10) + 1;
      counters[inputId] += 1;
      console.log(`${inputId}: ${counters[inputId]}`);
    }
  });
});

document.querySelectorAll(".minus-button").forEach((button) => {
  button.addEventListener("click", function () {
    const inputId = this.getAttribute("data-input");
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      const currentValue = parseInt(inputElement.value, 10);
      if (currentValue > 0) {
        inputElement.value = currentValue - 1;
        counters[inputId] -= 1;
        console.log(`${inputId}: ${counters[inputId]}`);
      }
    }
  });
});
