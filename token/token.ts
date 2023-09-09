export type TokenType = string;

export interface Token {
  type: TokenType;
  literal: string;
}

export enum TokenConstants {
  ILLEGAL = "ILLEGAL",
  EOF = "EOF",
  IDENT = "IDENT",
  INT = "INT",
  ASSIGN = "=",
  PLUS = "+",
  COMMA = ",",
  SEMICOLON = ";",
  LPAREN = "(",
  RPAREN = ")",
  LBRACE = "{",
  RBRACE = "}",
  FUNCTION = "FUNCTION",
  LET = "LET"
}
