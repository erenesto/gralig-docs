---
title: 'Özel İnputlar'
mdtype: 'MDHTML'
section: 'custom-inputs'
---

Özelleştirilmiş inputları kullanırken input tagine `.gra-custom-form-input` classını, label tagine `.gra-custom-form-label` classını ve kapsayıcısına da `.gra-custom-form-control` classını vermelisiniz.

Bunun yanı sıra, aşağıdaki örneklerde de göreceğiniz gibi kapsayıcı classının yanında ilgili inputun adını kullanmalısınız. (Örn: gra-checkbox)

## Onay Butonu

<div class="gra-doc-s-wrapper">
  <div class="gra-custom-form-control gra-checkbox">
    <input class="gra-custom-form-input" id="custom-checkbox" type="checkbox"  />
    <label class="gra-custom-form-label" for="user-content-custom-checkbox">Onay Butonu</label>
  </div>
  <div class="gra-custom-form-control gra-checkbox">
    <input class="gra-custom-form-input" id="custom-checkbox-2" type="checkbox" disabled checked />
    <label class="gra-custom-form-label" for="custom-checkbox-2">Onay Butonu Devre Dışı</label>
  </div>
</div>

```html
<div class="gra-custom-form-control gra-checkbox">
  <input class="gra-custom-form-input" id="custom-checkbox" type="checkbox"  />
  <label class="gra-custom-form-label" for="custom-checkbox">Onay Butonu</label>
</div>
<div class="gra-custom-form-control gra-checkbox">
  <input class="gra-custom-form-input" id="custom-checkbox-2" type="checkbox" disabled checked />
  <label class="gra-custom-form-label" for="custom-checkbox-2">Onay Butonu Devre Dışı</label>
</div>
```

[Daha fazla örnek](/docs/checkbox 'Daha Fazla')


## Radyo Buton

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

[Daha fazla örnek](/docs/radio 'Daha Fazla')

## Anahtar

<div class="gra-doc-s-wrapper">
  <div class="gra-custom-form-control gra-switch">
    <input class="gra-custom-form-input" id="custom-switch" type="checkbox"  />
    <label class="gra-custom-form-label" for="user-content-custom-switch">Anahtar</label>
  </div>
  <div class="gra-custom-form-control gra-switch">
    <input class="gra-custom-form-input" id="switch-disable" type="checkbox" disabled checked />
    <label class="gra-custom-form-label" for="user-content-switch-disable">Anahtar Devre Dışı</label>
  </div>
</div>

```html
<div class="gra-custom-form-control gra-switch">
  <input class="gra-custom-form-input" id="custom-switch" type="checkbox"  />
  <label class="gra-custom-form-label" for="custom-switch">Anahtar</label>
</div>
<div class="gra-custom-form-control gra-switch">
  <input class="gra-custom-form-input" id="switch-disable" type="checkbox" disabled checked />
  <label class="gra-custom-form-label" for="switch-disable">Anahtar Devre Dışı</label>
</div>
```

[Daha fazla örnek](/docs/switch 'Daha Fazla')
