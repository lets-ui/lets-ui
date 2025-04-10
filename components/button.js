class LuiButton extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const label = this.getAttribute('label') || 'Button';
        const variant = this.getAttribute('variant') || 'accent';
        const size = this.getAttribute('size') || 'md';
        const button = document.createElement('button');
        button.textContent = label;
        button.className = `${variant} ${size}`;

         // Adiciona o aria-label se existir
        const ariaLabel = this.getAttribute('aria-label');
        if (ariaLabel) {
            button.setAttribute('aria-label', ariaLabel);
        }
    
        const style = document.createElement('style');
        style.textContent = `
            button {
                width: 100%;
                font-family: var(--font-family);
                line-height: var(--lui-typography-line-height-lg);
                font-weight: var(--lui-typography-weight-regular);
                border-width: var(--lui-border-width-0);
                transition: box-shadow 0.3s ease;
            }
    
            .accent {
                background: var(--lui-color-brand-accent-layer-bg-container);
                color: var(--lui-color-neutral-light-content-text-lightest);
            }

            .md {
                padding: var(--lui-spacing-12);
                font-size: var(--lui-typography-scale-size-body-md);
                border-radius: var(--lui-border-radius-12); 
            }

            .sm {
                padding: var(--lui-spacing-8);
                font-size: var(--lui-typography-scale-size-body-sm);
                border-radius: var(--lui-border-radius-8);
            }

            .accent:hover { box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.24); }
            .accent:active { box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.4); }
    
            .secondary {
            background: var(--lui-color-feedback-caution-layer-bg-container);
            color: var(--color-on-secondary);
            }
    
            .danger {
            background: var(--color-danger);
            color: var(--color-on-danger);
            }
        `;
    
        this.shadow.innerHTML = '';
        this.shadow.appendChild(style);
        this.shadow.appendChild(button);
    }
  }
  
  customElements.define('lui-button', LuiButton);  