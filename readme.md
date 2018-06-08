## API info on https://cuoc.org.uk/api/#bof
## API info on Nosort: http://forum.nopesport.com/viewtopic.php?f=1&t=13663#p149870

There is an RSS feed with limited data and not split into separate fields, so not easy to extract the bits you want.
There is now also a JSON version, but I haven't looked at it yet to see if it's any better.

CODE: SELECT ALL
http://www.britishorienteering.org.uk/fixturesjson.php - Like the RSS feed, it can accept parameters for the club, association and level, e.g.


CODE: SELECT ALL
http://www.britishorienteering.org.uk/fixturesjson.php?level=d – returns all forthcoming level d events.


CODE: SELECT ALL
http://www.britishorienteering.org.uk/fixturesjson.php?level=int,a,b – returns all forthcoming international, level a and b events


CODE: SELECT ALL
http://www.britishorienteering.org.uk/fixturesjson.php?club=havoc – returns all events and activities where the club is HAVOC


CODE: SELECT ALL
http://www.britishorienteering.org.uk/fixturesjson.php?assoc=eaoa&club=havoc&level=d,act - returns level d events and activities where the association is EAOA and the club is HAVOC



# Scottish Orienteering Website Companion App.
Keep it simple, do it well, and make it very easy to use and attractive.

We will therefore only have it for displaying upcoming events and activities.
Customisable) X mile radius of the phone, or searchable by any location between two dates (for e.g. somebody going on holiday and planning ahead).
Options for map view or list view (default for map view?)

To consider:
Events and activities are different categories on the British Orienteering website (activities being the more informal club training-type things).
Can zoom on map and click on orienteering pin (can supply!) for one screen of simple info, with a direct link to the entry website if applicable Do we colour-code events on the map for how soon they're coming up? (See British Orienteering website - I don't think this is a necessity, but might be helpful)

To include SOA logo, and use of SOA colour-scheme !

Ideal format for displaying events:
* Title of event/activity (no more acronyms!)
* Date / location / time
* Perfect for: [who and what, e.g. Beginners wanting to gain map skills; Families for an afternoon activity etc]
* What to bring:
* Where to meet:
* Cost [and link to online entry if applicable]
* Event run by/contact info: [Club name and contact details]

We will have a couple of issues with this (!):
All necessary info should (ideally) display on one screen, succinctly. However, the British Orienteering (hereafter known as BOF!) format for event info is minimal, so even though organisers are required to register their event/activity with BOF on the BOF website, they often/always have a separate page on their club website giving all the details (in reams of mish-mash, as we talked about on Saturday).
Q - where is the app going to pull the event info from?
Duplication/time constraints. If the app doesn't pull the info from the BOF website (clubs don't seem to update it well), or club websites (no standard format; no way for the app to tell when an event has been added?), how do we do it? Volunteers and staff are already really stretched!
