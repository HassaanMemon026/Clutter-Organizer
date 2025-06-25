import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const __filename = url.fileURLToPath(import.meta.url);
let indexJs = path.basename(__filename);

const extensionMap = {
    // Video
    mp4: "video", mkv: "video", avi: "video", mov: "video", flv: "video", wmv: "video", webm: "video", m4v: "video",

    // Audio
    mp3: "audio", wav: "audio", aac: "audio", flac: "audio", ogg: "audio",

    // Images
    jpg: "photos", jpeg: "photos",
    png: "graphics", gif: "graphics", bmp: "graphics", tiff: "graphics", svg: "graphics", webp: "graphics",

    // Documents
    pdf: "pdf_documents",
    txt: "text_notes", md: "text_notes", rtf: "text_notes",
    doc: "word_documents", docx: "word_documents",
    xls: "excel_sheets", xlsx: "excel_sheets",
    ppt: "powerpoint_slides", pptx: "powerpoint_slides",

    // Code
    js: "code_files", py: "code_files", cpp: "code_files", java: "code_files", html: "code_files", css: "code_files"
};


async function clutterOrganizer() {
    console.log(" Organizing files...\n");
    const data = await fs.readdir(__dirname);
    for (const file of data) {
        let filename = path.basename(file);
        let extention = path.extname(file).slice(1);
        let folderName = extensionMap[extention] || extention;
        let oldPath = path.join(__dirname, filename);
        let newPath = path.join(__dirname, folderName, filename);
        let condition = !filename.match("package-lock.json") && !filename.match("package.json") && !filename.match(indexJs) && !filename.match("RUN Clutter-Organizer.bat") && filename.split(".").length > 1;
        if (condition) {
            try {
                // create folder with name of extention
                let mkFolder = await fs.mkdir(path.join(__dirname, folderName));
                console.log(`Created Folder: ${folderName}`);
            } catch (err) { }
            // move file to this extention named folder
            let mvFile = await fs.rename(oldPath, newPath);
            console.log(`Moved file: ${filename} move to ${folderName} Folder`);
        }
    }
    console.log(`\n Your Files have been Organised. \n`);
}

clutterOrganizer()
