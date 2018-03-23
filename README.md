# phac-kpnet-autocomplete

## Project

### Autocomplete website/widget

#### Description
- A website that enables users to quickly find and select dogs from a list of suggestions, as they type.
- The list is dynamically generated from a list of dog breeds stored as a JSON file on the Heroku server.
- Once the dog is selected, a random picture of the specimen is displayed. Every FETCH click will render a new random picture of this breed's specimen.
- The subreeds, such as Yorkshire terrier are displyed in brackets, i.e. terrier (Yorkshire). To find Yorkshire terrier, select terrier.

#### The App structure

![diagram](https://user-images.githubusercontent.com/18426161/37788373-29823162-2df9-11e8-940e-39ce288e92ca.jpg)

The server handles the search and stores the object with all the dog breeds available.

All other operations including the API call to DOG.CEO.API are handled from the client's side.

#### Testing

1) Only pure functions are tested and there is only one pure function.

2) The photos and the original list of breeds come from: [see resource](https://dog.ceo/dog-api/).

