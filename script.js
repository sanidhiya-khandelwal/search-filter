const searchFunction = () => {
    const filter = document.getElementById('myInput').value.toUpperCase(); //gives value whatever is type in input
    console.log(filter);

    // let myTable = document.getElementById('myTable');
    // let tr = myTable.getElementsByTagName('tr')
    // OR below single line 
    let tr = document.getElementsByTagName('tr')
    // console.log(tr)

    for (var i = 0; i < tr.length; i++) { //we need to look for all rows
        let td = tr[i].getElementsByTagName('td')[0] //inside tr there are 3 td's and we need first one which contains name 
        console.log(td); //<td>Denver</td>
        if (td) {
            let textValue = td.textContent || td.innerHTML  //converting textvalue to just text like Sanidh instead of <td>Denver</td>
            // console.log(textValue);

            if (textValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = ""
            }
            else {
                tr[i].style.display = 'none'
            }
        }
    }
}
