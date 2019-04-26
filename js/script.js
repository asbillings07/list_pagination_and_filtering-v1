/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// wait until document loads then run the below code
document.addEventListener("DOMContentLoaded", () => {
  // list of students in a global variable.
  const list = document.querySelectorAll("li");
  const itemsPerPage = 10;
  let currentPage = 1;

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

      console.log(pagesNeeded);
      ul.appendChild(li);
      li.appendChild(a);

      a.addEventListener("click", e => {
        const link = e.target.textContent;
        const aLink = e.target;

        for (let i = 0; i < pagesNeeded; i++) {
          if (aLink) {
            a.className = "active";
          }
        }

        showPage(list, link);
      });
    }
  };

  appendPageLinks(list);
});

const searchBar = () => {
  // gets the h2 element
  const placmentHeader = document.querySelector("h2");
  // creates new div to place input and button on
  const searchDiv = document.createElement("div");
  searchDiv.className = "student-search";
  // creating new input field
  const searchInput = document.createElement("input");
  searchInput.placeholder = "Search For Students...";
  searchInput.type = "text";
  // creates new button
  const searchButton = document.createElement("button");
  searchButton.textContent = "Search";

  // adds search bar and button to the page
  placmentHeader.appendChild(searchDiv);
  searchDiv.appendChild(searchInput);
  searchDiv.appendChild(searchButton);

  const filter = searchInput.value.toUpperCase();
  const studentList = document.querySelectorAll("li");

  for (let i = 0; i < studentList.length; i++) {
    name = studentList[i];
    if (name.toUpperCase().indexOf(filter) == -1) {
      studentList[i].style.display = "student-item";
    } else {
      studentList[i].style.display = "none";
    }
  }
};
searchBar();
