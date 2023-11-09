const arrayElement = document.getElementById("array");
const myArray = [1, 2, 3, 4, 5];

function renderArray() {
  arrayElement.innerHTML = ""; 

  myArray.forEach(item => {
    const itemElement = document.createElement("div");
    itemElement.className = "array-item";
    itemElement.textContent = item;
    arrayElement.appendChild(itemElement);
  });
}

function updateArray() {
  renderArray();
}

// Method pop  digunakan untuk menghapus element terakhir yang ada di dalam array.
function popElement() {
  if (myArray.length > 0) {
    myArray.pop();
    updateArray();
  }
}

// Method push () digunakan untuk menambahkan element pada akhir array.
function pushElement() {
  myArray.push(myArray.length + 1);
  updateArray();
}

// Method shift () digunakan untuk menghapus element awal yang terdapat pada array.
function shiftElement() {
  if (myArray.length > 0) {
    myArray.shift();
    updateArray();
  }
}

// Method unshift () digunakan untuk menambahkan element baru pada awal array.
function unshiftElement() {
  myArray.unshift(myArray[0] - 1);
  updateArray();
}

renderArray();
