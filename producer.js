const { kafka } = require("./client.js");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function init() {
    const producer = kafka.producer();
    await producer.connect();
    console.log("Producer connected successfully");

    rl.setPrompt('Enter rider name and location (e.g., John north): ');
    rl.prompt();

    rl.on('line', async function (line) {
        const [riderName, loc] = line.split(' ');

        try {
            await producer.send({
                topic: 'fareupdates',
                messages: [
                    {
                        partition: loc.toLowerCase() === "south" ? 0 : 1,
                        key: 'location-update',
                        value: JSON.stringify({ name: riderName, loc: loc }),
                    },
                ],
            });

            console.log(`Message sent successfully for [${riderName}] at [${loc}]`);
        } catch (error) {
            console.error("An error occurred while sending message:", error);
        }

        rl.prompt();
    });
}

init().catch(error => {
    console.error("An error occurred:", error);
    process.exit(1); // Exit the process in case of an unhandled error
});
