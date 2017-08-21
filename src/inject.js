/**
 * THE KIM IN THE NORTH!-inator
 */
(function () {
    var needle = "Kim Jong[ -]?Un";
    var replacements = [
        "THE KIM IN THE NORTH",
        "The Kim in the North",
        "DAKIMINDANORTH",
        "DAKIMINDANOORF"
    ];

    function randomFromArray(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function searchAndReplace(nodeValue) {
        return nodeValue.replace(new RegExp(needle, 'gi'), randomFromArray(replacements));
    }

    function walkDocument(rootElement) {
        var walker = document.createTreeWalker(rootElement, NodeFilter.SHOW_TEXT, null, false);
        var walkerNode;
        while (walkerNode = walker.nextNode()) {
            walkerNode.nodeValue = searchAndReplace(walkerNode.nodeValue);
        }
    }

    walkDocument(document.body);
})();
