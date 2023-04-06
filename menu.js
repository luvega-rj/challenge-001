let currentItemIndex = 0; // keep track of the current item index
let items = []; // declare items array
function displayItem(item) {
  const container = document.getElementById('containerrr');
  container.innerHTML = ''; // clear the container
  const card = document.createElement('div');
  card.classList.add('card');
  const img = document.createElement('img');
  img.src = item.poster;
  img.alt = item.title;
  card.appendChild(img);
  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  const title = document.createElement('h2');
  title.textContent = item.title;
  cardContent.appendChild(title);
  const description = document.createElement('p');
  description.textContent = item.description;
  cardContent.appendChild(description);
  card.appendChild(cardContent);
  container.appendChild(card);
}
function displayNextItem() {
  currentItemIndex++;
  if (currentItemIndex >= items.length) {
    currentItemIndex = 0;
  }
  const currentItem = items[currentItemIndex];
  displayItem(currentItem);
}
function displayPrevItem() {
  currentItemIndex--;
  if (currentItemIndex < 0) {
    currentItemIndex = items.length - 1;
  }
  const currentItem = items[currentItemIndex];
  displayItem(currentItem);
}
fetch('http://localhost:3000/foods')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    items = data; // assign the data to the items array
    displayItem(items[currentItemIndex]); // display the first item
  })
  .catch(error => console.error(error));
const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', displayNextItem);
const prevButton = document.getElementById('prev-button');
prevButton.addEventListener('click', displayPrevItem);
function displayItem(item) {
  const container = document.getElementById('containerrr');
  container.innerHTML = ''; // clear the container
  const card = document.createElement('div');
  card.classList.add('card');
  const img = document.createElement('img');
  img.src = item.poster;
  img.alt = item.title;
  card.appendChild(img);
  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  const title = document.createElement('h2');
  title.textContent = item.title;
  cardContent.appendChild(title);
  const description = document.createElement('p');
  description.textContent = item.description;
  cardContent.appendChild(description);
  // Add button to display form
  const formButton = document.createElement('button');
  formButton.textContent = 'Contact Us';
  formButton.addEventListener('click', () => {
    displayForm(item);
  });
  cardContent.appendChild(formButton);
  card.appendChild(cardContent);
  container.appendChild(card);
}
function displayForm(item) {
  const container = document.getElementById('containerrr');
  container.innerHTML = '';

   
  
  const form = document.createElement('form');
  const NameLabel = document.createElement('label');
  NameLabel.textContent = 'Full Name:';
  const NameInput = document.createElement('input');
  NameInput.type = 'text';
  NameLabel.appendChild(NameInput);
  form.appendChild(NameLabel);

  const timeLabel = document.createElement('label');
  timeLabel.textContent = 'Arrival Time:';
  const timeInput = document.createElement('input');
  timeInput.type = 'number';
  timeLabel.appendChild(timeInput);
  form.appendChild(timeLabel);

  const phoneLabel = document.createElement('label');
  phoneLabel.textContent = 'Phone Number:';
  const phoneInput = document.createElement('input');
  phoneInput.type = 'tel';
  phoneLabel.appendChild(phoneInput);
  form.appendChild(phoneLabel);

  const tableLabel = document.createElement('label');
  tableLabel.textContent = 'Table NO:';
  const tableInput = document.createElement('input');
  tableInput.type = 'number';
  tableLabel.appendChild(tableInput);
  form.appendChild(tableLabel);

  const depositLabel = document.createElement('label');
  depositLabel.textContent = 'Make a Deposit:';
  const depositInput = document.createElement('input');
  depositInput.type = 'number';
  depositLabel.appendChild(depositInput);
  form.appendChild(depositLabel);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    // handle form submission here
    console.log(`Submitted form for item "${item.title}"`);
    container.innerHTML = '<p>THANK YOU SO MUCH AND WELCOME AGAIN</p>';
  });
  form.appendChild(submitButton);
  container.appendChild(form);
}

