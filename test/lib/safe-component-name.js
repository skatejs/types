let counter = 0;

export default function safeComponentName () {
  let prefix = 'x-test';
  return `${prefix}-${(counter++).toString()}`;
}
