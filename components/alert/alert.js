class LuiAlert extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
        const variant = this.getAttribute('variant') || 'info';
const container = document.createElement('div');
container.classList.add('alert', variant); // adiciona as duas classes

        const title = this.getAttribute('title') || '';
        const description = this.getAttribute('description') || '';
        const primaryLabel = this.getAttribute('primary-label') || '';
        const secondaryLabel = this.getAttribute('secondary-label') || '';

  
      this.shadow.innerHTML = `
        <style>
        *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        :host {
            display: flex;
            gap: var(--lui-spacing-16);
            padding: var(--lui-spacing-16);
            border-radius: var(--lui-border-radius-16);
        }

        .alert-content {
            width: 100%;
            display: block;
            margin-bottom: var(--lui-spacing-20);
        }

        .alert-content p:first-child { margin-bottom: var(--lui-spacing-2); }
        .alert-content p:first-of-type { font-weight: var(--lui-typography-weight-bold) !important; }

        .alert-actions { display: flex; }
        .alert-actions lui-button:first-child { margin-right: var(--lui-spacing-16); }

        :host([variant="info"]) {
            background-color: var(--lui-color-feedback-info-layer-bg-surface);
            color: var(--lui-color-feedback-info-content-text-dark);
            border: var(--lui-border-width-1) solid var(--lui-color-feedback-info-layer-border-stroke);
        }

        :host([variant="warning"]) {
            background-color: var(--lui-color-feedback-caution-layer-bg-surface);
            color: var(--lui-color-feedback-caution-content-text-dark);
            border: var(--lui-border-width-1) solid var(--lui-color-feedback-caution-layer-border-stroke);
        }
        </style>

        <div role="alert">
            <div class="alert-icon">
                <i class="icon-exclamation-fill" style="color: var(--lui-color-feedback-caution-content-icon-hard);"></i>
            </div>
            <div>
                <div class="alert-content">
                    <p class="">${title}</p>
                    <p class="">
                        ${description}
                    </p>
                </div>
                <div class="alert-actions">
                    ${primaryLabel ? `<lui-button label="${primaryLabel}" variant="accent" size="md"></lui-button>` : ''}
                    ${secondaryLabel ? `<lui-button label="${secondaryLabel}" variant="outline" size="md"></lui-button>` : ''}
                </div>
            </div>
            <button class="icon-button">
                <i class="icon-circle-close-regular"></i>
            </button>
        </div>
      `;
  
      this.shadow.querySelector('.close')?.addEventListener('click', () => {
        this.remove();
      });
    }
  }
  
  customElements.define('lui-alert', LuiAlert);