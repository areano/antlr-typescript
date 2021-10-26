// Generated from arithmetic.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class arithmeticLexer extends Lexer {
	public static readonly VARIABLE = 1;
	public static readonly LPAREN = 2;
	public static readonly RPAREN = 3;
	public static readonly PLUS = 4;
	public static readonly MINUS = 5;
	public static readonly TIMES = 6;
	public static readonly DIV = 7;
	public static readonly WS = 8;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"VARIABLE", "UNSIGNED_INTEGER", "LPAREN", "RPAREN", "PLUS", "MINUS", "TIMES", 
		"DIV", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'('", "')'", "'+'", "'-'", "'*'", "'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "VARIABLE", "LPAREN", "RPAREN", "PLUS", "MINUS", "TIMES", "DIV", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(arithmeticLexer._LITERAL_NAMES, arithmeticLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return arithmeticLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(arithmeticLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "arithmetic.g4"; }

	// @Override
	public get ruleNames(): string[] { return arithmeticLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return arithmeticLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return arithmeticLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return arithmeticLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\n/\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x03\x06\x03" +
		"\x19\n\x03\r\x03\x0E\x03\x1A\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x06\n*\n\n\r\n\x0E" +
		"\n+\x03\n\x03\n\x02\x02\x02\v\x03\x02\x03\x05\x02\x02\x07\x02\x04\t\x02" +
		"\x05\v\x02\x06\r\x02\x07\x0F\x02\b\x11\x02\t\x13\x02\n\x03\x02\x03\x05" +
		"\x02\v\f\x0F\x0F\"\"\x02/\x02\x03\x03\x02\x02\x02\x02\x07\x03\x02\x02" +
		"\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02" +
		"\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02" +
		"\x03\x15\x03\x02\x02\x02\x05\x18\x03\x02\x02\x02\x07\x1C\x03\x02\x02\x02" +
		"\t\x1E\x03\x02\x02\x02\v \x03\x02\x02\x02\r\"\x03\x02\x02\x02\x0F$\x03" +
		"\x02\x02\x02\x11&\x03\x02\x02\x02\x13)\x03\x02\x02\x02\x15\x16\x05\x05" +
		"\x03\x02\x16\x04\x03\x02\x02\x02\x17\x19\x042;\x02\x18\x17\x03\x02\x02" +
		"\x02\x19\x1A\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1A\x1B\x03\x02\x02" +
		"\x02\x1B\x06\x03\x02\x02\x02\x1C\x1D\x07*\x02\x02\x1D\b\x03\x02\x02\x02" +
		"\x1E\x1F\x07+\x02\x02\x1F\n\x03\x02\x02\x02 !\x07-\x02\x02!\f\x03\x02" +
		"\x02\x02\"#\x07/\x02\x02#\x0E\x03\x02\x02\x02$%\x07,\x02\x02%\x10\x03" +
		"\x02\x02\x02&\'\x071\x02\x02\'\x12\x03\x02\x02\x02(*\t\x02\x02\x02)(\x03" +
		"\x02\x02\x02*+\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,-\x03" +
		"\x02\x02\x02-.\b\n\x02\x02.\x14\x03\x02\x02\x02\x05\x02\x1A+\x03\b\x02" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!arithmeticLexer.__ATN) {
			arithmeticLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(arithmeticLexer._serializedATN));
		}

		return arithmeticLexer.__ATN;
	}

}

