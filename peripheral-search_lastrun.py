﻿#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.1.4),
    on Wed Jul 14 22:55:37 2021
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

import math
from  PIL import Image


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.1.4'
expName = 'screen_scale'  # from the Builder filename that created this script
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
    originPath='/Users/tiger/Scripts_GoogleDrive/research/peripheral-visual-search-online/peripheral-search_lastrun.py',
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
    size=[3200, 1800], fullscr=True, screen=0, 
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
key_resp = keyboard.Keyboard()

# Initialize components for Routine "check_status"
check_statusClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='Fin',
    font='Arial',
    units='norm', pos=(0, 0), height=0.1, wrapWidth=1.8, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "introduction"
introductionClock = core.Clock()
target_class = "cat"
non_target_classes = [
    "dog",
    "elephant",
    "tiger",
    "rabbit",
    "kangaroo",
    "sheep",
    "monkey",
    "lion",
    "bear",
    "fox",
    "pig",
    "otter",
]

rate = win.size[1] / win.size[0]
eccentricity_level_1 = round(math.sqrt(2), 2)
eccentricity_level_2 = round(1 + math.sqrt(8), 2)
eccentricity_level_3 = round((math.sqrt(2) + 4 + math.sqrt((math.sqrt(2) + 4) ** 2 - 4 * (4 * math.sqrt(2) - 27))) / 2, 2)
import math

# Local
# imac
VA = round(360 / pi * math.atan2(33.5, 2 * 57))
# macbook
VA = round(360 / pi * math.atan2(17.9, 2 * 57))

