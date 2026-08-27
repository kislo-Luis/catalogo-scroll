/* =====================================================
   CONFIGURACIÓN
===================================================== */

const NUMERO_WHATSAPP = "5493764657997";

const RUTA_IMAGENES =  "https://tuwebmisiones.com/alobocamisiones/public/indumentaria/";


/* =====================================================
   ELEMENTO PRINCIPAL
===================================================== */

const catalogo = document.getElementById("catalogo");


/* =====================================================
   WHATSAPP
===================================================== */

function crearWhatsApp(nombre) {

  const mensaje =
`Hola! 👋

Quiero consultar por:

${nombre}

¿Me pasás disponibilidad y precio?`;

  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}


/* =====================================================
   COMPARTIR PÁGINA
===================================================== */

async function compartirPagina() {

  const datosCompartir = {
    title: "AloBoca Misiones",
    text: "Indumentaria xeneize · Liquidación de temporada",
    url: window.location.href
  };


  /* ---------------------------------------------------
     COMPARTIR NATIVO
  --------------------------------------------------- */

  if (navigator.share) {

    try {

      await navigator.share(datosCompartir);

      return;

    } catch (error) {

      /* El usuario canceló el compartir */
      if (error.name === "AbortError") {
        return;
      }

    }
  }


  /* ---------------------------------------------------
     FALLBACK: COPIAR ENLACE
  --------------------------------------------------- */

  try {

    await navigator.clipboard.writeText(
      window.location.href
    );

    mostrarAvisoCompartir(
      "ENLACE COPIADO"
    );

  } catch (error) {

    mostrarAvisoCompartir(
      "COPIÁ EL ENLACE DE LA PÁGINA"
    );

  }
}


/* =====================================================
   AVISO DE COMPARTIR
===================================================== */

function mostrarAvisoCompartir(texto) {

  let aviso =
    document.querySelector(".aviso-compartir");


  if (!aviso) {

    aviso =
      document.createElement("div");

    aviso.className =
      "aviso-compartir";

    document.body.appendChild(aviso);
  }


  aviso.textContent =
    texto;


  aviso.classList.add(
    "visible"
  );


  clearTimeout(
    aviso._timeout
  );


  aviso._timeout =
    setTimeout(() => {

      aviso.classList.remove(
        "visible"
      );

    }, 2000);
}


/* =====================================================
   CREAR PRODUCTO
===================================================== */

