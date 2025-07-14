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
        "options": ["A default sequence flow is always taken.", "A default sequence should not have a condition. Any such conditions shall be ignored.", "An event-based gateway cannot have a default sequence flow.", "It is good practice to also label a default sequence flow, as labeling can help show the current state of the process and explain what will happen in the case when the default sequence flow is taken."],
        "correct": [1],
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
    }
];