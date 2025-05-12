import { API_BASE_URL } from "../config";

export const obtenerClientes = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/clientes`);
    if (!response.ok) {
      throw new Error("Error al obtener los clientes. Código: " + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error("Error en obtenerClientes:", error);
    throw error;
  }
};

export const crearCliente = async (cliente) => {
  const response = await fetch(`${API_BASE_URL}/clientes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cliente)
  });

  if (!response.ok) {
    throw { response }; // Pasamos la respuesta completa
  }

  return await response.json();
};

export const actualizarCliente = async (id, cliente) => {
  const response = await fetch(`${API_BASE_URL}/clientes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cliente)
  });

  if (!response.ok) {
    throw { response };
  }

  return await response.json();
};

export const eliminarCliente = async (id) => {
  const response = await fetch(`${API_BASE_URL}/clientes/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("Error al eliminar el cliente.");
  }
};
