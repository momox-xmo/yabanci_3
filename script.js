document.addEventListener('DOMContentLoaded', function() {


    //LOADING SCREEN
    $(window).on("load", function(){
        $(".loader_wrapper").fadeOut(200);
    });


    
    


    // FETCH HEADER
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('header').innerHTML = data;
    // Variable
        
    //   const header = document.getElementById('header');
    //   let lastScrollTop = 0;

    //   window.addEventListener('scroll', function() {
    //     let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
    //     if (currentScroll > lastScrollTop) {
    //       // Scrolling down
    //       header.style.transform = 'translateY(-100%)';
    //     } else {
    //       // Scrolling up
    //       header.style.transform = 'translateY(0)';
    //     }
        
    //     lastScrollTop = currentScroll;
    //   });

    // //PASTE CODE HERE/
            

    //YABANCI
    let logo = lottie.loadAnimation({
    container: document.getElementById('yab_logo'),
    renderer: 'svg',
    loop: true,
    autoplay: true, 
    path: 'resources/assets/menu/yab_logo_2.json'
    });



  // Set the initial loop between frames 0 and 40
  logo.playSegments([0, 300], true);
  logo.setSpeed(1.0);

  // Handle hover to switch to loop between frames 40 and 100
  document.getElementById('yab_logo').addEventListener('mouseenter', function() {
    logo.playSegments([300, 400], true);
    logo.setSpeed(1);
    
  });

  // Handle mouse leave to switch back to loop between frames 0 and 40
  document.getElementById('yab_logo').addEventListener('mouseleave', function() {
    logo.playSegments([0, 300], true);
    logo.setSpeed(1.0);
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
    let wallAnimation = lottie.loadAnimation({
        container: document.getElementById('wall'),
        renderer: 'svg',
        loop: false,  // Prevent the animation from looping
        autoplay: false,  // Prevent the animation from autoplaying
        path: 'resources/assets/menu/wall.json',
      });
      
      // Play animation from first to last frame on hover
      document.getElementById('wall').addEventListener('mouseenter', function() {
        wallAnimation.play();  // Start playing forward from the first frame
      });
      
      // Reverse animation from last frame to first on mouse leave
      document.getElementById('wall').addEventListener('mouseleave', function() {
        wallAnimation.stop();  // Stop animation at current position
        wallAnimation.playSegments([wallAnimation.totalFrames, 0], true);  // Play in reverse until first frame
      });
   

    //Works
    let works = lottie.loadAnimation({
    container: document.getElementById('works'),
    renderer: 'svg',
    loop: true,
    autoplay: true, 
    path: 'resources/assets/menu/works.json'    
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
    });
    //PUBLISH
    let shop = lottie.loadAnimation({
        container: document.getElementById('shop'), // Replace with your container's ID
        renderer: 'svg',
        loop: false, 
        autoplay: false, 
        path: 'resources/assets/menu/shop.json', // Path to your animation JSON
        });

        let algida = lottie.loadAnimation({
        container: document.getElementById('algida'),
        renderer: 'svg',
        loop: true,
        autoplay: true, 
        path: 'resources/assets/algida_w.json'
        });
        
            
})


.catch(error => console.error('Error fetching header:', error));





    


    //FETCH FOOTER
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('footer').innerHTML = data;
    
                
    });       


    

        
    const MIN_DELAY = 2000;    
    const MAX_DELAY = 40000;    
    const MIN_INTERVAL = 20000; 
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
    



    const eyeConfigs = [
        { 
            eyeId: 'eye_1', 
            socketId: 'eye_socket_1',
            rotation: 0,
            currentX: 0,  // Track the current "imaginary cursor" position for eye_1
            currentY: 0
        },
        { 
            eyeId: 'eye_2', 
            socketId: 'eye_socket_2',
            rotation: 0,
            currentX: 0,
            currentY: 0
        }
    ];
    
    // Control how far the pupil can move from the center (within the eye socket)
    const movementFactor = 0.5;  // Adjust this value (0.0 - 1.0)
    const smoothFactor = 1;  // How fast the eye follows the cursor
    
    // Timer to track mouse activity
    let lastMouseMove = Date.now();
    const idleThreshold = 1000; // Time in ms to wait before considering the device "idle"
    
    // Function to calculate the movement of the pupil inside the elliptical eye socket
    function calculateEyeMovement(socketWidth, socketHeight, targetX, targetY) {
        const a = socketWidth / 2;  // Semi-major axis (horizontal radius)
        const b = socketHeight / 2; // Semi-minor axis (vertical radius)
    
        // Normalize the target position based on the ellipse's radii
        let normalizedX = targetX / a;
        let normalizedY = targetY / b;
    
        // Calculate the squared distance from the center
        const distanceSquared = normalizedX * normalizedX + normalizedY * normalizedY;
    
        // If the distance exceeds 1 (outside the ellipse), we need to scale it down
        if (distanceSquared > 1) {
            const distance = Math.sqrt(distanceSquared);
            normalizedX /= distance;
            normalizedY /= distance;
        }
    
        // Apply the scaling factor to control how far the pupil moves
        const constrainedX = normalizedX * a * movementFactor;
        const constrainedY = normalizedY * b * movementFactor;
    
        return { x: constrainedX, y: constrainedY };
    }
    
    // Function to update the position of the pupils smoothly (as if they follow imaginary cursors)
    function updateEyePosition(event) {
        lastMouseMove = Date.now(); // Reset the timer on mouse move
    
        eyeConfigs.forEach(config => {
            const eye = document.getElementById(config.eyeId);
            const socket = document.getElementById(config.socketId);
    
            if (!eye || !socket) return;
    
            // Get the socket's bounding box (dimensions and position)
            const socketRect = socket.getBoundingClientRect();
            const socketCenterX = socketRect.left + socketRect.width / 2;
            const socketCenterY = socketRect.top + socketRect.height / 2;
    
            // Calculate the relative position of the cursor within the eye socket
            const dx = event.clientX - socketCenterX;
            const dy = event.clientY - socketCenterY;
    
            // Smoothly move the eye's "imaginary cursor" toward the actual cursor position
            config.currentX += (dx - config.currentX) * smoothFactor;
            config.currentY += (dy - config.currentY) * smoothFactor;
    
            // Get the constrained movement of the pupil based on the "imaginary cursor"
            const { x: constrainedOffsetX, y: constrainedOffsetY } = calculateEyeMovement(
                socketRect.width,
                socketRect.height,
                config.currentX,
                config.currentY
            );
    
            // Apply the calculated offset to move the pupil with smooth transition
            eye.style.transition = "transform 0.4s ease-out";  // Smooth transition for the transform
            eye.style.transform = `
                rotate(${config.rotation}deg)
                translate(${constrainedOffsetX}px, ${constrainedOffsetY}px)
            `;
        });
    }
    
    // Function to make the eyes wander together when idle (without mouse input)
    function makeEyesWander() {
        const maxMovement = 10; // Maximum pixel movement for wandering
        let wanderX = Math.random() * maxMovement * 2 - maxMovement; // Random horizontal movement
        let wanderY = Math.random() * maxMovement * 2 - maxMovement; // Random vertical movement
    
        // Apply the same wandering movement to both eyes
        eyeConfigs.forEach(config => {
            const eye = document.getElementById(config.eyeId);
            if (!eye) return;
    
            // Update the "imaginary cursor" of both eyes with the same wandering movement
            config.currentX += wanderX;
            config.currentY += wanderY;
    
            // Get the constrained movement of the pupil based on the "imaginary cursor"
            const socket = document.getElementById(config.socketId);
            const socketRect = socket.getBoundingClientRect();
            
            const { x: constrainedOffsetX, y: constrainedOffsetY } = calculateEyeMovement(
                socketRect.width,
                socketRect.height,
                config.currentX,
                config.currentY
            );
    
            // Apply the wandering movement with smooth transition
            eye.style.transition = "transform 0.5s ease-out";  // Smooth transition for wandering
            eye.style.transform = `
                rotate(${config.rotation}deg)
                translate(${constrainedOffsetX}px, ${constrainedOffsetY}px)
            `;
        });
    }
    
    // Check if the mouse has been idle for too long and trigger wandering
    function checkForIdle() {
        const currentTime = Date.now();
        if (currentTime - lastMouseMove > idleThreshold) {
            // If idle for more than `idleThreshold`, make the eyes wander together
            makeEyesWander();
        }
    }
    
    // Listen for the mousemove event to update the pupil position
    document.addEventListener('mousemove', updateEyePosition);
    
    // Periodically check if the mouse is idle (run every 500ms)
    setInterval(() => {
        checkForIdle();
    }, 500); // Check every 500ms
    
    








    
    
});

        
        
        
        

    //CONTENT   
    const canvasPageData = [
    
        {
            imageSrc: "resources/canvas/canvas_2.webp",
            altText: "painting_2",
            title: "Untitled <br>from DE series",  
            year: "2024",
            dimensions: "",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_3.webp",
            altText: "painting_2",
            title: "Rival dealer",  
            year: "2017",
            dimensions: "25x25",
            medium: "Mixed media on canvas"
        },
        // {
        //     imageSrc: "resources/canvas/canvas_4.webp",
        //     altText: "painting_2",
        //     title: "",
        //     year: "2020",
        //     dimensions: "",
        //     medium: "pen on paper"
        // },
        {
            imageSrc: "resources/canvas/canvas_5.webp",
            altText: "img",
            title: "Untitled <br> DE series",
            year: "2024",
            dimensions: "",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_6.webp",
            altText: "painting_1",
            title: "Domino’s Pizza",  
            year: "2017",
            dimensions: "",
            medium: "pen on tissue paper"
        },
        {
            imageSrc: "resources/canvas/canvas_7.webp",
            altText: "painting_2",
            title: "Untitled",
            year: "2016",
            dimensions: "",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_8.webp",
            altText: "painting_2",
            title: "Friend sleeping",  
            year: "2019",
            dimensions: "50x70cm",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_9.webp",
            altText: "painting_2",
            title: "Golem playing at Pixie",  
            year: "2018",
            dimensions: "",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_11.webp",
            altText: "painting_1",
            title: "",
            year: "2020",
            dimensions: "",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_12.webp",
            altText: "painting_2",
            title: "",
            year: "2020",
            dimensions: "",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_13.webp",
            altText: "painting_2",
            title: "Untitled <br> DE series",
            year: "2024",
            dimensions: "",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_14.webp",
            altText: "painting_2",
            title: "Kid in New Zealand <br>guiding a cow",  
            year: "2016",
            dimensions: "A4",
            medium: "pencil on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_15.webp",
            altText: "painting_2",
            title: "Arco-Arco, <br>Cover art",  
            year: "2019",
            dimensions: "35x35cm",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_16.webp",
            altText: "painting_1",
            title: "",
            year: "2017",
            dimensions: "100x70cm",
            medium: "pastel on canvas"
        },
        {
            imageSrc: "resources/canvas/canvas_17.webp",
            altText: "painting_2",
            title: "",
            year: "2022",
            dimensions: "",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_18.webp",
            altText: "painting_2",
            title: "hug.1",
            year: "2022",
            dimensions: "",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_19.webp",
            altText: "painting_2",
            title: "Portrait of <br>Tsutomu Nihei", 
            year: "2020",
            dimensions: "A4",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_20.webp",
            altText: "painting_2",
            title: "",
            year: "2022",
            dimensions: "50x70cm",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_21.webp",
            altText: "painting_1",
            title: "Portrait of <br>Yue Minjun",  
            year: "2016",
            dimensions: "A4",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_22.webp",
            altText: "painting_2",
            title: "",
            year: "2018",
            dimensions: "",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_23.webp",
            altText: "painting_2",
            title: "drawing that I left <br>on my grandmother's <br>coffee table", 
            year: "2022",
            dimensions: "",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_24.webp",
            altText: "painting_2",
            title: "people sleeping <br>on bus", 
            year: "2016",
            dimensions: "A4",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_25.webp",
            altText: "painting_2",
            title: "in between sleep",
            year: "2016",
            dimensions: "50x70cm",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_26.webp",
            altText: "painting_1",
            title: "",
            year: "",
            dimensions: "",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_27.webp",
            altText: "painting_2",
            title: "",
            year: "2023",
            dimensions: "50x70cm",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_28.webp",
            altText: "painting_2",
            title: "",
            year: "",
            dimensions: "",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_29.webp",
            altText: "painting_2",
            title: "depressed",     
            year: "2016",
            dimensions: "A4",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_30.webp",
            altText: "painting_2",
            title: "Hayal kurmak <br>hala önemli",  
            year: "2022",
            dimensions: "50x70cm",
            medium: "pen on paper"
        },
    ];
    
    const wallPageData = [
        {
            imageSrc: "resources/wall/wall_20.webp",
            altText: "painting_1",
            title: "",
            date: "2024",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_3.webp",
            altText: "painting_1",
            title: "",
            date: "2021",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_19.webp",
            altText: "painting_1",
            title: "",
            date: "",
            location: ""
        },
        {
            imageSrc: "resources/wall/wall_1.webp",
            altText: "painting_1",
            title: "",
            date: "2024",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_2.webp",
            altText: "painting_1",
            title: "",
            date: "2022",
            location: "Izmir"
        },
        {
            imageSrc: "resources/wall/wall_6.webp",
            altText: "painting_1",
            title: "",
            date: "2024",
            location: "Istanbul"
        },
    
        {
            imageSrc: "resources/wall/wall_13.webp",
            altText: "painting_1",
            title: "",
            date: "",
            location: ""
        },
        {
            imageSrc: "resources/wall/wall_5.webp",
            altText: "",
            title: "",
            date: "",
            location: ""
        },
        {
            imageSrc: "resources/wall/wall_7.webp",
            altText: "painting_1",
            title: "",
            date: "",
            location: ""
        },
        {
            imageSrc: "resources/wall/wall_4.webp",
            altText: "painting_1",
            title: "16 faces",  
            date: "2024",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_9.webp",
            altText: "painting_1",
            title: "ribcage",
            date: "2016",
            location: "Boğaziçi Üniversitesi <br> Sarıtepe Kampüsü"
        },
        {
            imageSrc: "resources/wall/wall_10.webp",
            altText: "painting_1",
            title: "",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_11.webp",
            altText: "painting_1",
            title: "Gian Albert",  
            date: "2018",
            location: "Milan"
        },
        
       
        {
            imageSrc: "resources/wall/wall_14.webp",
            altText: "painting_1",
            title: "",
            date: "2021",
            location: "Marmaris"
        },
        {
            imageSrc: "resources/wall/wall_15.webp",
            altText: "painting_1",
            title: "Sleep (Mascara on wall)",  
            date: "2024",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_16.webp",
            altText: "painting_1",
            title: "",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_17.webp",
            altText: "painting_1",
            title: "",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_18.webp",
            altText: "painting_1",
            title: "",
            date: "2024",
            location: "Istanbul"
        },

        {
            imageSrc: "resources/wall/wall_21.webp",
            altText: "painting_1",
            title: "Mural with Köpek",      
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_22.webp",
            altText: "painting_1",
            title: "Mural on ship wreck",  
            date: "2017",
            location: "Bozcaada"
        }
    ];
    

    const motionPageData = [
        {
            videoSrc: "resources/mp4/motion_1.mp4",
            altText: "animation1",
            title: "Untitled", 
            date: "2024",  
            media: "digital",
            audio: "",
            credit: "",
            hasCustomStyle: true,
        },
        {
            videoSrc: "resources/mp4/motion_2.mp4",
            altText: "animation1",
            title: "Untitled",
            date: "2024",  
            media: "digital",
            audio: "",
            credit: "",
            hasCustomStyle: true,
        },
        // {
        //     videoSrc: "resources/mp4/motion_4.mp4",
        //     altText: "animation1",
        //     title: "a#1",
        //     date: "2023",
        //     media: "digital",
        //     audio: "",
        //     credit: ""
        // },
        {
            videoSrc: "resources/mp4/motion_6.mp4",
            altText: "animation1",
            title: "Running from <br>the police",
            date: "2024",
            media: "digital",
            audio: "",
            credit: ""
        }
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
        

                const closingDiv = document.createElement('div');
                contentBox.appendChild(closingDiv);
        

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

