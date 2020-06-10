using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Movie> Movies = new[] {
            new Movie {
                ID = 1,
                Text = "His Girl Friday",
                Director = "Howard Hawks",
                Year = 1940,
                Image = "../../images/movies/HisGirlFriday.jpg",
                Duration = 92,
                Color = "#cb6bb2"
            },
            new Movie {
                ID = 2,
                Text = "Royal Wedding",
                Director = "Stanley Donen",
                Year = 1951,
                Image = "../../images/movies/RoyalWedding.jpg",
                Duration = 93,
                Color = "#56ca85"
            },
            new Movie {
                ID = 3,
                Text = "A Star Is Born",
                Director = "William A. Wellman",
                Year = 1937,
                Image = "../../images/movies/AStartIsBorn.jpg",
                Duration = 111,
                Color = "#1e90ff"
            },
            new Movie {
                ID = 4,
                Text = "The Screaming Skull",
                Director = "Alex Nicol",
                Year = 1958,
                Image = "../../images/movies/ScreamingSkull.jpg",
                Duration = 68,
                Color = "#ff9747"
            },
            new Movie {
                ID = 5,
                Text = "It's a Wonderful Life",
                Director = "Frank Capra",
                Year = 1946,
                Image = "../../images/movies/ItsAWonderfulLife.jpg",
                Duration = 130,
                Color = "#f05797"
            },
            new Movie {
                ID = 6,
                Text = "City Lights",
                Director = "Charlie Chaplin",
                Year = 1931,
                Image = "../../images/movies/CityLights.jpg",
                Duration = 87,
                Color = "#2a9010"
            }
        };
    }
}
