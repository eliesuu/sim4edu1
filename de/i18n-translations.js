oes.ui.i18n.translations = {
  //========== description.html ==========================================================
  "expl-CM": "Das <dfn>konzeptuelle Modell</dfn>, auch <em>Domänenmodell</em> genannt, " +
      "beschreibt das reale <em>zu untersuchende System</em> mit Hilfe einer Beschreibung seiner relevanten " +
      "Objekt- und Ereignis-Typen sowie seiner Dynamik, wodurch es möglich wird zu verstehen, " +
      "was in dem System vor sich geht.",
  "expl-CIM": "<p>Ein <dfn>konzeptuelles Informationsmodell</dfn> beschreibt das Domänenvokabular, " +
      "das z.B. in dem System-Narrativ verwendet wird, auf eine semi-formale Art und Weise. Ein solches " +
      "Vokabular besteh im Wesentlichen aus Namen für</p> " +
      "<ul><li><strong>Typen</strong>, korrespondierend mit <i>Klassen</i> in der objekt-orientierten Modellierung, " +
      "or <i>unary predicates</i> in formal logic,</li> " +
      "<li><strong>properties</strong> corresponding to <i>binary predicates</i> in formal logic,</li>" +
      "<li><strong>associations</strong> corresponding to <i>n-ary predicates</i> (with <i>n</i> > 1) in formal logic.</li></ul> " +
      "<p>The main categories of types are <i>object types</i> and <i>event types</i>. A simple form of " +
      "conceptual information model is obtained by providing a list of each of them, while a more elaborated " +
      "model, preferably in the form of a UML class diagram, also defines properties and associations, " +
      "including the <strong>participation</strong> of objects (of certain types) in events (of certain types).</p>",
  "expl-CPM": "<p>A <dfn>conceptual process model</dfn> should include the event types "+
      "identified in the conceptual information model, and describe in which temporal sequences events may occur, "+
      "based on conditional and parallel branching. We can do this by describing, for each of these event types, "+
      "the <b><i>causal regularity</i></b> associated with it " +
      "in the form of an <b><i>event rule</i></b> that defines the <b><i>state changes</i></b> and " +
      "<b><i>follow-up events</i></b> caused by events of that type.</li></ol>" +
      "For simplicity, we may merge those types of events, which can be considered to temporally " +
      "coincide. This is the case whenever an event unconditionally causes an immediately succeeding follow-up " +
      "event.</p><p>A conceptual process model can be defined in the form of an <b><i>event rule table</i></b> " +
      "or in the form of BPMN process diagrams that visualize the event rules.</p>",
  "expl-DM": "The simulation <dfn>design model</dfn> defines a computational design for a simulation " +
      "based on a conceptual model. Unlike the conceptual model, the design is tailored towards the purpose " +
      "of the simulation project (e.g., for answering certain research questions in a social system analysis " +
      "project or in a technical system engineering project, or for teaching certain facts about a system " +
      "in an educational simulation project). Although the design model is independent of a specific technology " +
      "platform, it is typically based on object-oriented modeling (e.g., with UML diagrams). It can be " +
      "implemented in different ways with any specific technology choice, typically using an object-oriented " +
      "programming approach.",
  "expl-IDM": "<p>An <dfn>information design model</dfn> is normally derived from a conceptual " +
      "information model by <b><i>choosing the design-relevant types</i></b> of objects and events and enrich " +
      "them with design details, while dropping other object types and event types not deemed relevant for " +
      "the simulation design. Adding design details includes specifying <b><i>property ranges</i></b> as well " +
      "as adding multiplicity and other types of <b><i>constraints</i></b>.</p>" +
      "<p>In addition to these general information modeling issues, there are also a few issues, which " +
      "are specific for simulation modeling:</p>" +
      "<ol><li>If the simulation is to deal with <b><i>objects in space</i></b>, the design model must be " +
      "based on a choice of <b><i>space model</i></b>: one-dimensional (1D) discrete space, two-dimensional " +
      "(2D) discrete space (also called <i>grid space</i>), three-dimensional (3D) discrete space, " +
      "and 1D/2D/3D continuous space. The chosen space model implies a corresponding form of spatial " +
      "<i>positions</i> (or <i>locations</i>): a 1-, 2- or 3-tuple of integers or decimal numbers.</li>" +
      "<li>The information design model must distinguish between <b><i>exogenous</i></b> and " +
      "<b><i>caused</i></b> (or <i>endogenous</i>) event types. For any exogenous event type, the " +
      "<b><i>recurrence</i></b> of events of that type must be specified, typically in the form of a " +
      "random variable, but in some cases it may be a constant (like 'on each Monday'). The recurrence " +
      "defines the elapsed time between two consecutive events of the given type (their inter-occurrence " +
      "time). It can be specified within the event class concerned in the form of a special method " +
      "with the predefined name 'recurrence'.</li>" +
      "<li>Certain simulation variables may be subject to random variation, so they can " +
      "be considered to be <b><i>random variables</i></b> with an underlying probability distribution that " +
      "is sampled by a corresponding method stereotyped «rv» for categorizing it as a <i>random variate</i> " +
      "sampling method. The underlying probability distribution can be indicated in the model diagram by " +
      "appending a symbolic expression, denoting a distribution (with parameter values), to the method " +
      "definition clause. For instance, <i>U(1,6)</i> may denote the uniform distribution with lower bound 1 " +
      "and upper bound 6, while <i>Exp(1.5)</i> may denote the exponential distribution with event rate 1.5.</li> " +
      "</ol>",
  "expl-PDM": "In the <dfn>process design model</dfn>, we refine the conceptual process model. " +
      "We can do this by identifying those types of events that account for the causation of relevant state " +
      "changes and follow-up events by triggering a causal regularity. Any event type modeled in the " +
      "information model could potentially trigger a causal regularity. For simplicity, however, we may " +
      "omit those types of events, which can be considered to temporally coincide with events of another type.",
  "Back to simulation": "Zurück zur Simulation",
  "with contributions by": "mit Beiträgen von",
  "Artwork Credits": "Bildnachweise",
  "Model name": "Modellname",
  "available on": "verfügbar auf",
  "Based on": "Basiert auf",
  "created on": "erstellt am",
  "with the": "mit dem",
  "<i>Object Event Simulation (OES)</i> framework": "<i>Objekt-Ereignis-Simulations</i>-Framework",
  "last modified on": "zuletzt geändert am",
  "OESjs Credits": "OESjs-Quellenangaben",
  "System Narrative": "System-Narrativ",
  "Model Description": "Modellbeschreibung",
  "Copyright": "Copyright",
  //========== index.html ==========================================================
  "sim4eduinfo": "Erstellt mit dem <i>Objekt-Ereignis-Simulations-(OES)</i> Framework <b><i>OESjs</i></b> erhältlich von <a href='https://sim4edu.com'>sim4edu.com</a>.",
  "Read more...": "Mehr lesen...",
  "Narrative": "Narrativ",
  "Description": "Beschreibung",
  "Code": "Code",
  "Space": "Raum",
  "Show code of...": "Programm-Code von...",
  "-- choose file --": "-- Datei auswählen --",
  "Or <a>download all</a>": "Oder <a>Herunterladen</a>",
  "Download simulation code": "Simulations-Code herunterladen",
  "JavaScript code of ": "JavaScript-Code von ",
  "Default scenario": "Standard-Szenario",
  "Space Size": "Raumgröße",
  "Apply changes": "Änderungen anwenden",
  "Run simulation scenario": "Simulations-Szenario ausführen",
  "Execute a single simulation step": "Einen einzelnen Simulationsschritt ausführen",
  "Stop simulation": "Simulation anhalten",
  "Continue simulation": "Simulation fortführen",
  "Restart simulation": "Erneute Simulation",
  "Experiment": "Experiment",
  "Run experiment": "Experiment ausführen",
  "Experiments": "Experimente",
  "+Experiment": "+Experiment",
  "Define an experiment": "Ein Experiment definieren",
  "Experiment scenario": "Experiment-Szenario",
  "Parameter values": "Parameterwerte",
  "Statistics": "Statistiken",
  "Replication": "Replikation",
  "Experiment Log": "Experimentprotokoll",
  "Simulation Log": "Simulationsprotokoll",
  "Time": "Zeit",
  "System State": "Systemzustand",
  "Future Events": "Zukünftige Ereignisse",
  "Model Variables": "Modellvariablen",
  // "Define/set variables that can be used, for instance, in the initial state or as parameters in functions or in an experiment."
  "ModelVariablesUI hint": "Definieren von Variablen, die z.B. in der Definition des Initialzustands oder als Parameter in Funktionen oder in einem Experiment verwendet werden.",
  "Initial Objects": "Initial-Objekte",
  // "Change initial attribute values of objects - as a part of the initial state"
  "InitialStateObjectsUI hint": "Ändern von initialen Werten für Attribute von Objekten - als Teil des Initial-Zustands",
  "Initial Events": "Initial-Ereignisse",
  // "Change initial attribute values of events - as a part of the initial state"
  "InitialStateEventsUI hint": "Ändern von Attributwerten für initiale Ereignisse - als Teil des Initial-Zustands",
  // "An experiment is defined on top of a scenario by defining (1) the number of replications, " +
  //        "(2) zero or more experiment parameters (bound to model variables), and " +
  //        "(3) possibly a list of seed values, one for each replication."
  "experimentsUI hint": "Ein Experiment wird auf der Basis eines Szenarios durch drei Angaben definiert: " +
      "(1) die Anzahl der Replikationen, (2) eine Liste von Experimentparametern, die an Modellvariablen gebunden sind, und " +
      "(3) eine Liste von 'Seed'-Werten, einen pro Replikation.",
  //***** labels and hints for properties of predefined OES objects *****
  "Occ. time": "Ereigniszeit",
  "Duration:": "Dauer:",
  "Simulation duration": "Die Simulationsdauer",
  "Log": "Protokoll",
  "Create simulation log? (yes/no)": "Ein Simulationsprotokoll erzeugen? (ja/nein)",
  "Visualization": "Visualisierung",
  "Visualize a simulation run? (yes/no)": "Einen Simulationslauf visualisieren? (ja/nein)",
  "Step duration:": "Schrittdauer:",
  "How long is a simulation step to take? [ms]": "Wie lange soll ein Simulationsschritt dauern [ms]",
  "User-interactive": "Benutzerinteraktiv",
  "Enable user interactions? (yes/no)": "Benutzerinteraktion aktivieren? (ja/nein)",
  "Step:": "Schritt:",
  "Simulation step": "Simulations-Schritt",
  "Time:": "Zeit:",
  "Simulation time": "Simulations-Zeit",
  "Width": "Breite",
  "Maximum x value": "Maximaler Wert für x",
  "Height": "Höhe",
  "Maximum y value": "Maximaler Wert für y",
  "Depth": "Tiefe",
  "Maximum z value": "Maximaler Wert für z",
  "Number of replications": "Anzahl der Replikationen",
  "Experiment parameters": "Experimentparameter",
  "Values": "Werte",
  "Resource Utilization": "Ressourcenauslastung",
  "Executing the simulation scenario...": "Das Simulationsszenario wird ausgeführt...",
  "Executing simulation experiment...": "Das Simulationsexperiment läuft..."
};