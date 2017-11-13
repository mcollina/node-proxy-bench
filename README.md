Run `node a.js` and `node b.js`.

Run:

```
npx autocannon -c 100 -d 5 -p 10 localhost:3000
```

I can see in my flamegraph (hit v8 flag) that a lot of the code is still
run in interpreted mode. How do I debug those situations? All of this
code is Node core.

The out file includes --trace-opt --trace-deopt --trace-turbo-inlining.
