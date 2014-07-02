ChooseIt
=========

A super simple jQuery plugin that helps you create a CYOA (Choose Your Own Adventure) interactive slider.

Great for building out choose your own adventure stories, troubleshooting guides, quick presentations and more.

You can check out the demo here: [http://matowens.github.io/choose-it](http://matowens.github.io/choose-it)

Implementation
==============

###Requirements

Being a jQuery plugin, jQuery is required inorder for this to function.

###Installation

// Bower coming soon...

You can also download source files straight from this repo, they're located in the `dist` dir.  Just include the minified version of both the js and css files.

###Usage

After including *choose-it.min.css* and *choose-it.min.js*, invoke the choose-it plugin on your slider's container element.

    jQuery('#choose-it').chooseIt();

###Structure

#####Container

Your slider should be contained within a div and that div have a unique ID.  In our case, we'll use `choose-it`.

    <div id="choose-it">

    </div>

#####Slides

Now build out each slide within your container div and add any content you'd like.  Each slide should have it's own unique ID; this will be used to trigger that particular slide when referenced.  (By default, the slide with ID of *slide-1* will be the first slide loaded up but that can be overriden, see [configuration](#configuration) below.)  Each slide should also have the `ci-slide` class assigned to it. (*ci-slide* is the default slide identifier but can be overriden, see [configuration](#configuration) below.)

    <div id="slide-1" class="ci-slide">
        // Any content here...
    </div>

    <div id="slide-2" class="ci-slide">
        // More content here...
    </div>

#####Navigation

Within your slides, you can add any number of buttons, divs or other elements that point to any of your slide.  Our buttons should all have the `ci-nav` class and must also contain a path attribute that references the ID of the slide it should trigger. (*ci-nav* is the default nav identifier but can be overriden, see [configuration](#configuration) below.)
    
    <div id="slide-1" class="ci-slide">
        // Any content here...
        <button class="ci-nav" path="slide-2">Go to slide 2...</button>
        <button class="ci-nav" path="slide-4">Trigger slide 4...</button>
    </div>

    <div id="slide-2" class="ci-slide">
        // More content here...
        <button class="ci-nav" path="slide-1">Go back to slide 1...</button>
        <button class="ci-nav" path="slide-3">Move to slide 3...</button>
    </div>

Advanced Usage
==============

###Configuration

You can override a few of the default options by passing them through when you invoke the choose-it plugin. (For available options, check the [definitions](#definitions) below.)

    jQuery('#choose-it').chooseIt({
        initSlide: 'slide-1',
        navClass: 'ci-nav',
        slideClass: 'ci-slide'
    });


Definitions
===========

###Options

- **initSlide**

- **navClass**

- **slideClass**

###Styles

Very basic styles are provided to give you a foundation to build on, or if you'd like, a very minimalistic theme.

- **wrapper** - the de
    - *#choose-it*

- **slides**
    - *.ci-slide*

- **slide nav**
    - *.ci-nav*

- **nav position**: if you would like to position any of your buttons to the left or ride of a slide, apply the appropriate class to those buttons.  Helpful for forward, backward or sequential type slides.
    - *.left*
    - *.right*