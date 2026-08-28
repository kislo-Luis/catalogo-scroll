function obtenerProductoDesdeURL(productos) {

  const parametros =
    new URLSearchParams(window.location.search);

  const archivo =
    parametros.get("producto");

  if (!archivo) {
    return null;
  }

  return productos.find(
    producto => producto.archivo === archivo
  ) || null;
}


function crearURLProducto(producto) {

  const url =
    new URL(window.location.href);

  url.searchParams.set(
    "producto",
    producto.archivo
  );

  return url.toString();
}


export {
  obtenerProductoDesdeURL,
  crearURLProducto
};