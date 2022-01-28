#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.1.4),
    on Fri Jan 14 17:47:55 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

def calc_idx_list(non_target_classes, target_class, num):
    idx = list(range(101, 101 + num))
    idx = list(map(lambda x: str(x)[1:], idx))
    idx_list = {}
    for i in range(len(non_target_classes)):
        idx_list[non_target_classes[i]] = random.sample(idx, len(idx))
    idx_list[target_class] = random.sample(idx, len(idx))
    return idx_list
import random
import math
from PIL import Image
from PIL import Image
from PIL import Image
from PIL import Image


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.1.4'
expName = 'peripheral_visual_search'  # from the Builder filename that created this script
expInfo = {'WORKER ID': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['WORKER ID'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/taiga/Desktop/peripheral-visual-search-preference-tmp/peripheral-visual-search_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1366, 768], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='pix')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "screenScale"
screenScaleClock = core.Clock()
oldt=0
x_size=8.560
y_size=5.398
screen_height=0

if win.units=='norm':
    x_scale=.05
    y_scale=.1
    dbase = .0001
    unittext=' norm units'
    vsize=2
elif win.units=='pix':
    x_scale=50
    y_scale=50
    dbase = .1
    unittext=' pixels'
    vsize=win.size[1]
else:
    x_scale=.05
    y_scale=.05
    dbase = .0001
    unittext=' height units'
    vsize=1

an2pix = 50

