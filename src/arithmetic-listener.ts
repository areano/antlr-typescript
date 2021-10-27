import {arithmeticListener} from "./grammar/arithmeticListener";
import {ExpressionAdditionContext, ExpressionMultiplicationContext, StartContext} from "./grammar/arithmeticParser";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";
import {ErrorNode} from "antlr4ts/tree";
import {ParserRuleContext} from "antlr4ts/ParserRuleContext";


export class ArithmeticListener implements arithmeticListener {

    enterEveryRule(ctx: ParserRuleContext): void {
        console.log(ctx.text)
    }

    exitEveryRule(ctx: ParserRuleContext): void {
        console.log(ctx.text)
    }

    visitErrorNode(node: ErrorNode): void {
    }

    visitTerminal(node: TerminalNode): void {
    }

    exitStart(ctx: StartContext): void {
        console.log(ctx.text)
    }

    enterStart(ctx: StartContext): void {
        console.log(ctx.text)
    }

    enterExpressionAddition(ctx: ExpressionAdditionContext): void {
        console.log(ctx.text)
    }

    enterExpressionMultiplication(ctx: ExpressionMultiplicationContext): void {
        console.log(ctx.text)
    }

}
