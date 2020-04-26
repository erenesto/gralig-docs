---
title: 'Değişkenler'
mdTip: 'MDHTML'
section: 'variables'
---

Kullanabileceğiniz birçok `scss` değişken, oluşturduk. Kullanım için sadece değişkenleri içeren `.scss` dosyasını import edebilirsiniz.

```scss
@import 'gralig/scss/abstracts/_variables.scss';
```

## Başlangıç Değişkenleri

Başlangıç renk değişkenleri için [renkler](/docs/colors 'Renkler Sayfası') sayfasını kontrol edebilirsiniz.

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
          <td>$font-size</td>
          <td>font-size</td>
          <td>1.6rem</td>
        </tr>
        <tr>
          <td>$font-size-s</td>
          <td>font-size</td>
          <td>1.4rem</td>
        </tr>
        <tr>
          <td>$font-size-l</td>
          <td>font-size</td>
          <td>1.2rem</td>
        </tr>
        <tr>
          <td>$font-thin</td>
          <td>font-weight</td>
          <td>300</td>
        </tr>
        <tr>
          <td>$font-normal</td>
          <td>font-weight</td>
          <td>400</td>
        </tr>
        <tr>
          <td>$font-bold</td>
          <td>font-weight</td>
          <td>600</td>
        </tr>
        <tr>
          <td>$font-family-general</td>
          <td>font-family</td>
          <td>-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
  Cantarell, "Open Sans", "Helvetica Neue", sans-serif</td>
        </tr>
         <tr>
            <td>$font-family</td>
            <td>font-family</td>
            <td>"Catamaran", sans-serif</td>
          </tr>
          <tr>
            <td>$space-xxs</td>
            <td>size</td>
            <td>0.2rem</td>
          </tr>
          <tr>
            <td>$space-xs</td>
            <td>size</td>
            <td>0.4rem</td>
          </tr>
          <tr>
            <td>$space-s</td>
            <td>size</td>
            <td>0.8rem</td>
          </tr>
          <tr>
            <td>$space</td>
            <td>size</td>
            <td>1.2rem</td>
          </tr>
          <tr>
            <td>$space-m</td>
            <td>size</td>
            <td>1.6rem</td>
          </tr>
          <tr>
            <td>$space-l</td>
            <td>size</td>
            <td>2.4rem</td>
          </tr>
          <tr>
            <td>$space-xl</td>
            <td>size</td>
            <td>3.2rem</td>
          </tr>
          <tr>
            <td>$space-xxl</td>
            <td>size</td>
            <td>6.4rem</td>
          </tr>
          <tr>
            <td>$line-height-s</td>
            <td>size</td>
            <td>1.2</td>
          </tr>
          <tr>
            <td>$line-height</td>
            <td>size</td>
            <td>1.5</td>
          </tr>
          <tr>
            <td>$line-height-m</td>
            <td>size</td>
            <td>1.6</td>
          </tr>
          <tr>
            <td>$line-height-l</td>
            <td>size</td>
            <td>1.7</td>
          </tr>
          <tr>
            <td>$border-radius</td>
            <td>size</td>
            <td>0.2rem</td>
          </tr>
          <tr>
            <td>$border-radius-full</td>
            <td>size</td>
            <td>50%</td>
          </tr>
          <tr>
            <td>$border-radius-full</td>
            <td>size</td>
            <td>50%</td>
          </tr>
          <tr>
            <td>$transition-default</td>
            <td>transition</td>
            <td>all 0.15s ease-in</td>
          </tr>
          <tr>
            <td>$transition-secondary</td>
            <td>transition</td>
            <td>all 0.3s ease-in</td>
          </tr>
          <tr>
            <td>$transparent</td>
            <td>color</td>
            <td>transparent</td>
          </tr>
          <tr>
            <td>$white</td>
            <td>color</td>
            <td>hsl(0, 0%, 100%)</td>
          </tr>
      </tbody>
    </table>
  </div>
</div>

