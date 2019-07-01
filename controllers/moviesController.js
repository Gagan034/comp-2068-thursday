const Movie = require('../models/movie');

exports.index = (req, res) => {
    Movie.find()
        .then(movies => {
            res.render('movies/index', {
                movies: movies,
                title: 'Archive'
            });
        })
        .catch(err => {
            req.flash('error', `ERROR: ${err}`);
            res.redirect('/');
        });
};

exports.drafts = (req, res) => {
    Movie.find().draft()
        .then(movies => {
            res.render('movies/index', {
                movies: movies,
                title: 'Drafts'
            });
        })
        .catch(err => {
            req.flash('error', `ERROR: ${err}`);
            res.redirect('/');
        });
};

exports.published = (req, res) => {
    Movie.find().published()
        .then(movies => {
            res.render('movies/index', {
                movies: movies,
                title: 'Published'
            });
        })
        .catch(err => {
            req.flash('error', `ERROR: ${err}`);
            res.redirect('/');
        });
};

exports.show = (req, res) => {
    Movie.findById(req.params.id)
    .then(movie => {
        res.render('movies/show', {
            movie: movie,
            title: movie.title
        })
    })
    .catch(err => {
        req.flash('error', `ERROR: ${err}`);
        res.redirect('/');
    });
};

exports.new = (req, res) => {
    res.render('movies/new', {
        title: 'My New Movie'
    });
};

exports.edit = (req, res) => {
    Movie.findById(req.params.id)
    .then(movie => {
        res.render('movies/edit', {
            movie: movie,
            title: movie.title
        })
    })
    .catch(err => {
        req.flash('error', `ERROR: ${err}`);
        res.redirect('/');
    });
};

exports.create = (req, res) => {
    Movie.create({
        title: req.body.movie.title,
        content: req.body.movie.content,
        status: req.body.movie.status
    })
    .then(() => {
        req.flash('success', 'New Movie was created successfully.');
        res.redirect('/movies');
    })
    .catch(err => {
        req.flash('error', `ERROR: ${err}`);
        res.redirect('/blogs/new');
    });
};

exports.update = (req, res) => {
    Movie.updateOne({
        _id: req.body.id
    }, req.body.movie, {
        runValidators: true
    })
    .then(() => {
        req.flash('success', 'New Movie was created successfully.');
        res.redirect(`/movies/${req.body.id}`);
    })
    .catch(err => {
        req.flash('error', `ERROR: ${err}`);
        res.redirect(`/movies/${req.body.id}/edit`);
    });
};

exports.destroy = (req, res) => {
    Movie.deleteOne({
        _id: req.body.id
    })
    .then(() => {
        req.flash('success', 'New Movie was created successfully.');
        res.redirect('/movies');
    })
    .catch(err => {
        req.flash('error', `ERROR: ${err}`);
        res.redirect(`/movies`);
    });
};

// To fill in later
exports.drafts = (req, res) => {};

exports.published = (req, res) => {};