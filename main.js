const nftContainer = document.getElementById('nft-container');
const faqContainer = document.querySelector('.questions-container');

let filterInput = document.getElementById('filterInput');

let nftString = '';
let faqString = '';

const nfts = [
  {
    name: 'RED CROWN KING',
    assetID: '#0001',
    price: '500.00',
    img: 'images/crown1.png',
    category: 'Kings',
  },
  {
    name: 'RED CROWN QUEEN',
    assetID: '#0002',
    price: '250.00',
    img: 'images/crown2.png',
    category: 'Queens',
  },
  {
    name: 'RED CROWN JACK',
    assetID: '#0003',
    price: '600.00',
    img: 'images/crown3.png',
    category: 'Jacks',
  },
  {
    name: 'BLUE CROWN KING',
    assetID: '#0004',
    price: '800.00',
    img: 'images/crown4.png',
    category: 'Kings',
  },
  {
    name: 'BLUE CROWN QUEEN',
    assetID: '#0005',
    price: '670.00',
    img: 'images/crown5.png',
    category: 'Queens',
  },
  {
    name: 'BLUE CROWN JACK',
    assetID: '#0006',
    price: '750.00',
    img: 'images/crown6.png',
    category: 'Jacks',
  },
];

const faqs = [
  {
    question: 'What is Castle?',
    description:
      'Castle is a collection of crowns designed by Ian Broqueza and minted as NFTs. They are inspired from various suits of card, from King, Queen, Jack, Ace and the Numbers. Each has different races that distinguishes its uniqueness. Grab your crown now!',
  },
  {
    question: 'How to get a Crown?',
    description:
      'Castle is a collection of crowns designed by Ian Broqueza and minted as NFTs. They are inspired from various suits of card, from King, Queen, Jack, Ace and the Numbers. Each has different races that distinguishes its uniqueness. Grab your crown now!',
  },
  {
    question: 'How to get listed?',
    description:
      'Castle is a collection of crowns designed by Ian Broqueza and minted as NFTs. They are inspired from various suits of card, from King, Queen, Jack, Ace and the Numbers. Each has different races that distinguishes its uniqueness. Grab your crown now!',
  },
];

for (let item of nfts) {
  nftString += `
      <div id="nft-cards">
        <div class="nft-card ${item.category}">
          <img class="nft-image" src="${item.img}" alt="crown-nft" />
          <span class="tag new">NEW</span>
          <span class="basket">
            <ion-icon name="basket"></ion-icon>
          </span>
          <div class="nft-description">
            <div class="nft-name">
              <a href="nft-info.html">${item.name} <span class="assetID">${item.assetID}</span></a>
            </div>
            <div class="nft-price">₱ ${item.price} <button class="heart "><ion-icon class="heart-active" name="heart-outline"></ion-icon></button></div> 
          </div>
        </div>
      </div>
      
      
  `;

  nftContainer.innerHTML = nftString;
}

for (let faq of faqs) {
  faqString += `
        <div class="question">
          <button class="btn-accord">
            <span> ${faq.question} </span>
            <i class="fas fa-chevron-up"></i>
          </button>
          <p>
            ${faq.description}
          </p>
        </div>
      `;
  // console.log(faq.question);
  faqContainer.innerHTML = faqString;
}

// console.log(nftContainer);
// console.log(faqString);
console.log(faqContainer);

// Functions
// Faq Section
const accordButtons = document.querySelectorAll('.btn-accord');

accordButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const para = button.nextElementSibling;
    const icon = button.children[1];

    para.classList.toggle('show');
    icon.classList.toggle('rotate');
  });
});

// Filter
// Buttons
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll('.filter-value');
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  //select all cards
  let elements = document.querySelectorAll('.nft-card');
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == 'all') {
      element.classList.remove('hide');
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove('hide');
      } else {
        //hide other elements
        element.classList.add('hide');
      }
    }
  });
}

//Search button click
document.getElementById('search').addEventListener('click', () => {
  //initializations
  let searchInput = document.getElementById('search-input').value;
  let elements = document.querySelectorAll('.nft-name');
  let cards = document.querySelectorAll('.nft-card');

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove('hide');
    } else {
      //hide others
      cards[index].classList.add('hide');
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct('all');
};
