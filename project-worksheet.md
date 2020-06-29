# Project 2 Overview Animal Crossing Critters

## Project Links

- [Github repo link](https://github.com/pallie1/project2reactAllie)
- [add your deployment link]()

## Project Description

This is a site where you can look up information about the bugs and fish in the game Animal Crossings. [This is my reference.](https://critterpedia-plus.mutoo.im/#/discovery/insects)

## API

ACNH is the REST API I'm using. It was actually my second choice, but the API I wanted to use has closed off API key requests. ACHN doesn't require authentification keys. Below is an example of the data this API returns.

Here's a link to the documentation: https://acnhapi.com/doc 


```
{
"id": 1,
"file-name": "bitterling",
"name": {},
"availability": {},
"shadow": "Smallest (1)",
"price": 900,
"price-cj": 1350,
"catch-phrase": "I caught a bitterling! It's mad at me, but only a little.",
"museum-phrase": "Bitterlings hide their eggs inside large bivalves—like clams—where the young can stay safe until grown. The bitterling isn't being sneaky. No, their young help keep the bivalve healthy by eating invading parasites! It's a wonderful bit of evolutionary deal making, don't you think? Each one keeping the other safe... Though eating parasites does not sound like a happy childhood... Is that why the fish is so bitter?",
"image_uri": "https://acnhapi.com/v1/images/fish/1",
"icon_uri": "https://acnhapi.com/v1/icons/fish/1"
}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [mobile wireframe](https://i.imgur.com/3jOxP12.png)
- [desktop wireframe](https://i.imgur.com/jOHjJ8c.png)
- [react architecture](https://i.imgur.com/xWxbAGH.png)


### MVP/PostMVP & Time Tracker

[Please see this Google Sheets for my time/priority matrix.](https://docs.google.com/spreadsheets/d/e/2PACX-1vSBAB-1Z6zPF7iHdsZdZYaANFCbnBckTij17FF0pg7X0UCbtP7Msj3922x-wb3p5D8bFvoOpCI-CWO4/pubhtml)

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 
| Show all Critters | This will display all of the critters in a grid format| 
| Single Critter | Display one critter's information | 
| Search | Type in a critter's name and pull up a single critter | 
| Months filter | Click a month to see which critter's are active | 



## Additional Libraries
 React-bootsrap

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
