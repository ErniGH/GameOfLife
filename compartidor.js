function toBase64(string) {
    return window.btoa(string);
}

function fromBase64(string) {
    return window.atob(string);
}

function serializar(celdas) {
    return toBase64(JSON.stringify(celdas));
}

function deserializar(valor) {
    return valor ? JSON.parse(fromBase64(valor)) : {};
}

function desdeEstado() {
    const url = new URL(window.location);
    var estadoGuardado = url.searchParams.get("estado");
    return deserializar(estadoGuardado);
}
