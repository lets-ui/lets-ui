class LuiIconButton extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const ariaLabel = this.getAttribute('aria-label') || 'Icon button';

    const style = document.createElement('style');
    style.textContent = `
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

      ::slotted(i) {
        display: inline-block;
        width: var(--lui-spacing-24);
        height: var(--lui-spacing-24);
      }
    `;

    const button = document.createElement('button');
    button.className = 'icon-button';
    button.setAttribute('aria-label', ariaLabel);

    const slot = document.createElement('slot');
    button.appendChild(slot);

    this.shadow.innerHTML = '';
    this.shadow.appendChild(style);
    this.shadow.appendChild(button);
  }
}

customElements.define('lui-icon-button', LuiIconButton);