# Online
# VA = round(360 / pi * math.atan2(screen_height, 2 * 57))
deg2norm = 2 / VA
image_0_0 = visual.ImageStim(
    win=win,
    name='image_0_0', units='norm', 
    image='html/resources/imagenet/bear/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=(deg2norm * rate, deg2norm),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
image_0_1 = visual.ImageStim(
    win=win,
    name='image_0_1', units='norm', 
    image='html/resources/imagenet/cat/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=(deg2norm * rate, deg2norm),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
image_0_2 = visual.ImageStim(
    win=win,
    name='image_0_2', units='norm', 
    image='html/resources/imagenet/dog/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=(deg2norm * rate, deg2norm),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
image_0_3 = visual.ImageStim(
    win=win,
    name='image_0_3', units='norm', 
    image='html/resources/imagenet/elephant/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=(deg2norm * rate, deg2norm),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-6.0)
image_1_0 = visual.ImageStim(
    win=win,
    name='image_1_0', units='norm', 
    image='html/resources/imagenet/fox/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=(2 * deg2norm * rate, 2 * deg2norm),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
image_1_1 = visual.ImageStim(
    win=win,
    name='image_1_1', units='norm', 
    image='html/resources/imagenet/kangaroo/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=(2 * deg2norm * rate, 2 * deg2norm),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-8.0)
image_1_2 = visual.ImageStim(
    win=win,
    name='image_1_2', units='norm', 
    image='html/resources/imagenet/lion/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=(2 * deg2norm * rate, 2 * deg2norm),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-9.0)
image_1_3 = visual.ImageStim(
    win=win,
    name='image_1_3', units='norm', 
    image='html/resources/imagenet/monkey/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=(2 * deg2norm * rate, 2 * deg2norm),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-10.0)
image_2_0 = visual.ImageStim(
    win=win,
    name='image_2_0', units='norm', 
    image='html/resources/imagenet/otter/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=(2 * 2 * deg2norm * rate, 2 * 2 * deg2norm),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-11.0)
image_2_1 = visual.ImageStim(
    win=win,
    name='image_2_1', units='norm', 
    image='html/resources/imagenet/pig/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=(2 * 2 * deg2norm * rate, 2 * 2 * deg2norm),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-12.0)
image_2_2 = visual.ImageStim(
    win=win,
    name='image_2_2', units='norm', 
    image='html/resources/imagenet/rabbit/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=(2 * 2 *deg2norm * rate, 2 * 2 * deg2norm),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-13.0)
image_2_3 = visual.ImageStim(
    win=win,
    name='image_2_3', units='norm', 
    image='html/resources/imagenet/sheep/image01.png', mask=None,
    ori=0.0, pos=(0, 0), size=(2 * 2 * deg2norm * rate, 2 * 2 * deg2norm),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-14.0)
key_resp_4 = keyboard.Keyboard()
text_3 = visual.TextStim(win=win, name='text_3',
    text='',
    font='Open Sans',
    units='norm', pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-17.0);

# Initialize components for Routine "trial"
trialClock = core.Clock()
text_4 = visual.TextStim(win=win, name='text_4',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_3 = keyboard.Keyboard()

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

thisExp.addData('ccimage.started', ccimage.tStartRefresh)
thisExp.addData('ccimage.stopped', ccimage.tStopRefresh)
# the Routine "screen_scale" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "rectangle"-------
continueRoutine = True
# update component parameters for each repeat
polygon.setSize((10*x_scale, 10*y_scale))
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
rectangleComponents = [text, polygon, key_resp]
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
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
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

# ------Prepare to start Routine "check_status"-------
continueRoutine = True
# update component parameters for each repeat
text_2.text = str(x_scale) + '\n' + str(y_scale) + '\n' + str(vsize) + '\n' + str(screen_height)
key_resp_2.keys = []
key_resp_2.rt = []
_key_resp_2_allKeys = []
# keep track of which components have finished
check_statusComponents = [text_2, key_resp_2]
for thisComponent in check_statusComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
check_statusClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "check_status"-------
while continueRoutine:
    # get current time
    t = check_statusClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=check_statusClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    
    # *key_resp_2* updates
    waitOnFlip = False
    if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_2.frameNStart = frameN  # exact frame index
        key_resp_2.tStart = t  # local t and not account for scr refresh
        key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_2.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_2.getKeys(keyList=None, waitRelease=False)
        _key_resp_2_allKeys.extend(theseKeys)
        if len(_key_resp_2_allKeys):
            key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
            key_resp_2.rt = _key_resp_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in check_statusComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "check_status"-------
for thisComponent in check_statusComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_2.keys in ['', [], None]:  # No response was made
    key_resp_2.keys = None
thisExp.addData('key_resp_2.keys',key_resp_2.keys)
if key_resp_2.keys != None:  # we had a response
    thisExp.addData('key_resp_2.rt', key_resp_2.rt)
thisExp.addData('key_resp_2.started', key_resp_2.tStartRefresh)
thisExp.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
thisExp.nextEntry()
# the Routine "check_status" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "introduction"-------
continueRoutine = True
# update component parameters for each repeat
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
            rate * deg2norm * eccentricity_level_1 * math.cos(math.radians(i % 4 * 90 + 45)),
            deg2norm * eccentricity_level_1 * math.sin(math.radians(i % 4 * 90 + 45))
        )
    elif 4 <= i < 8:
        image_list[i].pos = (
            rate * deg2norm * eccentricity_level_2 * math.cos(math.radians(i % 4 * 90)),
            deg2norm * eccentricity_level_2 * math.sin(math.radians(i % 4 * 90))
        )
    else:
        image_list[i].pos = (
            rate * deg2norm * eccentricity_level_3 * math.cos(math.radians(i % 4 * 90 + 45)),
            deg2norm * eccentricity_level_3 * math.sin(math.radians(i % 4 * 90 + 45))
        )

key_resp_4.keys = []
key_resp_4.rt = []
_key_resp_4_allKeys = []
# keep track of which components have finished
introductionComponents = [image_0_0, image_0_1, image_0_2, image_0_3, image_1_0, image_1_1, image_1_2, image_1_3, image_2_0, image_2_1, image_2_2, image_2_3, key_resp_4, text_3]
for thisComponent in introductionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
introductionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "introduction"-------
while continueRoutine:
    # get current time
    t = introductionClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=introductionClock)
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
    
    # *key_resp_4* updates
    waitOnFlip = False
    if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.tStart = t  # local t and not account for scr refresh
        key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_4.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_4.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_4_allKeys.extend(theseKeys)
        if len(_key_resp_4_allKeys):
            key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
            key_resp_4.rt = _key_resp_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_3* updates
    if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_3.frameNStart = frameN  # exact frame index
        text_3.tStart = t  # local t and not account for scr refresh
        text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
        text_3.setAutoDraw(True)
    if text_3.status == STARTED:  # only update if drawing
        text_3.setText(str(rate) + "\n" + str(win.size[0]) + "\n" + str(win.size[1]))
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in introductionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "introduction"-------
for thisComponent in introductionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('image_0_0.started', image_0_0.tStartRefresh)
thisExp.addData('image_0_0.stopped', image_0_0.tStopRefresh)
thisExp.addData('image_0_1.started', image_0_1.tStartRefresh)
thisExp.addData('image_0_1.stopped', image_0_1.tStopRefresh)
thisExp.addData('image_0_2.started', image_0_2.tStartRefresh)
thisExp.addData('image_0_2.stopped', image_0_2.tStopRefresh)
thisExp.addData('image_0_3.started', image_0_3.tStartRefresh)
thisExp.addData('image_0_3.stopped', image_0_3.tStopRefresh)
thisExp.addData('image_1_0.started', image_1_0.tStartRefresh)
thisExp.addData('image_1_0.stopped', image_1_0.tStopRefresh)
thisExp.addData('image_1_1.started', image_1_1.tStartRefresh)
thisExp.addData('image_1_1.stopped', image_1_1.tStopRefresh)
thisExp.addData('image_1_2.started', image_1_2.tStartRefresh)
thisExp.addData('image_1_2.stopped', image_1_2.tStopRefresh)
thisExp.addData('image_1_3.started', image_1_3.tStartRefresh)
thisExp.addData('image_1_3.stopped', image_1_3.tStopRefresh)
thisExp.addData('image_2_0.started', image_2_0.tStartRefresh)
thisExp.addData('image_2_0.stopped', image_2_0.tStopRefresh)
thisExp.addData('image_2_1.started', image_2_1.tStartRefresh)
thisExp.addData('image_2_1.stopped', image_2_1.tStopRefresh)
thisExp.addData('image_2_2.started', image_2_2.tStartRefresh)
thisExp.addData('image_2_2.stopped', image_2_2.tStopRefresh)
thisExp.addData('image_2_3.started', image_2_3.tStartRefresh)
thisExp.addData('image_2_3.stopped', image_2_3.tStopRefresh)
# check responses
if key_resp_4.keys in ['', [], None]:  # No response was made
    key_resp_4.keys = None
thisExp.addData('key_resp_4.keys',key_resp_4.keys)
if key_resp_4.keys != None:  # we had a response
    thisExp.addData('key_resp_4.rt', key_resp_4.rt)
thisExp.addData('key_resp_4.started', key_resp_4.tStartRefresh)
thisExp.addData('key_resp_4.stopped', key_resp_4.tStopRefresh)
thisExp.nextEntry()
thisExp.addData('text_3.started', text_3.tStartRefresh)
thisExp.addData('text_3.stopped', text_3.tStopRefresh)
# the Routine "introduction" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
Trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('loopConditions.xlsx'),
    seed=None, name='Trials')
thisExp.addLoop(Trials)  # add the loop to the experiment
thisTrial = Trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in Trials:
    currentLoop = Trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_3.keys = []
    key_resp_3.rt = []
    _key_resp_3_allKeys = []
    # keep track of which components have finished
    trialComponents = [text_4, key_resp_3]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial"-------
    while continueRoutine:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_4* updates
        if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_4.frameNStart = frameN  # exact frame index
            text_4.tStart = t  # local t and not account for scr refresh
            text_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
            text_4.setAutoDraw(True)
        
        # *key_resp_3* updates
        waitOnFlip = False
        if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_3.frameNStart = frameN  # exact frame index
            key_resp_3.tStart = t  # local t and not account for scr refresh
            key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
            key_resp_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_3.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_3.getKeys(keyList=None, waitRelease=False)
            _key_resp_3_allKeys.extend(theseKeys)
            if len(_key_resp_3_allKeys):
                key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                key_resp_3.rt = _key_resp_3_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        text_4.text = str(thisTrial["size"]) + "\n" + str(thisTrial["rate"]) + "\n" + str(thisTrial["pos"]) + "\n" + str(thisTrial["ori"])
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    Trials.addData('text_4.started', text_4.tStartRefresh)
    Trials.addData('text_4.stopped', text_4.tStopRefresh)
    # check responses
    if key_resp_3.keys in ['', [], None]:  # No response was made
        key_resp_3.keys = None
    Trials.addData('key_resp_3.keys',key_resp_3.keys)
    if key_resp_3.keys != None:  # we had a response
        Trials.addData('key_resp_3.rt', key_resp_3.rt)
    Trials.addData('key_resp_3.started', key_resp_3.tStartRefresh)
    Trials.addData('key_resp_3.stopped', key_resp_3.tStopRefresh)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'Trials'


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
