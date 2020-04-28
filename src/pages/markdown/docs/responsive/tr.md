---
title: 'Mobil Uyumluluk'
mdtype: 'MDHTML'
section: 'responsive'
---

Gralig mobil uyumluluk için 5 kırılım noktası değişkeni ve 2 mixin aracı kullanır.

## Kırılım Noktası Değişkenleri

<div class="gra-s-wrapper">
  <div class="table-wrapper">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Değişken</th>
          <th>Tip</th>
          <th>Değer</th>
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

## Mixinler

```scss
//  .scss içerisinde aşağıdaki gibi kullanabilirsiniz.

@include min-width($breakpoint-s) {

}

@include max-width($breakpoint-m) {

}
```