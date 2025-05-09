class FancyCard extends HTMLElement {
    connectedCallback() {

      this.classList.add(
        'bg-cyan-100',
        'flex',
        'gap-2',
        'rounded-md',
        'h-auto',
        'w-5',
        'text-sm',
        'w-full'
      ); 
      const tipe = this.getAttribute('tipe');
      const content = this.innerHTML;
      
      this.innerHTML = `
    <blockquote class="flex gap-2 p-3 ${tipe} w-full h-auto rounded-md">
      <img class="w-5" src="/public/info.svg">
      <div>${content}</div>
    </blockquote>
      `;
    }
  }
  
  customElements.define('fancy-card', FancyCard);  