// Generated from arithmetic.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ExpressionMultiplicationContext } from "./arithmeticParser";
import { ExpressionAdditionContext } from "./arithmeticParser";
import { ExpressionGroupContext } from "./arithmeticParser";
import { ExpressionValueContext } from "./arithmeticParser";
import { StartContext } from "./arithmeticParser";
import { ExpressionContext } from "./arithmeticParser";
import { AtomContext } from "./arithmeticParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `arithmeticParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface arithmeticVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `expressionMultiplication`
	 * labeled alternative in `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionMultiplication?: (ctx: ExpressionMultiplicationContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionAddition`
	 * labeled alternative in `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionAddition?: (ctx: ExpressionAdditionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionGroup`
	 * labeled alternative in `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionGroup?: (ctx: ExpressionGroupContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionValue`
	 * labeled alternative in `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionValue?: (ctx: ExpressionValueContext) => Result;

	/**
	 * Visit a parse tree produced by `arithmeticParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `arithmeticParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;
}

