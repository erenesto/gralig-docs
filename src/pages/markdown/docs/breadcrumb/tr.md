---
title: 'Gezinti Menüsü'
mdtype: 'MDHTML'
section: 'breadcrumb'
---

Gezinti menüsü için kullanabileceğiniz basit komponent.

<div class="gra-doc-s-wrapper">
<nav class="gra-breadcrumb" aria-label="breadcrumbs">
<ul class="gra-breadcrumb-list">
<li class="gra-breadcrumb-item">

[Ana Sayfa](/docs/breadcrumb/# 'BreadcrumbLink')

</li>
<li class="gra-breadcrumb-item">

[Hakkımızda](/docs/breadcrumb/# 'BreadcrumbLink')

</li>
<li class="gra-breadcrumb-item">

[İletişim](/docs/breadcrumb/# 'BreadcrumbLink')

</li>
<li class="gra-breadcrumb-item">

[Çalışmalar](/docs/breadcrumb/# 'BreadcrumbLinkCurrent')

</li>
</ul>
</nav>
</div>


```html
<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul class="gra-breadcrumb-list">
    <li class="gra-breadcrumb-item">
      <a href="#" class="gra-breadcrumb-link">Ana Sayfa</a>
    </li>
    <li class="gra-breadcrumb-item">
      <a href="#" class="gra-breadcrumb-link">Hakkımızda</a>
    </li>
    <li class="gra-breadcrumb-item">
      <a href="#" class="gra-breadcrumb-link">İletişim</a>
    </li>
    <li class="gra-breadcrumb-item">
      <a class="gra-breadcrumb-link current" aria-current="page">Çalışmalar</a>
    </li>
  </ul>
</nav>
```