// const {kafka}=require("./client.js");

// async function init(){
//     const admin=kafka.admin();
//     console.log("Admin created and connecting");
//     admin.connect();
//     console.log("Connection successful");
//     console.log('creating Fare updates');
//     //create topics
//    await admin.createTopics({
//         topics:[{
//             topic:'fareupdates',
//             numPartitions:2,


//         }]
//     });
//     console.log("Topic Created success [Fare-updates]");
//     console.log("Disconnecting");
//     await admin.disconnect();
// }
const { kafka } = require("./client.js");

async function init() {
    const admin = kafka.admin();
    try {
        console.log("Admin created and connecting");
        await admin.connect();
        console.log("Connection successful");
        console.log('Creating Fare updates');

        // Create topics
        await admin.createTopics({
            topics: [{
                topic: 'fareupdates',
                numPartitions: 2,
            }]
        });
        console.log("Topic Created successfully [Fare-updates]");
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        console.log("Disconnecting");
        await admin.disconnect();
    }
}

init().catch(console.error);
