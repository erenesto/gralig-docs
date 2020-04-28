---
title: 'Karanlık Mod'
mdtype: 'MDHTML'
section: 'dark-mode'
---

## Karanlık Modu Etkinleştirme

Gralig içerisinde hazır olarak gelen karanlık modu kullanmak için `.dark` classını kullanabilirsiniz. Projeyi kapsayan elementte ya da `body` etiketinde kullanın.

```html
<body class="dark">

</body>
```

## Kullanılan Map

Aşağıdaki gibi bir scss map kullanıldı;

```scss
$modes: (
  dark: (
    transparentColor: $transparent, // değer olarak herhangi bir scss değişkeni ya da css yazarken kullandığınız herhangi bir değeri kullanabilirsiniz.
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

## SCSS İçerisinde Kullanımı

İlgili `scss` dosyalarını import edin.

```scss
@import 'gralig/scss/abstracts/all.scss';
@import 'gralig/scss/modes/modes.scss';
```

`moder` mixini ve `mode()` fonksiyonunu map dosyanızdaki ilgili key ile scss dosyanız içerisinde kullanabilirsiniz.

Örnek;

```scss
.subheading {
  color: $color-font-secondary;
  font-weight: $font-normal;
  @include moder($modes) {
    color: mode("colorFontSecondary");
  }
}
```

## Düzenlemek ya da Eklemek

If you will use new mode or overwrite existing mod, you should create `$modes` map and add your mod inside it. If you will use more than one mode, you should use same key names for each mode.

Yeni bir mod oluşturmak isterseniz ya da hali hazırda olanı değiştirmek isterseniz, öncelikle `$modes` adında bir map oluşturup istediğiniz modları içerisine ekleyebilirsiniz. Birden çok mod ekleyecekseniz, her biri için aynı isimde keyler oluşturmalısınız.

Örnek;

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