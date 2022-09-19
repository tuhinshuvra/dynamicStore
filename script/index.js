let dataSet;
// function getData() {
fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        dataSet = data;
        displayData(data)
    })
// }

function displayData(phones) {
    // console.log(phones);
    const phoneCardContainer = document.getElementById('phoneCard');

    for (let phone of phones) {
        const { id, img, name, price } = phone;
        // console.log(id, img, name, price);

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'shadow-xl', 'p-2', 'shadow', 'shadow-white', 'shadow-lg');

        cardDiv.innerHTML = `     
    <div class=" p-2">
        <figure><img class="rounded rounded-lg max-h-60 " src="${img}" alt="Phone" /></figure>
    </div>
    <div class="card-body p-2">
    <div class=" flex justify-between">
    <h2 class="card-title">${name}</h2>
    <div>
    <i class=" text-red-600 fa-solid fa-heart"></i>
    <i class="fa-solid fa-square-minus ml-3"></i>
    </div>
        </div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
           <h3 class=" font-bold text-lg  ">Price: $ <span>${price}</span></h3>
        <div class="card-actions justify-between">
          <label onclick="handleModal(${id})" for="my-modal-5" class="btn modal-button btn btn-info btn-outline w-[45%]">
          <i class="fa-solid fa-circle-info mr-3"></i>Details</label>
          <button onclick="handleBuynow(${id})" class="btn btn-success btn-outline w-[45%] ">
          <i class="fa-solid fa-bag-shopping mr-3 "></i>Buy Now</button>
        </div>
    </div>
    `;
        phoneCardContainer.appendChild(cardDiv);
    }
}

function handleModal(id) {
    const selectedPhone = dataSet.find(item => item.id == id);
    // console.log(selected);
    const { img, name, price } = selectedPhone;

    const phoneDetailsContainer = document.getElementById('phoneDetails');
    phoneDetailsContainer.innerText = '';
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('md:flex', 'justify-between', 'gap-5', 'modal-box', 'w-11/12', 'max-w-5xl');
    detailsDiv.innerHTML = `
    <div>
                    <img src="${img}" alt="">
                </div>
                <div>
                    <h1 class="font-bold text-xl"><span class=" text-xl font-bold text-violet-600">Name:</span>
                        ${name}</h1>
                    <h2 class="font-bold text-lg">Configuration: Congratulations random Internet user!</h2>

                    <p class="py-4"> <span class=" text-lg font-bold text-violet-600">Features:</span> You've been
                        selected for a chance to get one year of subscription to use
                        Wikipedia
                        for free! You've been selected for a chance to get one year of subscription to use Wikipedia
                        for free!</p>
                    <h3 class="font-bold text-sm"><span class=" text-md font-bold text-violet-600">Price
                            :</span>$
                        <span>${price}</span>
                    </h3>
                    <div class="modal-action">
                        <label for="my-modal-5" class="btn">Close</label>
                    </div>
                </div>

    `;
    phoneDetailsContainer.appendChild(detailsDiv);
}
let count = 0;
function handleBuynow(phoneId) {
    count++;
    const cartTtemCount = document.getElementById('cart-item');
    cartTtemCount.innerText = count;

    const buyPhone = dataSet.find(phone => phone.id == phoneId)
    const { img, name, price } = buyPhone;
    console.log('I am buynow Function', buyPhone)
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartDiv = document.createElement('div');
    cartDiv.classList.add('flex', 'justify-between', 'bg-slate-600', 'rounded-sm', 'p-2', 'gap-1');
    cartDiv.innerHTML = `
    <img class=" w-[15%]" src=" ${img}" alt="">
         <h3>${name} <span class=" border-2 border-slate-200 p-2 rounded rounded-md">1</span> </h3>
         <h3>$${price}</h3>
    <i class="fa-sharp fa-solid fa-trash cursor-pointer"></i>
    `;
    cartItemsContainer.appendChild(cartDiv);
}



// getData();