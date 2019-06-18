import "./style.css";

export class CodeLineNumbers {

    static readonly DEFAULT_SELECTOR = "pre > code";

    static addCodeLineNumbers(selector: string = CodeLineNumbers.DEFAULT_SELECTOR) {
        let els = document.querySelectorAll(selector);
        for (let i=0; i<els.length; i++)
            CodeLineNumbers.addLineNumbersTo(els[i] as HTMLElement);
    }

    static addLineNumbersTo(elCode: HTMLElement) {
        let lines = elCode.innerHTML.split("\n");
        if (lines.length === 0 || (lines.length === 1 && lines[0].length === 0))
            return;

        let digitsCount = ("" + lines.length).length;

        for (let n = 0; n < lines.length; n++) {
            let numberWithZeros = "" + n;
            if (numberWithZeros.length < digitsCount) {
                let zeros = "";
                for (let i = 0; i < digitsCount - numberWithZeros.length; i++)
                    zeros += "0";
                numberWithZeros = `<span class="code-line-numbers__number__zeros">${zeros}</span>${n}`;
            }
            lines[n] = `<span class="code-line-numbers__number">${numberWithZeros}</span>` + lines[n];
        }
        elCode.innerHTML = lines.join("\n");
    }

}