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

function renderArray(arr, current = -1, minIdx = -1, sortedIdx = -1) {
  const container = document.getElementById("array");
  container.innerHTML = "";

  arr.forEach((val, idx) => {
    const div = document.createElement("div");
    div.className = "block";
    div.innerText = val;

    if (idx === current) div.classList.add("active");
    if (idx === minIdx) div.classList.add("min");
    if (idx < sortedIdx) div.classList.add("sorted");

    container.appendChild(div);
  });
}

async function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      steps++;
      updateSteps();

      renderArray(arr, j, minIdx, i);
      await sleep(delay);

      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      renderArray(arr, i, minIdx, i);
      await sleep(delay);
    }
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
  selectionSort(arr);
}

window.start = start;
