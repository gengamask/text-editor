const butInstall = document.getElementById('buttonInstall');

// notice before the installation
window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
});

// click event for the install button
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
       }
     
       // Show prompt
       promptEvent.prompt();
       
       // Reset the deferred prompt variable, it can only be used once.
       window.deferredPrompt = null;
       
       butInstall.classList.toggle('hidden', true);
});

// event listner for after installation
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
