---
title: 'Form'
mdtype: 'MDHTML'
section: 'form'
---

Gralig özelleştirilmiş [onay butonları](/docs/checkbox), [radyo butonları](/docs/radio), [anahtar butonları](/docs/switch) ve basit inputlar içeren form öğeleri sağlar.

<div class="gra-s-wrapper">
  <div class="form-group">
    <label for="user-content-test-input-text">Adınız</label>
    <input id="test-input-text" type="text" placeholder="Adınız" />
  </div>
</div>

```html
<div class="form-group">
  <label for="user-content-test-input-text">Adınız</label>
  <input id="test-input-text" type="text" placeholder="Adınız" />
</div>
```

## Basit Form Örneği

<div class="gra-s-wrapper">
  <fieldset class="example-form">
    <legend>
      <h5 class="heading">Gralig Form</h5>
    </legend>
    <div class="form-group">
      <label for="user-content-test-form-input-text">Adınız</label>
      <input id="test-form-input-text" type="text" placeholder="Adınız" />
    </div>
    <div class="form-group">
      <label for="user-content-test-form-input-email">Email Adresiniz</label>
      <input id="test-form-input-email" type="email" placeholder="Email Adresiniz" />
    </div>
    <div class="form-group">
      <label>Devre Dışı</label>
      <input type="text" placeholder="Devre Dışı" disabled />
    </div>
    <div class="form-group">
      <label>Abone Olun</label>
      <div class="radio-group" role="radiogroup">
        <div class="custom-form-control radio">
          <input class="custom-form-input" id="custom-radio" type="radio" name="radio" />
          <label class="custom-form-label" for="user-content-custom-radio">Evet</label>
        </div>
        <div class="custom-form-control radio">
          <input class="custom-form-input" id="custom-radio-2" type="radio" name="radio" />
          <label class="custom-form-label" for="user-content-custom-radio-2">Hayır</label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label>Kullanım Şartları</label>
      <div class="custom-form-control checkbox">
        <input class="custom-form-input" id="custom-checkbox" type="checkbox" name="checkbox" />
        <label class="custom-form-label" for="user-content-custom-checkbox">Onay</label>
      </div>
    </div>
    <div class="form-actions">
      <button class="btn">Gönder</button>
      <button class="btn btn-clear">İptal Et</button>
    </div>
  </fieldset>
</div>

```html
<form>
  <fieldset class="example-form">
    <legend>
      <h5 class="heading">Gralig Form</h5>
    </legend>
    <div class="form-group">
      <label for="test-form-input-text">Adınız</label>
      <input id="test-form-input-text" type="text" placeholder="Adınız" />
    </div>
    <div class="form-group">
      <label for="test-form-input-email">Email Adresiniz</label>
      <input id="test-form-input-email" type="email" placeholder="Email Adresiniz" />
    </div>
    <div class="form-group">
      <label>Devre Dışı</label>
      <input type="text" placeholder="Devre Dışı" disabled />
    </div>
    <div class="form-group">
      <label>Abone Olun</label>
      <div class="radio-group" role="radiogroup">
        <div class="custom-form-control radio">
          <input class="custom-form-input" id="custom-radio" type="radio" name="radio" />
          <label class="custom-form-label" for="custom-radio">Evet</label>
        </div>
        <div class="custom-form-control radio">
          <input class="custom-form-input" id="custom-radio-2" type="radio" name="radio" />
          <label class="custom-form-label" for="custom-radio-2">Hayır</label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label>Kullanım Şartları</label>
      <div class="custom-form-control checkbox">
        <input class="custom-form-input" id="custom-checkbox" type="checkbox" name="checkbox" />
        <label class="custom-form-label" for="custom-checkbox">Onay</label>
      </div>
    </div>
    <div class="form-actions">
      <button class="btn">Gönder</button>
      <button class="btn btn-clear">İptal Et</button>
    </div>
  </fieldset>
</form>
```

## Arama Çubuğu

<div class="gra-s-wrapper">
  <span class="search-input">
    <input type="search" name="search" placeholder="Ara..." />
  </span>
</div>

```html
<span class="search-input">
  <input type="search" name="search" placeholder="Ara..." />
</span>
```

## Metin Alanı

<div class="gra-s-wrapper">
  <div class="form-group">
    <label for="user-content-textarea">Metin Alanı</label>
    <textarea id="textarea" name="textarea" placeholder="Metninizi yazın..."></textarea>
  </div>
</div>

```html
<div class="form-group">
    <label for="user-content-textarea">Metin Alanı</label>
    <textarea id="textarea" name="textarea" placeholder="Metninizi yazın..."></textarea>
  </div>
```
