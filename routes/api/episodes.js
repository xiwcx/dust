var express = require('express'),
    router = express.Router(),
    mongoskin = require('mongoskin'),
    _ = require('lodash'),
    db = mongoskin.db('mongodb://localhost:27017/dust', {safe:true});

// The base episode route allows for collections of episodes to be returned
// Both a `limit` and `skip` parameter can be specified. If not parameters
// are specified the entire collection will be returned

router.route( '/' )
  .get( function(req, res) {
    db.collection( "episodes" )
      .find( {}, { _id: 0 } )
      .sort( { num: -1 } )
      .limit( parseInt( req.query.limit ? req.query.limit : 0, 10 ) )
      .skip( parseInt( req.query.skip ? req.query.skip : 0, 10 ) )
      .toArray(function(e, episodes) {
        res.json( episodes );
      });
  });

// The ID route allows for single episodes to be returned

router.route('/:id')
  .get( function(req, res){
    var episodeNum = parseInt( req.params.id, 10 );

    if ( _.isNumber( episodeNum ) ) {
      db.collection( "episodes" )
        .findOne( { num: episodeNum }, function(e, episode) {
          if( !episode ) {
            res.status( 404 ).json( 'Episode does not exist' );
          } else {
            res.json( episode );
          }
        });
    } else {
      res.status( 404 ).json( 'Not a number' );
    }
  });

module.exports = router;
