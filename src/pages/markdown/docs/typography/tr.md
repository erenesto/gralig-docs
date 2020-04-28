---
title: 'Tipografi'
mdtype: 'MDHTML'
section: 'typography'
---

Gralig yazı boyutu için `rem` birimini kullanır. `html` elementi varsayılan yazı boyutunun %62.5'i oranında değere sahiptir ve 10px yazı boyutunu 1rem değerine eşitler. Bu şekilde karmaşık rem-px hesaplaması yapmanıza gerek kalmaz. Ana yazı boyutu 1.6rem'dir ve 16px değerine eşittir.

Yazı tipi olarak [Catamaran](https://fonts.google.com/specimen/Catamaran 'font') kullanıldı ancak kütüphane içerisine dahil edilmedi.

Siz de bu yazı tipini kullanmak isterseniz

`html` içerisinde

```html
<link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400;600&display=swap" rel="stylesheet">
```

`scss` içerisinde

```scss
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400;600&display=swap')
```

şeklinde import edebilir ya da istediğiniz herhangi bir yazı tipini projenize dahil edip kullanabilirsiniz.

## Başlıklar ve Alt Başlıklar

İki çeşit başlık tipi bulunmakta. `.heading` ve `.subheading`

<div class="gra-doc-headings">
  <div class="gra-s-wrapper">
    <div class="heading-wrapper">
      <h1 class="heading">heading</h1>
      <span class="headings-small-info">
        <code>H1</code>4.4rem  (44px)
      </span>
    </div>
    <div class="heading-wrapper">
      <h2 class="heading">heading</h2>
      <span class="headings-small-info">
        <code>H2</code>3.6rem  (36px)
      </span>
    </div>
    <div class="heading-wrapper">
      <h3 class="heading">heading</h3>
      <span class="headings-small-info">
        <code>H3</code>2.8rem  (28px)
      </span>
    </div>
    <div class="heading-wrapper">
      <h4 class="heading">heading</h4>
      <span class="headings-small-info">
        <code>H4</code>2.4rem  (24px)
      </span>
    </div>
    <div class="heading-wrapper">
      <h5 class="heading">heading</h5>
      <span class="headings-small-info">
        <code>H5</code>1.8rem  (18px)
      </span>
    </div>
    <div class="heading-wrapper">
      <h6 class="heading">heading</h6>
      <span class="headings-small-info">
        <code>H6</code>1.6rem  (16px)
      </span>
    </div>
  </div>

```html
<h1 class="heading">heading</h1>
<h2 class="heading">heading</h2>
<h3 class="heading">heading</h3>
<h4 class="heading">heading</h4>
<h5 class="heading">heading</h5>
<h6 class="heading">heading</h6>
```

  <div class="gra-s-wrapper">
    <div class="heading-wrapper">
      <h1 class="subheading">subheading</h1>
      <span class="headings-small-info">
        <code>H1</code>4.4rem  (44px)
      </span>
    </div>
    <div class="heading-wrapper">
      <h2 class="subheading">subheading</h2>
      <span class="headings-small-info">
        <code>H2</code>3.6rem  (36px)
      </span>
    </div>
    <div class="heading-wrapper">
      <h3 class="subheading">subheading</h3>
      <span class="headings-small-info">
        <code>H3</code>2.8rem  (28px)
      </span>
    </div>
    <div class="heading-wrapper">
      <h4 class="subheading">subheading</h4>
      <span class="headings-small-info">
        <code>H4</code>2.4rem  (24px)
      </span>
    </div>
    <div class="heading-wrapper">
      <h5 class="subheading">subheading</h5>
      <span class="headings-small-info">
        <code>H5</code>1.8rem  (18px)
      </span>
    </div>
    <div class="heading-wrapper">
      <h6 class="subheading">subheading</h6>
      <span class="headings-small-info">
        <code>H6</code>1.6rem  (16px)
      </span>
    </div>
  </div>

```html
<h1 class="subheading">subheading</h1>
<h2 class="subheading">subheading</h2>
<h3 class="subheading">subheading</h3>
<h4 class="subheading">subheading</h4>
<h5 class="subheading">subheading</h5>
<h6 class="subheading">subheading</h6>
```

</div>

## Paragraflar

Üç farklı boyutta paragraf oluşturuldu. Normal boyut için herhangi bir class kullanmanız gerekmez. Büyük paragraf için `.p-large` , küçük paragraf için `.p-small` kullanabilirsiniz.

<div class="gra-doc-para">
  <div class="gra-s-wrapper">
    <p class="p-large">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur dolore debitis nostrum rem inventore dicta quidem eaque delectus
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur dolore debitis nostrum rem inventore dicta quidem eaque delectus
    </p>
    <p class="p-small">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur dolore debitis nostrum rem inventore dicta quidem eaque delectus
    </p>
  </div>

```html
<p class="p-large">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur
  dolore debitis nostrum rem inventore dicta quidem eaque delectus
</p>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur
  dolore debitis nostrum rem inventore dicta quidem eaque delectus
</p>
<p class="p-small">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur
  dolore debitis nostrum rem inventore dicta quidem eaque delectus
</p>
```

</div>

## Texts

Aşağıda çeşitli metin türleri sunulmuştur.

<div class="gra-doc-texts">
  <div class="gra-s-wrapper">
    Gralig
    <br />
    <span class="text-secondary">Gralig</span>
    <br />
    <span class="text-green">Gralig</span>
    <br />
    <span class="text-yellow">Gralig</span>
    <br />
    <span class="text-blue">Gralig</span>
    <br />
    <span class="text-red">Gralig</span>
    <br />
    <span class="text-muted">Gralig</span>
    <br />
    <mark class="text-marked">Gralig</mark>
    <br />
    <u>Gralig</u>
    <br />
    <em>Gralig</em>
    <br />
    <del>Gralig</del>
    <br />
    <strong>Gralig</strong>
    <br />
    <code>Gralig</code>
  </div>
</div>

```html
Gralig
<span class="text-secondary">Gralig</span>
<span class="text-green">Gralig</span>
<span class="text-yellow">Gralig</span>
<span class="text-blue">Gralig</span>
<span class="text-red">Gralig</span>
<span class="text-muted">Gralig</span>
<mark class="text-marked">Gralig</mark>
<u>Gralig</u>
<em>Gralig</em>
<del>Gralig</del>
<strong>Gralig</strong>
<code>Gralig</code>
```
