
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

function renderArray(arr, i = -1, j = -1, sortedIndex = arr.length) {
  const container = document.getElementById("array");
  container.innerHTML = "";

  arr.forEach((val, idx) => {
    const div = document.createElement("div");
    div.className = "block";
    div.innerText = val;

    if (idx === i || idx === j) div.classList.add("active");
    if (idx >= sortedIndex) div.classList.add("sorted");

    container.appendChild(div);
  });
}

async function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      steps++;
      updateSteps();

      renderArray(arr, j, j + 1, n - i);
      await sleep(delay);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        renderArray(arr, j, j + 1, n - i);
        await sleep(delay);
      }
    }
  }

  renderArray(arr, -1, -1, 0);
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
  bubbleSort(arr);
}

window.start = start;
