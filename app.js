const input = document.querySelector('input')
const root = document.querySelector('#root')

const foods = [
    { title: 'Cake', ing1: 'Milk', ing2: 'chocolate' },
    { title: 'Soup', ing1: 'Broccoli', ing2: 'Shpinat', ing3: 'Carrot' },
    { title: 'Panini', ing1: 'Bread', ing2: 'Chicken', ing3: 'Sour cream', ing4: 'Shpinat' },
    { title: 'Smoothie', ing1: 'Milk', ing2: 'Apricot', ing3: 'Banana', ing4: 'Cherry' },
]

input.onchange = () => {
    console.log(input.value);
    const arr = foods.filter(el => el.title.toLowerCase() === input.value.toLowerCase())
    console.log(arr);
    if (arr.length > 0) {
        root.innerHTML = `
        <h1>${arr[0].title}</h1>
        <p>${arr[0].ing1}</p>
        <p>${arr[0].ing2}</p>
        <p>${arr[0].ing3 || ''}</p>
        <p>${arr[0].ing4 || ''}</p>
        `;
    } else {
        root.innerHTML = `<h1>Sorry, we do not have ${input.value}</h1>`
    }
    input.value = ''
}

