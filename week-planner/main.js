var data = [
  { day: 'sunday', entries: [] },
  { day: 'monday', entries: [] },
  { day: 'tuesday', entries: [] },
  { day: 'wednesday', entries: [] },
  { day: 'thursday', entries: [] },
  { day: 'friday', entries: [] },
  { day: 'saturday', entries: [] },
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
      console.log(i)
      if (event.target === daybutton[i]) {

      }
    }
  }
});

var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  var day = form.elements.day.value;

  for (var i = 0; i < data.length; i++) {
    if (data[i].day === day.toLowerCase()) {
      data[i].entries.push({
        time: form.elements.time.value,
        description: form.elements.description.value
      })
    }
  }

  background.classList.add('hidden');
  form.reset();
});
