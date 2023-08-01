const newComment = async (event) => {
  event.preventDefault();
  
  //create comment on specific blogpost
  const blog_comment = document.querySelector('#blog_comment').value.trim();
  const date = new Date().toDateString();
  console.log(window.location.href);
  const currentURL = window.location.href;
  const regExPattern = /(?<==)([^&]+)/;
  const blogpostId = currentURL.match(regExPattern)[1];
  console.log(blogpostId);

  if (blog_comment && date ) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ blog_comment, blogpostId, date }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      console.log(response);
      alert('Failed to create project');
    }
  }
};

 //delete comment
const delButtonHandler = async (event) => {
  if (event.target.parentNode.hasAttribute('data-id')) {
    const id = event.target.parentNode.getAttribute('data-id');

    const response = await fetch(`/api/comment/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

//write a new comment
function newCom() {
  let form = document.querySelector('.comment-container');
  let postList = document.querySelector('.comment-list');
  let comBtn = document.querySelector('#newCommentBtn');
  let blogpostList = document.querySelector('.blogpost-container');

  blogpostList.classList.add('hidden');
  postList.classList.add('hidden');
  form.classList.remove('hidden');
  comBtn.classList.add('hidden');
}

//cancel comment form
const cancelCom = () => {
  let form = document.querySelector('.comment-container');
  let postList = document.querySelector('.comment-list');
  let postBtn = document.querySelector('#newCommentBtn');
  let blogpostList = document.querySelector('.blogpost-container');

  form.classList.add('hidden');
  postList.classList.remove('hidden');
  blogpostList.classList.remove('hidden');
  postBtn.classList.remove('hidden');
}

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newComment);

document
  .querySelector('.comment-list')
  .addEventListener('click', delButtonHandler);

  //create new comment 
  document.querySelector('#newCommentBtn').addEventListener('click', newCom);

  document.querySelector('#cancel-comment').addEventListener('click', cancelCom);
   

