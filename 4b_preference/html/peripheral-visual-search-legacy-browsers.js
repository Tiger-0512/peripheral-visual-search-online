/********************************* 
 * Peripheral-Visual-Search Test *
 *********************************/

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
let expName = 'peripheral-visual-search';  // from the Builder filename that created this script
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
const PracticeTrials1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(PracticeTrials1LoopBegin, PracticeTrials1LoopScheduler);
flowScheduler.add(PracticeTrials1LoopScheduler);
flowScheduler.add(PracticeTrials1LoopEnd);
flowScheduler.add(actualIntro1RoutineBegin());
flowScheduler.add(actualIntro1RoutineEachFrame());
flowScheduler.add(actualIntro1RoutineEnd());
const ActualTrials1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ActualTrials1LoopBegin, ActualTrials1LoopScheduler);
flowScheduler.add(ActualTrials1LoopScheduler);
flowScheduler.add(ActualTrials1LoopEnd);
flowScheduler.add(expIntro2RoutineBegin());
flowScheduler.add(expIntro2RoutineEachFrame());
flowScheduler.add(expIntro2RoutineEnd());
flowScheduler.add(practiceIntroRoutineBegin());
flowScheduler.add(practiceIntroRoutineEachFrame());
flowScheduler.add(practiceIntroRoutineEnd());
const PracticeTrials2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(PracticeTrials2LoopBegin, PracticeTrials2LoopScheduler);
flowScheduler.add(PracticeTrials2LoopScheduler);
flowScheduler.add(PracticeTrials2LoopEnd);
flowScheduler.add(actualIntro2RoutineBegin());
flowScheduler.add(actualIntro2RoutineEachFrame());
flowScheduler.add(actualIntro2RoutineEnd());
const ActualTrials2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ActualTrials2LoopBegin, ActualTrials2LoopScheduler);
flowScheduler.add(ActualTrials2LoopScheduler);
flowScheduler.add(ActualTrials2LoopEnd);
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
var dataset_classes;
var num_to_class;
var ans_keys_list;
var key_to_pos;
var ans_text_list;
var intro_state;
var count;
var eccentricity_level_0;
var eccentricity_level_1;
var eccentricity_level_2;
var eccentricities;
var stimuli;
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
var mouse;
var gitter_text;
var showStim1Clock;
var show_stim_key_resp;
var mouse_2;
var askQuestion1Clock;
var question_text;
var ans_mouse;
var actualIntro1Clock;
var introduction_text_a1;
var actual_intro_key_resp1;
var takeBreakClock;
var break_text;
var expIntro2Clock;
var square_0_0;
var square_0_1;
var square_0_2;
var square_0_3;
var square_1_0;
var square_1_1;
var square_1_2;
var square_1_3;
var square_2_0;
var square_2_1;
var square_2_2;
var square_2_3;
var introduction_text2;
var back_text2;
var initializeTrialClock;
var mouse_3;
var gitter_text2;
var clickable_list;
var showStim2Clock;
var ans_mouse2;
var ans_text;
var updateSquaresClock;
var actualIntro2Clock;
var Introduction_text_a2;
var actual_intro_key_resp2;
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
  dataset_classes = {
      0: "bear",
      1: "cat",
      2: "dog",
      3: "elephant",
      4: "hamster",
      5: "monkey",
      6: "rabbit",
      7: "sheep"
  };
  
  num_to_class = ["bear", "cat", "dog", "elephant", "hamster", "monkey", "rabbit", "sheep"];
  
  ans_keys_list = [["b", "a", "c", "d"], ["g", "e", "f", "h"], ["j", "i", "k", "l"]];
  key_to_pos = {};
  for (var i = 0, _pj_a = ans_keys_list.length; (i < _pj_a); i += 1) {
      for (var j = 0, _pj_b = ans_keys_list[i].length; (j < _pj_b); j += 1) {
          key_to_pos[ans_keys_list[i][j]] = [i, j];
      }
  }
  
  ans_text_list = ["2", "1", "3", "4", "7", "5", "6", "8", "10", "9", "11", "12"];
  
  intro_state = -1;
  count = 0;
  
  eccentricity_level_0 = Math.round(Math.sqrt(2) * 100) / 100;
  eccentricity_level_1 = Math.round((1 + Math.sqrt(8)) * 100) / 100;
  eccentricity_level_2 = Math.round(((Math.sqrt(2) + 4 + Math.sqrt(Math.pow((Math.sqrt(2) + 4), 2) - 4 * (4 * Math.sqrt(2) - 27))) / 2) * 100) / 100;
  eccentricities = [eccentricity_level_0, eccentricity_level_1, eccentricity_level_2];
  
  stimuli = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimuli', units : undefined, 
    image : 'html/resources/imagenet/practice/1/practice_2.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  stimuli_arrangement = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimuli_arrangement', units : undefined, 
    image : 'html/resources/stimuli_arrangement.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [an2pix, an2pix],
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  ans_0_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_0_0',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.5 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  ans_0_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_0_1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.5 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  ans_0_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_0_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.5 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  ans_0_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_0_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.5 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  ans_1_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_1_0',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.5 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  ans_1_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_1_1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.5 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  ans_1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_1_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.5 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  ans_1_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_1_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.5 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -13.0 
  });
  
  ans_2_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_2_0',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.5 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -14.0 
  });
  
  ans_2_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_2_1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.5 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -15.0 
  });
  
  ans_2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_2_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.5 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -16.0 
  });
  
  ans_2_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_2_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.5 * an2pix,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -17.0 
  });
  
  fixation_point = new visual.Polygon ({
    win: psychoJS.window, name: 'fixation_point', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([0.5059, 0.5059, 0.5059]),
    fillColor: new util.Color([0.5059, 0.5059, 0.5059]),
    opacity: 1.0, depth: -20, interpolate: true,
  });
  
  introduction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'introduction_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (2 * an2pix)], height: an2pix * 0.6,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -21.0 
  });
  
  back_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'back_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, ((- 2) * an2pix)], height: an2pix * 0.5,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -22.0 
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
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  gitter_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'gitter_text',
    text: 'Click the center circle to start.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, ((- an2pix) * 1.5)], height: an2pix * 0.7,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "showStim1"
  showStim1Clock = new util.Clock();
  show_stim_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "askQuestion1"
  askQuestion1Clock = new util.Clock();
  question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_text',
    text: 'Where was your favorite image?\nPlease click the number.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(10 * an2pix), 0], height: an2pix * 0.5,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  ans_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  ans_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "actualIntro1"
  actualIntro1Clock = new util.Clock();
  introduction_text_a1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'introduction_text_a1',
    text: "Practice part has finished.\n\nNext part is the actual experiment.\n\nThe task 1 has 160 trials in total.\nYou’ll take a short break after 80 trials.\n\nHit 's' Key when ready.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: an2pix * 0.7,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  actual_intro_key_resp1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "gitter"
  gitterClock = new util.Clock();
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  gitter_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'gitter_text',
    text: 'Click the center circle to start.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, ((- an2pix) * 1.5)], height: an2pix * 0.7,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "showStim1"
  showStim1Clock = new util.Clock();
  show_stim_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "askQuestion1"
  askQuestion1Clock = new util.Clock();
  question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_text',
    text: 'Where was your favorite image?\nPlease click the number.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(10 * an2pix), 0], height: an2pix * 0.5,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  ans_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  ans_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "takeBreak"
  takeBreakClock = new util.Clock();
  break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_text',
    text: 'Please take a short break.\n\nOnce the experiment is ready, \nthe window will change to the fixation point.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: an2pix * 0.7,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "expIntro2"
  expIntro2Clock = new util.Clock();
  num_to_class = ["bear", "cat", "dog", "elephant", "hamster", "monkey", "rabbit", "sheep"];
  
  square_0_0 = new visual.Rect ({
    win: psychoJS.window, name: 'square_0_0', 
    width: [(an2pix * 2.5), (an2pix * 2.5)][0], height: [(an2pix * 2.5), (an2pix * 2.5)][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('gray'),
    fillColor: new util.Color('gray'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  square_0_1 = new visual.Rect ({
    win: psychoJS.window, name: 'square_0_1', 
    width: [(an2pix * 2.5), (an2pix * 2.5)][0], height: [(an2pix * 2.5), (an2pix * 2.5)][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('gray'),
    fillColor: new util.Color('gray'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  square_0_2 = new visual.Rect ({
    win: psychoJS.window, name: 'square_0_2', 
    width: [(an2pix * 2.5), (an2pix * 2.5)][0], height: [(an2pix * 2.5), (an2pix * 2.5)][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('gray'),
    fillColor: new util.Color('gray'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  square_0_3 = new visual.Rect ({
    win: psychoJS.window, name: 'square_0_3', 
    width: [(an2pix * 2.5), (an2pix * 2.5)][0], height: [(an2pix * 2.5), (an2pix * 2.5)][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('gray'),
    fillColor: new util.Color('gray'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  square_1_0 = new visual.Rect ({
    win: psychoJS.window, name: 'square_1_0', 
    width: [(an2pix * 2.5), (an2pix * 2.5)][0], height: [(an2pix * 2.5), (an2pix * 2.5)][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('gray'),
    fillColor: new util.Color('gray'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  square_1_1 = new visual.Rect ({
    win: psychoJS.window, name: 'square_1_1', 
    width: [(an2pix * 2.5), (an2pix * 2.5)][0], height: [(an2pix * 2.5), (an2pix * 2.5)][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('gray'),
    fillColor: new util.Color('gray'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  square_1_2 = new visual.Rect ({
    win: psychoJS.window, name: 'square_1_2', 
    width: [(an2pix * 2.5), (an2pix * 2.5)][0], height: [(an2pix * 2.5), (an2pix * 2.5)][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('gray'),
    fillColor: new util.Color('gray'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  square_1_3 = new visual.Rect ({
    win: psychoJS.window, name: 'square_1_3', 
    width: [(an2pix * 2.5), (an2pix * 2.5)][0], height: [(an2pix * 2.5), (an2pix * 2.5)][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('gray'),
    fillColor: new util.Color('gray'),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  square_2_0 = new visual.Rect ({
    win: psychoJS.window, name: 'square_2_0', 
    width: [(an2pix * 2.5), (an2pix * 2.5)][0], height: [(an2pix * 2.5), (an2pix * 2.5)][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('gray'),
    fillColor: new util.Color('gray'),
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  square_2_1 = new visual.Rect ({
    win: psychoJS.window, name: 'square_2_1', 
    width: [(an2pix * 2.5), (an2pix * 2.5)][0], height: [(an2pix * 2.5), (an2pix * 2.5)][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('gray'),
    fillColor: new util.Color('gray'),
    opacity: undefined, depth: -11, interpolate: true,
  });
  
  square_2_2 = new visual.Rect ({
    win: psychoJS.window, name: 'square_2_2', 
    width: [(an2pix * 2.5), (an2pix * 2.5)][0], height: [(an2pix * 2.5), (an2pix * 2.5)][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('gray'),
    fillColor: new util.Color('gray'),
    opacity: undefined, depth: -12, interpolate: true,
  });
  
  square_2_3 = new visual.Rect ({
    win: psychoJS.window, name: 'square_2_3', 
    width: [(an2pix * 2.5), (an2pix * 2.5)][0], height: [(an2pix * 2.5), (an2pix * 2.5)][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('gray'),
    fillColor: new util.Color('gray'),
    opacity: undefined, depth: -13, interpolate: true,
  });
  
  introduction_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'introduction_text2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: an2pix * 0.5,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -15.0 
  });
  
  back_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'back_text2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: an2pix * 0.4,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -16.0 
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
  
  // Initialize components for Routine "initializeTrial"
  initializeTrialClock = new util.Clock();
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  gitter_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'gitter_text2',
    text: 'After click the center circle,\nlook for the favorite image from the presented images.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, ((- 2) * an2pix)], height: an2pix * 0.6,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  clickable_list = [];
  
  // Initialize components for Routine "showStim2"
  showStim2Clock = new util.Clock();
  ans_mouse2 = new core.Mouse({
    win: psychoJS.window,
  });
  ans_mouse2.mouseClock = new util.Clock();
  ans_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: an2pix * 0.6,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "updateSquares"
  updateSquaresClock = new util.Clock();
  // Initialize components for Routine "actualIntro2"
  actualIntro2Clock = new util.Clock();
  Introduction_text_a2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Introduction_text_a2',
    text: "Practice part has finished.\n\nNext part is the actual experiment.\n\nThe task 2 has 160 trials in total.\nYou’ll take a short break after 80 trials.\n\nHit 's' Key when ready.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: an2pix * 0.7,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  actual_intro_key_resp2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "initializeTrial"
  initializeTrialClock = new util.Clock();
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  gitter_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'gitter_text2',
    text: 'After click the center circle,\nlook for the favorite image from the presented images.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, ((- 2) * an2pix)], height: an2pix * 0.6,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  clickable_list = [];
  
  // Initialize components for Routine "showStim2"
  showStim2Clock = new util.Clock();
  ans_mouse2 = new core.Mouse({
    win: psychoJS.window,
  });
  ans_mouse2.mouseClock = new util.Clock();
  ans_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'ans_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: an2pix * 0.6,  wrapWidth: 10000.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "updateSquares"
  updateSquaresClock = new util.Clock();
  // Initialize components for Routine "takeBreak"
  takeBreakClock = new util.Clock();
  break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_text',
    text: 'Please take a short break.\n\nOnce the experiment is ready, \nthe window will change to the fixation point.',
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
    stimuli.setSize([1200, 1200]);
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
    expIntroComponents.push(stimuli);
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
    
    // *stimuli* updates
    if (t >= 0.0 && stimuli.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimuli.tStart = t;  // (not accounting for frame time here)
      stimuli.frameNStart = frameN;  // exact frame index
      
      stimuli.setAutoDraw(true);
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
    
    if (intro_state === 0) {
        introduction_text.text = "This expeirment consists of the two tasks. \n The task 1 is \n \"To find your favorite image from animal images.\" ";
        introduction_text.pos = [0, (2 * an2pix)];
        back_text.text = "Next: \"Space\" Key";
        back_text.pos = [0, ((- 2) * an2pix)];
        fixation_point.opacity = 0.0;
    }
    if (intro_state === 1) {
        introduction_text.text = "Click the center circle to display a lineup of images.";
        introduction_text.pos = [0, (4.5 * an2pix)];
        back_text.text = "Next: \"Space\" Key \n Back: \"b\" Key";
        back_text.pos = [0, ((- 4.5) * an2pix)];
        fixation_point.opacity = 1.0;
        stimuli.opacity = 0.0;
    }
    if (intro_state === 2) {
        introduction_text.text = "When you find your favorite image, \n click your mouse. \n\n The time limit is 3 sec \n on each trial.";
        introduction_text.pos = [(9 * an2pix), 0];
        back_text.pos = [((- 9) * an2pix), 0];
        stimuli.opacity = 1.0;
        stimuli_arrangement.opacity = 0.0;
        for (var i = 0, _pj_a = ans_list.length; (i < _pj_a); i += 1) {
            ans_list[i].text = "";
        }
    }
    if (intro_state === 3) {
        introduction_text.text = "Then, click a number \n corresponding to \n the position.";
        fixation_point.opacity = 0.0;
        stimuli_arrangement.opacity = 1.0;
        for (var i = 0, _pj_a = ans_list.length; (i < _pj_a); i += 1) {
            ans_list[i].text = ans_text_list[i];
        }
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
    intro_state = 0;
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


var PracticeTrials1;
var currentLoop;
function PracticeTrials1LoopBegin(PracticeTrials1LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  PracticeTrials1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions/practiceTrials1.xlsx',
    seed: undefined, name: 'PracticeTrials1'
  });
  psychoJS.experiment.addLoop(PracticeTrials1); // add the loop to the experiment
  currentLoop = PracticeTrials1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  PracticeTrials1.forEach(function() {
    const snapshot = PracticeTrials1.getSnapshot();

    PracticeTrials1LoopScheduler.add(importConditions(snapshot));
    PracticeTrials1LoopScheduler.add(gitterRoutineBegin(snapshot));
    PracticeTrials1LoopScheduler.add(gitterRoutineEachFrame(snapshot));
    PracticeTrials1LoopScheduler.add(gitterRoutineEnd(snapshot));
    PracticeTrials1LoopScheduler.add(showStim1RoutineBegin(snapshot));
    PracticeTrials1LoopScheduler.add(showStim1RoutineEachFrame(snapshot));
    PracticeTrials1LoopScheduler.add(showStim1RoutineEnd(snapshot));
    PracticeTrials1LoopScheduler.add(askQuestion1RoutineBegin(snapshot));
    PracticeTrials1LoopScheduler.add(askQuestion1RoutineEachFrame(snapshot));
    PracticeTrials1LoopScheduler.add(askQuestion1RoutineEnd(snapshot));
    PracticeTrials1LoopScheduler.add(endLoopIteration(PracticeTrials1LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function PracticeTrials1LoopEnd() {
  psychoJS.experiment.removeLoop(PracticeTrials1);

  return Scheduler.Event.NEXT;
}


var ActualTrials1;
function ActualTrials1LoopBegin(ActualTrials1LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  ActualTrials1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions/actualTrials1.xlsx',
    seed: undefined, name: 'ActualTrials1'
  });
  psychoJS.experiment.addLoop(ActualTrials1); // add the loop to the experiment
  currentLoop = ActualTrials1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  ActualTrials1.forEach(function() {
    const snapshot = ActualTrials1.getSnapshot();

    ActualTrials1LoopScheduler.add(importConditions(snapshot));
    ActualTrials1LoopScheduler.add(gitterRoutineBegin(snapshot));
    ActualTrials1LoopScheduler.add(gitterRoutineEachFrame(snapshot));
    ActualTrials1LoopScheduler.add(gitterRoutineEnd(snapshot));
    ActualTrials1LoopScheduler.add(showStim1RoutineBegin(snapshot));
    ActualTrials1LoopScheduler.add(showStim1RoutineEachFrame(snapshot));
    ActualTrials1LoopScheduler.add(showStim1RoutineEnd(snapshot));
    ActualTrials1LoopScheduler.add(askQuestion1RoutineBegin(snapshot));
    ActualTrials1LoopScheduler.add(askQuestion1RoutineEachFrame(snapshot));
    ActualTrials1LoopScheduler.add(askQuestion1RoutineEnd(snapshot));
    ActualTrials1LoopScheduler.add(takeBreakRoutineBegin(snapshot));
    ActualTrials1LoopScheduler.add(takeBreakRoutineEachFrame(snapshot));
    ActualTrials1LoopScheduler.add(takeBreakRoutineEnd(snapshot));
    ActualTrials1LoopScheduler.add(endLoopIteration(ActualTrials1LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function ActualTrials1LoopEnd() {
  psychoJS.experiment.removeLoop(ActualTrials1);

  return Scheduler.Event.NEXT;
}


var PracticeTrials2;
function PracticeTrials2LoopBegin(PracticeTrials2LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  PracticeTrials2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions/practiceTrials2.xlsx',
    seed: undefined, name: 'PracticeTrials2'
  });
  psychoJS.experiment.addLoop(PracticeTrials2); // add the loop to the experiment
  currentLoop = PracticeTrials2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  PracticeTrials2.forEach(function() {
    const snapshot = PracticeTrials2.getSnapshot();

    PracticeTrials2LoopScheduler.add(importConditions(snapshot));
    PracticeTrials2LoopScheduler.add(initializeTrialRoutineBegin(snapshot));
    PracticeTrials2LoopScheduler.add(initializeTrialRoutineEachFrame(snapshot));
    PracticeTrials2LoopScheduler.add(initializeTrialRoutineEnd(snapshot));
    const rankImages_pLoopScheduler = new Scheduler(psychoJS);
    PracticeTrials2LoopScheduler.add(rankImages_pLoopBegin, rankImages_pLoopScheduler);
    PracticeTrials2LoopScheduler.add(rankImages_pLoopScheduler);
    PracticeTrials2LoopScheduler.add(rankImages_pLoopEnd);
    PracticeTrials2LoopScheduler.add(endLoopIteration(PracticeTrials2LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var rankImages_p;
function rankImages_pLoopBegin(rankImages_pLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  rankImages_p = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 12, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'rankImages_p'
  });
  psychoJS.experiment.addLoop(rankImages_p); // add the loop to the experiment
  currentLoop = rankImages_p;  // we're now the current loop

  // Schedule all the trials in the trialList:
  rankImages_p.forEach(function() {
    const snapshot = rankImages_p.getSnapshot();

    rankImages_pLoopScheduler.add(importConditions(snapshot));
    rankImages_pLoopScheduler.add(showStim2RoutineBegin(snapshot));
    rankImages_pLoopScheduler.add(showStim2RoutineEachFrame(snapshot));
    rankImages_pLoopScheduler.add(showStim2RoutineEnd(snapshot));
    rankImages_pLoopScheduler.add(updateSquaresRoutineBegin(snapshot));
    rankImages_pLoopScheduler.add(updateSquaresRoutineEachFrame(snapshot));
    rankImages_pLoopScheduler.add(updateSquaresRoutineEnd(snapshot));
    rankImages_pLoopScheduler.add(endLoopIteration(rankImages_pLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function rankImages_pLoopEnd() {
  psychoJS.experiment.removeLoop(rankImages_p);

  return Scheduler.Event.NEXT;
}


function PracticeTrials2LoopEnd() {
  psychoJS.experiment.removeLoop(PracticeTrials2);

  return Scheduler.Event.NEXT;
}


var ActualTrials2;
function ActualTrials2LoopBegin(ActualTrials2LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  ActualTrials2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions/actualTrials2.xlsx',
    seed: undefined, name: 'ActualTrials2'
  });
  psychoJS.experiment.addLoop(ActualTrials2); // add the loop to the experiment
  currentLoop = ActualTrials2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  ActualTrials2.forEach(function() {
    const snapshot = ActualTrials2.getSnapshot();

    ActualTrials2LoopScheduler.add(importConditions(snapshot));
    ActualTrials2LoopScheduler.add(initializeTrialRoutineBegin(snapshot));
    ActualTrials2LoopScheduler.add(initializeTrialRoutineEachFrame(snapshot));
    ActualTrials2LoopScheduler.add(initializeTrialRoutineEnd(snapshot));
    const rankImages_aLoopScheduler = new Scheduler(psychoJS);
    ActualTrials2LoopScheduler.add(rankImages_aLoopBegin, rankImages_aLoopScheduler);
    ActualTrials2LoopScheduler.add(rankImages_aLoopScheduler);
    ActualTrials2LoopScheduler.add(rankImages_aLoopEnd);
    ActualTrials2LoopScheduler.add(takeBreakRoutineBegin(snapshot));
    ActualTrials2LoopScheduler.add(takeBreakRoutineEachFrame(snapshot));
    ActualTrials2LoopScheduler.add(takeBreakRoutineEnd(snapshot));
    ActualTrials2LoopScheduler.add(endLoopIteration(ActualTrials2LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var rankImages_a;
function rankImages_aLoopBegin(rankImages_aLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  rankImages_a = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 12, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'rankImages_a'
  });
  psychoJS.experiment.addLoop(rankImages_a); // add the loop to the experiment
  currentLoop = rankImages_a;  // we're now the current loop

  // Schedule all the trials in the trialList:
  rankImages_a.forEach(function() {
    const snapshot = rankImages_a.getSnapshot();

    rankImages_aLoopScheduler.add(importConditions(snapshot));
    rankImages_aLoopScheduler.add(showStim2RoutineBegin(snapshot));
    rankImages_aLoopScheduler.add(showStim2RoutineEachFrame(snapshot));
    rankImages_aLoopScheduler.add(showStim2RoutineEnd(snapshot));
    rankImages_aLoopScheduler.add(updateSquaresRoutineBegin(snapshot));
    rankImages_aLoopScheduler.add(updateSquaresRoutineEachFrame(snapshot));
    rankImages_aLoopScheduler.add(updateSquaresRoutineEnd(snapshot));
    rankImages_aLoopScheduler.add(endLoopIteration(rankImages_aLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function rankImages_aLoopEnd() {
  psychoJS.experiment.removeLoop(rankImages_a);

  return Scheduler.Event.NEXT;
}


function ActualTrials2LoopEnd() {
  psychoJS.experiment.removeLoop(ActualTrials2);

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
    fixation_point.fillColor = [(- 0.498), (- 0.498), (- 0.498)];
    fixation_point.lineColor = [(- 0.498), (- 0.498), (- 0.498)];
    fixation_point.setAutoDraw(true);
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    document.body.style.cursor='auto';
    
    // keep track of which components have finished
    gitterComponents = [];
    gitterComponents.push(mouse);
    gitterComponents.push(gitter_text);
    
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
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
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
    fixation_point.fillColor = [0.5059, 0.5059, 0.5059];
    fixation_point.lineColor = [0.5059, 0.5059, 0.5059];
    
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


var image_path;
var _show_stim_key_resp_allKeys;
var showStim1Components;
function showStim1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'showStim1'-------
    t = 0;
    showStim1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (currentLoop.name == "PracticeTrials1") {
        image_path = `imagenet/practice/1/practice_${presented_class}.png`;
    } else {
        if (magnified === 1) {
            image_path = `imagenet/2/magnified/${num_to_class[presented_class]}/${num_to_class[presented_class]}_1${image_n}.png`;
        } else {
            image_path = `imagenet/2/standard/${num_to_class[presented_class]}/${num_to_class[presented_class]}_${image_n}.png`;
        }
    }
    stimuli.setImage(image_path);
    
    thisExp.addData("stimuli", image_path);
    fixation_point.setAutoDraw(true);
    show_stim_key_resp.keys = undefined;
    show_stim_key_resp.rt = undefined;
    _show_stim_key_resp_allKeys = [];
    // setup some python lists for storing info about the mouse_2
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    showStim1Components = [];
    showStim1Components.push(show_stim_key_resp);
    showStim1Components.push(mouse_2);
    
    showStim1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function showStim1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'showStim1'-------
    // get current time
    t = showStim1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (showStim1Clock.getTime() > 1) {
        stimuli.setAutoDraw(true);
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
    
    // *mouse_2* updates
    if (t >= 1.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    if ((showStim1Clock.getTime() > 4)) {
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
    showStim1Components.forEach( function(thisComponent) {
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


function showStim1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'showStim1'-------
    showStim1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    fixation_point.setAutoDraw(false);
    stimuli.setAutoDraw(false);
    show_stim_key_resp.stop();
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_2.getPos();
    _mouseButtons = mouse_2.getPressed();
    psychoJS.experiment.addData('mouse_2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_2.rightButton', _mouseButtons[2]);
    thisExp.addData("reactionTime", (showStim1Clock.getTime() - 1));
    
    // the Routine "showStim1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var askQuestion1Components;
function askQuestion1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'askQuestion1'-------
    t = 0;
    askQuestion1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    stimuli_arrangement.setAutoDraw(true);
    
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
    askQuestion1Components = [];
    askQuestion1Components.push(question_text);
    askQuestion1Components.push(ans_mouse);
    
    askQuestion1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function askQuestion1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'askQuestion1'-------
    // get current time
    t = askQuestion1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question_text* updates
    if (t >= 0.0 && question_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_text.tStart = t;  // (not accounting for frame time here)
      question_text.frameNStart = frameN;  // exact frame index
      
      question_text.setAutoDraw(true);
    }

    // *ans_mouse* updates
    if (t >= 0.1 && ans_mouse.status === PsychoJS.Status.NOT_STARTED) {
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
    askQuestion1Components.forEach( function(thisComponent) {
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


function askQuestion1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'askQuestion1'-------
    askQuestion1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    stimuli_arrangement.setAutoDraw(false);
    
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
    
    // the Routine "askQuestion1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _actual_intro_key_resp1_allKeys;
var actualIntro1Components;
function actualIntro1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'actualIntro1'-------
    t = 0;
    actualIntro1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    actual_intro_key_resp1.keys = undefined;
    actual_intro_key_resp1.rt = undefined;
    _actual_intro_key_resp1_allKeys = [];
    count = 0;
    
    // keep track of which components have finished
    actualIntro1Components = [];
    actualIntro1Components.push(introduction_text_a1);
    actualIntro1Components.push(actual_intro_key_resp1);
    
    actualIntro1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function actualIntro1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'actualIntro1'-------
    // get current time
    t = actualIntro1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *introduction_text_a1* updates
    if (t >= 0.0 && introduction_text_a1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction_text_a1.tStart = t;  // (not accounting for frame time here)
      introduction_text_a1.frameNStart = frameN;  // exact frame index
      
      introduction_text_a1.setAutoDraw(true);
    }

    
    // *actual_intro_key_resp1* updates
    if (t >= 0.0 && actual_intro_key_resp1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      actual_intro_key_resp1.tStart = t;  // (not accounting for frame time here)
      actual_intro_key_resp1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { actual_intro_key_resp1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { actual_intro_key_resp1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { actual_intro_key_resp1.clearEvents(); });
    }

    if (actual_intro_key_resp1.status === PsychoJS.Status.STARTED) {
      let theseKeys = actual_intro_key_resp1.getKeys({keyList: ['s'], waitRelease: false});
      _actual_intro_key_resp1_allKeys = _actual_intro_key_resp1_allKeys.concat(theseKeys);
      if (_actual_intro_key_resp1_allKeys.length > 0) {
        actual_intro_key_resp1.keys = _actual_intro_key_resp1_allKeys[_actual_intro_key_resp1_allKeys.length - 1].name;  // just the last key pressed
        actual_intro_key_resp1.rt = _actual_intro_key_resp1_allKeys[_actual_intro_key_resp1_allKeys.length - 1].rt;
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
    actualIntro1Components.forEach( function(thisComponent) {
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


function actualIntro1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'actualIntro1'-------
    actualIntro1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    actual_intro_key_resp1.stop();
    // the Routine "actualIntro1" was not non-slip safe, so reset the non-slip timer
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
    count += 1;
    if (((count + 1) % 80) !== 0) {
        continueRoutine = false;
    }
    if ((count + 1) === 160) {
        continueRoutine = false;
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


var square_list;
var ecc;
var expIntro2Components;
function expIntro2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'expIntro2'-------
    t = 0;
    expIntro2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_path = 'imagenet/practice/one_level/practice_0.png'
    stimuli.setImage(image_path);
    square_list = [square_0_0, square_0_1, square_0_2, square_0_3, square_1_0, square_1_1, square_1_2, square_1_3, square_2_0, square_2_1, square_2_2, square_2_3];
    ecc = 6;
    for (var i = 0, _pj_a = square_list.length; (i < _pj_a); i += 1) {
        square_list[i].pos = [
            an2pix * ecc * Math.cos(calcRad((i % 12) * 30)),
            an2pix * ecc * Math.sin(calcRad((i % 12) * 30))
        ];
        square_list[i].opacity = 0.0;
    }
    
    intro_state = -1;
    
    stimuli.opacity = 0.0;
    fixation_point.opacity = 0.0;
    stimuli.setAutoDraw(true);
    fixation_point.setAutoDraw(true);
    
    document.body.style.cursor='auto';
    
    // keep track of which components have finished
    expIntro2Components = [];
    expIntro2Components.push(square_0_0);
    expIntro2Components.push(square_0_1);
    expIntro2Components.push(square_0_2);
    expIntro2Components.push(square_0_3);
    expIntro2Components.push(square_1_0);
    expIntro2Components.push(square_1_1);
    expIntro2Components.push(square_1_2);
    expIntro2Components.push(square_1_3);
    expIntro2Components.push(square_2_0);
    expIntro2Components.push(square_2_1);
    expIntro2Components.push(square_2_2);
    expIntro2Components.push(square_2_3);
    expIntro2Components.push(introduction_text2);
    expIntro2Components.push(back_text2);
    
    expIntro2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function expIntro2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'expIntro2'-------
    // get current time
    t = expIntro2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *square_0_0* updates
    if (t >= 0.0 && square_0_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_0_0.tStart = t;  // (not accounting for frame time here)
      square_0_0.frameNStart = frameN;  // exact frame index
      
      square_0_0.setAutoDraw(true);
    }

    
    // *square_0_1* updates
    if (t >= 0.0 && square_0_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_0_1.tStart = t;  // (not accounting for frame time here)
      square_0_1.frameNStart = frameN;  // exact frame index
      
      square_0_1.setAutoDraw(true);
    }

    
    // *square_0_2* updates
    if (t >= 0.0 && square_0_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_0_2.tStart = t;  // (not accounting for frame time here)
      square_0_2.frameNStart = frameN;  // exact frame index
      
      square_0_2.setAutoDraw(true);
    }

    
    // *square_0_3* updates
    if (t >= 0.0 && square_0_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_0_3.tStart = t;  // (not accounting for frame time here)
      square_0_3.frameNStart = frameN;  // exact frame index
      
      square_0_3.setAutoDraw(true);
    }

    
    // *square_1_0* updates
    if (t >= 0.0 && square_1_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_1_0.tStart = t;  // (not accounting for frame time here)
      square_1_0.frameNStart = frameN;  // exact frame index
      
      square_1_0.setAutoDraw(true);
    }

    
    // *square_1_1* updates
    if (t >= 0.0 && square_1_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_1_1.tStart = t;  // (not accounting for frame time here)
      square_1_1.frameNStart = frameN;  // exact frame index
      
      square_1_1.setAutoDraw(true);
    }

    
    // *square_1_2* updates
    if (t >= 0.0 && square_1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_1_2.tStart = t;  // (not accounting for frame time here)
      square_1_2.frameNStart = frameN;  // exact frame index
      
      square_1_2.setAutoDraw(true);
    }

    
    // *square_1_3* updates
    if (t >= 0.0 && square_1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_1_3.tStart = t;  // (not accounting for frame time here)
      square_1_3.frameNStart = frameN;  // exact frame index
      
      square_1_3.setAutoDraw(true);
    }

    
    // *square_2_0* updates
    if (t >= 0.0 && square_2_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_2_0.tStart = t;  // (not accounting for frame time here)
      square_2_0.frameNStart = frameN;  // exact frame index
      
      square_2_0.setAutoDraw(true);
    }

    
    // *square_2_1* updates
    if (t >= 0.0 && square_2_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_2_1.tStart = t;  // (not accounting for frame time here)
      square_2_1.frameNStart = frameN;  // exact frame index
      
      square_2_1.setAutoDraw(true);
    }

    
    // *square_2_2* updates
    if (t >= 0.0 && square_2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_2_2.tStart = t;  // (not accounting for frame time here)
      square_2_2.frameNStart = frameN;  // exact frame index
      
      square_2_2.setAutoDraw(true);
    }

    
    // *square_2_3* updates
    if (t >= 0.0 && square_2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_2_3.tStart = t;  // (not accounting for frame time here)
      square_2_3.frameNStart = frameN;  // exact frame index
      
      square_2_3.setAutoDraw(true);
    }

    
    // *introduction_text2* updates
    if (t >= 0.0 && introduction_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction_text2.tStart = t;  // (not accounting for frame time here)
      introduction_text2.frameNStart = frameN;  // exact frame index
      
      introduction_text2.setAutoDraw(true);
    }

    
    // *back_text2* updates
    if (t >= 0.0 && back_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_text2.tStart = t;  // (not accounting for frame time here)
      back_text2.frameNStart = frameN;  // exact frame index
      
      back_text2.setAutoDraw(true);
    }

    ﻿keys = psychoJS.eventManager.getKeys({"keyList": ["space", "b"]});
    
    if (keys.slice(-1)[0] === "space") {
        intro_state += 1;
    }
    if (keys.slice(-1)[0] === "b") {
        intro_state -= 1;
    }
    if (intro_state < 0) {
        intro_state = 0;
    }
    
    if (intro_state === 0) {
        introduction_text2.text = 'The task 1 has finished. \n Let’s move on to the task 2. \n\n The task is to rank images in order of your preference.';
        introduction_text2.pos = [0, 2 * an2pix];
        back_text2.text = 'Next: "Space" Key';
        back_text2.pos = [0, -2 * an2pix];
        fixation_point.opacity = 0.0;
        stimuli.opacity = 0.0;
    }
    if (intro_state === 1) {
        introduction_text2.text = 'Click the center circle to display a lineup of images.';
        introduction_text2.pos = [0, 4 * an2pix];
        back_text2.text = 'Next: "Space" Key \n Back: "b" Key';
        back_text2.pos = [0, -4 * an2pix];
        fixation_point.opacity = 1.0;
        stimuli.opacity = 0.0;
    }
    if (intro_state === 2) {
        introduction_text2.text = 'After you look at the images for 3 seconds, \n the mouse cursor will shown up. \n Please choose the most favorite image.';
        introduction_text2.pos = [0, 0];
        back_text2.pos = [-9 * an2pix, -5 * an2pix];
        fixation_point.opacity = 0.0;
        stimuli.opacity = 1.0;
        square_list[0].opacity = 0.0;
    }
    if (intro_state === 3) {
        introduction_text2.text = 'For example, \n if you choose the most right image, \n it will disappear. \n\n Then, you select the most favorite image \n from the rest. \n\n When you finish choosing all images, \n the next 12 images will shown up.';
        square_list[0].opacity = 1.0;
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
    expIntro2Components.forEach( function(thisComponent) {
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


function expIntro2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'expIntro2'-------
    expIntro2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    stimuli.setAutoDraw(false);
    fixation_point.setAutoDraw(false);
    
    // the Routine "expIntro2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var initial_flag;
var initializeTrialComponents;
function initializeTrialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'initializeTrial'-------
    t = 0;
    initializeTrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    for (var i = 0, _pj_a = square_list.length; (i < _pj_a); i += 1) {
        square_list[i].opacity = 0.0;
    }
    
    fixation_point.setAutoDraw(true);
    // setup some python lists for storing info about the mouse_3
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    clickable_list = [square_0_0, square_0_1, square_0_2, square_0_3, square_1_0, square_1_1, square_1_2, square_1_3, square_2_0, square_2_1, square_2_2, square_2_3];
    
    initial_flag = true;
    
    // keep track of which components have finished
    initializeTrialComponents = [];
    initializeTrialComponents.push(mouse_3);
    initializeTrialComponents.push(gitter_text2);
    
    initializeTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function initializeTrialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'initializeTrial'-------
    // get current time
    t = initializeTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [eval("fixation_point")]) {
            if (obj.contains(mouse_3)) {
              gotValidClick = true;
              mouse_3.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *gitter_text2* updates
    if (t >= 0.0 && gitter_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gitter_text2.tStart = t;  // (not accounting for frame time here)
      gitter_text2.frameNStart = frameN;  // exact frame index
      
      gitter_text2.setAutoDraw(true);
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
    initializeTrialComponents.forEach( function(thisComponent) {
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


function initializeTrialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'initializeTrial'-------
    initializeTrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    fixation_point.setAutoDraw(false);
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_3.getPos();
    _mouseButtons = mouse_3.getPressed();
    psychoJS.experiment.addData('mouse_3.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_3.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_3.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_3.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_3.rightButton', _mouseButtons[2]);
    if (mouse_3.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name[0]);}
    // the Routine "initializeTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _clickable_list;
var showStim2Components;
function showStim2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'showStim2'-------
    t = 0;
    showStim2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (currentLoop.name == "rankImages_p") {  // PracticeTrials2
        image_path = `imagenet/practice/one_level/practice_${presented_class}.png`;
    } else {  // ActualTrials2
        image_path = `imagenet/one_level/${num_to_class[presented_class]}/${num_to_class[presented_class]}_${image_n}.png`;
    }
    stimuli.setImage(image_path);
    
    thisExp.addData("stimuli", image_path);
    
    stimuli.setAutoDraw(true);
    for (var i = 0, _pj_a = square_list.length; (i < _pj_a); i += 1) {
        square_list[i].setAutoDraw(true);
    }
    // setup some python lists for storing info about the ans_mouse2
    ans_mouse2.clicked_name = [];
    gotValidClick = false; // until a click is received
    if (initial_flag) {
        document.body.style.cursor = 'none';
        _clickable_list = clickable_list;
        clickable_list = [];
        ans_text.text = '';
    }
    
    // keep track of which components have finished
    showStim2Components = [];
    showStim2Components.push(ans_mouse2);
    showStim2Components.push(ans_text);
    
    showStim2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function showStim2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'showStim2'-------
    // get current time
    t = showStim2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *ans_mouse2* updates
    if (t >= 0.0 && ans_mouse2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ans_mouse2.tStart = t;  // (not accounting for frame time here)
      ans_mouse2.frameNStart = frameN;  // exact frame index
      
      ans_mouse2.status = PsychoJS.Status.STARTED;
      ans_mouse2.mouseClock.reset();
      prevButtonState = ans_mouse2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (ans_mouse2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = ans_mouse2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of clickable_list) {
            if (obj.contains(ans_mouse2)) {
              gotValidClick = true;
              ans_mouse2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *ans_text* updates
    if (t >= 0.0 && ans_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ans_text.tStart = t;  // (not accounting for frame time here)
      ans_text.frameNStart = frameN;  // exact frame index
      
      ans_text.setAutoDraw(true);
    }

    if ((initial_flag && (showStim2Clock.getTime() > 3))) {
        document.body.style.cursor='auto';
        clickable_list = _clickable_list;
        initial_flag = false;
        ans_text.text = 'Choose the favorite image.';
    }
    
    if (!initial_flag) {
        if (clickable_list.length < 12) {
            ans_text.text = 'Choose the favorite image \n from the rest.';
        } else {
            ans_text.text = 'Choose the favorite image.';
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
    showStim2Components.forEach( function(thisComponent) {
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


function showStim2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'showStim2'-------
    showStim2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    stimuli.setAutoDraw(false);
    for (var i = 0, _pj_a = square_list.length; (i < _pj_a); i += 1) {
        square_list[i].setAutoDraw(false);
    }
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = ans_mouse2.getPos();
    _mouseButtons = ans_mouse2.getPressed();
    psychoJS.experiment.addData('ans_mouse2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('ans_mouse2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('ans_mouse2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('ans_mouse2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('ans_mouse2.rightButton', _mouseButtons[2]);
    if (ans_mouse2.clicked_name.length > 0) {
      psychoJS.experiment.addData('ans_mouse2.clicked_name', ans_mouse2.clicked_name[0]);}
    // the Routine "showStim2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var updateSquaresComponents;
function updateSquaresRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'updateSquares'-------
    t = 0;
    updateSquaresClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    for (var i = 0, _pj_a = square_list.length; (i < _pj_a); i += 1) {
        if ((square_list[i].name === ans_mouse2.clicked_name[0])) {
            square_list[i].opacity = 1.0;
        }
    }
    
    for (var i = 0, _pj_a = clickable_list.length; (i < _pj_a); i += 1) {
        if ((clickable_list[i].name === ans_mouse2.clicked_name[0])) {
            clickable_list.splice(i, 1);
            break
        }
    }
    
    continueRoutine = false;
    
    // keep track of which components have finished
    updateSquaresComponents = [];
    
    updateSquaresComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function updateSquaresRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'updateSquares'-------
    // get current time
    t = updateSquaresClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    updateSquaresComponents.forEach( function(thisComponent) {
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


function updateSquaresRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'updateSquares'-------
    updateSquaresComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "updateSquares" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _actual_intro_key_resp2_allKeys;
var actualIntro2Components;
function actualIntro2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'actualIntro2'-------
    t = 0;
    actualIntro2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    actual_intro_key_resp2.keys = undefined;
    actual_intro_key_resp2.rt = undefined;
    _actual_intro_key_resp2_allKeys = [];
    count = 0;
    
    // keep track of which components have finished
    actualIntro2Components = [];
    actualIntro2Components.push(Introduction_text_a2);
    actualIntro2Components.push(actual_intro_key_resp2);
    
    actualIntro2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function actualIntro2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'actualIntro2'-------
    // get current time
    t = actualIntro2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Introduction_text_a2* updates
    if (t >= 0.0 && Introduction_text_a2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Introduction_text_a2.tStart = t;  // (not accounting for frame time here)
      Introduction_text_a2.frameNStart = frameN;  // exact frame index
      
      Introduction_text_a2.setAutoDraw(true);
    }

    
    // *actual_intro_key_resp2* updates
    if (t >= 0.0 && actual_intro_key_resp2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      actual_intro_key_resp2.tStart = t;  // (not accounting for frame time here)
      actual_intro_key_resp2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { actual_intro_key_resp2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { actual_intro_key_resp2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { actual_intro_key_resp2.clearEvents(); });
    }

    if (actual_intro_key_resp2.status === PsychoJS.Status.STARTED) {
      let theseKeys = actual_intro_key_resp2.getKeys({keyList: ['s'], waitRelease: false});
      _actual_intro_key_resp2_allKeys = _actual_intro_key_resp2_allKeys.concat(theseKeys);
      if (_actual_intro_key_resp2_allKeys.length > 0) {
        actual_intro_key_resp2.keys = _actual_intro_key_resp2_allKeys[_actual_intro_key_resp2_allKeys.length - 1].name;  // just the last key pressed
        actual_intro_key_resp2.rt = _actual_intro_key_resp2_allKeys[_actual_intro_key_resp2_allKeys.length - 1].rt;
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
    actualIntro2Components.forEach( function(thisComponent) {
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


function actualIntro2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'actualIntro2'-------
    actualIntro2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    actual_intro_key_resp2.stop();
    // the Routine "actualIntro2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
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
