# Web personal — Alexis Vásquez (v3)

Página de una sola vista (hub personal) en HTML, CSS y JavaScript estático. Sin Node.js, sin backend, sin base de datos.
Diseño: **Dark Editorial v3** (carbón + marfil, acento borgoña `#B3243A`). Es la v2 más cuatro adiciones del diseño de Figma: franja de herramientas, trayectoria y formación, credenciales por grupos y dos gráficos decorativos (mapa de calor de riesgo y triángulo de cosechas, sin datos reales).

## Contenido que debe mantenerse veraz

Todo sale del perfil de LinkedIn de Alexis (revisado el 2026-11-06). Al actualizar, cambiar solo lo que cambie en LinkedIn:

- **Trayectoria y formación:** bloque `#trayectoria` en `index.html`. La entrada de Administración de Empresas dice «Cursando la última asignatura»; actualizarla al graduarse con el dato exacto.
- **Credenciales:** bloque `#credenciales` en `index.html`. No se publican IDs de credencial ni vencimientos; el enlace final lleva al perfil de LinkedIn.
- **Herramientas:** franja `.tools`. Solo herramientas respaldadas por una certificación.
- **Gráficos decorativos:** se generan en `js/main.js` (matriz `M` y fórmula de opacidad); son ilustrativos y no representan datos reales.

## Ver la página en local

Desde la carpeta del proyecto:

```bash
python -m http.server 8000
```

Abrir <http://localhost:8000>. También se puede abrir `index.html` con doble clic, pero un servidor local es lo recomendable.

## Estructura

```
index.html              contenido, metadatos SEO y vista previa social
css/styles.css          tokens de diseño (colores, tipografías) y estilos
js/site.config.js       ← ENLACES de redes (editar aquí)
js/main.js              renderiza los enlaces, año del footer, animaciones
assets/img/             fotografía optimizada e imagen para compartir
favicon.svg             ícono provisional (monograma AV)
```

## Qué editar

| Quiero cambiar… | Dónde |
|---|---|
| Un enlace social o su orden | `js/site.config.js` (el que tiene `primary: true` es el destacado y el destino del botón principal) |
| Textos (titular, descripción, identidad, frase del footer) | `index.html` |
| Colores | variables `:root` al inicio de `css/styles.css` |
| Fotografía | reemplazar `assets/img/alexis-1024.jpg` y `alexis-640.jpg` (cuadradas; el rostro debe quedar en el centro-superior) |
| Imagen al compartir en redes | `assets/img/og-image.jpg` (1200×630) |

Nota: si se editan los enlaces en `site.config.js`, actualizar también el enlace de respaldo del bloque `<noscript>` en `index.html`.

## Fotografía

- Original (intacto, guardado fuera del repositorio): 1024×1024, 508 KB.
- Copias optimizadas en `assets/img/`: 1024 px (72 KB) y 640 px (31 KB), calidad JPEG 82.
- El rostro queda en el tercio superior; el recorte de escritorio (4:5) y de móvil (1:1) se hace con CSS (`object-position`), sin tocar el archivo.

## Antes de publicar

1. **Dominio propio (opcional):** la página está en <https://vasquez-sys97.github.io/web-alexis-vasquez/>. Si se conecta un dominio propio, actualizar `canonical`, `og:url`, `og:image` y `twitter:image` en `index.html`; las vistas previas al compartir necesitan URLs absolutas.
2. **Fuentes:** se cargan desde Google Fonts (Instrument Serif e Inter). Para evitar la solicitud externa y mejorar la privacidad, se pueden descargar y servir desde `assets/fonts/`.
3. **Foto en pantallas muy nítidas:** la fuente es de 1024 px. En monitores de alta densidad (retina) puede verse levemente suave; una foto original de mayor resolución lo resolvería.
4. **Verificar los tres enlaces** a mano (ver abajo).

## Publicar

Es un sitio estático: sirve cualquier alojamiento estático.

- **Vercel:** subir la carpeta a un repositorio de GitHub e importarlo en Vercel (Framework Preset: *Other*, sin comando de build, directorio de salida `.`). O arrastrar la carpeta en el panel de Vercel.
- **Alternativas:** GitHub Pages, Netlify, Cloudflare Pages.

Publicada con GitHub Pages desde la rama `main`: <https://vasquez-sys97.github.io/web-alexis-vasquez/>. Cada `git push` a `main` actualiza el sitio en uno o dos minutos.

## Estado de verificación (2026-11-06)

Probado en navegador (Chromium del panel de la app) contra el diseño de Figma:

- Sin errores en consola; HTML, CSS, JS, imágenes y fuentes cargan.
- Sin desplazamiento horizontal en 1440 px y 390 px; todos los enlaces miden ≥ 44 px de alto.
- Escritorio: tarjetas de conexión 2:1:1 (584/292/292 px), foto 480×620. Móvil: tarjetas apiladas de 350 px de ancho.
- v3: 4 grupos con 11 certificados (3+3+2+3, coinciden con el perfil), 25 celdas en el mapa de calor y 28 en el triángulo. Altura total: ≈ 3.800 px en escritorio y ≈ 5.700 px en móvil. El triángulo cabe en móvil (301 px dentro de 302 disponibles).
- El diseño de Figma de la v3 tiene un recorte conocido de la comilla en la tarjeta móvil; en el código no ocurre.
- Foco visible con teclado (contorno marfil de 2 px). Los tres enlaces sociales y los dos botones de LinkedIn apuntan a los destinos de `site.config.js`.
- Contraste (WCAG, calculado sobre los colores de diseño): texto 16,6:1, texto secundario 7,7:1, acento en texto 6,0:1, texto sobre botón 5,6:1 (AA ≥ 4,5). Las leyendas sobre la foto se apoyan en un degradado oscuro; se revisaron a ojo, no con medición.
- En móvil el botón principal queda debajo del primer pantallazo; el acceso a LinkedIn visible arriba es el botón de la barra de navegación.
- Los enlaces sociales se comprobaron en la v1 (Facebook e Instagram cargan; LinkedIn muestra muro de registro a visitantes sin sesión) y no cambiaron.

No probado: `prefers-reduced-motion` en ejecución (la regla CSS existe), lector de pantalla, Safari/Firefox, tablet (640–899 px) con captura, ni la vista previa social en las plataformas reales (requiere dominio publicado).
