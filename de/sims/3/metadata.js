/*
 overwrite variables to be translated
 */
oes.ui.i18n.transDates.metadata = "2019-04-01";  // document last meta-data translation date
sim.model.title = "Ein aktivitäts-basiertes Serviceschalter-Warteschlangen-Modell";
sim.model.systemNarrative = "Die an einem Serviceschalter ankommenden Kunden müssen in einer Schlange warten, wenn " +
    "der Serviceschalter besetzt ist. Andernfalls, wenn die Warteschlange leer ist und der Serviceschalter nicht besetzt " +
    "ist, werden sie durch den Service-Mitarbeiter unverzüglich bedient. Wenn ein Service abgeschlossen ist, geht der " +
    "Kunde und der nächste Kunde aus der Warteschlange, wenn sie nicht leer ist, wird bedient.";
sim.model.shortDescription = "Ein Serviceschalter-Warteschlangen-Modell, bei dem der Service als Aktivität und der " +
    "Serviceschalter als Ressource modelliert ist und dadurch automatisch eine Auslastungsstatistik berechnet werden " +
    "kann. Das Modell beinhaltet einen Objekttyp: 'Serviceschalter' (<i>ServiceDesk</i>), einen Ereignistyp: 'Kunden-Ankunft' " +
    "(<i>CustomerArrival</i>) und einen Aktivitätstyp: 'Service-Durchführung' (<i>PerformService</i>). Die " +
    "Zufallsvariable für die Zeit bis zum nächsten Wiederauftreten von Kundenankunftsereignissen hat eine exponentielle " +
    "Wahrscheinlichkeitsverteilung, während die Zufallsvariable zur Modellierung der Service-Dauer eine empirische " +
    "Wahrscheinlichkeitsverteilung hat.";
sim.model.license = "CC BY-NC";
sim.model.creator = "Gerd Wagner";
sim.model.created = "2016-10-04";
sim.model.modified = "2016-10-18";
