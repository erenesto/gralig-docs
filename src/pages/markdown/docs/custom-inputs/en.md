---
title: 'Custom Inputs'
mdtype: 'MDHTML'
section: 'custom-inputs'
---

For using our customized inputs, you need to use `.custom-form-input` class for input, `.custom-form-label` class for label and `.custom-form-control` class for the wrapper.

Which one you are going to use between checkbox, radio or switch, you have to use their name with wrapper class.

## Checkbox

<div class="gra-s-wrapper">
  <div class="custom-form-control checkbox">
    <input class="custom-form-input" id="custom-checkbox" type="checkbox"  />
    <label class="custom-form-label" for="user-content-custom-checkbox">Checkbox</label>
  </div>
  <div class="custom-form-control checkbox">
    <input class="custom-form-input" id="custom-checkbox-2" type="checkbox" disabled checked/>
    <label class="custom-form-label" for="custom-checkbox-2">Checkbox Disabled</label>
  </div>
</div>

```html
<div class="custom-form-control checkbox">
  <input class="custom-form-input" id="custom-checkbox" type="checkbox"  />
  <label class="custom-form-label" for="custom-checkbox">Checkbox</label>
</div>
<div class="custom-form-control checkbox">
  <input class="custom-form-input" id="custom-checkbox-2" type="checkbox" disabled checked/>
  <label class="custom-form-label" for="custom-checkbox-2">Checkbox Disabled</label>
</div>
```

[More Examples](/docs/checkbox 'More Examples')

## Radio

<div class="gra-s-wrapper">
  <div class="radio-group" role="radiogroup">
    <div class="custom-form-control radio">
      <input class="custom-form-input" id="custom-radio" type="radio" name="radio-c" />
      <label class="custom-form-label" for="user-content-custom-radio">Radio - 1</label>
    </div>
    <div class="custom-form-control radio">
      <input class="custom-form-input" id="custom-radio-2" type="radio" name="radio-c" />
      <label class="custom-form-label" for="user-content-custom-radio-2">Radio - 2</label>
    </div>
    <div class="custom-form-control radio">
      <input class="custom-form-input" id="custom-radio-3" type="radio" name="radio-c" disabled/>
      <label class="custom-form-label" for="user-content-custom-radio-3">Radio Disabled</label>
    </div>
  </div>
</div>

```html
<div class="radio-group" role="radiogroup">
  <div class="custom-form-control radio">
    <input class="custom-form-input" id="custom-radio" type="radio" name="radio-c" />
    <label class="custom-form-label" for="custom-radio">Radio - 1</label>
  </div>
  <div class="custom-form-control radio">
    <input class="custom-form-input" id="custom-radio-2" type="radio" name="radio-c" />
    <label class="custom-form-label" for="custom-radio-2">Radio - 2</label>
  </div>
  <div class="custom-form-control radio">
    <input class="custom-form-input" id="custom-radio-3" type="radio" name="radio-c" disabled/>
    <label class="custom-form-label" for="custom-radio-3">Radio Disabled</label>
  </div>
</div>
```

[More Examples](/docs/radio 'More Examples')

## Switch

<div class="gra-s-wrapper">
  <div class="custom-form-control switch">
    <input class="custom-form-input" id="custom-switch" type="checkbox" name="" />
    <label class="custom-form-label" for="user-content-custom-switch">Switch</label>
  </div>
  <div class="custom-form-control switch">
    <input class="custom-form-input" id="switch-disable" type="checkbox" disabled checked />
    <label class="custom-form-label" for="switch-disable">Switch Disabled</label>
  </div>
</div>

```html
<div class="custom-form-control switch">
  <input class="custom-form-input" id="custom-switch" type="checkbox" name="" />
  <label class="custom-form-label" for="custom-switch">Switch</label>
</div>
<div class="custom-form-control switch">
  <input class="custom-form-input" id="switch-disable" type="checkbox" disabled checked />
  <label class="custom-form-label" for="switch-disable">Switch Disabled</label>
</div>
```

[More Examples](/docs/switch 'More Examples')
