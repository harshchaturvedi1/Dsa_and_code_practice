// #include <bits/stdc++.h>
#include <iostream>
using namespace std;

char twoAreSure(int a, int b, int c)
{
    if ((a == 1 && b == 1) || (a == 1 && c == 1) || (b == 1 && c == 1))
    {
        return true;
    }
    else
    {
        return false;
    }
}
int main()
{
    int arr[1000];
    int problems;
    cin >> problems;

    int a, b, c, count = 0;
    while (problems)
    {
        cin >> a >> b >> c;
        if (twoAreSure(a, b, c))
        {
            count++;
        }
        problems--;
    }
    cout << count << endl;
    return 0;
}

/* explaination
 */