function crearProducto(producto, indice, total) {

  const numero =
    String(indice + 1).padStart(2, "0");

  const totalFormateado =
    String(total).padStart(2, "0");


  const section =
    document.createElement("section");

  section.className = "producto";


  /* ---------------------------------------------------
     IMAGEN
  --------------------------------------------------- */

  const imagen =
    document.createElement("img");

  imagen.className =
    "producto-imagen";

  imagen.src =
    RUTA_IMAGENES + producto.archivo;

  imagen.alt =
    producto.nombre;

  section.appendChild(imagen);


  /* ---------------------------------------------------
     CABECERA
  --------------------------------------------------- */
   const cabecera =
    document.createElement("header");

  cabecera.className =
    "cabecera";

  cabecera.innerHTML = `

    <div class="marca-instagram">

      <a
        class="instagram-link"
        href="https://www.instagram.com/alobocamisiones/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram AloBoca Misiones"
      >

        <span class="instagram-icono">

          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >

            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            />

            <circle
              cx="12"
              cy="12"
              r="4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            />

            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
            />

          </svg>

        </span>

        <span>
          alobocamisiones
        </span>

      </a>

    </div>


    <div class="cabecera-derecha">

      <button
        class="compartir"
        type="button"
        aria-label="Compartir página"
      >

        <span class="compartir-icono">

          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >

            <path
              fill="currentColor"
              d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11A2.99 2.99 0 1 0 15 5c0 .24.04.47.09.7L8.04 9.81A3 3 0 1 0 8 14.19l7.12 4.16c-.04.21-.07.43-.07.65a2.95 2.95 0 1 0 2.95-2.92ZM6 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM18 4a1 1 0 1 1 0 2 1 1 0 0 1 0 2Zm0 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            />

          </svg>

        </span>

        <span>
          COMPARTIR
        </span>

      </button>


      <div class="contador">
        ${numero} / ${totalFormateado}
      </div>

    </div>

  `;

  section.appendChild(cabecera);

  /* ---------------------------------------------------
     EVENTO COMPARTIR
  --------------------------------------------------- */

  const botonCompartir =
    cabecera.querySelector(".compartir");

  botonCompartir.addEventListener(
    "click",
    compartirPagina
  );


  /* ---------------------------------------------------
     INDICADOR DE SCROLL
  --------------------------------------------------- */

  const scroll =
    document.createElement("div");

  scroll.className =
    "scroll";

  scroll.textContent =
    "DESLIZÁ";

  section.appendChild(scroll);


  /* ---------------------------------------------------
     INFORMACIÓN
  --------------------------------------------------- */

  const info =
    document.createElement("div");

  info.className =
    "info";


  /* ---------------------------------------------------
     ÚLTIMA EN STOCK
  --------------------------------------------------- */

  if (producto.ultima === true) {

    const alerta =
      document.createElement("div");

    alerta.className =
      "alerta-stock";

    alerta.innerHTML = `

      <span class="alerta-icono">
        !
      </span>

      ÚLTIMA EN STOCK

    `;

    info.appendChild(alerta);
  }


  /* ---------------------------------------------------
     NOMBRE DEL PRODUCTO
  --------------------------------------------------- */

  const nombre =
    document.createElement("h1");

  nombre.className =
    "nombre";

  nombre.textContent =
    producto.nombre;

  info.appendChild(nombre);


  /* ---------------------------------------------------
     DESCRIPCIÓN
  --------------------------------------------------- */

  if (producto.descripcion) {

    const descripcion =
      document.createElement("p");

    descripcion.className =
      "descripcion";

    descripcion.textContent =
      producto.descripcion;

    info.appendChild(descripcion);
  }


  /* ---------------------------------------------------
     WHATSAPP
  --------------------------------------------------- */

  const whatsapp =
    document.createElement("a");

  whatsapp.className =
    "whatsapp";

  whatsapp.href =
    crearWhatsApp(producto.nombre);

  whatsapp.target =
    "_blank";

  whatsapp.rel =
    "noopener noreferrer";


  whatsapp.innerHTML = `

    <span class="whatsapp-icon">

      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >

        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-8.66 15l-1.05 3.82a1 1 0 0 0 1.22 1.22L7.33 21A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.13l-.29-.17-2.44.67.66-2.39-.19-.3A8 8 0 1 1 12 20Zm4.38-5.95c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
        />

      </svg>

    </span>

    <span>
      CONSULTAR POR WHATSAPP
    </span>

  `;


  info.appendChild(whatsapp);


  /* ---------------------------------------------------
     UBICACIÓN
  --------------------------------------------------- */

  if (indice === total - 1) {

    const ubicacion =
      document.createElement("div");

    ubicacion.className =
      "ubicacion";

    ubicacion.innerHTML = `
      <strong>AloBoca Misiones</strong>
      <span>Posadas · Misiones · Argentina</span>
    `;

    info.appendChild(ubicacion);
  }


  section.appendChild(info);


  return section;
}


/* =====================================================
   GENERAR CATÁLOGO
===================================================== */

function generarCatalogo() {

  catalogo.innerHTML = "";

  const total =
    productos.length;


  productos.forEach(
    (producto, indice) => {

      const elemento =
        crearProducto(
          producto,
          indice,
          total
        );

      catalogo.appendChild(
        elemento
      );

    }
  );
}





/* =====================================================
   INICIAR
===================================================== */

generarCatalogo();
