export type AsyncActionStatus = 'idle' | 'pending' | 'success' | 'failed';

interface BaseAction {
  type: string;
  status: AsyncActionStatus;
}

export interface IdleAction extends BaseAction {
  status: 'idle';
}

export interface PendingAction extends BaseAction {
  status: 'pending';
}

export interface SuccessAction<T> extends BaseAction {
  status: 'success';
  payload: T;
}

export interface FailedAction extends BaseAction {
  status: 'failed';
  error: string;
}
