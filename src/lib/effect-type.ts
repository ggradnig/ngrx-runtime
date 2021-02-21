import {Effect, ObservableEffect, Operand, PromiseEffect, UnsubscribeOperation, UnsubscriptionEffect} from './functions';
import {isObservable} from 'rxjs';

export function isObservableEffect<E>(effect: Effect<E>, operand: Operand<E>): effect is ObservableEffect<E> {
  return isObservable(operand);
}

export function isPromiseEffect<E>(effect: Effect<E>, operand: Operand<E>): effect is PromiseEffect<E> {
  return operand instanceof Promise;
}

export function isUnsubscriptionEffect<E>(effect: Effect<E>, operand: Operand<E>): effect is UnsubscriptionEffect<E> {
  return (operand as UnsubscribeOperation).__brand === 'Unsubscribe';
}
