
var localStorage = []

const getFrogs = new Promise((resolve) => {
  resolve([
    { id: 'mlo29naz', name: 'larry', born: '2016-02-22' },
    { id: 'lp2qmsmw', name: 'sally', born: '2018-09-13' },
  ])
})

const getLizards = new Promise((resolve) => {
  resolve([
    { id: 'aom39d', name: 'john', born: '2017-08-11' },
    { id: '20fja93', name: 'chris', born: '2017-01-30' },
  ])
})
function addToStorage(item) {
  if (item) {
    let prevItems = localStorage.getItem('items')
    if (typeof prevItems === 'string') {
      prevItems = JSON.parse(prevItems)
    } else {
      prevItems = []
    }
    const newItems = [...prevItems, item]
    localStorage.setItem('items', JSON.stringify(newItems))
  }
}

let allItems = []

Promise.all([getFrogs, getLizards])
  .then(([frogs, lizards]) => {
    localStorage.clear()

    frogs.forEach((frog) => {
      allItems.push(frog)
    })
    lizards.forEach((lizard) => {
      allItems.push(lizard)
    })
    allItems.forEach((item) => {
      addToStorage(item)
    })
  })
  .catch((error) => {
    console.error(error)
  })

localStorage.getItem('items');
/*
  result:
    [{"id":"mlo29naz","name":"larry","born":"2016-02-22"},{"id":"lp2qmsmw","name":"sally","born":"2018-09-13"},{"id":"aom39d","name":"john","born":"2017-08-11"},{"id":"20fja93","name":"chris","born":"2017-01-30"}]
*/
