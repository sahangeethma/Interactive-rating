const ratings = document.querySelectorAll(".ratings span");
const submit = document.querySelector(".submit_btn");
const rate = document.getElementById("rate");
const rating_sec = document.querySelector(".rating_section");
const Thank_sec = document.querySelector(".thank_section");

let value = null;

ratings.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    const card = e.target;
    card.classList.add("checked");
    value = e.target.innerText;
  });
});

submit.addEventListener("click", () => {
  if (value != null && rate) {
    rate.innerText = value;
    rating_sec.classList.add("hidden");
    Thank_sec.classList.remove("hidden");
  }
});