text_top = visual.TextStim(win=win, name='text_top',
    text='Resize this image to match the size of a credit card\nUp arrow for taller\nDown arrow for shorter\nLeft arrow for narrower\nRight arrow for wider',
    font='Arial',
    units='norm', pos=(0, .6), height=0.07, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
text_middle = visual.TextStim(win=win, name='text_middle',
    text='Press "Space" key when done.',
    font='Open Sans',
    units='norm', pos=(0, -0.5), height=0.07, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_bottom = visual.TextStim(win=win, name='text_bottom',
    text=None,
    font='Arial',
    units='norm', pos=(0, -0.7), height=0.07, wrapWidth=1.5, ori=0, 
    color='springgreen', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
ccimage = visual.ImageStim(
    win=win,
    name='ccimage', 
    image='html/resources/bank-1300155_640.png', mask=None,
    ori=0, pos=(0, 0), size=(x_size*x_scale, y_size*y_scale),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)

# Initialize components for Routine "expIntro"
expIntroClock = core.Clock()
dataset_classes = {
    0: "bear",
    1: "cat",
    2: "dog",
    3: "elephant",
    4: "hamster",
    5: "monkey",
    6: "rabbit",
    7: "sheep"
}

num_to_class = ["bear", "cat", "dog", "elephant", "hamster", "monkey", "rabbit", "sheep"]

ans_keys_list = [['b', 'a', 'c', 'd'], ['g', 'e', 'f', 'h'], ['j', 'i', 'k', 'l']]
key_to_pos = {}
for i in range(len(ans_keys_list)):
    for j in range(len(ans_keys_list[i])):
        key_to_pos[ans_keys_list[i][j]] = [i, j]

ans_text_list = ['2', '1', '3', '4', '7', '5', '6', '8', '10', '9', '11', '12']

intro_state = -1
reps = 0

eccentricity_level_0 = round(math.sqrt(2), 2)
eccentricity_level_1 = round(1 + math.sqrt(8), 2)
eccentricity_level_2 = round((math.sqrt(2) + 4 + math.sqrt((math.sqrt(2) + 4) ** 2 - 4 * (4 * math.sqrt(2) - 27))) / 2, 2)
eccentricities = [
    eccentricity_level_0,
    eccentricity_level_1,
    eccentricity_level_2
]

stimuli = visual.ImageStim(
    win=win,
    name='stimuli', 
    image='html/resources/imagenet/practice/1/practice_2.png', mask=None,
    ori=0.0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=0.0,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
stimuli_arrangement = visual.ImageStim(
    win=win,
    name='stimuli_arrangement', 
    image='html/resources/stimuli_arrangement.png', mask=None,
    ori=0.0, pos=(0, 0), size=(an2pix, an2pix),
    color=[1,1,1], colorSpace='rgb', opacity=0.0,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
ans_0_0 = visual.TextStim(win=win, name='ans_0_0',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=1.5 * an2pix, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
ans_0_1 = visual.TextStim(win=win, name='ans_0_1',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=1.5 * an2pix, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
ans_0_2 = visual.TextStim(win=win, name='ans_0_2',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=1.5 * an2pix, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
ans_0_3 = visual.TextStim(win=win, name='ans_0_3',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=1.5 * an2pix, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);
ans_1_0 = visual.TextStim(win=win, name='ans_1_0',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=1.5 * an2pix, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);
ans_1_1 = visual.TextStim(win=win, name='ans_1_1',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=1.5 * an2pix, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-11.0);
ans_1_2 = visual.TextStim(win=win, name='ans_1_2',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=1.5 * an2pix, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-12.0);
ans_1_3 = visual.TextStim(win=win, name='ans_1_3',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=1.5 * an2pix, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-13.0);
ans_2_0 = visual.TextStim(win=win, name='ans_2_0',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=1.5 * an2pix, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-14.0);
ans_2_1 = visual.TextStim(win=win, name='ans_2_1',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=1.5 * an2pix, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-15.0);
ans_2_2 = visual.TextStim(win=win, name='ans_2_2',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=1.5 * an2pix, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-16.0);
ans_2_3 = visual.TextStim(win=win, name='ans_2_3',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=1.5 * an2pix, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-17.0);
fixation_point = visual.Polygon(
    win=win, name='fixation_point',
    edges=100, size=[1.0, 1.0],
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor=(0.5059, 0.5059, 0.5059), fillColor=(0.5059, 0.5059, 0.5059),
    opacity=1.0, depth=-20.0, interpolate=True)
introduction_text = visual.TextStim(win=win, name='introduction_text',
    text=None,
    font='Open Sans',
    pos=(0, 2 * an2pix), height=an2pix * 0.6, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-21.0);
back_text = visual.TextStim(win=win, name='back_text',
    text=None,
    font='Open Sans',
    pos=(0, -2 * an2pix), height=an2pix * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-22.0);

# Initialize components for Routine "practiceIntro"
practiceIntroClock = core.Clock()
introduction_text_p = visual.TextStim(win=win, name='introduction_text_p',
    text="Let's practice with sample images.\n\nHit “Space” key when ready.",
    font='Open Sans',
    pos=(0, 0), height=an2pix * 0.7, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
practice_info_key_resp = keyboard.Keyboard()

# Initialize components for Routine "gitter"
gitterClock = core.Clock()
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()
gitter_text = visual.TextStim(win=win, name='gitter_text',
    text='Click the center circle to start.',
    font='Open Sans',
    pos=(0, -an2pix * 1.5), height=an2pix * 0.7, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "showStim1"
showStim1Clock = core.Clock()
show_stim_key_resp = keyboard.Keyboard()
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()

# Initialize components for Routine "askQuestion1"
askQuestion1Clock = core.Clock()
question_text = visual.TextStim(win=win, name='question_text',
    text='Where was your favorite image?\nPlease click the number.',
    font='Open Sans',
    pos=(10 * an2pix, 0), height=an2pix * 0.5, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
ans_mouse = event.Mouse(win=win)
x, y = [None, None]
ans_mouse.mouseClock = core.Clock()

# Initialize components for Routine "actualIntro1"
actualIntro1Clock = core.Clock()
introduction_text_a1 = visual.TextStim(win=win, name='introduction_text_a1',
    text="Practice part has finished.\n\nNext part is the actual experiment.\n\nIn total the first-half of the experiment has 160 trials.\nYou’ll take a short break after 80 trials.\n\nHit 's' Key when ready.",
    font='Open Sans',
    pos=(0, 0), height=an2pix * 0.7, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
actual_intro_key_resp1 = keyboard.Keyboard()

# Initialize components for Routine "gitter"
gitterClock = core.Clock()
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()
gitter_text = visual.TextStim(win=win, name='gitter_text',
    text='Click the center circle to start.',
    font='Open Sans',
    pos=(0, -an2pix * 1.5), height=an2pix * 0.7, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "showStim1"
showStim1Clock = core.Clock()
show_stim_key_resp = keyboard.Keyboard()
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()

# Initialize components for Routine "askQuestion1"
askQuestion1Clock = core.Clock()
question_text = visual.TextStim(win=win, name='question_text',
    text='Where was your favorite image?\nPlease click the number.',
    font='Open Sans',
    pos=(10 * an2pix, 0), height=an2pix * 0.5, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
ans_mouse = event.Mouse(win=win)
x, y = [None, None]
ans_mouse.mouseClock = core.Clock()

# Initialize components for Routine "takeBreak"
takeBreakClock = core.Clock()
break_text = visual.TextStim(win=win, name='break_text',
    text='Please take a short break.\n\nOnce the experiment is ready, \nthe window will change to the fixation point.',
    font='Open Sans',
    pos=(0, 0), height=an2pix * 0.7, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "expIntro2"
expIntro2Clock = core.Clock()
num_to_class = ["bear", "cat", "dog", "elephant", "hamster", "monkey", "rabbit", "sheep"]
square_0_0 = visual.Rect(
    win=win, name='square_0_0',
    width=(an2pix * 2.5, an2pix * 2.5)[0], height=(an2pix * 2.5, an2pix * 2.5)[1],
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='gray', fillColor='gray',
    opacity=None, depth=-2.0, interpolate=True)
square_0_1 = visual.Rect(
    win=win, name='square_0_1',
    width=(an2pix * 2.5, an2pix * 2.5)[0], height=(an2pix * 2.5, an2pix * 2.5)[1],
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='gray', fillColor='gray',
    opacity=None, depth=-3.0, interpolate=True)
square_0_2 = visual.Rect(
    win=win, name='square_0_2',
    width=(an2pix * 2.5, an2pix * 2.5)[0], height=(an2pix * 2.5, an2pix * 2.5)[1],
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='gray', fillColor='gray',
    opacity=None, depth=-4.0, interpolate=True)
square_0_3 = visual.Rect(
    win=win, name='square_0_3',
    width=(an2pix * 2.5, an2pix * 2.5)[0], height=(an2pix * 2.5, an2pix * 2.5)[1],
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='gray', fillColor='gray',
    opacity=None, depth=-5.0, interpolate=True)
square_1_0 = visual.Rect(
    win=win, name='square_1_0',
    width=(an2pix * 2.5, an2pix * 2.5)[0], height=(an2pix * 2.5, an2pix * 2.5)[1],
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='gray', fillColor='gray',
    opacity=None, depth=-6.0, interpolate=True)
square_1_1 = visual.Rect(
    win=win, name='square_1_1',
    width=(an2pix * 2.5, an2pix * 2.5)[0], height=(an2pix * 2.5, an2pix * 2.5)[1],
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='gray', fillColor='gray',
    opacity=None, depth=-7.0, interpolate=True)
square_1_2 = visual.Rect(
    win=win, name='square_1_2',
    width=(an2pix * 2.5, an2pix * 2.5)[0], height=(an2pix * 2.5, an2pix * 2.5)[1],
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='gray', fillColor='gray',
    opacity=None, depth=-8.0, interpolate=True)
square_1_3 = visual.Rect(
    win=win, name='square_1_3',
    width=(an2pix * 2.5, an2pix * 2.5)[0], height=(an2pix * 2.5, an2pix * 2.5)[1],
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='gray', fillColor='gray',
    opacity=None, depth=-9.0, interpolate=True)
square_2_0 = visual.Rect(
    win=win, name='square_2_0',
    width=(an2pix * 2.5, an2pix * 2.5)[0], height=(an2pix * 2.5, an2pix * 2.5)[1],
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='gray', fillColor='gray',
    opacity=None, depth=-10.0, interpolate=True)
square_2_1 = visual.Rect(
    win=win, name='square_2_1',
    width=(an2pix * 2.5, an2pix * 2.5)[0], height=(an2pix * 2.5, an2pix * 2.5)[1],
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='gray', fillColor='gray',
    opacity=None, depth=-11.0, interpolate=True)
square_2_2 = visual.Rect(
    win=win, name='square_2_2',
    width=(an2pix * 2.5, an2pix * 2.5)[0], height=(an2pix * 2.5, an2pix * 2.5)[1],
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='gray', fillColor='gray',
    opacity=None, depth=-12.0, interpolate=True)
square_2_3 = visual.Rect(
    win=win, name='square_2_3',
    width=(an2pix * 2.5, an2pix * 2.5)[0], height=(an2pix * 2.5, an2pix * 2.5)[1],
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='gray', fillColor='gray',
    opacity=None, depth=-13.0, interpolate=True)
introduction_text2 = visual.TextStim(win=win, name='introduction_text2',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=an2pix * 0.5, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-15.0);
back_text2 = visual.TextStim(win=win, name='back_text2',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=an2pix * 0.4, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-16.0);

# Initialize components for Routine "practiceIntro"
practiceIntroClock = core.Clock()
introduction_text_p = visual.TextStim(win=win, name='introduction_text_p',
    text="Let's practice with sample images.\n\nHit “Space” key when ready.",
    font='Open Sans',
    pos=(0, 0), height=an2pix * 0.7, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
practice_info_key_resp = keyboard.Keyboard()

# Initialize components for Routine "initializeTrial"
initializeTrialClock = core.Clock()
mouse_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_3.mouseClock = core.Clock()
gitter_text2 = visual.TextStim(win=win, name='gitter_text2',
    text='After click the center circle,\nlook for the favorite image from the presented images.\n',
    font='Open Sans',
    pos=(0, -2 * an2pix), height=an2pix * 0.6, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
clickable_list = []

# Initialize components for Routine "showStim2"
showStim2Clock = core.Clock()
ans_mouse2 = event.Mouse(win=win)
x, y = [None, None]
ans_mouse2.mouseClock = core.Clock()
ans_text = visual.TextStim(win=win, name='ans_text',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=an2pix * 0.6, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "updateSquares"
updateSquaresClock = core.Clock()

# Initialize components for Routine "actualIntro2"
actualIntro2Clock = core.Clock()
Introduction_text_a2 = visual.TextStim(win=win, name='Introduction_text_a2',
    text="Practice part has finished.\n\nNext part is the actual experiment.\n\nIn total the second-half of the experiment has 160 trials.\nYou’ll take a short break after 80 trials.\n\nHit 's' Key when ready.",
    font='Open Sans',
    pos=(0, 0), height=an2pix * 0.7, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
actual_intro_key_resp2 = keyboard.Keyboard()

# Initialize components for Routine "initializeTrial"
initializeTrialClock = core.Clock()
mouse_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_3.mouseClock = core.Clock()
gitter_text2 = visual.TextStim(win=win, name='gitter_text2',
    text='After click the center circle,\nlook for the favorite image from the presented images.\n',
    font='Open Sans',
    pos=(0, -2 * an2pix), height=an2pix * 0.6, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
clickable_list = []

# Initialize components for Routine "showStim2"
showStim2Clock = core.Clock()
ans_mouse2 = event.Mouse(win=win)
x, y = [None, None]
ans_mouse2.mouseClock = core.Clock()
ans_text = visual.TextStim(win=win, name='ans_text',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=an2pix * 0.6, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "updateSquares"
updateSquaresClock = core.Clock()

# Initialize components for Routine "takeBreak"
takeBreakClock = core.Clock()
break_text = visual.TextStim(win=win, name='break_text',
    text='Please take a short break.\n\nOnce the experiment is ready, \nthe window will change to the fixation point.',
    font='Open Sans',
    pos=(0, 0), height=an2pix * 0.7, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "publishSurveyCode"
publishSurveyCodeClock = core.Clock()
show_thanks_and_code = visual.TextStim(win=win, name='show_thanks_and_code',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=an2pix * 0.7, wrapWidth=10000.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
finish_key_resp = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "screenScale"-------
continueRoutine = True
# update component parameters for each repeat
event.clearEvents()

resz = an2pix / ((x_scale + y_scale) / 2)
distance = int(resz / (2 * math.tan(math.pi / 360)))
text_bottom.text= 'Throughout this experiment, \n please maintain a viewing distance at ' + str(distance) + 'cm.'

# keep track of which components have finished
screenScaleComponents = [text_top, text_middle, text_bottom, ccimage]
for thisComponent in screenScaleComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
screenScaleClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "screenScale"-------
while continueRoutine:
    # get current time
    t = screenScaleClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=screenScaleClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    keys=event.getKeys()
    
    if len(keys):
        if t-oldt<.5:
            dscale=5*dbase
            oldt=t
        else:
            dscale=dbase
            oldt=t
        if 'space' in keys and t > 1:
            continueRoutine=False
        elif 'up' in keys:
            y_scale=round((y_scale+dscale)*10000)/10000
        elif 'down' in keys:
            y_scale=round((y_scale-dscale)*10000)/10000
        elif 'left' in keys:
            x_scale=round((x_scale-dscale)*10000)/10000
        elif 'right' in keys:
            x_scale=round((x_scale+dscale)*10000)/10000
    
        # Added manually
        if win.units=='pix':
            vsize=win.size[1] / 2
    
        screen_height=round(vsize*10/y_scale)/10
        resz = an2pix / ((x_scale + y_scale) / 2)
        distance = int(resz / (2 * math.tan(math.pi / 360)))
    
        text_bottom.text= 'Throughout this experiment, \n please maintain a viewing distance at ' + str(distance) + 'cm.'
        ccimage.size=[x_size*x_scale, y_size*y_scale]
    
    
    
    # *text_top* updates
    if text_top.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_top.frameNStart = frameN  # exact frame index
        text_top.tStart = t  # local t and not account for scr refresh
        text_top.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_top, 'tStartRefresh')  # time at next scr refresh
        text_top.setAutoDraw(True)
    
    # *text_middle* updates
    if text_middle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_middle.frameNStart = frameN  # exact frame index
        text_middle.tStart = t  # local t and not account for scr refresh
        text_middle.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_middle, 'tStartRefresh')  # time at next scr refresh
        text_middle.setAutoDraw(True)
    
    # *text_bottom* updates
    if text_bottom.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_bottom.frameNStart = frameN  # exact frame index
        text_bottom.tStart = t  # local t and not account for scr refresh
        text_bottom.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_bottom, 'tStartRefresh')  # time at next scr refresh
        text_bottom.setAutoDraw(True)
    
    # *ccimage* updates
    if ccimage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ccimage.frameNStart = frameN  # exact frame index
        ccimage.tStart = t  # local t and not account for scr refresh
        ccimage.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ccimage, 'tStartRefresh')  # time at next scr refresh
        ccimage.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in screenScaleComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "screenScale"-------
for thisComponent in screenScaleComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('X Scale',x_scale)
thisExp.addData('Y Scale',y_scale)

thisExp.addData('text_middle.started', text_middle.tStartRefresh)
thisExp.addData('text_middle.stopped', text_middle.tStopRefresh)
# the Routine "screenScale" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "expIntro"-------
continueRoutine = True
# update component parameters for each repeat
stimuli.setSize((1200, 1200))
stimuli_arrangement.size = (
    an2pix * (2 * eccentricities[2] / math.sqrt(2) + 8),
    an2pix * (2 * eccentricities[2] / math.sqrt(2) + 8),
)
ans_list = [
    ans_0_0,
    ans_0_1,
    ans_0_2,
    ans_0_3,
    ans_1_0,
    ans_1_1,
    ans_1_2,
    ans_1_3,
    ans_2_0,
    ans_2_1,
    ans_2_2,
    ans_2_3
]

for i in range(len(ans_list)):
    if i < 4:
        ans_list[i].pos = (
            an2pix * eccentricities[0] * math.cos(math.radians(i % 4 * 90 + 45)),
            an2pix * eccentricities[0] * math.sin(math.radians(i % 4 * 90 + 45))
        )
    elif 4 <= i < 8:
        ans_list[i].pos = (
            an2pix * eccentricities[1] * math.cos(math.radians(i % 4 * 90)),
            an2pix * eccentricities[1] * math.sin(math.radians(i % 4 * 90))
        )
    else:
        ans_list[i].pos = (
            an2pix * eccentricities[2] * math.cos(math.radians(i % 4 * 90 + 45)),
            an2pix * eccentricities[2] * math.sin(math.radians(i % 4 * 90 + 45))
        )
ans_to_pos = {}
for i in range(len(ans_list)):
    ans_to_pos[ans_list[i].name] = [int(i / 4) % 3, i % 4]
fixation_point.setOpacity(0.0)
fixation_point.setSize((an2pix / 3, an2pix / 3))
# keep track of which components have finished
expIntroComponents = [stimuli, stimuli_arrangement, ans_0_0, ans_0_1, ans_0_2, ans_0_3, ans_1_0, ans_1_1, ans_1_2, ans_1_3, ans_2_0, ans_2_1, ans_2_2, ans_2_3, fixation_point, introduction_text, back_text]
for thisComponent in expIntroComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
expIntroClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "expIntro"-------
while continueRoutine:
    # get current time
    t = expIntroClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=expIntroClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *stimuli* updates
    if stimuli.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        stimuli.frameNStart = frameN  # exact frame index
        stimuli.tStart = t  # local t and not account for scr refresh
        stimuli.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(stimuli, 'tStartRefresh')  # time at next scr refresh
        stimuli.setAutoDraw(True)
    
    # *stimuli_arrangement* updates
    if stimuli_arrangement.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        stimuli_arrangement.frameNStart = frameN  # exact frame index
        stimuli_arrangement.tStart = t  # local t and not account for scr refresh
        stimuli_arrangement.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(stimuli_arrangement, 'tStartRefresh')  # time at next scr refresh
        stimuli_arrangement.setAutoDraw(True)
    
    # *ans_0_0* updates
    if ans_0_0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ans_0_0.frameNStart = frameN  # exact frame index
        ans_0_0.tStart = t  # local t and not account for scr refresh
        ans_0_0.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ans_0_0, 'tStartRefresh')  # time at next scr refresh
        ans_0_0.setAutoDraw(True)
    
    # *ans_0_1* updates
    if ans_0_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ans_0_1.frameNStart = frameN  # exact frame index
        ans_0_1.tStart = t  # local t and not account for scr refresh
        ans_0_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ans_0_1, 'tStartRefresh')  # time at next scr refresh
        ans_0_1.setAutoDraw(True)
    
    # *ans_0_2* updates
    if ans_0_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ans_0_2.frameNStart = frameN  # exact frame index
        ans_0_2.tStart = t  # local t and not account for scr refresh
        ans_0_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ans_0_2, 'tStartRefresh')  # time at next scr refresh
        ans_0_2.setAutoDraw(True)
    
    # *ans_0_3* updates
    if ans_0_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ans_0_3.frameNStart = frameN  # exact frame index
        ans_0_3.tStart = t  # local t and not account for scr refresh
        ans_0_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ans_0_3, 'tStartRefresh')  # time at next scr refresh
        ans_0_3.setAutoDraw(True)
    
    # *ans_1_0* updates
    if ans_1_0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ans_1_0.frameNStart = frameN  # exact frame index
        ans_1_0.tStart = t  # local t and not account for scr refresh
        ans_1_0.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ans_1_0, 'tStartRefresh')  # time at next scr refresh
        ans_1_0.setAutoDraw(True)
    
    # *ans_1_1* updates
    if ans_1_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ans_1_1.frameNStart = frameN  # exact frame index
        ans_1_1.tStart = t  # local t and not account for scr refresh
        ans_1_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ans_1_1, 'tStartRefresh')  # time at next scr refresh
        ans_1_1.setAutoDraw(True)
    
    # *ans_1_2* updates
    if ans_1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ans_1_2.frameNStart = frameN  # exact frame index
        ans_1_2.tStart = t  # local t and not account for scr refresh
        ans_1_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ans_1_2, 'tStartRefresh')  # time at next scr refresh
        ans_1_2.setAutoDraw(True)
    
    # *ans_1_3* updates
    if ans_1_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ans_1_3.frameNStart = frameN  # exact frame index
        ans_1_3.tStart = t  # local t and not account for scr refresh
        ans_1_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ans_1_3, 'tStartRefresh')  # time at next scr refresh
        ans_1_3.setAutoDraw(True)
    
    # *ans_2_0* updates
    if ans_2_0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ans_2_0.frameNStart = frameN  # exact frame index
        ans_2_0.tStart = t  # local t and not account for scr refresh
        ans_2_0.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ans_2_0, 'tStartRefresh')  # time at next scr refresh
        ans_2_0.setAutoDraw(True)
    
    # *ans_2_1* updates
    if ans_2_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ans_2_1.frameNStart = frameN  # exact frame index
        ans_2_1.tStart = t  # local t and not account for scr refresh
        ans_2_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ans_2_1, 'tStartRefresh')  # time at next scr refresh
        ans_2_1.setAutoDraw(True)
    
    # *ans_2_2* updates
    if ans_2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ans_2_2.frameNStart = frameN  # exact frame index
        ans_2_2.tStart = t  # local t and not account for scr refresh
        ans_2_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ans_2_2, 'tStartRefresh')  # time at next scr refresh
        ans_2_2.setAutoDraw(True)
    
    # *ans_2_3* updates
    if ans_2_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ans_2_3.frameNStart = frameN  # exact frame index
        ans_2_3.tStart = t  # local t and not account for scr refresh
        ans_2_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ans_2_3, 'tStartRefresh')  # time at next scr refresh
        ans_2_3.setAutoDraw(True)
    
    # *fixation_point* updates
    if fixation_point.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        fixation_point.frameNStart = frameN  # exact frame index
        fixation_point.tStart = t  # local t and not account for scr refresh
        fixation_point.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(fixation_point, 'tStartRefresh')  # time at next scr refresh
        fixation_point.setAutoDraw(True)
    
    # *introduction_text* updates
    if introduction_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        introduction_text.frameNStart = frameN  # exact frame index
        introduction_text.tStart = t  # local t and not account for scr refresh
        introduction_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(introduction_text, 'tStartRefresh')  # time at next scr refresh
        introduction_text.setAutoDraw(True)
    if introduction_text.status == STARTED:  # only update if drawing
        introduction_text.setText('')
    
    # *back_text* updates
    if back_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        back_text.frameNStart = frameN  # exact frame index
        back_text.tStart = t  # local t and not account for scr refresh
        back_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(back_text, 'tStartRefresh')  # time at next scr refresh
        back_text.setAutoDraw(True)
    keys = [""]
    keys += event.getKeys(keyList=["space", "b"])
    
    if keys[-1] == "space":
        intro_state += 1
    if keys[-1] == "b":
        intro_state -= 1
    if intro_state < 0:
        intro_state = 0
    
    if intro_state == 0:
        introduction_text.text = 'This experiment consists of the two tasks. \n The task 1 is \n "To find your favorite image from animal images."'
        introduction_text.pos = (0, 2 * an2pix)
        back_text.text = 'Next: "Space" Key'
        back_text.pos = (0, -2 * an2pix)
        fixation_point.opacity = 0.0
    if intro_state == 1:
        introduction_text.text = 'Click the center circle to display a lineup of images.'
        introduction_text.pos = (0, 4.5 * an2pix)
        back_text.text = 'Next: "Space" Key \n Back: "b" Key'
        back_text.pos = (0, -4.5 * an2pix)
        fixation_point.opacity = 1.0
        stimuli.opacity = 0.0
    if intro_state == 2:
        introduction_text.text = 'When you find your favorite image, \n click your mouse. \n\n The time limit is 6 sec on each trial.'
        introduction_text.pos = (9 * an2pix, 0)
        back_text.pos = (-9 * an2pix, 0)
        stimuli.opacity = 1.0
        stimuli_arrangement.opacity = 0.0
        for i in range(len(ans_list)):
            ans_list[i].text = ''
    if intro_state == 3:
        introduction_text.text = 'Then, click a number \n corresponding to \n the position.'
        fixation_point.opacity = 0.0
        stimuli_arrangement.opacity = 1.0
        for i in range(len(ans_list)):
            ans_list[i].text = ans_text_list[i]
    if intro_state == 4:
        fixation_point.opacity = 1.0
        continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in expIntroComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "expIntro"-------
for thisComponent in expIntroComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
intro_state = 0
# the Routine "expIntro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "practiceIntro"-------
continueRoutine = True
# update component parameters for each repeat
practice_info_key_resp.keys = []
practice_info_key_resp.rt = []
_practice_info_key_resp_allKeys = []
# keep track of which components have finished
practiceIntroComponents = [introduction_text_p, practice_info_key_resp]
for thisComponent in practiceIntroComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
practiceIntroClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "practiceIntro"-------
while continueRoutine:
    # get current time
    t = practiceIntroClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=practiceIntroClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *introduction_text_p* updates
    if introduction_text_p.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        introduction_text_p.frameNStart = frameN  # exact frame index
        introduction_text_p.tStart = t  # local t and not account for scr refresh
        introduction_text_p.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(introduction_text_p, 'tStartRefresh')  # time at next scr refresh
        introduction_text_p.setAutoDraw(True)
    
    # *practice_info_key_resp* updates
    waitOnFlip = False
    if practice_info_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        practice_info_key_resp.frameNStart = frameN  # exact frame index
        practice_info_key_resp.tStart = t  # local t and not account for scr refresh
        practice_info_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(practice_info_key_resp, 'tStartRefresh')  # time at next scr refresh
        practice_info_key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(practice_info_key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(practice_info_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if practice_info_key_resp.status == STARTED and not waitOnFlip:
        theseKeys = practice_info_key_resp.getKeys(keyList=['space'], waitRelease=False)
        _practice_info_key_resp_allKeys.extend(theseKeys)
        if len(_practice_info_key_resp_allKeys):
            practice_info_key_resp.keys = _practice_info_key_resp_allKeys[-1].name  # just the last key pressed
            practice_info_key_resp.rt = _practice_info_key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in practiceIntroComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "practiceIntro"-------
for thisComponent in practiceIntroComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "practiceIntro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
PracticeTrials1 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditions/practiceTrials1.xlsx'),
    seed=None, name='PracticeTrials1')
thisExp.addLoop(PracticeTrials1)  # add the loop to the experiment
thisPracticeTrials1 = PracticeTrials1.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPracticeTrials1.rgb)
if thisPracticeTrials1 != None:
    for paramName in thisPracticeTrials1:
        exec('{} = thisPracticeTrials1[paramName]'.format(paramName))

for thisPracticeTrials1 in PracticeTrials1:
    currentLoop = PracticeTrials1
    # abbreviate parameter names if possible (e.g. rgb = thisPracticeTrials1.rgb)
    if thisPracticeTrials1 != None:
        for paramName in thisPracticeTrials1:
            exec('{} = thisPracticeTrials1[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "gitter"-------
    continueRoutine = True
    # update component parameters for each repeat
    fixation_point.fillColor = (-0.4980, -0.4980, -0.4980)
    fixation_point.lineColor = (-0.4980, -0.4980, -0.4980)
    
    # setup some python lists for storing info about the mouse
    mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    mouse.setVisible(True)
    # keep track of which components have finished
    gitterComponents = [mouse, gitter_text]
    for thisComponent in gitterComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    gitterClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "gitter"-------
    while continueRoutine:
        # get current time
        t = gitterClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=gitterClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        fixation_point.draw()
        # *mouse* updates
        if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse.frameNStart = frameN  # exact frame index
            mouse.tStart = t  # local t and not account for scr refresh
            mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
            mouse.status = STARTED
            mouse.mouseClock.reset()
            prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
        if mouse.status == STARTED:  # only update if started and not finished!
            buttons = mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [eval("fixation_point")]:
                        if obj.contains(mouse):
                            gotValidClick = True
                            mouse.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *gitter_text* updates
        if gitter_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            gitter_text.frameNStart = frameN  # exact frame index
            gitter_text.tStart = t  # local t and not account for scr refresh
            gitter_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(gitter_text, 'tStartRefresh')  # time at next scr refresh
            gitter_text.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in gitterComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "gitter"-------
    for thisComponent in gitterComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    fixation_point.fillColor = (0.5059, 0.5059, 0.5059)
    fixation_point.lineColor = (0.5059, 0.5059, 0.5059)
    # store data for PracticeTrials1 (TrialHandler)
    x, y = mouse.getPos()
    buttons = mouse.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        for obj in [eval("fixation_point")]:
            if obj.contains(mouse):
                gotValidClick = True
                mouse.clicked_name.append(obj.name)
    PracticeTrials1.addData('mouse.x', x)
    PracticeTrials1.addData('mouse.y', y)
    PracticeTrials1.addData('mouse.leftButton', buttons[0])
    PracticeTrials1.addData('mouse.midButton', buttons[1])
    PracticeTrials1.addData('mouse.rightButton', buttons[2])
    if len(mouse.clicked_name):
        PracticeTrials1.addData('mouse.clicked_name', mouse.clicked_name[0])
    PracticeTrials1.addData('gitter_text.started', gitter_text.tStartRefresh)
    PracticeTrials1.addData('gitter_text.stopped', gitter_text.tStopRefresh)
    mouse.setVisible(False)
    # the Routine "gitter" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "showStim1"-------
    continueRoutine = True
    # update component parameters for each repeat
    if currentLoop.name == 'PracticeTrials1':
        image_path = 'html/resources/imagenet/practice/1/practice_{}.png'.format(presented_class)
    else:
        if magnified == 1:
            image_path = 'html/resources/imagenet/1/magnified/{}/{}_{}.png'.format(num_to_class[presented_class],num_to_class[presented_class],image_n)
        else:  # magnified == 0
            image_path = 'html/resources/imagenet/1/standard/{}/{}_1{}.png'.format(num_to_class[presented_class],num_to_class[presented_class],image_n)
    stimuli.image = Image.open(image_path)
    
    thisExp.addData('stimuli', image_path)
    
    show_stim_key_resp.keys = []
    show_stim_key_resp.rt = []
    _show_stim_key_resp_allKeys = []
    # setup some python lists for storing info about the mouse_2
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    showStim1Components = [show_stim_key_resp, mouse_2]
    for thisComponent in showStim1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    showStim1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "showStim1"-------
    while continueRoutine:
        # get current time
        t = showStim1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=showStim1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        fixation_point.draw()
        
        if showStim1Clock.getTime() > 1:
            stimuli.draw()
        
        
        # *show_stim_key_resp* updates
        waitOnFlip = False
        if show_stim_key_resp.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            show_stim_key_resp.frameNStart = frameN  # exact frame index
            show_stim_key_resp.tStart = t  # local t and not account for scr refresh
            show_stim_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(show_stim_key_resp, 'tStartRefresh')  # time at next scr refresh
            show_stim_key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(show_stim_key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(show_stim_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if show_stim_key_resp.status == STARTED and not waitOnFlip:
            theseKeys = show_stim_key_resp.getKeys(keyList=['space'], waitRelease=False)
            _show_stim_key_resp_allKeys.extend(theseKeys)
            if len(_show_stim_key_resp_allKeys):
                show_stim_key_resp.keys = _show_stim_key_resp_allKeys[-1].name  # just the last key pressed
                show_stim_key_resp.rt = _show_stim_key_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        # *mouse_2* updates
        if mouse_2.status == NOT_STARTED and t >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_2.frameNStart = frameN  # exact frame index
            mouse_2.tStart = t  # local t and not account for scr refresh
            mouse_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_2, 'tStartRefresh')  # time at next scr refresh
            mouse_2.status = STARTED
            mouse_2.mouseClock.reset()
            prevButtonState = mouse_2.getPressed()  # if button is down already this ISN'T a new click
        if mouse_2.status == STARTED:  # only update if started and not finished!
            buttons = mouse_2.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # abort routine on response
                    continueRoutine = False
        # Time limit: 6 seconds
        if showStim1Clock.getTime() > 7:
            continueRoutine = False
        
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in showStim1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "showStim1"-------
    for thisComponent in showStim1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for PracticeTrials1 (TrialHandler)
    x, y = mouse_2.getPos()
    buttons = mouse_2.getPressed()
    PracticeTrials1.addData('mouse_2.x', x)
    PracticeTrials1.addData('mouse_2.y', y)
    PracticeTrials1.addData('mouse_2.leftButton', buttons[0])
    PracticeTrials1.addData('mouse_2.midButton', buttons[1])
    PracticeTrials1.addData('mouse_2.rightButton', buttons[2])
    PracticeTrials1.addData('mouse_2.started', mouse_2.tStart)
    PracticeTrials1.addData('mouse_2.stopped', mouse_2.tStop)
    thisExp.addData('reactionTime', showStim1Clock.getTime() - 1)
    # the Routine "showStim1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "askQuestion1"-------
    continueRoutine = True
    # update component parameters for each repeat
    for i in range(len(ans_list)):
        ans_list[i].text = ans_text_list[i]
    # setup some python lists for storing info about the ans_mouse
    ans_mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    mouse.setVisible(True)
    # keep track of which components have finished
    askQuestion1Components = [question_text, ans_mouse]
    for thisComponent in askQuestion1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    askQuestion1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "askQuestion1"-------
    while continueRoutine:
        # get current time
        t = askQuestion1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=askQuestion1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *question_text* updates
        if question_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            question_text.frameNStart = frameN  # exact frame index
            question_text.tStart = t  # local t and not account for scr refresh
            question_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(question_text, 'tStartRefresh')  # time at next scr refresh
            question_text.setAutoDraw(True)
        stimuli_arrangement.draw()
        for i in range(len(ans_list)):
            ans_list[i].draw()
        # *ans_mouse* updates
        if ans_mouse.status == NOT_STARTED and t >= 0.1-frameTolerance:
            # keep track of start time/frame for later
            ans_mouse.frameNStart = frameN  # exact frame index
            ans_mouse.tStart = t  # local t and not account for scr refresh
            ans_mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(ans_mouse, 'tStartRefresh')  # time at next scr refresh
            ans_mouse.status = STARTED
            ans_mouse.mouseClock.reset()
            prevButtonState = ans_mouse.getPressed()  # if button is down already this ISN'T a new click
        if ans_mouse.status == STARTED:  # only update if started and not finished!
            buttons = ans_mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [eval("ans_0_0"), eval("ans_0_1"), eval("ans_0_2"), eval("ans_0_3"), eval("ans_1_0"), eval("ans_1_1"), eval("ans_1_2"), eval("ans_1_3"), eval("ans_2_0"), eval("ans_2_1"), eval("ans_2_2"), eval("ans_2_3")]:
                        if obj.contains(ans_mouse):
                            gotValidClick = True
                            ans_mouse.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in askQuestion1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "askQuestion1"-------
    for thisComponent in askQuestion1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for PracticeTrials1 (TrialHandler)
    x, y = ans_mouse.getPos()
    buttons = ans_mouse.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        for obj in [eval("ans_0_0"), eval("ans_0_1"), eval("ans_0_2"), eval("ans_0_3"), eval("ans_1_0"), eval("ans_1_1"), eval("ans_1_2"), eval("ans_1_3"), eval("ans_2_0"), eval("ans_2_1"), eval("ans_2_2"), eval("ans_2_3")]:
            if obj.contains(ans_mouse):
                gotValidClick = True
                ans_mouse.clicked_name.append(obj.name)
    PracticeTrials1.addData('ans_mouse.x', x)
    PracticeTrials1.addData('ans_mouse.y', y)
    PracticeTrials1.addData('ans_mouse.leftButton', buttons[0])
    PracticeTrials1.addData('ans_mouse.midButton', buttons[1])
    PracticeTrials1.addData('ans_mouse.rightButton', buttons[2])
    if len(ans_mouse.clicked_name):
        PracticeTrials1.addData('ans_mouse.clicked_name', ans_mouse.clicked_name[0])
    mouse.setVisible(False)
    # the Routine "askQuestion1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'PracticeTrials1'


# ------Prepare to start Routine "actualIntro1"-------
continueRoutine = True
# update component parameters for each repeat
actual_intro_key_resp1.keys = []
actual_intro_key_resp1.rt = []
_actual_intro_key_resp1_allKeys = []
count = 0
# keep track of which components have finished
actualIntro1Components = [introduction_text_a1, actual_intro_key_resp1]
for thisComponent in actualIntro1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
actualIntro1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "actualIntro1"-------
while continueRoutine:
    # get current time
    t = actualIntro1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=actualIntro1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *introduction_text_a1* updates
    if introduction_text_a1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        introduction_text_a1.frameNStart = frameN  # exact frame index
        introduction_text_a1.tStart = t  # local t and not account for scr refresh
        introduction_text_a1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(introduction_text_a1, 'tStartRefresh')  # time at next scr refresh
        introduction_text_a1.setAutoDraw(True)
    
    # *actual_intro_key_resp1* updates
    waitOnFlip = False
    if actual_intro_key_resp1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        actual_intro_key_resp1.frameNStart = frameN  # exact frame index
        actual_intro_key_resp1.tStart = t  # local t and not account for scr refresh
        actual_intro_key_resp1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(actual_intro_key_resp1, 'tStartRefresh')  # time at next scr refresh
        actual_intro_key_resp1.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(actual_intro_key_resp1.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(actual_intro_key_resp1.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if actual_intro_key_resp1.status == STARTED and not waitOnFlip:
        theseKeys = actual_intro_key_resp1.getKeys(keyList=['s'], waitRelease=False)
        _actual_intro_key_resp1_allKeys.extend(theseKeys)
        if len(_actual_intro_key_resp1_allKeys):
            actual_intro_key_resp1.keys = _actual_intro_key_resp1_allKeys[-1].name  # just the last key pressed
            actual_intro_key_resp1.rt = _actual_intro_key_resp1_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in actualIntro1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "actualIntro1"-------
for thisComponent in actualIntro1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "actualIntro1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
ActualTrials1 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditions/actualTrials1.xlsx'),
    seed=None, name='ActualTrials1')
thisExp.addLoop(ActualTrials1)  # add the loop to the experiment
thisActualTrials1 = ActualTrials1.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisActualTrials1.rgb)
if thisActualTrials1 != None:
    for paramName in thisActualTrials1:
        exec('{} = thisActualTrials1[paramName]'.format(paramName))

for thisActualTrials1 in ActualTrials1:
    currentLoop = ActualTrials1
    # abbreviate parameter names if possible (e.g. rgb = thisActualTrials1.rgb)
    if thisActualTrials1 != None:
        for paramName in thisActualTrials1:
            exec('{} = thisActualTrials1[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "gitter"-------
    continueRoutine = True
    # update component parameters for each repeat
    fixation_point.fillColor = (-0.4980, -0.4980, -0.4980)
    fixation_point.lineColor = (-0.4980, -0.4980, -0.4980)
    
    # setup some python lists for storing info about the mouse
    mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    mouse.setVisible(True)
    # keep track of which components have finished
    gitterComponents = [mouse, gitter_text]
    for thisComponent in gitterComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    gitterClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "gitter"-------
    while continueRoutine:
        # get current time
        t = gitterClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=gitterClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        fixation_point.draw()
        # *mouse* updates
        if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse.frameNStart = frameN  # exact frame index
            mouse.tStart = t  # local t and not account for scr refresh
            mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
            mouse.status = STARTED
            mouse.mouseClock.reset()
            prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
        if mouse.status == STARTED:  # only update if started and not finished!
            buttons = mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [eval("fixation_point")]:
                        if obj.contains(mouse):
                            gotValidClick = True
                            mouse.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *gitter_text* updates
        if gitter_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            gitter_text.frameNStart = frameN  # exact frame index
            gitter_text.tStart = t  # local t and not account for scr refresh
            gitter_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(gitter_text, 'tStartRefresh')  # time at next scr refresh
            gitter_text.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in gitterComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "gitter"-------
    for thisComponent in gitterComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    fixation_point.fillColor = (0.5059, 0.5059, 0.5059)
    fixation_point.lineColor = (0.5059, 0.5059, 0.5059)
    # store data for ActualTrials1 (TrialHandler)
    x, y = mouse.getPos()
    buttons = mouse.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        for obj in [eval("fixation_point")]:
            if obj.contains(mouse):
                gotValidClick = True
                mouse.clicked_name.append(obj.name)
    ActualTrials1.addData('mouse.x', x)
    ActualTrials1.addData('mouse.y', y)
    ActualTrials1.addData('mouse.leftButton', buttons[0])
    ActualTrials1.addData('mouse.midButton', buttons[1])
    ActualTrials1.addData('mouse.rightButton', buttons[2])
    if len(mouse.clicked_name):
        ActualTrials1.addData('mouse.clicked_name', mouse.clicked_name[0])
    ActualTrials1.addData('gitter_text.started', gitter_text.tStartRefresh)
    ActualTrials1.addData('gitter_text.stopped', gitter_text.tStopRefresh)
    mouse.setVisible(False)
    # the Routine "gitter" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "showStim1"-------
    continueRoutine = True
    # update component parameters for each repeat
    if currentLoop.name == 'PracticeTrials1':
        image_path = 'html/resources/imagenet/practice/1/practice_{}.png'.format(presented_class)
    else:
        if magnified == 1:
            image_path = 'html/resources/imagenet/1/magnified/{}/{}_{}.png'.format(num_to_class[presented_class],num_to_class[presented_class],image_n)
        else:  # magnified == 0
            image_path = 'html/resources/imagenet/1/standard/{}/{}_1{}.png'.format(num_to_class[presented_class],num_to_class[presented_class],image_n)
    stimuli.image = Image.open(image_path)
    
    thisExp.addData('stimuli', image_path)
    
    show_stim_key_resp.keys = []
    show_stim_key_resp.rt = []
    _show_stim_key_resp_allKeys = []
    # setup some python lists for storing info about the mouse_2
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    showStim1Components = [show_stim_key_resp, mouse_2]
    for thisComponent in showStim1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    showStim1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "showStim1"-------
    while continueRoutine:
        # get current time
        t = showStim1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=showStim1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        fixation_point.draw()
        
        if showStim1Clock.getTime() > 1:
            stimuli.draw()
        
        
        # *show_stim_key_resp* updates
        waitOnFlip = False
        if show_stim_key_resp.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            show_stim_key_resp.frameNStart = frameN  # exact frame index
            show_stim_key_resp.tStart = t  # local t and not account for scr refresh
            show_stim_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(show_stim_key_resp, 'tStartRefresh')  # time at next scr refresh
            show_stim_key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(show_stim_key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(show_stim_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if show_stim_key_resp.status == STARTED and not waitOnFlip:
            theseKeys = show_stim_key_resp.getKeys(keyList=['space'], waitRelease=False)
            _show_stim_key_resp_allKeys.extend(theseKeys)
            if len(_show_stim_key_resp_allKeys):
                show_stim_key_resp.keys = _show_stim_key_resp_allKeys[-1].name  # just the last key pressed
                show_stim_key_resp.rt = _show_stim_key_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        # *mouse_2* updates
        if mouse_2.status == NOT_STARTED and t >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_2.frameNStart = frameN  # exact frame index
            mouse_2.tStart = t  # local t and not account for scr refresh
            mouse_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_2, 'tStartRefresh')  # time at next scr refresh
            mouse_2.status = STARTED
            mouse_2.mouseClock.reset()
            prevButtonState = mouse_2.getPressed()  # if button is down already this ISN'T a new click
        if mouse_2.status == STARTED:  # only update if started and not finished!
            buttons = mouse_2.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # abort routine on response
                    continueRoutine = False
        # Time limit: 6 seconds
        if showStim1Clock.getTime() > 7:
            continueRoutine = False
        
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in showStim1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "showStim1"-------
    for thisComponent in showStim1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for ActualTrials1 (TrialHandler)
    x, y = mouse_2.getPos()
    buttons = mouse_2.getPressed()
    ActualTrials1.addData('mouse_2.x', x)
    ActualTrials1.addData('mouse_2.y', y)
    ActualTrials1.addData('mouse_2.leftButton', buttons[0])
    ActualTrials1.addData('mouse_2.midButton', buttons[1])
    ActualTrials1.addData('mouse_2.rightButton', buttons[2])
    ActualTrials1.addData('mouse_2.started', mouse_2.tStart)
    ActualTrials1.addData('mouse_2.stopped', mouse_2.tStop)
    thisExp.addData('reactionTime', showStim1Clock.getTime() - 1)
    # the Routine "showStim1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "askQuestion1"-------
    continueRoutine = True
    # update component parameters for each repeat
    for i in range(len(ans_list)):
        ans_list[i].text = ans_text_list[i]
    # setup some python lists for storing info about the ans_mouse
    ans_mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    mouse.setVisible(True)
    # keep track of which components have finished
    askQuestion1Components = [question_text, ans_mouse]
    for thisComponent in askQuestion1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    askQuestion1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "askQuestion1"-------
    while continueRoutine:
        # get current time
        t = askQuestion1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=askQuestion1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *question_text* updates
        if question_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            question_text.frameNStart = frameN  # exact frame index
            question_text.tStart = t  # local t and not account for scr refresh
            question_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(question_text, 'tStartRefresh')  # time at next scr refresh
            question_text.setAutoDraw(True)
        stimuli_arrangement.draw()
        for i in range(len(ans_list)):
            ans_list[i].draw()
        # *ans_mouse* updates
        if ans_mouse.status == NOT_STARTED and t >= 0.1-frameTolerance:
            # keep track of start time/frame for later
            ans_mouse.frameNStart = frameN  # exact frame index
            ans_mouse.tStart = t  # local t and not account for scr refresh
            ans_mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(ans_mouse, 'tStartRefresh')  # time at next scr refresh
            ans_mouse.status = STARTED
            ans_mouse.mouseClock.reset()
            prevButtonState = ans_mouse.getPressed()  # if button is down already this ISN'T a new click
        if ans_mouse.status == STARTED:  # only update if started and not finished!
            buttons = ans_mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [eval("ans_0_0"), eval("ans_0_1"), eval("ans_0_2"), eval("ans_0_3"), eval("ans_1_0"), eval("ans_1_1"), eval("ans_1_2"), eval("ans_1_3"), eval("ans_2_0"), eval("ans_2_1"), eval("ans_2_2"), eval("ans_2_3")]:
                        if obj.contains(ans_mouse):
                            gotValidClick = True
                            ans_mouse.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in askQuestion1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "askQuestion1"-------
    for thisComponent in askQuestion1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for ActualTrials1 (TrialHandler)
    x, y = ans_mouse.getPos()
    buttons = ans_mouse.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        for obj in [eval("ans_0_0"), eval("ans_0_1"), eval("ans_0_2"), eval("ans_0_3"), eval("ans_1_0"), eval("ans_1_1"), eval("ans_1_2"), eval("ans_1_3"), eval("ans_2_0"), eval("ans_2_1"), eval("ans_2_2"), eval("ans_2_3")]:
            if obj.contains(ans_mouse):
                gotValidClick = True
                ans_mouse.clicked_name.append(obj.name)
    ActualTrials1.addData('ans_mouse.x', x)
    ActualTrials1.addData('ans_mouse.y', y)
    ActualTrials1.addData('ans_mouse.leftButton', buttons[0])
    ActualTrials1.addData('ans_mouse.midButton', buttons[1])
    ActualTrials1.addData('ans_mouse.rightButton', buttons[2])
    if len(ans_mouse.clicked_name):
        ActualTrials1.addData('ans_mouse.clicked_name', ans_mouse.clicked_name[0])
    mouse.setVisible(False)
    # the Routine "askQuestion1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "takeBreak"-------
    continueRoutine = True
    routineTimer.add(30.000000)
    # update component parameters for each repeat
    count += 1
    if (count + 1) % 80 != 0 or (count + 1) == 160:
        continueRoutine = False
    # keep track of which components have finished
    takeBreakComponents = [break_text]
    for thisComponent in takeBreakComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    takeBreakClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "takeBreak"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = takeBreakClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=takeBreakClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *break_text* updates
        if break_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            break_text.frameNStart = frameN  # exact frame index
            break_text.tStart = t  # local t and not account for scr refresh
            break_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(break_text, 'tStartRefresh')  # time at next scr refresh
            break_text.setAutoDraw(True)
        if break_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > break_text.tStartRefresh + 30.0-frameTolerance:
                # keep track of stop time/frame for later
                break_text.tStop = t  # not accounting for scr refresh
                break_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(break_text, 'tStopRefresh')  # time at next scr refresh
                break_text.setAutoDraw(False)
        # if takeBreakClock.getTime() > 30:
        #     continueRoutine = False
        
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in takeBreakComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "takeBreak"-------
    for thisComponent in takeBreakComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    ActualTrials1.addData('break_text.started', break_text.tStartRefresh)
    ActualTrials1.addData('break_text.stopped', break_text.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'ActualTrials1'


# ------Prepare to start Routine "expIntro2"-------
continueRoutine = True
# update component parameters for each repeat
image_path = 'html/resources/imagenet/practice/one_level/practice_0.png'
stimuli.image = Image.open(image_path)
square_list = [
    square_0_0,
    square_0_1,
    square_0_2,
    square_0_3,
    square_1_0,
    square_1_1,
    square_1_2,
    square_1_3,
    square_2_0,
    square_2_1,
    square_2_2,
    square_2_3
]

ecc = 6
for i in range(len(square_list)):
    square_list[i].pos = (
        an2pix * ecc * math.cos(math.radians(i % 12 * 30)),
        an2pix * ecc * math.sin(math.radians(i % 12 * 30)),
    )
    square_list[i].opacity = 0.0

intro_state = -1
mouse.setVisible(True)
# keep track of which components have finished
expIntro2Components = [square_0_0, square_0_1, square_0_2, square_0_3, square_1_0, square_1_1, square_1_2, square_1_3, square_2_0, square_2_1, square_2_2, square_2_3, introduction_text2, back_text2]
for thisComponent in expIntro2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
expIntro2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "expIntro2"-------
while continueRoutine:
    # get current time
    t = expIntro2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=expIntro2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *square_0_0* updates
    if square_0_0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        square_0_0.frameNStart = frameN  # exact frame index
        square_0_0.tStart = t  # local t and not account for scr refresh
        square_0_0.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(square_0_0, 'tStartRefresh')  # time at next scr refresh
        square_0_0.setAutoDraw(True)
    
    # *square_0_1* updates
    if square_0_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        square_0_1.frameNStart = frameN  # exact frame index
        square_0_1.tStart = t  # local t and not account for scr refresh
        square_0_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(square_0_1, 'tStartRefresh')  # time at next scr refresh
        square_0_1.setAutoDraw(True)
    
    # *square_0_2* updates
    if square_0_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        square_0_2.frameNStart = frameN  # exact frame index
        square_0_2.tStart = t  # local t and not account for scr refresh
        square_0_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(square_0_2, 'tStartRefresh')  # time at next scr refresh
        square_0_2.setAutoDraw(True)
    
    # *square_0_3* updates
    if square_0_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        square_0_3.frameNStart = frameN  # exact frame index
        square_0_3.tStart = t  # local t and not account for scr refresh
        square_0_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(square_0_3, 'tStartRefresh')  # time at next scr refresh
        square_0_3.setAutoDraw(True)
    
    # *square_1_0* updates
    if square_1_0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        square_1_0.frameNStart = frameN  # exact frame index
        square_1_0.tStart = t  # local t and not account for scr refresh
        square_1_0.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(square_1_0, 'tStartRefresh')  # time at next scr refresh
        square_1_0.setAutoDraw(True)
    
    # *square_1_1* updates
    if square_1_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        square_1_1.frameNStart = frameN  # exact frame index
        square_1_1.tStart = t  # local t and not account for scr refresh
        square_1_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(square_1_1, 'tStartRefresh')  # time at next scr refresh
        square_1_1.setAutoDraw(True)
    
    # *square_1_2* updates
    if square_1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        square_1_2.frameNStart = frameN  # exact frame index
        square_1_2.tStart = t  # local t and not account for scr refresh
        square_1_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(square_1_2, 'tStartRefresh')  # time at next scr refresh
        square_1_2.setAutoDraw(True)
    
    # *square_1_3* updates
    if square_1_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        square_1_3.frameNStart = frameN  # exact frame index
        square_1_3.tStart = t  # local t and not account for scr refresh
        square_1_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(square_1_3, 'tStartRefresh')  # time at next scr refresh
        square_1_3.setAutoDraw(True)
    
    # *square_2_0* updates
    if square_2_0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        square_2_0.frameNStart = frameN  # exact frame index
        square_2_0.tStart = t  # local t and not account for scr refresh
        square_2_0.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(square_2_0, 'tStartRefresh')  # time at next scr refresh
        square_2_0.setAutoDraw(True)
    
    # *square_2_1* updates
    if square_2_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        square_2_1.frameNStart = frameN  # exact frame index
        square_2_1.tStart = t  # local t and not account for scr refresh
        square_2_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(square_2_1, 'tStartRefresh')  # time at next scr refresh
        square_2_1.setAutoDraw(True)
    
    # *square_2_2* updates
    if square_2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        square_2_2.frameNStart = frameN  # exact frame index
        square_2_2.tStart = t  # local t and not account for scr refresh
        square_2_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(square_2_2, 'tStartRefresh')  # time at next scr refresh
        square_2_2.setAutoDraw(True)
    
    # *square_2_3* updates
    if square_2_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        square_2_3.frameNStart = frameN  # exact frame index
        square_2_3.tStart = t  # local t and not account for scr refresh
        square_2_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(square_2_3, 'tStartRefresh')  # time at next scr refresh
        square_2_3.setAutoDraw(True)
    
    # *introduction_text2* updates
    if introduction_text2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        introduction_text2.frameNStart = frameN  # exact frame index
        introduction_text2.tStart = t  # local t and not account for scr refresh
        introduction_text2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(introduction_text2, 'tStartRefresh')  # time at next scr refresh
        introduction_text2.setAutoDraw(True)
    
    # *back_text2* updates
    if back_text2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        back_text2.frameNStart = frameN  # exact frame index
        back_text2.tStart = t  # local t and not account for scr refresh
        back_text2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(back_text2, 'tStartRefresh')  # time at next scr refresh
        back_text2.setAutoDraw(True)
    keys = [""]
    keys += event.getKeys(keyList=["space", "b"])
    
    if keys[-1] == "space":
        intro_state += 1
    if keys[-1] == "b":
        intro_state -= 1
    if intro_state < 0:
        intro_state = 0
    
    if intro_state == 0:
        introduction_text2.text = 'The task 1 has finished. \n Let’s move on the task 2. \n\n The task is ranking the images in order of your preference.'
        introduction_text2.pos = (0, 2 * an2pix)
        back_text2.text = 'Next: "Space" Key'
        back_text2.pos = (0, -2 * an2pix)
        fixation_point.opacity = 0.0
        stimuli.opacity = 0.0
    if intro_state == 1:
        introduction_text2.text = 'Click the center circle to display a lineup of images.'
        introduction_text2.pos = (0, 4 * an2pix)
        back_text2.text = 'Next: "Space" Key \n Back: "b" Key'
        back_text2.pos = (0, -4 * an2pix)
        fixation_point.opacity = 1.0
        stimuli.opacity = 0.0
    if intro_state == 2:
        introduction_text2.text = 'After you look at the images in 6 seconds, \n the mouse cursor will be shown up. \n Please choose the most favorite image.'
        # introduction_text2.pos = (9 * an2pix, 0)
        introduction_text2.pos = (0, 0)
        back_text2.pos = (-9 * an2pix, -5 * an2pix)
        fixation_point.opacity = 0.0
        stimuli.opacity = 1.0
        square_list[0].opacity = 0.0
    if intro_state == 3:
        introduction_text2.text = 'For example, \n if you choose the most right image, \n it will disappear. \n\n Then, you select the most favorite image \n from the rest. \n\n When you finish choosing all images, \n the next 12 images are shown up.'
        square_list[0].opacity = 1.0
    if intro_state == 4:
        fixation_point.opacity = 1.0
        continueRoutine = False
    
    stimuli.draw()
    fixation_point.draw()
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in expIntro2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "expIntro2"-------
for thisComponent in expIntro2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('introduction_text2.started', introduction_text2.tStartRefresh)
thisExp.addData('introduction_text2.stopped', introduction_text2.tStopRefresh)
thisExp.addData('back_text2.started', back_text2.tStartRefresh)
thisExp.addData('back_text2.stopped', back_text2.tStopRefresh)
# the Routine "expIntro2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "practiceIntro"-------
continueRoutine = True
# update component parameters for each repeat
practice_info_key_resp.keys = []
practice_info_key_resp.rt = []
_practice_info_key_resp_allKeys = []
# keep track of which components have finished
practiceIntroComponents = [introduction_text_p, practice_info_key_resp]
for thisComponent in practiceIntroComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
practiceIntroClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "practiceIntro"-------
while continueRoutine:
    # get current time
    t = practiceIntroClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=practiceIntroClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *introduction_text_p* updates
    if introduction_text_p.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        introduction_text_p.frameNStart = frameN  # exact frame index
        introduction_text_p.tStart = t  # local t and not account for scr refresh
        introduction_text_p.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(introduction_text_p, 'tStartRefresh')  # time at next scr refresh
        introduction_text_p.setAutoDraw(True)
    
    # *practice_info_key_resp* updates
    waitOnFlip = False
    if practice_info_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        practice_info_key_resp.frameNStart = frameN  # exact frame index
        practice_info_key_resp.tStart = t  # local t and not account for scr refresh
        practice_info_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(practice_info_key_resp, 'tStartRefresh')  # time at next scr refresh
        practice_info_key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(practice_info_key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(practice_info_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if practice_info_key_resp.status == STARTED and not waitOnFlip:
        theseKeys = practice_info_key_resp.getKeys(keyList=['space'], waitRelease=False)
        _practice_info_key_resp_allKeys.extend(theseKeys)
        if len(_practice_info_key_resp_allKeys):
            practice_info_key_resp.keys = _practice_info_key_resp_allKeys[-1].name  # just the last key pressed
            practice_info_key_resp.rt = _practice_info_key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in practiceIntroComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "practiceIntro"-------
for thisComponent in practiceIntroComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "practiceIntro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
PracticeTrials2 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditions/practiceTrials2.xlsx'),
    seed=None, name='PracticeTrials2')
thisExp.addLoop(PracticeTrials2)  # add the loop to the experiment
thisPracticeTrials2 = PracticeTrials2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPracticeTrials2.rgb)
if thisPracticeTrials2 != None:
    for paramName in thisPracticeTrials2:
        exec('{} = thisPracticeTrials2[paramName]'.format(paramName))

for thisPracticeTrials2 in PracticeTrials2:
    currentLoop = PracticeTrials2
    # abbreviate parameter names if possible (e.g. rgb = thisPracticeTrials2.rgb)
    if thisPracticeTrials2 != None:
        for paramName in thisPracticeTrials2:
            exec('{} = thisPracticeTrials2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "initializeTrial"-------
    continueRoutine = True
    # update component parameters for each repeat
    for i in range(len(square_list)):
        square_list[i].opacity = 0.0
    # setup some python lists for storing info about the mouse_3
    mouse_3.clicked_name = []
    gotValidClick = False  # until a click is received
    clickable_list = [
        square_0_0,
        square_0_1,
        square_0_2,
        square_0_3,
        square_1_0,
        square_1_1,
        square_1_2,
        square_1_3,
        square_2_0,
        square_2_1,
        square_2_2,
        square_2_3
    ]
    initial_flag = True
    # keep track of which components have finished
    initializeTrialComponents = [mouse_3, gitter_text2]
    for thisComponent in initializeTrialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    initializeTrialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "initializeTrial"-------
    while continueRoutine:
        # get current time
        t = initializeTrialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=initializeTrialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        fixation_point.draw()
        # *mouse_3* updates
        if mouse_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_3.frameNStart = frameN  # exact frame index
            mouse_3.tStart = t  # local t and not account for scr refresh
            mouse_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_3, 'tStartRefresh')  # time at next scr refresh
            mouse_3.status = STARTED
            mouse_3.mouseClock.reset()
            prevButtonState = mouse_3.getPressed()  # if button is down already this ISN'T a new click
        if mouse_3.status == STARTED:  # only update if started and not finished!
            buttons = mouse_3.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [eval("fixation_point")]:
                        if obj.contains(mouse_3):
                            gotValidClick = True
                            mouse_3.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *gitter_text2* updates
        if gitter_text2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            gitter_text2.frameNStart = frameN  # exact frame index
            gitter_text2.tStart = t  # local t and not account for scr refresh
            gitter_text2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(gitter_text2, 'tStartRefresh')  # time at next scr refresh
            gitter_text2.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in initializeTrialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "initializeTrial"-------
    for thisComponent in initializeTrialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for PracticeTrials2 (TrialHandler)
    x, y = mouse_3.getPos()
    buttons = mouse_3.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        for obj in [eval("fixation_point")]:
            if obj.contains(mouse_3):
                gotValidClick = True
                mouse_3.clicked_name.append(obj.name)
    PracticeTrials2.addData('mouse_3.x', x)
    PracticeTrials2.addData('mouse_3.y', y)
    PracticeTrials2.addData('mouse_3.leftButton', buttons[0])
    PracticeTrials2.addData('mouse_3.midButton', buttons[1])
    PracticeTrials2.addData('mouse_3.rightButton', buttons[2])
    if len(mouse_3.clicked_name):
        PracticeTrials2.addData('mouse_3.clicked_name', mouse_3.clicked_name[0])
    PracticeTrials2.addData('mouse_3.started', mouse_3.tStart)
    PracticeTrials2.addData('mouse_3.stopped', mouse_3.tStop)
    PracticeTrials2.addData('gitter_text2.started', gitter_text2.tStartRefresh)
    PracticeTrials2.addData('gitter_text2.stopped', gitter_text2.tStopRefresh)
    # the Routine "initializeTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    rankImages_p = data.TrialHandler(nReps=12.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='rankImages_p')
    thisExp.addLoop(rankImages_p)  # add the loop to the experiment
    thisRankImages_p = rankImages_p.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisRankImages_p.rgb)
    if thisRankImages_p != None:
        for paramName in thisRankImages_p:
            exec('{} = thisRankImages_p[paramName]'.format(paramName))
    
    for thisRankImages_p in rankImages_p:
        currentLoop = rankImages_p
        # abbreviate parameter names if possible (e.g. rgb = thisRankImages_p.rgb)
        if thisRankImages_p != None:
            for paramName in thisRankImages_p:
                exec('{} = thisRankImages_p[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "showStim2"-------
        continueRoutine = True
        # update component parameters for each repeat
        if currentLoop.name == 'rankImages_p':  # PracticeTrials2
            image_path = 'html/resources/imagenet/practice/one_level/practice_{}.png'.format(PracticeTrials2.thisN)
        else:  # ActualTrials2
            image_path = 'html/resources/imagenet/one_level/{}/{}_{}.png'.format(num_to_class[presented_class], num_to_class[presented_class], image_n)
        stimuli.image = Image.open(image_path)
        
        thisExp.addData('stimuli', image_path)
        
        # setup some python lists for storing info about the ans_mouse2
        ans_mouse2.clicked_name = []
        gotValidClick = False  # until a click is received
        if initial_flag:
            ans_mouse2.setVisible(False)
            ans_text.text = ""
        
        # keep track of which components have finished
        showStim2Components = [ans_mouse2, ans_text]
        for thisComponent in showStim2Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        showStim2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "showStim2"-------
        while continueRoutine:
            # get current time
            t = showStim2Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=showStim2Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            stimuli.draw()
            for square in square_list:
                square.draw()
            # *ans_mouse2* updates
            if ans_mouse2.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                ans_mouse2.frameNStart = frameN  # exact frame index
                ans_mouse2.tStart = t  # local t and not account for scr refresh
                ans_mouse2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(ans_mouse2, 'tStartRefresh')  # time at next scr refresh
                ans_mouse2.status = STARTED
                ans_mouse2.mouseClock.reset()
                prevButtonState = ans_mouse2.getPressed()  # if button is down already this ISN'T a new click
            if ans_mouse2.status == STARTED:  # only update if started and not finished!
                buttons = ans_mouse2.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        for obj in clickable_list:
                            if obj.contains(ans_mouse2):
                                gotValidClick = True
                                ans_mouse2.clicked_name.append(obj.name)
                        if gotValidClick:  # abort routine on response
                            continueRoutine = False
            
            # *ans_text* updates
            if ans_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                ans_text.frameNStart = frameN  # exact frame index
                ans_text.tStart = t  # local t and not account for scr refresh
                ans_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(ans_text, 'tStartRefresh')  # time at next scr refresh
                ans_text.setAutoDraw(True)
            if initial_flag and showStim2Clock.getTime() > 6:
                    ans_mouse2.setVisible(True)
                    initial_flag = False
            
            if not initial_flag:
                if len(clickable_list) < 12:
                    ans_text.text = "Choose the favorite image \n from the rest."
                else:
                    ans_text.text = "Choose the favorite image."
            
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in showStim2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "showStim2"-------
        for thisComponent in showStim2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for rankImages_p (TrialHandler)
        x, y = ans_mouse2.getPos()
        buttons = ans_mouse2.getPressed()
        if sum(buttons):
            # check if the mouse was inside our 'clickable' objects
            gotValidClick = False
            for obj in clickable_list:
                if obj.contains(ans_mouse2):
                    gotValidClick = True
                    ans_mouse2.clicked_name.append(obj.name)
        rankImages_p.addData('ans_mouse2.x', x)
        rankImages_p.addData('ans_mouse2.y', y)
        rankImages_p.addData('ans_mouse2.leftButton', buttons[0])
        rankImages_p.addData('ans_mouse2.midButton', buttons[1])
        rankImages_p.addData('ans_mouse2.rightButton', buttons[2])
        if len(ans_mouse2.clicked_name):
            rankImages_p.addData('ans_mouse2.clicked_name', ans_mouse2.clicked_name[0])
        # the Routine "showStim2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "updateSquares"-------
        continueRoutine = True
        # update component parameters for each repeat
        for i in range(len(square_list)):
            if square_list[i].name == ans_mouse2.clicked_name[0]:
                square_list[i].opacity = 1.0
        for i in range(len(clickable_list)):
            if clickable_list[i].name == ans_mouse2.clicked_name[0]:
                _ = clickable_list.pop(i)
                break
        continueRoutine = False
        # keep track of which components have finished
        updateSquaresComponents = []
        for thisComponent in updateSquaresComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        updateSquaresClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "updateSquares"-------
        while continueRoutine:
            # get current time
            t = updateSquaresClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=updateSquaresClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in updateSquaresComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "updateSquares"-------
        for thisComponent in updateSquaresComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "updateSquares" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 12.0 repeats of 'rankImages_p'
    
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'PracticeTrials2'


# ------Prepare to start Routine "actualIntro2"-------
continueRoutine = True
# update component parameters for each repeat
actual_intro_key_resp2.keys = []
actual_intro_key_resp2.rt = []
_actual_intro_key_resp2_allKeys = []
count = 0
# keep track of which components have finished
actualIntro2Components = [Introduction_text_a2, actual_intro_key_resp2]
for thisComponent in actualIntro2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
actualIntro2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "actualIntro2"-------
while continueRoutine:
    # get current time
    t = actualIntro2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=actualIntro2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Introduction_text_a2* updates
    if Introduction_text_a2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Introduction_text_a2.frameNStart = frameN  # exact frame index
        Introduction_text_a2.tStart = t  # local t and not account for scr refresh
        Introduction_text_a2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Introduction_text_a2, 'tStartRefresh')  # time at next scr refresh
        Introduction_text_a2.setAutoDraw(True)
    
    # *actual_intro_key_resp2* updates
    waitOnFlip = False
    if actual_intro_key_resp2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        actual_intro_key_resp2.frameNStart = frameN  # exact frame index
        actual_intro_key_resp2.tStart = t  # local t and not account for scr refresh
        actual_intro_key_resp2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(actual_intro_key_resp2, 'tStartRefresh')  # time at next scr refresh
        actual_intro_key_resp2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(actual_intro_key_resp2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(actual_intro_key_resp2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if actual_intro_key_resp2.status == STARTED and not waitOnFlip:
        theseKeys = actual_intro_key_resp2.getKeys(keyList=['s'], waitRelease=False)
        _actual_intro_key_resp2_allKeys.extend(theseKeys)
        if len(_actual_intro_key_resp2_allKeys):
            actual_intro_key_resp2.keys = _actual_intro_key_resp2_allKeys[-1].name  # just the last key pressed
            actual_intro_key_resp2.rt = _actual_intro_key_resp2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in actualIntro2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "actualIntro2"-------
for thisComponent in actualIntro2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('Introduction_text_a2.started', Introduction_text_a2.tStartRefresh)
thisExp.addData('Introduction_text_a2.stopped', Introduction_text_a2.tStopRefresh)
# the Routine "actualIntro2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
ActualTrials2 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditions/actualTrials2.xlsx'),
    seed=None, name='ActualTrials2')
thisExp.addLoop(ActualTrials2)  # add the loop to the experiment
thisActualTrials2 = ActualTrials2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisActualTrials2.rgb)
if thisActualTrials2 != None:
    for paramName in thisActualTrials2:
        exec('{} = thisActualTrials2[paramName]'.format(paramName))

for thisActualTrials2 in ActualTrials2:
    currentLoop = ActualTrials2
    # abbreviate parameter names if possible (e.g. rgb = thisActualTrials2.rgb)
    if thisActualTrials2 != None:
        for paramName in thisActualTrials2:
            exec('{} = thisActualTrials2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "initializeTrial"-------
    continueRoutine = True
    # update component parameters for each repeat
    for i in range(len(square_list)):
        square_list[i].opacity = 0.0
    # setup some python lists for storing info about the mouse_3
    mouse_3.clicked_name = []
    gotValidClick = False  # until a click is received
    clickable_list = [
        square_0_0,
        square_0_1,
        square_0_2,
        square_0_3,
        square_1_0,
        square_1_1,
        square_1_2,
        square_1_3,
        square_2_0,
        square_2_1,
        square_2_2,
        square_2_3
    ]
    initial_flag = True
    # keep track of which components have finished
    initializeTrialComponents = [mouse_3, gitter_text2]
    for thisComponent in initializeTrialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    initializeTrialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "initializeTrial"-------
    while continueRoutine:
        # get current time
        t = initializeTrialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=initializeTrialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        fixation_point.draw()
        # *mouse_3* updates
        if mouse_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_3.frameNStart = frameN  # exact frame index
            mouse_3.tStart = t  # local t and not account for scr refresh
            mouse_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_3, 'tStartRefresh')  # time at next scr refresh
            mouse_3.status = STARTED
            mouse_3.mouseClock.reset()
            prevButtonState = mouse_3.getPressed()  # if button is down already this ISN'T a new click
        if mouse_3.status == STARTED:  # only update if started and not finished!
            buttons = mouse_3.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [eval("fixation_point")]:
                        if obj.contains(mouse_3):
                            gotValidClick = True
                            mouse_3.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *gitter_text2* updates
        if gitter_text2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            gitter_text2.frameNStart = frameN  # exact frame index
            gitter_text2.tStart = t  # local t and not account for scr refresh
            gitter_text2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(gitter_text2, 'tStartRefresh')  # time at next scr refresh
            gitter_text2.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in initializeTrialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "initializeTrial"-------
    for thisComponent in initializeTrialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for ActualTrials2 (TrialHandler)
    x, y = mouse_3.getPos()
    buttons = mouse_3.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        for obj in [eval("fixation_point")]:
            if obj.contains(mouse_3):
                gotValidClick = True
                mouse_3.clicked_name.append(obj.name)
    ActualTrials2.addData('mouse_3.x', x)
    ActualTrials2.addData('mouse_3.y', y)
    ActualTrials2.addData('mouse_3.leftButton', buttons[0])
    ActualTrials2.addData('mouse_3.midButton', buttons[1])
    ActualTrials2.addData('mouse_3.rightButton', buttons[2])
    if len(mouse_3.clicked_name):
        ActualTrials2.addData('mouse_3.clicked_name', mouse_3.clicked_name[0])
    ActualTrials2.addData('mouse_3.started', mouse_3.tStart)
    ActualTrials2.addData('mouse_3.stopped', mouse_3.tStop)
    ActualTrials2.addData('gitter_text2.started', gitter_text2.tStartRefresh)
    ActualTrials2.addData('gitter_text2.stopped', gitter_text2.tStopRefresh)
    # the Routine "initializeTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    rankImages_a = data.TrialHandler(nReps=12.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='rankImages_a')
    thisExp.addLoop(rankImages_a)  # add the loop to the experiment
    thisRankImages_a = rankImages_a.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisRankImages_a.rgb)
    if thisRankImages_a != None:
        for paramName in thisRankImages_a:
            exec('{} = thisRankImages_a[paramName]'.format(paramName))
    
    for thisRankImages_a in rankImages_a:
        currentLoop = rankImages_a
        # abbreviate parameter names if possible (e.g. rgb = thisRankImages_a.rgb)
        if thisRankImages_a != None:
            for paramName in thisRankImages_a:
                exec('{} = thisRankImages_a[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "showStim2"-------
        continueRoutine = True
        # update component parameters for each repeat
        if currentLoop.name == 'rankImages_p':  # PracticeTrials2
            image_path = 'html/resources/imagenet/practice/one_level/practice_{}.png'.format(PracticeTrials2.thisN)
        else:  # ActualTrials2
            image_path = 'html/resources/imagenet/one_level/{}/{}_{}.png'.format(num_to_class[presented_class], num_to_class[presented_class], image_n)
        stimuli.image = Image.open(image_path)
        
        thisExp.addData('stimuli', image_path)
        
        # setup some python lists for storing info about the ans_mouse2
        ans_mouse2.clicked_name = []
        gotValidClick = False  # until a click is received
        if initial_flag:
            ans_mouse2.setVisible(False)
            ans_text.text = ""
        
        # keep track of which components have finished
        showStim2Components = [ans_mouse2, ans_text]
        for thisComponent in showStim2Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        showStim2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "showStim2"-------
        while continueRoutine:
            # get current time
            t = showStim2Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=showStim2Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            stimuli.draw()
            for square in square_list:
                square.draw()
            # *ans_mouse2* updates
            if ans_mouse2.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                ans_mouse2.frameNStart = frameN  # exact frame index
                ans_mouse2.tStart = t  # local t and not account for scr refresh
                ans_mouse2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(ans_mouse2, 'tStartRefresh')  # time at next scr refresh
                ans_mouse2.status = STARTED
                ans_mouse2.mouseClock.reset()
                prevButtonState = ans_mouse2.getPressed()  # if button is down already this ISN'T a new click
            if ans_mouse2.status == STARTED:  # only update if started and not finished!
                buttons = ans_mouse2.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        for obj in clickable_list:
                            if obj.contains(ans_mouse2):
                                gotValidClick = True
                                ans_mouse2.clicked_name.append(obj.name)
                        if gotValidClick:  # abort routine on response
                            continueRoutine = False
            
            # *ans_text* updates
            if ans_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                ans_text.frameNStart = frameN  # exact frame index
                ans_text.tStart = t  # local t and not account for scr refresh
                ans_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(ans_text, 'tStartRefresh')  # time at next scr refresh
                ans_text.setAutoDraw(True)
            if initial_flag and showStim2Clock.getTime() > 6:
                    ans_mouse2.setVisible(True)
                    initial_flag = False
            
            if not initial_flag:
                if len(clickable_list) < 12:
                    ans_text.text = "Choose the favorite image \n from the rest."
                else:
                    ans_text.text = "Choose the favorite image."
            
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in showStim2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "showStim2"-------
        for thisComponent in showStim2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for rankImages_a (TrialHandler)
        x, y = ans_mouse2.getPos()
        buttons = ans_mouse2.getPressed()
        if sum(buttons):
            # check if the mouse was inside our 'clickable' objects
            gotValidClick = False
            for obj in clickable_list:
                if obj.contains(ans_mouse2):
                    gotValidClick = True
                    ans_mouse2.clicked_name.append(obj.name)
        rankImages_a.addData('ans_mouse2.x', x)
        rankImages_a.addData('ans_mouse2.y', y)
        rankImages_a.addData('ans_mouse2.leftButton', buttons[0])
        rankImages_a.addData('ans_mouse2.midButton', buttons[1])
        rankImages_a.addData('ans_mouse2.rightButton', buttons[2])
        if len(ans_mouse2.clicked_name):
            rankImages_a.addData('ans_mouse2.clicked_name', ans_mouse2.clicked_name[0])
        # the Routine "showStim2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "updateSquares"-------
        continueRoutine = True
        # update component parameters for each repeat
        for i in range(len(square_list)):
            if square_list[i].name == ans_mouse2.clicked_name[0]:
                square_list[i].opacity = 1.0
        for i in range(len(clickable_list)):
            if clickable_list[i].name == ans_mouse2.clicked_name[0]:
                _ = clickable_list.pop(i)
                break
        continueRoutine = False
        # keep track of which components have finished
        updateSquaresComponents = []
        for thisComponent in updateSquaresComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        updateSquaresClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "updateSquares"-------
        while continueRoutine:
            # get current time
            t = updateSquaresClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=updateSquaresClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in updateSquaresComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "updateSquares"-------
        for thisComponent in updateSquaresComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "updateSquares" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 12.0 repeats of 'rankImages_a'
    
    
    # ------Prepare to start Routine "takeBreak"-------
    continueRoutine = True
    routineTimer.add(30.000000)
    # update component parameters for each repeat
    count += 1
    if (count + 1) % 80 != 0 or (count + 1) == 160:
        continueRoutine = False
    # keep track of which components have finished
    takeBreakComponents = [break_text]
    for thisComponent in takeBreakComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    takeBreakClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "takeBreak"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = takeBreakClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=takeBreakClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *break_text* updates
        if break_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            break_text.frameNStart = frameN  # exact frame index
            break_text.tStart = t  # local t and not account for scr refresh
            break_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(break_text, 'tStartRefresh')  # time at next scr refresh
            break_text.setAutoDraw(True)
        if break_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > break_text.tStartRefresh + 30.0-frameTolerance:
                # keep track of stop time/frame for later
                break_text.tStop = t  # not accounting for scr refresh
                break_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(break_text, 'tStopRefresh')  # time at next scr refresh
                break_text.setAutoDraw(False)
        # if takeBreakClock.getTime() > 30:
        #     continueRoutine = False
        
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in takeBreakComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "takeBreak"-------
    for thisComponent in takeBreakComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    ActualTrials2.addData('break_text.started', break_text.tStartRefresh)
    ActualTrials2.addData('break_text.stopped', break_text.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'ActualTrials2'


# ------Prepare to start Routine "publishSurveyCode"-------
continueRoutine = True
# update component parameters for each repeat
survey_code = ''
for i in range(6):
    survey_code += str(random.randrange(0, 10))

show_thanks_and_code.text = 'The experiment has finished. \n Thank you for your patience. \n\n Your survey code is ' + survey_code + '. \n\n Please type this code to this experiment page \n on amazon mturk. \n If you done, press "f" key to finish the experiment.'
thisExp.addData('surveyCode',survey_code)

finish_key_resp.keys = []
finish_key_resp.rt = []
_finish_key_resp_allKeys = []
# keep track of which components have finished
publishSurveyCodeComponents = [show_thanks_and_code, finish_key_resp]
for thisComponent in publishSurveyCodeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
publishSurveyCodeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "publishSurveyCode"-------
while continueRoutine:
    # get current time
    t = publishSurveyCodeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=publishSurveyCodeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *show_thanks_and_code* updates
    if show_thanks_and_code.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        show_thanks_and_code.frameNStart = frameN  # exact frame index
        show_thanks_and_code.tStart = t  # local t and not account for scr refresh
        show_thanks_and_code.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(show_thanks_and_code, 'tStartRefresh')  # time at next scr refresh
        show_thanks_and_code.setAutoDraw(True)
    
    # *finish_key_resp* updates
    waitOnFlip = False
    if finish_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        finish_key_resp.frameNStart = frameN  # exact frame index
        finish_key_resp.tStart = t  # local t and not account for scr refresh
        finish_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(finish_key_resp, 'tStartRefresh')  # time at next scr refresh
        finish_key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(finish_key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(finish_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if finish_key_resp.status == STARTED and not waitOnFlip:
        theseKeys = finish_key_resp.getKeys(keyList=['f'], waitRelease=False)
        _finish_key_resp_allKeys.extend(theseKeys)
        if len(_finish_key_resp_allKeys):
            finish_key_resp.keys = _finish_key_resp_allKeys[-1].name  # just the last key pressed
            finish_key_resp.rt = _finish_key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in publishSurveyCodeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "publishSurveyCode"-------
for thisComponent in publishSurveyCodeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('show_thanks_and_code.started', show_thanks_and_code.tStartRefresh)
thisExp.addData('show_thanks_and_code.stopped', show_thanks_and_code.tStopRefresh)
# the Routine "publishSurveyCode" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
