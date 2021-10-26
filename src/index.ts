import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {arithmeticLexer} from "./grammar/arithmeticLexer";
import {arithmeticParser} from "./grammar/arithmeticParser";
import {ArithmeticVisitor} from "./arithmetic-visitor";

/**
 * check this out https://www.antlr.org/index.html
 */

const input = "((2*2)+3)/3";

const inputStream = CharStreams.fromString(input);
const lexer = new arithmeticLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new arithmeticParser(tokenStream);
const visitor = new ArithmeticVisitor()
const startContext = parser.start()

const output = visitor.visit(startContext)

console.log(output)

