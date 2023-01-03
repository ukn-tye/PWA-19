const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredprompt = event;
    butInstall.classList.toggle("hidden, false");
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const eventPrompt = window.deferredprompt;
    if (!eventPrompt) {
        return; 
    }
    eventPrompt.prompt();
    window.deferredprompt = null;
    butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredprompt = null;
});
