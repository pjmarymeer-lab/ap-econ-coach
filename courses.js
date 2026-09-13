import * as microContent from './content.js?v=macro2';
import {questions as microQuestions} from './questions.js?v=macro2';
import {graphTasks as microGraphs,graphSVG as microSVG} from './graphs.js?v=macro2';
import * as macroContent from './macro-content.js?v=macro2';
import {graphTasks as macroGraphs,graphSVG as macroSVG} from './macro-graphs.js?v=macro2';
export const courses={micro:{id:'micro',title:'AP Microeconomics',short:'AP MICRO',description:'Explore choices, markets, firms and government policy.',...microContent,questions:microQuestions,graphTasks:microGraphs,graphSVG:microSVG},macro:{id:'macro',title:'AP Macroeconomics',short:'AP MACRO',description:'Connect economic indicators, national income, money and the global economy.',...macroContent,graphTasks:macroGraphs,graphSVG:macroSVG}};
export const storageKey=course=>course==='macro'?'econ-coach-macro-v1':'econ-coach-v1';
export function parseCourseRoute(hash){const [path,query]=(hash.replace(/^#/,'')||'/courses').split('?');const parts=path.split('/').filter(Boolean);const course=parts[0]==='macro'?'macro':'micro';if(parts[0]==='macro'||parts[0]==='micro')parts.shift();return {course,parts:parts.length?parts:['dashboard'],params:new URLSearchParams(query||'')};}
export function coursePath(course,path){if(path.startsWith('/courses'))return '#'+path;return '#/'+course+path;}
