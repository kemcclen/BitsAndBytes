
window.addEventListener("load", (event) => {
  
//write a new blogpost
const newBlogpost = async (event) => {
  event.preventDefault();

  const blog_title = document.querySelector('#blog_title').value.trim();
  const blog_post = document.querySelector('#blog_post').value.trim();
  const date = new Date().toDateString();

  if (blog_title && blog_post && date) {
    const response = await fetch(`/api/blogpost`, {
      method: 'POST',
      body: JSON.stringify({ blog_title, blog_post, date }),
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

//delete blogposts
const delButtonHandler = async (event) => {
  console.log('pressed');
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



//write a new post open form 
function newPost() {
  let form = document.querySelector('.form-container');
  let postList = document.querySelector('.blogpost-list');
  let postBtn = document.querySelector('#newBlogpostBtn');

  postList.classList.add('hidden');
  form.classList.remove('hidden');
  postBtn.classList.add('hidden');
}

const cancelPost = () => {
  let form = document.querySelector('.form-container');
  let postList = document.querySelector('.blogpost-list');
  let postBtn = document.querySelector('#newBlogpostBtn');

  postList.classList.remove('hidden');
  form.classList.add('hidden');
  postBtn.classList.remove('hidden')
}

document
  .querySelector('.new-blogpost-form')
  .addEventListener('submit', newBlogpost);

  
document
  .querySelectorAll('#deleteButtonId').forEach(item => item.addEventListener('click', delButtonHandler));

  // To create new post
  document.querySelector('#newBlogpostBtn').addEventListener('click', newPost);

  document.querySelectorAll('.cancelBtn').forEach (item => item.addEventListener('click', cancelPost));


});