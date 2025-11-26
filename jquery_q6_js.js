$(document).ready(function() {
  function showMessage(message) {
    $('#successMsg').text(message).fadeIn().delay(3000).fadeOut();
  }

  $(document).on('click', '[data-action="toggle"]', function() {
    const item = $(this).closest('.subscription-item');
    const statusText = item.find('.sub-status');
    const button = $(this);

    if (item.hasClass('enabled')) {
      item.removeClass('enabled').addClass('disabled');
      statusText.text('Status: Disabled');
      button.text('Subscribe');
      button.removeClass('btn-unsubscribe').addClass('btn-subscribe');
      showMessage('Notifications disabled successfully!');
    } else {
      item.removeClass('disabled').addClass('enabled');
      statusText.text('Status: Enabled');
      button.text('Unsubscribe');
      button.removeClass('btn-subscribe').addClass('btn-unsubscribe');
      showMessage('Notifications enabled successfully!');
    }
  });

  $(document).on('click', '[data-action="remove"]', function() {
    const item = $(this).closest('.subscription-item');
    const topicName = item.find('.sub-name').text();
    
    if (confirm('Are you sure you want to remove this subscription?')) {
      item.fadeOut(300, function() {
        $(this).remove();
      });
      showMessage(topicName + ' removed from subscriptions!');
    }
  });

  $('#addTopicBtn').click(function() {
    const topicName = $('#topicName').val().trim();
    
    if (topicName === '') {
      alert('Please enter a topic name!');
      return;
    }

    const newTopic = `
      <div class="subscription-item enabled" data-topic="${topicName.toLowerCase().replace(/\s+/g, '-')}">
        <div class="sub-info">
          <div class="sub-name">${topicName}</div>
          <div class="sub-status">Status: Enabled</div>
        </div>
        <div class="sub-actions">
          <button class="btn btn-unsubscribe" data-action="toggle">Unsubscribe</button>
          <button class="btn btn-remove" data-action="remove">Remove</button>
        </div>
      </div>
    `;

    $('.subscriptions').append(newTopic);
    $('.subscription-item:last').hide().fadeIn(500);
    
    $('#topicName').val('');
    showMessage('New topic "' + topicName + '" added successfully!');
  });
});