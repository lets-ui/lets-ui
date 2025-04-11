class LuiIconButton extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const icon = this.getAttribute('icon') || 'icon-circle-close-regular';
      const ariaLabel = this.getAttribute('aria-label') || 'Icon button';
  
      const style = `
        <style>
          .icon-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: var(--lui-spacing-40);
            height: var(--lui-spacing-40);
            background: none;
            border: none;
            border-radius: var(--lui-border-radius-12);
            cursor: pointer;
          }
  
          .icon-button:hover {
            box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.24);
            border-radius: var(--lui-border-radius-12);
          }
  
          .icon-button:active {
            box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.4);
            border-radius: var(--lui-border-radius-circle);
          }
  
          .icon-button i {
            display: inline-block;
            width: var(--lui-spacing-24);
            height: var(--lui-spacing-24);
          }
        </style>
      `;
  
      const template = `
        ${style}
        <button class="icon-button" aria-label="${ariaLabel}">
          <i class="${icon}"></i>
        </button>
      `;
  
      this.shadow.innerHTML = template;
    }
  }
  
  customElements.define('lui-icon-button', LuiIconButton);  