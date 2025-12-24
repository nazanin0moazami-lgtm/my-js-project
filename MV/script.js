const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
  const txt = inp.value.trim();
  if (txt === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = txt;

  const del = document.createElement("button");
  del.textContent = "✖";
  del.style.marginLeft = "100px";
  del.style.marginBottom = "10px";
  del.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(del);
  list.appendChild(li);

  inp.value = "";
});


