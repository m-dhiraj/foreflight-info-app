# Foreflight Take Home Test
A React app that allows users to query and visualize realtime airport information. Users can choose to search for as many airports as they want and populate their page with numerous airports, or remove specific airports if they need to. Statistics include data such as defualt airport information, current weather report and a forecast for the next two periods from the query.

Utilizes the Foreflight Weather and Airport API for data collection*, uses Redux to handle state and Jest for testing.

*Currently only supports a static rendering of the KAUS airport due to api vpn issues communicated to me by the recruiter

## Getting Started

These instructions will guide you on setting up your own copy of the project running on your local machine for development and testing.

### Prerequisites

Before you begin, ensure you have Node.js installed on your computer. You can check this by running `node -v` in your terminal. If Node.js is not installed, you can download and install it from [Node.js's website](https://nodejs.org/).

### Installation

To get started, download the ZIP file containing the project from the provided link.

1. Extract the ZIP file to a directory of your choice.
2. Open a terminal or command prompt and navigate to the extracted directory.
3. Install the necessary packages by running the following command: 
```npm install```

### Running the Application

After installing the packages, you can start the application by running the following command: 
```npm start```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make edits.

## Usage

To use the application, simply enter the ICAO airport code into the search bar and press the "Search" button. The app will query the internal APIs and display information about the specified airport. Look through the airport information displayed, you can choose to add more airports to your list by using the same search bar. Once you decide you want to remove an airport, simply press the remove button on the appropriate airport card.

## Running Tests

To run tests, use the following command: 
```npm test```

## Design Decisions and Tradeoffs

Frontend Framework:

Decision: I chose to use React because of its component based architecture and it popularity, having expirence in it makes it fast and efficent to devlop in.

Tradeoff: There is a learning curve for devlopers not expirenced in React, potentially impacting the scaling of my application as it relies on the foundation of others.

Backend Technology:

Decision: I chose to stick with React and not incorporate any backend framework or technology due to the nature of the assessment, it was lightweight and straightforward with no dense server-side logic.

Tradeoff: I lost the ability to have an elaborate server-side logic and to connect to technologies like a database to store and retrieve data, this would be something I have to consider if adding authentication to store the state of a webpage after each use of my application.

State Management:

Decision: I decided to utilize Redux to handle the global state of my application as numerous components were referencing that state. Also helps deal with the async data fetching that was technically supposed to be implemented.

Tradeoff: Setting up the Redux foundation is time consuming rather than using props to pass my data through components, but the down side of that is the difficulty to debug and scale my applicaiton.

Styling:

Decision: I used simple CSS files to style my application do to its lightweight nature.

Tradeoff: External libraries such as Material UI can provide access to visual styling and features popular to users and enhance their experience, this also reduces the overall CSS code to style each component.

Testing:

Decision: I wrote unit tests and snapshot tests to ensure code coverage and functionality of my code.

Tradeoff: Writing tests for your functions is time taking and can hinder your devlopment speed, but the tradeoff is the reliability of your functions.

Other Design Choices:

I choose to implement a page with a central search that can query one airport at a time, the user can choose to populate the page with as many airports as they deem fit but it is up to them. I thought that is a more intuitive approach to the usability of my app rather than have the user enter a list of airport codes that they want to query at once, it also lightens the load on my application. 