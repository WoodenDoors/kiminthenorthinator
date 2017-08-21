/**
 * THE KIM IN THE NORTH!-inator
 */
(function () {
    var needle = "Kim Jong-Un";
    var replacement = "THE KIM IN THE NORTH";

    function searchAndReplace(nodeValue) {
        return nodeValue.replace(new RegExp(needle, 'gi'), replacement);
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
