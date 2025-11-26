$(document).ready(function() {
  const API_PORT = 3002;
  
  function loadEmployees() {
    $.ajax({
      url: `http://localhost:${API_PORT}/employees`,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        $('#loading').hide();
        displayEmployees(data);
      },
      error: function() {
        $('#loading').hide();
        $('#error').text('Error loading employees. Make sure JSON server is running on port ' + API_PORT).show();
      }
    });
  }

  function displayEmployees(employees) {
    $('#employees').empty();
    
    employees.forEach(employee => {
      const statusClass = employee.status === 'active' ? 'active' : 'inactive';
      const buttonText = employee.status === 'active' ? 'Set Inactive' : 'Set Active';
      
      const employeeCard = `
        <div class="employee">
          <div class="employee-header">
            <span class="employee-id">ID: ${employee.id}</span>
            <span class="status-badge ${statusClass}">${employee.status}</span>
          </div>
          <div class="employee-name">${employee.name}</div>
          <div class="employee-info">Role: ${employee.role || 'Employee'}</div>
          <button class="toggle-btn ${statusClass}" data-id="${employee.id}" data-status="${employee.status}">
            ${buttonText}
          </button>
        </div>
      `;
      
      $('#employees').append(employeeCard);
    });
  }

  $(document).on('click', '.toggle-btn', function() {
    const employeeId = $(this).data('id');
    const currentStatus = $(this).data('status');
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    
    $.ajax({
      url: `http://localhost:${API_PORT}/employees/${employeeId}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify({ status: newStatus }),
      success: function() {
        loadEmployees();
      },
      error: function(xhr) {
        if (xhr.status === 0) {
          alert('Cannot connect to server. Make sure JSON server is running on port ' + API_PORT);
        } else {
          alert('Error updating employee status');
        }
      }
    });
  });

  loadEmployees();
});