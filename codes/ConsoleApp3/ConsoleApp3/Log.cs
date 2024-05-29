using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    internal class Log
    {
        public static List<string> logList = new List<string>();

        static public bool ExecLog(string s)
        {
            logList.Add(s);
            return false;
        }

        static public string ExecString()
        {
            Console.WriteLine("★ExecString★");
            return "★ExecString★";
        }
    }
}
