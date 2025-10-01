var viewer = OpenSeadragon({
            id: "openseadragon1",
            prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/3.1.0/images/",
            showNavigator: true            
        });

           const apiKey = '5KvmVfJn8h8O67Tqwt8fmTSzXFcN7HzCjQEp7Ogk';
        const url = `https://api.nasa.gov/planetary/apod?api_key=${"5KvmVfJn8h8O67Tqwt8fmTSzXFcN7HzCjQEp7Ogk"}`;


         fetch(url)
            .then(response => response.json())
              .then(apodData => {
                console.log('APOD verisi:', apodData);

                 if (apodData.media_type === 'image') {
                    viewer.open({
                        type: 'image',
                        url: apodData.hdurl || apodData.url
                    });
                }

                })


getStarted.addEventListener('click', function() {
    const viewerSection =document.getElementById('viewer');

    viewerSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    viewerSection.style.opacity = 0;
    setTimeout(() => {
        viewerSection.style.transition = 'opacity 0.5s ease';
        viewerSection.style.opacity = 1;
    })

});
