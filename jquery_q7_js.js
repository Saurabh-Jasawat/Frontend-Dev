$(document).ready(function() {
  $('#searchInput').keyup(function() {
    const searchText = $(this).val().toLowerCase();
    let matchCount = 0;

    $('.course').each(function() {
      const courseTitle = $(this).data('title').toLowerCase();
      const titleElement = $(this).find('.course-title');
      const originalTitle = $(this).data('title');

      if (courseTitle.includes(searchText) && searchText !== '') {
        $(this).removeClass('hidden').show();
        matchCount++;

        const regex = new RegExp('(' + searchText + ')', 'gi');
        const highlightedTitle = originalTitle.replace(regex, '<span class="highlight">$1</span>');
        titleElement.html(highlightedTitle);
      } else if (searchText === '') {
        $(this).removeClass('hidden').show();
        matchCount++;
        titleElement.text(originalTitle);
      } else {
        $(this).addClass('hidden').hide();
        titleElement.text(originalTitle);
      }
    });

    $('#matchCount').text(matchCount);

    if (matchCount === 0) {
      $('#noResults').fadeIn();
    } else {
      $('#noResults').fadeOut();
    }
  });

  $('#clearBtn').click(function() {
    $('#searchInput').val('');
    $('.course').removeClass('hidden').show();
    $('.course-title').each(function() {
      const course = $(this).closest('.course');
      $(this).text(course.data('title'));
    });
    $('#matchCount').text($('.course').length);
    $('#noResults').fadeOut();
  });
});