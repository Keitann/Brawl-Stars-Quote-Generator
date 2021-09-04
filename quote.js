'use strict';

var randomNum = 0;

function changeQuote(){
    randomNum = Math.floor(Math.random()*10);

    if(randomNum == 0){
        $("#text").text("I got a short fuse");
        $("#brawler").attr("src", "https://www.chillbs.com/core/uploads/2020/10/Dynamike_2.png");
        $("#author").text("-Dynamike")
    } 
    else if(randomNum == 1){
        $("#text").text("Feel the power of music!");
        $("#brawler").attr("src", "https://i.pinimg.com/originals/34/99/be/3499be0e24c434f6d9a38b3617771f99.png");
        $("#author").text("-Poco")
    }
    else if(randomNum == 2){
        $("#text").text("Have much fear, Mortis is here!");
        $("#brawler").attr("src", "https://i.pinimg.com/originals/0c/f7/0b/0cf70b8f439fa040d4696ef87f219619.png");
        $("#author").text("-Mortis");
    }
    else if(randomNum == 3){
        $("#text").text("To protect and surge.");
        $("#brawler").attr("src", "https://www.chillbs.com/core/uploads/2020/06/surge-brawl-stars.png");
        $("#author").text("-Surge");
    }
    else if(randomNum == 4){
        $("#text").text(" ...");
        $("#brawler").attr("src", "https://www.chillbs.com/core/uploads/2019/08/Spike_Skin-Default.png");
        $("#author").text("-Spike");
    }
    else if(randomNum == 5){
        $("#text").text("Huh, can't believe I have to do this.");
        $("#brawler").attr("src", "https://static.wikia.nocookie.net/ca61ded4-c70b-4042-b6ec-8f7422b26847");
        $("#author").text("-Edgar");
    }
    else if(randomNum == 6){
        $("#text").text("Check out my guns! Hahahaha!");
        $("#brawler").attr("src", "https://cdn.starlist.pro/update/october-2020/Challenger-Colt.png");
        $("#author").text("-Colt");
    }
    else if(randomNum == 7){
        $("#text").text("Run, run, as fast as you can!");
        $("#brawler").attr("src", "https://www.chillbs.com/core/uploads/2020/12/byron.png");
        $("#author").text("-Byron");
    }
    else if(randomNum == 8){
        $("#text").text("Ready for another?");
        $("#brawler").attr("src", "https://www.chillbs.com/core/uploads/2019/09/barley-mago.png");
        $("#author").text("-Barley");
    }
    else if(randomNum == 9){
        $("#text").text("That's why they call me the golden arm");
        $("#brawler").attr("src", "https://static.wikia.nocookie.net/5f461b04-628b-4c2f-a228-97a6e7d861a8/scale-to-width/370");
        $("#author").text("-Belle");
    }
}