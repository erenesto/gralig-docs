---
title: 'Progress'
mdtype: 'MDHTML'
section: 'progress'
---

We created 2 different types of progress components in bar and circle view. You can use it in `.small`, normal and `.large` sizes.


## Progress Bar

For progress bar, percentage value from small to large is between `translateX(-100%)` and `translateX(0%)`

<div class="gra-s-wrapper">
  <span class="progress-bar">
    <span class="progress-bar-value" style="transform: translateX(-80%);"></span>
  </span>
</div>

```html
<span class="progress-bar">
  <span class="progress-bar-value" style="transform: translateX(-80%);"></span>
</span>
```

### Sizes

<div class="gra-s-wrapper">
  <span class="progress-bar small">
    <span class="progress-bar-value" style="transform: translateX(-80%);"></span>
  </span>
  <span class="progress-bar">
    <span class="progress-bar-value" style="transform: translateX(-60%);"></span>
  </span>
  <span class="progress-bar large">
    <span class="progress-bar-value" style="transform: translateX(-40%);"></span>
  </span>
</div>

```html
<span class="progress-bar small">
  <span class="progress-bar-value" style="transform: translateX(-80%);"></span>
</span>
<span class="progress-bar">
  <span class="progress-bar-value" style="transform: translateX(-60%);"></span>
</span>
<span class="progress-bar large">
  <span class="progress-bar-value" style="transform: translateX(-40%);"></span>
</span>
```

### Colors

<div class="gra-s-wrapper">
  <span class="progress-bar">
    <span class="progress-bar-value blue" style="transform: translateX(-70%);"></span>
  </span>
  <span class="progress-bar">
    <span class="progress-bar-value green" style="transform: translateX(-60%);"></span>
  </span>
  <span class="progress-bar">
    <span class="progress-bar-value yellow" style="transform: translateX(-50%);"></span>
  </span>
  <span class="progress-bar">
    <span class="progress-bar-value red" style="transform: translateX(-40%);"></span>
  </span>
</div>

```html
<span class="progress-bar">
  <span class="progress-bar-value blue" style="transform: translateX(-70%);"></span>
</span>
<span class="progress-bar">
  <span class="progress-bar-value green" style="transform: translateX(-60%);"></span>
</span>
<span class="progress-bar">
  <span class="progress-bar-value yellow" style="transform: translateX(-50%);"></span>
</span>
<span class="progress-bar">
  <span class="progress-bar-value red" style="transform: translateX(-40%);"></span>
</span>
```

## Progress Circle

We used inline svg for creating progress circle. The value of circle represents with `<circle>` which have `.progress-circle-value` class. To move value of circle, you should use `stroke-dashoffset`. Smallest value of circle which means 0% is `stroke-dashoffset: 380` and biggest value which means 100% is `stroke-dashoffset: 172`

<div class="gra-s-wrapper">
  <div class="progress-circle">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="progress-circle-back" cx="40" cy="40" r="33" fill="none"></circle>
      <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
    </svg>
  </div>
</div>

```html
<div class="progress-circle">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="progress-circle-back" cx="40" cy="40" r="33" fill="none"></circle>
    <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
  </svg>
</div>
```

### Sizes

<div class="gra-s-wrapper progress-circle-wrapper">
 <div class="progress-circle small">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
      <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
    </svg>
  </div>
  <div class="progress-circle">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="progress-circle-back" cx="40" cy="40" r="33" fill="none"></circle>
      <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
    </svg>
  </div>
  <div class="progress-circle large">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
      <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
    </svg>
  </div>
</div>

```html
<div class="progress-circle small">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
    <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
  </svg>
</div>
<div class="progress-circle">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="progress-circle-back" cx="40" cy="40" r="33" fill="none"></circle>
    <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
  </svg>
</div>
<div class="progress-circle large">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
    <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
  </svg>
</div>
```

### Colors

<div class="gra-s-wrapper progress-circle-wrapper">
  <div class="progress-circle blue">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
      <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
    </svg>
  </div>
  <div class="progress-circle green">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
      <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
    </svg>
  </div>
  <div class="progress-circle yellow">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
      <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
    </svg>
  </div>
  <div class="progress-circle red">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
      <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
    </svg>
  </div>
</div>

```html
<div class="progress-circle blue">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
    <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
  </svg>
</div>
<div class="progress-circle green">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
    <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
  </svg>
</div>
<div class="progress-circle yellow">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
    <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
  </svg>
</div>
<div class="progress-circle red">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
    <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
  </svg>
</div>
```
