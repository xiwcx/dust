# Dust Audio Zine API

[![Build Status][travis-image]][travis-url]

## Create Test Data

Enter mongo CLI

```bash
$ mongo
```

From mongo CLI

```mongo
> use dust
> for(var i = 1; i<= 50; i++) { db.episodes.insert( { num: i, description: "this is a podcast", title: "a title"} )}
> db.episodes.find()
```

[travis-image]: https://img.shields.io/travis/xiwcx/dust.svg?branch=master&style=flat-square
[travis-url]: https://travis-ci.org/xiwcx/dust
