import { EditorState } from "@codemirror/state";
import { EditorView, basicSetup } from "@codemirror/basic-setup";
import { myLanguageSupport } from "./myLanguage.js";

let state = EditorState.create({
    doc: `callable sum = routine(int a, int b) : int {
    """
    This is a test function that adds two numbers together.
    """
    return a + b;
};

print(sum("Hola", 1)); # 3`,
    extensions: [basicSetup, myLanguageSupport()]
});

let view = new EditorView({
    state,
    parent: document.getElementById('editor')
});

