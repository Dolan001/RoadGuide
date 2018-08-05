function showImage() {
    if(this.files && this.files[0]){
        var fileObj = new FileReader();
        fileObj.onload = function (data) {
            var image = document.getElementById("profileImg");
            image.src = data.target.result;
        }
        fileObj.readAsDataURL(this.files[0]);
    }
}