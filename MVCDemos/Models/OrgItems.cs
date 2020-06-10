using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models {
    public class OrgItem {
        public string ID { set; get; }
        public string Text { set; get; }
        public string Type { set; get; }
    }
    public class OrgLink {
        public string ID { set; get; }
        public string From { set; get; }
        public string To { set; get; }
    }
    public class OrgItemPlain {
        public int ID { set; get; }
        public int HeadID { set; get; }
        public string FullName { set; get; }
        public string Prefix { set; get; }
        public string Title { set; get; }
        public string City { set; get; }
        public string State { set; get; }
        public string Email { set; get; }
        public string Skype { set; get; }
        public string MobilePhone { set; get; }
        public string BirthDate { set; get; }
        public string HireDate { set; get; }
    }
    public class OrgItemHierarchy {
        public int ID { set; get; }
        public IEnumerable<OrgItemHierarchy> Items { set; get; }
        public string FullName { set; get; }
        public string Prefix { set; get; }
        public string Title { set; get; }
        public string City { set; get; }
        public string State { set; get; }
        public string Email { set; get; }
        public string Skype { set; get; }
        public string MobilePhone { set; get; }
        public string BirthDate { set; get; }
        public string HireDate { set; get; }
    }
    public class OrgItemAdvanced {
        public string ID { set; get; }
        public string Name { set; get; }
        public string Type { set; get; }
        public string Level { set; get; }
    }
    public class OrgItemWithImage {
        public string ID { set; get; }
        public string Text { set; get; }
        public string Type { set; get; }
        public string Picture { set; get; }
    }
}
