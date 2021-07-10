---
title: 'Navbar'
mdtype: 'MDHTML'
section: 'navbar'
---

A simple horizontal navigation bar.

<div class="gra-doc-s-wrapper">

  <header class="gra-navbar">
<div class="gra-container">
<div class="gra-navbar-logo">

[<img class="gra-navbar-logo-img" src="https://res.cloudinary.com/erenesto/image/upload/v1587055102/wdrsnzjfdlxvv2vvfspx.svg" alt="" />](/docs/navbar/# 'NavbarLogoLink')

</div>
<div class="gra-navbar-content">
<nav>
<ul class="gra-nav">
<li class="gra-nav-item">

[Home](/docs/nav/# 'NavLink')

</li>
<li class="gra-nav-item">

[About](/docs/nav/# 'NavLink')

</li>
<li class="gra-nav-item">

[Contact](/docs/nav/# 'NavLinkCurrent')

</li>
<li class="gra-nav-item">

[Works](/docs/nav/# 'NavLink')

</li>
</ul>
</nav>
      </div>
    </div>
  </header>

</div>

```html
<header class="gra-navbar">
  <div class="gra-container">
    <div class="gra-navbar-logo">
      <a class="gra-navbar-logo-link" href="#">
        <img class="gra-navbar-logo-img" src="assets/gralig-logo.svg" alt="" />
      </a>
    </div>
    <div class="gra-navbar-content">
      <nav>
        <ul class="gra-nav">
          <li class="gra-nav-item">
            <a class="gra-nav-link" href="#">Home</a>
          </li>
          <li class="gra-nav-item">
            <a class="gra-nav-link" href="#">About</a>
          </li>
          <li class="gra-nav-item">
            <a class="gra-nav-link current" href="#" aria-current="page">Contact</a>
          </li>
          <li class="gra-nav-item">
            <a class="gra-nav-link" href="#">Works</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
```