let wakeLock = null;

// Check if the browser supports the Wake Lock API
if ('wakeLock' in navigator) {
    // Function to request a wake lock
    async function requestWakeLock() {
        try {
            // Attempt to acquire a screen wake lock
            wakeLock = await navigator.wakeLock.request('screen');
            console.log("Wake Lock is active");

            // Listen for release events (optional)
            wakeLock.addEventListener('release', () => {
                console.log("Wake Lock has been released");
            });

            // Update the button text to show Cook Mode is active
            document.getElementById('cook-mode-btn').textContent = "Cook Mode Active";

        } catch (err) {
            console.error(`Failed to acquire wake lock: ${err.message}`);
        }
    }

    // Function to release the wake lock
    function releaseWakeLock() {
        if (wakeLock !== null) {
            wakeLock.release();
            wakeLock = null;

            // Reset the button text
            document.getElementById('cook-mode-btn').textContent = "Activate Cook Mode";
            console.log("Wake Lock released manually");
        }
    }

    // Add event listener for visibility changes to handle the wake lock when the user switches tabs
    document.addEventListener("visibilitychange", () => {
        if (wakeLock !== null && document.visibilityState === 'visible') {
            requestWakeLock();
        }
    });

    // Add event listener to the Cook Mode button
    document.getElementById('cook-mode-btn').addEventListener('click', () => {
        if (wakeLock === null) {
            requestWakeLock();  // Request the wake lock when the button is clicked
        } else {
            releaseWakeLock();  // Release the wake lock when it's already active
        }
    });

} else {
    // If the Wake Lock API is not supported, disable the Cook Mode button and show a fallback message
    document.getElementById('cook-mode-btn').disabled = true;
    document.getElementById('unsupported-message').style.display = 'block';
}


