---
title: 'Izgara'
mdtype: 'MDHTML'
section: 'grid'
---

Gralig flexbox tabanlı çok basit bir ızgara(grid) sistemi kullanır. `.row` kapsayıcısı içinde istediğiniz kadar `.col` kullanabilirsiniz, ancak aşağıdaki sütun boyutlarını kullanmanızı öneririz.

_This col or span views below are for example to see. They will not show up in normal usage._

## Sütunlar

<div class="gra-s-wrapper">
  <div class="row">
    <div class="col">
      <span class="col-test">col</span>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <span class="col-test">col</span>
    </div>
    <div class="col">
      <span class="col-test">col</span>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <span class="col-test">col</span>
    </div>
    <div class="col">
      <span class="col-test">col</span>
    </div>
    <div class="col">
      <span class="col-test">col</span>
    </div>
    <div class="col">
      <span class="col-test">col</span>
    </div>
    <div class="col">
      <span class="col-test">col</span>
    </div>
    <div class="col">
      <span class="col-test">col</span>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col">col</div>
  </div>
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
</div>
```

## Sütun Boyutları

<div class="gra-s-wrapper">
  <div class="row">
    <div class="col col-10">
      <span class="col-test">col-10</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-16">
      <span class="col-test">col-16</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-20">
      <span class="col-test">col-20</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-25">
      <span class="col-test">col-25</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-30">
      <span class="col-test">col-30</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-33">
      <span class="col-test">col-33</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-40">
      <span class="col-test">col-40</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-50">
      <span class="col-test">col-50</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-60">
      <span class="col-test">col-60</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-67">
      <span class="col-test">col-67</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-70">
      <span class="col-test">col-70</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-75">
      <span class="col-test">col-75</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-80">
      <span class="col-test">col-80</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-84">
      <span class="col-test">col-84</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-90">
      <span class="col-test">col-90</span>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <span class="col-test">col-100</span>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col col-10">col-10</div>
  </div>
  <div class="row">
    <div class="col col-16">col-16</div>
  </div>
  <div class="row">
    <div class="col col-20">col-20</div>
  </div>
  <div class="row">
    <div class="col col-25">col-25</div>
  </div>
  <div class="row">
    <div class="col col-30">col-30</div>
  </div>
  <div class="row">
    <div class="col col-33">col-33</div>
  </div>
  <div class="row">
    <div class="col col-40">col-40</div>
  </div>
  <div class="row">
    <div class="col col-50">col-50</div>
  </div>
  <div class="row">
    <div class="col col-60">col-60</div>
  </div>
  <div class="row">
    <div class="col col-67">col-67</div>
  </div>
  <div class="row">
    <div class="col col-70">col-70</div>
  </div>
  <div class="row">
    <div class="col col-75">col-75</div>
  </div>
  <div class="row">
    <div class="col col-80">col-80</div>
  </div>
  <div class="row">
    <div class="col col-84">col-84</div>
  </div>
  <div class="row">
    <div class="col col-90">col-90</div>
  </div>
  <div class="row">
    <div class="col">col-100</div>
  </div>
</div>
```

## Kaydırma Boşlukları

Sütunları soldan belirli boşluklarda kaydırmak için aşağıdaki gibi `.col-span-*` kullanabilirsiniz.

<div class="gra-s-wrapper">
  <div class="row">
    <div class="col col-10 col-span-90">
      <span class="col-test">col-10</span
      ><span class="col-test span span90">col-span-90</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-16 col-span-84">
      <span class="col-test">col-16</span
      ><span class="col-test span span84">col-span-84</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-20 col-span-80">
      <span class="col-test">col-20</span
      ><span class="col-test span span80">col-span-80</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-25 col-span-75">
      <span class="col-test">col-25</span
      ><span class="col-test span span75">col-span-75</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-30 col-span-70">
      <span class="col-test">col-30</span
      ><span class="col-test span span70">col-span-70</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-33 col-span-67">
      <span class="col-test">col-33</span
      ><span class="col-test span span67">col-span-67</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-40 col-span-60">
      <span class="col-test">col-40</span
      ><span class="col-test span span60">col-span-60</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-50 col-span-50">
      <span class="col-test">col-50</span
      ><span class="col-test span span50">col-span-50</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-60 col-span-40">
      <span class="col-test">col-60</span
      ><span class="col-test span span40">col-span-40</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-67 col-span-33">
      <span class="col-test">col-67</span
      ><span class="col-test span span33">col-span-33</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-70 col-span-30">
      <span class="col-test">col-70</span
      ><span class="col-test span span30">col-span-30</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-75 col-span-25">
      <span class="col-test">col-75</span
      ><span class="col-test span span25">col-span-25</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-80 col-span-20">
      <span class="col-test">col-80</span
      ><span class="col-test span span20">col-span-20</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-84 col-span-16">
      <span class="col-test">col-84</span
      ><span class="col-test span span16">col-span-16</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-90 col-span-10">
      <span class="col-test">col-90</span
      ><span class="col-test span span10">
      <span style="position: absolute; line-height:1; left: 0">col-span-10</span></span>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col col-10 col-span-90">col-10</div>
  </div>
  <div class="row">
    <div class="col col-16 col-span-84">col-16</div>
  </div>
  <div class="row">
    <div class="col col-20 col-span-80">col-20</div>
  </div>
  <div class="row">
    <div class="col col-25 col-span-75">col-25</div>
  </div>
  <div class="row">
    <div class="col col-30 col-span-70">col-30</div>
  </div>
  <div class="row">
    <div class="col col-33 col-span-67">col-33</div>
  </div>
  <div class="row">
    <div class="col col-40 col-span-60">col-40</div>
  </div>
  <div class="row">
    <div class="col col-50 col-span-50">col-50</div>
  </div>
  <div class="row">
    <div class="col col-60 col-span-40">col-60</div>
  </div>
  <div class="row">
    <div class="col col-67 col-span-33">col-67</div>
  </div>
  <div class="row">
    <div class="col col-70 col-span-30">col-70</div>
  </div>
  <div class="row">
    <div class="col col-75 col-span-25">col-75</div>
  </div>
  <div class="row">
    <div class="col col-80 col-span-20">col-80</div>
  </div>
  <div class="row">
    <div class="col col-84 col-span-16">col-84</div>
  </div>
  <div class="row">
    <div class="col col-90 col-span-10">col-90</div>
  </div>
</div>
```

## Sütunların Mobilde Kullanımı

Sütunlar normal kullanımda mobil kırılımına geldiğinde kapsayıcısının %100 genişliğini alır. `.row-mobile` kullanarak bunu engelleyebilir ve mobilde sütun genişliklerini koruyabilirsiniz.

<div class="gra-s-wrapper">
  <div class="row row-mobile">
    <div class="col ">
      <span class="col-test">col</span>
    </div>
    <div class="col ">
      <span class="col-test">col</span>
    </div>
    <div class="col ">
      <span class="col-test">col</span>
    </div>
  </div>
</div>

```html
<!-- .row-mobile kullanarak sütunların mobilde %100 genişlemesini engelleyebilirsiniz -->

<div class="container">
  <div class="row row-mobile">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
</div>
```