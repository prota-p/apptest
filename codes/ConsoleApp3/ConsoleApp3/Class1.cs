using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    //四則演算を行うクラス
    internal class Class1
    {
        public static int staticField = 12;

        public int Add(int x, int y)
        {
            Class2 class2 = null;
            class2 = new Class2();
            return x;
        }

        public static int Sub(int x, int y)
        {
            { 
                int z = 1;
                int t = 2;
                {
                    int s = 3;
                }
                staticField = 13;
            }
            {
                int z = 4;
                int w = 5;
            }
            return x - y;
        }
    }

    class Class2
    {

    }
}
