import { Loading } from 'element-ui';
import ErrorCode from '../http/errorCode'

export default class Load extends ErrorCode{
  static loadingCount = 0
  static loading
  static startLoading(){
    Load.loading = Loading.service({
      lock: true,
      text: '请稍后，正在处理中.....',
      spinner: "el-icon-loading",
      background: 'rgba(0, 0, 0, 0.3)',
      customClass: "loading-model"
    })
  }
  static endLoading(){
    Load.loading.close()
  }
  showLoading(){
    if(Load.loadingCount === 0){
      Load.startLoading()
    }
    Load.loadingCount += 1
  }
  hideLoading(){
    if (Load.loadingCount <= 0) {
      return;
    }
    Load.loadingCount -= 1;
    if (Load.loadingCount === 0) {
      Load.endLoading();
    }
  }
}
