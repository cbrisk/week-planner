var data = [
  { sunday: [] },
  { monday: [] },
  { tuesday: [] },
  { wednesday: [] },
  { thursday: [] },
  { friday: [] },
  { saturday: [] }
];

var modal = document.querySelector('.add-entry');
var background = document.querySelector('.background');
var daybutton = document.querySelectorAll('.day-button');

document.addEventListener('click', function (event) {
  console.log(event.target);
  if (event.target.className === 'add-entry') {
    background.classList.remove('hidden');
  }
  if (event.target.className === 'day-button') {
    for (var i = 0; i < daybutton.length; i++) {
      if (event.target === daybutton[i]) {
        console.log(daybutton[i].textContent);
      }
    }
  }
});

var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  var day = form.elements.day.value;
  data.push(day).push({
    time: form.elements.time.value,
    description: form.elements.description.value
  });
  background.classList.add('hidden');
  form.reset();
});
