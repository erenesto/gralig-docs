---
title: 'Kartlar'
mdtype: 'MDHTML'
section: 'cards'
---

Basit ve farklı görünümlerde 5 ayrı kart komponenti oluşturuldu. Kartların genişliği %100 olarak ayarlandı, herhangi bir kapsayıcı içerisine koyup o genişlikte kullanabilirsiniz.

<div class="gra-doc-s-wrapper">
  <div class="card">
    <div class="gra-card-content">
      <h5 class="gra-card-title">Kart Başlığı</h5>
      <div class="gra-card-body">
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
      </div>
    </div>
  </div>
</div>

```html
<div class="card">
  <div class="gra-card-content">
    <h5 class="gra-card-title">Kart Başlığı</h5>
    <div class="gra-card-body">
      <p>Kart içeriği</p>
      <p>Kart içeriği</p>
      <p>Kart içeriği</p>
      <p>Kart içeriği</p>
      <p>Kart içeriği</p>
    </div>
  </div>
</div>
```

## Görsel İçeren Dikey Kartlar

Görsel içeren dikey kartları kullanırken görselin üstte olmasını isterseniz `.gra-card` classına ek olarak `.gra-card-media-top`, altta olmasını isterseniz `.gra-card-media-bottom` kullanabilirsiniz.

<div class="gra-doc-s-wrapper">
  <div class="gra-card gra-card-media-top">
    <figure class="gra-card-media-wrapper">
      <img class="gra-object-fit" src="https://res.cloudinary.com/erenesto/image/upload/v1587131749/wb8kzewydi4y9n9uaidz.jpg" alt="Kart Test Görsel" />
    </figure>
    <div class="gra-card-content">
      <h5 class="gra-card-title">Kart Başlığı</h5>
      <div class="gra-card-body">
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
      </div>
    </div>
  </div>
</div>


```html
  <div class="gra-doc-s-wrapper">
    <div class="gra-card gra-card-media-top">
      <figure class="gra-card-media-wrapper">
        <img class="gra-object-fit" src="test-image.jpg" alt="Kart Test Görsel" />
      </figure>
      <div class="gra-card-content">
        <h5 class="gra-card-title">Kart Başlığı</h5>
        <div class="gra-card-body">
          <p>Kart içeriği</p>
          <p>Kart içeriği</p>
          <p>Kart içeriği</p>
          <p>Kart içeriği</p>
          <p>Kart içeriği</p>
        </div>
      </div>
    </div>
  </div>
```

<div class="gra-doc-s-wrapper">
  <div class="gra-card gra-card-media-bottom">
    <figure class="gra-card-media-wrapper">
      <img class="gra-object-fit" src="https://res.cloudinary.com/erenesto/image/upload/v1587131749/wb8kzewydi4y9n9uaidz.jpg" alt="Kart Test Görsel" />
    </figure>
    <div class="gra-card-content">
      <h5 class="gra-card-title">Kart Başlığı</h5>
      <div class="gra-card-body">
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
      </div>
    </div>
  </div>
</div>


```html
  <div class="gra-doc-s-wrapper">
    <div class="gra-card gra-card-media-bottom">
      <figure class="gra-card-media-wrapper">
        <img class="gra-object-fit" src="test-image.jpg" alt="Kart Test Görsel" />
      </figure>
      <div class="gra-card-content">
        <h5 class="gra-card-title">Kart Başlığı</h5>
        <div class="gra-card-body">
          <p>Kart içeriği</p>
          <p>Kart içeriği</p>
          <p>Kart içeriği</p>
          <p>Kart içeriği</p>
          <p>Kart içeriği</p>
        </div>
      </div>
    </div>
  </div>
```

## Görsel İçeren Yatay Kartlar

Görsel içeren yatay kartları kullanırken öncelikle `.gra-card` classına ek olarak `.gra-card-horizontal` classını eklemelisiniz. Bunun yanında görselin solda olmasını isterseniz `.gra-card-media-left` , sağda olmasını isterseniz `.gra-card-media-right` kullanabilirsiniz.

<div class="gra-doc-s-wrapper">
  <div class="gra-card gra-card-horizontal gra-card-media-left">
    <figure class="gra-card-media-wrapper">
      <img class="gra-object-fit" src="https://res.cloudinary.com/erenesto/image/upload/v1587131749/e16fm6knahyvtlnjmhf3.jpg" alt="Kart Test Görsel" />
    </figure>
    <div class="gra-card-content">
      <h5 class="gra-card-title">Kart Başlığı</h5>
      <div class="gra-card-body">
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
      </div>
    </div>
  </div>
</div>


```html
  <div class="gra-doc-s-wrapper">
    <div class="gra-card gra-card-horizontal gra-card-media-left">
      <figure class="gra-card-media-wrapper">
        <img class="gra-object-fit" src="test-image.jpg" alt="Kart Test Görsel" />
      </figure>
      <div class="gra-card-content">
        <h5 class="gra-card-title">Kart Başlığı</h5>
        <div class="gra-card-body">
          <p>Kart içeriği</p>
          <p>Kart içeriği</p>
          <p>Kart içeriği</p>
          <p>Kart içeriği</p>
          <p>Kart içeriği</p>
        </div>
      </div>
    </div>
  </div>
```

<div class="gra-doc-s-wrapper">
  <div class="gra-card gra-card-horizontal gra-card-media-right">
    <figure class="gra-card-media-wrapper">
      <img class="gra-object-fit" src="https://res.cloudinary.com/erenesto/image/upload/v1587131749/e16fm6knahyvtlnjmhf3.jpg" alt="Kart Test Görsel" />
    </figure>
    <div class="gra-card-content">
      <h5 class="gra-card-title">Kart Başlığı</h5>
      <div class="gra-card-body">
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
        <p>Kart içeriği</p>
      </div>
    </div>
  </div>
</div>


```html
  <div class="gra-doc-s-wrapper">
    <div class="gra-card gra-card-horizontal gra-card-media-right">
      <figure class="gra-card-media-wrapper">
        <img class="gra-object-fit" src="test-image.jpg" alt="Kart Test Görsel" />
      </figure>
      <div class="gra-card-content">
        <h5 class="gra-card-title">Kart Başlığı</h5>
        <div class="gra-card-body">
          <p>Kart içeriği</p>
          <p>Kart içeriği</p>
          <p>Kart içeriği</p>
          <p>Kart içeriği</p>
          <p>Kart içeriği</p>
        </div>
      </div>
    </div>
  </div>
```