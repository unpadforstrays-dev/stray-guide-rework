const tombol = document.getElementById('nav-toggle');
const popup = document.getElementById('nav-menu');

if (tombol && popup) {
    tombol.addEventListener("click", function() {
        popup.classList.toggle('hidden');
    });
}

// async utk load artikel md
async function loadBlogs() {
    const urls = [
        "https://raw.githubusercontent.com/unpadforstrays-dev/stray-guide-rework/refs/heads/main/public/md-articles/01-feeding-guide.md",
        "https://raw.githubusercontent.com/unpadforstrays-dev/stray-guide-rework/refs/heads/main/public/md-articles/02-merk-pakan.md",
        "https://raw.githubusercontent.com/unpadforstrays-dev/stray-guide-rework/refs/heads/main/public/md-articles/03-tnr.md",
        "https://raw.githubusercontent.com/unpadforstrays-dev/stray-guide-rework/refs/heads/main/public/md-articles/04-eartip.md",
        "https://raw.githubusercontent.com/unpadforstrays-dev/stray-guide-rework/refs/heads/main/public/md-articles/05-menghindari-penyakit.md",
        "https://raw.githubusercontent.com/unpadforstrays-dev/stray-guide-rework/refs/heads/main/public/md-articles/06-abuse.md",
        "https://raw.githubusercontent.com/unpadforstrays-dev/stray-guide-rework/refs/heads/main/public/md-articles/07-menggendong.md",
        "https://raw.githubusercontent.com/unpadforstrays-dev/stray-guide-rework/refs/heads/main/public/md-articles/08-obat.md",
        "https://raw.githubusercontent.com/unpadforstrays-dev/stray-guide-rework/refs/heads/main/public/md-articles/09-community-pets.md",
        "https://raw.githubusercontent.com/unpadforstrays-dev/stray-guide-rework/refs/heads/main/public/md-articles/10-nearby-rsh-klinik.md"
    ];

    const blogPromises = urls.map((url, index) =>
        fetch(url)
            .then((response) => {
                if (!response.ok) 
                    throw new Error(`HTTP error! status: ${response.status}`);
                return response.text();
            })
            .then((markdown) => {
                const ShareBtn = document.createElement('share-button');
                const blogs = document.getElementById(`blog${index + 1}`);
                if (blogs) {
                    blogs.innerHTML = marked.parse(markdown);
                    blogs.appendChild(ShareBtn);
                }
            })
            .catch((error) => {
                console.error(`Error loading blog ${index + 1}:`, error);
            })
    );

    await Promise.all(blogPromises);
}

document.addEventListener("DOMContentLoaded", loadBlogs);