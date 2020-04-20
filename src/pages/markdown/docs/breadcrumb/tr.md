---
title: 'Gezinti Menüsü'
mdtype: 'MDHTML'
section: 'breadcrumb'
---

Gezinti menüsü için kullanabileceğiniz basit komponent.

<div class="gra-s-wrapper">
<nav class="breadcrumb" aria-label="breadcrumbs">
<ul class="breadcrumb-list">
<li class="breadcrumb-item">

[Ana Sayfa](/docs/breadcrumb/# 'BreadcrumbLink')

</li>
<li class="breadcrumb-item">

[Hakkımızda](/docs/breadcrumb/# 'BreadcrumbLink')

</li>
<li class="breadcrumb-item">

[İletişim](/docs/breadcrumb/# 'BreadcrumbLink')

</li>
<li class="breadcrumb-item">

[Çalışmalar](/docs/breadcrumb/# 'BreadcrumbLinkCurrent')

</li>
</ul>
</nav>
</div>


```html
<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul class="breadcrumb-list">
    <li class="breadcrumb-item">
      <a href="#" class="breadcrumb-link">Ana Sayfa</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#" class="breadcrumb-link">Hakkımızda</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#" class="breadcrumb-link">İletişim</a>
    </li>
    <li class="breadcrumb-item">
      <a class="current breadcrumb-link" aria-current="page">Çalışmalar</a>
    </li>
  </ul>
</nav>
```