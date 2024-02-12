const todoinput1 = document.getElementById('todoinput1');
const todoinput2 = document.getElementById('todoinput2');
const todoinput3 = document.getElementById('todoinput3');
const todoinput4 = document.getElementById('todoinput4');
const todoinput5 = document.getElementById('todoinput5');
const todoinput6 = document.getElementById('todoinput6');
const btn = document.getElementById('btn');
const todoTbody = document.getElementById('todoTbody')
let todoArrayi = [];

btn.addEventListener('click', function () {
    const istifadeciMelumati = {
        ad: todoinput1.value,
        soyad: todoinput2.value,
        email: todoinput3.value,
        telefon: todoinput4.value,
        cins: todoinput5.value,
        unvan: todoinput6.value,
    }
    todoArrayi.push(istifadeciMelumati);
    console.log(todoArrayi);
    tabledaGoster(todoArrayi)
})

function tabledaGoster(a) {
    todoTbody.innerHTML = '';
    a.forEach(function (x, y) {
        console.log(x.ad);
        console.log(x.soyad);
        console.log(x.email);
        console.log(x.cins);
        console.log(x.telefon);
        console.log(x.unvan);
        console.log(y);
        todoTbody.innerHTML += `<tr>
                                    <td>${y + 1}</td>
                                    <td>${x.ad}</td>
                                    <td>${x.soyad}</td>
                                    <td>${x.unvan}</td>
                                    <td>${x.cins}</td>
                                    <td>${x.email}</td>
                                    <td>${x.telefon}</td>
                                    <td>
                                        <button onclick="melumatSil(${y})">Sil</button>
                                    </td>
                                </tr>`
    })
}
tabledaGoster(todoArrayi)


function melumatSil(index) {
    todoArrayi.splice(index, 1);
    tabledaGoster(todoArrayi)
}