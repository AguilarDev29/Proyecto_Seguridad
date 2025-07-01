document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('news-form');
  const newsList = document.getElementById('news-list');
  let editingId = null;

  // 1. Cargar noticias desde backend (a futuro)
  fetchNoticias();

  // 2. Enviar formulario
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const imageInput = document.getElementById('image');
    const imageFile = imageInput.files[0];

    if (!title || !description) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (imageFile) formData.append('image', imageFile);

    try {
      if (editingId) {
        formData.append('id', editingId);
        await actualizarNoticia(formData);
        editingId = null;
      } else {
        await crearNoticia(formData);
      }

      form.reset();
      fetchNoticias();
    } catch (error) {
      console.error('Error al guardar noticia:', error);
    }
  });
});

// ================================
// FUNCIONES PREPARADAS PARA BACKEND
// ================================

// Obtener noticias (simulado)
async function fetchNoticias() {
  // Simulación temporal hasta conectar con backend
  // Cuando tengas el backend: usar fetch('/api/noticias') o similar

  newsList.innerHTML = '';

  try {
    // Simulamos datos
    const noticias = [
      {
        id: 1,
        titulo: 'Título de prueba',
        descripcion: 'Una descripción interesante.',
        imagenUrl: 'https://via.placeholder.com/150'
      }
    ];

    noticias.forEach(noticia => renderNoticia(noticia));
  } catch (error) {
    console.error('Error al cargar noticias:', error);
  }
}

// Crear noticia
async function crearNoticia(formData) {
  // En el futuro:
  // const response = await fetch('/api/noticias', { method: 'POST', body: formData });
  // const data = await response.json();
  console.log('Crear noticia (simulado)', Object.fromEntries(formData));
}

// Actualizar noticia
async function actualizarNoticia(formData) {
  // En el futuro:
  // const response = await fetch(`/api/noticias/${formData.get('id')}`, {
  //   method: 'PUT',
  //   body: formData
  // });
  console.log('Actualizar noticia (simulado)', Object.fromEntries(formData));
}

// Eliminar noticia
async function eliminarNoticia(id) {
  // En el futuro:
  // await fetch(`/api/noticias/${id}`, { method: 'DELETE' });
  console.log('Eliminar noticia (simulado): ID', id);
  fetchNoticias();
}

// Editar noticia (rellena el formulario)
function editarNoticia(id, titulo, descripcion) {
  document.getElementById('title').value = titulo;
  document.getElementById('description').value = descripcion;
  editingId = id;
}

// Mostrar en pantalla
function renderNoticia(noticia) {
  const card = document.createElement('div');
  card.classList.add('news-card');

  card.innerHTML = `
    <img src="${noticia.imagenUrl}" alt="Imagen de la noticia">
    <div>
      <h3>${noticia.titulo}</h3>
      <p>${noticia.descripcion}</p>
      <div class="news-actions">
        <button onclick="editarNoticia(${noticia.id}, '${noticia.titulo}', '${noticia.descripcion}')">Editar</button>
        <button onclick="eliminarNoticia(${noticia.id})">Eliminar</button>
      </div>
    </div>
  `;

  newsList.appendChild(card);
}
