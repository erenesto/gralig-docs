---
title: 'Bekleme'
mdtype: 'MDHTML'
section: 'loading'
---

Bar, çember ve nokta görünümünde 3 farklı tipte bekleme komponenti oluşturduk. Bar ve çember için [ilerleme barı](/docs/progress 'ilerleme barı') ve [ilerleme çemberi](/docs/progress 'ilerleme çemberi') ile aynı yapı kullanıldı.

## Bekleme Barı

İlerleme çubuğu ile aynı yapıda, `.gra-loading` classını kullanabilir ve bekleme barına dönüştürebilirsiniz.

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

## Bekleme Çemberleri

2 farklı tipte bekleme çemberi oluşturduk. İlerleme çemberi ile aynı yapıda, `.gra-loading` classını kullanabilir ve bekleme çemberine dönüştürebilirsiniz. Ancak ilerleme çemberleri için `.gra-circle-turn` ya da `.gra-circle-turn-pieces` classlarından birini de kullanmanız gerekli.

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

## Bekleme Noktaları

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

