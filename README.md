# Aresa - Ingeniería, Arquitectura y Construcción

Bienvenido al repositorio oficial del portal web corporativo de **Aresa**. Este proyecto consiste en una aplicación web moderna, orientada a representar la presencia digital de una empresa constructora y de ingeniería mexicana especializada en proyectos residenciales, industriales y herrería de alta precisión.

## Arquitectura del Proyecto

Este repositorio consolida de manera organizada tanto la experiencia gráfica del cliente (Frontend) como la lógica y persistencia de datos del servidor (Backend).

### `aresa-frontend`
Aplicación enfocada en alto rendimiento, transiciones fluidas y una estética minimalista ("glassmorphism" fusionado con geometría corporativa).
*   **Core:** React 18
*   **Bundler:** Vite
*   **Lenguaje:** TypeScript
*   **Estilos:** CSS Modules / Vanilla CSS (Grid layouts estrictos)
*   **Animaciones:** GSAP (ScrollTrigger)

### `aresa-backend`
*(En desarrollo)* API construida para sostener un panel administrativo dinámico y servicios de captación de clientes.
*   **Motor:** Node.js + Express
*   **Lenguaje:** TypeScript

---

## 🚀 Guía de Inicialización (Local)

Al clonar este repositorio, asegúrate de tener [Node.js](https://nodejs.org/en/) instalado (se recomienda v18.x o superior). Deberás levantar por separado los entornos mediante la consola.

### 1. Levantar el Frontend
Abre tu consola orientada hacia la carpeta del frontend y corre las dependencias:
```bash
cd aresa-frontend
npm install
npm run dev
```
La página estará disponible en tu navegador en local (usualmente `http://localhost:5173`).

### 2. Levantar el Backend
En una terminal paralela, ejecuta:
```bash
cd aresa-backend
npm install
npm run dev
```

---

## 🎨 Sistema de Diseño
El Frontend se rige por especificaciones muy estrictas, destacando:
- Fuentes integradas localmente: **Dinish Condensed** (Títulos) y **Montserrat** (Cuerpo de texto).
- Navegadores y layouts encuadrados mediante `display: grid`.
- Bordes vectoriales absolutos para generar marcadores estilo *esquinas de enfoque* en componentes globales como el `<Navbar />`.

## 📜 Licencia y Propietario
Código base propietario de Aresa y desarrolladores asociados.
