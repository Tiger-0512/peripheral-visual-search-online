/************************** 
 * Peripheral-Search Test *
 **************************/

import { PsychoJS } from './lib/core-2021.1.4.js';
import * as core from './lib/core-2021.1.4.js';
import { TrialHandler } from './lib/data-2021.1.4.js';
import { Scheduler } from './lib/util-2021.1.4.js';
import * as visual from './lib/visual-2021.1.4.js';
import * as sound from './lib/sound-2021.1.4.js';
import * as util from './lib/util-2021.1.4.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'pix',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'peripheral-search';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
import * as math from 'math';

import * as random from 'random';

import {Image} from 'PIL';

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(screen_scaleRoutineBegin());
flowScheduler.add(screen_scaleRoutineEachFrame());
flowScheduler.add(screen_scaleRoutineEnd());
flowScheduler.add(rectangleRoutineBegin());
flowScheduler.add(rectangleRoutineEachFrame());
flowScheduler.add(rectangleRoutineEnd());
flowScheduler.add(check_statusRoutineBegin());
flowScheduler.add(check_statusRoutineEachFrame());
flowScheduler.add(check_statusRoutineEnd());
flowScheduler.add(introductionRoutineBegin());
flowScheduler.add(introductionRoutineEachFrame());
flowScheduler.add(introductionRoutineEnd());
const TrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TrialsLoopBegin, TrialsLoopScheduler);
flowScheduler.add(TrialsLoopScheduler);
flowScheduler.add(TrialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var screen_scaleClock;
var event;
var thisExp;
var win;
var oldt;
var x_size;
var y_size;
var screen_height;
var x_scale;
var y_scale;
var dbase;
var unittext;
var vsize;
var text_top;
var text_bottom;
var ccimage;
var rectangleClock;
var text;
var polygon;
var key_resp;
var check_statusClock;
var text_2;
var key_resp_2;
var introductionClock;
var target_class;
var non_target_classes;
var eccentricity_level_1;
var eccentricity_level_2;
var eccentricity_level_3;
var VA;
var deg2norm;
var example_list;
var practice_list;
var experiment_list;
var stim_list;
var default_size;
var text_3;
var image;
var key_resp_4;
var trialClock;
var text_4;
var key_resp_3;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "screen_scale"
  screen_scaleClock = new util.Clock();
  event=psychoJS.eventManager;
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  
  
  oldt = 0;
  x_size = 8.56;
  y_size = 5.398;
  screen_height = 0;
  if ((win.units === "norm")) {
      x_scale = 0.05;
      y_scale = 0.1;
      dbase = 0.0001;
      unittext = " norm units";
      vsize = 2;
  } else {
      if ((win.units === "pix")) {
          x_scale = 60;
          y_scale = 40;
          dbase = 0.1;
          unittext = " pixels";
          vsize = win.size[1];
      } else {
          x_scale = 0.05;
          y_scale = 0.05;
          dbase = 0.0001;
          unittext = " height units";
          vsize = 1;
      }
  }
  
  text_top = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_top',
    text: 'Resize this image to match the size of a credit card\nUp arrow for taller\nDown arrow for shorter\nLeft arrow for narrower\nRight arrow for wider',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.6], height: 0.07,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_bottom = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_bottom',
    text: 'Press the space bar when done',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.6)], height: 0.07,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  ccimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ccimage', units : undefined, 
    image : 'bank-1300155_640.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [(x_size * x_scale), (y_size * y_scale)],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "rectangle"
  rectangleClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'This shape should be a 10 cm square.\nComponent size  (10*x_scale, 10*y_scale) set every repeat.\nPress space to continue',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.7)], height: 0.07,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  polygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "check_status"
  check_statusClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Fin',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.8, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "introduction"
  introductionClock = new util.Clock();
  target_class = "cat";
  non_target_classes = ["dog", "elephant", "tiger", "rabbit", "kangaroo", "sheep", "monkey", "lion", "bear", "fox", "pig", "otter"];
  
  eccentricity_level_1 = round(Math.sqrt(2), 2);
  eccentricity_level_2 = round((1 + math.sqrt(8)), 2);
  eccentricity_level_3 = round((((math.sqrt(2) + 4) + math.sqrt((Math.pow((math.sqrt(2) + 4), 2) - (4 * ((4 * math.sqrt(2)) - 27))))) / 2), 2);
  
  var VA;
  VA = Math.round(((360 / Math.PI) * Math.atan2(33.5, (2 * 57))));
  deg2norm = 2 / VA
  example_list = [{"size": 1, "rate": 2, "pos": 1, "ori": 2}];
  practice_list = [];
  experiment_list = [];
  for (var size = 1, _pj_a = 3; (size < _pj_a); size += 1) {
      for (var rate = 1, _pj_b = 3; (rate < _pj_b); rate += 1) {
          practice_list.append({"size": size, "rate": rate, "pos": random.randrange(3), "ori": random.randrange(4)});
          for (var pos = 0, _pj_c = 3; (pos < _pj_c); pos += 1) {
              for (var ori = 0, _pj_d = 4; (ori < _pj_d); ori += 1) {
                  experiment_list.append({"size": size, "rate": rate, "pos": pos, "ori": ori});
              }
          }
      }
  }
  
  function place_image(win, image_path, deg2norm, eccentricity, ori, size) {
      var stim;
      stim = new visual.ImageStim(win, {"image": Image.open(image_path), "pos": [((deg2norm * eccentricity) * math.cos(math.radians(ori))), ((deg2norm * eccentricity) * math.sin(math.radians(ori)))], "size": size});
      return stim;
  }
  stim_list = [];
  default_size = [deg2norm, deg2norm];
  for (var i = 0, _pj_a = 12; (i < _pj_a); i += 1) {
      img_path = (("html/resources/imagenet/" + non_target_classes[i]) + "/image01.png");
      if ((i < 4)) {
          stim_list.append(place_image(win, img_path, deg2norm, eccentricity_level_1, (((i % 4) * 90) + 45), default_size));
      } else {
          if (((4 <= i) && (i < 8))) {
              stim_list.append(place_image(win, img_path, deg2norm, eccentricity_level_2, ((i % 4) * 90), default_size));
          } else {
              stim_list.append(place_image(win, img_path, deg2norm, eccentricity_level_3, (((i % 4) * 90) + 45), default_size));
          }
      }
  }
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Open Sans',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'norm', 
    image : 'html/resources/imagenet/bear/image01.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var screen_scaleComponents;
