---
name: Flutter Event App
technologies: Flutter, Dart, Firebase, Sportify Web API and Web Playback SDK
image: event-list.png
link: https://github.com/TomCranitch/flutter-event-app
---

This app provides event managers with the tools necessary to manage great events. It includes the ability to scan and distribute tickets, show attendee lists and manage a shared Spotify playlist.

### Features
* Range of event data, including guest lists, title, description and feature image
* All event and user information is manged from with the Firebase Cloud Firestore
* Manage entry though the distribution of eTickets. Also includes the ability for multiple devices to scan tickets, with entry managed and updated in real time with the Cloud Firestore
* Integrates with an NPM server running the Spotify Web Playback SDK to create a shared party playlist. This shared playlist includes the ability for guests to add new songs, vote on already added songs, and see what is queued and currently playing.
* Users can use their existing accounts to sign in through Firebase Auth

