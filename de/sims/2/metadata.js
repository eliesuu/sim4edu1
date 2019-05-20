/*
 overwrite variables to be translated
 */
oes.ui.i18n.transDates.metadata = "2019-04-01";  // document last meta-data translation date
sim.model.title = "Ein Serviceschalter-Warteschlangen-Modell mit kontinuierlicher Zeit und Durchlaufzeit-Statistik";
sim.model.systemNarrative = "Die an einem Serviceschalter ankommenden Kunden müssen in einer Schlange warten, " +
    "wenn der Serviceschalter besetzt ist. Andernfalls, wenn die Warteschlange leer ist und der Serviceschalter nicht besetzt ist, " +
    "werden sie durch den Service-Mitarbeiter unverzüglich bedient. Wenn ein Service abgeschlossen ist, geht der " +
    "Kunde und der nächste Kunde aus der Warteschlange, wenn sie nicht leer ist, wird bedient.";
sim.model.shortDescription = "Ein einfaches Serviceschalter-Warteschlangen-Modell (ein Serviceschalter und eine Warteschlange) mit " +
    "kontinuierlicher Simulationszeit und Durchlaufzeit-Statistik. Um ihre Ankunftszeit aufzuzeichnen, werden einzelne Kunden explizit als " +
    "Elemente einer Warteschlange repräsentiert. Das Modell beinhaltet zwei Objekttypen: 'Serviceschalter' (<i>ServiceDesk</i>) " +
    "und 'Kunden' (<i>Customer</i>), und zwei Ereignistypen: 'Kunden-Ankunft' (<i>CustomerArrival</i>) und 'Kunden-Abgang' " +
    "(<i>CustomerDeparture</i>). Sowohl die Zufallsvariable für die Zeit bis zum nächsten Wiederauftreten von Kundenankunftsereignissen " +
    "als auch die Zufallsvariable zur Modellierung der Service-Dauer haben eine exponentielle Wahrscheinlichkeitsverteilung.";
