import React from 'react';
import { ES5Functions } from './ES5Functions';
import { ArrowFunctions } from './ArrowFunctions';
import { ImpliedReturn } from './ImpliedReturn';
import { FunctionParenthesisAndParameters } from './FunctionParenthesisAndParameters';

export function WorkingWithFunctions() {
  return (
    <>
      <ES5Functions />
      <ArrowFunctions />
      <ImpliedReturn />
      <FunctionParenthesisAndParameters />
    </>
  )
}