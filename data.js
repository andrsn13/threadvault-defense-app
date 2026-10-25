window.TV_DATA = {
 "schemaVersion": "1.0.0",
 "documentType": "presentation-defense-content-model",
 "title": "ThreadVault Presentation Defense",
 "language": "en",
 "audience": {
  "assumedKnowledge": "Beginning-level audience with no assumed knowledge of data structures, algorithms, web architecture, databases, or complexity notation.",
  "teachingPrinciple": "First principles. Establish each term and idea before relying on it. Build each slide from concepts already taught, and explicitly state why the next slide follows."
 },
 "authority": {
  "intendedRole": "Canonical structured content for a guided presentation-defense web application.",
  "sourceOfTruth": "Project implementation, tests, and dated measurement output are evidence. This JSON is the canonical presentation narrative and explanation model. Do not invent claims to fill gaps.",
  "currentDeck": "Group02_CS201-IS31S1_FinalPresentation.pdf",
  "contentPolicy": [
   "Render the provided claims, explanations, transitions, evidence, and caveats faithfully.",
   "Do not add an unestablished entity, component, item, idea, or technical term to narration without first defining it in plain language.",
   "For each slide, make its prerequisite concepts and newly established concepts visible to the presenter.",
   "Use definitions before first use, not in a glossary shown only after the term has already been used.",
   "A concept introduced in a slide must be explained before the script depends on it; introduce related concepts in dependency order.",
   "Transitions must explain the logical reason the next slide follows, rather than merely announce the next title.",
   "Keep spoken narration distinct from presenter notes, accuracy warnings, evidence, and optional deep dives.",
   "Do not turn a course rubric constraint into an empirical claim that a structure is optimal.",
   "The required custom linked queue, custom linked stack, and custom binary min-heap remain integrated into live workflows.",
   "Do not describe benchmark-only alternatives as live application features.",
   "Keep uncertainty, limitations, and dated test or benchmark evidence explicit.",
   "The web app may reorganize the viewing experience, but must not silently omit, contradict, or weaken the meaning of this content."
  ],
  "granularityInvariant": {
   "rule": "No unexplained prerequisite may be assumed, even if it seems familiar to a technical presenter.",
   "checkBeforeRendering": [
    "For each technical term in a narration beat, check that its concept is established on an earlier slide or defined earlier in the same slide.",
    "For every new workflow, identify its input, action, result, and boundary.",
    "For each justification, distinguish semantic fit, representation trade-off, rubric constraint, theoretical complexity, and measured evidence.",
    "If a visual uses an undefined label or symbol, reveal its definition before or alongside the first narration that depends on it."
   ]
  }
 },
 "projectFrame": {
  "description": "ThreadVault is a fictional local clothing marketplace MVP used to demonstrate marketplace workflows and custom data structures and algorithms.",
  "scope": {
   "included": [
    "A browser storefront for customers",
    "Local customer and seller workflows",
    "A catalog with four brands and 32 seed products",
    "Checkout and stock updates",
    "Seller fulfillment status workflows",
    "Custom data structures and algorithms integrated into live paths as required by the course rubric"
   ],
   "excluded": [
    "Real customer data",
    "Payment processing",
    "Shipping execution",
    "Seller payouts",
    "Production marketplace guarantees"
   ]
  },
  "requiredLiveImplementations": [
   {
    "name": "Custom linked FIFO queue",
    "workflow": "Request-local checkout-line ordering"
   },
   {
    "name": "Custom linked LIFO stack",
    "workflow": "Selection of the latest eligible fulfillment-status history event for undo"
   },
   {
    "name": "Custom binary min-heap priority queue",
    "workflow": "Ordering the seller's already-loaded fulfillment work list"
   }
  ],
  "nonNegotiableDistinction": "The rubric requires these exact custom representations in live workflows. That is a constraint on the project, not evidence that they are faster or the best engineering fit for every current workload."
 },
 "learningPath": [
  {
   "stage": "orientation",
   "slides": [
    1,
    2,
    3
   ],
   "reason": "Establish what the fictional project is, the problem scenario, the actual MVP scope, and its limits before naming implementation mechanisms."
  },
  {
   "stage": "behavior-before-implementation",
   "slides": [
    4,
    5,
    6
   ],
   "reason": "Define the required behaviors and the abstractions that can express them before explaining concrete implementations."
  },
  {
   "stage": "system-and-workflows",
   "slides": [
    7,
    8,
    9,
    10
   ],
   "reason": "Establish application layers and database responsibility, then trace real workflows and implementation boundaries."
  },
  {
   "stage": "implementation-by-example",
   "slides": [
    11,
    12,
    13,
    14,
    15,
    16,
    17
   ],
   "reason": "Trace the implementations and their constraints only after their underlying operations and system context are known."
  },
  {
   "stage": "analysis-and-evidence",
   "slides": [
    18,
    19,
    20,
    21,
    22,
    23
   ],
   "reason": "Explain theoretical cost models before discussing tests and measured behavior; keep correctness, complexity, and timing distinct."
  },
  {
   "stage": "conclusion",
   "slides": [
    24,
    25
   ],
   "reason": "Summarize demonstrated scope and limitations, then identify the sources and close."
  }
 ],
 "slides": [
  {
   "number": 1,
   "id": "title",
   "title": "ThreadVault",
   "roleInArgument": "Orient the audience and make the project boundary explicit.",
   "prerequisites": [],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "marketplace-prototype",
       "term": "Marketplace prototype",
       "definition": "A small demonstration system for browsing products and handling basic order-related workflows; it is not a live commercial marketplace."
      },
      {
       "id": "fictional-project",
       "term": "Fictional project",
       "definition": "The scenario and seed catalog are illustrative. They do not represent real customers or imply that any named brand endorses the project."
      }
     ],
     "say": "Good day. We are presenting ThreadVault, a fictional local clothing marketplace prototype. I will explain the problem and scope, show how the system is organized, and then connect its custom data structures and algorithms to real workflows, analysis, and tests. It is a local demonstration, not a live commercial marketplace."
    },
    {
     "establish": [],
     "say": "Introduce the team members and their actual roles. Only describe work each person really performed."
    }
   ],
   "visualFocus": "Project title, team, and the marketplace prototype identity.",
   "evidence": [],
   "accuracyCaveats": [
    "Do not imply real customer activity, commercial deployment, brand sponsorship, or personal contributions that are not verified."
   ],
   "bridgeToNext": {
    "reasoning": "Once the audience knows what kind of project this is, establish the need it is intended to address before describing features or implementation.",
    "spokenTransition": "First, here is the problem scenario the prototype is intended to address."
   }
  },
  {
   "number": 2,
   "id": "project-overview",
   "title": "Project overview",
   "roleInArgument": "Describe the motivating scenario while separating motivation from verified fact.",
   "prerequisites": [
    "marketplace-prototype",
    "fictional-project"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "project-scenario",
       "term": "Project scenario",
       "definition": "The design premise used to choose the prototype's features: local clothing sellers need a shared storefront and basic ways to manage orders."
      },
      {
       "id": "workflow",
       "term": "Workflow",
       "definition": "A sequence of actions that takes some input through a task and produces a result, such as browsing a product and placing an order."
      }
     ],
     "say": "Our project scenario is that local clothing sellers need a shared storefront and basic order-management workflows. Customers browse and place orders; sellers manage listings and fulfillment. This is our project motivation and scenario, not a researched claim about every small brand."
    },
    {
     "establish": [
      {
       "id": "custom-dsa",
       "term": "Custom data structure or algorithm",
       "definition": "A project-written implementation of a way to organize data or perform a computation, rather than a call to a ready-made library implementation."
      }
     ],
     "say": "The algorithmic part asks how specific custom structures and algorithms support the ordering and search rules in those workflows."
    }
   ],
   "visualFocus": "The stated problem scenario, intended users, and marketplace context.",
   "evidence": [],
   "accuracyCaveats": [
    "The slide's claim that products can be found 'without scanning every record' is not implemented: live catalog search examines products one by one.",
    "The slide's quadratic repeated-order-selection story is hypothetical and is not the live catalog-search algorithm.",
    "Treat claims about small brands' advertising budgets as motivation unless a suitable source is cited."
   ],
   "bridgeToNext": {
    "reasoning": "A problem scenario is too broad to evaluate by itself; the next step is to state which user capabilities the prototype actually implements and what remains outside scope.",
    "spokenTransition": "That scenario becomes a concrete set of MVP objectives and boundaries."
   }
  },
  {
   "number": 3,
   "id": "objectives-and-scope",
   "title": "Project objectives",
   "roleInArgument": "Define implemented user-facing scope before discussing technical solutions.",
   "prerequisites": [
    "project-scenario",
    "workflow"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "mvp",
       "term": "Minimum viable product (MVP)",
       "definition": "The smallest project scope that demonstrates the selected user workflows; it does not imply production readiness."
      },
      {
       "id": "seed-catalog",
       "term": "Seed catalog",
       "definition": "The example product records loaded for demonstration and testing; this project has 32 products across four brands."
      }
     ],
     "say": "The MVP objectives are a storefront catalog, organization and search, filtering, sorting, product details, a shopping bag, and checkout. The seed catalog contains four brands and 32 example products."
    },
    {
     "establish": [
      {
       "id": "checkout-scope",
       "term": "Checkout in this project",
       "definition": "Creating a local order and updating stock. It does not charge money or arrange delivery."
      },
      {
       "id": "browser-built-in",
       "term": "Browser-side built-in behavior",
       "definition": "Behavior implemented in the web browser using ordinary JavaScript features; it is separate from the custom Python algorithms discussed in this defense."
      }
     ],
     "say": "The backend also supports local account, listing, stock, order, and fulfillment workflows. Here, checkout creates a local order and updates stock; it does not process payment. The browser's price sorting and filters use JavaScript behavior and are not the custom Python DSA implementations."
    }
   ],
   "visualFocus": "The implemented feature list and the MVP boundary.",
   "evidence": [
    {
     "type": "project-data",
     "claim": "The demonstration catalog contains 32 products and four brands.",
     "reference": "products.json"
    }
   ],
   "accuracyCaveats": [
    "Payment, shipping, and payouts are outside the MVP.",
    "Do not present browser sorting and filtering as custom Python DSA."
   ],
   "bridgeToNext": {
    "reasoning": "With scope defined, the audience can now examine the kinds of tools used to implement the workflows without confusing them with stored business records.",
    "spokenTransition": "Now that the scope is clear, let us separate temporary in-memory structures from the data the application stores."
   }
  },
  {
   "number": 4,
   "id": "data-structure-behaviors",
   "title": "Data structures used",
   "roleInArgument": "Introduce the abstract data-organization behaviors before concrete code.",
   "prerequisites": [
    "mvp",
    "checkout-scope",
    "workflow"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "data-structure",
       "term": "Data structure",
       "definition": "A defined way to organize values in memory so particular operations, such as adding, removing, or selecting items, follow a useful rule."
      },
      {
       "id": "queue",
       "term": "Queue",
       "definition": "A structure that removes items in the same order they were added; this rule is called first in, first out (FIFO)."
      },
      {
       "id": "stack",
       "term": "Stack",
       "definition": "A structure that removes the most recently added item first; this rule is called last in, first out (LIFO)."
      },
      {
       "id": "priority-queue",
       "term": "Priority queue",
       "definition": "A structure that selects the item with the best priority according to a defined ordering, rather than merely selecting the oldest or newest item."
      }
     ],
     "say": "A data structure is a way to organize values around the operations we need. A queue is first in, first out, so it can preserve checkout-line order. A stack is last in, first out, so the newest eligible status change can be considered first during undo. A priority queue selects seller work according to priority rather than arrival order."
    },
    {
     "establish": [
      {
       "id": "durable-state",
       "term": "Durable state",
       "definition": "Business information that must remain available after a request finishes, such as product stock, orders, and status history."
      },
      {
       "id": "representation",
       "term": "Representation",
       "definition": "The concrete internal form used to implement an abstract behavior, such as linked nodes or an array."
      }
     ],
     "say": "These structures are temporary memory tools. The database keeps durable products, stock, orders, and status history. Also, saying that FIFO, LIFO, or priority order matches a task explains the abstract behavior; it does not yet prove that a particular representation is the best implementation."
    }
   ],
   "visualFocus": "Queue, stack, priority queue, and database shown as distinct responsibilities.",
   "evidence": [
    {
     "type": "rubric-constraint",
     "claim": "The exact custom linked queue, linked stack, and binary min-heap must remain integrated into live workflows.",
     "reference": "DSA_JUSTIFICATION.md"
    }
   ],
   "accuracyCaveats": [
    "The rubric fixes the required custom representations; benchmark results do not prove they are optimal.",
    "Do not describe an in-memory queue, stack, or heap as durable storage or background-job infrastructure."
   ],
   "bridgeToNext": {
    "reasoning": "The structures describe how data is organized, but some workflows also require a sequence of computational steps; define algorithms separately before showing how both kinds of tools cooperate.",
    "spokenTransition": "Those structures define how data is organized; next, we distinguish them from the algorithms that transform or search the data."
   }
  },
  {
   "number": 5,
   "id": "algorithms-and-operations",
   "title": "Algorithms used",
   "roleInArgument": "Define algorithmic tasks and distinguish them from data structures.",
   "prerequisites": [
    "data-structure",
    "queue",
    "stack",
    "priority-queue",
    "seed-catalog"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "algorithm",
       "term": "Algorithm",
       "definition": "A finite, ordered set of steps for solving a task, such as finding matches or arranging values."
      },
      {
       "id": "linear-search-all",
       "term": "Linear search-all",
       "definition": "Check each item in sequence and return every item that meets a condition."
      },
      {
       "id": "merge-sort",
       "term": "Merge sort",
       "definition": "A sorting method that divides values into smaller groups, sorts those groups, and merges them back in order."
      }
     ],
     "say": "An algorithm is a sequence of steps for a task. The live catalog search uses linear search-all: it checks product text and returns every substring match. Catalog results are then ordered by name with merge sort. The queue and stack operations support separate workflow rules."
    },
    {
     "establish": [
      {
       "id": "binary-search",
       "term": "Binary search",
       "definition": "A search that repeatedly halves a sorted sequence to look for an exact key; sorted input is a required precondition."
      },
      {
       "id": "insertion-sort",
       "term": "Insertion sort",
       "definition": "A simple sorting method that grows a sorted prefix by inserting each next item into its correct place."
      },
      {
       "id": "text-index",
       "term": "Text index",
       "definition": "An additional structure built to help locate text matches; it costs time and memory to build and maintain."
      }
     ],
     "say": "Binary search and insertion sort are implemented for learning and tests, but are not used by the live marketplace request path. Binary search is not a substitute for the live substring search: it requires sorted exact keys. A reusable text index is another possible design, but it has construction and memory costs."
    }
   ],
   "visualFocus": "Separate live application algorithms from implemented learning examples.",
   "evidence": [
    {
     "type": "implementation",
     "claim": "Live catalog search is a linear search-all and catalog sorting uses merge sort.",
     "reference": "services/catalog.py"
    },
    {
     "type": "implementation",
     "claim": "Insertion sort and binary search are not live marketplace route algorithms.",
     "reference": "dsa/sorting.py; dsa/searching.py"
    }
   ],
   "accuracyCaveats": [
    "The benchmark-only text index is not deployed in the live catalog.",
    "Do not imply binary search solves arbitrary substring search-all."
   ],
   "bridgeToNext": {
    "reasoning": "After defining the tools separately, demonstrate their actual behavior with small input-output examples before moving to application architecture.",
    "spokenTransition": "Now we can see what the structures do in practice, and just as importantly, what they do not do."
   }
  },
  {
   "number": 6,
   "id": "structure-behavior",
   "title": "How the core structures work",
   "roleInArgument": "Make FIFO and LIFO concrete and state their operational boundaries.",
   "prerequisites": [
    "queue",
    "stack",
    "durable-state",
    "algorithm"
   ],
   "teachingBeats": [
    {
     "establish": [],
     "say": "For checkout, if validated lines enter as A, B, C, a queue returns A, B, C. For undo, eligible history arrives oldest to newest; pushing that sequence onto a stack makes the newest event the first one popped."
    },
    {
     "establish": [
      {
       "id": "request-local",
       "term": "Request-local",
       "definition": "Created and used while handling one web request, then discarded; it is not a long-running or persistent queue."
      }
     ],
     "say": "The checkout queue is request-local. It does not preserve work between requests, deliver products, or manage orders over time. The stack selects a history event; the application route performs the actual status and history updates."
    }
   ],
   "visualFocus": "Small ordered sequences entering and leaving queue and stack.",
   "evidence": [
    {
     "type": "implementation",
     "claim": "Queue and stack are temporary service-level operations.",
     "reference": "services/ordering.py; services/fulfillment.py"
    }
   ],
   "accuracyCaveats": [
    "Correct slide wording that says the queue stabilizes ongoing order processing or that the stack affects buyer product availability."
   ],
   "bridgeToNext": {
    "reasoning": "The examples show what happens inside a workflow; next locate that work in the broader system so the audience knows which layer invokes it and which layer stores results.",
    "spokenTransition": "The architecture shows which part of the application owns each responsibility."
   }
  },
  {
   "number": 7,
   "id": "system-architecture",
   "title": "System architecture",
   "roleInArgument": "Establish the request path and separate application logic from persistent storage.",
   "prerequisites": [
    "request-local",
    "durable-state",
    "data-structure"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "browser-client",
       "term": "Browser client",
       "definition": "The web page a customer or seller uses to view the storefront and send requests."
      },
      {
       "id": "http",
       "term": "HTTP request",
       "definition": "A message a browser sends to a web application asking it to perform an operation or return information."
      },
      {
       "id": "api",
       "term": "API",
       "definition": "The defined set of request and response routes through which the browser and application exchange data."
      },
      {
       "id": "flask-route",
       "term": "Flask route",
       "definition": "A server-side handler that receives a particular web request and applies request-level rules."
      }
     ],
     "say": "Customers and sellers use the browser. The browser sends HTTP requests through the API. Flask routes receive those requests and handle request rules, such as authentication, authorization, and validation."
    },
    {
     "establish": [
      {
       "id": "service-layer",
       "term": "Service layer",
       "definition": "Functions that express reusable workflow behavior without owning the browser or HTTP boundary."
      },
      {
       "id": "mariadb",
       "term": "MariaDB",
       "definition": "The relational database used here to keep durable marketplace records."
      },
      {
       "id": "database-consistency",
       "term": "Database consistency",
       "definition": "Keeping stored records in valid, coordinated states even when operations fail or overlap."
      }
     ],
     "say": "Routes call service functions for business rules and custom DSA operations. The application reads and writes durable records in MariaDB. The heap can order an in-memory work list; it does not replace the database protections needed for stock and orders."
    }
   ],
   "visualFocus": "Browser -> Flask/API -> services and DSA -> MariaDB; show responsibility boundaries.",
   "evidence": [
    {
     "type": "implementation",
     "claim": "Routes, services, DSA modules, and database responsibilities are separated in the repository.",
     "reference": "app.py; services/; dsa/"
    }
   ],
   "accuracyCaveats": [
    "Do not imply the DSA layer itself guarantees persistent consistency."
   ],
   "bridgeToNext": {
    "reasoning": "The architecture is easier to understand through one end-to-end request; checkout demonstrates both in-memory ordering and database consistency.",
    "spokenTransition": "Checkout is a concrete example of these layers working together."
   }
  },
  {
   "number": 8,
   "id": "checkout-flow",
   "title": "Solution flow: checkout",
   "roleInArgument": "Trace checkout in execution order and distinguish ordering from stock safety.",
   "prerequisites": [
    "browser-client",
    "api",
    "flask-route",
    "service-layer",
    "mariadb",
    "queue",
    "database-consistency"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "input-validation",
       "term": "Input validation",
       "definition": "Checking that submitted values have an acceptable form and meaning before using them."
      },
      {
       "id": "database-transaction",
       "term": "Database transaction",
       "definition": "A group of database changes treated as one unit: all intended changes are committed together, or failed work is rolled back."
      },
      {
       "id": "row-lock",
       "term": "Row lock",
       "definition": "A database control that temporarily reserves a record while it is checked and changed, reducing conflicting updates to that record."
      },
      {
       "id": "commit-rollback",
       "term": "Commit and rollback",
       "definition": "Commit makes the transaction's changes permanent; rollback abandons its uncommitted changes."
      }
     ],
     "say": "The route first validates submitted lines. Invalid input is rejected before an order is committed. Valid lines enter the queue in submission order, and the service drains the queue into an ordered list before database work begins."
    },
    {
     "establish": [],
     "say": "The route then starts database work. For each ordered line, it locks the matching product-size stock row and checks availability. If a line lacks stock, the transaction rolls back. Otherwise, stock is deducted and the order item is recorded. The transaction commits only after every line succeeds."
    },
    {
     "establish": [],
     "say": "The queue preserves the order of this request; row locks and the transaction protect stored stock and prevent partial orders. The queue alone does not prevent overselling."
    }
   ],
   "visualFocus": "Show validation, queue-to-list ordering, then transaction and row-lock loop, then commit or rollback.",
   "evidence": [
    {
     "type": "implementation",
     "claim": "The queue is drained before the database transaction work begins.",
     "reference": "services/ordering.py; app.py"
    },
    {
     "type": "implementation",
     "claim": "Stock is checked and updated in database transaction logic.",
     "reference": "app.py"
    }
   ],
   "accuracyCaveats": [
    "The current PDF diagram appears to place dequeue inside the database transaction loop; revise it to show the actual code order.",
    "Do not attribute stock consistency or overselling prevention to the queue."
   ],
   "bridgeToNext": {
    "reasoning": "After one detailed workflow, summarize the broader customer and seller capabilities that the MVP supports.",
    "spokenTransition": "That flow is one part of the broader set of marketplace features."
   }
  },
  {
   "number": 9,
   "id": "implementation-highlights",
   "title": "Implementation highlights",
   "roleInArgument": "Summarize the actual customer and seller workflows without overstating their assurance.",
   "prerequisites": [
    "mvp",
    "checkout-scope",
    "database-transaction",
    "service-layer"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "password-hashing",
       "term": "Password hashing",
       "definition": "Transforming a password with a one-way password-storage method so the application need not store the original password as readable text."
      },
      {
       "id": "role-check",
       "term": "Role check",
       "definition": "A rule that limits an operation based on whether the current account is a customer, seller, or another allowed role."
      },
      {
       "id": "ownership-check",
       "term": "Seller ownership check",
       "definition": "A rule that verifies a seller is allowed to change the listing or order-related resource in question."
      }
     ],
     "say": "Customers can register, browse, choose a size, and place a local order. Sellers can manage their listings and fulfillment statuses. The project includes password hashing, role checks, and seller ownership checks for these basic workflows."
    },
    {
     "establish": [],
     "say": "The checkout route uses database locking and transactions. Undo selects a recent eligible history event and restores the prior status. These are basic controls in a local prototype, not a complete security review or a production guarantee."
    }
   ],
   "visualFocus": "Feature highlights across customer, seller, and fulfillment flows.",
   "evidence": [
    {
     "type": "implementation",
     "claim": "The project includes account, listing, checkout, and fulfillment routes.",
     "reference": "app.py"
    }
   ],
   "accuracyCaveats": [
    "Do not describe the controls as a complete security audit or production-grade guarantee."
   ],
   "bridgeToNext": {
    "reasoning": "The feature summary says what users can do; the next slide shows how the source code separates responsibilities to implement those features.",
    "spokenTransition": "That separation is visible in the source layout."
   }
  },
  {
   "number": 10,
   "id": "code-layers",
   "title": "Implementation highlights: code layers",
   "roleInArgument": "Connect repository organization to testability and responsibility boundaries.",
   "prerequisites": [
    "flask-route",
    "service-layer",
    "data-structure",
    "algorithm"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "module",
       "term": "Module",
       "definition": "A source-code file or package that groups related implementation responsibilities."
      },
      {
       "id": "testability",
       "term": "Testability",
       "definition": "How readily a behavior can be checked in isolation without needing unrelated parts of the system."
      }
     ],
     "say": "The Flask application owns HTTP input, validation, authorization, and database transactions. The services package expresses workflow behavior. The DSA modules contain reusable queue, stack, priority-queue, searching, and sorting code."
    },
    {
     "establish": [],
     "say": "This separation makes DSA behavior testable without requiring a browser or live database. In seller fulfillment, the priority queue orders a list of work; it does not automatically fulfill the orders."
    }
   ],
   "visualFocus": "Source tree grouped by application routes, services, and DSA modules.",
   "evidence": [
    {
     "type": "implementation",
     "claim": "The repository separates app routes, service adapters, and DSA implementations.",
     "reference": "app.py; services/; dsa/"
    }
   ],
   "accuracyCaveats": [
    "Do not equate ordering a work list with executing or completing fulfillment."
   ],
   "bridgeToNext": {
    "reasoning": "The source layers are abstract; the next section makes them concrete by tracing the three required data structures in their individual workflows.",
    "spokenTransition": "Now let us connect each required structure to one specific operation."
   }
  },
  {
   "number": 11,
   "id": "checkout-queue",
   "title": "Code highlight A: checkout queue",
   "roleInArgument": "Explain the linked queue's operations, cost, alternatives, and actual workload fit.",
   "prerequisites": [
    "queue",
    "representation",
    "request-local",
    "checkout-scope"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "linked-node",
       "term": "Linked node",
       "definition": "A small record that stores a value and a reference to another node, allowing items to form a chain."
      },
      {
       "id": "head-tail",
       "term": "Head and tail pointers",
       "definition": "References to the first and last nodes of a linked queue; they let the queue add at the back and remove at the front."
      },
      {
       "id": "constant-time",
       "term": "Constant time, O(1)",
       "definition": "An operation whose number of basic steps does not grow with the number of stored items, under the stated implementation assumptions."
      }
     ],
     "say": "The helper receives validated lines, enqueues them in their existing sequence, and dequeues until empty. If the lines are A, B, C, they come back A, B, C. The linked queue has nodes connected in a chain, with references to the first and last nodes. Each enqueue and dequeue takes constant time, so handling n lines takes O(n) time overall."
    },
    {
     "establish": [
      {
       "id": "circular-array-queue",
       "term": "Circular-array queue",
       "definition": "A queue stored in an array that reuses freed positions by wrapping its front and back indices around the array."
      },
      {
       "id": "fixed-capacity",
       "term": "Fixed capacity",
       "definition": "A structure has a predetermined maximum number of stored items and cannot grow beyond that limit without a separate policy."
      }
     ],
     "say": "A custom circular-array queue can also provide FIFO and constant-time enqueue and dequeue. The rubric specifically requires the linked queue in the live workflow, so we retain it. The benchmark compares one fixed-capacity array alternative; that comparison shows a trade-off, not that linked nodes always win."
    },
    {
     "establish": [],
     "say": "At the application level, all request lines already exist before the helper runs, and the queue is immediately drained. Therefore we should not claim the linked representation is necessary or proven best for this workload. It is request-local ordering, not a durable job queue."
    }
   ],
   "visualFocus": "Trace A, B, C through linked nodes; indicate front removal and rear insertion.",
   "evidence": [
    {
     "type": "benchmark",
     "claim": "At n=32, linked and circular-array queue medians were 0.033 ms and 0.035 ms; at n=5000, 4.789 ms and 5.426 ms.",
     "reference": "tests/dsa_benchmarks.py; recorded run dated 2026-10-25"
    }
   ],
   "accuracyCaveats": [
    "The circular-array benchmark comparator is fixed-capacity; it is not evidence about every possible dynamic array queue.",
    "Memory use was not measured.",
    "Do not conclude universal performance superiority from one machine and selected batch sizes."
   ],
   "bridgeToNext": {
    "reasoning": "FIFO solves line preservation, but seller work has an explicit urgency ordering; that different requirement calls for a different abstract behavior.",
    "spokenTransition": "Checkout needs FIFO order; seller work has priorities, so let us examine that different rule."
   }
  },
  {
   "number": 12,
   "id": "seller-priority-queue",
   "title": "Code highlight B: priority queue",
   "roleInArgument": "Define the seller ordering key and evaluate the required heap against custom same-task alternatives.",
   "prerequisites": [
    "priority-queue",
    "representation",
    "algorithm",
    "service-layer"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "priority-key",
       "term": "Priority key",
       "definition": "The value or tuple used to compare work items and decide which should come first."
      },
      {
       "id": "tie-breaker",
       "term": "Tie-breaker",
       "definition": "A secondary comparison rule used when two items have equal primary priority."
      },
      {
       "id": "min-heap",
       "term": "Binary min-heap",
       "definition": "A tree-shaped priority structure in which each parent is no greater than its children, so the smallest priority is available at the root."
      },
      {
       "id": "logarithmic-time",
       "term": "Logarithmic time, O(log n)",
       "definition": "A growth rate where the work increases with the number of times the input can be halved; a balanced binary heap has height proportional to log2(n)."
      }
     ],
     "say": "Each seller work row has a priority key: urgent before express before standard, then lower order ID, then lower item ID. The binary min-heap returns the smallest key first. Inserting one item and extracting the smallest each take O(log n) time."
    },
    {
     "establish": [
      {
       "id": "sorted-list-priority-queue",
       "term": "Sorted-list priority queue",
       "definition": "A priority queue that keeps all items in sorted order as they are inserted, so the next item is already at one end."
      },
      {
       "id": "custom-batch-sort",
       "term": "Custom batch sort",
       "definition": "A custom sorting algorithm applied once to a complete collection that is already available."
      }
     ],
     "say": "This endpoint loads the full seller-work batch and returns it in order. We therefore compare three custom approaches performing that same task: a binary heap, a sorted-list priority queue, and custom merge sort. Building the heap and extracting all n items takes O(n log n). Sorting the full batch is also O(n log n) and may be simpler for this particular workload."
    },
    {
     "establish": [],
     "say": "The rubric requires the custom binary min-heap in the live workflow, so it stays. But the measurements do not prove it is the best batch-ordering method: merge sort was fastest at n=5,000, while the sorted-list queue was faster at smaller tested sizes. A heap's strongest operational case would be priorities arriving and being consumed incrementally, which this endpoint does not currently do."
    }
   ],
   "visualFocus": "Show a priority key example, root extraction, then distinguish full-batch ordering from incremental work.",
   "evidence": [
    {
     "type": "benchmark",
     "claim": "At n=32, sorted-list queue, merge sort, and heap medians were 0.114 ms, 0.145 ms, and 0.288 ms. At n=5000, they were 60.347 ms, 34.060 ms, and 72.080 ms.",
     "reference": "tests/dsa_benchmarks.py; recorded run dated 2026-10-25"
    }
   ],
   "accuracyCaveats": [
    "The current seller endpoint loads a complete batch; do not imply it handles continuous arrivals.",
    "The sequence counter handles stability for otherwise equal priorities; it does not replace order-ID and item-ID business tie-breakers.",
    "Benchmark timings are finite observations, not proof of asymptotic complexity or a universal winner."
   ],
   "bridgeToNext": {
    "reasoning": "Priority order is neither arrival order nor recency order. Undo is based on recency, so the next example returns to the stack behavior and its actual cost.",
    "spokenTransition": "Seller work is ordered by priority; undo instead asks for the newest eligible change."
   }
  },
  {
   "number": 13,
   "id": "undo-stack",
   "title": "Code highlight C: undo stack",
   "roleInArgument": "Trace the current stack adapter honestly, including its mismatch with a one-result task.",
   "prerequisites": [
    "stack",
    "linked-node",
    "durable-state",
    "workflow"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "status-history",
       "term": "Status history",
       "definition": "Persisted records describing earlier fulfillment-status changes."
      },
      {
       "id": "eligible-event",
       "term": "Eligible history event",
       "definition": "A status-history record that has not already been undone and is allowed by the current workflow to be considered for undo."
      }
     ],
     "say": "The route obtains eligible status-history rows in ascending ID order, meaning oldest first. The service pushes each row in that order; the newest row ends up on top, so one pop selects the newest eligible event. The route then checks that the current status still matches the event before restoring the previous status and marking the event undone."
    },
    {
     "establish": [],
     "say": "There is an important cost mismatch. The helper pushes all h history rows but pops only once, so the helper uses O(h) time and O(h) temporary space. If the sole task were selecting the last item of an already ordered list, direct indexing would take O(1) time and less extra space."
    },
    {
     "establish": [],
     "say": "A custom array-backed stack could have different constant overhead, but it would not remove the unnecessary build-all-then-pop-once pattern. The rubric requires the linked stack in a live workflow, so we retain it as a course constraint and semantic LIFO match, not as a proven efficient choice."
    }
   ],
   "visualFocus": "History rows 10, 11, 12 are pushed in order; show 12 at the top and selected by pop.",
   "evidence": [
    {
     "type": "implementation",
     "claim": "The adapter pushes ascending history rows and pops once.",
     "reference": "services/fulfillment.py"
    },
    {
     "type": "benchmark",
     "claim": "At n=32, linked and fixed-capacity array stack medians were 0.020 ms and 0.015 ms; at n=5000, 5.001 ms and 3.323 ms.",
     "reference": "tests/dsa_benchmarks.py; recorded run dated 2026-10-25"
    }
   ],
   "accuracyCaveats": [
    "Do not claim the linked stack is the most efficient way to select one row from already ordered history.",
    "Both custom stack representations preserve LIFO; benchmark comparison does not fix the adapter's one-pop workload mismatch."
   ],
   "bridgeToNext": {
    "reasoning": "The queue and stack examples concern ordering existing records; catalog work instead asks which records match text and how to order those results.",
    "spokenTransition": "The catalog has a different task: find every matching product and then sort those results."
   }
  },
  {
   "number": 14,
   "id": "catalog-search-sort",
   "title": "Code highlight D: catalog search and sorting",
   "roleInArgument": "Explain live catalog matching, stable sorting, and why different search algorithms are not equivalent alternatives.",
   "prerequisites": [
    "linear-search-all",
    "merge-sort",
    "binary-search",
    "seed-catalog",
    "text-index"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "case-folding",
       "term": "Case-folding",
       "definition": "Normalizing text so that differences between uppercase and lowercase letters do not change a comparison."
      },
      {
       "id": "stable-sort",
       "term": "Stable sort",
       "definition": "A sorting method that preserves the original relative order of items whose sort keys are equal."
      }
     ],
     "say": "Catalog search trims and normalizes the query, then checks whether it appears in each product's brand, name, or category. It returns all matching products, so the live implementation scans the catalog. The results are ordered by case-insensitive product name with stable merge sort."
    },
    {
     "establish": [],
     "say": "Merge sort has O(n log n) time and preserves the order of equal keys. Insertion sort is easier to trace and can work well on small or nearly sorted inputs, but its worst case is O(n squared). A built-in production sort could be faster; this project uses custom merge sort as a course implementation."
    },
    {
     "establish": [],
     "say": "Binary search is not a like-for-like substitute: it needs sorted exact keys and ordinarily locates one key, whereas this task finds every substring match across several text fields. A trigram index is a possible repeated-query optimization, but it is benchmark-only, not part of live catalog search."
    }
   ],
   "visualFocus": "Show normalized query, fields checked, all matches, and stable name ordering.",
   "evidence": [
    {
     "type": "implementation",
     "claim": "Live catalog search checks brand, name, and category and sorts matches by name.",
     "reference": "services/catalog.py"
    },
    {
     "type": "benchmark",
     "claim": "For five queries at n=32, scan took 0.058 ms; index build took 0.375 ms and indexed batch took 0.125 ms.",
     "reference": "tests/dsa_benchmarks.py; recorded run dated 2026-10-25"
    }
   ],
   "accuracyCaveats": [
    "Live catalog search scans products; do not say it avoids scanning every record.",
    "The trigram index is a custom benchmark-only alternative.",
    "At the 32-product scale, do not claim merge sort is the fastest option based on the selected timings."
   ],
   "bridgeToNext": {
    "reasoning": "The catalog example demonstrates sorting and searching; the heap is another ordering mechanism whose internal invariant is worth seeing before the database boundary.",
    "spokenTransition": "We have seen what ordering the seller's work means; now let us look inside the heap that maintains that order."
   }
  },
  {
   "number": 15,
   "id": "heap-mechanics",
   "title": "Code highlight E: binary heap mechanics",
   "roleInArgument": "Explain the heap invariant and tie-breaking fields without overstating what the structure guarantees.",
   "prerequisites": [
    "min-heap",
    "priority-key",
    "tie-breaker",
    "linked-node"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "complete-binary-tree",
       "term": "Complete binary tree",
       "definition": "A tree where each level is filled from left to right before a lower level begins; this shape can be stored compactly in an array."
      },
      {
       "id": "heap-invariant",
       "term": "Heap invariant",
       "definition": "The rule that every parent priority is no greater than its children, which guarantees the smallest entry is at the root but does not sort every array position."
      },
      {
       "id": "sift-up-down",
       "term": "Sift up and sift down",
       "definition": "Repair operations that move an entry toward the root or toward the leaves until the heap invariant holds."
      },
      {
       "id": "stable-priority-order",
       "term": "Stable priority ordering",
       "definition": "For items equal on the business priority fields, preserve the order in which they entered the priority queue."
      }
     ],
     "say": "The heap is an array representing a complete binary tree. It is not a fully sorted array: the invariant only guarantees that each parent is no greater than its children, so the smallest entry is at the root. Insertion moves the new entry upward; extraction moves the last entry to the root and moves it downward until the invariant is restored."
    },
    {
     "establish": [],
     "say": "The priority tuple includes urgency, order ID, and item ID. A sequence counter preserves insertion order only when those fields are all equal; it does not replace the business tie-breakers."
    }
   ],
   "visualFocus": "Array/tree correspondence, root minimum, sift-up on insertion, and sift-down on extraction.",
   "evidence": [
    {
     "type": "implementation",
     "claim": "The custom heap stores priority, sequence, and item entries and uses sift operations.",
     "reference": "dsa/priority_queue.py"
    }
   ],
   "accuracyCaveats": [
    "Do not describe a heap as a fully sorted array.",
    "Do not imply the sequence field substitutes for urgency, order ID, or item ID."
   ],
   "bridgeToNext": {
    "reasoning": "Heap ordering determines which in-memory work item comes first; it does not make database changes safe, so the next slide isolates persistent stock guarantees.",
    "spokenTransition": "Ordering work and safely changing stored stock are separate responsibilities."
   }
  },
  {
   "number": 16,
   "id": "stock-transaction",
   "title": "Code highlight F: stock validation and transaction",
   "roleInArgument": "Clarify that persistent consistency comes from database controls, not the custom queue.",
   "prerequisites": [
    "database-transaction",
    "row-lock",
    "commit-rollback",
    "database-consistency",
    "queue"
   ],
   "teachingBeats": [
    {
     "establish": [],
     "say": "The API locks the matching stock row while checking the requested quantity. If stock is sufficient, it deducts stock and writes order data inside the same transaction. If any line fails, rollback prevents a partial order or partial deduction."
    },
    {
     "establish": [],
     "say": "This is a database consistency guarantee. The queue only preserves the order of checkout lines; it does not lock stock, prevent concurrent changes, or make database updates atomic."
    }
   ],
   "visualFocus": "Stock-row lock, quantity check, update, and commit-or-rollback outcomes.",
   "evidence": [
    {
     "type": "implementation",
     "claim": "Checkout stock checks and order writes use database transaction logic.",
     "reference": "app.py"
    }
   ],
   "accuracyCaveats": [
    "Do not attribute transaction behavior to the queue or heap."
   ],
   "bridgeToNext": {
    "reasoning": "The workflow explanation states what should happen; the integration test asks whether several layers work together as intended.",
    "spokenTransition": "The integration test is designed to exercise this flow across the application and database."
   }
  },
  {
   "number": 17,
   "id": "integration-test",
   "title": "Code highlight G: integration test",
   "roleInArgument": "Describe what the multi-layer test covers and report its current run status accurately.",
   "prerequisites": [
    "flask-route",
    "database-transaction",
    "workflow",
    "testability"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "integration-test-concept",
       "term": "Integration test",
       "definition": "A test that checks multiple application parts working together, rather than testing one isolated function only."
      },
      {
       "id": "test-client",
       "term": "Flask test client",
       "definition": "A tool that sends test requests through Flask routes without opening a real browser."
      },
      {
       "id": "disposable-test-db",
       "term": "Disposable test database",
       "definition": "A separate database created for testing whose contents may be changed or removed without affecting normal project data."
      }
     ],
     "say": "The database integration test is designed to create a seller and product, place an order, reject insufficient stock, advance and undo fulfillment, and verify seller ownership. It uses Flask's test client and a database."
    },
    {
     "establish": [],
     "say": "The test is opt-in and writes records, so it must only use a confirmed disposable test database. It was skipped in the current default test run. I will not claim it passed in this run."
    }
   ],
   "visualFocus": "Test scenario from setup through checkout, stock rejection, fulfillment, and ownership checks.",
   "evidence": [
    {
     "type": "test-run",
     "claim": "The default suite result was 12 passed and 1 skipped; the skipped test is the database integration test.",
     "reference": "Recorded default test run dated 2026-10-25"
    }
   ],
   "accuracyCaveats": [
    "The current PDF says the database integration test passed without current evidence; revise the claim or date it with separate verified evidence.",
    "Never enable the database test against the normal project database."
   ],
   "bridgeToNext": {
    "reasoning": "Tests show whether selected behaviors pass on selected cases; before interpreting either tests or timings, explain the theoretical model used to count algorithmic growth.",
    "spokenTransition": "We have discussed behavior and tests; next, distinguish theoretical complexity from measured elapsed time."
   }
  },
  {
   "number": 18,
   "id": "complexity-structures",
   "title": "Complexity analysis: structures and workflows",
   "roleInArgument": "Introduce asymptotic growth and apply it at both operation and whole-workflow levels.",
   "prerequisites": [
    "constant-time",
    "logarithmic-time",
    "queue",
    "stack",
    "min-heap",
    "database-transaction"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "big-o",
       "term": "Big-O notation",
       "definition": "A way to describe how an operation's work or extra memory grows as input size grows, ignoring fixed factors and smaller terms. It is not an elapsed-time measurement."
      },
      {
       "id": "input-size-n",
       "term": "Input size n",
       "definition": "The number of items being processed in the operation or workload under discussion."
      },
      {
       "id": "history-size-h",
       "term": "History size h",
       "definition": "The number of eligible history rows supplied to the undo-selection helper."
      },
      {
       "id": "auxiliary-space",
       "term": "Auxiliary space",
       "definition": "Additional temporary memory used by an operation, distinguished from input data that already exists."
      }
     ],
     "say": "Big-O describes how work grows as input size grows; it is not a stopwatch. One queue enqueue or dequeue is O(1), but enqueuing and draining n lines is O(n). One heap insertion or extraction is O(log n); inserting and extracting an entire batch is O(n log n)."
    },
    {
     "establish": [],
     "say": "The undo helper is O(h) in time because it pushes h history rows before one pop. Its temporary stack nodes use O(h) space. For full workflows, count all operations and temporary structures, not only the cost of one push, pop, or extraction."
    }
   ],
   "visualFocus": "Operation-level versus workflow-level cost; show n checkout lines, n heap entries, and h history records.",
   "evidence": [
    {
     "type": "analysis",
     "claim": "Queue operations are O(1), complete queue handling is O(n), the one-pop undo adapter is O(h), and complete heap build-and-drain is O(n log n).",
     "reference": "DSA_JUSTIFICATION.md"
    }
   ],
   "accuracyCaveats": [
    "State whether a complexity refers to one operation or a complete workflow.",
    "Distinguish auxiliary space from input and returned-result storage.",
    "Do not present Big-O as a measured speed guarantee."
   ],
   "bridgeToNext": {
    "reasoning": "The same growth model applies to catalog text operations; the next slide accounts for both the number of products and the amount of text checked.",
    "spokenTransition": "Now apply the same growth model to catalog search and sorting."
   }
  },
  {
   "number": 19,
   "id": "complexity-catalog",
   "title": "Complexity analysis: catalog workflows",
   "roleInArgument": "Explain how search cost depends on product count and text length, then compare it to sorting.",
   "prerequisites": [
    "big-o",
    "input-size-n",
    "linear-search-all",
    "merge-sort",
    "auxiliary-space"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "query-length-m",
       "term": "Query length m",
       "definition": "The number of characters in the text being searched for."
      },
      {
       "id": "match-count-k",
       "term": "Match count k",
       "definition": "The number of products returned by a search-all query."
      }
     ],
     "say": "Catalog search-all examines n products. The work also depends on how much searchable text and query text must be compared; for bounded text fields and query length m, the slide models a worst case as O(nm). Returning k matches uses O(k) output space."
    },
    {
     "establish": [],
     "say": "Merge sort takes O(n log n) time and O(n) auxiliary space. These estimates describe the custom Python operations, not database latency or the complete HTTP request. The text index in the benchmark is not part of the live catalog."
    }
   ],
   "visualFocus": "Count products checked, text comparison work, result count, and merge-sort stages.",
   "evidence": [
    {
     "type": "analysis",
     "claim": "The live catalog uses linear search-all and stable merge sort.",
     "reference": "DSA_JUSTIFICATION.md; services/catalog.py"
    }
   ],
   "accuracyCaveats": [
    "Keep text-index results clearly labeled benchmark-only.",
    "The exact string-comparison cost depends on text and query lengths; O(nm) is a stated bounded-text model."
   ],
   "bridgeToNext": {
    "reasoning": "Catalog complexity covers live search and sorting; the next slide contrasts educational algorithms whose preconditions and input sensitivity differ.",
    "spokenTransition": "The final complexity examples show why input conditions and preconditions matter."
   }
  },
  {
   "number": 20,
   "id": "complexity-learning-algorithms",
   "title": "Complexity analysis: learning algorithms",
   "roleInArgument": "Contrast insertion sort, linear search, and binary search, including preconditions and live-use status.",
   "prerequisites": [
    "big-o",
    "input-size-n",
    "insertion-sort",
    "linear-search-all",
    "binary-search"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "quadratic-time",
       "term": "Quadratic time, O(n^2)",
       "definition": "A growth rate where work can grow roughly with the square of the input size; nested comparisons or repeated shifts can produce this behavior."
      },
      {
       "id": "sorted-input-precondition",
       "term": "Sorted-input precondition",
       "definition": "A condition that must already be true before an algorithm can correctly use ordering to skip parts of its search."
      }
     ],
     "say": "Insertion sort takes O(n) time on already sorted input, but its worst case is O(n squared), such as reverse order, because items shift across the sorted prefix. Linear search works without a sorted-input requirement but may inspect every item. Binary search requires sorted input and repeatedly halves the search interval, taking O(log n) comparisons."
    },
    {
     "establish": [],
     "say": "Insertion sort is included because it is easy to trace and exposes input-sensitive work. Binary search demonstrates exact lookup when the input is sorted. Both are implemented and tested, but neither is used by the live marketplace route."
    }
   ],
   "visualFocus": "Best/typical/worst insertion-sort input and binary-search interval halving.",
   "evidence": [
    {
     "type": "implementation",
     "claim": "Insertion sort and binary search are teaching/test implementations, not live marketplace route algorithms.",
     "reference": "dsa/sorting.py; dsa/searching.py"
    }
   ],
   "accuracyCaveats": [
    "Do not suggest binary search applies to unsorted input or the live arbitrary substring search."
   ],
   "bridgeToNext": {
    "reasoning": "Complexity predicts growth by reasoning about operations; correctness tests answer a different question about specified inputs, so the next slide begins the evidence section with that distinction.",
    "spokenTransition": "Complexity is a growth model; tests instead check whether selected inputs produce expected behavior."
   }
  },
  {
   "number": 21,
   "id": "tests-structures",
   "title": "Representative test cases and results",
   "roleInArgument": "Explain what unit-level behavior tests establish and what they cannot establish.",
   "prerequisites": [
    "testability",
    "queue",
    "priority-queue",
    "big-o"
   ],
   "teachingBeats": [
    {
     "establish": [
      {
       "id": "unit-test",
       "term": "Unit test",
       "definition": "A test of a focused function or component using controlled inputs and expected results."
      },
      {
       "id": "correctness-evidence",
       "term": "Correctness evidence",
       "definition": "Evidence that specified examples satisfy their expected behavior; it increases confidence but does not prove every possible input is correct."
      }
     ],
     "say": "These tests check specified behavior, including FIFO order, priority ordering with ties, correct sorting and searching, and expected errors when a structure is empty. A passing test means the tested input produced its expected result."
    },
    {
     "establish": [],
     "say": "Tests do not prove every possible input is correct, and passing correctness tests is not a performance measurement. Read only the representative cases visible on the slide."
    }
   ],
   "visualFocus": "Selected test names, input conditions, and expected outcomes.",
   "evidence": [
    {
     "type": "tests",
     "claim": "Data-structure and algorithm behavior is covered by focused tests.",
     "reference": "tests/test_dsa.py"
    }
   ],
   "accuracyCaveats": [
    "Do not read every table cell unless asked.",
    "Do not equate a passing test with proof of correctness for all possible inputs or with performance evidence."
   ],
   "bridgeToNext": {
    "reasoning": "The first test examples cover core structures and algorithms; the next slide continues with stack, stability, and search preconditions.",
    "spokenTransition": "The next examples add the stack rule, stable sorting, and the input requirement for binary search."
   }
  },
  {
   "number": 22,
   "id": "tests-algorithms",
   "title": "Representative test cases and results",
   "roleInArgument": "Show how tests check LIFO, stable ordering, and search preconditions.",
   "prerequisites": [
    "stack",
    "stable-sort",
    "binary-search",
    "sorted-input-precondition",
    "correctness-evidence"
   ],
   "teachingBeats": [
    {
     "establish": [],
     "say": "The stack test checks that the most recently pushed item is removed first and that empty access raises the expected error. The sorting test checks both ordered output and stability for equal keys."
    },
    {
     "establish": [],
     "say": "The search test checks a hit and a miss, and supplies sorted input to binary search as required. These tests verify the stated contracts for the selected examples."
    }
   ],
   "visualFocus": "LIFO test, equal-key stability test, and sorted binary-search input.",
   "evidence": [
    {
     "type": "tests",
     "claim": "Tests cover stack behavior, sorting order/stability, and search hit/miss cases.",
     "reference": "tests/test_dsa.py"
    }
   ],
   "accuracyCaveats": [
    "A test is meaningful only when its preconditions and expected result are clear."
   ],
   "bridgeToNext": {
    "reasoning": "Component tests check isolated behavior; service tests check whether those rules are applied in real ThreadVault workflows.",
    "spokenTransition": "Service tests now connect those individual rules to the marketplace workflows."
   }
  },
  {
   "number": 23,
   "id": "tests-services",
   "title": "Representative test cases and results",
   "roleInArgument": "Connect component expectations to workflow behavior and report integration status.",
   "prerequisites": [
    "service-layer",
    "unit-test",
    "integration-test-concept",
    "correctness-evidence"
   ],
   "teachingBeats": [
    {
     "establish": [],
     "say": "Service tests verify checkout-line order, seller urgency and tie-breaks, newest-history selection, and catalog matching and sorting. The database integration scenario is designed to cover multiple layers together."
    },
    {
     "establish": [],
     "say": "In the current default run, the opt-in database test was skipped. I will not count it as an integration pass. A separate pass may be claimed only with its date, output, and confirmed disposable database setup."
    }
   ],
   "visualFocus": "Workflow-level test cases and a clear distinction between default and opt-in test outcomes.",
   "evidence": [
    {
     "type": "test-run",
     "claim": "Default suite: 12 passed, 1 skipped; the skipped test is the database-backed integration test.",
     "reference": "Recorded default test run dated 2026-10-25"
    },
    {
     "type": "tests",
     "claim": "Service behavior tests exercise custom DSA in workflow adapters.",
     "reference": "tests/test_services.py"
    }
   ],
   "accuracyCaveats": [
    "Do not say the integration scenario passed in the current default run.",
    "Do not run a database-writing integration test against normal project data."
   ],
   "bridgeToNext": {
    "reasoning": "After evidence, close by summarizing what the prototype demonstrates and its limitations without claiming more than the tests and implementation support.",
    "spokenTransition": "I will close by separating what the MVP implements from its limitations and evidence."
   }
  },
  {
   "number": 24,
   "id": "conclusion",
   "title": "Conclusion and recommendations",
   "roleInArgument": "Synthesize implemented workflows, constraints, and evidence.",
   "prerequisites": [
    "mvp",
    "queue",
    "stack",
    "min-heap",
    "correctness-evidence",
    "big-o"
   ],
   "teachingBeats": [
    {
     "establish": [],
     "say": "ThreadVault connects custom DSA implementations to checkout sequencing, seller work ordering, undo selection, and catalog operations. It is a local prototype, not a payment, shipping, or payout platform."
    },
    {
     "establish": [],
     "say": "The recorded default test run on October 25, 2026 reported 12 passed and 1 skipped; the skipped case was the database-backed integration test. A limited in-memory benchmark suite exists, but its measurements are not a production load test."
    },
    {
     "establish": [],
     "say": "The required queue, stack, and heap remain integrated because of the rubric. The evidence helps explain their costs and trade-offs; it does not prove that every required representation is optimal for its current workload."
    }
   ],
   "visualFocus": "Implemented scope, limitations, and evidence summary.",
   "evidence": [
    {
     "type": "test-run",
     "claim": "12 passed, 1 skipped in the default test run, dated 2026-10-25.",
     "reference": "Recorded pytest output"
    },
    {
     "type": "benchmark",
     "claim": "Custom comparison benchmark suite exists; timings are limited machine-specific microbenchmarks.",
     "reference": "tests/dsa_benchmarks.py"
    }
   ],
   "accuracyCaveats": [
    "The current PDF says 11 tests passed and that the MariaDB integration test passed; update or date those historical statements.",
    "The PDF lists repeatable benchmarks as future work although the limited benchmark suite now exists.",
    "Do not describe benchmark results as load testing or proof of Big-O."
   ],
   "bridgeToNext": {
    "reasoning": "The conclusion states what the project claims; references let the audience verify the contextual claims and source materials.",
    "spokenTransition": "These are the references behind the project materials. Thank you; we welcome your questions."
   }
  },
  {
   "number": 25,
   "id": "references",
   "title": "References",
   "roleInArgument": "Close transparently and distinguish cited context from project endorsement.",
   "prerequisites": [
    "fictional-project",
    "correctness-evidence"
   ],
   "teachingBeats": [
    {
     "establish": [],
     "say": "These are the references used for the project materials. The marketplace is fictional and the product seed data is for demonstration. A reference to a brand or image is not evidence that the brand sponsored or endorsed ThreadVault. Thank you; we are ready for questions."
    }
   ],
   "visualFocus": "Reference list and attribution.",
   "evidence": [
    {
     "type": "deck",
     "claim": "Every citation should support the specific image or factual claim associated with it.",
     "reference": "Group02_CS201-IS31S1_FinalPresentation.pdf"
    }
   ],
   "accuracyCaveats": [
    "Verify that each citation supports the associated claim and does not imply endorsement."
   ],
   "bridgeToNext": {
    "reasoning": "This is the final slide; invite questions without adding new technical claims.",
    "spokenTransition": "Thank you. We welcome your questions."
   }
  }
 ],
 "optionalBenchmarkDemonstration": {
  "position": "After slide 20, only if empirical measurements are required and time permits.",
  "status": "Optional supplement; the current PDF has no measured benchmark-results slide.",
  "purpose": "Demonstrate selected custom-versus-custom comparisons for equivalent tasks, while keeping measured time separate from theoretical complexity and correctness.",
  "protocol": {
   "command": "py -m pytest -q -s tests\\dsa_benchmarks.py",
   "method": "One warm-up, seven timed repetitions, report median elapsed time.",
   "measures": "In-memory operation plus data-structure/result construction.",
   "doesNotMeasure": [
    "Database time",
    "Flask request time",
    "Browser time",
    "Network time",
    "Memory consumption",
    "Production load"
   ],
   "environment": {
    "date": "2026-10-25",
    "python": "3.14.0",
    "os": "Windows 11",
    "cpu": "Intel64 Family 6 Model 140 Stepping 1, GenuineIntel"
   }
  },
  "openingScript": "These are selected in-memory comparisons. Before timing, the tests check that each custom implementation produces equivalent results for the selected input. The script warms each operation once and reports the median of seven runs. These measurements cover the operation and its data-structure or result construction, not database, browser, Flask, or network time. They are microbenchmarks on this machine, not proof of Big-O or production load behavior.",
  "measurementsMs": {
   "n5000": [
    {
     "comparison": "Custom linked queue vs custom fixed-capacity circular-array queue",
     "workload": "Enqueue and drain 5000 values",
     "medians": [
      4.789,
      5.426
     ]
    },
    {
     "comparison": "Custom linked stack vs custom fixed-capacity array stack",
     "workload": "Push and pop 5000 values",
     "medians": [
      5.001,
      3.323
     ]
    },
    {
     "comparison": "Custom binary heap vs custom sorted-list priority queue vs custom merge sort",
     "workload": "Order 5000 seller-like rows",
     "medians": [
      72.08,
      60.347,
      34.06
     ]
    },
    {
     "comparison": "Custom merge sort vs custom insertion sort",
     "workload": "Random input, n=1000",
     "medians": [
      4.01,
      45.286
     ]
    },
    {
     "comparison": "Custom merge sort vs custom insertion sort",
     "workload": "Reverse-sorted input, n=1000",
     "medians": [
      2.375,
      94.672
     ]
    },
    {
     "comparison": "Custom linear vs custom binary search",
     "workload": "Last-position exact hit in sorted input, n=50000",
     "medians": [
      6.572,
      0.004
     ]
    },
    {
     "comparison": "Custom scan vs benchmark-only reusable trigram index",
     "workload": "Five-query batch, n=5000",
     "medians": {
      "scan": 7.872,
      "indexBuild": 54.43,
      "reusedIndexBatch": 14.375
     }
    }
   ],
   "n32": [
    {
     "comparison": "Custom linked queue vs custom fixed-capacity circular-array queue",
     "workload": "Enqueue and drain 32 values",
     "medians": [
      0.033,
      0.035
     ]
    },
    {
     "comparison": "Custom linked stack vs custom array-backed stack",
     "workload": "Push and pop 32 values",
     "medians": [
      0.02,
      0.015
     ]
    },
    {
     "comparison": "Custom binary heap vs custom sorted-list priority queue vs custom merge sort",
     "workload": "Order 32 seller-like rows",
     "medians": [
      0.288,
      0.114,
      0.145
     ]
    },
    {
     "comparison": "Custom merge sort vs custom insertion sort",
     "workload": "Random input, n=32",
     "medians": [
      0.052,
      0.036
     ]
    },
    {
     "comparison": "Custom merge sort vs custom insertion sort",
     "workload": "Reverse-sorted input, n=32",
     "medians": [
      0.045,
      0.055
     ]
    },
    {
     "comparison": "Custom scan vs benchmark-only reusable trigram index",
     "workload": "Five-query batch, n=32",
     "medians": {
      "scan": 0.058,
      "indexBuild": 0.375,
      "reusedIndexBatch": 0.125
     }
    }
   ]
  },
  "interpretation": [
   "These timings are dated examples, not promised future results. If rerunning, present the fresh output and environment.",
   "At n=32, the project seed-catalog size is a reference scale; it does not prove the live seller has 32 open work rows.",
   "At n=5000, the custom linked queue beat this fixed-capacity array queue, while the array-backed stack beat the linked stack.",
   "For seller ordering, the sorted-list queue was fastest at n=32; custom merge sort was fastest at n=5000. No one method won at all sizes.",
   "For five catalog queries at n=32, the scan was faster than building and reusing the benchmark-only index.",
   "These results do not prove memory use, asymptotic bounds, or universal superiority."
  ],
  "comparatorRationale": [
   {
    "task": "FIFO batch",
    "comparison": "Custom linked queue vs custom circular-array queue",
    "whyComparable": "Both preserve first-in, first-out order for the same enqueue-then-drain batch.",
    "limitation": "The measured array implementation is fixed-capacity and does not represent every dynamic array queue."
   },
   {
    "task": "LIFO batch",
    "comparison": "Custom linked stack vs custom array-backed stack",
    "whyComparable": "Both preserve last-in, first-out behavior for the same push-then-pop batch.",
    "limitation": "The measured array implementation is fixed-capacity; neither benchmark representation removes the application's build-all-then-pop-once mismatch."
   },
   {
    "task": "Seller work ordering",
    "comparison": "Custom binary heap vs custom sorted-list priority queue vs custom merge sort",
    "whyComparable": "All use the same priority, order-ID, and item-ID ordering on identical full-batch rows.",
    "limitation": "They represent different designs; the representative comparison is not exhaustive. Incremental arrivals and extraction would be a different workload."
   },
   {
    "task": "Sorting",
    "comparison": "Custom merge sort vs custom insertion sort",
    "whyComparable": "Both sort equivalent values and return the same ordered result.",
    "limitation": "This pair does not compare production library sorting."
   },
   {
    "task": "Exact search",
    "comparison": "Custom linear search vs custom binary search",
    "whyComparable": "Both seek the same exact value in the same sorted integer list.",
    "limitation": "This is not a comparison for live substring search-all."
   },
   {
    "task": "Catalog substring search",
    "comparison": "Custom scan vs benchmark-only custom reusable trigram index",
    "whyComparable": "Both return the same matching products in source order for the same queries.",
    "limitation": "The index is not part of the live service; build time is reported separately."
   }
  ],
  "script": [
   "The results are mixed, which is useful. At 5000 items, this linked queue was faster than the fixed-capacity circular-array implementation, while the array-backed stack was faster than the linked stack. For seller ordering, custom merge sort was fastest at the largest tested size, but the sorted-list queue was faster at n=32. Merge sort was much faster than insertion sort on the selected large random and reverse-sorted inputs. Binary search used less time for this already-sorted exact lookup. At n=32, scanning was faster than building and reusing the trigram index. Workload size, input assumptions, reuse, and memory all matter.",
   "The benchmark checks equivalent outputs for selected cases, then times selected operations on one machine. Complexity analysis explains expected growth; a timing table is only a finite observation. Memory was not measured, so neither evidence set proves universal superiority."
  ],
  "guardrails": [
   "Do not say the benchmark proves the heap is faster.",
   "Do not say the index makes live catalog search faster.",
   "Do not compare unlike tasks as though they were substitutes.",
   "A library comparison is not inherently invalid; it answers a different question about production-library performance. This course-focused comparison instead studies selected custom designs performing the same task."
  ]
 },
 "likelyQuestions": [
  {
   "question": "Why did you choose a linked queue?",
   "answer": "The behavior is FIFO preservation of checkout-line order. A linked queue provides constant-time enqueue and dequeue with head and tail references. A circular array can provide the same abstract behavior. The rubric specifically requires the linked queue in a live workflow, so we retain it; the custom benchmark shows a representation trade-off, not that linked nodes always win."
  },
  {
   "question": "Why use a heap if the endpoint orders a complete list?",
   "answer": "A heap supports logarithmic insertion and extraction of the smallest priority and is especially useful when priorities are consumed incrementally. This endpoint loads and orders a complete batch, where custom merge sort is also a valid approach. The rubric requires the custom binary min-heap in the live workflow, so it stays, but the benchmark does not prove it is best for this batch workload."
  },
  {
   "question": "Why use a stack when you only pop once?",
   "answer": "LIFO matches the rule of considering the newest eligible change first. The current adapter pushes all history rows and pops once, so it takes O(h) time and space; selecting the final row directly would be simpler absent the rubric constraint. We retain the linked stack because the rubric requires it in a live workflow, not because it is faster."
  },
  {
   "question": "Why compare these benchmark alternatives?",
   "answer": "They implement the same result contract on equivalent inputs: FIFO against FIFO, LIFO against LIFO, and the same seller priority ordering across heap, sorted-list queue, and merge sort. They are representative custom alternatives, not an exhaustive search for a universal winner."
  },
  {
   "question": "Does catalog search avoid scanning every record?",
   "answer": "No. The live API scans products for substring matches. The trigram index is benchmark-only, and for the recorded five-query workload it was slower than scanning at the 32-product scale. More representative scale and query-volume evidence would be needed before changing the live implementation."
  },
  {
   "question": "Did the integration test pass?",
   "answer": "The current default run reported 12 passed and 1 skipped; the skipped test is the opt-in database integration test. I will only claim a database pass for a separate run if I can show its date, output, and disposable test-database setup."
  },
  {
   "question": "Does timing prove the complexity?",
   "answer": "No. Complexity comes from counting operations as input grows. Measurements show elapsed time for finite inputs in one environment; they can be consistent with a complexity analysis but cannot prove an asymptotic bound."
  }
 ],
 "deckCorrections": [
  {
   "slide": 2,
   "issue": "The slide blends a hypothetical O(n^2) repeated order-selection example with catalog lookup, although live catalog lookup scans products.",
   "action": "Separate the hypothetical example from live behavior. State that seller work is heap-ordered and catalog lookup is a linear scan. Source or qualify claims about local brands' advertising budgets."
  },
  {
   "slide": 6,
   "issue": "The slide describes the queue as managing ongoing order processes and the stack as affecting buyer product availability.",
   "action": "Replace with request-local checkout-line ordering and selection of the latest eligible undo event."
  },
  {
   "slide": 8,
   "issue": "The diagram places dequeue inside the transaction loop, while the service drains the queue before database work.",
   "action": "Show queue-to-ordered-list first, then the database transaction loop."
  },
  {
   "slide": 17,
   "issue": "The database integration test is stated as passed without evidence for the current run.",
   "action": "Date the evidence and identify the disposable test database, or label the claim historical/not run in the current verification."
  },
  {
   "slide": 23,
   "issue": "The slide states the integration test passed without showing a dated run.",
   "action": "Align the statement to the current result: the opt-in database test was skipped."
  },
  {
   "slide": 24,
   "issue": "The slide reports 11 tests passed, the MariaDB test passed, and repeatable benchmarks as future work.",
   "action": "Update to the dated default result of 12 passed and 1 skipped, identify the skipped database test, and acknowledge the limited benchmark suite."
  },
  {
   "slide": 14,
   "issue": "The search slide may imply indexed or sublinear catalog lookup.",
   "action": "State explicitly that live search scans products and that the trigram index exists only in the benchmark."
  },
  {
   "slide": 19,
   "issue": "The complexity slide may imply a text index is deployed.",
   "action": "Label the text index as a benchmark-only alternative."
  },
  {
   "slide": 25,
   "issue": "Brand references may be mistaken for sponsorship or endorsement.",
   "action": "Verify each citation supports its associated claim and explicitly avoid implying endorsement."
  }
 ],
 "notebookDistinction": {
  "claim": "The Jupyter notebook is a self-contained teaching model and does not import the live dsa/ package.",
  "reference": "Group2_Submission6_Jupyter_Notebook.ipynb",
  "instruction": "Keep the notebook distinct from live application implementation in narration and Q&A."
 },
 "sourceReferences": [
  {
   "path": "PRESENTATION_DEFENSE_SCRIPT.md",
   "role": "Prior narrative and slide notes used to produce this structured model; do not treat as the app's parallel authoritative script."
  },
  {
   "path": "DSA_JUSTIFICATION.md",
   "role": "Detailed implementation rationale and complexity analysis."
  },
  {
   "path": "DSA_BENCHMARK_DEFENSE_SCRIPT.md",
   "role": "Benchmark methodology and interpretation."
  },
  {
   "path": "tests/dsa_benchmarks.py",
   "role": "Executable custom-versus-custom benchmark definitions."
  },
  {
   "path": "tests/test_dsa.py",
   "role": "Focused structure and algorithm tests."
  },
  {
   "path": "tests/test_services.py",
   "role": "Workflow adapter tests."
  },
  {
   "path": "services/ordering.py",
   "role": "Checkout line queue adapter."
  },
  {
   "path": "services/fulfillment.py",
   "role": "Seller work ordering and undo-history selection adapters."
  },
  {
   "path": "services/catalog.py",
   "role": "Live catalog matching and sorting."
  },
  {
   "path": "dsa/queue.py",
   "role": "Custom linked FIFO queue."
  },
  {
   "path": "dsa/stack.py",
   "role": "Custom linked LIFO stack."
  },
  {
   "path": "dsa/priority_queue.py",
   "role": "Custom binary min-heap priority queue."
  },
  {
   "path": "dsa/sorting.py",
   "role": "Custom sorting implementations."
  },
  {
   "path": "dsa/searching.py",
   "role": "Custom searching implementations."
  },
  {
   "path": "app.py",
   "role": "HTTP routes, authorization, and database workflow."
  },
  {
   "path": "products.json",
   "role": "Demonstration catalog seed data."
  }
 ]
};
