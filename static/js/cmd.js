const commands = {
    "gravity": activateGravity,
    "alert": function (args) { alert(args.join(" ")) },
    "help": function () { alert("Figure it out!") }
}

document.addEventListener('keydown', function(event) {
    const commandPrompt = document.getElementById('command-prompt');
    const commandInput = document.getElementById('command-input');

    // Prevent tilde (~) from typing into the input field
    if (event.key === '`') {
        event.preventDefault();  // Prevent tilde from being typed
        // Toggle command prompt visibility
        commandPrompt.style.display = commandPrompt.style.display === 'block' ? 'none' : 'block';
        if (commandPrompt.style.display === 'block') {
            commandInput.focus(); // Focus the input field when the prompt shows
        }
    }

    // Log value when Enter is pressed and close the prompt
    if (event.key === 'Enter') {
        if (commandPrompt.style.display === 'block') {
            const cmd = commandInput.value.split(" ");
            commandInput.value = ''; // Clear the input field
            commandPrompt.style.display = 'none'; // Hide the prompt

            if (cmd[0] in commands) {
                console.log(cmd.slice(1));
                commands[cmd[0]](cmd.slice(1));
            }
        }
    }

    // Close the prompt when Escape is pressed
    if (event.key === 'Escape') {
        commandInput.value = ''; // Clear the input field
        commandPrompt.style.display = 'none'; // Hide the prompt
    }
});
