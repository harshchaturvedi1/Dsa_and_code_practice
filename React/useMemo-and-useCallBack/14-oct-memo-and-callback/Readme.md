### React.memo -> higher order fucntion

### 1. export default GetPrime;

- no check for values
- every render will calculate value

### 2. export default React.memo(GetPrime);

- performs a shallow check over the value
- the values are still calculated
- here the "next" is created every single time there's a re-render
  so the reference to function is not same -> bcz reference to two objects is never same
- 2.1 one way to solve the issue is to create a comparator for react memo i.e. in point 3
- 2.2 second way is to use "useCallback"
- 2.3 third way is to use "useMemo"

// higher order function

### 3. Passing comparator function

```export default React.memo(GetPrime, (prevProps, nextProps) => {
return prevProps.value === nextProps.value;
});
```

- the second parameter is a comparator function that will check whether the value should
- be memoized or not
- if returned true -> it will get memoized

### 4. useCallback

```const next1 = useCallback(() => setPrime((prev) => prev + 1),[]);

```

- useCallback uses some dependency -> so as the dependency changes the function is called again
- useCallback keeps the function in memory and makes sure the function is not re-rendered again and again

### 5. useMemo

- instead of memoizing whole component we can just memoized a function

```const val = useMemo(() => getNthPrimeNo(value), [value]);

```

- expansive operation is being memoized

### 6. some important points

- If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

React.memo only checks for prop changes. If your function component wrapped in React.memo has a useState or useContext Hook in its implementation, it will still rerender when state or context change.

By default it will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument
