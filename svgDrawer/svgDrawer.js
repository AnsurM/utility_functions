main = (interval, loop = false) => {
    let element = document.querySelector("path");
    if (!element) alert("Object not found");

    window.isInit = false;
    let pathLength = element.getTotalLength();
    if (!pathLength) alert("path length not found");
    let offset = pathLength;
    drawSVGForward = () => {
        if (!window.isInit) {
            window.isInit = true;
            element.setAttribute("stroke-dasharray", pathLength);
            element.setAttribute("stroke-dashoffset", pathLength);
        }
        offset -= 20;
        if(element.getAttribute("stroke-dashoffset") > 0 && element.getAttribute("stroke-dashoffset") < 20)
        {
        element.setAttribute("stroke-dashoffset", 0);
        }
        else
        {
        element.setAttribute("stroke-dashoffset", offset);
        }
        element.style.display = "none";
        element.offsetHeight;
        element.style.display = "block";
            if (offset > 0) {
                setTimeout(() => {
                drawSVGForward();
            }, interval);
        }
            else
            {
                if(loop)
                {
                offset = 0;
                element.setAttribute("stroke-dashoffset", 0);
                drawSVGReverse();
                }
            }
    }

    drawSVGReverse = () => {
        offset += 20;
        if(element.getAttribute("stroke-dashoffset") > pathLength - 20)
        {
        element.setAttribute("stroke-dashoffset", pathLength);
        }
        else
        {
        element.setAttribute("stroke-dashoffset", offset);
        }
        element.style.display = "none";
        element.offsetHeight;
        element.style.display = "block";
            if (offset < pathLength) {
                setTimeout(() => {
                drawSVGReverse();
            }, interval);
            }
            else
            {
                offset = pathLength;
                element.setAttribute("stroke-dashoffset", offset);
                drawSVGForward();
            }
    }

    if(!window.isInit)
    {
        drawSVGForward();
    }
}