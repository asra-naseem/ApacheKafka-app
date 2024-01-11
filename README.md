
# Kafka-Based Messaging System

This project demonstrates a simple messaging system using Apache Kafka and Node.js. It includes scripts for Kafka producer, consumer, and admin operations, providing a basic example of a Kafka-based data streaming application.

## Project Structure

- **admin.js**: Handles Kafka administration tasks, such as topic creation.
- **client.js**: Configures the Kafka client for the application.
- **consumer.js**: A Kafka consumer that subscribes to a topic and processes incoming messages.
- **producer.js**: A Kafka producer that sends messages to a specified topic based on user input.
- **package.json** & **package-lock.json**: Define project dependencies and their locked versions.

## Setup and Configuration

1. **Install Dependencies**: Run `npm install` to install the required packages.
2. **Kafka Broker**: Ensure you have a Kafka broker running. The default broker is configured at `localhost:9092`. Update `client.js` if your broker has a different address.
3. **Start Scripts**: Run the producer (`node producer.js`) and consumer (`node consumer.js`) in separate terminals. Use `node admin.js` to perform admin tasks like creating topics.

## Usage

- **Producer**: Input data in the format `<riderName> <location>` to send messages to the 'fareupdates' topic.
- **Consumer**: Automatically reads and prints messages from the 'fareupdates' topic.
- **Admin**: Manages Kafka topics and other administrative tasks.

## Dependencies

- KafkaJS: A modern Apache Kafka client for Node.js

Ensure you have Node.js installed and your Kafka environment is correctly set up to use this project.

## Commands

### Start Zookeeper Container
```
docker run -p 2181:2181 zookeeper
```

### Start Kafka Container
```
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

Replace `<PRIVATE_IP>` with your machine's private IP address.

## Running Locally

### Run Multiple Consumers
```
node consumer.js <GROUP_NAME>
```
Replace `<GROUP_NAME>` with the desired consumer group name.

### Create Producer
```
node producer.js
```
