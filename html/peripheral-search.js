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
const range = (start, end) => [...Array((end - start) + 1)].map((_, i) => start + i);

const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const calcRad = (deg) => {
    return deg * (Math.PI / 180);
}
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
flowScheduler.add(exp_introRoutineBegin());
flowScheduler.add(exp_introRoutineEachFrame());
flowScheduler.add(exp_introRoutineEnd());
flowScheduler.add(practice_introRoutineBegin());
flowScheduler.add(practice_introRoutineEachFrame());
flowScheduler.add(practice_introRoutineEnd());
const PracticeTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(PracticeTrialsLoopBegin, PracticeTrialsLoopScheduler);
flowScheduler.add(PracticeTrialsLoopScheduler);
flowScheduler.add(PracticeTrialsLoopEnd);
flowScheduler.add(actual_introRoutineBegin());
flowScheduler.add(actual_introRoutineEachFrame());
flowScheduler.add(actual_introRoutineEnd());
const ActualTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ActualTrialsLoopBegin, ActualTrialsLoopScheduler);
flowScheduler.add(ActualTrialsLoopScheduler);
flowScheduler.add(ActualTrialsLoopEnd);
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
var an2pix;
var text_top;
var text_bottom;
var ccimage;
var exp_introClock;
var target_class;
var non_target_classes;
var ans_keys_list;
var key_to_pos;
var hw_rate;
var idx;
var idx_list;
var intro_state;
var count;
var reps;
var eccentricity_level_0;
var eccentricity_level_1;
var eccentricity_level_2;
var eccentricities;
var image_0_0;
var image_0_1;
var image_0_2;
var image_0_3;
var image_1_0;
var image_1_1;
var image_1_2;
var image_1_3;
var image_2_0;
var image_2_1;
var image_2_2;
var image_2_3;
var fixation_point;
var stimuli_arrangement;
var introduction_text;
var back_text;
var practice_introClock;
var introduction_text_p;
var practice_info_key_resp;
var gitterClock;
var exp_start;
var gitter_text;
var show_stimClock;
var show_stim_key_resp;
var ask_questionClock;
var question_text;
var key_ans;
var show_feedbackClock;
var feedback_text;
var show_fb_key_resp;
var actual_introClock;
var introduction_text_a;
var actual_intro_key_resp;
var take_breakClock;
var break_text;
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
          x_scale = 50;
          y_scale = 50;
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
  an2pix = 50;
  
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
    text: '',
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
  // Initialize components for Routine "exp_intro"
  exp_introClock = new util.Clock();
  target_class = "cat";
  non_target_classes = ["dog", "elephant", "tiger", "rabbit", "kangaroo", "sheep", "monkey", "lion", "bear", "fox", "pig", "otter"];
  
  ans_keys_list = [["b", "a", "c", "d"], ["g", "e", "f", "h"], ["j", "i", "k", "l"]];
  key_to_pos = {};
  for (var i = 0, _pj_a = ans_keys_list.length; (i < _pj_a); i += 1) {
      for (var j = 0, _pj_b = ans_keys_list[i].length; (j < _pj_b); j += 1) {
          key_to_pos[ans_keys_list[i][j]] = [i, j];
      }
  }
  
  hw_rate = win.size[1] / win.size[0];
  
  idx = range(101, 148);
  idx = idx.map(x => x.toString().slice(1));
  idx_list = {};
  for (var i = 0, _pj_a = non_target_classes.length; (i < _pj_a); i += 1) {
      idx_list[non_target_classes[i]] = shuffle(idx)
  }
  idx_list[target_class] = shuffle(idx)
  
  intro_state = -1
  count = 0
  reps = 0
  eccentricity_level_0 = Math.round(Math.sqrt(2) * 100) / 100;
  eccentricity_level_1 = Math.round((1 + Math.sqrt(8)) * 100) / 100;
  eccentricity_level_2 = Math.round(((Math.sqrt(2) + 4 + Math.sqrt(Math.pow((Math.sqrt(2) + 4), 2) - 4 * (4 * Math.sqrt(2) - 27))) / 2) * 100) / 100;
  eccentricities = [eccentricity_level_0, eccentricity_level_1, eccentricity_level_2];
  
  image_0_0 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_0_0', units : undefined, 
    image : 'html/resources/imagenet/bear/image01.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_0_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_0_1', units : undefined, 
    image : 'html/resources/imagenet/cat/image01.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  image_0_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_0_2', units : undefined, 
    image : 'html/resources/imagenet/dog/image01.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  image_0_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_0_3', units : undefined, 
    image : 'html/resources/imagenet/elephant/image01.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  image_1_0 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1_0', units : undefined, 
    image : 'html/resources/imagenet/fox/image01.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  image_1_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1_1', units : undefined, 
    image : 'html/resources/imagenet/kangaroo/image01.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  image_1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1_2', units : undefined, 
    image : 'html/resources/imagenet/lion/image01.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  image_1_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1_3', units : undefined, 
    image : 'html/resources/imagenet/monkey/image01.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  image_2_0 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2_0', units : undefined, 
    image : 'html/resources/imagenet/otter/image01.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  image_2_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2_1', units : undefined, 
    image : 'html/resources/imagenet/pig/image01.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  image_2_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2_2', units : undefined, 
    image : 'html/resources/imagenet/rabbit/image01.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -13.0 
  });
  image_2_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2_3', units : undefined, 
    image : 'html/resources/imagenet/sheep/image01.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  fixation_point = new visual.Polygon ({
    win: psychoJS.window, name: 'fixation_point', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([0.5059, 0.5059, 0.5059]),
    fillColor: new util.Color([0.5059, 0.5059, 0.5059]),
    opacity: 1.0, depth: -16, interpolate: true,
  });
  
  stimuli_arrangement = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimuli_arrangement', units : undefined, 
    image : 'html/resources/stimuli_arrangement.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [an2pix, an2pix],
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  introduction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'introduction_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (2 * an2pix)], height: an2pix * 0.7,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -19.0 
  });
  
  back_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'back_text',
    text: 'Next: “Space” Key\nBack: “b” Key',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, ((- 2) * an2pix)], height: an2pix * 0.5,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -20.0 
  });
  
  // Initialize components for Routine "practice_intro"
  practice_introClock = new util.Clock();
  introduction_text_p = new visual.TextStim({
    win: psychoJS.window,
    name: 'introduction_text_p',
    text: "Let's practice with sample images.\n\nHit a “Space” key when ready.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: an2pix * 0.7,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  practice_info_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "gitter"
  gitterClock = new util.Clock();
  exp_start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  gitter_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'gitter_text',
    text: 'Press “Space” key to start.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, ((- an2pix) * 1.5)], height: an2pix * 0.7,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "show_stim"
  show_stimClock = new util.Clock();
  show_stim_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ask_question"
  ask_questionClock = new util.Clock();
  question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_text',
    text: 'Where was the cat?\nPlease press the key.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(10 * an2pix), 0], height: an2pix * 0.7,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_ans = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "show_feedback"
  show_feedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: 'feedback text',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: an2pix * 0.7,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  show_fb_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "actual_intro"
  actual_introClock = new util.Clock();
  introduction_text_a = new visual.TextStim({
    win: psychoJS.window,
    name: 'introduction_text_a',
    text: "Practice part has finished.\n\nNext part is the experiment.\nHit 's' Key when ready.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: an2pix * 0.7,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  actual_intro_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "gitter"
  gitterClock = new util.Clock();
  exp_start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  gitter_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'gitter_text',
    text: 'Press “Space” key to start.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, ((- an2pix) * 1.5)], height: an2pix * 0.7,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "show_stim"
  show_stimClock = new util.Clock();
  show_stim_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ask_question"
  ask_questionClock = new util.Clock();
  question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_text',
    text: 'Where was the cat?\nPlease press the key.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(10 * an2pix), 0], height: an2pix * 0.7,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_ans = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "show_feedback"
  show_feedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: 'feedback text',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: an2pix * 0.7,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  show_fb_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "take_break"
  take_breakClock = new util.Clock();
  break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_text',
    text: 'Please take a short break.\n\nIf the experiment is ready, \nthe window will change to the fixation point.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: an2pix * 0.7,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var resz;
var distance;
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
    resz = (an2pix / ((x_scale + y_scale) / 2));
    distance = Number.parseInt((resz / (2 * Math.tan((Math.PI / 360)))));
    text_bottom.text = (("Throughout this experiment, \n maintain a viewing distance at " + distance.toString()) + "cm \n\n Press the space bar when done.");
    
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
            vsize = (win.size[1] / 2);
        }
        screen_height = (round(((vsize * 10) / y_scale)) / 10);
        resz = (an2pix / ((x_scale + y_scale) / 2));
        distance = Number.parseInt((resz / (2 * Math.tan((Math.PI / 360)))));
        text_bottom.text = (("Throughout this experiment, \n maintain a viewing distance at " + distance.toString()) + "cm \n\n Press the space bar when done.");
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


var image_list;
var exp_introComponents;
function exp_introRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'exp_intro'-------
    t = 0;
    exp_introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    hw_rate = win.size[1] / win.size[0];
    
    image_0_0.setSize([an2pix, an2pix]);
    image_0_1.setSize([an2pix, an2pix]);
    image_0_2.setSize([an2pix, an2pix]);
    image_0_3.setSize([an2pix, an2pix]);
    image_1_0.setSize([(2 * an2pix), (2 * an2pix)]);
    image_1_1.setSize([(2 * an2pix), (2 * an2pix)]);
    image_1_2.setSize([(2 * an2pix), (2 * an2pix)]);
    image_1_3.setSize([(2 * an2pix), (2 * an2pix)]);
    image_2_0.setSize([((2 * 2) * an2pix), ((2 * 2) * an2pix)]);
    image_2_1.setSize([((2 * 2) * an2pix), ((2 * 2) * an2pix)]);
    image_2_2.setSize([((2 * 2) * an2pix), ((2 * 2) * an2pix)]);
    image_2_3.setSize([((2 * 2) * an2pix), ((2 * 2) * an2pix)]);
    image_list = [image_0_0, image_0_1, image_0_2, image_0_3, image_1_0, image_1_1, image_1_2, image_1_3, image_2_0, image_2_1, image_2_2, image_2_3];
    for (var i = 0, _pj_a = image_list.length; (i < _pj_a); i += 1) {
        if (i < 4) {
            image_list[i].pos = [
                an2pix * eccentricities[0] * Math.cos(calcRad((i % 4) * 90 + 45)),
                an2pix * eccentricities[0] * Math.sin(calcRad((i % 4) * 90 + 45))
            ];
        } else {
            if ((4 <= i) && (i < 8)) {
                image_list[i].pos = [
                    an2pix * eccentricities[1] * Math.cos(calcRad((i % 4) * 90)),
                    an2pix * eccentricities[1] * Math.sin(calcRad((i % 4) * 90))
                ];
            } else {
                image_list[i].pos = [
                    an2pix * eccentricities[2] * Math.cos(calcRad((i % 4) * 90 + 45)),
                    an2pix * eccentricities[2] * Math.sin(calcRad((i % 4) * 90 + 45))
                ];
            }
        }
    }
    
    fixation_point.setOpacity(0.0);
    fixation_point.setSize([(an2pix / 5), (an2pix / 5)]);
    stimuli_arrangement.size = [
        an2pix * (2 * eccentricities[2] / Math.sqrt(2) + 8),
        an2pix * (2 * eccentricities[2] / Math.sqrt(2) + 8)
    ];
    
    // keep track of which components have finished
    exp_introComponents = [];
    exp_introComponents.push(image_0_0);
    exp_introComponents.push(image_0_1);
    exp_introComponents.push(image_0_2);
    exp_introComponents.push(image_0_3);
    exp_introComponents.push(image_1_0);
    exp_introComponents.push(image_1_1);
    exp_introComponents.push(image_1_2);
    exp_introComponents.push(image_1_3);
    exp_introComponents.push(image_2_0);
    exp_introComponents.push(image_2_1);
    exp_introComponents.push(image_2_2);
    exp_introComponents.push(image_2_3);
    exp_introComponents.push(fixation_point);
    exp_introComponents.push(stimuli_arrangement);
    exp_introComponents.push(introduction_text);
    exp_introComponents.push(back_text);
    
    for (const thisComponent of exp_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp_introRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'exp_intro'-------
    // get current time
    t = exp_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_0_0* updates
    if (t >= 0.0 && image_0_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_0_0.tStart = t;  // (not accounting for frame time here)
      image_0_0.frameNStart = frameN;  // exact frame index
      
      image_0_0.setAutoDraw(true);
    }

    
    // *image_0_1* updates
    if (t >= 0.0 && image_0_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_0_1.tStart = t;  // (not accounting for frame time here)
      image_0_1.frameNStart = frameN;  // exact frame index
      
      image_0_1.setAutoDraw(true);
    }

    
    // *image_0_2* updates
    if (t >= 0.0 && image_0_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_0_2.tStart = t;  // (not accounting for frame time here)
      image_0_2.frameNStart = frameN;  // exact frame index
      
      image_0_2.setAutoDraw(true);
    }

    
    // *image_0_3* updates
    if (t >= 0.0 && image_0_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_0_3.tStart = t;  // (not accounting for frame time here)
      image_0_3.frameNStart = frameN;  // exact frame index
      
      image_0_3.setAutoDraw(true);
    }

    
    // *image_1_0* updates
    if (t >= 0.0 && image_1_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1_0.tStart = t;  // (not accounting for frame time here)
      image_1_0.frameNStart = frameN;  // exact frame index
      
      image_1_0.setAutoDraw(true);
    }

    
    // *image_1_1* updates
    if (t >= 0.0 && image_1_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1_1.tStart = t;  // (not accounting for frame time here)
      image_1_1.frameNStart = frameN;  // exact frame index
      
      image_1_1.setAutoDraw(true);
    }

    
    // *image_1_2* updates
    if (t >= 0.0 && image_1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1_2.tStart = t;  // (not accounting for frame time here)
      image_1_2.frameNStart = frameN;  // exact frame index
      
      image_1_2.setAutoDraw(true);
    }

    
    // *image_1_3* updates
    if (t >= 0.0 && image_1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1_3.tStart = t;  // (not accounting for frame time here)
      image_1_3.frameNStart = frameN;  // exact frame index
      
      image_1_3.setAutoDraw(true);
    }

    
    // *image_2_0* updates
    if (t >= 0.0 && image_2_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2_0.tStart = t;  // (not accounting for frame time here)
      image_2_0.frameNStart = frameN;  // exact frame index
      
      image_2_0.setAutoDraw(true);
    }

    
    // *image_2_1* updates
    if (t >= 0.0 && image_2_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2_1.tStart = t;  // (not accounting for frame time here)
      image_2_1.frameNStart = frameN;  // exact frame index
      
      image_2_1.setAutoDraw(true);
    }

    
    // *image_2_2* updates
    if (t >= 0.0 && image_2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2_2.tStart = t;  // (not accounting for frame time here)
      image_2_2.frameNStart = frameN;  // exact frame index
      
      image_2_2.setAutoDraw(true);
    }

    
    // *image_2_3* updates
    if (t >= 0.0 && image_2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2_3.tStart = t;  // (not accounting for frame time here)
      image_2_3.frameNStart = frameN;  // exact frame index
      
      image_2_3.setAutoDraw(true);
    }

    
    // *fixation_point* updates
    if (t >= 0.0 && fixation_point.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_point.tStart = t;  // (not accounting for frame time here)
      fixation_point.frameNStart = frameN;  // exact frame index
      
      fixation_point.setAutoDraw(true);
    }

    
    // *stimuli_arrangement* updates
    if (t >= 0.0 && stimuli_arrangement.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimuli_arrangement.tStart = t;  // (not accounting for frame time here)
      stimuli_arrangement.frameNStart = frameN;  // exact frame index
      
      stimuli_arrangement.setAutoDraw(true);
    }

    
    // *introduction_text* updates
    if (t >= 0.0 && introduction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction_text.tStart = t;  // (not accounting for frame time here)
      introduction_text.frameNStart = frameN;  // exact frame index
      
      introduction_text.setAutoDraw(true);
    }

    
    if (introduction_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      introduction_text.setText('', false);
    }
    
    // *back_text* updates
    if (t >= 0.0 && back_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_text.tStart = t;  // (not accounting for frame time here)
      back_text.frameNStart = frameN;  // exact frame index
      
      back_text.setAutoDraw(true);
    }

    keys = psychoJS.eventManager.getKeys({"keyList": ["space", "b"]});
    if (keys.slice(-1)[0] === "space") {
        intro_state += 1;
    }
    if (keys.slice(-1)[0] === "b") {
        intro_state -= 1;
    }
    if (intro_state < 0) {
        intro_state = 0;
    }
    // if (intro_state === 0) {
    //     introduction_text.text = "Throughout this experiment, \n maintain a viewing distance at " + distance.toString() + "cm.";
    // }
    if (intro_state === 0) {
        introduction_text.text = "The task is \n \"To find a cat from animal images as soon as possible.\" \n The time limit is 5 sec.";
        introduction_text.pos = [0, 2 * an2pix];
        back_text.pos = [0, -2 * an2pix];
        fixation_point.opacity = 0.0;
    }
    if (intro_state === 1) {
        introduction_text.text = "Gaze at the center of the display. \n Then, hit \"Space\" key to display a lineup of images.";
        introduction_text.pos = [0, 4.5 * an2pix];
        back_text.pos = [0, -4.5 * an2pix];
        fixation_point.opacity = 1.0;
        for (var i = 0, _pj_a = image_list.length; (i < _pj_a); i += 1) {
            image_list[i].opacity = 0.0;
        }
    }
    if (intro_state === 2) {
        introduction_text.text = "Hit \"Space\" key \n as soon as you find a cat \n with your eye moving.";
        introduction_text.pos = [9 * an2pix, 0];
        back_text.pos = [-9 * an2pix, 0];
        for (var i = 0, _pj_a = image_list.length; (i < _pj_a); i += 1) {
            image_list[i].opacity = 1.0;
        }
        stimuli_arrangement.opacity = 0.0;
    }
    if (intro_state === 3) {
        introduction_text.text = "Then, press the key \n corresponding to \n the position.";
        fixation_point.opacity = 0.0;
        stimuli_arrangement.opacity = 1.0;
    }
    if (intro_state === 4) {
        fixation_point.opacity = 1.0;
        continueRoutine = false;
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
    for (const thisComponent of exp_introComponents)
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


function exp_introRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'exp_intro'-------
    for (const thisComponent of exp_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "exp_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _practice_info_key_resp_allKeys;
var practice_introComponents;
function practice_introRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice_intro'-------
    t = 0;
    practice_introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    practice_info_key_resp.keys = undefined;
    practice_info_key_resp.rt = undefined;
    _practice_info_key_resp_allKeys = [];
    // keep track of which components have finished
    practice_introComponents = [];
    practice_introComponents.push(introduction_text_p);
    practice_introComponents.push(practice_info_key_resp);
    
    for (const thisComponent of practice_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_introRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice_intro'-------
    // get current time
    t = practice_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *introduction_text_p* updates
    if (t >= 0.0 && introduction_text_p.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction_text_p.tStart = t;  // (not accounting for frame time here)
      introduction_text_p.frameNStart = frameN;  // exact frame index
      
      introduction_text_p.setAutoDraw(true);
    }

    
    // *practice_info_key_resp* updates
    if (t >= 0.0 && practice_info_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_info_key_resp.tStart = t;  // (not accounting for frame time here)
      practice_info_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practice_info_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practice_info_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practice_info_key_resp.clearEvents(); });
    }

    if (practice_info_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = practice_info_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _practice_info_key_resp_allKeys = _practice_info_key_resp_allKeys.concat(theseKeys);
      if (_practice_info_key_resp_allKeys.length > 0) {
        practice_info_key_resp.keys = _practice_info_key_resp_allKeys[_practice_info_key_resp_allKeys.length - 1].name;  // just the last key pressed
        practice_info_key_resp.rt = _practice_info_key_resp_allKeys[_practice_info_key_resp_allKeys.length - 1].rt;
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
    for (const thisComponent of practice_introComponents)
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


function practice_introRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice_intro'-------
    for (const thisComponent of practice_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    practice_info_key_resp.stop();
    // the Routine "practice_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var PracticeTrials;
var currentLoop;
function PracticeTrialsLoopBegin(PracticeTrialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  PracticeTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions/practiceConditions.xlsx',
    seed: undefined, name: 'PracticeTrials'
  });
  psychoJS.experiment.addLoop(PracticeTrials); // add the loop to the experiment
  currentLoop = PracticeTrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPracticeTrial of PracticeTrials) {
    const snapshot = PracticeTrials.getSnapshot();
    PracticeTrialsLoopScheduler.add(importConditions(snapshot));
    PracticeTrialsLoopScheduler.add(gitterRoutineBegin(snapshot));
    PracticeTrialsLoopScheduler.add(gitterRoutineEachFrame(snapshot));
    PracticeTrialsLoopScheduler.add(gitterRoutineEnd(snapshot));
    PracticeTrialsLoopScheduler.add(show_stimRoutineBegin(snapshot));
    PracticeTrialsLoopScheduler.add(show_stimRoutineEachFrame(snapshot));
    PracticeTrialsLoopScheduler.add(show_stimRoutineEnd(snapshot));
    PracticeTrialsLoopScheduler.add(ask_questionRoutineBegin(snapshot));
    PracticeTrialsLoopScheduler.add(ask_questionRoutineEachFrame(snapshot));
    PracticeTrialsLoopScheduler.add(ask_questionRoutineEnd(snapshot));
    PracticeTrialsLoopScheduler.add(show_feedbackRoutineBegin(snapshot));
    PracticeTrialsLoopScheduler.add(show_feedbackRoutineEachFrame(snapshot));
    PracticeTrialsLoopScheduler.add(show_feedbackRoutineEnd(snapshot));
    PracticeTrialsLoopScheduler.add(endLoopIteration(PracticeTrialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function PracticeTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(PracticeTrials);

  return Scheduler.Event.NEXT;
}


var ActualTrials;
function ActualTrialsLoopBegin(ActualTrialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  ActualTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 4, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions/expConditions.xlsx',
    seed: undefined, name: 'ActualTrials'
  });
  psychoJS.experiment.addLoop(ActualTrials); // add the loop to the experiment
  currentLoop = ActualTrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisActualTrial of ActualTrials) {
    const snapshot = ActualTrials.getSnapshot();
    ActualTrialsLoopScheduler.add(importConditions(snapshot));
    ActualTrialsLoopScheduler.add(gitterRoutineBegin(snapshot));
    ActualTrialsLoopScheduler.add(gitterRoutineEachFrame(snapshot));
    ActualTrialsLoopScheduler.add(gitterRoutineEnd(snapshot));
    ActualTrialsLoopScheduler.add(show_stimRoutineBegin(snapshot));
    ActualTrialsLoopScheduler.add(show_stimRoutineEachFrame(snapshot));
    ActualTrialsLoopScheduler.add(show_stimRoutineEnd(snapshot));
    ActualTrialsLoopScheduler.add(ask_questionRoutineBegin(snapshot));
    ActualTrialsLoopScheduler.add(ask_questionRoutineEachFrame(snapshot));
    ActualTrialsLoopScheduler.add(ask_questionRoutineEnd(snapshot));
    ActualTrialsLoopScheduler.add(show_feedbackRoutineBegin(snapshot));
    ActualTrialsLoopScheduler.add(show_feedbackRoutineEachFrame(snapshot));
    ActualTrialsLoopScheduler.add(show_feedbackRoutineEnd(snapshot));
    ActualTrialsLoopScheduler.add(take_breakRoutineBegin(snapshot));
    ActualTrialsLoopScheduler.add(take_breakRoutineEachFrame(snapshot));
    ActualTrialsLoopScheduler.add(take_breakRoutineEnd(snapshot));
    ActualTrialsLoopScheduler.add(endLoopIteration(ActualTrialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function ActualTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(ActualTrials);

  return Scheduler.Event.NEXT;
}


var _exp_start_allKeys;
var gitterComponents;
function gitterRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'gitter'-------
    t = 0;
    gitterClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    fixation_point.fillColor = [(- 0.498), (- 0.498), (- 0.498)];
    fixation_point.lineColor = [(- 0.498), (- 0.498), (- 0.498)];
    fixation_point.setAutoDraw(true);
    exp_start.keys = undefined;
    exp_start.rt = undefined;
    _exp_start_allKeys = [];
    // keep track of which components have finished
    gitterComponents = [];
    gitterComponents.push(exp_start);
    gitterComponents.push(gitter_text);
    
    for (const thisComponent of gitterComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function gitterRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'gitter'-------
    // get current time
    t = gitterClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp_start* updates
    if (t >= 0.0 && exp_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp_start.tStart = t;  // (not accounting for frame time here)
      exp_start.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exp_start.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exp_start.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { exp_start.clearEvents(); });
    }

    if (exp_start.status === PsychoJS.Status.STARTED) {
      let theseKeys = exp_start.getKeys({keyList: ['space'], waitRelease: false});
      _exp_start_allKeys = _exp_start_allKeys.concat(theseKeys);
      if (_exp_start_allKeys.length > 0) {
        exp_start.keys = _exp_start_allKeys[_exp_start_allKeys.length - 1].name;  // just the last key pressed
        exp_start.rt = _exp_start_allKeys[_exp_start_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *gitter_text* updates
    if (t >= 0.0 && gitter_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gitter_text.tStart = t;  // (not accounting for frame time here)
      gitter_text.frameNStart = frameN;  // exact frame index
      
      gitter_text.setAutoDraw(true);
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
    for (const thisComponent of gitterComponents)
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


function gitterRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'gitter'-------
    for (const thisComponent of gitterComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    fixation_point.setAutoDraw(false);
    psychoJS.experiment.addData('exp_start.keys', exp_start.keys);
    if (typeof exp_start.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('exp_start.rt', exp_start.rt);
        routineTimer.reset();
        }
    
    exp_start.stop();
    fixation_point.fillColor = [0.5059, 0.5059, 0.5059];
    fixation_point.lineColor = [0.5059, 0.5059, 0.5059];
    
    // the Routine "gitter" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _non_target_classes;
var image_path;
var _show_stim_key_resp_allKeys;
var show_stimComponents;
function show_stimRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'show_stim'-------
    t = 0;
    show_stimClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    _non_target_classes = shuffle(non_target_classes);
    for (var i = 0, _pj_a = image_list.length; (i < _pj_a); i += 1) {
        if (currentLoop.name == "PracticeTrials") {
            image_path = "imagenet/" + _non_target_classes[i] + "/image" + (Math.floor(Math.random() * (149 - 101)) + 101).toString().slice(1) + ".png";
        } else {
            image_path = "imagenet/" + _non_target_classes[i] + "/image" + idx_list[_non_target_classes[i]][count] + ".png";
        }
        image_list[i].setImage(image_path);
    
        thisExp.addData(_non_target_classes[i], image_path);
    }
    
    if (currentLoop.name == "PracticeTrials") {
        image_path = "imagenet/" + target_class + "/image" + (Math.floor(Math.random() * (149 - 101)) + 101).toString().slice(1) + ".png";
    } else {
        image_path = "imagenet/" + target_class + "/image" + idx_list[target_class][count] + ".png";
    }
    image_list[4 * pos + ori].setImage(image_path);
    
    thisExp.addData(target_class, image_path);
    
    for (var i = 0, _pj_a = image_list.length; (i < _pj_a); i += 1) {
        image_list[i].size = [size * an2pix, size * an2pix];
        if ((4 <= i) && (i < 8)) {
            image_list[i].size = [rate * image_list[i].size[0], rate * image_list[i].size[1]];
        } else {
            if (i >= 8) {
                image_list[i].size = [Math.pow(rate, 2) * image_list[i].size[0], Math.pow(rate, 2) * image_list[i].size[1]];
            }
        }
    }
    
    fixation_point.setAutoDraw(true);
    show_stim_key_resp.keys = undefined;
    show_stim_key_resp.rt = undefined;
    _show_stim_key_resp_allKeys = [];
    // keep track of which components have finished
    show_stimComponents = [];
    show_stimComponents.push(show_stim_key_resp);
    
    for (const thisComponent of show_stimComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function show_stimRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'show_stim'-------
    // get current time
    t = show_stimClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (show_stimClock.getTime() > 1) {
        for (var i = 0, _pj_a = image_list.length; (i < _pj_a); i += 1) {
            image_list[i].setAutoDraw(true);
        }
    }
    
    
    // *show_stim_key_resp* updates
    if (t >= 1.0 && show_stim_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      show_stim_key_resp.tStart = t;  // (not accounting for frame time here)
      show_stim_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { show_stim_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { show_stim_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { show_stim_key_resp.clearEvents(); });
    }

    if (show_stim_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = show_stim_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _show_stim_key_resp_allKeys = _show_stim_key_resp_allKeys.concat(theseKeys);
      if (_show_stim_key_resp_allKeys.length > 0) {
        show_stim_key_resp.keys = _show_stim_key_resp_allKeys[_show_stim_key_resp_allKeys.length - 1].name;  // just the last key pressed
        show_stim_key_resp.rt = _show_stim_key_resp_allKeys[_show_stim_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    if ((show_stimClock.getTime() > 6)) {
        continueRoutine = false;
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
    for (const thisComponent of show_stimComponents)
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


function show_stimRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'show_stim'-------
    for (const thisComponent of show_stimComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    fixation_point.setAutoDraw(false);
    
    for (var i = 0, _pj_a = image_list.length; (i < _pj_a); i += 1) {
        image_list[i].setAutoDraw(false);
    }
    show_stim_key_resp.stop();
    thisExp.addData("reactionTime", (show_stimClock.getTime() - 1));
    
    // the Routine "show_stim" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_ans_allKeys;
var ask_questionComponents;
function ask_questionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'ask_question'-------
    t = 0;
    ask_questionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    stimuli_arrangement.setAutoDraw(true);
    
    key_ans.keys = undefined;
    key_ans.rt = undefined;
    _key_ans_allKeys = [];
    // keep track of which components have finished
    ask_questionComponents = [];
    ask_questionComponents.push(question_text);
    ask_questionComponents.push(key_ans);
    
    for (const thisComponent of ask_questionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ask_questionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'ask_question'-------
    // get current time
    t = ask_questionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question_text* updates
    if (t >= 0.0 && question_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_text.tStart = t;  // (not accounting for frame time here)
      question_text.frameNStart = frameN;  // exact frame index
      
      question_text.setAutoDraw(true);
    }

    
    // *key_ans* updates
    if (t >= 0.0 && key_ans.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_ans.tStart = t;  // (not accounting for frame time here)
      key_ans.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_ans.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_ans.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_ans.clearEvents(); });
    }

    if (key_ans.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_ans.getKeys({keyList: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], waitRelease: false});
      _key_ans_allKeys = _key_ans_allKeys.concat(theseKeys);
      if (_key_ans_allKeys.length > 0) {
        key_ans.keys = _key_ans_allKeys[_key_ans_allKeys.length - 1].name;  // just the last key pressed
        key_ans.rt = _key_ans_allKeys[_key_ans_allKeys.length - 1].rt;
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
    for (const thisComponent of ask_questionComponents)
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


function ask_questionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'ask_question'-------
    for (const thisComponent of ask_questionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    stimuli_arrangement.setAutoDraw(false);
    
    psychoJS.experiment.addData('key_ans.keys', key_ans.keys);
    if (typeof key_ans.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_ans.rt', key_ans.rt);
        routineTimer.reset();
        }
    
    key_ans.stop();
    // the Routine "ask_question" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _show_fb_key_resp_allKeys;
var show_feedbackComponents;
function show_feedbackRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'show_feedback'-------
    t = 0;
    show_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((key_to_pos[key_ans.keys][0] === pos) && (key_to_pos[key_ans.keys][1] === ori)) {
        feedback_text.text = "Your answer is correct!";
        thisExp.addData("TF", "True");
    } else {
        feedback_text.text = "Your answer is incorrect.";
        thisExp.addData("TF", "False");
    }
    
    show_fb_key_resp.keys = undefined;
    show_fb_key_resp.rt = undefined;
    _show_fb_key_resp_allKeys = [];
    // keep track of which components have finished
    show_feedbackComponents = [];
    show_feedbackComponents.push(feedback_text);
    show_feedbackComponents.push(show_fb_key_resp);
    
    for (const thisComponent of show_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function show_feedbackRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'show_feedback'-------
    // get current time
    t = show_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    if (show_feedbackClock.getTime() > 1) {
        continueRoutine = false;
    }
    
    // *show_fb_key_resp* updates
    if (t >= 0.0 && show_fb_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      show_fb_key_resp.tStart = t;  // (not accounting for frame time here)
      show_fb_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { show_fb_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { show_fb_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { show_fb_key_resp.clearEvents(); });
    }

    if (show_fb_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = show_fb_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _show_fb_key_resp_allKeys = _show_fb_key_resp_allKeys.concat(theseKeys);
      if (_show_fb_key_resp_allKeys.length > 0) {
        show_fb_key_resp.keys = _show_fb_key_resp_allKeys[_show_fb_key_resp_allKeys.length - 1].name;  // just the last key pressed
        show_fb_key_resp.rt = _show_fb_key_resp_allKeys[_show_fb_key_resp_allKeys.length - 1].rt;
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
    for (const thisComponent of show_feedbackComponents)
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


function show_feedbackRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'show_feedback'-------
    for (const thisComponent of show_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    show_fb_key_resp.stop();
    // the Routine "show_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _actual_intro_key_resp_allKeys;
var actual_introComponents;
function actual_introRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'actual_intro'-------
    t = 0;
    actual_introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    actual_intro_key_resp.keys = undefined;
    actual_intro_key_resp.rt = undefined;
    _actual_intro_key_resp_allKeys = [];
    // keep track of which components have finished
    actual_introComponents = [];
    actual_introComponents.push(introduction_text_a);
    actual_introComponents.push(actual_intro_key_resp);
    
    for (const thisComponent of actual_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function actual_introRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'actual_intro'-------
    // get current time
    t = actual_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *introduction_text_a* updates
    if (t >= 0.0 && introduction_text_a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction_text_a.tStart = t;  // (not accounting for frame time here)
      introduction_text_a.frameNStart = frameN;  // exact frame index
      
      introduction_text_a.setAutoDraw(true);
    }

    
    // *actual_intro_key_resp* updates
    if (t >= 0.0 && actual_intro_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      actual_intro_key_resp.tStart = t;  // (not accounting for frame time here)
      actual_intro_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { actual_intro_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { actual_intro_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { actual_intro_key_resp.clearEvents(); });
    }

    if (actual_intro_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = actual_intro_key_resp.getKeys({keyList: ['s'], waitRelease: false});
      _actual_intro_key_resp_allKeys = _actual_intro_key_resp_allKeys.concat(theseKeys);
      if (_actual_intro_key_resp_allKeys.length > 0) {
        actual_intro_key_resp.keys = _actual_intro_key_resp_allKeys[_actual_intro_key_resp_allKeys.length - 1].name;  // just the last key pressed
        actual_intro_key_resp.rt = _actual_intro_key_resp_allKeys[_actual_intro_key_resp_allKeys.length - 1].rt;
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
    for (const thisComponent of actual_introComponents)
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


function actual_introRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'actual_intro'-------
    for (const thisComponent of actual_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    actual_intro_key_resp.stop();
    // the Routine "actual_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var take_breakComponents;
function take_breakRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'take_break'-------
    t = 0;
    take_breakClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((count != 47) || (reps == 3)) {
        count += 1;
        continueRoutine = false;
    } else {
        count = 0
        reps += 1
        for (var i = 0, _pj_a = non_target_classes.length; (i < _pj_a); i += 1) {
            idx_list[non_target_classes[i]] = shuffle(idx)
        }
        idx_list[target_class] = shuffle(idx)
    }
    
    // keep track of which components have finished
    take_breakComponents = [];
    take_breakComponents.push(break_text);
    
    for (const thisComponent of take_breakComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function take_breakRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'take_break'-------
    // get current time
    t = take_breakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *break_text* updates
    if (t >= 0.0 && break_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_text.tStart = t;  // (not accounting for frame time here)
      break_text.frameNStart = frameN;  // exact frame index
      
      break_text.setAutoDraw(true);
    }

    if ((take_breakClock.getTime() > 30)) {
        continueRoutine = false;
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
    for (const thisComponent of take_breakComponents)
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


function take_breakRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'take_break'-------
    for (const thisComponent of take_breakComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "take_break" was not non-slip safe, so reset the non-slip timer
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
