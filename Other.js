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
const smoothFactor = 0.1;  // How fast the eye follows the cursor

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
        eye.style.transition = "transform 0.1s ease-out";  // Smooth transition for the transform
        eye.style.transform = `
            rotate(${config.rotation}deg)
            translate(${constrainedOffsetX}px, ${constrainedOffsetY}px)
        `;
    });
}

// Function to make the eyes wander together when idle (without mouse input)
function makeEyesWander() {
    const maxMovement = 15; // Maximum pixel movement for wandering
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
const smoothFactor = 0.1;  // How fast the eye follows the cursor

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
        eye.style.transition = "transform 0.1s ease-out";  // Smooth transition for the transform
        eye.style.transform = `
            rotate(${config.rotation}deg)
            translate(${constrainedOffsetX}px, ${constrainedOffsetY}px)
        `;
    });
}

// Function to make the eyes wander together when idle (without mouse input)
function makeEyesWander() {
    const maxMovement = 15; // Maximum pixel movement for wandering
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

























