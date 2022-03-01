// #include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main()
{
    int n;
    cin >> n;
    if (n > 3)
        n % 2 == 0 ? cout << "YES" << endl : cout << "NO" << endl;
    else
        cout << "NO";
    return 0;
}

/* explaination
- if no. are greater than 3 and they are odd ->
    they cannot be divided into even pairs
- if no. are below 3 they cannot be divided into even pairs of numbers
 */