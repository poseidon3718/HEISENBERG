// const chemistry = [
  {
    id: 1
    name: '이산화탄소',
    formula: 'CO2',
    url: 'images/CO2.png'
  },
  {
    id: 2
    name: '물',
    formula: 'H2O',
    url: 'images/periodic.png'
  },
  {
    id: 3
    name: '메테인',
    formula: 'CH4',
    url: 'images/periodic.png'
  },
  {
    id: 4
    name: '암모니아',
    formula: 'NH3',
    url: 'images/periodic.png'
  },
]

// const list = document.getElementById('list');

// function showList(val='') {
  list.innerHTML = '';
  const res = chemistry.forEach(chemistry => {
    if (chemistry.name.includes(val)) {
      const li = document.createElement('li');
      li.innerHTML = '
        <img src='${chemistry.url}' alt='${chemistry.name}'>
        <p>이름: ${chemistry.name}</p>
        <p>화학식: ${chemistry.formula}</p>
      '
      list.appendChild(li);
    }
  })
}

// showList();

// const searchInput = document.getElementById('search');
// const searchBtn = document.getElementById('searchBtn');

// searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const val = searchInput.value;
  console.log(val);
  showList(val);
})
