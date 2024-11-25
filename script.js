



    document.addEventListener('DOMContentLoaded', function() {


    //LOAING
    $(window).on("load", function(){
        $(".loader_wrapper").fadeOut(200);
    });
        
    


    // FETCH HEADER
        fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            

            

            //YABANCI
            let ani2 = lottie.loadAnimation({
            container: document.getElementById('yab_logo'),
            renderer: 'svg',
            loop: true,
            autoplay: true, 
            path: 'resources/assets/menu/yab_logo.json'
            });
            let hamburger = lottie.loadAnimation({
            container: document.getElementById('hamburger'),
            renderer: 'svg',
            loop: false,
            autoplay: false, 
            path: 'resources/assets/menu/hamburger.json',
            rendererSettings: {
                colorFilters: [
                    {
                        keypath: "**",
                        color: '#000000'
                    }
            ]
            }
            });
            const hamburgerContainer = document.getElementById('hamburger');
            let isOpen = false;
            const halfwayFrame = 30;
            let totalFrames;
            
            hamburger.addEventListener('DOMLoaded', () => {
                totalFrames = hamburger.totalFrames - 1;
            });
            
            hamburgerContainer.addEventListener('click', () => {
                // Toggle active class on the document body
                document.body.classList.toggle('active');
                
                if (!isOpen) {
                    hamburger.playSegments([0, halfwayFrame], true);
                    isOpen = true;
                } else {
                    hamburger.playSegments([halfwayFrame, totalFrames], true);
                    isOpen = false;
                }
            });
            
            hamburgerContainer.addEventListener('mouseenter', () => {
                hamburgerContainer.style.cursor = 'pointer';
            });


            //WALL
            let wall = lottie.loadAnimation({
            container: document.getElementById('wall'),
            renderer: 'svg',  
            loop: true,
            autoplay: false, 
            path: 'resources/assets/menu/wall.json',
        
            });

            //CANVAS
            let canvas = lottie.loadAnimation({
            container: document.getElementById('canvas'),
            renderer: 'svg',
            loop: true,
            autoplay: false, 
            path: 'resources/assets/menu/canvas.json'
            });

            //MP4
            let mp4 = lottie.loadAnimation({
            container: document.getElementById('mp4'),
            renderer: 'svg',
            loop: true,
            autoplay: false, 
            path: 'resources/assets/menu/mp4.json'
            });

            //PUBLISH
            let publish = lottie.loadAnimation({
            container: document.getElementById('publish'), // Replace with your container's ID
            renderer: 'svg',
            loop: false, 
            autoplay: false, 
            path: 'resources/assets/menu/publish.json', // Path to your animation JSON
            });
    
                // Start at the first frame
                publish.goToAndStop(0, true);
    
                // Add hover event listeners
                let container = document.getElementById('publish');
    
                // On hover, play the animation at normal speed
                container.addEventListener('mouseenter', () => {
                publish.loop = true;
                publish.setSpeed(3); // Normal speed
                publish.play(); // Play animation
                });
    
                // On mouse leave, increase speed and continue playing
                container.addEventListener('mouseleave', () => {
                publish.loop = false;
                publish.setSpeed(20); // Increase speed
                publish.play(); // Continue playing
    
                // Reset to the first frame when the animation completes
                publish.addEventListener('complete', () => {
                publish.goToAndStop(0, true); // Reset to the first frame

                 });


             //Smokerr
             let smoker = lottie.loadAnimation({
                container: document.getElementById('smoker'),
                renderer: 'canvas',
                loop: true,
                autoplay: true, 
                path: 'resources/assets/animations/smoker.json'
                });






                
                });



                //FETCH FOOTER
                fetch('footer.html')
                .then(response => response.text())
                .then(data => {
                document.getElementById('footer').innerHTML = data;
                
                
                });        
                });
        const MIN_DELAY = 2000;    
        const MAX_DELAY = 6000;    
        const MIN_INTERVAL = 2000; 
        // const FRAME_COUNT = 12;     
        // const FPS = 20;           
        const ANIMATION_DURATION = 600;

        const bugContainer = document.getElementById('bug');
        const bugImage = document.getElementById('bug_png');

        const playAnimation = () => {
            bugContainer.style.display = 'block';
            bugImage.src = "";
            void bugImage.offsetWidth;
            bugImage.src = "resources/assets/ezgif_bug_4.png";
            
            setTimeout(() => {
                bugContainer.style.display = 'none';
            }, ANIMATION_DURATION);
        };

const scheduleAnimation = () => {
    const randomDelay = Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY;
    setTimeout(() => {
        playAnimation();
        setTimeout(scheduleAnimation, MIN_INTERVAL);
    }, randomDelay);
};


