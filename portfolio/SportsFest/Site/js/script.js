$(function($){


  

// PAGE TOP SCROLL

	$('#pagetop').click(function () {
			//id名#pagetopがクリックされたら、以下の処理を実行
			$("html,body").animate({scrollTop:0},"200");
	});
	$('#pagetop').hide();

	$(window).scroll(function () {
			if($(window).scrollTop() > 300) {
				$('#pagetop').fadeIn(500);
		} else {
				$('#pagetop').fadeOut(500);
		}
	});


	function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#link").click(function() {
  scrollToAnchor('id3');
});
$("#link4").click(function() {
  scrollToAnchor('id-4');
});
$("#link5").click(function() {
  scrollToAnchor('id-5');
});
$("#link6").click(function() {
  scrollToAnchor('id-6');
});
$("#link7").click(function() {
  scrollToAnchor('id-7');
});



// HAMBURGER MENU 
	"use strict";
	// ハンバーガーメニューをクリックしたとき
	$('.hum').on('click', function(){
		$('.hum, nav').toggleClass('active');
		return false;
	});

//  Animated Collapsible Buttons

	$('.tab_contents').hide();
  $('.tab_contents_active').show();
  
  $('.tab').click(function() {
     var target = $(this.rel);          
        $('.tab_contents').not(target).hide();
        target.slideToggle(100);
  $('#tabs_container > .tab-links > li.active')
      .removeClass('active');

  $(this).parent().addClass('active');
    
       

  $('#tabs_container > .tab-content > div.tab_contents_active')
      .removeClass('tab_contents_active');

  $(this.rel).addClass('tab_contents_active');
 });



 $('.tab_contents2').hide();

 $('.tab_2').click(function() {
    var target = $(this.rel);          
       $('.tab_contents2').not(target).hide();
       target.slideToggle(100);
 $('#tabs_container > .tab-links2 > li.active')
     .removeClass('active');

 $(this).parent().addClass('active');
   
      

 $('#tabs_container > .tab-content2 > div.tab_contents_active')
     .removeClass('tab_contents_active');

 $(this.rel).addClass('tab_contents_active');
});





// Lightbox Script

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

// var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }


function storageAvailable(type) {
  try {
      var storage = window[type],
          x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          storage.length !== 0;
  }
}

if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness
}
else {
  // Too bad, no localStorage for us
}




var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {},
$checkboxes = $("#checkbox-container :checkbox");

$checkboxes.on("change", function(){
$checkboxes.each(function(){
checkboxValues[this.id] = this.checked;
});

localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
});

// On page load
$.each(checkboxValues, function(key, value) {
$("#" + key).prop('checked', value);
});


// upload a pic

// function handleFileSelect(evt) {
//   var files = evt.target.files; // FileList object

//   // Loop through the FileList and render image files as thumbnails.
//   for (var i = 0, f; f = files[i]; i++) {

//     // Only process image files.
//     if (!f.type.match('image.*')) {
//       continue;
//     }

//     var reader = new FileReader();

//     // Closure to capture the file information.
//     reader.onload = (function(theFile) {
//       return function(e) {
//         // Render thumbnail.
//         var span = document.createElement('span');
//         span.innerHTML = ['<img class="thumb" src="', e.target.result,
//                           '" title="', escape(theFile.name), '"/>'].join('');
          
//         document.getElementById('list').insertBefore(span, null);
        
//         localStorage.setItem('img', e.target.result);

//       };
//     })(f);

//     // Read in the image file as a data URL.
//     reader.readAsDataURL(f);
//   }
// }

// document.getElementById('files').addEventListener('change', handleFileSelect, false);

// if(localStorage.img) { 

//         var span = document.createElement('span');
        
//         span.innerHTML += ['<img class="thumb" src="', localStorage.img ,
//                           '" title="test"/>'].join('');
        
//         document.getElementById('list').insertBefore(span, null);

//   }


// second one

var get = function(id) { return document.getElementById(id); }

var example1 = example1 || {};
example1.handleFileSelect = function(evt) {
  var files = evt.target.files;
  var output = [];
  for (var i = 0, f; f = files[i]; i++) {
    output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                '</li>');
  }
  get('file_list').innerHTML = '<ul>' + output.join('') + '</ul>';
}
get('files1').addEventListener('change', example1.handleFileSelect, false);

