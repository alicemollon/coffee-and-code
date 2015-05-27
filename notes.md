# Coffee & Code
A single column site expanding upon simple CV project, introducing embeds and twitter button.

## Setup
Show what the finished site is going to look like in the browser.

Go to [Steer Downloads](http://steer.me/downloads) download zip file for project `Coffee & Code`. Unzip file called `coffee.zip` and move folder into `Steer Course` folder. Drag the folder onto Sublime Text logo, this should add the folder to `Open Files` sidebar in Sublime (if students cant see it open it by `File > Side Bar > Show Open Files`).

Explain the folders and what they contain, explain again that images are kept in separate folder to make folder structure neater.

## HTML
Open up `index.html` from the sidebar, create the `<html>` tags **Leave out the doctype**. Create the `<head>` & `<body>` tags and then start filling out the `<head>`.

### Head
Introduce a new meta tag `<meta charset="utf-8">` and explain the purpose of it and how it provides consistency with special characters.

Its probably a good idea to introduce code comments at this point and explain that they are heplful for adding inline explanations and they dont get read by the browser. Use the Sublime shortcut `cmd + /` to create one and add some text to it above the `meta charset` tag.

Add the `<title>` and add `Coffee & Code Cafe` to it, add the `<meta description>` tag with the content `A cafe in London that lets you work on code as much as you like`. Introduce the `<meta viewport>` tag and explain that this is seen by mobile browsers to make sure the responsive design works.

Finally, add in the `<link>` tag to the stylesheet, as it's empty it wont add any styles to the site yet. The head should look something like this:
````html
<head>
  <!-- to stop accents or symbols appearing wrongly -->
  <meta charset="utf-8" />
  <title>Coffee + Code Cafe</title>
  <meta name="description" content="A cafe in Manchester that lets you work on code as much as you like" />
  <!-- tell iphones and android this site is responsive -->
  <meta name="viewport" content="width=device-width" />
  <!-- stylesheets -->
  <link rel="stylesheet" href="css/style.css" />
</head>
````

### Body


#### Header
Add the `<header>` tags to the body and inside that add the `<h1>` tags. Explain that instead of adding text to this `h1` we are going to add an image this is because our logo/ name of the site is an image. *Might be worht noting that this maybe not the most semantic thing but as long as we add alt text to the image this gives some context*.

Finished code:
````html
<header>
  <h1>
    <img src="images/logo.png" alt="Coffee and Code Cafe" />
  </h1>
</header>
````

#### Navigation
Next, we will create our navigation, create a `<nav>` tag and explain that this is a HTML5 to denote an area of navigation. Inside this `<nav>` add some `<a>` tags with the following text `Home, About, Twitter, Facebook, Email`. For the Home `href` use `index.html` and explain this will just take us back to the same page when we click it.

The About `href` should use `about.html` and explain that for this to work you would need ot create a file in the same folder called `about.html`. Add `http://twitter.com/codecafe"` to the Twitter link and `http://facebook.com/codecafe` and mention that these will take us to the twitter profile and Facebook profile page.  For the `Email` link we use `mailto:` then an email address and explain that this will attempt to open up your mail app and create a new email with the address from the link as the recipient.

Finished code:
````html
<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="http://twitter.com/codecafe">Twitter</a>
  <a href="http://facebook.com/codecafe">Facebook</a>
  <a href="mailto:help@steer.me">Email</a>
</nav>
````

#### Intro Section
Create our first `<section>` and show them what this is going to denote on the finished page. Add an `<h2>` with the text `Welcome to Coffee + Code Café`, then a `<p>` tag containing some general body copy which can be copied and pasted from the `copy.txt` file in the project folder. Add an `<img>` with the photo `cafe.png` and repeat with the next `<p>` and `<img>` and final `<p>`.

Finished code:
````html
<section>
  <h2>Welcome to Coffee + Code Café</h2>
  <p>In April 2011 we opened our doors on Exmouth Market, intent on bringing to the neighbourhood the very best coffee possible. Sourcing, roasting and brewing great coffee lead to more, and since then, our Clerkenwell cafe has evolved into a thriving destination for coffee, food, beer and wine lovers alike.</p>
  <img src="images/cafe.png" alt="Photo of the cafe" />
  <p>While our focus on serving great coffee has never faltered, we quickly added to our repertoire breakfast, lunch, dinner and weekend brunch services, rapidly receiving acclaim for each. We've been voted Runner Up Best Independent Cafe Europe (Allegra Symposium), Best Vegetarian Breakfast (Observer Food Monthly), 'a great day-time cafe, becoming a major point of interest' (TimeOut), and won 'Best Independent Cafe' at the 2012 Cafe Society Awards.</p>
  <img src="images/food.png" alt="Our awesome food" />
  <p>A continually developing focus on conscientious and considered sourcing and preparation underpins everything we do, combined with a desire to always share these goods with our guests in a humble and relaxed way.</p>
</section>
````

#### Quote Section 1
Move onto the next section and explain that this will contain a quote and show them that in the final design it has a different background colour so we need to have a way to target specific sections in our CSS.

Create the `<section>` **Don't add the classes yet** we will come back to it later when adding our CSS. Inside the section add a `<blockquote>` and grab the quote copy from `copy.txt` add in the quote attribution as a `<p>`.

Finished code:
````html
<section>
  <blockquote>
    "The coffee was really good and the place itself was more than relaxed. I was so comfortable I didn't want to leave. I will definitely return."
  </blockquote>
  <p>— Sophie from London</p>
</section>
````


#### Youtube section
Create the next `<section>`, add in an `<h2>` with the title `Make the perfect coffee` and explain that in this section we are going add a video from YouTube and that they provide very easy ways of doing this. Go to `http://www.youtube.com/watch?v=hACqanseofs` and get the embed code paste it underneath the `<h2>` and explain what an `<iframe>` is.  Add a `<p>` tag that will use a class to turn into a caption for the video **but for now leave off the class**. Add a final `<p>` with the video description.

Finished Code:
````html
<section>
  <h2>Make the perfect coffee</h2>
  <iframe width="600" height="338" src="http://www.youtube.com/embed/hACqanseofs?rel=0" frameborder="0" allowfullscreen></iframe>
  <p class="caption">
    Making the perfect coffee
  </p>
  <p>Our very own James shows Time Out London how to make the perfect coffee.</p>
</section>
````


#### Quote section 2
Add another `<section>` that will contain a `<blockquote>` and a `<p>` **Again leave off the class at this stage**

finished Code:
````html
<section class="quotes">
  <blockquote>
    "Food and coffee are both exceptional. As expected orange juice is the freshly squeezed variety. You can't go wrong with the breakfast corn fritters or poached eggs with sourdough and tomato kasundi."
  </blockquote>
  <p>— Jing from London</p>
</section>
````


#### Google map section
Create the final `<section>`, add a `<h2>`, with the text `Where are we?`. Go to [Google Maps](http://google.com/maps) and get them to look for a place eg. Exmouth Market, Workshop. Get the embed code and copy and paste it under the `<h2>`. Again explain again how this is using an `iframe` and that it has a very long query string in the url that custmoises the map location.

Finished Code:
````html
<section>
  <h2>Where are we?</h2>
  <iframe width="600" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=techhub,+dale+street,+manchester&amp;aq=&amp;sll=53.479976,-2.231941&amp;sspn=0.001676,0.002645&amp;ie=UTF8&amp;hq=techhub,&amp;hnear=Town+Center+Securities+PLC,+75+Dale+St,+Manchester,+Lancashire+M1+2EQ,+United+Kingdom&amp;t=m&amp;ll=53.487841,-2.230482&amp;spn=0.020427,0.051413&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe>
  <p><a href="https://www.google.com/maps?q=techhub,+dale+street,+manchester&hl=en&ll=53.480084,-2.232177&spn=0.003352,0.005289&sll=53.479976,-2.231941&sspn=0.001676,0.002645&hq=techhub,&hnear=Town+Center+Securities+PLC,+75+Dale+St,+Manchester,+Lancashire+M1+2EQ,+United+Kingdom&t=m&z=17">View larger map</a></p>
</section>
````

#### Footer
Create the `<footer>` and explain that we are going to create a follow button but that we are going to use one built by Twitter rather than styling it ourself. Go to [Twitter About](https://about.twitter.com/resources/buttons)  and choose the Follow button fill out the options and then copy and paste the code into the `<footer>`. Explain that this is essentially a `<a>` tag with a link to the twitter profile page of the user specified and then to give it the nice styles Twitter includes some minified JS that swaps the button with some pretty styles when the page loads. **Don't worry about explaining the details of the js**

Finished Code:
````html
<footer>
  <a href="https://twitter.com/coffeeandcode" class="twitter-follow-button" data-show-count="false" data-size="large">Follow @coffeeandcode</a>
  <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
</footer>
```


## CSS
Go to [Google Fonts](http://google.com/fonts), choose the `Roboto` font and pick the following weights `Normal, Normal-Italic, Bold, Bold-Italic`. Get the `@import` code and add it to the top of the CSS file as the first line.

Start with the `body` tag rules and re-affirm that we start with the most general rules first and get more specific as we work our way down the stylesheet.
````css
body {
  /* lets use Roboto from Google Fonts */
  font-family: Roboto, Arial;
  font-size: 16px;
  line-height: 1.5;

  background: #999999;

  /* to get to the images folder, go up a level */
  /* and into the images folder itself */
  background-image: url(../images/background.jpg);
  background-position: center;
  background-repeat: no-repeat;

  /* keep the image where it is when we scroll */
  background-attachment: fixed;

  /* to make the background image fill the screen */
  background-size: cover;


  color: #444444;

  /* lets move the content into the middle */
  width: 680px;
  margin: 0 auto 0 auto;
}
````

- font-family: Use `Roboto` font for all text or if not available use `Arial`
- font-size: Default font-size for all body text on site
- line-height: set a nice default line-height that makes long blocks of text easier to read
- background-image: Instead of using the shorthand `background` rule we can focus on each individual property that controls a background. This one spcifies the image.
- background-position: This positions where the image should align to on the `body`, in this case `center` center the image on both the X & Y axis
- background-repeat: dont repeat the image
- background-attchement: we dont want the image to scroll with us but to lock it in place.
- background-size: CSS3 property `cover` makes sure the image always covers the entire body even if that means enlarging it
- color: change the text colour from black to very dark grey
- width: give it a fixed width
- margin: again uses `auto` as this allows us to the align the 680px width body into the middle of the page

The first set of rules should be familiar from the last project, but in this one we split out the background properties into individual rules this is just an alternative way to the shorthand, they can use whatever they find more readable. Explain that `background-size` is useful for stretching images dynamically and that css images should be used when they are adding only style not actual images in the content.

Next is to style up the header
````css
header {
  text-align: center;
  padding: 20px 0 10px 0;
}
````

- text-align: Explain that this aligns the image into the middle of the body and does this because images share alot of properties with text
- padding: Add some padding to make sure the logo isnt directly at the top of the page and that the nav below it wont push directly under it

Get people to keep saving the file and checking in their browser as it sees the progress they have made.

Next we will style up the `<nav>` and `<nav> > <a>` elements
````css
nav {
  /* yellow from copy.txt */
  background: #fee34c;

  padding: 20px 0 20px 0;
  text-align: center;
}

/* to style links inside a nav tag */
nav a {
  color: #444444;

  /* to make things bold */
  font-weight: 700;

  /* use paddings over margins to
   make the hit area bigger */
  padding: 20px;

  /* get rid of underlines */
  text-decoration: none;
}

/* on hover, change the links to have underline */
nav a:hover {
  text-decoration: underline;
  color: #666666;
}
````

- background: sets the background nav to yellow
- add some padding so the yellow is a bit more prominent
- text-align: centers all the text inside the nav; in this case all the `<a>` tags
- nav a: This rule will only apply styles to `<a>` tags that are inside the `<nav>`
- color: sets the link colour to soemthing a bit nicer
- font-weight: This is new and explain that `700` is numbert that represents the weight of the font in this case the bold one. (You could explain that you can also use `bold` as well)
- padding: Explain that this makes the clickable area bigger because padding is inside the box, it adds clickable space
- text-decoration: removes the default underline of links
- nav a:hover: Certain elements can be in different states and we can apply styles just to the element in that state. In this case whenever a link inside the nav is hovered over.
- text-decoration: When a link is hovered over we want to add the underline back in
- color: and change the font colour

Now we have finished with the header and nav we can style up all the sections
````css
section {
  background: white;
  padding: 20px 40px 20px 40px;
  border-bottom: 1px solid #eeeeee;
}
````

- background: Again just specifiying a colour using the keyword `white` but could also use `#ffffff` or `rgba(255,255,255,1)`
- padding: Add padding to every section to make sure text is not against edges
- border-bottom: this is super subtle but works well to show the split between each section when no margin is being added.

Next we want to add some rules for some of the typographical elements on the page
````css
h2 {
  font-size: 21px;
  margin: 20px 0 20px 0;
}

p {
  margin: 20px 0 20px 0;
}

a {
  /* link blue from copy.txt */
  color: #658099;
}

blockquote {
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0 20px 0;
}
````

- font-size: Reduce the font size for every h2
- margin: just sets some nice default spacing between `<h2>` & `<p>`
- color: change the default gross link colour
- font-weight: make quotes bold

Next up is to introduce the concept of classes, start by explaining that every section has white background but that for the sections that contain quotes we want the background to be grey. Explain that at the moment it's impossible to do this but that we can add a `class` attribute to the section that allows us specify a keyword that we can use inside our CSS to target just sections with that class applied to it.

Go back to `index.html` and add `class="quotes"` to each section

Finished code
````html
<section class="quotes">
  <blockquote>
    "The coffee was really good and the place itself was more than relaxed. I was so comfortable I didn't want to leave. I will definitely return."
  </blockquote>
  <p>— Sophie from London</p>
</section>

<section class="quotes">
  <blockquote>
    "Food and coffee are both exceptional. As expected orange juice is the freshly squeezed variety. You can't go wrong with the breakfast corn fritters or poached eggs with sourdough and tomato kasundi."
  </blockquote>
  <p>— Jing from London</p>
</section>
````

In our `style.css` file we can then add our styles to sections that have the `class="quotes"`. Explain that to add styles just to sections with a class of `quotes` we just use `.` and then the class name after it.
````css
/* i want to pick the sections with class="quotes" */
section.quotes {
  background: #e3e7e6;
}

/* any paragraph inside section.quotes */
section.quotes p {
  text-align: right;
}
````

- background: change the background colour just to sections with class of section it
- text-align: the `<p>` tag contains our quote attribution and we just want to align those to the right. laos because we specify `section.quotes p` it will only align `<p>` text inside the quotes section.

Next we want to style up the little caption underneath our Youtube embed, to do that we should add a class to that `<p>` tag so it would become `<p class="caption">Making the perfect coffee</p>` and the CSS would look like the following

````css
p.caption {
  text-align: right;
  font-size: 12px;

  margin: 0;
  padding: 10px 0 15px 0;
  border-bottom: 1px solid #eeeeee;

  letter-spacing: 3px;
  text-transform: uppercase;
}
````

- text-align: align text to the right
- font-size: make the font smaller as it's not that important
- margin: remove all margin so it doesnt create massive space
- padding: use padding instead so that when you use the border it has nice even space above an below
- border-bottom: nice subtle border just to the bottom of the `<p>`
- letter-spacing: we don't have access to kerning and can only apply spacing to all charcters evenly
- text-transform: we want to have th text visually all be in caps but for accessibility we shouldnt type into the html as all caps as creen readers will shout this out

The final rules we need to add in are for the `<footer>`

````css
footer {
  text-align: center;
  padding: 40px 0 40px 0;
}
````

- text-align: just align the twitter follow link into the middle
- padding: add some space around the button so it doesnt look too squashed


## Media Queries
As it stands at the moment the site is a fixed width of 680px and up until 2010, people thought this was fine. The show them the Responsive Web Design article on [ALA](http://alistapart.com/article/responsive-web-design/). Talk about how with the growing number of mobile devices and screen sizes we now have to cater lots of different sizes and that we can do this with the media query. We set rules that come into effect when the screen size is a certain width.

Create a blank media query
````css
@media screen and (max-width: 720px) {

}
````

Explain that any this we put between the `{}` will only start working once our screen is less than 720px. Add in our `body` rule's that will start at less than 720px
````css
body {
  width: auto;
  margin: 0 20px 0 20px;
}
````
- width: instead of being a fixed with it will expand to fill its available space
- margin: add some to the left and right allows the background image to come through a tad- *more stylistic than anything*

Next we want to make sure our images stay within their boundaries and dont spill out of the edges
````css
img, iframe {
  max-width: 100%;
}
````

- img, iframe: This allows us to select multiple elements to apply the same rules to, using the `,`
- max-width: this forces the image to only be a maximum of 100% of their parent container when that container gets smaller the images and iframes shrink proportionally.

Finally inside our media query we want to add some style to our navigation items to give them a bit more room
````css
nav a {
  display: block;
  padding: 10px 20px 10px 20px;
}
````

- display: Explain that by default all atgs are displayed either block or inline and explain the different properties of these but that we can change their natural display state, in this case we are going to force our anchor elements to take up the entire width of their parent element and break them onto new lines
- padding: reduce the padding on the top and bottom to 10px so that they sit a bit more snug and take up less room.

