# DSA Visualizer

An interactive **Data Structures & Algorithms Visualizer** designed to help users understand how algorithms work internally through step-by-step animations.  
Currently, the project focuses on **Binary Search**, with plans to expand to additional searching and sorting algorithms.

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

- Interactive visualization of **Binary Search**
- User-defined **sorted array input**
- User-defined **target element**
- Step-by-step highlighting of the **mid element**
- Clear visual feedback when the target is found
- Adjustable **animation speed** using a slider
- Clean and minimal UI for better understanding
- Deployed live using **GitHub Pages**

---

## Modules

### Binary Search Visualizer
- Visualizes the binary search algorithm on a sorted array
- Highlights the current middle element at each step
- Narrows the search space dynamically
- Uses animation delays to clearly demonstrate each iteration

*(Additional modules will be added in future versions.)*

---

## Visualization Logic

1. The algorithm starts with the full search range.
2. The middle element of the current range is highlighted in **yellow**.
3. If the middle element matches the target, it turns **green**.
4. Otherwise, the search range is reduced based on comparison.
5. The process repeats until the target is found or the range becomes empty.
6. Animation speed is controlled by the user using a slider.

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
