var galleryTime = 5000;
var galleryInterval = null;

var gallery = dom.get("#gallery");
var images = Array.prototype.slice.call(dom.getAll(".gallery-image"));

var current = Math.floor(images.length/2);
for (var i = 0; i < images.length; i++) {
	images[i].onclick = function(event) {
		current = images.indexOf(event.target);
		clearInterval(galleryInterval);
		galleryInterval = setInterval(slideGallery, galleryTime);
		updateGallery();
	}
}

function slideGallery() {
	current++;
	if (current > images.length - 1) {
		current = 0;
	}
	updateGallery();
};
galleryInterval = setInterval(slideGallery, galleryTime);
updateGallery();

function updateGallery() {
	gallery.style.left = (-50 * current + 25) + "%";
	for (var i = 0; i < images.length; i++) {
		if (i != current) {
			images[i].classList.add("gallery-dark");
		} else {
			images[i].classList.remove("gallery-dark");
		}
	}
}
