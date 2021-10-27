// Generated from arithmetic.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { arithmeticListener } from "./arithmeticListener";
import { arithmeticVisitor } from "./arithmeticVisitor";


export class arithmeticParser extends Parser {
	public static readonly VARIABLE = 1;
	public static readonly LPAREN = 2;
	public static readonly RPAREN = 3;
	public static readonly PLUS = 4;
	public static readonly MINUS = 5;
	public static readonly TIMES = 6;
	public static readonly DIV = 7;
	public static readonly WS = 8;
	public static readonly RULE_start = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_atom = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "expression", "atom",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'('", "')'", "'+'", "'-'", "'*'", "'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "VARIABLE", "LPAREN", "RPAREN", "PLUS", "MINUS", "TIMES", "DIV", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(arithmeticParser._LITERAL_NAMES, arithmeticParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return arithmeticParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "arithmetic.g4"; }

	// @Override
	public get ruleNames(): string[] { return arithmeticParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return arithmeticParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(arithmeticParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, arithmeticParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 6;
			this.expression(0);
			this.state = 7;
			this.match(arithmeticParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, arithmeticParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 15;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case arithmeticParser.LPAREN:
				{
				_localctx = new ExpressionGroupContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 10;
				this.match(arithmeticParser.LPAREN);
				this.state = 11;
				this.expression(0);
				this.state = 12;
				this.match(arithmeticParser.RPAREN);
				}
				break;
			case arithmeticParser.VARIABLE:
				{
				_localctx = new ExpressionValueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 14;
				this.atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 25;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 23;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionMultiplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionMultiplicationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, arithmeticParser.RULE_expression);
						this.state = 17;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 18;
						_la = this._input.LA(1);
						if (!(_la === arithmeticParser.TIMES || _la === arithmeticParser.DIV)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 19;
						(_localctx as ExpressionMultiplicationContext)._rigth = this.expression(5);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionAdditionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionAdditionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, arithmeticParser.RULE_expression);
						this.state = 20;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 21;
						_la = this._input.LA(1);
						if (!(_la === arithmeticParser.PLUS || _la === arithmeticParser.MINUS)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 22;
						(_localctx as ExpressionAdditionContext)._rigth = this.expression(4);
						}
						break;
					}
					}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, arithmeticParser.RULE_atom);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.match(arithmeticParser.VARIABLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\n!\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x12\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x07\x03\x1A\n\x03\f\x03\x0E\x03\x1D\v\x03" +
		"\x03\x04\x03\x04\x03\x04\x02\x02\x03\x04\x05\x02\x02\x04\x02\x06\x02\x02" +
		"\x04\x03\x02\b\t\x03\x02\x06\x07\x02 \x02\b\x03\x02\x02\x02\x04\x11\x03" +
		"\x02\x02\x02\x06\x1E\x03\x02\x02\x02\b\t\x05\x04\x03\x02\t\n\x07\x02\x02" +
		"\x03\n\x03\x03\x02\x02\x02\v\f\b\x03\x01\x02\f\r\x07\x04\x02\x02\r\x0E" +
		"\x05\x04\x03\x02\x0E\x0F\x07\x05\x02\x02\x0F\x12\x03\x02\x02\x02\x10\x12" +
		"\x05\x06\x04\x02\x11\v\x03\x02\x02\x02\x11\x10\x03\x02\x02\x02\x12\x1B" +
		"\x03\x02\x02\x02\x13\x14\f\x06\x02\x02\x14\x15\t\x02\x02\x02\x15\x1A\x05" +
		"\x04\x03\x07\x16\x17\f\x05\x02\x02\x17\x18\t\x03\x02\x02\x18\x1A\x05\x04" +
		"\x03\x06\x19\x13\x03\x02\x02\x02\x19\x16\x03\x02\x02\x02\x1A\x1D\x03\x02" +
		"\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x05\x03\x02" +
		"\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E\x1F\x07\x03\x02\x02\x1F\x07\x03\x02" +
		"\x02\x02\x05\x11\x19\x1B";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!arithmeticParser.__ATN) {
			arithmeticParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(arithmeticParser._serializedATN));
		}

		return arithmeticParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EOF(): TerminalNode { return this.getToken(arithmeticParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return arithmeticParser.RULE_start; }
	// @Override
	public enterRule(listener: arithmeticListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: arithmeticListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return arithmeticParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpressionMultiplicationContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _rigth!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public TIMES(): TerminalNode | undefined { return this.tryGetToken(arithmeticParser.TIMES, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(arithmeticParser.DIV, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: arithmeticListener): void {
		if (listener.enterExpressionMultiplication) {
			listener.enterExpressionMultiplication(this);
		}
	}
	// @Override
	public exitRule(listener: arithmeticListener): void {
		if (listener.exitExpressionMultiplication) {
			listener.exitExpressionMultiplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitExpressionMultiplication) {
			return visitor.visitExpressionMultiplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionAdditionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _rigth!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(arithmeticParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(arithmeticParser.MINUS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: arithmeticListener): void {
		if (listener.enterExpressionAddition) {
			listener.enterExpressionAddition(this);
		}
	}
	// @Override
	public exitRule(listener: arithmeticListener): void {
		if (listener.exitExpressionAddition) {
			listener.exitExpressionAddition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitExpressionAddition) {
			return visitor.visitExpressionAddition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionGroupContext extends ExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(arithmeticParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(arithmeticParser.RPAREN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: arithmeticListener): void {
		if (listener.enterExpressionGroup) {
			listener.enterExpressionGroup(this);
		}
	}
	// @Override
	public exitRule(listener: arithmeticListener): void {
		if (listener.exitExpressionGroup) {
			listener.exitExpressionGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitExpressionGroup) {
			return visitor.visitExpressionGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionValueContext extends ExpressionContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: arithmeticListener): void {
		if (listener.enterExpressionValue) {
			listener.enterExpressionValue(this);
		}
	}
	// @Override
	public exitRule(listener: arithmeticListener): void {
		if (listener.exitExpressionValue) {
			listener.exitExpressionValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitExpressionValue) {
			return visitor.visitExpressionValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(arithmeticParser.VARIABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return arithmeticParser.RULE_atom; }
	// @Override
	public enterRule(listener: arithmeticListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: arithmeticListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


