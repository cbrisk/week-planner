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
var $tablerow = document.querySelectorAll('.table-row');

document.addEventListener('click', function (event) {
  console.log(event.target);
  if (event.target.className === 'add-entry') {
    background.classList.remove('hidden');
  }
  if (event.target.className === 'day-button') {
    for (var i = 0; i < daybutton.length; i++) {
      if (event.target === daybutton[i]) {
        for (var j = 0; j < data[i].entries.length; j++) {
          $tablerow[j].firstChild.textContent = data[i].entries[j].time;
          $tablerow[j].lastChild.textContent = data[i].entries[j].description;
        }
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
