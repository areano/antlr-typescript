import {AbstractParseTreeVisitor} from "antlr4ts/tree";
import {arithmeticVisitor} from "./grammar/arithmeticVisitor";
import {
    AtomContext,
    ExpressionAdditionContext,
    ExpressionGroupContext,
    ExpressionMultiplicationContext,
    ExpressionValueContext,
    StartContext
} from "./grammar/arithmeticParser";

export class ArithmeticVisitor extends AbstractParseTreeVisitor<number> implements arithmeticVisitor<number> {

    protected defaultResult(): number {
        return 0;
    }

    visitAtom(ctx: AtomContext): number {
        return parseInt(ctx.text);
    }

    visitExpressionAddition(ctx: ExpressionAdditionContext): number {
        if (ctx.PLUS()) {
            return this.visit(ctx._left) + this.visit(ctx._rigth);
        } else if (ctx.MINUS()) {
            return this.visit(ctx._left) - this.visit(ctx._rigth);
        }
        throw new Error('Invalid addition operand')
    }

    visitExpressionGroup(ctx: ExpressionGroupContext): number {
        return this.visit(ctx.expression());
    }

    visitExpressionMultiplication(ctx: ExpressionMultiplicationContext): number {
        if (ctx.TIMES()) {
            return this.visit(ctx._left) * this.visit(ctx._rigth);
        } else if (ctx.DIV()) {
            return this.visit(ctx._left) / this.visit(ctx._rigth);
        }
        throw new Error('Invalid multiplication operand')
    }

    visitExpressionValue(ctx: ExpressionValueContext): number {
        return this.visit(ctx.atom());
    }

    visitStart(ctx: StartContext): number {
        return this.visit(ctx.expression())
    }

}
