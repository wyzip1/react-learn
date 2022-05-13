let idx = 0
const use_state_global_catch = []

function  _useState(initValue) {
  const index = idx;
  idx++
  if(!use_state_global_catch[index]) use_state_global_catch[index] = initValue
  const value = use_state_global_catch[index];
  return [value, (value) => {
    queueMicrotask(() => {
      const isCall = typeof value === 'function'
      if(isCall) {
        use_state_global_catch[index] = value(use_state_global_catch[index])
      } else use_state_global_catch[index] = value
      idx = 0
    })
  }]
}

function test() {
  const [num, setNum] = _useState(0);
  const [str, setStr] = _useState('init');
  window.sn = setNum;
  window.ss = setStr;

  console.log(num, str);
}
test();

sn(v => v + 100);
ss(v => v + ' => change')
test()

sn(999);
ss('hfiahfia')
test()