const loadingSpinner = (status)=>{
    if(status == true){
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("word-container").classList.add("hidden")
    }else{
        document.getElementById("word-container").classList.remove("hidden")
        document.getElementById("spinner").classList.add("hidden")
    }
}