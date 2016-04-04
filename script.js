$(document).ready(function() {
    
    var artists = [];
    
    /* TODO: Add a "video" property to each Artist */
    var kanye = {
                    id: 'kanye', // No spaces in this
                    name: 'Kanye West',
                    img: 'http://photon.101medialablimit.netdna-cdn.com/hypebeast.com/image/2016/02/kanye-west-nicolas-ghesquiere-1.jpg',
                    albums: ['Graduation','Watch The Throne','Yeezus']
                };
                
    var sean  = {
                    id: 'sean',
                    name: 'Sean Paul', 
                    img: 'http://static.independent.co.uk/s3fs-public/thumbnails/image/2014/12/26/14/sean-paul-crop.jpg',
                    albums: ['Stage One', 'The Trinity', 'Stage One']
    }
    
    var Drake = {
                    id: "Drake",
                    name: 'Aubrey Drake Graham',
                    img: 'https://i.ytimg.com/vi/vcmPzuMLr1w/maxresdefault.jpg',
                    albums: ['Thank Me Later', 'Take Care', 'Views from the Six']
    }
    
    var Meek  = {
                    id: 'Meek Mill',
                    name: 'Robert Rihmeek Williams',
                    img: 'http://imb.ulximg.com/image/src/artist/1392673408_deb82fa8448da2d71c950397cbfc47d3.jpg/705b706c41f84f54ba3c9122ee32c768/1392673408_meek_mill2_84.jpg',
                    albums: ['Milladelphia', 'Dream Chasers 2', 'Dream Chasers 3']
    }
    
    // Add our artist object to the array
    artists.push(kanye);
    
    /* TODO: Add another artist to the array (number two) */   
    
    /* TODO: Add another artist to the array (number three) */  
    
    /* TODO: Add another artist to the array (number four) */
    
    
    /* This will add the artists to the page */
    for(var x=0; x < artists.length; x++){
        
        $('#artists').append(
          $('<div/>')
            .addClass("artist_name")
            .attr("id", artists[x].id)
            .text(artists[x].name)
        );

        /* TODO: Make the artist's image show up */
         $('#' + artists[x].id).append(
            $('<div/>')
              .addClass("artist_image")
              .html()
            ); 
            
        var albumString = "Albums include: ";
        /* TODO: Make a loop to add the album names to the albumString variable */
        
        // now add the albums to the page
         $('#' + artists[x].id).append(
            $('<div/>')
              .addClass("albums")
              .html(albumString)
            );    
        
        /* TODO: Make the artist video show up and be clickable */
        if(artists[x].video && artists[x].video.length > 0){
            $('#' + artists[x].id).append(
                $('<div/>')
                  .addClass("video")
                  .html("")
                );        
        }
    
        
    }
});