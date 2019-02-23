# GhoulAlert Structure

## Templates

Templates are the structural side of Views. Think of templates as the *skeleton
and muscle structure*, and stylesheets as the *skin* of a view.

For this project we will be using the Pug template format. It is relatively simple,
primarily based around replacing tags with contextual indentation. You can learn
how to use Pug syntax here:

https://flaviocopes.com/pug/

### layout.pug

This is the layout file. It is the overarching structure of the application that
is shared between all pages.

The default state:

```
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```
In the head, `title= title` sets the value of the title - the text on the tab associated
with the page, to the value of the variable `title`.

`block content` communicates that templates which extend this layout begin at that point.

### index.pug

This is the default index file. It is used in responses for the base path as determined
in the routes.

The default state:

```
extends layout

block content
  h1= title
  p Welcome to #{title}
```
This template extends from the layout. `block content` coincides with the other one in the layout,
determining that this is where the

This demonstrates the difference between a tag followed by `=` and one that is not. `h1=` means that the
header tag contents should be parsed as a variable (or expression) - in this case, the value of "title" that the router sends to the template. `p`, however, contains text, so to display the contents of the variable,
it must be interpolated - surrounded by curly braces preceded by a hash, like `#{title}`.

### error.pug

This template is used when the application encounters an error.
