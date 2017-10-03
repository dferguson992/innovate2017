using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Frontend.Models
{
    public class Message
    {
        public string Id { get; set; }

        public string Body { get; set; }

        public string Author { get; set; }

        public string Originallink { get; set; }
    }
}
