import {AnyAction, Reducer} from 'redux';
import {EffectsCommandMap} from 'dva';
import {notification} from 'antd';
import {login} from './service';
import {routerRedux} from 'dva/router';
import {setAuthority} from "@/utils/authority";

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
    status: undefined,
  },
  effects: {
    * login({payload}, {call, put}) {
      const response = yield call(login, payload);
      if (response && response.code == 1) {
        yield put({
          type: 'save',
          payload: response,
        });
        notification.success({
            message: `${response.currentStudent}，登录成功`,
            description:
              '开启你的大门吧！！',
          }
        );
        yield put(routerRedux.replace('/'));
      } else {
        notification.error({
            message: `登录失败`,
            description:
              '用户名或者密码有误！！',
          }
        );
      }
    }
  },
  reducers: {
    save(state, {payload}) {
      setAuthority(payload.currentStudent);
      return {
        ...state,
        currentStudent: payload.currentStudent,
        status: payload.code,
      }
    }
  },
}
export default Model;
