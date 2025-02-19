// Breakpoint prefix	Minimum width	CSS
// sm	40rem (640px)	@media (width >= 40rem) { ... }
// md	48rem (768px)	@media (width >= 48rem) { ... }
// lg	64rem (1024px)	@media (width >= 64rem) { ... }
// xl	80rem (1280px)	@media (width >= 80rem) { ... }
// 2xl	96rem (1536px)	@media (width >= 96rem) { ... }

export const breakpoints = {
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const colors = {
  "slate-5": "oklch(0.984 0.003 247.858)",
  "slate-10": "oklch(0.968 0.007 247.896)",
  "slate-20": "oklch(0.929 0.013 255.508)",
  "slate-30": "oklch(0.869 0.022 252.894)",
  "slate-35": "oklch(0.869 0.022 252.894)",
  "slate-40": "oklch(0.704 0.04 256.788)",
  "slate-50": "oklch(0.554 0.046 257.417)",
  "slate-60": "oklch(0.446 0.043 257.281)",
  "slate-70": "oklch(0.372 0.044 257.287)",
  "slate-80": "oklch(0.279 0.041 260.031)",
  "slate-90": "oklch(0.208 0.042 265.755)",
  "slate-95": "oklch(0.129 0.042 264.695)",
  "gray-5": "oklch(0.985 0.002 247.839)",
  "gray-10": "oklch(0.967 0.003 264.542)",
  "gray-20": "oklch(0.928 0.006 264.531)",
  "gray-30": "oklch(0.872 0.01 258.338)",
  "gray-35": "oklch(0.872 0.01 258.338)",
  "gray-40": "oklch(0.707 0.022 261.325)",
  "gray-50": "oklch(0.551 0.027 264.364)",
  "gray-60": "oklch(0.446 0.03 256.802)",
  "gray-70": "oklch(0.373 0.034 259.733)",
  "gray-80": "oklch(0.278 0.033 256.848)",
  "gray-90": "oklch(0.21 0.034 264.665)",
  "gray-95": "oklch(0.13 0.028 261.692)",
  "zinc-5": "oklch(0.985 0 0)",
  "zinc-10": "oklch(0.967 0.001 286.375)",
  "zinc-20": "oklch(0.92 0.004 286.32)",
  "zinc-30": "oklch(0.871 0.006 286.286)",
  "zinc-35": "oklch(0.871 0.006 286.286)",
  "zinc-40": "oklch(0.705 0.015 286.067)",
  "zinc-50": "oklch(0.552 0.016 285.938)",
  "zinc-60": "oklch(0.442 0.017 285.786)",
  "zinc-70": "oklch(0.37 0.013 285.805)",
  "zinc-80": "oklch(0.274 0.006 286.033)",
  "zinc-90": "oklch(0.21 0.006 285.885)",
  "zinc-95": "oklch(0.141 0.005 285.823)",
  "neutral-5": "oklch(0.985 0 0)",
  "neutral-10": "oklch(0.97 0 0)",
  "neutral-20": "oklch(0.922 0 0)",
  "neutral-30": "oklch(0.87 0 0)",
  "neutral-35": "oklch(0.87 0 0)",
  "neutral-40": "oklch(0.708 0 0)",
  "neutral-50": "oklch(0.556 0 0)",
  "neutral-60": "oklch(0.439 0 0)",
  "neutral-70": "oklch(0.371 0 0)",
  "neutral-80": "oklch(0.269 0 0)",
  "neutral-90": "oklch(0.205 0 0)",
  "neutral-95": "oklch(0.145 0 0)",
  "stone-5": "oklch(0.985 0.001 106.423)",
  "stone-10": "oklch(0.97 0.001 106.424)",
  "stone-20": "oklch(0.923 0.003 48.717)",
  "stone-30": "oklch(0.869 0.005 56.366)",
  "stone-35": "oklch(0.869 0.005 56.366)",
  "stone-40": "oklch(0.709 0.01 56.259)",
  "stone-50": "oklch(0.553 0.013 58.071)",
  "stone-60": "oklch(0.444 0.011 73.639)",
  "stone-70": "oklch(0.374 0.01 67.558)",
  "stone-80": "oklch(0.268 0.007 34.298)",
  "stone-90": "oklch(0.216 0.006 56.043)",
  "stone-95": "oklch(0.147 0.004 49.25)",
  "alert-5": "oklch(0.971 0.013 17.38)",
  "alert-10": "oklch(0.936 0.032 17.717)",
  "alert-20": "oklch(0.885 0.062 18.334)",
  "alert-30": "oklch(0.808 0.114 19.571)",
  "alert-35": "oklch(0.808 0.114 19.571)",
  "alert-40": "oklch(0.704 0.191 22.216)",
  "alert-50": "oklch(0.637 0.237 25.331)",
  "alert-60": "oklch(0.577 0.245 27.325)",
  "alert-70": "oklch(0.505 0.213 27.518)",
  "alert-80": "oklch(0.444 0.177 26.899)",
  "alert-90": "oklch(0.396 0.141 25.723)",
  "alert-95": "oklch(0.258 0.092 26.042)",
  "orange-5": "oklch(0.98 0.016 73.684)",
  "orange-10": "oklch(0.954 0.038 75.164)",
  "orange-20": "oklch(0.901 0.076 70.697)",
  "orange-30": "oklch(0.837 0.128 66.29)",
  "orange-35": "oklch(0.837 0.128 66.29)",
  "orange-40": "oklch(0.75 0.183 55.934)",
  "orange-50": "oklch(0.705 0.213 47.604)",
  "orange-60": "oklch(0.646 0.222 41.116)",
  "orange-70": "oklch(0.553 0.195 38.402)",
  "orange-80": "oklch(0.47 0.157 37.304)",
  "orange-90": "oklch(0.408 0.123 38.172)",
  "orange-95": "oklch(0.266 0.079 36.259)",
  "amber-5": "oklch(0.987 0.022 95.277)",
  "amber-10": "oklch(0.962 0.059 95.617)",
  "amber-20": "oklch(0.924 0.12 95.746)",
  "amber-30": "oklch(0.879 0.169 91.605)",
  "amber-35": "oklch(0.879 0.169 91.605)",
  "amber-40": "oklch(0.828 0.189 84.429)",
  "amber-50": "oklch(0.769 0.188 70.08)",
  "amber-60": "oklch(0.666 0.179 58.318)",
  "amber-70": "oklch(0.555 0.163 48.998)",
  "amber-80": "oklch(0.473 0.137 46.201)",
  "amber-90": "oklch(0.414 0.112 45.904)",
  "amber-95": "oklch(0.279 0.077 45.635)",
  "yellow-5": "oklch(0.987 0.026 102.212)",
  "yellow-10": "oklch(0.973 0.071 103.193)",
  "yellow-20": "oklch(0.945 0.129 101.54)",
  "yellow-30": "oklch(0.905 0.182 98.111)",
  "yellow-35": "oklch(0.905 0.182 98.111)",
  "yellow-40": "oklch(0.852 0.199 91.936)",
  "yellow-50": "oklch(0.795 0.184 86.047)",
  "yellow-60": "oklch(0.681 0.162 75.834)",
  "yellow-70": "oklch(0.554 0.135 66.442)",
  "yellow-80": "oklch(0.476 0.114 61.907)",
  "yellow-90": "oklch(0.421 0.095 57.708)",
  "yellow-95": "oklch(0.286 0.066 53.813)",
  "lime-5": "oklch(0.986 0.031 120.757)",
  "lime-10": "oklch(0.967 0.067 122.328)",
  "lime-20": "oklch(0.938 0.127 124.321)",
  "lime-30": "oklch(0.897 0.196 126.665)",
  "lime-35": "oklch(0.897 0.196 126.665)",
  "lime-40": "oklch(0.841 0.238 128.85)",
  "lime-50": "oklch(0.768 0.233 130.85)",
  "lime-60": "oklch(0.648 0.2 131.684)",
  "lime-70": "oklch(0.532 0.157 131.589)",
  "lime-80": "oklch(0.453 0.124 130.933)",
  "lime-90": "oklch(0.405 0.101 131.063)",
  "lime-95": "oklch(0.274 0.072 132.109)",
  "green-5": "oklch(0.982 0.018 155.826)",
  "green-10": "oklch(0.962 0.044 156.743)",
  "green-20": "oklch(0.925 0.084 155.995)",
  "green-30": "oklch(0.871 0.15 154.449)",
  "green-35": "oklch(0.871 0.15 154.449)",
  "green-40": "oklch(0.792 0.209 151.711)",
  "green-50": "oklch(0.723 0.219 149.579)",
  "green-60": "oklch(0.627 0.194 149.214)",
  "green-70": "oklch(0.527 0.154 150.069)",
  "green-80": "oklch(0.448 0.119 151.328)",
  "green-90": "oklch(0.393 0.095 152.535)",
  "green-95": "oklch(0.266 0.065 152.934)",
  "emerald-5": "oklch(0.979 0.021 166.113)",
  "emerald-10": "oklch(0.95 0.052 163.051)",
  "emerald-20": "oklch(0.905 0.093 164.15)",
  "emerald-30": "oklch(0.845 0.143 164.978)",
  "emerald-35": "oklch(0.845 0.143 164.978)",
  "emerald-40": "oklch(0.765 0.177 163.223)",
  "emerald-50": "oklch(0.696 0.17 162.48)",
  "emerald-60": "oklch(0.596 0.145 163.225)",
  "emerald-70": "oklch(0.508 0.118 165.612)",
  "emerald-80": "oklch(0.432 0.095 166.913)",
  "emerald-90": "oklch(0.378 0.077 168.94)",
  "emerald-95": "oklch(0.262 0.051 172.552)",
  "teal-5": "oklch(0.984 0.014 180.72)",
  "teal-10": "oklch(0.953 0.051 180.801)",
  "teal-20": "oklch(0.91 0.096 180.426)",
  "teal-30": "oklch(0.855 0.138 181.071)",
  "teal-35": "oklch(0.855 0.138 181.071)",
  "teal-40": "oklch(0.777 0.152 181.912)",
  "teal-50": "oklch(0.704 0.14 182.503)",
  "teal-60": "oklch(0.6 0.118 184.704)",
  "teal-70": "oklch(0.511 0.096 186.391)",
  "teal-80": "oklch(0.437 0.078 188.216)",
  "teal-90": "oklch(0.386 0.063 188.416)",
  "teal-95": "oklch(0.277 0.046 192.524)",
  "cyan-5": "oklch(0.984 0.019 200.873)",
  "cyan-10": "oklch(0.956 0.045 203.388)",
  "cyan-20": "oklch(0.917 0.08 205.041)",
  "cyan-30": "oklch(0.865 0.127 207.078)",
  "cyan-35": "oklch(0.865 0.127 207.078)",
  "cyan-40": "oklch(0.789 0.154 211.53)",
  "cyan-50": "oklch(0.715 0.143 215.221)",
  "cyan-60": "oklch(0.609 0.126 221.723)",
  "cyan-70": "oklch(0.52 0.105 223.128)",
  "cyan-80": "oklch(0.45 0.085 224.283)",
  "cyan-90": "oklch(0.398 0.07 227.392)",
  "cyan-95": "oklch(0.302 0.056 229.695)",
  "sky-5": "oklch(0.977 0.013 236.62)",
  "sky-10": "oklch(0.951 0.026 236.824)",
  "sky-20": "oklch(0.901 0.058 230.902)",
  "sky-30": "oklch(0.828 0.111 230.318)",
  "sky-35": "oklch(0.828 0.111 230.318)",
  "sky-40": "oklch(0.746 0.16 232.661)",
  "sky-50": "oklch(0.685 0.169 237.323)",
  "sky-60": "oklch(0.588 0.158 241.966)",
  "sky-70": "oklch(0.5 0.134 242.749)",
  "sky-80": "oklch(0.443 0.11 240.79)",
  "sky-90": "oklch(0.391 0.09 240.876)",
  "sky-95": "oklch(0.293 0.066 243.157)",
  "primary-5": "oklch(0.97 0.014 254.604)",
  "primary-10": "oklch(0.932 0.032 255.585)",
  "primary-20": "oklch(0.882 0.059 254.128)",
  "primary-30": "oklch(0.809 0.105 251.813)",
  "primary-35": "oklch(0.809 0.105 251.813)",
  "primary-40": "oklch(0.707 0.165 254.624)",
  "primary-50": "oklch(0.623 0.214 259.815)",
  "primary-60": "oklch(0.546 0.245 262.881)",
  "primary-70": "oklch(0.488 0.243 264.376)",
  "primary-80": "oklch(0.424 0.199 265.638)",
  "primary-90": "oklch(0.379 0.146 265.522)",
  "primary-95": "oklch(0.282 0.091 267.935)",
  "indigo-5": "oklch(0.962 0.018 272.314)",
  "indigo-10": "oklch(0.93 0.034 272.788)",
  "indigo-20": "oklch(0.87 0.065 274.039)",
  "indigo-30": "oklch(0.785 0.115 274.713)",
  "indigo-35": "oklch(0.785 0.115 274.713)",
  "indigo-40": "oklch(0.673 0.182 276.935)",
  "indigo-50": "oklch(0.585 0.233 277.117)",
  "indigo-60": "oklch(0.511 0.262 276.966)",
  "indigo-70": "oklch(0.457 0.24 277.023)",
  "indigo-80": "oklch(0.398 0.195 277.366)",
  "indigo-90": "oklch(0.359 0.144 278.697)",
  "indigo-95": "oklch(0.257 0.09 281.288)",
  "violet-5": "oklch(0.969 0.016 293.756)",
  "violet-10": "oklch(0.943 0.029 294.588)",
  "violet-20": "oklch(0.894 0.057 293.283)",
  "violet-30": "oklch(0.811 0.111 293.571)",
  "violet-35": "oklch(0.811 0.111 293.571)",
  "violet-40": "oklch(0.702 0.183 293.541)",
  "violet-50": "oklch(0.606 0.25 292.717)",
  "violet-60": "oklch(0.541 0.281 293.009)",
  "violet-70": "oklch(0.491 0.27 292.581)",
  "violet-80": "oklch(0.432 0.232 292.759)",
  "violet-90": "oklch(0.38 0.189 293.745)",
  "violet-95": "oklch(0.283 0.141 291.089)",
  "purple-5": "oklch(0.977 0.014 308.299)",
  "purple-10": "oklch(0.946 0.033 307.174)",
  "purple-20": "oklch(0.902 0.063 306.703)",
  "purple-30": "oklch(0.827 0.119 306.383)",
  "purple-35": "oklch(0.827 0.119 306.383)",
  "purple-40": "oklch(0.714 0.203 305.504)",
  "purple-50": "oklch(0.627 0.265 303.9)",
  "purple-60": "oklch(0.558 0.288 302.321)",
  "purple-70": "oklch(0.496 0.265 301.924)",
  "purple-80": "oklch(0.438 0.218 303.724)",
  "purple-90": "oklch(0.381 0.176 304.987)",
  "purple-95": "oklch(0.291 0.149 302.717)",
  "fuchsia-5": "oklch(0.977 0.017 320.058)",
  "fuchsia-10": "oklch(0.952 0.037 318.852)",
  "fuchsia-20": "oklch(0.903 0.076 319.62)",
  "fuchsia-30": "oklch(0.833 0.145 321.434)",
  "fuchsia-35": "oklch(0.833 0.145 321.434)",
  "fuchsia-40": "oklch(0.74 0.238 322.16)",
  "fuchsia-50": "oklch(0.667 0.295 322.15)",
  "fuchsia-60": "oklch(0.591 0.293 322.896)",
  "fuchsia-70": "oklch(0.518 0.253 323.949)",
  "fuchsia-80": "oklch(0.452 0.211 324.591)",
  "fuchsia-90": "oklch(0.401 0.17 325.612)",
  "fuchsia-95": "oklch(0.293 0.136 325.661)",
  "pink-5": "oklch(0.971 0.014 343.198)",
  "pink-10": "oklch(0.948 0.028 342.258)",
  "pink-20": "oklch(0.899 0.061 343.231)",
  "pink-30": "oklch(0.823 0.12 346.018)",
  "pink-35": "oklch(0.823 0.12 346.018)",
  "pink-40": "oklch(0.718 0.202 349.761)",
  "pink-50": "oklch(0.656 0.241 354.308)",
  "pink-60": "oklch(0.592 0.249 0.584)",
  "pink-70": "oklch(0.525 0.223 3.958)",
  "pink-80": "oklch(0.459 0.187 3.815)",
  "pink-90": "oklch(0.408 0.153 2.432)",
  "pink-95": "oklch(0.284 0.109 3.907)",
  "rose-5": "oklch(0.969 0.015 12.422)",
  "rose-10": "oklch(0.941 0.03 12.58)",
  "rose-20": "oklch(0.892 0.058 10.001)",
  "rose-30": "oklch(0.81 0.117 11.638)",
  "rose-35": "oklch(0.81 0.117 11.638)",
  "rose-40": "oklch(0.712 0.194 13.428)",
  "rose-50": "oklch(0.645 0.246 16.439)",
  "rose-60": "oklch(0.586 0.253 17.585)",
  "rose-70": "oklch(0.514 0.222 16.935)",
  "rose-80": "oklch(0.455 0.188 13.697)",
  "rose-90": "oklch(0.41 0.159 10.272)",
  "rose-95": "oklch(0.271 0.105 12.094)",
} as const;

export const allowedDOMPropKeys = new Set([
  "accept",
  "action",
  "alt",
  "autoFocus",
  "capture",
  "checked",
  "children",
  "className",
  "defaultChecked",
  "defaultValue",
  "disabled",
  "download",
  "form",
  "hidden",
  "href",
  "htmTranslate",
  "id",
  "lang",
  "max",
  "method",
  "min",
  "multiple",
  "name",
  "placeholder",
  "readOnly",
  "rel",
  "required",
  "role",
  "src",
  "step",
  "style",
  "tabIndex",
  "target",
  "title",
  "type",
  "value",

  // motion
  "initial",
  "transition",
  "transformTemplate",
  "animate",
  "variants",
  "exit",
  "viewport",

  // resize textarea
  "minRows",
  "maxRows",
  "onHeightChange",
  "cacheMeasurements",
]);