var example2 = example2 || {};
example2.onDragOver = function(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

example2.onDragFileDrop = function(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  var files = evt.dataTransfer.files;
  var output = [];
  for (var i = 0, f; f = files[i]; i++) {
    output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                '</li>');
  }
  get('file_list2').innerHTML = '<ul>' + output.join('') + '</ul>';
}

// Setup the dnd listeners.
get('drop_zone').addEventListener('dragover', example2.onDragOver, false);
get('drop_zone').addEventListener('drop', example2.onDragFileDrop, false);


var example3 = example3 || {};
example3.handleFileSelect = function(evt) {
  var files = evt.target.files; // FileList object.

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {

    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }

    var reader = new FileReader();

    // Need a closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        // Render thumbnail.
        var span = document.createElement('span');
        span.innerHTML = ['<img class="thumb" src="', e.target.result,
                          '" title="', escape(theFile.name), '"/>'].join('');
        get('thumbnails').insertBefore(span, null);
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}
get('files3').addEventListener('change', example3.handleFileSelect, false);

var example4 = example4 || {};
example4.readBlob = function(opt_startByte, opt_stopByte) {
  var files = get('file4').files;
  if (!files.length) {
    alert('Please select a file!');
    return;
  }

  var file = files[0];
  var start = parseInt(opt_startByte) || 0;
  var stop = parseInt(opt_stopByte) || file.size - 1;

  var reader = new FileReader();

  reader.onloadend = function(evt) {
    if (evt.target.readyState == FileReader.DONE) { // DONE == 2
      get('byte_content').textContent = evt.target.result;
      get('byte_range').textContent = ['Read bytes: ', start + 1, ' - ', stop + 1,
                                       ' of ', file.size, ' byte file'].join('');
    }
  };
  reader.readAsBinaryString(file.slice(start, stop + 1));
};
document.querySelector('.readBytesButtons').addEventListener('click', function(evt) {
  if (evt.target.tagName.toLowerCase() == 'button') {
    var startByte = evt.target.getAttribute('data-startbyte');
    var stopByte = evt.target.getAttribute('data-endbyte');
    example4.readBlob(startByte, stopByte);
  }
}, false);

function Example5(id) {
  var reader_;
  var progress_ = document.querySelector('.percent');
  var self = this;

  this.abortRead = function() {
    reader_.abort();
  };

  this.errorHandler = function(evt) {
    switch(evt.target.error.code) {
      case evt.target.error.NOT_FOUND_ERR:
        alert('File Not Found!');
        break;
      case evt.target.error.NOT_READABLE_ERR:
        alert('File is not readable');
        break;
      case evt.target.error.ABORT_ERR:
        break; // noop
      default:
        alert('An error occurred reading this file.');
    };
  };

  this.updateProgress = function(evt) {
    // evt is a ProgressEvent.
    if (evt.lengthComputable) {
      var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
      // Increase the progress bar length.
      if (percentLoaded < 100) {
        progress_.style.width = percentLoaded + '%';
        progress_.textContent = percentLoaded + '%';
      }
    }
  };

  this.handleFileSelect = function(evt) {
    // Reset progress indicator on new file selection.
    progress_.style.width = '0%';
    progress_.textContent = '0%';

    reader_ = new FileReader();
    reader_.onerror = self.errorHandler;
    reader_.onprogress = self.updateProgress;
    reader_.onabort = function(e) {
      alert('File read cancelled');
    };
    reader_.onloadstart = function(e) {
      get('progress_bar').className = 'loading';
    };
    reader_.onload = function(e) {
      // Ensure that the progress bar displays 100% at the end.
      progress_.style.width = '100%';
      progress_.textContent = '100%';
      setTimeout("get('progress_bar').className='';", 2000);
    }

    // Read in the image file as binary string.
    reader_.readAsBinaryString(evt.target.files[0]);
  };

  get(id).addEventListener('change', self.handleFileSelect, false);
};
var example5 = new Example5('file5');






});
