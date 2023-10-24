

const x = Math.floor(Math.random() * 150) + 1;

const url = `https://book-finder1.p.rapidapi.com/api/search?book_type=fiction&lexile_max=1400&results_per_page=50&page=${x}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd98673324fmsh3e3dfcbd9e24be4p11d6f8jsnf94eef947d5c',
		'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'

    }
}

async function fetchData() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result
    } catch (error) {
      console.error(error);
    }
  }



  function addbook(book,container){
    console.log(book)
    
    const mydiv  = `
    <div class = "book">
        <div class = "image">
            <img src = ${book.published_works[0].cover_art_url}>
        </div>
        <div class = "bookinfo">
            <div class = "title">${book.title} </div>
            <div class = "booksummary">${book.summary}</div>
            <div class = "tags">${book.categories}</div>
        </div>

    
    
    </div>

    `
    if (book.summary == ""){

    }else{
        container.innerHTML += mydiv
        
    }
    



  }



async function displayBooks() {
    try {
      const container = document.getElementById("allbooks");
      const data = await fetchData(); 
      data.results = data.results.sort(function(){ return Math.random() - 0.5})
      if (data !== null && Array.isArray(data.results)) {
        for (let i = 0; i < Math.min(100, data.results.length); i++) {
          addbook(data.results[i], container);
        }
      }else{
        console.log("none")
      }
    } catch (error) {
      console.error("An error occurred while fetching or processing data:", error);
    }
  }

displayBooks()

console.log("this is done")

















