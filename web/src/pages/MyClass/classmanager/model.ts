import {AnyAction, Reducer} from 'redux';
import {EffectsCommandMap} from 'dva';
import {fetchData} from './service';

import {TableData} from './data.d';

export interface StateType {
  data: Array<TableData>;
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: StateType) => T) => T },
) => void;

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    fetch: Effect;
  };
  reducers: {
    save: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'classManager',
  state: {
    data: [],
  },
  effects: {
    * fetch(_, {call, put}) {
      const response = yield call(fetchData);
      yield put({
        type: 'save',
        payload: response,
      })
    }
  },
  reducers: {
    save(state, {payload}) {
      return {
        ...state,
        data: payload,
      };
    }
  },
}
export default Model;
