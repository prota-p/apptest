using ConsoleApp3;
using System.Drawing;

Point p = new Point(1, 2);
int[] numbers;
numbers = new int[0];
numbers =  new[] { 4, 5, 6 };
Dictionary<string, int> dic = null;
dic = new Dictionary<string, int>();
dic = new Dictionary<string, int> { { "abc", 11 }, { "efg", 12 } };

int x = 1;
//1から10までを足す
for (int i= 0; i < 2; i++)
{
    x += i;
    Console.WriteLine(i);
}
new Class1().Add(1, 2);
Class1.Sub(1, 2);
Console.WriteLine("sub");
Console.WriteLine("Hello, World"+x);
Console.ReadLine();