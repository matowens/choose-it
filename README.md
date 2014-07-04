ChooseIt
=========

A super simple jQuery plugin that helps you create a CYOA (Choose Your Own Adventure) interactive sliders.

Great for building out choose your own adventure stories, troubleshooting guides, quick presentations and more.

Both js and css files combine for less than 1 kB.  Browser support mirrors your version of <a href="http://jquery.com/browser-support/">jQuery's</a>.

You can check out the demo here: [http://matowens.github.io/choose-it](http://matowens.github.io/choose-it)

Implementation
==============

###Requirements

Being a jQuery plugin, jQuery is required inorder for this to function.

###Installation

// Bower coming soon...

You can also download source files straight from this repo, they're located in the `dist` dir.  Just include the minified version of both the js and css files.

###Usage

After including *choose-it.min.css* and *choose-it.min.js*, invoke the choose-it plugin on your slider's container.

    jQuery('#ci').chooseIt();

###Structure

#####Container

Your slider should be contained within a tag, most likely a div, and you should have some way of identifying that tag with jQUery.  In our case, we'll use a div and give it an ID of `ci`.

    <div id="ci">

    </div>

#####Slides

Now build out each slide within your container and add any content you'd like.  Each slide should have it's own unique ID; this will be used to trigger that particular slide when referenced.  (By default, the slide with ID of *slide-1* will be the first slide loaded up but that can be overriden, see [configuration](#configuration) below.)  Each slide should also have the `ci-slide` class assigned to it. (*ci-slide* is the default slide identifier but can be overriden as well, see [configuration](#configuration) below.)

    <div id="slide-1" class="ci-slide">
        // Any content here...
    </div>

    <div id="slide-2" class="ci-slide">
        // More content here...
    </div>

#####Navigation

Within your slides, you can add any number of buttons, divs or other tags that point to any of your slides.  Our buttons should all have the `ci-nav` class and must also contain a path attribute that references the ID of the slide it should trigger. (*ci-nav* is the default nav identifier but can be overriden, see [configuration](#configuration) below.)
    
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

You can override a few of the default options when you invoke the choose-it plugin. (For available options, check the [definitions](#definitions) below.)

    jQuery('#ci').chooseIt({
        initSlide: 'slide-1',
        navClass: 'ci-nav',
        slideClass: 'ci-slide'
    });


Definitions
===========

###Options

- **initSlide** - *string* - the ID of the first slide that will display.  *this is set to `slide-1` by default*

- **navClass** - *string* - the class that identifies navigation items throughout your slider.  *this is set to `ci-nav` by default*

- **slideClass** - *string* - the class that identifies all slides throughout your slider.  *this is set to `ci-slide` by default*

###Styles

Very basic styles are provided to give you a foundation to build on, or if you'd like, a very minimalistic theme.

- **wrapper** - the container that houses our slider and controlls it's size and position.
    - *#ci*

- **slides** - targets all of our slides and hides them intially rather than relying on JS to hide all our slides after loading, this prevents the awkward flicker effect.
    - *.ci-slide*

- **slide nav** - targets all of our nav buttons and applies a few minimal styles like background color and padding.
    - *.ci-nav*

- **nav position**: if you would like to position any of your buttons to the left or ride of a slide, apply the appropriate class to those buttons.  Helpful for forward, backward or sequential type slides.  *By default, buttons will all be center aligned.*
    - *.left*
    - *.right*