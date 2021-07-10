---
title: 'Loading'
mdtype: 'MDHTML'
section: 'loading'
---

We created 3 different types of loading components in bar, circle and dots view. We used to same structure with [progress bar](/docs/progress 'progress bar') and [progress circle](/docs/progress 'progress circle') for loadings.


## Loading Bar

As same structure progress bar, you can use `.gra-loading` class and turn it to loading bar.

<div class="gra-doc-s-wrapper">
  <span class="gra-progress-bar gra-loading">
    <span class="gra-progress-bar-value"></span>
  </span>
</div>

```html
<span class="gra-progress-bar gra-loading">
  <span class="gra-progress-bar-value"></span>
</span>
```

## Loading Circles

There are 2 different type of loading circle. As same structure progress circle, you can use `.gra-loading` class and turn it to loading circle. But you should use type of loading circle `.gra-circle-turn-pieces` and `.gra-circle-turn`

<div class="gra-doc-s-wrapper">
  <div class="gra-progress-circle gra-loading gra-circle-turn-pieces">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none"></circle>
    </svg>
  </div>
</div>

```html
<div class="gra-progress-circle gra-loading gra-circle-turn-pieces">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none"></circle>
  </svg>
</div>
```

<div class="gra-doc-s-wrapper">
  <div class="gra-progress-circle gra-loading gra-circle-turn">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none"></circle>
    </svg>
  </div>
</div>

```html
<div class="gra-progress-circle gra-loading gra-circle-turn">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none"></circle>
  </svg>
</div>
```

## Loading Dots

<div class="gra-doc-s-wrapper">
  <div class="gra-loading-dots">
    <span class="gra-loading-dot dot-1"></span>
    <span class="gra-loading-dot dot-2"></span>
    <span class="gra-loading-dot dot-3"></span>
  </div>
</div>

```html
<div class="gra-loading-dots">
  <span class="gra-loading-dot dot-1"></span>
  <span class="gra-loading-dot dot-2"></span>
  <span class="gra-loading-dot dot-3"></span>
</div>
```

