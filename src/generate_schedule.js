#!/usr/bin/env node
var moment = require('moment-timezone');
var fs = require('fs');

slots_day1 = require('./data/slots.day1.json');
slots_day2 = require('./data/slots.day2.json');

function hashify(items) { 
  var hash = {};
  for(var item in items) {
    item = items[item];
    hash[item.id] = item;
  }
  return hash;
}

index = require('./data/index.json');
speakers = hashify(index.speakers);
breaks = hashify(index.breaks);
workshops = hashify(index.workshops);

function Day(date, slots, speakers, workshops, breaks) {
  this.date = moment(date).tz('Asia/Shanghai');
  this.start_time = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 0, 0, 0);
  this.slots = slots;
  this.speakers = speakers;
  //this.assignments = assignments;
  this.workshops = workshops;
  this.breaks = breaks;
  
  this.getSchedule = function() {
    var schedule = {};

    // setup date
    schedule.date = {};
    
    this.date.lang('en-us');
    schedule.date.en = this.date.format("L");
    
    this.date.lang('zh-cn');
    schedule.date.zh = this.date.format("L");

    // segments
    schedule.segments = [];
    
    var nowish = this.start_time;
    
    for(var slot_index in this.slots) {
      slot = this.slots[slot_index];
      
      var segment = {};
      schedule.segments.push(segment);
      
      if (slot.start_time){
        console.log('found start time: ' + slot.start_time);
        segment.start_time = moment(slot.start_time).tz('Asia/Shanghai');
      } else {
        segment.start_time = new Date(+nowish);
        nowish.setTime(nowish.getTime() + (slot.duration * 60000));
      }

      // setup time
      segment.time = {};
      
      var segment_time = moment(segment.start_time);
      
      segment_time.lang('en-us');
      segment.time.en = segment_time.format("LT");
      
      segment_time.lang('zh-cn');
      segment.time.zh = segment_time.format("LT");

      segment.details = {};
     
      // segment details
      if (slot['break']) {
        segment['type'] = 'break';
        segment.details = this.breaks[slot['break']];
      }            
      else if (slot.talk) {
        segment['type'] = 'talk';
        segment.details = this.speakers[slot.talk];
        segment.details['url'] = "https://github.com/" + segment.details['id']
      }
      else if (slot.workshop) {
        segment['type'] = 'workshop';
        segment.details = this.workshops[slot.workshop];
      }
    }
    return schedule;
  }
}

var days = [
  new Day(
    new Date("2013-11-09T09:00:00+0800"),
    slots_day1,
    speakers,
    workshops,
    breaks
  ),
  new Day(
    new Date("2013-11-10T09:00:00+0800"),
    slots_day2,
    speakers,
    workshops,
    breaks
  )
];

var schedule = [];

for (var i in days) {
  day = days[i];
  schedule.push(day.getSchedule());
}

schedule = { "schedule": schedule };

fs.writeFile("./data/schedule.json", JSON.stringify(schedule, null, 2), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Wrote new schedule.json...");
    }
});