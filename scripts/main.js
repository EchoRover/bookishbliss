

const x = Math.floor(Math.random() * 150) + 1;

const url = 'https://all-books-api.p.rapidapi.com/getBooks';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd98673324fmsh3e3dfcbd9e24be4p11d6f8jsnf94eef947d5c',
		'x-rapidapi-host': 'all-books-api.p.rapidapi.com'
	}
};



async function fetchData() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result
    } catch (error) {
      console.error(error);
    }
  }



//   function addbook(book,container){
//     console.log(book)
    
//     const mydiv  = `
//     <div class = "book">
//         <div class = "image">
//             <img src = ${book.published_works[0].cover_art_url}>
//         </div>
//         <div class = "bookinfo">
//             <div class = "title">${book.title} </div>
//             <div class = "booksummary">${book.summary}</div>
//             <div class = "tags">${book.categories}</div>
//         </div>

    
    
//     </div>

//     `
//     if (book.summary == ""){

//     }else{
//         container.innerHTML += mydiv
        
//     }
    



//   }



// async function displayBooks() {
//     try {
//       const container = document.getElementById("allbooks");
//       const data = await fetchData(); 
//       console.log(data)
//       data.results = data.results.sort(function(){ return Math.random() - 0.5})
//       if (data !== null && Array.isArray(data.results)) {
//         for (let i = 0; i < Math.min(100, data.results.length); i++) {
//           addbook(data.results[i], container);
//         }
//       }else{
//         console.log("none")
//       }
//     } catch (error) {
//       console.error("An error occurred while fetching or processing data:", error);
//     }
//   }

// displayBooks()

// console.log("this is done")
function addbook(book, container) {
  console.log(book);
  
  const mydiv = `
  <div class="book">
      <div class="image">
          <img src="${book.bookImage || 'default_image_url_here'}" alt="${book.bookTitle}">
      </div>
      <div class="bookinfo">
          <div class="title">${book.bookTitle}</div>
          <div class="booksummary">${book.bookDescription}</div>
          <div class="tags">${book.categories || 'No categories'}</div>
      </div>
  </div>`;

  if (book.bookDescription) { 
      container.innerHTML += mydiv;
  }
}

async function displayBooks() {
  try {
      const container = document.getElementById("allbooks");
      const data = await fetchData(url, options); 
      console.log('Fetched data:', data); // Log the fetched data

      // Check if 'data' is an array
      if (Array.isArray(data)) {
          console.log('Books found:', data); // Log the books

          // Shuffle the array of books
          data.sort(() => Math.random() - 0.5);
          
          // Iterate through the books and add them to the container
          for (let i = 0; i < Math.min(100, data.length); i++) {
              addbook(data[i], container);
          }
      } else {
          console.log("No books found or unexpected data structure:", data);
      }
  } catch (error) {
      console.error("An error occurred while fetching or processing data:", error);
  }
}

// Fetch function example (you may already have this)
async function fetchData(url, options = {}) {
  try {
      const response = await fetch(url, options);
      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      return result;
  } catch (error) {
      console.error("Error fetching data:", error);
      return null; // Return null or some fallback value
  }
}

// Call the displayBooks function to fetch and display the books
displayBooks();
















