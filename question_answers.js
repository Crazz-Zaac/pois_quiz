const quizData = [
    {
        question: "Which of the following tasks is typically executed by a back-end system?",
        options: ["Script task", "User task", "Manual task", "Service task"],
        correct: [4],
        type: "single"
    },
    {
        "question": "Which of the following gateway types can activate several outgoing paths?",
        "options": ["Exclusive event-based gateway", "Complex gateway", "Inclusive gateway", "Exclusive gateway"],
        "correct": [1, 2],
        "type": "multiple"
    },
    {
        "question": "Which of the following are valid BPMN key shape types?",
        "options": ["Facts", "Gateways", "Events", "Activities"],
        "correct": [1, 2, 3],
        "type": "multiple"
    },
    {
        "question": "At which of the following gateways could a deadlock occur?",
        "options": ["A parallel gateway with several incoming paths.", "An inclusive gateway with several outgoing paths.", "A parallel gateway with several outgoing paths.", "An exclusive gateway with several incoming paths."],
        "correct": [0],
        "type": "multiple"
    },
    {
        "question": "Which statements concerning the default sequence flow in BPMN are correct?",
        "options": ["A default sequence flow is always taken.", 
                    "A default sequence should not have a condition. Any such conditions shall be ignored.", 
                    "An event-based gateway cannot have a default sequence flow.", 
                    "It is good practice to also label a default sequence flow, as labeling can help show the current state of the process and explain what will happen in the case when the default sequence flow is taken."],
        "correct": [1],
        "type": "multiple"
    },
    {
        "question": "Which statements concerning the default sequence flow in BPMN are correct?",
        "options": ["It is good practice to also label a default sequence flow, as labeling can help show the current state of the process and explain what will happen in the case when the default sequence flow is taken.", 
                    "A default sequence flow out of an exclusive gateway is taken only if the conditions of all the other outgoing sequence flows of this gateway evaluate to false.", 
                    "A parallel gateway can have multiple outgoing default sequence flows.", 
                    "A default sequence flow out of an inclusive gateway is always taken because an inclusive gateway can send tokens to several outgoing sequence flows at a time."],
        "correct": [0, 1],
        "type": "multiple"
    },
    {
        "question": "Which of the following boundary types are valid activity boundaries?",
        "options": [
            "A single boundary line that is thin and solid.",
            "A single boundary line that is thin and dashed.",
            "A single boundary line that is thin and dotted-dashed.",
            "A single boundary line that is thick and solid."
        ],
        "correct": [0, 1],
        "type": "multiple"
    },
        {
        "question": "Which of the following boundary types are valid activity boundaries?",
        "options": [
            "A single boundary line that is thin and dotted.",
            "A single boundary line that is thick and solid.",
            "A single boundary line that is thin and solid.",
            "A double boundary line that is thin and solid."
        ],
        "correct": [0, 1, 2, 3],
        "type": "multiple"
    },
    {
        "question": "Which statements concerning the boundary of a BPMN event shape are correct?",
        "options": [
            "A double thin and dashed boundary line indicates a non-interrupting intermediate event.",
            "A single thin and dashed boundary line indicates a non-interrupting start event.",
            "A single thin and solid boundary line indicates an interrupting start event.",
            "A double thin and solid boundary line indicates an interrupting intermediate event."
        ],
        "correct": [0, 1, 2, 3],
        "type": "multiple"
    },
    {
        "question": "Which statements concerning the boundary of a BPMN event shape are correct?",
        "options": [
            "A double thin and dashed boundary line indicates a non-interrupting intermediate event.",
            "A single thin and dashed boundary line indicates an interrupting start event.",
            "A single thin and solid boundary line indicates an interrupting start event.",
            "A double thin and solid boundary line indicates an interrupting intermediate event."
        ],
        "correct": [0, 2, 3],
        "type": "multiple"
    },
    {
        "question": "Which statements concerning event-based gateways are correct?",
        "options": [
            "An instantiating parallel event-based gateway is a semantical equivalent substitution for a parallel multiple start event.",
            "An instantiating exclusive event-based gateway is a semantical equivalent substitution for a (non-parallel) multiple start event.",
            "A non-instantiating parallel event-based gateway is a semantical equivalent substitution for a parallel multiple end event.",
            "A non-instantiating exclusive event-based gateway is a semantical equivalent substitution for a (non-parallel) catching multiple intermediate event."
        ],
        "correct": [1, 3],
        "type": "multiple"
    },
    {
        "question": "Which of the following gateways can have an outgoing default sequence flow?",
        "options": [
            "Exclusive event-based gateway",
            "Parallel (data-based) gateway",
            "Complex gateway",
            "Inclusive gateway"
        ],
        "correct": [2, 3],
        "type": "multiple"
    },
    {
        "question": "Which statements concerning the data flow in BPMN are correct?",
        "options": [
            "The transfer of data from a process to a sub-processes is only possible as \"Call by Value\" and not as \"Call by Reference\".",
            "Activities in an external, referenced sub-process don't have access to any data object of the caller's process context.",
            "Data objects defined in a process hierarchy are visible on each process level, i.e. data objects defined on a higher level are also visible to activities on lower levels, and vice versa.",
            "A data input object in a call activity represents a copy of the data object of the calling process."
        ],
        "correct": [1, 3],
        "type": "multiple"
    },
    {
        "question": "Which of the following events have to be always interrupting?",
        "options": [
            "Compensation start event",
            "Signal start event",
            "Intermediate signal event",
            "Intermediate cancel event"
        ],
        "correct": [0],
        "type": "multiple"
    },
    {
        "question": "Which of the following gateways can have an outgoing default sequence flow?",
        "options": [
            "Parallel (data-based) gateway",
            "Complex gateway",
            "Exclusive event-based gateway",
            "Parallel event-based gateway"
        ],
        "correct": [1],
        "type": "multiple"
    },
    {
        "question": "Which statements concerning event-based gateways are correct?",
        "options": [
            "A message flow can lead into an event-based gateway.",
            "Their outgoing sequence flow can lead to a message receive task.",
            "Their outgoing sequence flow can lead to a non-interrupting intermediate catching event.",
            "Their outgoing sequence flow can lead to an intermediate message event with black envelope."
        ],
        "correct": [1],
        "type": "multiple"
    },
    {
        "question": "Which of the following events have to be always interrupting?",
        "options": [
            "Error start event",
            "Intermediate compensation event",
            "Intermediate none event",
            "Multiple end event"
        ],
        "correct": [0, 1],
        "type": "multiple"
    },
    {
        "question": "Which of the following start events are allowed in an ordinary standard subprocess?",
        "options": [
            "A timer start event",
            "A signal start event",
            "A message start event",
            "A none start event"
        ],
        "correct": [3],
        "type": "multiple"
    },
    {
        "question": "Which of the following gateways can have an outgoing default sequence flow?",
        "options": [
            "Parallel (data-based) gateway",
            "Complex gateway",
            "Exclusive event-based gateway",
            "Parallel event-based gateway"
        ],
        "correct": [1],
        "type": "multiple"
    },
    {
        "question": "Which statements concerning event-based gateways are correct?",
        "options": [
            "A message flow can lead into an event-based gateway.",
            "Their outgoing sequence flow can lead to a message receive task.",
            "Their outgoing sequence flow can lead to a non-interrupting intermediate catching event.",
            "Their outgoing sequence flow can lead to an intermediate message event with black envelope."
        ],
        "correct": [1],
        "type": "multiple"
    },
    {
        "question": "Which of the following events have to be always interrupting?",
        "options": [
            "Error start event",
            "Intermediate compensation event",
            "Intermediate none event",
            "Multiple end event"
        ],
        "correct": [0, 1],
        "type": "multiple"
    },
    {
        "question": "Which of the following events have to be always interrupting?",
        "options": [
            "Message start event",
            "Multiple start event",
            "Intermediate conditional event",
            "Message end event"
        ],
        "correct": [3],
        "type": "multiple"
    },
    {
        "question": "What are valid sources of a message flow?",
        "options": [
            "Message end event",
            "Receive Task",
            "Collapsed sub-process",
            "Black-box pool"
        ],
        "correct": [0, 2, 3],
        "type": "multiple"
    },
    {
        "question": "Which of the following shapes can follow after an event-based gateway?",
        "options": [
            "Conditional event",
            "Signal event",
            "Receive task",
            "Timer event"
        ],
        "correct": [0, 1, 2, 3],
        "type": "multiple"
    },
    {
        "question": "Which statements concerning the difference between a standard and a transactional sub-process are correct?",
        "options": [
            "Link events are only allowed within a standard sub-process.",
            "A standard sub-process must not end with a cancel end event.",
            "Only a transactional sub-process can start with a signal start event.",
            "In transactional sub-processes only service tasks are allowed."
        ],
        "correct": [1],
        "type": "multiple"
    },
    {
        "question": "Which of the following start events are allowed only for event sub-processes, but not at top-level?",
        "options": [
            "Interrupting error start event",
            "Interrupting escalation start event",
            "Interrupting link start event",
            "Interrupting cancel start event"
        ],
        "correct": [1],
        "type": "multiple"
    },
    {
        "question": "Which of the following shapes can follow after an event-based gateway?",
        "options": [
            "Terminate end event",
            "Receive task",
            "Timer event",
            "Message receive event"
        ],
        "correct": [1, 2, 3],
        "type": "multiple"
    },
    {
        "question": "What are valid sources of a message flow?",
        "options": [
            "Send task",
            "Multiple end event",
            "Multiple start event",
            "Error end event"
        ],
        "correct": [0, 1],
        "type": "multiple"
    },
    {
        "question": "Which of the following start events are allowed only for event sub-processes, but not at top-level?",
        "options": [
            "Interrupting escalation start event",
            "Interrupting cancel start event",
            "Interrupting signal start event",
            "Interrupting conditional start event"
        ],
        "correct": [0],
        "type": "multiple"
    },
    {
        "question": "To handle the process instance-activity alignment problem, a process is split up into a single-instance and a multi-instance pool. How can one of the multi-instance pool instances notify the single-instance process pool that the overall process can be finished successfully?",
        "options": [
            "Via cancel event",
            "Via signal event",
            "Via error event",
            "Via message event"
        ],
        "correct": [1, 3],
        "type": "multiple"
    },
    {
        "question": "To handle the process instance-activity alignment problem, a process is split up into a single-instance and a multi-instance pool. How can the process instance of the single-instance pool notify all multi-instance pool instances that they can be cancelled because the overall process has to be finished?",
        "options": [
            "Via Cancel Event",
            "Via Signal Event",
            "Via Error Event",
            "Via Message Event"
        ],
        "correct": [1],
        "type": "multiple"
    },
    {
        "question": "The process instance-activity alignment problem occurs when there is no 1:1 correspondence between activity instances across an entire end-to-end process. Which statements concerning this alignment problem are correct?",
        "options": [
            "To apply the process instance-activity alignment handling, one involved process instance must be finished before another involved one can start.",
            "You can handle the process instance-activity alignment by splitting the end-to-end process across multiple BPMN process pools.",
            "The process instance-activity alignment problem occurs when there are repeating activities in a process but one does not know how many repetitions of these activities will be required.",
            "You can handle the process instance-activity alignment in a single pool by using different repeating activities."
        ],
        "correct": [1, 2],
        "type": "multiple"
    },
    {
        "question": "The process instance-activity alignment problem occurs when there is no 1:1 correspondence between activity instances across an entire end-to-end process. Which statements concerning the BPMN elements used to solve this problem are correct?",
        "options": [
            "Communication via a single pair of message events only ever works between exactly two process instances.",
            "A multi-instance activity always needs to know the number of iterations in advance.",
            "Two separate process pools always represent two independent BPMN processes.",
            "Communication via a single pair of signal events always works only between at least three process instances."
        ],
        "correct": [0, 1, 2],
        "type": "multiple"
    },
    {
        "question": "To handle the process instance-activity alignment problem, a process is split up into a single-instance and a multi-instance pool. How can the data interchange between these pools be modelled?",
        "options": [
            "Via simple data objects",
            "Via a data-collection object",
            "Via a data store",
            "Via data input and data output objects"
        ],
        "correct": [2],
        "type": "multiple"
    },
    {
        "question": "Which statements concerning the labeling and usage of end events in a BPMN process are correct?",
        "options": [
            "Indicate success end states and exception end states of a process with separate end events.",
            "Label end events to indicate the corresponding end state.",
            "If you have two collaborating pools in your model, there should be at least one end event in each pool whose label corresponds to the label of an end event in the other pool.",
            "A sub-process should always have a single none end event."
        ],
        "correct": [0, 1],
        "type": "multiple"
    },
    {
        "question": "Which of the following statements apply for the beginning of customer-facing processes interacting with a black-box customer pool?",
        "options": [
            "Model a message start event that receives a message flow from the black-box customer pool.",
            "Model a parallel multiple start event waiting for a message from the customer pool and a timeout.",
            "Model a none start event in the customer lane of a single pool for the whole process.",
            "Model several start events in order to cover all possible start situations."
        ],
        "correct": [0],
        "type": "multiple"
    },
    {
        "question": "Which of the following statements concerning the usage of gateways according to Bruce Silver are correct?",
        "options": [
            "Omit parallel join in front of none end events.",
            "Try to avoid using inclusive gateways.",
            "Use a complex gateway only to split the process logic, but not to join different paths.",
            "Combine splitting and joining functionality in a single gateway as often as possible."
        ],
        "correct": [0],
        "type": "multiple"
    },
    {
        "question": "Which statements concerning the labeling and usage of intermediate events in a BPMN process are correct?",
        "options": [
            "Label intermediate events verb-noun.",
            "Paired Link events should have matching labels.",
            "An intermediate event in an event sub-process must have a none trigger.",
            "Two intermediate events at the same process level should not have the same label."
        ],
        "correct": [1],
        "type": "multiple"
    },
    {
        "question": "Which statements concerning the usage and labeling of pools and lanes are correct?",
        "options": [
            "Model internal organizational units as lanes within a single pool.",
            "Label lanes with the name of a process.",
            "Model independent processes as separate pools.",
            "Label black-box pools with a participant role or business entity."
        ],
        "correct": [0, 2, 3],
        "type": "multiple"
    },
    {
    "question": "Which of the following statements describe a tight coupling between two systems?",
    "options": [
        "The communication style is synchronous and not asynchronous.",
        "The versioning is done via explicit upgrades and not via implicit upgrades.",
        "There is a strong type system instead of a weak type system.",
        "The transactional behaviour is according to compensation and not according to the 2-phase-commit protocol."
    ],
    "correct": [0, 1, 2],
    "type": "multiple"
    },
    {
    "question": "Which of the following statements concerning the methodology of PDAs are correct?",
    "options": [
        "The PDA architecture aims for independence from back-end systems and highest flexibility regarding process changes as well as IT landscape changes.",
        "The reuse of existing functionality does not necessarily require the availability of web services.",
        "The PDA architecture basically differentiates between user processes and business rules processes.",
        "The essential artefacts of a PDA can be derived by following a bottom-up-oriented methodology."
    ],
    "correct": [0, 1],
    "type": "multiple"
    },
    {
    "question": "Which statements concerning architectures with software integration are correct?",
    "options": [
        "Architectures with integration software have an increased complexity concerning testing and software distribution.",
        "In architectures with integration software business process model and the executed process model are almost identical.",
        "Architectures with integration software allow simpler process models for both business and integration process.",
        "Architectures with integration software have low initial costs, but the maintenance is expensive."
    ],
    "correct": [0, 1, 2],
    "type": "multiple"
    },
    {
    "question": "Which of the following statements concerning orchestration and collaboration in BPMN  are correct?",
    "options": [
        "Orchestration in BPMN means the sequence flow within a pool.",
        "Sequence flow in BPMN can be modeled between different lanes within a single pool.",
        "Collaboration in BPMN means the interaction between different pools by message flow.",
        "Message flow in BPMN can be modeled inside a single pool as well as between different pools."
    ],
    "correct": [0, 1, 2],
    "type": "multiple"
    },
    {
    "question": "Which statements concerning user tasks and manual tasks are correct?",
    "options": [
        "Filling out a contact form on a website is an example of a user task.",
        "Participation in an electronic exam is an example of a manual task",
        "A user task is performed solely by a user, i.e. no software system is involved in any way.",
        "Manual tasks are always fulfilled with software support, but must be triggered manually."
    ],
    "correct": [0],
    "type": "multiple"
    },
    {
    "question": "Which statements concerning events in BPMN are correct?",
    "options": [
        "Escalation events are never end events.",
        "Error events are always catching events.",
        "End events can be of catching as well as throwing type.",
        "Start events are always catching events."
    ],
    "correct": [3],
    "type": "multiple"
    },
    {
    "question": "Which statements concerning events in BPMN are correct?",
    "options": [
        "A process definition is a specific occurrence or execution of a business process.",
        "A certain process definition can be instantiated multiple times.",
        "A process definition shows all available information about a business process, such as all possible control flow paths.",
        "A model containing a BPMN diagram represents a process instance and not a process definition."
    ],
    "correct": [1,2],
    "type": "multiple"
    },
    {
    "question": "Which statements concerning the conditional sequence flow in BPMN are correct?",
    "options": [
        "A conditional sequence flow is taken only if the conditions of all the other outgoing sequence flows of a gateway evaluate to false.",
        "An exclusive gateway is semantically completely identical to the conditional flow.",
        "A parallel gateway can have multiple conditional sequence flows.",
        "An inclusive gateway is semantically completely identical to the conditional flow."
    ],
    "correct": [3],
    "type": "multiple"
    },    
    {
    "question": "Which statements concerning the different communication styles in BPMN are correct?",
    "options": [
        "You can also use simple data objects for communication by parameter passing to and from a calling sub-process.",
        "Communication based on a data flow between independent process instances is only possible via data stores and not via simple data objects.",
        "In contrast to simple data objects, the data input and output objects of a process symbolize its interface, i.e. the data that is forwarded to and delivered from the related process instances.",
        "Collaboration via message flow means an asynchronous way for communication whereas communication via calling activities means a synchronous way for communication."
    ],
    "correct": [1, 2, 3],
    "type": "multiple"
    },
    {
    "question": "In general, patterns are reusable solutions to commonly occurring problems within a given context. In our course, we used enterprise integration patterns to harmonize the interfaces between the PDA and the back-end systems of the IT landscape. We have got to know composition patterns and integration-centric patterns. Which of the following patterns can be classified as integration-centric patterns?",
    "options": [
        "Aggregator Pattern",
        "Sync-Async Bridge",
        "Resequencer Pattern",
        "Integration-Centric Polling"
    ],
    "correct": [0, 2],
    "type": "multiple"
    },
    {
    "question": "In general, patterns are reusable solutions to commonly occurring problems within a given context. In our course, we used enterprise integration patterns to harmonize the interfaces between the PDA and the back-end systems of the IT landscape. Which of the following statements regarding these patterns are correct?",
    "options": [
        "Asynchronous polling asynchronously addresses a back-end system that does not send any replies automatically by itself.",
        "The aggregator pattern gets a stream of related but out-of-sequence messages back into the correct order.",
        "The request-reply pattern forwards an incoming service request to the service provider, waits for the outstanding reply, and finally forwards it to the service requester after adjusting some protocol and format details",
        "The async-sync bridge keeps alive the technical connection to the PDA, which is the service requester."
    ],
    "correct": [0, 2],
    "type": "multiple"
    },
    {
    "question": "In general, patterns are reusable solutions to commonly occurring problems within a given context. In our course, we used enterprise integration patterns to harmonize the interfaces between the PDA and the back-end systems of the IT landscape. Which of the following statements regarding the resequencer pattern are correct?",
    "options": [
        "The resequencer pattern is able to buffer messages that are received out of sequence.",
        "The resequencer pattern buffers all messages in a sequence and sends them in the correct order once all messages have been received.",
        "The resequencer pattern gets a stream of related but out-of-sequence messages back into the correct order.",
        "The resequencer pattern is a stateless pattern."
    ],
    "correct": [0, 2],
    "type": "multiple"
    },
    {
    "question": "In general, patterns are reusable solutions to commonly occurring problems within a given context. In our course, we used enterprise integration patterns to harmonize the interfaces between the PDA and the back-end systems of the IT landscape. Which of the following statements regarding pattern \"Async-Sync Bridge\" are correct?",
    "options": [
        "Use an async-sync bridge when the back-end system (service provider) provides the response only synchronously.",
        "Use an async-sync bridge when the PDA requests a service only asynchronously.",
        "The async-sync bridge keeps alive the technical connection to the PDA, which is the service requester.",
        "The async-sync bridge keeps alive the technical connection to the back-end system which is the service provider."
    ],
    "correct": [0, 1, 3],
    "type": "multiple"
    },
    {
    "question": "In general, patterns are reusable solutions to commonly occurring problems within a given context. In our course, we used enterprise integration patterns to harmonize the interfaces between the PDA and the back-end systems of the IT landscape. We have got to know composition patterns and integration-centric patterns. Which of the following patterns can be classified as composition patterns?",
    "options": [
        "Async-Sync Bridge",
        "Resequencer Pattern",
        "Aggregator Pattern",
        "Asynchronous Polling"
    ],
    "correct": [0, 3],
    "type": "multiple"
    },
        {
    "question": "In general, patterns are reusable solutions to commonly occurring problems within a given context. In our course, we used enterprise integration patterns to harmonize the interfaces between the PDA and the back-end systems of the IT landscape. Which of the following statements regarding pattern \"Asynchronous Polling\" are correct?",
    "options": [
        "A technical integration process implementing asynchronous polling repeatedly sends a request to the back-end system (service provider) until there is a response.",
        "Use asynchronous polling when the back-end system has to be addressed asynchronously.",
        "Use asynchronous polling when the back-end system automatically sends push notifications",
        "A technical integration process implementing asynchronous polling can forward the service request to the back-end system (service provider) without any modification."
    ],
    "correct": [0, 1, 3],
    "type": "multiple"
    }
    
];
