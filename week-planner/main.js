var data = [
  { day: 'sunday', entries: [] },
  { day: 'monday', entries: [] },
  { day: 'tuesday', entries: [] },
  { day: 'wednesday', entries: [] },
  { day: 'thursday', entries: [] },
  { day: 'friday', entries: [] },
  { day: 'saturday', entries: [] }
];

var background1 = document.querySelector('.background.one');
var background2 = document.querySelector('.background.two');
var daybutton = document.querySelectorAll('.day-button');
var $tablerow = document.querySelectorAll('.table-row');
var $header = document.querySelector('.header');

var day = null;
var dayIndex = null;

document.addEventListener('click', function (event) {
  if (event.target.className === 'add-entry') {
    background1.classList.remove('hidden');
  } else if (event.target.className === 'day-button') {
    day = event.target.textContent;
    for (var i = 0; i < daybutton.length; i++) {
      if (event.target === daybutton[i]) {
        dayIndex = i;
        $header.textContent = 'Scheduled for day of ' + event.target.textContent;
        display(i);
        break;
      }
    }
  } else if (event.target.className === 'update') {
    background1.classList.remove('hidden');
    var $parent = event.target.closest('tr');
    if (day === null) {
      day = 'Monday';
      dayIndex = 1;
    }
    form.elements.day.value = day;
    form.elements.time.value = $parent.children[0].textContent;
    form.elements.description.value = $parent.children[1].textContent;
    for (var n = 0; n < $tablerow.length; n++) {
      if ($parent === $tablerow[n]) {
        data[dayIndex].entries.splice(n, 1);
      }
    }
  } else if (event.target.className === 'delete') {
    background2.classList.remove('hidden');
  } else if (event.target.className === 'yes') {
    background2.classList.add('hidden');
    if (dayIndex === null) {
      dayIndex = 1;
    }
    data[dayIndex].entries.splice(n, 1);
    display(dayIndex);
  } else if (event.target.className === 'no') {
    background2.classList.add('hidden');
  }
});

var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  var dayValue = form.elements.day.value;

  for (var i = 0; i < data.length; i++) {
    if (data[i].day === dayValue.toLowerCase()) {
      data[i].entries.push({
        time: form.elements.time.value,
        description: form.elements.description.value
      });
      break;
    }
  }
  background1.classList.add('hidden');
  form.reset();
  $header.textContent = 'Scheduled for day of Monday';
  display(1);
});

function display(dayIndex) {
  for (var l = 0; l < $tablerow.length; l++) {
    $tablerow[l].children[0].textContent = '';
    $tablerow[l].children[1].textContent = '';
    $tablerow[l].children[2].classList.add('hidden');
    $tablerow[l].children[3].classList.add('hidden');
  }
  for (var k = 0; k < data[dayIndex].entries.length; k++) {
    $tablerow[k].children[0].textContent = data[dayIndex].entries[k].time;
    $tablerow[k].children[1].textContent = data[dayIndex].entries[k].description;
    $tablerow[k].children[2].classList.remove('hidden');
    $tablerow[k].children[3].classList.remove('hidden');
  }
}
