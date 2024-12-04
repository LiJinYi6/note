import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  //一组 glob 模式，指示配置对象应应用于的文件。如果未指定，则配置对象适用于与任何其他配置对象匹配的所有文件
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules:{
      
    }
  }
];