---
title: 'Radyo Buton'
mdtype: 'MDHTML'
section: 'radio'
---

Özelleştirilmiş radyo butonu kullanmak için input tagine `.gra-custom-form-input` classını, label tagine `.gra-custom-form-label` classını ve kapsayıcısına da `.custom-form-control` ve `.gra-radio` classlarını vermelisiniz.

<div class="gra-doc-s-wrapper">
  <div class="radio-group" role="radiogroup">
    <div class="gra-custom-form-control gra-radio">
      <input class="gra-custom-form-input" id="custom-radio" type="radio" name="radio-c" />
      <label class="gra-custom-form-label" for="user-content-custom-radio">Radyo - 1</label>
    </div>
    <div class="gra-custom-form-control gra-radio">
      <input class="gra-custom-form-input" id="custom-radio-2" type="radio" name="radio-c" />
      <label class="gra-custom-form-label" for="user-content-custom-radio-2">Radyo - 2</label>
    </div>
    <div class="gra-custom-form-control gra-radio">
      <input class="gra-custom-form-input" id="custom-radio-3" type="radio" name="radio-c" disabled />
      <label class="gra-custom-form-label" for="user-content-custom-radio-3">Radyo Devre Dışı</label>
    </div>
  </div>
</div>

```html
<div role="radiogroup">
  <div class="gra-custom-form-control gra-radio">
    <input class="gra-custom-form-input" id="custom-radio" type="radio" name="radio-c" />
    <label class="gra-custom-form-label" for="custom-radio">Radyo - 1</label>
  </div>
  <div class="gra-custom-form-control gra-radio">
    <input class="gra-custom-form-input" id="custom-radio-2" type="radio" name="radio-c" />
    <label class="gra-custom-form-label" for="custom-radio-2">Radyo - 2</label>
  </div>
  <div class="gra-custom-form-control gra-radio">
    <input class="gra-custom-form-input" id="custom-radio-3" type="radio" name="radio-c" disabled />
    <label class="gra-custom-form-label" for="custom-radio-3">Radyo Devre Dışı</label>
  </div>
</div>
```

## Renkler

<div class="gra-doc-s-wrapper">
  <div class="radio-group" role="radiogroup">
    <div class="gra-custom-form-control gra-radio blue">
      <input class="gra-custom-form-input" id="custom-radio-blue" type="radio" name="radio-color"/>
      <label class="gra-custom-form-label" for="user-content-custom-radio-blue">Radyo Mavi</label>
    </div>
    <div class="gra-custom-form-control gra-radio green">
      <input class="gra-custom-form-input" id="custom-radio-green" type="radio" name="radio-color"/>
      <label class="gra-custom-form-label" for="user-content-custom-radio-green">Radyo Yeşil</label>
    </div>
    <div class="gra-custom-form-control gra-radio yellow">
      <input class="gra-custom-form-input" id="custom-radio-yellow" type="radio" name="radio-color"/>
      <label class="gra-custom-form-label" for="user-content-custom-radio-yellow">Radyo Sarı</label>
    </div>
    <div class="gra-custom-form-control gra-radio red">
      <input class="gra-custom-form-input" id="custom-radio-red" type="radio" name="radio-color"/>
      <label class="gra-custom-form-label" for="user-content-custom-radio-red">Radyo Kırmızı</label>
    </div>
  </div>
</div>

```html
<div role="radiogroup">
  <div class="gra-custom-form-control gra-radio blue">
    <input class="gra-custom-form-input" id="custom-radio-blue" type="radio" name="radio-color"/>
    <label class="gra-custom-form-label" for="custom-radio-blue">Radyo Mavi</label>
  </div>
  <div class="gra-custom-form-control gra-radio green">
    <input class="gra-custom-form-input" id="custom-radio-green" type="radio" name="radio-color"/>
    <label class="gra-custom-form-label" for="custom-radio-green">Radyo Yeşil</label>
  </div>
  <div class="gra-custom-form-control gra-radio yellow">
    <input class="gra-custom-form-input" id="custom-radio-yellow" type="radio" name="radio-color"/>
    <label class="gra-custom-form-label" for="custom-radio-yellow">Radyo Sarı</label>
  </div>
  <div class="gra-custom-form-control gra-radio red">
    <input class="gra-custom-form-input" id="custom-radio-red" type="radio" name="radio-color"/>
    <label class="gra-custom-form-label" for="custom-radio-red">Radyo Kırmızı</label>
  </div>
</div>
```