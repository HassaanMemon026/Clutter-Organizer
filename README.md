<!-- Banner -->
<!-- <p align="center">
  <img src="https://raw.githubusercontent.com/your-username/clutter-organizer/main/assets/banner.png" alt="Clutter Organizer Banner" width="80%" />
</p> -->

<h1 align="center">📂 Clutter Organizer</h1>
<p align="center">
  <b>Effortlessly organize your messy folders with a single command!</b><br>
  <i>Sorts files into categorized folders by type. Fast, simple, and customizable.</i>
</p>

<p align="center">
  <a href="#features">✨ Features</a> •
  <a href="#installation">📦 Installation</a> •
  <a href="#usage">🚀 Usage</a> •
  <a href="#how-it-works">🗂️ How It Works</a> •
  <a href="#contributing">🤝 Contributing</a> •
  <a href="#license">📄 License</a>
</p>

---

## ✨ Features

- **Automatic Sorting:** Instantly organizes files into folders like `video`, `audio`, `photos`, `graphics`, `documents`, and more.
- **Customizable:** Easily extend file type mapping in [`index.js`](index.js).
- **One-Click Run:** Includes a Windows batch file for quick execution.
- **No Setup Hassle:** No configuration required—just run and organize!

---

## 📦 Installation

```bash
git clone https://github.com/your-username/clutter-organizer.git
cd clutter-organizer
npm install
```

---

## 🚀 Usage

### Option 1: Run with Node.js

```bash
node index.js
```

### Option 2: Use the Batch File (Windows)

Double-click `RUN Clutter-Organizer.bat`  
_or run in terminal:_
```bash
./RUN\ Clutter-Organizer.bat
```

---

## 🗂️ How It Works

- Scans the current directory for files.
- Moves files into folders based on their extension (e.g., `.mp4` → `video/`, `.jpg` → `photos/`, `.js` → `code_files/`).
- Creates folders automatically if they don't exist.
- **Customizable:** Edit the `extensionMap` in [`index.js`](index.js) to add or change file type categories.

---

## 🛠️ Supported File Types

| Category           | Extensions                                      |
|--------------------|------------------------------------------------|
| 🎬 Video           | mp4, mkv, avi, mov, flv, wmv, webm, m4v        |
| 🎵 Audio           | mp3, wav, aac, flac, ogg                        |
| 🖼️ Photos          | jpg, jpeg                                       |
| 🎨 Graphics        | png, gif, bmp, tiff, svg, webp                  |
| 📄 PDF Documents   | pdf                                             |
| 📝 Text Notes      | txt, md, rtf                                    |
| 🗒️ Word Documents  | doc, docx                                       |
| 📊 Excel Sheets    | xls, xlsx                                       |
| 📈 PowerPoint      | ppt, pptx                                       |
| 💻 Code Files      | js, py, cpp, java, html, css                    |

---



## 🤝 Contributing

We love contributions!  
If you have ideas, improvements, or want to add more file types:

1. **Fork** this repo
2. **Clone** your fork
3. **Create a branch** (`git checkout -b feature/your-feature`)
4. **Commit** your changes (`git commit -m 'Add amazing feature'`)
5. **Push** to your branch (`git push origin feature/your-feature`)
6. **Open a Pull Request**

Please read our [contributing guidelines](CONTRIBUTING.md) before submitting!

---

## 👥 Collaboration

- Open issues for bugs or feature requests.
- Join discussions to suggest improvements.
- All skill levels welcome!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  <b>Made with ❤️ by Muhammad Hassaan</b>
</p>

<p align="center">
  <i>Keep your folders clean and organized with just one command!</i>
</p>