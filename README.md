# webapp-lit-characters
This is a repository for project web component characters with lit element

## Tech

webapp-lit-characters uses a number of open source projects to work properly:

- [web dev server] - Local development server
- [javascript] - is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
- [LitElement] - is a simple base class for creating fast, lightweight web components that work in any web page with any framework.
- [Bootstrap] - is the most popular CSS Framework for developing responsive and mobile-first websites.

## Installation

Requires [Node.js](https://nodejs.org/) v20+ to run.

Clone repository via https.

```sh
git clone https://github.com/benriquezm/webapp-lit-characters.git
```
Clone repository via ssh
>Note: you need to configure an ssh key locally and configure over the github repository.

```sh
git@github.com:benriquezm/webapp-lit-characters.git
```

Install the dependencies and devDependencies and start the server.

```sh
cd webapp-lit-characters
npm i
npm run start
```

For init project with configuration active of fallback for use router.

```sh
npm run start:fallback
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
http://localhost:8000/
```

## Annotations
>To use the Bootstrap CSS framework, it's necessary to add the following method to each file where the components contain Bootstrap class:
```sh
createRenderRoot() {
    return this;
}
```
