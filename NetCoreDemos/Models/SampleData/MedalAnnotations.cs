using System;
using System.Collections.Generic;
using System.Linq;
using DevExtreme.AspNet.Mvc;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly MedalAnnotationInfo[] AnnotationItems = new[] {
            new MedalAnnotationInfo {
                Country = "Russia",
                OffsetX = 15,
                OffsetY = 5
            },
            new MedalAnnotationInfo {
                Country = "Canada",
                OffsetY = 10
            },
            new MedalAnnotationInfo {
                Country = "Czech Republic",
                OffsetX = -5,
                OffsetY = -35
            },
            new MedalAnnotationInfo {
                Country = "Sweden",
                OffsetX = 20,
                OffsetY = -25
            },
            new MedalAnnotationInfo {
                Country = "Finland",
                Location = PieChartAnnotationLocation.Edge,
                OffsetX = 45,
                OffsetY = -85
            },
            new MedalAnnotationInfo {
                Country = "United States",
                Location = PieChartAnnotationLocation.Edge,
                OffsetX = 85,
                OffsetY = -45
            },
            new MedalAnnotationInfo {
                Country = "Great Britain",
                Location = PieChartAnnotationLocation.Edge,
                OffsetX = 81,
                OffsetY = 15
            },
            new MedalAnnotationInfo {
                Country = "Slovakia",
                Location = PieChartAnnotationLocation.Edge,
                OffsetX = 45,
                OffsetY = 80
            }
        };

        public static IEnumerable<MedalAnnotationInfo> GetAnnotationsInfo() {
            int annotationsCount = AnnotationItems.Count();
            MedalAnnotationInfo[] annotations = new MedalAnnotationInfo[annotationsCount];

            for(int i = 0; i < annotationsCount; i++) {
                MedalAnnotationInfo newAnnotation = AnnotationItems[i].ShallowCopy();
                string country = newAnnotation.Country;
                bool isEdgePosition = newAnnotation.Location == PieChartAnnotationLocation.Edge;
                MedalistData championData = IceHockeyGoldMedalistsData.First(m => m.Country == country);

                newAnnotation.Image = string.Format("../../images/flags/3x2/{0}.svg", country.Replace(" ", String.Empty));
                newAnnotation.Data = new {
                    championData.Country,
                    championData.OldCountryName,
                    championData.Gold,
                    championData.Silver,
                    championData.Bronze
                };
                newAnnotation.Color = isEdgePosition ? "#aaaaaa" : "transparent";
                newAnnotation.BorderColor = isEdgePosition ? "#aaaaaa" : "transparent";
                if(isEdgePosition) {
                    newAnnotation.ShadowOpacity = 0.3;
                }
                annotations[i] = newAnnotation;
            }

            return annotations;
        }
    }
}
