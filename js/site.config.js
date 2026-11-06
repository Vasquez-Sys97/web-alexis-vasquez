/*
  Configuración editable del sitio.
  - Para cambiar un enlace, edita su `url`.
  - Para cambiar el orden, mueve los elementos; el que tiene `primary: true`
    se muestra destacado y es el destino del botón principal del inicio.
  - `icon` debe existir en `icons` dentro de js/main.js (linkedin, instagram, facebook).
*/
window.SITE = {
  links: [
    {
      id: 'linkedin',
      icon: 'linkedin',
      name: 'LinkedIn',
      title: 'Conecta conmigo en LinkedIn',
      detail: 'LinkedIn · Perfil profesional',
      url: 'https://www.linkedin.com/in/alexis-vasquez-876b0a116',
      primary: true
    },
    {
      id: 'instagram',
      icon: 'instagram',
      name: 'Instagram',
      title: 'Instagram',
      detail: 'Sígueme en Instagram',
      url: 'https://www.instagram.com/alexisvasquez96'
    },
    {
      id: 'facebook',
      icon: 'facebook',
      name: 'Facebook',
      title: 'Facebook',
      detail: 'Visita mi perfil de Facebook',
      url: 'https://www.facebook.com/share/1CLTEM4fAc/'
    }
  ]
};
