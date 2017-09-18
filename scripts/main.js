var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';

function resetDetails(thumb) // changing the setDetails to Reset
{
  'use strict';
  var thumbImg = thumb.querySelector('.thumbnail-image');
  var thumbSrc = thumbImg.getAttribute('src');
  thumb.setAttribute('data-image-url', thumbSrc);
}

function getThumbnailsArray() //keeping function same as original
 {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function resetURLs() // Resetting all URLs
{
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(resetDetails);
}

function addThumbClickHandler(thumb) // Adding event handler same as original
{

  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function setDetailsFromThumb(thumbnail) // Updating the function with randomizer function
{
  'use strict';
  var selectedThumbImg = thumbnail.getAttribute('data-image-url');
  var urls = document.getElementsByTagName('a');
  var iArray = new Array();
  var detailArray = new Array();
  var y = 0;
  for(var x = 0; x<urls.length; x++){
    if(selectedThumbImg != urls[x].getAttribute('data-image-url')){
      iArray[y] = urls[x].getAttribute('data-image-url');
      detailArray[y] = urls[x].getAttribute('data-image-title');
      y++;
    }
  }
  var ran = Math.floor(Math.random() * 4); //generating random number between 0-4 except that 
  setDetails(iArray[ran], detailArray[ran]);
}

function setDetails(imageUrl, titleText) //now setting the details for image with url and calling the reset function.
{
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
  resetURLs();
}

function initializeEvents() //Initializing event same as original
{
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

resetURLs();
initializeEvents();
