# Foreflight Take Home Test
A React app that allows users to query and visualize realtime airport information. Users can choose to search for as many airports as they want and populate their page with numerous airports, or remove specific airports if they need to. Statistics include data such as defualt airport information, current weather report and a forecast for the next two periods from the query.

Utilizes the Foreflight Weather and Airport API for data collection*, uses Redux to handle state and Jest for testing.

*Currently only supports a static rendering of the KAUS airport due to api vpn issues

## Getting Started

These instructions will guide you on setting up your own copy of the project running on your local machine for development and testing.

### Prerequisites

Before you begin, ensure you have Node.js installed on your computer. You can check this by running `node -v` in your terminal. If Node.js is not installed, you can download and install it from [Node.js's website](https://nodejs.org/).

### Installation

To get started, download the ZIP file containing the project from the provided link.

1. Extract the ZIP file to a directory of your choice.
2. Open a terminal or command prompt and navigate to the extracted directory.
3. Install the necessary packages by running the following command: ```npm install``

### Running the Application

After installing the packages, you can start the application by running the following command: ```npm start```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make edits.

## Usage

To use the application, simply enter the ICAO airport code into the search bar and press the "Search" button. The app will query the internal APIs and display information about the specified airport.

## Running Tests

To run tests, use the following command: ```npm test```

