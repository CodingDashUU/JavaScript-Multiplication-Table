const number = document.getElementById("number");
const generate = document.getElementById("generate")
const amount = document.getElementById("amount")
const table = document.getElementById("table")



generate.onclick = function(){
    table.textContent = ""
for(let i = 1; i <= amount.value.valueOf(); i++){
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    let td2 = document.createElement("td")
     
    td.textContent = i;
    tr.append(td)
    td2.textContent = i * number.value.valueOf()
    tr.append(td2)
    table.append(tr)
}
}

