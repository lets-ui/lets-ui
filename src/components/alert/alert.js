class LuiAlert extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const style = document.createElement('style');
      style.textContent = `
        :host {
            display: block;
            padding: var(--lui-spacing-16);
            border-radius: var(--lui-border-radius-16);
            font-family: var(--font-family);
        }

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
  
        .alert {
            display: flex;
            gap: var(--lui-spacing-16);
            align-items: flex-start;
        }
  
        .alert-content {
            flex: 1;
        }
  
        .alert-content ::slotted([slot="title"]) {
            display: block;
            font-weight: var(--lui-typography-weight-bold) !important;
            margin-bottom: var(--lui-spacing-2) !important;
        }
  
        .alert-content ::slotted([slot="description"]) {
            display: block;
            margin-bottom: var(--lui-spacing-20);
        }
  
        .alert-actions {
            margin-top: var(--lui-spacing-20);
            display: flex;
        }
  
        .alert-actions ::slotted([slot="action-primary"]) {
            margin-right: var(--lui-spacing-16);
        }
  
        .close-button {
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
        }
      `;

      const variant = this.getAttribute('variant') || 'info';
      const container = document.createElement('div');
      container.classList.add('alert', variant); // adiciona as duas classes
      container.classList.add('alert');
  
      container.innerHTML = `
        <div class="alert-icon">
            <slot name="icon"></slot>
        </div>
        <div class="alert-content">
            <slot name="title"></slot>
            <slot name="description"></slot>
            <div class="alert-actions">
                <slot name="action-primary"></slot>
                <slot name="action-secondary"></slot>
            </div>
        </div>
        <lui-icon-button class="close-button" aria-label="Fechar">
            <i class="icon-circle-close-regular"></i>
        </lui-icon-button>
      `;
  
      this.shadow.innerHTML = '';
      this.shadow.appendChild(style);
      this.shadow.appendChild(container);
    }
  }
  
  customElements.define('lui-alert', LuiAlert);
  