let listItem = [
    {
        name: 'Кофе',
        quaty: 1,
        price: 540,
        
    },
    {
        name: 'Молоко',
        quaty: 1,
        price: 90,
        
    },
    {
        name: 'Мясо',
        quaty: 1,
        price: 400,
        
    },
    {
        name: 'Сахар',
        quaty: 1,
        price: 60,
        
    },
]

// Получить DOM элементы
const formName = document.getElementById('form-name')
const formCount = document.getElementById('form-count')
const formPrice = document.getElementById('form-price')
const formBtn = document.getElementById('form-btn')
const $list = document.querySelector('.list')
const $acc = document.querySelector('.count_acc')
// Добавление в массив 
formBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (!formName.value || !formCount.value || !formPrice.value){
        alert('Поле не заполненно')
    }else {
        let obj = {
            name: formName.value, 
            quaty: formCount.value,
            price: formPrice.value 
        }
        listItem.push(obj)
        formName.value = ''
        formCount.value = ''
        formPrice.value = ''
        render(listItem)
    
    }
 
})
// Отрисовка

function render (arr){
    $list.innerHTML = ''
    let totalAcc = Number(0)
    for(let i=0; i<arr.length; i++)
    {

     let $listItem = document.createElement('li') // Создаем элемент списка
       $listItem.classList.add('list__item')
       
     let $listIndex = document.createElement('div') // Создаем счетчик списка    
       $listIndex.classList.add("list__index")
       $listIndex.textContent = i+1

     let $listName = document.createElement('div')  // Создаем обертку для названия товара  
        $listName.classList.add('list__text')
     let $nameDesc = document.createElement('p')  // Создаем  описание название товара
        $nameDesc.textContent = 'Название'
     let $name = document.createElement('span')  // Создаем название товара  
        $name.textContent = arr[i].name

   
   
     let $listCount = document.createElement('div')  // Создаем обертку для счетчика товара  
         $listCount.classList.add('list__text')
     let $nameCount = document.createElement('p')  // Создаем  описание счетчика товара
         $nameCount.textContent = 'Кол-во'
     let $count = document.createElement('span')  // Создаем счетчик товара  
         $count.textContent = arr[i].quaty

     let $listCPrice = document.createElement('div')  // Создаем обертку для цены товара  
         $listCPrice.classList.add('list__text')
     let $namePrice = document.createElement('p')  // Создаем  описание цены товара
         $namePrice.textContent = 'Цена'
     let $price = document.createElement('span')  // Создаем цену товара  
         $price.textContent = arr[i].price


     let $listTotal = document.createElement('div')  // Создаем обертку для  общей цены товара  
         $listTotal.classList.add('list__text')
     let $nameTotal = document.createElement('p')  // Создаем  описание общей цены товара
         $nameTotal.textContent = 'Общая цена'
     let $total = document.createElement('span')  // Создаем общую цену товара  
         $total.textContent = arr[i].price * arr[i].quaty


     let $btnWrap = document.createElement('div')  // Создаем обертку для кнопок
         $btnWrap.classList.add('btn-wrap')
     let $btnChange = document.createElement('button')    // Кнопка изменить
         $btnChange.classList.add('btn', 'btn-success')
         $btnChange.textContent = 'Изменить'
     let $btnDelete = document.createElement('button')    // Кнопка удалить
         $btnDelete.classList.add('btn', 'btn-danger') 
         $btnDelete.textContent = 'Удалить' 
           
         $btnDelete.onclick = function() // Удалить эллемент
         {
            listItem.splice(i, 1)
            render(listItem)
         }
         $btnChange.onclick = function() // Изменить эллемент
         {
            let userCount = prompt('Введите ваше Кол-во:')
            let userPrise = prompt('Введите цену:')
            arr[i].quaty = userCount
            arr[i].price = userPrise
            render(listItem)

         }

              
            

                    
           
     
      $btnWrap.append($btnChange, $btnDelete)
      $listTotal.append($nameTotal, $total)
      $listCPrice.append($namePrice, $price)
      $listCount.append($nameCount, $count)
      $listName.append($nameDesc, $name,)
      $listItem.append($listIndex, $listName, $listCount, $listCPrice, $listTotal, $btnWrap)
      $list.append($listItem)
  
      totalAcc += arr[i].price * arr[i].quaty 
    }

  $acc.textContent = totalAcc
 
}


render(listItem)



