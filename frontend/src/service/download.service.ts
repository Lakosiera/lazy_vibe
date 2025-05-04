
import jsPDF from "jspdf";
import type { Idea } from '@/entity/idea'
import { fontComfortaa } from '@/utils/font'

// https://web.dev/patterns/files/save-a-file?hl=ru
export async function saveJson({ data, name }: { data: any, name?: string }) {
    const opts: SaveFilePickerOptions = {
        suggestedName: name,
        types: [
            {
                description: "Json file",
                accept: { "json/plain": [".json"] },
            },
        ],
    }

    const handle = await window.showSaveFilePicker(opts)

    const writable = await handle.createWritable();
    await writable.write(JSON.stringify(data, null, "    "));
    await writable.close();
}

export async function savePdf({ data, name }: { data: any, name?: string }) {

    const doc = new jsPDF({ filters: ["ASCIIHexEncode"] })

    doc.addFileToVFS('Comfortaa-Regular-normal.ttf', fontComfortaa);
    doc.addFont('Comfortaa-Regular-normal.ttf', 'Comfortaa-Regular', 'normal');

    let idea = data as Idea

    doc.setFont("Comfortaa-Regular");

    let pName = doc.splitTextToSize(idea.name || "", 200)
    let pDescription = doc.splitTextToSize(idea.description || "", 200)
    let pInstruction = doc.splitTextToSize(idea.instruction || "", 200)

    doc.text(pName, 10, 10);
    doc.text(pDescription, 10, 30);
    doc.text(pInstruction, 10, 80);

    // doc.save(`${name}.pdf`)


    const opts: SaveFilePickerOptions = {
        suggestedName: name,
        types: [
            {
                description: "PDF file",
                accept: { "application/pdf": [".pdf"] },
            },
        ],
    }
    const handle = await window.showSaveFilePicker(opts)

    // Write the blob to the file.
    const writable = await handle.createWritable();
    await writable.write(doc.output('blob'));
    await writable.close();
}
