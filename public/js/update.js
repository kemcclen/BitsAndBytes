const newBlogpost = async (event) => {
    event.preventDefault();
  
    const blog_title = document.querySelector('#blog_title').value.trim();
    const blog_post = document.querySelector('#blog_post').value.trim();
    const date = new Date().toDateString();

    if (blog_title && blog_post) {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ blog_title, blog_post, date }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          console.log(response);
          alert('Failed to update project');
        }
      }
    };
    
    const updateButtonHandler = async (event) => {
        if (event.target.hasAttribute('data-id')) {
          const id = event.target.getAttribute('data-id');
        
          const blog_title = document.querySelector('#blog_title').value.trim();
          const blog_post = document.querySelector('#blog_post').value.trim();
      
          if (blog_title && blog_post) {
            const response = await fetch(`/api/posts/${id}`, {
              method: 'PUT',
              body: JSON.stringify({ blog_title, blog_post }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
      
            if (response.ok) {
              document.location.replace('/profile');
            } else {
              console.log(response);
              alert('Failed to update project');
            }
          }
        }
      };
      
      document.querySelector('.update-form').addEventListener('submit', updateButtonHandler);
      