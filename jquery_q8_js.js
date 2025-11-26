$(document).ready(function() {
  function createPost(title, content, tags, featured = false) {
    const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    const tagsHTML = tagsArray.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    const postHTML = `
      <div class="post ${featured ? 'featured' : ''}">
        <div class="post-title">${title}</div>
        <div class="post-content">${content}</div>
        <div class="post-tags">${tagsHTML}</div>
      </div>
    `;
    
    return postHTML;
  }

  function clearForm() {
    $('#postTitle').val('');
    $('#postContent').val('');
    $('#postTags').val('');
  }

  $('#addPostBtn').click(function() {
    const title = $('#postTitle').val().trim();
    const content = $('#postContent').val().trim();
    const tags = $('#postTags').val().trim();

    if (title === '' || content === '') {
      alert('Please fill in title and content!');
      return;
    }

    const newPost = createPost(title, content, tags);
    $('#postsContainer').append(newPost);
    
    clearForm();
    
    $('#postsContainer .post:last').hide().fadeIn(500);
  });

  $('#prependPostBtn').click(function() {
    const title = $('#postTitle').val().trim();
    const content = $('#postContent').val().trim();
    const tags = $('#postTags').val().trim();

    if (title === '' || content === '') {
      alert('Please fill in title and content!');
      return;
    }

    const newPost = createPost(title, content, tags, true);
    $('#postsContainer').prepend(newPost);
    
    clearForm();
    
    $('#postsContainer .post:first').hide().slideDown(500);
  });

  $('#removeLastBtn').click(function() {
    if ($('#postsContainer .post').length === 0) {
      alert('No posts to remove!');
      return;
    }

    $('#postsContainer .post:last').fadeOut(300, function() {
      $(this).remove();
    });
  });
});