const tbody = document.querySelector('tbody')
const keys = ['id', 'tag', 'text']

function loadData() {
    fetch('https://myproject-production-0e81.up.railway.app/data')
    //.fetch('/data')
        .then(res => res.json())
        .then(data => {
            
            console.log(data)
            tbody.innerHTML = ''

            for (let i = 0; i < data.length; i++) {
                const tr = document.createElement('tr')

                for (let j = 0; j < keys.length; j++) {
                    const td = document.createElement('td')
                    td.textContent = data[i][keys[j]]
                    tr.appendChild(td)
                }

                tbody.appendChild(tr)
            }
        })
        .catch(err => {
            console.error('Ошибка загрузки данных:', err)
        })
}


loadData()


setInterval(loadData, 5000)
