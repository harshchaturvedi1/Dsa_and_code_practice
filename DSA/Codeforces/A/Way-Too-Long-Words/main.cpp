// #include <bits/stdc++.h>
#include <iostream>
#include <string>
using namespace std;

int countWords(string word)
{
    return word.length();
}

int main()
{
    string word;
    int cases;
    cin >> cases;
    while (cases--)
    {
        cin >> word;
        if (word.length() > 10)
        {
            int length = countWords(word);
            cout << word[0] << length - 2 << word[length - 1] << endl;
        }
        else
        {
            cout << word << endl;
        }
    }
    return 0;
}

/* explaination
used string library of c++
if (length > 10 )--> first word + length-2 + last word
else ---> print word itself
 */