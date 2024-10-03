const fs = require('fs');
const path = require('path');

/**
 * Creates a directory called 'Logs' and generates 10 log files inside it.
 * Each file contains some sample text.
 */
function createLogFiles() {
    const logsDir = path.join(__dirname, 'Logs');  
    
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);  // Create the Logs directory
        process.chdir(logsDir);  // Change the current working directory to 'Logs'
        
        // Create 10 log files with sample text
        for (let i = 0; i < 10; i++) {
            const logFileName = `log${i}.txt`;  // Generate file names log0.txt to log9.txt
            fs.writeFileSync(logFileName, `This is log file number ${i}`, 'utf8');  // Write text to each file
            console.log(`Created: ${logFileName}`);
        }
    } else {
        console.log('Logs directory already exists. No new logs created.');
    }
}

/**
 * Deletes all log files from the 'Logs' directory and removes the directory itself.
 */
function removeLogFiles() {
    const logsDir = path.join(__dirname, 'Logs');  // Define the Logs directory path

    // Check if the Logs directory exists
    if (fs.existsSync(logsDir)) {
        // Read the contents of the Logs directory and delete each file
        fs.readdirSync(logsDir).forEach(file => {
            const filePath = path.join(logsDir, file);
            fs.unlinkSync(filePath);  // Delete the file
            console.log(`Deleted: ${file}`);
        });

        // Remove the Logs directory itself
        fs.rmdirSync(logsDir);
        console.log('Removed the Logs directory.');
    } else {
        console.log('Logs directory does not exist. Nothing to remove.');
    }
}

// Uncomment the function you want to run:

// To create log files:
// createLogFiles();

// To remove log files:
 removeLogFiles();
