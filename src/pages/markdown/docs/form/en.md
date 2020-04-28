---
title: 'Form'
mdtype: 'MDHTML'
section: 'form'
---

Gralig provides simple form elements including custom [checkboxes](/docs/checkbox), [radio buttons](/docs/radio), [switches](/docs/switch) along with simple inputs.

<div class="gra-s-wrapper">
  <div class="form-group">
    <label for="user-content-test-input-text">Name</label>
    <input id="test-input-text" type="text" placeholder="Name" />
  </div>
</div>

```html
<div class="form-group">
  <label for="user-content-test-input-text">Name</label>
  <input id="test-input-text" type="text" placeholder="Name" />
</div>
```

## Simple Form Example

<div class="gra-s-wrapper">
  <fieldset class="example-form">
    <legend>
      <h5 class="heading">Gralig Form</h5>
    </legend>
    <div class="form-group">
      <label for="user-content-test-form-input-text">Name</label>
      <input id="test-form-input-text" type="text" placeholder="Name" />
    </div>
    <div class="form-group">
      <label for="user-content-test-form-input-email">Email</label>
      <input id="test-form-input-email" type="email" placeholder="Email" />
    </div>
    <div class="form-group">
      <label>Disabled</label>
      <input type="text" placeholder="disabled" disabled />
    </div>
    <div class="form-group">
      <label>Subscribe</label>
      <div class="radio-group" role="radiogroup">
        <div class="custom-form-control radio">
          <input class="custom-form-input" id="custom-radio" type="radio" name="radio" />
          <label class="custom-form-label" for="user-content-custom-radio">Yes</label>
        </div>
        <div class="custom-form-control radio">
          <input class="custom-form-input" id="custom-radio-2" type="radio" name="radio" />
          <label class="custom-form-label" for="user-content-custom-radio-2">No</label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label>Accept Terms</label>
      <div class="custom-form-control checkbox">
        <input class="custom-form-input" id="custom-checkbox" type="checkbox" name="checkbox" />
        <label class="custom-form-label" for="user-content-custom-checkbox">Accept</label>
      </div>
    </div>
    <div class="form-actions">
      <button class="btn">Send</button>
      <button class="btn btn-clear">Cancel</button>
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
      <label for="user-content-test-form-input-text">Name</label>
      <input id="test-input-text" type="text" placeholder="Name" />
    </div>
    <div class="form-group">
      <label for="user-content-test-form-input-email">Email</label>
      <input id="test-form-input-email" type="email" placeholder="Email" />
    </div>
    <div class="form-group">
      <label>Disabled</label>
      <input type="text" placeholder="Disabled" disabled />
    </div>
    <div class="form-group">
      <label>Subscribe</label>
      <div class="radio-group" role="radiogroup">
        <div class="custom-form-control radio">
          <input class="custom-form-input" id="custom-radio" type="radio" name="radio" />
          <label class="custom-form-label" for="custom-radio">Yes</label>
        </div>
        <div class="custom-form-control radio">
          <input class="custom-form-input" id="custom-radio-2" type="radio" name="radio" />
          <label class="custom-form-label" for="custom-radio-2">No</label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label>Accept Terms</label>
      <div class="custom-form-control checkbox">
        <input class="custom-form-input" id="custom-checkbox" type="checkbox" name="checkbox" />
        <label class="custom-form-label" for="custom-checkbox">Accept</label>
      </div>
    </div>
    <div class="form-actions">
      <button class="btn">Send</button>
      <button class="btn btn-clear">Cancel</button>
    </div>
  </fieldset>
</form>
```

## Search Input

<div class="gra-s-wrapper">
  <span class="search-input">
    <input type="search" name="search" placeholder="Search..." />
  </span>
</div>

```html
<span class="search-input">
  <input type="search" name="search" placeholder="Search..." />
</span>
```

## Textarea

<div class="gra-s-wrapper">
  <div class="form-group">
    <label for="user-content-textarea">Textarea Label</label>
    <textarea id="textarea" name="textarea" placeholder="Textarea content here..."></textarea>
  </div>
</div>

```html
<div class="form-group">
  <label for="textarea">Textarea Label</label>
  <textarea id="textarea" name="textarea" placeholder="Textarea content here..."></textarea>
</div>
```