Write a function named, **correctLogin** that checks if the user has entered the correct username and password. 


For the purpose of this question, 

- The username is "**hello**" 
- The password is "**yes123**".

The function should print **true** if the username and password matches, otherwise it should print **false**.

The function should also return **true** if the username and password matches, otherwise it should return **false**.

Note: Assume the argument for the input functions to be:

- "username: "
- "password: "

**Test Cases**
```
> hello
> yes
false
```

```
> hi
> yes123
false
```

```
> hello
> yes123
true
```