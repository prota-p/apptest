class EditorModule {
    constructor() {
        this.editorInstance = null;
        window.editorModule = this;
    }

    initialize(containerId) {
        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });
        require(['vs/editor/editor.main'], () => {
            this.editorInstance = monaco.editor.create(document.getElementById(containerId), {
                value: [
                    'System.Console.WriteLine("Hello World!");',
                ].join('\n'),
                language: 'csharp',
                theme: 'vs-dark',
            });
        });
    }

    getText() {
        return this.editorInstance ? this.editorInstance.getValue() : '';
    }

    setText(newText) {
        if (this.editorInstance) {
            this.editorInstance.setValue(newText);
        }
    }

    highlightLine(lineNumber, color, alpha) {
        if (this.editorInstance) {
            const rgbaColor = `rgba(${color}, ${alpha})`;
            const decorations = [{
                range: new monaco.Range(lineNumber, 1, lineNumber, 1),
                options: {
                    isWholeLine: true,
                    inlineClassName: `highlight-line-${lineNumber}`
                }
            }];
            const decorationIds = this.editorInstance.deltaDecorations([], decorations);

            // Apply the inline style to the decoration
            const styleElement = document.createElement('style');
            styleElement.innerHTML = `.monaco-editor .highlight-line-${lineNumber} { background-color: ${rgbaColor}; }`;
            document.head.appendChild(styleElement);
        }
    }
        
    scrollToLine(lineNumber) {
        this.editorInstance.revealLine(lineNumber);
    }

    attachResizeListener(containerId) {
        window.addEventListener('resize', () => {
            this.editorInstance.layout();
        });
    }
}

new EditorModule();
