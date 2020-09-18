

 ymaps.ready(init);

function init () {
    var myMap,
        MapMobyl;
        
     myMap = new ymaps.Map('map-yandex', {
            center: [55.811679566617275,37.624494703704794],
            zoom: 17
        });
       
        
        myPlacemark1 = new ymaps.Placemark([55.811679566617275,37.624494703704794], {
           
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../new/img/min_logoi.svg',
            iconImageSize: [55, 55],
            iconImageOffset: [0, 0],
        });
       
        myMap.geoObjects.add(myPlacemark1);
       

   
}

