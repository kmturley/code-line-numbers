# Code line numbers

> Add line numbers to your `<code>` snippets on the page, HighLight.js is also supported

## Motivation

Sometimes you need to add line numbers code sample on website pages.
There is a list of ways to do it: from manual adding HTML code to using libraries like [highlightjs-line-numbers.js](https://github.com/wcoder/highlightjs-line-numbers.js) for [HighLight.js](https://github.com/highlightjs/highlight.js) support (syntax highlighting).

But all existing solutions feel the lack in some features.
This library fully implements all our needs including:

- Support of both pure HTML `<pre><code>` and [HighLight.js](https://github.com/highlightjs/highlight.js) snippets
- Native TypeScript support (simple JavaScript and TypeScript API)
- Webpack support (with using by `require` or `import` instead of global variable)
- [BEM](https://en.bem.info) compatible CSS for painless styling
- Optional showing leading zeros in line numbers
- Attaching to all `code` snippets on the page or just to specified ones
- Not selectable line numbers
- Tiny code base (1.4 Kb)

## Install

With [npm](https://npmjs.com/) installed, run

```
$ npm install code-line-numbers
```


## Usage

### Attach to all `<code>` snippets on the page

```js
import {CodeLineNumbers} from "code-line-numbers";

document.addEventListener("DOMContentLoaded", () => {
    CodeLineNumbers.addCodeLineNumbers();
});
```

### Using together with Highlight.js

If you use Highlight.js, please use this code sample:

```js
import * as hljs from "highlight.js";
require("highlight.js/styles/github.css");
import {CodeLineNumbers} from "code-line-numbers";

document.addEventListener("DOMContentLoaded", () => {
    hljs.initHighlighting();
    CodeLineNumbers.addCodeLineNumbers();
});
```

Passing some selector as argument to function `addCodeLineNumbers` will affect default selector overriding. Default selector is `pre > code` which means all your `<pre><code></code></pre>` constructions match the selector. For adding line numbers only to some of your code snippets we recommend you to add `data-line-numbers` attribute to `<pre>` and use `pre[data-line-numbers] > code` selector instead of default one. Example:

```
CodeLineNumbers.addCodeLineNumbers("pre[data-line-numbers] > code");
```


### Attach to specified `<code>` snippet only

```js
import {CodeLineNumbers} from "code-line-numbers";

var elCode = document.querySelector("code#my-code-example");
CodeLineNumbers.addLineNumbersTo(elCode);
```

This code will add line numbers only to specified element passed as argument.
Be sure that document is already loaded here, or use `DOMContentLoaded` event listener (see samples above).


### Styling

In order to redefine CSS for skinning purposed redeclare these two CSS selectors:

```css
.code-line-numbers__number {
    color: #8c8c8c;
    background-color: #efefef;
    padding: 3px 10px;
    margin-right: 5px;
}

.code-line-numbers__number__zeros {
    color: transparent;
}
```

Hint: setting color for `.hljs-line-numbers__number__zeros` will show leading zeros in line numbers like `042`.


## License

LGPL license - use it for free.

Star us on [GitHub](https://github.com/edsdk/code-line-numbers) if you like this library.