import {AnyAction, Reducer} from 'redux';
import {EffectsCommandMap} from 'dva';
import {message} from 'antd';
import {login} from './service';

export interface StateType {
  status?: 0 | 1;
  currentStudent?: '刘山' | '鲁佳明' | '朱贤康' | '';
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: StateType) => T) => T },
) => void;

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    login: Effect;
  };
  reducers: {
    save: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'LoginRegister',
  state: {
    currentStudent: undefined,
  },
  effects: {
    * login({payload}, {call, put}) {
      const response = yield call(login, payload);
      if (response && response.code == 1) {
        yield put({
          type: 'save',
          payload: response,
        });
        message.success('ss');
      }
    }
  },
  reducers: {
    save(state, {payload}) {
      return {
        ...state,
        currentStudent: payload.currentStudent,
      }
    }
  },
}
export default Model;
