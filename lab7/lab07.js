const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
for (i=0;i<4;i++){
    var div1=document.createElement("div");
    div1.setAttribute("class", "item");
    document.body.appendChild(div1);
    var o=document.createElement("button");
    var t=document.createTextNode("Visit");
    o.appendChild(t);
    var p1=document.createElement("h4");
    var t1=document.createTextNode("Genre:"+works[i].tips);
    p1.appendChild(t1);
    var innerdiv=document.createElement("div");
    innerdiv.appendChild(p1);
    var h1=document.createElement("h3");
    var t12=document.createTextNode(works[i].author);
    h1.appendChild(t12);
    var h2=document.createElement("h5");
    var t22=document.createTextNode("lifetime:"+works[i].lifetime);
    h2.appendChild(t22);
    var innerdiv2=document.createElement("div");
    h2.style.position="relative";
    var x;
    if (i===0){
        x="220px";
    }if (i===1){
        x="130px";
    }if (i===2){
        x="195px";
    }if (i===3){
        x="85px";
    }
    h2.style.left=x;
    h2.style.bottom="44px";
    innerdiv2.append(h1 ,h2);
    innerdiv2.setAttribute("class", "inner-box");
    innerdiv2.style.height="36px";
    var innerdiv1=document.createElement("div");
    innerdiv1.setAttribute("class", "inner-box");
    var h3=document.createElement("h3");
    var t32=document.createTextNode("Popular Photos");
    var trnode = document.createElement('tr');
    for (var j = 0; j < works[i].photos.length; j++) {
        var tdnode = document.createElement('td');
        var image=document.createElement("img");
        image.setAttribute("class","photo");
        image.src=works[i].photos[j];
        tdnode.appendChild(image);
        trnode.appendChild(tdnode);
    }
    h3.appendChild(t32);
    innerdiv1.appendChild(h3);
    innerdiv1.appendChild(trnode);
    div1.appendChild(innerdiv);
    div1.appendChild(innerdiv2);
    div1.appendChild(innerdiv1);
    div1.appendChild(o);
}
