---
title: 'Radyo Buton'
mdtype: 'MDHTML'
section: 'radio'
---

Özelleştirilmiş radyo butonu kullanmak için input tagine `.custom-form-input` classını, label tagine `.custom-form-label` classını ve kapsayıcısına da `.custom-form-control` ve `.radio` classlarını vermelisiniz.

<div class="gra-s-wrapper">
  <div class="radio-group" role="radiogroup">
    <div class="custom-form-control radio">
      <input class="custom-form-input" id="custom-radio" type="radio" name="radio-c" />
      <label class="custom-form-label" for="user-content-custom-radio">Radyo - 1</label>
    </div>
    <div class="custom-form-control radio">
      <input class="custom-form-input" id="custom-radio-2" type="radio" name="radio-c" />
      <label class="custom-form-label" for="user-content-custom-radio-2">Radyo - 2</label>
    </div>
    <div class="custom-form-control radio">
      <input class="custom-form-input" id="custom-radio-3" type="radio" name="radio-c" disabled />
      <label class="custom-form-label" for="user-content-custom-radio-3">Radyo Devre Dışı</label>
    </div>
  </div>
</div>

```html
<div class="radio-group" role="radiogroup">
  <div class="custom-form-control radio">
    <input class="custom-form-input" id="custom-radio" type="radio" name="radio-c" />
    <label class="custom-form-label" for="custom-radio">Radyo - 1</label>
  </div>
  <div class="custom-form-control radio">
    <input class="custom-form-input" id="custom-radio-2" type="radio" name="radio-c" />
    <label class="custom-form-label" for="custom-radio-2">Radyo - 2</label>
  </div>
  <div class="custom-form-control radio">
    <input class="custom-form-input" id="custom-radio-3" type="radio" name="radio-c" disabled />
    <label class="custom-form-label" for="custom-radio-3">Radyo Devre Dışı</label>
  </div>
</div>
```

## Renkler

<div class="gra-s-wrapper">
  <div class="radio-group" role="radiogroup">
    <div class="custom-form-control radio blue">
      <input class="custom-form-input" id="custom-radio-blue" type="radio" name="radio-color"/>
      <label class="custom-form-label" for="user-content-custom-radio-blue">Radyo Mavi</label>
    </div>
    <div class="custom-form-control radio green">
      <input class="custom-form-input" id="custom-radio-green" type="radio" name="radio-color"/>
      <label class="custom-form-label" for="user-content-custom-radio-green">Radyo Yeşil</label>
    </div>
    <div class="custom-form-control radio yellow">
      <input class="custom-form-input" id="custom-radio-yellow" type="radio" name="radio-color"/>
      <label class="custom-form-label" for="user-content-custom-radio-yellow">Radyo Sarı</label>
    </div>
    <div class="custom-form-control radio red">
      <input class="custom-form-input" id="custom-radio-red" type="radio" name="radio-color"/>
      <label class="custom-form-label" for="user-content-custom-radio-red">Radyo Kırmızı</label>
    </div>
  </div>
</div>

```html
<div class="radio-group" role="radiogroup">
  <div class="custom-form-control radio blue">
    <input class="custom-form-input" id="custom-radio-blue" type="radio" name="radio-color"/>
    <label class="custom-form-label" for="custom-radio-blue">Radyo Mavi</label>
  </div>
  <div class="custom-form-control radio green">
    <input class="custom-form-input" id="custom-radio-green" type="radio" name="radio-color"/>
    <label class="custom-form-label" for="custom-radio-green">Radyo Yeşil</label>
  </div>
  <div class="custom-form-control radio yellow">
    <input class="custom-form-input" id="custom-radio-yellow" type="radio" name="radio-color"/>
    <label class="custom-form-label" for="custom-radio-yellow">Radyo Sarı</label>
  </div>
  <div class="custom-form-control radio red">
    <input class="custom-form-input" id="custom-radio-red" type="radio" name="radio-color"/>
    <label class="custom-form-label" for="custom-radio-red">Radyo Kırmızı</label>
  </div>
</div>
```