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

