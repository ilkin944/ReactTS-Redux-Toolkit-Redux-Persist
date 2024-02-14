const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const phoneInput = document.getElementById('phone');
const companyInput = document.getElementById('company');
const positionInput = document.getElementById('position');
const salaryInput = document.getElementById('salary');
const createUserButton = document.getElementById('createUserButton');
const editUserButton = document.getElementById('editUserButton');
const searchInput = document.getElementById('search');
const tbody = document.getElementById('tbody');
const sortIconlar = document.querySelectorAll('.sort');


let users = [
    {
        "id": 1,
        "ad": "eli",
        "soyad": "eliyev",
        "email": "info@rgagency.org",
        "yas": "2000-01-01",
        "telefon": "+994512052815",
        "sirket": "RG Agency LLC",
        "vezife": "a",
        "maas": "1000"
    },
    {
        "id": 2,
        "ad": "veli",
        "soyad": "veli",
        "email": "info@rgagency.org",
        "yas": "2005-01-01",
        "telefon": "+994512052815",
        "sirket": "RG Agency LLC",
        "vezife": "a",
        "maas": "500"
    },
    {
        "id": 3,
        "ad": "zakir",
        "soyad": "zakir",
        "email": "info@rgagency.org",
        "yas": "2014-01-01",
        "telefon": "+994512052815",
        "sirket": "RG Agency LLC",
        "vezife": "a",
        "maas": "800"
    },
    {
        "id": 4,
        "ad": "punhan",
        "soyad": "punhan",
        "email": "info@rgagency.org",
        "yas": "2002-01-01",
        "telefon": "+994512052815",
        "sirket": "RG Agency LLC",
        "vezife": "a",
        "maas": "1200"
    },
    {
        "id": 5,
        "ad": "qadir",
        "soyad": "qadir",
        "email": "info@rgagency.org",
        "yas": "2006-01-01",
        "telefon": "+994512052815",
        "sirket": "RG Agency LLC",
        "vezife": "a",
        "maas": "3500"
    },
    {
        "id": 6,
        "ad": "movlan",
        "soyad": "movlan",
        "email": "info@rgagency.org",
        "yas": "2003-01-01",
        "telefon": "+994512052815",
        "sirket": "RG Agency LLC",
        "vezife": "a",
        "maas": "3500"
    }
];
let id = 0;

createUserButton.addEventListener('click', function () {
    id++;
    const istifadeciMelumati = {
        id: id,
        ad: nameInput.value,
        soyad: surnameInput.value,
        email: emailInput.value,
        yas: ageInput.value,
        telefon: phoneInput.value,
        sirket: companyInput.value,
        vezife: positionInput.value,
        maas: salaryInput.value
    }
    users.push(istifadeciMelumati);
    tabledaGoster(users)
})

function tabledaGoster(a) {
    tbody.innerHTML = '';
    a.forEach(function (istifadeci) {
        tbody.innerHTML += `<tr>
                                    <td>${istifadeci.id}</td>
                                    <td>${istifadeci.ad}</td>
                                    <td>${istifadeci.soyad}</td>
                                    <td>${istifadeci.yas}</td>
                                    <td>${istifadeci.email}</td>
                                    <td>${istifadeci.telefon}</td>
                                    <td>${istifadeci.sirket}</td>
                                    <td>${istifadeci.vezife}</td>
                                    <td>${istifadeci.maas}</td>
                                    <td>
                                        <button class='btn btn-success' onclick="melumatYenile(${istifadeci.id})">Edit</button>
                                    </td>
                                    <td>
                                        <button class='btn btn-danger' onclick="melumatSil(${istifadeci.id})">Sil</button>
                                    </td>
                                </tr>`
    })
}
tabledaGoster(users)


searchInput.addEventListener('input', function () {
    if (searchInput.value.length > 0) {
        const netice = users.filter(function (herBirIstifadeci) {
            return (herBirIstifadeci.ad.toLowerCase().includes(searchInput.value.toLowerCase()) || herBirIstifadeci.soyad.toLowerCase().includes(searchInput.value.toLowerCase()) || herBirIstifadeci.email.toLowerCase().includes(searchInput.value.toLowerCase()))
        })
        tabledaGoster(netice)
    } else {
        tabledaGoster(users)
    }
})


