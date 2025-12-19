let delay = 1000;
let steps = 0;

document.getElementById("speed").addEventListener("input", (e) => {
  delay = Number(e.target.value);
  document.getElementById("speedValue").innerText = delay + " ms";
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function updateSteps() {
  document.getElementById("steps").innerText = "Steps: " + steps;
}

function renderArray(arr, current = -1, keyIdx = -1, sortedIdx = -1) {
  const container = document.getElementById("array");
  container.innerHTML = "";

  arr.forEach((val, idx) => {
    const div = document.createElement("div");
    div.className = "block";
    div.innerText = val;

    if (idx === current) div.classList.add("active");
    if (idx === keyIdx) div.classList.add("key");
    if (idx < sortedIdx) div.classList.add("sorted");

    container.appendChild(div);
  });
}

async function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    renderArray(arr, i, i, i);
    await sleep(delay);

    while (j >= 0 && arr[j] > key) {
      steps++;
      updateSteps();

      arr[j + 1] = arr[j];
      renderArray(arr, j, i, i);
      await sleep(delay);

      j--;
    }

    arr[j + 1] = key;
    renderArray(arr, -1, -1, i + 1);
    await sleep(delay);
  }

  renderArray(arr, -1, -1, n);
}

function start() {
  const input = document.getElementById("arrayInput").value.trim();

  if (!input) {
    alert("Enter array");
    return;
  }

  steps = 0;
  updateSteps();

  const arr = input.split(/\s+/).map(Number);
  renderArray(arr);
  insertionSort(arr);
}

window.start = start;
