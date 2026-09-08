class Header extends HTMLElement {
    connectedCallback() {
        const activePage = this.getAttribute('active-page') || '';

        this.innerHTML = `
            <nav class="navbar navbar-expand-lg" style="background-color: var(--aurum-crema);">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <span style="font-family: var(--font-titulos); color: var(--aurum-azul); font-weight:700;">Aurum Bakery</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navMenu">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link ${activePage === 'inicio' ? 'text-accent' : ''}" href="index.html">Inicio</a></li>
                            <li class="nav-item"><a class="nav-link ${activePage === 'catalogo' ? 'text-accent' : ''}" href="catalogo.html">Catálogo</a></li>
                            <li class="nav-item"><a class="nav-link ${activePage === 'eventos' ? 'text-accent' : ''}" href="eventos.html">Eventos</a></li>
                            <li class="nav-item"><a class="nav-link ${activePage === 'contacto' ? 'text-accent' : ''}" href="contacto.html">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="py-5 mt-5" style="background-color: var(--aurum-azul); color: var(--aurum-crema);">
                <div class="container text-center">
                    <h5 style="color: var(--aurum-crema);">Aurum Bakery</h5>
                    <p class="mb-1">Pastelería artesanal de alto nivel</p>
                    <p class="mb-0"><small>&copy; 2026 Aurum Bakery. Todos los derechos reservados.</small></p>
                </div>
            </footer>
        `
    }
}

customElements.define('custom-header', Header)
customElements.define('custom-footer', Footer)