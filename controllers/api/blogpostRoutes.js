const router = require('express').Router();
const { Blogpost } = require('../../models');
const withAuth = require('../../utils/auth');

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
    // res.status(200).json(searchResult);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

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
