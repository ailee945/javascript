const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class CustomPromis {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED;
        queueMicrotask(() => {
          this.value = value
          this.onFulfilled(value);
          console.log("resolve");
        });
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED;
        queueMicrotask(() => {
          this.reason = reason
          this.onRejected(this.reason);
          console.log("reject");
        });
      }
    };

    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled;
    this.onRejected = onRejected;
  }
}

// 功能测试
const promise = new CustomPromis((resolve, reject) => {
  resolve('resolve+++')
  reject("reject+++");
});

promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
