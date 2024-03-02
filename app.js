const btn = document.querySelectorAll(".question-btn");

// btn.forEach((key) => {
//   key.addEventListener("click", () => {
//     //console.log(key.currentTarget);
//     const toggle = key.currentTarget.parentElement.parentElement;
//     toggle.classList.toggle("show-text");
//   });
// });

const questions = document.querySelectorAll(".question");
questions.forEach((key) => {
  const btn = key.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((par) => {
      if (par !== key) {
        par.classList.remove("show-text");
      }
    });

    key.classList.toggle("show-text");
  });
});
