---
title: 'Breadcrumb'
mdtype: 'MDHTML'
section: 'breadcrumb'
---

A simple component to use for breadcrumb.

<div class="gra-s-wrapper">
<nav class="breadcrumb" aria-label="breadcrumbs">
<ul class="breadcrumb-list">
<li class="breadcrumb-item">

[Home](/docs/breadcrumb/# 'BreadcrumbLink')

</li>
<li class="breadcrumb-item">

[About](/docs/breadcrumb/# 'BreadcrumbLink')

</li>
<li class="breadcrumb-item">

[Contact](/docs/breadcrumb/# 'BreadcrumbLink')

</li>
<li class="breadcrumb-item">

[Work](/docs/breadcrumb/# 'BreadcrumbLinkCurrent')

</li>
</ul>
</nav>
</div>


```html
<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul class="breadcrumb-list">
    <li class="breadcrumb-item">
      <a href="#" class="breadcrumb-link">Home</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#" class="breadcrumb-link">About</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#" class="breadcrumb-link">Contact</a>
    </li>
    <li class="breadcrumb-item">
      <a class="current breadcrumb-link" aria-current="page">Work</a>
    </li>
  </ul>
</nav>
```