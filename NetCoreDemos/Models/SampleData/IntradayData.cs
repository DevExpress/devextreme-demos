using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Intraday> IntradayData = new[] {
            new Intraday {
                Date = DateTime.Parse("2013/12/23"),
                Open = new { Value = 3563.19, Diff = 92.76 },
                High = new { Value = 3591.31, Diff = 50.34 },
                Low = new { Value = 3552.3, Diff = 129.44 },
                Close = new { Value = 3574.02, Diff = 42.83 },
                Volume = 1254340000,
                AdjClose = 3574.02,
                    DayClose = new[] {
                    new { Close = 3569.4, Date = DateTime.Parse("2013/12/23") },
                    new { Close = 3572.8, Date = DateTime.Parse("2013/12/24") },
                    new { Close = 3584.58, Date = DateTime.Parse("2013/12/26") },
                    new { Close = 3574.02, Date = DateTime.Parse("2013/12/27") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/12/16"),
                Open = new { Value = 3470.43, Diff = -45.24 },
                High = new { Value = 3540.97, Diff = 16.96 },
                Low = new { Value = 3422.86, Diff = -26.88 },
                Close = new { Value = 3531.19, Diff = 74.79 },
                Volume = 2261352000,
                AdjClose = 3531.19,
                DayClose = new[] {
                    new { Close = 3475.79, Date = DateTime.Parse("2013/12/16") },
                    new { Close = 3469.32, Date = DateTime.Parse("2013/12/17") },
                    new { Close = 3509.63, Date = DateTime.Parse("2013/12/18") },
                    new { Close = 3498.63, Date = DateTime.Parse("2013/12/19") },
                    new { Close = 3531.19, Date = DateTime.Parse("2013/12/20") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/12/09"),
                Open = new { Value = 3515.67, Diff = 19.48 },
                High = new { Value = 3524.01, Diff = 12.91 },
                Low = new { Value = 3449.74, Diff = -3.48 },
                Close = new { Value = 3456.4, Diff = -47.86 },
                Volume = 1802822000,
                AdjClose = 3456.4,
                DayClose = new[] {
                    new { Close = 3516.17, Date = DateTime.Parse("2013/12/09") },
                    new { Close = 3514.2, Date = DateTime.Parse("2013/12/10") },
                    new { Close = 3468.99, Date = DateTime.Parse("2013/12/11") },
                    new { Close = 3460.29, Date = DateTime.Parse("2013/12/12") },
                    new { Close = 3456.4, Date = DateTime.Parse("2013/12/13") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/12/02"),
                Open = new { Value = 3496.19, Diff = 62.27 },
                High = new { Value = 3511.1, Diff = 15.13 },
                Low = new { Value = 3453.22, Diff = 32.86 },
                Close = new { Value = 3504.26, Diff = 16.44 },
                Volume = 1810088000,
                AdjClose = 3504.26,
                DayClose = new[] {
                    new { Close = 3481.15, Date = DateTime.Parse("2013/12/02") },
                    new { Close = 3479.34, Date = DateTime.Parse("2013/12/03") },
                    new { Close = 3483.01, Date = DateTime.Parse("2013/12/04") },
                    new { Close = 3477.73, Date = DateTime.Parse("2013/12/05") },
                    new { Close = 3504.26, Date = DateTime.Parse("2013/12/06") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/11/25"),
                Open = new { Value = 3433.92, Diff = 10.45 },
                High = new { Value = 3495.97, Diff = 66.77 },
                Low = new { Value = 3420.36, Diff = 61.05 },
                Close = new { Value = 3487.82, Diff = 65.8 },
                Volume = 1508490000,
                AdjClose = 3487.82,
                DayClose = new[] {
                    new { Close = 3427.49, Date = DateTime.Parse("2013/11/25") },
                    new { Close = 3445.76, Date = DateTime.Parse("2013/11/26") },
                    new { Close = 3470.48, Date = DateTime.Parse("2013/11/27") },
                    new { Close = 3487.82, Date = DateTime.Parse("2013/11/29") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/11/18"),
                Open = new { Value = 3423.47, Diff = 63.64 },
                High = new { Value = 3429.2, Diff = 6.62 },
                Low = new { Value = 3359.31, Diff = 12.9 },
                Close = new { Value = 3422.02, Diff = -0.56 },
                Volume = 1742680000,
                AdjClose = 3422.02,
                DayClose = new[] {
                    new { Close = 3388.87, Date = DateTime.Parse("2013/11/18") },
                    new { Close = 3378.13, Date = DateTime.Parse("2013/11/19") },
                    new { Close = 3367.17, Date = DateTime.Parse("2013/11/20") },
                    new { Close = 3402.74, Date = DateTime.Parse("2013/11/21") },
                    new { Close = 3422.02, Date = DateTime.Parse("2013/11/22") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/11/11"),
                Open = new { Value = 3359.83, Diff = -28.87 },
                High = new { Value = 3422.58, Diff = 21.31 },
                Low = new { Value = 3346.41, Diff = 28.01 },
                Close = new { Value = 3422.58, Diff = 55.74 },
                Volume = 1812784000,
                AdjClose = 3422.58,
                DayClose = new[] {
                    new { Close = 3362.98, Date = DateTime.Parse("2013/11/11") },
                    new { Close = 3365.23, Date = DateTime.Parse("2013/11/12") },
                    new { Close = 3405.56, Date = DateTime.Parse("2013/11/13") },
                    new { Close = 3415.14, Date = DateTime.Parse("2013/11/14") },
                    new { Close = 3422.58, Date = DateTime.Parse("2013/11/15") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/11/04"),
                Open = new { Value = 3388.7, Diff = 6.52 },
                High = new { Value = 3401.27, Diff = -7.01 },
                Low = new { Value = 3318.4, Diff = -46.25 },
                Close = new { Value = 3366.84, Diff = -12.92 },
                Volume = 2011546000,
                AdjClose = 3366.84,
                DayClose = new[] {
                    new { Close = 3384.75, Date = DateTime.Parse("2013/11/04") },
                    new { Close = 3388.82, Date = DateTime.Parse("2013/11/05") },
                    new { Close = 3385.38, Date = DateTime.Parse("2013/11/06") },
                    new { Close = 3321.41, Date = DateTime.Parse("2013/11/07") },
                    new { Close = 3366.84, Date = DateTime.Parse("2013/11/08") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/10/28"),
                Open = new { Value = 3382.18, Diff = 20.42 },
                High = new { Value = 3408.28, Diff = 8.24 },
                Low = new { Value = 3364.65, Diff = 34.45 },
                Close = new { Value = 3379.76, Diff = -4.07 },
                Volume = 1962860000,
                AdjClose = 3379.76,
                DayClose = new[] {
                    new { Close = 3382.68, Date = DateTime.Parse("2013/10/28") },
                    new { Close = 3391.75, Date = DateTime.Parse("2013/10/29") },
                    new { Close = 3385.38, Date = DateTime.Parse("2013/10/30") },
                    new { Close = 3377.73, Date = DateTime.Parse("2013/10/31") },
                    new { Close = 3379.76, Date = DateTime.Parse("2013/11/01") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/10/21"),
                Open = new { Value = 3361.76, Diff = 148.38 },
                High = new { Value = 3400.04, Diff = 44.41 },
                Low = new { Value = 3330.2, Diff = 118.15 },
                Close = new { Value = 3383.83, Diff = 29.95 },
                Volume = 1952026000,
                AdjClose = 3383.83,
                DayClose = new[] {
                    new { Close = 3361.18, Date = DateTime.Parse("2013/10/21") },
                    new { Close = 3366.93, Date = DateTime.Parse("2013/10/22") },
                    new { Close = 3346.05, Date = DateTime.Parse("2013/10/23") },
                    new { Close = 3362.38, Date = DateTime.Parse("2013/10/24") },
                    new { Close = 3383.83, Date = DateTime.Parse("2013/10/25") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/10/14"),
                Open = new { Value = 3213.38, Diff = -2.39 },
                High = new { Value = 3355.63, Diff = 115.52 },
                Low = new { Value = 3212.05, Diff = 94.36 },
                Close = new { Value = 3353.88, Diff = 120.05 },
                Volume = 1772590000,
                AdjClose = 3353.88,
                DayClose = new[] {
                    new { Close = 3256.02, Date = DateTime.Parse("2013/10/14") },
                    new { Close = 3244.66, Date = DateTime.Parse("2013/10/15") },
                    new { Close = 3281.67, Date = DateTime.Parse("2013/10/16") },
                    new { Close = 3301.28, Date = DateTime.Parse("2013/10/17") },
                    new { Close = 3353.88, Date = DateTime.Parse("2013/10/18") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/10/07"),
                Open = new { Value = 3215.77, Diff = 25.37 },
                High = new { Value = 3240.11, Diff = -16.6 },
                Low = new { Value = 3117.69, Diff = -69.17 },
                Close = new { Value = 3233.83, Diff = -8.74 },
                Volume = 1891806000,
                AdjClose = 3233.83,
                DayClose = new[] {
                    new { Close = 3215.69, Date = DateTime.Parse("2013/10/07") },
                    new { Close = 3153.87, Date = DateTime.Parse("2013/10/08") },
                    new { Close = 3142.54, Date = DateTime.Parse("2013/10/09") },
                    new { Close = 3210.84, Date = DateTime.Parse("2013/10/10") },
                    new { Close = 3233.83, Date = DateTime.Parse("2013/10/11") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/09/30"),
                Open = new { Value = 3190.4, Diff = -51.92 },
                High = new { Value = 3256.71, Diff = 13.28 },
                Low = new { Value = 3186.86, Diff = -15.89 },
                Close = new { Value = 3242.57, Diff = 12.27 },
                Volume = 1793200000,
                AdjClose = 3242.57,
                DayClose = new[] {
                    new { Close = 3218.2, Date = DateTime.Parse("2013/09/30") },
                    new { Close = 3253.05, Date = DateTime.Parse("2013/10/01") },
                    new { Close = 3253.26, Date = DateTime.Parse("2013/10/02") },
                    new { Close = 3213.83, Date = DateTime.Parse("2013/10/03") },
                    new { Close = 3242.57, Date = DateTime.Parse("2013/10/04") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/09/23"),
                Open = new { Value = 3242.32, Diff = 39.13 },
                High = new { Value = 3243.43, Diff = -5.09 },
                Low = new { Value = 3202.75, Diff = 39.62 },
                Close = new { Value = 3230.3, Diff = 5.57 },
                Volume = 1775808000,
                AdjClose = 3230.3,
                DayClose = new[] {
                    new { Close = 3219.34, Date = DateTime.Parse("2013/09/23") },
                    new { Close = 3218.66, Date = DateTime.Parse("2013/09/24") },
                    new { Close = 3208.55, Date = DateTime.Parse("2013/09/25") },
                    new { Close = 3234.04, Date = DateTime.Parse("2013/09/26") },
                    new { Close = 3230.3, Date = DateTime.Parse("2013/09/27") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/09/16"),
                Open = new { Value = 3203.19, Diff = 57.17 },
                High = new { Value = 3248.52, Diff = 59.28 },
                Low = new { Value = 3163.13, Diff = 17.11 },
                Close = new { Value = 3224.73, Diff = 46.45 },
                Volume = 1839474000,
                AdjClose = 3224.73,
                DayClose = new[] {
                    new { Close = 3168.69, Date = DateTime.Parse("2013/09/16") },
                    new { Close = 3190.83, Date = DateTime.Parse("2013/09/17") },
                    new { Close = 3231.31, Date = DateTime.Parse("2013/09/18") },
                    new { Close = 3237.61, Date = DateTime.Parse("2013/09/19") },
                    new { Close = 3224.73, Date = DateTime.Parse("2013/09/20") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/09/09"),
                Open = new { Value = 3146.02, Diff = 48.37 },
                High = new { Value = 3189.24, Diff = 40.25 },
                Low = new { Value = 3146.02, Diff = 68.89 },
                Close = new { Value = 3178.28, Diff = 44.9 },
                Volume = 1668658000,
                AdjClose = 3178.28,
                DayClose = new[] {
                    new { Close = 3169.93, Date = DateTime.Parse("2013/09/09") },
                    new { Close = 3185.07, Date = DateTime.Parse("2013/09/10") },
                    new { Close = 3179.86, Date = DateTime.Parse("2013/09/11") },
                    new { Close = 3175.57, Date = DateTime.Parse("2013/09/12") },
                    new { Close = 3178.28, Date = DateTime.Parse("2013/09/13") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/09/03"),
                Open = new { Value = 3097.65, Diff = -29.36 },
                High = new { Value = 3148.99, Diff = 1.12 },
                Low = new { Value = 3077.13, Diff = 23.87 },
                Close = new { Value = 3133.38, Diff = 59.57 },
                Volume = 1670570000, AdjClose = 3133.38,
                DayClose = new[] {
                    new { Close = 3091.76, Date = DateTime.Parse("2013/09/03") },
                    new { Close = 3124.54, Date = DateTime.Parse("2013/09/04") },
                    new { Close = 3129.94, Date = DateTime.Parse("2013/09/05") },
                    new { Close = 3133.38, Date = DateTime.Parse("2013/09/06") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/08/26"),
                Open = new { Value = 3127.01, Diff = 52.63 },
                High = new { Value = 3147.87, Diff = 20.82 },
                Low = new { Value = 3053.26, Diff = -8.16 },
                Close = new { Value = 3073.81, Diff = -50.46 },
                Volume = 1417628000,
                AdjClose = 3073.81,
                DayClose = new[] {
                    new { Close = 3122.67, Date = DateTime.Parse("2013/08/26") },
                    new { Close = 3059.58, Date = DateTime.Parse("2013/08/27") },
                    new { Close = 3072.17, Date = DateTime.Parse("2013/08/28") },
                    new { Close = 3093.36, Date = DateTime.Parse("2013/08/29") },
                    new { Close = 3073.81, Date = DateTime.Parse("2013/08/30") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/08/19"),
                Open = new { Value = 3074.38, Diff = -32.68 },
                High = new { Value = 3127.05, Diff = -22.19 },
                Low = new { Value = 3061.42, Diff = -6.65 },
                Close = new { Value = 3124.27, Diff = 50.36 },
                Volume = 1305026000, AdjClose = 3124.27,
                DayClose = new[] {
                    new { Close = 3069.76, Date = DateTime.Parse("2013/08/19") },
                    new { Close = 3082.17, Date = DateTime.Parse("2013/08/20") },
                    new { Close = 3071.47, Date = DateTime.Parse("2013/08/21") },
                    new { Close = 3101.82, Date = DateTime.Parse("2013/08/22") },
                    new { Close = 3124.27, Date = DateTime.Parse("2013/08/23") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/08/12"),
                Open = new { Value = 3107.06, Diff = -29.71 },
                High = new { Value = 3149.24, Diff = 3.99 },
                Low = new { Value = 3068.07, Diff = -28.34 },
                Close = new { Value = 3073.91, Diff = -44.66 },
                Volume = 1563892000, AdjClose = 3073.91,
                DayClose = new[] {
                    new { Close = 3125.93, Date = DateTime.Parse("2013/08/12") },
                    new { Close = 3141.06, Date = DateTime.Parse("2013/08/13") },
                    new { Close = 3129.45, Date = DateTime.Parse("2013/08/14") },
                    new { Close = 3076.23, Date = DateTime.Parse("2013/08/15") },
                    new { Close = 3073.91, Date = DateTime.Parse("2013/08/16") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/08/05"),
                Open = new { Value = 3136.77, Diff = 69.29 },
                High = new { Value = 3145.25, Diff = 1.73 },
                Low = new { Value = 3096.41, Diff = 33.5 },
                Close = new { Value = 3118.57, Diff = -24.95 },
                Volume = 1565072000, AdjClose = 3118.57,
                DayClose = new[] {
                    new { Close = 3143.19, Date = DateTime.Parse("2013/08/05") },
                    new { Close = 3122.2, Date = DateTime.Parse("2013/08/06") },
                    new { Close = 3118.69, Date = DateTime.Parse("2013/08/07") },
                    new { Close = 3130.13, Date = DateTime.Parse("2013/08/08") },
                    new { Close = 3118.57, Date = DateTime.Parse("2013/08/09") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/07/29"),
                Open = new { Value = 3067.48, Diff = 5.98 },
                High = new { Value = 3143.52, Diff = 67.29 },
                Low = new { Value = 3062.91, Diff = 33.84 },
                Close = new { Value = 3143.52, Diff = 67.29 },
                Volume = 1759648000, AdjClose = 3143.52,
                DayClose = new[] {
                    new { Close = 3068.95, Date = DateTime.Parse("2013/07/29") },
                    new { Close = 3085.33, Date = DateTime.Parse("2013/07/30") },
                    new { Close = 3090.19, Date = DateTime.Parse("2013/07/31") },
                    new { Close = 3126.3, Date = DateTime.Parse("2013/08/01") },
                    new { Close = 3143.52, Date = DateTime.Parse("2013/08/02") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/07/22"),
                Open = new { Value = 3061.5, Diff = -15.52 },
                High = new { Value = 3076.23, Diff = -14.98 },
                Low = new { Value = 3029.07, Diff = -6.92 },
                Close = new { Value = 3076.23, Diff = 31.3 },
                Volume = 1796810000, AdjClose = 3076.23,
                DayClose = new[] {
                    new { Close = 3055.23, Date = DateTime.Parse("2013/07/22") },
                    new { Close = 3031.4, Date = DateTime.Parse("2013/07/23") },
                    new { Close = 3041.16, Date = DateTime.Parse("2013/07/24") },
                    new { Close = 3061.67, Date = DateTime.Parse("2013/07/25") },
                    new { Close = 3076.23, Date = DateTime.Parse("2013/07/26") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/07/15"),
                Open = new { Value = 3077.02, Diff = 100.41 },
                High = new { Value = 3091.21, Diff = 12.14 },
                Low = new { Value = 3035.99, Diff = 80.62 },
                Close = new { Value = 3044.93, Diff = -34.14 },
                Volume = 1621772000, AdjClose = 3044.93,
                DayClose = new[] {
                    new { Close = 3079.85, Date = DateTime.Parse("2013/07/15") },
                    new { Close = 3077.47, Date = DateTime.Parse("2013/07/16") },
                    new { Close = 3085.28, Date = DateTime.Parse("2013/07/17") },
                    new { Close = 3077.82, Date = DateTime.Parse("2013/07/18") },
                    new { Close = 3044.93, Date = DateTime.Parse("2013/07/19") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/07/08"),
                Open = new { Value = 2976.61, Diff = 43.13 },
                High = new { Value = 3079.07, Diff = 115.25 },
                Low = new { Value = 2955.37, Diff = 41.89 },
                Close = new { Value = 3079.07, Diff = 115.85 },
                Volume = 1616522000, AdjClose = 3079.07,
                DayClose = new[] {
                    new { Close = 2966.13, Date = DateTime.Parse("2013/07/08") },
                    new { Close = 2984.32, Date = DateTime.Parse("2013/07/09") },
                    new { Close = 3000.66, Date = DateTime.Parse("2013/07/10") },
                    new { Close = 3059.46, Date = DateTime.Parse("2013/07/11") },
                    new { Close = 3079.07, Date = DateTime.Parse("2013/07/12") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/07/01"),
                Open = new { Value = 2933.48, Diff = 80.83 },
                High = new { Value = 2963.82, Diff = 36.33 },
                Low = new { Value = 2913.48, Diff = 88.3 },
                Close = new { Value = 2963.22, Diff = 53.62 },
                Volume = 1365580000, AdjClose = 2963.22,
                DayClose = new[] {
                    new { Close = 2927.35, Date = DateTime.Parse("2013/07/01") },
                    new { Close = 2929.63, Date = DateTime.Parse("2013/07/02") },
                    new { Close = 2941.41, Date = DateTime.Parse("2013/07/03") },
                    new { Close = 2963.22, Date = DateTime.Parse("2013/07/05") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/06/24"),
                Open = new { Value = 2852.65, Diff = -114.68 },
                High = new { Value = 2927.49, Diff = -74.4 },
                Low = new { Value = 2825.18, Diff = -28.51 },
                Close = new { Value = 2909.6, Diff = 31.66 },
                Volume = 2135946000, AdjClose = 2909.6,
                DayClose = new[] {
                    new { Close = 2848.2, Date = DateTime.Parse("2013/06/24") },
                    new { Close = 2866.5, Date = DateTime.Parse("2013/06/25") },
                    new { Close = 2893.85, Date = DateTime.Parse("2013/06/26") },
                    new { Close = 2906.84, Date = DateTime.Parse("2013/06/27") },
                    new { Close = 2909.6, Date = DateTime.Parse("2013/06/28") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/06/17"),
                Open = new { Value = 2967.33, Diff = -27.7 },
                High = new { Value = 3001.89, Diff = -2.78 },
                Low = new { Value = 2853.69, Diff = -60.51 },
                Close = new { Value = 2877.94, Diff = -65.92 },
                Volume = 1973904000, AdjClose = 2877.94,
                DayClose = new[] {
                    new { Close = 2971.26, Date = DateTime.Parse("2013/06/17") },
                    new { Close = 2996.09, Date = DateTime.Parse("2013/06/18") },
                    new { Close = 2959.5, Date = DateTime.Parse("2013/06/19") },
                    new { Close = 2890.33, Date = DateTime.Parse("2013/06/20") },
                    new { Close = 2877.94, Date = DateTime.Parse("2013/06/21") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/06/10"),
                Open = new { Value = 2995.03, Diff = 10.44 },
                High = new { Value = 3004.67, Diff = -2.63 },
                Low = new { Value = 2914.2, Diff = 2.26 },
                Close = new { Value = 2943.86, Diff = -47.01 },
                Volume = 1557972000, AdjClose = 2943.86,
                DayClose = new[] {
                    new { Close = 2990.49, Date = DateTime.Parse("2013/06/10") },
                    new { Close = 2959.84, Date = DateTime.Parse("2013/06/11") },
                    new { Close = 2926.14, Date = DateTime.Parse("2013/06/12") },
                    new { Close = 2962.9, Date = DateTime.Parse("2013/06/13") },
                    new { Close = 2943.86, Date = DateTime.Parse("2013/06/14") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/06/03"),
                Open = new { Value = 2984.59, Diff = -39.79 },
                High = new { Value = 3007.3, Diff = -29.7 },
                Low = new { Value = 2911.94, Diff = -67.96 },
                Close = new { Value = 2990.87, Diff = 9.11 },
                Volume = 1837828000, AdjClose = 2990.87,
                DayClose = new[] {
                    new { Close = 2990.79, Date = DateTime.Parse("2013/06/03") },
                    new { Close = 2973.69, Date = DateTime.Parse("2013/06/04") },
                    new { Close = 2937.14, Date = DateTime.Parse("2013/06/05") },
                    new { Close = 2950.3, Date = DateTime.Parse("2013/06/06") },
                    new { Close = 2990.87, Date = DateTime.Parse("2013/06/07") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/05/28"),
                Open = new { Value = 3024.38, Diff = 5.1 },
                High = new { Value = 3037, Diff = -16.51 },
                Low = new { Value = 2979.9, Diff = 14.6 },
                Close = new { Value = 2981.76, Diff = -9.26 },
                Volume = 1812077500, AdjClose = 2981.76,
                DayClose = new[] {
                    new { Close = 3011.94, Date = DateTime.Parse("2013/05/28") },
                    new { Close = 2994.82, Date = DateTime.Parse("2013/05/29") },
                    new { Close = 3011.83, Date = DateTime.Parse("2013/05/30") },
                    new { Close = 2981.76, Date = DateTime.Parse("2013/05/31") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/05/20"),
                Open = new { Value = 3019.28, Diff = 46.32 },
                High = new { Value = 3053.51, Diff = 24.55 },
                Low = new { Value = 2965.3, Diff = -6.43 },
                Close = new { Value = 2991.02, Diff = -37.94 },
                Volume = 1794250000, AdjClose = 2991.02,
                DayClose = new[] {
                    new { Close = 3020.97, Date = DateTime.Parse("2013/05/20") },
                    new { Close = 3026.45, Date = DateTime.Parse("2013/05/21") },
                    new { Close = 2999.13, Date = DateTime.Parse("2013/05/22") },
                    new { Close = 2991.45, Date = DateTime.Parse("2013/05/23") },
                    new { Close = 2991.02, Date = DateTime.Parse("2013/05/24") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/05/13"),
                Open = new { Value = 2972.96, Diff = 24.06 },
                High = new { Value = 3028.96, Diff = 47.94 },
                Low = new { Value = 2971.73, Diff = 29.48 },
                Close = new { Value = 3028.96, Diff = 47.94 },
                Volume = 1810862000, AdjClose = 3028.96,
                DayClose = new[] {
                    new { Close = 2982.09, Date = DateTime.Parse("2013/05/13") },
                    new { Close = 2996.05, Date = DateTime.Parse("2013/05/14") },
                    new { Close = 3002.62, Date = DateTime.Parse("2013/05/15") },
                    new { Close = 2999.34, Date = DateTime.Parse("2013/05/16") },
                    new { Close = 3028.96, Date = DateTime.Parse("2013/05/17") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/05/06"),
                Open = new { Value = 2948.9, Diff = 99.36 },
                High = new { Value = 2981.02, Diff = 28.8 },
                Low = new { Value = 2942.25, Diff = 93.21 },
                Close = new { Value = 2981.02, Diff = 36.43 },
                Volume = 1696512000, AdjClose = 2981.02,
                DayClose = new[] {
                    new { Close = 2955.36, Date = DateTime.Parse("2013/05/06") },
                    new { Close = 2952.88, Date = DateTime.Parse("2013/05/07") },
                    new { Close = 2968.24, Date = DateTime.Parse("2013/05/08") },
                    new { Close = 2961.12, Date = DateTime.Parse("2013/05/09") },
                    new { Close = 2981.02, Date = DateTime.Parse("2013/05/10") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/04/29"),
                Open = new { Value = 2849.54, Diff = 57.77 },
                High = new { Value = 2952.22, Diff = 91.53 },
                Low = new { Value = 2849.04, Diff = 68.22 },
                Close = new { Value = 2944.59, Diff = 104.04 },
                Volume = 1793206000, AdjClose = 2944.59,
                DayClose = new[] {
                    new { Close = 2866.95, Date = DateTime.Parse("2013/04/29") },
                    new { Close = 2887.44, Date = DateTime.Parse("2013/04/30") },
                    new { Close = 2873.35, Date = DateTime.Parse("2013/05/01") },
                    new { Close = 2911.14, Date = DateTime.Parse("2013/05/02") },
                    new { Close = 2944.59, Date = DateTime.Parse("2013/05/03") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/04/22"),
                Open = new { Value = 2791.77, Diff = -49.49 },
                High = new { Value = 2860.69, Diff = 11.53 },
                Low = new { Value = 2780.82, Diff = 49.85 },
                Close = new { Value = 2840.55, Diff = 60.09 },
                Volume = 1757180000, AdjClose = 2840.55,
                DayClose = new[] {
                    new { Close = 2810.07, Date = DateTime.Parse("2013/04/22") },
                    new { Close = 2835.37, Date = DateTime.Parse("2013/04/23") },
                    new { Close = 2834.12, Date = DateTime.Parse("2013/04/24") },
                    new { Close = 2848.66, Date = DateTime.Parse("2013/04/25") },
                    new { Close = 2840.55, Date = DateTime.Parse("2013/04/26") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/04/15"),
                Open = new { Value = 2841.26, Diff = 68.96 },
                High = new { Value = 2849.16, Diff = -14.5 },
                Low = new { Value = 2730.97, Diff = -33.37 },
                Close = new { Value = 2780.46, Diff = -76.02 },
                Volume = 1740460000, AdjClose = 2780.46,
                DayClose = new[] {
                    new { Close = 2797.47, Date = DateTime.Parse("2013/04/15") },
                    new { Close = 2838.41, Date = DateTime.Parse("2013/04/16") },
                    new { Close = 2781.98, Date = DateTime.Parse("2013/04/17") },
                    new { Close = 2741.95, Date = DateTime.Parse("2013/04/18") },
                    new { Close = 2780.46, Date = DateTime.Parse("2013/04/19") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/04/08"),
                Open = new { Value = 2772.3, Diff = -47.48 },
                High = new { Value = 2863.66, Diff = 35.02 },
                Low = new { Value = 2764.34, Diff = 20.08 },
                Close = new { Value = 2856.48, Diff = 84.73 },
                Volume = 1578374000, AdjClose = 2856.48,
                DayClose = new[] {
                    new { Close = 2786.13, Date = DateTime.Parse("2013/04/08") },
                    new { Close = 2804.67, Date = DateTime.Parse("2013/04/09") },
                    new { Close = 2859.21, Date = DateTime.Parse("2013/04/10") },
                    new { Close = 2859.07, Date = DateTime.Parse("2013/04/11") },
                    new { Close = 2856.48, Date = DateTime.Parse("2013/04/12") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/04/01"),
                Open = new { Value = 2819.78, Diff = 9.03 },
                High = new { Value = 2828.64, Diff = 7.97 },
                Low = new { Value = 2744.26, Diff = -34.52 },
                Close = new { Value = 2771.75, Diff = -46.94 },
                Volume = 1589176000, AdjClose = 2771.75,
                DayClose = new[] {
                    new { Close = 2797.07, Date = DateTime.Parse("2013/04/01") },
                    new { Close = 2820.62, Date = DateTime.Parse("2013/04/02") },
                    new { Close = 2795.04, Date = DateTime.Parse("2013/04/03") },
                    new { Close = 2794.92, Date = DateTime.Parse("2013/04/04") },
                    new { Close = 2771.75, Date = DateTime.Parse("2013/04/05") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/03/25"),
                Open = new { Value = 2810.75, Diff = 39.22 },
                High = new { Value = 2820.67, Diff = 9.19 },
                Low = new { Value = 2778.78, Diff = 15.66 },
                Close = new { Value = 2818.69, Diff = 17.88 },
                Volume = 1541860000, AdjClose = 2818.69,
                DayClose = new[] {
                    new { Close = 2789.45, Date = DateTime.Parse("2013/03/25") },
                    new { Close = 2806.5, Date = DateTime.Parse("2013/03/26") },
                    new { Close = 2809.98, Date = DateTime.Parse("2013/03/27") },
                    new { Close = 2818.69, Date = DateTime.Parse("2013/03/28") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/03/18"),
                Open = new { Value = 2771.53, Diff = -26.6 },
                High = new { Value = 2811.48, Diff = -0.81 },
                Low = new { Value = 2763.12, Diff = -24.6 },
                Close = new { Value = 2800.81, Diff = 1.4 },
                Volume = 1642786000, AdjClose = 2800.81,
                DayClose = new[] {
                    new { Close = 2792.3, Date = DateTime.Parse("2013/03/18") },
                    new { Close = 2787.27, Date = DateTime.Parse("2013/03/19") },
                    new { Close = 2805.91, Date = DateTime.Parse("2013/03/20") },
                    new { Close = 2774.85, Date = DateTime.Parse("2013/03/21") },
                    new { Close = 2800.81, Date = DateTime.Parse("2013/03/22") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/03/11"),
                Open = new { Value = 2798.13, Diff = 59.92 },
                High = new { Value = 2812.29, Diff = -0.44 },
                Low = new { Value = 2787.72, Diff = 52.8 },
                Close = new { Value = 2799.41, Diff = -4.7 },
                Volume = 1767280000, AdjClose = 2799.41,
                DayClose = new[] {
                    new { Close = 2811.86, Date = DateTime.Parse("2013/03/11") },
                    new { Close = 2800.81, Date = DateTime.Parse("2013/03/12") },
                    new { Close = 2798.68, Date = DateTime.Parse("2013/03/13") },
                    new { Close = 2807.3, Date = DateTime.Parse("2013/03/14") },
                    new { Close = 2799.41, Date = DateTime.Parse("2013/03/15") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/03/04"),
                Open = new { Value = 2738.21, Diff = -17.98 },
                High = new { Value = 2812.73, Diff = 48.77 },
                Low = new { Value = 2734.92, Diff = 45.09 },
                Close = new { Value = 2804.11, Diff = 56.36 },
                Volume = 1732232000, AdjClose = 2804.11,
                DayClose = new[] {
                    new { Close = 2759.53, Date = DateTime.Parse("2013/03/04") },
                    new { Close = 2799.25, Date = DateTime.Parse("2013/03/05") },
                    new { Close = 2792.56, Date = DateTime.Parse("2013/03/06") },
                    new { Close = 2799.49, Date = DateTime.Parse("2013/03/07") },
                    new { Close = 2804.11, Date = DateTime.Parse("2013/03/08") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/02/25"),
                Open = new { Value = 2756.19, Diff = -14.51 },
                High = new { Value = 2763.96, Diff = -18.9 },
                Low = new { Value = 2689.83, Diff = -10.49 },
                Close = new { Value = 2747.75, Diff = 10.47 },
                Volume = 1879756000, AdjClose = 2747.75,
                DayClose = new[] {
                    new { Close = 2700.97, Date = DateTime.Parse("2013/02/25") },
                    new { Close = 2713.02, Date = DateTime.Parse("2013/02/26") },
                    new { Close = 2741.26, Date = DateTime.Parse("2013/02/27") },
                    new { Close = 2738.58, Date = DateTime.Parse("2013/02/28") },
                    new { Close = 2747.75, Date = DateTime.Parse("2013/03/01") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/02/19"),
                Open = new { Value = 2770.7, Diff = -3.74 },
                High = new { Value = 2782.86, Diff = -0.33 },
                Low = new { Value = 2700.32, Diff = -56.11 },
                Close = new { Value = 2737.28, Diff = -27.39 },
                Volume = 1869942500, AdjClose = 2737.28,
                DayClose = new[] {
                    new { Close = 2782.86, Date = DateTime.Parse("2013/02/19") },
                    new { Close = 2739.99, Date = DateTime.Parse("2013/02/20") },
                    new { Close = 2711.51, Date = DateTime.Parse("2013/02/21") },
                    new { Close = 2737.28, Date = DateTime.Parse("2013/02/22") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/02/11"),
                Open = new { Value = 2774.44, Diff = 25.04 },
                High = new { Value = 2783.19, Diff = 3.06 },
                Low = new { Value = 2756.43, Diff = 40.92 },
                Close = new { Value = 2764.67, Diff = -10.89 },
                Volume = 1788838000, AdjClose = 2764.67,
                DayClose = new[] {
                    new { Close = 2774.64, Date = DateTime.Parse("2013/02/11") },
                    new { Close = 2762.62, Date = DateTime.Parse("2013/02/12") },
                    new { Close = 2773.77, Date = DateTime.Parse("2013/02/13") },
                    new { Close = 2771.43, Date = DateTime.Parse("2013/02/14") },
                    new { Close = 2764.67, Date = DateTime.Parse("2013/02/15") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/02/04"),
                Open = new { Value = 2749.4, Diff = 11.78 },
                High = new { Value = 2780.13, Diff = 11.5 },
                Low = new { Value = 2715.51, Diff = -7.01 },
                Close = new { Value = 2775.56, Diff = 11.6 },
                Volume = 1960002000, AdjClose = 2775.56,
                DayClose = new[] {
                    new { Close = 2715.68, Date = DateTime.Parse("2013/02/04") },
                    new { Close = 2754.99, Date = DateTime.Parse("2013/02/05") },
                    new { Close = 2746.35, Date = DateTime.Parse("2013/02/06") },
                    new { Close = 2746.5, Date = DateTime.Parse("2013/02/07") },
                    new { Close = 2775.56, Date = DateTime.Parse("2013/02/08") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/01/28"),
                Open = new { Value = 2737.62, Diff = -6.65 },
                High = new { Value = 2768.63, Diff = -0.68 },
                Low = new { Value = 2722.52, Diff = 2.69 },
                Close = new { Value = 2763.96, Diff = 27.23 },
                Volume = 2040876000, AdjClose = 2763.96,
                DayClose = new[] {
                    new { Close = 2742.43, Date = DateTime.Parse("2013/01/28") },
                    new { Close = 2743.58, Date = DateTime.Parse("2013/01/29") },
                    new { Close = 2738.71, Date = DateTime.Parse("2013/01/30") },
                    new { Close = 2731.53, Date = DateTime.Parse("2013/01/31") },
                    new { Close = 2763.96, Date = DateTime.Parse("2013/02/01") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/01/22"),
                Open = new { Value = 2744.27, Diff = 10.81 },
                High = new { Value = 2769.31, Diff = 12.63 },
                Low = new { Value = 2719.83, Diff = 9.03 },
                Close = new { Value = 2736.73, Diff = -6.51 },
                Volume = 1864040000, AdjClose = 2736.73,
                DayClose = new[] {
                    new { Close = 2746.19, Date = DateTime.Parse("2013/01/22") },
                    new { Close = 2762.17, Date = DateTime.Parse("2013/01/23") },
                    new { Close = 2723.53, Date = DateTime.Parse("2013/01/24") },
                    new { Close = 2736.73, Date = DateTime.Parse("2013/01/25") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/01/14"),
                Open = new { Value = 2733.46, Diff = 20.02 },
                High = new { Value = 2756.68, Diff = 7.32 },
                Low = new { Value = 2710.8, Diff = 7.05 },
                Close = new { Value = 2743.24, Diff = -5.02 },
                Volume = 1809576000, AdjClose = 2743.24,
                DayClose = new[] {
                    new { Close = 2735.7, Date = DateTime.Parse("2013/01/14") },
                    new { Close = 2722.98, Date = DateTime.Parse("2013/01/15") },
                    new { Close = 2734.73, Date = DateTime.Parse("2013/01/16") },
                    new { Close = 2747.15, Date = DateTime.Parse("2013/01/17") },
                    new { Close = 2743.24, Date = DateTime.Parse("2013/01/18") }
                }
            },
            new Intraday {
                Date = DateTime.Parse("2013/01/07"),
                Open = new { Value = 2713.44, Diff = -14.23 },
                High = new { Value = 2749.36, Diff = -1.46 },
                Low = new { Value = 2703.75, Diff = -12.29 },
                Close = new { Value = 2748.26, Diff = 23.77 },
                Volume = 1741254000, AdjClose = 2748.26,
                DayClose = new[] {
                    new { Close = 2724.22, Date = DateTime.Parse("2013/01/07") },
                    new { Close = 2718.72, Date = DateTime.Parse("2013/01/08") },
                    new { Close = 2727.65, Date = DateTime.Parse("2013/01/09") },
                    new { Close = 2744.18, Date = DateTime.Parse("2013/01/10") },
                    new { Close = 2748.26, Date = DateTime.Parse("2013/01/11") }
                }
            }
        };
    }
}