function screen_scaleRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'screen_scale'-------
    t = 0;
    screen_scaleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    event.clearEvents();
    
    // keep track of which components have finished
    screen_scaleComponents = [];
    screen_scaleComponents.push(text_top);
    screen_scaleComponents.push(text_bottom);
    screen_scaleComponents.push(ccimage);
    
    for (const thisComponent of screen_scaleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var keys;
var dscale;
function screen_scaleRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'screen_scale'-------
    // get current time
    t = screen_scaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = event.getKeys();
    if (keys.length) {
        if (((t - oldt) < 0.5)) {
            dscale = (5 * dbase);
            oldt = t;
        } else {
            dscale = dbase;
            oldt = t;
        }
        if ((_pj.in_es6("space", keys) && (t > 1))) {
            continueRoutine = false;
        } else {
            if (_pj.in_es6("up", keys)) {
                y_scale = (round(((y_scale + dscale) * 10000)) / 10000);
            } else {
                if (_pj.in_es6("down", keys)) {
                    y_scale = (round(((y_scale - dscale) * 10000)) / 10000);
                } else {
                    if (_pj.in_es6("left", keys)) {
                        x_scale = (round(((x_scale - dscale) * 10000)) / 10000);
                    } else {
                        if (_pj.in_es6("right", keys)) {
                            x_scale = (round(((x_scale + dscale) * 10000)) / 10000);
                        }
                    }
                }
            }
        }
        if ((win.units === "pix")) {
            vsize = win.size[1];
        }
        screen_height = (round(((vsize * 10) / y_scale)) / 10);
        text_bottom.text = (((((((("X Scale = " + x_scale.toString()) + unittext) + " per cm, Y Scale = ") + y_scale.toString()) + unittext) + " per cm\nScreen height = ") + screen_height.toString()) + " cm\n\nPress the space bar when done");
        ccimage.size = [(x_size * x_scale), (y_size * y_scale)];
    }
    
    
    // *text_top* updates
    if (t >= 0.0 && text_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_top.tStart = t;  // (not accounting for frame time here)
      text_top.frameNStart = frameN;  // exact frame index
      
      text_top.setAutoDraw(true);
    }

    
    // *text_bottom* updates
    if (t >= 0.0 && text_bottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_bottom.tStart = t;  // (not accounting for frame time here)
      text_bottom.frameNStart = frameN;  // exact frame index
      
      text_bottom.setAutoDraw(true);
    }

    
    // *ccimage* updates
    if (t >= 0.0 && ccimage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ccimage.tStart = t;  // (not accounting for frame time here)
      ccimage.frameNStart = frameN;  // exact frame index
      
      ccimage.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of screen_scaleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function screen_scaleRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'screen_scale'-------
    for (const thisComponent of screen_scaleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    thisExp.addData("X Scale", x_scale);
    thisExp.addData("Y Scale", y_scale);
    
    // the Routine "screen_scale" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var rectangleComponents;
function rectangleRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'rectangle'-------
    t = 0;
    rectangleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    polygon.setSize([(10 * x_scale), (10 * y_scale)]);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    rectangleComponents = [];
    rectangleComponents.push(text);
    rectangleComponents.push(polygon);
    rectangleComponents.push(key_resp);
    
    for (const thisComponent of rectangleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rectangleRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'rectangle'-------
    // get current time
    t = rectangleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rectangleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rectangleRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'rectangle'-------
    for (const thisComponent of rectangleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp.stop();
    // the Routine "rectangle" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var check_statusComponents;
function check_statusRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'check_status'-------
    t = 0;
    check_statusClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_2.text = ((((x_scale.toString() + "\n") + y_scale.toString()) + "\n") + vsize.toString());
    
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    check_statusComponents = [];
    check_statusComponents.push(text_2);
    check_statusComponents.push(key_resp_2);
    
    for (const thisComponent of check_statusComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function check_statusRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'check_status'-------
    // get current time
    t = check_statusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: [], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of check_statusComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function check_statusRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'check_status'-------
    for (const thisComponent of check_statusComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "check_status" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var introductionComponents;
function introductionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'introduction'-------
    t = 0;
    introductionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_3.setText('test');
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    introductionComponents = [];
    introductionComponents.push(text_3);
    introductionComponents.push(image);
    introductionComponents.push(key_resp_4);
    
    for (const thisComponent of introductionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introductionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'introduction'-------
    // get current time
    t = introductionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    for (var i = 0, _pj_a = stim_list.length; (i < _pj_a); i += 1) {
        stim_list[i].draw();
    }
    win.flip();
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: [], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introductionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introductionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'introduction'-------
    for (const thisComponent of introductionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "introduction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Trials;
var currentLoop;
function TrialsLoopBegin(TrialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  Trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'loopConditions.xlsx',
    seed: undefined, name: 'Trials'
  });
  psychoJS.experiment.addLoop(Trials); // add the loop to the experiment
  currentLoop = Trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of Trials) {
    const snapshot = Trials.getSnapshot();
    TrialsLoopScheduler.add(importConditions(snapshot));
    TrialsLoopScheduler.add(trialRoutineBegin(snapshot));
    TrialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    TrialsLoopScheduler.add(trialRoutineEnd(snapshot));
    TrialsLoopScheduler.add(endLoopIteration(TrialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TrialsLoopEnd() {
  psychoJS.experiment.removeLoop(Trials);

  return Scheduler.Event.NEXT;
}


var _key_resp_3_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(text_4);
    trialComponents.push(key_resp_3);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: [], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    text_4.text = ((((((thisTrial["size"].toString() + "\n") + thisTrial["rate"].toString()) + "\n") + thisTrial["pos"].toString()) + "\n") + thisTrial["ori"].toString());
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
