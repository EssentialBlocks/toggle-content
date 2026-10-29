var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    // Measure against the element's own window, which is the editor iframe for blocks in the canvas
    var view = elem.ownerDocument.defaultView || window;
    var root = elem.ownerDocument.documentElement;
    return (
        distance.top >= 0 &&
        distance.top <= (view.innerHeight || root.clientHeight) &&
        distance.left >= 0 &&
        // distance.bottom <= (view.innerHeight || root.clientHeight) &&
        distance.right <= (view.innerWidth || root.clientWidth)
    );
};
// read the link on how above code works

window.addEventListener('DOMContentLoaded', (event) => {
    var keySelector = '.eb___animated';
    waitForElement(keySelector).then((elm) => {

        var findAnimationClass = document.querySelectorAll(keySelector);
        replaceAnimationClasses(findAnimationClass);

        window.addEventListener('scroll', function (event) {
            replaceAnimationClasses(findAnimationClass);
        }, true);
    });

    //For Admin Panel: the animation select is rendered later, so listen on the document
    document.addEventListener('change', function (event) {
        if (event.target && event.target.id === 'eb-animation-style') {
            setTimeout(function () {
                getEditorDocuments().forEach(function (doc) {
                    replaceAnimationClasses(doc.querySelectorAll(keySelector));
                });
            }, 500);
        }
    }, true);
});



var replaceAnimationClasses = function (selector) {
    selector.forEach(element => {
        if (isInViewport(element)) {
            let toRemoveClasses = [];
            let toAddClasses = [];
            element.classList.forEach((classname) => {
                if (classname.includes('eb___')) {
                    toRemoveClasses.push(classname);
                    toAddClasses.push(classname.replace('eb___', 'eb__'));
                }
            })
            element.classList.add(...toAddClasses);
            element.classList.remove(...toRemoveClasses);
        }
    });
}

// The admin document plus the iframed editor canvas, where blocks render in newer WordPress
var getEditorDocuments = function () {
    var docs = [document];
    document.querySelectorAll('iframe[name="editor-canvas"]').forEach(function (frame) {
        try {
            if (frame.contentDocument) {
                docs.push(frame.contentDocument);
            }
        } catch (e) {
            // Cross-origin frame, nothing to update
        }
    });
    return docs;
}

//
var waitForElement = function (selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}