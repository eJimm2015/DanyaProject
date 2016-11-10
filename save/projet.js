  function selectText(hexColor) {
            var selection = window.getSelection().getRangeAt(0);
            var selectedText = selection.extractContents();
                
            var span = document.createElement('span');
                
            span.style.color = hexColor;
           
            span.appendChild(selectedText);
                
             
            selection.insertNode(span);
        }