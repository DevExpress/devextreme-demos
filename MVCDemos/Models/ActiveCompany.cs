﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.MVC.Demos.Models {
    public class ActiveCompany {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int ZipCode { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public string Website { get; set; }
        public bool Active { get; set; }
    }
}
