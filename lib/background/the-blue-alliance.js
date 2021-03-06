'use strict';

var request = require('request'),
    API_V2_URI = 'http://www.thebluealliance.com/api/v2/',
    HEADER = 'kevin-ji:first-look:1',
    tba = {};

var tbaRequest = function(url, callback) {
  var options = {
    url: API_V2_URI + url,
    headers: {
      'X-TBA-App-Id': HEADER
    },
    json: true
  };

  request(options, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      callback(body);
    }
  });
};

tba.team = function(teamNum, year, callback) {
  var teamKey = 'frc' + teamNum,
      url = 'team/' + teamKey + '/' + year;

  tbaRequest(url, callback);
};

tba.events = function(year, callback) {
  var url = 'events/' + year;

  tbaRequest(url, callback);
};

tba.event = function(eventCode, year, callback) {
  var eventKey = year + eventCode,
      url = 'event/' + eventKey;

  tbaRequest(url, callback);
};

tba.event.teams = function(eventCode, year, callback) {
  var eventKey = year + eventCode,
      url = 'event/' + eventKey + '/teams';

  tbaRequest(url, callback);
};

tba.event.matches = function(eventCode, year, callback) {
  var eventKey = year + eventCode,
      url = 'event/' + eventKey + '/matches';

  tbaRequest(url, callback);
};

tba.event.stats = function(eventCode, year, callback) {
  var eventKey = year + eventCode,
      url = 'event/' + eventKey + '/stats';

  tbaRequest(url, callback);
};

tba.event.rankings = function(eventCode, year, callback) {
  var eventKey = year + eventCode,
      url = 'event/' + eventKey + '/rankings';

  tbaRequest(url, callback);
};

tba.event.awards = function(eventCode, year, callback) {
  var eventKey = year + eventCode,
      url = 'event/' + eventKey + '/awards';

  tbaRequest(url, callback);
};

exports = module.exports = tba;
