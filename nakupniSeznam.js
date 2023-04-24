console.log('Nakupní seznam')

const items = [
    {
        id: 'MFJSFr',
        product: 'Rohlíky',
        amount: '10',
        done: false,
    },
    {
        id: 'wvsbDD',
        product: 'Máslo',
        amount: '500 g',
        done: true,
    },
    {
        id: 'm0CccN',
        product: 'Šunka',
        amount: '200 g',
        done: true,
    },
];
/*
const ulElm = document.createElement('ul')
ulElm.classList.add('shopping-list')
document.body.appendChild(ulElm)

const itemsArray = items.map(item => ({
    product: item.product,
    amount: item.amount
}))
console.table(itemsArray)

itemsArray.forEach((item) => {
    ulElm.innerHTML += `
    <li class="item">
    <div class="item__name">${item.product}</div>
    <div class="item__amount">${item.amount}</div>
    </li>
    `
})
*/

const shoppingList = (items) => {
    const ulElm = document.createElement('ul')
    ulElm.classList.add('shopping-list')
    document.body.appendChild(ulElm)

    ulElm.innerHTML += items
        .map(item =>
            `<li class="item">
            <div class="item__name">${item.product}</div>
            <div class="item__amount">${item.amount}</div>
            </li>`
        )
        .join('')
}
shoppingList(items)






