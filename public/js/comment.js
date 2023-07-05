const newComment = async (event) => {
  event.preventDefault();
  
  const blog_comment = document.querySelector('#blog_comment').value.trim();


  if (blog_comment) {
    const response = await fetch(`/api/blogpost`, {
      method: 'POST',
      body: JSON.stringify({ blog_comment }),
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

 
const delButtonHandler = async (event) => {
  if (event.target.parentNode.hasAttribute('data-id')) {
    const id = event.target.parentNode.getAttribute('data-id');

    const response = await fetch(`/api/blogpost/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

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

const cancelCom = () => {
  let form = document.querySelector('.form-container');
  let postList = document.querySelector('.comment-list');
  let postBtn = document.querySelector('#newBlogpostBtn');

  postList.classList.remove('hidden');
  form.classList.add("hidden");
  postBtn.classList.remove('hidden')
}

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newComment);

document
  .querySelector('.comment-list')
  .addEventListener('click', delButtonHandler);

  document.querySelector('#newCommentBtn').addEventListener('click', newCom);

  document.querySelector('#cancel-comment').addEventListener('click', cancelCom);
   

