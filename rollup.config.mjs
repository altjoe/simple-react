import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      }
    ],
    plugins: [
      nodeResolve(),
      babel({
        exclude: 'node_modules/**'
      }),
      commonjs(),
      postcss()
    ],
    external: ['react', 'react-dom']
  }
];