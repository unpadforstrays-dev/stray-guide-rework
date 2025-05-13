document.getElementById('nav-toggle').addEventListener("click", function(){
    document.getElementById('nav-menu').classList.toggle("hidden");
});

document.getElementById('closebutton').addEventListener("click", function () { document.getElementById('nav-menu').classList.add("hidden")} );

async function loadBlogs() {
    const urls = [
      "https://raw.githubusercontent.com/ligardi/tes-md/main/blog.md",
      "https://raw.githubusercontent.com/ligardi/tes-md/main/blog2.md",
      "https://raw.githubusercontent.com/ligardi/tes-md/main/blog3.md",
    ];
  
    // array mapping artikel yg di fetch
    const blogPromises = urls.map((url, index) =>
      fetch(url)
        .then((response) => {
          if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);
          return response.text();
        })
        .then((markdown) => {
          //div buat setiap blog1, blog2, blog3
          const ShareBtn = document.createElement('share-button');
          const blogs = document.getElementById(`blog${index + 1}`);
          blogs.innerHTML = marked.parse(markdown);
          // testing apakah bisa pake javascript createElement utk nambahin share button
          // workinggg
          blogs.appendChild(ShareBtn);
        })
        .catch((error) => {
          console.error(`Error loading blog ${index + 1}:`, error);
        })
    );
  
    // tunggu semua fetch
    await Promise.all(blogPromises);
  }
  
  // untuk jalanin fungsi loadBlogs 
  document.addEventListener("DOMContentLoaded", loadBlogs);