scheduleAnimation();

        });
        
        
        
        
        



















    //CONTENT   
        const canvasPageData = [
            {
                imageSrc: "resources/canvas/canvas_1.webp",
                altText: "painting_1",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_2.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_3.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_4.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_5.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_6.webp",
                altText: "painting_1",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_7.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_8.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_9.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_10.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_11.webp",
                altText: "painting_1",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_12.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_13.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_14.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_15.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_16.webp",
                altText: "painting_1",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_17.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_18.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_19.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_20.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_21.webp",
                altText: "painting_1",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_22.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_23.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_24.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_25.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_26.webp",
                altText: "painting_1",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_27.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_28.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_29.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
            {
                imageSrc: "resources/canvas/canvas_30.webp",
                altText: "painting_2",
                title: "c#1",
                year: "2024",
                dimensions: "50x70cm",
                medium: "pen on paper"
            },
        ];
        
        const wallPageData = [
            {
                imageSrc: "resources/wall/wall_20.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_3.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_1.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_2.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_6.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_4.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_5.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_7.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_8.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_9.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_10.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_11.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_12.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_13.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_14.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_15.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_16.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_17.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_18.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_19.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
            {
                imageSrc: "resources/wall/wall_21.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
        
            {
                imageSrc: "resources/wall/wall_22.webp",
                altText: "painting_1",
                title: "w#1",
                date: "2023",
                location: "Istanbul"
            },
        

        ];
        
        const motionPageData = [
            {
                videoSrc: "resources/mp4/motion_1.mp4",
                altText: "animation1",
                title: "a#1",
                date: "2023",
                media: "digital",
                audio: "",
                credit: "",
                hasCustomStyle: true,
            },
            {
                videoSrc: "resources/mp4/motion_2.mp4",
                altText: "animation1",
                title: "a#1",
                date: "2023",
                media: "digital",
                audio: "",
                credit: "",
                hasCustomStyle: true,
            },
            {
                videoSrc: "resources/mp4/motion_4.mp4",
                altText: "animation1",
                title: "a#1",
                date: "2023",
                media: "digital",
                audio: "",
                credit: ""
            },
            {
                videoSrc: "resources/mp4/motion_5.mp4",
                altText: "animation1",
                title: "Picnic",
                date: "2023",
                media: "digital",
                audio: "",
                credit: ""
            },
            {
                videoSrc: "resources/mp4/motion_6.mp4",
                altText: "animation1",
                title: "Running from the police",
                date: "2024",
                media: "digital",
                audio: "",
                credit: ""
            },

        ];
        
        function generatePageContent(pageData, pageType) {
            const container = document.querySelector(`.${pageType}_container`);
            

            container.innerHTML = '';
        

            pageData.forEach(item => {
                const contentBox = document.createElement('div');
                contentBox.classList.add('content_box');

        

                const emptyDiv = document.createElement('div');
                emptyDiv.classList.add('empty');
                contentBox.appendChild(emptyDiv);
        

                if (pageType === 'motion') {
                    const videoDiv = document.createElement('div');
                    videoDiv.classList.add('content_img');
                    const video = document.createElement('video');
                    video.src = item.videoSrc; 
                    video.controls = false; 
                    video.autoplay = true;
                    video.loop = true;
                    video.muted = true;  
                    video.playsInline = true;
                    video.blur = true;

                    if (item.hasCustomStyle) {
                        video.classList.add('custom-styled-media'); 
                    }

                    videoDiv.appendChild(video);
                    contentBox.appendChild(videoDiv);
                } else {
                    const imgDiv = document.createElement('div');
                    imgDiv.classList.add('content_img');
                    const img = document.createElement('img');
                    img.src = item.imageSrc;
                    img.alt = item.altText;
                    imgDiv.appendChild(img);
                    contentBox.appendChild(imgDiv);
        
                }
                




            
        
                // Description div
                const descriptionDiv = document.createElement('div');
                descriptionDiv.classList.add('description');
        

                if (pageType === 'canvas') {
                    descriptionDiv.innerHTML = `
                        <h2>${item.title}</h2>
                        <p>${item.year}</p>
                        <p>${item.dimensions}</p>
                        <p>${item.medium}</p>
                    `;
                } else if (pageType === 'wall') {
                    descriptionDiv.innerHTML = `
                        <h2>${item.title}</h2>
                        <p class="date">${item.date}</p>
                        <p>${item.location}</p>
                    `;
                } else if (pageType === 'motion') {
                    descriptionDiv.innerHTML = `
                        <h2>${item.title}</h2>
                        <p class="date">${item.date}</p>
                        <p class="media">${item.media}</p>
                        <p class="audio">${item.audio}</p>
                        <p class="credit">${item.credit}</p>
                    `;
                }
        
                contentBox.appendChild(descriptionDiv);
        
                // Closing div (if needed)
                const closingDiv = document.createElement('div');
                contentBox.appendChild(closingDiv);
        
                // Add to container
                container.appendChild(contentBox);
            });
        }
        

        document.addEventListener("DOMContentLoaded", () => {
            if (document.querySelector('.canvas_container')) {
                generatePageContent(canvasPageData, 'canvas');
            } else if (document.querySelector('.wall_container')) {
                generatePageContent(wallPageData, 'wall');
            } else if (document.querySelector('.motion_container')) {
                generatePageContent(motionPageData, 'motion');
            }











        });

