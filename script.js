let arr = [2, 5, 8, 12, 16, 23, 38];
let target = 16;

function renderArray(mid = -1) {
  const container = document.getElementById("array");
  container.innerHTML = "";

  arr.forEach((value, index) => {
    const div = document.createElement("div");
    div.className = "block";
    div.innerText = value;

    if (index === mid) div.classList.add("active");
    if (value === target) div.classList.add("found");

    container.appendChild(div);
  });
}

async function startBinarySearch() {
  let l = 0, r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    renderArray(mid);

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (arr[mid] === target) return;
    else if (arr[mid] < target) l = mid + 1;
    else r = mid - 1;
  }
}

renderArray();
