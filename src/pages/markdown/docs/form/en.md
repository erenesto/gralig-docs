---
title: 'Form'
mdtype: 'MDHTML'
section: 'form'
---

Gralig provides simple form elements including custom [checkboxes](/docs/checkbox), [radio buttons](/docs/radio), [switches](/docs/switch) along with simple inputs.

<div class="gra-doc-s-wrapper">
  <div class="gra-form-group">
    <label for="user-content-test-input-text">Name</label>
    <input id="test-input-text" type="text" placeholder="Name" />
  </div>
</div>

```html
<div class="gra-form-group">
  <label for="test-input-text">Name</label>
  <input id="test-input-text" type="text" placeholder="Name" />
</div>
```

## Simple Form Example

<div class="gra-doc-s-wrapper">
  <fieldset class="example-form">
    <legend>
      <h5 class="gra-heading">Gralig Form</h5>
    </legend>
    <div class="gra-form-group">
      <label for="user-content-test-form-input-text">Name</label>
      <input id="test-form-input-text" type="text" placeholder="Name" />
    </div>
    <div class="gra-form-group">
      <label for="user-content-test-form-input-email">Email</label>
      <input id="test-form-input-email" type="email" placeholder="Email" />
    </div>
    <div class="gra-form-group">
      <label>Disabled</label>
      <input type="text" placeholder="disabled" disabled />
    </div>
    <div class="gra-form-group">
      <label>Subscribe</label>
      <div class="radio-group" role="radiogroup">
        <div class="gra-custom-form-control gra-radio">
          <input class="gra-custom-form-input" id="custom-radio" type="radio" name="radio" />
          <label class="gra-custom-form-label" for="user-content-custom-radio">Yes</label>
        </div>
        <div class="gra-custom-form-control gra-radio">
          <input class="gra-custom-form-input" id="custom-radio-2" type="radio" name="radio" />
          <label class="gra-custom-form-label" for="user-content-custom-radio-2">No</label>
        </div>
      </div>
    </div>
    <div class="gra-form-group">
      <label>Accept Terms</label>
      <div class="gra-custom-form-control gra-checkbox">
        <input class="gra-custom-form-input" id="custom-checkbox" type="checkbox" name="checkbox" />
        <label class="gra-custom-form-label" for="user-content-custom-checkbox">Accept</label>
      </div>
    </div>
    <div class="gra-form-actions">
      <button class="gra-btn">Send</button>
      <button class="gra-btn gra-btn-clear">Cancel</button>
    </div>
  </fieldset>
</div>

```html
<form>
  <fieldset class="example-form">
    <legend>
      <h5 class="gra-heading">Gralig Form</h5>
    </legend>
    <div class="gra-form-group">
      <label for="test-text">Name</label>
      <input id="test-text" type="text" placeholder="Name" />
    </div>
    <div class="gra-form-group">
      <label for="test-email">Email</label>
      <input id="test-email" type="email" placeholder="Email" />
    </div>
    <div class="gra-form-group">
      <label>Disabled</label>
      <input type="text" placeholder="Disabled" disabled />
    </div>
    <div class="gra-form-group">
      <label>Subscribe</label>
      <div role="radiogroup">
        <div class="gra-custom-form-control gra-radio">
          <input class="gra-custom-form-input" id="custom-radio" type="radio" name="radio" />
          <label class="gra-custom-form-label" for="custom-radio">Yes</label>
        </div>
        <div class="gra-custom-form-control gra-radio">
          <input class="gra-custom-form-input" id="custom-radio-2" type="radio" name="radio" />
          <label class="gra-custom-form-label" for="custom-radio-2">No</label>
        </div>
      </div>
    </div>
    <div class="gra-form-group">
      <label>Accept Terms</label>
      <div class="gra-custom-form-control gra-checkbox">
        <input class="gra-custom-form-input" id="custom-checkbox" type="checkbox" name="checkbox" />
        <label class="gra-custom-form-label" for="custom-checkbox">Accept</label>
      </div>
    </div>
    <div class="gra-form-actions">
      <button class="gra-btn">Send</button>
      <button class="gra-btn gra-btn-clear">Cancel</button>
    </div>
  </fieldset>
</form>
```

## Search Input

<div class="gra-doc-s-wrapper">
  <span class="gra-search-input">
    <input type="search" name="search" placeholder="Search..." />
  </span>
</div>

```html
<span class="gra-search-input">
  <input type="search" name="search" placeholder="Search..." />
</span>
```

## Textarea

<div class="gra-doc-s-wrapper">
  <div class="gra-form-group">
    <label for="user-content-textarea">Textarea Label</label>
    <textarea id="textarea" name="textarea" placeholder="Textarea content here..."></textarea>
  </div>
</div>

```html
<div class="gra-form-group">
  <label for="textarea">Textarea Label</label>
  <textarea id="textarea" name="textarea" placeholder="Textarea content here..."></textarea>
</div>
```