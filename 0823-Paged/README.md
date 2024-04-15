Imagine that you are doing an e-commerce website, and you have 20 product names stored in a list. 

For Example:

```
list = ["item1","item2","item3","item4","item5",
        "item6","item7","item8","item9","item10",
        "item11","item12","item13","item14","item15",
        "item16","item17","item18","item19","item20"]
```

You want to show only 8 products per page. 

Write a function, named **page**, which takes in the product list and the page number. 

The function should return a new list with the product names for that page. 

**Page numbers start from 0.**

Example: If the page is 0, then the function should return the first eight elements in the list. 
If the page is 1, then the function should return the next eight elements, and so on and so forth.
