class ShareButton extends HTMLElement {
    // native sharer ngga work knpppppppppppp??????
    // Update 10 mei, work setelah pake 'this' di line 18 daripada pake 'document.querySelector'
    connectedCallback() {
        //ternyata initialize component di innerHTML nya dulu baru code di bawahnya, ampun strsse bgt dumpster fire. Sebelumnya ga gini hoho haha
        this.innerHTML = `
    <div class="flex items-center">
        <button id="share" class="inline-flex gap-x-1 mx-auto py-2 px-8">
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 20 20"><path fill="#6b7280" d="M12.378 5.708v-2.13c0-.48.53-.738.89-.47l.062.054l4.497 4.42c.21.207.229.539.057.768l-.057.065l-4.497 4.423c-.338.332-.887.119-.947-.334l-.005-.082v-2.096l-.258.023c-1.8.193-3.526 1.024-5.187 2.507c-.39.348-.992.02-.928-.506c.498-4.09 2.585-6.345 6.148-6.627zM5.5 4A2.5 2.5 0 0 0 3 6.5v8A2.5 2.5 0 0 0 5.5 17h8a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 14.5v-8A1.5 1.5 0 0 1 5.5 5h3a.5.5 0 0 0 0-1z" /></svg>
        </span>
            <h5 class="text-sm text-gray-600">Share</h5>
        </button>
    </div>
    `;
    let share = this.querySelector("button");
    share.addEventListener("click", function ()  {
        if (navigator.share) {
            navigator.share({url: window.location.href});
        } else {
            alert('Fitur share tidak tersedia di Browser ini. Pembaca dapat melakukan copy alamat URL di address bar secara manual.')
        };
    })
    }
  }
  
  customElements.define('share-button', ShareButton);  