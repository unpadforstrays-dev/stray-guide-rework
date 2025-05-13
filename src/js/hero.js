// Dynamic Hero Image yg src bisa kita ubah ubah di sini
// To Do: Pake GitHack cdn aja apa ya
class HeroImage extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
    <div class="mt-8 bg-cover bg-center h-60 sm:h-auto sm:col-span-8 sm:row-span-4 rounded-xl" style="background-image: url('https://s6.imgcdn.dev/Y6wVId.jpg')">        
    </div>
    `;
    
    }
}
  
customElements.define('hero-image', HeroImage); 