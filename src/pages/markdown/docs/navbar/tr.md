---
title: 'Navigasyon Barı'
mdtype: 'MDHTML'
section: 'navbar'
---

Basit yatay navigasyon barı.

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

[Ana Sayfa](/docs/nav/# 'NavLink')

</li>
<li class="nav-item">

[Hakkımızda](/docs/nav/# 'NavLink')

</li>
<li class="nav-item">

[İletişim](/docs/nav/# 'NavLinkCurrent')

</li>
<li class="nav-item">

[Çalışmalar](/docs/nav/# 'NavLink')

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
            <a class="nav-link" href="#">Ana Sayfa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Hakkımızda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link current" href="#" aria-current="page">İletişim</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Çalışmalar</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
```