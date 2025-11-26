$(document).ready(function() {
  const API_PORT = 3003;
  
  function loadTasks(filter = 'all') {
    let url = `http://localhost:${API_PORT}/tasks`;
    
    if (filter !== 'all') {
      if (filter === 'completed') {
        url += '?completed=true';
      } else {
        url += `?priority=${filter}`;
      }
    }
    
    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        $('#loading').hide();
        displayTasks(data);
      },
      error: function() {
        $('#loading').hide();
        alert('Error loading tasks. Make sure JSON server is running on port ' + API_PORT);
      }
    });
  }

  function displayTasks(tasks) {
    $('#tasks').empty();
    
    if (tasks.length === 0) {
      $('#noTasks').show();
      return;
    }
    
    $('#noTasks').hide();
    
    tasks.forEach(task => {
      const completedClass = task.completed ? 'completed' : '';
      const checked = task.completed ? 'checked' : '';
      
      const taskCard = `
        <div class="task ${task.priority} ${completedClass}">
          <input type="checkbox" class="task-checkbox" data-id="${task.id}" ${checked}>
          <div class="task-content">
            <div class="task-title">${task.title}</div>
            <span class="task-priority ${task.priority}">${task.priority} priority</span>
          </div>
        </div>
      `;
      
      $('#tasks').append(taskCard);
    });
  }

  $(document).on('change', '.task-checkbox', function() {
    const taskId = $(this).data('id');
    const completed = $(this).is(':checked');
    
    $.ajax({
      url: `http://localhost:${API_PORT}/tasks/${taskId}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify({ completed: completed }),
      success: function() {
        const currentFilter = $('#filterSelect').val();
        loadTasks(currentFilter);
      },
      error: function() {
        alert('Error updating task');
      }
    });
  });

  $('#filterSelect').change(function() {
    const filter = $(this).val();
    $('#loading').show();
    $('#tasks').empty();
    loadTasks(filter);
  });

  loadTasks();
});