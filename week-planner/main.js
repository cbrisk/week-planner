var data = [
  { day: 'sunday', entries: [] },
  { day: 'monday', entries: [] },
  { day: 'tuesday', entries: [] },
  { day: 'wednesday', entries: [] },
  { day: 'thursday', entries: [] },
  { day: 'friday', entries: [] },
  { day: 'saturday', entries: [] }
];

var background = document.querySelector('.background');
var daybutton = document.querySelectorAll('.day-button');
var $tablerow = document.querySelectorAll('.table-row');
var $header = document.querySelector('.header');

/*var $update = document.createElement('td');
$update.setAttribute('class', 'narrow');
var $updateButton = document.createElement('button');
$updateButton.setAttribute('class', 'update');
$updateButton.textContent = 'Update';
$update.appendChild($updateButton);

var $delete = document.createElement('td');
$delete.setAttribute('class', 'narrow');
var $deleteButton = document.createElement('button');
$deleteButton.setAttribute('class', 'delete');
$deleteButton.textContent = 'Delete';
$delete.appendChild($deleteButton);*/

var $day = null;
document.addEventListener('click', function (event) {
  if (event.target.className === 'add-entry') {
    background.classList.remove('hidden');
  } else if (event.target.className === 'day-button') {
    $day = event.target.textContent;
    for (var i = 0; i < daybutton.length; i++) {
      if (event.target === daybutton[i]) {
        $header.textContent = 'Scheduled for day of ' + event.target.textContent;
        for (var l = 0; l < $tablerow.length; l++) {
          $tablerow[l].children[0].textContent = '';
          $tablerow[l].children[1].textContent = '';
          $tablerow[l].children[2].classList.add('hidden');
          $tablerow[l].children[3].classList.add('hidden');
        }
        for (var j = 0; j < data[i].entries.length; j++) {
          $tablerow[j].children[0].textContent = data[i].entries[j].time;
          $tablerow[j].children[1].textContent = data[i].entries[j].description;
          $tablerow[j].children[2].classList.remove('hidden');
          $tablerow[j].children[3].classList.remove('hidden');
        }
      }
    }
  } else if (event.target.className === 'update') {
    background.classList.remove('hidden');
    var $parent = event.target.closest('tr');
    form.elements.day.value = $day;
    form.elements.time.value = $parent.children[0].textContent;
    form.elements.description.value = $parent.children[1].textContent;
    $parent.remove();
  } else if (event.target.className === 'delete') {

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
      });
    }
  }
  background.classList.add('hidden');
  form.reset();
  $header.textContent = 'Scheduled for day of Monday';
  for (var l = 0; l < $tablerow.length; l++) {
    $tablerow[l].children[0].textContent = '';
    $tablerow[l].children[1].textContent = '';
    $tablerow[l].children[2].classList.add('hidden');
    $tablerow[l].children[3].classList.add('hidden');
  }
  for (var k = 0; k < data[1].entries.length; k++) {
    $tablerow[k].children[0].textContent = data[1].entries[k].time;
    $tablerow[k].children[1].textContent = data[1].entries[k].description;
    $tablerow[k].children[2].classList.remove('hidden');
    $tablerow[k].children[3].classList.remove('hidden');
  }
});
