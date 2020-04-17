---
title: 'Kartlar'
mdtype: 'MDHTML'
section: 'cards'
---

Basit ve farklı görünümlerde 5 ayrı kart komponenti oluşturuldu. Kartların genişliği %100 olarak ayarlandı, herhangi bir kapsayıcı içerisine koyup o genişlikte kullanabilirsiniz.

<div class="gra-s-wrapper">
  <div class="card">
    <div class="card-content">
      <h5 class="card-title">Kart Başlığı</h5>
      <div class="card-body">
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
  <div class="card-content">
    <h5 class="card-title">Kart Başlığı</h5>
    <div class="card-body">
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

Görsel içeren dikey kartları kullanırken görselin üstte olmasını isterseniz `.card` classına ek olarak `.card-img-top`, altta olmasını isterseniz `.card-img-bottom` kullanabilirsiniz.

<div class="gra-s-wrapper">
  <div class="card card-img-top">
    <figure class="card-img-wrapper">
      <img class="img-object-fit" src="https://res.cloudinary.com/erenesto/image/upload/v1587131749/wb8kzewydi4y9n9uaidz.jpg" alt="Kart Test Görsel" />
    </figure>
    <div class="card-content">
      <h5 class="card-title">Kart Başlığı</h5>
      <div class="card-body">
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
  <div class="gra-s-wrapper">
    <div class="card card-img-top">
      <figure class="card-img-wrapper">
        <img class="img-object-fit" src="test-image.jpg" alt="Kart Test Görsel" />
      </figure>
      <div class="card-content">
        <h5 class="card-title">Kart Başlığı</h5>
        <div class="card-body">
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

<div class="gra-s-wrapper">
  <div class="card card-img-bottom">
    <figure class="card-img-wrapper">
      <img class="img-object-fit" src="https://res.cloudinary.com/erenesto/image/upload/v1587131749/wb8kzewydi4y9n9uaidz.jpg" alt="Kart Test Görsel" />
    </figure>
    <div class="card-content">
      <h5 class="card-title">Kart Başlığı</h5>
      <div class="card-body">
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
  <div class="gra-s-wrapper">
    <div class="card card-img-bottom">
      <figure class="card-img-wrapper">
        <img class="img-object-fit" src="test-image.jpg" alt="Kart Test Görsel" />
      </figure>
      <div class="card-content">
        <h5 class="card-title">Kart Başlığı</h5>
        <div class="card-body">
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

Görsel içeren yatay kartları kullanırken öncelikle `.card` classına ek olarak `.card-horizontal` classını eklemelisiniz. Bunun yanında görselin solda olmasını isterseniz `.card-img-left` , sağda olmasını isterseniz `.card-img-right` kullanabilirsiniz.

<div class="gra-s-wrapper">
  <div class="card card-horizontal card-img-left">
    <figure class="card-img-wrapper">
      <img class="img-object-fit" src="https://res.cloudinary.com/erenesto/image/upload/v1587131749/e16fm6knahyvtlnjmhf3.jpg" alt="Kart Test Görsel" />
    </figure>
    <div class="card-content">
      <h5 class="card-title">Kart Başlığı</h5>
      <div class="card-body">
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
  <div class="gra-s-wrapper">
    <div class="card card-horizontal card-img-left">
      <figure class="card-img-wrapper">
        <img class="img-object-fit" src="test-image.jpg" alt="Kart Test Görsel" />
      </figure>
      <div class="card-content">
        <h5 class="card-title">Kart Başlığı</h5>
        <div class="card-body">
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

<div class="gra-s-wrapper">
  <div class="card card-horizontal card-img-right">
    <figure class="card-img-wrapper">
      <img class="img-object-fit" src="https://res.cloudinary.com/erenesto/image/upload/v1587131749/e16fm6knahyvtlnjmhf3.jpg" alt="Kart Test Görsel" />
    </figure>
    <div class="card-content">
      <h5 class="card-title">Kart Başlığı</h5>
      <div class="card-body">
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
  <div class="gra-s-wrapper">
    <div class="card card-horizontal card-img-right">
      <figure class="card-img-wrapper">
        <img class="img-object-fit" src="test-image.jpg" alt="Kart Test Görsel" />
      </figure>
      <div class="card-content">
        <h5 class="card-title">Kart Başlığı</h5>
        <div class="card-body">
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