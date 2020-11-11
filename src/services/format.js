export  default {
  // 格式化日期(YYYY-MM-DD)
  getDate(timestamp) {
    if(timestamp !== '') {
      let date = new Date(timestamp);
      let o = {
        Y : date.getFullYear(),
        M : date.getMonth()+1,
        D : date.getDate(),
      }
      let formatDate = o.Y + '-' + this.preZero(o.M) + '-' + this.preZero(o.D);
      return formatDate;
    }else {
      return '';
    }
  },

  // 格式化日期+时间(YYYY-MM-DD hh:mm:ss)
  getDateTime(timestamp) {
    if (timestamp !== '') {
      let date = new Date(timestamp);
      let o = {
        Y : date.getFullYear(),
        M : date.getMonth()+1,
        D : date.getDate(),
        h : date.getHours(),
        m : date.getMinutes(),
        s : date.getSeconds()
      }
      let formatDateTime = o.Y + '-' + this.preZero(o.M) + '-' + this.preZero(o.D) + ' ' + this.preZero(o.h) + ':' + this.preZero(o.m) + ':' + this.preZero(o.s);
      return formatDateTime;
    }else {
      return '';
    }
  },

  // 补零函数
  preZero(str) {
    return ('00' + str).slice(-2);
  },

  // 保留小数点后两位
  formatDecimals(num) {
    let number = num ? num : 0;
    return parseFloat(number).toFixed(2);
  },

  // 格式化金额(逗号隔开)
  formatMoney(num) {
    let number = num ? num : 0;
    return parseFloat(number).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}



