---
name: Public Transport Location Tracker
technologies: Flutter, Dart, Python, Tornado
image: bus-tracker-stop.png
link: #
---

A public transport location tracker. Currently only works for TRANSLink services in SEQ but in theory could  work for other regions by changing the GTFS realtime feed url (although this does make some assumptions at the moment about how the feed is implemented that are not guaranteed by the specification).

### Features
 - Displays all services operating along a given route or through a given station
 - View the realtime schedule for a specific service
 - View all upcoming services through a specific station in real time

### Built With
 - **Flutter** - Used to implement the client side application
 - **Python and Torado** - Used to implement the server using an asynchronous approach and web sockets
