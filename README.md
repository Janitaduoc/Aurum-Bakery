# Aurum Bakery 🍰

Sitio web de **Aurum Bakery**, pastelería artesanal de alto nivel. Proyecto grupal desarrollado para el ramo de Fullstack II en DuocUC.

> "Donde la pastelería se convierte en arte."

## Estado del proyecto

🚧 En desarrollo — proyecto a lo largo del semestre. Avance actual: estructura base, Inicio, Catálogo y Eventos funcionando.

## Tecnologías

- HTML5 + CSS3
- [Bootstrap 5.3.3](https://getbootstrap.com/) (componentes y grilla)
- Bootstrap Icons
- JavaScript (Web Components nativos para header/footer reutilizables)
- Google Fonts: Playfair Display + DM Sans

## Estructura del proyecto
Aurum-Bakery/
├── index.html # Página de inicio
├── catalogo.html # Catálogo de productos (con modales de detalle)
├── Eventos.html # Página de eventos y celebraciones
├── styles.css # Estilos generales del sitio
└── js/
└── components/
└── layout.js # Header y footer reutilizables (Web Components)

## Cómo ejecutar el proyecto

1. Clonar el repositorio: git clone https://github.com/Janitaduoc/Aurum-Bakery.git
2. Abrir la carpeta en VS Code.
3. Abrir `index.html` con la extensión **Live Server**.

## Componentes reutilizables

El header y footer se generan con Web Components personalizados (`<custom-header>` y `<custom-footer>`), definidos en `js/components/layout.js`. Esto evita repetir el mismo HTML en cada página.

Para marcar qué link del menú debe verse resaltado, usar el atributo `active-page`:
```html
<custom-header active-page="catalogo"></custom-header>
```

## Equipo

| Integrante | Páginas a cargo |
|---|---|
| Janitaduoc (Alejandra) | Catálogo, Eventos |
| josartr | Inicio |
| Martinduoc17| Contacto, Cotización |

## Próximos pasos

- [ ] Página de Contacto
- [ ] Página de Cotización
- [ ] Página de Iniciar sesión / Registro
- [ ] Conectar formularios (validación / backend)