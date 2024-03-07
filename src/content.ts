chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "changeColor") {
        document.body.style.backgroundColor = "#5A5A5A";

        // Injeceting the CSS
        const cssCode = `
        p{
            color: white;
            font-size: 16px;
            text-shadow: 2px 2px 4px #000000;
        }

        div[data-message-author-role="user"] {
            color: blue;
            text-shadow: 2px 2px #FF0000;
        }

        .font-semibold{
            text-shadow: 0 0 3px #FF0000;
        }

        *, :after, :before{
            border: inset;
        }
        `;
        const styleElement = document.createElement("style");
        styleElement.textContent = cssCode;
        document.head.appendChild(styleElement);
    }
  });