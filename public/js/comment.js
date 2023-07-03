const newComment = () => {
    let form = document.querySelector('.comment-container');
    form.classList.remove("hidden");
    document.querySelector('#addComments').classList.add('hidden')
  }
  
  const newFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#post-comment').value.trim();
    const date = new Date().toDateString();
   
  
    if (content && date) {
      const response = await fetch(`/api/comments/${id}`, {
        method: 'POST',
        body: JSON.stringify({ content, date }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document.querySelector('.new-comment-form').addEventListener('submit', newFormHandler);
  
  document.querySelector('#addComments').addEventListener('click', newComment);
  document.querySelector('#cancel-form').addEventListener('click', () => {
    let form = document.querySelector('.comment-container');
    form.classList.add("hidden");
    document.querySelector('#addComments').classList.remove('hidden')
  });