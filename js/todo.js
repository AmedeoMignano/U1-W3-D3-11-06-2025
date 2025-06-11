const form = document.getElementById("main-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputList = document.getElementById("input");
  const inputV = inputList.value;
  console.log("elementi ottenuti", inputV);
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = inputV;
  li.appendChild(span);
  const button = document.createElement("button");
  button.innerHTML = `
<i class="far fa-trash-alt"></i>`;
  button.addEventListener("click", () => {
    li.remove();
  });
  li.appendChild(button);
  span.addEventListener("click", (e) => {
    li.style.textDecoration = "line-through";
  });

  const ul = document.getElementById("ulist");
  ul.appendChild(li);
  form.reset();
});
