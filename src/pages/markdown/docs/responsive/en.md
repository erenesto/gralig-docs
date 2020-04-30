---
title: 'Responsive'
mdtype: 'MDHTML'
section: 'responsive'
---

Gralig uses 5 breakpoint variables and 2 mixins for mobile compatibility.

```scss
@import 'gralig/scss/abstracts/_variables.scss';
@import 'gralig/scss/abstracts/_mixins.scss';
```

## Breakpoints

<div class="gra-s-wrapper">
  <div class="table-wrapper">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Variable</th>
          <th>Type</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>$breakpoint-xl</td>
          <td>size</td>
          <td>120em (1920px)</td>
        </tr>
        <tr>
          <td>$breakpoint-l</td>
          <td>size</td>
          <td>75em (1200px)</td>
        </tr>
        <tr>
          <td>$breakpoint-m</td>
          <td>size</td>
          <td>62.5em (1000px)</td>
        </tr>
        <tr>
          <td>$breakpoint-s</td>
          <td>size</td>
          <td>50em (800px)</td>
        </tr>
        <tr>
          <td>$breakpoint-xs</td>
          <td>size</td>
          <td>37.5em (600px)</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Mixins

```scss
//  you can use them in .scss like

@include min-width($breakpoint-s) {

}

// or

@include max-width($breakpoint-m) {

}
```