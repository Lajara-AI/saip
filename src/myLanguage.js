import { parser } from "./parser";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { HighlightStyle, tags } from "@codemirror/highlight";
import { styleTags, tags as t } from "@lezer/highlight";

// Define a highlight style
const myHighlightStyle = HighlightStyle.define([
    { tag: t.keyword, color: "#d73a49" },
    { tag: t.literal, color: "#005cc5" },
    { tag: t.string, color: "#032f62" },
    { tag: t.variableName, color: "#e36209" },
    { tag: t.comment, color: "#6a737d", fontStyle: "italic" },
    { tag: t.number, color: "#005cc5" },
    { tag: t.operator, color: "#d73a49" },
    { tag: t.function(t.variableName), color: "#6f42c1" }
]);

// Create the language instance
export const myLanguage = LRLanguage.define({
    parser: parser.configure({
        props: [
            styleTags({
                Identifier: t.variableName,
                BooleanLiteral: t.bool,
                NoneLiteral: t.null,
                Number: t.number,
                StringLiteral: t.string,
                AritmeticOperator: t.operator,
                ComparisonOperator: t.operator,
                LogicalOperator: t.operator,
                AssignStatement: t.definition(t.variableName),
                Routine: t.function(t.definition(t.variableName)),
                Comment: t.comment,
                DocString: t.docComment,
                DataType: t.typeName,
                Keyword: t.keyword
            })
        ]
    }),
    highlight: myHighlightStyle
});

export function myLanguageSupport() {
    return new LanguageSupport(myLanguage);
}
