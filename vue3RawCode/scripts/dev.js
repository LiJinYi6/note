import {resolve , dirname} from "path"
import { fileURLToPath } from "url";
import { createRequire } from "module";
import minimist from "minimist";
import esbuild from "esbuild"
const args = minimist(process.argv.slice(2))
const target = args._[0] || 'reactivity'
const format = args.f || 'iife'
const require=createRequire(import.meta.url)
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const pkg=require(`../packages/${target}/package.json`)
//入口文件
const entry = resolve(__dirname,'../packages/'+target+'/src/index.js')
esbuild.context({
    entryPoints:[entry],
    outfile:resolve(__dirname,`../packages/${target}/dist/${target}.js`),
    bundle:true,
    platform:'browser',//浏览器使用
    sourcemap:true,//可以调试
    format,//cjs,esm,iife
    globalName:pkg.buildOptions?.name,//全局变量
}).then((ctx)=>{
    console.log('start dev')
    return ctx.watch()
})