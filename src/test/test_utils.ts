import { createRuleFailedOnAsserter, createRulePassedOnAsserter } from '@fixentropy-io/type/test-utils';
import cleanAsserter from '../..';

export const rulePassed = createRulePassedOnAsserter(cleanAsserter, require);

export const ruleFailed = createRuleFailedOnAsserter(cleanAsserter, require);
