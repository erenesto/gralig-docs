---
title: 'İlerleme'
mdtype: 'MDHTML'
section: 'progress'
---

Bar ve çember görünümünde 2 farklı tipte ilerleme komponenti oluşturduk. `.small`, normal ve `.large` boyutlarında kullanabilirsiniz.


## İlerleme Barı

İlerleme barı için yüzdelik değer küçükten büyüğe doğru `translateX(-100%)` ve `translateX(0%)` arasındadır.

<div class="gra-doc-s-wrapper">
  <span class="gra-progress-bar">
    <span class="gra-progress-bar-value" style="transform: translateX(-80%);"></span>
  </span>
</div>

```html
<span class="gra-progress-bar">
  <span class="gra-progress-bar-value" style="transform: translateX(-80%);"></span>
</span>
```

### Boyutlar

<div class="gra-doc-s-wrapper">
  <span class="gra-progress-bar small">
    <span class="gra-progress-bar-value" style="transform: translateX(-80%);"></span>
  </span>
  <span class="gra-progress-bar">
    <span class="gra-progress-bar-value" style="transform: translateX(-60%);"></span>
  </span>
  <span class="gra-progress-bar large">
    <span class="gra-progress-bar-value" style="transform: translateX(-40%);"></span>
  </span>
</div>

```html
<span class="gra-progress-bar small">
  <span class="gra-progress-bar-value" style="transform: translateX(-80%);"></span>
</span>
<span class="gra-progress-bar">
  <span class="gra-progress-bar-value" style="transform: translateX(-60%);"></span>
</span>
<span class="gra-progress-bar large">
  <span class="gra-progress-bar-value" style="transform: translateX(-40%);"></span>
</span>
```

### Renkler

<div class="gra-doc-s-wrapper">
  <span class="gra-progress-bar">
    <span class="gra-progress-bar-value blue" style="transform: translateX(-70%);"></span>
  </span>
  <span class="gra-progress-bar">
    <span class="gra-progress-bar-value green" style="transform: translateX(-60%);"></span>
  </span>
  <span class="gra-progress-bar">
    <span class="gra-progress-bar-value yellow" style="transform: translateX(-50%);"></span>
  </span>
  <span class="gra-progress-bar">
    <span class="gra-progress-bar-value red" style="transform: translateX(-40%);"></span>
  </span>
</div>

```html
<span class="gra-progress-bar">
  <span class="gra-progress-bar-value blue" style="transform: translateX(-70%);"></span>
</span>
<span class="gra-progress-bar">
  <span class="gra-progress-bar-value green" style="transform: translateX(-60%);"></span>
</span>
<span class="gra-progress-bar">
  <span class="gra-progress-bar-value yellow" style="transform: translateX(-50%);"></span>
</span>
<span class="gra-progress-bar">
  <span class="gra-progress-bar-value red" style="transform: translateX(-40%);"></span>
</span>
```

## İlerleme Çemberi

İlerleme çemberi oluşturmak için satır içi svg kullandık. Çemberin değeri, `.gra-progress-circle-value` sınıfına sahip `<circle>` ile temsil edilmekte. Çemberin değeriyle oynamak için `stroke-dashoffset` kullanmalısınız. %0 anlamına gelen çemberin en küçük değeri `stroke-dashoffset: 380` ve en büyük değeri olan %100 `stroke-dashoffset: 172` ile eşdeğerdir.

<div class="gra-doc-s-wrapper">
  <div class="gra-progress-circle">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="gra-progress-circle-back" cx="40" cy="40" r="33" fill="none"></circle>
      <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
    </svg>
  </div>
</div>

```html
<div class="gra-progress-circle">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="gra-progress-circle-back" cx="40" cy="40" r="33" fill="none"></circle>
    <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
  </svg>
</div>
```

### Boyutlar

<div class="gra-doc-s-wrapper gra-progress-circle-wrapper">
 <div class="gra-progress-circle small">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="gra-progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
      <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
    </svg>
  </div>
  <div class="gra-progress-circle">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="gra-progress-circle-back" cx="40" cy="40" r="33" fill="none"></circle>
      <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
    </svg>
  </div>
  <div class="gra-progress-circle large">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="gra-progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
      <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
    </svg>
  </div>
</div>

```html
<div class="gra-progress-circle small">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="gra-progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
    <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
  </svg>
</div>
<div class="gra-progress-circle">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="gra-progress-circle-back" cx="40" cy="40" r="33" fill="none"></circle>
    <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
  </svg>
</div>
<div class="gra-progress-circle large">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="gra-progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
    <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
  </svg>
</div>
```

### Renkler

<div class="gra-doc-s-wrapper gra-progress-circle-wrapper">
  <div class="gra-progress-circle blue">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="gra-progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
      <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
    </svg>
  </div>
  <div class="gra-progress-circle green">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="gra-progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
      <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
    </svg>
  </div>
  <div class="gra-progress-circle yellow">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="gra-progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
      <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
    </svg>
  </div>
  <div class="gra-progress-circle red">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="gra-progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
      <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
    </svg>
  </div>
</div>

```html
<div class="gra-progress-circle blue">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="gra-progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
    <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
  </svg>
</div>
<div class="gra-progress-circle green">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="gra-progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
    <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
  </svg>
</div>
<div class="gra-progress-circle yellow">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="gra-progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
    <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
  </svg>
</div>
<div class="gra-progress-circle red">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="gra-progress-circle-back" cx="40" cy="40" r="35" fill="none"></circle>
    <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" style="stroke-dashoffset: 240"></circle>
  </svg>
</div>
```
