import {describe, expect, test} from '@jest/globals';
import { Account } from './Account';

describe('testing empty account', () => {
  test('empty account should result in empty array', () => {
    let account = new Account();
    expect(account.transactions).toStrictEqual([]);
  });
});
describe('testing adding deposit', () => {
  test('adding deposit should result in an array with amount and date of day', () => {
    let account = new Account();
    account.deposit(100);
    let date = new Date().toLocaleDateString();
    expect(account.transactions[0]).toStrictEqual([date, 100]);
  });
});
describe('testing adding withdraw', () => {
  test('adding withdraw should result in an array with amount and date of day', () => {
    let account = new Account();
    account.withdraw(100);
    let date = new Date().toLocaleDateString();
    expect(account.transactions[0]).toStrictEqual([date, -100]);
  });
});