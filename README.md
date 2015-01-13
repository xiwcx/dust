# Dust Audio Zine API

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
