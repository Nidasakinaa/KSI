export let isiTabel = 
`
<tr class="h-18 border-b border-coolGray-100">
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">#ID#</th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">#NAMA#</th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">#KOMPOSISI#</th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">#DESKRIPSI#</th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-500 text-left">#KATEGORI#</th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-500 text-left">#FOTO#</th>
    <th class="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
        <button type="button" class="btn btn-link p-0" onclick="window.location.href='edit.html?menuItemId=#IDEDIT#'"> Edit </button>
        |
        <button type="button" id="deleteButton" class="btn btn-link p-0" onclick="confirmDelete('#IDHAPUS#')"> Delete </button>
    </th>
</tr>
`