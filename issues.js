// App-authored review of the supplied JSON (NOT part of the canonical content). Content is rendered unchanged; these are flags.
window.TV_ISSUES = [
 {kind:'granularity', slides:[11,12,13,14], text:'Narration uses O(n), O(n log n) and O(n squared) on slides 11–14, but Big-O notation, input size n, history size h and auxiliary space are first established on slide 18. Only O(1) and O(log n) are defined earlier (slides 11–12). Slide 13 also uses "h" and "temporary space" before slide 18.'},
 {kind:'granularity', slides:[11,12,13,14], text:'Benchmark timings and the word "median" appear in slides 11–14 (evidence and, on slide 12, spoken narration), but the benchmark protocol is explained only in the optional benchmark section, positioned after slide 20. Slide 12 spoken text relies on the measurements before that.'},
 {kind:'granularity', slides:[7], text:'Slide 7 narration says "authentication, authorization, and validation". Authentication and authorization are never defined (slide 8 defines input validation; slide 9 defines role and ownership checks).'},
 {kind:'granularity', slides:[4], text:'Slide 4 narration mentions "status history" and "undo" and slide 5 uses "substring match"; status history is defined on slide 13, undo is explained on slides 6/13 and substring is never defined.'},
 {kind:'granularity', slides:[12], text:'Slide 12 accuracy caveat mentions the "sequence counter" before slide 15 establishes it.'},
 {kind:'granularity', slides:[13], text:'Slide 13 narration uses "direct indexing" without defining it.'},
 {kind:'granularity', slides:[14], text:'Slide 14 narration and caveats say "trigram index"; only the general "text index" is defined (slide 5). The trigram term is never defined.'},
 {kind:'granularity', slides:[8], text:'Slide 8 uses "overselling" and "stock row" without definitions.'},
 {kind:'granularity', slides:[1,2], text:'Slide 1 narration names "custom data structures and algorithms"; the term "custom data structure or algorithm" is defined on slide 2 and "data structure" on slide 4.'},
 {kind:'structure', slides:[1], beat:2, text:'Slide 1, beat 2 "say" text is a stage direction to the presenter ("Introduce the team members…"), not a spoken line. It is rendered unchanged but labelled in the app. The JSON has no field separating spoken text from instructions.'},
 {kind:'structure', slides:[15], text:'Slide 15 lists "linked-node" as a prerequisite, but the heap is described as an array representing a tree; the link to linked nodes is not explained.'},
 {kind:'inconsistency', slides:[13], text:'Slide 13 evidence calls the n=32 comparator a "fixed-capacity array stack", while the benchmark section\'s n=32 entry names an "array-backed stack" (its n=5000 entry says fixed-capacity). Shown as supplied.'},
 {kind:'inconsistency', slides:[20], text:'Slide 20 prerequisite "linear-search-all" is used for the "linear search" described there (single exact lookup vs return-all). The JSON does not distinguish them.'},
 {kind:'structure', slides:[], text:'The benchmark section is placed "after slide 20" while slides 11–14 already quote its measurements. The app keeps it outside the 25-slide path, in its own section (key B), without altering the numbered order.'},
 {kind:'scope', slides:[], text:'The project repository was not available: no code, tests or measurements were verified. All claims are presented as supplied in the JSON.'}
];
