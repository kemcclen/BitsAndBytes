const router = require('express').Router();
const { Blogpost, User } = require('../../models');
const withAuth = require('../../utils/auth');

//create a new blogpost 
router.post('/', async (req, res) => {
  const { blog_title, blog_post } = req.body;
console.log(blog_title, blog_post);
const blogpostDate = new Date()
  try {
    const newBlogpost = await Blogpost.create({
      blog_title,
      blog_post,
      user_id: req.session.user_id,
      date: blogpostDate
    });
    
    console.log(newBlogpost);

    res.status(200).json(newBlogpost);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//??? update with a comment
router.put('/:id', async (req, res) => {
  try {
    const putPost = await Blogpost.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(putPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update post
router.put('/:id', async (req, res) => {
 
  try {
   

    const newBlogpost = await Blogpost.update(
      {
      blog_title: req.body.blog_title,
      blog_post: req.body.blog_post,
     
    },
     {
      where: {
        id: req.params.id
      }
    });
    
    res.status(200).json(newBlogpost);
  } catch (err) {
    res.status(500).json(err);
  }
});


//delete a post
router.delete('/:id', async (req, res) => {
  try {
    const blogpostData = await Blogpost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogpostData) {
      res.status(404).json({ message: 'No Blogpost found with this id!' });
      return;
    }

    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
