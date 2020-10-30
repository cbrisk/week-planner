var data = {
  sunday: [],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: []
}

var modal = document.querySelector('.add-entry');
var background = document.querySelector('.background');

document.addEventListener('click', function (event) {
  if (event.target.className === 'add-entry') {
    background.classList.remove('hidden');
  }
});

var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  form.elements.
})
