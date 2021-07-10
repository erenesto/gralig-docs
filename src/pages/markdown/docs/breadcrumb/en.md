---
title: 'Breadcrumb'
mdtype: 'MDHTML'
section: 'breadcrumb'
---

A simple component to use for breadcrumb.

<div class="gra-doc-s-wrapper">
<nav class="gra-breadcrumb" aria-label="breadcrumbs">
<ul class="gra-breadcrumb-list">
<li class="gra-breadcrumb-item">

[Home](/docs/breadcrumb/# 'BreadcrumbLink')

</li>
<li class="gra-breadcrumb-item">

[About](/docs/breadcrumb/# 'BreadcrumbLink')

</li>
<li class="gra-breadcrumb-item">

[Contact](/docs/breadcrumb/# 'BreadcrumbLink')

</li>
<li class="gra-breadcrumb-item">

[Work](/docs/breadcrumb/# 'BreadcrumbLinkCurrent')

</li>
</ul>
</nav>
</div>


```html
<nav class="gra-breadcrumb" aria-label="breadcrumbs">
  <ul class="gra-breadcrumb-list">
    <li class="gra-breadcrumb-item">
      <a href="#" class="gra-breadcrumb-link">Home</a>
    </li>
    <li class="gra-breadcrumb-item">
      <a href="#" class="gra-breadcrumb-link">About</a>
    </li>
    <li class="gra-breadcrumb-item">
      <a href="#" class="gra-breadcrumb-link">Contact</a>
    </li>
    <li class="gra-breadcrumb-item">
      <a class="gra-breadcrumb-link current" aria-current="page">Work</a>
    </li>
  </ul>
</nav>
```