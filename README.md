# DSA Visualizer

An interactive **Data Structures & Algorithms Visualizer** designed to help users understand how algorithms work internally through step-by-step animations.

The project currently includes **searching and sorting algorithm visualizers**, with a modular structure that allows easy expansion.

🔗 **Live Demo:**  
https://divyaprakash1845.github.io/dsa-visualizer/

---

## Table of Contents
- Features
- Modules
- Visualization Logic
- Tech Stack
- How to Run Locally
- Future Enhancements
- Contributing

---

## Features

- Interactive visualization of **searching and sorting algorithms**
- User-defined array input
- User-defined target input for searching algorithms
- Step-by-step animation of algorithm execution
- Live **step (comparison) counter**
- Dynamic display of **time complexity**
- Adjustable animation speed using a slider
- Clean and minimal UI for better understanding
- Deployed live using **GitHub Pages**

---

## Modules

### Searching Algorithms
- **Binary Search**
- **Linear Search** (selectable within the visualizer)

Features:
- Highlights current/mid element at each step
- Dynamically narrows the search space (Binary Search)
- Visual comparison of O(n) vs O(log n)

---

### Sorting Algorithms
- **Bubble Sort**
- **Selection Sort**
- **Insertion Sort**

Features:
- Visual comparison and swaps
- Highlighting of current, key, minimum, and sorted elements
- Step-by-step growth of the sorted portion
- Live step counter

---

## Visualization Logic

### Searching Algorithms
- The algorithm starts with the full search range.
- The current or middle element is highlighted in **yellow**.
- If the element matches the target, it turns **green**.
- Otherwise, the search range is updated based on comparison.
- The process repeats until the target is found or the range becomes empty.

### Sorting Algorithms
- Elements being compared are highlighted.
- Swaps and shifts are animated clearly.
- The sorted portion of the array grows progressively.
- Each comparison increases the step counter.

Animation speed is controlled by the user using a slider.

---

## Tech Stack

- **HTML** – Page structure
- **CSS** – Styling and layout
- **JavaScript** – Algorithm logic, animations, DOM manipulation
- **Git & GitHub** – Version control
- **GitHub Pages** – Live deployment

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/divyaprakash1845/dsa-visualizer.git
