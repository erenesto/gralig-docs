---
title: 'Custom Inputs'
mdtype: 'MDHTML'
section: 'custom-inputs'
---

For using our customized inputs, you need to use `.gra-custom-form-input` class for input, `.gra-custom-form-label` class for label and `.gra-custom-form-control` class for the wrapper.

In addition, as you will see in the examples below, you should use the name of the relevant input next to the container class.

## Checkbox

<div class="gra-doc-s-wrapper">
  <div class="gra-custom-form-control gra-checkbox">
    <input class="gra-custom-form-input" id="custom-checkbox" type="checkbox"  />
    <label class="gra-custom-form-label" for="user-content-custom-checkbox">Checkbox</label>
  </div>
  <div class="gra-custom-form-control gra-checkbox">
    <input class="gra-custom-form-input" id="custom-checkbox-2" type="checkbox" disabled checked/>
    <label class="gra-custom-form-label" for="custom-checkbox-2">Checkbox Disabled</label>
  </div>
</div>

```html
<div class="gra-custom-form-control gra-checkbox">
  <input class="gra-custom-form-input" id="custom-checkbox" type="checkbox"  />
  <label class="gra-custom-form-label" for="custom-checkbox">Checkbox</label>
</div>
<div class="gra-custom-form-control gra-checkbox">
  <input class="gra-custom-form-input" id="custom-checkbox-2" type="checkbox" disabled checked/>
  <label class="gra-custom-form-label" for="custom-checkbox-2">Checkbox Disabled</label>
</div>
```

[More Examples](/docs/checkbox 'More Examples')

## Radio

<div class="gra-doc-s-wrapper">
  <div class="radio-group" role="radiogroup">
    <div class="gra-custom-form-control gra-radio">
      <input class="gra-custom-form-input" id="custom-radio" type="radio" name="radio-c" />
      <label class="gra-custom-form-label" for="user-content-custom-radio">Radio - 1</label>
    </div>
    <div class="gra-custom-form-control gra-radio">
      <input class="gra-custom-form-input" id="custom-radio-2" type="radio" name="radio-c" />
      <label class="gra-custom-form-label" for="user-content-custom-radio-2">Radio - 2</label>
    </div>
    <div class="gra-custom-form-control gra-radio">
      <input class="gra-custom-form-input" id="custom-radio-3" type="radio" name="radio-c" disabled/>
      <label class="gra-custom-form-label" for="user-content-custom-radio-3">Radio Disabled</label>
    </div>
  </div>
</div>

```html
<div role="radiogroup">
  <div class="gra-custom-form-control gra-radio">
    <input class="gra-custom-form-input" id="custom-radio" type="radio" name="radio-c" />
    <label class="gra-custom-form-label" for="custom-radio">Radio - 1</label>
  </div>
  <div class="gra-custom-form-control gra-radio">
    <input class="gra-custom-form-input" id="custom-radio-2" type="radio" name="radio-c" />
    <label class="gra-custom-form-label" for="custom-radio-2">Radio - 2</label>
  </div>
  <div class="gra-custom-form-control gra-radio">
    <input class="gra-custom-form-input" id="custom-radio-3" type="radio" name="radio-c" disabled/>
    <label class="gra-custom-form-label" for="custom-radio-3">Radio Disabled</label>
  </div>
</div>
```

[More Examples](/docs/radio 'More Examples')

## Switch

<div class="gra-doc-s-wrapper">
  <div class="gra-custom-form-control gra-switch">
    <input class="gra-custom-form-input" id="custom-switch" type="checkbox" name="" />
    <label class="gra-custom-form-label" for="user-content-custom-switch">Switch</label>
  </div>
  <div class="gra-custom-form-control gra-switch">
    <input class="gra-custom-form-input" id="switch-disable" type="checkbox" disabled checked />
    <label class="gra-custom-form-label" for="switch-disable">Switch Disabled</label>
  </div>
</div>

```html
<div class="gra-custom-form-control gra-switch">
  <input class="gra-custom-form-input" id="custom-switch" type="checkbox" name="" />
  <label class="gra-custom-form-label" for="custom-switch">Switch</label>
</div>
<div class="gra-custom-form-control gra-switch">
  <input class="gra-custom-form-input" id="switch-disable" type="checkbox" disabled checked />
  <label class="gra-custom-form-label" for="switch-disable">Switch Disabled</label>
</div>
```

[More Examples](/docs/switch 'More Examples')
