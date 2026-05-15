# Custom Desktop Calculator 🚀

A sleek, standalone desktop calculator application built from scratch using **Electron.js**, HTML5, CSS3, and JavaScript. This project features a custom, frameless user interface with a unique purple "vibe" aesthetic and a highly secure architecture.

## ✨ Features

- **Custom Frameless UI:** Standard OS window borders are replaced with a seamless, modern translucent purple container.
- **Draggable Title Bar:** Integrated dedicated window dragging regions utilizing `-webkit-app-region` styles.
- **Secure Architecture:** Implements standard Electron security best practices, utilizing a dedicated `preload.js` script to isolate context boundaries and handle safe Inter-Process Communication (IPC).
- **Smooth Logic Engine:** Clean math execution handled dynamically via localized renderer processes.

---

## 🛠️ Tech Stack

- **Framework:** Electron.js (v7.x)
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Build Tools:** Electron Forge & Squirrel Windows Maker

---

## 🚀 Installation & Local Development

To run this project locally, or to bundle your own production executable, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the Repository
```bash
git clone [https://github.com/AlcAndrea/calculator-app.git](https://github.com/AlcAndrea/calculator-app.git)
cd calculator-app
