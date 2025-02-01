import { addInner } from "https://bukulapak.github.io/element/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTableMenuItem(results) {
    results.forEach(isiRow);
    console.log(results);
}
function isiRow(value) {
    let content =
        isiTabel
            .replace("#ID#", value._id)
            .replace("#NAMA#", value.name ? value.name : "Nama Menu tidak tersedia")
            .replace("#DESKRIPSI#", value.description ? value.description : "Deskripsi tidak tersedia")
            .replace("#KATEGORI#", value.category ? value.category : "Kategori tidak tersedia")
            .replace("#FOTO#", value.image ? value.image : "Foto tidak tersedia")
            .replace("#IDEDIT#", value._id)
            .replace("#IDHAPUS#", value._id);
    addInner("iniTabel", content);
}