# Textarea-Autogrow

A pure javascript solution for automatically growing `textarea` element on typing.

 * Works in all cases: expands on line breaks and word breaks.
 * Great Performance: minimal DOM manipulation.
 * Allows limitation of growing so a scrollbar will appear after X lines of content.

A full explanation of the code can be found on my [blog post](http://codingaspect.com/blog/textarea-auto-grow-resizing-textarea-to-fit-text-height) along with a jQuery plugin and an Angular directive with this technique.

#### Bower Installation
```bash
bower install textarea-autogrow
```

#### npm Installation
```bash
npm install textarea-autogrow
```

######

## Usage:
Just include `textarea-autogrow.js` file in `<head>` tag or require it:

```html
<script type="text/javascript" src="textarea-autogrow.js"></script>
```

```javascript
var Autogrow = require('textarea-autogrow');
```

Then initialize the magic:
```javascript
var textarea = document.getElementById('myTextarea');
var growingTextarea = new Autogrow(textarea);
```

It's also recommended to add those two CSS properties to make things stable:
```css
#myTextarea {
	resize: none;
	box-sizing: content-box;
}
```

######

## More Options:

### Limit Autogrow Lines

Just place a second argument on initialization:
```javascript
var growingTextarea = new Autogrow(textarea, 3); // up to 3 lines height
```

######
### Set Initial Rows

You can set the initial row number using simple HTML attribute `rows`:
```html
<textarea id="myTextarea" rows="1"></textarea>
```
