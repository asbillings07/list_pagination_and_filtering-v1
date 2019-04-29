/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// list of students in a global variable.
const list = document.querySelectorAll("li");
const itemsPerPage = 10;
let currentPage = 1;
const studentList = document.querySelectorAll(".student-item");
const searchInput = document.createElement("input");
const searchButton = document.createElement("button");

// Function only shows 10 students at the time to the page.
const showPage = (list, page) => {
  const startIndex = page * itemsPerPage - itemsPerPage;
  const endIndex = page * itemsPerPage - 1;

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i <= endIndex) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
};
showPage(list, currentPage);

/*** 
   function generates, appends and adds 
   functionality to the page to show all of the students
***/

const appendPageLinks = list => {
  const pagesNeeded = list.length / itemsPerPage;
  const mainDiv = document.querySelector(".page");
  const paginationDiv = document.createElement("div");
  paginationDiv.className = "pagination";
  mainDiv.appendChild(paginationDiv);
  const ul = document.createElement("ul");
  paginationDiv.appendChild(ul);

  for (let i = 1; i < pagesNeeded + 1; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = [i];
    a.setAttribute("href", "#");
    ul.appendChild(li);
    li.appendChild(a);
  }

  const a = document.querySelectorAll("a");
  a[0].classList.add("active");
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", () => {
      link = event.target.textContent;
      showPage(list, link);
      for (let i = 0; i < a.length; i++) {
        a[i].classList.remove("active");
      }
      event.target.classList.add("active");
    });
  }
};

appendPageLinks(list);

const searchBar = () => {
  // gets the h2 element
  const placmentHeader = document.querySelector("h2");
  // creates new div to place input and button on
  const searchDiv = document.createElement("div");
  searchDiv.className = "student-search";
  // creating new input field

  searchInput.placeholder = "Search For Students...";
  searchInput.type = "text";
  // creates new button

  searchButton.textContent = "Search";

  searchInput.setAttribute("type", "search");

  // adds search bar and button to the page
  placmentHeader.appendChild(searchDiv);
  searchDiv.appendChild(searchInput);
  searchDiv.appendChild(searchButton);

  //   1. retrieve user input and convert it to lowercase
  //   2. select the studentList
  //   3. select the textcontent from all h3s in the studentList
  //   4. find all the matching students,
  //   5. push them in a new array,
  //   6. call the showPage function with that array and let the showPage function handle setting its display to block or none
};
searchBar();

const searchStudent = () => {
  const userInput = searchInput.value;
  const studentArr = [];
  for (let i = 0; i < studentList.length; i++) {
    if (userInput.length === 0) {
      alert(
        "No input detected, refresh the page, enter a name and press search to try again."
      );
      break;
    }
    if (studentList[i].querySelector("h3").textContent.includes(userInput)) {
      studentArr.push(studentList[i]);
      list[i].style.display = "flex";
    } else {
      list[i].style.display = "none";
      alert(
        "There are no students by that name on file, please refresh and try again."
      );
      break;
    }
  }
};

searchButton.addEventListener("click", () => {
  searchStudent();
});
searchInput.addEventListener("onkeyup", e => {
  console.log(event.target);
});
