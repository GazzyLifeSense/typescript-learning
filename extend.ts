type Constructor1<T = {}> = new (...args: any[]) => T;
interface Constructor<T>{
    new(...args: any[]): T 
}
// 添加属性的混合例子
function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now();
  };
}

class Log{
    msg = ''
}

const TimestampedLog = Timestamped(Log)
const timestampedLog = new TimestampedLog()
console.log(timestampedLog.timestamp)