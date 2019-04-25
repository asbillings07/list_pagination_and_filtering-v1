/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const list = document.querySelectorAll("li");
const itemsPerPage = 10;
let currentPage = 1;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

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
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = list => {
  const pagesNeeded = list.length / itemsPerPage;
  const mainDiv = document.querySelector(".page");
  const paginationDiv = document.createElement("div");

  paginationDiv.className = "pagination";
  mainDiv.appendChild(paginationDiv);
  const ul = document.createElement("ul");
  paginationDiv.appendChild(ul);

  for (let i = 0; i < pagesNeeded; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", "#", i);
    console.log(pagesNeeded);
    //a.setAttribute("number", i);
    ul.appendChild(li);
    li.appendChild(a);
    a.className = "active";
    a.addEventListener("click", e => {
      const link = e.target;
      a.removeAttribute("active");
      showPage(list, link);
      link.setAttribute("active");
    });
  }
};
appendPageLinks(list);
