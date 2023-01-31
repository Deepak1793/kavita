# :zap: Rhythm App

* The Rhythm app to provide best experience for users to listen music online 
* User can listen to ad free music online
* Search best music which user likes
* Listen to the songs and they can add/remove from favorite list.
* Updated to latest Angular version and all dependencies updated
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo](https://gitlab.stackroute.in/capstone-team-2/music-app.git)

## :page_facing_up: Table of contents

* [:zap: Angular Music App](#zap-angular-music-app)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:envelope: Contact](#envelope-contact)


## :books: General info

* Uses the model-view-viewmodel (MVVM) of Angular to bind the remote data that is stored in objects in the application template. The component plays the part of the controller/viewmodel. The template represents the view.
* Very eapp to show music online, does not use reactive programming best practices - specified function return types, typescript models, etc....


## :signal_strength: Technologies

* [Angular v13](https://angular.io/)
* [Napster REST API v2](https://developer.napster.com/) used to search for thrid party api albums.
* [Angular Material Design v13](https://material.angular.io/) used for the user interface, especially [mat-menu](https://material.angular.io/components/menu/overview), [mat-sidenav](https://material.angular.io/components/sidenav/overview),  [mat-card](https://material.angular.io/components/card/overview) etc.

## :floppy_disk: Setup

*Install dependencies using `npm install`.
*Run all the microservices.(Refer Rhythm-info.md in music-service repo)
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app does automatically reload if you change any of the source files.

## :computer: Code Examples

* `services-*.service.ts` to get music API  data using Angular httpClient module.


## :cool: Features

* [Angular HttpClient](https://angular.io/guide/http) module used to communicate with back-end services via the XMLHttpRequest browser interface.

## :clipboard: Status & To-Do List

* Status: Working.
* To-Do: Nothing.


