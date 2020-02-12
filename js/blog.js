dom.getAll(".collapse-section").forEach(element => {
    element.style.maxHeight = "100000px"
    element.classList.add("collapse-false")
})

dom.getAll(".collapse-button").forEach(element => {
    element.onclick = event => {
        var children = event.target.parentNode.childNodes
        for (var i = 0; i < children.length; i++) {
            var child = children[i]
            if (child == event.target) {
                i += 2
                if (i < children.length) {
                    child = children[i]
                    if (child.classList.contains("collapse-false")) {
                        child.classList.remove("collapse-false")
                        child.classList.add("collapse-true")
                    } else {
                        child.classList.remove("collapse-true")
                        child.classList.add("collapse-false")
                    }
                    child.style.maxHeight = child.classList.contains("collapse-false") ? "100000px" : "0px"
                }
                break
            }
        }
    }
})