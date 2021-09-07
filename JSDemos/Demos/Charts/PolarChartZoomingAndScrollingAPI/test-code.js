testUtils.importAnd(() => 'devextreme/viz/polar_chart', () => DevExpress.viz.dxPolarChart, (dxPolarChart) => {
  const dataSource = [{ value: 0, originalValue: 0, argument: 0 }, { value: -0.08, originalValue: -0.09, argument: 0.75 }, { value: -0.19, originalValue: 0.41, argument: 1.5 }, { value: 1.33, originalValue: 0.81, argument: 2.25 }, { value: 0.76, originalValue: 1.1, argument: 3 }, { value: 0.73, originalValue: 1.32, argument: 3.75 }, { value: 2.36, originalValue: 1.5, argument: 4.5 }, { value: 1.41, originalValue: 1.66, argument: 5.25 }, { value: 1.09, originalValue: 1.79, argument: 6 }, { value: 0.99, originalValue: 1.91, argument: 6.75 }, { value: 1.89, originalValue: 2.01, argument: 7.5 }, { value: 2.89, originalValue: 2.11, argument: 8.25 }, { value: 1.65, originalValue: 2.2, argument: 9 }, { value: 2.49, originalValue: 2.28, argument: 9.75 }, { value: 2.33, originalValue: 2.35, argument: 10.5 }, { value: 3.05, originalValue: 2.42, argument: 11.25 }, { value: 2.66, originalValue: 2.48, argument: 12 }, { value: 1.59, originalValue: 2.55, argument: 12.75 }, { value: 3.12, originalValue: 2.6, argument: 13.5 }, { value: 1.83, originalValue: 2.66, argument: 14.25 }, { value: 2.85, originalValue: 2.71, argument: 15 }, { value: 1.94, originalValue: 2.76, argument: 15.75 }, { value: 3.35, originalValue: 2.8, argument: 16.5 }, { value: 3.12, originalValue: 2.85, argument: 17.25 }, { value: 3.3, originalValue: 2.89, argument: 18 }, { value: 3.7, originalValue: 2.93, argument: 18.75 }, { value: 3.56, originalValue: 2.97, argument: 19.5 }, { value: 3.35, originalValue: 3.01, argument: 20.25 }, { value: 2.26, originalValue: 3.04, argument: 21 }, { value: 3.47, originalValue: 3.08, argument: 21.75 }, { value: 3.14, originalValue: 3.11, argument: 22.5 }, { value: 2.85, originalValue: 3.15, argument: 23.25 }, { value: 2.48, originalValue: 3.18, argument: 24 }, { value: 3.37, originalValue: 3.21, argument: 24.75 }, { value: 2.62, originalValue: 3.24, argument: 25.5 }, { value: 2.65, originalValue: 3.27, argument: 26.25 }, { value: 2.37, originalValue: 3.3, argument: 27 }, { value: 3.15, originalValue: 3.32, argument: 27.75 }, { value: 3.34, originalValue: 3.35, argument: 28.5 }, { value: 3.98, originalValue: 3.38, argument: 29.25 }, { value: 3.3, originalValue: 3.4, argument: 30 }, { value: 3.39, originalValue: 3.43, argument: 30.75 }, { value: 4.4, originalValue: 3.45, argument: 31.5 }, { value: 3.49, originalValue: 3.47, argument: 32.25 }, { value: 3.77, originalValue: 3.5, argument: 33 }, { value: 4.02, originalValue: 3.52, argument: 33.75 }, { value: 3.61, originalValue: 3.54, argument: 34.5 }, { value: 3.13, originalValue: 3.56, argument: 35.25 }, { value: 3.74, originalValue: 3.58, argument: 36 }, { value: 4.65, originalValue: 3.6, argument: 36.75 }, { value: 2.79, originalValue: 3.62, argument: 37.5 }, { value: 4.48, originalValue: 3.64, argument: 38.25 }, { value: 4.22, originalValue: 3.66, argument: 39 }, { value: 2.89, originalValue: 3.68, argument: 39.75 }, { value: 4.45, originalValue: 3.7, argument: 40.5 }, { value: 4.54, originalValue: 3.72, argument: 41.25 }, { value: 4.54, originalValue: 3.74, argument: 42 }, { value: 2.87, originalValue: 3.76, argument: 42.75 }, { value: 3.98, originalValue: 3.77, argument: 43.5 }, { value: 4.07, originalValue: 3.79, argument: 44.25 }, { value: 4.58, originalValue: 3.81, argument: 45 }, { value: 3.16, originalValue: 3.82, argument: 45.75 }, { value: 4.05, originalValue: 3.84, argument: 46.5 }, { value: 4.06, originalValue: 3.86, argument: 47.25 }, { value: 4.14, originalValue: 3.87, argument: 48 }, { value: 4.14, originalValue: 3.89, argument: 48.75 }, { value: 3.51, originalValue: 3.9, argument: 49.5 }, { value: 4.33, originalValue: 3.92, argument: 50.25 }, { value: 4.61, originalValue: 3.93, argument: 51 }, { value: 4.69, originalValue: 3.95, argument: 51.75 }, { value: 3.66, originalValue: 3.96, argument: 52.5 }, { value: 3.12, originalValue: 3.97, argument: 53.25 }, { value: 3.34, originalValue: 3.99, argument: 54 }, { value: 4.32, originalValue: 4, argument: 54.75 }, { value: 3.43, originalValue: 4.02, argument: 55.5 }, { value: 5.01, originalValue: 4.03, argument: 56.25 }, { value: 4.66, originalValue: 4.04, argument: 57 }, { value: 3.37, originalValue: 4.06, argument: 57.75 }, { value: 3.88, originalValue: 4.07, argument: 58.5 }, { value: 3.23, originalValue: 4.08, argument: 59.25 }, { value: 4.89, originalValue: 4.09, argument: 60 }, { value: 4.6, originalValue: 4.11, argument: 60.75 }, { value: 3.63, originalValue: 4.12, argument: 61.5 }, { value: 4.91, originalValue: 4.13, argument: 62.25 }, { value: 3.34, originalValue: 4.14, argument: 63 }, { value: 4.65, originalValue: 4.15, argument: 63.75 }, { value: 3.98, originalValue: 4.17, argument: 64.5 }, { value: 5.3, originalValue: 4.18, argument: 65.25 }, { value: 4.08, originalValue: 4.19, argument: 66 }, { value: 4.43, originalValue: 4.2, argument: 66.75 }, { value: 3.68, originalValue: 4.21, argument: 67.5 }, { value: 4.01, originalValue: 4.22, argument: 68.25 }, { value: 4.83, originalValue: 4.23, argument: 69 }, { value: 3.49, originalValue: 4.24, argument: 69.75 }, { value: 4.05, originalValue: 4.26, argument: 70.5 }, { value: 4.54, originalValue: 4.27, argument: 71.25 }, { value: 3.83, originalValue: 4.28, argument: 72 }, { value: 5.24, originalValue: 4.29, argument: 72.75 }, { value: 4.96, originalValue: 4.3, argument: 73.5 }, { value: 4.47, originalValue: 4.31, argument: 74.25 }, { value: 3.69, originalValue: 4.32, argument: 75 }, { value: 3.61, originalValue: 4.33, argument: 75.75 }, { value: 3.76, originalValue: 4.34, argument: 76.5 }, { value: 5.08, originalValue: 4.35, argument: 77.25 }, { value: 4.06, originalValue: 4.36, argument: 78 }, { value: 5.15, originalValue: 4.37, argument: 78.75 }, { value: 3.68, originalValue: 4.38, argument: 79.5 }, { value: 4.05, originalValue: 4.39, argument: 80.25 }, { value: 4.39, originalValue: 4.39, argument: 81 }, { value: 4.78, originalValue: 4.4, argument: 81.75 }, { value: 3.94, originalValue: 4.41, argument: 82.5 }, { value: 3.9, originalValue: 4.42, argument: 83.25 }, { value: 3.76, originalValue: 4.43, argument: 84 }, { value: 4.81, originalValue: 4.44, argument: 84.75 }, { value: 4.15, originalValue: 4.45, argument: 85.5 }, { value: 4, originalValue: 4.46, argument: 86.25 }, { value: 4.98, originalValue: 4.47, argument: 87 }, { value: 4, originalValue: 4.47, argument: 87.75 }, { value: 3.69, originalValue: 4.48, argument: 88.5 }, { value: 3.52, originalValue: 4.49, argument: 89.25 }, { value: 3.98, originalValue: 4.5, argument: 90 }, { value: 5.38, originalValue: 4.51, argument: 90.75 }, { value: 4.83, originalValue: 4.52, argument: 91.5 }, { value: 4.49, originalValue: 4.52, argument: 92.25 }, { value: 5.52, originalValue: 4.53, argument: 93 }, { value: 4.24, originalValue: 4.54, argument: 93.75 }, { value: 4.66, originalValue: 4.55, argument: 94.5 }, { value: 4.55, originalValue: 4.56, argument: 95.25 }, { value: 5.35, originalValue: 4.56, argument: 96 }, { value: 5.68, originalValue: 4.57, argument: 96.75 }, { value: 4.94, originalValue: 4.58, argument: 97.5 }, { value: 3.8, originalValue: 4.59, argument: 98.25 }, { value: 5.58, originalValue: 4.6, argument: 99 }, { value: 4.65, originalValue: 4.6, argument: 99.75 }, { value: 4.82, originalValue: 4.61, argument: 100.5 }, { value: 5.03, originalValue: 4.62, argument: 101.25 }, { value: 4.9, originalValue: 4.62, argument: 102 }, { value: 4.2, originalValue: 4.63, argument: 102.75 }, { value: 4.44, originalValue: 4.64, argument: 103.5 }, { value: 4.34, originalValue: 4.65, argument: 104.25 }, { value: 4.67, originalValue: 4.65, argument: 105 }, { value: 5.16, originalValue: 4.66, argument: 105.75 }, { value: 4.6, originalValue: 4.67, argument: 106.5 }, { value: 4.37, originalValue: 4.68, argument: 107.25 }, { value: 4.9, originalValue: 4.68, argument: 108 }, { value: 5.42, originalValue: 4.69, argument: 108.75 }, { value: 3.63, originalValue: 4.7, argument: 109.5 }, { value: 4.57, originalValue: 4.7, argument: 110.25 }, { value: 4.14, originalValue: 4.71, argument: 111 }, { value: 4.61, originalValue: 4.72, argument: 111.75 }, { value: 4.13, originalValue: 4.72, argument: 112.5 }, { value: 4.59, originalValue: 4.73, argument: 113.25 }, { value: 4.63, originalValue: 4.74, argument: 114 }, { value: 5.36, originalValue: 4.74, argument: 114.75 }, { value: 4.74, originalValue: 4.75, argument: 115.5 }, { value: 4.81, originalValue: 4.76, argument: 116.25 }, { value: 4.31, originalValue: 4.76, argument: 117 }, { value: 5.49, originalValue: 4.77, argument: 117.75 }, { value: 5.4, originalValue: 4.77, argument: 118.5 }, { value: 4.68, originalValue: 4.78, argument: 119.25 }, { value: 5.05, originalValue: 4.79, argument: 120 }, { value: 4.79, originalValue: 4.79, argument: 120.75 }, { value: 4.12, originalValue: 4.8, argument: 121.5 }, { value: 4.49, originalValue: 4.81, argument: 122.25 }, { value: 4.93, originalValue: 4.81, argument: 123 }, { value: 4.53, originalValue: 4.82, argument: 123.75 }, { value: 4.89, originalValue: 4.82, argument: 124.5 }, { value: 4.98, originalValue: 4.83, argument: 125.25 }, { value: 4.29, originalValue: 4.84, argument: 126 }, { value: 5.12, originalValue: 4.84, argument: 126.75 }, { value: 5.49, originalValue: 4.85, argument: 127.5 }, { value: 5.83, originalValue: 4.85, argument: 128.25 }, { value: 4.33, originalValue: 4.86, argument: 129 }, { value: 4.36, originalValue: 4.87, argument: 129.75 }, { value: 3.74, originalValue: 4.87, argument: 130.5 }, { value: 4.08, originalValue: 4.88, argument: 131.25 }, { value: 4.28, originalValue: 4.88, argument: 132 }, { value: 5.84, originalValue: 4.89, argument: 132.75 }, { value: 5.81, originalValue: 4.89, argument: 133.5 }, { value: 5.59, originalValue: 4.9, argument: 134.25 }, { value: 4.59, originalValue: 4.91, argument: 135 }, { value: 3.91, originalValue: 4.91, argument: 135.75 }, { value: 5.64, originalValue: 4.92, argument: 136.5 }, { value: 5.4, originalValue: 4.92, argument: 137.25 }, { value: 5.55, originalValue: 4.93, argument: 138 }, { value: 5.82, originalValue: 4.93, argument: 138.75 }, { value: 4.24, originalValue: 4.94, argument: 139.5 }, { value: 4.42, originalValue: 4.94, argument: 140.25 }, { value: 5.44, originalValue: 4.95, argument: 141 }, { value: 4.83, originalValue: 4.95, argument: 141.75 }, { value: 5.5, originalValue: 4.96, argument: 142.5 }, { value: 4.36, originalValue: 4.96, argument: 143.25 }, { value: 4.2, originalValue: 4.97, argument: 144 }, { value: 3.74, originalValue: 4.98, argument: 144.75 }, { value: 4.07, originalValue: 4.98, argument: 145.5 }, { value: 5.75, originalValue: 4.99, argument: 146.25 }, { value: 4.62, originalValue: 4.99, argument: 147 }, { value: 5.54, originalValue: 5, argument: 147.75 }, { value: 5.14, originalValue: 5, argument: 148.5 }, { value: 5.74, originalValue: 5.01, argument: 149.25 }, { value: 3.99, originalValue: 5.01, argument: 150 }, { value: 4.65, originalValue: 5.02, argument: 150.75 }, { value: 4.97, originalValue: 5.02, argument: 151.5 }, { value: 5.2, originalValue: 5.03, argument: 152.25 }, { value: 4.39, originalValue: 5.03, argument: 153 }, { value: 5.16, originalValue: 5.04, argument: 153.75 }, { value: 5.24, originalValue: 5.04, argument: 154.5 }, { value: 5.39, originalValue: 5.05, argument: 155.25 }, { value: 4.31, originalValue: 5.05, argument: 156 }, { value: 4.04, originalValue: 5.05, argument: 156.75 }, { value: 5.18, originalValue: 5.06, argument: 157.5 }, { value: 4.81, originalValue: 5.06, argument: 158.25 }, { value: 4.47, originalValue: 5.07, argument: 159 }, { value: 4.84, originalValue: 5.07, argument: 159.75 }, { value: 5.13, originalValue: 5.08, argument: 160.5 }, { value: 5.33, originalValue: 5.08, argument: 161.25 }, { value: 5.55, originalValue: 5.09, argument: 162 }, { value: 4.43, originalValue: 5.09, argument: 162.75 }, { value: 6.41, originalValue: 5.1, argument: 163.5 }, { value: 5.37, originalValue: 5.1, argument: 164.25 }, { value: 6.1, originalValue: 5.11, argument: 165 }, { value: 5.17, originalValue: 5.11, argument: 165.75 }, { value: 5.53, originalValue: 5.11, argument: 166.5 }, { value: 3.83, originalValue: 5.12, argument: 167.25 }, { value: 5.94, originalValue: 5.12, argument: 168 }, { value: 5.07, originalValue: 5.13, argument: 168.75 }, { value: 5.32, originalValue: 5.13, argument: 169.5 }, { value: 4.76, originalValue: 5.14, argument: 170.25 }, { value: 4.6, originalValue: 5.14, argument: 171 }, { value: 5.42, originalValue: 5.15, argument: 171.75 }, { value: 5.79, originalValue: 5.15, argument: 172.5 }, { value: 6.23, originalValue: 5.15, argument: 173.25 }, { value: 5.34, originalValue: 5.16, argument: 174 }, { value: 4.98, originalValue: 5.16, argument: 174.75 }, { value: 5.55, originalValue: 5.17, argument: 175.5 }, { value: 6.05, originalValue: 5.17, argument: 176.25 }, { value: 4.05, originalValue: 5.18, argument: 177 }, { value: 6.19, originalValue: 5.18, argument: 177.75 }, { value: 4.15, originalValue: 5.18, argument: 178.5 }, { value: 4.41, originalValue: 5.19, argument: 179.25 }, { value: 5.35, originalValue: 5.19, argument: 180 }, { value: 4.9, originalValue: 5.2, argument: 180.75 }, { value: 6.06, originalValue: 5.2, argument: 181.5 }, { value: 4.28, originalValue: 5.21, argument: 182.25 }, { value: 4.66, originalValue: 5.21, argument: 183 }, { value: 6.3, originalValue: 5.21, argument: 183.75 }, { value: 4.21, originalValue: 5.22, argument: 184.5 }, { value: 5.5, originalValue: 5.22, argument: 185.25 }, { value: 4.74, originalValue: 5.23, argument: 186 }, { value: 5.3, originalValue: 5.23, argument: 186.75 }, { value: 4.77, originalValue: 5.23, argument: 187.5 }, { value: 5.99, originalValue: 5.24, argument: 188.25 }, { value: 5.7, originalValue: 5.24, argument: 189 }, { value: 6.37, originalValue: 5.25, argument: 189.75 }, { value: 5.68, originalValue: 5.25, argument: 190.5 }, { value: 6.68, originalValue: 5.25, argument: 191.25 }, { value: 5.81, originalValue: 5.26, argument: 192 }, { value: 3.89, originalValue: 5.26, argument: 192.75 }, { value: 3.84, originalValue: 5.27, argument: 193.5 }, { value: 6.62, originalValue: 5.27, argument: 194.25 }, { value: 5.63, originalValue: 5.27, argument: 195 }, { value: 4.73, originalValue: 5.28, argument: 195.75 }, { value: 4.78, originalValue: 5.28, argument: 196.5 }, { value: 5.23, originalValue: 5.28, argument: 197.25 }, { value: 5.95, originalValue: 5.29, argument: 198 }, { value: 3.88, originalValue: 5.29, argument: 198.75 }, { value: 5.33, originalValue: 5.3, argument: 199.5 }, { value: 3.97, originalValue: 5.3, argument: 200.25 }, { value: 5.71, originalValue: 5.3, argument: 201 }, { value: 5.82, originalValue: 5.31, argument: 201.75 }, { value: 5.32, originalValue: 5.31, argument: 202.5 }, { value: 5.8, originalValue: 5.31, argument: 203.25 }, { value: 6.69, originalValue: 5.32, argument: 204 }, { value: 5.45, originalValue: 5.32, argument: 204.75 }, { value: 5.56, originalValue: 5.33, argument: 205.5 }, { value: 6.14, originalValue: 5.33, argument: 206.25 }, { value: 5.14, originalValue: 5.33, argument: 207 }, { value: 6.61, originalValue: 5.34, argument: 207.75 }, { value: 5, originalValue: 5.34, argument: 208.5 }, { value: 4.99, originalValue: 5.34, argument: 209.25 }, { value: 6.01, originalValue: 5.35, argument: 210 }, { value: 4.82, originalValue: 5.35, argument: 210.75 }, { value: 4.92, originalValue: 5.35, argument: 211.5 }, { value: 5.43, originalValue: 5.36, argument: 212.25 }, { value: 4.06, originalValue: 5.36, argument: 213 }, { value: 5.01, originalValue: 5.36, argument: 213.75 }, { value: 5.07, originalValue: 5.37, argument: 214.5 }, { value: 4.86, originalValue: 5.37, argument: 215.25 }, { value: 5.38, originalValue: 5.38, argument: 216 }, { value: 6.92, originalValue: 5.38, argument: 216.75 }, { value: 5.47, originalValue: 5.38, argument: 217.5 }, { value: 4.65, originalValue: 5.39, argument: 218.25 }, { value: 5.42, originalValue: 5.39, argument: 219 }, { value: 5.78, originalValue: 5.39, argument: 219.75 }, { value: 5.12, originalValue: 5.4, argument: 220.5 }, { value: 5.16, originalValue: 5.4, argument: 221.25 }, { value: 4.66, originalValue: 5.4, argument: 222 }, { value: 4.04, originalValue: 5.41, argument: 222.75 }, { value: 5.29, originalValue: 5.41, argument: 223.5 }, { value: 5.66, originalValue: 5.41, argument: 224.25 }, { value: 5.01, originalValue: 5.42, argument: 225 }, { value: 6.85, originalValue: 5.42, argument: 225.75 }, { value: 5.64, originalValue: 5.42, argument: 226.5 }, { value: 4.48, originalValue: 5.43, argument: 227.25 }, { value: 5.35, originalValue: 5.43, argument: 228 }, { value: 5.99, originalValue: 5.43, argument: 228.75 }, { value: 4.88, originalValue: 5.44, argument: 229.5 }, { value: 5.92, originalValue: 5.44, argument: 230.25 }, { value: 4.58, originalValue: 5.44, argument: 231 }, { value: 5.7, originalValue: 5.45, argument: 231.75 }, { value: 4.29, originalValue: 5.45, argument: 232.5 }, { value: 4.58, originalValue: 5.45, argument: 233.25 }, { value: 5.27, originalValue: 5.46, argument: 234 }, { value: 4.65, originalValue: 5.46, argument: 234.75 }, { value: 6.7, originalValue: 5.46, argument: 235.5 }, { value: 4.23, originalValue: 5.46, argument: 236.25 }, { value: 6.15, originalValue: 5.47, argument: 237 }, { value: 5.2, originalValue: 5.47, argument: 237.75 }, { value: 4.94, originalValue: 5.47, argument: 238.5 }, { value: 4.36, originalValue: 5.48, argument: 239.25 }, { value: 5.28, originalValue: 5.48, argument: 240 }, { value: 6.93, originalValue: 5.48, argument: 240.75 }, { value: 5.14, originalValue: 5.49, argument: 241.5 }, { value: 4.13, originalValue: 5.49, argument: 242.25 }, { value: 6.31, originalValue: 5.49, argument: 243 }, { value: 4.31, originalValue: 5.5, argument: 243.75 }, { value: 6.48, originalValue: 5.5, argument: 244.5 }, { value: 5.2, originalValue: 5.5, argument: 245.25 }, { value: 5.61, originalValue: 5.51, argument: 246 }, { value: 6.03, originalValue: 5.51, argument: 246.75 }, { value: 6.36, originalValue: 5.51, argument: 247.5 }, { value: 5.88, originalValue: 5.51, argument: 248.25 }, { value: 4.73, originalValue: 5.52, argument: 249 }, { value: 5.18, originalValue: 5.52, argument: 249.75 }, { value: 5.05, originalValue: 5.52, argument: 250.5 }, { value: 6.05, originalValue: 5.53, argument: 251.25 }, { value: 3.97, originalValue: 5.53, argument: 252 }, { value: 5.71, originalValue: 5.53, argument: 252.75 }, { value: 4.92, originalValue: 5.54, argument: 253.5 }, { value: 5.67, originalValue: 5.54, argument: 254.25 }, { value: 6.63, originalValue: 5.54, argument: 255 }, { value: 5.44, originalValue: 5.54, argument: 255.75 }, { value: 4.67, originalValue: 5.55, argument: 256.5 }, { value: 6.7, originalValue: 5.55, argument: 257.25 }, { value: 6.13, originalValue: 5.55, argument: 258 }, { value: 6.36, originalValue: 5.56, argument: 258.75 }, { value: 4.43, originalValue: 5.56, argument: 259.5 }, { value: 6.57, originalValue: 5.56, argument: 260.25 }, { value: 6.96, originalValue: 5.56, argument: 261 }, { value: 6.16, originalValue: 5.57, argument: 261.75 }, { value: 5.06, originalValue: 5.57, argument: 262.5 }, { value: 5.17, originalValue: 5.57, argument: 263.25 }, { value: 5.2, originalValue: 5.58, argument: 264 }, { value: 4.89, originalValue: 5.58, argument: 264.75 }, { value: 4.79, originalValue: 5.58, argument: 265.5 }, { value: 5.31, originalValue: 5.58, argument: 266.25 }, { value: 5.43, originalValue: 5.59, argument: 267 }, { value: 5.84, originalValue: 5.59, argument: 267.75 }, { value: 4.96, originalValue: 5.59, argument: 268.5 }, { value: 5.41, originalValue: 5.6, argument: 269.25 }, { value: 5.76, originalValue: 5.6, argument: 270 }, { value: 4.5, originalValue: 5.6, argument: 270.75 }, { value: 6.86, originalValue: 5.6, argument: 271.5 }, { value: 5.66, originalValue: 5.61, argument: 272.25 }, { value: 4.95, originalValue: 5.61, argument: 273 }, { value: 5.65, originalValue: 5.61, argument: 273.75 }, { value: 4.54, originalValue: 5.61, argument: 274.5 }, { value: 4.44, originalValue: 5.62, argument: 275.25 }, { value: 4.51, originalValue: 5.62, argument: 276 }, { value: 5.68, originalValue: 5.62, argument: 276.75 }, { value: 5.53, originalValue: 5.63, argument: 277.5 }, { value: 5.54, originalValue: 5.63, argument: 278.25 }, { value: 6.91, originalValue: 5.63, argument: 279 }, { value: 4.39, originalValue: 5.63, argument: 279.75 }, { value: 5.42, originalValue: 5.64, argument: 280.5 }, { value: 4.78, originalValue: 5.64, argument: 281.25 }, { value: 5.21, originalValue: 5.64, argument: 282 }, { value: 5.41, originalValue: 5.64, argument: 282.75 }, { value: 6.29, originalValue: 5.65, argument: 283.5 }, { value: 5.72, originalValue: 5.65, argument: 284.25 }, { value: 6.19, originalValue: 5.65, argument: 285 }, { value: 5.23, originalValue: 5.66, argument: 285.75 }, { value: 5.7, originalValue: 5.66, argument: 286.5 }, { value: 5.29, originalValue: 5.66, argument: 287.25 }, { value: 6.26, originalValue: 5.66, argument: 288 }, { value: 6.23, originalValue: 5.67, argument: 288.75 }, { value: 7.12, originalValue: 5.67, argument: 289.5 }, { value: 4.73, originalValue: 5.67, argument: 290.25 }, { value: 5.37, originalValue: 5.67, argument: 291 }, { value: 6.1, originalValue: 5.68, argument: 291.75 }, { value: 4.73, originalValue: 5.68, argument: 292.5 }, { value: 4.13, originalValue: 5.68, argument: 293.25 }, { value: 5.27, originalValue: 5.68, argument: 294 }, { value: 5.07, originalValue: 5.69, argument: 294.75 }, { value: 6.01, originalValue: 5.69, argument: 295.5 }, { value: 6.09, originalValue: 5.69, argument: 296.25 }, { value: 5.61, originalValue: 5.69, argument: 297 }, { value: 6.08, originalValue: 5.7, argument: 297.75 }, { value: 6.43, originalValue: 5.7, argument: 298.5 }, { value: 4.75, originalValue: 5.7, argument: 299.25 }, { value: 6, originalValue: 5.7, argument: 300 }, { value: 5.44, originalValue: 5.71, argument: 300.75 }, { value: 5.77, originalValue: 5.71, argument: 301.5 }, { value: 4.7, originalValue: 5.71, argument: 302.25 }, { value: 7.34, originalValue: 5.71, argument: 303 }, { value: 6.44, originalValue: 5.72, argument: 303.75 }, { value: 4.82, originalValue: 5.72, argument: 304.5 }, { value: 6.09, originalValue: 5.72, argument: 305.25 }, { value: 5.14, originalValue: 5.72, argument: 306 }, { value: 6.31, originalValue: 5.73, argument: 306.75 }, { value: 6.41, originalValue: 5.73, argument: 307.5 }, { value: 5.78, originalValue: 5.73, argument: 308.25 }, { value: 6.15, originalValue: 5.73, argument: 309 }, { value: 7.55, originalValue: 5.74, argument: 309.75 }, { value: 5.05, originalValue: 5.74, argument: 310.5 }, { value: 6.04, originalValue: 5.74, argument: 311.25 }, { value: 6.76, originalValue: 5.74, argument: 312 }, { value: 4.84, originalValue: 5.75, argument: 312.75 }, { value: 5.08, originalValue: 5.75, argument: 313.5 }, { value: 7.14, originalValue: 5.75, argument: 314.25 }, { value: 6.23, originalValue: 5.75, argument: 315 }, { value: 5.07, originalValue: 5.75, argument: 315.75 }, { value: 4.9, originalValue: 5.76, argument: 316.5 }, { value: 4.43, originalValue: 5.76, argument: 317.25 }, { value: 7.13, originalValue: 5.76, argument: 318 }, { value: 5.35, originalValue: 5.76, argument: 318.75 }, { value: 5.55, originalValue: 5.77, argument: 319.5 }, { value: 4.8, originalValue: 5.77, argument: 320.25 }, { value: 5.34, originalValue: 5.77, argument: 321 }, { value: 5.75, originalValue: 5.77, argument: 321.75 }, { value: 5.03, originalValue: 5.78, argument: 322.5 }, { value: 6.53, originalValue: 5.78, argument: 323.25 }, { value: 6.5, originalValue: 5.78, argument: 324 }, { value: 4.23, originalValue: 5.78, argument: 324.75 }, { value: 5.86, originalValue: 5.79, argument: 325.5 }, { value: 6.46, originalValue: 5.79, argument: 326.25 }, { value: 6.28, originalValue: 5.79, argument: 327 }, { value: 5.71, originalValue: 5.79, argument: 327.75 }, { value: 4.86, originalValue: 5.79, argument: 328.5 }, { value: 4.05, originalValue: 5.8, argument: 329.25 }, { value: 4.69, originalValue: 5.8, argument: 330 }, { value: 5.99, originalValue: 5.8, argument: 330.75 }, { value: 6.05, originalValue: 5.8, argument: 331.5 }, { value: 5.64, originalValue: 5.81, argument: 332.25 }, { value: 5.95, originalValue: 5.81, argument: 333 }, { value: 6.37, originalValue: 5.81, argument: 333.75 }, { value: 5.31, originalValue: 5.81, argument: 334.5 }, { value: 4.74, originalValue: 5.81, argument: 335.25 }, { value: 6.39, originalValue: 5.82, argument: 336 }, { value: 6.21, originalValue: 5.82, argument: 336.75 }, { value: 6.9, originalValue: 5.82, argument: 337.5 }, { value: 5.69, originalValue: 5.82, argument: 338.25 }, { value: 7.54, originalValue: 5.83, argument: 339 }, { value: 6.75, originalValue: 5.83, argument: 339.75 }, { value: 6.77, originalValue: 5.83, argument: 340.5 }, { value: 5.16, originalValue: 5.83, argument: 341.25 }, { value: 6.02, originalValue: 5.83, argument: 342 }, { value: 7.4, originalValue: 5.84, argument: 342.75 }, { value: 4.76, originalValue: 5.84, argument: 343.5 }, { value: 3.99, originalValue: 5.84, argument: 344.25 }, { value: 6.45, originalValue: 5.84, argument: 345 }, { value: 6.95, originalValue: 5.85, argument: 345.75 }, { value: 5.98, originalValue: 5.85, argument: 346.5 }, { value: 5.98, originalValue: 5.85, argument: 347.25 }, { value: 6.46, originalValue: 5.85, argument: 348 }, { value: 5.24, originalValue: 5.85, argument: 348.75 }, { value: 6.67, originalValue: 5.86, argument: 349.5 }, { value: 5.78, originalValue: 5.86, argument: 350.25 }, { value: 6.94, originalValue: 5.86, argument: 351 }, { value: 5.36, originalValue: 5.86, argument: 351.75 }, { value: 6.88, originalValue: 5.87, argument: 352.5 }, { value: 6.67, originalValue: 5.87, argument: 353.25 }, { value: 4.68, originalValue: 5.87, argument: 354 }, { value: 4.74, originalValue: 5.87, argument: 354.75 }, { value: 6.05, originalValue: 5.87, argument: 355.5 }, { value: 5.99, originalValue: 5.88, argument: 356.25 }, { value: 7.02, originalValue: 5.88, argument: 357 }, { value: 6.33, originalValue: 5.88, argument: 357.75 }, { value: 6.24, originalValue: 5.88, argument: 358.5 }, { value: 5.1, originalValue: 5.88, argument: 359.25 }];

  // MVC data
  dataSource.forEach((item) => {
    item.Argument = item.argument;
    item.Value = item.value;
    item.OriginalValue = item.originalValue;
  });

  return testUtils
    .postponeUntilFound('#zoomedChart', 100, 10000)
    .then(() => {
      const instance = dxPolarChart.getInstance(document.querySelector('#zoomedChart'));
      instance.option('dataSource', dataSource);
      instance.option('valueAxis.visualRange', [0, 8]);
      instance.option = function () { };
    })
    .then(() => testUtils.postpone(2000));
});
