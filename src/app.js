document.getElementById('nav-toggle').addEventListener("click", function(){
    document.getElementById('nav-menu').classList.toggle("hidden");
});

document.getElementById('closebutton').addEventListener("click", function () { document.getElementById('nav-menu').classList.add("hidden")} );