function addLineNumbers() {
    const codeBlocks = document.querySelectorAll('pre > code');
    
    codeBlocks.forEach(codeBlock => {
        // Store the original HTML with syntax highlighting
        const html = codeBlock.innerHTML.trim();
        // Split HTML into lines while preserving tags
        const lines = html.split('\n');
        if (lines[lines.length - 1].trim() === '') lines.pop();
        if (!lines[-1]) lines.pop()
        console.log(lines[-1])
        
        // Clear the code block
        codeBlock.innerHTML = '';
        
        // Add each line wrapped in a span, preserving HTML
        lines.forEach((line, index) => {
            const lineNumber = document.createElement('span');
            lineNumber.className = 'line-number';
            lineNumber.textContent = index + 1;
            
            const lineContent = document.createElement('span');
            lineContent.className = 'line-content';
            lineContent.innerHTML = line;
            
            const lineWrapper = document.createElement('div');
            lineWrapper.className = 'line';
            lineWrapper.appendChild(lineNumber);
            lineWrapper.appendChild(lineContent);
            
            codeBlock.appendChild(lineWrapper);
        });
    });
}

function addCopyButtons() {
    document.querySelectorAll('pre').forEach(pre => {
        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'code-actions';
        
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
            <span>Copy</span>
        `;
        
        buttonContainer.appendChild(copyButton);
        pre.appendChild(buttonContainer);
        
        copyButton.addEventListener('click', async () => {
            try {
                // Get all line content spans and join their text content
                const code = Array.from(pre.querySelectorAll('.line-content'))
                    .map(line => line.textContent)
                    .join('\n');
                
                await navigator.clipboard.writeText(code);
                
                // Update button text
                const span = copyButton.querySelector('span');
                span.textContent = 'Copied!';
                copyButton.classList.add('copied');
                
                setTimeout(() => {
                    span.textContent = 'Copy';
                    copyButton.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code:', err);
                const span = copyButton.querySelector('span');
                span.textContent = 'Error!';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    addLineNumbers();
    addCopyButtons();
    addLanguageBadges();
}); 