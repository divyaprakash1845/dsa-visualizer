let delay = 1000;

document.getElementById("speed").addEventListener("input", (e) => {
  delay = e.target.value;
  document.getElementById("speedValue").innerText = delay + " ms";
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function renderArray(arr, mid = -1, found = -1) {
  const container = document.getElementById("array");
  container.innerHTML = "";

  arr.forEach((val, idx) => {
    const div = document.createElement("div");
    div.className = "block";
    div.innerText = val;

    if (idx === mid) div.classList.add("active");
    if (idx === found) div.classList.add("found");

    container.appendChild(div);
  });
}

async function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    // Step 1: show mid (yellow)
    renderArray(arr, mid);
    await sleep(delay);

    if (arr[mid] === target) {
      // Step 2: found (green)
      renderArray(arr, -1, mid);
      return;
    }

    if (arr[mid] < target) l = mid + 1;
    else r = mid - 1;
  }

  alert("Target not found");
}

function start() {
  const arrInput = document.getElementById("arrayInput").value.trim();
  const target = Number(document.getElementById("targetInput").value);

  if (!arrInput) {
    alert("Enter array");
    return;
  }

  const arr = arrInput.split(" ").map(Number);

  renderArray(arr);
  binarySearch(arr, target);
}
