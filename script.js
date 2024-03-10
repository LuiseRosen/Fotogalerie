let images = ['img/img_01.jpg', 'img/img_02.jpg', 'img/img_03.jpg', 'img/img_04.jpg', 'img/img_05.jpg', 'img/img_06.jpg', 'img/img_07.jpg', 'img/img_08.jpg', 'img/img_09.jpg', 'img/img_10.jpg', 'img/img_11.jpg', 'img/img_12.jpg', 'img/img_13.jpg', 'img/img_14.jpg', 'img/img_15.jpg', 'img/img_16.jpg', 'img/img_17.jpg', 'img/img_18.jpg', 'img/img_19.jpg', 'img/img_20.jpg', 'img/img_21.jpg', 'img/img_22.jpg', 'img/img_23.jpg', 'img/img_24.jpg'];



function loadPageContent() {
    document.getElementById('pageContent').innerHTML = templatePageContent();
    loadPhotos();
}

function loadPhotos() {

    for (let i = 0; i < images.length; i++) {

        document.getElementById('photoContainer').innerHTML += `
        <div class="img-div" onclick="viewPhoto(${i})">
            <img class="miniPhoto" src="${images[i]}"> 
        </div>
        `;
    }
}

function viewPhoto(i) {

    let viewPhoto = document.getElementById('viewPhoto');
    viewPhoto.classList.remove('display-none');
    viewPhoto.innerHTML += templateViewPhotoContent(i);
}

function closePhoto() {
    let viewPhoto = document.getElementById('viewPhoto');
    viewPhoto.classList.add('display-none');
    viewPhoto.innerHTML = '';
}

function viewNextPhoto(i) {
    let y = i + 1;
    document.getElementById('viewPhoto').innerHTML = '';
    if (y < images.length) {
        viewPhoto(y);
    } else {
        let y = 0;
        viewPhoto(y);
    }

}

function viewPreviousPhoto(i) {
    let y = i - 1;
    document.getElementById('viewPhoto').innerHTML = '';
    if (y < 0) {
        let y = images.length - 1;
        viewPhoto(y);
    } else {
        viewPhoto(y);
    }
}


// Templates --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function templatePageContent() {
    return `
    <div id="viewPhoto" class="viewPhoto display-none">
    </div>
    <h1>- Fachwerk Galerie -</h1>
    <div class="body">
        <div id="photoContainer" class="photoContainer"></div>
    </div>
`;
}

function templateViewPhotoContent(i) {

    return `
    <div class="viewPhotoContent">
        <img src="./icons/circle-xmark-regular.svg" id="closePhotoBtn" class="icon" onclick="closePhoto()">
        <img src="icons/caret-left-solid.svg" id="previousPhotoBtn" class="arrow icon" onclick="viewPreviousPhoto(${i})">
        <img src="icons/caret-right-solid.svg" id="nextPhotoBtn" class="arrow icon" onclick="viewNextPhoto(${i})">
        <img class="photo" src="${images[i]}">
    </div>
    `;
}