sortIconlar.forEach(function (ikon) {
    ikon.addEventListener('click', function (e) {
        if (e.target.getAttribute('sort-type') === 'id') {
            if (e.target.getAttribute('sort') === 'asc') {
                const artan = users.sort(function (a, b) {
                    return a.id - b.id
                })
                tabledaGoster(artan)
            } else {
                const azalan = users.sort(function (a, b) {
                    return b.id - a.id
                })
                tabledaGoster(azalan)
            }
        } else if (e.target.getAttribute('sort-type') === 'name') {
            if (e.target.getAttribute('sort') === 'asc') {
                const artan = users.sort(function (a, b) {
                    return a.ad.localeCompare(b.ad)
                })
                tabledaGoster(artan)
            } else {
                const azalan = users.sort(function (a, b) {
                    return b.ad.localeCompare(a.ad)
                })
                tabledaGoster(azalan)
            }
        } else if (e.target.getAttribute('sort-type') === 'surname') {
            if (e.target.getAttribute('sort') === 'asc') {
                const artan = users.sort(function (a, b) {
                    return a.soyad.localeCompare(b.soyad)
                })
                tabledaGoster(artan)
            } else {
                const azalan = users.sort(function (a, b) {
                    return b.soyad.localeCompare(a.soyad)
                })
                tabledaGoster(azalan)
            }
        } else if (e.target.getAttribute('sort-type') === 'age') {
            if (e.target.getAttribute('sort') === 'asc') {
                const artan = users.sort(function (a, b) {
                    return a.yas.localeCompare(b.yas)
                })
                tabledaGoster(artan)
            } else {
                const azalan = users.sort(function (a, b) {
                    return b.yas.localeCompare(a.yas)
                })
                tabledaGoster(azalan)
            }
        } else {
            if (e.target.getAttribute('sort') === 'asc') {
                const artan = users.sort(function (a, b) {
                    return a.maas - b.maas
                })
                tabledaGoster(artan)
            } else {
                const azalan = users.sort(function (a, b) {
                    return b.maas - a.maas
                })
                tabledaGoster(azalan)
            }
        }

    })
})



function melumatYenile(id) {
    const editOlunacaq = users.find(function (istifadeci) {
        return istifadeci.id === id;
    })

    editUserButton.classList.remove('d-none');
    createUserButton.classList.add('d-none');

    editUserButton.setAttribute('edit-id', editOlunacaq.id);

    nameInput.value = editOlunacaq.ad
    surnameInput.value = editOlunacaq.soyad
    emailInput.value = editOlunacaq.email
    ageInput.value = editOlunacaq.yas
    phoneInput.value = editOlunacaq.telefon
    companyInput.value = editOlunacaq.sirket
    positionInput.value = editOlunacaq.vezife
    salaryInput.value = editOlunacaq.maas
}


editUserButton.addEventListener('click', function () {
    const editId = editUserButton.getAttribute('edit-id');

    const istifadeciMelumati = {
        id: editId,
        ad: nameInput.value,
        soyad: surnameInput.value,
        email: emailInput.value,
        yas: ageInput.value,
        telefon: phoneInput.value,
        sirket: companyInput.value,
        vezife: positionInput.value,
        maas: salaryInput.value
    }


    const tapilanIndeks = users.findIndex(function (istifadeci, indeks) {
        if (istifadeci.id == editId) {
            return indeks
        }
    })

    users.splice(tapilanIndeks, 1, istifadeciMelumati);
    tabledaGoster(users)


    editUserButton.classList.add('d-none');
    createUserButton.classList.remove('d-none');

    nameInput.value = '';
    surnameInput.value = '';
    emailInput.value = '';
    ageInput.value = '';
    phoneInput.value = '';
    companyInput.value = '';
    positionInput.value = '';
    salaryInput.value = '';
})