const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

// 封装try catch工具函数
function executeFunctionWithCatch(execFn, value, resolve, reject) {
  try {
    const result = execFn(value);
    resolve(result);
  } catch (err) {
    reject(err);
  }
}

class CustomPromis {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledFns = [];
    this.onRejectedFns = [];

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = value;
          this.onFulfilledFns.forEach((fn) => {
            fn(this.value);
          });
        });
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_REJECTED;
          this.reason = reason;
          this.onRejectedFns.forEach((fn) => {
            fn(this.reason);
          });
        });
      }
    };
    // 直接抛出异常
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    // 实现catch
    onRejected =
      onRejected ||
      ((err) => {
        throw err;
      });
    // 实现finally
    onFulfilled =
      onFulfilled ||
      ((value) => {
        return value;
      });
    return new CustomPromis((resolve, reject) => {
      // 异步调用（调用时为fulfilled状态）
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        // const value = onFulfilled(this.value);
        // resolve(value);
        executeFunctionWithCatch(onFulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        // try {
        //   const reason = onRejected(this.reason);
        //   resolve(reason);
        // } catch (err) {
        //   reject(err);
        // }
        executeFunctionWithCatch(onRejected, this.reason, resolve, reject);
      }
      // 多次调用
      if (this.status === PROMISE_STATUS_PENDING) {
        if (onFulfilled)
          this.onFulfilledFns.push(() => {
            // try {
            //   const value = onFulfilled(this.value);
            //   resolve(value);
            // } catch (err) {
            //   reject(err);
            // }
            executeFunctionWithCatch(onFulfilled, this.value, resolve, reject);
          });
        if (onRejected)
          this.onRejectedFns.push(() => {
            // try {
            //   const reason = onRejected(this.reason);
            //   resolve(reason);
            // } catch (err) {
            //   reject(err);
            // }
            executeFunctionWithCatch(onRejected, this.reason, resolve, reject);
          });
      }
    });
  }
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
  finally(onFinally) {
    this.then(onFinally, onFinally);
  }
}

// 功能测试
const promise = new CustomPromis((resolve, reject) => {
  // resolve("resolve+++");
  // reject("reject+++");
  throw new Error("executor throw error");
});

// 多次调用
// promise.then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );
// promise.then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// 异步调用promise.then()
// setTimeout(() => {
//   promise.then(
//     (res) => {
//       console.log(res);
//     },
//     (err) => {
//       console.log(err);
//     }
//   );
// }, 1000);

// 链式调用
promise
  .then(
    (res) => {
      console.log("chain1+++" + res);
      return "----";
    },
    (err) => {
      console.log("chain1---" + err);
      return "--------";
    }
  )
  .then(
    (res) => {
      console.log("chain2+++" + res);
    },
    (err) => {
      console.log("chain2---" + err);
    }
  );
