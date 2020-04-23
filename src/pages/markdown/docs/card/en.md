---
title: 'Cards'
mdtype: 'MDHTML'
section: 'cards'
---

We created 5 separate card components in simple and different views. The width of the cards is set to 100%, you can put it in any container and use it in that containers width.

<div class="gra-s-wrapper">
  <div class="card">
    <div class="card-content">
      <h5 class="card-title">Card Title</h5>
      <div class="card-body">
        <p>This is the card body.</p>
        <p>This is the card body.</p>
        <p>This is the card body.</p>
        <p>This is the card body.</p>
        <p>This is the card body.</p>
      </div>
    </div>
  </div>
</div>

```html
<div class="card">
  <div class="card-content">
    <h5 class="card-title">Card Title</h5>
    <div class="card-body">
      <p>This is the card body.</p>
      <p>This is the card body.</p>
      <p>This is the card body.</p>
      <p>This is the card body.</p>
      <p>This is the card body.</p>
    </div>
  </div>
</div>
```

## Vertical Cards with Image

When you are using vertical cards with images, you can use `.card-media-top` in addition to the` .card` class if you want the image on top or `.card-media-bottom` if you want the image on bottom.

<div class="gra-s-wrapper">
  <div class="card card-media-top">
    <figure class="card-media-wrapper">
      <img class="img-object-fit" src="https://res.cloudinary.com/erenesto/image/upload/v1587131749/wb8kzewydi4y9n9uaidz.jpg" alt="Card Test Image" />
    </figure>
    <div class="card-content">
      <h5 class="card-title">Card Title</h5>
      <div class="card-body">
        <p>This is the card body.</p>
        <p>This is the card body.</p>
        <p>This is the card body.</p>
        <p>This is the card body.</p>
        <p>This is the card body.</p>
      </div>
    </div>
  </div>
</div>


```html
  <div class="gra-s-wrapper">
    <div class="card card-media-top">
      <figure class="card-media-wrapper">
        <img class="img-object-fit" src="test-image.jpg" alt="Card Test Image" />
      </figure>
      <div class="card-content">
        <h5 class="card-title">Card Title</h5>
        <div class="card-body">
          <p>This is the card body.</p>
          <p>This is the card body.</p>
          <p>This is the card body.</p>
          <p>This is the card body.</p>
          <p>This is the card body.</p>
        </div>
      </div>
    </div>
  </div>
```

<div class="gra-s-wrapper">
  <div class="card card-media-bottom">
    <figure class="card-media-wrapper">
      <img class="img-object-fit" src="https://res.cloudinary.com/erenesto/image/upload/v1587131749/wb8kzewydi4y9n9uaidz.jpg" alt="Card Test Image" />
    </figure>
    <div class="card-content">
      <h5 class="card-title">Card Title</h5>
      <div class="card-body">
        <p>This is the card body.</p>
        <p>This is the card body.</p>
        <p>This is the card body.</p>
        <p>This is the card body.</p>
        <p>This is the card body.</p>
      </div>
    </div>
  </div>
</div>


```html
  <div class="gra-s-wrapper">
    <div class="card card-media-bottom">
      <figure class="card-media-wrapper">
        <img class="img-object-fit" src="test-image.jpg" alt="Card Test Image" />
      </figure>
      <div class="card-content">
        <h5 class="card-title">Card Title</h5>
        <div class="card-body">
          <p>This is the card body.</p>
          <p>This is the card body.</p>
          <p>This is the card body.</p>
          <p>This is the card body.</p>
          <p>This is the card body.</p>
        </div>
      </div>
    </div>
  </div>
```

## Horizontal Cards with Image

When you are using horizontal cards with images, primarly you should use `.card-horizontal` in addition to the` .card`. And also if you want the image on left use the `.card-media-left` and if you want the image on right use the `.card-media-right`

<div class="gra-s-wrapper">
  <div class="card card-horizontal card-media-left">
    <figure class="card-media-wrapper">
      <img class="img-object-fit" src="https://res.cloudinary.com/erenesto/image/upload/v1587131749/e16fm6knahyvtlnjmhf3.jpg" alt="Card Test Image" />
    </figure>
    <div class="card-content">
      <h5 class="card-title">Card Title</h5>
      <div class="card-body">
        <p>This is the card body.</p>
        <p>This is the card body.</p>
        <p>This is the card body.</p>
        <p>This is the card body.</p>
        <p>This is the card body.</p>
      </div>
    </div>
  </div>
</div>


```html
  <div class="gra-s-wrapper">
    <div class="card card-horizontal card-media-left">
      <figure class="card-media-wrapper">
        <img class="img-object-fit" src="test-image.jpg" alt="Card Test Image" />
      </figure>
      <div class="card-content">
        <h5 class="card-title">Card Title</h5>
        <div class="card-body">
          <p>This is the card body.</p>
          <p>This is the card body.</p>
          <p>This is the card body.</p>
          <p>This is the card body.</p>
          <p>This is the card body.</p>
        </div>
      </div>
    </div>
  </div>
```

<div class="gra-s-wrapper">
  <div class="card card-horizontal card-media-right">
    <figure class="card-media-wrapper">
      <img class="img-object-fit" src="https://res.cloudinary.com/erenesto/image/upload/v1587131749/e16fm6knahyvtlnjmhf3.jpg" alt="Card Test Image" />
    </figure>
    <div class="card-content">
      <h5 class="card-title">Card Title</h5>
      <div class="card-body">
        <p>This is the card body.</p>
        <p>This is the card body.</p>
        <p>This is the card body.</p>
        <p>This is the card body.</p>
        <p>This is the card body.</p>
      </div>
    </div>
  </div>
</div>


```html
  <div class="gra-s-wrapper">
    <div class="card card-horizontal card-media-right">
      <figure class="card-media-wrapper">
        <img class="img-object-fit" src="test-image.jpg" alt="Card Test Image" />
      </figure>
      <div class="card-content">
        <h5 class="card-title">Card Title</h5>
        <div class="card-body">
          <p>This is the card body.</p>
          <p>This is the card body.</p>
          <p>This is the card body.</p>
          <p>This is the card body.</p>
          <p>This is the card body.</p>
        </div>
      </div>
    </div>
  </div>
```