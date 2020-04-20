---
title: 'Bekleme'
mdtype: 'MDHTML'
section: 'loading'
---

Bar, çember ve nokta görünümünde 3 farklı tipte bekleme komponenti oluşturduk. Bar ve çember için [ilerleme barı](/docs/progress 'ilerleme barı') ve [ilerleme çemberi](/docs/progress 'ilerleme çemberi') ile aynı yapı kullanıldı.

## Bekleme Barı

İlerleme çubuğu ile aynı yapıda, `.loading` classını kullanabilir ve bekleme barına dönüştürebilirsiniz.

<div class="gra-s-wrapper">
  <span class="progress-bar loading">
    <span class="progress-bar-value"></span>
  </span>
</div>

```html
<span class="progress-bar loading">
  <span class="progress-bar-value"></span>
</span>
```

## Bekleme Çemberleri

2 farklı tipte bekleme çemberi oluşturduk. İlerleme çemberi ile aynı yapıda, `.loading` classını kullanabilir ve bekleme çemberine dönüştürebilirsiniz. Ancak ilerleme çemberleri için `.circle-turn` ya da `.circle-turn-pieces` classlarından birini de kullanmanız gerekli.

<div class="gra-s-wrapper">
  <div class="progress-circle loading circle-turn-pieces">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="progress-circle-back" cx="40" cy="40" r="33" fill="none"></circle>
      <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none"></circle>
    </svg>
  </div>
</div>

```html
<div class="progress-circle loading circle-turn-pieces">
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle class="progress-circle-back" cx="40" cy="40" r="33" fill="none"></circle>
    <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none"></circle>
  </svg>
</div>
```

<div class="gra-s-wrapper">
  <div class="progress-circle loading circle-turn">
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
      <circle class="progress-circle-back" cx="40" cy="40" r="33" fill="none"></circle>
      <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none"></circle>
    </svg>
  </div>
</div>

```html
<div class="progress-circle loading circle-turn">
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
    <circle class="progress-circle-back" cx="40" cy="40" r="33" fill="none"></circle>
    <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none"></circle>
  </svg>
</div>
```

## Bekleme Noktaları

<div class="gra-s-wrapper">
  <div class="loading-dots">
    <span class="loading-dot dot-1"></span>
    <span class="loading-dot dot-2"></span>
    <span class="loading-dot dot-3"></span>
  </div>
</div>

```html
<div class="loading-dots">
  <span class="loading-dot dot-1"></span>
  <span class="loading-dot dot-2"></span>
  <span class="loading-dot dot-3"></span>
</div>
```

