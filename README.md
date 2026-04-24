# Presentación del Proyecto

## Información General
* **Nombre del Proyecto: ** reto_final_fullstack
* **Autor:** Jorge Alberto Castrillón Hernández
* **Repositorio:** https://github.com/jorcashe/reto_final_fullstack.git

---

## Tecnologías Utilizadas
* **React + Vite:** Entorno de desarrollo rápido.
* **Tailwind CSS:** Diseño responsivo y moderno.
* **Zustand:** Gestión de estado global para el carrito de compras.
* **React Router:** Navegación entre páginas (Home, Carrito, Checkout).

---

## Características Implementadas
1.  **Catálogo Completo:** Galería con 27 productos tecnológicos.
2.  **Carrito Dinámico:** Contador en tiempo real, suma de totales y gestión de cantidades.
3.  **Diseño Profesional:** Interfaz limpia con cuadrículas de 3 columnas y efectos hover.
4.  **Flujo de Compra:** Desde la selección del producto hasta el formulario de Checkout.
5.  **Arquitectura Limpia:** Organización de componentes basada en Atomic Design (Molecules, Organisms, Pages).

---

## Estructura del Proyecto
```text
src/
├── Molecules/    # Componentes pequeños (ProductCard)
├── Organisms/    # Componentes complejos (Navbar, ProductGallery)
├── Pages/        # Vistas completas (Home, Cart, Checkout)
├── store/        # Lógica de Zustand
└── mockdata/     # Base de datos local de productos
