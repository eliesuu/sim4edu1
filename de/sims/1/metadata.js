/*
 overwrite variables to be translated
 */
oes.ui.i18n.transDates.metadata = "2019-03-05";  // document last meta-data translation date
sim.model.title = "Ein Serviceschalter-Warteschlangen-Modell mit Auslastungs- und Maximum-Warteschlangenlängen-Statistik";
sim.model.systemNarrative = "Die an einem Serviceschalter ankommenden Kunden müssen in einer Schlange warten, " +
    "wenn der Serviceschalter besetzt ist. Andernfalls, wenn die Warteschlange leer ist und der Serviceschalter nicht besetzt ist, " +
    "werden sie durch den Service-Mitarbeiter unverzüglich bedient. Wenn ein Service abgeschlossen ist, geht der " +
    "Kunde und der nächste Kunde aus der Warteschlange, wenn sie nicht leer ist, wird bedient.";
sim.model.shortDescription = "Ein einfaches Serviceschalter-Warteschlangen-Modell (ein Serviceschalter und eine Warteschlange) mit zwei Statistiken: " +
    "maximale Warteschlangenlänge und Auslastung. Der Einfachheit halber verwendet das Modell abstrakte (diskrete) Zeit und " +
    "abstrahiert von einzelnen Kunden und von der Zusammensetzung der Warteschlange, die nur durch ihre Länge repräsentiert wird. " +
    "Das Modell beinhaltet einen Objekttyp: 'Serviceschalter' (<i>ServiceDesk</i>), und zwei Ereignistypen: 'Kunden-Ankunft' " +
    "(<i>CustomerArrival</i>) und 'Kunden-Abgang' (<i>CustomerDeparture</i>). Die Zufallsvariable zur Modellierung der Zeit " +
    "bis zum Wiederauftreten von Kundenankunftsereignissen hat der Einfachheit halber eine diskrete uniforme Wahrscheinlichkeitsverteilung " +
    "und die Zufallsvariable zur Modellierung der Service-Dauer hat eine diskrete empirische Wahrscheinlichkeitsverteilung.";
