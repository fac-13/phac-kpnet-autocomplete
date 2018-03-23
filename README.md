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

Your task is to build a site which will update as you type (an autocompleter), as per the description above.

#### Goals

1) We expect __back-end testing using tape__ (test as many components as you can) and basic __front-end testing__. Please note that we expect tests on _pure functions_ and _not_ on the router.

2) Host your project on __heroku__, [see resource](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).

3) Use __module.exports__ and __require__ to break a single large server file into smaller modules.

4) Consider what would be a good __server file structure__ based on what we have discussed over the week.


#### Example

[Dwyl autocompleter](https://github.com/dwyl/autocomplete).