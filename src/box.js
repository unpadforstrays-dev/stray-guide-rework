class FancyCard extends HTMLElement {
    connectedCallback() {
      // sejujurny gatau ini untuk apa karena ketika Tailwind class yg sama dimasukin ke sini, malah jd conflicting
      this.classList.add(
        'my-4',
        'flex',
        'gap-2',
        'rounded-md',
        'h-auto',
        'w-5',
        'text-sm',
        'w-full'
      );
      // Initialization
      let icon = "";
      let tipe = this.getAttribute('tipe');
      // Teh Fiona pls review?
      switch (tipe) {
        case 'warn':
          icon = "/public/warn.svg";
          break;
        case 'info':
          icon = "/public/info.svg";
          break;
        default:
          icon = "/public/tips.svg";
      }
      const content = this.innerHTML;
      this.innerHTML = `
    <div class="mx-auto">
      <blockquote class="flex gap-2 p-3 ${tipe} w-80 h-auto rounded-md">
      <img class="w-5" src=${icon}>
      <div>${content}</div>
      </blockquote>
    </div>

      `;
    }
  }
  
  customElements.define('fancy-card', FancyCard);  