# Angleo
A platform for anglophones in Quebec, Canada.

<small>**Please note that all API keys in the repository were disabled once the repository was made public.**</small>

Developed while at [ConUHacks IV](https://conuhacks.io/) by [Alvin](https://github.com/alvintangz), [Robin](https://github.com/RPHLuo), [Philip](https://github.com/Veracities), and [Tiago](https://github.com/TiagoF99).

### The Challenge
The department of Canadian Heritage challenged hackers at ConUHacks IV from January 26 to 27. Hackers were tasked with creating a web and mobile application focused on proposing solutions to challenges faced by the English-speaking community in Quebec.

### The Concept
Angleo is a mobile application that anglophones in Quebec could use to view places nearby them, with helpful tools they might need to feel more comfortable. These places consisted of data (in the DB) such as:
- Coordinates (latitude & longitude): Coordinates that are useful to determine places surrounding a user.
- Name: Name of the place.
- Address: Address of the place.
- City: City of the place.
- Votes: A number of users, in which each user can up vote or down vote a place based off its friendliness towards anglophones.
- Cultural Significance: A short description of a place's significance around its community.
- Spoken Language: Whether the place has employees or people that speak English, French or both.
- Translations: Basic translations of what people might say at the specified place. E.g. a translation for "What's on the menu?" can be listed for a resturant.

It was determined earlier to use MongoDB and Yelp's API to hold all the data needed. As the hackathon went on, we switched over to storing all data through MongoDB for time's sake.

The application also allowed users to take a picture of something with French text, and have that text converted to English text. This could be done by calling Google's Vision API to determine the text, and using Google's Translate API to translate that text. Unfortunetly, as JavaScript was asynchronous, it made it hard for the APIs to be implemented through the backend, to be called by the mobile application. At the end, this tool wasn't implemented in the demo.

A static web application is included in the web part to display how the data could be displayed to organizations, such as the government, in order for them to get a bigger picture on how they can provide better resources or services in the future in specified locations around Quebec.

## The Stack & Build
The following technologies were used:
- React Native for Mobile App Development
- Node.js (+ Express.js) for delivering REST API to the App
- HTML5, CSS, JavaScript for the Data Visualization Concept
- MongoDB as the DB
- Google Cloud Platfrom for their APIs and backend hosting

The data stored in the database held "places". Data of all places came from existing government data and YELP data. Python was used in the process to combine the available data to JSON for MongoDB. It was also used to add on to the data, that our application itself wanted to hold such as cultural significance.