---
title: 'Navbar'
mdtype: 'MDHTML'
section: 'navbar'
---

A simple horizontal navigation bar.

<div class="gra-s-wrapper">

  <header class="navbar">
<div class="container">
<div class="navbar-logo">

[<img class="navbar-logo-img" src="https://res.cloudinary.com/erenesto/image/upload/v1587055102/wdrsnzjfdlxvv2vvfspx.svg" alt="" />](/docs/navbar/# 'NavbarLogoLink')

</div>
<div class="navbar-content">
<nav>
<ul class="nav">
<li class="nav-item">

[Home](/docs/nav/# 'NavLink')

</li>
<li class="nav-item">

[About](/docs/nav/# 'NavLink')

</li>
<li class="nav-item">

[Contact](/docs/nav/# 'NavLinkCurrent')

</li>
<li class="nav-item">

[Works](/docs/nav/# 'NavLink')

</li>
</ul>
</nav>
      </div>
    </div>
  </header>

</div>

```html
<header class="navbar">
  <div class="container">
    <div class="navbar-logo">
      <a class="navbar-logo-link" href="#">
        <img class="navbar-logo-img" src="assets/gralig-logo.svg" alt="" />
      </a>
    </div>
    <div class="navbar-content">
      <nav>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link current" href="#" aria-current="page">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Works</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
```