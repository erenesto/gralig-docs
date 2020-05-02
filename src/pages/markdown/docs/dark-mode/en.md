---
title: 'Dark Mode'
mdtype: 'MDHTML'
section: 'dark-mode'
---

## Activating Dark Mod

You can use `.dark` class to use the dark mode offered by Gralig. Simply use it on wrapper element of your project or use it in `body` tag.

```html
<body class="dark">

</body>
```

_You can switch to dark mode on navbar and see how the elements look in this mode._

## Our Map

We prepared scss map like this;

```scss
$modes: (
  dark: (
    transparentColor: $transparent, // as a value, you can use a scss variable or any value you use in css.
    colorMain: $color-main-dt,
    colorSecondary: $color-secondary-dt,
    colorBackground: $color-background-dt,
    colorFont: $color-font-dt,
    colorFontSecondary: $color-font-secondary-dt,
    colorFontButton: $color-button-font-dt,
    colorFontRevert: $color-font-revert-dt,
    colorBorder: $color-border-dt,
    colorBorderLight: $color-border-light-dt,
    colorCode: $color-code-dt,
    colorMute: $color-mute-dt,
    colorAlert: $color-alert-dt,
    colorAlertFont: $color-alert-font-dt,
    colorCardBg: $color-card-dt,
    colorLinkFont: $color-link-font-dt,
    colorLinkHover: $color-link-hover-dt,
    colorInputDisabled: $color-input-disabled-dt,
    colorInputPlaceholder: $color-input-placeholder-dt,
    colorLoadings: $color-main-dt,
    colorIcon: $color-background-dt
  )
);
```

## Usage Inside SCSS

First you have to import relevant `scss` files.

```scss
@import 'gralig/scss/abstracts/all.scss';
@import 'gralig/scss/modes/modes.scss';
```

Usage inside scss, you can use `moder` mixin and `mode()` function with map key which you want to use.

Example;

```scss
.subheading {
  color: $color-font-secondary;
  font-weight: $font-normal;
  @include moder($modes) {
    color: mode("colorFontSecondary");
  }
}
```

## Editing or Adding

If you will use new mode or overwrite existing mod, you should create `$modes` map and add your mod inside it. If you will use more than one mode, you should use same key names for each mode.

Example;

```scss
$modes: (
  dark: (
    mainColor: black,
    font: 'Roboto', sans-serif
  ),
  blueTheme: (
    mainColor: blue,
    font: 'Catamaran', sans-serif
  )
);
```