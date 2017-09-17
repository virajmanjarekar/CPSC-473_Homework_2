var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]'; var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
detailImage.setAttribute('src', imageUrl);
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}
function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}
function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}
function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}
function addThumbClickHandler(thumb) {
'use strict';
thumb.addEventListener('click', function (event) {
  event.preventDefault();
  setDetailsFromThumb(thumb);
});
}
function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}
function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}
initializeEvents();

function resetThumbURL(thumb) {
  'use strict'
  // get thumb's image
  var image = thumb.querySelector(".thumbnail-image");
  // get image's src
  var source = image.getAttribute('src');

  thumb.setAttribute('data-image-url', source);
} // end resetThumbURL(thumb)

function resetAllThumbURLs() {
  'use strict'
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(resetThumbURL);
} // end resetALLThumbURLs()
