[![Build Status](https://travis-ci.com/fac19/prepare-me.svg?branch=master)](https://travis-ci.com/fac19/prepare-me)

[![codecov](https://codecov.io/gh/fac19/prepare-me/branch/master/graph/badge.svg)](https://codecov.io/gh/fac19/prepare-me)

## **Prepare ME**

An interactive picture story builder for parents and social care professionals allowing printable visual aids to be made quickly and easily.

![](https://res.cloudinary.com/didur5psx/image/upload/v1592550439/starting_school/prepare_me_app_02_us5xyp.gif)

Try it live on the web: https://prepare-me.netlify.app/

## **Features**

- Pre built and blank story templates
- Simple interface that works on mobile and desktop
- Integrated picture searching, taking, uploading and cropping
- View Mode to consume stories on a mobile device
- Stories are printable on desktop (mobile coming soon)

## Notes to testers / reviewers

This app is a work in progress and not everything works properly yet. In particular...

1. The PECS card template does not print properly and the text on the cards is way too small.
2. PDF printing is not quite there yet. What is saved doesn't quite match what is on screen.
3. Printing from some mobiles does not work properly. Intead of all the pages being printed the current page is printed (badly).

We welcome you taking the time to look at our project but we'd appreciate if if you don't log issues for these particular problems as we are well aware of them. Thanks!

## **How to run locally**

First clone this repo `git clone https://github.com/fac19/prepare-me.git`

Install all the required libraries with `npm i`

Run the project with `npm start` and your system should open a browser to http://localhost:3000

In the terminal you should also be given a URL that points to the ip address of your local machine. You can use this URL to try the app on your other devices e.g. mobiles, tablets, smart fridges etc

### Using inbuilt google image search

If you want to use the built in google image search then you will need to create a .env file in the projects root folder with a key `REACT_APP_googleAPIkey`. The value should be set to your API key.

```bash
echo "REACT_APP_googleAPIkey=SIzaSYAAtXpb1wKjWD0tJevuMrLvmBx_FfzaTrM" > .env
```

To get an API key either ask someone from the team if you can borrow ours or get your own from the link below. The free API keys are good for up to 100 searches per day and can be generated in seconds if you already have a google account. https://developers.google.com/custom-search/v1/introduction

## Testing

- Unit tests (Jest) can be run with `npm run test`
- E2E and integration tests (Cypress) can be run in console mode with `npm run cy:ci`
- Alternatively if you want to see the above tests happening on screen the start the sever with `npm start` and then run `npm run cy:open`.

## The Team

Caitriona - Product Owner

Ako, [akomiqaia](https://github.com/akomiqaia) - Scrum Master

Chloe, [chloeh24](https://github.com/Chloeh24) - DevOps Lead

Roger, [Roger-Heathcote](https://github.com/Roger-Heathcote)- UX/UI Lead

Kat, [Alexreid95](https://github.com/Alexreid95) - QA Lead

## Our Tech Stack

### Front end

- React
  - create-react-app
  - react-router-dom
  - react-swipeable
  - styled-components
- Material UI
- Cloudinary upload widget

### Back end

- Netlify
- Travis
- Cloudinary

### Testing

- RTL + Jest
- Cypress
- Codecov

## Further information

### Creating/Removing templates

We have two types of template, Story Templates and Page Templates.

Story Templates are sequences of pages, each page consisting of a page template name and the values needed to populate it's fields. These live in src/storyTemplates. This is where you would create new ready made templates like the School Story.

Page Templates are the React components that render the individual pages. They also contain the default values for their fields. They live in /src/components/pageTemplates. In that folder there are also two handler functions for dealing with clicks on the text (editHandler) and clicks on the images (uploadImageHandler). There is also a helper object getPageTemplateByName which relates page template names to their actual React components. So to add a new page template right now you would need to...

1. Create a component in src/components/pageTemplates and set defaults for its fields.
2. Add that page template to getPageTemplateByName
3. If that template is general purpose i.e. not a custom one for a particular story then add it to the appropriate page template chooser page, right now either src/pages/PageTemplates for story page templates or src/pages/PecsPageTemplates for pecs page templates.
4. To support PDF printing all the layout must be duplicated using react-pdf primitives in the file /src/components/RenderStory

We hope steps 2 and 3 can be eliminated in the near future. Step 4 looks to be trickier but hopefully that too can be eliminated in time.
