#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.1.4),
    on Thu Jul 22 14:51:24 2021
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

import random
import math
import math

from PIL import Image
from PIL import Image


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.1.4'
expName = 'peripheral_visual_search'  # from the Builder filename that created this script
expInfo = {'participant': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/tiger/Scripts_GoogleDrive/research/peripheral-visual-search-gitlab/peripheral-search_lastrun.py',
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
    size=[1440, 900], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='norm')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "screen_scale"
screen_scaleClock = core.Clock()
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
    x_scale=60
    y_scale=40
    dbase = .1
    unittext=' pixels'
    vsize=win.size[1]
else:
    x_scale=.05
    y_scale=.05
    dbase = .0001
    unittext=' height units'
    vsize=1
text_top = visual.TextStim(win=win, name='text_top',
    text='Resize this image to match the size of a credit card\nUp arrow for taller\nDown arrow for shorter\nLeft arrow for narrower\nRight arrow for wider',
    font='Arial',
    units='norm', pos=(0, .6), height=0.07, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
text_bottom = visual.TextStim(win=win, name='text_bottom',
    text='Press the space bar when done',
    font='Arial',
    units='norm', pos=(0, -.6), height=0.07, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
ccimage = visual.ImageStim(
    win=win,
    name='ccimage', 
    image='bank-1300155_640.png', mask=None,
    ori=0, pos=(0, 0), size=(x_size*x_scale, y_size*y_scale),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-4.0)

# Initialize components for Routine "rectangle"
rectangleClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='This shape should be a 10 cm square.\nComponent size  (10*x_scale, 10*y_scale) set every repeat.\nPress space to continue',
    font='Arial',
    units='norm', pos=(0, -.7), height=0.07, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
polygon = visual.Rect(
    win=win, name='polygon',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1,1,1],
    opacity=1, depth=-1.0, interpolate=True)
rectangle_key_resp = keyboard.Keyboard()

# Initialize components for Routine "exp_intro"
exp_introClock = core.Clock()
target_class = 'cat'
non_target_classes = [
    'dog',
    'elephant',
    'tiger',
    'rabbit',
    'kangaroo',
    'sheep',
    'monkey',
    'lion',
    'bear',
    'fox',
    'pig',
    'otter',
]

ans_keys_list = [['b', 'a', 'c', 'd'], ['f', 'e', 'g', 'h'], ['j', 'i', 'k', 'l']]
key_to_pos = {}
for i in range(len(ans_keys_list)):
    for j in range(len(ans_keys_list[i])):
        key_to_pos[ans_keys_list[i][j]] = [i, j]

hw_rate = win.size[1] / win.size[0]

idx = list(range(101, 149))
idx = list(map(lambda x: str(x)[1:], idx))
idx_list = {}
for i in range(len(non_target_classes)):
    idx_list[non_target_classes[i]] = random.sample(idx, len(idx))
idx_list[target_class] = random.sample(idx, len(idx))

reps = 0
eccentricity_level_0 = round(math.sqrt(2), 2)
eccentricity_level_1 = round(1 + math.sqrt(8), 2)
eccentricity_level_2 = round((math.sqrt(2) + 4 + math.sqrt((math.sqrt(2) + 4) ** 2 - 4 * (4 * math.sqrt(2) - 27))) / 2, 2)
eccentricities = [
    eccentricity_level_0,
    eccentricity_level_1,
    eccentricity_level_2
]

# Local
# imac
# VA = round(360 / pi * math.atan2(33.5, 2 * 57))
# macbook
VA = round(360 / pi * math.atan2(17.9, 2 * 57))
deg2norm = 2 / VA
image_0_0 = visual.ImageStim(
    win=win,
    name='image_0_0', units='norm', 
    image='html/resources/imagenet/bear/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
image_0_1 = visual.ImageStim(
    win=win,
    name='image_0_1', units='norm', 
    image='html/resources/imagenet/cat/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
image_0_2 = visual.ImageStim(
    win=win,
    name='image_0_2', units='norm', 
    image='html/resources/imagenet/dog/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-6.0)
image_0_3 = visual.ImageStim(
    win=win,
    name='image_0_3', units='norm', 
    image='html/resources/imagenet/elephant/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
image_1_0 = visual.ImageStim(
    win=win,
    name='image_1_0', units='norm', 
    image='html/resources/imagenet/fox/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-8.0)
image_1_1 = visual.ImageStim(
    win=win,
    name='image_1_1', units='norm', 
    image='html/resources/imagenet/kangaroo/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-9.0)
image_1_2 = visual.ImageStim(
    win=win,
    name='image_1_2', units='norm', 
    image='html/resources/imagenet/lion/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-10.0)
image_1_3 = visual.ImageStim(
    win=win,
    name='image_1_3', units='norm', 
    image='html/resources/imagenet/monkey/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-11.0)
image_2_0 = visual.ImageStim(
    win=win,
    name='image_2_0', units='norm', 
    image='html/resources/imagenet/otter/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-12.0)
image_2_1 = visual.ImageStim(
    win=win,
    name='image_2_1', units='norm', 
    image='html/resources/imagenet/pig/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-13.0)
image_2_2 = visual.ImageStim(
    win=win,
    name='image_2_2', units='norm', 
    image='html/resources/imagenet/rabbit/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-14.0)
image_2_3 = visual.ImageStim(
    win=win,
    name='image_2_3', units='norm', 
    image='html/resources/imagenet/sheep/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-15.0)
fixation_point = visual.Polygon(
    win=win, name='fixation_point',units='norm', 
    edges=100, size=[1.0, 1.0],
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor=(0.5059, 0.5059, 0.5059), fillColor=(0.5059, 0.5059, 0.5059),
    opacity=None, depth=-17.0, interpolate=True)
introduction_text = visual.TextStim(win=win, name='introduction_text',
    text='',
    font='Open Sans',
    units='norm', pos=(0.6, 0.3), height=deg2norm * 0.3, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-18.0);
exp_info_key_resp = keyboard.Keyboard()

# Initialize components for Routine "practice_intro"
practice_introClock = core.Clock()
introduction_text_p = visual.TextStim(win=win, name='introduction_text_p',
    text="Let's practice with some stimuli.\n\nHit a Key when ready.",
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
practice_info_key_resp = keyboard.Keyboard()

# Initialize components for Routine "gitter"
gitterClock = core.Clock()
exp_start = keyboard.Keyboard()
test = visual.TextStim(win=win, name='test',
    text='Any text',
    font='Open Sans',
    pos=(0, 0), height=deg2norm, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "show_stim"
show_stimClock = core.Clock()
show_stim_key_resp = keyboard.Keyboard()

# Initialize components for Routine "ask_question"
ask_questionClock = core.Clock()
stimuli_arrangement = visual.ImageStim(
    win=win,
    name='stimuli_arrangement', units='norm', 
    image='html/resources/stimuli_arrangement.png', mask=None,
    ori=0.0, pos=(0, 0), size=(deg2norm, deg2norm),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
question_text = visual.TextStim(win=win, name='question_text',
    text='Where Was the cat?\nPlease press the Key\ncorresponding to the position.',
    font='Open Sans',
    units='norm', pos=(0.6, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_B = visual.TextStim(win=win, name='text_B',
    text='B',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_A = visual.TextStim(win=win, name='text_A',
    text='A',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_C = visual.TextStim(win=win, name='text_C',
    text='C',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
text_D = visual.TextStim(win=win, name='text_D',
    text='D',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
text_F = visual.TextStim(win=win, name='text_F',
    text='F',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
text_E = visual.TextStim(win=win, name='text_E',
    text='E',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
text_G = visual.TextStim(win=win, name='text_G',
    text='G',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);
text_H = visual.TextStim(win=win, name='text_H',
    text='H',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);
text_J = visual.TextStim(win=win, name='text_J',
    text='J',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-11.0);
text_I = visual.TextStim(win=win, name='text_I',
    text='I',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-12.0);
text_K = visual.TextStim(win=win, name='text_K',
    text='K',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-13.0);
text_L = visual.TextStim(win=win, name='text_L',
    text='L',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-14.0);
key_ans = keyboard.Keyboard()

# Initialize components for Routine "show_feedback"
show_feedbackClock = core.Clock()
feedback_text = visual.TextStim(win=win, name='feedback_text',
    text='feedback text',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
show_fb_key_resp = keyboard.Keyboard()

# Initialize components for Routine "actual_intro"
actual_introClock = core.Clock()
introduction_text_a = visual.TextStim(win=win, name='introduction_text_a',
    text="Practice part has finished.\n\nNext part is the experiment.\nHit 's' Key when ready.",
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
actual_intro_key_resp = keyboard.Keyboard()

# Initialize components for Routine "gitter"
gitterClock = core.Clock()
exp_start = keyboard.Keyboard()
test = visual.TextStim(win=win, name='test',
    text='Any text',
    font='Open Sans',
    pos=(0, 0), height=deg2norm, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "show_stim"
show_stimClock = core.Clock()
show_stim_key_resp = keyboard.Keyboard()

# Initialize components for Routine "ask_question"
ask_questionClock = core.Clock()
stimuli_arrangement = visual.ImageStim(
    win=win,
    name='stimuli_arrangement', units='norm', 
    image='html/resources/stimuli_arrangement.png', mask=None,
    ori=0.0, pos=(0, 0), size=(deg2norm, deg2norm),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
question_text = visual.TextStim(win=win, name='question_text',
    text='Where Was the cat?\nPlease press the Key\ncorresponding to the position.',
    font='Open Sans',
    units='norm', pos=(0.6, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_B = visual.TextStim(win=win, name='text_B',
    text='B',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_A = visual.TextStim(win=win, name='text_A',
    text='A',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_C = visual.TextStim(win=win, name='text_C',
    text='C',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
text_D = visual.TextStim(win=win, name='text_D',
    text='D',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
text_F = visual.TextStim(win=win, name='text_F',
    text='F',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
text_E = visual.TextStim(win=win, name='text_E',
    text='E',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
text_G = visual.TextStim(win=win, name='text_G',
    text='G',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);
text_H = visual.TextStim(win=win, name='text_H',
    text='H',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);
text_J = visual.TextStim(win=win, name='text_J',
    text='J',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-11.0);
text_I = visual.TextStim(win=win, name='text_I',
    text='I',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-12.0);
text_K = visual.TextStim(win=win, name='text_K',
    text='K',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-13.0);
text_L = visual.TextStim(win=win, name='text_L',
    text='L',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-14.0);
key_ans = keyboard.Keyboard()

# Initialize components for Routine "show_feedback"
show_feedbackClock = core.Clock()
feedback_text = visual.TextStim(win=win, name='feedback_text',
    text='feedback text',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
show_fb_key_resp = keyboard.Keyboard()

# Initialize components for Routine "take_break"
take_breakClock = core.Clock()
break_text = visual.TextStim(win=win, name='break_text',
    text='Please take a short break.\n\nIf the experiment is ready, \nthe window will change to the fixation point.',
    font='Open Sans',
    units='norm', pos=(0, 0), height=deg2norm * 0.5, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "screen_scale"-------
continueRoutine = True
# update component parameters for each repeat
event.clearEvents()
# keep track of which components have finished
screen_scaleComponents = [text_top, text_bottom, ccimage]
for thisComponent in screen_scaleComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
screen_scaleClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "screen_scale"-------
while continueRoutine:
    # get current time
    t = screen_scaleClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=screen_scaleClock)
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
            vsize=win.size[1]
    
        screen_height=round(vsize*10/y_scale)/10
        text_bottom.text='X Scale = '+str(x_scale)+unittext+' per cm, Y Scale = '+str(y_scale)+unittext+' per cm\nScreen height = '+str(screen_height)+' cm\n\nPress the space bar when done'
        ccimage.size=[x_size*x_scale, y_size*y_scale]
        
    
    # *text_top* updates
    if text_top.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_top.frameNStart = frameN  # exact frame index
        text_top.tStart = t  # local t and not account for scr refresh
        text_top.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_top, 'tStartRefresh')  # time at next scr refresh
        text_top.setAutoDraw(True)
    
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
    for thisComponent in screen_scaleComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "screen_scale"-------
for thisComponent in screen_scaleComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('X Scale',x_scale)
thisExp.addData('Y Scale',y_scale)

# the Routine "screen_scale" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "rectangle"-------
continueRoutine = True
# update component parameters for each repeat
polygon.setSize((10*x_scale, 10*y_scale))
rectangle_key_resp.keys = []
rectangle_key_resp.rt = []
_rectangle_key_resp_allKeys = []
# keep track of which components have finished
rectangleComponents = [text, polygon, rectangle_key_resp]
for thisComponent in rectangleComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
rectangleClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "rectangle"-------
while continueRoutine:
    # get current time
    t = rectangleClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=rectangleClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *polygon* updates
    if polygon.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        polygon.frameNStart = frameN  # exact frame index
        polygon.tStart = t  # local t and not account for scr refresh
        polygon.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(polygon, 'tStartRefresh')  # time at next scr refresh
        polygon.setAutoDraw(True)
    
    # *rectangle_key_resp* updates
    waitOnFlip = False
    if rectangle_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        rectangle_key_resp.frameNStart = frameN  # exact frame index
        rectangle_key_resp.tStart = t  # local t and not account for scr refresh
        rectangle_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(rectangle_key_resp, 'tStartRefresh')  # time at next scr refresh
        rectangle_key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(rectangle_key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(rectangle_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if rectangle_key_resp.status == STARTED and not waitOnFlip:
        theseKeys = rectangle_key_resp.getKeys(keyList=['space'], waitRelease=False)
        _rectangle_key_resp_allKeys.extend(theseKeys)
        if len(_rectangle_key_resp_allKeys):
            rectangle_key_resp.keys = _rectangle_key_resp_allKeys[-1].name  # just the last key pressed
            rectangle_key_resp.rt = _rectangle_key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in rectangleComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "rectangle"-------
for thisComponent in rectangleComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "rectangle" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "exp_intro"-------
continueRoutine = True
# update component parameters for each repeat
hw_rate = win.size[1] / win.size[0]
# Online
VA = round(360 / pi * math.atan2(screen_height, 2 * 57))

deg2norm = 2 / VA
image_0_0.setSize((deg2norm * hw_rate, deg2norm))
image_0_1.setSize((deg2norm * hw_rate, deg2norm))
image_0_2.setSize((deg2norm * hw_rate, deg2norm))
image_0_3.setSize((deg2norm * hw_rate, deg2norm))
image_1_0.setSize((2 * deg2norm * hw_rate, 2 * deg2norm))
image_1_1.setSize((2 * deg2norm * hw_rate, 2 * deg2norm))
image_1_2.setSize((2 * deg2norm * hw_rate, 2 * deg2norm))
image_1_3.setSize((2 * deg2norm * hw_rate, 2 * deg2norm))
image_2_0.setSize((2 * 2 * deg2norm * hw_rate, 2 * 2 * deg2norm))
image_2_1.setSize((2 * 2 * deg2norm * hw_rate, 2 * 2 * deg2norm))
image_2_2.setSize((2 * 2 *deg2norm * hw_rate, 2 * 2 * deg2norm))
image_2_3.setSize((2 * 2 * deg2norm * hw_rate, 2 * 2 * deg2norm))
image_list = [
    image_0_0,
    image_0_1,
    image_0_2,
    image_0_3,
    image_1_0,
    image_1_1,
    image_1_2,
    image_1_3,
    image_2_0,
    image_2_1,
    image_2_2,
    image_2_3
]

for i in range(len(image_list)):
    if i < 4:
        image_list[i].pos = (
            hw_rate * deg2norm * eccentricities[0] * math.cos(math.radians(i % 4 * 90 + 45)),
            deg2norm * eccentricities[0] * math.sin(math.radians(i % 4 * 90 + 45))
        )
    elif 4 <= i < 8:
        image_list[i].pos = (
            hw_rate * deg2norm * eccentricities[1] * math.cos(math.radians(i % 4 * 90)),
            deg2norm * eccentricities[1] * math.sin(math.radians(i % 4 * 90))
        )
    else:
        image_list[i].pos = (
            hw_rate * deg2norm * eccentricities[2] * math.cos(math.radians(i % 4 * 90 + 45)),
            deg2norm * eccentricities[2] * math.sin(math.radians(i % 4 * 90 + 45))
        )

fixation_point.setSize((deg2norm / 5 * hw_rate, deg2norm / 5))
exp_info_key_resp.keys = []
exp_info_key_resp.rt = []
_exp_info_key_resp_allKeys = []
# keep track of which components have finished
exp_introComponents = [image_0_0, image_0_1, image_0_2, image_0_3, image_1_0, image_1_1, image_1_2, image_1_3, image_2_0, image_2_1, image_2_2, image_2_3, fixation_point, introduction_text, exp_info_key_resp]
for thisComponent in exp_introComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
exp_introClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "exp_intro"-------
while continueRoutine:
    # get current time
    t = exp_introClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=exp_introClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_0_0* updates
    if image_0_0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_0_0.frameNStart = frameN  # exact frame index
        image_0_0.tStart = t  # local t and not account for scr refresh
        image_0_0.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_0_0, 'tStartRefresh')  # time at next scr refresh
        image_0_0.setAutoDraw(True)
    
    # *image_0_1* updates
    if image_0_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_0_1.frameNStart = frameN  # exact frame index
        image_0_1.tStart = t  # local t and not account for scr refresh
        image_0_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_0_1, 'tStartRefresh')  # time at next scr refresh
        image_0_1.setAutoDraw(True)
    
    # *image_0_2* updates
    if image_0_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_0_2.frameNStart = frameN  # exact frame index
        image_0_2.tStart = t  # local t and not account for scr refresh
        image_0_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_0_2, 'tStartRefresh')  # time at next scr refresh
        image_0_2.setAutoDraw(True)
    
    # *image_0_3* updates
    if image_0_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_0_3.frameNStart = frameN  # exact frame index
        image_0_3.tStart = t  # local t and not account for scr refresh
        image_0_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_0_3, 'tStartRefresh')  # time at next scr refresh
        image_0_3.setAutoDraw(True)
    
    # *image_1_0* updates
    if image_1_0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_1_0.frameNStart = frameN  # exact frame index
        image_1_0.tStart = t  # local t and not account for scr refresh
        image_1_0.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_1_0, 'tStartRefresh')  # time at next scr refresh
        image_1_0.setAutoDraw(True)
    
    # *image_1_1* updates
    if image_1_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_1_1.frameNStart = frameN  # exact frame index
        image_1_1.tStart = t  # local t and not account for scr refresh
        image_1_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_1_1, 'tStartRefresh')  # time at next scr refresh
        image_1_1.setAutoDraw(True)
    
    # *image_1_2* updates
    if image_1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_1_2.frameNStart = frameN  # exact frame index
        image_1_2.tStart = t  # local t and not account for scr refresh
        image_1_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_1_2, 'tStartRefresh')  # time at next scr refresh
        image_1_2.setAutoDraw(True)
    
    # *image_1_3* updates
    if image_1_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_1_3.frameNStart = frameN  # exact frame index
        image_1_3.tStart = t  # local t and not account for scr refresh
        image_1_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_1_3, 'tStartRefresh')  # time at next scr refresh
        image_1_3.setAutoDraw(True)
    
    # *image_2_0* updates
    if image_2_0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_2_0.frameNStart = frameN  # exact frame index
        image_2_0.tStart = t  # local t and not account for scr refresh
        image_2_0.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_2_0, 'tStartRefresh')  # time at next scr refresh
        image_2_0.setAutoDraw(True)
    
    # *image_2_1* updates
    if image_2_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_2_1.frameNStart = frameN  # exact frame index
        image_2_1.tStart = t  # local t and not account for scr refresh
        image_2_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_2_1, 'tStartRefresh')  # time at next scr refresh
        image_2_1.setAutoDraw(True)
    
    # *image_2_2* updates
    if image_2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_2_2.frameNStart = frameN  # exact frame index
        image_2_2.tStart = t  # local t and not account for scr refresh
        image_2_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_2_2, 'tStartRefresh')  # time at next scr refresh
        image_2_2.setAutoDraw(True)
    
    # *image_2_3* updates
    if image_2_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_2_3.frameNStart = frameN  # exact frame index
        image_2_3.tStart = t  # local t and not account for scr refresh
        image_2_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_2_3, 'tStartRefresh')  # time at next scr refresh
        image_2_3.setAutoDraw(True)
    
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
        introduction_text.setText("This is the example of the stimuli.\n\nBefore the stimuli presented,\nthe fixation point is shown.\n\nWhen you hit 'space' Key,\nstimuli are presented.\n\nAfter that, you can move your eye.\n\nWhen you find the 'cat',\nhit a Key and answer the question,\n'Where was the cat?'\n\nYou answer with the keyboard.\n\nNotice:\n- When the stimuli are presented,\nfocus on the center of the display.\n- Constantly look at the display from 57cm away.")
    
    # *exp_info_key_resp* updates
    waitOnFlip = False
    if exp_info_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        exp_info_key_resp.frameNStart = frameN  # exact frame index
        exp_info_key_resp.tStart = t  # local t and not account for scr refresh
        exp_info_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(exp_info_key_resp, 'tStartRefresh')  # time at next scr refresh
        exp_info_key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(exp_info_key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(exp_info_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if exp_info_key_resp.status == STARTED and not waitOnFlip:
        theseKeys = exp_info_key_resp.getKeys(keyList=None, waitRelease=False)
        _exp_info_key_resp_allKeys.extend(theseKeys)
        if len(_exp_info_key_resp_allKeys):
            exp_info_key_resp.keys = _exp_info_key_resp_allKeys[-1].name  # just the last key pressed
            exp_info_key_resp.rt = _exp_info_key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in exp_introComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "exp_intro"-------
for thisComponent in exp_introComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "exp_intro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "practice_intro"-------
continueRoutine = True
# update component parameters for each repeat
practice_info_key_resp.keys = []
practice_info_key_resp.rt = []
_practice_info_key_resp_allKeys = []
# keep track of which components have finished
practice_introComponents = [introduction_text_p, practice_info_key_resp]
for thisComponent in practice_introComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
practice_introClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "practice_intro"-------
while continueRoutine:
    # get current time
    t = practice_introClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=practice_introClock)
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
        theseKeys = practice_info_key_resp.getKeys(keyList=None, waitRelease=False)
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
    for thisComponent in practice_introComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "practice_intro"-------
for thisComponent in practice_introComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "practice_intro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
PracticeTrials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('practiceConditions.xlsx'),
    seed=None, name='PracticeTrials')
thisExp.addLoop(PracticeTrials)  # add the loop to the experiment
thisPracticeTrial = PracticeTrials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPracticeTrial.rgb)
if thisPracticeTrial != None:
    for paramName in thisPracticeTrial:
        exec('{} = thisPracticeTrial[paramName]'.format(paramName))

for thisPracticeTrial in PracticeTrials:
    currentLoop = PracticeTrials
    # abbreviate parameter names if possible (e.g. rgb = thisPracticeTrial.rgb)
    if thisPracticeTrial != None:
        for paramName in thisPracticeTrial:
            exec('{} = thisPracticeTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "gitter"-------
    continueRoutine = True
    # update component parameters for each repeat
    fixation_point.fillColor = (-0.4980, -0.4980, -0.4980)
    fixation_point.lineColor = (-0.4980, -0.4980, -0.4980)
    
    exp_start.keys = []
    exp_start.rt = []
    _exp_start_allKeys = []
    # keep track of which components have finished
    gitterComponents = [exp_start, test]
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
        
        # *exp_start* updates
        waitOnFlip = False
        if exp_start.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            exp_start.frameNStart = frameN  # exact frame index
            exp_start.tStart = t  # local t and not account for scr refresh
            exp_start.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp_start, 'tStartRefresh')  # time at next scr refresh
            exp_start.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(exp_start.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(exp_start.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if exp_start.status == STARTED and not waitOnFlip:
            theseKeys = exp_start.getKeys(keyList=None, waitRelease=False)
            _exp_start_allKeys.extend(theseKeys)
            if len(_exp_start_allKeys):
                exp_start.keys = _exp_start_allKeys[-1].name  # just the last key pressed
                exp_start.rt = _exp_start_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *test* updates
        if test.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            test.frameNStart = frameN  # exact frame index
            test.tStart = t  # local t and not account for scr refresh
            test.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(test, 'tStartRefresh')  # time at next scr refresh
            test.setAutoDraw(True)
        test.text = idx_list
        
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
    # check responses
    if exp_start.keys in ['', [], None]:  # No response was made
        exp_start.keys = None
    PracticeTrials.addData('exp_start.keys',exp_start.keys)
    if exp_start.keys != None:  # we had a response
        PracticeTrials.addData('exp_start.rt', exp_start.rt)
    PracticeTrials.addData('exp_start.started', exp_start.tStartRefresh)
    PracticeTrials.addData('exp_start.stopped', exp_start.tStopRefresh)
    fixation_point.fillColor = (0.5059, 0.5059, 0.5059)
    fixation_point.lineColor = (0.5059, 0.5059, 0.5059)
    PracticeTrials.addData('test.started', test.tStartRefresh)
    PracticeTrials.addData('test.stopped', test.tStopRefresh)
    # the Routine "gitter" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "show_stim"-------
    continueRoutine = True
    # update component parameters for each repeat
    _non_target_classes = random.sample(non_target_classes, len(non_target_classes))
    for i in range(len(image_list)):
        if currentLoop.name == 'PracticeTrials':
            image_path = 'html/resources/imagenet/' + _non_target_classes[i] + '/image' + str(random.randrange(101, 151))[1:] + '.png'
        else:
            image_path = 'html/resources/imagenet/' + _non_target_classes[i] + '/image' + idx_list[_non_target_classes[i]][ActualTrials.thisTrialN] + '.png'
        image_list[i].image = Image.open(image_path)
    
        thisExp.addData(_non_target_classes[i], image_path)
    
    if currentLoop.name == 'PracticeTrials':
        image_path = 'html/resources/imagenet/' + target_class + '/image' + str(random.randrange(101, 151))[1:] + '.png'
    else:
        image_path = 'html/resources/imagenet/' + target_class + '/image' + idx_list[target_class][ActualTrials.thisTrialN] + '.png'
    image_list[4 * pos + ori].image = Image.open(image_path)
    
    thisExp.addData(target_class, image_path)
    
    for i in range(len(image_list)):
        image_list[i].size = (size * deg2norm, size * deg2norm)
        if 4 <= i < 8:
            image_list[i].size = (rate * image_list[i].size[0], rate * image_list[i].size[1])
        elif i >= 8:
            image_list[i].size = ((rate ** 2) * image_list[i].size[0], (rate ** 2) * image_list[i].size[1])
        image_list[i].size[0] *= hw_rate
    
    show_stim_key_resp.keys = []
    show_stim_key_resp.rt = []
    _show_stim_key_resp_allKeys = []
    # keep track of which components have finished
    show_stimComponents = [show_stim_key_resp]
    for thisComponent in show_stimComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    show_stimClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "show_stim"-------
    while continueRoutine:
        # get current time
        t = show_stimClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=show_stimClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        fixation_point.draw()
        
        if show_stimClock.getTime() > 1:
            for i in range(len(image_list)):
                image_list[i].draw()
        
        
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
            theseKeys = show_stim_key_resp.getKeys(keyList=None, waitRelease=False)
            _show_stim_key_resp_allKeys.extend(theseKeys)
            if len(_show_stim_key_resp_allKeys):
                show_stim_key_resp.keys = _show_stim_key_resp_allKeys[-1].name  # just the last key pressed
                show_stim_key_resp.rt = _show_stim_key_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        if show_stimClock.getTime() > 7:
            continueRoutine=False
        
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in show_stimComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "show_stim"-------
    for thisComponent in show_stimComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('reactionTime', show_stimClock.getTime() - 1)
    # the Routine "show_stim" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "ask_question"-------
    continueRoutine = True
    # update component parameters for each repeat
    stimuli_arrangement.size = (
        hw_rate * (2 * eccentricities[2] / math.sqrt(2) + 8) * deg2norm,
        (2 * eccentricities[2] / math.sqrt(2) + 8) * deg2norm,
    )
    alphabets_list = [
        text_B,
        text_A,
        text_C,
        text_D,
        text_F,
        text_E,
        text_G,
        text_H,
        text_J,
        text_I,
        text_K,
        text_L
    ]
    
    for i in range(len(alphabets_list)):
        if i < 4:
            alphabets_list[i].pos = (
                hw_rate * deg2norm * eccentricities[0] * math.cos(math.radians(i % 4 * 90 + 45)),
                deg2norm * eccentricities[0] * math.sin(math.radians(i % 4 * 90 + 45))
            )
        elif 4 <= i < 8:
            alphabets_list[i].pos = (
                hw_rate * deg2norm * eccentricities[1] * math.cos(math.radians(i % 4 * 90)),
                deg2norm * eccentricities[1] * math.sin(math.radians(i % 4 * 90))
            )
        else:
            alphabets_list[i].pos = (
                hw_rate * deg2norm * eccentricities[2] * math.cos(math.radians(i % 4 * 90 + 45)),
                deg2norm * eccentricities[2] * math.sin(math.radians(i % 4 * 90 + 45))
            )
    
    key_ans.keys = []
    key_ans.rt = []
    _key_ans_allKeys = []
    # keep track of which components have finished
    ask_questionComponents = [stimuli_arrangement, question_text, text_B, text_A, text_C, text_D, text_F, text_E, text_G, text_H, text_J, text_I, text_K, text_L, key_ans]
    for thisComponent in ask_questionComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    ask_questionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "ask_question"-------
    while continueRoutine:
        # get current time
        t = ask_questionClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=ask_questionClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *stimuli_arrangement* updates
        if stimuli_arrangement.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            stimuli_arrangement.frameNStart = frameN  # exact frame index
            stimuli_arrangement.tStart = t  # local t and not account for scr refresh
            stimuli_arrangement.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stimuli_arrangement, 'tStartRefresh')  # time at next scr refresh
            stimuli_arrangement.setAutoDraw(True)
        
        # *question_text* updates
        if question_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            question_text.frameNStart = frameN  # exact frame index
            question_text.tStart = t  # local t and not account for scr refresh
            question_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(question_text, 'tStartRefresh')  # time at next scr refresh
            question_text.setAutoDraw(True)
        
        # *text_B* updates
        if text_B.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_B.frameNStart = frameN  # exact frame index
            text_B.tStart = t  # local t and not account for scr refresh
            text_B.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_B, 'tStartRefresh')  # time at next scr refresh
            text_B.setAutoDraw(True)
        
        # *text_A* updates
        if text_A.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_A.frameNStart = frameN  # exact frame index
            text_A.tStart = t  # local t and not account for scr refresh
            text_A.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_A, 'tStartRefresh')  # time at next scr refresh
            text_A.setAutoDraw(True)
        
        # *text_C* updates
        if text_C.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_C.frameNStart = frameN  # exact frame index
            text_C.tStart = t  # local t and not account for scr refresh
            text_C.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_C, 'tStartRefresh')  # time at next scr refresh
            text_C.setAutoDraw(True)
        
        # *text_D* updates
        if text_D.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_D.frameNStart = frameN  # exact frame index
            text_D.tStart = t  # local t and not account for scr refresh
            text_D.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_D, 'tStartRefresh')  # time at next scr refresh
            text_D.setAutoDraw(True)
        
        # *text_F* updates
        if text_F.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_F.frameNStart = frameN  # exact frame index
            text_F.tStart = t  # local t and not account for scr refresh
            text_F.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_F, 'tStartRefresh')  # time at next scr refresh
            text_F.setAutoDraw(True)
        
        # *text_E* updates
        if text_E.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_E.frameNStart = frameN  # exact frame index
            text_E.tStart = t  # local t and not account for scr refresh
            text_E.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_E, 'tStartRefresh')  # time at next scr refresh
            text_E.setAutoDraw(True)
        
        # *text_G* updates
        if text_G.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_G.frameNStart = frameN  # exact frame index
            text_G.tStart = t  # local t and not account for scr refresh
            text_G.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_G, 'tStartRefresh')  # time at next scr refresh
            text_G.setAutoDraw(True)
        
        # *text_H* updates
        if text_H.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_H.frameNStart = frameN  # exact frame index
            text_H.tStart = t  # local t and not account for scr refresh
            text_H.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_H, 'tStartRefresh')  # time at next scr refresh
            text_H.setAutoDraw(True)
        
        # *text_J* updates
        if text_J.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_J.frameNStart = frameN  # exact frame index
            text_J.tStart = t  # local t and not account for scr refresh
            text_J.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_J, 'tStartRefresh')  # time at next scr refresh
            text_J.setAutoDraw(True)
        
        # *text_I* updates
        if text_I.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_I.frameNStart = frameN  # exact frame index
            text_I.tStart = t  # local t and not account for scr refresh
            text_I.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_I, 'tStartRefresh')  # time at next scr refresh
            text_I.setAutoDraw(True)
        
        # *text_K* updates
        if text_K.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_K.frameNStart = frameN  # exact frame index
            text_K.tStart = t  # local t and not account for scr refresh
            text_K.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_K, 'tStartRefresh')  # time at next scr refresh
            text_K.setAutoDraw(True)
        
        # *text_L* updates
        if text_L.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_L.frameNStart = frameN  # exact frame index
            text_L.tStart = t  # local t and not account for scr refresh
            text_L.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_L, 'tStartRefresh')  # time at next scr refresh
            text_L.setAutoDraw(True)
        
        # *key_ans* updates
        waitOnFlip = False
        if key_ans.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_ans.frameNStart = frameN  # exact frame index
            key_ans.tStart = t  # local t and not account for scr refresh
            key_ans.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_ans, 'tStartRefresh')  # time at next scr refresh
            key_ans.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_ans.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_ans.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_ans.status == STARTED and not waitOnFlip:
            theseKeys = key_ans.getKeys(keyList=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], waitRelease=False)
            _key_ans_allKeys.extend(theseKeys)
            if len(_key_ans_allKeys):
                key_ans.keys = _key_ans_allKeys[-1].name  # just the last key pressed
                key_ans.rt = _key_ans_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ask_questionComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ask_question"-------
    for thisComponent in ask_questionComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    PracticeTrials.addData('text_A.started', text_A.tStartRefresh)
    PracticeTrials.addData('text_A.stopped', text_A.tStopRefresh)
    # check responses
    if key_ans.keys in ['', [], None]:  # No response was made
        key_ans.keys = None
    PracticeTrials.addData('key_ans.keys',key_ans.keys)
    if key_ans.keys != None:  # we had a response
        PracticeTrials.addData('key_ans.rt', key_ans.rt)
    PracticeTrials.addData('key_ans.started', key_ans.tStartRefresh)
    PracticeTrials.addData('key_ans.stopped', key_ans.tStopRefresh)
    # the Routine "ask_question" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "show_feedback"-------
    continueRoutine = True
    # update component parameters for each repeat
    if key_to_pos[key_ans.keys][0] == pos and key_to_pos[key_ans.keys][1] == ori:
        feedback_text.text = 'Your answer is correct!'
        thisExp.addData('TF', 'True')
    else:
        feedback_text.text = 'Your answer is incorrect.'
        thisExp.addData('TF', 'False')
    
    show_fb_key_resp.keys = []
    show_fb_key_resp.rt = []
    _show_fb_key_resp_allKeys = []
    # keep track of which components have finished
    show_feedbackComponents = [feedback_text, show_fb_key_resp]
    for thisComponent in show_feedbackComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    show_feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "show_feedback"-------
    while continueRoutine:
        # get current time
        t = show_feedbackClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=show_feedbackClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *feedback_text* updates
        if feedback_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            feedback_text.frameNStart = frameN  # exact frame index
            feedback_text.tStart = t  # local t and not account for scr refresh
            feedback_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feedback_text, 'tStartRefresh')  # time at next scr refresh
            feedback_text.setAutoDraw(True)
        if show_feedbackClock.getTime() > 1:
            continueRoutine=False
        
        
        # *show_fb_key_resp* updates
        waitOnFlip = False
        if show_fb_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            show_fb_key_resp.frameNStart = frameN  # exact frame index
            show_fb_key_resp.tStart = t  # local t and not account for scr refresh
            show_fb_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(show_fb_key_resp, 'tStartRefresh')  # time at next scr refresh
            show_fb_key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(show_fb_key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(show_fb_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if show_fb_key_resp.status == STARTED and not waitOnFlip:
            theseKeys = show_fb_key_resp.getKeys(keyList=None, waitRelease=False)
            _show_fb_key_resp_allKeys.extend(theseKeys)
            if len(_show_fb_key_resp_allKeys):
                show_fb_key_resp.keys = _show_fb_key_resp_allKeys[-1].name  # just the last key pressed
                show_fb_key_resp.rt = _show_fb_key_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in show_feedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "show_feedback"-------
    for thisComponent in show_feedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "show_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'PracticeTrials'


# ------Prepare to start Routine "actual_intro"-------
continueRoutine = True
# update component parameters for each repeat
actual_intro_key_resp.keys = []
actual_intro_key_resp.rt = []
_actual_intro_key_resp_allKeys = []
# keep track of which components have finished
actual_introComponents = [introduction_text_a, actual_intro_key_resp]
for thisComponent in actual_introComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
actual_introClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "actual_intro"-------
while continueRoutine:
    # get current time
    t = actual_introClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=actual_introClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *introduction_text_a* updates
    if introduction_text_a.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        introduction_text_a.frameNStart = frameN  # exact frame index
        introduction_text_a.tStart = t  # local t and not account for scr refresh
        introduction_text_a.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(introduction_text_a, 'tStartRefresh')  # time at next scr refresh
        introduction_text_a.setAutoDraw(True)
    
    # *actual_intro_key_resp* updates
    waitOnFlip = False
    if actual_intro_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        actual_intro_key_resp.frameNStart = frameN  # exact frame index
        actual_intro_key_resp.tStart = t  # local t and not account for scr refresh
        actual_intro_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(actual_intro_key_resp, 'tStartRefresh')  # time at next scr refresh
        actual_intro_key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(actual_intro_key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(actual_intro_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if actual_intro_key_resp.status == STARTED and not waitOnFlip:
        theseKeys = actual_intro_key_resp.getKeys(keyList=['s'], waitRelease=False)
        _actual_intro_key_resp_allKeys.extend(theseKeys)
        if len(_actual_intro_key_resp_allKeys):
            actual_intro_key_resp.keys = _actual_intro_key_resp_allKeys[-1].name  # just the last key pressed
            actual_intro_key_resp.rt = _actual_intro_key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in actual_introComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "actual_intro"-------
for thisComponent in actual_introComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('introduction_text_a.started', introduction_text_a.tStartRefresh)
thisExp.addData('introduction_text_a.stopped', introduction_text_a.tStopRefresh)
# the Routine "actual_intro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
ActualTrials = data.TrialHandler(nReps=4.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('expConditions.xlsx'),
    seed=None, name='ActualTrials')
thisExp.addLoop(ActualTrials)  # add the loop to the experiment
thisActualTrial = ActualTrials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisActualTrial.rgb)
if thisActualTrial != None:
    for paramName in thisActualTrial:
        exec('{} = thisActualTrial[paramName]'.format(paramName))

for thisActualTrial in ActualTrials:
    currentLoop = ActualTrials
    # abbreviate parameter names if possible (e.g. rgb = thisActualTrial.rgb)
    if thisActualTrial != None:
        for paramName in thisActualTrial:
            exec('{} = thisActualTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "gitter"-------
    continueRoutine = True
    # update component parameters for each repeat
    fixation_point.fillColor = (-0.4980, -0.4980, -0.4980)
    fixation_point.lineColor = (-0.4980, -0.4980, -0.4980)
    
    exp_start.keys = []
    exp_start.rt = []
    _exp_start_allKeys = []
    # keep track of which components have finished
    gitterComponents = [exp_start, test]
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
        
        # *exp_start* updates
        waitOnFlip = False
        if exp_start.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            exp_start.frameNStart = frameN  # exact frame index
            exp_start.tStart = t  # local t and not account for scr refresh
            exp_start.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp_start, 'tStartRefresh')  # time at next scr refresh
            exp_start.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(exp_start.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(exp_start.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if exp_start.status == STARTED and not waitOnFlip:
            theseKeys = exp_start.getKeys(keyList=None, waitRelease=False)
            _exp_start_allKeys.extend(theseKeys)
            if len(_exp_start_allKeys):
                exp_start.keys = _exp_start_allKeys[-1].name  # just the last key pressed
                exp_start.rt = _exp_start_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *test* updates
        if test.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            test.frameNStart = frameN  # exact frame index
            test.tStart = t  # local t and not account for scr refresh
            test.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(test, 'tStartRefresh')  # time at next scr refresh
            test.setAutoDraw(True)
        test.text = idx_list
        
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
    # check responses
    if exp_start.keys in ['', [], None]:  # No response was made
        exp_start.keys = None
    ActualTrials.addData('exp_start.keys',exp_start.keys)
    if exp_start.keys != None:  # we had a response
        ActualTrials.addData('exp_start.rt', exp_start.rt)
    ActualTrials.addData('exp_start.started', exp_start.tStartRefresh)
    ActualTrials.addData('exp_start.stopped', exp_start.tStopRefresh)
    fixation_point.fillColor = (0.5059, 0.5059, 0.5059)
    fixation_point.lineColor = (0.5059, 0.5059, 0.5059)
    ActualTrials.addData('test.started', test.tStartRefresh)
    ActualTrials.addData('test.stopped', test.tStopRefresh)
    # the Routine "gitter" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "show_stim"-------
    continueRoutine = True
    # update component parameters for each repeat
    _non_target_classes = random.sample(non_target_classes, len(non_target_classes))
    for i in range(len(image_list)):
        if currentLoop.name == 'PracticeTrials':
            image_path = 'html/resources/imagenet/' + _non_target_classes[i] + '/image' + str(random.randrange(101, 151))[1:] + '.png'
        else:
            image_path = 'html/resources/imagenet/' + _non_target_classes[i] + '/image' + idx_list[_non_target_classes[i]][ActualTrials.thisTrialN] + '.png'
        image_list[i].image = Image.open(image_path)
    
        thisExp.addData(_non_target_classes[i], image_path)
    
    if currentLoop.name == 'PracticeTrials':
        image_path = 'html/resources/imagenet/' + target_class + '/image' + str(random.randrange(101, 151))[1:] + '.png'
    else:
        image_path = 'html/resources/imagenet/' + target_class + '/image' + idx_list[target_class][ActualTrials.thisTrialN] + '.png'
    image_list[4 * pos + ori].image = Image.open(image_path)
    
    thisExp.addData(target_class, image_path)
    
    for i in range(len(image_list)):
        image_list[i].size = (size * deg2norm, size * deg2norm)
        if 4 <= i < 8:
            image_list[i].size = (rate * image_list[i].size[0], rate * image_list[i].size[1])
        elif i >= 8:
            image_list[i].size = ((rate ** 2) * image_list[i].size[0], (rate ** 2) * image_list[i].size[1])
        image_list[i].size[0] *= hw_rate
    
    show_stim_key_resp.keys = []
    show_stim_key_resp.rt = []
    _show_stim_key_resp_allKeys = []
    # keep track of which components have finished
    show_stimComponents = [show_stim_key_resp]
    for thisComponent in show_stimComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    show_stimClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "show_stim"-------
    while continueRoutine:
        # get current time
        t = show_stimClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=show_stimClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        fixation_point.draw()
        
        if show_stimClock.getTime() > 1:
            for i in range(len(image_list)):
                image_list[i].draw()
        
        
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
            theseKeys = show_stim_key_resp.getKeys(keyList=None, waitRelease=False)
            _show_stim_key_resp_allKeys.extend(theseKeys)
            if len(_show_stim_key_resp_allKeys):
                show_stim_key_resp.keys = _show_stim_key_resp_allKeys[-1].name  # just the last key pressed
                show_stim_key_resp.rt = _show_stim_key_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        if show_stimClock.getTime() > 7:
            continueRoutine=False
        
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in show_stimComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "show_stim"-------
    for thisComponent in show_stimComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('reactionTime', show_stimClock.getTime() - 1)
    # the Routine "show_stim" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "ask_question"-------
    continueRoutine = True
    # update component parameters for each repeat
    stimuli_arrangement.size = (
        hw_rate * (2 * eccentricities[2] / math.sqrt(2) + 8) * deg2norm,
        (2 * eccentricities[2] / math.sqrt(2) + 8) * deg2norm,
    )
    alphabets_list = [
        text_B,
        text_A,
        text_C,
        text_D,
        text_F,
        text_E,
        text_G,
        text_H,
        text_J,
        text_I,
        text_K,
        text_L
    ]
    
    for i in range(len(alphabets_list)):
        if i < 4:
            alphabets_list[i].pos = (
                hw_rate * deg2norm * eccentricities[0] * math.cos(math.radians(i % 4 * 90 + 45)),
                deg2norm * eccentricities[0] * math.sin(math.radians(i % 4 * 90 + 45))
            )
        elif 4 <= i < 8:
            alphabets_list[i].pos = (
                hw_rate * deg2norm * eccentricities[1] * math.cos(math.radians(i % 4 * 90)),
                deg2norm * eccentricities[1] * math.sin(math.radians(i % 4 * 90))
            )
        else:
            alphabets_list[i].pos = (
                hw_rate * deg2norm * eccentricities[2] * math.cos(math.radians(i % 4 * 90 + 45)),
                deg2norm * eccentricities[2] * math.sin(math.radians(i % 4 * 90 + 45))
            )
    
    key_ans.keys = []
    key_ans.rt = []
    _key_ans_allKeys = []
    # keep track of which components have finished
    ask_questionComponents = [stimuli_arrangement, question_text, text_B, text_A, text_C, text_D, text_F, text_E, text_G, text_H, text_J, text_I, text_K, text_L, key_ans]
    for thisComponent in ask_questionComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    ask_questionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "ask_question"-------
    while continueRoutine:
        # get current time
        t = ask_questionClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=ask_questionClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *stimuli_arrangement* updates
        if stimuli_arrangement.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            stimuli_arrangement.frameNStart = frameN  # exact frame index
            stimuli_arrangement.tStart = t  # local t and not account for scr refresh
            stimuli_arrangement.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stimuli_arrangement, 'tStartRefresh')  # time at next scr refresh
            stimuli_arrangement.setAutoDraw(True)
        
        # *question_text* updates
        if question_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            question_text.frameNStart = frameN  # exact frame index
            question_text.tStart = t  # local t and not account for scr refresh
            question_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(question_text, 'tStartRefresh')  # time at next scr refresh
            question_text.setAutoDraw(True)
        
        # *text_B* updates
        if text_B.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_B.frameNStart = frameN  # exact frame index
            text_B.tStart = t  # local t and not account for scr refresh
            text_B.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_B, 'tStartRefresh')  # time at next scr refresh
            text_B.setAutoDraw(True)
        
        # *text_A* updates
        if text_A.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_A.frameNStart = frameN  # exact frame index
            text_A.tStart = t  # local t and not account for scr refresh
            text_A.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_A, 'tStartRefresh')  # time at next scr refresh
            text_A.setAutoDraw(True)
        
        # *text_C* updates
        if text_C.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_C.frameNStart = frameN  # exact frame index
            text_C.tStart = t  # local t and not account for scr refresh
            text_C.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_C, 'tStartRefresh')  # time at next scr refresh
            text_C.setAutoDraw(True)
        
        # *text_D* updates
        if text_D.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_D.frameNStart = frameN  # exact frame index
            text_D.tStart = t  # local t and not account for scr refresh
            text_D.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_D, 'tStartRefresh')  # time at next scr refresh
            text_D.setAutoDraw(True)
        
        # *text_F* updates
        if text_F.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_F.frameNStart = frameN  # exact frame index
            text_F.tStart = t  # local t and not account for scr refresh
            text_F.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_F, 'tStartRefresh')  # time at next scr refresh
            text_F.setAutoDraw(True)
        
        # *text_E* updates
        if text_E.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_E.frameNStart = frameN  # exact frame index
            text_E.tStart = t  # local t and not account for scr refresh
            text_E.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_E, 'tStartRefresh')  # time at next scr refresh
            text_E.setAutoDraw(True)
        
        # *text_G* updates
        if text_G.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_G.frameNStart = frameN  # exact frame index
            text_G.tStart = t  # local t and not account for scr refresh
            text_G.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_G, 'tStartRefresh')  # time at next scr refresh
            text_G.setAutoDraw(True)
        
        # *text_H* updates
        if text_H.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_H.frameNStart = frameN  # exact frame index
            text_H.tStart = t  # local t and not account for scr refresh
            text_H.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_H, 'tStartRefresh')  # time at next scr refresh
            text_H.setAutoDraw(True)
        
        # *text_J* updates
        if text_J.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_J.frameNStart = frameN  # exact frame index
            text_J.tStart = t  # local t and not account for scr refresh
            text_J.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_J, 'tStartRefresh')  # time at next scr refresh
            text_J.setAutoDraw(True)
        
        # *text_I* updates
        if text_I.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_I.frameNStart = frameN  # exact frame index
            text_I.tStart = t  # local t and not account for scr refresh
            text_I.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_I, 'tStartRefresh')  # time at next scr refresh
            text_I.setAutoDraw(True)
        
        # *text_K* updates
        if text_K.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_K.frameNStart = frameN  # exact frame index
            text_K.tStart = t  # local t and not account for scr refresh
            text_K.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_K, 'tStartRefresh')  # time at next scr refresh
            text_K.setAutoDraw(True)
        
        # *text_L* updates
        if text_L.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_L.frameNStart = frameN  # exact frame index
            text_L.tStart = t  # local t and not account for scr refresh
            text_L.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_L, 'tStartRefresh')  # time at next scr refresh
            text_L.setAutoDraw(True)
        
        # *key_ans* updates
        waitOnFlip = False
        if key_ans.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_ans.frameNStart = frameN  # exact frame index
            key_ans.tStart = t  # local t and not account for scr refresh
            key_ans.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_ans, 'tStartRefresh')  # time at next scr refresh
            key_ans.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_ans.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_ans.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_ans.status == STARTED and not waitOnFlip:
            theseKeys = key_ans.getKeys(keyList=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], waitRelease=False)
            _key_ans_allKeys.extend(theseKeys)
            if len(_key_ans_allKeys):
                key_ans.keys = _key_ans_allKeys[-1].name  # just the last key pressed
                key_ans.rt = _key_ans_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ask_questionComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ask_question"-------
    for thisComponent in ask_questionComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    ActualTrials.addData('text_A.started', text_A.tStartRefresh)
    ActualTrials.addData('text_A.stopped', text_A.tStopRefresh)
    # check responses
    if key_ans.keys in ['', [], None]:  # No response was made
        key_ans.keys = None
    ActualTrials.addData('key_ans.keys',key_ans.keys)
    if key_ans.keys != None:  # we had a response
        ActualTrials.addData('key_ans.rt', key_ans.rt)
    ActualTrials.addData('key_ans.started', key_ans.tStartRefresh)
    ActualTrials.addData('key_ans.stopped', key_ans.tStopRefresh)
    # the Routine "ask_question" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "show_feedback"-------
    continueRoutine = True
    # update component parameters for each repeat
    if key_to_pos[key_ans.keys][0] == pos and key_to_pos[key_ans.keys][1] == ori:
        feedback_text.text = 'Your answer is correct!'
        thisExp.addData('TF', 'True')
    else:
        feedback_text.text = 'Your answer is incorrect.'
        thisExp.addData('TF', 'False')
    
    show_fb_key_resp.keys = []
    show_fb_key_resp.rt = []
    _show_fb_key_resp_allKeys = []
    # keep track of which components have finished
    show_feedbackComponents = [feedback_text, show_fb_key_resp]
    for thisComponent in show_feedbackComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    show_feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "show_feedback"-------
    while continueRoutine:
        # get current time
        t = show_feedbackClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=show_feedbackClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *feedback_text* updates
        if feedback_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            feedback_text.frameNStart = frameN  # exact frame index
            feedback_text.tStart = t  # local t and not account for scr refresh
            feedback_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feedback_text, 'tStartRefresh')  # time at next scr refresh
            feedback_text.setAutoDraw(True)
        if show_feedbackClock.getTime() > 1:
            continueRoutine=False
        
        
        # *show_fb_key_resp* updates
        waitOnFlip = False
        if show_fb_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            show_fb_key_resp.frameNStart = frameN  # exact frame index
            show_fb_key_resp.tStart = t  # local t and not account for scr refresh
            show_fb_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(show_fb_key_resp, 'tStartRefresh')  # time at next scr refresh
            show_fb_key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(show_fb_key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(show_fb_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if show_fb_key_resp.status == STARTED and not waitOnFlip:
            theseKeys = show_fb_key_resp.getKeys(keyList=None, waitRelease=False)
            _show_fb_key_resp_allKeys.extend(theseKeys)
            if len(_show_fb_key_resp_allKeys):
                show_fb_key_resp.keys = _show_fb_key_resp_allKeys[-1].name  # just the last key pressed
                show_fb_key_resp.rt = _show_fb_key_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in show_feedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "show_feedback"-------
    for thisComponent in show_feedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "show_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "take_break"-------
    continueRoutine = True
    # update component parameters for each repeat
    if ActualTrials.thisTrialN != 47 or reps == 3:
        continueRoutine=False
    else:
        reps += 1
        for i in range(len(idx_list)):
            idx_list[i] = random.sample(idx_list[i], len(idx_list[i]))
    
    # keep track of which components have finished
    take_breakComponents = [break_text]
    for thisComponent in take_breakComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    take_breakClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "take_break"-------
    while continueRoutine:
        # get current time
        t = take_breakClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=take_breakClock)
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
        if take_breakClock.getTime() > 30:
            continueRoutine=False
        
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in take_breakComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "take_break"-------
    for thisComponent in take_breakComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    ActualTrials.addData('break_text.started', break_text.tStartRefresh)
    ActualTrials.addData('break_text.stopped', break_text.tStopRefresh)
    # the Routine "take_break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 4.0 repeats of 'ActualTrials'


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
