// Generated from arithmetic.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ExpressionMultiplicationContext } from "./arithmeticParser";
import { ExpressionAdditionContext } from "./arithmeticParser";
import { ExpressionGroupContext } from "./arithmeticParser";
import { ExpressionValueContext } from "./arithmeticParser";
import { StartContext } from "./arithmeticParser";
import { ExpressionContext } from "./arithmeticParser";
import { AtomContext } from "./arithmeticParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `arithmeticParser`.
 */
export interface arithmeticListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `expressionMultiplication`
	 * labeled alternative in `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionMultiplication?: (ctx: ExpressionMultiplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionMultiplication`
	 * labeled alternative in `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionMultiplication?: (ctx: ExpressionMultiplicationContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionAddition`
	 * labeled alternative in `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionAddition?: (ctx: ExpressionAdditionContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionAddition`
	 * labeled alternative in `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionAddition?: (ctx: ExpressionAdditionContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionGroup`
	 * labeled alternative in `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionGroup?: (ctx: ExpressionGroupContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionGroup`
	 * labeled alternative in `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionGroup?: (ctx: ExpressionGroupContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionValue`
	 * labeled alternative in `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionValue?: (ctx: ExpressionValueContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionValue`
	 * labeled alternative in `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionValue?: (ctx: ExpressionValueContext) => void;

	/**
	 * Enter a parse tree produced by `arithmeticParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `arithmeticParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `arithmeticParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `arithmeticParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;
}

