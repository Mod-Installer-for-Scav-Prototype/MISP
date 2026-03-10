import { getCurrentWindow } from '@tauri-apps/api/window';   

for (const x of document.getElementsByClassName("window-drag")) {
    (x as HTMLElement).addEventListener("mousedown", async () => {
         await getCurrentWindow().startDragging();
    });
}

for (const x of document.getElementsByClassName("min")) {
    (x as HTMLElement).addEventListener("click", async () => {
         await getCurrentWindow().minimize();
    });
}

for (const x of document.getElementsByClassName("max")) {
    (x as HTMLElement).addEventListener("click", async () => {
         await getCurrentWindow().toggleMaximize();
    });
}

for (const x of document.getElementsByClassName("close")) {
    (x as HTMLElement).addEventListener("click", async () => {
         await getCurrentWindow().close();
    });
}