# Bewerbung von Michael Hammer

Es freut mich sehr, dass meine Bewerbung Sie neugierig gemacht hat.

In diesem Repository finden sie den vollständigen Quellcode zu meinem [Online-Lebenslauf](https://hammer-bewerbung.de/). Das einzige, was ich zensiert habe, ist der deploy-Task in der [Makefile](./Makefile) 😉

## Zum generellen Setup

Ich habe es mir zur Angewohnheit gemacht, für meine neueren Projekte ein [Makefile](./Makefile) anzulegen, die alle wichtigen Befehle des Projekts enthält. 

Welche das sind erfährt man mit dem CommandLine-Befehl `make`


### Projekt starten

Ist Node auf dem PC installiert, kann das Projekt mit `make setup` installiert werden.

Gestartet wird es dann mit `make dev`

`make build`und `make deploy`sind dann für den Livegang zuständig.