## Türetilmiş Değişkenler

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
          <td>$color-background</td>
          <td>color</td>
          <td>$white</td>
        </tr>
        <tr>
          <td>$color-font</td>
          <td>color</td>
          <td>$abbey</td>
        </tr>
        <tr>
          <td>$color-font-secondary</td>
          <td>color</td>
          <td>$oslo</td>
        </tr>
        <tr>
          <td>$color-font-revert</td>
          <td>color</td>
          <td>$porcelain</td>
        </tr>
        <tr>
          <td>$color-main</td>
          <td>color</td>
          <td>$abbey</td>
        </tr>
        <tr>
          <td>$color-secondary</td>
          <td>color</td>
          <td>$raven</td>
        </tr>
        <tr>
          <td>$color-light</td>
          <td>color</td>
          <td>$iron</td>
        </tr>
        <tr>
          <td>$color-lighter</td>
          <td>color</td>
          <td>$porcelain</td>
        </tr>
        <tr>
          <td>$color-border</td>
          <td>color</td>
          <td>$iron</td>
        </tr>
        <tr>
          <td>$color-border-dark</td>
          <td>color</td>
          <td>$raven</td>
        </tr>
        <tr>
          <td>$color-input-disabled</td>
          <td>color</td>
          <td>$porcelain</td>
        </tr>
        <tr>
          <td>$color-input-placeholder</td>
          <td>color</td>
          <td>$mischka</td>
        </tr>
        <tr>
          <td>$el-box-shadow</td>
          <td>color</td>
          <td>0 0 3px 1px rgba($color-main, 0.5)</td>
        </tr>
        <tr>
          <td>$el-box-shadow-blue</td>
          <td>color</td>
          <td>0 0 3px 1px rgba($color-blue, 0.5)</td>
        </tr>
        <tr>
          <td>$el-box-shadow-green</td>
          <td>color</td>
          <td>0 0 3px 1px rgba($color-green, 0.5)</td>
        </tr>
        <tr>
          <td>$el-box-shadow-yellow</td>
          <td>color</td>
          <td>0 0 3px 1px rgba($color-yellow, 0.5)</td>
        </tr>
        <tr>
          <td>$el-box-shadow-red</td>
          <td>color</td>
          <td>0 0 3px 1px rgba($color-red, 0.5)</td>
        </tr>
        <tr>
          <td>$p-size</td>
          <td>font-size</td>
          <td>$font-size</td>
        </tr>
        <tr>
          <td>$p-s-size</td>
          <td>font-size</td>
          <td>$font-size * 0.8125</td>
        </tr>
        <tr>
          <td>$p-l-size</td>
          <td>font-size</td>
          <td>$font-size * 1.125</td>
        </tr>
        <tr>
          <td>$el-font-size</td>
          <td>font-size</td>
          <td>$font-size * 0.8125</td>
        </tr>
        <tr>
          <td>$el-font-size-s</td>
          <td>font-size</td>
          <td>$font-size * 0.6875</td>
        </tr>
        <tr>
          <td>$el-font-size-l</td>
          <td>font-size</td>
          <td>$font-size * 0.9375</td>
        </tr>
        <tr>
          <td>$content-padding-inline</td>
          <td>size</td>
          <td>$space-xl</td>
        </tr>
        <tr>
          <td>$content-padding-block</td>
          <td>size</td>
          <td>$space-m</td>
        </tr>
        <tr>
          <td>$color-blue</td>
          <td>color</td>
          <td>$summer</td>
        </tr>
        <tr>
          <td>$color-blue-light</td>
          <td>color</td>
          <td>$summer-light</td>
        </tr>
        <tr>
          <td>$color-blue-lighter</td>
          <td>color</td>
          <td>$summer-lighter</td>
        </tr>
        <tr>
          <td>$color-blue-dark</td>
          <td>color</td>
          <td>$summer-dark</td>
        </tr>
        <tr>
          <td>$color-blue-darker</td>
          <td>color</td>
          <td>$summer-darker</td>
        </tr>
        <tr>
          <td>$color-green</td>
          <td>color</td>
          <td>$shamrock</td>
        </tr>
        <tr>
          <td>$color-green-light</td>
          <td>color</td>
          <td>$shamrock-light</td>
        </tr>
        <tr>
          <td>$color-green-lighter</td>
          <td>color</td>
          <td>$shamrock-lighter</td>
        </tr>
        <tr>
          <td>$color-green-dark</td>
          <td>color</td>
          <td>$shamrock-dark</td>
        </tr>
        <tr>
          <td>$color-green-darker</td>
          <td>color</td>
          <td>$shamrock-darker</td>
        </tr>
        <tr>
          <td>$color-yellow</td>
          <td>color</td>
          <td>$tulip</td>
        </tr>
        <tr>
          <td>$color-yellow-light</td>
          <td>color</td>
          <td>$tulip-light</td>
        </tr>
        <tr>
          <td>$color-yellow-lighter</td>
          <td>color</td>
          <td>$tulip-lighter</td>
        </tr>
        <tr>
          <td>$color-yellow-dark</td>
          <td>color</td>
          <td>$tulip-dark</td>
        </tr>
        <tr>
          <td>$color-yellow-darker</td>
          <td>color</td>
          <td>$tulip-darker</td>
        </tr>
        <tr>
          <td>$color-red</td>
          <td>color</td>
          <td>$flame</td>
        </tr>
        <tr>
          <td>$color-red-light</td>
          <td>color</td>
          <td>$flame-light</td>
        </tr>
        <tr>
          <td>$color-red-lighter</td>
          <td>color</td>
          <td>$flame-lighter</td>
        </tr>
        <tr>
          <td>$color-red-dark</td>
          <td>color</td>
          <td>$flame-dark</td>
        </tr>
        <tr>
          <td>$color-red-darker</td>
          <td>color</td>
          <td>$flame-darker</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Karanlık Mod Değişkenleri

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
          <td>$color-font-dt</td>
          <td>color</td>
          <td>$iron</td>
        </tr>
        <tr>
          <td>$color-font-secondary-dt</td>
          <td>color</td>
          <td>$ghost</td>
        </tr>
        <tr>
          <td>$color-font-revert-dt</td>
          <td>color</td>
          <td>$woodsmoke</td>
        </tr>
        <tr>
          <td>$color-background-dt</td>
          <td>color</td>
          <td>$woodsmoke</td>
        </tr>
        <tr>
          <td>$color-main-dt</td>
          <td>color</td>
          <td>$raven</td>
        </tr>
        <tr>
          <td>$color-secondary-dt</td>
          <td>color</td>
          <td>$oslo</td>
        </tr>
        <tr>
          <td>$color-button-font-dt</td>
          <td>color</td>
          <td>$woodsmoke</td>
        </tr>
        <tr>
          <td>$color-border-dt</td>
          <td>color</td>
          <td>$abbey</td>
        </tr>
        <tr>
          <td>$color-border-light-dt</td>
          <td>color</td>
          <td>$oslo</td>
        </tr>
        <tr>
          <td>$color-code-dt</td>
          <td>color</td>
          <td>$shark</td>
        </tr>
        <tr>
          <td>$color-mute-dt</td>
          <td>color</td>
          <td>darken($abbey, 8%)</td>
        </tr>
        <tr>
          <td>$color-alert-dt</td>
          <td>color</td>
          <td>$oslo</td>
        </tr>
        <tr>
          <td>$color-alert-font-dt</td>
          <td>color</td>
          <td>$shark</td>
        </tr>
        <tr>
          <td>$color-card-dt</td>
          <td>color</td>
          <td>$shark</td>
        </tr>
        <tr>
          <td>$color-link-font-dt</td>
          <td>color</td>
          <td>$oslo</td>
        </tr>
        <tr>
          <td>$color-link-hover-dt</td>
          <td>color</td>
          <td>$ghost</td>
        </tr>
        <tr>
          <td>$color-input-disabled-dt</td>
          <td>color</td>
          <td>rgba($iron, 0.2)</td>
        </tr>
        <tr>
          <td>$color-input-placeholder-dt</td>
          <td>color</td>
          <td>$abbey</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Kırılım Değişkenleri

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