let delay = 1000;
document.getElementById("algo").addEventListener("change", (e) => {
  updateComplexity(e.target.value);
});

document.getElementById("speed").addEventListener("input", (e) => {
  delay = Number(e.target.value);
  document.getElementById("speedValue").innerText = delay + " ms";
});

//Time COmplexiy
function updateComplexity(algo) {
  const complexityDiv = document.getElementById("complexity");

  if (algo === "linear") {
    complexityDiv.innerText = "Time Complexity: O(n)";
  } else if (algo === "binary") {
    complexityDiv.innerText = "Time Complexity: O(log n)";
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function renderArray(arr, highlight = -1, found = -1) {
  const container = document.getElementById("array");
  container.innerHTML = "";

  arr.forEach((val, idx) => {
    const div = document.createElement("div");
    div.className = "block";
    div.textContent = val;

    if (idx === highlight) div.classList.add("active");
    if (idx === found) div.classList.add("found");

    container.appendChild(div);
  });
}

// Linear Search
async function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    renderArray(arr, i);
    await sleep(delay);

    if (arr[i] === target) {
      renderArray(arr, -1, i);
      return;
    }
  }
  alert("Target not found");
}

// Binary Search
async function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    renderArray(arr, mid);
    await sleep(delay);

    if (arr[mid] === target) {
      renderArray(arr, -1, mid);
      return;
    }

    if (arr[mid] < target) l = mid + 1;
    else r = mid - 1;
  }
  alert("Target not found");
}

// Start
function start() {
  const arrInput = document.getElementById("arrayInput").value.trim();
  const target = Number(document.getElementById("targetInput").value);
  const algo = document.getElementById("algo").value;
  
  updateComplexity(algo);

  if (!arrInput) {
    alert("Enter array");
    return;
  }

  const arr = arrInput.split(/\s+/).map(Number);

  renderArray(arr);

  if (algo === "linear") {
    linearSearch(arr, target);
  } else {
    binarySearch(arr, target);
  }
}

window.start = start;



