class FancyCard extends HTMLElement {
    connectedCallback() {
      // sejujurny gatau ini untuk apa karena ketika Tailwind class yg sama dimasukin ke sini, malah jd conflicting
      // this.classList.add(
      //   'my-4',
      //   'p-3',
      //   'flex',
      //   'gap-2',
      //   'rounded-md',
      //   'mb-3',
      //   'h-auto',
      //   'w-5',
      //   'text-sm',
      // );
      // Initialization
      let icon = "";
      let tipe = this.getAttribute('tipe') || "tips";
      const content = this.innerHTML;
      // Teh Fiona pls review?
      // Kamu lupa nambahin OR di initialization untuk default case (tips)
      switch (tipe) {
        case 'warn':
          icon = "https://raw.githack.com/unpadforstrays-dev/stray-guide-rework/main/public/warn.svg";
          break;
        case 'info':
          icon = "https://raw.githack.com/unpadforstrays-dev/stray-guide-rework/main/public/info.svg";
          break;
        default:
          icon = "https://raw.githack.com/unpadforstrays-dev/stray-guide-rework/main/public/tips.svg";
      }
      
      this.innerHTML = `
    <div class="mx-auto">
      <blockquote class="p-4 mt-2 ${tipe} w-full md:w-96 h-auto rounded-md">
      <object class="w-5 mb-1" data=${icon}></object>      
      <div class="text-sm">${content}</div>
      </blockquote>
    </div>
    `;
    }
  }
  
  customElements.define('fancy-card', FancyCard);  