$(document).ready(function() {
  const API_PORT = 3005;
  
  function loadTimetable(day) {
    $('#loading').show();
    $('#timetable').empty();
    
    fetch(`http://localhost:${API_PORT}/timetable?day=${day}`)
      .then(response => response.json())
      .then(data => {
        $('#loading').hide();
        displayTimetable(data);
      })
      .catch(error => {
        $('#loading').hide();
        alert('Error loading timetable. Make sure JSON server is running on port ' + API_PORT);
        console.error('Error:', error);
      });
  }

  function displayTimetable(classes) {
    $('#timetable').empty();
    
    if (classes.length === 0) {
      $('#timetable').html('<div class="no-classes">No classes today.</div>');
      return;
    }
    
    classes.forEach(classItem => {
      const classCard = `
        <div class="class">
          <div class="class-time">🕐 ${classItem.time}</div>
          <div class="class-subject">${classItem.subject}</div>
          <div class="class-faculty">👨‍🏫 ${classItem.faculty}</div>
        </div>
      `;
      
      $('#timetable').append(classCard);
    });
  }

  $('#daySelect').change(function() {
    const selectedDay = $(this).val();
    loadTimetable(selectedDay);
  });

  loadTimetable('Monday');
});