class LuiButton extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const variant = this.getAttribute('variant') || 'accent';
        const size = this.getAttribute('size') || 'md';

        const style = document.createElement('style');
        style.textContent = `
        button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            font-family: var(--font-family);
            line-height: var(--lui-typography-line-height-lg);
            font-weight: var(--lui-typography-weight-regular);
            border-width: var(--lui-border-width-0);
            transition: box-shadow 0.3s ease;
        }

        .accent { background: var(--lui-color-brand-accent-layer-bg-container); }
        .secondary { background: var(--lui-color-neutral-dark-layer-bg-container); }

        button:hover { box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.24); }
        button:active { box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.4); }

        .accent,
        .secondary {
            color: var(--lui-color-neutral-light-content-text-lightest);
        }


        .danger {
            background: var(--color-danger);
            color: var(--color-on-danger);
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
        `;

        const button = document.createElement('button');
        button.className = `${variant} ${size}`;

        // Aria label
        const ariaLabel = this.getAttribute('aria-label');
        if (ariaLabel) {
            button.setAttribute('aria-label', ariaLabel);
        }

        // Slot para conteúdo (ícone + texto, etc)
        const slot = document.createElement('slot');

        button.appendChild(slot);

        this.shadow.innerHTML = '';
        this.shadow.appendChild(style);
        this.shadow.appendChild(button);
    }
}

customElements.define('lui-button', LuiButton);