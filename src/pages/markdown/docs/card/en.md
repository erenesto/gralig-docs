---
title: 'Cards'
mdtype: 'MDHTML'
section: 'cards'
---

We created 5 separate card components in simple and different views. The width of the cards is set to 100%, you can put it in any container and use it in that containers width.

<div class="gra-doc-s-wrapper">
  <div class="gra-card">
    <div class="gra-card-content">
      <h5 class="gra-card-title">Card Title</h5>
      <div class="gra-card-body">
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
<div class="gra-card">
  <div class="gra-card-content">
    <h5 class="gra-card-title">Card Title</h5>
    <div class="gra-card-body">
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

When you are using vertical cards with images, you can use `.gra-card-media-top` in addition to the `.gra-card` class if you want the image on top or `.gra-card-media-bottom` if you want the image on bottom.

<div class="gra-doc-s-wrapper">
  <div class="gra-card gra-card-media-top">
    <figure class="gra-card-media-wrapper">
      <img class="gra-object-fit" src="https://res.cloudinary.com/erenesto/image/upload/v1587131749/wb8kzewydi4y9n9uaidz.jpg" alt="Card Test Image" />
    </figure>
    <div class="gra-card-content">
      <h5 class="gra-card-title">Card Title</h5>
      <div class="gra-card-body">
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
  <div class="gra-doc-s-wrapper">
    <div class="gra-card gra-card-media-top">
      <figure class="gra-card-media-wrapper">
        <img class="gra-object-fit" src="test-image.jpg" alt="Card Test Image" />
      </figure>
      <div class="gra-card-content">
        <h5 class="gra-card-title">Card Title</h5>
        <div class="gra-card-body">
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

<div class="gra-doc-s-wrapper">
  <div class="gra-card gra-card-media-bottom">
    <figure class="gra-card-media-wrapper">
      <img class="gra-object-fit" src="https://res.cloudinary.com/erenesto/image/upload/v1587131749/wb8kzewydi4y9n9uaidz.jpg" alt="Card Test Image" />
    </figure>
    <div class="gra-card-content">
      <h5 class="gra-card-title">Card Title</h5>
      <div class="gra-card-body">
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
  <div class="gra-doc-s-wrapper">
    <div class="gra-card gra-card-media-bottom">
      <figure class="gra-card-media-wrapper">
        <img class="gra-object-fit" src="test-image.jpg" alt="Card Test Image" />
      </figure>
      <div class="gra-card-content">
        <h5 class="gra-card-title">Card Title</h5>
        <div class="gra-card-body">
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

When you are using horizontal cards with images, primarly you should use `.gra-card-horizontal` in addition to the` .card`. And also if you want the image on left use the `.gra-card-media-left` and if you want the image on right use the `.gra-card-media-right`

<div class="gra-doc-s-wrapper">
  <div class="gra-card gra-card-horizontal gra-card-media-left">
    <figure class="gra-card-media-wrapper">
      <img class="gra-object-fit" src="https://res.cloudinary.com/erenesto/image/upload/v1587131749/e16fm6knahyvtlnjmhf3.jpg" alt="Card Test Image" />
    </figure>
    <div class="gra-card-content">
      <h5 class="gra-card-title">Card Title</h5>
      <div class="gra-card-body">
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
  <div class="gra-doc-s-wrapper">
    <div class="gra-card gra-card-horizontal gra-card-media-left">
      <figure class="gra-card-media-wrapper">
        <img class="gra-object-fit" src="test-image.jpg" alt="Card Test Image" />
      </figure>
      <div class="gra-card-content">
        <h5 class="gra-card-title">Card Title</h5>
        <div class="gra-card-body">
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

<div class="gra-doc-s-wrapper">
  <div class="gra-card gra-card-horizontal gra-card-media-right">
    <figure class="gra-card-media-wrapper">
      <img class="gra-object-fit" src="https://res.cloudinary.com/erenesto/image/upload/v1587131749/e16fm6knahyvtlnjmhf3.jpg" alt="Card Test Image" />
    </figure>
    <div class="gra-card-content">
      <h5 class="gra-card-title">Card Title</h5>
      <div class="gra-card-body">
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
  <div class="gra-doc-s-wrapper">
    <div class="gra-card gra-card-horizontal gra-card-media-right">
      <figure class="gra-card-media-wrapper">
        <img class="gra-object-fit" src="test-image.jpg" alt="Card Test Image" />
      </figure>
      <div class="gra-card-content">
        <h5 class="gra-card-title">Card Title</h5>
        <div class="gra-card-body">
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