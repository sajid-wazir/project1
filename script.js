const allImages = document.querySelectorAll(
    "#firstimg img, #secondimg img, #thirdimg img"
);


const jsImages = [

    // Image 1
    "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",

    // Image 2
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",

    // Image 3
    "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg",

    // Image 4
    "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg",

    // Image 5
    "https://images.pexels.com/photos/1662135/pexels-photo-1662135.jpeg",

    // Image 6
    "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",

    // Image 7
    "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",

    // Image 8
    "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg",

    // Image 9
    "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg"
];

allImages.forEach(function (img, index) {
    
    const originalImage = img.src;

    img.addEventListener("mouseover", function () {

        // Show JavaScript image
        img.src = jsImages[index];

    });

    img.addEventListener("mouseout", function () {

                img.src = originalImage;

    });

});

