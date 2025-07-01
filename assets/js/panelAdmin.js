document.addEventListener('DOMContentLoaded', () => {
  const newsList = document.getElementById('news-list');

  fetchNoticias();

  async function fetchNoticias() {
    try {
      // Simulación: Reemplazar esto por una llamada real a tu API
      const noticias = [
        {
          id: 1,
          titulo: 'Actualización de Sistema',
          descripcion: 'El sistema fue actualizado el 28 de mayo.',
          imagenUrl: '../assets/img/actualizacion2.jpg'
        },
        {
          id: 2,
          titulo: 'Feriado Próximo',
          descripcion: 'El establecimiento permanecerá cerrado el 1° de junio.',
          imagenUrl: '../assets/css/Imagen de WhatsApp 2025-05-29 a las 20.08.31_550f0b5b.jpg'
        },
        {
          id: 3,
          titulo: 'Evento Especial',
          descripcion: 'El sábado habrá una jornada recreativa para el personal.',
          imagenUrl: '../assets/css/field-hockey-players-tournament-game.jpg'
        }
      ];

      newsList.innerHTML = ''; // Vacía el contenedor

      noticias.forEach(noticia => {
        const card = document.createElement('div');
        card.classList.add('news-card');
        card.innerHTML = `
          <img src="${noticia.imagenUrl}" alt="${noticia.titulo}">
          <div class="content">
            <h3>${noticia.titulo}</h3>
            <p>${noticia.descripcion}</p>
          </div>
        `;
        newsList.appendChild(card);
      });

    } catch (error) {
      console.error('Error al cargar noticias:', error);
    }
  }
});
