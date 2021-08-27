/************************** 
 * Peripheral-Search Test *
 **************************/

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
let expInfo = {'WORKER ID': ''};

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
flowScheduler.add(screenScaleRoutineBegin());
flowScheduler.add(screenScaleRoutineEachFrame());
flowScheduler.add(screenScaleRoutineEnd());
flowScheduler.add(expIntroRoutineBegin());
flowScheduler.add(expIntroRoutineEachFrame());
flowScheduler.add(expIntroRoutineEnd());
flowScheduler.add(practiceIntroRoutineBegin());
flowScheduler.add(practiceIntroRoutineEachFrame());
flowScheduler.add(practiceIntroRoutineEnd());
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
flowScheduler.add(publishSurveyCodeRoutineBegin());
flowScheduler.add(publishSurveyCodeRoutineEachFrame());
flowScheduler.add(publishSurveyCodeRoutineEnd());
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


var screenScaleClock;
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
var text_middle;
var text_bottom;
var ccimage;
var expIntroClock;
var target_class;
var non_target_classes;
var ans_keys_list;
var key_to_pos;
var ans_text_list;
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
var stimuli_arrangement;
var ans_0_0;
var ans_0_1;
var ans_0_2;
var ans_0_3;
var ans_1_0;
var ans_1_1;
var ans_1_2;
var ans_1_3;
var ans_2_0;
var ans_2_1;
var ans_2_2;
var ans_2_3;
var fixation_point;
var introduction_text;
var back_text;
var practiceIntroClock;
var introduction_text_p;
var practice_info_key_resp;
var gitterClock;
var gitter_text;
var mouse;
var showStimClock;
var fake_key_resp;
var brankClock;
var fake_key_resp_2;
var askQuestionClock;
var question_text;
var key_ans;
var ans_mouse;
var showFeedbackClock;
var feedback_text;
var show_fb_key_resp;
var actual_introClock;
var introduction_text_a;
var actual_intro_key_resp;
var takeBreakClock;
var break_text;
var publishSurveyCodeClock;
var show_thanks_and_code;
var finish_key_resp;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "screenScale"
  screenScaleClock = new util.Clock();
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
  
  text_middle = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_middle',
    text: 'Press "Space" key when done.',
    font: 'Open Sans',
    units: 'norm', 
    pos: [0, (- 0.5)], height: 0.07,  wrapWidth: 1.5, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_bottom = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_bottom',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.7)], height: 0.07,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('springgreen'),  opacity: 1,
    depth: -4.0 
  });
  
  ccimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ccimage', units : undefined, 
    image : 'html/resources/bank-1300155_640.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [(x_size * x_scale), (y_size * y_scale)],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "expIntro"
  expIntroClock = new util.Clock();
  target_class = "cat";
  non_target_classes = ["dog", "elephant", "tiger", "rabbit", "kangaroo", "sheep", "monkey", "lion", "bear", "fox", "pig", "otter"];
  
  ans_keys_list = [["b", "a", "c", "d"], ["g", "e", "f", "h"], ["j", "i", "k", "l"]];
  key_to_pos = {};
  for (var i = 0, _pj_a = ans_keys_list.length; (i < _pj_a); i += 1) {
      for (var j = 0, _pj_b = ans_keys_list[i].length; (j < _pj_b); j += 1) {
          key_to_pos[ans_keys_list[i][j]] = [i, j];
      }
  }
  
  ans_text_list = ["2", "1", "3", "4", "7", "5", "6", "8", "10", "9", "11", "12"];
  
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
  stimuli_arrangement = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimuli_arrangement', units : undefined, 
    image : 'html/resources/stimuli_arrangement.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [an2pix, an2pix],
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  ans_0_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_0_0',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 2 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -18.0 
  });
  
  ans_0_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_0_1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 2 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -19.0 
  });
  
  ans_0_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_0_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 2 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -20.0 
  });
  
  ans_0_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_0_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 2 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -21.0 
  });
  
  ans_1_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_1_0',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 2 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -22.0 
  });
  
  ans_1_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_1_1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 2 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -23.0 
  });
  
  ans_1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_1_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 2 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -24.0 
  });
  
  ans_1_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_1_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 2 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -25.0 
  });
  
  ans_2_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_2_0',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 2 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -26.0 
  });
  
  ans_2_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_2_1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 2 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -27.0 
  });
  
  ans_2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_2_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 2 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -28.0 
  });
  
  ans_2_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_2_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 2 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -29.0 
  });
  
  fixation_point = new visual.Polygon ({
    win: psychoJS.window, name: 'fixation_point', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([0.5059, 0.5059, 0.5059]),
    fillColor: new util.Color([0.5059, 0.5059, 0.5059]),
    opacity: 1.0, depth: -32, interpolate: true,
  });
  
  introduction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'introduction_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (2 * an2pix)], height: an2pix * 0.6,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -33.0 
  });
  
  back_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'back_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, ((- 2) * an2pix)], height: an2pix * 0.5,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -34.0 
  });
  
  // Initialize components for Routine "practiceIntro"
  practiceIntroClock = new util.Clock();
  introduction_text_p = new visual.TextStim({
    win: psychoJS.window,
    name: 'introduction_text_p',
    text: "Let's practice with sample images.\n\nHit “Space” key when ready.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: an2pix * 0.7,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  practice_info_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "gitter"
  gitterClock = new util.Clock();
  gitter_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'gitter_text',
    text: 'Click the center circle to start.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, ((- an2pix) * 1.5)], height: an2pix * 0.7,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "showStim"
  showStimClock = new util.Clock();
  fake_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "brank"
  brankClock = new util.Clock();
  fake_key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "askQuestion"
  askQuestionClock = new util.Clock();
  question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_text',
    text: 'Where was the cat?\nPlease click the number.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(10 * an2pix), 0], height: an2pix * 0.7,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_ans = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  ans_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  ans_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "showFeedback"
  showFeedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: 'feedback text',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: an2pix,  wrapWidth: undefined, ori: 0.0,
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
  gitter_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'gitter_text',
    text: 'Click the center circle to start.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, ((- an2pix) * 1.5)], height: an2pix * 0.7,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "showStim"
  showStimClock = new util.Clock();
  fake_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "askQuestion"
  askQuestionClock = new util.Clock();
  question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_text',
    text: 'Where was the cat?\nPlease click the number.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(10 * an2pix), 0], height: an2pix * 0.7,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_ans = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  ans_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  ans_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "showFeedback"
  showFeedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: 'feedback text',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  show_fb_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "takeBreak"
  takeBreakClock = new util.Clock();
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
  
  // Initialize components for Routine "publishSurveyCode"
  publishSurveyCodeClock = new util.Clock();
  show_thanks_and_code = new visual.TextStim({
    win: psychoJS.window,
    name: 'show_thanks_and_code',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: an2pix * 0.7,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  finish_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
var screenScaleComponents;
function screenScaleRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'screenScale'-------
    t = 0;
    screenScaleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    event.clearEvents();
    resz = (an2pix / ((x_scale + y_scale) / 2));
    distance = Number.parseInt((resz / (2 * Math.tan((Math.PI / 360)))));
    text_bottom.text = (("Throughout this experiment, \n please maintain a viewing distance at " + distance.toString()) + "cm.");
    
    // keep track of which components have finished
    screenScaleComponents = [];
    screenScaleComponents.push(text_top);
    screenScaleComponents.push(text_middle);
    screenScaleComponents.push(text_bottom);
    screenScaleComponents.push(ccimage);
    
    screenScaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var keys;
var dscale;
function screenScaleRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'screenScale'-------
    // get current time
    t = screenScaleClock.getTime();
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
        text_bottom.text = (("Throughout this experiment, \n please maintain a viewing distance at " + distance.toString()) + "cm.");
        ccimage.size = [(x_size * x_scale), (y_size * y_scale)];
    }
    
    
    // *text_top* updates
    if (t >= 0.0 && text_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_top.tStart = t;  // (not accounting for frame time here)
      text_top.frameNStart = frameN;  // exact frame index
      
      text_top.setAutoDraw(true);
    }

    
    // *text_middle* updates
    if (t >= 0.0 && text_middle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_middle.tStart = t;  // (not accounting for frame time here)
      text_middle.frameNStart = frameN;  // exact frame index
      
      text_middle.setAutoDraw(true);
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
    screenScaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function screenScaleRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'screenScale'-------
    screenScaleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    thisExp.addData("X Scale", x_scale);
    thisExp.addData("Y Scale", y_scale);
    
    // the Routine "screenScale" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var image_list;
var ans_list;
var ans_to_pos;
var expIntroComponents;
function expIntroRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'expIntro'-------
    t = 0;
    expIntroClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
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
    
    stimuli_arrangement.size = [
        an2pix * (2 * eccentricities[2] / Math.sqrt(2) + 8),
        an2pix * (2 * eccentricities[2] / Math.sqrt(2) + 8)
    ];
    
    ans_list = [ans_0_0, ans_0_1, ans_0_2, ans_0_3, ans_1_0, ans_1_1, ans_1_2, ans_1_3, ans_2_0, ans_2_1, ans_2_2, ans_2_3];
    
    for (var i = 0, _pj_a = ans_list.length; (i < _pj_a); i += 1) {
        if (i < 4) {
            ans_list[i].pos = [
                an2pix * eccentricities[0] * Math.cos(calcRad((i % 4) * 90 + 45)),
                an2pix * eccentricities[0] * Math.sin(calcRad((i % 4) * 90 + 45))
            ];
        } else {
            if ((4 <= i) && (i < 8)) {
                ans_list[i].pos = [
                    an2pix * eccentricities[1] * Math.cos(calcRad((i % 4) * 90)),
                    an2pix * eccentricities[1] * Math.sin(calcRad((i % 4) * 90))
                ];
            } else {
                ans_list[i].pos = [
                    an2pix * eccentricities[2] * Math.cos(calcRad((i % 4) * 90 + 45)),
                    an2pix * eccentricities[2] * Math.sin(calcRad((i % 4) * 90 + 45))
                ];
            }
        }
    }
    ans_to_pos = {};
    for (var i = 0, _pj_a = ans_list.length; (i < _pj_a); i += 1) {
        ans_to_pos[ans_list[i].name] = [(Number.parseInt((i / 4)) % 3), (i % 4)];
    }
    
    fixation_point.setOpacity(0.0);
    fixation_point.setSize([(an2pix / 3), (an2pix / 3)]);
    // keep track of which components have finished
    expIntroComponents = [];
    expIntroComponents.push(image_0_0);
    expIntroComponents.push(image_0_1);
    expIntroComponents.push(image_0_2);
    expIntroComponents.push(image_0_3);
    expIntroComponents.push(image_1_0);
    expIntroComponents.push(image_1_1);
    expIntroComponents.push(image_1_2);
    expIntroComponents.push(image_1_3);
    expIntroComponents.push(image_2_0);
    expIntroComponents.push(image_2_1);
    expIntroComponents.push(image_2_2);
    expIntroComponents.push(image_2_3);
    expIntroComponents.push(stimuli_arrangement);
    expIntroComponents.push(ans_0_0);
    expIntroComponents.push(ans_0_1);
    expIntroComponents.push(ans_0_2);
    expIntroComponents.push(ans_0_3);
    expIntroComponents.push(ans_1_0);
    expIntroComponents.push(ans_1_1);
    expIntroComponents.push(ans_1_2);
    expIntroComponents.push(ans_1_3);
    expIntroComponents.push(ans_2_0);
    expIntroComponents.push(ans_2_1);
    expIntroComponents.push(ans_2_2);
    expIntroComponents.push(ans_2_3);
    expIntroComponents.push(fixation_point);
    expIntroComponents.push(introduction_text);
    expIntroComponents.push(back_text);
    
    expIntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function expIntroRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'expIntro'-------
    // get current time
    t = expIntroClock.getTime();
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

    
    // *stimuli_arrangement* updates
    if (t >= 0.0 && stimuli_arrangement.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimuli_arrangement.tStart = t;  // (not accounting for frame time here)
      stimuli_arrangement.frameNStart = frameN;  // exact frame index
      
      stimuli_arrangement.setAutoDraw(true);
    }

    
    // *ans_0_0* updates
    if (t >= 0.0 && ans_0_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ans_0_0.tStart = t;  // (not accounting for frame time here)
      ans_0_0.frameNStart = frameN;  // exact frame index
      
      ans_0_0.setAutoDraw(true);
    }

    
    // *ans_0_1* updates
    if (t >= 0.0 && ans_0_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ans_0_1.tStart = t;  // (not accounting for frame time here)
      ans_0_1.frameNStart = frameN;  // exact frame index
      
      ans_0_1.setAutoDraw(true);
    }

    
    // *ans_0_2* updates
    if (t >= 0.0 && ans_0_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ans_0_2.tStart = t;  // (not accounting for frame time here)
      ans_0_2.frameNStart = frameN;  // exact frame index
      
      ans_0_2.setAutoDraw(true);
    }

    
    // *ans_0_3* updates
    if (t >= 0.0 && ans_0_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ans_0_3.tStart = t;  // (not accounting for frame time here)
      ans_0_3.frameNStart = frameN;  // exact frame index
      
      ans_0_3.setAutoDraw(true);
    }

    
    // *ans_1_0* updates
    if (t >= 0.0 && ans_1_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ans_1_0.tStart = t;  // (not accounting for frame time here)
      ans_1_0.frameNStart = frameN;  // exact frame index
      
      ans_1_0.setAutoDraw(true);
    }

    
    // *ans_1_1* updates
    if (t >= 0.0 && ans_1_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ans_1_1.tStart = t;  // (not accounting for frame time here)
      ans_1_1.frameNStart = frameN;  // exact frame index
      
      ans_1_1.setAutoDraw(true);
    }

    
    // *ans_1_2* updates
    if (t >= 0.0 && ans_1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ans_1_2.tStart = t;  // (not accounting for frame time here)
      ans_1_2.frameNStart = frameN;  // exact frame index
      
      ans_1_2.setAutoDraw(true);
    }

    
    // *ans_1_3* updates
    if (t >= 0.0 && ans_1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ans_1_3.tStart = t;  // (not accounting for frame time here)
      ans_1_3.frameNStart = frameN;  // exact frame index
      
      ans_1_3.setAutoDraw(true);
    }

    
    // *ans_2_0* updates
    if (t >= 0.0 && ans_2_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ans_2_0.tStart = t;  // (not accounting for frame time here)
      ans_2_0.frameNStart = frameN;  // exact frame index
      
      ans_2_0.setAutoDraw(true);
    }

    
    // *ans_2_1* updates
    if (t >= 0.0 && ans_2_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ans_2_1.tStart = t;  // (not accounting for frame time here)
      ans_2_1.frameNStart = frameN;  // exact frame index
      
      ans_2_1.setAutoDraw(true);
    }

    
    // *ans_2_2* updates
    if (t >= 0.0 && ans_2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ans_2_2.tStart = t;  // (not accounting for frame time here)
      ans_2_2.frameNStart = frameN;  // exact frame index
      
      ans_2_2.setAutoDraw(true);
    }

    
    // *ans_2_3* updates
    if (t >= 0.0 && ans_2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ans_2_3.tStart = t;  // (not accounting for frame time here)
      ans_2_3.frameNStart = frameN;  // exact frame index
      
      ans_2_3.setAutoDraw(true);
    }

    
    // *fixation_point* updates
    if (t >= 0.0 && fixation_point.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_point.tStart = t;  // (not accounting for frame time here)
      fixation_point.frameNStart = frameN;  // exact frame index
      
      fixation_point.setAutoDraw(true);
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
    
    if ((intro_state === 0)) {
        introduction_text.text = "The task is \n \"To find a cat from animal images\".";
        introduction_text.pos = [0, (2 * an2pix)];
        back_text.text = "Next: \"Space\" Key";
        back_text.pos = [0, ((- 2) * an2pix)];
        fixation_point.opacity = 0.0;
    }
    if ((intro_state === 1)) {
        introduction_text.text = "Click the center circle to display a lineup of images.";
        introduction_text.pos = [0, (4.5 * an2pix)];
        back_text.text = "Next: \"Space\" Key \n Back: \"b\" Key";
        back_text.pos = [0, ((- 4.5) * an2pix)];
        fixation_point.opacity = 1.0;
        for (var i = 0, _pj_a = image_list.length; (i < _pj_a); i += 1) {
            image_list[i].opacity = 0.0;
        }
    }
    if ((intro_state === 2)) {
        introduction_text.text = "You find a cat \n in 200 milliseconds.";
        introduction_text.pos = [(9 * an2pix), 0];
        back_text.pos = [((- 9) * an2pix), 0];
        for (var i = 0, _pj_a = image_list.length; (i < _pj_a); i += 1) {
            image_list[i].opacity = 1.0;
        }
        stimuli_arrangement.opacity = 0.0;
        for (var i = 0, _pj_a = ans_list.length; (i < _pj_a); i += 1) {
            ans_list[i].text = "";
        }
    }
    if ((intro_state === 3)) {
        introduction_text.text = "Then, click a number \n corresponding to \n the position.";
        fixation_point.opacity = 0.0;
        stimuli_arrangement.opacity = 1.0;
        for (var i = 0, _pj_a = ans_list.length; (i < _pj_a); i += 1) {
            ans_list[i].text = ans_text_list[i];
        }
    }
    if ((intro_state === 4)) {
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
    expIntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function expIntroRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'expIntro'-------
    expIntroComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "expIntro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _practice_info_key_resp_allKeys;
var practiceIntroComponents;
function practiceIntroRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practiceIntro'-------
    t = 0;
    practiceIntroClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    practice_info_key_resp.keys = undefined;
    practice_info_key_resp.rt = undefined;
    _practice_info_key_resp_allKeys = [];
    // keep track of which components have finished
    practiceIntroComponents = [];
    practiceIntroComponents.push(introduction_text_p);
    practiceIntroComponents.push(practice_info_key_resp);
    
    practiceIntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practiceIntroRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practiceIntro'-------
    // get current time
    t = practiceIntroClock.getTime();
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
    practiceIntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceIntroRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practiceIntro'-------
    practiceIntroComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    practice_info_key_resp.stop();
    // the Routine "practiceIntro" was not non-slip safe, so reset the non-slip timer
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
  PracticeTrials.forEach(function() {
    const snapshot = PracticeTrials.getSnapshot();

    PracticeTrialsLoopScheduler.add(importConditions(snapshot));
    PracticeTrialsLoopScheduler.add(gitterRoutineBegin(snapshot));
    PracticeTrialsLoopScheduler.add(gitterRoutineEachFrame(snapshot));
    PracticeTrialsLoopScheduler.add(gitterRoutineEnd(snapshot));
    PracticeTrialsLoopScheduler.add(showStimRoutineBegin(snapshot));
    PracticeTrialsLoopScheduler.add(showStimRoutineEachFrame(snapshot));
    PracticeTrialsLoopScheduler.add(showStimRoutineEnd(snapshot));
    PracticeTrialsLoopScheduler.add(brankRoutineBegin(snapshot));
    PracticeTrialsLoopScheduler.add(brankRoutineEachFrame(snapshot));
    PracticeTrialsLoopScheduler.add(brankRoutineEnd(snapshot));
    PracticeTrialsLoopScheduler.add(askQuestionRoutineBegin(snapshot));
    PracticeTrialsLoopScheduler.add(askQuestionRoutineEachFrame(snapshot));
    PracticeTrialsLoopScheduler.add(askQuestionRoutineEnd(snapshot));
    PracticeTrialsLoopScheduler.add(showFeedbackRoutineBegin(snapshot));
    PracticeTrialsLoopScheduler.add(showFeedbackRoutineEachFrame(snapshot));
    PracticeTrialsLoopScheduler.add(showFeedbackRoutineEnd(snapshot));
    PracticeTrialsLoopScheduler.add(endLoopIteration(PracticeTrialsLoopScheduler, snapshot));
  });

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
    nReps: 2, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions/expConditions.xlsx',
    seed: undefined, name: 'ActualTrials'
  });
  psychoJS.experiment.addLoop(ActualTrials); // add the loop to the experiment
  currentLoop = ActualTrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  ActualTrials.forEach(function() {
    const snapshot = ActualTrials.getSnapshot();

    ActualTrialsLoopScheduler.add(importConditions(snapshot));
    ActualTrialsLoopScheduler.add(gitterRoutineBegin(snapshot));
    ActualTrialsLoopScheduler.add(gitterRoutineEachFrame(snapshot));
    ActualTrialsLoopScheduler.add(gitterRoutineEnd(snapshot));
    ActualTrialsLoopScheduler.add(showStimRoutineBegin(snapshot));
    ActualTrialsLoopScheduler.add(showStimRoutineEachFrame(snapshot));
    ActualTrialsLoopScheduler.add(showStimRoutineEnd(snapshot));
    ActualTrialsLoopScheduler.add(askQuestionRoutineBegin(snapshot));
    ActualTrialsLoopScheduler.add(askQuestionRoutineEachFrame(snapshot));
    ActualTrialsLoopScheduler.add(askQuestionRoutineEnd(snapshot));
    ActualTrialsLoopScheduler.add(showFeedbackRoutineBegin(snapshot));
    ActualTrialsLoopScheduler.add(showFeedbackRoutineEachFrame(snapshot));
    ActualTrialsLoopScheduler.add(showFeedbackRoutineEnd(snapshot));
    ActualTrialsLoopScheduler.add(takeBreakRoutineBegin(snapshot));
    ActualTrialsLoopScheduler.add(takeBreakRoutineEachFrame(snapshot));
    ActualTrialsLoopScheduler.add(takeBreakRoutineEnd(snapshot));
    ActualTrialsLoopScheduler.add(endLoopIteration(ActualTrialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function ActualTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(ActualTrials);

  return Scheduler.Event.NEXT;
}


var gotValidClick;
var gitterComponents;
function gitterRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'gitter'-------
    t = 0;
    gitterClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    fixation_point.setAutoDraw(true);
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    document.body.style.cursor='auto';
    
    // keep track of which components have finished
    gitterComponents = [];
    gitterComponents.push(gitter_text);
    gitterComponents.push(mouse);
    
    gitterComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function gitterRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'gitter'-------
    // get current time
    t = gitterClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *gitter_text* updates
    if (t >= 0.0 && gitter_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gitter_text.tStart = t;  // (not accounting for frame time here)
      gitter_text.frameNStart = frameN;  // exact frame index
      
      gitter_text.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [eval("fixation_point")]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          // abort routine on response
          continueRoutine = false;
        }
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
    gitterComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function gitterRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'gitter'-------
    gitterComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    fixation_point.setAutoDraw(false);
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse.rightButton', _mouseButtons[2]);
    if (mouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0]);}
    document.body.style.cursor='none';
    
    // the Routine "gitter" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _non_target_classes;
var image_path;
var _fake_key_resp_allKeys;
var showStimComponents;
function showStimRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'showStim'-------
    t = 0;
    showStimClock.reset(); // clock
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
    fake_key_resp.keys = undefined;
    fake_key_resp.rt = undefined;
    _fake_key_resp_allKeys = [];
    // keep track of which components have finished
    showStimComponents = [];
    showStimComponents.push(fake_key_resp);
    
    showStimComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function showStimRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'showStim'-------
    // get current time
    t = showStimClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (showStimClock.getTime() > 0.2) {
        for (var i = 0, _pj_a = image_list.length; (i < _pj_a); i += 1) {
            image_list[i].setAutoDraw(true);
        }
    }
    
    if ((showStimClock.getTime() > 0.4)) {
        continueRoutine = false;
    }
    
    
    // *fake_key_resp* updates
    if (t >= 1.0 && fake_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fake_key_resp.tStart = t;  // (not accounting for frame time here)
      fake_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { fake_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { fake_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { fake_key_resp.clearEvents(); });
    }

    if (fake_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = fake_key_resp.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _fake_key_resp_allKeys = _fake_key_resp_allKeys.concat(theseKeys);
      if (_fake_key_resp_allKeys.length > 0) {
        fake_key_resp.keys = _fake_key_resp_allKeys[_fake_key_resp_allKeys.length - 1].name;  // just the last key pressed
        fake_key_resp.rt = _fake_key_resp_allKeys[_fake_key_resp_allKeys.length - 1].rt;
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
    showStimComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function showStimRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'showStim'-------
    showStimComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    fixation_point.setAutoDraw(false);
    
    for (var i = 0, _pj_a = image_list.length; (i < _pj_a); i += 1) {
        image_list[i].setAutoDraw(false);
    }
    psychoJS.experiment.addData('fake_key_resp.keys', fake_key_resp.keys);
    if (typeof fake_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('fake_key_resp.rt', fake_key_resp.rt);
        routineTimer.reset();
        }
    
    fake_key_resp.stop();
    // the Routine "showStim" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _fake_key_resp_2_allKeys;
var brankComponents;
function brankRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'brank'-------
    t = 0;
    brankClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    fake_key_resp_2.keys = undefined;
    fake_key_resp_2.rt = undefined;
    _fake_key_resp_2_allKeys = [];
    // keep track of which components have finished
    brankComponents = [];
    brankComponents.push(fake_key_resp_2);
    
    brankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function brankRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'brank'-------
    // get current time
    t = brankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((brankClock.getTime() > 0.5)) {
        continueRoutine = false;
    }
    
    
    // *fake_key_resp_2* updates
    if (t >= 1.0 && fake_key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fake_key_resp_2.tStart = t;  // (not accounting for frame time here)
      fake_key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { fake_key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { fake_key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { fake_key_resp_2.clearEvents(); });
    }

    if (fake_key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = fake_key_resp_2.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _fake_key_resp_2_allKeys = _fake_key_resp_2_allKeys.concat(theseKeys);
      if (_fake_key_resp_2_allKeys.length > 0) {
        fake_key_resp_2.keys = _fake_key_resp_2_allKeys[_fake_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        fake_key_resp_2.rt = _fake_key_resp_2_allKeys[_fake_key_resp_2_allKeys.length - 1].rt;
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
    brankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function brankRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'brank'-------
    brankComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('fake_key_resp_2.keys', fake_key_resp_2.keys);
    if (typeof fake_key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('fake_key_resp_2.rt', fake_key_resp_2.rt);
        routineTimer.reset();
        }
    
    fake_key_resp_2.stop();
    // the Routine "brank" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_ans_allKeys;
var askQuestionComponents;
function askQuestionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'askQuestion'-------
    t = 0;
    askQuestionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    stimuli_arrangement.setAutoDraw(true);
    
    key_ans.keys = undefined;
    key_ans.rt = undefined;
    _key_ans_allKeys = [];
    for (var i = 0, _pj_a = ans_list.length; (i < _pj_a); i += 1) {
        ans_list[i].text = ans_text_list[i];
    }
    
    for (var i = 0, _pj_a = ans_list.length; (i < _pj_a); i += 1) {
        ans_list[i].setAutoDraw(true);
    }
    // setup some python lists for storing info about the ans_mouse
    ans_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    document.body.style.cursor='auto';
    
    // keep track of which components have finished
    askQuestionComponents = [];
    askQuestionComponents.push(question_text);
    askQuestionComponents.push(key_ans);
    askQuestionComponents.push(ans_mouse);
    
    askQuestionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function askQuestionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'askQuestion'-------
    // get current time
    t = askQuestionClock.getTime();
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
    
    // *ans_mouse* updates
    if (t >= 0.0 && ans_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ans_mouse.tStart = t;  // (not accounting for frame time here)
      ans_mouse.frameNStart = frameN;  // exact frame index
      
      ans_mouse.status = PsychoJS.Status.STARTED;
      ans_mouse.mouseClock.reset();
      prevButtonState = ans_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (ans_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = ans_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [eval("ans_0_0"), eval("ans_0_1"), eval("ans_0_2"), eval("ans_0_3"), eval("ans_1_0"), eval("ans_1_1"), eval("ans_1_2"), eval("ans_1_3"), eval("ans_2_0"), eval("ans_2_1"), eval("ans_2_2"), eval("ans_2_3")]) {
            if (obj.contains(ans_mouse)) {
              gotValidClick = true;
              ans_mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
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
    askQuestionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function askQuestionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'askQuestion'-------
    askQuestionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    stimuli_arrangement.setAutoDraw(false);
    
    psychoJS.experiment.addData('key_ans.keys', key_ans.keys);
    if (typeof key_ans.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_ans.rt', key_ans.rt);
        routineTimer.reset();
        }
    
    key_ans.stop();
    for (var i = 0, _pj_a = ans_list.length; (i < _pj_a); i += 1) {
        ans_list[i].setAutoDraw(false);
    }
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = ans_mouse.getPos();
    _mouseButtons = ans_mouse.getPressed();
    psychoJS.experiment.addData('ans_mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('ans_mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('ans_mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('ans_mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('ans_mouse.rightButton', _mouseButtons[2]);
    if (ans_mouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('ans_mouse.clicked_name', ans_mouse.clicked_name[0]);}
    document.body.style.cursor='none';
    
    // the Routine "askQuestion" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _show_fb_key_resp_allKeys;
var showFeedbackComponents;
function showFeedbackRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'showFeedback'-------
    t = 0;
    showFeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((ans_to_pos[ans_mouse.clicked_name[0]][0] === pos) && (ans_to_pos[ans_mouse.clicked_name[0]][1] === ori)) {
        feedback_text.text = "Correct!";
        feedback_text.color = "springgreen";
        thisExp.addData("TF", "True");
    } else {
        feedback_text.text = "Wrong";
        feedback_text.color = "orangered";
        thisExp.addData("TF", "False");
    }
    
    show_fb_key_resp.keys = undefined;
    show_fb_key_resp.rt = undefined;
    _show_fb_key_resp_allKeys = [];
    // keep track of which components have finished
    showFeedbackComponents = [];
    showFeedbackComponents.push(feedback_text);
    showFeedbackComponents.push(show_fb_key_resp);
    
    showFeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function showFeedbackRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'showFeedback'-------
    // get current time
    t = showFeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    if (showFeedbackClock.getTime() > 1) {
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
    showFeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function showFeedbackRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'showFeedback'-------
    showFeedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    show_fb_key_resp.stop();
    // the Routine "showFeedback" was not non-slip safe, so reset the non-slip timer
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
    
    actual_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    actual_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    actual_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    actual_intro_key_resp.stop();
    // the Routine "actual_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var takeBreakComponents;
function takeBreakRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'takeBreak'-------
    t = 0;
    takeBreakClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.000000);
    // update component parameters for each repeat
    if ((count != 47) || (reps == 1)) {
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
    takeBreakComponents = [];
    takeBreakComponents.push(break_text);
    
    takeBreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function takeBreakRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'takeBreak'-------
    // get current time
    t = takeBreakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *break_text* updates
    if (t >= 0.0 && break_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_text.tStart = t;  // (not accounting for frame time here)
      break_text.frameNStart = frameN;  // exact frame index
      
      break_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (break_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      break_text.setAutoDraw(false);
    }
    // if ((takeBreakClock.getTime() > 30)) {
    //     continueRoutine = false;
    // }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    takeBreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function takeBreakRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'takeBreak'-------
    takeBreakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var survey_code;
var _finish_key_resp_allKeys;
var publishSurveyCodeComponents;
function publishSurveyCodeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'publishSurveyCode'-------
    t = 0;
    publishSurveyCodeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    survey_code = "";
    for (var i = 0, _pj_a = 6; (i < _pj_a); i += 1) {
        survey_code += (Math.floor(Math.random() * 10)).toString();
    }
    show_thanks_and_code.text = (("The experiment has finished. \n Thank you for your patience. \n\n Your survey code is " + survey_code) + ". \n\n Please type this code to this experiment page \n on amazon mturk. \n If you done, press \"f\" key to finish the experiment.");
    thisExp.addData("surveyCode", survey_code);
    
    finish_key_resp.keys = undefined;
    finish_key_resp.rt = undefined;
    _finish_key_resp_allKeys = [];
    // keep track of which components have finished
    publishSurveyCodeComponents = [];
    publishSurveyCodeComponents.push(show_thanks_and_code);
    publishSurveyCodeComponents.push(finish_key_resp);
    
    publishSurveyCodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function publishSurveyCodeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'publishSurveyCode'-------
    // get current time
    t = publishSurveyCodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *show_thanks_and_code* updates
    if (t >= 0.0 && show_thanks_and_code.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      show_thanks_and_code.tStart = t;  // (not accounting for frame time here)
      show_thanks_and_code.frameNStart = frameN;  // exact frame index
      
      show_thanks_and_code.setAutoDraw(true);
    }

    
    // *finish_key_resp* updates
    if (t >= 0.0 && finish_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finish_key_resp.tStart = t;  // (not accounting for frame time here)
      finish_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { finish_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { finish_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { finish_key_resp.clearEvents(); });
    }

    if (finish_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = finish_key_resp.getKeys({keyList: ['f'], waitRelease: false});
      _finish_key_resp_allKeys = _finish_key_resp_allKeys.concat(theseKeys);
      if (_finish_key_resp_allKeys.length > 0) {
        finish_key_resp.keys = _finish_key_resp_allKeys[_finish_key_resp_allKeys.length - 1].name;  // just the last key pressed
        finish_key_resp.rt = _finish_key_resp_allKeys[_finish_key_resp_allKeys.length - 1].rt;
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
    publishSurveyCodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function publishSurveyCodeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'publishSurveyCode'-------
    publishSurveyCodeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    finish_key_resp.stop();
    // the Routine "publishSurveyCode" was not non-slip safe, so reset the non-slip timer
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
